const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { JSDOM } = require("jsdom");

const SOURCE = fs.readFileSync(path.join(__dirname, "..", "dist", "solax-fve-card.js"), "utf8");

function boot() {
  const dom = new JSDOM("<!doctype html><html><body></body></html>", { runScripts: "dangerously", url: "http://localhost/lovelace/0" });
  const script = dom.window.document.createElement("script");
  script.textContent = SOURCE;
  dom.window.document.body.appendChild(script);
  return dom.window;
}

const s = (state, attributes) => ({ state: String(state), attributes: attributes || {} });

function baseStates(extra) {
  return Object.assign(
    {
      "sensor.solax_pv_power_1": s(4200),
      "sensor.solax_pv_power_2": s(1800),
      "sensor.solax_pv_power_total": s(6000),
      "sensor.solax_today_s_solar_energy": s(21.4),
      "sensor.solax_run_mode": s("Normal Mode"),
      "sensor.solax_inverter_power": s(5100),
      "sensor.solax_energy_dashboard_solax_grid_power": s(-1500),
      "sensor.solax_battery_power_charge": s(900),
      "sensor.solax_battery_capacity": s(64, { unit_of_measurement: "%" }),
      "sensor.solax_bms_battery_capacity": s(11520, { unit_of_measurement: "Wh" }),
      "number.solax_selfuse_discharge_min_soc": s(15, { min: 10, max: 100, step: 1 }),
      "number.solax_battery_charge_upper_soc": s(100, { min: 10, max: 100, step: 1 }),
      "sensor.solax_energy_dashboard_solax_home_consumption_power": s(3600),
      "sensor.solax_wallbox_charge_power_total": s(0),
      "sensor.solax_wallbox_run_mode": s("Available"),
      "select.solax_wallbox_charge_mode": s("Eco", { options: ["Fast", "Eco", "Green"] }),
      "select.solax_wallbox_control_command": s("Start Charging", { options: ["Start Charging", "Stop Charging"] }),
    },
    extra || {}
  );
}

function makeHass(lang, extra) {
  const calls = [];
  return {
    states: baseStates(extra),
    language: lang,
    locale: { language: lang },
    callService: (domain, service, data) => calls.push({ domain, service, data }),
    calls,
  };
}

function render(window, config, hass) {
  const card = window.document.createElement("solax-fve-card");
  card.setConfig(config);
  window.document.body.appendChild(card);
  card.hass = hass;
  return card;
}

test("registers the card, the editor and the picker entry", () => {
  const w = boot();
  assert.ok(w.customElements.get("solax-fve-card"));
  assert.ok(w.customElements.get("solax-fve-card-editor"));
  assert.ok(w.customCards.some((c) => c.type === "solax-fve-card"));
});

test("stub config discovers solax_modbus entities by suffix", () => {
  const w = boot();
  const cfg = w.customElements.get("solax-fve-card").getStubConfig(makeHass("en"));
  assert.equal(cfg.entities.pv1_power, "sensor.solax_pv_power_1");
  assert.equal(cfg.entities.battery_soc, "sensor.solax_battery_capacity");
  assert.equal(cfg.entities.battery_capacity, "sensor.solax_bms_battery_capacity");
  assert.equal(cfg.entities.inverter_status, "sensor.solax_run_mode");
  assert.equal(cfg.entities.wallbox_status, "sensor.solax_wallbox_run_mode");
  assert.equal(cfg.entities.wallbox_mode, "select.solax_wallbox_charge_mode");
  assert.equal(cfg.entities.grid_power, "sensor.solax_energy_dashboard_solax_grid_power");
});

test("renders in English", () => {
  const w = boot();
  const hass = makeHass("en");
  const cfg = w.customElements.get("solax-fve-card").getStubConfig(hass);
  const card = render(w, cfg, hass);
  const html = card.innerHTML;
  assert.match(html, /Home energy/);
  assert.match(html, /Produced today/);
  assert.match(html, /Charging mode/);
  assert.match(html, /Normal mode/);
  assert.match(html, /6,000 W/);
});

test("renders in Slovak", () => {
  const w = boot();
  const hass = makeHass("sk");
  const cfg = w.customElements.get("solax-fve-card").getStubConfig(hass);
  const card = render(w, cfg, hass);
  const html = card.innerHTML.replace(/\u00a0|\u202f|&nbsp;/g, " ");
  assert.match(html, /Energia domu/);
  assert.match(html, /Vyrobené dnes/);
  assert.match(html, /Režim nabíjania/);
  assert.match(html, /Normálny režim/);
  assert.match(html, /6 ?000 W/);
});

test("language option overrides Home Assistant", () => {
  const w = boot();
  const hass = makeHass("en");
  const cfg = w.customElements.get("solax-fve-card").getStubConfig(hass);
  cfg.language = "sk";
  const card = render(w, cfg, hass);
  assert.match(card.innerHTML, /Energia domu/);
});

test("mode chips are ordered GREEN, ECO, FAST and followed by STOP", () => {
  const w = boot();
  const hass = makeHass("en");
  const card = render(w, w.customElements.get("solax-fve-card").getStubConfig(hass), hass);
  const chips = [...card.querySelectorAll(".sf-chip")].map((c) => c.textContent.replace(/[^A-Z]/g, ""));
  assert.deepEqual(chips, ["GREEN", "ECO", "FAST", "STOP"]);
  card.querySelector(".sf-chip-stop").onclick();
  assert.deepEqual(JSON.parse(JSON.stringify(hass.calls.pop())), { domain: "select", service: "select_option", data: { entity_id: "select.solax_wallbox_control_command", option: "Stop Charging" } });
});

const plain = (x) => JSON.parse(JSON.stringify(x));
const stoppedCommand = {
  "select.solax_wallbox_control_command": s("Stop Charging", { options: ["No Command", "Available", "Unavailable", "Stop Charging", "Start Charging"] }),
  "sensor.solax_wallbox_run_mode": s("Finishing"),
};

test("after STOP the chip turns into START, which sends Start Charging", () => {
  const w = boot();
  const hass = makeHass("en", stoppedCommand);
  const card = render(w, w.customElements.get("solax-fve-card").getStubConfig(hass), hass);
  assert.equal(card.querySelector(".sf-chip-stop"), null);
  const start = card.querySelector(".sf-chip-start");
  assert.ok(start);
  assert.match(start.textContent, /START/);
  start.onclick();
  assert.deepEqual(plain(hass.calls.pop()), { domain: "select", service: "select_option", data: { entity_id: "select.solax_wallbox_control_command", option: "Start Charging" } });
});

test("picking a charge mode while stopped also restarts charging", async () => {
  const w = boot();
  const hass = makeHass("en", stoppedCommand);
  const card = render(w, w.customElements.get("solax-fve-card").getStubConfig(hass), hass);
  card.querySelector('.sf-chip[data-mode="Green"]').onclick();
  await new Promise((r) => setTimeout(r, 10));
  assert.deepEqual(plain(hass.calls), [
    { domain: "select", service: "select_option", data: { entity_id: "select.solax_wallbox_charge_mode", option: "Green" } },
    { domain: "select", service: "select_option", data: { entity_id: "select.solax_wallbox_control_command", option: "Start Charging" } },
  ]);
});

test("STOP stays when the car charges again even if the command still says Stop", () => {
  const w = boot();
  const hass = makeHass("en", Object.assign({}, stoppedCommand, {
    "sensor.solax_wallbox_charge_power_total": s(7200),
    "sensor.solax_wallbox_run_mode": s("Charging"),
  }));
  const card = render(w, w.customElements.get("solax-fve-card").getStubConfig(hass), hass);
  assert.ok(card.querySelector(".sf-chip-stop"));
  assert.equal(card.querySelector(".sf-chip-start"), null);
});

test("STOP / START chip updates when only the command entity changes", () => {
  const w = boot();
  const hass = makeHass("en");
  const card = render(w, w.customElements.get("solax-fve-card").getStubConfig(hass), hass);
  assert.ok(card.querySelector(".sf-chip-stop"));
  const next = Object.assign({}, hass, { states: Object.assign({}, hass.states, stoppedCommand) });
  delete next.states["sensor.solax_wallbox_run_mode"];
  next.states["sensor.solax_wallbox_run_mode"] = hass.states["sensor.solax_wallbox_run_mode"];
  card.hass = next;
  assert.ok(card.querySelector(".sf-chip-start"));
});

test("close MIN and MAX SOC share one label", () => {
  const w = boot();
  const hass = makeHass("en", { "number.solax_battery_charge_upper_soc": s(15, { min: 10, max: 100, step: 1 }) });
  const card = render(w, w.customElements.get("solax-fve-card").getStubConfig(hass), hass);
  const labels = [...card.querySelectorAll(".sf-batt-mark-label")].map((e) => e.textContent);
  assert.deepEqual(labels, ["Min = Max"]);
});

test("distant MIN and MAX SOC keep separate labels", () => {
  const w = boot();
  const hass = makeHass("en", { "number.solax_battery_charge_upper_soc": s(90, { min: 10, max: 100, step: 1 }) });
  const card = render(w, w.customElements.get("solax-fve-card").getStubConfig(hass), hass);
  const labels = [...card.querySelectorAll(".sf-batt-mark-label")].map((e) => e.textContent);
  assert.deepEqual(labels, ["Min SOC", "Max SOC"]);
});

test("night mode collapses the strings", () => {
  const w = boot();
  const hass = makeHass("en", { "sensor.solax_pv_power_1": s(0), "sensor.solax_pv_power_2": s(0), "sensor.solax_pv_power_total": s(0) });
  const card = render(w, w.customElements.get("solax-fve-card").getStubConfig(hass), hass);
  assert.match(card.innerHTML, /No production/);
  assert.equal(card.querySelectorAll(".sf-panel-grid").length, 0);
});

test("inverter image element survives value updates", () => {
  const w = boot();
  const hass = makeHass("en");
  const cfg = w.customElements.get("solax-fve-card").getStubConfig(hass);
  cfg.inverter_image = "/local/inverter.png";
  const card = render(w, cfg, hass);
  const img = card.querySelector(".sf-img-layer image");
  assert.ok(img);
  card.hass = Object.assign({}, hass, { states: Object.assign({}, hass.states, { "sensor.solax_pv_power_1": s(4300) }) });
  assert.equal(card.querySelector(".sf-img-layer image"), img);
});

test("editor renders in both languages", () => {
  for (const [lang, word] of [
    ["en", "Card title"],
    ["sk", "Názov karty"],
  ]) {
    const w = boot();
    const ed = w.document.createElement("solax-fve-card-editor");
    ed.setConfig({ type: "custom:solax-fve-card" });
    ed.hass = makeHass(lang);
    assert.ok(ed.textContent.includes(word), lang);
  }
});

const tilesLoads = [
  { id: "a", label: "Boiler", icon: "🚿", color: "#e0a020", entity: "sensor.boiler_power", today: "sensor.boiler_today" },
  { id: "b", label: "Car", icon: "🚗", color: "#8e6ecb", entity: "sensor.solax_wallbox_charge_power_total" },
  { id: "c", label: "Heating", icon: "♨️", color: "#4ba3c7", entity: "sensor.heating_power" },
  { id: "d", label: "", icon: "⚡", entity: "" },
];
function tilesCard(cfgPatch, extra) {
  const w = boot();
  const hass = makeHass("en", Object.assign({
    "sensor.boiler_power": s(1200), "sensor.boiler_today": s(2.5),
    "sensor.solax_wallbox_charge_power_total": s(1000),
    "sensor.heating_power": s(0),
  }, extra || {}));
  const cfg = w.customElements.get("solax-fve-card").getStubConfig(hass);
  Object.assign(cfg, { loads: tilesLoads, loads_layout: "tiles" }, cfgPatch || {});
  return render(w, cfg, hass);
}
test("tiles layout: loads plus OTHER = home minus measured loads", () => {
  const card = tilesCard();
  const boxes = [...card.querySelectorAll(".sf-svg .sf-box")].filter((g) => g.querySelector("rect") && g.querySelector(".sf-t-label") && !g.classList.contains("sf-home"));
  const labels = boxes.map((g) => g.querySelector(".sf-t-label").textContent);
  assert.deepEqual(labels.slice(-4), ["Boiler", "Car", "Heating", "Other"]);
  const other = boxes[boxes.length - 1].querySelector(".sf-t-value").textContent.replace(/ | /g, " ");
  assert.match(other, /^1[ ,.]?400 W$/); // 3600 - 1200 - 1000 - 0
});

test("OTHER tile can be switched off and needs at least one load", () => {
  let card = tilesCard({ show: { loads_other: false } });
  assert.ok(!card.innerHTML.includes(">Other<"));
  card = tilesCard({ loads: [] });
  assert.ok(!card.innerHTML.includes(">Other<"));
});

test("OTHER never goes below zero", () => {
  const card = tilesCard({}, { "sensor.boiler_power": s(5000) });
  const html = card.innerHTML;
  const m = html.match(/>Other<\/text>\s*<text class="sf-t-value"[^>]*>([^<]*)</);
  assert.ok(m);
  assert.match(m[1], /^0 W$/);
});

test("tiles layout: one coloured arrow per running load, travelling from the house", () => {
  const card = tilesCard();
  const arrows = [...card.querySelectorAll(".sf-svg .sf-arrow-move polygon")].map((p) => p.getAttribute("fill"));
  ["#e0a020", "#8e6ecb", "#9aa0a8"].forEach((c) => assert.ok(arrows.includes(c), c));
  assert.ok(!arrows.includes("#4ba3c7"), "idle heating has no arrow");
});

test("rows layout puts at most loads_per_row loads in one row", () => {
  const card = tilesCard({ loads_layout: "rows", loads_per_row: 2 });
  const ys = new Set([...card.querySelectorAll(".sf-svg .sf-box:not(.sf-home) circle")].map((c) => c.getAttribute("cy")));
  assert.ok(ys.size >= 2);
});

test("editor sections are colour coded and show an expand marker", () => {
  const w = boot();
  const ed = w.document.createElement("solax-fve-card-editor");
  ed.setConfig({ type: "custom:solax-fve-card", loads: tilesLoads });
  ed.hass = makeHass("sk");
  const secs = [...ed.querySelectorAll("details.sf-ed-section")];
  assert.ok(secs.length >= 8);
  secs.forEach((d) => {
    assert.ok(d.style.getPropertyValue("--sec"));
    assert.ok(d.querySelector(".sf-ed-chev"));
  });
  assert.ok(ed.textContent.includes("záťaže: 4"));
  assert.ok(ed.textContent.includes("Rozloženie záťaží"));
});

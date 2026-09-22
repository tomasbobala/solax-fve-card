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

// Tests for 1.1.0: sections, forecast, stale data, self-sufficiency, phase load,
// Smart Heating, brands, tap actions, more inverters, day chart.
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { JSDOM } = require("jsdom");

const SOURCE = fs.readFileSync(path.join(__dirname, "..", "dist", "solax-fve-card.js"), "utf8");

function boot(url) {
  const dom = new JSDOM("<!doctype html><html><body></body></html>", { runScripts: "dangerously", url: url || "http://localhost/dashboard-home/0" });
  const script = dom.window.document.createElement("script");
  script.textContent = SOURCE;
  dom.window.document.body.appendChild(script);
  return dom.window;
}

const s = (state, attributes, extra) => Object.assign({ state: String(state), attributes: attributes || {} }, extra || {});

function states(extra) {
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
      "sensor.solax_energy_dashboard_solax_home_consumption_power": s(3600),
      "sensor.solax_energy_dashboard_solax_home_consumption_energy": s(12),
      "sensor.solax_today_s_import_energy": s(3),
      "sensor.solax_today_s_export_energy": s(8.56),
      "sensor.solax_measured_power_l1": s(-500),
      "sensor.solax_measured_power_l2": s(-500),
      "sensor.solax_measured_power_l3": s(-500),
      "sensor.solax_grid_voltage_l1": s(230),
      "sensor.solax_grid_voltage_l2": s(230),
      "sensor.solax_grid_voltage_l3": s(230),
    },
    extra || {},
  );
}

function makeHass(extra, more) {
  const calls = [];
  return Object.assign({ states: states(extra), language: "en", locale: { language: "en" }, callService: (domain, service, data, target) => calls.push({ domain, service, data, target }), calls }, more || {});
}

function render(w, config, hass) {
  const card = w.document.createElement("solax-fve-card");
  card.setConfig(config);
  w.document.body.appendChild(card);
  card.hass = hass;
  return card;
}

function stub(w, hass) {
  return w.customElements.get("solax-fve-card").getStubConfig(hass);
}

const txt = (el) => (el ? el.textContent.replace(/[  ]/g, " ") : "");

test("display name is FVE Card, the type stays solax-fve-card", () => {
  const w = boot();
  const entry = w.customCards.find((c) => c.type === "solax-fve-card");
  assert.equal(entry.name, "FVE Card");
});

test("sections follow `collapsed` and the defaults", () => {
  const w = boot();
  const hass = makeHass();
  const cfg = Object.assign(stub(w, hass), { collapsed: { phase_load: true, diagram: true } });
  const card = render(w, cfg, hass);
  assert.equal(card.querySelector('[data-sec="phase_load"]').open, false);
  assert.equal(card.querySelector('[data-sec="battery_settings"]').open, false, "battery settings start collapsed by default");
  assert.equal(card.querySelector('[data-sec="today"]').open, true);
  assert.ok(card.querySelector(".sf-diagram-wrap").classList.contains("sf-hidden"));
  assert.ok(!card.querySelector(".sf-diag-summary").classList.contains("hidden"));
  assert.match(txt(card.querySelector(".sf-diag-summary")), /6[ ,.]?000 W/);
  assert.match(txt(card.querySelector('[data-sec="phase_load"] .sf-fold-val')), /L\d 2\.2 A/);
});

test("toggling a section saves `collapsed` into the dashboard config (admin)", async () => {
  const w = boot("http://localhost/dashboard-home/0");
  const ws = [];
  const hass = makeHass({}, { user: { is_admin: true } });
  const cfg = stub(w, hass);
  const dash = { views: [{ title: "x", sections: [{ cards: [{ type: "markdown" }, JSON.parse(JSON.stringify(cfg))] }] }] };
  hass.callWS = async (msg) => {
    ws.push(msg);
    if (msg.type === "lovelace/config") return JSON.parse(JSON.stringify(dash));
    return null;
  };
  const card = render(w, cfg, hass);
  await card._persistSections.call(Object.assign(card, { _config: Object.assign({}, card._config, { collapsed: { chart: true } }) }));
  const save = ws.find((m) => m.type === "lovelace/config/save");
  assert.ok(save, "config saved");
  assert.equal(save.url_path, "dashboard-home");
  assert.deepEqual(JSON.parse(JSON.stringify(save.config.views[0].sections[0].cards[1].collapsed)), { chart: true });
  assert.equal(save.config.views[0].sections[0].cards[0].type, "markdown");
});

test("non-admin: section state is remembered in the browser", async () => {
  const w = boot();
  const hass = makeHass({}, { user: { is_admin: false }, callWS: async () => assert.fail("must not write the dashboard") });
  const cfg = stub(w, hass);
  const card = render(w, cfg, hass);
  card._config = Object.assign({}, card._config, { collapsed: { today: true } });
  await card._persistSections();
  const card2 = render(w, cfg, makeHass());
  assert.equal(card2.querySelector('[data-sec="today"]').open, false);
});

test("stale data: badge, banner and dimmed diagram", () => {
  const w = boot();
  const old = new Date(Date.now() - 15 * 60000).toISOString();
  const extra = {};
  Object.entries(states()).forEach(([k, v]) => (extra[k] = Object.assign({}, v, { last_updated: old })));
  const card = render(w, stub(w, makeHass()), makeHass(extra));
  assert.ok(!card.querySelector(".sf-stale-pill").classList.contains("hidden"));
  assert.match(txt(card.querySelector(".sf-stale-pill")), /15 min/);
  assert.match(txt(card.querySelector(".sf-stale-banner")), /15 min old/);
  assert.ok(card.querySelector(".sf-root").classList.contains("sf-stale"));
  const fresh = new Date().toISOString();
  extra["sensor.solax_energy_dashboard_solax_grid_power"] = s(-1400, {}, { last_updated: fresh });
  card.hass = makeHass(extra);
  assert.ok(card.querySelector(".sf-stale-pill").classList.contains("hidden"));
  assert.ok(!card.querySelector(".sf-root").classList.contains("sf-stale"));
});

test("stale data: all power entities unavailable", () => {
  const w = boot();
  const extra = {};
  Object.keys(states()).forEach((k) => (extra[k] = s("unavailable")));
  const card = render(w, stub(w, makeHass()), makeHass(extra));
  assert.match(txt(card.querySelector(".sf-stale-banner")), /unavailable/);
});

test("forecast strip: today, tomorrow, remaining and the curve", () => {
  const w = boot();
  const d0 = new Date();
  d0.setHours(0, 0, 0, 0);
  const det = [];
  for (let m = 0; m < 1440; m += 30) det.push({ period_start: new Date(d0.getTime() + m * 60000).toISOString(), pv_estimate: m > 420 && m < 1080 ? 5 : 0 });
  const extra = {
    "sensor.solcast_pv_forecast_forecast_today": s(30.5, { unit_of_measurement: "kWh", detailedForecast: det }),
    "sensor.solcast_pv_forecast_forecast_remaining_today": s(7.25, { unit_of_measurement: "kWh" }),
    "sensor.solcast_pv_forecast_forecast_tomorrow": s(12000, { unit_of_measurement: "Wh" }),
  };
  const hass = makeHass(extra);
  const cfg = stub(w, hass);
  assert.equal(cfg.entities.forecast_today, "sensor.solcast_pv_forecast_forecast_today");
  const card = render(w, cfg, hass);
  const sec = card.querySelector('[data-sec="forecast"]');
  assert.ok(!sec.classList.contains("hidden"));
  const t = txt(sec);
  assert.match(t, /21\.4 of ~30\.5 kWh today/);
  assert.match(t, /Tomorrow ~12 kWh/);
  assert.match(t, /~7\.3 kWh left|~7\.2 kWh left/);
  assert.match(t, /Solcast/);
  assert.ok(sec.querySelector(".sf-fc-svg path"), "curve drawn");
});

test("forecast strip is hidden without forecast entities", () => {
  const w = boot();
  const card = render(w, stub(w, makeHass()), makeHass());
  assert.ok(card.querySelector('[data-sec="forecast"]').classList.contains("hidden"));
});

test("self-sufficiency and self-consumption rings", () => {
  const w = boot();
  const card = render(w, stub(w, makeHass()), makeHass());
  const t = txt(card.querySelector(".sf-self"));
  assert.match(t, /75%/, "1 - 3/12");
  assert.match(t, /60%/, "1 - 8.56/21.4");
  assert.match(t, /from grid only 3\.0 kWh/);
});

test("phase load: warning and pylon badge", () => {
  const w = boot();
  const hass = makeHass({
    "sensor.solax_energy_dashboard_solax_grid_power": s(8000),
    "sensor.solax_measured_power_l1": s(-1150),
    "sensor.solax_measured_power_l2": s(-5290),
    "sensor.solax_measured_power_l3": s(-1150),
  });
  const card = render(w, Object.assign(stub(w, hass), { phase_limit_a: 25 }), hass);
  const sec = card.querySelector('[data-sec="phase_load"]');
  assert.match(txt(sec), /L2 at 92 % of the breaker/);
  assert.match(txt(sec), /↓ 23\.0 A/);
  assert.match(txt(card.querySelector(".sf-pl-badge")), /L2 23\.0 A/);
  const calm = makeHass();
  card.hass = calm;
  assert.equal(card.querySelector(".sf-pl-badge"), null);
  assert.match(txt(sec), /↑ 2\.2 A/);
});

test("Smart Heating: tile shows accumulation", () => {
  const w = boot();
  const hass = makeHass({
    "sensor.heat_power": s(1250),
    "sensor.smart_heating_obyvacka_stav": s("heating", { fve_akumulacia_ciel: 23, fve_akumulacia_max: 25 }),
    "sensor.smart_heating_kupelna_stav": s("idle", {}),
  });
  const cfg = Object.assign(stub(w, hass), {
    loads_layout: "tiles",
    loads: [{ id: "h", label: "Heating", icon: "♨️", entity: "sensor.heat_power", smart_heating: "sensor.smart_heating_obyvacka_stav, sensor.smart_heating_kupelna_stav" }],
  });
  const card = render(w, cfg, hass);
  assert.match(txt(card.querySelector(".sf-sh-text")), /☀ acc\. 23→25°/);
  assert.ok(card.querySelector(".sf-sh-badge"));
  card.hass = Object.assign({}, hass, { states: Object.assign({}, hass.states, { "sensor.smart_heating_kupelna_stav": s("heating", { fve_akumulacia_ciel: 22.5, fve_akumulacia_max: 24 }) }) });
  assert.match(txt(card.querySelector(".sf-sh-text")), /☀ 2 zones/);
});

test("more inverters: sums, ×2 badge and per-inverter line", () => {
  const w = boot();
  const hass = makeHass({ "sensor.inv2_power": s(2200), "sensor.inv2_pv": s(2300), "sensor.inv2_today": s(9.6) });
  const cfg = Object.assign(stub(w, hass), { inverters: [{ label: "Garage", inverter_power: "sensor.inv2_power", solar_power: "sensor.inv2_pv", solar_today: "sensor.inv2_today" }] });
  const card = render(w, cfg, hass);
  const t = txt(card.querySelector(".sf-svg"));
  assert.match(t, /8[ ,.]?300 W/, "solar 6000 + 2300");
  assert.match(t, /31\.0 kWh/, "21.4 + 9.6");
  assert.match(txt(card.querySelector(".sf-inv-multi")), /Inv1 5\.1 kW · Garage 2\.2 kW/);
  assert.match(txt(card.querySelector(".sf-inv-badge")), /×2/);
});

test("tap actions: navigate, perform-action and default more-info", () => {
  const w = boot();
  const hass = makeHass();
  const cfg = Object.assign(stub(w, hass), {
    tap_actions: { battery: { action: "navigate", navigation_path: "/energy" }, grid: { action: "perform-action", perform_action: "script.turn_on", target: { entity_id: "script.x" } }, home: { action: "none" } },
  });
  const card = render(w, cfg, hass);
  let moreInfo = null,
    changed = 0;
  card.addEventListener("hass-more-info", (e) => (moreInfo = e.detail.entityId));
  w.addEventListener("location-changed", () => changed++);
  card.querySelector('[data-node="battery"]').dispatchEvent(new w.Event("click"));
  assert.equal(w.location.pathname, "/energy");
  assert.equal(changed, 1);
  card.querySelector('[data-node="grid"]').dispatchEvent(new w.Event("click"));
  assert.deepEqual(JSON.parse(JSON.stringify(hass.calls.pop())), { domain: "script", service: "turn_on", data: {}, target: { entity_id: "script.x" } });
  card.querySelector('[data-node="home"]').dispatchEvent(new w.Event("click"));
  assert.equal(moreInfo, null);
  card.querySelector('[data-node="inverter"]').dispatchEvent(new w.Event("click"));
  assert.equal(moreInfo, "sensor.solax_run_mode");
});

test("brand detection: GoodWe entities and sign options", () => {
  const w = boot();
  const goodwe = {
    states: {
      "sensor.goodwe_ppv1": s(3000), "sensor.goodwe_ppv2": s(2000), "sensor.goodwe_pv_power": s(5000),
      "sensor.goodwe_active_power": s(1200), "sensor.goodwe_battery_power": s(-800), "sensor.goodwe_battery_state_of_charge": s(55),
      "sensor.goodwe_house_consumption": s(3000), "sensor.goodwe_today_s_pv_generation": s(18),
    },
    language: "en",
  };
  const cfg = stub(w, goodwe);
  assert.equal(cfg.brand, "goodwe");
  assert.equal(cfg.entities.pv1_power, "sensor.goodwe_ppv1");
  assert.equal(cfg.entities.grid_power, "sensor.goodwe_active_power");
  assert.equal(cfg.entities.battery_soc, "sensor.goodwe_battery_state_of_charge");
  assert.equal(cfg.invert_grid, true);
  assert.equal(cfg.invert_battery, true);
  assert.equal(stub(w, makeHass()).brand, "solax");
});

test("editor: brand scan fills only empty fields", () => {
  const w = boot();
  const ed = w.document.createElement("solax-fve-card-editor");
  let last = null;
  ed.addEventListener("config-changed", (e) => (last = e.detail.config));
  ed.setConfig({ type: "custom:solax-fve-card", brand: "solax", entities: { grid_power: "sensor.my_grid" } });
  ed.hass = makeHass();
  const n = ed._scanBrand();
  assert.ok(n > 5);
  assert.equal(last.entities.grid_power, "sensor.my_grid");
  assert.equal(last.entities.pv1_power, "sensor.solax_pv_power_1");
});

test("editor has the new sections and fields", () => {
  const w = boot();
  const ed = w.document.createElement("solax-fve-card-editor");
  ed.setConfig({ type: "custom:solax-fve-card", loads: [{ label: "Heating", entity: "sensor.x" }] });
  ed.hass = Object.assign(makeHass(), { language: "sk", locale: { language: "sk" } });
  const t = ed.textContent;
  ["Značka meniča", "Predpoveď výroby", "Ďalšie meniče", "Istič na fázu (A)", "Smart Heating – zóny", "github.com/tomasbobala/smart_heating", "Ťuknutie na prvky", "Sekcie karty", "Upozornenie na staré dáta"].forEach((x) =>
    assert.ok(t.includes(x), x),
  );
});

test("editor: tap action select writes tap_actions", () => {
  const w = boot();
  const ed = w.document.createElement("solax-fve-card-editor");
  let last = null;
  ed.addEventListener("config-changed", (e) => (last = e.detail.config));
  ed.setConfig({ type: "custom:solax-fve-card" });
  ed.hass = makeHass();
  const row = [...ed.querySelectorAll(".sf-ed-tap")].find((r) => r.textContent.startsWith("Battery"));
  const sel = row.querySelector("select");
  sel.value = "navigate";
  sel.onchange();
  const input = row.querySelector("input");
  input.value = "/energy";
  input.oninput();
  assert.deepEqual(JSON.parse(JSON.stringify(last.tap_actions)), { battery: { action: "navigate", navigation_path: "/energy" } });
});

test("day chart: draws statistics and the forecast", async () => {
  const w = boot();
  const asked = [];
  const hass = makeHass({}, {
    callWS: async (msg) => {
      asked.push(msg.type);
      if (msg.type !== "recorder/statistics_during_period") return {};
      const a = Date.parse(msg.start_time);
      const out = {};
      msg.statistic_ids.forEach((id) => (out[id] = [0, 1, 2, 3].map((i) => ({ start: a + i * 300000, mean: id.includes("capacity") ? 50 : 1000 + i }))));
      return out;
    },
  });
  const card = render(w, stub(w, hass), hass);
  await new Promise((r) => setTimeout(r, 20));
  assert.ok(asked.includes("recorder/statistics_during_period"));
  const svg = card.querySelector('[data-sec="chart"] .sf-ch-svg');
  assert.ok(svg, "chart svg");
  assert.ok([...svg.querySelectorAll("path")].some((p) => /^M/.test(p.getAttribute("d") || "")));
  assert.match(txt(card.querySelector('[data-sec="chart"] .sf-ch-leg')), /Production/);
});

test("day chart without websocket shows a message, not an error", () => {
  const w = boot();
  const card = render(w, stub(w, makeHass()), makeHass());
  assert.match(txt(card.querySelector('[data-sec="chart"]')), /No history/);
});

test("1.1.1: repeated updates keep the DOM nodes (no page jumps in Safari)", () => {
  const w = boot();
  const d0 = new Date();
  d0.setHours(0, 0, 0, 0);
  const det = [];
  for (let m = 0; m < 1440; m += 30) det.push({ period_start: new Date(d0.getTime() + m * 60000).toISOString(), pv_estimate: m > 420 && m < 1080 ? 5 : 0 });
  const fcStates = {
    "sensor.solcast_pv_forecast_forecast_today": s(30.5, { unit_of_measurement: "kWh", detailedForecast: det }),
    "sensor.solcast_pv_forecast_forecast_tomorrow": s(12, { unit_of_measurement: "kWh" }),
  };
  const hass1 = makeHass(fcStates);
  const card = render(w, Object.assign(stub(w, hass1), { collapsed: { diagram: true } }), hass1);
  const grab = () => [
    '[data-sec="forecast"] .sf-fold-body > *',
    '[data-sec="forecast"] .sf-fc-svg path',
    '[data-sec="phase_load"] .sf-pl-row',
    ".sf-self .sf-ring",
    ".sf-diag-summary .sf-ds-chip",
    '[data-sec="chart"] .sf-ch-empty',
  ].map((q) => {
    const el = card.querySelector(q);
    assert.ok(el, q);
    return el;
  });
  const before = grab();
  const hass2 = makeHass(
    Object.assign({}, fcStates, {
      "sensor.solax_pv_power_total": s(6400),
      "sensor.solax_today_s_solar_energy": s(21.9),
      "sensor.solax_measured_power_l1": s(-700),
      "sensor.solax_today_s_import_energy": s(3.4),
      "sensor.solax_energy_dashboard_solax_grid_power": s(-1900),
    }),
  );
  card.hass = hass2;
  const after = grab();
  before.forEach((el, i) => assert.strictEqual(after[i], el, `node ${i} kept`));
  assert.match(txt(card.querySelector(".sf-fc-done")), /21\.9/);
  assert.match(txt(card.querySelector('[data-sec="phase_load"] [data-ph="L1"]')), /3\.0 A/);
  assert.match(txt(card.querySelector(".sf-diag-summary")), /6[ ,.]?400 W/);
});

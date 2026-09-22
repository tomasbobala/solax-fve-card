const CARD_VERSION = "1.0.0";

const I18N = {
  en: {
    title: "Home energy",
    card_name: "SolaX FVE Card",
    card_description: "Animated energy-flow diagram for SolaX: PV strings, inverter, battery with controls, grid, loads and wallbox.",
    link_energy: "Energy",
    battery_settings: "Battery settings",
    phase_details: "Phase details",
    communication: "Communication",
    home: "Home",
    car: "Car",
    solar: "Solar",
    pv_short: "PV",
    today: "today",
    no_production: "No production",
    produced_today: "Produced today",
    inverter: "Inverter",
    output: "output",
    grid: "Grid",
    export: "Export",
    import: "Import",
    tariff_low_short: "LT",
    tariff_high_short: "HT",
    tariff_low: "Low tariff",
    tariff_high: "High tariff",
    tariff_enabled: "Tariff enabled",
    tariff_disabled: "Tariff disabled",
    charging: "charging",
    discharging: "discharging",
    idle: "idle",
    below_target: "below target",
    full: "full",
    to: "to",
    discharge_to: "Discharge down to (MIN SOC)",
    charge_to: "Charge up to (MAX SOC)",
    charge_mode: "Charging mode",
    charge_current: "Charging current",
    this_session: "this session",
    plugged: "plugged in",
    unplugged: "cable not connected",
    target: "target",
    car_limit: "Car charge limit",
    stop: "STOP",
    ph_grid_power: "Grid power",
    ph_grid_voltage: "Grid voltage",
    ph_inv_voltage: "Inverter voltage",
    ph_inv_current: "Inverter current",
    st_solar: "Produced today",
    st_home: "Consumed today",
    st_import: "Imported today",
    st_export: "Exported today",
    st_charged: "Charged today",
    st_discharged: "Discharged today",

    ed_language: "Language",
    ed_lang_auto: "Automatic (Home Assistant)",
    ed_title: "Card title",
    ed_title_icon: "Header icon (empty = none)",
    ed_links: "Header buttons",
    ed_links_info: "A path inside Home Assistant (e.g. /energy or /lovelace/solar) or a full https://… address.",
    ed_add_link: "+ Add button",
    ed_link_label: "Label (e.g. Energy)",
    ed_icon_color: "Icon color",
    ed_remove_link: "Remove button",
    ed_path: "Path",
    ed_solar: "Solar / strings",
    ed_pv1_label: "String 1 name",
    ed_pv2_label: "String 2 name",
    ed_inverter: "Inverter",
    ed_inverter_image: "Custom inverter image (URL, e.g. /local/inverter.png)",
    ed_inverter_power_label: "Label for inverter power (empty = none)",
    ed_battery: "Battery",
    ed_invert_battery: "Invert battery power sign (+/−)",
    ed_battery_capacity: "Battery capacity (kWh, empty = from BMS)",
    ed_runtime_target: "Target % for runtime estimate (empty = MIN SOC)",
    ed_battery_segments: "Battery segments",
    ed_grid: "Grid",
    ed_invert_grid: "Invert grid power sign (+/−)",
    ed_auto: "Automatic",
    ed_yes_invert: "Yes – invert",
    ed_no: "No",
    ed_loads: "Loads (home, boiler, car, heating, …)",
    ed_loads_info:
      '"Home" sits in the middle and the loads hang below it. By default it shows the total home consumption; in "remainder" mode the loads below are subtracted from it.',
    ed_home_mode: '"Home" node shows',
    ed_home_total: "Total home consumption",
    ed_home_remainder: "Remainder after subtracting loads",
    ed_home_label: '"Home" label',
    ed_home_icon: '"Home" icon',
    ed_add_load: "+ Add load",
    ed_load_label: "Name (e.g. Boiler)",
    ed_remove_load: "Remove load",
    ed_load_entity: "Entity (power)",
    ed_load_extra: "Additional entities to add up (comma separated)",
    ed_load_today: "Daily energy (kWh)",
    ed_load_today_extra: "Daily energy – additional entities",
    ed_load_icon_entity: "Mode-dependent icon (climate entity, optional)",
    ed_wallbox: "Wallbox",
    ed_wallbox_image: "Custom wallbox image (URL)",
    ed_wallbox_max: "Wallbox max power for the bar (W)",
    ed_display: "Display",
    ed_speed: "Animation speed",
    ed_slow: "Slow",
    ed_normal: "Normal",
    ed_fast: "Fast",
    ed_decimals: "Decimal places (kW)",
    ed_power_unit: "Power unit",
    ed_unit_auto: "Automatic (W / kW)",
    ed_colors: "Colors",

    "ent.pv1_power": "String 1 – power",
    "ent.pv1_voltage": "String 1 – voltage",
    "ent.pv1_current": "String 1 – current",
    "ent.pv2_power": "String 2 – power",
    "ent.pv2_voltage": "String 2 – voltage",
    "ent.pv2_current": "String 2 – current",
    "ent.solar_power": "Solar – total power (sum of strings)",
    "ent.solar_today": "Produced today",
    "ent.inverter_status": "Inverter – state / run mode",
    "ent.inverter_temp": "Inverter – temperature",
    "ent.inverter_comm_health": "Inverter – communication health",
    "ent.inverter_comm_rate": "Inverter – communication success rate (%)",
    "ent.inverter_power": "Inverter – power",
    "ent.inverter_voltage_l1": "Inverter – voltage L1",
    "ent.inverter_voltage_l2": "Inverter – voltage L2",
    "ent.inverter_voltage_l3": "Inverter – voltage L3",
    "ent.inverter_current_l1": "Inverter – current L1",
    "ent.inverter_current_l2": "Inverter – current L2",
    "ent.inverter_current_l3": "Inverter – current L3",
    "ent.grid_power": "Grid – power (+ import / − export)",
    "ent.tariff_low": "Grid – low tariff (ON = low)",
    "ent.tariff_enabled": "Grid – tariff enabled",
    "ent.grid_import_today": "Imported today",
    "ent.grid_export_today": "Exported today",
    "ent.grid_power_l1": "Grid – power L1",
    "ent.grid_power_l2": "Grid – power L2",
    "ent.grid_power_l3": "Grid – power L3",
    "ent.grid_voltage_l1": "Grid – voltage L1",
    "ent.grid_voltage_l2": "Grid – voltage L2",
    "ent.grid_voltage_l3": "Grid – voltage L3",
    "ent.battery_power": "Battery – power (+ charge / − discharge)",
    "ent.battery_soc": "Battery – state of charge (%)",
    "ent.battery_voltage": "Battery – voltage",
    "ent.battery_current": "Battery – current",
    "ent.battery_temp": "Battery – temperature",
    "ent.battery_charge_today": "Charged today",
    "ent.battery_discharge_today": "Discharged today",
    "ent.battery_capacity": "Battery capacity (Wh, from BMS)",
    "ent.battery_min_soc": "MIN SOC – control",
    "ent.battery_max_soc": "MAX SOC – control",
    "ent.total_power": "Home – total consumption",
    "ent.total_today": "Home – consumed today",
    "ent.wallbox_power": "Wallbox – charging power",
    "ent.wallbox_status": "Wallbox – state",
    "ent.wallbox_mode": "Wallbox – charging mode",
    "ent.wallbox_stop": "Wallbox – stop charging (STOP)",
    "ent.wallbox_current": "Wallbox – charging current (control)",
    "ent.wallbox_added": "Wallbox – charged this session (kWh)",
    "ent.wallbox_today": "Wallbox – charged today (kWh)",
    "ent.wallbox_temp": "Wallbox – temperature",
    "ent.car_soc": "Car – battery level (%)",
    "ent.car_time_remaining": "Car – remaining charging time",
    "ent.car_range": "Car – range (km)",
    "ent.car_target_soc": "Car – target charge (%)",
    "ent.car_limit": "Car – charge limit (control)",
    "ent.car_plug": "Car – charger connected",
    "ent.car_state": "Car – charging state",
    "ent.wallbox_comm_health": "Wallbox – communication health",
    "ent.wallbox_comm_rate": "Wallbox – communication success rate (%)",

    "show.pv_split": "Solar – two separate strings",
    "show.pv_details": "Solar – voltage / current / share %",
    "show.solar_sum": "Solar – total of strings (Σ)",
    "show.battery": "Show battery",
    "show.battery_details": "Battery – V / A / temperature / daily kWh",
    "show.battery_settings": "Battery – MIN / MAX SOC controls",
    "show.battery_runtime": "Battery – runtime estimate",
    "show.grid": "Show grid",
    "show.grid_details": "Grid – daily import / export",
    "show.loads": "Show loads",
    "show.wallbox_panel": "Show wallbox panel",
    "show.wallbox_settings": "Wallbox – current control",
    "show.car": "Wallbox – car battery",
    "show.wallbox_session": "Wallbox – also energy of this session",
    "show.wallbox_stop": "Wallbox – STOP button next to the modes",
    "show.night_compact": "Collapse strings when there is no production",
    "show.dim_idle_loads": "Dim idle loads",
    "show.tariff": "Grid – tariff badge",
    "show.diagnostics": "Communication status dot (inverter, wallbox)",
    "show.phase_details": "Show phase details",
    "show.energy_today": "Bottom row with daily values",
    "show.translate_sk": "Translate device states",
    "show.animation": "Animate the energy flow",

    "col.solar": "Solar",
    "col.battery_charge": "Battery – charging",
    "col.battery_discharge": "Battery – discharging",
    "col.solar_today": "Produced today",
    "col.grid_import": "Grid – import",
    "col.grid_export": "Grid – export",
    "col.hub": "Inverter / title",
    "col.home": "Home",
    "col.wallbox": "Wallbox",
  },
  sk: {
    title: "Energia domu",
    card_name: "SolaX FVE Card",
    card_description: "Animovaný diagram toku energie pre SolaX: stringy, menič, batéria s ovládaním, sieť, záťaže a wallbox.",
    link_energy: "Energie",
    battery_settings: "Nastavenie batérie",
    phase_details: "Detaily fáz",
    communication: "Komunikácia",
    home: "Dom",
    car: "Auto",
    solar: "Solar",
    pv_short: "FV",
    today: "dnes",
    no_production: "Bez výroby",
    produced_today: "Vyrobené dnes",
    inverter: "Menič",
    output: "výstup",
    grid: "Sieť",
    export: "Export",
    import: "Import",
    tariff_low_short: "NT",
    tariff_high_short: "VT",
    tariff_low: "Nízka tarifa",
    tariff_high: "Vysoká tarifa",
    tariff_enabled: "Tarifa povolená",
    tariff_disabled: "Tarifa nepovolená",
    charging: "nabíja sa",
    discharging: "vybíja sa",
    idle: "v pokoji",
    below_target: "pod cieľom",
    full: "nabitá",
    to: "do",
    discharge_to: "Vybíjať najviac do (MIN SOC)",
    charge_to: "Nabíjať najviac do (MAX SOC)",
    charge_mode: "Režim nabíjania",
    charge_current: "Nabíjací prúd",
    this_session: "v relácii",
    plugged: "pripojené",
    unplugged: "kábel nepripojený",
    target: "cieľ",
    car_limit: "Limit nabíjania auta",
    stop: "STOP",
    ph_grid_power: "Sieť výkon",
    ph_grid_voltage: "Sieť napätie",
    ph_inv_voltage: "Menič napätie",
    ph_inv_current: "Menič prúd",
    st_solar: "Vyrobené dnes",
    st_home: "Spotreba dnes",
    st_import: "Zo siete dnes",
    st_export: "Do siete dnes",
    st_charged: "Nabité dnes",
    st_discharged: "Vybité dnes",

    ed_language: "Jazyk",
    ed_lang_auto: "Automaticky (podľa Home Assistant)",
    ed_title: "Názov karty",
    ed_title_icon: "Ikona v hlavičke (prázdne = bez ikony)",
    ed_links: "Tlačidlá na vrchu karty",
    ed_links_info: "Cesta v rámci Home Assistant (napr. /energy alebo /lovelace/solar), alebo celá adresa https://…",
    ed_add_link: "+ Pridať tlačidlo",
    ed_link_label: "Názov (napr. Energie)",
    ed_icon_color: "Farba ikony",
    ed_remove_link: "Odstrániť tlačidlo",
    ed_path: "Cesta",
    ed_solar: "Solar / stringy",
    ed_pv1_label: "Názov String 1",
    ed_pv2_label: "Názov String 2",
    ed_inverter: "Menič",
    ed_inverter_image: "Vlastný obrázok meniča (URL, napr. /local/menic.png)",
    ed_inverter_power_label: "Popis výkonu pod meničom (prázdne = bez popisu)",
    ed_battery: "Batéria",
    ed_invert_battery: "Otočiť znamienko výkonu batérie (+/−)",
    ed_battery_capacity: "Kapacita batérie (kWh, prázdne = z BMS)",
    ed_runtime_target: "Cieľové % pre odhad výdrže (prázdne = MIN SOC)",
    ed_battery_segments: "Počet segmentov batérie",
    ed_grid: "Sieť",
    ed_invert_grid: "Otočiť znamienko výkonu siete (+/−)",
    ed_auto: "Automaticky",
    ed_yes_invert: "Áno – otočiť",
    ed_no: "Nie",
    ed_loads: "Záťaže (dom, bojler, auto, kúrenie, …)",
    ed_loads_info:
      "„Dom“ stojí v strede a záťaže visia pod ním. Predvolene ukazuje celkovú spotrebu domu; v režime „zvyšok“ sa od nej odpočítajú záťaže nižšie.",
    ed_home_mode: "Uzol „Dom“ zobrazuje",
    ed_home_total: "Celkovú spotrebu domu",
    ed_home_remainder: "Zvyšok po odpočítaní záťaží",
    ed_home_label: "Názov položky „Dom“",
    ed_home_icon: "Ikona položky „Dom“",
    ed_add_load: "+ Pridať záťaž",
    ed_load_label: "Názov (napr. Bojler)",
    ed_remove_load: "Odstrániť záťaž",
    ed_load_entity: "Entita (výkon)",
    ed_load_extra: "Ďalšie entity na sčítanie (oddelené čiarkou)",
    ed_load_today: "Denná spotreba (kWh)",
    ed_load_today_extra: "Denná spotreba – ďalšie entity na sčítanie",
    ed_load_icon_entity: "Ikona podľa režimu (climate entita, nepovinné)",
    ed_wallbox: "Wallbox",
    ed_wallbox_image: "Vlastný obrázok wallboxu (URL)",
    ed_wallbox_max: "Max. výkon wallboxu pre pruh (W)",
    ed_display: "Čo zobraziť",
    ed_speed: "Rýchlosť animácie",
    ed_slow: "Pomalá",
    ed_normal: "Normálna",
    ed_fast: "Rýchla",
    ed_decimals: "Desatinné miesta (kW)",
    ed_power_unit: "Jednotka výkonu",
    ed_unit_auto: "Automaticky (W / kW)",
    ed_colors: "Farby",

    "ent.pv1_power": "String 1 – výkon",
    "ent.pv1_voltage": "String 1 – napätie",
    "ent.pv1_current": "String 1 – prúd",
    "ent.pv2_power": "String 2 – výkon",
    "ent.pv2_voltage": "String 2 – napätie",
    "ent.pv2_current": "String 2 – prúd",
    "ent.solar_power": "Solar – celkový výkon (súčet stringov)",
    "ent.solar_today": "Vyrobené dnes",
    "ent.inverter_status": "Menič – stav / režim",
    "ent.inverter_temp": "Menič – teplota",
    "ent.inverter_comm_health": "Menič – stav komunikácie",
    "ent.inverter_comm_rate": "Menič – úspešnosť komunikácie (%)",
    "ent.inverter_power": "Menič – výkon",
    "ent.inverter_voltage_l1": "Menič – napätie L1",
    "ent.inverter_voltage_l2": "Menič – napätie L2",
    "ent.inverter_voltage_l3": "Menič – napätie L3",
    "ent.inverter_current_l1": "Menič – prúd L1",
    "ent.inverter_current_l2": "Menič – prúd L2",
    "ent.inverter_current_l3": "Menič – prúd L3",
    "ent.grid_power": "Sieť – výkon (+ import / − export)",
    "ent.tariff_low": "Sieť – nízka tarifa (ON = NT)",
    "ent.tariff_enabled": "Sieť – tarifa povolená",
    "ent.grid_import_today": "Zo siete dnes",
    "ent.grid_export_today": "Do siete dnes",
    "ent.grid_power_l1": "Sieť – výkon L1",
    "ent.grid_power_l2": "Sieť – výkon L2",
    "ent.grid_power_l3": "Sieť – výkon L3",
    "ent.grid_voltage_l1": "Sieť – napätie L1",
    "ent.grid_voltage_l2": "Sieť – napätie L2",
    "ent.grid_voltage_l3": "Sieť – napätie L3",
    "ent.battery_power": "Batéria – výkon (+ nabíja / − vybíja)",
    "ent.battery_soc": "Batéria – stav nabitia (%)",
    "ent.battery_voltage": "Batéria – napätie",
    "ent.battery_current": "Batéria – prúd",
    "ent.battery_temp": "Batéria – teplota",
    "ent.battery_charge_today": "Nabité dnes",
    "ent.battery_discharge_today": "Vybité dnes",
    "ent.battery_capacity": "Kapacita batérie (Wh, z BMS)",
    "ent.battery_min_soc": "MIN SOC – ovládanie",
    "ent.battery_max_soc": "MAX SOC – ovládanie",
    "ent.total_power": "Dom – celková spotreba",
    "ent.total_today": "Dom – spotreba dnes",
    "ent.wallbox_power": "Wallbox – nabíjací výkon",
    "ent.wallbox_status": "Wallbox – stav",
    "ent.wallbox_mode": "Wallbox – režim nabíjania",
    "ent.wallbox_stop": "Wallbox – zastavenie nabíjania (STOP)",
    "ent.wallbox_current": "Wallbox – nabíjací prúd (ovládanie)",
    "ent.wallbox_added": "Wallbox – nabité v tejto relácii (kWh)",
    "ent.wallbox_today": "Wallbox – nabité dnes (kWh)",
    "ent.wallbox_temp": "Wallbox – teplota",
    "ent.car_soc": "Auto – stav batérie (%)",
    "ent.car_time_remaining": "Auto – zostávajúci čas nabíjania",
    "ent.car_range": "Auto – dojazd (km)",
    "ent.car_target_soc": "Auto – cieľové nabitie (%)",
    "ent.car_limit": "Auto – limit nabíjania (ovládanie)",
    "ent.car_plug": "Auto – pripojenie nabíjačky",
    "ent.car_state": "Auto – stav nabíjania",
    "ent.wallbox_comm_health": "Wallbox – stav komunikácie",
    "ent.wallbox_comm_rate": "Wallbox – úspešnosť komunikácie (%)",

    "show.pv_split": "Solar – 2 samostatné stringy",
    "show.pv_details": "Solar – napätie / prúd / podiel %",
    "show.solar_sum": "Solar – súčet stringov (Σ)",
    "show.battery": "Zobraziť batériu",
    "show.battery_details": "Batéria – V / A / teplota / denné kWh",
    "show.battery_settings": "Batéria – ovládanie MIN / MAX SOC",
    "show.battery_runtime": "Batéria – odhad výdrže",
    "show.grid": "Zobraziť sieť",
    "show.grid_details": "Sieť – denný nákup / predaj",
    "show.loads": "Zobraziť záťaže",
    "show.wallbox_panel": "Zobraziť wallbox panel",
    "show.wallbox_settings": "Wallbox – ovládanie prúdu",
    "show.car": "Wallbox – batéria auta",
    "show.wallbox_session": "Wallbox – aj nabité v tejto relácii",
    "show.wallbox_stop": "Wallbox – tlačidlo STOP pri režimoch",
    "show.night_compact": "Zbaliť stringy, keď nič nevyrába",
    "show.dim_idle_loads": "Stlmiť neaktívne záťaže",
    "show.tariff": "Sieť – odznak tarify NT / VT",
    "show.diagnostics": "Bodka stavu komunikácie (menič, wallbox)",
    "show.phase_details": "Zobraziť detaily fáz",
    "show.energy_today": "Spodný riadok denných hodnôt",
    "show.translate_sk": "Prekladať stavy zariadení",
    "show.animation": "Animovať tok energie",

    "col.solar": "Solar",
    "col.battery_charge": "Batéria – nabíja sa",
    "col.battery_discharge": "Batéria – vybíja sa",
    "col.solar_today": "Vyrobené dnes",
    "col.grid_import": "Sieť – import",
    "col.grid_export": "Sieť – export",
    "col.hub": "Menič / nadpis",
    "col.home": "Dom",
    "col.wallbox": "Wallbox",
  },
};

const LANGUAGES = [
  ["en", "English"],
  ["sk", "Slovenčina"],
];

let LANG = "en";

function resolveLang(hass, config) {
  const wanted = config && config.language;
  if (wanted && wanted !== "auto" && I18N[wanted]) return wanted;
  const ha = String((hass && ((hass.locale && hass.locale.language) || hass.language)) || "en").toLowerCase();
  return ha.startsWith("sk") || ha.startsWith("cs") ? "sk" : "en";
}

function t(key) {
  const own = I18N[LANG] && I18N[LANG][key];
  if (own != null) return own;
  return I18N.en[key] != null ? I18N.en[key] : key;
}

function numberLocale() {
  return LANG === "sk" ? "sk-SK" : "en-US";
}

const DEFAULT_COLORS = {
  solar: "#f5a623",
  solar_today: "#4caf7d",
  hub: "#f5a623",
  battery_charge: "#4caf7d",
  battery_discharge: "#e0577a",
  grid_import: "#e0577a",
  grid_export: "#4caf7d",
  home: "#5b8def",
  wallbox: "#8e6ecb",
};

const LOAD_PALETTE = ["#e0577a", "#e0a020", "#8e6ecb", "#4ba3c7", "#6bbf6b", "#c76b9e"];

const LEGACY_COLORS = { battery_discharge: "#e0a020", home: "#e0577a" };

const IDLE_LOAD_COLOR = "#6f7782";

const ICON_ART = {
  "🏠": "home",
  "🏡": "home",
  "🚿": "boiler",
  "🛁": "boiler",
  "♨️": "heating",
  "♨": "heating",
  "🔥": "heat",
  "❄️": "cool",
  "❄": "cool",
  "🌡️": "thermo",
  "🌡": "thermo",
  "🚗": "car",
  "🚙": "car",
  "🔌": "bolt",
  "⚡": "bolt",
};

const DEFAULT_TITLE_ICON = "⚡";

const LEGACY_TITLES = ["fotovoltaika", "fve solax", "fve", "solax fve", "solax"];

const DEFAULT_SHOW = {
  pv_split: true,
  pv_details: true,
  solar_sum: true,
  battery: true,
  battery_details: true,
  battery_settings: true,
  battery_runtime: true,
  grid: true,
  grid_details: true,
  loads: true,
  wallbox_panel: true,
  wallbox_settings: true,
  car: true,
  wallbox_session: false,
  tariff: true,
  diagnostics: true,
  phase_details: true,
  energy_today: false,
  animation: true,
  translate_sk: true,
  night_compact: true,
  dim_idle_loads: true,
  wallbox_stop: true,
};

const SPEED_MULT = { slow: 1.6, normal: 1, fast: 0.55 };

function defaultLinks() {
  return [{ label: t("link_energy"), icon: "⚡", path: "/energy" }];
}

const HVAC_ICONS = {
  heating: "🔥",
  cooling: "❄️",
  drying: "💧",
  fan: "🌀",
  heat: "🔥",
  cool: "❄️",
  dry: "💧",
  fan_only: "🌀",
  heat_cool: "🌡️",
  auto: "🌡️",
};

const WB_MODE_COLORS = { Fast: "#5b8def", Eco: "#4ba3c7", Green: "#4caf7d", Boost: "#e0a020" };
const WB_MODE_ORDER = ["Green", "Eco", "Fast", "Boost"];
const WB_STOP_COLOR = "#e0577a";
const POWER_SCALE = [
  [0, "#4caf7d"],
  [35, "#9ec44a"],
  [65, "#e0a020"],
  [100, "#e0577a"],
];
function powerColor(pct) {
  let out = POWER_SCALE[0][1];
  for (const [stop, col] of POWER_SCALE) if (pct >= stop) out = col;
  return out;
}

const INVERTED_BATTERY = [/energy_dashboard.*battery_power/];
const INVERTED_GRID = [/_measured_power$/];

const TARIFF_COLORS = { low: "#4caf7d", high: "#e0577a", enabled: "#35c08a", disabled: "#e0577a" };

const STATE_TEXT = {
  en: {
    car: {
      connect_cable: "cable not connected",
      ready_for_charging: "ready to charge",
      charging: "charging",
      charging_interrupted: "charging interrupted",
      conserving: "conserving",
      charged_not_conserving: "charged",
      error: "charging error",
      unknown: "",
    },
    comm: {},
    run: {
      "Waiting Mode": "Waiting",
      "Checking Mode": "Checking",
      "Normal Mode": "Normal mode",
      "Fault Mode": "Fault",
      "Permanent Fault Mode": "Permanent fault",
      "Update Mode": "Updating",
      "EPS Check Mode": "EPS check",
      "EPS Mode": "EPS mode",
      "Idle Mode": "Idle",
      "Standby Mode": "Standby",
      "Off Grid Mode": "Off-grid",
    },
    wallbox: {
      Fast: "FAST",
      Eco: "ECO",
      Green: "GREEN",
      SuspendedEV: "Suspended (car)",
      SuspendedEVSE: "Suspended (charger)",
    },
  },
  sk: {
    car: {
      connect_cable: "kábel nepripojený",
      ready_for_charging: "pripravené na nabíjanie",
      charging: "nabíja sa",
      charging_interrupted: "nabíjanie prerušené",
      conserving: "udržiavanie nabitia",
      charged_not_conserving: "nabité",
      error: "chyba nabíjania",
      unknown: "",
    },
    comm: {
      Healthy: "v poriadku",
      Degraded: "zhoršená",
      Unhealthy: "nefunkčná",
      Failed: "zlyhala",
      Unknown: "neznáma",
    },
    run: {
      "Waiting Mode": "Čaká",
      "Checking Mode": "Kontrola",
      "Normal Mode": "Normálny režim",
      "Fault Mode": "Porucha",
      "Permanent Fault Mode": "Trvalá porucha",
      "Update Mode": "Aktualizácia",
      "EPS Check Mode": "EPS kontrola",
      "EPS Mode": "EPS režim",
      "Self Test": "Samotest",
      "Idle Mode": "Pohotovostný režim",
      Standby: "Pohotovostný režim",
      "Standby Mode": "Pohotovostný režim",
      "Off Grid Mode": "Ostrovný režim",
    },
    wallbox: {
      Available: "Pripravená",
      Preparing: "Pripravuje",
      Charging: "Nabíja",
      Finishing: "Dokončuje",
      Faulted: "Porucha",
      Unavailable: "Nedostupná",
      SuspendedEV: "Pozastavené (auto)",
      SuspendedEVSE: "Pozastavené (stanica)",
      Reserved: "Rezervovaná",
      Fast: "FAST",
      Eco: "ECO",
      Green: "GREEN",
      "Solar Scene": "Solárny režim",
      "Green Scene": "Zelený režim",
      "Fast Scene": "Rýchly režim",
      "Charge Paused": "nabíjanie pozastavené",
      "Charging Paused": "nabíjanie pozastavené",
      Paused: "pozastavené",
      "Charge Stopped": "nabíjanie zastavené",
      Stopped: "zastavené",
      Stop: "Stop",
      "Charge Finished": "nabíjanie dokončené",
      "Charge Complete": "nabité",
      Completed: "nabité",
      Idle: "nečinná",
      Ready: "pripravená",
      Connected: "pripojené",
      Disconnected: "odpojené",
      Plugged: "pripojené",
      Unplugged: "odpojené",
      Waiting: "čaká",
      Initialising: "spúšťa sa",
      Initializing: "spúšťa sa",
    },
  },
};

const WB_NOT_CHARGING = /paus|stop|suspend|finish|complete|idle|ready|fault|error|available|unplug|disconnect/i;

const WALLBOX_STOP_SUFFIXES = [
  ["select", "control_command"],
  ["select", "charge_control"],
  ["select", "start_stop"],
  ["select", "charge_command"],
  ["switch", "charge_enable"],
  ["switch", "charging_enable"],
  ["button", "stop_charge"],
  ["button", "stop_charging"],
];

const WALLBOX_PREFIX_RE = /^(.*?_)(charge_mode|charge_power_total|charge_power|run_mode|charge_current)$/;

function num(hass, entityId) {
  if (!hass || !entityId) return null;
  const st = hass.states[entityId];
  if (!st || st.state === "unavailable" || st.state === "unknown" || st.state === "None") return null;
  const v = parseFloat(st.state);
  return isNaN(v) ? null : v;
}

function rawState(hass, entityId) {
  if (!hass || !entityId) return null;
  const st = hass.states[entityId];
  if (!st || st.state === "unavailable" || st.state === "unknown") return null;
  return st.state;
}

function powerToW(hass, entityId, value) {
  if (value == null) return null;
  const st = hass && hass.states && hass.states[entityId];
  const u = st && st.attributes ? st.attributes.unit_of_measurement : null;
  if (u === "kW") return value * 1000;
  if (u === "MW") return value * 1000000;
  return value;
}

function numPower(hass, entityId) {
  return powerToW(hass, entityId, num(hass, entityId));
}

function sumEntities(hass, mainEntity, extraCsv, asPower) {
  let total = null;
  const add = (v) => {
    if (v == null) return;
    total = (total || 0) + v;
  };
  const get = asPower ? (id) => numPower(hass, id) : (id) => num(hass, id);
  if (mainEntity) add(get(mainEntity));
  if (extraCsv) {
    extraCsv
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
      .forEach((id) => add(get(id)));
  }
  return total;
}

function fmtPower(value, decimals, unit) {
  if (value == null) return "--";
  if (unit === "W") {
    const r = Math.round(value);
    return (r === 0 ? 0 : r).toLocaleString(numberLocale()) + " W";
  }
  const abs = Math.abs(value);
  if (unit === "kW" || abs >= 1000) return (value / 1000).toFixed(decimals != null ? decimals : 2) + " kW";
  return Math.round(value) + " W";
}

function fmtEnergy(value, decimals) {
  if (value == null) return "--";
  return Number(value).toFixed(decimals != null ? decimals : 1) + " kWh";
}

function fmtUnit(value, unit, decimals) {
  if (value == null) return "--";
  return Number(value).toFixed(decimals != null ? decimals : 1) + (unit ? " " + unit : "");
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function escapeHtml(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

function findEntity(hass, domain, suffixes, opts) {
  if (!hass || !hass.states) return "";
  const o = opts || {};
  const ids = Object.keys(hass.states).filter((id) => id.startsWith(domain + "."));
  for (const suffix of suffixes) {
    let hits = ids.filter((id) => id.endsWith("_" + suffix) || id === `${domain}.${suffix}`);
    if (o.include) hits = hits.filter((id) => o.include.test(id));
    if (o.exclude) hits = hits.filter((id) => !o.exclude.test(id));
    if (!hits.length) continue;
    const prefer = o.prefer || /solax/;
    return hits.find((id) => prefer.test(id) && !/energy_dashboard/.test(id)) || hits.find((id) => prefer.test(id)) || hits[0];
  }
  return "";
}

class SolaxFveCard extends HTMLElement {
  constructor() {
    super();
    this._config = {};
    this._built = false;
    this._uid = uid();
  }

  setConfig(config) {
    this._config = config || {};
    this._built = false;
  }

  set hass(hass) {
    const prevHass = this._hass;
    this._hass = hass;
    const lang = resolveLang(hass, this._config);
    LANG = lang;
    if (lang !== this._lang) {
      this._lang = lang;
      this._built = false;
    }
    if (!this._built) {
      this._buildSkeleton();
      this._built = true;
      this._linksKey = null;
      this._updateContent();
      return;
    }
    if (prevHass) {
      const relevantChanged = this._entityIds().some((id) => id && hass.states[id] !== prevHass.states[id]);
      if (!relevantChanged) return;
    }
    this._updateContent();
  }

  getCardSize() {
    return 14;
  }

  static getConfigElement() {
    return document.createElement("solax-fve-card-editor");
  }

  static getStubConfig(hass) {
    const f = (domain, suffixes, opts) => findEntity(hass, domain, suffixes, opts);
    const notEv = { exclude: /wallbox|_evc|_ev_|charger/ };
    const ev = { include: /wallbox|_evc|_ev_|charger/, prefer: /wallbox|_evc|_ev_/ };
    const wallboxPower = f("sensor", ["charge_power_total", "charge_power"], ev);
    LANG = resolveLang(hass, {});
    return {
      type: "custom:solax-fve-card",
      entities: {
        pv1_power: f("sensor", ["pv_power_1"]),
        pv1_voltage: f("sensor", ["pv_voltage_1"]),
        pv1_current: f("sensor", ["pv_current_1"]),
        pv2_power: f("sensor", ["pv_power_2"]),
        pv2_voltage: f("sensor", ["pv_voltage_2"]),
        pv2_current: f("sensor", ["pv_current_2"]),
        solar_power: f("sensor", ["pv_power_total", "solar_power"]),
        solar_today: f("sensor", ["today_s_solar_energy"]),
        inverter_status: f("sensor", ["run_mode"], notEv),
        inverter_temp: f("sensor", ["inverter_temperature"]),
        inverter_power: f("sensor", ["inverter_power"]),
        inverter_voltage_l1: f("sensor", ["inverter_voltage_l1"]),
        inverter_voltage_l2: f("sensor", ["inverter_voltage_l2"]),
        inverter_voltage_l3: f("sensor", ["inverter_voltage_l3"]),
        inverter_current_l1: f("sensor", ["inverter_current_l1"]),
        inverter_current_l2: f("sensor", ["inverter_current_l2"]),
        inverter_current_l3: f("sensor", ["inverter_current_l3"]),
        grid_power: f("sensor", ["solax_grid_power", "measured_power"]),
        grid_power_l1: f("sensor", ["measured_power_l1"]),
        grid_power_l2: f("sensor", ["measured_power_l2"]),
        grid_power_l3: f("sensor", ["measured_power_l3"]),
        grid_voltage_l1: f("sensor", ["grid_voltage_l1"]),
        grid_voltage_l2: f("sensor", ["grid_voltage_l2"]),
        grid_voltage_l3: f("sensor", ["grid_voltage_l3"]),
        grid_import_today: f("sensor", ["today_s_import_energy"]),
        grid_export_today: f("sensor", ["today_s_export_energy"]),
        battery_power: f("sensor", ["battery_power_charge", "solax_battery_power"]),
        battery_soc: f("sensor", ["solax_battery_soc", "battery_capacity"], { exclude: /bms/ }),
        battery_voltage: f("sensor", ["battery_voltage_charge"]),
        battery_current: f("sensor", ["battery_current_charge"]),
        battery_temp: f("sensor", ["battery_temperature"]),
        battery_charge_today: f("sensor", ["battery_input_energy_today"]),
        battery_discharge_today: f("sensor", ["battery_output_energy_today"]),
        battery_min_soc: f("number", ["selfuse_discharge_min_soc"]),
        battery_max_soc: f("number", ["battery_charge_upper_soc"]),
        battery_capacity: f("sensor", ["bms_battery_capacity"]),
        total_power: f("sensor", ["solax_home_consumption_power", "house_load"]),
        total_today: f("sensor", ["solax_home_consumption_energy"]),
        wallbox_power: wallboxPower,
        wallbox_status: f("sensor", ["run_mode"], ev),
        wallbox_mode: f("select", ["charge_mode"], ev),
        wallbox_current: f("number", ["charge_current"], ev),
        wallbox_added: f("sensor", ["charge_added"], ev),
        wallbox_temp: f("sensor", ["charger_temperature"], ev),
      },
      pv1_label: "String 1",
      pv2_label: "String 2",
      loads: wallboxPower ? [{ id: uid(), label: t("car"), icon: "🚗", color: "#8e6ecb", entity: wallboxPower, extra_entities: "" }] : [],
    };
  }

  _e(key) {
    return (this._config.entities || {})[key] || "";
  }

  _firstExisting(ids) {
    if (!this._hass || !this._hass.states) return "";
    for (const id of ids) if (id && this._hass.states[id]) return id;
    return "";
  }

  _wallboxPrefix() {
    for (const key of ["wallbox_mode", "wallbox_power", "wallbox_status", "wallbox_current"]) {
      const id = this._e(key);
      if (!id) continue;
      const m = id.split(".")[1].match(WALLBOX_PREFIX_RE);
      if (m) return m[1];
    }
    return "";
  }

  _stopEntity() {
    const cfg = (this._config.entities || {}).wallbox_stop;
    const prefix = this._wallboxPrefix();
    const candidates = prefix ? WALLBOX_STOP_SUFFIXES.map(([d, s]) => `${d}.${prefix}${s}`) : [];
    const id = cfg ? (this._hass && this._hass.states[cfg] ? cfg : "") : this._firstExisting(candidates);
    if (id && /^(select|input_select)\./.test(id) && !this._stopOption(id)) return "";
    return id;
  }

  _stopOption(entityId) {
    const st = this._hass && this._hass.states[entityId];
    const options = (st && st.attributes && st.attributes.options) || [];
    return options.find((o) => /^(stop|stopped|disable|disabled|off|pause|paused)$/i.test(o)) || options.find((o) => /stop|pause|disable/i.test(o)) || null;
  }

  _n(key) {
    return num(this._hass, this._e(key));
  }

  _p(key) {
    return numPower(this._hass, this._e(key));
  }

  _comm(healthKey, rateKey) {
    if (!this._show("diagnostics")) return null;
    const healthRaw = rawState(this._hass, this._e(healthKey));
    const rate = this._n(rateKey);
    if (!healthRaw && rate == null) return null;
    const bad = healthRaw && /unhealthy|fail|error|lost|down|offline/i.test(healthRaw);
    const warn = (healthRaw && !/healthy|ok\b|good/i.test(healthRaw)) || (rate != null && rate < 95);
    const level = bad ? "bad" : warn ? "warn" : "ok";
    const parts = [];
    if (healthRaw) parts.push(this._tr(healthRaw, "comm") || healthRaw);
    if (rate != null) parts.push(rate.toFixed(0) + " %");
    return {
      level,
      color: level === "bad" ? "#e0577a" : level === "warn" ? "#e0a020" : "#4caf7d",
      text: t("communication") + ": " + parts.join(" · "),
    };
  }

  _loads() {
    return Array.isArray(this._config.loads) ? this._config.loads.slice() : [];
  }

  _loadIcon(l) {
    if (!l) return "";
    const baseIcon = l.icon;
    if (!l.icon_entity || !this._hass) return l.icon;
    const st = this._hass.states[l.icon_entity];
    if (!st) return baseIcon;
    const action = st.attributes && st.attributes.hvac_action;
    if (action && HVAC_ICONS[action]) return HVAC_ICONS[action];
    if (action) return baseIcon;
    return HVAC_ICONS[st.state] || baseIcon;
  }

  _batteryValue() {
    const v = this._p("battery_power");
    return v == null ? null : this._inverted("invert_battery", "battery_power", INVERTED_BATTERY) ? -v : v;
  }

  _inverted(cfgKey, entityKey, patterns) {
    const v = this._config[cfgKey];
    if (v === true || v === "yes") return true;
    if (v === false || v === "no") return false;
    const id = this._e(entityKey);
    return !!id && patterns.some((re) => re.test(id));
  }

  _gridValue() {
    const v = this._p("grid_power");
    return v == null ? null : this._inverted("invert_grid", "grid_power", INVERTED_GRID) ? -v : v;
  }

  _show(key) {
    const s = this._config.show || {};
    return s[key] !== undefined ? !!s[key] : DEFAULT_SHOW[key] !== false;
  }

  _color(key) {
    const stored = (this._config.colors || {})[key];
    if (stored && LEGACY_COLORS[key] && stored.toLowerCase() === LEGACY_COLORS[key]) return DEFAULT_COLORS[key];
    return stored || DEFAULT_COLORS[key];
  }

  _decimals() {
    const d = this._config.decimals;
    return d == null ? 2 : d;
  }

  _fmtP(value) {
    const u = this._config.power_unit;
    return fmtPower(value, this._decimals(), u === "kW" || u === "auto" ? u : "W");
  }

  _tr(value, group) {
    if (value == null) return null;
    if (!this._show("translate_sk")) return value;
    const dict = (STATE_TEXT[LANG] || STATE_TEXT.en)[group] || {};
    return dict[value] || value;
  }

  _entityIds() {
    const ids = Object.values(this._config.entities || {});
    this._loads().forEach((l) => {
      [l.entity, l.today, l.icon_entity].forEach((id) => {
        if (id) ids.push(id);
      });
      [l.extra_entities, l.today_extra].forEach((csv) => {
        if (csv)
          csv
            .split(",")
            .map((x) => x.trim())
            .filter(Boolean)
            .forEach((id) => ids.push(id));
      });
    });
    return ids;
  }

  _openMoreInfo(entityId) {
    if (!entityId) return;
    this.dispatchEvent(new CustomEvent("hass-more-info", { bubbles: true, composed: true, detail: { entityId } }));
  }

  _setNumber(entityId, value) {
    if (!entityId || !this._hass) return;
    this._hass.callService("number", "set_value", { entity_id: entityId, value: Number(value) });
  }

  _stopCharging(entityId) {
    if (!entityId || !this._hass) return;
    const st = this._hass.states[entityId];
    if (!st) return;
    const domain = entityId.split(".")[0];
    if (domain === "button") {
      this._hass.callService("button", "press", { entity_id: entityId });
      return;
    }
    if (domain === "switch" || domain === "input_boolean") {
      this._hass.callService(domain, "turn_off", { entity_id: entityId });
      return;
    }
    if (domain === "select" || domain === "input_select") {
      const opt = this._stopOption(entityId);
      if (opt) this._hass.callService(domain, "select_option", { entity_id: entityId, option: opt });
    }
  }

  _buildSkeleton() {
    this.innerHTML = `
      <ha-card>
        <style>${this._styles()}</style>
        <div class="sf-root">
          <div class="sf-header">
            <div class="sf-title"><span class="sf-title-icon"></span><span class="sf-title-text"></span></div>
            <div class="sf-links"></div>
          </div>

          <div class="sf-diagram-wrap">
            <svg class="sf-svg" preserveAspectRatio="xMidYMid meet"></svg>
          </div>

          <div class="sf-wallbox-panel"></div>
          <details class="sf-batt-settings sf-fold">
            <summary class="sf-fold-summary">${this._mini("battery", 17)} <span class="sf-fold-title">${t("battery_settings")}</span> <span class="sf-fold-val"></span></summary>
            <div class="sf-fold-body"></div>
          </details>
          <details class="sf-phases">
            <summary class="sf-phases-summary">${this._mini("bolt", 16)} ${t("phase_details")}</summary>
            <div class="sf-phases-body"></div>
          </details>
          <div class="sf-today-row"></div>
        </div>
      </ha-card>
    `;
    this._battSettingsBuilt = false;
    this._wbBuilt = false;
    this._phasesBuilt = false;
    this._wbChipsKey = null;
  }

  _styles() {
    return `
      .sf-root { padding: 18px 16px 16px; display: flex; flex-direction: column; gap: 16px; container-type: inline-size; }
      .sf-header { display: flex; justify-content: space-between; align-items: center; gap: 10px; flex-wrap: wrap; }
      .sf-links { display: flex; gap: 8px; flex-wrap: wrap; }
      .sf-link { display: inline-flex; align-items: center; gap: 6px; border: 1px solid var(--divider-color); background: rgba(127,127,127,0.10); color: var(--primary-text-color); border-radius: 999px; padding: 7px 14px; font-size: 0.88rem; font-weight: 600; cursor: pointer; user-select: none; transition: background .15s ease, border-color .15s ease; font-family: inherit; }
      .sf-link:hover { background: rgba(127,127,127,0.20); border-color: var(--sf-hub-color, #f5a623); }
      .sf-link:active { transform: translateY(1px); }
      .sf-link-icon { font-size: 1.05rem; line-height: 1; font-weight: 800; }
      .sf-title { display: flex; align-items: center; gap: 8px; }
      .sf-title-icon { font-size: 1.4rem; }
      .sf-title-text { font-size: 1.45rem; font-weight: 800; letter-spacing: .01em; color: var(--sf-hub-color, #f5a623); }

      .sf-diagram-wrap { width: 100%; }
      .sf-svg { width: 100%; height: auto; display: block; overflow: visible; }

      .sf-box { cursor: pointer; transition: opacity .15s ease; }
      .sf-box:hover { opacity: .78; }
      .sf-svg text { user-select: none; }
      .sf-t-icon { text-anchor: middle; dominant-baseline: central; }
      .sf-t-value { text-anchor: middle; font-weight: 800; font-size: 26px; fill: var(--primary-text-color); font-variant-numeric: tabular-nums; }
      .sf-t-today { text-anchor: middle; font-weight: 800; font-size: 30px; font-variant-numeric: tabular-nums; }
      .sf-t-sum { text-anchor: middle; font-weight: 800; font-size: 25px; font-variant-numeric: tabular-nums; }
      .sf-bar-wrap.hidden, .sf-bar-ticks.hidden { display: none; }
      .sf-load-idle { opacity: .42; }
      .sf-load-idle:hover { opacity: .6; }
      .sf-batt-mark { text-anchor: end; font-size: 11px; font-weight: 700; }
      .sf-batt-mark-label { text-anchor: end; font-size: 9px; font-weight: 600; opacity: .8; letter-spacing: .02em; }
      .sf-chip-stop { letter-spacing: .06em; }
      .sf-t-status { text-anchor: middle; font-weight: 700; font-size: 17px; }
      .sf-t-label { text-anchor: middle; font-size: 14.5px; font-weight: 600; fill: var(--secondary-text-color); letter-spacing: .04em; text-transform: uppercase; }
      .sf-t-detail { text-anchor: middle; font-size: 14px; fill: var(--secondary-text-color); }
      .sf-t-line { text-anchor: middle; font-weight: 800; font-size: 16px; font-variant-numeric: tabular-nums; }
      .sf-t-tariff { text-anchor: middle; font-weight: 800; font-size: 15px; letter-spacing: .06em; }
      .sf-tariff, .sf-tariff-dot { cursor: pointer; }

      .sf-line { fill: none; stroke: var(--divider-color); stroke-width: 2; opacity: 0.4; }
      .sf-line.active { opacity: 0.85; }
      @keyframes sf-flow-fwd { from { stroke-dashoffset: 26; } to { stroke-dashoffset: 0; } }
      .sf-flow { fill: none; stroke-width: 3; stroke-linecap: round; stroke-dasharray: 3 10; opacity: 0; transition: opacity .4s ease; }
      .sf-flow.on { opacity: 1; }
      .sf-flow.fwd { animation-name: sf-flow-fwd; animation-timing-function: linear; animation-iteration-count: infinite; }
      .sf-arrow { pointer-events: none; }
      @keyframes sf-arrow-pulse { 0%,100% { opacity: .55; } 50% { opacity: 1; } }
      .sf-arrow-move { pointer-events: none; animation: sf-arrow-pulse 2.4s ease-in-out infinite; }

      .sf-panel-letter { text-anchor: middle; dominant-baseline: central; font-size: 17px; font-weight: 800; fill: #ffffff; paint-order: stroke; stroke: #0d2033; stroke-width: 3px; stroke-linejoin: round; }
      .sf-panel.on .sf-panel-grid { opacity: .75; }
      .sf-join { transition: opacity .4s ease; }
      .sf-svg, .sf-wallbox-panel, .sf-phases-body, .sf-today-row { overflow-anchor: none; }

      @keyframes sf-sun-pulse { 0%,100% { opacity: .2; r: 15; } 50% { opacity: .42; r: 18; } }
      .sf-sun-glow { animation: sf-sun-pulse 2.1s ease-in-out infinite; transform-origin: center; }
      @keyframes sf-led-blink { 0%,100% { opacity: 1; } 50% { opacity: .35; } }
      .sf-led { animation: sf-led-blink 1.8s ease-in-out infinite; }

      .sf-batt-fill { transition: height .8s ease, y .8s ease; }
      @keyframes sf-batt-seg { 0%,100% { opacity: .9; } 50% { opacity: .22; } }
      .sf-batt-blink { animation: sf-batt-seg 1.6s ease-in-out infinite; }
      @keyframes sf-batt-arrow-up { 0% { transform: translateY(5px); opacity:0; } 30% { opacity:1; } 100% { transform: translateY(-9px); opacity:0; } }
      @keyframes sf-batt-arrow-down { 0% { transform: translateY(-9px); opacity:0; } 30% { opacity:1; } 100% { transform: translateY(5px); opacity:0; } }
      .sf-batt-arrow { animation-duration: 1.3s; animation-iteration-count: infinite; animation-timing-function: ease-in-out; }
      .sf-batt-pct { font-weight: 800; fill: var(--primary-text-color); }
      .sf-batt-sub { fill: var(--secondary-text-color); }
      .sf-marker-line { stroke-dasharray: 2 2; stroke-width: 1.4; }

      .sf-panel { background: rgba(127,127,127,0.07); border-radius: 12px; padding: 14px 16px; display: flex; flex-direction: column; gap: 12px; }
      .sf-panel.hidden { display: none; }
      .sf-panel-title { font-size: 0.84rem; color: var(--secondary-text-color); text-transform: uppercase; letter-spacing: .04em; }

      .sf-set-row { display: grid; grid-template-columns: 1fr auto; gap: 8px 10px; align-items: center; }
      .sf-set-head { display: flex; justify-content: space-between; align-items: baseline; gap: 8px; grid-column: 1 / -1; }
      .sf-set-label { font-size: 0.95rem; color: var(--primary-text-color); }
      .sf-set-value { font-size: 1.15rem; font-weight: 800; color: var(--sf-hub-color, #f5a623); font-variant-numeric: tabular-nums; }
      .sf-slider { grid-column: 1 / -1; width: 100%; -webkit-appearance: none; appearance: none; height: 6px; border-radius: 999px; background: rgba(127,127,127,0.28); outline: none; cursor: pointer; }
      .sf-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 18px; height: 18px; border-radius: 50%; background: var(--sf-slider-color, #4caf7d); border: 2px solid var(--card-background-color, #1c1c1c); box-shadow: 0 1px 4px rgba(0,0,0,.4); cursor: pointer; }
      .sf-slider::-moz-range-thumb { width: 16px; height: 16px; border-radius: 50%; background: var(--sf-slider-color, #4caf7d); border: 2px solid var(--card-background-color, #1c1c1c); cursor: pointer; }

      .sf-wb-top { display: flex; align-items: center; gap: 12px; }
      .sf-wb-art { flex-shrink: 0; width: 62px; height: 92px; object-fit: contain; }
      .sf-wb-info { display: flex; flex-direction: column; gap: 2px; flex: 1; min-width: 0; }
      .sf-wb-title { font-size: 0.85rem; color: var(--secondary-text-color); }
      .sf-wb-status { font-size: 1.2rem; font-weight: 700; color: var(--primary-text-color); }
      .sf-wb-meta { font-size: 0.84rem; color: var(--secondary-text-color); }
      .sf-wb-power { font-size: 1.55rem; font-weight: 800; font-variant-numeric: tabular-nums; transition: color .4s ease; }
      .sf-mini { vertical-align: -0.18em; flex-shrink: 0; }
      .sf-meta-item { display: inline-flex; align-items: center; gap: 4px; }
      .sf-meta-sep { margin: 0 6px; opacity: .55; }
      .sf-chips { display: flex; flex-wrap: nowrap; gap: 6px; }
      .sf-comm-led { display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 6px; vertical-align: middle; opacity: .55; }
      .sf-comm-led.sf-comm-warn, .sf-comm-led.sf-comm-bad { width: 10px; height: 10px; opacity: 1; animation: sf-comm-blink 1.6s ease-in-out infinite; }
      .sf-comm-dot { opacity: .55; }
      .sf-comm-dot.sf-comm-warn, .sf-comm-dot.sf-comm-bad { opacity: 1; animation: sf-comm-blink 1.6s ease-in-out infinite; }
      @keyframes sf-comm-blink { 0%,100% { opacity: 1; } 50% { opacity: .35; } }
      .sf-car { display: flex; flex-direction: column; gap: 7px; }
      .sf-car.hidden { display: none; }
      .sf-car-top { display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap; }
      .sf-car-icon { font-size: 1.05rem; }
      .sf-car-soc { font-size: 1.15rem; font-weight: 800; font-variant-numeric: tabular-nums; }
      .sf-car-meta { font-size: 0.84rem; color: var(--secondary-text-color); }
      .sf-car-bar { position: relative; height: 10px; border-radius: 999px; background: rgba(127,127,127,0.18); overflow: hidden; }
      .sf-car-fill { position: absolute; inset: 0 auto 0 0; height: 100%; width: 0; border-radius: 999px; transition: width .6s ease, background .4s ease; }
      .sf-car-target { position: absolute; top: -2px; width: 2px; height: 14px; background: var(--primary-text-color); opacity: .65; }
      .sf-modes { border: 1px solid var(--divider-color); border-radius: 18px; padding: 9px 10px 11px; display: flex; flex-direction: column; gap: 8px; background: rgba(127,127,127,0.06); }
      .sf-modes.hidden { display: none; }
      .sf-chips-title { font-size: .74rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--secondary-text-color); text-align: center; }
      .sf-chip { border: 1px solid var(--divider-color); border-radius: 999px; padding: 7px 4px; font-size: 0.84rem; cursor: pointer; color: var(--primary-text-color); background: var(--card-background-color); user-select: none; }
      .sf-chip { flex: 1 1 0; min-width: 0; text-align: center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .sf-chip { transition: background .15s ease, color .15s ease; font-weight: 600; }
      .sf-chip.active { font-weight: 800; }

      .sf-bar-wrap { position: relative; height: 20px; border-radius: 999px; background: rgba(127,127,127,0.18); overflow: hidden; }
      .sf-bar-fill { position: absolute; inset: 0 auto 0 0; height: 100%; border-radius: 999px; transition: width .6s ease, background-size .6s ease; background-image: linear-gradient(90deg, #4caf7d 0%, #9ec44a 35%, #e0a020 65%, #e0577a 100%); background-repeat: no-repeat; background-position: left center; }
      .sf-bar-ticks { display: flex; justify-content: space-between; font-size: 0.76rem; color: var(--secondary-text-color); padding: 0 2px; }

      .sf-fold, .sf-phases { background: rgba(127,127,127,0.07); border-radius: 12px; }
      .sf-fold.hidden, .sf-phases.hidden { display: none; }
      .sf-fold-summary, .sf-phases-summary { cursor: pointer; padding: 14px 16px; font-size: 0.86rem; color: var(--secondary-text-color); letter-spacing: .03em; list-style: none; user-select: none; display: flex; align-items: center; gap: 8px; }
      .sf-fold-summary::-webkit-details-marker, .sf-phases-summary::-webkit-details-marker { display: none; }
      .sf-fold-summary::after, .sf-phases-summary::after { content: "⌄"; margin-left: auto; font-size: 1.1rem; line-height: 1; transition: transform .2s ease; opacity: .7; }
      .sf-fold[open] > .sf-fold-summary::after, .sf-phases[open] > .sf-phases-summary::after { transform: rotate(180deg); }
      .sf-fold-title { text-transform: uppercase; }
      .sf-fold-val { font-weight: 800; color: var(--primary-text-color); font-variant-numeric: tabular-nums; }
      .sf-fold-body { display: flex; flex-direction: column; gap: 14px; padding: 2px 16px 16px; }
      .sf-wb-fold { background: rgba(127,127,127,0.10); margin-top: 2px; }
      .sf-wb-fold > .sf-fold-summary { padding: 11px 14px; }
      .sf-wb-fold .sf-fold-body { padding: 0 14px 14px; }
      .sf-wb-fold.hidden { display: none; }
      .sf-phases-summary { text-transform: uppercase; }
      .sf-phases-body { padding: 0 16px 14px; overflow-x: auto; }
      .sf-ph-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
      .sf-ph-table th { text-align: right; font-weight: 600; color: var(--secondary-text-color); padding: 4px 6px; }
      .sf-ph-table th:first-child { text-align: left; }
      .sf-ph-table td { text-align: right; padding: 4px 6px; color: var(--primary-text-color); font-variant-numeric: tabular-nums; border-top: 1px solid var(--divider-color); }
      .sf-ph-table td:first-child { text-align: left; color: var(--secondary-text-color); }

      .sf-today-row { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
      @container (min-width: 420px) { .sf-today-row { grid-template-columns: repeat(3, 1fr); } }
      .sf-today-row.hidden { display: none; }
      .sf-stat { display: flex; flex-direction: column; align-items: center; gap: 2px; padding: 8px 4px; border-radius: 10px; background: rgba(127,127,127,0.07); }
      .sf-stat-label { font-size: 0.66rem; color: var(--secondary-text-color); }
      .sf-stat-value { font-size: 0.86rem; font-weight: 700; color: var(--primary-text-color); }
    `;
  }

  _updateContent() {
    const hass = this._hass;
    const cfg = this._config;
    this.style.setProperty("--sf-hub-color", this._color("hub"));
    this.style.setProperty("--sf-wallbox-color", this._color("wallbox"));

    let titleText = cfg.title === undefined ? t("title") : cfg.title;
    if (cfg.title_icon === undefined && LEGACY_TITLES.includes(String(titleText).trim().toLowerCase())) titleText = t("title");
    this.querySelector(".sf-title-text").textContent = titleText;
    const icoEl = this.querySelector(".sf-title-icon");
    const ico = cfg.title_icon === undefined ? DEFAULT_TITLE_ICON : cfg.title_icon;
    if (icoEl) {
      if (icoEl.textContent !== ico) icoEl.textContent = ico;
      icoEl.style.display = ico ? "" : "none";
    }
    this._renderLinks();

    const pv1 = this._p("pv1_power");
    const pv2 = this._p("pv2_power");
    let solar = this._p("solar_power");
    if (solar == null && (pv1 != null || pv2 != null)) solar = (pv1 || 0) + (pv2 || 0);
    const battery = this._batteryValue();
    const soc = this._n("battery_soc");
    const grid = this._gridValue();

    const loads = this._show("loads")
      ? this._loads().map((l) => ({
          ...l,
          icon: this._loadIcon(l),
          value: sumEntities(hass, l.entity, l.extra_entities, true),
          today: l.today || l.today_extra ? sumEntities(hass, l.today, l.today_extra) : null,
        }))
      : [];

    const totalPower = this._p("total_power");
    let remainder = null;
    if (totalPower != null) {
      const loadsSum = loads.reduce((s, l) => s + (l.value || 0), 0);
      remainder = Math.max(0, totalPower - loadsSum);
    }

    this._renderDiagram({ pv1, pv2, solar, battery, soc, grid, loads, remainder, total: totalPower });
    this._renderBatterySettings();
    this._renderWallboxPanel();
    this._renderPhaseDetails();
    this._renderTodayRow();
  }

  _renderLinks() {
    const wrap = this.querySelector(".sf-links");
    if (!wrap) return;
    const raw = this._config.links === undefined ? defaultLinks() : this._config.links || [];
    const links = raw.filter((l) => l && (l.label || l.icon) && l.path);
    const key = JSON.stringify(links);
    if (key === this._linksKey) return;
    this._linksKey = key;
    wrap.innerHTML = links
      .map(
        (l) =>
          `<button class="sf-link" data-path="${escapeHtml(l.path)}">${
            l.icon ? `<span class="sf-link-icon"${l.color ? ` style="color:${escapeHtml(l.color)}"` : ""}>${escapeHtml(l.icon)}</span>` : ""
          }${escapeHtml(l.label || "")}</button>`,
      )
      .join("");
    wrap.querySelectorAll(".sf-link").forEach((btn) => {
      btn.onclick = () => this._navigate(btn.dataset.path);
    });
  }

  _navigate(path) {
    if (!path) return;
    if (/^https?:\/\//i.test(path)) {
      window.open(path, "_blank", "noopener");
      return;
    }
    history.pushState(null, "", path);
    this.dispatchEvent(new CustomEvent("location-changed", { bubbles: true, composed: true, detail: { replace: false } }));
  }

  _renderDiagram(d) {
    const cfg = this._config;
    this._pathSeq = 0;
    const animOn = this._show("animation");
    const speed = SPEED_MULT[cfg.animation_speed] || 1;

    const showBattery = this._show("battery") && !!this._e("battery_power");
    const showGrid = this._show("grid") && !!this._e("grid_power");
    const pvSplit = this._show("pv_split") && !!this._e("pv1_power") && !!this._e("pv2_power");
    const showSum = this._show("solar_sum");

    const items = d.loads.filter((l) => l.label && (l.entity || l.extra_entities));
    const showHome = !!this._e("total_power");
    const homeItem = showHome
      ? {
          label: cfg.home_label || t("home"),
          icon: cfg.home_icon || "🏠",
          color: this._color("home"),
          value: cfg.home_mode === "remainder" ? d.remainder : d.total,
          entity: this._e("total_power"),
          today: this._n("total_today"),
          is_home: true,
        }
      : null;

    const W = 500;
    const N = Math.max(items.length, 1);

    const anyPv = [d.solar, d.pv1, d.pv2].some((v) => v != null && v > 3);
    const nightCompact = this._show("night_compact") && !anyPv;
    const shift = nightCompact ? 104 : 0;

    const panelTop = 12;
    const dropTop = 128 - shift;
    const joinY = 182 - shift;
    const invTop = 216 - shift;
    const invPos = { x: 250, y: invTop + 66 };
    const midY = invPos.y - 25;
    const battPos = { x: 76, y: midY - 39 };
    const gridPos = { x: 436, y: midY - 50 };
    const homeTop = 458 - shift;
    const homeBottom = 584 - shift;
    const trunkTop = 404 - shift;
    const busY = 608 - shift;
    const loadTop = 624 - shift;
    const H = loadTop + 112;

    const pv1x = 92,
      pv2x = 408,
      soloX = 250;
    const join = { x: 250, y: joinY };

    const svg = this.querySelector(".sf-svg");
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);

    const lines = [];
    const nodes = [];
    const solarColor = this._color("solar");
    const act = (v) => v != null && v > 3;

    const todaySolar = this._n("solar_today");
    if (nightCompact) {
      nodes.push(this._pvCompactNode({ x: 250, y: panelTop + 16 }, d.solar, todaySolar));
      lines.push(this._flowPath([{ x: soloX, y: panelTop + 30 }, join], false, false, solarColor, null, speed, animOn));
    } else if (pvSplit) {
      const total = (d.pv1 || 0) + (d.pv2 || 0);
      const share = (v) => (total > 3 && v != null ? Math.round((v / total) * 100) : 0);
      lines.push(this._flowPath([{ x: pv1x, y: dropTop }, { x: pv1x, y: joinY }, join], act(d.pv1), false, solarColor, d.pv1, speed, animOn));
      lines.push(this._flowPath([{ x: pv2x, y: dropTop }, { x: pv2x, y: joinY }, join], act(d.pv2), false, solarColor, d.pv2, speed, animOn));
      nodes.push(
        this._pvNode(
          { x: pv1x, y: panelTop },
          d.pv1,
          this._n("pv1_voltage"),
          this._n("pv1_current"),
          share(d.pv1),
          cfg.pv1_label || "String 1",
          this._pvShort(cfg.pv1_label, "1"),
          this._e("pv1_power"),
        ),
      );
      nodes.push(
        this._pvNode(
          { x: pv2x, y: panelTop },
          d.pv2,
          this._n("pv2_voltage"),
          this._n("pv2_current"),
          share(d.pv2),
          cfg.pv2_label || "String 2",
          this._pvShort(cfg.pv2_label, "2"),
          this._e("pv2_power"),
        ),
      );
    } else {
      lines.push(this._flowPath([{ x: soloX, y: dropTop }, join], act(d.solar), false, solarColor, d.solar, speed, animOn));
      nodes.push(this._pvNode({ x: soloX, y: panelTop }, d.solar, null, null, null, t("solar"), t("pv_short"), this._e("solar_power")));
    }

    const today = todaySolar;
    if (today != null && pvSplit && !nightCompact) nodes.push(this._pvTodayNode({ x: 250, y: panelTop }, today));

    if (showSum && !nightCompact) nodes.push(this._sumNode({ x: 250, y: 158 - shift }, d.solar, pvSplit ? null : today));
    nodes.push(`<circle class="sf-join" cx="${join.x}" cy="${join.y}" r="4.5" fill="${solarColor}" opacity="${act(d.solar) ? 1 : 0.45}"></circle>`);

    lines.push(this._flowPath([join, { x: invPos.x, y: invTop }], act(d.solar), false, solarColor, d.solar, speed, animOn));

    if (showBattery) {
      const flowing = d.battery != null && Math.abs(d.battery) > 3;
      const charging = d.battery > 0;
      const battColor = d.battery == null ? this._color("battery_charge") : charging ? this._color("battery_charge") : this._color("battery_discharge");
      lines.push(
        this._flowPath(
          [
            { x: 186, y: midY },
            { x: battPos.x + 34, y: midY },
          ],
          flowing,
          !charging,
          battColor,
          d.battery,
          speed,
          animOn,
        ),
      );
      if (d.battery != null) nodes.push(this._lineLabel(148, midY, this._fmtP(Math.abs(d.battery)), battColor));
      nodes.push(this._batteryNode(battPos, d.battery, d.soc, battColor));
    }

    if (showGrid) {
      const flowing = d.grid != null && Math.abs(d.grid) > 3;
      const importing = d.grid > 0;
      const gridColor = d.grid == null ? this._color("grid_import") : importing ? this._color("grid_import") : this._color("grid_export");
      lines.push(
        this._flowPath(
          [
            { x: gridPos.x - 36, y: midY },
            { x: 314, y: midY },
          ],
          flowing,
          !importing,
          gridColor,
          d.grid,
          speed,
          animOn,
        ),
      );
      if (d.grid != null) nodes.push(this._lineLabel(357, midY, this._fmtP(Math.abs(d.grid)), gridColor));
      nodes.push(this._pylonNode(gridPos, d.grid, gridColor));
      nodes.push(this._tariffNode({ x: gridPos.x, y: gridPos.y + 176 }));
    }

    nodes.push(this._inverterNode(invPos));

    let branchFromY = trunkTop;
    if (homeItem) {
      const flowing = homeItem.value != null && homeItem.value > 3;
      lines.push(
        this._flowPath(
          [
            { x: invPos.x, y: trunkTop },
            { x: invPos.x, y: homeTop - 2 },
          ],
          flowing,
          false,
          homeItem.color,
          homeItem.value,
          speed,
          animOn,
        ),
      );
      nodes.push(this._homeNode({ x: invPos.x, y: homeTop }, homeItem));
      branchFromY = homeBottom;
    }

    const slot = W / N;
    const scale = N <= 3 ? 1 : N === 4 ? 0.94 : N === 5 ? 0.86 : 0.76;
    items.forEach((l, i) => {
      const x = slot * (i + 0.5);
      const flowing = l.value != null && l.value > 3;
      const color = l.color || LOAD_PALETTE[i % LOAD_PALETTE.length];
      lines.push(
        this._flowPath(
          [
            { x: invPos.x, y: branchFromY },
            { x: invPos.x, y: busY },
            { x, y: busY },
            { x, y: loadTop - 2 },
          ],
          flowing,
          false,
          color,
          l.value,
          speed,
          animOn,
        ),
      );
      nodes.push(this._loadNode({ x, y: loadTop }, color, l, scale));
    });

    if (!svg.querySelector(".sf-lines")) {
      svg.innerHTML = `${this._defs()}<g class="sf-lines"></g><g class="sf-img-layer"></g><g class="sf-nodes"></g>`;
    }
    svg.querySelector(".sf-lines").innerHTML = lines.join("");
    svg.querySelector(".sf-nodes").innerHTML = nodes.join("");
    this._syncImgLayer(svg, invPos, 132, 132);
    svg.querySelectorAll(".sf-box[data-entity]").forEach((el) => {
      const id = el.getAttribute("data-entity");
      if (id) el.addEventListener("click", () => this._openMoreInfo(id));
    });
  }

  _syncImgLayer(svg, pos, w, h) {
    const url = this._config.inverter_image;
    let layer = svg.querySelector(".sf-img-layer");
    if (!layer) return;
    if (!url) {
      if (this._invImg && this._invImg.parentNode) this._invImg.parentNode.removeChild(this._invImg);
      this._invImg = null;
      return;
    }
    if (!this._invImg) {
      this._invImg = document.createElementNS("http://www.w3.org/2000/svg", "image");
      this._invImg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    }
    if (this._invImg.parentNode !== layer) layer.appendChild(this._invImg);
    const set = (name, value) => {
      if (this._invImg.getAttribute(name) !== String(value)) this._invImg.setAttribute(name, value);
    };
    if (this._invImgUrl !== url) {
      this._invImg.setAttribute("href", url);
      this._invImg.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url);
      this._invImgUrl = url;
    }
    set("x", pos.x - w / 2);
    set("y", pos.y - h / 2);
    set("width", w);
    set("height", h);
  }

  _pvShort(label, fallback) {
    if (!label) return fallback;
    const numbered = String(label).match(/^(?:string|pv|mppt)\s*(\d+)$/i);
    if (numbered) return numbered[1];
    const parts = label
      .split(/[\/\-–\s]+/)
      .map((p) => p.trim())
      .filter(Boolean);
    if (!parts.length) return fallback;
    if (parts.length === 1) return parts[0].slice(0, 1).toUpperCase();
    return parts.map((p) => p.slice(0, 1).toUpperCase()).join("/");
  }

  _defs() {
    const u = this._uid;
    return `
      <defs>
        <linearGradient id="sfPanel-${u}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2a4f78"/><stop offset="100%" stop-color="#12293f"/>
        </linearGradient>
        <linearGradient id="sfPanelOn-${u}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f5a623" stop-opacity="0.45"/><stop offset="55%" stop-color="#f5a623" stop-opacity="0.12"/><stop offset="100%" stop-color="#f5a623" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="sfInvBody-${u}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f4f6f9"/><stop offset="52%" stop-color="#dde2e9"/><stop offset="100%" stop-color="#b7c0cb"/>
        </linearGradient>
        <linearGradient id="sfWbBody-${u}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#3a414b"/><stop offset="55%" stop-color="#252b33"/><stop offset="100%" stop-color="#161a20"/>
        </linearGradient>
      </defs>`;
  }

  _flowPath(points, active, reversed, color, value, speed, animOn) {
    const pts = reversed ? [...points].reverse() : points;
    const d = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");
    const id = `sfp-${this._uid}-${this._pathSeq++}`;
    let out = `<path id="${id}" class="sf-line ${active ? "active" : ""}" d="${d}"></path>`;
    if (animOn) {
      const dur = value != null ? clamp(4.6 - Math.log10(Math.abs(value) + 1) * 1.1, 1.1, 4.6) * speed : 2.6 * speed;
      out += `<path class="sf-flow ${active ? "on fwd" : ""}" style="stroke:${color}; animation-duration:${dur.toFixed(2)}s;" d="${d}"></path>`;
    }
    if (active && animOn) {
      const dur = (value != null ? clamp(7.4 - Math.log10(Math.abs(value) + 1) * 1.15, 3.0, 7.4) : 5.2) * speed;
      out +=
        `<g class="sf-arrow-move">` +
        `<polygon points="-7,-5.5 7,0 -7,5.5" fill="${color}"></polygon>` +
        `<animateMotion dur="${dur.toFixed(2)}s" repeatCount="indefinite" rotate="auto" calcMode="linear">` +
        `<mpath href="#${id}" xlink:href="#${id}"></mpath>` +
        `</animateMotion></g>`;
    } else if (active) {
      const a = pts[pts.length - 2],
        b = pts[pts.length - 1];
      const dx = b.x - a.x,
        dy = b.y - a.y;
      const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
      const x = a.x + dx * 0.55,
        y = a.y + dy * 0.55;
      out += `<polygon class="sf-arrow" points="-6,-5 6,0 -6,5" fill="${color}" transform="translate(${x.toFixed(1)},${y.toFixed(1)}) rotate(${angle.toFixed(1)})"></polygon>`;
    }
    return out;
  }

  _lineLabel(x, y, text, color) {
    return `<text class="sf-t-line" x="${x}" y="${y - 10}" fill="${color}">${escapeHtml(text)}</text>`;
  }

  _pvNode(pos, power, voltage, current, share, label, shortLabel, entityId) {
    const producing = power != null && power > 3;
    const va = [];
    if (voltage != null) va.push(voltage.toFixed(1) + " V");
    if (current != null) va.push(current.toFixed(1) + " A");
    const details = this._show("pv_details");
    const vaText = details && va.length ? `<text class="sf-t-detail" x="${pos.x}" y="${pos.y + 107}">${escapeHtml(va.join(" · "))}</text>` : "";
    const shareText = details && share != null ? ` · ${share}%` : "";
    return `
      <g class="sf-box" data-entity="${entityId || ""}">
        ${this._panelArt(pos.x, pos.y, 88, 44, shortLabel, producing)}
        <text class="sf-t-value" x="${pos.x}" y="${pos.y + 72}">${escapeHtml(this._fmtP(power))}</text>
        <text class="sf-t-label" x="${pos.x}" y="${pos.y + 90}">${escapeHtml(label + shareText)}</text>
        ${vaText}
      </g>`;
  }

  _panelArt(cx, top, w, h, letter, active) {
    const u = this._uid;
    const halfTop = w / 2 - 5,
      halfBot = w / 2;
    const body = `M ${cx - halfTop} ${top} L ${cx + halfTop} ${top} L ${cx + halfBot} ${top + h} L ${cx - halfBot} ${top + h} Z`;
    let grid = "";
    for (let i = 1; i < 4; i++) {
      const t = i / 4;
      const xTop = cx - halfTop + 2 * halfTop * t;
      const xBot = cx - halfBot + 2 * halfBot * t;
      grid += `<line x1="${xTop.toFixed(1)}" y1="${top}" x2="${xBot.toFixed(1)}" y2="${top + h}"></line>`;
    }
    grid += `<line x1="${(cx - (halfTop + halfBot) / 2).toFixed(1)}" y1="${top + h / 2}" x2="${(cx + (halfTop + halfBot) / 2).toFixed(1)}" y2="${top + h / 2}"></line>`;
    const glow = active ? `<path d="${body}" fill="url(#sfPanelOn-${u})"></path>` : "";
    return `
      <g class="sf-panel ${active ? "on" : ""}">
        <path d="${body}" fill="url(#sfPanel-${u})" stroke="#8fa3b8" stroke-width="1.6" stroke-linejoin="round"></path>
        <g class="sf-panel-grid" stroke="#8fa3b8" stroke-width="0.9" opacity="0.55">${grid}</g>
        ${glow}
        <text class="sf-panel-letter" x="${cx}" y="${top + h / 2 + 1}" style="font-size:${letter.length <= 1 ? 19 : letter.length <= 3 ? 15 : 12}px">${escapeHtml(letter)}</text>
        <line x1="${cx}" y1="${top + h}" x2="${cx}" y2="${top + h + 6}" stroke="#8fa3b8" stroke-width="2"></line>
      </g>`;
  }

  _sumNode(pos, solar, today) {
    const color = this._color("solar");
    const todayText =
      today != null ? `<tspan class="sf-t-detail" style="font-size:14px" dx="6">· ${escapeHtml(fmtEnergy(today, 1))} ${t("today")}</tspan>` : "";
    return `
      <g class="sf-box" data-entity="${this._e("solar_power")}">
        <text class="sf-t-sum" x="${pos.x}" y="${pos.y}" fill="${color}">${escapeHtml(this._fmtP(solar))}${todayText}</text>
      </g>`;
  }

  _pvCompactNode(pos, solar, today) {
    const color = this._color("solar");
    const parts = [this._fmtP(solar == null ? 0 : solar)];
    if (today != null) parts.push(fmtEnergy(today, 1) + " " + t("today"));
    const id = this._e("solar_power") || this._e("solar_today") || "";
    return `
      <g class="sf-box" data-entity="${id}">
        ${this._loadArt("sun", pos.x - 104, pos.y - 5, 19, color, false)}
        <text class="sf-t-status" x="${pos.x + 12}" y="${pos.y}" fill="${color}">${escapeHtml(parts.join(" · "))}</text>
        <text class="sf-t-label" x="${pos.x}" y="${pos.y + 19}">${escapeHtml(t("no_production"))}</text>
      </g>`;
  }

  _pvTodayNode(pos, today) {
    const color = this._color("solar_today");
    return `
      <g class="sf-box" data-entity="${this._e("solar_today")}">
        <text class="sf-t-today" x="${pos.x}" y="${pos.y + 30}" fill="${color}">${escapeHtml(fmtEnergy(today, 1))}</text>
        <text class="sf-t-label" x="${pos.x}" y="${pos.y + 50}" style="fill:${color}; opacity:.85">${escapeHtml(t("produced_today"))}</text>
      </g>`;
  }

  _inverterNode(pos) {
    const w = 132,
      h = 132;
    const statusRaw = rawState(this._hass, this._e("inverter_status"));
    const status = this._tr(statusRaw, "run");
    const temp = this._n("inverter_temp");
    const power = this._p("inverter_power");
    const bad = statusRaw && /fault|error|chyba|alarm/i.test(statusRaw);
    const idle = statusRaw && /idle|standby|wait/i.test(statusRaw);
    const ledColor = bad ? "#e0577a" : idle ? "#5b8def" : "#4caf7d";
    const running = !!statusRaw && !idle && !bad;

    const img = this._config.inverter_image;
    const art = img ? "" : `<g transform="translate(${pos.x - 46},${pos.y - h / 2})">${this._inverterArt(92, h, ledColor, running, power)}</g>`;

    const powerLabel = this._config.inverter_power_label === undefined ? t("output") : this._config.inverter_power_label;
    const sub = [];
    if (power != null) sub.push((powerLabel ? powerLabel + " " : "") + this._fmtP(power));
    if (temp != null) sub.push(temp.toFixed(1) + " °C");

    const comm = this._comm("inverter_comm_health", "inverter_comm_rate");
    const commDot = comm
      ? `<circle class="sf-comm-dot sf-comm-${comm.level}" cx="${pos.x + w / 2 - 7}" cy="${pos.y - h / 2 + 7}" r="${comm.level === "ok" ? 4 : 5.5}" fill="${comm.color}"><title>${escapeHtml(comm.text)}</title></circle>`
      : "";
    return `
      <g class="sf-box" data-entity="${this._e("inverter_status")}">
        ${art}
        ${commDot}
        <text class="sf-t-status" x="${pos.x}" y="${pos.y + h / 2 + 22}" fill="${ledColor}">${escapeHtml(status || t("inverter"))}</text>
        <text class="sf-t-detail" x="${pos.x}" y="${pos.y + h / 2 + 40}">${escapeHtml(sub.join(" · "))}</text>
      </g>`;
  }

  _inverterArt(w, h, ledColor, running, power) {
    const u = this._uid;
    const vents = [0, 1, 2, 3, 4]
      .map(
        (i) =>
          `<rect x="${(w * 0.2).toFixed(1)}" y="${94 + i * 7}" width="${(w * 0.6).toFixed(1)}" height="2.4" rx="1.2" fill="#a7b0bb" opacity="0.85"></rect>`,
      )
      .join("");
    return `
      <g class="sf-inv-art">
        <rect x="4" y="8" width="${w - 8}" height="${h - 14}" rx="12" fill="url(#sfInvBody-${u})" stroke="#8c96a2" stroke-width="1.2"></rect>
        <rect x="${w * 0.14}" y="42" width="${w * 0.72}" height="30" rx="5" fill="#11151a" stroke="#5d6773" stroke-width="1"></rect>
        <text x="${w / 2}" y="61" text-anchor="middle" style="font-size:11px; font-weight:700; font-family: ui-monospace, monospace" fill="${running ? "#7fe3a8" : "#5c6673"}">${escapeHtml(power != null ? this._fmtP(power) : "")}</text>
        <circle cx="${w / 2}" cy="82" r="3.4" fill="${ledColor}" class="${running ? "sf-led" : ""}"></circle>
        ${vents}
        <rect x="${w * 0.1}" y="${h - 16}" width="${w * 0.8}" height="13" rx="3.5" fill="#78818d"></rect>
      </g>`;
  }

  _pylonNode(pos, grid, color) {
    const imp = this._n("grid_import_today");
    const exp = this._n("grid_export_today");
    const label = grid == null ? t("grid") : grid < 0 ? t("export") : t("import");
    const details =
      this._show("grid_details") && (imp != null || exp != null)
        ? `<text class="sf-t-detail" x="${pos.x}" y="${pos.y + 148}">↓ ${escapeHtml(fmtEnergy(imp, 1))} · ↑ ${escapeHtml(fmtEnergy(exp, 1))}</text>`
        : "";
    return `
      <g class="sf-box" data-entity="${this._e("grid_power")}">
        ${this._pylonArt(pos.x, pos.y, 78, 100, color, grid != null)}
        <text class="sf-t-status" x="${pos.x}" y="${pos.y + 126}" fill="${color}">${escapeHtml(label)}</text>
        ${details}
      </g>`;
  }

  _tariffNode(pos) {
    if (!this._show("tariff")) return "";
    const lowId = this._e("tariff_low");
    const enabledId = this._e("tariff_enabled");
    const lowRaw = rawState(this._hass, lowId);
    const enabledRaw = rawState(this._hass, enabledId);
    if (!lowRaw && !enabledRaw) return "";

    const parts = [];
    const hasBadge = !!lowRaw;
    const hasDot = !!enabledRaw;
    const badgeW = 46,
      dotR = 6,
      gap = 8;
    const total = (hasBadge ? badgeW : 0) + (hasBadge && hasDot ? gap : 0) + (hasDot ? dotR * 2 : 0);
    let x = pos.x - total / 2;

    if (hasBadge) {
      const low = lowRaw === "on";
      const color = low ? TARIFF_COLORS.low : TARIFF_COLORS.high;
      const text = low ? t("tariff_low_short") : t("tariff_high_short");
      const title = low ? t("tariff_low") : t("tariff_high");
      parts.push(`
        <g class="sf-box sf-tariff" data-entity="${escapeHtml(lowId)}">
          <title>${escapeHtml(title)}</title>
          <rect x="${x}" y="${pos.y - 12}" width="${badgeW}" height="24" rx="12" fill="${color}" opacity="0.18"></rect>
          <rect x="${x}" y="${pos.y - 12}" width="${badgeW}" height="24" rx="12" fill="none" stroke="${color}" stroke-width="1.4" opacity="0.7"></rect>
          <text class="sf-t-tariff" x="${x + badgeW / 2}" y="${pos.y + 5}" fill="${color}">${escapeHtml(text)}</text>
        </g>`);
      x += badgeW + gap;
    }
    if (hasDot) {
      const on = enabledRaw === "on";
      const color = on ? TARIFF_COLORS.enabled : TARIFF_COLORS.disabled;
      const title = on ? t("tariff_enabled") : t("tariff_disabled");
      parts.push(`
        <g class="sf-box sf-tariff-dot" data-entity="${escapeHtml(enabledId)}">
          <circle cx="${x + dotR}" cy="${pos.y}" r="${dotR}" fill="${color}"><title>${escapeHtml(title)}</title></circle>
        </g>`);
    }
    return parts.join("");
  }

  _pylonArt(cx, top, w, h, color, active) {
    const opacity = active ? 1 : 0.45;
    const topY = top + 10;
    const botY = top + h;
    const halfTop = 7,
      halfBot = w * 0.44;
    const lx = (y) => cx - (halfTop + (halfBot - halfTop) * ((y - topY) / (botY - topY)));
    const rx = (y) => cx + (halfTop + (halfBot - halfTop) * ((y - topY) / (botY - topY)));
    const bands = [topY, topY + 22, topY + 44, topY + 66, botY];
    let lattice = "";
    for (let i = 0; i < bands.length - 1; i++) {
      const a = bands[i],
        b = bands[i + 1];
      lattice += `<line x1="${lx(a).toFixed(1)}" y1="${a}" x2="${rx(b).toFixed(1)}" y2="${b}"></line>`;
      lattice += `<line x1="${rx(a).toFixed(1)}" y1="${a}" x2="${lx(b).toFixed(1)}" y2="${b}"></line>`;
      lattice += `<line x1="${lx(b).toFixed(1)}" y1="${b}" x2="${rx(b).toFixed(1)}" y2="${b}"></line>`;
    }
    const armA = topY + 16,
      armB = topY + 40;
    const arms = `
      <line x1="${cx - 30}" y1="${armA}" x2="${cx + 30}" y2="${armA}"></line>
      <line x1="${cx - 24}" y1="${armA}" x2="${cx - 24}" y2="${armA + 7}"></line>
      <line x1="${cx + 24}" y1="${armA}" x2="${cx + 24}" y2="${armA + 7}"></line>
      <line x1="${cx - 38}" y1="${armB}" x2="${cx + 38}" y2="${armB}"></line>
      <line x1="${cx - 31}" y1="${armB}" x2="${cx - 31}" y2="${armB + 7}"></line>
      <line x1="${cx + 31}" y1="${armB}" x2="${cx + 31}" y2="${armB + 7}"></line>`;
    return `
      <g class="sf-pylon" stroke="${color}" stroke-width="2" stroke-linecap="round" fill="none" opacity="${opacity}">
        <line x1="${cx}" y1="${top}" x2="${cx}" y2="${topY}"></line>
        <line x1="${cx - halfTop}" y1="${topY}" x2="${cx}" y2="${top}"></line>
        <line x1="${cx + halfTop}" y1="${topY}" x2="${cx}" y2="${top}"></line>
        <line x1="${lx(topY).toFixed(1)}" y1="${topY}" x2="${lx(botY).toFixed(1)}" y2="${botY}"></line>
        <line x1="${rx(topY).toFixed(1)}" y1="${topY}" x2="${rx(botY).toFixed(1)}" y2="${botY}"></line>
        <g stroke-width="1.3" opacity="0.75">${lattice}</g>
        ${arms}
      </g>`;
  }

  _loadArt(kind, cx, cy, size, color, isActive) {
    const drawings = {
      home: `
        <path d="M -11 0 L 0 -10 L 11 0"></path>
        <path d="M -8 0 L -8 10 L 8 10 L 8 0"></path>
        <path d="M -3 10 L -3 3.5 L 3 3.5 L 3 10"></path>`,
      boiler: `
        <rect x="-8" y="-9.5" width="16" height="19" rx="5"></rect>
        <path d="M -8 -3.5 L 8 -3.5"></path>
        <path d="M -4 -9.5 L -4 -12 M 4 -9.5 L 4 -12"></path>
        <circle cx="0" cy="-6.5" r="1.7"></circle>
        <path d="M 0 9.5 L 0 12 M -3.5 12 L 3.5 12"></path>`,
      car: `
        <path d="M -12.6 2.6 v -2.3 q 0 -1.7 1.7 -2.2 l 2.5 -0.7 l 2.4 -4.1 q 1 -1.7 3 -1.7 h 5.9 q 2 0 3.1 1.6 l 3 4.2 l 2.3 0.7 q 1.7 0.5 1.7 2.2 v 2.3"></path>
        <path d="M -12.6 2.6 h 2.5 M -3.4 2.6 h 6.8 M 10.1 2.6 h 2.5"></path>
        <path d="M -6.6 -2.6 l 1.9 -3.3 q 0.5 -0.9 1.6 -0.9 h 3.2 v 4.2 z"></path>
        <path d="M 1.7 -6.8 h 2.8 q 1.1 0 1.7 0.9 l 2.3 3.3 h -6.8 z"></path>
        <circle cx="-6.8" cy="2.6" r="3.4"></circle>
        <circle cx="6.8" cy="2.6" r="3.4"></circle>`,
      heating: `
        <path d="M -11 -7 L 11 -7 M -11 7 L 11 7"></path>
        <path d="M -7 -7 L -7 7 M -2.4 -7 L -2.4 7 M 2.4 -7 L 2.4 7 M 7 -7 L 7 7"></path>
        <path d="M -11 -9.5 L -11 9.5 M 11 -9.5 L 11 9.5"></path>`,
      cool: `
        <path d="M 0 -11 L 0 11 M -9.5 -5.5 L 9.5 5.5 M -9.5 5.5 L 9.5 -5.5"></path>
        <path d="M -3 -8 L 0 -11 L 3 -8 M -3 8 L 0 11 L 3 8"></path>
        <path d="M -9.5 -1.8 L -9.5 -5.5 L -6.3 -5.5 M 9.5 1.8 L 9.5 5.5 L 6.3 5.5"></path>
        <path d="M -9.5 1.8 L -9.5 5.5 L -6.3 5.5 M 9.5 -1.8 L 9.5 -5.5 L 6.3 -5.5"></path>`,
      heat: `
        <path d="M 1 -12 c 4.6 5 7 8.4 7 12 a 8 8 0 0 1 -16 0 c 0 -2.8 1.4 -5.4 3.4 -7.4 c 0.2 1.8 1 2.9 2 3.2 c 0.6 -3.2 1.4 -5.8 3.6 -7.8 Z"></path>
        <path d="M 0.6 -1.6 c 2.1 2.3 3 3.8 3 5.4 a 3.2 3.2 0 0 1 -6.4 0 c 0 -1.8 1.3 -3.6 3.4 -5.4 Z"></path>`,
      thermo: `
        <path d="M -3 -10 a 3 3 0 0 1 6 0 L 3 3.5 a 4.6 4.6 0 1 1 -6 0 Z"></path>
        <path d="M 0 -5 L 0 5"></path>
        <path d="M 4.5 -7 L 8 -7 M 4.5 -3 L 7 -3 M 4.5 1 L 8 1"></path>`,
      bolt: `<path d="M 2 -11 L -6 1 L -0.5 1 L -2 11 L 6 -1 L 0.5 -1 Z"></path>`,
      plug: `
        <path d="M -4.5 -11 L -4.5 -5 M 4.5 -11 L 4.5 -5"></path>
        <path d="M -8 -5 L 8 -5 L 8 -1 a 8 8 0 0 1 -16 0 Z"></path>
        <path d="M 0 7 L 0 11.5"></path>`,
      battery: `
        <rect x="-10" y="-6" width="17" height="12" rx="2.5"></rect>
        <path d="M 9 -2.5 L 9 2.5"></path>
        <path d="M -6.5 -2.5 L -6.5 2.5 M -2.5 -2.5 L -2.5 2.5 M 1.5 -2.5 L 1.5 2.5"></path>`,
      clock: `
        <circle cx="0" cy="0" r="10"></circle>
        <path d="M 0 -5.5 L 0 0.5 L 4.5 3"></path>`,
      sun: `
        <circle cx="0" cy="0" r="4.6"></circle>
        <path d="M 0 -11 L 0 -8 M 0 8 L 0 11 M -11 0 L -8 0 M 8 0 L 11 0"></path>
        <path d="M -7.8 -7.8 L -5.7 -5.7 M 5.7 5.7 L 7.8 7.8 M 7.8 -7.8 L 5.7 -5.7 M -5.7 5.7 L -7.8 7.8"></path>`,
      down: `<path d="M 0 -9 L 0 9 M -5 4 L 0 9 L 5 4"></path>`,
      up: `<path d="M 0 9 L 0 -9 M -5 -4 L 0 -9 L 5 -4"></path>`,
    };
    const d = drawings[kind];
    if (!d) return "";
    const k = size / 24;
    return `
      <g class="sf-load-art" data-art="${kind}" transform="translate(${cx.toFixed(1)},${cy.toFixed(1)}) scale(${k.toFixed(3)})"
         stroke="${color}" stroke-width="${(2.1 / k).toFixed(2)}" stroke-linecap="round" stroke-linejoin="round"
         fill="none" opacity="${isActive ? 1 : 0.9}">${d}</g>`;
  }

  _mini(kind, size, tone) {
    const inner = this._loadArt(kind, 0, 0, 24, tone || "currentColor", true);
    if (!inner) return "";
    return `<svg class="sf-mini" width="${size}" height="${size}" viewBox="-12 -12 24 24" aria-hidden="true">${inner}</svg>`;
  }

  _loadArtKind(l) {
    if (!l) return "";
    if (l.art) return l.art;
    return ICON_ART[this._loadIcon(l)] || ICON_ART[l.icon] || "";
  }

  _loadNode(pos, color, l, scale) {
    const sc = scale || 1;
    const r = 22 * sc;
    const cy = pos.y + r;
    const vy = cy + r + 22 * sc;
    const ly = vy + 19 * sc;
    const ty = ly + 17 * sc;
    const today =
      l.today != null ? `<text class="sf-t-detail" x="${pos.x}" y="${ty.toFixed(1)}">${escapeHtml(fmtEnergy(l.today, 1))} ${t("today")}</text>` : "";
    const isOn = l.value != null && l.value > 3;
    const idle = !l.is_home && this._show("dim_idle_loads") && !isOn;
    const tone = isOn || l.is_home ? color : IDLE_LOAD_COLOR;
    const kind = this._loadArtKind(l);
    const iconSvg = kind
      ? this._loadArt(kind, pos.x, cy, 30 * sc, tone, isOn)
      : `<text class="sf-t-icon" x="${pos.x}" y="${cy.toFixed(1)}" style="font-size:${(23 * sc).toFixed(1)}px">${l.icon || "⚡"}</text>`;
    return `
      <g class="sf-box${idle ? " sf-load-idle" : ""}" data-entity="${l.entity || ""}">
        <circle cx="${pos.x}" cy="${cy.toFixed(1)}" r="${r.toFixed(1)}" fill="${tone}" opacity="${isOn ? 0.16 : 0.09}"></circle>
        <circle cx="${pos.x}" cy="${cy.toFixed(1)}" r="${r.toFixed(1)}" fill="none" stroke="${tone}" stroke-width="1.5" opacity="${isOn ? 0.55 : 0.35}"></circle>
        ${iconSvg}
        <text class="sf-t-value" x="${pos.x}" y="${vy.toFixed(1)}" style="font-size:${(24 * sc).toFixed(1)}px">${escapeHtml(this._fmtP(l.value))}</text>
        <text class="sf-t-label" x="${pos.x}" y="${ly.toFixed(1)}" style="font-size:${(13 * sc).toFixed(1)}px">${escapeHtml(l.label)}</text>
        ${today}
      </g>`;
  }

  _homeNode(pos, item) {
    const color = item.color;
    const w = 236,
      h = 86,
      x = pos.x - w / 2;
    const isOn = item.value != null && item.value > 3;
    const today =
      item.today != null
        ? `<text class="sf-t-detail" x="${(pos.x + 34).toFixed(1)}" y="${(pos.y + 68).toFixed(1)}">${escapeHtml(fmtEnergy(item.today, 1))} ${t("today")}</text>`
        : "";
    const kind = this._loadArtKind(item) || "home";
    return `
      <g class="sf-box sf-home" data-entity="${item.entity || ""}">
        <rect x="${x}" y="${pos.y}" width="${w}" height="${h}" rx="18" fill="${color}" opacity="${isOn ? 0.12 : 0.07}"></rect>
        <rect x="${x}" y="${pos.y}" width="${w}" height="${h}" rx="18" fill="none" stroke="${color}" stroke-width="1.8" opacity="${isOn ? 0.7 : 0.4}"></rect>
        ${this._loadArt(kind, x + 46, pos.y + h / 2, 46, color, isOn)}
        <text class="sf-t-value" x="${(pos.x + 34).toFixed(1)}" y="${(pos.y + 46).toFixed(1)}" style="font-size:32px">${escapeHtml(this._fmtP(item.value))}</text>
        ${today}
        <text class="sf-t-label" x="${pos.x}" y="${(pos.y + h + 22).toFixed(1)}">${escapeHtml(item.label)}</text>
      </g>`;
  }

  _batteryNode(pos, power, soc, dirColor) {
    const socClamped = soc == null ? null : clamp(soc, 0, 100);
    const socColor = socClamped == null ? dirColor : socClamped < 20 ? "#e0577a" : socClamped < 50 ? "#e0a020" : "#4caf7d";
    const charging = power != null && power > 3;
    const discharging = power != null && power < -3;
    const details = this._show("battery_details");

    const bw = 50,
      bh = 78,
      bx = pos.x - bw / 2,
      by = pos.y;
    const innerH = bh - 6;
    const fillH = socClamped == null ? 0 : innerH * (socClamped / 100);
    const fillY = by + 3 + (innerH - fillH);

    const minSoc = this._n("battery_min_soc");
    const maxSoc = this._n("battery_max_soc");
    const markerY = (pct) => by + 3 + innerH * (1 - clamp(pct, 0, 100) / 100);
    let markers = "";
    const marker = (pct, color, caption, below) => {
      const y = markerY(pct);
      const yValue = below ? y - 2 : y + 4.2;
      const yCaption = below ? y + 9 : y + 15;
      return (
        `<line class="sf-marker-line" x1="${(bx - 4).toFixed(1)}" y1="${y.toFixed(1)}" x2="${(bx + bw + 4).toFixed(1)}" y2="${y.toFixed(1)}" stroke="${color}"><title>${escapeHtml(caption + " " + Math.round(pct) + " %")}</title></line>` +
        `<text class="sf-batt-mark" x="${(bx - 7).toFixed(1)}" y="${yValue.toFixed(1)}" fill="${color}">${Math.round(pct)}%</text>` +
        `<text class="sf-batt-mark-label" x="${(bx - 7).toFixed(1)}" y="${yCaption.toFixed(1)}" fill="${color}">${escapeHtml(caption)}</text>`
      );
    };
    const hasMax = maxSoc != null && maxSoc < 100;
    const closeTogether = minSoc != null && hasMax && Math.abs(maxSoc - minSoc) < 22;
    if (closeTogether) {
      const lo = Math.min(minSoc, maxSoc),
        hi = Math.max(minSoc, maxSoc);
      const y = markerY(lo);
      const valueText = Math.round(lo) === Math.round(hi) ? `${Math.round(lo)}%` : `${Math.round(lo)}–${Math.round(hi)}%`;
      const caption = Math.round(lo) === Math.round(hi) ? "Min = Max" : maxSoc < minSoc ? "Max · Min" : "Min · Max";
      const tone = "#e0a020";
      const tip = `Min SOC ${Math.round(minSoc)} % · Max SOC ${Math.round(maxSoc)} %`;
      markers +=
        `<line class="sf-marker-line" x1="${(bx - 4).toFixed(1)}" y1="${markerY(minSoc).toFixed(1)}" x2="${(bx + bw + 4).toFixed(1)}" y2="${markerY(minSoc).toFixed(1)}" stroke="#e0577a"><title>${escapeHtml(tip)}</title></line>` +
        `<line class="sf-marker-line" x1="${(bx - 4).toFixed(1)}" y1="${markerY(maxSoc).toFixed(1)}" x2="${(bx + bw + 4).toFixed(1)}" y2="${markerY(maxSoc).toFixed(1)}" stroke="#4caf7d"><title>${escapeHtml(tip)}</title></line>` +
        `<text class="sf-batt-mark" x="${(bx - 7).toFixed(1)}" y="${(y + 4.2).toFixed(1)}" fill="${tone}">${escapeHtml(valueText)}</text>` +
        `<text class="sf-batt-mark-label" x="${(bx - 7).toFixed(1)}" y="${(y + 15).toFixed(1)}" fill="${tone}">${escapeHtml(caption)}</text>`;
    } else {
      if (minSoc != null) markers += marker(minSoc, "#e0577a", "Min SOC", false);
      if (hasMax) markers += marker(maxSoc, "#4caf7d", "Max SOC", true);
    }

    const arrow = "";

    const powerText = power == null ? "" : charging ? t("charging") : discharging ? t("discharging") : t("idle");
    const socText = socClamped != null ? Math.round(socClamped) + "%" : "--";

    const volt = this._n("battery_voltage");
    const curr = this._n("battery_current");
    const temp = this._n("battery_temp");
    const chToday = this._n("battery_charge_today");
    const disToday = this._n("battery_discharge_today");
    const runtime = this._batteryRuntime(power, soc);

    let y = by + bh + 32;
    let rows = `<text class="sf-t-value" x="${pos.x}" y="${y}" style="font-size:32px">${escapeHtml(socText)}</text>`;
    y += 23;
    rows += `<text class="sf-t-label" x="${pos.x}" y="${y}" style="fill:${dirColor}; font-size:14.5px; text-transform:none">${escapeHtml(powerText)}</text>`;
    if (details) {
      const parts = [];
      if (volt != null) parts.push(volt.toFixed(1) + " V");
      if (curr != null) parts.push(curr.toFixed(1) + " A");
      if (temp != null) parts.push(temp.toFixed(0) + " °C");
      if (parts.length) {
        y += 20;
        rows += `<text class="sf-t-detail" x="${pos.x}" y="${y}">${escapeHtml(parts.join(" · "))}</text>`;
      }
      if (chToday != null || disToday != null) {
        y += 19;
        rows += `<text class="sf-t-detail" x="${pos.x}" y="${y}">↓ ${escapeHtml(fmtEnergy(chToday, 1))} · ↑ ${escapeHtml(fmtEnergy(disToday, 1))}</text>`;
      }
    }
    if (runtime) {
      y += 19;
      rows += `<text class="sf-t-detail" x="${pos.x}" y="${y}">${escapeHtml(runtime)}</text>`;
    }

    return `
      <g class="sf-box sf-batt-graphic" data-entity="${this._e("battery_power")}">
        <rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="9" fill="none" stroke="${socColor}" stroke-width="2.5"></rect>
        <rect x="${pos.x - 9}" y="${by - 6}" width="18" height="6" rx="2" fill="${socColor}"></rect>
        ${this._battSegments(bx, by, bw, innerH, socClamped, socColor, discharging)}
        ${markers}
        ${arrow}
        ${rows}
      </g>`;
  }

  _battSegments(bx, by, bw, innerH, soc, color, isDischarging) {
    if (soc == null) return "";
    const segCount = this._config.battery_segments || 3;
    const segGap = 2.4;
    const segHeight = (innerH - segGap * (segCount - 1)) / segCount;
    let out = "";
    for (let i = 0; i < segCount; i++) {
      const fromPct = (i / segCount) * 100;
      const toPct = ((i + 1) / segCount) * 100;
      const fraction = clamp((soc - fromPct) / (toPct - fromPct), 0, 1);
      const y = by + 3 + (innerH - (i + 1) * segHeight - i * segGap);
      out += `<rect x="${(bx + 3).toFixed(1)}" y="${y.toFixed(1)}" width="${(bw - 6).toFixed(1)}" height="${segHeight.toFixed(1)}" rx="2" fill="${color}" opacity="0.13"></rect>`;
      if (fraction > 0) {
        const h = segHeight * fraction;
        const isLast = isDischarging && soc < toPct;
        out += `<rect class="sf-batt-fill${isLast ? " sf-batt-blink" : ""}" x="${(bx + 3).toFixed(1)}" y="${(y + segHeight - h).toFixed(1)}" width="${(bw - 6).toFixed(1)}" height="${h.toFixed(1)}" rx="2" fill="${color}" opacity="0.9"></rect>`;
      }
    }
    return out;
  }

  _batteryRuntime(power, soc) {
    if (!this._show("battery_runtime")) return "";
    let capacity = this._config.battery_capacity_kwh;
    if (!capacity) {
      const bms = this._n("battery_capacity");
      if (bms) capacity = bms / 1000;
    }
    if (!capacity || soc == null || power == null) return "";
    let target = this._config.battery_runtime_target;
    if (target == null) target = this._n("battery_min_soc");
    if (target == null) target = 15;
    if (power < -3) {
      const usableKwh = (capacity * (soc - target)) / 100;
      if (usableKwh <= 0) return t("below_target");
      const hours = usableKwh / (Math.abs(power) / 1000);
      return this._fmtHours(hours) + ` ${t("to")} ${Math.round(target)}%`;
    }
    if (power > 3) {
      let upper = this._n("battery_max_soc");
      if (upper == null) upper = 100;
      const remainKwh = (capacity * (upper - soc)) / 100;
      if (remainKwh <= 0) return t("full");
      const hours = remainKwh / (power / 1000);
      return this._fmtHours(hours) + ` ${t("to")} ${Math.round(upper)}%`;
    }
    return "";
  }

  _fmtHours(hours) {
    if (!isFinite(hours) || hours <= 0) return "--";
    if (hours > 99) return "99h+";
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return h > 0 ? `${h}h ${m}m` : `${m}m`;
  }

  _renderBatterySettings() {
    const wrap = this.querySelector(".sf-batt-settings");
    const minId = this._e("battery_min_soc");
    const maxId = this._e("battery_max_soc");
    const show = this._show("battery_settings") && (minId || maxId);
    wrap.className = "sf-batt-settings sf-fold" + (show ? "" : " hidden");
    if (!show) return;

    const body = wrap.querySelector(".sf-fold-body");
    const ensure = (key, label, id, color) => {
      if (id && !wrap.querySelector(`.sf-set-row[data-key="${key}"]`)) body.appendChild(this._sliderRow(key, label, id, color));
    };
    ensure("min", t("discharge_to"), minId, "#e0577a");
    ensure("max", t("charge_to"), maxId, "#4caf7d");
    this._battSettingsBuilt = true;
    if (minId) this._updateSliderRow("min", minId);
    if (maxId) this._updateSliderRow("max", maxId);

    const minV = this._n("battery_min_soc");
    const maxV = this._n("battery_max_soc");
    const parts = [];
    if (minV != null) parts.push(Math.round(minV));
    if (maxV != null) parts.push(Math.round(maxV));
    const txt = parts.length ? parts.join("/") + " %" : "";
    const el = wrap.querySelector(".sf-fold-val");
    if (el && el.textContent !== txt) el.textContent = txt;
  }

  _sliderRow(key, label, entityId, color, unit) {
    const row = document.createElement("div");
    row.className = "sf-set-row";
    row.dataset.key = key;
    const head = document.createElement("div");
    head.className = "sf-set-head";
    const lab = document.createElement("div");
    lab.className = "sf-set-label";
    lab.textContent = label;
    const val = document.createElement("div");
    val.className = "sf-set-value";
    val.style.color = color;
    head.appendChild(lab);
    head.appendChild(val);
    row.appendChild(head);

    const slider = document.createElement("input");
    slider.type = "range";
    slider.className = "sf-slider";
    slider.style.setProperty("--sf-slider-color", color);
    const u = unit || " %";
    slider.oninput = () => {
      val.textContent = slider.value + u;
    };
    slider.onchange = () => this._setNumber(entityId, slider.value);
    row.appendChild(slider);
    return row;
  }

  _updateSliderRow(key, entityId, unit) {
    const row = this.querySelector(`.sf-set-row[data-key="${key}"]`);
    if (!row) return;
    const slider = row.querySelector(".sf-slider");
    const val = row.querySelector(".sf-set-value");
    const st = this._hass.states[entityId];
    if (!st) return;
    const a = st.attributes || {};
    slider.min = a.min != null ? a.min : 0;
    slider.max = a.max != null ? a.max : 100;
    slider.step = a.step != null ? a.step : 1;
    if (document.activeElement !== slider) {
      const v = parseFloat(st.state);
      if (!isNaN(v)) {
        slider.value = v;
        val.textContent = Math.round(v) + (unit || " %");
      }
    }
  }

  _renderWallboxPanel() {
    const wrap = this.querySelector(".sf-wallbox-panel");
    const show = this._show("wallbox_panel") && !!this._e("wallbox_power");
    wrap.className = "sf-wallbox-panel sf-panel" + (show ? "" : " hidden");
    if (!show) return;

    const power = this._p("wallbox_power");
    const statusRaw = rawState(this._hass, this._e("wallbox_status"));
    const status = this._tr(statusRaw, "wallbox");
    const added = this._n("wallbox_added");
    let todayKwh = this._n("wallbox_today");
    const todayId = this._e("wallbox_today");
    if (todayKwh == null && todayId && this._hass.states[todayId] && this._hass.states[todayId].state === "unknown") todayKwh = 0;
    const temp = this._n("wallbox_temp");
    const modeEntity = this._e("wallbox_mode");
    const currentEntity = this._e("wallbox_current");
    const max = this._config.wallbox_max_power || 11000;
    const pct = power == null ? 0 : clamp((power / max) * 100, 0, 100);
    const notCharging = WB_NOT_CHARGING.test(statusRaw || "");
    const charging = (power != null && power > 50) || (!notCharging && /charg/i.test(statusRaw || ""));
    const wbColor = this._color("wallbox");
    const ledColor = charging ? "#4caf7d" : /fault|error/i.test(statusRaw || "") ? "#e0577a" : "#5b8def";
    const pColor = powerColor(pct);

    if (!this._wbBuilt) {
      const art = this._config.wallbox_image
        ? `<img class="sf-wb-art" src="${escapeHtml(this._config.wallbox_image)}" alt="wallbox">`
        : `<svg class="sf-wb-art" viewBox="0 0 66 98">${this._defs()}${this._wallboxArt(66, 98, ledColor, charging, power)}</svg>`;
      wrap.innerHTML = `
        <div class="sf-wb-top">
          ${art}
          <div class="sf-wb-info">
            <div class="sf-wb-title"><span class="sf-comm-led" hidden></span>Wallbox</div>
            <div class="sf-wb-status">--</div>
            <div class="sf-wb-meta"></div>
          </div>
          <div class="sf-wb-power">--</div>
        </div>
        <div class="sf-bar-wrap"><div class="sf-bar-fill" style="width:0%"></div></div>
        <div class="sf-bar-ticks"><span>0 W</span><span>${max.toLocaleString(numberLocale())} W</span></div>
        <div class="sf-car">
          <div class="sf-car-top">
            <span class="sf-car-icon">${this._mini("car", 19)}</span>
            <span class="sf-car-soc">--</span>
            <span class="sf-car-meta"></span>
          </div>
          <div class="sf-car-bar"><div class="sf-car-fill"></div><div class="sf-car-target"></div></div>
        </div>
        <div class="sf-modes">
          <div class="sf-chips-title">${escapeHtml(t("charge_mode"))}</div>
          <div class="sf-chips"></div>
        </div>
        <details class="sf-wb-fold sf-fold">
          <summary class="sf-fold-summary">${this._mini("bolt", 16)} <span class="sf-fold-title">${escapeHtml(t("charge_current"))}</span> <span class="sf-fold-val"></span></summary>
          <div class="sf-fold-body"></div>
        </details>`;

      this._wbBuilt = true;
      this._wbChipsKey = null;
    }

    const set = (sel, text) => {
      const el = wrap.querySelector(sel);
      if (el && el.textContent !== text) el.textContent = text;
    };
    const setHtml = (sel, html) => {
      const el = wrap.querySelector(sel);
      if (el && el.innerHTML !== html) el.innerHTML = html;
    };
    const metaItem = (kind, text) => `<span class="sf-meta-item">${kind ? this._mini(kind, 14) : ""}${escapeHtml(text)}</span>`;
    set(".sf-wb-status", status || "--");
    const meta = [];
    if (todayKwh != null) meta.push(metaItem("car", fmtEnergy(todayKwh, 1) + " " + t("today")));
    if (added != null && this._show("wallbox_session")) meta.push(metaItem("", fmtEnergy(added, 1) + " " + t("this_session")));
    if (temp != null) meta.push(metaItem("thermo", temp.toFixed(0) + " °C"));
    setHtml(".sf-wb-meta", meta.join('<span class="sf-meta-sep">·</span>'));
    set(".sf-wb-power", this._fmtP(power));

    const led = wrap.querySelector(".sf-comm-led");
    const wbComm = this._comm("wallbox_comm_health", "wallbox_comm_rate");
    if (led) {
      led.hidden = !wbComm;
      if (wbComm) {
        led.className = "sf-comm-led sf-comm-" + wbComm.level;
        led.style.background = wbComm.color;
        led.title = wbComm.text;
      }
    }

    const pw = wrap.querySelector(".sf-wb-power");
    if (pw) pw.style.color = pColor;
    const fill = wrap.querySelector(".sf-bar-fill");
    if (fill) {
      fill.style.width = pct + "%";
      fill.style.backgroundSize = (pct > 0 ? 10000 / pct : 100).toFixed(1) + "% 100%";
    }
    const noDraw = power == null || power <= 0;
    const barWrap = wrap.querySelector(".sf-bar-wrap");
    const barTicks = wrap.querySelector(".sf-bar-ticks");
    if (barWrap) barWrap.classList.toggle("hidden", noDraw);
    if (barTicks) barTicks.classList.toggle("hidden", noDraw);

    const carWrap = wrap.querySelector(".sf-car");
    const soc = this._n("car_soc");
    const showCar = this._show("car") && soc != null;
    if (carWrap) {
      carWrap.classList.toggle("hidden", !showCar);
      if (showCar) {
        const target = this._n("car_target_soc");
        const mins = this._n("car_time_remaining");
        const km = this._n("car_range");
        const socC = clamp(soc, 0, 100);
        const socColor = socC < 20 ? "#e0577a" : socC < 50 ? "#e0a020" : "#4caf7d";
        set(".sf-car-soc", Math.round(socC) + " %");
        const el = carWrap.querySelector(".sf-car-soc");
        if (el) el.style.color = socColor;
        const meta = [];
        const plugRaw = rawState(this._hass, this._e("car_plug"));
        const stateRaw = rawState(this._hass, this._e("car_state"));
        let carState = stateRaw ? this._tr(stateRaw, "car") : "";
        const carReportsCharge = !!carState;
        if (!carState && plugRaw) carState = plugRaw === "on" ? t("plugged") : t("unplugged");
        if (carState) meta.push(metaItem("plug", carState));
        if (km != null) meta.push(metaItem("", Math.round(km) + " km"));
        if (mins != null && mins > 0) meta.push(metaItem("clock", this._fmtHours(mins / 60)));
        else if (charging && !carReportsCharge) meta.push(metaItem("", t("charging")));
        if (target != null) meta.push(metaItem("", t("target") + " " + Math.round(target) + " %"));
        setHtml(".sf-car-meta", meta.join('<span class="sf-meta-sep">·</span>'));
        const fill = carWrap.querySelector(".sf-car-fill");
        if (fill) {
          fill.style.width = socC + "%";
          fill.style.background = socColor;
        }
        const tgt = carWrap.querySelector(".sf-car-target");
        if (tgt) {
          const show = target != null && target < 100;
          tgt.style.display = show ? "block" : "none";
          if (show) tgt.style.left = clamp(target, 0, 100) + "%";
        }
      }
    }

    if (modeEntity && this._hass.states[modeEntity]) {
      const st = this._hass.states[modeEntity];
      const options = st.attributes.options || [];
      const hasStopOption = options.some((o) => /^(stop|stopped|pause|paused)$/i.test(o));
      const stopId = this._show("wallbox_stop") && !hasStopOption ? this._stopEntity() : "";
      const ordered = options.slice().sort((a, b) => {
        const ia = WB_MODE_ORDER.indexOf(a),
          ib = WB_MODE_ORDER.indexOf(b);
        return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
      });
      const key = ordered.join("|") + "#" + st.state + "#" + stopId;
      if (key !== this._wbChipsKey) {
        const chips = wrap.querySelector(".sf-chips");
        let html = ordered
          .map((o) => {
            const c = WB_MODE_COLORS[o] || wbColor;
            const on = o === st.state;
            const style = on ? `background:${c}; border-color:${c}; color:#fff;` : `border-color:${c}; color:${c};`;
            return `<button class="sf-chip ${on ? "active" : ""}" style="${style}" data-mode="${escapeHtml(o)}">${escapeHtml(this._tr(o, "wallbox"))}</button>`;
          })
          .join("");
        if (stopId) {
          html += `<button class="sf-chip sf-chip-stop" style="border-color:${WB_STOP_COLOR}; color:${WB_STOP_COLOR};" data-stop="${escapeHtml(stopId)}">⏹ ${escapeHtml(t("stop"))}</button>`;
        }
        chips.innerHTML = html;
        chips.querySelectorAll(".sf-chip[data-mode]").forEach((btn) => {
          btn.onclick = () => this._hass.callService("select", "select_option", { entity_id: modeEntity, option: btn.dataset.mode });
        });
        const stopBtn = chips.querySelector(".sf-chip-stop");
        if (stopBtn) stopBtn.onclick = () => this._stopCharging(stopBtn.dataset.stop);
        this._wbChipsKey = key;
      }
    }
    const modesBox = wrap.querySelector(".sf-modes");
    const chipsWrap = wrap.querySelector(".sf-chips");
    if (modesBox) modesBox.classList.toggle("hidden", !chipsWrap || !chipsWrap.querySelector(".sf-chip"));

    const foldEl = wrap.querySelector(".sf-wb-fold");
    const hasCurrent = this._show("wallbox_settings") && !!currentEntity;
    if (foldEl) foldEl.classList.toggle("hidden", !hasCurrent);
    const carLimitId = this._e("car_limit");
    if (this._show("wallbox_settings") && carLimitId && this._hass.states[carLimitId]) {
      if (!wrap.querySelector('.sf-set-row[data-key="carlimit"]')) {
        wrap.querySelector(".sf-wb-fold .sf-fold-body").appendChild(this._sliderRow("carlimit", t("car_limit"), carLimitId, "#4caf7d", " %"));
      }
      this._updateSliderRow("carlimit", carLimitId, " %");
      if (foldEl) foldEl.classList.remove("hidden");
    }

    if (hasCurrent) {
      if (!wrap.querySelector('.sf-set-row[data-key="wbcurrent"]')) {
        wrap.querySelector(".sf-wb-fold .sf-fold-body").appendChild(this._sliderRow("wbcurrent", t("charge_current"), currentEntity, wbColor, " A"));
      }
      this._updateSliderRow("wbcurrent", currentEntity, " A");
      const v = this._n("wallbox_current");
      const lbl = wrap.querySelector(".sf-wb-fold .sf-fold-val");
      const txt = v != null ? Math.round(v) + " A" : "";
      if (lbl && lbl.textContent !== txt) lbl.textContent = txt;
    }
  }

  _wallboxArt(w, h, ledColor, charging, power) {
    const u = this._uid;
    const screenText = power != null && power > 0 ? this._fmtP(power) : "";
    return `
      <g>
        <rect x="3" y="2" width="${w - 6}" height="${h - 22}" rx="13" fill="url(#sfWbBody-${u})" stroke="#4c545f" stroke-width="1.2"></rect>
        <rect x="${w * 0.16}" y="12" width="${w * 0.68}" height="22" rx="5" fill="#0d1116" stroke="#39414c"></rect>
        <text x="${w / 2}" y="27" text-anchor="middle" style="font-size:9px; font-weight:700; font-family: ui-monospace, monospace" fill="${charging ? "#7fe3a8" : "#5c6673"}">${escapeHtml(screenText)}</text>
        <circle cx="${w / 2}" cy="${h * 0.55}" r="12" fill="none" stroke="${ledColor}" stroke-width="2.6" class="${charging ? "sf-led" : ""}" opacity="0.9"></circle>
        <path d="M ${w / 2 - 3.5} ${h * 0.55 - 6} l 7 0 l -4 5 l 5 0 l -9 10 l 3 -8 l -5 0 z" fill="${ledColor}"></path>
        <path d="M ${w - 10} ${h - 30} q 16 8 9 26" fill="none" stroke="#2b3138" stroke-width="4.5" stroke-linecap="round"></path>
        <circle cx="${w - 2}" cy="${h - 4}" r="4" fill="#3b424b" stroke="#555d68"></circle>
      </g>`;
  }

  _renderPhaseDetails() {
    const wrap = this.querySelector(".sf-phases");
    const body = this.querySelector(".sf-phases-body");

    const defs = [
      { key: "gp", label: t("ph_grid_power"), keys: ["grid_power_l1", "grid_power_l2", "grid_power_l3"], adjust: true },
      { key: "gv", label: t("ph_grid_voltage"), keys: ["grid_voltage_l1", "grid_voltage_l2", "grid_voltage_l3"], unit: "V" },
      { key: "iv", label: t("ph_inv_voltage"), keys: ["inverter_voltage_l1", "inverter_voltage_l2", "inverter_voltage_l3"], unit: "V" },
      { key: "ia", label: t("ph_inv_current"), keys: ["inverter_current_l1", "inverter_current_l2", "inverter_current_l3"], unit: "A" },
    ].filter((d) => d.keys.some((k) => !!this._e(k)));

    const show = this._show("phase_details") && defs.length > 0;
    wrap.className = "sf-phases" + (show ? "" : " hidden");
    if (!show) return;

    if (!this._phasesBuilt) {
      body.innerHTML = `
        <table class="sf-ph-table">
          <thead><tr><th></th><th>L1</th><th>L2</th><th>L3</th></tr></thead>
          <tbody>
            ${defs.map((d) => `<tr><td>${escapeHtml(d.label)}</td>${[0, 1, 2].map((i) => `<td data-cell="${d.key}${i}">--</td>`).join("")}</tr>`).join("")}
          </tbody>
        </table>`;
      this._phasesBuilt = true;
    }

    const grid = this._gridValue();
    const gridP = defs.find((d) => d.adjust) ? [this._p("grid_power_l1"), this._p("grid_power_l2"), this._p("grid_power_l3")] : [];
    const phaseSum = gridP.reduce((s2, v) => s2 + (v || 0), 0);
    const flip = grid != null && phaseSum !== 0 && Math.sign(phaseSum) !== Math.sign(grid);

    defs.forEach((d) => {
      d.keys.forEach((k, i) => {
        let v = d.adjust ? numPower(this._hass, this._e(k)) : this._n(k);
        if (d.adjust && v != null && flip) v = -v;
        const text = d.adjust ? this._fmtP(v) : fmtUnit(v, d.unit, 1);
        const cell = body.querySelector(`[data-cell="${d.key}${i}"]`);
        if (cell && cell.textContent !== text) cell.textContent = text;
      });
    });
  }

  _renderTodayRow() {
    const wrap = this.querySelector(".sf-today-row");
    const show = this._show("energy_today");
    wrap.className = "sf-today-row" + (show ? "" : " hidden");
    if (!show) return;
    const items = [
      { label: t("st_solar"), key: "solar_today", icon: "☀️" },
      { label: t("st_home"), key: "total_today", icon: "🏠" },
      { label: t("st_import"), key: "grid_import_today", icon: "⬇️" },
      { label: t("st_export"), key: "grid_export_today", icon: "⬆️" },
      { label: t("st_charged"), key: "battery_charge_today", icon: "🔋" },
      { label: t("st_discharged"), key: "battery_discharge_today", icon: "🪫" },
    ].filter((it) => this._e(it.key));
    if (!items.length) {
      wrap.className = "sf-today-row hidden";
      return;
    }
    wrap.innerHTML = items
      .map(
        (it) =>
          `<div class="sf-stat"><div class="sf-stat-label">${it.icon} ${escapeHtml(it.label)}</div><div class="sf-stat-value">${fmtEnergy(this._n(it.key), 1)}</div></div>`,
      )
      .join("");
  }
}

const ENTITY_FIELDS = [
  { key: "pv1_power", domains: ["sensor"], group: "solar" },
  { key: "pv1_voltage", domains: ["sensor"], group: "solar" },
  { key: "pv1_current", domains: ["sensor"], group: "solar" },
  { key: "pv2_power", domains: ["sensor"], group: "solar" },
  { key: "pv2_voltage", domains: ["sensor"], group: "solar" },
  { key: "pv2_current", domains: ["sensor"], group: "solar" },
  { key: "solar_power", domains: ["sensor"], group: "solar" },
  { key: "solar_today", domains: ["sensor"], group: "solar" },
  { key: "inverter_status", domains: ["sensor"], group: "inverter" },
  { key: "inverter_temp", domains: ["sensor"], group: "inverter" },
  { key: "inverter_comm_health", domains: ["sensor"], group: "inverter" },
  { key: "inverter_comm_rate", domains: ["sensor"], group: "inverter" },
  { key: "inverter_power", domains: ["sensor"], group: "inverter" },
  { key: "inverter_voltage_l1", domains: ["sensor"], group: "inverter" },
  { key: "inverter_voltage_l2", domains: ["sensor"], group: "inverter" },
  { key: "inverter_voltage_l3", domains: ["sensor"], group: "inverter" },
  { key: "inverter_current_l1", domains: ["sensor"], group: "inverter" },
  { key: "inverter_current_l2", domains: ["sensor"], group: "inverter" },
  { key: "inverter_current_l3", domains: ["sensor"], group: "inverter" },
  { key: "grid_power", domains: ["sensor"], group: "grid" },
  { key: "tariff_low", domains: ["switch", "binary_sensor", "input_boolean"], group: "grid" },
  { key: "tariff_enabled", domains: ["input_boolean", "switch", "binary_sensor"], group: "grid" },
  { key: "grid_import_today", domains: ["sensor"], group: "grid" },
  { key: "grid_export_today", domains: ["sensor"], group: "grid" },
  { key: "grid_power_l1", domains: ["sensor"], group: "grid" },
  { key: "grid_power_l2", domains: ["sensor"], group: "grid" },
  { key: "grid_power_l3", domains: ["sensor"], group: "grid" },
  { key: "grid_voltage_l1", domains: ["sensor"], group: "grid" },
  { key: "grid_voltage_l2", domains: ["sensor"], group: "grid" },
  { key: "grid_voltage_l3", domains: ["sensor"], group: "grid" },
  { key: "battery_power", domains: ["sensor"], group: "battery" },
  { key: "battery_soc", domains: ["sensor"], group: "battery" },
  { key: "battery_voltage", domains: ["sensor"], group: "battery" },
  { key: "battery_current", domains: ["sensor"], group: "battery" },
  { key: "battery_temp", domains: ["sensor"], group: "battery" },
  { key: "battery_charge_today", domains: ["sensor"], group: "battery" },
  { key: "battery_discharge_today", domains: ["sensor"], group: "battery" },
  { key: "battery_capacity", domains: ["sensor"], group: "battery" },
  { key: "battery_min_soc", domains: ["number"], group: "battery" },
  { key: "battery_max_soc", domains: ["number"], group: "battery" },
  { key: "total_power", domains: ["sensor"], group: "home" },
  { key: "total_today", domains: ["sensor"], group: "home" },
  { key: "wallbox_power", domains: ["sensor"], group: "wallbox" },
  { key: "wallbox_status", domains: ["sensor"], group: "wallbox" },
  { key: "wallbox_mode", domains: ["select"], group: "wallbox" },
  { key: "wallbox_stop", domains: ["select", "switch", "button", "input_boolean", "input_select"], group: "wallbox" },
  { key: "wallbox_current", domains: ["number"], group: "wallbox" },
  { key: "wallbox_added", domains: ["sensor"], group: "wallbox" },
  { key: "wallbox_today", domains: ["sensor"], group: "wallbox" },
  { key: "wallbox_temp", domains: ["sensor"], group: "wallbox" },
  { key: "car_soc", domains: ["sensor"], group: "wallbox" },
  { key: "car_time_remaining", domains: ["sensor"], group: "wallbox" },
  { key: "car_range", domains: ["sensor"], group: "wallbox" },
  { key: "car_target_soc", domains: ["sensor"], group: "wallbox" },
  { key: "car_limit", domains: ["number"], group: "wallbox" },
  { key: "car_plug", domains: ["binary_sensor"], group: "wallbox" },
  { key: "car_state", domains: ["sensor"], group: "wallbox" },
  { key: "wallbox_comm_health", domains: ["sensor"], group: "wallbox" },
  { key: "wallbox_comm_rate", domains: ["sensor"], group: "wallbox" },
];

const SHOW_FIELDS = [
  { key: "pv_split" },
  { key: "pv_details" },
  { key: "solar_sum" },
  { key: "battery" },
  { key: "battery_details" },
  { key: "battery_settings" },
  { key: "battery_runtime" },
  { key: "grid" },
  { key: "grid_details" },
  { key: "loads" },
  { key: "wallbox_panel" },
  { key: "wallbox_settings" },
  { key: "car" },
  { key: "wallbox_session" },
  { key: "wallbox_stop" },
  { key: "night_compact" },
  { key: "dim_idle_loads" },
  { key: "tariff" },
  { key: "diagnostics" },
  { key: "phase_details" },
  { key: "energy_today" },
  { key: "translate_sk" },
  { key: "animation" },
];

const COLOR_FIELDS = [
  { key: "solar" },
  { key: "battery_charge" },
  { key: "battery_discharge" },
  { key: "solar_today" },
  { key: "grid_import" },
  { key: "grid_export" },
  { key: "hub" },
  { key: "home" },
  { key: "wallbox" },
];

class SolaxFveCardEditor extends HTMLElement {
  constructor() {
    super();
    this._config = { loads: [] };
    this._built = false;
  }

  setConfig(config) {
    this._config = JSON.parse(JSON.stringify(config || {}));
    if (!Array.isArray(this._config.loads)) this._config.loads = [];
    if (this._hass) LANG = resolveLang(this._hass, this._config);
    if (this._built) this._refreshValues();
  }

  set hass(hass) {
    this._hass = hass;
    LANG = resolveLang(hass, this._config);
    if (!this._built && hass) {
      this._render();
      this._built = true;
    }
  }

  _emit() {
    const newConfig = { ...this._config, type: "custom:solax-fve-card" };
    this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: newConfig }, bubbles: true, composed: true }));
  }

  _set(path, value) {
    const parts = path.split(".");
    let obj = this._config;
    for (let i = 0; i < parts.length - 1; i++) {
      if (!obj[parts[i]]) obj[parts[i]] = {};
      obj = obj[parts[i]];
    }
    obj[parts[parts.length - 1]] = value;
    this._emit();
  }

  _get(path, def) {
    const parts = path.split(".");
    let obj = this._config;
    for (const p of parts) {
      if (obj == null) return def;
      obj = obj[p];
    }
    return obj === undefined ? def : obj;
  }

  _rerender() {
    this._built = false;
    this._render();
    this._built = true;
  }

  _section(title, iconEmoji, open) {
    const details = document.createElement("details");
    details.className = "sf-ed-section";
    if (open) details.open = true;
    const summary = document.createElement("summary");
    summary.className = "sf-ed-summary";
    summary.textContent = `${iconEmoji} ${title}`;
    details.appendChild(summary);
    const body = document.createElement("div");
    body.className = "sf-ed-body";
    details.appendChild(body);
    return { details, body };
  }

  _entityPickerRow(body, labelText, value, domains, onChange) {
    const row = document.createElement("div");
    row.className = "sf-ed-row";
    const label = document.createElement("div");
    label.className = "sf-ed-label";
    label.textContent = labelText;
    row.appendChild(label);
    const picker = document.createElement("ha-entity-picker");
    picker.hass = this._hass;
    picker.value = value || "";
    picker.includeDomains = domains;
    picker.allowCustomEntity = true;
    picker.addEventListener("value-changed", (e) => {
      e.stopPropagation();
      onChange(e.detail.value || "");
    });
    row.appendChild(picker);
    body.appendChild(row);
    return picker;
  }

  _entityFieldRow(body, field) {
    const picker = this._entityPickerRow(body, t("ent." + field.key), this._get(`entities.${field.key}`, ""), field.domains, (v) =>
      this._set(`entities.${field.key}`, v),
    );
    this._pickers = this._pickers || [];
    this._pickers.push({ el: picker, key: `entities.${field.key}` });
  }

  _textRow(body, labelText, path, def, cls) {
    const row = document.createElement("div");
    row.className = "sf-ed-row";
    const label = document.createElement("div");
    label.className = "sf-ed-label";
    label.textContent = labelText;
    row.appendChild(label);
    const input = document.createElement("input");
    input.type = "text";
    input.className = "sf-ed-text" + (cls ? " " + cls : "");
    const cur = this._get(path, def);
    input.value = cur != null ? cur : "";
    input.oninput = () => this._set(path, input.value);
    row.appendChild(input);
    body.appendChild(row);
    return input;
  }

  _numRow(body, labelText, path, def, step) {
    const row = document.createElement("div");
    row.className = "sf-ed-row";
    const label = document.createElement("div");
    label.className = "sf-ed-label";
    label.textContent = labelText;
    row.appendChild(label);
    const input = document.createElement("input");
    input.type = "number";
    if (step) input.step = step;
    input.className = "sf-ed-text sf-ed-text--num";
    const cur = this._get(path, def);
    input.value = cur != null ? cur : "";
    input.oninput = () => this._set(path, input.value === "" ? null : parseFloat(input.value));
    row.appendChild(input);
    body.appendChild(row);
    return input;
  }

  _signRow(body, labelText, path) {
    const row = document.createElement("div");
    row.className = "sf-ed-row";
    const label = document.createElement("div");
    label.className = "sf-ed-label";
    label.textContent = labelText;
    row.appendChild(label);
    const sel = document.createElement("select");
    sel.className = "sf-ed-select";
    const cur = this._get(path, "auto");
    [
      ["auto", t("ed_auto")],
      ["yes", t("ed_yes_invert")],
      ["no", t("ed_no")],
    ].forEach(([v, t]) => {
      const o = document.createElement("option");
      o.value = v;
      o.textContent = t;
      if (String(cur) === v || (cur === true && v === "yes") || (cur === false && v === "no")) o.selected = true;
      sel.appendChild(o);
    });
    sel.onchange = () => this._set(path, sel.value);
    row.appendChild(sel);
    body.appendChild(row);
  }

  _selectRow(body, labelText, path, def, options, rerender) {
    const row = document.createElement("div");
    row.className = "sf-ed-row";
    const label = document.createElement("div");
    label.className = "sf-ed-label";
    label.textContent = labelText;
    row.appendChild(label);
    const sel = document.createElement("select");
    sel.className = "sf-ed-select";
    const cur = String(this._get(path, def));
    options.forEach(([v, text]) => {
      const o = document.createElement("option");
      o.value = v;
      o.textContent = text;
      if (cur === v) o.selected = true;
      sel.appendChild(o);
    });
    sel.onchange = () => {
      this._set(path, sel.value);
      if (rerender) {
        LANG = resolveLang(this._hass, this._config);
        this._rerender();
      }
    };
    row.appendChild(sel);
    body.appendChild(row);
  }

  _boolRow(body, labelText, path, def) {
    const row = document.createElement("div");
    row.className = "sf-ed-row sf-ed-row--toggle";
    const label = document.createElement("div");
    label.className = "sf-ed-label";
    label.textContent = labelText;
    row.appendChild(label);
    const sw = document.createElement("div");
    const on = !!this._get(path, def);
    sw.className = "sf-ed-switch" + (on ? " on" : "");
    sw.innerHTML = `<div class="knob"></div>`;
    sw.onclick = () => {
      const nowOn = !sw.classList.contains("on");
      sw.classList.toggle("on", nowOn);
      this._set(path, nowOn);
    };
    row.appendChild(sw);
    body.appendChild(row);
  }

  _toggleRow(body, field) {
    const row = document.createElement("div");
    row.className = "sf-ed-row sf-ed-row--toggle";
    const label = document.createElement("div");
    label.className = "sf-ed-label";
    label.textContent = t("show." + field.key);
    row.appendChild(label);
    const sw = document.createElement("div");
    const on = this._get(`show.${field.key}`, DEFAULT_SHOW[field.key] !== false);
    sw.className = "sf-ed-switch" + (on ? " on" : "");
    sw.innerHTML = `<div class="knob"></div>`;
    sw.onclick = () => {
      const nowOn = !sw.classList.contains("on");
      sw.classList.toggle("on", nowOn);
      this._set(`show.${field.key}`, nowOn);
    };
    row.appendChild(sw);
    body.appendChild(row);
  }

  _colorRow(body, field) {
    const row = document.createElement("div");
    row.className = "sf-ed-row";
    const label = document.createElement("div");
    label.className = "sf-ed-label";
    label.textContent = t("col." + field.key);
    row.appendChild(label);
    const input = document.createElement("input");
    input.type = "color";
    input.className = "sf-ed-color";
    input.value = this._get(`colors.${field.key}`, DEFAULT_COLORS[field.key]);
    input.oninput = () => this._set(`colors.${field.key}`, input.value);
    row.appendChild(input);
    body.appendChild(row);
  }

  _linkCard(lnk, index) {
    const card = document.createElement("div");
    card.className = "sf-ed-load-card sf-ed-link-card";
    const head = document.createElement("div");
    head.className = "sf-ed-load-head";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.className = "sf-ed-text";
    nameInput.placeholder = t("ed_link_label");
    nameInput.value = lnk.label || "";
    nameInput.oninput = () => {
      this._config.links[index].label = nameInput.value;
      this._emit();
    };
    head.appendChild(nameInput);

    const iconInput = document.createElement("input");
    iconInput.type = "text";
    iconInput.className = "sf-ed-text sf-ed-text--icon";
    iconInput.placeholder = "🔗";
    iconInput.value = lnk.icon || "";
    iconInput.oninput = () => {
      this._config.links[index].icon = iconInput.value;
      this._emit();
    };
    head.appendChild(iconInput);

    const colorInput = document.createElement("input");
    colorInput.type = "color";
    colorInput.className = "sf-ed-color";
    colorInput.title = t("ed_icon_color");
    colorInput.value = lnk.color || "#f5a623";
    colorInput.oninput = () => {
      this._config.links[index].color = colorInput.value;
      this._emit();
    };
    head.appendChild(colorInput);

    const removeBtn = document.createElement("button");
    removeBtn.className = "sf-ed-icon-btn";
    removeBtn.textContent = "✕";
    removeBtn.title = t("ed_remove_link");
    removeBtn.onclick = () => {
      this._config.links.splice(index, 1);
      this._emit();
      this._rerender();
    };
    head.appendChild(removeBtn);
    card.appendChild(head);

    const pathRow = document.createElement("div");
    pathRow.className = "sf-ed-row";
    pathRow.innerHTML = `<div class="sf-ed-label">${escapeHtml(t("ed_path"))}</div>`;
    const pathInput = document.createElement("input");
    pathInput.type = "text";
    pathInput.className = "sf-ed-text sf-ed-text--wide";
    pathInput.placeholder = "/energy";
    pathInput.value = lnk.path || "";
    pathInput.oninput = () => {
      this._config.links[index].path = pathInput.value;
      this._emit();
    };
    pathRow.appendChild(pathInput);
    card.appendChild(pathRow);
    return card;
  }

  _loadCard(load, index) {
    const card = document.createElement("div");
    card.className = "sf-ed-load-card";

    const head = document.createElement("div");
    head.className = "sf-ed-load-head";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.className = "sf-ed-text";
    nameInput.placeholder = t("ed_load_label");
    nameInput.value = load.label || "";
    nameInput.oninput = () => {
      this._config.loads[index].label = nameInput.value;
      this._emit();
    };
    head.appendChild(nameInput);

    const iconInput = document.createElement("input");
    iconInput.type = "text";
    iconInput.className = "sf-ed-text sf-ed-text--icon";
    iconInput.placeholder = "🔌";
    iconInput.value = load.icon || "";
    iconInput.oninput = () => {
      this._config.loads[index].icon = iconInput.value;
      this._emit();
    };
    head.appendChild(iconInput);

    const colorInput = document.createElement("input");
    colorInput.type = "color";
    colorInput.className = "sf-ed-color";
    colorInput.value = load.color || LOAD_PALETTE[index % LOAD_PALETTE.length];
    colorInput.oninput = () => {
      this._config.loads[index].color = colorInput.value;
      this._emit();
    };
    head.appendChild(colorInput);

    const removeBtn = document.createElement("button");
    removeBtn.className = "sf-ed-icon-btn";
    removeBtn.textContent = "✕";
    removeBtn.title = t("ed_remove_load");
    removeBtn.onclick = () => {
      this._config.loads.splice(index, 1);
      this._emit();
      this._rerender();
    };
    head.appendChild(removeBtn);
    card.appendChild(head);

    this._entityPickerRow(card, t("ed_load_entity"), load.entity, ["sensor"], (v) => {
      this._config.loads[index].entity = v;
      this._emit();
    });

    const extraRow = document.createElement("div");
    extraRow.className = "sf-ed-row";
    extraRow.innerHTML = `<div class="sf-ed-label">${escapeHtml(t("ed_load_extra"))}</div>`;
    const extraInput = document.createElement("input");
    extraInput.type = "text";
    extraInput.className = "sf-ed-text sf-ed-text--wide";
    extraInput.placeholder = "sensor.a, sensor.b, ...";
    extraInput.value = load.extra_entities || "";
    extraInput.oninput = () => {
      this._config.loads[index].extra_entities = extraInput.value;
      this._emit();
    };
    extraRow.appendChild(extraInput);
    card.appendChild(extraRow);

    this._entityPickerRow(card, t("ed_load_today"), load.today, ["sensor"], (v) => {
      this._config.loads[index].today = v;
      this._emit();
    });

    const todayExtraRow = document.createElement("div");
    todayExtraRow.className = "sf-ed-row";
    todayExtraRow.innerHTML = `<div class="sf-ed-label">${escapeHtml(t("ed_load_today_extra"))}</div>`;
    const todayExtraInput = document.createElement("input");
    todayExtraInput.type = "text";
    todayExtraInput.className = "sf-ed-text sf-ed-text--wide";
    todayExtraInput.placeholder = "sensor.a_today, sensor.b_today, ...";
    todayExtraInput.value = load.today_extra || "";
    todayExtraInput.oninput = () => {
      this._config.loads[index].today_extra = todayExtraInput.value;
      this._emit();
    };
    todayExtraRow.appendChild(todayExtraInput);
    card.appendChild(todayExtraRow);

    this._entityPickerRow(card, t("ed_load_icon_entity"), load.icon_entity, ["climate"], (v) => {
      this._config.loads[index].icon_entity = v;
      this._emit();
    });

    return card;
  }

  _render() {
    this.innerHTML = `<style>${this._editorStyles()}</style>`;
    this._pickers = [];
    const wrap = document.createElement("div");
    wrap.className = "sf-ed-root";

    this._selectRow(wrap, LANG === "sk" ? "Jazyk / Language" : "Language / Jazyk", "language", "auto", [["auto", t("ed_lang_auto")], ...LANGUAGES], true);
    this._textRow(wrap, t("ed_title"), "title", t("title"));
    this._textRow(wrap, t("ed_title_icon"), "title_icon", DEFAULT_TITLE_ICON);

    const linksSec = this._section(t("ed_links"), "🔗", false);
    const linkInfo = document.createElement("div");
    linkInfo.className = "sf-ed-row";
    linkInfo.innerHTML = `<div class="sf-ed-label" style="flex:1 1 100%; font-size:0.78rem; opacity:.75;">${escapeHtml(t("ed_links_info"))}</div>`;
    linksSec.body.appendChild(linkInfo);
    if (!Array.isArray(this._config.links)) this._config.links = defaultLinks().map((l) => ({ id: uid(), ...l }));
    const linksList = document.createElement("div");
    linksList.className = "sf-ed-loads-list sf-ed-links-list";
    this._config.links.forEach((lnk, i) => linksList.appendChild(this._linkCard(lnk, i)));
    linksSec.body.appendChild(linksList);
    const addLink = document.createElement("button");
    addLink.className = "sf-ed-add-btn sf-ed-add-link";
    addLink.textContent = t("ed_add_link");
    addLink.onclick = () => {
      if (!Array.isArray(this._config.links)) this._config.links = [];
      this._config.links.push({ id: uid(), label: "", icon: "🔗", path: "" });
      this._emit();
      this._rerender();
    };
    linksSec.body.appendChild(addLink);
    wrap.appendChild(linksSec.details);

    const solarSec = this._section(t("ed_solar"), "☀️", true);
    this._textRow(solarSec.body, t("ed_pv1_label"), "pv1_label", "String 1");
    this._textRow(solarSec.body, t("ed_pv2_label"), "pv2_label", "String 2");
    ENTITY_FIELDS.filter((f) => f.group === "solar").forEach((f) => this._entityFieldRow(solarSec.body, f));
    wrap.appendChild(solarSec.details);

    const invSec = this._section(t("ed_inverter"), "🔆", false);
    this._textRow(invSec.body, t("ed_inverter_image"), "inverter_image", "", "sf-ed-text--wide");
    this._textRow(invSec.body, t("ed_inverter_power_label"), "inverter_power_label", t("output"));
    ENTITY_FIELDS.filter((f) => f.group === "inverter").forEach((f) => this._entityFieldRow(invSec.body, f));
    wrap.appendChild(invSec.details);

    const battSec = this._section(t("ed_battery"), "🔋", false);
    ENTITY_FIELDS.filter((f) => f.group === "battery").forEach((f) => this._entityFieldRow(battSec.body, f));
    this._signRow(battSec.body, t("ed_invert_battery"), "invert_battery");
    this._numRow(battSec.body, t("ed_battery_capacity"), "battery_capacity_kwh", null, "0.1");
    this._numRow(battSec.body, t("ed_runtime_target"), "battery_runtime_target", null, "1");
    this._numRow(battSec.body, t("ed_battery_segments"), "battery_segments", 3, "1");
    wrap.appendChild(battSec.details);

    const gridSec = this._section(t("ed_grid"), "🔌", false);
    ENTITY_FIELDS.filter((f) => f.group === "grid").forEach((f) => this._entityFieldRow(gridSec.body, f));
    this._signRow(gridSec.body, t("ed_invert_grid"), "invert_grid");
    wrap.appendChild(gridSec.details);

    const loadsSec = this._section(t("ed_loads"), "🧩", true);
    const info = document.createElement("div");
    info.className = "sf-ed-row";
    info.innerHTML = `<div class="sf-ed-label" style="flex:1 1 100%; font-size:0.78rem; opacity:.75;">${escapeHtml(t("ed_loads_info"))}</div>`;
    loadsSec.body.appendChild(info);
    ENTITY_FIELDS.filter((f) => f.group === "home").forEach((f) => this._entityFieldRow(loadsSec.body, f));
    const modeRow = document.createElement("div");
    modeRow.className = "sf-ed-row";
    modeRow.innerHTML = `<div class="sf-ed-label">${escapeHtml(t("ed_home_mode"))}</div>`;
    const modeSel = document.createElement("select");
    modeSel.className = "sf-ed-select";
    [
      ["total", t("ed_home_total")],
      ["remainder", t("ed_home_remainder")],
    ].forEach(([v, t]) => {
      const o = document.createElement("option");
      o.value = v;
      o.textContent = t;
      if ((this._config.home_mode || "total") === v) o.selected = true;
      modeSel.appendChild(o);
    });
    modeSel.onchange = () => this._set("home_mode", modeSel.value);
    modeRow.appendChild(modeSel);
    loadsSec.body.appendChild(modeRow);

    this._textRow(loadsSec.body, t("ed_home_label"), "home_label", t("home"));
    this._textRow(loadsSec.body, t("ed_home_icon"), "home_icon", "🏠", "sf-ed-text--icon");

    const loadsList = document.createElement("div");
    loadsList.className = "sf-ed-loads-list";
    if (!Array.isArray(this._config.loads)) this._config.loads = [];
    this._config.loads.forEach((load, i) => loadsList.appendChild(this._loadCard(load, i)));
    loadsSec.body.appendChild(loadsList);
    const addBtn = document.createElement("button");
    addBtn.className = "sf-ed-add-btn";
    addBtn.textContent = t("ed_add_load");
    addBtn.onclick = () => {
      if (!Array.isArray(this._config.loads)) this._config.loads = [];
      this._config.loads.push({
        id: uid(),
        label: "",
        icon: "⚡",
        color: LOAD_PALETTE[this._config.loads.length % LOAD_PALETTE.length],
        entity: "",
        extra_entities: "",
      });
      this._emit();
      this._rerender();
    };
    loadsSec.body.appendChild(addBtn);
    wrap.appendChild(loadsSec.details);

    const wbSec = this._section(t("ed_wallbox"), "🚗", false);
    this._textRow(wbSec.body, t("ed_wallbox_image"), "wallbox_image", "", "sf-ed-text--wide");
    ENTITY_FIELDS.filter((f) => f.group === "wallbox").forEach((f) => this._entityFieldRow(wbSec.body, f));
    this._numRow(wbSec.body, t("ed_wallbox_max"), "wallbox_max_power", 11000, "500");
    wrap.appendChild(wbSec.details);

    const showSec = this._section(t("ed_display"), "👁️", false);
    SHOW_FIELDS.forEach((f) => this._toggleRow(showSec.body, f));

    const speedRow = document.createElement("div");
    speedRow.className = "sf-ed-row";
    speedRow.innerHTML = `<div class="sf-ed-label">${escapeHtml(t("ed_speed"))}</div>`;
    const speedSelect = document.createElement("select");
    speedSelect.className = "sf-ed-select";
    ["slow", "normal", "fast"].forEach((v) => {
      const opt = document.createElement("option");
      opt.value = v;
      opt.textContent = t("ed_" + v);
      if ((this._config.animation_speed || "normal") === v) opt.selected = true;
      speedSelect.appendChild(opt);
    });
    speedSelect.onchange = () => this._set("animation_speed", speedSelect.value);
    speedRow.appendChild(speedSelect);
    showSec.body.appendChild(speedRow);
    this._selectRow(showSec.body, t("ed_power_unit"), "power_unit", "W", [
      ["W", "W"],
      ["kW", "kW"],
      ["auto", t("ed_unit_auto")],
    ]);
    this._numRow(showSec.body, t("ed_decimals"), "decimals", 2, "1");
    wrap.appendChild(showSec.details);

    const colorSec = this._section(t("ed_colors"), "🎨", false);
    COLOR_FIELDS.forEach((f) => this._colorRow(colorSec.body, f));
    wrap.appendChild(colorSec.details);

    this.appendChild(wrap);
  }

  _refreshValues() {
    if (!this._pickers) return;
    this._pickers.forEach(({ el, key }) => {
      el.value = this._get(key, "");
    });
  }

  _editorStyles() {
    return `
      .sf-ed-root { display: flex; flex-direction: column; gap: 10px; padding: 4px 0; }
      .sf-ed-section { border-radius: 10px; background: rgba(127,127,127,0.06); }
      .sf-ed-summary { cursor: pointer; padding: 10px 12px; font-weight: 500; font-size: 0.9rem; list-style: none; user-select: none; }
      .sf-ed-summary::-webkit-details-marker { display: none; }
      .sf-ed-body { display: flex; flex-direction: column; gap: 10px; padding: 4px 12px 12px; }
      .sf-ed-row { display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap; }
      .sf-ed-row--toggle { padding: 2px 0; }
      .sf-ed-label { font-size: 0.85rem; color: var(--primary-text-color); flex: 1; min-width: 120px; }
      .sf-ed-text, .sf-ed-select { padding: 7px 9px; border-radius: 6px; border: 1px solid var(--divider-color); background: var(--card-background-color); color: var(--primary-text-color); font-size: 0.85rem; min-width: 140px; }
      .sf-ed-text--num { min-width: 80px; width: 80px; }
      .sf-ed-text--icon { min-width: 46px; width: 46px; text-align: center; }
      .sf-ed-text--wide { min-width: 100%; }
      .sf-ed-color { width: 40px; height: 30px; border-radius: 6px; border: 1px solid var(--divider-color); background: none; cursor: pointer; padding: 0; flex-shrink: 0; }
      ha-entity-picker { flex: 1; min-width: 200px; }
      .sf-ed-switch { position: relative; width: 40px; height: 22px; border-radius: 999px; background: var(--divider-color); cursor: pointer; flex-shrink: 0; }
      .sf-ed-switch.on { background: #4caf7d; }
      .sf-ed-switch .knob { position: absolute; top: 2px; left: 2px; width: 18px; height: 18px; border-radius: 50%; background: #fff; transition: left .15s ease; }
      .sf-ed-switch.on .knob { left: 20px; }
      .sf-ed-loads-list { display: flex; flex-direction: column; gap: 10px; }
      .sf-ed-load-card { border: 1px solid var(--divider-color); border-radius: 10px; padding: 10px; display: flex; flex-direction: column; gap: 8px; }
      .sf-ed-load-head { display: flex; gap: 6px; align-items: center; }
      .sf-ed-load-head .sf-ed-text { flex: 1; min-width: 0; }
      .sf-ed-icon-btn { border: 1px solid var(--divider-color); background: var(--card-background-color); color: var(--primary-text-color); border-radius: 6px; width: 30px; height: 30px; cursor: pointer; flex-shrink: 0; }
      .sf-ed-add-btn { border: 1px dashed var(--divider-color); background: none; color: var(--primary-text-color); border-radius: 8px; padding: 8px; cursor: pointer; font-size: 0.85rem; }
    `;
  }
}

if (!customElements.get("solax-fve-card")) {
  customElements.define("solax-fve-card", SolaxFveCard);
}
if (!customElements.get("solax-fve-card-editor")) {
  customElements.define("solax-fve-card-editor", SolaxFveCardEditor);
}

window.customCards = window.customCards || [];
if (!window.customCards.some((c) => c.type === "solax-fve-card")) {
  LANG = resolveLang(window.document && window.document.querySelector("home-assistant") && window.document.querySelector("home-assistant").hass, {});
  window.customCards.push({
    type: "solax-fve-card",
    name: t("card_name"),
    description: t("card_description"),
    preview: true,
    documentationURL: "https://github.com/tomasbobala/solax-fve-card",
  });
}

console.info(
  `%c SOLAX-FVE-CARD %c v${CARD_VERSION} `,
  "color:#fff;background:#f5a623;font-weight:700;border-radius:3px 0 0 3px;padding:2px 4px",
  "color:#f5a623;background:#222;border-radius:0 3px 3px 0;padding:2px 4px",
);

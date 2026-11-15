const CARD_VERSION = "1.1.0";

const I18N = {
  en: {
    title: "Home energy",
    card_name: "FVE Card",
    card_description: "Animated energy-flow card for solar systems (SolaX, Huawei, Fronius, GoodWe, Deye, SolarEdge …): PV strings, inverter, battery, grid, loads, wallbox, forecast and day profile.",
    sec_forecast: "Solar forecast",
    fc_of: "of ~{v} kWh today",
    fc_tomorrow: "Tomorrow",
    fc_left: "~{v} kWh left",
    fc_now: "now {a} (forecast {b})",
    fc_peak: "peak {t}",
    sec_phase_load: "Phase load",
    pl_breaker: "breaker 3 × {a} A",
    pl_warn: "{ph} at {pct} % of the breaker",
    sec_today: "Today",
    ss_autarky: "Self-sufficiency",
    ss_autarky_sub: "from grid only {v}",
    ss_selfuse: "Self-consumption",
    ss_selfuse_sub: "{v} at home",
    sec_chart: "Day profile",
    ch_today: "Today",
    ch_yesterday: "Yesterday",
    ch_solar: "Production",
    ch_fc: "Forecast",
    ch_home: "Home",
    ch_soc: "Battery SOC",
    ch_loading: "Loading…",
    ch_nodata: "No history for these entities yet.",
    ch_hint: "Tap the chart to see values",
    stale_title: "Inverter data is {m} min old",
    stale_last: "(last change {t})",
    stale_hint: "Values may be out of date – check the connection to the inverter.",
    stale_unavail: "Inverter data is unavailable",
    sec_wallbox: "Wallbox",
    diag_toggle: "Energy flow",
    sh_acc: "acc.",
    sh_zones: "zones",
    inv_short: "Inv",
    ed_brand: "Inverter brand",
    ed_brand_info: "Fills entities by brand: SolaX, Huawei Solar, Fronius, GoodWe, Deye / Sunsynk (Solarman), SolarEdge (Modbus Multi) or generic names. The button only fills empty fields.",
    ed_brand_scan: "🔍 Find entities for this brand",
    ed_brand_found: "Filled fields: {n}",
    ed_forecast: "Solar forecast",
    ed_forecast_info: "Works with Forecast.Solar (free, built into Home Assistant) and Solcast. A new card finds the entities by itself. The curve comes from Solcast attributes or from the Energy dashboard forecast.",
    ed_inverter_label: "Name of inverter 1",
    ed_inverters_extra: "More inverters",
    ed_inverters_info: "Power and production of further inverters are added to the solar part and to the inverter. Their strings are not drawn separately.",
    ed_inv_label: "Name",
    ed_inv_power: "Inverter power",
    ed_inv_solar: "PV power (added to solar)",
    ed_inv_today: "Produced today",
    ed_add_inverter: "+ Add inverter",
    ed_phase_limit: "Breaker per phase (A)",
    ed_phase_warn: "Warn from (% of breaker)",
    ed_sh: "Smart Heating – zones",
    ed_sh_info: "Optional. Needs the Smart Heating integration (github.com/tomasbobala/smart_heating, 0.23 or newer). Enter the zone status sensors (sensor.smart_heating_<zone>_stav), comma separated. The tile then shows ☀ when a zone stores PV surplus as heat. Leave empty without this integration.",
    ed_sh_short: "Optional – needs the Smart Heating integration (github.com/tomasbobala/smart_heating, 0.23+). Shows ☀ on the tile while a zone stores PV surplus as heat.",
    ed_stale_min: "Warn when data is older than (min)",
    ed_taps: "Tap actions",
    ed_taps_info: "Same idea as tap_action in other cards. The field next to the action is the path, URL, action (e.g. script.my_script) or entity to toggle.",
    tap_solar: "Solar",
    tap_battery: "Battery",
    tap_inverter: "Inverter",
    tap_grid: "Grid",
    tap_home: "Home",
    tap_loads: "Loads",
    act_default: "More info (default)",
    act_navigate: "Navigate",
    act_url: "Open URL",
    act_action: "Perform action",
    act_toggle: "Toggle",
    act_none: "Nothing",
    ed_sections: "Card sections",
    ed_sections_info: "Tick the sections that should start collapsed. Tapping a section header in the card saves it here too (for an admin user; otherwise it is remembered in that browser only).",
    ed_collapsed: "collapsed",
    "show.forecast": "Solar forecast",
    "show.self_sufficiency": "Self-sufficiency and self-consumption",
    "show.day_chart": "Day profile (chart)",
    "show.phase_load": "Phase load",
    "show.stale_warning": "Stale data warning",
    "ent.forecast_today": "Forecast today (kWh)",
    "ent.forecast_remaining": "Forecast remaining today (kWh)",
    "ent.forecast_tomorrow": "Forecast tomorrow (kWh)",
    "ent.forecast_power_now": "Forecast power now (optional)",
    link_energy: "Energy",
    battery_settings: "Battery settings",
    phase_details: "Phase details",
    communication: "Communication",
    home: "Home",
    other: "Other",
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
    start: "START",
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
    ed_pv3_label: "String 3 name",
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
    ed_loads_layout: "Load layout",
    ed_layout_row: "One row (original)",
    ed_layout_rows: "Circles, more rows",
    ed_layout_tiles: "Tiles",
    ed_loads_per_row: "Loads per row",
    ed_other_label: "\"Other\" tile label",
    ed_n_loads: "{n} loads",
    ed_n_links: "{n} links",
    ed_load_label: "Name (e.g. Boiler)",
    ed_remove_load: "Remove load",
    ed_load_entity: "Entity (power)",
    ed_load_extra: "Additional entities to add up (comma separated)",
    ed_load_today: "Daily energy (kWh)",
    ed_load_today_extra: "Daily energy – additional entities",
    ed_load_icon_entity: "Mode-dependent icon (climate entity, optional)",
    ed_wallbox: "Wallbox",
    ed_wallbox2: "Wallbox 2",
    ed_wallbox2_on: "Second wallbox",
    ed_wallbox_label: "Panel title",
    ed_batteries_extra: "More batteries (shown as one)",
    ed_batteries_info: "Batteries added here are combined with battery 1: power, current and daily energy are added up, SOC is weighted by capacity, voltage is averaged and the highest temperature is shown.",
    ed_add_battery: "+ Add battery",
    ed_batt_label: "Name",
    ed_batt_capacity: "Capacity (kWh)",
    ed_battery1_label: "Battery 1 name",
    ed_n_batteries: "{n} batteries",
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
    "ent.pv3_power": "String 3 – power (optional)",
    "ent.pv3_voltage": "String 3 – voltage",
    "ent.pv3_current": "String 3 – current",
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

    "show.pv_split": "Solar – separate display of strings",
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
    "show.loads_other": "Tile OTHER – unmeasured consumption (home minus loads)",
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
    card_name: "FVE Card",
    card_description: "Animovaná karta toku energie pre fotovoltiku (SolaX, Huawei, Fronius, GoodWe, Deye, SolarEdge …): stringy, menič, batéria, sieť, záťaže, wallbox, predpoveď a priebeh dňa.",
    sec_forecast: "Predpoveď výroby",
    fc_of: "z ~{v} kWh dnes",
    fc_tomorrow: "Zajtra",
    fc_left: "zostáva ~{v} kWh",
    fc_now: "teraz {a} (predpoveď {b})",
    fc_peak: "špička {t}",
    sec_phase_load: "Zaťaženie fáz",
    pl_breaker: "istič 3 × {a} A",
    pl_warn: "{ph} je na {pct} % ističa",
    sec_today: "Dnes",
    ss_autarky: "Sebestačnosť",
    ss_autarky_sub: "zo siete len {v}",
    ss_selfuse: "Vlastná spotreba",
    ss_selfuse_sub: "doma {v}",
    sec_chart: "Priebeh dňa",
    ch_today: "Dnes",
    ch_yesterday: "Včera",
    ch_solar: "Výroba",
    ch_fc: "Predpoveď",
    ch_home: "Spotreba domu",
    ch_soc: "SOC batérie",
    ch_loading: "Načítavam…",
    ch_nodata: "Pre tieto entity zatiaľ nie je história.",
    ch_hint: "Ťukni do grafu pre hodnoty",
    stale_title: "Údaje z meniča sú {m} min staré",
    stale_last: "(posledná zmena {t})",
    stale_hint: "Hodnoty nemusia platiť – skontroluj spojenie s meničom.",
    stale_unavail: "Údaje z meniča sú nedostupné",
    sec_wallbox: "Wallbox",
    diag_toggle: "Tok energie",
    sh_acc: "akum.",
    sh_zones: "zóny",
    inv_short: "M",
    ed_brand: "Značka meniča",
    ed_brand_info: "Predvyplní entity podľa značky: SolaX, Huawei Solar, Fronius, GoodWe, Deye / Sunsynk (Solarman), SolarEdge (Modbus Multi) alebo všeobecné názvy. Tlačidlo vyplní len prázdne polia.",
    ed_brand_scan: "🔍 Vyhľadať entity pre zvolenú značku",
    ed_brand_found: "Vyplnené polia: {n}",
    ed_forecast: "Predpoveď výroby",
    ed_forecast_info: "Funguje s integráciou Forecast.Solar (v Home Assistante zadarmo) aj Solcast. Nová karta si entity nájde sama. Krivka sa berie z atribútov Solcast alebo z predpovede v Energy dashboarde.",
    ed_inverter_label: "Názov meniča 1",
    ed_inverters_extra: "Ďalšie meniče",
    ed_inverters_info: "Výkon a výroba ďalších meničov sa pripočítajú do solárnej časti a k meniču. Ich stringy sa nekreslia zvlášť.",
    ed_inv_label: "Názov",
    ed_inv_power: "Výkon meniča",
    ed_inv_solar: "FV výkon (sčíta sa do solárnej časti)",
    ed_inv_today: "Vyrobené dnes",
    ed_add_inverter: "+ Pridať menič",
    ed_phase_limit: "Istič na fázu (A)",
    ed_phase_warn: "Upozorniť od (% ističa)",
    ed_sh: "Smart Heating – zóny",
    ed_sh_info: "Voliteľné. Vyžaduje integráciu Smart Heating (github.com/tomasbobala/smart_heating, verzia 0.23 alebo novšia). Zadaj senzory stavu zón (sensor.smart_heating_<zóna>_stav) oddelené čiarkou. Dlaždica potom ukáže ☀, keď zóna ukladá prebytok FVE do tepla. Bez tejto integrácie nechaj prázdne.",
    ed_sh_short: "Voliteľné – vyžaduje integráciu Smart Heating (github.com/tomasbobala/smart_heating, 0.23+). Dlaždica ukáže ☀, keď zóna ukladá prebytok FVE do tepla.",
    ed_stale_min: "Upozorniť, keď sú údaje staršie ako (min)",
    ed_taps: "Ťuknutie na prvky",
    ed_taps_info: "Rovnaké ako tap_action v iných kartách. Pole vedľa akcie je cesta, URL, akcia (napr. script.moj_skript) alebo entita na prepnutie.",
    tap_solar: "Solár",
    tap_battery: "Batéria",
    tap_inverter: "Menič",
    tap_grid: "Sieť",
    tap_home: "Dom",
    tap_loads: "Záťaže",
    act_default: "Viac info (predvolené)",
    act_navigate: "Navigovať",
    act_url: "Otvoriť URL",
    act_action: "Spustiť akciu",
    act_toggle: "Prepnúť",
    act_none: "Nič",
    ed_sections: "Sekcie karty",
    ed_sections_info: "Zaškrtni sekcie, ktoré majú byť zbalené. Ťuknutie na hlavičku sekcie priamo v karte sa uloží aj sem (pri admin účte; inak si to pamätá len daný prehliadač).",
    ed_collapsed: "zbalená",
    "show.forecast": "Predpoveď výroby",
    "show.self_sufficiency": "Sebestačnosť a vlastná spotreba",
    "show.day_chart": "Priebeh dňa (graf)",
    "show.phase_load": "Zaťaženie fáz",
    "show.stale_warning": "Upozornenie na staré dáta",
    "ent.forecast_today": "Predpoveď dnes (kWh)",
    "ent.forecast_remaining": "Predpoveď – zostáva dnes (kWh)",
    "ent.forecast_tomorrow": "Predpoveď zajtra (kWh)",
    "ent.forecast_power_now": "Predpoveď výkonu teraz (voliteľné)",
    link_energy: "Energie",
    battery_settings: "Nastavenie batérie",
    phase_details: "Detaily fáz",
    communication: "Komunikácia",
    home: "Dom",
    other: "Ostatné",
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
    start: "START",
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
    ed_pv3_label: "Názov String 3",
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
    ed_loads_layout: "Rozloženie záťaží",
    ed_layout_row: "Jeden rad (pôvodné)",
    ed_layout_rows: "Krúžky, viac radov",
    ed_layout_tiles: "Dlaždice",
    ed_loads_per_row: "Záťaží v rade",
    ed_other_label: "Názov dlaždice „Ostatné“",
    ed_n_loads: "záťaže: {n}",
    ed_n_links: "odkazy: {n}",
    ed_load_label: "Názov (napr. Bojler)",
    ed_remove_load: "Odstrániť záťaž",
    ed_load_entity: "Entita (výkon)",
    ed_load_extra: "Ďalšie entity na sčítanie (oddelené čiarkou)",
    ed_load_today: "Denná spotreba (kWh)",
    ed_load_today_extra: "Denná spotreba – ďalšie entity na sčítanie",
    ed_load_icon_entity: "Ikona podľa režimu (climate entita, nepovinné)",
    ed_wallbox: "Wallbox",
    ed_wallbox2: "Wallbox 2",
    ed_wallbox2_on: "Druhý wallbox",
    ed_wallbox_label: "Názov panelu",
    ed_batteries_extra: "Ďalšie batérie (zobrazia sa ako jedna)",
    ed_batteries_info: "Batérie pridané tu sa spoja s batériou 1: výkon, prúd a denná energia sa sčítajú, SOC sa váži kapacitou, napätie sa priemeruje a ukáže sa najvyššia teplota.",
    ed_add_battery: "+ Pridať batériu",
    ed_batt_label: "Názov",
    ed_batt_capacity: "Kapacita (kWh)",
    ed_battery1_label: "Názov batérie 1",
    ed_n_batteries: "batérie: {n}",
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
    "ent.pv3_power": "String 3 – výkon (voliteľné)",
    "ent.pv3_voltage": "String 3 – napätie",
    "ent.pv3_current": "String 3 – prúd",
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

    "show.pv_split": "Solar – samostatné zobrazenie stringov",
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
    "show.loads_other": "Dlaždica OSTATNÉ – nemeraná spotreba (dom mínus záťaže)",
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
  loads_other: true,
  wallbox_stop: true,
  forecast: true,
  self_sufficiency: true,
  day_chart: true,
  phase_load: true,
  stale_warning: true,
};

const SPEED_MULT = { slow: 1.6, normal: 1, fast: 0.55 };
// Night layout switches only after production stays on one side of the threshold this long.
// At dawn and dusk the inverter flips between 0 W and ~60 W every few seconds, which made
// the whole card grow and shrink by ~90 px again and again (the page jumped).
const NIGHT_HOLD_MS = 10 * 60 * 1000;

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
const WB2_PREFIX = "wb2_";
const BATT_AGG = {
  battery_power: "sum",
  battery_soc: "soc",
  battery_voltage: "avg",
  battery_current: "sum",
  battery_temp: "max",
  battery_charge_today: "sum",
  battery_discharge_today: "sum",
  battery_capacity: "sum",
};
const BATT_UNIT_KEYS = ["battery_power", "battery_soc", "battery_voltage", "battery_current", "battery_temp", "battery_charge_today", "battery_discharge_today", "battery_capacity"];
// ---- 1.1.0 ------------------------------------------------------------------
const DEFAULT_COLLAPSED = { battery_settings: true, phase_details: true };
const SECTION_KEYS = ["diagram", "forecast", "phase_load", "wallbox", "wallbox2", "battery_settings", "phase_details", "today", "chart"];
const INV_KEYS = ["inverter_power", "solar_power", "solar_today"];
const STALE_KEYS = ["solar_power", "pv1_power", "pv2_power", "pv3_power", "inverter_power", "grid_power", "battery_power", "total_power"];
const STALE_DEFAULT_MIN = 10;
const DAY_REFRESH_MS = 5 * 60 * 1000;
const FC_REFRESH_MS = 30 * 60 * 1000;
const TAP_NODES = ["solar", "battery", "inverter", "grid", "home", "loads"];
const TAP_ACTIONS = ["more-info", "navigate", "url", "perform-action", "toggle", "none"];
const BRANDS = [
  ["solax", "SolaX (solax_modbus)"],
  ["huawei", "Huawei Solar"],
  ["fronius", "Fronius"],
  ["goodwe", "GoodWe"],
  ["deye", "Deye / Sunsynk (Solarman)"],
  ["solaredge", "SolarEdge (Modbus Multi)"],
  ["generic", "Generic / Iné"],
];
// key: [suffixes, opts]  – best effort, the button only fills empty fields
const BRAND_PRESETS = {
  huawei: {
    prefer: /inverter|huawei/,
    options: { invert_grid: true },
    entities: {
      pv1_voltage: [["pv_1_voltage"]], pv1_current: [["pv_1_current"]],
      pv2_voltage: [["pv_2_voltage"]], pv2_current: [["pv_2_current"]],
      solar_power: [["input_power"]], solar_today: [["daily_yield"]],
      inverter_status: [["device_status"]], inverter_temp: [["internal_temperature"]],
      inverter_power: [["active_power"], { include: /inverter/, exclude: /meter/ }],
      grid_power: [["power_meter_active_power"]],
      grid_power_l1: [["phase_a_active_power"]], grid_power_l2: [["phase_b_active_power"]], grid_power_l3: [["phase_c_active_power"]],
      grid_voltage_l1: [["phase_a_voltage"], { include: /meter/ }], grid_voltage_l2: [["phase_b_voltage"], { include: /meter/ }], grid_voltage_l3: [["phase_c_voltage"], { include: /meter/ }],
      battery_power: [["charge_discharge_power"]], battery_soc: [["state_of_capacity"]],
      battery_charge_today: [["day_charge"]], battery_discharge_today: [["day_discharge"]],
    },
  },
  fronius: {
    prefer: /solarnet|fronius|symo|primo|gen24/,
    options: { invert_battery: true },
    entities: {
      solar_power: [["power_photovoltaics"]], grid_power: [["power_grid"]],
      total_power: [["power_load_consumed", "power_load"]], battery_power: [["power_battery"]],
      battery_soc: [["state_of_charge"]], inverter_power: [["ac_power", "power_ac"]],
      inverter_status: [["inverter_state", "status_message"]],
      pv1_voltage: [["dc_voltage"]], pv1_current: [["dc_current"]], pv2_voltage: [["dc_voltage_2"]], pv2_current: [["dc_current_2"]],
      grid_power_l1: [["real_power_phase_1"]], grid_power_l2: [["real_power_phase_2"]], grid_power_l3: [["real_power_phase_3"]],
      grid_voltage_l1: [["voltage_ac_phase_1"]], grid_voltage_l2: [["voltage_ac_phase_2"]], grid_voltage_l3: [["voltage_ac_phase_3"]],
    },
  },
  goodwe: {
    prefer: /goodwe/,
    options: { invert_grid: true, invert_battery: true },
    entities: {
      pv1_power: [["ppv1"]], pv1_voltage: [["vpv1"]], pv1_current: [["ipv1"]],
      pv2_power: [["ppv2"]], pv2_voltage: [["vpv2"]], pv2_current: [["ipv2"]],
      pv3_power: [["ppv3"]], pv3_voltage: [["vpv3"]], pv3_current: [["ipv3"]],
      solar_power: [["pv_power"]], solar_today: [["today_s_pv_generation"]],
      inverter_status: [["work_mode"]], inverter_temp: [["inverter_temperature_air", "inverter_temperature"]],
      inverter_power: [["total_inverter_power"]], grid_power: [["active_power"], { exclude: /_l[123]$|inverter/ }],
      grid_power_l1: [["active_power_l1"]], grid_power_l2: [["active_power_l2"]], grid_power_l3: [["active_power_l3"]],
      grid_voltage_l1: [["on_grid_l1_voltage"]], grid_voltage_l2: [["on_grid_l2_voltage"]], grid_voltage_l3: [["on_grid_l3_voltage"]],
      grid_import_today: [["today_energy_import"]], grid_export_today: [["today_energy_export"]],
      battery_power: [["battery_power"]], battery_soc: [["battery_state_of_charge"]], battery_temp: [["battery_temperature"]],
      battery_charge_today: [["today_battery_charge"]], battery_discharge_today: [["today_battery_discharge"]],
      total_power: [["house_consumption"]], total_today: [["today_load"]],
    },
  },
  deye: {
    prefer: /deye|sunsynk|solarman|inverter/,
    options: { invert_battery: true },
    entities: {
      pv1_power: [["pv1_power"]], pv1_voltage: [["pv1_voltage"]], pv1_current: [["pv1_current"]],
      pv2_power: [["pv2_power"]], pv2_voltage: [["pv2_voltage"]], pv2_current: [["pv2_current"]],
      pv3_power: [["pv3_power"]], pv3_voltage: [["pv3_voltage"]], pv3_current: [["pv3_current"]],
      solar_power: [["pv_power", "total_dc_power", "pv_total_power"]], solar_today: [["today_production", "daily_production"]],
      grid_power: [["total_grid_power", "grid_power"]], total_power: [["total_load_power", "load_power"]],
      battery_power: [["battery_power"]], battery_soc: [["battery_soc", "battery"]], battery_temp: [["battery_temperature"]],
      grid_import_today: [["today_energy_import", "daily_energy_bought"]], grid_export_today: [["today_energy_export", "daily_energy_sold"]],
      battery_charge_today: [["today_battery_charge", "daily_battery_charge"]], battery_discharge_today: [["today_battery_discharge", "daily_battery_discharge"]],
      total_today: [["today_load_consumption", "daily_load_consumption"]], inverter_temp: [["dc_temperature", "temperature"]],
      grid_power_l1: [["grid_l1_power"]], grid_power_l2: [["grid_l2_power"]], grid_power_l3: [["grid_l3_power"]],
      grid_voltage_l1: [["grid_l1_voltage"]], grid_voltage_l2: [["grid_l2_voltage"]], grid_voltage_l3: [["grid_l3_voltage"]],
    },
  },
  solaredge: {
    prefer: /solaredge/,
    options: { invert_grid: true },
    entities: {
      solar_power: [["dc_power"], { include: /_i1_|inverter/ }], inverter_power: [["ac_power"], { include: /_i1_|inverter/ }],
      inverter_temp: [["temperature"], { include: /_i1_|inverter/ }], inverter_status: [["status"], { include: /_i1_|inverter/ }],
      grid_power: [["ac_power"], { include: /_m1_|meter/ }],
      grid_power_l1: [["ac_power_a"], { include: /_m1_|meter/ }], grid_power_l2: [["ac_power_b"], { include: /_m1_|meter/ }], grid_power_l3: [["ac_power_c"], { include: /_m1_|meter/ }],
      grid_voltage_l1: [["ac_voltage_an"], { include: /_m1_|meter/ }], grid_voltage_l2: [["ac_voltage_bn"], { include: /_m1_|meter/ }], grid_voltage_l3: [["ac_voltage_cn"], { include: /_m1_|meter/ }],
      battery_power: [["dc_power"], { include: /_b1_|battery/ }], battery_soc: [["state_of_energy"]], battery_temp: [["temp_average", "temperature"], { include: /_b1_|battery/ }],
    },
  },
  generic: {
    prefer: /./,
    options: {},
    entities: {
      solar_power: [["pv_power", "solar_power", "pv_power_total", "photovoltaic_power"]],
      solar_today: [["pv_energy_today", "solar_energy_today", "daily_yield", "today_production"]],
      grid_power: [["grid_power", "grid_active_power"]], battery_power: [["battery_power"]],
      battery_soc: [["battery_soc", "battery_state_of_charge", "battery_level"]],
      total_power: [["load_power", "house_consumption", "home_power", "house_power"]],
      inverter_power: [["inverter_power", "inverter_active_power"]], inverter_temp: [["inverter_temperature"]],
    },
  },
};
const FORECAST_SUFFIXES = {
  forecast_today: ["energy_production_today", "forecast_today"],
  forecast_remaining: ["energy_production_today_remaining", "forecast_remaining_today"],
  forecast_tomorrow: ["energy_production_tomorrow", "forecast_tomorrow"],
  forecast_power_now: ["power_production_now", "pv_forecast_power_now"],
};

function stableStringify(v) {
  if (Array.isArray(v)) return "[" + v.map(stableStringify).join(",") + "]";
  if (v && typeof v === "object") return "{" + Object.keys(v).filter((k) => v[k] !== undefined).sort().map((k) => JSON.stringify(k) + ":" + stableStringify(v[k])).join(",") + "}";
  return JSON.stringify(v);
}

function stripCollapsed(cfg) {
  const out = Object.assign({}, cfg || {});
  delete out.collapsed;
  return out;
}

function hashStr(s) {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
}

function energyKwh(hass, entityId) {
  const v = num(hass, entityId);
  if (v == null) return null;
  const st = hass.states[entityId];
  const u = st && st.attributes ? st.attributes.unit_of_measurement : null;
  if (u === "Wh") return v / 1000;
  if (u === "MWh") return v * 1000;
  return v;
}

function fmtKw(w) {
  if (w == null) return "--";
  return (w / 1000).toFixed(1) + " kW";
}

function fmtClock(ms) {
  const d = new Date(ms);
  return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
}

function fmtDeg(v) {
  if (v == null) return "--";
  return Math.abs(v - Math.round(v)) < 0.05 ? String(Math.round(v)) : Number(v).toFixed(1);
}

function niceMax(v) {
  if (!(v > 0)) return 1;
  const steps = [1, 2, 2.5, 5, 10];
  const mag = Math.pow(10, Math.floor(Math.log10(v)));
  for (const s of steps) if (s * mag >= v) return s * mag;
  return 10 * mag;
}

function startOfDay(offsetDays) {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + (offsetDays || 0));
  return d.getTime();
}

function stateTime(st) {
  if (!st) return null;
  const iso = st.last_updated || st.last_changed;
  const ms = iso ? Date.parse(iso) : NaN;
  return isNaN(ms) ? null : ms;
}

function brandEntities(hass, brand) {
  const p = BRAND_PRESETS[brand];
  const out = {};
  if (!p || !hass) return out;
  Object.entries(p.entities).forEach(([key, spec]) => {
    const id = findEntity(hass, "sensor", spec[0], Object.assign({ prefer: p.prefer }, spec[1] || {}));
    if (id) out[key] = id;
  });
  return out;
}

function forecastEntities(hass) {
  const out = {};
  Object.entries(FORECAST_SUFFIXES).forEach(([key, sfx]) => {
    const id = findEntity(hass, "sensor", sfx, { prefer: /solcast|energy_production|power_production/ });
    if (id) out[key] = id;
  });
  return out;
}

function detectBrand(hass) {
  if (!hass || !hass.states) return "solax";
  const count = (o) => Object.values(o || {}).filter(Boolean).length;
  let best = "solax",
    bestN = count(SolaxFveCard._solaxStub(hass).entities) - 2;
  BRANDS.map(([b]) => b)
    .filter((b) => b !== "solax")
    .forEach((b) => {
      const n = count(brandEntities(hass, b)) - (b === "generic" ? 2 : 0);
      if (n > bestN) {
        best = b;
        bestN = n;
      }
    });
  return best;
}
const TILE_H = 72;
const TILE_GAP = 18;
const TILE_DROP = 28;
const TILE_BUS_GAP = 44;
const TILE_PITCH = TILE_H + 52;
const WB_START_COLOR = "#4caf7d";
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

const WALLBOX_START_BUTTONS = ["start_charge", "start_charging"];

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
    this._origConfig = config || {};
    this._config = config || {};
    this._built = false;
    this._lsCache = undefined;
    this._chartKey = null;
    this._fcKey = null;
    this._staleKey = null;
  }

  set hass(hass) {
    const prevHass = this._hass;
    this._hass = hass;
    this._startTicker();
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
      if (!relevantChanged) {
        this._renderStale();
        return;
      }
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
    const brand = detectBrand(hass);
    let cfg;
    if (brand === "solax") cfg = SolaxFveCard._solaxStub(hass);
    else {
      LANG = resolveLang(hass, {});
      cfg = Object.assign({ type: "custom:solax-fve-card", entities: brandEntities(hass, brand), loads: [] }, BRAND_PRESETS[brand].options);
      if (cfg.entities.pv1_power || cfg.entities.pv1_voltage) Object.assign(cfg, { pv1_label: "String 1", pv2_label: "String 2" });
      if (cfg.entities.pv3_power) cfg.pv3_label = "String 3";
    }
    cfg.brand = brand;
    Object.assign(cfg.entities, forecastEntities(hass));
    return cfg;
  }

  static _solaxStub(hass) {
    const f = (domain, suffixes, opts) => findEntity(hass, domain, suffixes, opts);
    const notEv = { exclude: /wallbox|_evc|_ev_|charger/ };
    const ev = { include: /wallbox|_evc|_ev_|charger/, prefer: /wallbox|_evc|_ev_/ };
    const wallboxPower = f("sensor", ["charge_power_total", "charge_power"], ev);
    LANG = resolveLang(hass, {});
    // String 3 len ak senzor hlási číslo – 2-stringové meniče niekedy vytvoria prázdny pv_power_3
    const live = (id) => {
      const st = id && hass && hass.states && hass.states[id];
      return st && !isNaN(parseFloat(st.state)) ? id : "";
    };
    const pv3Power = live(f("sensor", ["pv_power_3"]));
    return {
      type: "custom:solax-fve-card",
      entities: {
        pv1_power: f("sensor", ["pv_power_1"]),
        pv1_voltage: f("sensor", ["pv_voltage_1"]),
        pv1_current: f("sensor", ["pv_current_1"]),
        pv2_power: f("sensor", ["pv_power_2"]),
        pv2_voltage: f("sensor", ["pv_voltage_2"]),
        pv2_current: f("sensor", ["pv_current_2"]),
        pv3_power: pv3Power,
        pv3_voltage: pv3Power ? f("sensor", ["pv_voltage_3"]) : "",
        pv3_current: pv3Power ? f("sensor", ["pv_current_3"]) : "",
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
      ...(pv3Power ? { pv3_label: "String 3" } : {}),
      loads: wallboxPower ? [{ id: uid(), label: t("car"), icon: "🚗", color: "#8e6ecb", entity: wallboxPower, extra_entities: "" }] : [],
    };
  }

  _e(key) {
    const ents = this._config.entities || {};
    if (this._wbPrefix && WB_KEYS.has(key)) return ents[this._wbPrefix + key] || "";
    return ents[key] || "";
  }

  // String 3 sa kreslí len ak je vyplnený a entita v HA naozaj existuje
  _pv3On() {
    const id = this._e("pv3_power");
    if (!id) return false;
    return !this._hass || !this._hass.states || !!this._hass.states[id];
  }

  _wallbox2On() {
    return !!this._config.wallbox2 && !!(this._config.entities || {})[WB2_PREFIX + "wallbox_power"];
  }

  _extraBatteries() {
    return (Array.isArray(this._config.batteries) ? this._config.batteries : []).filter((b) => b && b.battery_power);
  }

  _battUnits() {
    const ents = this._config.entities || {};
    const main = { label: this._config.battery_label || "1", capacity_kwh: this._config.battery_capacity_kwh };
    BATT_UNIT_KEYS.forEach((k) => (main[k] = ents[k] || ""));
    return [main, ...this._extraBatteries().map((b, i) => Object.assign({ label: b.label || String(i + 2) }, b))];
  }

  _unitCapacityKwh(u) {
    if (u.capacity_kwh) return Number(u.capacity_kwh);
    const wh = num(this._hass, u.battery_capacity);
    return wh ? wh / 1000 : null;
  }

  _battAgg(key) {
    const units = this._battUnits();
    const read = (u) => (key === "battery_power" ? numPower(this._hass, u[key]) : num(this._hass, u[key]));
    const vals = units.map(read);
    const known = vals.filter((v) => v != null);
    if (!known.length) return null;
    const mode = BATT_AGG[key];
    if (mode === "sum") return known.reduce((s, v) => s + v, 0);
    if (mode === "avg") return known.reduce((s, v) => s + v, 0) / known.length;
    if (mode === "max") return Math.max(...known);
    const caps = units.map((u) => this._unitCapacityKwh(u));
    const pairs = vals.map((v, i) => [v, caps[i]]).filter(([v]) => v != null);
    if (pairs.every(([, c]) => c > 0)) {
      const total = pairs.reduce((s, [, c]) => s + c, 0);
      return pairs.reduce((s, [v, c]) => s + v * c, 0) / total;
    }
    return known.reduce((s, v) => s + v, 0) / known.length;
  }

  _battCapacityKwh() {
    if (!this._extraBatteries().length) {
      if (this._config.battery_capacity_kwh) return Number(this._config.battery_capacity_kwh);
      const bms = num(this._hass, this._e("battery_capacity"));
      return bms ? bms / 1000 : null;
    }
    const caps = this._battUnits().map((u) => this._unitCapacityKwh(u));
    return caps.every((c) => c > 0) ? caps.reduce((s, c) => s + c, 0) : null;
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
    const cfg = this._e("wallbox_stop");
    const prefix = this._wallboxPrefix();
    const candidates = prefix ? WALLBOX_STOP_SUFFIXES.map(([d, s]) => `${d}.${prefix}${s}`) : [];
    const id = cfg ? (this._hass && this._hass.states[cfg] ? cfg : "") : this._firstExisting(candidates);
    if (id && /^(select|input_select)\./.test(id) && !this._stopOption(id)) return "";
    return id;
  }

  _startOption(entityId) {
    const st = this._hass && this._hass.states[entityId];
    const options = (st && st.attributes && st.attributes.options) || [];
    return options.find((o) => /^(start|started|enable|enabled|on|resume)$/i.test(o)) || options.find((o) => /start|resume|enable/i.test(o)) || null;
  }

  _startButton(stopId) {
    const m = stopId.match(/^button\.(.*?)(stop_charge|stop_charging)$/);
    if (!m) return "";
    return this._firstExisting(WALLBOX_START_BUTTONS.map((s) => `button.${m[1]}${s}`));
  }

  /** Ci je nabijanie zastavene nasim STOP a treba ponuknut START.
   *  Select si drzi poslednu zapisanu moznost (napr. "Stop Charging"), switch je "off".
   *  Ked auto realne nabija (napr. po prepojeni kabla), START sa neponuka. */
  _isStopped(stopId, charging) {
    if (!stopId || charging) return false;
    const st = this._hass && this._hass.states[stopId];
    if (!st) return false;
    const domain = stopId.split(".")[0];
    if (domain === "select" || domain === "input_select") return !!this._startOption(stopId) && st.state === this._stopOption(stopId);
    if (domain === "switch" || domain === "input_boolean") return st.state === "off";
    return false;
  }

  _startCharging(entityId) {
    if (!entityId || !this._hass) return Promise.resolve();
    const domain = entityId.split(".")[0];
    if (domain === "select" || domain === "input_select") {
      const opt = this._startOption(entityId);
      return opt ? Promise.resolve(this._hass.callService(domain, "select_option", { entity_id: entityId, option: opt })) : Promise.resolve();
    }
    if (domain === "switch" || domain === "input_boolean") {
      return Promise.resolve(this._hass.callService(domain, "turn_on", { entity_id: entityId }));
    }
    if (domain === "button") {
      const start = this._startButton(entityId);
      if (start) return Promise.resolve(this._hass.callService("button", "press", { entity_id: start }));
    }
    return Promise.resolve();
  }

  _stopOption(entityId) {
    const st = this._hass && this._hass.states[entityId];
    const options = (st && st.attributes && st.attributes.options) || [];
    return options.find((o) => /^(stop|stopped|disable|disabled|off|pause|paused)$/i.test(o)) || options.find((o) => /stop|pause|disable/i.test(o)) || null;
  }

  _n(key) {
    if (BATT_AGG[key] && this._extraBatteries().length) return this._battAgg(key);
    if (INV_KEYS.includes(key) && !this._wbPrefix && this._extraInverters().length) return this._invAgg(key, false);
    return num(this._hass, this._e(key));
  }

  _p(key) {
    if (BATT_AGG[key] && this._extraBatteries().length) return this._battAgg(key);
    if (INV_KEYS.includes(key) && !this._wbPrefix && this._extraInverters().length) return this._invAgg(key, true);
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
    const stopId = this._hass ? this._stopEntity() : "";
    if (stopId) ids.push(stopId);
    if (this._wallbox2On() && this._hass) {
      this._wbPrefix = WB2_PREFIX;
      try {
        const s2 = this._stopEntity();
        if (s2) ids.push(s2);
      } finally {
        this._wbPrefix = "";
      }
    }
    this._extraBatteries().forEach((b) => BATT_UNIT_KEYS.forEach((k) => b[k] && ids.push(b[k])));
    this._extraInverters().forEach((u) => INV_KEYS.forEach((k) => u[k] && ids.push(u[k])));
    this._loads().forEach((l) => this._shIds(l).forEach((id) => ids.push(id)));
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

  // ---- 1.1.0: lifecycle, sections ----------------------------------------------
  connectedCallback() {
    this._startTicker();
  }

  disconnectedCallback() {
    clearInterval(this._ticker);
    this._ticker = null;
  }

  _startTicker() {
    if (this._ticker || !this._hass || !this._hass.connection || !this.isConnected) return;
    this._ticker = setInterval(() => {
      if (!this.isConnected || !this._built) return;
      this._renderStale();
      this._maybeLoadData();
    }, 30000);
  }

  _lsKey() {
    return "fve-card-collapsed:" + hashStr(stableStringify(stripCollapsed(this._origConfig || this._config)));
  }

  _localCollapsed() {
    if (this._lsCache !== undefined) return this._lsCache;
    let v = null;
    try {
      const raw = window.localStorage && window.localStorage.getItem(this._lsKey());
      v = raw ? JSON.parse(raw) : null;
    } catch (e) {
      v = null;
    }
    this._lsCache = v;
    return v;
  }

  _isCollapsed(key) {
    const loc = this._localCollapsed();
    if (loc && loc[key] !== undefined) return !!loc[key];
    const c = this._config.collapsed || {};
    return c[key] !== undefined ? !!c[key] : !!DEFAULT_COLLAPSED[key];
  }

  _bindSections() {
    this.querySelectorAll("details[data-sec]").forEach((d) => {
      const key = d.dataset.sec;
      d.open = !this._isCollapsed(key);
      d.addEventListener("toggle", () => {
        const want = !d.open;
        if (this._isCollapsed(key) === want) return;
        this._setCollapsed(key, want);
        if (!want) {
          this._chartKey = null;
          this._fcKey = null;
          if (this._hass) this._updateContent();
        }
      });
    });
    const btn = this.querySelector(".sf-title");
    if (btn)
      btn.onclick = () => {
        this._setCollapsed("diagram", !this._isCollapsed("diagram"));
        this._applyDiagramFold();
      };
    this._applyDiagramFold();
  }

  _applyDiagramFold() {
    const folded = this._isCollapsed("diagram");
    const wrap = this.querySelector(".sf-diagram-wrap");
    const sum = this.querySelector(".sf-diag-summary");
    const btn = this.querySelector(".sf-diag-toggle");
    if (wrap) wrap.classList.toggle("sf-hidden", folded);
    if (sum) sum.classList.toggle("hidden", !folded);
    if (btn) {
      btn.classList.toggle("collapsed", folded);
      btn.title = t("diag_toggle");
    }
  }

  _setCollapsed(key, val) {
    const collapsed = Object.assign({}, this._config.collapsed || {}, { [key]: val });
    this._config = Object.assign({}, this._config, { collapsed });
    if (this._lsCache) this._lsCache = Object.assign({}, this._lsCache, { [key]: val });
    clearTimeout(this._persistTimer);
    this._persistTimer = setTimeout(() => this._persistSections(), 1200);
  }

  _saveLocal(collapsed) {
    try {
      window.localStorage.setItem(this._lsKey(), JSON.stringify(collapsed));
      this._lsCache = collapsed;
    } catch (e) {
      /* private mode – keep it for this page only */
    }
  }

  /** Writes `collapsed` into the dashboard config (admin), otherwise remembers it in this browser. */
  async _persistSections() {
    const hass = this._hass;
    const collapsed = Object.assign({}, this._config.collapsed || {});
    const local = () => this._saveLocal(collapsed);
    if (this.preview || this.editMode || !hass || !hass.callWS || !(hass.user && hass.user.is_admin) || !this._origConfig) return local();
    try {
      const seg = (window.location.pathname.split("/")[1] || "lovelace").trim();
      const urlPath = seg === "lovelace" ? null : seg;
      const conf = await hass.callWS({ type: "lovelace/config", url_path: urlPath });
      const target = stableStringify(stripCollapsed(this._origConfig));
      let hits = 0;
      const walk = (node) => {
        if (Array.isArray(node)) return node.map(walk);
        if (node && typeof node === "object") {
          if (node.type === this._origConfig.type && stableStringify(stripCollapsed(node)) === target) {
            hits++;
            return Object.assign({}, node, { collapsed });
          }
          const out = {};
          Object.keys(node).forEach((k) => (out[k] = walk(node[k])));
          return out;
        }
        return node;
      };
      const next = walk(conf);
      if (!hits) return local();
      await hass.callWS({ type: "lovelace/config/save", url_path: urlPath, config: next });
      try {
        window.localStorage.removeItem(this._lsKey());
      } catch (e) {
        /* ignore */
      }
      this._lsCache = null;
    } catch (e) {
      local();
    }
  }

  _sec(key) {
    return this.querySelector(`details[data-sec="${key}"]`);
  }

  _secShow(key, show, val) {
    const d = this._sec(key);
    if (!d) return null;
    d.classList.toggle("hidden", !show);
    const v = d.querySelector(":scope > summary .sf-fold-val");
    if (v && val !== undefined && v.textContent !== (val || "")) v.textContent = val || "";
    return show ? d : null;
  }

  _renderDiagSummary(d) {
    const el = this.querySelector(".sf-diag-summary");
    if (!el || !this._isCollapsed("diagram")) return;
    const chips = [];
    if (d.solar != null) chips.push(["☀", this._fmtP(d.solar), this._color("solar")]);
    if (this._e("battery_power") && (d.soc != null || d.battery != null))
      chips.push(["🔋", [d.soc != null ? Math.round(d.soc) + " %" : "", d.battery != null && Math.abs(d.battery) > 3 ? (d.battery > 0 ? "+" : "−") + this._fmtP(Math.abs(d.battery)) : ""].filter(Boolean).join(" "), d.battery < 0 ? this._color("battery_discharge") : this._color("battery_charge")]);
    if (d.grid != null) chips.push([d.grid > 0 ? "⬇️" : "⬆️", this._fmtP(Math.abs(d.grid)), d.grid > 0 ? this._color("grid_import") : this._color("grid_export")]);
    if (d.total != null) chips.push(["🏠", this._fmtP(d.total), this._color("home")]);
    const html = chips.map(([i, v, c]) => `<span class="sf-ds-chip" style="--c:${c}"><span>${i}</span><b>${escapeHtml(v)}</b></span>`).join("");
    if (el._sfHtml !== html) {
      el.innerHTML = html;
      el._sfHtml = html;
    }
  }

  // ---- 1.1.0: stale data -------------------------------------------------------
  _staleInfo() {
    if (!this._show("stale_warning") || !this._hass) return null;
    const sts = STALE_KEYS.map((k) => this._e(k))
      .filter(Boolean)
      .map((id) => this._hass.states[id])
      .filter(Boolean);
    if (!sts.length) return null;
    if (sts.every((st) => st.state === "unavailable" || st.state === "unknown")) return { unavailable: true };
    const times = sts.map(stateTime).filter((v) => v != null);
    if (!times.length) return null;
    const newest = Math.max(...times);
    const age = Date.now() - newest;
    const lim = (Number(this._config.stale_minutes) || STALE_DEFAULT_MIN) * 60000;
    return age >= lim ? { minutes: Math.floor(age / 60000), last: newest } : null;
  }

  _renderStale() {
    const root = this.querySelector(".sf-root");
    if (!root) return;
    const info = this._staleInfo();
    const key = info ? JSON.stringify(info) + LANG : "";
    if (key === this._staleKey) return;
    this._staleKey = key;
    const pill = this.querySelector(".sf-stale-pill");
    const banner = this.querySelector(".sf-stale-banner");
    root.classList.toggle("sf-stale", !!info);
    const svg = this.querySelector(".sf-svg");
    try {
      if (svg && svg.pauseAnimations) info ? svg.pauseAnimations() : svg.unpauseAnimations();
    } catch (e) {
      /* ignore */
    }
    if (!info) {
      pill.classList.add("hidden");
      banner.classList.add("hidden");
      return;
    }
    pill.classList.remove("hidden");
    pill.textContent = info.unavailable ? "⚠" : `⚠ ${info.minutes} min`;
    banner.classList.remove("hidden");
    const title = info.unavailable ? t("stale_unavail") : t("stale_title").replace("{m}", info.minutes);
    const last = info.last ? " " + t("stale_last").replace("{t}", fmtClock(info.last)) : "";
    banner.innerHTML = `<span class="sf-stale-ico">⚠</span><div><b>${escapeHtml(title)}</b>${escapeHtml(last)}<br>${escapeHtml(t("stale_hint"))}</div>`;
  }

  // ---- 1.1.0: inverters ----------------------------------------------------------
  _extraInverters() {
    return (Array.isArray(this._config.inverters) ? this._config.inverters : []).filter((u) => u && (u.inverter_power || u.solar_power));
  }

  _invAgg(key, power) {
    const hass = this._hass;
    const read = (id) => (!id ? null : power ? numPower(hass, id) : num(hass, id));
    let main = read(this._e(key));
    if (main == null && key === "solar_power") {
      const parts = ["pv1_power", "pv2_power", "pv3_power"].map((k) => read(this._e(k))).filter((v) => v != null);
      if (parts.length) main = parts.reduce((s, v) => s + v, 0);
    }
    const vals = [main, ...this._extraInverters().map((u) => read(u[key]))].filter((v) => v != null);
    return vals.length ? vals.reduce((s, v) => s + v, 0) : null;
  }

  // ---- 1.1.0: tap actions ----------------------------------------------------------
  _tap(node, entityId) {
    const a = node && (this._config.tap_actions || {})[node];
    const action = a && a.action;
    if (!action || action === "more-info") return this._openMoreInfo((a && a.entity) || entityId);
    if (action === "none") return;
    if (action === "navigate") return this._navigate(a.navigation_path);
    if (action === "url") {
      if (a.url_path) window.open(a.url_path, "_blank", "noopener");
      return;
    }
    if (!this._hass) return;
    if (action === "toggle") {
      const id = a.entity || entityId;
      if (id) this._hass.callService("homeassistant", "toggle", { entity_id: id });
      return;
    }
    if (action === "perform-action" || action === "call-service") {
      const svc = a.perform_action || a.service;
      if (!svc || svc.indexOf(".") < 0) return;
      const [d, s] = svc.split(".");
      this._hass.callService(d, s, a.data || a.service_data || {}, a.target);
    }
  }

  // ---- 1.1.0: Smart Heating ----------------------------------------------------------
  _shIds(l) {
    return String(l.smart_heating || "")
      .split(",")
      .map((x) => x.trim())
      .filter(Boolean);
  }

  _shAcc(l) {
    if (!this._hass) return [];
    return this._shIds(l)
      .map((id) => this._hass.states[id])
      .filter((st) => st && st.attributes && st.attributes.fve_akumulacia_ciel != null)
      .map((st) => ({ ciel: Number(st.attributes.fve_akumulacia_ciel), max: st.attributes.fve_akumulacia_max != null ? Number(st.attributes.fve_akumulacia_max) : null }));
  }

  _shText(acc) {
    if (acc.length > 1) return `☀ ${acc.length} ${t("sh_zones")}`;
    const a = acc[0];
    return `☀ ${t("sh_acc")} ${fmtDeg(a.ciel)}${a.max != null ? "→" + fmtDeg(a.max) : ""}°`;
  }

  _shBadge(x, y) {
    return `<g class="sf-sh-badge" transform="translate(${x.toFixed(1)},${y.toFixed(1)})"><circle r="9.5" fill="#f5a623"></circle><text y="4" text-anchor="middle" style="font-size:11px">☀</text></g>`;
  }

  // ---- 1.1.0: phase load ------------------------------------------------------------
  _phaseLoad() {
    if (!this._show("phase_load") || !this._hass) return null;
    const ps = [1, 2, 3].map((i) => (this._e(`grid_power_l${i}`) ? numPower(this._hass, this._e(`grid_power_l${i}`)) : null));
    if (ps.filter((v) => v != null).length < 2) return null;
    const grid = this._gridValue();
    const sum = ps.reduce((s, v) => s + (v || 0), 0);
    const flip = grid != null && sum !== 0 && Math.sign(sum) !== Math.sign(grid);
    const lim = Number(this._config.phase_limit_a) || 25;
    const warn = Number(this._config.phase_warn_pct) || 80;
    const rows = ps.map((p, i) => {
      if (p == null) return null;
      const v = this._n(`grid_voltage_l${i + 1}`) || 230;
      const pp = flip ? -p : p;
      const a = Math.abs(pp) / v;
      return { ph: "L" + (i + 1), a, pct: (a / lim) * 100, dir: pp >= 0 ? "in" : "out" };
    });
    const worst = rows.filter(Boolean).reduce((m, r) => (!m || r.pct > m.pct ? r : m), null);
    return { rows, lim, warn, worst, alarm: worst && worst.pct >= warn ? worst : null };
  }

  _plColor(r, pl) {
    if (r.pct >= 100) return "#e5533c";
    if (r.pct >= pl.warn) return "#f0a030";
    return r.dir === "out" ? this._color("grid_export") : "#5b9bd5";
  }

  _renderPhaseLoad(pl) {
    const val = pl && pl.worst ? (pl.alarm ? `⚠ ${pl.alarm.ph} ${Math.round(pl.alarm.pct)} %` : `${pl.worst.ph} ${pl.worst.a.toFixed(1)} A`) : "";
    const sec = this._secShow("phase_load", !!pl, val);
    if (!sec) return;
    const brk = sec.querySelector(".sf-fold-src");
    const bt = t("pl_breaker").replace("{a}", fmtDeg(pl.lim));
    if (brk && brk.textContent !== bt) brk.textContent = bt;
    if (!sec.open) return;
    const body = sec.querySelector(".sf-fold-body");
    const html =
      pl.rows
        .filter(Boolean)
        .map((r) => {
          const col = this._plColor(r, pl);
          const w = Math.min(100, r.pct);
          const hot = r.pct >= pl.warn;
          return `<div class="sf-pl-row"><span class="sf-pl-l">${r.ph}</span><div class="sf-pl-bar"><i style="width:${w.toFixed(1)}%;background:${col}"></i><s style="left:${Math.min(100, pl.warn)}%"></s></div><span class="sf-pl-v"${hot ? ` style="color:${col}"` : ""}>${r.dir === "out" ? "↑" : "↓"} ${r.a.toFixed(1)} A${hot ? " ⚠" : ""}</span></div>`;
        })
        .join("") +
      (pl.alarm ? `<div class="sf-pl-warn">⚠ ${escapeHtml(t("pl_warn").replace("{ph}", pl.alarm.ph).replace("{pct}", Math.round(pl.alarm.pct)))}</div>` : "");
    if (body._sfHtml !== html) {
      body.innerHTML = html;
      body._sfHtml = html;
    }
  }

  // ---- 1.1.0: self-sufficiency + today ---------------------------------------------
  _ring(frac, color, title, sub) {
    const r = 26,
      c = 2 * Math.PI * r;
    const pct = Math.round(frac * 100);
    return `<div class="sf-ring"><svg viewBox="0 0 62 62" aria-hidden="true">
      <circle cx="31" cy="31" r="${r}" fill="none" stroke="rgba(127,127,127,.2)" stroke-width="7"></circle>
      <circle cx="31" cy="31" r="${r}" fill="none" stroke="${color}" stroke-width="7" stroke-linecap="round" stroke-dasharray="${((c * pct) / 100).toFixed(1)} ${c.toFixed(1)}" transform="rotate(-90 31 31)"></circle>
      <text x="31" y="36" text-anchor="middle" class="sf-ring-pct">${pct}%</text></svg>
      <div><div class="sf-ring-t">${escapeHtml(title)}</div><div class="sf-ring-s">${escapeHtml(sub)}</div></div></div>`;
  }

  _renderSelf() {
    const wrap = this.querySelector(".sf-self");
    if (!wrap) return null;
    const imp = this._n("grid_import_today");
    const exp = this._n("grid_export_today");
    const home = this._n("total_today");
    const sol = this._n("solar_today");
    const rings = [];
    let autarky = null;
    if (home > 0 && imp != null) {
      autarky = clamp(1 - imp / home, 0, 1);
      rings.push(this._ring(autarky, "#4caf7d", t("ss_autarky"), t("ss_autarky_sub").replace("{v}", fmtEnergy(imp, 1))));
    }
    if (sol > 0 && exp != null) rings.push(this._ring(clamp(1 - exp / sol, 0, 1), this._color("solar"), t("ss_selfuse"), t("ss_selfuse_sub").replace("{v}", fmtEnergy(Math.max(0, sol - exp), 1))));
    const show = this._show("self_sufficiency") && rings.length > 0;
    wrap.classList.toggle("hidden", !show);
    const html = show ? rings.join("") : "";
    if (wrap._sfHtml !== html) {
      wrap.innerHTML = html;
      wrap._sfHtml = html;
    }
    return show ? { autarky } : null;
  }

  _renderTodaySection() {
    const self = this._renderSelf();
    this._renderTodayRow();
    const row = this.querySelector(".sf-today-row");
    const rowOn = row && !row.classList.contains("hidden");
    const parts = [];
    const sol = this._n("solar_today");
    if (sol != null) parts.push("☀ " + fmtEnergy(sol, 1));
    if (self && self.autarky != null) parts.push(Math.round(self.autarky * 100) + " %");
    this._secShow("today", !!self || rowOn, parts.join(" · "));
  }

  // ---- 1.1.0: forecast ---------------------------------------------------------------
  _fcSource() {
    const id = this._e("forecast_today");
    if (/solcast/i.test(id)) return "Solcast";
    if (/energy_production/i.test(id)) return "Forecast.Solar";
    return "";
  }

  /** Forecast curve for today as [[ms, W], ...] or null. */
  _fcCurve() {
    if (!this._hass) return null;
    const st = this._hass.states[this._e("forecast_today")];
    const a = st && st.attributes;
    const det = a && (a.detailedForecast || a.detailedHourly);
    if (Array.isArray(det) && det.length > 1) {
      const pts = det.map((p) => [Date.parse(p.period_start), Number(p.pv_estimate) * 1000]).filter(([ms, w]) => !isNaN(ms) && !isNaN(w));
      if (pts.length > 1) {
        const half = (pts[1][0] - pts[0][0]) / 2;
        return pts.map(([ms, w]) => [ms + half, w]);
      }
    }
    return this._fcWs && this._fcWs.points && this._fcWs.points.length ? this._fcWs.points : null;
  }

  async _loadForecastWs() {
    const hass = this._hass;
    if (!hass || !hass.callWS) return;
    if (this._fcWs && (this._fcWs.loading || Date.now() - this._fcWs.at < FC_REFRESH_MS)) return;
    this._fcWs = Object.assign({}, this._fcWs, { loading: true, at: Date.now() });
    let points = null;
    try {
      const res = await hass.callWS({ type: "energy/solar_forecast" });
      const sum = {};
      Object.values(res || {}).forEach((f) => {
        Object.entries((f && f.wh_hours) || {}).forEach(([iso, wh]) => {
          const ms = Date.parse(iso);
          if (!isNaN(ms)) sum[ms] = (sum[ms] || 0) + Number(wh || 0);
        });
      });
      const s0 = startOfDay(0),
        s1 = startOfDay(1);
      points = Object.keys(sum)
        .map(Number)
        .filter((ms) => ms >= s0 - 3600000 && ms < s1)
        .sort((a, b) => a - b)
        .map((ms) => [ms + 1800000, sum[ms]]);
    } catch (e) {
      points = null;
    }
    this._fcWs = { points, at: Date.now() };
    this._fcKey = null;
    if (this.isConnected && this._built && this._hass) this._updateContent();
  }

  _interp(points, ms) {
    if (!points || !points.length) return null;
    if (ms <= points[0][0] || ms >= points[points.length - 1][0]) return 0;
    for (let i = 1; i < points.length; i++) {
      if (points[i][0] >= ms) {
        const [a, va] = points[i - 1],
          [b, vb] = points[i];
        return va + ((vb - va) * (ms - a)) / (b - a);
      }
    }
    return null;
  }

  _renderForecast(solarNow) {
    const fcId = this._e("forecast_today");
    const fc = this._hass ? energyKwh(this._hass, fcId) : null;
    const show = this._show("forecast") && !!fcId && fc != null;
    const done = this._n("solar_today");
    const sec = this._secShow("forecast", show, show ? `${done != null ? done.toFixed(1) : "--"} / ~${fc.toFixed(1)} kWh` : "");
    if (!sec) return;
    const src = sec.querySelector(".sf-fold-src");
    const srcTxt = this._fcSource();
    if (src && src.textContent !== srcTxt) src.textContent = srcTxt;
    if (!sec.open) return;
    const tom = energyKwh(this._hass, this._e("forecast_tomorrow"));
    let left = energyKwh(this._hass, this._e("forecast_remaining"));
    if (left == null && done != null) left = Math.max(0, fc - done);
    const curve = this._fcCurve();
    const now = Date.now();
    const fcNow = this._e("forecast_power_now") ? this._p("forecast_power_now") : curve ? this._interp(curve, now) : null;
    let peak = null;
    if (curve) curve.forEach(([ms, w]) => ms >= startOfDay(0) && ms < startOfDay(1) && (!peak || w > peak[1]) && (peak = [ms, w]));
    const day = this._day && this._day["0"];
    const key = [fc, done, tom, left, Math.round((solarNow || 0) / 100), Math.round((fcNow || 0) / 100), curve ? curve.length : 0, day ? day.at : 0, LANG].join("|");
    if (key === this._fcKey) return;
    this._fcKey = key;
    const tIcon = tom == null ? "" : tom >= fc * 0.8 ? "☀️" : tom >= fc * 0.4 ? "⛅" : "☁️";
    const sub = [];
    if (left != null) sub.push(t("fc_left").replace("{v}", left.toFixed(1)));
    if (solarNow != null && fcNow != null) sub.push(t("fc_now").replace("{a}", fmtKw(solarNow)).replace("{b}", fmtKw(fcNow).replace(" kW", "")));
    if (peak && peak[1] > 0) sub.push(t("fc_peak").replace("{t}", fmtClock(peak[0])));
    const graph = curve ? this._fcSvg(curve, day) : `<div class="sf-fc-bar"><i style="width:${done != null && fc > 0 ? clamp((done / fc) * 100, 0, 100).toFixed(1) : 0}%"></i></div>`;
    const body = sec.querySelector(".sf-fold-body");
    body.innerHTML = `
      <div class="sf-fc-row"><div class="sf-fc-main"><b>${done != null ? done.toFixed(1) : "--"}</b> ${escapeHtml(t("fc_of").replace("{v}", fc.toFixed(1)))}</div>${
        tom != null ? `<div class="sf-fc-tom">${tIcon} ${escapeHtml(t("fc_tomorrow"))} <b>~${tom.toFixed(0)} kWh</b></div>` : ""
      }</div>
      ${graph}
      ${sub.length ? `<div class="sf-fc-sub">${escapeHtml(sub.join(" · "))}</div>` : ""}`;
  }

  _fcSvg(curve, day) {
    const W = 440,
      H = 46;
    const nz = curve.filter(([, w]) => w > 0);
    const s0 = startOfDay(0);
    let a = nz.length ? nz[0][0] - 3600000 : s0 + 5 * 3600000;
    let b = nz.length ? nz[nz.length - 1][0] + 3600000 : s0 + 21 * 3600000;
    if (b - a < 4 * 3600000) b = a + 4 * 3600000;
    const now = Date.now();
    let max = Math.max(1, ...curve.map(([, w]) => w));
    const act = day && day.series && day.series.solar ? day.series.solar : null;
    if (act) act.forEach((v) => v != null && v > max && (max = v));
    const X = (ms) => (((ms - a) / (b - a)) * W).toFixed(1);
    const Y = (w) => (H - 4 - (w / max) * (H - 8)).toFixed(1);
    const fcPath = curve.filter(([ms]) => ms >= a && ms <= b).map(([ms, w], i) => `${i ? "L" : "M"}${X(ms)} ${Y(w)}`).join(" ");
    let actPath = "",
      area = "";
    if (act) {
      const pts = [];
      act.forEach((v, i) => {
        const ms = day.start + i * 300000 + 150000;
        if (v != null && ms >= a && ms <= Math.min(b, now)) pts.push([ms, v]);
      });
      if (pts.length > 1) {
        actPath = pts.map(([ms, v], i) => `${i ? "L" : "M"}${X(ms)} ${Y(v)}`).join(" ");
        area = `${actPath} L${X(pts[pts.length - 1][0])} ${H} L${X(pts[0][0])} ${H} Z`;
      }
    }
    const nowX = now >= a && now <= b ? X(now) : null;
    const sc = this._color("solar");
    return `<svg class="sf-fc-svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true">
      <path d="${fcPath}" fill="none" stroke="${sc}" stroke-width="1.6" stroke-dasharray="4 4" opacity=".75" vector-effect="non-scaling-stroke"></path>
      ${area ? `<path d="${area}" fill="${sc}" opacity=".22"></path><path d="${actPath}" fill="none" stroke="${sc}" stroke-width="2.2" vector-effect="non-scaling-stroke"></path>` : ""}
      ${nowX ? `<line x1="${nowX}" x2="${nowX}" y1="2" y2="${H}" stroke="currentColor" stroke-width="1" opacity=".45" vector-effect="non-scaling-stroke"></line>` : ""}
    </svg>`;
  }

  // ---- 1.1.0: day data + chart ---------------------------------------------------------
  _chartIds() {
    const solar = this._e("solar_power") ? [this._e("solar_power")] : ["pv1_power", "pv2_power", "pv3_power"].map((k) => this._e(k)).filter(Boolean);
    this._extraInverters().forEach((u) => u.solar_power && solar.push(u.solar_power));
    const map = { solar, home: [this._e("total_power")].filter(Boolean), soc: [this._e("battery_soc")].filter(Boolean) };
    return map;
  }

  _maybeLoadData() {
    if (!this._hass || !this._hass.callWS) return;
    const fcSec = this._sec("forecast");
    const fcOn = fcSec && !fcSec.classList.contains("hidden") && fcSec.open;
    const chSec = this._sec("chart");
    const chOn = chSec && !chSec.classList.contains("hidden") && chSec.open;
    if (fcOn || (chOn && (this._chartDay || 0) === 0)) this._loadDay(0);
    if (chOn && this._chartDay === -1) this._loadDay(-1);
    if ((fcOn || chOn) && this._e("forecast_today")) {
      const st = this._hass.states[this._e("forecast_today")];
      const a = st && st.attributes;
      if (!(a && (a.detailedForecast || a.detailedHourly))) this._loadForecastWs();
    }
  }

  async _loadDay(offset) {
    const hass = this._hass;
    if (!hass || !hass.callWS) return;
    this._day = this._day || {};
    const key = String(offset);
    const cur = this._day[key];
    if (cur && (cur.loading || (offset !== 0 && cur.series) || Date.now() - cur.at < DAY_REFRESH_MS)) return;
    const map = this._chartIds();
    const ids = [...new Set([].concat(...Object.values(map)))];
    if (!ids.length) return;
    const start = startOfDay(offset);
    const end = offset === 0 ? Date.now() : startOfDay(offset + 1);
    this._day[key] = Object.assign({}, cur || {}, { loading: true, at: (cur && cur.at) || 0 });
    let next;
    try {
      const buckets = await this._fetchBuckets(ids, start, end);
      const series = {};
      Object.entries(map).forEach(([name, list]) => {
        const arrs = list.map((id) => buckets[id]).filter(Boolean);
        if (!arrs.length) return;
        const n = Math.max(...arrs.map((x) => x.length));
        series[name] = Array.from({ length: n }, (_, i) => {
          const vals = arrs.map((x) => x[i]).filter((v) => v != null);
          if (!vals.length) return null;
          return name === "soc" ? vals[0] : vals.reduce((s, v) => s + v, 0);
        });
      });
      next = { start, end, series, at: Date.now() };
    } catch (e) {
      next = { start, end, series: null, at: Date.now(), error: true };
    }
    this._day[key] = next;
    this._chartKey = null;
    this._fcKey = null;
    if (this.isConnected && this._built && this._hass) this._updateContent();
  }

  async _fetchBuckets(ids, start, end) {
    const hass = this._hass;
    const STEP = 300000;
    const N = Math.max(1, Math.ceil((end - start) / STEP));
    const out = {};
    const scale = (id, v) => (v == null || isNaN(v) ? null : powerToW(hass, id, Number(v)));
    let stats = {};
    try {
      stats = (await hass.callWS({ type: "recorder/statistics_during_period", start_time: new Date(start).toISOString(), end_time: new Date(end).toISOString(), statistic_ids: ids, period: "5minute", types: ["mean"] })) || {};
    } catch (e) {
      stats = {};
    }
    const missing = [];
    ids.forEach((id) => {
      const rows = stats[id];
      if (!rows || !rows.length) {
        missing.push(id);
        return;
      }
      const arr = new Array(N).fill(null);
      rows.forEach((r) => {
        const ms = typeof r.start === "number" ? r.start : Date.parse(r.start);
        const i = Math.floor((ms - start) / STEP);
        if (i >= 0 && i < N) arr[i] = scale(id, r.mean);
      });
      out[id] = arr;
    });
    if (missing.length) {
      const res = await hass.callWS({
        type: "history/history_during_period",
        start_time: new Date(start).toISOString(),
        end_time: new Date(end).toISOString(),
        entity_ids: missing,
        minimal_response: true,
        no_attributes: true,
        significant_changes_only: false,
      });
      missing.forEach((id) => {
        const rows = (res && res[id]) || [];
        const pts = rows
          .map((r) => [r.lu != null ? r.lu * 1000 : Date.parse(r.last_updated || r.last_changed), parseFloat(r.s != null ? r.s : r.state)])
          .filter(([ms]) => !isNaN(ms));
        const sum = new Array(N).fill(0),
          cnt = new Array(N).fill(0);
        let first = null;
        pts.forEach(([ms, v]) => {
          const i = Math.floor((ms - start) / STEP);
          if (isNaN(v)) return;
          if (i < 0) {
            first = v;
            return;
          }
          if (i < N) {
            sum[i] += v;
            cnt[i]++;
          }
        });
        let last = first;
        const now = Date.now();
        out[id] = sum.map((s, i) => {
          if (cnt[i]) last = s / cnt[i];
          else if (start + i * STEP > now) return null;
          return scale(id, last);
        });
      });
    }
    return out;
  }

  _renderChart() {
    const ids = this._chartIds();
    const show = this._show("day_chart") && (ids.solar.length > 0 || ids.home.length > 0);
    const off = this._chartDay || 0;
    const day = this._day && this._day[String(off)];
    let total = null;
    if (off === 0) total = this._n("solar_today");
    else if (day && day.series && day.series.solar) total = day.series.solar.reduce((s, v) => s + (v || 0), 0) / 12000;
    const sec = this._secShow("chart", show, total != null ? "☀ " + fmtEnergy(total, 1) : "");
    if (!sec || !sec.open) return;
    const body = sec.querySelector(".sf-fold-body");
    if (!body.querySelector(".sf-ch-chips")) {
      body.innerHTML = `<div class="sf-ch-chips"><button data-day="0"></button><button data-day="-1"></button></div><div class="sf-ch-plot"></div><div class="sf-ch-read"></div><div class="sf-ch-leg"></div>`;
      body.querySelectorAll(".sf-ch-chips button").forEach((b) => {
        b.onclick = () => {
          this._chartDay = Number(b.dataset.day);
          this._chartKey = null;
          this._renderChart();
          this._maybeLoadData();
        };
      });
    }
    body.querySelectorAll(".sf-ch-chips button").forEach((b) => {
      const txt = b.dataset.day === "0" ? t("ch_today") : t("ch_yesterday");
      if (b.textContent !== txt) b.textContent = txt;
      b.classList.toggle("on", Number(b.dataset.day) === off);
    });
    const curve = off === 0 ? this._fcCurve() : null;
    const key = [off, day ? day.at : 0, day && day.loading ? 1 : 0, curve ? curve.length : 0, LANG].join("|");
    if (key === this._chartKey) return;
    this._chartKey = key;
    const plot = body.querySelector(".sf-ch-plot");
    const read = body.querySelector(".sf-ch-read");
    const sc = this._color("solar"),
      hc = this._color("home"),
      bc = this._color("battery_charge");
    const leg = [[sc, t("ch_solar")], curve ? [sc, t("ch_fc"), true] : null, ids.home.length ? [hc, t("ch_home")] : null, ids.soc.length ? [bc, t("ch_soc")] : null].filter(Boolean);
    body.querySelector(".sf-ch-leg").innerHTML = leg.map(([c, l, dash]) => `<span class="${dash ? "dash" : ""}" style="--c:${c}">${escapeHtml(l)}</span>`).join("");
    if (!day || !day.series) {
      plot.innerHTML = `<div class="sf-ch-empty">${escapeHtml(day && day.error ? t("ch_nodata") : this._hass && this._hass.callWS ? t("ch_loading") : t("ch_nodata"))}</div>`;
      read.textContent = "";
      this._maybeLoadData();
      return;
    }
    const S = day.series;
    const W = 448,
      H = 222,
      L = 30,
      R = 34,
      T = 24,
      B = 24;
    const pw = W - L - R,
      ph = H - T - B;
    const dayMs = startOfDay(off + 1) - day.start;
    const X = (ms) => L + ((ms - day.start) / dayMs) * pw;
    let max = 0;
    ["solar", "home"].forEach((k) => (S[k] || []).forEach((v) => v != null && v > max && (max = v)));
    if (curve) curve.forEach(([, w]) => w > max && (max = w));
    const top = niceMax((max / 1000) * 1.05);
    const Y = (w) => T + (1 - w / 1000 / top) * ph;
    const Ys = (p) => T + (1 - p / 100) * ph;
    const path = (arr, y) => {
      let d = "",
        pen = false;
      (arr || []).forEach((v, i) => {
        if (v == null) {
          pen = false;
          return;
        }
        const x = X(day.start + i * 300000 + 150000).toFixed(1);
        d += `${pen ? "L" : "M"}${x} ${y(v).toFixed(1)} `;
        pen = true;
      });
      return d;
    };
    let grid = "";
    [0, 0.25, 0.5, 0.75, 1].forEach((f) => {
      const y = T + (1 - f) * ph;
      grid += `<line x1="${L}" x2="${W - R}" y1="${y.toFixed(1)}" y2="${y.toFixed(1)}" class="sf-ch-grid"></line><text x="${L - 6}" y="${(y + 4).toFixed(1)}" text-anchor="end" class="sf-ch-ax">${+(top * f).toFixed(2)}</text>`;
    });
    if (S.soc) [0, 50, 100].forEach((p) => (grid += `<text x="${W - R + 6}" y="${(Ys(p) + 4).toFixed(1)}" class="sf-ch-ax" fill="${bc}" style="fill:${bc}">${p}%</text>`));
    [0, 6, 12, 18, 24].forEach((h) => (grid += `<text x="${X(day.start + h * 3600000).toFixed(1)}" y="${H - 6}" text-anchor="middle" class="sf-ch-ax">${String(h).padStart(2, "0")}:00</text>`));
    const sol = S.solar || [];
    let area = "";
    const solPath = path(sol, Y);
    if (solPath) {
      const firstI = sol.findIndex((v) => v != null);
      let lastI = sol.length - 1;
      while (lastI > 0 && sol[lastI] == null) lastI--;
      if (firstI >= 0 && sol.slice(firstI, lastI + 1).every((v) => v != null))
        area = `<path d="${solPath} L${X(day.start + lastI * 300000 + 150000).toFixed(1)} ${Y(0).toFixed(1)} L${X(day.start + firstI * 300000 + 150000).toFixed(1)} ${Y(0).toFixed(1)} Z" fill="${sc}" opacity=".22"></path>`;
    }
    const fcPath = curve ? curve.filter(([ms]) => ms >= day.start && ms <= day.start + dayMs).map(([ms, w], i) => `${i ? "L" : "M"}${X(ms).toFixed(1)} ${Y(w).toFixed(1)}`).join(" ") : "";
    const nowX = off === 0 ? X(Date.now()) : null;
    plot.innerHTML = `<svg class="sf-ch-svg" viewBox="0 0 ${W} ${H}">
      ${grid}<text x="${L - 6}" y="${T - 12}" text-anchor="end" class="sf-ch-ax">kW</text>
      ${fcPath ? `<path d="${fcPath}" fill="none" stroke="${sc}" stroke-width="1.5" stroke-dasharray="4 4" opacity=".75"></path>` : ""}
      ${area}<path d="${solPath}" fill="none" stroke="${sc}" stroke-width="2"></path>
      <path d="${path(S.home, Y)}" fill="none" stroke="${hc}" stroke-width="2"></path>
      <path d="${path(S.soc, Ys)}" fill="none" stroke="${bc}" stroke-width="2"></path>
      ${nowX != null ? `<line x1="${nowX.toFixed(1)}" x2="${nowX.toFixed(1)}" y1="${T}" y2="${H - B}" class="sf-ch-now"></line>` : ""}
      <line class="sf-ch-cursor" x1="0" x2="0" y1="${T}" y2="${H - B}" style="display:none"></line>
      <rect class="sf-ch-hit" x="${L}" y="${T}" width="${pw}" height="${ph}" fill="transparent"></rect>
    </svg>`;
    read.textContent = t("ch_hint");
    const svg = plot.querySelector("svg");
    const cursor = svg.querySelector(".sf-ch-cursor");
    const pick = (ev) => {
      const r = svg.getBoundingClientRect();
      if (!r.width) return;
      const x = ((ev.clientX - r.left) / r.width) * W;
      const i = clamp(Math.floor((((x - L) / pw) * dayMs) / 300000), 0, Math.max(0, sol.length - 1, (S.home || []).length - 1));
      const ms = day.start + i * 300000;
      const parts = [fmtClock(ms)];
      if (sol[i] != null) parts.push("☀ " + fmtKw(sol[i]));
      if (S.home && S.home[i] != null) parts.push("🏠 " + fmtKw(S.home[i]));
      if (S.soc && S.soc[i] != null) parts.push("🔋 " + Math.round(S.soc[i]) + " %");
      read.textContent = parts.join(" · ");
      const cx = X(ms + 150000).toFixed(1);
      cursor.setAttribute("x1", cx);
      cursor.setAttribute("x2", cx);
      cursor.style.display = "";
    };
    svg.addEventListener("pointermove", pick);
    svg.addEventListener("pointerdown", pick);
  }

  _buildSkeleton() {
    this.innerHTML = `
      <ha-card>
        <style>${this._styles()}</style>
        <div class="sf-root">
          <div class="sf-header">
            <div class="sf-title"><span class="sf-title-icon"></span><span class="sf-title-text"></span><button class="sf-diag-toggle" type="button"><span></span></button></div>
            <div class="sf-head-right"><span class="sf-stale-pill hidden"></span><div class="sf-links"></div></div>
          </div>
          <div class="sf-stale-banner hidden"></div>

          <details class="sf-fold sf-sec sf-fc-sec hidden" data-sec="forecast">
            <summary class="sf-fold-summary">☀️ <span class="sf-fold-title">${t("sec_forecast")}</span> <span class="sf-fold-val"></span><span class="sf-fold-src"></span></summary>
            <div class="sf-fold-body"></div>
          </details>

          <div class="sf-diag-summary hidden"></div>
          <div class="sf-diagram-wrap">
            <svg class="sf-svg" preserveAspectRatio="xMidYMid meet"></svg>
          </div>

          <details class="sf-fold sf-sec hidden" data-sec="phase_load">
            <summary class="sf-fold-summary">${this._mini("bolt", 16)} <span class="sf-fold-title">${t("sec_phase_load")}</span> <span class="sf-fold-val"></span><span class="sf-fold-src"></span></summary>
            <div class="sf-fold-body"></div>
          </details>
          <details class="sf-fold sf-sec sf-wb-sec hidden" data-sec="wallbox">
            <summary class="sf-fold-summary">${this._mini("car", 17)} <span class="sf-fold-title sf-wb-name"></span> <span class="sf-fold-val"></span></summary>
            <div class="sf-fold-body"><div class="sf-wallbox-panel" data-wb=""></div></div>
          </details>
          <details class="sf-fold sf-sec sf-wb-sec hidden" data-sec="wallbox2">
            <summary class="sf-fold-summary">${this._mini("car", 17)} <span class="sf-fold-title sf-wb-name"></span> <span class="sf-fold-val"></span></summary>
            <div class="sf-fold-body"><div class="sf-wallbox-panel" data-wb="${WB2_PREFIX}"></div></div>
          </details>
          <details class="sf-batt-settings sf-fold" data-sec="battery_settings">
            <summary class="sf-fold-summary">${this._mini("battery", 17)} <span class="sf-fold-title">${t("battery_settings")}</span> <span class="sf-fold-val"></span></summary>
            <div class="sf-fold-body"></div>
          </details>
          <details class="sf-phases" data-sec="phase_details">
            <summary class="sf-phases-summary">${this._mini("bolt", 16)} ${t("phase_details")}</summary>
            <div class="sf-phases-body"></div>
          </details>
          <details class="sf-fold sf-sec hidden" data-sec="today">
            <summary class="sf-fold-summary">📊 <span class="sf-fold-title">${t("sec_today")}</span> <span class="sf-fold-val"></span></summary>
            <div class="sf-fold-body"><div class="sf-self hidden"></div><div class="sf-today-row"></div></div>
          </details>
          <details class="sf-fold sf-sec hidden" data-sec="chart">
            <summary class="sf-fold-summary">📈 <span class="sf-fold-title">${t("sec_chart")}</span> <span class="sf-fold-val"></span></summary>
            <div class="sf-fold-body"></div>
          </details>
        </div>
      </ha-card>
    `;
    this._bindSections();
    this._staleKey = null;
    this._chartKey = null;
    this._fcKey = null;
    this._battSettingsBuilt = false;
    this._wbBuilt = {};
    this._phasesBuilt = false;
    this._wbChipsKey = {};
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
      .sf-bar-wrap.is-idle, .sf-bar-ticks.is-idle { opacity: 0.45; }
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
      .sf-head-right { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; justify-content: flex-end; }
      .sf-title { cursor: pointer; user-select: none; }
      .sf-diag-toggle { width: 12px; height: 22px; border: 0; background: none; color: var(--secondary-text-color); cursor: pointer; display: grid; place-items: center; padding: 0; margin-left: -5px; opacity: .7; flex: none; }
      .sf-diag-toggle span { display: inline-block; width: 7px; height: 7px; border-right: 2px solid currentColor; border-bottom: 2px solid currentColor; transform: rotate(-135deg); margin-top: 4px; transition: transform .2s ease, margin .2s ease; }
      .sf-diag-toggle.collapsed span { transform: rotate(45deg); margin-top: -4px; }
      .sf-sec[open] > .sf-fold-summary .sf-fold-val { display: none; }
      .sf-hidden, .hidden.sf-sec, .sf-diag-summary.hidden, .sf-stale-pill.hidden, .sf-stale-banner.hidden, .sf-self.hidden { display: none !important; }
      .sf-diag-summary { display: flex; flex-wrap: wrap; gap: 8px; }
      .sf-ds-chip { display: inline-flex; align-items: center; gap: 6px; border-radius: 999px; padding: 7px 12px; background: color-mix(in srgb, var(--c) 14%, transparent); border: 1px solid color-mix(in srgb, var(--c) 45%, transparent); font-size: .92rem; }
      .sf-ds-chip b { color: var(--primary-text-color); font-variant-numeric: tabular-nums; }
      .sf-stale-pill { display: inline-flex; align-items: center; border-radius: 999px; padding: 6px 11px; font-size: .84rem; font-weight: 800; background: rgba(229,115,60,.18); border: 1px solid rgba(229,115,60,.55); color: #f0915a; }
      .sf-stale-banner { display: flex; gap: 10px; align-items: flex-start; background: rgba(229,115,60,.12); border: 1px solid rgba(229,115,60,.45); color: #e8865a; border-radius: 12px; padding: 10px 12px; font-size: .86rem; line-height: 1.35; }
      .sf-stale-banner b { color: #f0915a; }
      .sf-root.sf-stale .sf-diagram-wrap, .sf-root.sf-stale .sf-diag-summary { opacity: .42; filter: grayscale(.85); }
      .sf-root.sf-stale .sf-flow, .sf-root.sf-stale .sf-arrow-move, .sf-root.sf-stale .sf-led, .sf-root.sf-stale .sf-sun-glow, .sf-root.sf-stale .sf-batt-blink, .sf-root.sf-stale .sf-batt-arrow { animation-play-state: paused; }
      .sf-fold-src { font-size: .78rem; font-weight: 600; letter-spacing: 0; opacity: .75; margin-left: auto; text-transform: none; }
      .sf-fold-src:empty { display: none; }
      .sf-fold-summary:has(.sf-fold-src:not(:empty))::after { margin-left: 8px; }
      .sf-fc-sec { background: rgba(245,166,35,.08); border: 1px solid rgba(245,166,35,.28); }
      .sf-fc-row { display: flex; justify-content: space-between; align-items: baseline; gap: 8px; flex-wrap: wrap; }
      .sf-fc-main { font-size: 1.02rem; color: var(--primary-text-color); }
      .sf-fc-main b { font-size: 1.35rem; color: var(--sf-solar, #f5a623); font-variant-numeric: tabular-nums; }
      .sf-fc-tom { font-size: .92rem; color: var(--secondary-text-color); }
      .sf-fc-tom b { color: var(--primary-text-color); }
      .sf-fc-sub { font-size: .8rem; color: var(--secondary-text-color); }
      .sf-fc-svg { width: 100%; height: 46px; display: block; color: var(--primary-text-color); }
      .sf-fc-bar { position: relative; height: 10px; border-radius: 6px; background: rgba(127,127,127,.18); overflow: hidden; }
      .sf-fc-bar i { position: absolute; inset: 0 auto 0 0; background: var(--sf-solar, #f5a623); border-radius: 6px; }
      .sf-sec > .sf-fold-body { gap: 8px; }
      .sf-pl-row { display: grid; grid-template-columns: 26px 1fr 96px; align-items: center; gap: 10px; font-size: .86rem; }
      .sf-pl-l { font-weight: 800; color: var(--secondary-text-color); }
      .sf-pl-bar { position: relative; height: 12px; border-radius: 6px; background: rgba(127,127,127,.18); overflow: hidden; }
      .sf-pl-bar i { position: absolute; left: 0; top: 0; bottom: 0; border-radius: 6px; transition: width .6s ease; }
      .sf-pl-bar s { position: absolute; top: 0; bottom: 0; width: 2px; background: var(--primary-text-color); opacity: .35; }
      .sf-pl-v { text-align: right; font-weight: 800; color: var(--primary-text-color); font-variant-numeric: tabular-nums; }
      .sf-pl-warn { font-size: .82rem; color: #f0a030; }
      .sf-self { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
      @container (max-width: 360px) { .sf-self { grid-template-columns: 1fr; } }
      .sf-ring { display: flex; align-items: center; gap: 12px; background: rgba(127,127,127,0.07); border-radius: 12px; padding: 10px 12px; }
      .sf-ring svg { width: 62px; height: 62px; flex: none; }
      .sf-ring-pct { font-size: 15px; font-weight: 800; fill: var(--primary-text-color); }
      .sf-ring-t { font-size: .78rem; color: var(--secondary-text-color); text-transform: uppercase; letter-spacing: .04em; font-weight: 700; }
      .sf-ring-s { font-size: .78rem; color: var(--secondary-text-color); margin-top: 2px; }
      .sf-ch-chips { display: flex; gap: 6px; }
      .sf-ch-chips button { font: inherit; border: 1px solid var(--divider-color); border-radius: 999px; padding: 4px 12px; font-size: .8rem; color: var(--secondary-text-color); background: transparent; cursor: pointer; }
      .sf-ch-chips button.on { background: color-mix(in srgb, var(--sf-solar, #f5a623) 16%, transparent); border-color: var(--sf-solar, #f5a623); color: var(--primary-text-color); font-weight: 700; }
      .sf-ch-svg { width: 100%; height: auto; display: block; touch-action: pan-y; }
      .sf-ch-grid { stroke: rgba(127,127,127,.18); }
      .sf-ch-ax { font-size: 10px; fill: var(--secondary-text-color); }
      .sf-ch-now { stroke: var(--primary-text-color); opacity: .4; stroke-dasharray: 2 3; }
      .sf-ch-cursor { stroke: var(--primary-text-color); opacity: .55; }
      .sf-ch-read { font-size: .8rem; color: var(--secondary-text-color); min-height: 1.2em; font-variant-numeric: tabular-nums; }
      .sf-ch-empty { padding: 26px 0; text-align: center; font-size: .86rem; color: var(--secondary-text-color); }
      .sf-ch-leg { display: flex; flex-wrap: wrap; gap: 6px 14px; font-size: .78rem; color: var(--secondary-text-color); }
      .sf-ch-leg span::before { content: ""; display: inline-block; width: 14px; height: 3px; border-radius: 2px; margin-right: 6px; vertical-align: middle; background: var(--c); }
      .sf-ch-leg span.dash::before { background: repeating-linear-gradient(90deg, var(--c) 0 4px, transparent 4px 7px); }
      .sf-wb-sec > .sf-fold-body { padding: 0 6px 6px; }
      .sf-wb-sec .sf-panel { background: transparent; padding: 4px 10px 10px; }
      .sf-wb-sec .sf-wb-title { display: none; }
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
    const pv3 = this._e("pv3_power") ? this._p("pv3_power") : null;
    let solar = this._p("solar_power");
    if (solar == null && (pv1 != null || pv2 != null || pv3 != null)) solar = (pv1 || 0) + (pv2 || 0) + (pv3 || 0);
    const battery = this._batteryValue();
    const soc = this._n("battery_soc");
    const grid = this._gridValue();

    const loads = this._show("loads")
      ? this._loads().map((l) => ({
          ...l,
          icon: this._loadIcon(l),
          value: sumEntities(hass, l.entity, l.extra_entities, true),
          today: l.today || l.today_extra ? sumEntities(hass, l.today, l.today_extra) : null,
          acc: this._shAcc(l),
        }))
      : [];

    const totalPower = this._p("total_power");
    let remainder = null;
    if (totalPower != null) {
      const loadsSum = loads.reduce((s, l) => s + (l.value || 0), 0);
      remainder = Math.max(0, totalPower - loadsSum);
    }

    this.style.setProperty("--sf-solar", this._color("solar"));
    this._plState = this._phaseLoad();
    this._renderStale();
    this._renderForecast(solar);
    this._renderDiagram({ pv1, pv2, pv3, solar, battery, soc, grid, loads, remainder, total: totalPower });
    this._renderDiagSummary({ solar, battery, soc, grid, total: totalPower });
    this._renderPhaseLoad(this._plState);
    this._renderBatterySettings();
    this._renderWallboxPanel("");
    this._renderWallboxPanel(WB2_PREFIX);
    ["", WB2_PREFIX].forEach((pre) => {
      const panel = this.querySelector(`.sf-wallbox-panel[data-wb="${pre}"]`);
      const on = !!panel && !panel.classList.contains("hidden");
      const sec = this._secShow(pre ? "wallbox2" : "wallbox", on, on ? this._wbSummary(pre) : "");
      if (sec) {
        const name = (pre ? this._config.wallbox2_label : this._config.wallbox_label) || (pre ? "Wallbox 2" : t("sec_wallbox"));
        const el = sec.querySelector(".sf-wb-name");
        if (el.textContent !== name) el.textContent = name;
      }
    });
    this._renderPhaseDetails();
    this._renderTodaySection();
    this._renderChart();
    this._maybeLoadData();
  }

  _wbSummary(prefix) {
    this._wbPrefix = prefix;
    try {
      const status = this._tr(rawState(this._hass, this._e("wallbox_status")), "wallbox");
      const p = this._p("wallbox_power");
      return [status, p != null ? this._fmtP(p) : ""].filter(Boolean).join(" · ");
    } finally {
      this._wbPrefix = "";
    }
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

  /** Debounced night layout: the first value applies at once, a change only after NIGHT_HOLD_MS. */
  _nightLatch(want) {
    const now = Date.now();
    if (this._night == null) { this._night = want; this._nightSince = null; return want; }
    if (want === this._night) { this._nightSince = null; clearTimeout(this._nightTimer); return this._night; }
    if (this._nightSince == null) this._nightSince = now;
    const left = NIGHT_HOLD_MS - (now - this._nightSince);
    if (left <= 0) { this._night = want; this._nightSince = null; clearTimeout(this._nightTimer); return want; }
    // production may stay put (no state change), so check again when the hold is over
    clearTimeout(this._nightTimer);
    this._nightTimer = setTimeout(() => { if (this._hass && this._built && this.isConnected) this._updateContent(); }, left + 50);
    return this._night;
  }

  _renderDiagram(d) {
    const cfg = this._config;
    this._pathSeq = 0;
    const animOn = this._show("animation");
    const speed = SPEED_MULT[cfg.animation_speed] || 1;

    const showBattery = this._show("battery") && !!this._e("battery_power");
    const showGrid = this._show("grid") && !!this._e("grid_power");
    const pvSplit = this._show("pv_split") && !!this._e("pv1_power") && !!this._e("pv2_power");
    const pvTriple = pvSplit && this._pv3On();
    const showSum = this._show("solar_sum");

    const items = d.loads.filter((l) => l.label && (l.entity || l.extra_entities));
    if (items.length && d.total != null && this._show("loads_other")) {
      const measured = items.reduce((s, l) => s + (l.value > 0 ? l.value : 0), 0);
      const totalToday = this._n("total_today");
      const allToday = items.every((l) => l.today != null);
      const sumToday = items.reduce((s, l) => s + (l.today || 0), 0);
      items.push({
        id: "__other",
        label: cfg.other_label || t("other"),
        icon: cfg.other_icon || "🔌",
        color: cfg.other_color || "#9aa0a8",
        value: Math.max(0, d.total - measured),
        today: totalToday != null && allToday ? Math.max(0, totalToday - sumToday) : null,
        entity: this._e("total_power"),
        is_other: true,
      });
    }
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
    const layout = cfg.loads_layout || "row";
    const perRow = Math.max(1, Number(cfg.loads_per_row) || 3);
    const rowsN = layout === "row" ? 1 : Math.ceil(items.length / perRow) || 1;
    const ROW_H = layout === "tiles" ? TILE_PITCH : 132;

    const anyPv = [d.solar, d.pv1, d.pv2, d.pv3].some((v) => v != null && v > 3);
    const nightCompact = this._show("night_compact") && this._nightLatch(!anyPv);
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
    const trunkTop = 404 - shift + (this._extraInverters().length ? 14 : 0);
    const busY = 608 - shift;
    const loadTop = 624 - shift;
    const H = layout === "row" ? loadTop + 112 : layout === "tiles" ? busY + TILE_BUS_GAP + TILE_DROP + rowsN * TILE_PITCH - (TILE_PITCH - TILE_H) + 14 : loadTop + rowsN * ROW_H - 14;

    // poradie zľava doprava: String 1 · String 2 · String 3 (pri 3 stringoch je String 2 v strede)
    const pv1x = pvTriple ? 84 : 92,
      pv2x = pvTriple ? 250 : 408,
      pv3x = 416,
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
      const total = (d.pv1 || 0) + (d.pv2 || 0) + (pvTriple ? d.pv3 || 0 : 0);
      const share = (v) => (total > 3 && v != null ? Math.round((v / total) * 100) : 0);
      lines.push(this._flowPath([{ x: pv1x, y: dropTop }, { x: pv1x, y: joinY }, join], act(d.pv1), false, solarColor, d.pv1, speed, animOn));
      const pv2Path = pvTriple ? [{ x: pv2x, y: dropTop }, join] : [{ x: pv2x, y: dropTop }, { x: pv2x, y: joinY }, join];
      lines.push(this._flowPath(pv2Path, act(d.pv2), false, solarColor, d.pv2, speed, animOn));
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
      if (pvTriple) {
        lines.push(this._flowPath([{ x: pv3x, y: dropTop }, { x: pv3x, y: joinY }, join], act(d.pv3), false, solarColor, d.pv3, speed, animOn));
        nodes.push(
          this._pvNode(
            { x: pv3x, y: panelTop },
            d.pv3,
            this._n("pv3_voltage"),
            this._n("pv3_current"),
            share(d.pv3),
            cfg.pv3_label || "String 3",
            this._pvShort(cfg.pv3_label, "3"),
            this._e("pv3_power"),
          ),
        );
      }
    } else {
      lines.push(this._flowPath([{ x: soloX, y: dropTop }, join], act(d.solar), false, solarColor, d.solar, speed, animOn));
      nodes.push(this._pvNode({ x: soloX, y: panelTop }, d.solar, null, null, null, t("solar"), t("pv_short"), this._e("solar_power")));
    }

    const today = todaySolar;
    if (today != null && pvSplit && !pvTriple && !nightCompact) nodes.push(this._pvTodayNode({ x: 250, y: panelTop }, today));

    if (pvTriple && !nightCompact) {
      if (showSum || today != null) nodes.push(this._sumPill({ x: 250, y: 158 - shift }, showSum ? d.solar : null, today));
    } else if (showSum && !nightCompact) nodes.push(this._sumNode({ x: 250, y: 158 - shift }, d.solar, pvSplit ? null : today));
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
      const pa = this._plState && this._plState.alarm;
      if (pa) {
        const col = this._plColor(pa, this._plState);
        nodes.push(`<g class="sf-pl-badge" transform="translate(${gridPos.x},${gridPos.y + 212})"><rect x="-46" y="-13" width="92" height="24" rx="12" fill="${col}" fill-opacity=".18" stroke="${col}"></rect><text y="4" text-anchor="middle" style="font-size:13px;font-weight:800" fill="${col}">⚠ ${pa.ph} ${pa.a.toFixed(1)} A</text></g>`);
      }
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

    if (layout === "rows" || layout === "tiles") {
      this._renderLoadGrid(items, { layout, perRow, ROW_H, W, invPos, branchFromY, busY, loadTop, lines, nodes, speed, animOn });
      items.length = 0;
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
    svg.querySelectorAll(".sf-box").forEach((el) => {
      const id = el.getAttribute("data-entity");
      const node = el.getAttribute("data-node");
      if (id || (node && (this._config.tap_actions || {})[node])) el.addEventListener("click", () => this._tap(node, id));
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

  _flowLine(points, active, color, value, speed, animOn) {
    const d = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");
    let out = `<path class="sf-line ${active ? "active" : ""}" d="${d}"></path>`;
    if (animOn) {
      const dur = value != null ? clamp(4.6 - Math.log10(Math.abs(value) + 1) * 1.1, 1.1, 4.6) * speed : 2.6 * speed;
      out += `<path class="sf-flow ${active ? "on fwd" : ""}" style="stroke:${color}; animation-duration:${dur.toFixed(2)}s;" d="${d}"></path>`;
    }
    return out;
  }

  _arrowAlong(points, color, value, speed, animOn, phase) {
    const d = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");
    const id = `sfp-${this._uid}-${this._pathSeq++}`;
    let out = `<path id="${id}" d="${d}" fill="none" stroke="none"></path>`;
    if (animOn) {
      const dur = (value != null ? clamp(6.4 - Math.log10(Math.abs(value) + 1) * 1.0, 2.6, 6.4) : 4.6) * speed;
      out +=
        `<g class="sf-arrow-move">` +
        `<polygon points="-7,-5.5 7,0 -7,5.5" fill="${color}" stroke="rgba(0,0,0,.35)" stroke-width="0.8"></polygon>` +
        `<animateMotion dur="${dur.toFixed(2)}s" begin="-${(phase * dur).toFixed(2)}s" repeatCount="indefinite" rotate="auto" calcMode="linear">` +
        `<mpath href="#${id}" xlink:href="#${id}"></mpath>` +
        `</animateMotion></g>`;
    } else {
      const a = points[points.length - 2], b = points[points.length - 1];
      const ang = (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI;
      out += `<polygon class="sf-arrow" points="-6,-5 6,0 -6,5" fill="${color}" transform="translate(${((a.x + b.x) / 2).toFixed(1)},${((a.y + b.y) / 2).toFixed(1)}) rotate(${ang.toFixed(1)})"></polygon>`;
    }
    return out;
  }

  _lineLabel(x, y, text, color) {
    return `<text class="sf-t-line" x="${x}" y="${y - 10}" fill="${color}">${escapeHtml(text)}</text>`;
  }

  _sumPill(pos, solar, today) {
    const color = this._color("solar");
    const todayColor = this._color("solar_today");
    const p = solar != null ? this._fmtP(solar) : "";
    const tt = today != null ? fmtEnergy(today, 1) + " " + t("today") : "";
    const w = 34 + p.length * 13.5 + (tt ? 18 + tt.length * 7.6 : 0);
    return `
      <g class="sf-box" data-node="solar" data-entity="${this._e("solar_power") || this._e("solar_today")}">
        <rect x="${(pos.x - w / 2).toFixed(1)}" y="${pos.y - 22}" width="${w.toFixed(1)}" height="32" rx="16" fill="var(--ha-card-background, var(--card-background-color, #1c1c1c))" stroke="${color}" stroke-opacity=".55" stroke-width="1.4"></rect>
        <text class="sf-t-sum" x="${pos.x}" y="${pos.y + 1}" fill="${color}" style="font-size:21px">${escapeHtml(p)}${tt ? `<tspan dx="${p ? 8 : 0}" style="font-size:${p ? 13.5 : 17}px;font-weight:700;fill:${todayColor}">${p ? "· " : ""}${escapeHtml(tt)}</tspan>` : ""}</text>
      </g>`;
  }

  _pvNode(pos, power, voltage, current, share, label, shortLabel, entityId) {
    const producing = power != null && power > 3;
    const va = [];
    if (voltage != null) va.push(voltage.toFixed(1) + " V");
    if (current != null) va.push(current.toFixed(1) + " A");
    const details = this._show("pv_details");
    const narrow = this._pv3On() && this._show("pv_split");
    const fsL = narrow ? ` style="font-size:12px"` : "";
    const vaText = details && va.length ? `<text class="sf-t-detail" x="${pos.x}" y="${pos.y + 107}"${narrow ? ` style="font-size:12.5px"` : ""}>${escapeHtml(va.join(" · "))}</text>` : "";
    const shareText = details && share != null ? ` · ${share}%` : "";
    return `
      <g class="sf-box" data-node="solar" data-entity="${entityId || ""}">
        ${this._panelArt(pos.x, pos.y, 88, 44, shortLabel, producing)}
        <text class="sf-t-value" x="${pos.x}" y="${pos.y + 72}">${escapeHtml(this._fmtP(power))}</text>
        <text class="sf-t-label" x="${pos.x}" y="${pos.y + 90}"${fsL}>${escapeHtml(label + shareText)}</text>
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
      <g class="sf-box" data-node="solar" data-entity="${this._e("solar_power")}">
        <text class="sf-t-sum" x="${pos.x}" y="${pos.y}" fill="${color}">${escapeHtml(this._fmtP(solar))}${todayText}</text>
      </g>`;
  }

  _pvCompactNode(pos, solar, today) {
    const color = this._color("solar");
    const parts = [this._fmtP(solar == null ? 0 : solar)];
    if (today != null) parts.push(fmtEnergy(today, 1) + " " + t("today"));
    const id = this._e("solar_power") || this._e("solar_today") || "";
    return `
      <g class="sf-box" data-node="solar" data-entity="${id}">
        ${this._loadArt("sun", pos.x - 104, pos.y - 5, 19, color, false)}
        <text class="sf-t-status" x="${pos.x + 12}" y="${pos.y}" fill="${color}">${escapeHtml(parts.join(" · "))}</text>
        <text class="sf-t-label" x="${pos.x}" y="${pos.y + 19}">${escapeHtml(t("no_production"))}</text>
      </g>`;
  }

  _pvTodayNode(pos, today) {
    const color = this._color("solar_today");
    return `
      <g class="sf-box" data-node="solar" data-entity="${this._e("solar_today")}">
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

    const extras = this._extraInverters();
    let multi = "";
    if (extras.length) {
      const units = [{ label: this._config.inverter_label || `${t("inv_short")}1`, p: numPower(this._hass, this._e("inverter_power")) }].concat(
        extras.map((u, i) => {
          const p = numPower(this._hass, u.inverter_power);
          return { label: u.label || `${t("inv_short")}${i + 2}`, p: p != null ? p : numPower(this._hass, u.solar_power) };
        }),
      );
      const hub = this._color("hub");
      multi =
        `<text class="sf-t-detail sf-inv-multi" x="${pos.x}" y="${pos.y + h / 2 + 58}">${escapeHtml(units.map((u) => `${u.label} ${fmtKw(u.p)}`).join(" · "))}</text>` +
        `<g class="sf-inv-badge" transform="translate(${pos.x + 50},${pos.y - h / 2 + 22})"><rect x="-17" y="-12" width="34" height="22" rx="11" fill="${hub}"></rect><text y="4" text-anchor="middle" style="font-size:13px;font-weight:800" fill="#1c1c1e">×${extras.length + 1}</text></g>`;
    }
    const comm = this._comm("inverter_comm_health", "inverter_comm_rate");
    const commDot = comm
      ? `<circle class="sf-comm-dot sf-comm-${comm.level}" cx="${pos.x + w / 2 - 7}" cy="${pos.y - h / 2 + 7}" r="${comm.level === "ok" ? 4 : 5.5}" fill="${comm.color}"><title>${escapeHtml(comm.text)}</title></circle>`
      : "";
    return `
      <g class="sf-box" data-node="inverter" data-entity="${this._e("inverter_status")}">
        ${art}
        ${commDot}
        <text class="sf-t-status" x="${pos.x}" y="${pos.y + h / 2 + 22}" fill="${ledColor}">${escapeHtml(status || t("inverter"))}</text>
        <text class="sf-t-detail" x="${pos.x}" y="${pos.y + h / 2 + 40}">${escapeHtml(sub.join(" · "))}</text>
        ${multi}
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
      <g class="sf-box" data-node="grid" data-entity="${this._e("grid_power")}">
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

  _renderLoadGrid(items, o) {
    const { layout, perRow, ROW_H, W, invPos, branchFromY, busY, loadTop, lines, nodes, speed, animOn } = o;
    const colW = W / perRow;
    const gapX = colW;
    if (layout === "tiles") {
      const bus0 = busY + TILE_BUS_GAP;
      const trunkColor = this._color("home");
      const on = (l) => l.value != null && l.value > 3;
      const sum = (arr) => arr.reduce((s, l) => s + (l.value || 0), 0);
      const tiles = items.map((l, i) => {
        const r = Math.floor(i / perRow), c = i % perRow;
        const inRow = Math.min(perRow, items.length - r * perRow);
        const offset = ((perRow - inRow) * colW) / 2;
        const tx = offset + c * colW + TILE_GAP / 2;
        const tw = colW - TILE_GAP;
        const top = bus0 + TILE_DROP + r * TILE_PITCH;
        return { l, i, r, tx, tw, top, rowBus: top - TILE_DROP, cx: tx + tw / 2, color: l.color || LOAD_PALETTE[i % LOAD_PALETTE.length] };
      });
      const rows = Math.max(...tiles.map((t) => t.r)) + 1;
      const L = (pts, list) => lines.push(this._flowLine(pts, list.some(on), trunkColor, sum(list), speed, animOn));
      L([{ x: invPos.x, y: branchFromY }, { x: invPos.x, y: bus0 }], items);
      const arrows = [];
      for (let r = 0; r < rows; r++) {
        const row = tiles.filter((t) => t.r === r);
        const below = tiles.filter((t) => t.r > r);
        const bus = row[0].rowBus;
        const tx = r === 0 ? invPos.x : gapX;
        if (r > 0) L([{ x: gapX, y: tiles.find((t) => t.r === r - 1).rowBus }, { x: gapX, y: bus }], tiles.filter((t) => t.r >= r).map((t) => t.l));
        const leftSide = row.filter((t) => t.cx < tx - 1).map((t) => t.l).concat(r === 0 && gapX < tx ? below.map((t) => t.l) : []);
        const rightSide = row.filter((t) => t.cx > tx + 1).map((t) => t.l);
        const minX = Math.min(...row.map((t) => t.cx), r === 0 && below.length ? gapX : Infinity);
        const maxX = Math.max(...row.map((t) => t.cx));
        if (minX < tx - 1) L([{ x: tx, y: bus }, { x: minX, y: bus }], leftSide);
        if (maxX > tx + 1) L([{ x: tx, y: bus }, { x: maxX, y: bus }], rightSide);
        row.forEach((t) => {
          L([{ x: t.cx, y: bus }, { x: t.cx, y: t.top - 2 }], [t.l]);
          nodes.push(this._loadTile({ x: t.tx, y: t.top, w: t.tw, h: TILE_H }, t.color, t.l));
          if (!on(t.l)) return;
          const pts = [{ x: invPos.x, y: branchFromY }, { x: invPos.x, y: bus0 }];
          if (t.r > 0) pts.push({ x: gapX, y: bus0 }, { x: gapX, y: bus });
          pts.push({ x: t.cx, y: bus }, { x: t.cx, y: t.top - 2 });
          arrows.push({ pts, t });
        });
      }
      arrows.forEach((a, k) => lines.push(this._arrowAlong(a.pts, a.t.color, a.t.l.value, speed, animOn, k / Math.max(arrows.length, 1))));
      return;
    }
    items.forEach((l, i) => {
      const r = Math.floor(i / perRow), c = i % perRow;
      const inRow = Math.min(perRow, items.length - r * perRow);
      const offset = (perRow - inRow) * colW / 2;
      const x = offset + colW * (c + 0.5);
      const rowBus = busY + r * ROW_H;
      const top = loadTop + r * ROW_H;
      const color = l.color || LOAD_PALETTE[i % LOAD_PALETTE.length];
      const pts = [{ x: invPos.x, y: branchFromY }, { x: invPos.x, y: busY }];
      if (r > 0) pts.push({ x: gapX, y: busY }, { x: gapX, y: rowBus });
      pts.push({ x, y: rowBus }, { x, y: top - 2 });
      lines.push(this._flowPath(pts, l.value != null && l.value > 3, false, color, l.value, speed, animOn));
      nodes.push(this._loadNode({ x, y: top }, color, l, 1));
    });
  }

  _loadTile(b, color, l) {
    const isOn = l.value != null && l.value > 3;
    const tone = isOn ? color : IDLE_LOAD_COLOR;
    const kind = this._loadArtKind(l);
    const cx = b.x + 30, cy = b.y + b.h / 2;
    const icon = kind ? this._loadArt(kind, cx, cy, 26, tone, isOn) : `<text class="sf-t-icon" x="${cx}" y="${cy}" style="font-size:22px">${l.icon || "⚡"}</text>`;
    const avail = b.w - 58 - 8;
    const labelFs = Math.min(12, avail / Math.max(1, String(l.label || "").length * 0.72));
    const acc = l.acc && l.acc.length ? l.acc : null;
    const today = acc
      ? `<text class="sf-sh-text" x="${b.x + 58}" y="${(b.y + b.h - 11).toFixed(1)}" style="text-anchor:start;font-size:10.5px;font-weight:700" fill="#f5a623">${escapeHtml(this._shText(acc))}</text>${this._shBadge(b.x + b.w - 15, b.y + 15)}`
      : l.today != null
        ? `<text class="sf-t-detail" x="${b.x + 58}" y="${(b.y + b.h - 11).toFixed(1)}" style="text-anchor:start;font-size:11px">${escapeHtml(fmtEnergy(l.today, 1))} ${t("today")}</text>`
        : "";
    return `
      <g class="sf-box${!isOn && !acc && this._show("dim_idle_loads") ? " sf-load-idle" : ""}" data-node="loads" data-entity="${l.entity || ""}">
        <rect x="${b.x}" y="${b.y}" width="${b.w}" height="${b.h}" rx="14" fill="${tone}" opacity="${isOn ? 0.14 : 0.06}"></rect>
        <rect x="${b.x}" y="${b.y}" width="${b.w}" height="${b.h}" rx="14" fill="none" stroke="${tone}" stroke-width="1.4" opacity="${isOn ? 0.6 : 0.3}"></rect>
        <circle cx="${cx}" cy="${cy}" r="20" fill="${tone}" opacity="${isOn ? 0.18 : 0.1}"></circle>
        ${icon}
        <text class="sf-t-label" x="${b.x + 58}" y="${(b.y + 20).toFixed(1)}" style="text-anchor:start;font-size:${labelFs.toFixed(1)}px">${escapeHtml(l.label)}</text>
        <text class="sf-t-value" x="${b.x + 58}" y="${(b.y + 43).toFixed(1)}" style="text-anchor:start;font-size:20px">${escapeHtml(this._fmtP(l.value))}</text>
        ${today}
      </g>`;
  }

  _loadNode(pos, color, l, scale) {
    const sc = scale || 1;
    const r = 22 * sc;
    const cy = pos.y + r;
    const vy = cy + r + 22 * sc;
    const ly = vy + 19 * sc;
    const ty = ly + 17 * sc;
    const acc = l.acc && l.acc.length ? l.acc : null;
    const today = acc
      ? `<text class="sf-sh-text" x="${pos.x}" y="${ty.toFixed(1)}" style="font-size:${(12 * sc).toFixed(1)}px;font-weight:700;text-anchor:middle" fill="#f5a623">${escapeHtml(this._shText(acc))}</text>${this._shBadge(pos.x + r * 0.85, cy - r * 0.85)}`
      : l.today != null
        ? `<text class="sf-t-detail" x="${pos.x}" y="${ty.toFixed(1)}">${escapeHtml(fmtEnergy(l.today, 1))} ${t("today")}</text>`
        : "";
    const isOn = l.value != null && l.value > 3;
    const idle = !l.is_home && !acc && this._show("dim_idle_loads") && !isOn;
    const tone = isOn || l.is_home ? color : IDLE_LOAD_COLOR;
    const kind = this._loadArtKind(l);
    const iconSvg = kind
      ? this._loadArt(kind, pos.x, cy, 30 * sc, tone, isOn)
      : `<text class="sf-t-icon" x="${pos.x}" y="${cy.toFixed(1)}" style="font-size:${(23 * sc).toFixed(1)}px">${l.icon || "⚡"}</text>`;
    return `
      <g class="sf-box${idle ? " sf-load-idle" : ""}" data-node="${l.is_home ? "home" : "loads"}" data-entity="${l.entity || ""}">
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
      <g class="sf-box sf-home" data-node="home" data-entity="${item.entity || ""}">
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
    const extra = this._extraBatteries();
    const unitSoc = extra.length
      ? this._battUnits()
          .map((u) => {
            const v = num(this._hass, u.battery_soc);
            return `${u.label} ${v == null ? "--" : Math.round(v) + "%"}`;
          })
          .join(" · ")
      : "";

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
    if (unitSoc) {
      y += 19;
      rows += `<text class="sf-t-detail" x="${pos.x}" y="${y}">${escapeHtml(unitSoc)}</text>`;
    }
    const badge = extra.length
      ? `<g class="sf-batt-count"><rect x="${(bx + bw - 8).toFixed(1)}" y="${(by - 12).toFixed(1)}" width="26" height="18" rx="9" fill="${socColor}"></rect>` +
        `<text x="${(bx + bw + 5).toFixed(1)}" y="${(by + 1.5).toFixed(1)}" text-anchor="middle" style="font-size:11.5px;font-weight:700" fill="#11161c">×${extra.length + 1}</text></g>`
      : "";

    return `
      <g class="sf-box sf-batt-graphic" data-node="battery" data-entity="${this._e("battery_power")}">
        <rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="9" fill="none" stroke="${socColor}" stroke-width="2.5"></rect>
        <rect x="${pos.x - 9}" y="${by - 6}" width="18" height="6" rx="2" fill="${socColor}"></rect>
        ${this._battSegments(bx, by, bw, innerH, socClamped, socColor, discharging)}
        ${markers}
        ${arrow}
        ${badge}
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
    const capacity = this._battCapacityKwh();
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

  _renderWallboxPanel(prefix) {
    const wrap = this.querySelector(`.sf-wallbox-panel[data-wb="${prefix}"]`);
    if (!wrap) return;
    if (prefix && !this._wallbox2On()) {
      wrap.className = "sf-wallbox-panel sf-panel hidden";
      return;
    }
    this._wbPrefix = prefix;
    try {
      this._renderWallboxPanelInner(wrap, prefix);
    } finally {
      this._wbPrefix = "";
    }
  }

  _renderWallboxPanelInner(wrap, prefix) {
    const show = this._show("wallbox_panel") && !!this._e("wallbox_power");
    wrap.className = "sf-wallbox-panel sf-panel" + (show ? "" : " hidden");
    if (!show) return;
    const wbTitle = (prefix ? this._config.wallbox2_label : this._config.wallbox_label) || (prefix ? "Wallbox 2" : "Wallbox");
    const sk = (k) => k + (prefix ? "-2" : "");

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
    const max = (prefix ? this._config.wallbox2_max_power : this._config.wallbox_max_power) || 11000;
    const pct = power == null ? 0 : clamp((power / max) * 100, 0, 100);
    const notCharging = WB_NOT_CHARGING.test(statusRaw || "");
    const charging = (power != null && power > 50) || (!notCharging && /charg/i.test(statusRaw || ""));
    const wbColor = this._color("wallbox");
    const ledColor = charging ? "#4caf7d" : /fault|error/i.test(statusRaw || "") ? "#e0577a" : "#5b8def";
    const pColor = powerColor(pct);

    if (!this._wbBuilt[prefix]) {
      const img = prefix ? this._config.wallbox2_image : this._config.wallbox_image;
      const art = img
        ? `<img class="sf-wb-art" src="${escapeHtml(img)}" alt="wallbox">`
        : `<svg class="sf-wb-art" viewBox="0 0 66 98">${this._defs()}${this._wallboxArt(66, 98, ledColor, charging, power)}</svg>`;
      wrap.innerHTML = `
        <div class="sf-wb-top">
          ${art}
          <div class="sf-wb-info">
            <div class="sf-wb-title"><span class="sf-comm-led" hidden></span>${escapeHtml(wbTitle)}</div>
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

      this._wbBuilt[prefix] = true;
      this._wbChipsKey[prefix] = null;
    }

    const set = (sel, text) => {
      const el = wrap.querySelector(sel);
      if (el && el.textContent !== text) el.textContent = text;
    };
    const setHtml = (sel, html) => {
      const el = wrap.querySelector(sel);
      // compare with the last string we wrote, not with el.innerHTML: the browser serializes SVG
      // differently (<path/> -> <path></path>), so that check never matched and the row was rebuilt
      // on every update. On iPhone (WebKit) each rebuild pulled the page up when scrolled to the bottom.
      if (el && el._sfHtml !== html) { el.innerHTML = html; el._sfHtml = html; }
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
    // the bar keeps its place when the car is not charging (empty and dimmed), so the panel
    // does not change height when charging starts or stops; hidden only without a power entity
    const idle = power == null || power <= 0;
    const barWrap = wrap.querySelector(".sf-bar-wrap");
    const barTicks = wrap.querySelector(".sf-bar-ticks");
    if (barWrap) { barWrap.classList.toggle("hidden", power == null); barWrap.classList.toggle("is-idle", idle); }
    if (barTicks) { barTicks.classList.toggle("hidden", power == null); barTicks.classList.toggle("is-idle", idle); }

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
      const stopped = this._isStopped(stopId, charging);
      const key = ordered.join("|") + "#" + st.state + "#" + stopId + "#" + stopped;
      if (key !== this._wbChipsKey[prefix]) {
        const chips = wrap.querySelector(".sf-chips");
        let html = ordered
          .map((o) => {
            const c = WB_MODE_COLORS[o] || wbColor;
            const on = o === st.state;
            const style = on ? `background:${c}; border-color:${c}; color:#fff;` : `border-color:${c}; color:${c};`;
            return `<button class="sf-chip ${on ? "active" : ""}" style="${style}" data-mode="${escapeHtml(o)}">${escapeHtml(this._tr(o, "wallbox"))}</button>`;
          })
          .join("");
        if (stopId && stopped) {
          html += `<button class="sf-chip sf-chip-start" style="border-color:${WB_START_COLOR}; color:${WB_START_COLOR}; border-width:2px;" data-start="${escapeHtml(stopId)}">▶ ${escapeHtml(t("start"))}</button>`;
        } else if (stopId) {
          html += `<button class="sf-chip sf-chip-stop" style="border-color:${WB_STOP_COLOR}; color:${WB_STOP_COLOR};" data-stop="${escapeHtml(stopId)}">⏹ ${escapeHtml(t("stop"))}</button>`;
        }
        chips.innerHTML = html;
        chips.querySelectorAll(".sf-chip[data-mode]").forEach((btn) => {
          btn.onclick = () => {
            const done = Promise.resolve(this._hass.callService("select", "select_option", { entity_id: modeEntity, option: btn.dataset.mode }));
            if (stopped) done.then(() => this._startCharging(stopId)).catch(() => {});
          };
        });
        const stopBtn = chips.querySelector(".sf-chip-stop");
        if (stopBtn) stopBtn.onclick = () => this._stopCharging(stopBtn.dataset.stop);
        const startBtn = chips.querySelector(".sf-chip-start");
        if (startBtn) startBtn.onclick = () => this._startCharging(startBtn.dataset.start);
        this._wbChipsKey[prefix] = key;
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
      if (!wrap.querySelector(`.sf-set-row[data-key="${sk("carlimit")}"]`)) {
        wrap.querySelector(".sf-wb-fold .sf-fold-body").appendChild(this._sliderRow(sk("carlimit"), t("car_limit"), carLimitId, "#4caf7d", " %"));
      }
      this._updateSliderRow(sk("carlimit"), carLimitId, " %");
      if (foldEl) foldEl.classList.remove("hidden");
    }

    if (hasCurrent) {
      if (!wrap.querySelector(`.sf-set-row[data-key="${sk("wbcurrent")}"]`)) {
        wrap.querySelector(".sf-wb-fold .sf-fold-body").appendChild(this._sliderRow(sk("wbcurrent"), t("charge_current"), currentEntity, wbColor, " A"));
      }
      this._updateSliderRow(sk("wbcurrent"), currentEntity, " A");
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
    const html = items
      .map(
        (it) =>
          `<div class="sf-stat"><div class="sf-stat-label">${it.icon} ${escapeHtml(it.label)}</div><div class="sf-stat-value">${fmtEnergy(this._n(it.key), 1)}</div></div>`,
      )
      .join("");
    if (wrap._sfHtml !== html) { wrap.innerHTML = html; wrap._sfHtml = html; }
  }
}

const ENTITY_FIELDS = [
  { key: "pv1_power", domains: ["sensor"], group: "solar" },
  { key: "pv1_voltage", domains: ["sensor"], group: "solar" },
  { key: "pv1_current", domains: ["sensor"], group: "solar" },
  { key: "pv2_power", domains: ["sensor"], group: "solar" },
  { key: "pv2_voltage", domains: ["sensor"], group: "solar" },
  { key: "pv2_current", domains: ["sensor"], group: "solar" },
  { key: "pv3_power", domains: ["sensor"], group: "solar" },
  { key: "pv3_voltage", domains: ["sensor"], group: "solar" },
  { key: "pv3_current", domains: ["sensor"], group: "solar" },
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
  { key: "forecast_today", domains: ["sensor"], group: "forecast" },
  { key: "forecast_remaining", domains: ["sensor"], group: "forecast" },
  { key: "forecast_tomorrow", domains: ["sensor"], group: "forecast" },
  { key: "forecast_power_now", domains: ["sensor"], group: "forecast" },
];

const WB_KEYS = new Set(ENTITY_FIELDS.filter((f) => f.group === "wallbox").map((f) => f.key));

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
  { key: "loads_other" },
  { key: "tariff" },
  { key: "diagnostics" },
  { key: "phase_details" },
  { key: "energy_today" },
  { key: "translate_sk" },
  { key: "animation" },
  { key: "forecast" },
  { key: "self_sufficiency" },
  { key: "day_chart" },
  { key: "phase_load" },
  { key: "stale_warning" },
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

  _section(title, iconEmoji, open, color, hint) {
    const details = document.createElement("details");
    details.className = "sf-ed-section";
    details.style.setProperty("--sec", color || "#7c8796");
    if (open) details.open = true;
    const summary = document.createElement("summary");
    summary.className = "sf-ed-summary";
    summary.innerHTML =
      `<span class="sf-ed-badge">${escapeHtml(iconEmoji)}</span>` +
      `<span class="sf-ed-title">${escapeHtml(title)}</span>` +
      (hint ? `<span class="sf-ed-hint">${escapeHtml(hint)}</span>` : "") +
      `<span class="sf-ed-chev" aria-hidden="true"></span>`;
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

  _boolRow(body, labelText, path, def, rerender) {
    const row = document.createElement("div");
    row.className = "sf-ed-row sf-ed-row--toggle";
    row.innerHTML = `<div class="sf-ed-label">${escapeHtml(labelText)}</div>`;
    const sw = document.createElement("div");
    sw.className = "sf-ed-switch" + (this._get(path, def) ? " on" : "");
    sw.innerHTML = `<div class="knob"></div>`;
    sw.onclick = () => {
      const nowOn = !sw.classList.contains("on");
      sw.classList.toggle("on", nowOn);
      this._set(path, nowOn);
      if (rerender) this._rerender();
    };
    row.appendChild(sw);
    body.appendChild(row);
  }

  _batteriesEditor(body) {
    this._textRow(body, t("ed_battery1_label"), "battery_label", "1");
    const head = document.createElement("div");
    head.className = "sf-ed-subhead";
    head.textContent = t("ed_batteries_extra");
    body.appendChild(head);
    const info = document.createElement("div");
    info.className = "sf-ed-row";
    info.innerHTML = `<div class="sf-ed-label" style="flex:1 1 100%; font-size:0.78rem; opacity:.75;">${escapeHtml(t("ed_batteries_info"))}</div>`;
    body.appendChild(info);
    if (!Array.isArray(this._config.batteries)) this._config.batteries = [];
    const list = document.createElement("div");
    list.className = "sf-ed-loads-list";
    this._config.batteries.forEach((b, i) => {
      const card = document.createElement("div");
      card.className = "sf-ed-load-card";
      card.style.setProperty("--lc", "#4caf7d");
      const h = document.createElement("div");
      h.className = "sf-ed-load-head";
      const name = document.createElement("input");
      name.type = "text";
      name.className = "sf-ed-text";
      name.placeholder = t("ed_batt_label");
      name.value = b.label || "";
      name.oninput = () => {
        this._config.batteries[i].label = name.value;
        this._emit();
      };
      h.appendChild(name);
      const cap = document.createElement("input");
      cap.type = "number";
      cap.step = "0.1";
      cap.className = "sf-ed-text sf-ed-text--num";
      cap.placeholder = "kWh";
      cap.title = t("ed_batt_capacity");
      cap.value = b.capacity_kwh || "";
      cap.oninput = () => {
        this._config.batteries[i].capacity_kwh = cap.value === "" ? undefined : Number(cap.value);
        this._emit();
      };
      h.appendChild(cap);
      const rm = document.createElement("button");
      rm.className = "sf-ed-icon-btn";
      rm.textContent = "✕";
      rm.onclick = () => {
        this._config.batteries.splice(i, 1);
        this._emit();
        this._rerender();
      };
      h.appendChild(rm);
      card.appendChild(h);
      BATT_UNIT_KEYS.forEach((k) => {
        this._entityPickerRow(card, t("ent." + k), b[k] || "", ["sensor"], (v) => {
          this._config.batteries[i][k] = v;
          this._emit();
        });
      });
      list.appendChild(card);
    });
    body.appendChild(list);
    const add = document.createElement("button");
    add.className = "sf-ed-add-btn";
    add.textContent = t("ed_add_battery");
    add.onclick = () => {
      this._config.batteries.push({ label: String(this._config.batteries.length + 2) });
      this._emit();
      this._rerender();
    };
    body.appendChild(add);
  }

  // ---- 1.1.0 editor -------------------------------------------------------------
  _note(body, text, color) {
    const n = document.createElement("div");
    n.className = "sf-ed-note";
    if (color) n.style.setProperty("--nc", color);
    n.textContent = text;
    body.appendChild(n);
    return n;
  }

  _brandEditor(wrap) {
    this._selectRow(wrap, t("ed_brand"), "brand", "solax", BRANDS);
    this._note(wrap, t("ed_brand_info"), "#7c8796");
    const btn = document.createElement("button");
    btn.className = "sf-ed-add-btn sf-ed-scan";
    btn.textContent = t("ed_brand_scan");
    const msg = document.createElement("div");
    msg.className = "sf-ed-scan-msg";
    btn.onclick = () => {
      const n = this._scanBrand();
      msg.textContent = t("ed_brand_found").replace("{n}", n);
    };
    wrap.appendChild(btn);
    wrap.appendChild(msg);
  }

  /** Fills empty entity fields for the chosen brand (+ forecast). Returns the number of filled fields. */
  _scanBrand() {
    const hass = this._hass;
    if (!hass) return 0;
    const brand = this._config.brand || "solax";
    const found = Object.assign({}, brand === "solax" ? SolaxFveCard._solaxStub(hass).entities : brandEntities(hass, brand), forecastEntities(hass));
    LANG = resolveLang(hass, this._config);
    this._config.entities = Object.assign({}, this._config.entities || {});
    let n = 0;
    Object.entries(found).forEach(([k, id]) => {
      if (id && !this._config.entities[k]) {
        this._config.entities[k] = id;
        n++;
      }
    });
    const opts = (BRAND_PRESETS[brand] && BRAND_PRESETS[brand].options) || {};
    Object.entries(opts).forEach(([k, v]) => {
      if (this._config[k] === undefined) this._config[k] = v;
    });
    this._emit();
    this._rerender();
    return n;
  }

  _invertersEditor(body) {
    this._textRow(body, t("ed_inverter_label"), "inverter_label", `${t("inv_short")}1`);
    const head = document.createElement("div");
    head.className = "sf-ed-subhead";
    head.textContent = t("ed_inverters_extra");
    body.appendChild(head);
    this._note(body, t("ed_inverters_info"));
    if (!Array.isArray(this._config.inverters)) this._config.inverters = [];
    const list = document.createElement("div");
    list.className = "sf-ed-loads-list";
    this._config.inverters.forEach((u, i) => {
      const card = document.createElement("div");
      card.className = "sf-ed-load-card";
      card.style.setProperty("--lc", "#d9b43a");
      const h = document.createElement("div");
      h.className = "sf-ed-load-head";
      const name = document.createElement("input");
      name.type = "text";
      name.className = "sf-ed-text";
      name.placeholder = t("ed_inv_label");
      name.value = u.label || "";
      name.oninput = () => {
        this._config.inverters[i].label = name.value;
        this._emit();
      };
      h.appendChild(name);
      const rm = document.createElement("button");
      rm.className = "sf-ed-icon-btn";
      rm.textContent = "✕";
      rm.onclick = () => {
        this._config.inverters.splice(i, 1);
        this._emit();
        this._rerender();
      };
      h.appendChild(rm);
      card.appendChild(h);
      [
        ["inverter_power", "ed_inv_power"],
        ["solar_power", "ed_inv_solar"],
        ["solar_today", "ed_inv_today"],
      ].forEach(([k, lab]) => {
        this._entityPickerRow(card, t(lab), u[k] || "", ["sensor"], (v) => {
          this._config.inverters[i][k] = v;
          this._emit();
        });
      });
      list.appendChild(card);
    });
    body.appendChild(list);
    const add = document.createElement("button");
    add.className = "sf-ed-add-btn";
    add.textContent = t("ed_add_inverter");
    add.onclick = () => {
      this._config.inverters.push({ label: `${t("inv_short")}${this._config.inverters.length + 2}` });
      this._emit();
      this._rerender();
    };
    body.appendChild(add);
  }

  _tapEditor(wrap) {
    const sec = this._section(t("ed_taps"), "👆", false, "#9b7be0");
    this._note(sec.body, t("ed_taps_info"), "#9b7be0");
    const holders = { navigate: "/energy", url: "https://…", "perform-action": "script.my_script", toggle: "switch.xyz", "more-info": "sensor.xyz" };
    const field = { navigate: "navigation_path", url: "url_path", "perform-action": "perform_action", toggle: "entity", "more-info": "entity" };
    TAP_NODES.forEach((node) => {
      const cur = (this._config.tap_actions || {})[node] || {};
      const row = document.createElement("div");
      row.className = "sf-ed-row sf-ed-tap";
      row.innerHTML = `<div class="sf-ed-label">${escapeHtml(t("tap_" + node))}</div>`;
      const sel = document.createElement("select");
      sel.className = "sf-ed-select";
      [["", t("act_default")], ["navigate", t("act_navigate")], ["url", t("act_url")], ["perform-action", t("act_action")], ["toggle", t("act_toggle")], ["none", t("act_none")]].forEach(([v, txt]) => {
        const o = document.createElement("option");
        o.value = v;
        o.textContent = txt;
        if ((cur.action === "more-info" ? "" : cur.action || "") === v) o.selected = true;
        sel.appendChild(o);
      });
      const input = document.createElement("input");
      input.type = "text";
      input.className = "sf-ed-text";
      const sync = () => {
        const a = sel.value;
        input.style.display = a && a !== "none" ? "" : "none";
        input.placeholder = holders[a] || "";
        input.value = (a && cur[field[a]]) || "";
      };
      const save = () => {
        const a = sel.value;
        const map = Object.assign({}, this._config.tap_actions || {});
        if (!a) delete map[node];
        else {
          const v = { action: a };
          if (field[a] && input.value.trim()) v[field[a]] = input.value.trim();
          map[node] = v;
        }
        this._config.tap_actions = map;
        Object.assign(cur, map[node] || { action: "" });
        this._emit();
      };
      sel.onchange = () => {
        sync();
        save();
      };
      input.oninput = save;
      sync();
      const box = document.createElement("div");
      box.className = "sf-ed-tap-ctl";
      box.appendChild(sel);
      box.appendChild(input);
      row.appendChild(box);
      sec.body.appendChild(row);
    });
    wrap.appendChild(sec.details);
  }

  _sectionsEditor(wrap) {
    const sec = this._section(t("ed_sections"), "🗂️", false, "#2e9e6b");
    this._note(sec.body, t("ed_sections_info"), "#2e9e6b");
    const names = {
      diagram: t("diag_toggle"),
      forecast: t("sec_forecast"),
      phase_load: t("sec_phase_load"),
      wallbox: this._config.wallbox_label || t("sec_wallbox"),
      wallbox2: this._config.wallbox2_label || "Wallbox 2",
      battery_settings: t("battery_settings"),
      phase_details: t("phase_details"),
      today: t("sec_today"),
      chart: t("sec_chart"),
    };
    SECTION_KEYS.forEach((key) => {
      if (key === "wallbox2" && !this._config.wallbox2) return;
      const row = document.createElement("div");
      row.className = "sf-ed-row sf-ed-row--toggle";
      row.innerHTML = `<div class="sf-ed-label">${escapeHtml(names[key])} <span class="sf-ed-dim">· ${escapeHtml(t("ed_collapsed"))}</span></div>`;
      const sw = document.createElement("div");
      const cur = (this._config.collapsed || {})[key];
      const on = cur !== undefined ? !!cur : !!DEFAULT_COLLAPSED[key];
      sw.className = "sf-ed-switch" + (on ? " on" : "");
      sw.innerHTML = `<div class="knob"></div>`;
      sw.onclick = () => {
        const nowOn = !sw.classList.contains("on");
        sw.classList.toggle("on", nowOn);
        this._set(`collapsed.${key}`, nowOn);
      };
      row.appendChild(sw);
      sec.body.appendChild(row);
    });
    wrap.appendChild(sec.details);
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
    card.style.setProperty("--lc", load.color || LOAD_PALETTE[index % LOAD_PALETTE.length]);

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
      card.style.setProperty("--lc", colorInput.value);
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

    const shRow = document.createElement("div");
    shRow.className = "sf-ed-row";
    shRow.innerHTML = `<div class="sf-ed-label">${escapeHtml(t("ed_sh"))}</div>`;
    const shInput = document.createElement("input");
    shInput.type = "text";
    shInput.className = "sf-ed-text sf-ed-text--wide";
    shInput.placeholder = "sensor.smart_heating_obyvacka_stav";
    shInput.value = load.smart_heating || "";
    shInput.oninput = () => {
      this._config.loads[index].smart_heating = shInput.value;
      this._emit();
    };
    shRow.appendChild(shInput);
    card.appendChild(shRow);
    this._note(card, load.smart_heating ? t("ed_sh_info") : t("ed_sh_short"), "#e0a020");

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
    this._brandEditor(wrap);

    const linksSec = this._section(t("ed_links"), "🔗", false, "#5b8def", t("ed_n_links").replace("{n}", (Array.isArray(this._config.links) ? this._config.links : defaultLinks()).length));
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

    const solarSec = this._section(t("ed_solar"), "☀️", true, "#f5a623");
    this._textRow(solarSec.body, t("ed_pv1_label"), "pv1_label", "String 1");
    this._textRow(solarSec.body, t("ed_pv2_label"), "pv2_label", "String 2");
    this._textRow(solarSec.body, t("ed_pv3_label"), "pv3_label", "String 3");
    ENTITY_FIELDS.filter((f) => f.group === "solar").forEach((f) => this._entityFieldRow(solarSec.body, f));
    wrap.appendChild(solarSec.details);

    const fcSec = this._section(t("ed_forecast"), "🌤️", false, "#f5a623");
    ENTITY_FIELDS.filter((f) => f.group === "forecast").forEach((f) => this._entityFieldRow(fcSec.body, f));
    this._note(fcSec.body, t("ed_forecast_info"));
    wrap.appendChild(fcSec.details);

    const invSec = this._section(t("ed_inverter"), "🔆", false, "#d9b43a");
    this._textRow(invSec.body, t("ed_inverter_image"), "inverter_image", "", "sf-ed-text--wide");
    this._textRow(invSec.body, t("ed_inverter_power_label"), "inverter_power_label", t("output"));
    ENTITY_FIELDS.filter((f) => f.group === "inverter").forEach((f) => this._entityFieldRow(invSec.body, f));
    this._invertersEditor(invSec.body);
    wrap.appendChild(invSec.details);

    const battSec = this._section(t("ed_battery"), "🔋", false, "#4caf7d", (this._config.batteries || []).length ? t("ed_n_batteries").replace("{n}", (this._config.batteries || []).length + 1) : "");
    ENTITY_FIELDS.filter((f) => f.group === "battery").forEach((f) => this._entityFieldRow(battSec.body, f));
    this._signRow(battSec.body, t("ed_invert_battery"), "invert_battery");
    this._numRow(battSec.body, t("ed_battery_capacity"), "battery_capacity_kwh", null, "0.1");
    this._numRow(battSec.body, t("ed_runtime_target"), "battery_runtime_target", null, "1");
    this._numRow(battSec.body, t("ed_battery_segments"), "battery_segments", 3, "1");
    this._batteriesEditor(battSec.body);
    wrap.appendChild(battSec.details);

    const gridSec = this._section(t("ed_grid"), "🔌", false, "#e0577a");
    ENTITY_FIELDS.filter((f) => f.group === "grid").forEach((f) => this._entityFieldRow(gridSec.body, f));
    this._signRow(gridSec.body, t("ed_invert_grid"), "invert_grid");
    this._numRow(gridSec.body, t("ed_phase_limit"), "phase_limit_a", 25, "1");
    this._numRow(gridSec.body, t("ed_phase_warn"), "phase_warn_pct", 80, "5");
    wrap.appendChild(gridSec.details);

    const loadsSec = this._section(t("ed_loads"), "🧩", true, "#4ba3c7", t("ed_n_loads").replace("{n}", (this._config.loads || []).length));
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
    this._selectRow(loadsSec.body, t("ed_loads_layout"), "loads_layout", "row", [
      ["row", t("ed_layout_row")],
      ["rows", t("ed_layout_rows")],
      ["tiles", t("ed_layout_tiles")],
    ]);
    this._numRow(loadsSec.body, t("ed_loads_per_row"), "loads_per_row", 3, "1");
    this._textRow(loadsSec.body, t("ed_other_label"), "other_label", t("other"));

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

    const wbSec = this._section(t("ed_wallbox"), "🚗", false, "#8e6ecb");
    this._textRow(wbSec.body, t("ed_wallbox_image"), "wallbox_image", "", "sf-ed-text--wide");
    ENTITY_FIELDS.filter((f) => f.group === "wallbox").forEach((f) => this._entityFieldRow(wbSec.body, f));
    this._numRow(wbSec.body, t("ed_wallbox_max"), "wallbox_max_power", 11000, "500");
    this._textRow(wbSec.body, t("ed_wallbox_label"), "wallbox_label", "Wallbox");
    this._boolRow(wbSec.body, t("ed_wallbox2_on"), "wallbox2", false, true);
    wrap.appendChild(wbSec.details);

    if (this._config.wallbox2) {
      const wb2 = this._section(t("ed_wallbox2"), "🚙", true, "#b07ce0");
      this._textRow(wb2.body, t("ed_wallbox_label"), "wallbox2_label", "Wallbox 2");
      this._textRow(wb2.body, t("ed_wallbox_image"), "wallbox2_image", "", "sf-ed-text--wide");
      ENTITY_FIELDS.filter((f) => f.group === "wallbox").forEach((f) => {
        const key = WB2_PREFIX + f.key;
        const picker = this._entityPickerRow(wb2.body, t("ent." + f.key), this._get(`entities.${key}`, ""), f.domains, (v) => this._set(`entities.${key}`, v));
        this._pickers.push({ el: picker, key: `entities.${key}` });
      });
      this._numRow(wb2.body, t("ed_wallbox_max"), "wallbox2_max_power", 11000, "500");
      wrap.appendChild(wb2.details);
    }

    this._tapEditor(wrap);
    this._sectionsEditor(wrap);

    const showSec = this._section(t("ed_display"), "👁️", false, "#7c8796");
    SHOW_FIELDS.forEach((f) => this._toggleRow(showSec.body, f));
    this._numRow(showSec.body, t("ed_stale_min"), "stale_minutes", STALE_DEFAULT_MIN, "1");

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

    const colorSec = this._section(t("ed_colors"), "🎨", false, "#c76b9e");
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
      .sf-ed-note { --nc: #e0a020; border-left: 3px solid var(--nc); background: color-mix(in srgb, var(--nc) 9%, transparent); padding: 8px 10px; border-radius: 6px; font-size: .78rem; line-height: 1.4; opacity: .9; }
      .sf-ed-scan-msg { font-size: .78rem; opacity: .75; min-height: 1em; }
      .sf-ed-dim { opacity: .6; font-size: .8em; }
      .sf-ed-tap-ctl { display: flex; gap: 6px; flex: 1 1 60%; justify-content: flex-end; flex-wrap: wrap; }
      .sf-ed-tap-ctl .sf-ed-text { flex: 1 1 140px; min-width: 0; }
      .sf-ed-section { --sec: #7c8796; border-radius: 12px; border: 1px solid color-mix(in srgb, var(--sec) 35%, transparent);
        border-left: 5px solid var(--sec); background: color-mix(in srgb, var(--sec) 7%, transparent); overflow: hidden; }
      .sf-ed-section[open] { background: color-mix(in srgb, var(--sec) 10%, transparent); }
      .sf-ed-summary { cursor: pointer; padding: 10px 12px; font-weight: 600; font-size: 0.92rem; list-style: none; user-select: none;
        display: flex; align-items: center; gap: 10px; }
      .sf-ed-summary::-webkit-details-marker { display: none; }
      .sf-ed-summary:hover { background: color-mix(in srgb, var(--sec) 12%, transparent); }
      .sf-ed-badge { width: 28px; height: 28px; border-radius: 8px; display: grid; place-items: center; font-size: 15px; flex-shrink: 0;
        background: color-mix(in srgb, var(--sec) 22%, transparent); }
      .sf-ed-title { flex: 1; }
      .sf-ed-hint { font-size: 0.78rem; font-weight: 500; opacity: .65; }
      .sf-ed-chev { width: 26px; height: 26px; border-radius: 50%; display: grid; place-items: center; flex-shrink: 0;
        background: color-mix(in srgb, var(--sec) 18%, transparent); }
      .sf-ed-chev::before { content: ""; width: 7px; height: 7px; border-right: 2px solid var(--sec); border-bottom: 2px solid var(--sec);
        transform: rotate(-45deg); transition: transform .2s ease; margin-left: -2px; }
      .sf-ed-section[open] > .sf-ed-summary .sf-ed-chev::before { transform: rotate(45deg); margin: -3px 0 0 0; }
      .sf-ed-section[open] > .sf-ed-summary { border-bottom: 1px solid color-mix(in srgb, var(--sec) 30%, transparent); }
      .sf-ed-body { display: flex; flex-direction: column; gap: 10px; padding: 12px 12px 14px; }
      .sf-ed-root > .sf-ed-row { padding: 0 2px; }
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
      .sf-ed-load-card { --lc: #7c8796; border: 1px solid color-mix(in srgb, var(--lc) 40%, var(--divider-color)); border-left: 4px solid var(--lc);
        border-radius: 10px; padding: 10px; display: flex; flex-direction: column; gap: 8px; background: color-mix(in srgb, var(--lc) 6%, var(--card-background-color)); }
      .sf-ed-link-card { --lc: #5b8def; }
      .sf-ed-subhead { font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: .05em; opacity: .75;
        margin-top: 6px; padding-top: 10px; border-top: 1px dashed var(--divider-color); }
      .sf-ed-load-head { display: flex; gap: 6px; align-items: center; }
      .sf-ed-load-head .sf-ed-text { flex: 1; min-width: 0; }
      .sf-ed-load-head .sf-ed-text--icon { flex: 0 0 46px; }
      .sf-ed-text, .sf-ed-select { box-sizing: border-box; max-width: 100%; }
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
  `%c FVE-CARD %c v${CARD_VERSION} `,
  "color:#fff;background:#f5a623;font-weight:700;border-radius:3px 0 0 3px;padding:2px 4px",
  "color:#f5a623;background:#222;border-radius:0 3px 3px 0;padding:2px 4px",
);

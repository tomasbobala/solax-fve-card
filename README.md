<div align="center">

<img src="https://raw.githubusercontent.com/tomasbobala/solax-fve-card/main/docs/images/icon.png" alt="SolaX FVE Card" width="128">

# SolaX FVE Card

**Animated energy‑flow card for Home Assistant and SolaX inverters**

PV strings · inverter · battery with SOC control · grid & tariff · loads · wallbox & EV

[![HACS Custom](https://img.shields.io/badge/HACS-Custom-41BDF5?style=for-the-badge&logo=homeassistantcommunitystore&logoColor=white)](https://hacs.xyz)
[![GitHub release](https://img.shields.io/github/v/release/tomasbobala/solax-fve-card?style=for-the-badge&color=f5a623)](https://github.com/tomasbobala/solax-fve-card/releases)
[![License: MIT](https://img.shields.io/github/license/tomasbobala/solax-fve-card?style=for-the-badge&color=4caf7d)](LICENSE)
[![Validate](https://img.shields.io/github/actions/workflow/status/tomasbobala/solax-fve-card/validate.yml?style=for-the-badge&label=validate)](https://github.com/tomasbobala/solax-fve-card/actions)

**English** · [Slovensky](README.sk.md)

[![Open your Home Assistant instance and open this repository inside HACS.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=tomasbobala&repository=solax-fve-card&category=plugin)

<img src="https://raw.githubusercontent.com/tomasbobala/solax-fve-card/main/docs/images/hero.png" alt="SolaX FVE Card – day and night" width="860">

</div>

---

## Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Quick start](#quick-start)
- [Configuration](#configuration)
- [Examples](#examples)
- [Screenshots](#screenshots)
- [Troubleshooting](#troubleshooting)
- [Development](#development)
- [License](#license)

## Features

| | |
|---|---|
| 🌞 **Solar** | Two PV strings with power, voltage, current and share, their sum and the energy produced today. At night the strings collapse into a single compact row. |
| 🔆 **Inverter** | Built‑in drawn inverter (or your own photo), run mode, AC output, temperature and a Modbus communication health dot. |
| 🔋 **Battery** | Segmented battery icon, SOC, charge/discharge direction, V/A/°C, daily kWh, runtime estimate, **MIN/MAX SOC markers** and sliders to change them. |
| 🗼 **Grid** | Import/export with direction colours, daily import/export and an optional low/high‑tariff badge. |
| 🏠 **Home & loads** | Big home node with total consumption and any number of loads (boiler, car, heating, A/C, …) drawn as line icons that light up when active. A/C icons switch between ❄️ and 🔥 by HVAC mode. |
| 🚗 **Wallbox & EV** | Charging power bar, status, **GREEN · ECO · FAST · STOP** mode buttons, charging current slider, car SOC with target, range, time remaining and charge limit. |
| ✨ **Animation** | Moving, pulsing arrows along each flow – speed follows the power. |
| 🌍 **Languages** | English and Slovak, picked automatically from Home Assistant (or forced per card). |
| 🛠️ **Visual editor** | Everything is configurable in the UI – no YAML needed. Entities of the `solax_modbus` integration are discovered automatically. |
| 📦 **Zero dependencies** | One plain JavaScript file, no build step, no external requests. |

## Requirements

- Home Assistant **2023.9** or newer
- Recommended: the [SolaX Modbus](https://github.com/wills106/homeassistant-solax-modbus) integration (`solax_modbus`).
  Any other source works too – you just pick the entities in the editor.

## Installation

### HACS (recommended)

1. Click the button below – it opens HACS in your Home Assistant with this repository pre‑filled:

   [![Open in HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=tomasbobala&repository=solax-fve-card&category=plugin)

   Or manually: **HACS → ⋮ → Custom repositories**, URL `https://github.com/tomasbobala/solax-fve-card`, type **Dashboard**.
2. Search for **SolaX FVE Card** and click **Download**.
3. Reload the browser (on mobile: close and reopen the app).

HACS registers the resource automatically.

### Manual

1. Download `solax-fve-card.js` from the [latest release](https://github.com/tomasbobala/solax-fve-card/releases/latest).
2. Copy it to `<config>/www/solax-fve-card.js`.
3. **Settings → Dashboards → ⋮ → Resources → Add resource**
   - URL: `/local/solax-fve-card.js?v=1.0.0`
   - Type: **JavaScript module**
4. Reload the browser. After every update, increase the `?v=` number so browsers load the new file.

## Quick start

1. Open a dashboard → **Edit** → **Add card** → search for **SolaX FVE Card**.
2. The card fills in the `solax_modbus` entities it finds. Check the sections in the editor and adjust what is needed.
3. Add your loads (boiler, heating, A/C …) in the **Loads** section.

Minimal YAML:

```yaml
type: custom:solax-fve-card
entities:
  solar_power: sensor.solax_pv_power_total
  battery_power: sensor.solax_battery_power_charge
  battery_soc: sensor.solax_battery_capacity
  grid_power: sensor.solax_measured_power
  total_power: sensor.solax_house_load
```

## Configuration

All options are optional unless marked otherwise. Everything below can be set in the visual editor.

### General

| Option | Type | Default | Description |
|---|---|---|---|
| `type` | string | **required** | `custom:solax-fve-card` |
| `language` | string | `auto` | `auto` (from Home Assistant), `en` or `sk` |
| `title` | string | `Home energy` | Card title |
| `title_icon` | string | `⚡` | Emoji in front of the title, empty string = none |
| `links` | list | Energy button | Buttons in the header – see [Links](#links) |
| `power_unit` | string | `W` | `W`, `kW` or `auto` |
| `decimals` | number | `2` | Decimal places for kW |
| `animation_speed` | string | `normal` | `slow`, `normal`, `fast` |
| `colors` | map | – | See [Colors](#colors) |
| `show` | map | – | See [Display switches](#display-switches) |

### Entities

Set under `entities:`. Power entities in kW are converted automatically.

| Key | Description | Typical `solax_modbus` entity |
|---|---|---|
| `pv1_power`, `pv2_power` | String power | `sensor.solax_pv_power_1`, `_2` |
| `pv1_voltage`, `pv2_voltage` | String voltage | `sensor.solax_pv_voltage_1`, `_2` |
| `pv1_current`, `pv2_current` | String current | `sensor.solax_pv_current_1`, `_2` |
| `solar_power` | Total PV power | `sensor.solax_pv_power_total` |
| `solar_today` | Produced today (kWh) | `sensor.solax_today_s_solar_energy` |
| `inverter_status` | Run mode | `sensor.solax_run_mode` |
| `inverter_power` | Inverter AC power | `sensor.solax_inverter_power` |
| `inverter_temp` | Inverter temperature | `sensor.solax_inverter_temperature` |
| `inverter_comm_health`, `inverter_comm_rate` | Communication health / success rate | – |
| `inverter_voltage_l1…l3`, `inverter_current_l1…l3` | Per‑phase values | `sensor.solax_inverter_voltage_l1` … |
| `grid_power` | Grid power, **+ import / − export** | `sensor.solax_measured_power` |
| `grid_power_l1…l3`, `grid_voltage_l1…l3` | Per‑phase values | `sensor.solax_measured_power_l1` … |
| `grid_import_today`, `grid_export_today` | Daily import / export | `sensor.solax_today_s_import_energy` … |
| `tariff_low` | ON = low tariff (badge) | any `switch` / `binary_sensor` |
| `tariff_enabled` | Dot next to the badge | any `input_boolean` |
| `battery_power` | Battery power, **+ charge / − discharge** | `sensor.solax_battery_power_charge` |
| `battery_soc` | State of charge (%) | `sensor.solax_battery_capacity` |
| `battery_voltage`, `battery_current`, `battery_temp` | Battery details | `sensor.solax_battery_voltage_charge` … |
| `battery_charge_today`, `battery_discharge_today` | Daily energy | `sensor.solax_battery_input_energy_today` … |
| `battery_capacity` | BMS capacity (Wh) for the runtime estimate | `sensor.solax_bms_battery_capacity` |
| `battery_min_soc` | MIN SOC `number` (marker + slider) | `number.solax_selfuse_discharge_min_soc` |
| `battery_max_soc` | MAX SOC `number` (marker + slider) | `number.solax_battery_charge_upper_soc` |
| `total_power`, `total_today` | Home consumption / today | `sensor.solax_house_load` |
| `wallbox_power` | Charging power | `sensor.solax_wallbox_charge_power_total` |
| `wallbox_status` | Charger state | `sensor.solax_wallbox_run_mode` |
| `wallbox_mode` | Charging mode `select` | `select.solax_wallbox_charge_mode` |
| `wallbox_stop` | Entity that stops charging (`select`, `switch`, `button`) | auto: `select.<prefix>_control_command` |
| `wallbox_current` | Charging current `number` | `number.solax_wallbox_charge_current` |
| `wallbox_added`, `wallbox_today`, `wallbox_temp` | Session / daily energy, temperature | – |
| `wallbox_comm_health`, `wallbox_comm_rate` | Communication health | – |
| `car_soc`, `car_target_soc`, `car_range`, `car_time_remaining` | Car battery from your car integration | – |
| `car_limit` | Car charge limit `number` (slider) | – |
| `car_plug`, `car_state` | Charger connected / charging state | – |

### Layout and labels

| Option | Type | Default | Description |
|---|---|---|---|
| `pv1_label`, `pv2_label` | string | `String 1`, `String 2` | String names; the panel shows their initials (e.g. *East/West* → `E/W`) |
| `home_label`, `home_icon` | string | `Home`, `🏠` | Home node |
| `home_mode` | string | `total` | `total` = whole consumption, `remainder` = minus the loads below |
| `inverter_image` | string | – | Your own inverter picture, e.g. `/local/inverter.png` |
| `inverter_power_label` | string | `output` | Text in front of the inverter power, empty = none |
| `wallbox_image` | string | – | Your own wallbox picture |
| `wallbox_max_power` | number | `11000` | Full scale of the charging bar (W) |
| `invert_battery`, `invert_grid` | string | `auto` | `auto`, `yes`, `no` – flip the sign if your sensor uses the opposite convention |
| `battery_capacity_kwh` | number | from BMS | Capacity for the runtime estimate |
| `battery_runtime_target` | number | MIN SOC | Target % for the runtime estimate |
| `battery_segments` | number | `3` | Segments of the battery icon |

### Loads

```yaml
loads:
  - label: Boiler
    icon: 🚿            # emoji, drawn as a line icon
    color: "#e0a020"
    entity: sensor.boiler_power
    today: sensor.boiler_energy_today
  - label: Heating
    icon: ♨️
    entity: sensor.heating_living_room_power
    extra_entities: sensor.heating_bedroom_power, sensor.heating_bathroom_power
  - label: A/C
    icon: 🌡️
    entity: sensor.ac_power
    icon_entity: climate.living_room    # ❄️ when cooling, 🔥 when heating
```

| Key | Description |
|---|---|
| `label`, `icon`, `color` | Name, emoji and colour |
| `art` | Force a drawn icon: `home`, `boiler`, `car`, `heating`, `heat`, `cool`, `thermo`, `bolt`, `plug` |
| `entity` | Power entity |
| `extra_entities` | More power entities to add up, comma separated |
| `today`, `today_extra` | Daily energy entity / more to add up |
| `icon_entity` | `climate` entity – icon follows `hvac_action` / mode |

Emoji mapped to drawn icons: 🏠 🏡 → home, 🚿 🛁 → boiler, ♨️ → heating, 🔥 → heat, ❄️ → cool, 🌡️ → thermo, 🚗 🚙 → car, 🔌 ⚡ → bolt.

### Links

```yaml
links:
  - label: Energy
    icon: ⚡
    path: /energy
  - label: Solar
    icon: 🔆
    color: "#f5a623"
    path: /lovelace/solar
  - label: SolaX Cloud
    icon: ☁️
    path: https://www.solaxcloud.com
```

`links: []` hides the buttons. Full `https://` addresses open in a new tab.

### Display switches

Set under `show:` (`true` / `false`).

| Key | Default | Description |
|---|---|---|
| `pv_split` | `true` | Two separate strings |
| `pv_details` | `true` | Voltage / current / share % |
| `solar_sum` | `true` | Total of the strings (Σ) |
| `night_compact` | `true` | Collapse the strings when there is no production |
| `battery` | `true` | Battery node |
| `battery_details` | `true` | V / A / °C / daily kWh |
| `battery_settings` | `true` | MIN / MAX SOC sliders |
| `battery_runtime` | `true` | Runtime estimate |
| `grid` | `true` | Grid node |
| `grid_details` | `true` | Daily import / export |
| `tariff` | `true` | Tariff badge |
| `loads` | `true` | Loads |
| `dim_idle_loads` | `true` | Dim loads that draw nothing |
| `wallbox_panel` | `true` | Wallbox panel |
| `wallbox_settings` | `true` | Charging current / car limit |
| `wallbox_stop` | `true` | STOP button next to the modes |
| `wallbox_session` | `false` | Energy of the current session |
| `car` | `true` | Car battery |
| `diagnostics` | `true` | Communication dot |
| `phase_details` | `true` | Phase table |
| `energy_today` | `false` | Bottom row with daily totals |
| `translate_sk` | `true` | Translate device states into the card language |
| `animation` | `true` | Animated flows |

### Colors

`colors:` keys: `solar`, `solar_today`, `hub`, `battery_charge`, `battery_discharge`, `grid_import`, `grid_export`, `home`, `wallbox`.

## Examples

A complete example is in [`examples/card.yaml`](examples/card.yaml).

## Screenshots

| Day | Night | Details |
|---|---|---|
| <img src="https://raw.githubusercontent.com/tomasbobala/solax-fve-card/main/docs/images/card-day-en.png" width="280"> | <img src="https://raw.githubusercontent.com/tomasbobala/solax-fve-card/main/docs/images/card-night-en.png" width="280"> | <img src="https://raw.githubusercontent.com/tomasbobala/solax-fve-card/main/docs/images/card-details-en.png" width="280"> |

| Light theme | Slovak | Visual editor |
|---|---|---|
| <img src="https://raw.githubusercontent.com/tomasbobala/solax-fve-card/main/docs/images/card-day-light.png" width="280"> | <img src="https://raw.githubusercontent.com/tomasbobala/solax-fve-card/main/docs/images/card-day-sk.png" width="280"> | <img src="https://raw.githubusercontent.com/tomasbobala/solax-fve-card/main/docs/images/editor-en.png" width="280"> |

## Troubleshooting

<details>
<summary><b>The card is not in the card picker / "Custom element doesn't exist"</b></summary>

Check that the resource exists (**Settings → Dashboards → Resources**) and is of type *JavaScript module*. Then fully reload the browser (Ctrl + F5); on phones, clear the app cache.
</details>

<details>
<summary><b>Battery or grid arrows point the wrong way</b></summary>

Your sensor uses the opposite sign. Set **Invert battery power sign** / **Invert grid power sign** to *Yes* (`invert_battery: yes`, `invert_grid: yes`).
</details>

<details>
<summary><b>The STOP button is missing</b></summary>

The card looks for `<prefix>_control_command` next to your charging‑mode select. If your charger uses a different entity, set it as `entities.wallbox_stop` (a `select` with a *Stop* option, a `switch` or a `button`).
</details>

<details>
<summary><b>After an update the card still looks old</b></summary>

For manual installs, raise the `?v=` number of the resource. For HACS, reload the browser / app cache.
</details>

## Development

```bash
git clone https://github.com/tomasbobala/solax-fve-card.git
cd solax-fve-card
npm install
npm test              # unit tests (node:test + jsdom)
npx serve .           # then open http://localhost:3000/demo/?lang=en&view=day,night
```

The whole card is a single file: [`dist/solax-fve-card.js`](dist/solax-fve-card.js). The demo page accepts `lang=en|sk`, `view=day,night,details,editor` and `theme=light`.


## Contributing

Issues and pull requests are welcome – see [CONTRIBUTING.md](CONTRIBUTING.md). Translations into more languages are especially appreciated: add a block to `I18N` and `STATE_TEXT` in the card file.

## License

[MIT](LICENSE) © 2026 Tomáš Bobala

---

<sub>SolaX is a trademark of SolaX Power Network Technology (Zhejiang) Co., Ltd. This project is an independent community card and is not affiliated with or endorsed by SolaX Power.</sub>

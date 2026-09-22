<div align="center">

# ⚡ SolaX FVE Card

**Animovaná karta toku energie pre Home Assistant a meniče SolaX**

FV stringy · menič · batéria s ovládaním SOC · sieť a tarifa · záťaže · wallbox a elektromobil

[![HACS Custom](https://img.shields.io/badge/HACS-Custom-41BDF5?style=for-the-badge&logo=homeassistantcommunitystore&logoColor=white)](https://hacs.xyz)
[![GitHub release](https://img.shields.io/github/v/release/tomasbobala/solax-fve-card?style=for-the-badge&color=f5a623)](https://github.com/tomasbobala/solax-fve-card/releases)
[![Licencia: MIT](https://img.shields.io/github/license/tomasbobala/solax-fve-card?style=for-the-badge&color=4caf7d)](LICENSE)
[![Validate](https://img.shields.io/github/actions/workflow/status/tomasbobala/solax-fve-card/validate.yml?style=for-the-badge&label=validate)](https://github.com/tomasbobala/solax-fve-card/actions)

[English](README.md) · **Slovensky**

[![Otvoriť tento repozitár v HACS vo vašom Home Assistant.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=tomasbobala&repository=solax-fve-card&category=plugin)

<img src="https://raw.githubusercontent.com/tomasbobala/solax-fve-card/main/docs/images/card-day-sk.png" alt="SolaX FVE Card po slovensky" width="430">

</div>

---

## Obsah

- [Funkcie](#funkcie)
- [Požiadavky](#požiadavky)
- [Inštalácia](#inštalácia)
- [Rýchly štart](#rýchly-štart)
- [Nastavenia](#nastavenia)
- [Príklady](#príklady)
- [Obrázky](#obrázky)
- [Riešenie problémov](#riešenie-problémov)
- [Vývoj](#vývoj)
- [Licencia](#licencia)

## Funkcie

| | |
|---|---|
| 🌞 **Solar** | Dva FV stringy s výkonom, napätím, prúdom a podielom, ich súčet a dnešná výroba. V noci sa stringy zbalia do jedného riadku. |
| 🔆 **Menič** | Nakreslený menič (alebo vlastná fotka), režim, AC výkon, teplota a bodka stavu Modbus komunikácie. |
| 🔋 **Batéria** | Segmentová ikona, SOC, smer nabíjania/vybíjania, V/A/°C, denné kWh, odhad výdrže, **rysky MIN/MAX SOC** a posuvníky na ich zmenu. |
| 🗼 **Sieť** | Import/export s farbou podľa smeru, denný nákup/predaj a voliteľný odznak nízkej/vysokej tarify (NT/VT). |
| 🏠 **Dom a záťaže** | Veľký uzol domu s celkovou spotrebou a ľubovoľný počet záťaží (bojler, auto, kúrenie, klíma …) ako čiarové ikony, ktoré sa rozsvietia, keď berú prúd. Klíma prepína ❄️ / 🔥 podľa režimu. |
| 🚗 **Wallbox a auto** | Pruh nabíjacieho výkonu, stav, tlačidlá **GREEN · ECO · FAST · STOP**, posuvník prúdu, batéria auta s cieľom, dojazd, zostávajúci čas a limit nabíjania. |
| ✨ **Animácia** | Putujúce pulzujúce šípky po každom toku – rýchlosť podľa výkonu. |
| 🌍 **Jazyky** | Angličtina a slovenčina, automaticky podľa Home Assistant (alebo nastavené pre kartu). |
| 🛠️ **Vizuálny editor** | Všetko sa nastavuje v UI – YAML netreba. Entity integrácie `solax_modbus` sa nájdu automaticky. |
| 📦 **Bez závislostí** | Jeden čistý JavaScript súbor, žiadny build, žiadne externé požiadavky. |

## Požiadavky

- Home Assistant **2023.9** alebo novší
- Odporúčané: integrácia [SolaX Modbus](https://github.com/wills106/homeassistant-solax-modbus) (`solax_modbus`).
  Funguje aj akýkoľvek iný zdroj – entity len vyberiete v editore.

## Inštalácia

### HACS (odporúčané)

1. Kliknite na tlačidlo – otvorí HACS vo vašom Home Assistant s vyplneným repozitárom:

   [![Otvoriť v HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=tomasbobala&repository=solax-fve-card&category=plugin)

   Alebo ručne: **HACS → ⋮ → Custom repositories**, URL `https://github.com/tomasbobala/solax-fve-card`, typ **Dashboard**.
2. Vyhľadajte **SolaX FVE Card** a kliknite na **Download**.
3. Obnovte prehliadač (v mobile aplikáciu zavrite a znova otvorte).

HACS zaregistruje resource automaticky.

### Ručne

1. Stiahnite `solax-fve-card.js` z [posledného vydania](https://github.com/tomasbobala/solax-fve-card/releases/latest).
2. Skopírujte ho do `<config>/www/solax-fve-card.js`.
3. **Nastavenia → Dashboardy → ⋮ → Zdroje (Resources) → Pridať zdroj**
   - URL: `/local/solax-fve-card.js?v=1.0.0`
   - Typ: **JavaScript modul**
4. Obnovte prehliadač. Po každej aktualizácii zvýšte číslo `?v=`, aby prehliadač načítal nový súbor.

## Rýchly štart

1. Otvorte dashboard → **Upraviť** → **Pridať kartu** → vyhľadajte **SolaX FVE Card**.
2. Karta sama doplní nájdené entity `solax_modbus`. Prejdite sekcie editora a upravte, čo treba.
3. V sekcii **Záťaže** pridajte bojler, kúrenie, klímu …

Minimálny YAML:

```yaml
type: custom:solax-fve-card
language: sk
entities:
  solar_power: sensor.solax_pv_power_total
  battery_power: sensor.solax_battery_power_charge
  battery_soc: sensor.solax_battery_capacity
  grid_power: sensor.solax_measured_power
  total_power: sensor.solax_house_load
```

## Nastavenia

Všetky voľby sú nepovinné, pokiaľ nie je uvedené inak, a všetky sa dajú nastaviť aj vo vizuálnom editore.

### Všeobecné

| Voľba | Typ | Predvolené | Popis |
|---|---|---|---|
| `type` | text | **povinné** | `custom:solax-fve-card` |
| `language` | text | `auto` | `auto` (podľa Home Assistant), `en` alebo `sk` |
| `title` | text | `Energia domu` | Nadpis karty |
| `title_icon` | text | `⚡` | Emoji pred nadpisom, prázdne = bez ikony |
| `links` | zoznam | tlačidlo Energie | Tlačidlá v hlavičke – pozri [Tlačidlá](#tlačidlá) |
| `power_unit` | text | `W` | `W`, `kW` alebo `auto` |
| `decimals` | číslo | `2` | Desatinné miesta pre kW |
| `animation_speed` | text | `normal` | `slow`, `normal`, `fast` |
| `colors` | mapa | – | Pozri [Farby](#farby) |
| `show` | mapa | – | Pozri [Čo zobraziť](#čo-zobraziť) |

### Entity

Zadávajú sa pod `entities:`. Výkon v kW sa prepočíta automaticky.

| Kľúč | Popis | Typická entita `solax_modbus` |
|---|---|---|
| `pv1_power`, `pv2_power` | Výkon stringu | `sensor.solax_pv_power_1`, `_2` |
| `pv1_voltage`, `pv2_voltage` | Napätie stringu | `sensor.solax_pv_voltage_1`, `_2` |
| `pv1_current`, `pv2_current` | Prúd stringu | `sensor.solax_pv_current_1`, `_2` |
| `solar_power` | Celkový FV výkon | `sensor.solax_pv_power_total` |
| `solar_today` | Vyrobené dnes (kWh) | `sensor.solax_today_s_solar_energy` |
| `inverter_status` | Režim meniča | `sensor.solax_run_mode` |
| `inverter_power` | AC výkon meniča | `sensor.solax_inverter_power` |
| `inverter_temp` | Teplota meniča | `sensor.solax_inverter_temperature` |
| `inverter_comm_health`, `inverter_comm_rate` | Stav / úspešnosť komunikácie | – |
| `inverter_voltage_l1…l3`, `inverter_current_l1…l3` | Hodnoty po fázach | `sensor.solax_inverter_voltage_l1` … |
| `grid_power` | Výkon siete, **+ import / − export** | `sensor.solax_measured_power` |
| `grid_power_l1…l3`, `grid_voltage_l1…l3` | Hodnoty po fázach | `sensor.solax_measured_power_l1` … |
| `grid_import_today`, `grid_export_today` | Denný nákup / predaj | `sensor.solax_today_s_import_energy` … |
| `tariff_low` | ON = nízka tarifa (odznak NT/VT) | ľubovoľný `switch` / `binary_sensor` |
| `tariff_enabled` | Bodka vedľa odznaku | ľubovoľný `input_boolean` |
| `battery_power` | Výkon batérie, **+ nabíja / − vybíja** | `sensor.solax_battery_power_charge` |
| `battery_soc` | Stav nabitia (%) | `sensor.solax_battery_capacity` |
| `battery_voltage`, `battery_current`, `battery_temp` | Detaily batérie | `sensor.solax_battery_voltage_charge` … |
| `battery_charge_today`, `battery_discharge_today` | Denná energia | `sensor.solax_battery_input_energy_today` … |
| `battery_capacity` | Kapacita z BMS (Wh) pre odhad výdrže | `sensor.solax_bms_battery_capacity` |
| `battery_min_soc` | MIN SOC `number` (ryska + posuvník) | `number.solax_selfuse_discharge_min_soc` |
| `battery_max_soc` | MAX SOC `number` (ryska + posuvník) | `number.solax_battery_charge_upper_soc` |
| `total_power`, `total_today` | Spotreba domu / dnes | `sensor.solax_house_load` |
| `wallbox_power` | Nabíjací výkon | `sensor.solax_wallbox_charge_power_total` |
| `wallbox_status` | Stav nabíjačky | `sensor.solax_wallbox_run_mode` |
| `wallbox_mode` | Režim nabíjania (`select`) | `select.solax_wallbox_charge_mode` |
| `wallbox_stop` | Entita na zastavenie (`select`, `switch`, `button`) | auto: `select.<prefix>_control_command` |
| `wallbox_current` | Nabíjací prúd (`number`) | `number.solax_wallbox_charge_current` |
| `wallbox_added`, `wallbox_today`, `wallbox_temp` | Energia relácie / dňa, teplota | – |
| `wallbox_comm_health`, `wallbox_comm_rate` | Stav komunikácie | – |
| `car_soc`, `car_target_soc`, `car_range`, `car_time_remaining` | Batéria auta z integrácie auta | – |
| `car_limit` | Limit nabíjania auta (`number`, posuvník) | – |
| `car_plug`, `car_state` | Pripojená nabíjačka / stav nabíjania | – |

### Rozloženie a popisy

| Voľba | Typ | Predvolené | Popis |
|---|---|---|---|
| `pv1_label`, `pv2_label` | text | `String 1`, `String 2` | Názvy stringov; panel ukáže začiatočné písmená (*Východ/Západ* → `V/Z`) |
| `home_label`, `home_icon` | text | `Dom`, `🏠` | Uzol domu |
| `home_mode` | text | `total` | `total` = celá spotreba, `remainder` = mínus záťaže pod ním |
| `inverter_image` | text | – | Vlastný obrázok meniča, napr. `/local/menic.png` |
| `inverter_power_label` | text | `výstup` | Text pred výkonom meniča, prázdne = bez textu |
| `wallbox_image` | text | – | Vlastný obrázok wallboxu |
| `wallbox_max_power` | číslo | `11000` | Plný rozsah pruhu nabíjania (W) |
| `invert_battery`, `invert_grid` | text | `auto` | `auto`, `yes`, `no` – otočí znamienko, ak má senzor opačnú konvenciu |
| `battery_capacity_kwh` | číslo | z BMS | Kapacita pre odhad výdrže |
| `battery_runtime_target` | číslo | MIN SOC | Cieľové % pre odhad výdrže |
| `battery_segments` | číslo | `3` | Počet segmentov ikony batérie |

### Záťaže

```yaml
loads:
  - label: Bojler
    icon: 🚿            # emoji sa nakreslí ako čiarová ikona
    color: "#e0a020"
    entity: sensor.bojler_vykon
    today: sensor.bojler_dnes
  - label: Kúrenie
    icon: ♨️
    entity: sensor.kurenie_obyvacka_vykon
    extra_entities: sensor.kurenie_spalna_vykon, sensor.kurenie_kupelna_vykon
  - label: Klíma
    icon: 🌡️
    entity: sensor.klima_vykon
    icon_entity: climate.obyvacka    # ❄️ pri chladení, 🔥 pri kúrení
```

| Kľúč | Popis |
|---|---|
| `label`, `icon`, `color` | Názov, emoji a farba |
| `art` | Vynútená kresba: `home`, `boiler`, `car`, `heating`, `heat`, `cool`, `thermo`, `bolt`, `plug` |
| `entity` | Entita výkonu |
| `extra_entities` | Ďalšie entity výkonu na sčítanie, oddelené čiarkou |
| `today`, `today_extra` | Denná energia / ďalšie na sčítanie |
| `icon_entity` | `climate` entita – ikona podľa `hvac_action` / režimu |

Emoji → kresba: 🏠 🏡 → dom, 🚿 🛁 → bojler, ♨️ → kúrenie, 🔥 → oheň, ❄️ → chladenie, 🌡️ → teplomer, 🚗 🚙 → auto, 🔌 ⚡ → blesk.

### Tlačidlá

```yaml
links:
  - label: Energie
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

`links: []` tlačidlá skryje. Celé adresy `https://` sa otvoria v novej karte.

### Čo zobraziť

Pod `show:` (`true` / `false`).

| Kľúč | Predvolené | Popis |
|---|---|---|
| `pv_split` | `true` | Dva samostatné stringy |
| `pv_details` | `true` | Napätie / prúd / podiel % |
| `solar_sum` | `true` | Súčet stringov (Σ) |
| `night_compact` | `true` | Zbaliť stringy, keď nič nevyrába |
| `battery` | `true` | Uzol batérie |
| `battery_details` | `true` | V / A / °C / denné kWh |
| `battery_settings` | `true` | Posuvníky MIN / MAX SOC |
| `battery_runtime` | `true` | Odhad výdrže |
| `grid` | `true` | Uzol siete |
| `grid_details` | `true` | Denný nákup / predaj |
| `tariff` | `true` | Odznak tarify |
| `loads` | `true` | Záťaže |
| `dim_idle_loads` | `true` | Stlmiť záťaže, ktoré nič neberú |
| `wallbox_panel` | `true` | Panel wallboxu |
| `wallbox_settings` | `true` | Nabíjací prúd / limit auta |
| `wallbox_stop` | `true` | Tlačidlo STOP pri režimoch |
| `wallbox_session` | `false` | Energia aktuálnej relácie |
| `car` | `true` | Batéria auta |
| `diagnostics` | `true` | Bodka komunikácie |
| `phase_details` | `true` | Tabuľka fáz |
| `energy_today` | `false` | Spodný riadok denných súčtov |
| `translate_sk` | `true` | Prekladať stavy zariadení do jazyka karty |
| `animation` | `true` | Animované toky |

### Farby

Kľúče pod `colors:`: `solar`, `solar_today`, `hub`, `battery_charge`, `battery_discharge`, `grid_import`, `grid_export`, `home`, `wallbox`.

## Príklady

Kompletný príklad je v [`examples/card.yaml`](examples/card.yaml).

## Obrázky

| Deň | Noc | Detaily |
|---|---|---|
| <img src="https://raw.githubusercontent.com/tomasbobala/solax-fve-card/main/docs/images/card-day-sk.png" width="280"> | <img src="https://raw.githubusercontent.com/tomasbobala/solax-fve-card/main/docs/images/card-night-en.png" width="280"> | <img src="https://raw.githubusercontent.com/tomasbobala/solax-fve-card/main/docs/images/card-details-en.png" width="280"> |

| Svetlá téma | Angličtina | Vizuálny editor |
|---|---|---|
| <img src="https://raw.githubusercontent.com/tomasbobala/solax-fve-card/main/docs/images/card-day-light.png" width="280"> | <img src="https://raw.githubusercontent.com/tomasbobala/solax-fve-card/main/docs/images/card-day-en.png" width="280"> | <img src="https://raw.githubusercontent.com/tomasbobala/solax-fve-card/main/docs/images/editor-en.png" width="280"> |

## Riešenie problémov

<details>
<summary><b>Karta nie je v zozname kariet / „Custom element doesn't exist“</b></summary>

Skontrolujte, či zdroj existuje (**Nastavenia → Dashboardy → Zdroje**) a je typu *JavaScript modul*. Potom úplne obnovte prehliadač (Ctrl + F5); v telefóne vymažte cache aplikácie.
</details>

<details>
<summary><b>Šípky batérie alebo siete idú opačne</b></summary>

Senzor používa opačné znamienko. Nastavte **Otočiť znamienko výkonu batérie / siete** na *Áno* (`invert_battery: yes`, `invert_grid: yes`).
</details>

<details>
<summary><b>Chýba tlačidlo STOP</b></summary>

Karta hľadá `<prefix>_control_command` vedľa entity režimu nabíjania. Ak vaša nabíjačka používa inú entitu, zadajte ju ako `entities.wallbox_stop` (`select` s možnosťou *Stop*, `switch` alebo `button`).
</details>

<details>
<summary><b>Po aktualizácii karta vyzerá po starom</b></summary>

Pri ručnej inštalácii zvýšte číslo `?v=` v zdroji. Pri HACS obnovte prehliadač / cache aplikácie.
</details>

## Vývoj

```bash
git clone https://github.com/tomasbobala/solax-fve-card.git
cd solax-fve-card
npm install
npm test              # testy (node:test + jsdom)
npx serve .           # potom otvorte http://localhost:3000/demo/?lang=sk&view=day,night
```

Celá karta je jeden súbor: [`dist/solax-fve-card.js`](dist/solax-fve-card.js). Demo stránka berie parametre `lang=en|sk`, `view=day,night,details,editor` a `theme=light`.

Ako vydať novú verziu a dostať sa do HACS je popísané krok za krokom v [docs/PUBLISHING.sk.md](docs/PUBLISHING.sk.md).

## Prispievanie

Nahlásenia chýb aj pull requesty sú vítané – pozri [CONTRIBUTING.md](CONTRIBUTING.md). Obzvlášť potešia preklady do ďalších jazykov: stačí pridať blok do `I18N` a `STATE_TEXT` v súbore karty.

## Licencia

[MIT](LICENSE) © 2026 Tomáš Bobala

---

<sub>SolaX je ochranná známka spoločnosti SolaX Power Network Technology (Zhejiang) Co., Ltd. Tento projekt je nezávislá komunitná karta a so spoločnosťou SolaX Power nie je nijako spojený.</sub>

# Changelog

All notable changes to this project are documented here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses [Semantic Versioning](https://semver.org/).

## [1.0.3] – 2026-10-31

### Added / Pridané

- **Load layouts** `loads_layout`: `row` (original single row, default), `rows` (circles,
  `loads_per_row` per row) and `tiles` (compact tiles in a grid). With many loads the single row got
  too small to read.
  / **Rozloženie záťaží** `loads_layout`: `row` (pôvodný jeden rad), `rows` (krúžky po
  `loads_per_row` v rade) a `tiles` (dlaždice v mriežke). Pri veľa záťažiach bol jeden rad neprehľadný.
- Tiles: one shared feed line in the home colour, and every running load has its own arrow in its
  own colour travelling all the way from the house to the tile. Rows are fed through the gap between
  tiles, so no line crosses a tile.
  / Dlaždice: spoločné vedenie vo farbe domu, každá bežiaca záťaž má vlastnú šípku vo svojej farbe,
  ktorá ide od domu až k nej. Do ďalších radov vedie čiara medzerou medzi dlaždicami.
- **OTHER tile** – unmeasured consumption = home power minus all measured loads (never below 0).
  Shown when at least one load is set; daily value when every load has a daily entity.
  `show.loads_other`, `other_label`, `other_icon`, `other_color`.
  / **Dlaždica OSTATNÉ** – nemeraná spotreba = dom mínus všetky merané záťaže (nikdy pod 0).
- Editor: colour-coded sections with an icon badge, a count (e.g. *loads: 6*) and an expand marker
  that rotates when open; load cards carry the load's colour.
  / Editor: farebne odlíšené sekcie s ikonou, počtom (napr. *záťaže: 6*) a značkou rozbalenia;
  karty záťaží majú farbu záťaže.

### Fixed / Opravené

- Long load names in tiles shrink instead of overflowing. / Dlhé názvy v dlaždiciach sa zmenšia.
- Editor inputs no longer overflow the card. / Polia editora už nepretekajú cez okraj.

### Docs / Dokumentácia

- New screenshot of the tile layout, updated editor screenshot, README features and options.
  / Nový obrázok dlaždíc, aktualizovaný obrázok editora, popis funkcií a nastavení v README.

## [1.0.2] – 2026-10-10

### Fixed / Opravené

- After **STOP** there was no way to resume charging from the card: SolaX chargers stay stopped after
  *Stop Charging* until they receive *Start Charging*, and picking a mode does not restart them.
  The STOP button now turns into **▶ START** while charging is stopped (sends *Start Charging*, or
  `turn_on` for a switch, or presses the matching start button). Picking GREEN / ECO / FAST while
  stopped also restarts charging.
  / Po **STOP** sa nabíjanie z karty nedalo obnoviť: nabíjačka SolaX po *Stop Charging* ostane
  zastavená, kým nedostane *Start Charging*, a výber režimu ju nespustí. Tlačidlo STOP sa po
  zastavení zmení na **▶ START** a výber režimu počas zastavenia nabíjanie znova spustí.
- The card now also re-renders when only the STOP entity changes.
  / Karta sa prekreslí aj vtedy, keď sa zmení iba entita STOP.

## [1.0.0] – 2026-09-22

First public release. / Prvé verejné vydanie.

### Added / Pridané

- Animated energy-flow diagram: two PV strings with sum, inverter, battery, grid, home and any number of loads.
  / Animovaný diagram toku energie: dva FV stringy so súčtom, menič, batéria, sieť, dom a ľubovoľný počet záťaží.
- Battery: segmented icon, MIN/MAX SOC markers (merged label when they are close), sliders, runtime estimate.
  / Batéria: segmentová ikona, rysky MIN/MAX SOC (spoločný popis, keď sú blízko), posuvníky, odhad výdrže.
- Wallbox panel with GREEN · ECO · FAST · STOP buttons, charging current, car SOC, range, time and charge limit.
  / Panel wallboxu s tlačidlami GREEN · ECO · FAST · STOP, nabíjací prúd, batéria auta, dojazd, čas a limit.
- Drawn line icons for all loads, dimmed when idle; A/C icon follows the HVAC mode.
  / Kreslené čiarové ikony záťaží, stlmené keď nič neberú; ikona klímy podľa režimu.
- Night mode that collapses the strings into one row.
  / Nočný režim, ktorý zbalí stringy do jedného riadku.
- Low/high tariff badge, Modbus communication dot, phase table.
  / Odznak tarify NT/VT, bodka stavu komunikácie, tabuľka fáz.
- English and Slovak user interface and editor, chosen automatically from Home Assistant.
  / Anglické a slovenské rozhranie aj editor, vybrané automaticky podľa Home Assistant.
- Visual editor with automatic discovery of `solax_modbus` entities.
  / Vizuálny editor s automatickým vyhľadaním entít `solax_modbus`.

[1.0.0]: https://github.com/tomasbobala/solax-fve-card/releases/tag/v1.0.0

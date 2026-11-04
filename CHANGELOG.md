# Changelog

All notable changes to this project are documented here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses [Semantic Versioning](https://semver.org/).

## [1.0.5] – 2026-11-04

### Fixed / Opravené

- **iPhone: the page no longer jumps up every few seconds when scrolled to the bottom.** The wallbox and
  car info rows were rebuilt on every update (the "unchanged?" check compared against the browser's own
  serialization of the SVG icons, which never matched). On iPhone / Safari (WebKit) each rebuild pulled the
  page up by ~26 px, so with SolaX updates every ~5 s the screen kept moving up. Rows are now rewritten
  only when their content really changes (also the "today" row).
  / **iPhone: stránka už každých pár sekúnd neposkočí hore, keď je odscrollovaná úplne dole.** Riadky
  wallboxu a auta sa prestavali pri každej aktualizácii (kontrola „nezmenilo sa?" porovnávala s tým, ako
  prehliadač zapíše SVG ikony, a to nikdy nesedelo). Na iPhone / v Safari (WebKit) každé prestavanie posunulo
  stránku o ~26 px hore, takže pri aktualizáciách SolaX každých ~5 s sa obrazovka stále posúvala. Riadky sa
  teraz prepíšu len pri skutočnej zmene (aj riadok „dnes").
- **The page no longer jumps at dawn and dusk.** The night layout (strings collapsed when nothing is
  produced) now switches only after production stays on one side of the 3 W threshold for 10 minutes.
  The inverter flips between 0 W and ~60 W every few seconds around sunrise and sunset, so the card grew and
  shrank by ~90 px again and again (40 times a day measured). The first render still uses the current value.
  / **Stránka už neskáče ráno a podvečer.** Nočné zobrazenie (zbalené stringy) sa prepne, až keď výroba
  zostane 10 minút na jednej strane hranice 3 W. Menič pri východe a západe slnka preskakuje medzi 0 W a
  ~60 W každých pár sekúnd, takže karta sa stále zväčšovala a zmenšovala o ~90 px (namerané 40× za deň).
  Pri prvom zobrazení platí aktuálna hodnota.
- **The wallbox panel keeps its height when charging starts or stops.** The power bar stays in place
  (empty and dimmed) instead of disappearing at 0 W, which changed the panel by ~60 px.
  / **Panel wallboxu nemení výšku pri začatí a skončení nabíjania.** Pruh výkonu ostáva na mieste
  (prázdny a stlmený), namiesto toho, aby pri 0 W zmizol a panel sa zmenil o ~60 px.

## [1.0.4] – 2026-11-03

### Added / Pridané

- **Several batteries shown as one** – `batteries:` list next to battery 1. Power, current and daily energy
  are added up, SOC is weighted by capacity, voltage is averaged, the highest temperature is shown and the
  runtime estimate uses the total capacity. The battery icon gets a **×N** badge and the details list every
  battery's own SOC (e.g. `A 72% · B 64%`). Editor: *Battery → More batteries → + Add battery*.
  / **Viac batérií zobrazených ako jedna** – zoznam `batteries:` k batérii 1. Výkon, prúd a denná energia sa
  sčítajú, SOC sa váži kapacitou, napätie sa priemeruje, ukáže sa najvyššia teplota a odhad výdrže počíta
  so súčtom kapacít. Ikona dostane odznak **×N** a v detailoch je SOC každej batérie. Editor: *Batéria →
  Ďalšie batérie → + Pridať batériu*.
- **Second wallbox** – `wallbox2: true` and the same entity keys with the `wb2_` prefix. A second wallbox
  panel with its own title, charging modes, STOP / START and current slider. Off by default, so a single
  wallbox looks exactly as before. Editor: *Wallbox → Second wallbox* reveals a *Wallbox 2* section.
  / **Druhý wallbox** – `wallbox2: true` a rovnaké kľúče entít s predponou `wb2_`. Druhý panel s vlastným
  názvom, režimami, STOP / START a posuvníkom prúdu. Predvolene vypnutý, s jedným wallboxom sa nič nemení.
  Editor: *Wallbox → Druhý wallbox* zobrazí sekciu *Wallbox 2*.
- Panel titles `wallbox_label`, `wallbox2_label`; battery 1 name `battery_label`.
  / Názvy panelov `wallbox_label`, `wallbox2_label`; názov batérie 1 `battery_label`.

### Docs / Dokumentácia

- README (EN + SK): new sections *Several batteries* / *Viac batérií* and *Second wallbox* / *Druhý wallbox*,
  new options, new screenshot, example in `examples/card.yaml`.

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

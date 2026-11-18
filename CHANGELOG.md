# Changelog

All notable changes to this project are documented here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses [Semantic Versioning](https://semver.org/).

## [1.3.0] – 2026-11-18

### Added / Pridané

- **Sunways inverter preset** (Sunways via SolaX Modbus, `brand: sunways`). The editor's 🔍 Find entities button
  fills solar, strings, inverter, meter (total and per phase), grid voltages and battery, and sets
  `invert_battery` and `invert_grid`. It finds the English solax_modbus names and the Slovak names used in #3.
  / **Predvoľba pre menič Sunways** (Sunways cez SolaX Modbus, `brand: sunways`). Tlačidlo 🔍 Vyhľadať entity
  v editore vyplní solár, stringy, menič, elektromer (spolu aj po fázach), napätia siete a batériu a nastaví
  `invert_battery` a `invert_grid`. Nájde anglické názvy zo solax_modbus aj slovenské názvy z #3.

## [1.2.1] – 2026-11-18

### Changed / Zmenené

- Developer name in the Info box, LICENSE and README: **Tomáš Bobaľa**.
  / Meno vývojára v okienku Info, v LICENSE a v README: **Tomáš Bobaľa**.

## [1.2.0] – 2026-11-18

### Added / Pridané

- **Wide layout with 1, 2 or 3 columns.** New option `card_columns` (editor: Display → Card layout).
  `auto` (default) keeps one column on a phone, switches to 2 columns from about 760 px (energy flow on the
  left, phase load / wallbox / battery on the right) and to 3 columns from about 1150 px (Today and the day
  chart get their own column). `1`, `2`, `3` force the layout; when the card is too narrow (2 need 600 px,
  3 need 1000 px) it falls back to fewer columns. Narrow columns stack the self-sufficiency rings and put the
  wallbox mode buttons on two rows.
  / **Široké rozloženie na 1, 2 alebo 3 stĺpce.** Nová voľba `card_columns` (editor: Zobrazenie → Rozloženie
  karty). `auto` (predvolené) nechá na mobile jeden stĺpec, od cca 760 px prejde na 2 stĺpce (tok energie
  vľavo, zaťaženie fáz / wallbox / batéria vpravo) a od cca 1150 px na 3 stĺpce (Dnes a priebeh dňa majú
  vlastný stĺpec). `1`, `2`, `3` rozloženie vynútia; pri príliš úzkej karte (2 potrebujú 600 px, 3 potrebujú
  1000 px) prejde na menej stĺpcov. V úzkom stĺpci sa krúžky sebestačnosti poskladajú pod seba a tlačidlá
  režimu wallboxu sa zalomia do dvoch riadkov.

## [1.1.4] – 2026-11-18

### Added / Pridané

- **Info button.** A small **?** in the top-right corner of the card opens an Info box with the card version
  and the developer. Tap again, tap outside or press Escape to close it.
  / **Tlačidlo Info.** Malý **?** v pravom hornom rohu karty otvorí okienko Info s verziou karty a menom
  vývojára. Zavrie sa ďalším ťuknutím, ťuknutím mimo neho alebo klávesom Escape.

## [1.1.3] – 2026-11-18

### Changed / Zmenené

- **Tapping a section header no longer throws the page to the top.** The card used to save the tapped state
  into the dashboard config (admin user). Home Assistant then redrew the whole view, so the page jumped to
  the top on every expand / collapse. The tapped state is now remembered in that browser only; the
  "collapsed" ticks in the editor stay the default for other browsers and devices.
  / **Ťuknutie na hlavičku sekcie už nehodí stránku na vrch.** Karta stav po ťuknutí ukladala do konfigurácie
  dashboardu (admin účet). Home Assistant potom prekreslil celý pohľad, takže stránka pri každom rozbalení
  a zbalení skočila hore. Stav po ťuknutí si teraz pamätá len daný prehliadač; zaškrtnutia „zbalená"
  v editore ostávajú predvolené pre ostatné prehliadače a zariadenia.

## [1.1.2] – 2026-11-18

### Fixed / Opravené

- **The page no longer jumps after expanding or collapsing a section.** For an admin user the card saves the
  section state into the dashboard about a second after the tap. Home Assistant then sends the card the new
  config and the card used to rebuild completely (chart and forecast were empty for a moment, so the page
  moved). When only `collapsed` changes, the card now keeps its content and just opens / closes the sections.
  / **Stránka už po rozbalení alebo zbalení sekcie neposkočí.** Admin používateľovi karta asi sekundu po
  ťuknutí uloží stav sekcií do dashboardu. Home Assistant potom karte pošle novú konfiguráciu a karta sa
  celá prestavala (graf a predpoveď boli na chvíľu prázdne, preto sa stránka posunula). Keď sa zmení len
  `collapsed`, karta si teraz obsah ponechá a sekcie len otvorí alebo zatvorí.

## [1.1.1] – 2026-11-15

### Fixed / Opravené

- **Safari / macOS / iPhone: the page no longer jumps up while the card updates.** The new 1.1.0 parts
  (forecast strip, phase load, self-sufficiency rings, collapsed energy-flow row, stale banner, day chart) were
  rebuilt on every update. In WebKit every rebuild pulls the page up, so a dashboard scrolled down kept
  moving. All of them – and the daily totals row – now update their texts and shapes in place.
  / **Safari / macOS / iPhone: stránka už pri aktualizácii karty neposkakuje hore.** Nové časti z 1.1.0
  (predpoveď, zaťaženie fáz, krúžky sebestačnosti, zbalený riadok toku energie, pruh starých dát, graf dňa) sa
  pri každej aktualizácii prestavali. Vo WebKite každé prestavanie posunie stránku hore. Teraz sa – aj s
  riadkom denných súčtov – menia len texty a tvary na mieste.
- The day chart keeps its height while loading; the phase warning line stays for at least 2 minutes instead of
  blinking around the threshold; the collapsed energy-flow chips sit in a fixed grid; the forecast and phase
  sections no longer disappear when a sensor is briefly unavailable.
  / Graf dňa má rovnakú výšku aj pri načítaní; riadok varovania fázy ostane aspoň 2 minúty a neblikne okolo
  hranice; čipy zbaleného toku energie sú v pevnej mriežke; predpoveď a fázy nezmiznú pri krátkom výpadku
  senzora.

## [1.1.0] – 2026-11-15

**The card is now called FVE Card** (formerly SolaX FVE Card). Only the display name changed – the card type
`custom:solax-fve-card`, the file and the repository stay the same, nothing to change in dashboards.
/ **Karta sa teraz volá FVE Card** (predtým SolaX FVE Card). Zmenil sa len zobrazený názov – typ
`custom:solax-fve-card`, súbor aj repozitár ostávajú, v dashboardoch netreba nič meniť.

### Added / Pridané

- **Solar forecast** (Forecast.Solar / Solcast): produced vs. forecast today, tomorrow, remaining, power now
  vs. forecast, peak time and a curve with the real production. / **Predpoveď výroby**: vyrobené oproti
  predpovedi, zajtrajšok, koľko zostáva, výkon teraz oproti predpovedi, špička a krivka so skutočnou výrobou.
- **Collapsible sections** – forecast, energy flow (tap the title), phase load, wallbox, battery settings, phase
  details, today and day profile. The state is saved into the card config (`collapsed:`) for admin users,
  otherwise in the browser. / **Zbaliteľné sekcie** – stav sa uloží do konfigurácie karty (admin), inak do
  prehliadača.
- **Stale data warning** – badge, banner and greyed-out diagram when the power entities have not changed for
  `stale_minutes` (default 10) or are unavailable. / **Upozornenie na staré dáta**.
- **Self-sufficiency and self-consumption** rings in the new *Today* section. / Krúžky **sebestačnosti** a
  **vlastnej spotreby** v sekcii *Dnes*.
- **Day profile** chart – production, forecast, home consumption and battery SOC for today or yesterday from the
  recorder, with a tap/hover readout. / Graf **priebehu dňa**.
- **Phase load** – current per phase against the breaker (`phase_limit_a`, `phase_warn_pct`), warning and pylon
  badge. / **Zaťaženie fáz** voči ističu s varovaním.
- **Smart Heating** – `smart_heating:` on a load shows ☀ and the accumulation target while a zone stores PV
  surplus as heat (needs the Smart Heating integration 0.23+). / Odznak akumulácie zo **Smart Heating**.
- **Inverter brand presets** (`brand:`) for SolaX, Huawei Solar, Fronius, GoodWe, Deye/Sunsynk (Solarman),
  SolarEdge Modbus Multi and generic names, auto-detected for new cards, plus a *Find entities* button in the
  editor. / **Predvoľby značiek meničov** a tlačidlo *Vyhľadať entity*.
- **Tap actions** per node (`tap_actions:` – more-info, navigate, url, perform-action, toggle, none). /
  **Akcie pri ťuknutí** pre každý uzol.
- **More inverters** (`inverters:`) – power and production are added up, ×N badge and a per-inverter line. /
  **Viac meničov**.

### Changed / Zmenené

- The wallbox panel sits in a collapsible section with its status in the header. / Panel wallboxu je v
  zbaliteľnej sekcii so stavom v hlavičke.
- The daily totals (`show.energy_today`) moved into the *Today* section. / Denné súčty sú v sekcii *Dnes*.

## [1.0.7] – 2026-11-15

### Fixed / Opravené

- **Three strings are now drawn in order 1 · 2 · 3 from left to right** – strings 2 and 3 were swapped
  (String 3 sat in the middle). / **Tri stringy sú teraz zľava doprava v poradí 1 · 2 · 3** – stringy 2 a 3
  boli prehodené (String 3 bol v strede).
- **Editor option renamed** from *Solar – two separate strings* to *Solar – separate display of strings*,
  since it now covers 2 or 3 strings. / **Premenovaná voľba v editore** z *Solar – 2 samostatné stringy* na
  *Solar – samostatné zobrazenie stringov*, lebo platí pre 2 aj 3 stringy.
- **No empty third panel on two-string inverters** – a String 3 entity that does not exist in Home Assistant
  is ignored, and new cards only pick up `pv_power_3` when the sensor reports a number (some integrations
  create an unavailable `pv_power_3` even on 2-MPPT inverters). / **Žiadny prázdny tretí panel pri dvoch
  stringoch** – entita String 3, ktorá v Home Assistante neexistuje, sa ignoruje a nové karty si `pv_power_3`
  vezmú len vtedy, keď senzor hlási číslo.
- Night compact mode now also wakes up when only String 3 produces. / Nočný kompaktný režim sa prebudí aj
  vtedy, keď vyrába len String 3.

## [1.0.6] – 2026-11-14

### Added / Pridané

- **Third PV string** – set `pv3_power` (plus optional `pv3_voltage`, `pv3_current`, `pv3_label`) and the card
  shows three panels side by side, each with power, share, voltage and current. The third string feeds into
  the join point from the middle; the total power and the energy produced today move into one pill above the
  join point. New cards pick up `sensor.…_pv_power_3` automatically. Without a third string nothing changes.
  Editor: *Solar / strings → String 3 name* and *String 3 – power / voltage / current*.
  / **Tretí FV string** – vyplň `pv3_power` (a voliteľne `pv3_voltage`, `pv3_current`, `pv3_label`) a karta
  ukáže tri panely vedľa seba s výkonom, podielom, napätím a prúdom. Tretí string vedie do spojovacieho bodu
  zo stredu; súčet výkonu a dnešná výroba sa presunú do jedného štítku nad spojovacím bodom. Nové karty si
  `sensor.…_pv_power_3` nájdu samé. Bez tretieho stringu sa nič nemení. Editor: *Solar / stringy → Názov
  String 3* a *String 3 – výkon / napätie / prúd*.

### Docs / Dokumentácia

- README (EN + SK): new section *Third string* / *Tretí string*, new options and entities, new screenshot.

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

# Changelog

All notable changes to this project are documented here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses [Semantic Versioning](https://semver.org/).

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

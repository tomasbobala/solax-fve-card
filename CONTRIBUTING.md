# Contributing / Prispievanie

**English** – Thank you for helping! Bug reports and ideas go to [Issues](https://github.com/tomasbobala/solax-fve-card/issues) – please use the forms and attach a screenshot and your card YAML (remove anything private).

**Slovensky** – Ďakujem za pomoc! Chyby a nápady patria do [Issues](https://github.com/tomasbobala/solax-fve-card/issues) – použite formulár a priložte obrázok a YAML karty (bez súkromných údajov).

## Pull requests

1. Fork the repository and create a branch: `git checkout -b fix/battery-label`.
2. The card is a single file, `dist/solax-fve-card.js` – no build step.
3. User-facing texts live in `I18N` (UI and editor) and `STATE_TEXT` (device states). Add every new text in **both** `en` and `sk`.
4. Run the tests and look at the demo page:
   ```bash
   npm install
   npm test
   npx serve .   # http://localhost:3000/demo/?lang=en&view=day,night,details,editor
   ```
5. Keep the code style (Prettier, print width 160) and open a pull request with a short description and a screenshot.

## New languages / Nové jazyky

Add a new block to `I18N` and `STATE_TEXT`, add it to `LANGUAGES` and extend `resolveLang()` so the language is picked from Home Assistant automatically.

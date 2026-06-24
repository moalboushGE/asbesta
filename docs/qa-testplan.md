# QA-Testplan (Phase 6)

> **Stand:** 2026-06-24 · Beginn Phase 6. Dieser Plan beschreibt die Teststufen, was automatisiert
> abgesichert ist und was manuell/extern bleibt. Automatisierte Tests laufen lokal gegen den
> produktionsnahen Node-Server (`server.mjs`, Port 4321).

## Teststufen

| Stufe | Werkzeug | Befehl | Gate |
|---|---|---|---|
| Statische Qualität | Typecheck + ESLint/SonarJS + Stylelint | `pnpm check` | muss grün |
| Index-Hygiene | Eigenes Skript (Titel/Description/Canonical/JSON-LD) | `node scripts/seo-inventory.mjs` | 0 Probleme |
| Redirects & interne Links | Eigenes Skript gegen laufenden Server | `node scripts/link-redirect-checker.mjs` | 0 Fehler |
| **E2E (kritische Pfade)** | Playwright | `pnpm test:e2e` | alle grün |
| **Barrierefreiheit (axe)** | `@axe-core/playwright` | Teil von `pnpm test:e2e` | 0 critical/serious |

## Automatisiert abgesichert (E2E)

Verzeichnis `e2e/`, Konfiguration `playwright.config.ts` (baseURL `http://localhost:4321`,
Server-Autostart via `webServer`). `pnpm test:e2e` baut zuerst (`astro build`).

- **`navigation.spec.ts`** — alle Hauptnavigations-Ziele (`/`, `/leistungen/`, `/standorte/`,
  `/ratgeber/`, `/wissen/`, `/ueber-uns/`, `/kontakt/`) liefern HTTP 200 und genau eine `<h1>`.
- **`cta.spec.ts`** — Telefon- (`tel:`) und WhatsApp-CTA (`wa.me`) mit korrektem `href` +
  `data-conv`-Tracking-Attribut; Telefon-CTA auch im Mobile-Viewport vorhanden.
- **`contact-form.spec.ts`** — kritischer Pfad „Anfrage absenden":
  - Erfolgsfall: `/api/anfrage/` gemockt → Dank-Block erscheint, Formular wird ersetzt.
  - Validierung: leere Pflichtfelder → echter 400 → sichtbarer Fehlerhinweis.
- **`a11y.spec.ts`** — axe (WCAG 2.0/2.1/2.2 A+AA) auf je einem Repräsentanten pro Seitentyp
  (Start, Leistung-Pillar, Leistung×Stadt, Standort, Ratgeber-Artikel, Kontakt); Assertion:
  keine Verstöße mit impact `critical`/`serious`. Rein dekorative, `aria-hidden`-Elemente
  (faded Watermark-Ziffern) sind ausgenommen.

### In Tag 85 behobene Findings (datengetrieben)
- WCAG 2.5.8 *Target Size*: Footer-Standorte-Links auf ≥24px Zielhöhe (`min-h-6`).
- WCAG 1.4.1 *Use of Color*: Inline-Telefon-/WhatsApp-Links in der Kontaktbox unterstrichen.
- WCAG 1.4.3 *Kontrast*: Ratgeber-Schrittnummern von `red-600` auf `red-700` (≥4,5:1 auf hellem Grund).

## Manuell / extern (noch offen)

| Bereich | Warum manuell/extern | Verortung |
|---|---|---|
| Google **Rich Results Test** der Schema-Typen | nur extern durchführbar; @graph-Smoke-Test (419/419 valide) deckt Syntax ab | Phase 6 |
| **Cross-Browser** Chrome/Firefox/Safari/Edge | reale Engines (E2E läuft auf Chromium) | manuell vor Launch |
| **Reale Geräte** iOS Safari / Android Chrome | Touch/Tap, Sticky-Bars, Tastatur | manuell vor Launch |
| **Screenreader** (NVDA/VoiceOver) | manuelle Bedienprüfung über axe hinaus | manuell vor Launch |
| **Lighthouse-Performance-Gate** (≥95) | kein `lighthouse`-Dep; CWV zuletzt: LCP ~2,5 s, CLS ~0,06 | Phase 6 (CI-Setup) |
| **Recht/Compliance** (Impressum/Datenschutz anwaltlich, RK7-E-Mail) | kundenseitig/juristisch | Tag 87+ |

## Cross-Browser-/Device-Matrix (manuelle Abnahme vor Launch)

| | Chrome | Firefox | Safari | Edge |
|---|---|---|---|---|
| Desktop | ☐ | ☐ | ☐ | ☐ |
| Mobil (iOS/Android) | ☐ | – | ☐ | – |

Prüffokus je Kombination: Navigation/Menü, Sticky-CTA-Bars, Kontaktformular (Absenden +
Validierung), Bild-/Layout-Darstellung, Fokus-/Tastaturbedienung.

## Formular-QA-Fälle

- Pflichtfeld-Validierung (Name, E-Mail, Nachricht, Einwilligung) → Fehlerhinweis.
- Erfolgreiches Absenden → Dank-Block, kein Reload.
- Honeypot (`website`) gefüllt → still verworfen (serverseitig).
- Zeitfalle (`ts` < 3 s) → als Spam markiert, kein Mailversand.
- Danke-/Erfolgszustand ohne Indexierung (kein eigener URL-Wechsel).

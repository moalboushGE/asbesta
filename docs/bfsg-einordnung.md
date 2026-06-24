# BFSG-Einordnung & Barrierefreiheitserklärung – Tag 89

> **Stand:** 2026-06-24. Einordnung, ob die Website dem Barrierefreiheitsstärkungsgesetz (BFSG)
> unterliegt, plus die daraus folgende (freiwillige) Barrierefreiheitserklärung.

## Einordnung

| Kriterium | Befund |
|---|---|
| Art der Website | **Informations-/Lead-Seite mit Kontakt-/Anfrageformular** – kein Shop |
| Verbindlicher Online-Vertragsabschluss / Bezahlung / Buchung | **Nicht vorhanden** (im Code verifiziert: kein Checkout/Payment/Warenkorb; nur Kontaktformular → E-Mail/DB) |
| BFSG-Pflicht (Dienstleistung im elektronischen Geschäftsverkehr) | **Voraussichtlich nicht erfasst**, da kein abschließbarer Online-Vertrag |
| Kleinstunternehmen-Ausnahme (< 10 Beschäftigte UND ≤ 2 Mio. € Umsatz/Bilanz) | **greift voraussichtlich zusätzlich**, sofern die noch zu bestätigenden Kennzahlen zutreffen |

## Entscheidung

WCAG 2.2 AA wird **dennoch umgesetzt** (Zukunftssicherheit, SEO- und Zielgruppenvorteil, Trust/E-E-A-T).
Eine **freiwillige Barrierefreiheitserklärung** ist unter `/barrierefreiheit/` veröffentlicht
(`src/pages/barrierefreiheit.astro`, im Footer verlinkt).

## Offen (Inhaber)

- **Kennzahlen bestätigen**: Beschäftigtenzahl + Jahresumsatz/Bilanzsumme, um die Kleinstunternehmen-
  Einordnung schriftlich zu dokumentieren (Datum, Grundlage).

## Risiko-Trigger

Sobald eine **verbindliche Online-Buchung/Bezahlung** eingebaut würde, kippt die Einordnung →
die BFSG-Pflicht (inkl. formaler Barrierefreiheitserklärung) **vor** jeder solchen Erweiterung neu prüfen.

## Weitere Tag-89-Härtung (verifiziert)

- **Security-Header** (`server.mjs`, Railway = Produktion): HSTS, X-Content-Type-Options `nosniff`,
  X-Frame-Options `DENY`, Referrer-Policy `strict-origin-when-cross-origin`, Permissions-Policy und eine
  CSP (`default-src 'self'`; `script-src 'self'`; `frame-ancestors 'none'`; `object-src 'none'`; bewusst
  gelockert: `style-src 'self' 'unsafe-inline'` für Inline-Styles). Alle im Plan geforderten Header sind vorhanden.
- **Hinweis CSP-Asymmetrie:** `public/_headers` (Cloudflare-Variante) erlaubt zusätzlich
  `static.cloudflareinsights.com`; die strengere Railway-CSP in `server.mjs` nicht. Würde
  `CF_ANALYTICS_TOKEN` jemals auf Railway gesetzt, müsste die `server.mjs`-CSP entsprechend erweitert
  werden, sonst würde sie das Analytics-Beacon (`BaseLayout.astro:133-142`) blockieren.
- **noindex ≠ robots-blockiert**: `robots.txt` sperrt nur `/admin`; noindex-Seiten (404, Datenschutz-
  Entwurf) bleiben crawlbar, damit Suchmaschinen das `noindex` tatsächlich auslesen.

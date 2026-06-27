# public/ — statische Auslieferung

Wird 1:1 unter `/` ausgeliefert (kein Build-Processing).

## Inhalt
- `scripts/` — Vanilla-JS (CSP `script-src 'self'`): `anfrage-form.js` (Formular-Validierung/Versand/Quelle), `conversions.js` (Conversion-Events, analytics-agnostisch), `reveal.js` (Scroll-Reveal), `admin.js` (Admin-Interaktion).
- Icons/Manifest: `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `icon-192/512.png`, `og.png`, `logo.png`, `site.webmanifest`.
- `_headers` / `_redirects` — Cloudflare-Format; auf Railway bildet `server.mjs` Redirects/Header nach (diese Dateien werden dort nicht ausgeliefert).
- `<key>.txt` — IndexNow-Verifikationsdatei. `wartung.html` — Wartungsseite.

## Konventionen
Skripte ohne Build/Bundling, `defer` eingebunden, keine externen Abhängigkeiten. Cache-Header setzt `server.mjs`.

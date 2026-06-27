# src/pages/api/ — On-demand-Endpunkte (`prerender = false`)

Laufen im Node-Server (Railway), nicht statisch.

## Dateien
- `anfrage.ts` — Lead-Eingang (`POST`): Pflichtfeld- + Format-Validierung (E-Mail/Telefon), Spam (Honeypot + Zeitfalle), Lead-Persistierung (`src/lib/leads.ts`), Brevo-Mail (best-effort), anonymes Log. Lead wird auch bei Mail-/DB-Teilfehler gesichert.
- `admin/aktion.ts` — Lead-Status/Notizen ändern (auth-pflichtig).
- `admin/export.csv.ts` — CSV-Export der Leads (auth-pflichtig).

## Konventionen
`export const prerender = false`. `admin/*` ist über `src/middleware.ts` auth-geschützt; `server.mjs` setzt dafür `noindex` + `no-store`. Keine personenbezogenen Daten ins Log.

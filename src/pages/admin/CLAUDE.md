# src/pages/admin/ — internes Lead-Dashboard

Auth-geschützte Verwaltungsoberfläche (AdminLayout, `prerender = false`, noindex).

## Seiten
- `login.astro` — Login (offen); Passwort-Check + signiertes Session-Cookie via `src/lib/admin-auth.ts`.
- `index.astro` — Übersicht/Kennzahlen.
- `anfragen/index.astro` — Lead-Liste (Filter/Suche, CSV-Export). `anfragen/[id].astro` — Lead-Detail (Status, Notizen).

## Konventionen
Schutz durch `src/middleware.ts` (Token-Verify + Origin-Check). UI via `src/components/admin/**`, Daten via `src/lib/leads.ts`. Retention-Sweep wird beim Dashboard-Load angestoßen (max. 1×/24 h).

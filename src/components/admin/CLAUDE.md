# src/components/admin/ — Admin-Dashboard-UI

Interne Lead-Verwaltung (noindex, hinter Auth-Gate).

- `LeadListe.astro` — Tabelle der Anfragen (Status-/Typ-Badge, Quelle, relatives Datum). Props `leads`, `leer?`.
- `StatusBadge.astro` — farbiger Status (via `STATUS_META` aus `src/lib/admin-format.ts`).

## Abhängigkeiten
← `src/lib/admin-format.ts`, `src/lib/leads.ts` (Typ `Lead`). Nur in `src/pages/admin/**` verwendet.

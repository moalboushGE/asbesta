# src/ — Anwendungscode

Astro-Quellcode in Schichten: `data/` (SSOT-Inhalte) → `lib/` (Logik/Builder) → `components/` + `layouts/` (UI) → `pages/` (Routen).

## Lose Dateien
- `middleware.ts` — Auth-Gate für `/admin/**` + `/api/admin/**` (Token-Verify via `lib/admin-auth`) + Origin/CSRF-Check. Geschützte Routen müssen `export const prerender = false` setzen.
- `env.d.ts` — Astro/TypeScript-Ambient-Typen.

## Unterordner (je eigene CLAUDE.md)
`data/` · `lib/` · `components/` · `layouts/` · `pages/` · `styles/` · `assets/`.

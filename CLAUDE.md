# Asbesta Schadstoffsanierung — Website (Astro)

Lokal entwickelte Marketing-/Lead-Website für einen Asbest-/Schadstoffsanierungs-Fachbetrieb
(Sitz Marl, Einzugsgebiet ganz NRW). Deploy bei `git push` auf `main` via Railway.

## Tech-Stack
- **Astro** `output: 'static'` (SSG) + `@astrojs/node` (middleware) — vorgerendertes HTML + on-demand-Routen
- **Express** `server.mjs` (Railway/Nixpacks): Security-Header, Cache-Control, 301-Redirects, trailingSlash, SSR-Delegation
- **Tailwind v4** (`@tailwindcss/vite`); Design-Tokens in `src/styles/global.css`
- **Postgres** (`pg`) für Leads, **Brevo** für Mailversand, **astro-icon** (Lucide)
- Node **≥ 22.12** (`.node-version` = 22), Paketmanager **pnpm**

## Befehle
| Befehl | Zweck |
|---|---|
| `pnpm dev` | Dev-Server (http://localhost:4321) |
| `pnpm build` | Build → `dist/client` (statisch) + `dist/server/entry.mjs` (SSR) |
| `pnpm start` | Prod-Server `node server.mjs` (Railway-Startbefehl) |
| `pnpm check` | CI-Gate: `typecheck` (astro check) + `lint` (eslint) + `stylelint` |
| `pnpm test:e2e` | Build + Playwright (Navigation, Formular, axe-A11y, CTA) |
| `pnpm shoot` | Full-Page-Screenshots über Breakpoints |
| `pnpm seo:inventory` · `seo:links` · `seo:inspection` | SEO-Validatoren (`scripts/`) |
| `pnpm indexnow` | IndexNow-Submission (erst nach Go-Live) |
| `pnpm knip` | ungenutzte Exporte/Dependencies |

## Deploy
Railway baut bei Push auf `main` (`nixpacks.toml`: build `pnpm build`, start `node server.mjs`, Port `$PORT`).
ENV (Railway): `DATABASE_URL`, `BREVO_API_KEY`, `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET`,
`CONTACT_TO` (opt.), `INDEXNOW_KEY` (opt.). CI: `.github/workflows/ci.yml` (typecheck/lint/stylelint/format/build).

## Globale Regeln
- **Schichtentrennung:** Daten (`src/data/`, SSOT) · Logik (`src/lib/`) · UI (`src/components/`, `src/layouts/`).
- **Keine erfundenen Fakten/Preise** (YMYL): nur Belegbares; Asbestverbot-Stichtag **31. Oktober 1993**; TRGS/VDI exakt.
- **Markentokens unantastbar:** Schwarz/Rot/Weiß + Barlow 400/600/900 (`global.css`); keine Hex/px in Komponenten — Tokens nutzen.
- **Datengetrieben:** Seiten via `getStaticPaths` aus `src/data/` (keine Duplikation).
- **CSP:** `script-src 'self'` — nur Vanilla-JS in `public/scripts/`, kein Inline-Script.
- **trailingSlash: always** (301 in `server.mjs`); jede Seite: `BaseLayout` + JSON-LD via `SchemaGraph`.
- ESLint-Budgets (CI): max-lines 300 / max-lines-per-function 80 / cognitive-complexity 15 (Ausnahmen: `src/data/**`, `schema.ts`, `e2e/`).

## Ordnerkarte (Details je `CLAUDE.md`)
`src/data` Inhalte · `src/lib` Logik/Schema/DB/Auth · `src/components` UI · `src/layouts` Shells ·
`src/pages` Routen/Endpunkte · `src/styles` Tokens · `src/assets` Bilder · `public` statisch+Skripte ·
`e2e` Tests · `scripts` Ops/SEO · `docs` Runbooks/ADRs.

## Weiterführend (nicht dupliziert)
`README.md`, `CONTRIBUTING.md`, `MAINTENANCE.md`, `Projekt-Briefing.md`, `100-Tage-Relaunch-Plan.md`,
`docs/` (Launch/Recht/Monitoring) + `docs/adr/` (Architekturentscheidungen).

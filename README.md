# Asbesta Web

Relaunch der Website der **Asbesta Schadstoffsanierung** (Marl, NRW) – Astro (SSG) + Tailwind v4.
Strategie & Vorgaben: siehe [`100-Tage-Relaunch-Plan.md`](./100-Tage-Relaunch-Plan.md) und
[`Projekt-Briefing.md`](./Projekt-Briefing.md).

## Voraussetzungen

- Node 22+, pnpm 10+

## Befehle

| Befehl | Zweck |
|---|---|
| `pnpm dev` | Dev-Server (http://localhost:4321) |
| `pnpm build` | Produktions-Build nach `dist/` |
| `pnpm preview` | Build lokal ausliefern |
| `pnpm check` | Qualitäts-Gates: Typecheck + ESLint + Stylelint |
| `pnpm typecheck` / `lint` / `stylelint` / `knip` | Einzel-Gates |
| `pnpm format` / `format:check` | Prettier |
| `pnpm shoot` | Screenshots (`/`) über alle Breakpoints nach `screenshots/` |

## Screenshot-/Design-Review-Loop

```bash
pnpm build
pnpm preview        # in separatem Terminal
pnpm shoot          # erzeugt screenshots/home-*.png
```

Die PNGs werden gegen die **Design-Integritäts-Charta (Plan Kap. 8.5/8.6)** ausgewertet
(keine „KI-Spuren", Marken-/Token-Konformität, Kontrast, Responsivität). Nach Claude-Code-Neustart
übernehmen die installierten **Chrome-DevTools-/Playwright-MCP-Server** diesen Loop direkt.

## Struktur (Auszug, Kap. 8.1)

```
src/
  pages/        Routing & Seiten-Komposition (dünn)
  data/         strukturierte Daten (SSOT der Inhalte)
  components/   ui | patterns | sections | schema
  layouts/      Seiten-Layouts
  styles/       global.css (Design-Tokens via @theme)
docs/adr/       Architektur-Entscheidungen
scripts/        shoot.mjs (Screenshot-Loop)
```

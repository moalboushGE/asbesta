# scripts/ — Ops- & SEO-Werkzeuge (Node `.mjs`)

Manuelle Hilfsskripte (kein Teil des Site-Builds).

## Skripte
- `seo-inventory.mjs` (`pnpm seo:inventory`) — Index-Hygiene auf `dist/`: unique Title/Description, Canonical, noindex, JSON-LD, Description-Länge.
- `link-redirect-checker.mjs` (`pnpm seo:links`) — Redirects (301→200, keine Ketten) + interne Links (`FULL=1`) gegen den laufenden Server (`BASE`).
- `indexnow-submit.mjs` (`pnpm indexnow`) — reicht Sitemap-URLs bei IndexNow ein (stabiler Key aus `public/<key>.txt`); erst nach Go-Live.
- `gsc-inspection-list.mjs` (`pnpm seo:inspection`) — URL-Liste für die GSC-Prüfung.
- `shoot.mjs` (`pnpm shoot`) — Full-Page-Screenshots über Breakpoints → `screenshots/`.
- `make-brand-assets.mjs` — generiert Marken-/Icon-Assets.

## Konventionen
Lesen meist `dist/` oder den laufenden Server (`BASE`-ENV); Exit-Code 1 bei Problemen (CI-tauglich).

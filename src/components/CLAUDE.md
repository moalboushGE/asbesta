# src/components/ — UI-Bausteine (Astro)

27 Komponenten in fünf Kategorien (je eigene CLAUDE.md): `ui/` (atomar), `patterns/` (wiederkehrende Layout-Teile), `sections/` (Seitenabschnitte), `schema/` (JSON-LD), `admin/` (Dashboard).

## Geteilte Konventionen
- `readonly interface Props` + JSDoc; Destrukturierung via `Astro.props`.
- Icons via `astro-icon` (`<Icon name="lucide:…">`); Bilder ausschließlich via `ui/Figure.astro`.
- Tokens aus `src/styles/global.css` / Tailwind — keine rohen Werte. Dekoratives `aria-hidden`, Icon-Buttons mit `aria-label`.
- JS-Hooks als `data-*` (z. B. `data-anfrage-form`, `data-conv`); Logik in `public/scripts/`. Scroll-Reveal: Klasse `reveal` + `--reveal-delay`.

## ESLint-Budgets (CI-Gate)
max-lines 300 · max-lines-per-function 80 · max-depth 4 · max-params 4 · cognitive-complexity 15.

## Abhängigkeiten
← `src/data/**`, `src/lib/{schema,related,admin-format}`, `astro-icon`, `astro:assets`.

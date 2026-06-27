# src/components/ui/ — atomare UI-Bausteine

## Komponenten
- `Button.astro` — Props `href`, `variant?` (`'primary'|'emergency'|'ghost'|'dark-outline'`), `class?`; `min-h-11` (≥ 44px Tap-Target), Marken-Fokusring, `rounded-full`.
- `Figure.astro` — `astro:assets`-Wrapper: festes `aspect` (CLS-sicher), WebP quality 62, responsive `widths`, `priority` (LCP → eager + fetchpriority). Props `src` (ImageMetadata), `alt`, `aspect?`, `sizes?`, `priority?`, `widths?`, `rounded?`.
- `Callout.astro` — `variant?` (`'hinweis'|'tipp'|'warnung'`), `title?`.
- `Logo.astro`, `GoogleG.astro` — SVG-Marken-/Icon-Bausteine.

## Konventionen
`readonly`-Props + JSDoc. Bilder NUR über `Figure` (nie rohes `<img>`). Tokens/Tailwind, keine rohen Werte.

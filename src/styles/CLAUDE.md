# src/styles/ — Design-System (Tailwind v4)

Einzige globale Stylesheet-Quelle; Marken-Tokens als Single Source of Truth.

## global.css
- `@theme`-Tokens: Marken-Farben (`--color-red-*`, `--color-ink-*`, `--color-signal-*`, gray, Semantik), `--font-sans`/`--font-display` (Barlow), `--radius-btn`/`--radius-card`.
- `@font-face 'Barlow Fallback'` (Arial-Metriken via `size-adjust`/`ascent`/`descent-override`) gegen Font-Swap-CLS; `font-synthesis-weight: none`.
- Schnitt-Remap (nur 400/600/900 geladen): `.font-medium`→600, `.font-bold`→600, `.font-extrabold`→900.
- Sichtbarer Fokus (`:focus-visible` 3px rot, inkl. `summary`), `prefers-reduced-motion`, `.reveal` (Scroll-Animation), `.cv-auto` (content-visibility), `@utility shadow-soft`/`shadow-soft-red`, `input[aria-invalid]`.

## Konventionen
Keine rohen Hex-/px-Werte in Komponenten — Tokens/Tailwind-Utilities nutzen. Fonts self-hosted (kein externes CDN).

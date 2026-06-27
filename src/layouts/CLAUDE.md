# src/layouts/ — Seiten-Shells

HTML-Grundgerüste; setzen Fonts, SEO-Meta und den JSON-LD-Slot.

## Dateien
- `BaseLayout.astro` — zentrale Shell: self-hostete Barlow-@font-face (400/600/900, `font-display: optional`, CLS-stabil), Meta (canonical/OG/Twitter/robots), Header/Footer + CTA-Bars, `<slot name="head">` (für SchemaGraph). Props: `title`, `description`, `noindex?`, `ogType?`, `ogImage?`, `article*?`.
- `RatgeberArticleLayout.astro` — Ratgeber-Beitrag: `buildArticleGraph` (inkl. `ratgeberEntities`), Breadcrumb, Hero, TOC, Quellen, verwandte Leistungen/Ratgeber; reicht `ogImage={heroOg}` durch.
- `LegalLayout.astro` — Rechtstexte; Prop `draft` → `noindex` (Datenschutz-Entwurf).
- `AdminLayout.astro` — schlanke Admin-Shell (noindex, kein Tracking); Admin-Seiten `prerender = false`.

## Konventionen
canonical aus `Astro.url.pathname` + origin-Fallback. Marketing → BaseLayout · Recht → LegalLayout · Admin → AdminLayout.

## Abhängigkeiten
← `src/lib/schema.ts`, `src/components/**`, `src/data/site.ts`. RatgeberArticleLayout ← `src/data/ratgeber.ts` + `src/lib/related.ts`.

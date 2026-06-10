# ADR 0001 – Tech-Stack & Architektur

- **Status:** akzeptiert (2026-06-10)
- **Bezug:** 100-Tage-Plan Kap. 8.1, 9.5

## Kontext

Relaunch von asbesta-schadstoffsanierung.de mit den Zielen: beste Google-Indexierung,
Top-Core-Web-Vitals, starke SEO/GEO, einfache Pflege, langfristige Erweiterbarkeit.

## Entscheidung

- **Astro (SSG)** als Framework – reines HTML, minimales JS, Islands nur bei echter Interaktivität.
- **Tailwind v4** mit Design-Tokens (`@theme` in `src/styles/global.css`) als Single Source of Truth.
- **Selbst gehostete Fonts** (`@fontsource-variable/*`): Inter (Body), Fraunces (Display) – DSGVO + Performance.
- **astro-icon + Lucide** für ein einheitliches Outline-Icon-Set (keine Emojis).
- **Schichtentrennung** nach Kap. 8.1: `pages` (dünn) · `data`/`content` (Daten) · `lib` (Logik) ·
  `components/{ui,patterns,sections,schema}` (Präsentation).
- **Hosting:** Cloudflare Pages (folgt in späterem Increment).

## Konsequenzen

- Datengetriebene Seiten (`getStaticPaths`) statt Copy-Paste – Erweiterbarkeit gesichert.
- Quelloffene, abo-freie Basis; spätere CMS-Anbindung (Sveltia/Decap) ohne Lock-in möglich.
- Komplexitäts-/Größen-Budgets (Kap. 8.2) via ESLint/SonarJS erzwungen.

## Alternativen

- **Next.js** – verworfen: kein dynamischer App-Teil nötig, mehr JS-Overhead.
- **WordPress** – verworfen: Performance-/Wartungslast, Alt-System war Ursache des Relaunches.

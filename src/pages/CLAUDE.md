# src/pages/ — Routen & Endpunkte (Datei-Routing)

Statische Seiten werden vorgerendert; on-demand-Routen (`prerender = false`) laufen im Node-Server.

## Inhaltsseiten
- Statisch: `index`, `kontakt`, `ueber-uns`, `barrierefreiheit`, `impressum`/`datenschutz` (LegalLayout), `404`.
- Übersichten + dynamische Detailrouten (je `getStaticPaths` aus `src/data/`):
  `leistungen/[slug]`, `leistungen/[leistung]/[stadt]` (Kombi), `standorte/[stadt]`, `ratgeber/[slug]`, `wissen/index`.
- `ratgeber/asbest-*.astro` — vier handgebaute Beiträge neben der dynamischen `[slug]`-Route.

## GEO-/Maschinen-Endpunkte (`.ts`)
`facts.json.ts`, `entities.json.ts`, `llms.txt.ts`, `llms-full.txt.ts`, `robots.txt.ts`, `og.png.ts`.

## Konventionen
- trailingSlash always; jede Inhaltsseite: `BaseLayout` + `SchemaGraph` (passender @graph) + canonical.
- `noindex` über Layout-Prop (Recht/404). Neue Seiten datengetrieben statt dupliziert.
- Unterordner `api/` und `admin/` → eigene CLAUDE.md.

## Abhängigkeiten
← `src/data/**`, `src/layouts/**`, `src/components/**`, `src/lib/{schema,related}`.

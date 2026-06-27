# src/components/schema/ — JSON-LD-Ausgabe

- `SchemaGraph.astro` — rendert ein `graph`-Array (gebaut in `src/lib/schema.ts`) als `<script type="application/ld+json">` mit `@context`/`@graph`. Einbindung im Layout über `slot="head"`. Prop: `graph` (readonly unknown[]).

# src/lib/ — Logik, Schema, DB, Auth

Framework-freie Geschäftslogik und Builder; aus Daten (`src/data`) + Laufzeit (Postgres) gespeist.

## Dateien
- `schema.ts` — JSON-LD-@graph-Builder je Seitentyp (`buildHomeGraph`/`buildBasicPageGraph`/`buildCollectionGraph`/`buildServiceGraph`/`buildLocationGraph`/`buildServiceLocationGraph`/`buildArticleGraph`/`buildWissenGraph`/`buildEntitiesGraph`); Knoten-Helper (organization/person/faq/howTo/breadcrumb/definedTerm/regulation/`entityRefs`); IDs `ORG_ID`/`PERSON_ID`/`TERMSET_ID`; `slugifyTerm`/`termId`/`regulationId`.
- `related.ts` — interne Verlinkung: exportiert `RATGEBER_MAP`/`RATGEBER_RELATED`/`DEFAULT_RATGEBER` + die Helper `ratgeberFuer`/`verwandteRatgeber`/`leistungenFuerRatgeber`/`ratgeberEntities`/`leistungEntities` (Letztere kapseln die internen Entity-Maps für about/mentions).
- `leads.ts` — Lead-CRUD (Postgres), Status-Enum, `retentionSweep` (DSGVO-Löschfristen); alle Queries parametrisiert.
- `db.ts` — pg-Pool (lazy, Railway-SSL-Logik) + idempotentes Schema (advisory lock).
- `admin-auth.ts` — timing-safe Passwort-Check + signiertes HMAC-Session-Cookie (12 h), `hashIp`.
- `origin.ts` — Origin-Auflösung für absolute URLs. `config.ts` — Build-Config (`CF_ANALYTICS_TOKEN`). `admin-format.ts` — Admin-UI-Formatierung (`STATUS_META`).

## Konventionen
- Nur reale `definitionen[].term` / `regelwerke[].code` referenzieren (`entityRefs` filtert).
- Secrets nur aus ENV; keine String-Interpolation von Nutzereingaben in SQL.

## Abhängigkeiten
`schema.ts`/`related.ts` ← `src/data`, genutzt von `src/layouts` + `src/pages`.
`leads.ts` → `db.ts`, genutzt von `src/pages/api/**` + `src/pages/admin/**`. `admin-auth.ts` ← `src/middleware.ts`.

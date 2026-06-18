# Pflege-Handbuch (Agentur)

Die Website wird **ohne CMS** über das Git-Repo gepflegt (siehe `docs/adr/0003-keine-cms-pflege.md`).
Alle Inhalte liegen als typisierte Daten-Dateien (Single Source of Truth). Nach jeder Änderung:
`pnpm check` (muss grün sein) → committen → deployen.

## Wo liegt welcher Inhalt?

| Inhalt | Datei |
|---|---|
| Firmenstammdaten (NAP, Claim, Nav, Zertifikate) | `src/data/site.ts` |
| Leistungen (Liste/Icons) | `src/data/leistungen.ts` |
| Leistungs-Detailtexte | `src/data/leistungen-detail.ts` |
| Standorte (Liste/Nachbarn) | `src/data/standorte.ts` |
| Standort-Detailtexte | `src/data/standorte-detail.ts` |
| Startseiten-Bausteine (Ablauf, Bewertungen) | `src/data/inhalte.ts` |
| Bilder (Zuordnung + Alt-Text + Lizenz) | `src/data/images.ts` |
| Design-Tokens (Farben/Typo) | `src/styles/global.css` |
| Rechtstexte | `src/pages/impressum.astro`, `src/pages/datenschutz.astro` |

## Typische Aufgaben

- **Text/FAQ/Preis-Hinweis ändern:** entsprechende Daten-Datei bearbeiten.
- **Neue Stadt:** Eintrag in `src/data/standorte.ts` + Detail-Objekt in `src/data/standorte-detail.ts`
  (vollständiger Unique-Content, sonst greift das Index-Gate → `noindex`).
- **Neue Leistung:** Eintrag in `src/data/leistungen.ts` (+ Lucide-Icon) + Detail in `src/data/leistungen-detail.ts`.
- **Neue Bewertung:** `src/data/inhalte.ts`.

## Bilder pflegen / austauschen

Alle Fotos liegen unter `src/assets/images/` (Unterordner `hero/`, `ablauf/`, `leistungen/`,
`allgemein/`) und werden zentral in `src/data/images.ts` zugeordnet (Bild, `alt`-Text, `credit`).
Astro optimiert sie beim Build automatisch zu AVIF/WebP in mehreren Größen.

- **Aktuelle Quelle/Lizenz:** kuratierte Profi-Fotos von **Pexels** (Pexels-Lizenz: kommerzielle
  Nutzung ohne Attributionspflicht). Quelle je Bild steht im `credit`-Feld in `images.ts`.
- **Echtes Projektfoto einsetzen:** Datei im passenden Unterordner ersetzen (gleicher Dateiname →
  keine Code-Änderung nötig) **oder** neue Datei ablegen und den Import/`alt`/`credit` in
  `images.ts` anpassen. Empfohlen: Querformat, mind. ~1600 px Breite, JPEG.
- **Komponente:** `src/components/ui/Figure.astro` (festes Seitenverhältnis = CLS-sicher,
  `object-cover`, `priority` nur für das Hero-/LCP-Bild). `alt` immer aussagekräftig auf Deutsch.
- **Empfehlung:** echte Baustellen-/Team-/Vorher-Nachher-Fotos liefern den stärksten
  Authentizitäts- und E-E-A-T-Effekt – Stockbilder nach und nach ersetzen.

### Foto-Shot-Liste für echte Fotos (Phase 2 – höchste Priorität zuerst)

Querformat, mind. ~1600 px, gutes Licht. Bestehende Datei mit **gleichem Namen** ersetzen → kein Code-Eingriff.

1. **Team-Porträt** (`allgemein/ueber-uns.jpg`) – das Team in Firmenkleidung. *Wichtigster Austausch* (aktuell nur generisches Stock).
2. **Sanierung im weißen Schutzanzug** (`hero/sanierung.jpg`, `ablauf/04-sanierung.jpg`, `leistungen/asbestsanierung.jpg`) – echte Person im Tyvek-Anzug + P3-Maske im abgeschotteten Bereich.
3. **Welleternit-Dachabbau** (`leistungen/welleternit-ausbauen.jpg`, `allgemein/stadt-2.jpg`).
4. **Boden: Floor-Flex / schwarzer Kleber** (`leistungen/floor-flex-entfernen.jpg`, `bitumenkleber-entfernen.jpg`, `ratgeber/boden.jpg`).
5. **Materialprobe / Luftmessung** (`leistungen/materialanalyse.jpg`, `luftanalysen-vdi-3492.jpg`).
6. **Abgeschotteter Schwarzbereich / Schleuse** + **Big-Bag-Entsorgung** (`ablauf/02-besichtigung.jpg`, `05-uebergabe.jpg`).
7. **Vorher/Nachher**, **Fuhrpark/Firmenschild**.

**Bildregel (Pflicht):** keine asiatischen Motive, keine Fremdmarken/-logos/-flaggen, kein fremdsprachiger Text – jedes Bild vor Einsatz in voller Größe prüfen.

### Qualifikationsnachweise des Inhabers

Die Über-uns-Seite (Sektion „Qualifikationen des Inhabers") und das Person-/`hasCredential`-Schema
werden aus **`src/data/site.ts`** gespeist (`owner` + `qualifikationen`). Neue/erneuerte Nachweise:

1. Scan retuschieren (Geburtsdatum/-ort schwärzen!) und als JPG unter
   `src/assets/images/zertifizierungen/<slug>.jpg` ablegen.
2. In `src/data/images.ts` (`zertifikatImages`) Import + Eintrag ergänzen.
3. In `src/data/site.ts` (`qualifikationen`) Titel/Aussteller/Gültigkeit + `images: ['<slug>']` pflegen.

UI, JSON-LD (Person + EducationalOccupationalCredential), `/facts.json` und `/entities.json` greifen
automatisch. **Wichtig:** Die unretuschierten Original-Scans (`zerzifizeirung/`) sind per `.gitignore`
ausgeschlossen – nie versionieren (personenbezogene Daten).

## Befehle

```bash
pnpm dev      # lokale Vorschau (http://localhost:4321)
pnpm check    # Typecheck + ESLint/SonarJS + Stylelint (vor jedem Commit)
pnpm build    # Produktions-Build
pnpm shoot    # Screenshots (SHOOT_ROUTES=/pfad/ node scripts/shoot.mjs)
```

## Deploy-Konfiguration (Cloudflare Pages)

- Build-Befehl: `pnpm build`, Output: `dist`.
- ENV/Secrets: `BREVO_API_KEY` (Kontaktformular, Pflicht), `CONTACT_TO` (optional, Standard: info@asbesta-schadstoffsanierung.de), `CF_ANALYTICS_TOKEN` (in `src/lib/config.ts`). Absenderadresse `anfrage@asbesta-schadstoffsanierung.de` muss in Brevo verifiziert sein (SPF/DKIM).
- `functions/` wird von Cloudflare Pages automatisch als Pages Functions deployt.

## Laufende Pflege (Empfehlung)

Quartalsweiser Content-Refresh (Aktualität/E-E-A-T), jährliche Normen-Prüfung (TRGS/GefStoffV),
Google-Business-Profil & Bewertungen pflegen, GSC-Monitoring.

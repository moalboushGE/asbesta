# Projekt-Briefing (verbindliche Entscheidungsgrundlage)

> Konsolidierte Faktenbasis & gesperrte Entscheidungen aus der Recherchephase. Referenz zum 100-Tage-Plan.
>
> **Ergaenzung 2026-06-10:** Der Plan enthaelt zusaetzlich eine verbindliche **Engineering- & Qualitaets-Charta (Kapitel 8)** - erweiterbarer/wartbarer Code (Schichtentrennung, Tokens als Single Source of Truth), messbare Anti-God-Component-Budgets, automatisierte CI-Qualitaets-Gates sowie eine **Design-Integritaets-Charta gegen "AI-Slop"** mit Pflicht-Review je Komponente (Chrome DevTools/Playwright MCP).

# Verbindliches Projekt-Briefing: Asbesta Schadstoffsanierung – Relaunch

**Status: Lead-Architekt-Entscheidung – GESPERRT. Verbindlich fuer alle nachgelagerten Autoren, Designer und Entwickler.**
Stand: 2026-06-10 · Sprache der Website: ausschliesslich Deutsch · Team: 5 Senioren / 100 Arbeitstage

---

## 0. Leitplanken vorab (nicht verhandelbar)

- **Qualitaet vor Volumen.** Die Alt-SEO (WordPress, ~1.960 Thin-Content-Massenseiten) wird vollstaendig verworfen. Neue Strategie = einzigartiger Inhalt mit echtem lokalem und fachlichem Mehrwert.
- **YMYL-Bewusstsein.** Asbest = Gesundheit + Sicherheit. Google bewertet jede Seite mit erhoehter Prueftiefe. E-E-A-T (besonders Trust) ist Pflicht, kein Bonus.
- **Domain-Entscheidung.** Wir behalten/migrieren auf eine kanonische Domain `asbesta-schadstoffsanierung.de` (mit 301-Weiterleitung der www- auf die nicht-www-Variante oder umgekehrt – **eine** Variante festlegen, hier: `https://www.asbesta-schadstoffsanierung.de/` als kanonisch). Alle Alt-URLs der ~1.960 Seiten erhalten saubere 301-Redirects auf das naechstbeste neue Ziel oder (falls kein Ziel) 410.
- **E-Mail vor Launch verifizieren.** `kontakt@alboush-elektro.de` ist Projektkontext; die kundenseitig oeffentliche Adresse muss vor Launch final geklaert und konsistent in NAP, Impressum und Schema gefuehrt werden.

---

## 1. Tech-Stack-Entscheidung & Referenzarchitektur

### Entscheidung (gesperrt): **Astro (SSG) + Git-basiertes/Headless-CMS auf Cloudflare Pages.**

**Begruendung (kurz):** Indexierung, Core Web Vitals und SEO-Kontrolle sind gekoppelt – und genau das ist Astros Kern. Astro liefert standardmaessig reines HTML ohne JS (Islands-Architektur, Benchmark ~9 KB vs. ~463 KB bei vergleichbaren Next.js-Seiten). Das ergibt das beste Ranking- und GEO-Fundament, weil Google 2026 bestaetigt hat, dass AI-Suche (AI Overviews/AI Mode) auf denselben Ranking-/Qualitaetssystemen wie die klassische Suche laeuft – beste klassische SEO + Top-Performance = beste GEO-Sichtbarkeit. Astro skaliert erprobt auf 10.000+ Seiten (Content Collections, Dynamic Routes via `getStaticPaths`), gibt volle `<head>`-Kontrolle (JSON-LD, Canonical, Sitemap-Index) ohne Plugin-Konflikte und ist auf Cloudflare Pages mit unlimitierter Bandbreite quasi kostenlos zu hosten. **Next.js** bleibt zweitbeste Wahl, ist aber nur bei einem nennenswerten dynamischen App-Teil (Kundenportal o.ae.) zu erwaegen – den haben wir nicht. **WordPress** ist verworfen (Bloat, Plugin-Konflikte, schwaecheres Fundament, laufende Security-Last).

### Referenzarchitektur (verbindlich)

| Baustein | Festlegung | Begruendung |
|---|---|---|
| **Framework** | Astro 6+ (SSG, Content Collections, MDX) | Reines HTML, beste CWV, Skalierung, schnelle Builds |
| **CMS** | **Sveltia oder Decap (Git-based)** als Standard fuer lokal pflegbare Redaktion ohne Abo-Lock-in. Storyblok nur, falls der Kunde echten Visual-Editor mit Live-Preview fordert | Lokal pflegbar, versionierbar, keine laufenden Kosten; passt zur Vorgabe „lokal pflegbar via Git-/Headless-CMS" |
| **Programmatic Landingpages** | Astro Dynamic Routes `[leistung]-[stadt].astro` aus einer Datentabelle (Stadt × Leistung), mit harter Index-Gate-Logik (s. Abschnitt 6) | Premium-Unique-Content fuer 9 Staedte + skalierbares Qualitaets-Template |
| **Bild-CDN** | Cloudflare Images (Fallback: Astro `<Image>`/`<Picture>` + Sharp lokal) | AVIF/WebP, responsive srcset, keine Egress-Kosten im Cloudflare-Stack |
| **Hosting** | Cloudflare Pages | Unlimitierte Bandbreite, kommerzielle Free-Tier-Nutzung, globales Netz |
| **Analytics** | Plausible (EU-hosted) oder Umami – cookieless, DSGVO-konform, kein Cookie-Banner noetig | Hoehere Datenqualitaet, rechtssicher |
| **Forms** | Formspree (Start) oder Formgrid (Open-Source, self-host, DSGVO) | Statische Site braucht externes Form-Backend; EU-Datenhoheit |
| **Suche** | Pagefind (`astro-pagefind`) | Vollstaendig client-seitig, indexiert Build-Output, kein Server/DB |
| **Schriften** | Inter (WOFF2, selbst gehostet, `font-display:swap`) | DSGVO (keine Google-Fonts-CDN) + Performance |

---

## 2. Design-/Marken-Leitplanken

**Markenversprechen:** Sicherheit, Sauberkeit, Seriositaet. Jede Entscheidung dient diesen Werten + Conversion (Anruf/WhatsApp/Anfrage).

### 2.1 Farbpalette (gesperrte Hex-Werte, WCAG 2.2 AA)

Primaerfarbe ist Gruen (Logo-Bezug = Sicherheit/Freigabe). Akzent ist warmes Orange ausschliesslich fuer Notfall/CTA.

**Brand-Gruen:** `green-50 #ECFDF3` · `green-100 #D1FADF` · `green-300 #6CE9A6` · `green-500 #16A34A` (Logo/Marken-Erkennung, **nie kleiner Fliesstext**) · `green-600 #15803D` (Text/Links/Button-Default auf Weiss, 4.54:1) · `green-700 #0F6E37` (Hover) · `green-800 #0A5128` (Aktiv).

**Ink/Dunkel (Header/Footer/Overlays, Seriositaet):** `ink-900 #0B2027` · `ink-800 #12313C` · `ink-700 #1E4A57`.

**Signal/Notfall (sparsam, max. 1 dominantes Signal/Viewport):** `signal-100 #FDEBD8` · `signal-500 #EA6A12` (nur Grosstext/UI) · `signal-600 #C2540A` (Notfall-Button mit weissem Text, 5.0:1).

**Neutral:** `white #FFFFFF` · `gray-50 #F7F9F8` · `gray-100 #EEF1F0` · `gray-200 #DDE3E1` (nur dekorative Linien) · `gray-400 #9AA6A2` (funktionale Borders, ≥3:1) · `gray-500 #6B7873` (Sekundaertext) · `gray-700 #3A4742` (**Fliesstext-Standard**) · `gray-900 #172420` (Headlines).

**Semantik (nie Farbe allein – immer Icon+Text):** `success #15803D` · `warning #B45309` · `danger #B42318` · `info #175CD3`.

**Regel 60/30/10:** 60 % Neutral, 30 % Gruen+Ink, 10 % Signal-Orange. Buttongruen trägt **immer weissen** Text.

### 2.2 Typografie

- **Schrift:** Inter (Headline + Body, selbst gehostet, Schnitte 400/500/600/700), optional Source Serif 4 fuer Kundenzitate. Subsetting auf latin + latin-ext (ä/ö/ü/ß). Preload des Hauptschnitts.
- **Skala (Basis 18 px Fliesstext, Faktor ~1.25):** display 56/36 · h1 44/30 · h2 32/26 · h3 24/22 · body 18/16 (line-height 1.65) · small 16/15 · legal 14.
- **Lesbarkeit:** Zeilenlaenge `max-width: 70ch` (~720 px), linksbuendig (kein Blocksatz), Headlines `letter-spacing: -0.01em`.

### 2.3 Logo-Highlighting (konsequent, Kundenvorgabe)

Logo prominent in **Header, Footer, OG-Images, Favicon** (16/32/180/512 px), optional Watermark auf Projektfotos. Schutzzone = Hoehe des Signets rundum. Mindesthoehe ≥ 32 px im Web. Auf hell: Originalgruen; auf `ink-900`/Foto: weisse Negativ-Variante mit gruenem Akzent, nur ueber ruhiger Flaeche/Overlay. Verbote: verzerren, neu einfaerben, Schlagschatten, Gruen auf Gruen.

### 2.4 Bildsprache

Echte, dokumentarische Projektfotos (Vorher/Nachher-Slider, PSA/Vollschutz, Schwarz-Weiss-Schleuse/Unterdruck, Probenahme, fachgerechte Entsorgung mit Big Bags, Team-Portraits) **plus** lizenzierte, optimierte Stockfotos als Ergaenzung. Keine angstmachenden Reisser-Bilder – Kompetenz statt Angst. Leicht kuehl-neutrale Farbstimmung mit dezentem Gruen-Hauch. Format AVIF/WebP, responsive `srcset`, `loading="lazy"` (ausser Hero), beschreibende `alt`-Texte. Icons: lineares Outline-Set (Lucide/Phosphor), `green-600`/`ink-700`.

### 2.5 Layout-Tokens

12-Spalten-Grid, max. 1200 px; Lesetext-Container 720 px. Spacing-Skala 4/8/12/16/24/32/48/64/96/128. Sektionsrhythmus 96 px Desktop / 64 px Mobile. Radius: Buttons/Inputs 12 px, Karten 16 px, Pill nur Badges. Schatten weich (`0 8px 24px rgba(11,32,39,.08)`), nie hart/farbig. Sticky Anruf-/WhatsApp-Leiste mobil (Tap-Target ≥ 44 px). Alle Tokens als CSS Custom Properties / Tailwind-Config uebernehmen.

---

## 3. SEO-Architektur-Prinzipien & Indexierungsregeln

### 3.1 URL- & Hub-Struktur (gesperrt)

- **Leistungs-Hub:** `/leistungen/` → 13 Leistungs-Pillar-Seiten `/leistungen/[leistung]/`.
- **Standort-Hub:** `/standorte/` → Stadt-Uebersichtsseiten `/standorte/[stadt]/`.
- **Spoke (Leistung × Stadt):** `/leistungen/[leistung]/[stadt]/` – nur fuer indexwuerdige Kombinationen.
- **Ratgeber:** `/ratgeber/[slug]/`. **Hauptseiten:** `/`, `/firma`, `/bewertungen`, `/kontakt`, `/impressum`, `/datenschutz`.
- Jeder Spoke verlinkt zurueck zu beiden Hubs **und** auf 2–3 geografische Nachbarstaedte (kontextuelle Links, aussagekraeftige Anker, **keine** versteckte 80er-Footer-Linkliste = Doorway-Tell).

### 3.2 Harte Indexierungsregeln

- **Indexierbar ≠ ranking-faehig** – zwei Huerden. Technische Hygiene ist Basis, nicht Ziel.
- **Mobile-First**, HTTPS Pflicht, 200-Status, kein Orphan (≥ 1 interner Link pro Seite).
- **Self-referencing Canonical**; Canonical und `noindex` **nie mischen** (ein klares Signal pro Seite).
- **XML-Sitemap** nur kanonische, indexierbare URLs – nie `noindex`-Seiten, keine Redirects/404. Bei >50.000 URLs splitten + Sitemap-Index (`@astrojs/sitemap`). In `robots.txt` explizit deklarieren.
- **`noindex,follow`** fuer duenne Seiten (Danke-/Login-Seiten, schwache Stadtkombinationen, interne Suche). `noindex`-Seiten crawlbar lassen (nicht zusaetzlich in robots.txt sperren).
- **IndexNow** nur fuer Bing/Yandex etc. nutzbar (Google ignoriert es). Google-Indexing-API **nicht** fuer unsere Seitentypen zugelassen → Weg: saubere Sitemap + interne Verlinkung + starke E-E-A-T-Signale + GSC-Monitoring.
- **GSC quartalsweise**: „Crawled – currently not indexed" / „Discovered – not indexed" = Googles Urteil „zu duenn" → anreichern oder `noindex`.

---

## 4. GEO/AI-Vorgaben (Formate + Beispiele)

Realistische Einordnung: `llms.txt` & Co. sind **Bonus-Signale**, kein Ersatz fuer sauberes HTML + Schema. Wir bauen sie trotzdem – nuetzlich fuer AI-Crawler UND Entwickler. Alle Dateien im Root, UTF-8, `Content-Type: text/plain` bzw. `application/json`, in `robots.txt`/`llms.txt` verlinkt.

### 4.1 `/llms.txt` (Index-Landkarte, Markdown)

```markdown
# Asbesta Schadstoffsanierung

> Inhabergefuehrter Fachbetrieb fuer Asbest- und Schadstoffsanierung aus Marl
> fuer ganz NRW. Zertifiziert nach TRGS 519/521/524. Alles aus einer Hand:
> Gutachten, Sanierung, Entsorgung, Freimessung. Rueckmeldung innerhalb 24 h.

## Leistungen
- [Asbestsanierung TRGS 519](https://www.asbesta-schadstoffsanierung.de/leistungen/asbestsanierung/): Zertifizierte Sanierung mit Schwarz-Weiss-Schleuse und Unterdruck.
- [Floor-Flex-Platten entfernen](https://www.asbesta-schadstoffsanierung.de/leistungen/floorflex-entfernen/): Sichere Entfernung von Floor-Flex und Kleber.
- [Welleternit/Wellasbest ausbauen](https://www.asbesta-schadstoffsanierung.de/leistungen/welleternit-ausbauen/): Ausbau asbesthaltiger Dachplatten.
- [KMF-Sanierung](https://www.asbesta-schadstoffsanierung.de/leistungen/kmf-sanierung/): Fachgerechte Entfernung kuenstlicher Mineralfasern.
- [Luftanalysen VDI 3492](https://www.asbesta-schadstoffsanierung.de/leistungen/luftanalysen/): Raumluftmessung und Freimessung.

## Standorte
- [Asbestsanierung Marl](https://www.asbesta-schadstoffsanierung.de/standorte/marl/): Hauptstandort und Einsatzgebiet.
- [Asbestsanierung Essen](https://www.asbesta-schadstoffsanierung.de/standorte/essen/): Leistungen, Anfahrt, Referenzen.

## Ratgeber
- [Floor-Flex-Platten erkennen](https://www.asbesta-schadstoffsanierung.de/ratgeber/floor-flex-erkennen/): Bilder, Groessen, Baujahr.
- [Asbestsanierung Kosten](https://www.asbesta-schadstoffsanierung.de/ratgeber/asbestsanierung-kosten/): Preisfaktoren je Material, Beispielrechnung.

## Maschinenlesbare Fakten
- [facts.json](https://www.asbesta-schadstoffsanierung.de/facts.json): Firmenfakten (NAP, Leistungen, Einsatzgebiet).
- [entities.json](https://www.asbesta-schadstoffsanierung.de/entities.json): Entitaeten und sameAs-Verknuepfungen.

## Optional
- [Firma](https://www.asbesta-schadstoffsanierung.de/firma): Geschichte, Zertifikate, Team.
- [Impressum](https://www.asbesta-schadstoffsanierung.de/impressum)
```

### 4.2 `/llms-full.txt` (Volltext der Kernseiten)

Eine Markdown-Datei; pro Kernseite ein H2-Block mit Quell-URL und **„Stand: JJJJ-MM-TT"** (Aktualitaet zaehlt fuer Perplexity).

```markdown
# Asbesta Schadstoffsanierung — Vollstaendige Inhalte
> Konsolidierter Volltext der Kernseiten. Stand: 2026-06-10.

---
## Asbestsanierung nach TRGS 519
Quelle: https://www.asbesta-schadstoffsanierung.de/leistungen/asbestsanierung/
Stand: 2026-06-01

Asbesta saniert asbesthaltige Bauteile zertifiziert nach TRGS 519 ...
### Ablauf
1. Anfrage (Rueckmeldung unter 24 h) ...
```

### 4.3 `/facts.json` (JSON-LD-kompatibel)

```json
{
  "@context": "https://schema.org",
  "@type": ["Organization", "HomeAndConstructionBusiness"],
  "@id": "https://www.asbesta-schadstoffsanierung.de/#organization",
  "name": "Asbesta Schadstoffsanierung",
  "description": "Fachbetrieb fuer Asbest- und Schadstoffsanierung aus Marl fuer ganz NRW. Zertifiziert nach TRGS 519/521/524.",
  "url": "https://www.asbesta-schadstoffsanierung.de",
  "telephone": "+49-2365-2960630",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Venusweg 24",
    "addressLocality": "Marl",
    "postalCode": "45770",
    "addressRegion": "Nordrhein-Westfalen",
    "addressCountry": "DE"
  },
  "areaServed": [
    { "@type": "City", "name": "Marl" },
    { "@type": "City", "name": "Essen" },
    { "@type": "GeoCircle",
      "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 51.6566, "longitude": 7.0900 },
      "geoRadius": "60000" }
  ],
  "knowsAbout": ["Asbestsanierung", "TRGS 519", "KMF-Sanierung", "PAK-Sanierung", "Floor-Flex"],
  "_meta": {
    "version": "1.0",
    "lastUpdated": "2026-06-10",
    "note": "Maschinenlesbare Firmenfakten. Kein erfundenes aggregateRating."
  }
}
```

**Regel:** `aggregateRating` nur mit echten, first-party sichtbaren Bewertungen befuellen (sonst Policy-Verstoss). `geo`/Telefon/Mail vor Launch verifizieren.

### 4.4 `/entities.json` (Entity-Graph)

```json
{
  "schemaVersion": "1.0",
  "generatedAt": "2026-06-10",
  "primaryEntity": "https://www.asbesta-schadstoffsanierung.de/#organization",
  "entities": [
    { "@id": "https://www.asbesta-schadstoffsanierung.de/#organization",
      "type": "Organization", "name": "Asbesta Schadstoffsanierung",
      "entityType": "Schadstoffsanierungsunternehmen",
      "sameAs": ["https://www.google.com/maps?cid=XXXX", "https://www.wikidata.org/wiki/QXXXX"] },
    { "@id": "https://www.asbesta-schadstoffsanierung.de/leistungen/asbestsanierung/#service",
      "type": "Service", "name": "Asbestsanierung",
      "providedBy": "https://www.asbesta-schadstoffsanierung.de/#organization",
      "standard": "TRGS 519" },
    { "@id": "https://www.asbesta-schadstoffsanierung.de/#place-marl",
      "type": "Place", "name": "Marl", "wikidata": "https://www.wikidata.org/wiki/Q4264",
      "role": "Hauptstandort und Einsatzgebiet" }
  ],
  "_meta": { "idStrategy": "URL-Fragment-Anker, identisch zum On-Page-JSON-LD." }
}
```

**`@id`-Werte MUESSEN identisch zum On-Page-JSON-LD sein.**

### 4.5 `/robots.txt` (Retrieval erlauben, Sitemap deklarieren)

Retrieval-Bots (`OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Claude-SearchBot`, `Bingbot`, `Googlebot`) **erlauben** (Zitierfaehigkeit). Training-Bots optional blocken – **Entscheidung: Googlebot NIE blocken** (speist AI Overviews). Sitemap explizit deklarieren. Sitemap zusaetzlich in **Bing Webmaster Tools** einreichen (ChatGPT-Suche nutzt Bing-Index). Wikidata-QID anlegen, `sameAs` ueberall konsistent (GBP-CID, LinkedIn, Wikidata) – identische URLs in JSON-LD, facts.json, entities.json.

---

## 5. Content-/E-E-A-T-Prinzipien

### 5.1 Autorenkonzept (gesperrt)

Jeder Ratgeber-Beitrag **immer mit namentlichem Autor**. Eine dedizierte Autorenseite je Experte (`/team/[name]/`) mit vollem **Person-Schema** (`name`, `@id`, `jobTitle` z. B. „Sachkundiger nach TRGS 519", `image`, `knowsAbout`, `hasCredential`, `worksFor` per `@id`, **`sameAs`** mit LinkedIn + Zertifizierungs-/Kammernachweis). Artikel referenzieren den Autor per `@id` (verhindert verwaiste Entitaeten). `sameAs` ist nach `name` das hoechst-hebelnde Feld; fuer YMYL besonders berufliche Nachweise.

### 5.2 Einheitliche Beitragsstruktur (verbindlich fuer ALLE Beitraege)

1. H1 + **Answer-First-Intro** (Leitfrage im ersten Satz, optional TL;DR-Box).
2. Sichtbare Metadaten: **Autorenbox** (Foto, Bio, Credentials), `datePublished`, `dateModified` („Aktualisiert am").
3. Hauptteil in semantischen H2/H3-Chunks (~100–300 Woerter, isoliert verstaendlich, Entitaet beim Namen nennen statt „es").
4. Mindestens **eine Tabelle + eine nummerierte Liste** (erhoeht AI-Zitierhaeufigkeit deutlich).
5. **Quellenangaben** (Behoerden/Normen: GefStoffV, TRGS 519/521/524, BAuA, DGUV, VDI 3492).
6. Professionelle Bilder (echte Projektfotos + lizenziertes Stock, optimiert) mit `alt`-Texten.
7. FAQ-Block (echte W-Fragen als H3, Answer-First) + `FAQPage`-Schema.
8. Conversion-Pfad (CTA Anruf/WhatsApp/Anfrage).

### 5.3 Qualitaetsmassstab

Who/How/Why erfuellen: fachliche Verantwortung bei echtem Experten (KI darf hoechstens assistieren), Inhalt dient dem Leser (keine reine Verkaufsseite), originaere Daten/Fotos/Erfahrung, Tiefe „publikationsreif fuer ein Fachmedium". Aktualitaet: Normen aendern sich (neue GefStoffV 2024/2025) – Top-Content quartalsweise refreshen.

---

## 6. Lokale-SEO/pSEO-Hybrid-Regeln

### 6.1 Hybrid-Qualitaetsansatz (gesperrt)

- **Phase 1 – Premium-Unique-Content** fuer die 9 Prioritaetsstaedte: **Marl, Bottrop, Essen, Oberhausen, Duesseldorf, Gelsenkirchen, Gladbeck, Koeln, Herten.** Handgepflegte Tiefe, echte Referenzen.
- **Phase 2 – skalierbares Qualitaets-Template** mit **echten lokalen Daten** fuer weitere Staedte. Staffelweiser Rollout (10–15 Seiten alle paar Wochen, **nie** 200 auf einmal).
- **Index-Hygiene strikt:** duenne Seiten = `noindex`. Indexierte Seitenzahl proportional zur Domain-Autoritaet – klein starten (Top-Staedte), nicht 300.

### 6.2 Unique-Content-Bloecke (3 Klassen)

- **Klasse A (echt unique, tragend, Index-Pflicht):** Anfahrt km+Fahrzeit ab Marl, abgedeckte Stadtteile (reale Namen), Bausubstanz/Baujahr-Bezug mit fachlicher Schlussfolgerung (Ruhrgebiet: Bergsenkungsgebiete!), 1–3 echte lokale Referenzprojekte (anonymisiert), regionale Entsorgungswege/Deponien, 2–4 stadtspezifische FAQ, eingebettete echte Maps-Route, eigene/lokale Fotos.
- **Klasse B (variabel befuellt):** Leistungsbeschreibung lokal umrahmt, Ablauf, Trust-Elemente.
- **Klasse C (Boilerplate – darf NICHT dominieren):** Header/Footer, allg. Zertifikate, CTA, Schema/Rechtstexte.

### 6.3 QS-Gates vor Publish

≥ 25–30 % nicht-Boilerplate Unique-Anteil (besser 600–900 Woerter); paarweiser Aehnlichkeitscheck (>80 % = Near-Duplicate flaggen); Daten-Vollstaendigkeits-Gate (leere Pflicht-A-Bloecke → automatisch `noindex`); Faktencheck (Entfernungen, Deponien); Mensch-Stichprobe (20 %); Cannibalization-Audit. **Keine** falsche Adresse je Stadt vortaeuschen (= Fake-Location-/Doorway-Signal). Floor-Flex × Stadt ist Schnellgewinn (schwacher lokaler Wettbewerb).

### 6.4 Google Business Profile & Local

Primaerkategorie „Sanierungsunternehmen" / „Abbruchunternehmen"; Sekundaer u. a. Asbestuntersuchungsdienst, Schadstoffsanierung. 10+ Fotos initial, danach 1 neues Vorher/Nachher-Foto pro Woche. NAP exakt identisch ueberall (Master-NAP). 20–50 konsistente DE-Verzeichnisse (Gelbe Seiten, Das Oertliche, 11880, Cylex, meinestadt.de, Bing Places, Apple Business Connect, IHK/HWK). Bewertungs-Velocity stetig (Ziel >10), **immer ohne Anreize/Bezahlung** (UWG-/Google-Verstoss, seit April 2026 auch Mitarbeiter-Boni untersagt). Falschbewertungen mit personenbezogenen Daten via DSGVO-Loeschanspruch abwehren.

---

## 7. Schema.org-Plan je Seitentyp

Immer **JSON-LD** im `<head>`, **ein `@graph`** pro Seite, Organisation **einmal** voll auf der Startseite definiert, ueberall sonst per `@id` referenziert. NAP identisch zu GBP/Impressum.

| Seitentyp | Schema-Kombination |
|---|---|
| **Startseite** | `Organization`+`HomeAndConstructionBusiness` (voll: address/geo/openingHoursSpecification/areaServed/sameAs, `aggregateRating` nur first-party) + `WebSite` (+SearchAction, da Pagefind vorhanden) + `WebPage` |
| **Leistungsseite** | `Service` (`serviceType`, `provider`→Org @id, `hasOfferCatalog`, `areaServed`) + `WebPage` (`about`→Service) + `BreadcrumbList` + `FAQPage` + `ImageObject` |
| **Stadt-/Spoke-Seite** | `Service` mit `areaServed`={Stadt} + `WebPage` + `BreadcrumbList` + stadtspezifische `FAQPage` + `ImageObject`. **Keine** fingierte zweite Adresse |
| **Blog/Ratgeber** | `BlogPosting`/`Article` (`headline`, `image`, `datePublished`, `dateModified`, `author`→Person @id, `publisher`→Org @id) + `Person` + `BreadcrumbList` + `WebPage` (`mainEntityOfPage`) + `ImageObject` + optional `FAQPage` |
| **Firma/Ueber-uns** | `AboutPage` + `Organization` (Ref) + `Person`(en) mit `hasCredential`/`knowsAbout`/`sameAs` + `BreadcrumbList` |
| **Kontakt** | `ContactPage` + `LocalBusiness` (address/geo/telephone/openingHoursSpecification/`ContactPoint`) + `BreadcrumbList` |

**Realismus 2026:** Sichtbare Rich Results praktisch nur **Breadcrumbs** + **Article**. `FAQPage` und Org-Review-Sterne werden i. d. R. **nicht** mehr als Snippet angezeigt – Markup bleibt fuer Knowledge Graph/AI Overviews/Entitaetsverstaendnis sinnvoll. **Nur sichtbare Inhalte markieren** (Spam-Richtlinie). `ImageObject` mit `license`+`acquireLicensePage` = einziges echtes Bild-Rich-Result.

---

## 8. Recht/Compliance-Pflichten

**Kein Rechtsrat – vor Launch anwaltlich/DSB pruefen lassen.**

- **Impressum (§ 5 DDG):** Name/ladungsfaehige Anschrift, E-Mail **+** Telefon, zustaendige **Handwerkskammer** + Berufsbezeichnung + berufsrechtliche Regelungen, Register/Registernr., **USt-IdNr.** Aufsichtsbehoerde falls zulassungspflichtig. „Impressum" max. 2 Klicks. Bußgeld bis 50.000 €. Alte EU-OS-Plattform-Hinweise entfernen (Pflicht seit 20.07.2025 entfallen).
- **Datenschutzerklaerung (Art. 13 DSGVO):** alle real eingesetzten Tools, Zwecke/Rechtsgrundlagen, Empfaenger/Auftragsverarbeiter, Drittland, Speicherdauer, Betroffenenrechte. Keine Blind-Vorlage.
- **Cookies/Consent (§ 25 TDDDG):** Tracking/Maps/externe Fonts nur nach aktiver Einwilligung; berechtigtes Interesse untauglich. **Unser Stack vermeidet das Problem:** cookieless Analytics (Plausible/Umami) + **selbst gehostete Fonts** + WhatsApp nur als `wa.me`-Link (kein eingebettetes Widget) ⇒ idealerweise **kein Cookie-Banner noetig**. Falls doch Maps/Consent: CMP mit gleichwertig „Akzeptieren/Ablehnen". Bußgeld bis 300.000 €.
- **Google Fonts:** zwingend selbst hosten (LG Muenchen I, 100 € Schadensersatz-Praezedenz). Maps falls genutzt: 2-Klick/Platzhalter, erst nach Einwilligung.
- **BFSG-Einschaetzung (gesperrt):** Die Website ist eine **Lead-/Informationsseite mit Kontakt-/Anfrageformular ohne verbindlichen Online-Vertragsabschluss/Buchung** → fällt **voraussichtlich nicht** unter „Dienstleistung im elektronischen Geschaeftsverkehr". Zudem greift sehr wahrscheinlich die **Kleinstunternehmen-Ausnahme** (< 10 Beschaeftigte UND ≤ 2 Mio. € Umsatz/Bilanz) – Kennzahlen vom Kunden einholen und **dokumentieren**. **Entscheidung: Wir bauen dennoch WCAG 2.2 AA** (siehe Abschnitt 2/Design) – als Zukunftssicherheit, SEO- und Zielgruppenvorteil, ohne formale Pflicht anzunehmen. Kein Webshop/keine verbindliche Online-Buchung einbauen, sonst kippt die Einordnung.
- **Kontaktformular/Bildupload:** Datenminimierung (Name, Telefon, E-Mail, Ort, Dienstleistung, Nachricht, max. 8 Bilder), HTTPS/TLS, kein vorausgehaktes Consent, Datenschutzhinweis verlinkt, EU-Speicherung, Upload-Limits, Loeschkonzept.
- **Bildrechte:** Stocklizenzen aufbewahren; schriftliche Einwilligung fuer Mitarbeiter-/Personenfotos (widerrufbar, Loeschprozess). Beweislast beim Veroeffentlichenden.
- **AVV (Art. 28 DSGVO):** mit Hosting (Cloudflare), Form-Backend (Formspree/Formgrid), Analytics, CMS/Agentur; Drittlandtransfer (DPF/SCC) pruefen. Verzeichnis der Verarbeitungstaetigkeiten (Art. 30) anlegen.

---

## 9. Keyword-/Content-Schwerpunkte

**P1 – Geld-Keywords (Leistungs- & Standortseiten):** `asbestsanierung [stadt]` fuer die 9 Prioritaetsstaedte; `asbest entfernen/entsorgen [stadt]`; Leistungs-Pillars zu allen 13 Leistungen (`/leistungen/asbestsanierung`, `…/floorflex-entfernen`, `…/welleternit-ausbauen`, `…/kmf-sanierung`, `…/pak-sanierung`, `…/luftanalysen` etc.). **Floor-Flex × Stadt = Schnellgewinn** (Nische, schwacher lokaler Wettbewerb). Auf jeder Geldseite durchgaengig: TRGS-519/Zertifizierung, kostenloses Festpreis-Angebot, 24-h-Erreichbarkeit, qm-Preisspannen.

**P2 – Kommerziell-informational (Conversion-Bruecke, intern stark auf P1 verlinkt):** Kosten-Ratgeber je Material (`asbest entsorgen kosten`, `eternit entsorgen kosten`, `floor flex entfernen kosten`, qm-Preise + EFH-Beispielrechnung), Analyse/Messung (`asbest test`, `raumluftmessung vdi 3492`), Methodik/Trust (`ablauf asbestsanierung`).

**P3 – Informational/Topical Authority (groesste Differenzierung – Wettbewerber haben KEINEN Blog):** „Floor-Flex erkennen (Bilder/Groessen/Baujahr)", „Schwarzer Kleber: Bitumen/PAK oder Asbest?", „Neue GefStoffV 2024/2025 (Ampel-Modell, Mitteilungs-/Erkundungspflicht, Genehmigungspflicht ab Dez. 2025)", „Asbest selbst entsorgen vs. Fachbetrieb", „Checkliste vor Hauskauf (Baujahr 1960–1993)", „Nachtspeicheroefen & Asbest", „KMF alt vs. neu / TRGS 521", „Foerderung 2026 (KfW/BAFA)". W-Fragen → FAQ-Schema.

**Markt-Preisanker (zur Orientierung, nicht verbindlich):** Asbestdach/-zement ~45–50 €/m², Bodenbelaege ~35–45 €/m², asbesthaltige Kleber ~55–90 €/m², Spritzasbest 60–200 €/m², Materialanalyse 50–150 €/Probe, Raumluftmessung 200–500 €/Raum, EFH-Dach ~120 m² oft 6.000–15.000 €.

---

## 10. Design-Tooling-Empfehlung fuer Claude Code (Einrichtung)

Empfohlener Stack fuer „professionelle UIs + visuelle Iteration". MCP-Scope-Hinweis: ohne `--scope` nur aktuelles Verzeichnis; Team = `--scope project` (erzeugt `.mcp.json`), persoenlich-global = `--scope user`. **Windows/PowerShell:** keine Bash-Substitutionen (`$(...)`, `grep`) – Keys direkt eintragen.

**1. frontend-design Plugin (Anthropic) – Design-Qualitaet, gegen „AI-Slop":**
```
/plugin install frontend-design@claude-plugins-official
```

**2. shadcn MCP (offiziell) – saubere Komponentenbasis:**
```
pnpm dlx shadcn@latest mcp init --client claude
```

**3. Chrome DevTools MCP – Screenshots, Inspect, a11y-/Performance-Audits, visuelle Iteration (wichtigstes Tool):**
```
/plugin marketplace add ChromeDevTools/chrome-devtools-mcp
```
oder nur Server:
```
claude mcp add chrome-devtools npx chrome-devtools-mcp@latest
```

**4. Playwright MCP – Browser-Automatisierung & Screenshot-Verifikation (Node 18+):**
```
claude mcp add --scope project playwright npx @playwright/mcp@latest
```

**5. Figma Dev Mode MCP (optional, falls Figma-Tokensystem) – Design-Tokens/Komponenten importieren:**
```
claude plugin install figma@claude-plugins-official
```

Nach jeder Installation Claude Code neu starten und mit `/mcp`, `/plugin`, `/skills` bzw. `claude mcp list` verifizieren.

---

**Dieses Dokument ist der verbindliche Plan (Vorgehen: erst planen, dann verbessern, dann entwickeln). Aenderungen nur durch den Lead-Architekten. Alle nachgelagerten Autoren, Designer und Entwickler richten sich konsistent danach.**
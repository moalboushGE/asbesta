# Relaunch & SEO/GEO-Strategie: asbesta-schadstoffsanierung.de
### 100-Tage-Entwicklungsplan eines 5-koepfigen Senior-Teams

> **Projekt:** Kompletter Relaunch der Website der Asbesta Schadstoffsanierung (Marl, NRW)
> **Ziel:** Perfektes, hochprofessionelles Design (Logofarben) + ausserordentlich starke SEO & GEO + Top-Performance
> **Sprache:** Deutsch | **Stand:** 2026-06-10 | **Version:** 1.0 (Entwurf zur Verbesserung)
> **Prioritaetsstaedte:** Marl, Bottrop, Essen, Oberhausen, Duesseldorf, Gelsenkirchen, Gladbeck, Koeln, Herten

---

## Inhaltsverzeichnis
1. Executive Summary, Ziele & Team
2. Markenidentitaet & Design-System
3. Informationsarchitektur & Content-Strategie
4. SEO-Architektur (technisch & On-Page)
5. GEO & AI-Search-Optimierung
6. Der 100-Tage-Fahrplan (Tag-fuer-Tag)
7. Qualitaetssicherung, Recht, Launch & Betrieb
8. Engineering- & Qualitaets-Charta
9. Anhaenge

---

## 1. Executive Summary, Ziele & Team

### 1.1 Projektkontext & Problemstellung

Asbesta Schadstoffsanierung ist ein inhabergefuehrter Fachbetrieb aus Marl (Venusweg 24, 45770 Marl) fuer Asbest- und Schadstoffsanierung mit Einsatzgebiet in ganz NRW. Das Unternehmen ist nach TRGS 519/521/524 zertifiziert, verfuegt ueber 15+ Jahre Erfahrung, 1.000+ abgeschlossene Projekte und positioniert sich mit dem Versprechen "Alles aus einer Hand. Vom Gutachten bis zur Uebergabe."

Die bestehende Website (WordPress) wird vom Kunden ausdruecklich als **schlecht** bewertet. Kernproblem ist die Alt-SEO-Strategie: rund **1.960 programmatisch erzeugte Landingpages** (jede der 13 Leistungen × ca. 49 Staedte, URL-Schema `/leistungen/[leistung]-[stadt]`). Diese Seiten sind **Thin Content** und austauschbare Massenseiten ohne echten lokalen oder fachlichen Mehrwert.

Warum das nicht mehr funktioniert:

- **Doorway-Pages-Risiko.** Massenhaft generierte, nahezu identische Stadt-Leistungs-Seiten verstossen gegen Googles Spam-Richtlinien (Doorway/Scaled-Content-Abuse) und werden abgewertet oder gar nicht indexiert.
- **YMYL-Verschaerfung.** Asbest betrifft Gesundheit und Sicherheit ("Your Money or Your Life"). Google prueft solche Seiten mit erhoehter Tiefe; austauschbarer Content scheitert hier am E-E-A-T-Massstab (insbesondere Trust).
- **AI-/GEO-Blindheit.** AI-Suche (AI Overviews, AI Mode, Perplexity, ChatGPT-Suche) laeuft 2026 auf denselben Ranking- und Qualitaetssystemen wie die klassische Suche. Thin Content ist weder zitierfaehig noch entitaetsstark.
- **Technische Altlasten.** WordPress-Bloat, Plugin-Konflikte, schwache Core Web Vitals und laufende Security-Last bremsen Indexierung und Performance.

**Konsequenz (gesperrte Kundenentscheidung):** Die Alt-SEO wird vollstaendig verworfen. Es entsteht eine neue, professionelle Strategie mit einzigartigem Inhalt, Hybrid-Qualitaetsansatz fuer lokale SEO und strikter Index-Hygiene. Leitprinzip: **Qualitaet vor Volumen.**

### 1.2 Vision

> Asbesta wird in NRW als der sichtbar kompetenteste, vertrauenswuerdigste und am schnellsten erreichbare Fachbetrieb fuer Asbest- und Schadstoffsanierung wahrgenommen - in der klassischen Google-Suche, in der lokalen Suche der Prioritaetsstaedte und in AI-Antworten. Die Website ist technisch fehlerfrei indexierbar, erfuellt durchgaengig E-E-A-T (YMYL), laedt extrem schnell und verwandelt Besucher zuverlaessig in qualifizierte Anfragen (Anruf, WhatsApp, Formular).

Die Website ist kein Selbstzweck, sondern ein **Lead-Generierungs-Instrument**: Jede Seite dient den drei Conversion-Pfaden Anruf / WhatsApp / kostenlose Anfrage.

### 1.3 Messbare Projektziele & KPIs

Die KPIs sind in Baseline-/Ziel-Logik definiert. Da gesicherte Ist-Werte der Alt-Domain noch erhoben werden muessen (Phase 0, Audit/GSC-Zugang), gelten die Baselines als in Phase 0 zu verifizieren ("TBD@P0"). Messzeitpunkte: T+0 (Launch), T+3M, T+6M, T+12M nach Go-Live.

| # | Zielkategorie | KPI / Metrik | Baseline | Zielwert | Mess-Tool |
|---|---|---|---|---|---|
| Z1 | Organischer Traffic | Organische Sitzungen / Monat | TBD@P0 | +60 % bis T+6M, +120 % bis T+12M | GSC, Plausible |
| Z2 | Indexierungs-Hygiene | Anteil eingereichter URLs mit Status "indexiert" | n/a (neue Architektur) | >= 95 % der **bewusst** indexierbaren URLs; 0 ungewollt indexierte Thin-Seiten | GSC Coverage |
| Z3 | Lokale Rankings (P1-Staedte) | Top-3-Rankings fuer `asbestsanierung [stadt]` der 9 Prioritaetsstaedte | TBD@P0 | >= 4 der 9 Staedte in Top 3, >= 8 in Top 10 bis T+12M | Rank-Tracking |
| Z4 | Nischen-Schnellgewinn | Top-10 fuer `floor flex entfernen [stadt]` (P1) | TBD@P0 | >= 6 der 9 Staedte in Top 10 bis T+6M | Rank-Tracking |
| Z5 | Core Web Vitals | LCP / INP / CLS (mobil, 75. Perzentil, Feld) | TBD@P0 | LCP <= 2,0 s · INP <= 200 ms · CLS <= 0,1 (alle "Good") | CrUX, PageSpeed, Lab |
| Z6 | Performance-Lab | Lighthouse Performance (mobil) auf Kern-Templates | TBD@P0 | >= 95 | Lighthouse CI |
| Z7 | Conversions | Qualifizierte Anfragen (Anruf-Klick + WhatsApp-Klick + Formular) / Monat | TBD@P0 | +40 % bis T+6M; Formular-Conversion-Rate >= 3 % | Plausible Events |
| Z8 | AI-Sichtbarkeit (GEO) | Erwaehnungen/Zitate in AI Overviews & AI-Antworten (Perplexity/ChatGPT/Google AI) fuer Kern-Queries | 0 (TBD@P0) | Messbar nachweisbare Zitierfaehigkeit fuer >= 5 Kern-Queries bis T+12M | Manuelle GEO-Stichprobe, AI-Visibility-Tracking |
| Z9 | Lokales Profil | Google-Business-Profile-Bewertungen / Foto-Velocity | TBD@P0 | > 10 echte Bewertungen; 1 neues Vorher/Nachher-Foto pro Woche | GBP-Insights |
| Z10 | Barrierefreiheit | WCAG 2.2 AA Konformitaet der Kern-Templates | n/a | 0 kritische a11y-Fehler (axe), Tastatur-/Screenreader-Pass | axe, manuelle QA |
| Z11 | Migration | Funktionierende 301/410 fuer alle ~1.960 Alt-URLs | 0 | 100 % gemappt; 0 ungewollte 404 mit Backlinks/Traffic | Redirect-Audit, GSC |

**Abgrenzung Indexierung vs. Ranking:** Z2 (Indexierbarkeit) ist die technische Basishuerde, Z1/Z3/Z4 (Ranking-Erfolg) die eigentliche Zielhuerde. Eine indexierte Seite ist nicht automatisch ranking-faehig - daher die getrennte Messung.

### 1.4 Scope & Out-of-Scope

**In Scope:**

- Vollstaendiger Relaunch auf Astro (SSG) + Git-basiertes/Headless-CMS, Hosting auf Cloudflare Pages.
- Informationsarchitektur: Leistungs-Hub (13 Pillar-Seiten), Standort-Hub, Spoke-Seiten (Leistung × Stadt) nach Index-Gate, Ratgeber, Hauptseiten (`/`, `/firma`, `/bewertungen`, `/kontakt`, `/impressum`, `/datenschutz`).
- Premium-Unique-Content fuer die 9 Prioritaetsstaedte + skalierbares Qualitaets-Template fuer Folgestaedte (staffelweiser Rollout).
- Blog/Ratgeber mit einheitlicher, E-E-A-T-konformer Beitragsstruktur inkl. Autorenkonzept und Person-Schema.
- Vollstaendiges Design-System (WCAG 2.2 AA), Markenidentitaet/Logo-Strategie, Fotokonzept.
- Technische SEO: JSON-LD `@graph` je Seitentyp, Sitemap-Index, Canonical-/noindex-Hygiene, 301/410-Migration.
- GEO/AI-Dateien: `llms.txt`, `llms-full.txt`, `facts.json`, `entities.json`, `robots.txt`.
- DSGVO/Compliance: cookieless Analytics, selbst gehostete Fonts, Formular + Bildupload, Impressum, Datenschutz, AVV-Vorlagen.
- Google Business Profile-Optimierung & NAP-/Verzeichnis-Konsistenz (Setup & Leitfaden).
- QA, Performance-Tuning, Pre-Launch-Haertung, Launch-Runbook, Post-Launch-Stabilisierung.

**Out of Scope (bewusst nicht enthalten):**

- Webshop, verbindliche Online-Buchung oder Bezahlfunktion (wuerde zudem die BFSG-Einordnung kippen).
- Kundenportal / dynamischer App-Teil (entfaellt - genau deshalb kein Next.js).
- Mehrsprachigkeit (Sprache ausschliesslich Deutsch).
- Bezahlte Werbung (SEA/Google Ads), Social-Media-Redaktion, klassisches Branding/Print jenseits des Logos.
- Erstellung der finalen Rechtstexte als Rechtsberatung (Impressum/Datenschutz werden vorbereitet, aber **anwaltlich/DSB final geprueft** - kein Rechtsrat durch das Team).
- Migration von Alt-Inhalten 1:1 (Alt-Content wird ersetzt, nicht uebernommen).

### 1.5 Das Team (5 Senioren)

| Rolle | Funktion | Kernverantwortung |
|---|---|---|
| **R1** | Tech Lead / Frontend-Architekt | Gesamtarchitektur, Astro/Build, Komponentensystem, Performance/Core Web Vitals, Deploy/Hosting, technische Standards, Code-Reviews |
| **R2** | SEO/GEO-Lead | Technische & On-Page-SEO, strukturierte Daten/JSON-LD, `llms.txt`/`llms-full.txt`/`facts.json`/`entities.json`, Indexierungsstrategie, 301-Redirects, Google Business Profile, Monitoring/Analytics |
| **R3** | UI/UX- & Brand-Designerin | Design-System, Markenidentitaet & Logo-Strategie, Bildsprache/Fotokonzept, Wireframes/Prototypen (Figma), Barrierefreiheit (WCAG 2.2 AA), Conversion-Design |
| **R4** | Content-Lead / SEO-Redakteur | Einzigartige Texte fuer Leistungs- & Stadtseiten, Blog/Ratgeber, E-E-A-T/Autorenkonzept, Redaktionsplan, Tonalitaet, Faktenpruefung |
| **R5** | Backend/DevOps- & QA-Engineer | CMS-Integration, CI/CD, Hosting/Infra/Security, Formulare & DSGVO, automatisierte Tests, Recht/Compliance (Impressum, Datenschutz, Cookie-Consent, BFSG), Launch-Runbook |

Kapazitaet: 5 Senioren × 100 Arbeitstage = **500 Personentage**. Die fachliche Letztverantwortung fuer YMYL-Inhalte liegt beim Kunden/Fachexperten (Sachkundiger nach TRGS 519); KI darf hoechstens assistieren, nie inhaltlich verantworten.

### 1.6 Arbeitsweise & Methodik

- **Iterativ in 2-Wochen-Sprints** (10 Arbeitstage), eingebettet in das Phasen-/Sprint-Skelett (Abschnitt 1.7). 100 Arbeitstage ≈ 10 Sprints.
- **Sprint-Rhythmus:** Sprint-Planning (Tag 1), taegliches Stand-up (15 min), Mid-Sprint-Sync, Sprint-Review + Demo (Tag 10), Retrospektive. Backlog priorisiert durch R1 (technisch) und R2 (SEO-Impact).
- **Definition of Done (DoD)** - eine Aufgabe gilt erst als fertig, wenn:
  1. Code reviewt und gemergt (mind. 1 Senior-Review, gruene CI).
  2. Responsive + Cross-Browser geprueft (mobil-first).
  3. WCAG 2.2 AA fuer betroffene Komponenten erfuellt (axe ohne kritische Fehler).
  4. Core-Web-Vitals-Budget eingehalten (Lighthouse-CI-Gate, kein JS-Bloat).
  5. SEO-Check bestanden: Self-referencing Canonical, korrektes Index-/noindex-Signal, valides JSON-LD (`@id`-Konsistenz), interne Verlinkung (kein Orphan).
  6. Bei Content: QS-Gates aus Abschnitt 6.3 bestanden (Unique-Anteil, Faktencheck, Quellen, Autorenbox).
  7. Rechts-/DSGVO-Relevanz von R5 freigegeben.
  8. Komponenten-Budget eingehalten (Abschnitt 8.2): kein neuer God-Component - max-lines/Komplexitaet/max-depth/Props innerhalb der Hard-Limits, CI gruen.
  9. Coding-Standards & Typsicherheit erfuellt (8.3): strict-TS, ESLint/SonarJS/Stylelint ohne Errors, keine Magic Numbers, Tokens statt Rohwerte.
  10. Design-Integritaets-Review bestanden (8.5/8.6): 0 KI-Slop-Marker, Marken-/Token-Konformitaet, MCP-Screenshot-Nachweis dokumentiert.
  11. Bei Architektur-/Tooling-/Dependency-Entscheidung: ADR angelegt (8.7), Komponenten-Doku/Storybook aktualisiert.
- **Reviews & Gates:** Code-Review (R1), SEO-Gate (R2), Design-/a11y-Review (R3), Content-/Fakten-Review (R4), Security-/Compliance-Gate (R5). Phasenende = formaler Quality-Gate, der erfuellt sein muss, bevor die Folgephase startet.
- **Tooling & Kommunikation:** Git (Branch-/PR-Workflow, Trunk-naher Ansatz), CI/CD via Cloudflare Pages + Lighthouse CI + axe in der Pipeline; Design in Figma; Aufgaben-/Backlog-Board; woechentlicher Kunden-Jour-fixe (Demo der Inkremente); zentrale "Quelle der Wahrheit" = dieses Briefing (Aenderungen nur durch Lead-Architekt). Lokale Redaktionspflege spaeter via Git-/Headless-CMS (Sveltia/Decap).

### 1.7 Sprint-/Phasen-Ueberblick

| Phase | Schwerpunkt | Tage (von 100) | Haupt-Owner | Schluessel-Ergebnis (Exit-Kriterium) |
|---|---|---|---|---|
| **0** | Kickoff, Discovery & Audit | 1-8 | R1/R2 | Zugaenge & Baselines erhoben, Alt-URL-Inventar, Audit-Report, KPI-Baselines fixiert |
| **1** | Strategie, Keyword-/GEO-Research, IA & Tech-Foundations | 9-20 | R2/R1 | Keyword-Map, finale IA/URL-Struktur, Repo + Astro-Grundgeruest + CI/CD steht |
| **2** | Design-System & UX-Prototyp | 21-34 | R3 | Design-Tokens, Komponentenbibliothek, klickbarer Figma-Prototyp, a11y-Konzept |
| **3** | Core-Development: Komponenten, Templates, CMS, Infra | 35-55 | R1/R5 | Alle Seiten-Templates + CMS-Anbindung + Formulare lauffaehig (Staging) |
| **4** | Content-Produktion, Leistungs-/Stadt-Landingpages, Blog & GEO-Dateien | 56-74 | R4/R2 | 13 Leistungsseiten, 9 P1-Stadtseiten, erste Ratgeber, GEO-Dateien live (Staging) |
| **5** | Technische SEO, strukturierte Daten, 301-Redirects & Performance | 75-84 | R2/R1 | JSON-LD je Typ valid, Redirect-Map komplett, CWV-Budgets erreicht |
| **6** | QA, Barrierefreiheit, Recht/Compliance & Pre-Launch-Haertung | 85-94 | R5/R3 | Alle DoD-/Quality-Gates gruen, Rechtstexte freigegeben, Launch-Runbook fertig |
| **7** | Go-Live & Post-Launch-Stabilisierung | 95-100 | R1/R5 | Domain live, Redirects aktiv, GSC/Bing eingereicht, Monitoring laeuft, Uebergabe |

### 1.8 Zentrale Risiken & Gegenmassnahmen

| # | Risiko | Eintritt/Wirkung | Gegenmassnahme |
|---|---|---|---|
| RK1 | **Traffic-Einbruch bei Migration** (1.960 Alt-URLs) | hoch / hoch | Vollstaendiges Alt-URL-Inventar in Phase 0; saubere 301 auf naechstbestes Ziel, sonst 410; Redirect-Audit; engmaschiges GSC-Monitoring T+0..T+3M |
| RK2 | **Thin-Content-Wiederholung** bei Stadt-Spokes | mittel / hoch | Harte Index-Gate-Logik; QS-Gates (>=25-30 % Unique, Near-Duplicate-Check); duenne Seiten automatisch `noindex`; staffelweiser Rollout statt Massen-Launch |
| RK3 | **Fehlendes Foto-/Logo-Material** (echte Projektfotos) | mittel / mittel | Frueh in Phase 0 anfordern; Stock-Fallback lizenziert; Foto-Shooting-Plan; Bilder als eigener Abhaengigkeits-Track |
| RK4 | **YMYL/E-E-A-T-Defizit** (Fachverantwortung) | mittel / hoch | Namentlicher Experte je Beitrag, Person-Schema mit `hasCredential`/`sameAs`; Fach-Review durch Sachkundigen; Quellenpflicht (GefStoffV, TRGS, BAuA, DGUV, VDI) |
| RK5 | **Rechts-/DSGVO-Verstoss** (Impressum, Consent, Fonts) | mittel / hoch | Cookieless-Stack (kein Banner noetig), selbst gehostete Fonts, `wa.me`-Link statt Widget; anwaltliche/DSB-Endpruefung vor Launch; AVV-Verzeichnis |
| RK6 | **AI-/GEO-Erwartung uebertrieben** (`llms.txt` als Wunderwaffe) | mittel / niedrig | Realistische Einordnung: GEO-Dateien sind Bonus-Signale; Fundament bleibt sauberes HTML + Schema + Performance; Erwartungsmanagement beim Kunden |
| RK7 | **NAP-/E-Mail-Inkonsistenz** (`kontakt@alboush-elektro.de` ungeklaert) | hoch / mittel | Master-NAP + finale oeffentliche E-Mail vor Launch verifizieren; konsistent in Impressum, Schema, GBP, Verzeichnissen |
| RK8 | **Scope-Creep** (Portal, Shop, Sprachen) | mittel / mittel | Briefing als gesperrte Quelle der Wahrheit; Aenderungen nur ueber Lead-Architekt; Change-Log |
| RK9 | **Verzoegerte Kunden-Freigaben/Inhalte** | mittel / mittel | Woechentlicher Jour-fixe; klare Deadlines fuer Material/Freigaben; Pufferzeiten in Phasen 4/6 |
| RK10 | **GBP-/Bewertungs-Compliance** (UWG) | niedrig / hoch | Keine Anreize/Bezahlung fuer Bewertungen (seit April 2026 auch Mitarbeiter-Boni untersagt); organische Velocity; DSGVO-Loeschanspruch bei Fake-Reviews |

### 1.9 Annahmen & Abhaengigkeiten

**Annahmen:**

- Kanonische Domain ist `https://www.asbesta-schadstoffsanierung.de/` (www-Variante kanonisch); die Domain bleibt im Zugriff des Projekts.
- Der Kunde stellt einen fachlichen Ansprechpartner (Sachkundiger nach TRGS 519) fuer Fach-Review und Autorenkonzept.
- Das Unternehmen erfuellt voraussichtlich die Kleinstunternehmen-Schwelle (< 10 Beschaeftigte UND <= 2 Mio. EUR Umsatz/Bilanz) - vom Kunden zu bestaetigen und zu dokumentieren (BFSG-Einordnung).
- Kein verbindlicher Online-Vertragsabschluss/Buchung wird eingebaut (Erhalt der BFSG-Einordnung).

**Abhaengigkeiten (kundenseitig beizustellen, mit Deadline):**

| Abhaengigkeit | Benoetigt fuer | Spaetestens bis |
|---|---|---|
| Logo in Vektor (SVG) + Negativ-Variante | Header/Footer/OG/Favicon/Design-System | Phase 2 (Tag 21) |
| Echte Projektfotos (PSA, Schleuse, Vorher/Nachher, Team) | Bildsprache, Stadt-/Leistungsseiten, GBP | Phase 4 (Tag 56), Erstpaket frueher |
| Freigabe/Material fuer Texte & Fakten (Referenzprojekte, Stadtteile, Deponiewege) | Unique-Content Klasse A | laufend ab Phase 4 |
| GSC-/Analytics-/Hosting-/Domain-Zugaenge | Audit, Baselines, Migration, Deploy | Phase 0 (Tag 1-8) |
| Finale oeffentliche E-Mail-Adresse & Master-NAP | Impressum, Schema, GBP, Verzeichnisse | vor Launch (Phase 6) |
| Mitarbeiter-Einwilligungen (Personenfotos) + Stocklizenz-Nachweise | Bildrechte/Compliance | vor Veroeffentlichung der Fotos |
| Zertifikats-/Kammernachweise (TRGS, HWK, USt-IdNr.) | Impressum, E-E-A-T, Person-Schema (`hasCredential`) | Phase 4-6 |
| Unternehmenskennzahlen (Beschaeftigte/Umsatz) | BFSG-Dokumentation | vor Launch |

Verzoegerungen bei diesen Abhaengigkeiten verschieben die jeweils nachgelagerten Phasen; Pufferzeiten sind in den Phasen 4 und 6 eingeplant.

---

## 2. Markenidentitaet & Design-System

Dieser Abschnitt definiert die verbindliche Marken- und Design-Grundlage fuer den Relaunch von Asbesta Schadstoffsanierung. Alle Festlegungen sind als Single Source of Truth zu verstehen: Designer, Entwickler und Content-Verantwortliche richten Tokens, Komponenten und Assets exakt danach aus. Aenderungen erfolgen ausschliesslich ueber den Lead-Architekten in Abstimmung mit R3 (UI/UX & Brand). Die Werte sind kohaerent mit den im Briefing gesperrten Hex-Codes, Schriften und Layout-Tokens; dieser Abschnitt fuehrt sie aus, ergaenzt sie und macht sie produktionsreif.

---

### 2.1 Markenstrategie & Tonalitaet

**Markenkern (Brand Promise):** Sicherheit, Sauberkeit, Seriositaet. Asbesta nimmt Menschen in einer belastenden Situation (Gesundheitsgefahr, Bauverzug, Unsicherheit) die Last ab – schnell, zertifiziert, transparent. Der gesperrte Claim bleibt fuehrend: **"Asbest? Wir holen Sie da raus – schnell, sicher & professionell."**

**Markenpersoenlichkeit (Archetyp):** Der **kompetente Helfer / Beschuetzer**. Nicht der laute Verkaeufer, sondern der ruhige Fachmann, der weiss, was zu tun ist, und Verantwortung uebernimmt. Direkter Draht zum Inhaber, kein Konzern-Sprech.

**Markenwerte und ihre Design-/Sprach-Uebersetzung:**

| Wert | Design-Manifestation | Sprach-Manifestation |
|---|---|---|
| Sicherheit | Gruen als Freigabe-/Schutzfarbe, sichtbare Zertifikate (TRGS-Badges), Schutzkleidung in Fotos | "zertifiziert nach TRGS 519", "lueckenloser Nachweis", "Freimessung" |
| Sauberkeit | Viel Weissraum, klare Raster, ruhige Kuehl-Neutral-Bildstimmung | "staubarme Verfahren", "besenreine Uebergabe" |
| Seriositaet | Ink-Dunkeltoene fuer Header/Footer, prazise Typografie, keine Reisser | "transparentes Festpreis-Angebot", "ohne versteckte Kosten" |
| Naehe/Vertrauen | Echte Team-/Projektfotos statt Stock-Klischees, persoenliche Ansprache | "persoenlicher Ansprechpartner", "direkter Kontakt zum Inhaber" |

**Tonalitaet (Voice & Tone):**

- **Sprache:** ausschliesslich Deutsch, Sie-Form (kein Du). Hochdeutsch, kein Dialekt.
- **Stil:** klar, sachlich-warm, loesungsorientiert. Kurze Hauptsaetze. Aktiv statt Passiv ("Wir sanieren" statt "Es wird saniert").
- **Fachlichkeit mit Uebersetzung:** Fachbegriffe (Floor-Flex, KMF, Schwarz-Weiss-Schleuse) werden genannt **und** kurz erklaert – Kompetenzsignal fuer Google/AI und Verstaendnishilfe fuer Laien.
- **YMYL-Disziplin:** keine Angstrhetorik, keine Heils-/Garantieversprechen ohne Beleg, keine Verharmlosung. Risiken nuechtern, Loesung selbstbewusst.
- **Verbote:** Ausrufezeichen-Inflation, Superlativ-Floskeln ohne Beleg ("die Nr. 1"), Clickbait, KI-Floskeln ("In der heutigen schnelllebigen Zeit ...").

---

### 2.2 Logo-Strategie & konsequentes Logo-Highlighting

Das Logo ist der zentrale Wiedererkennungs- und Vertrauensanker und wird gemaess Kundenvorgabe **konsequent prominent** eingesetzt. Falls kein vektorisiertes Original vorliegt, ist als erste Aufgabe von R3 eine saubere **SVG-Rekonstruktion** zu erstellen (Pixel-Logos sind unzulaessig).

**Logo-Varianten (Asset-Set, verbindlich anzulegen):**

| Variante | Format | Einsatz |
|---|---|---|
| Primaer (Signet + Wortmarke), Gruen auf hell | SVG + PNG@2x | Header auf Weiss, Dokumente |
| Negativ (weiss mit gruenem Akzent) | SVG + PNG@2x | auf `ink-900`, dunklen Sektionen, Fotos mit Overlay |
| Monochrom Gruen / Monochrom Schwarz | SVG | Print, Fax, einfarbige Kontexte |
| Nur Signet (App-Mark) | SVG + PNG | Favicon, App-Icon, Watermark, kleine Flaechen |
| Favicon-Set | ICO + PNG 16/32/180/512 + `safari-pinned-tab.svg` | Browser-Tabs, Lesezeichen, Apple-Touch-Icon |

**Highlighting je Touchpoint:**

- **Header:** Logo links, Mindesthoehe `>= 40 px` Desktop / `>= 32 px` Mobile, verlinkt auf `/` mit `aria-label="Asbesta Startseite"`. Bei Sticky-Header verkleinerte Variante, aber nie unter 32 px.
- **Footer:** Negativ-Variante auf `ink-900`, daneben kompakte NAP-Angaben und TRGS-Badges.
- **Favicon:** vollstaendiges Set (16/32/180/512 px) plus `manifest.webmanifest` mit `theme-color: #15803D`.
- **OG-/Social-Images:** generierte 1200x630-Templates (pro Seitentyp) mit Logo oben links, Headline, dezenter Gruen-Akzentkante; konsistent ueber `og:image`/`twitter:image`.
- **Print/PDF:** Angebots-/Dokumentvorlagen mit Logo-Kopf, monochromer Fallback.
- **Foto-Branding (Watermark):** dezentes Signet unten rechts auf echten Projektfotos, Opazitaet ca. 60–70 %, niemals ueber sicherheitsrelevanten Bildinhalten, niemals Gruen-auf-Gruen.

**Schutzzone & Regeln:** Schutzzone = Hoehe des Signets rundum frei. Mindesthoehe `>= 32 px` Web. Auf hell Originalgruen; auf dunklem Grund/Foto nur die Negativ-Variante ueber ruhiger Flaeche oder Overlay-Abdunklung (Kontrast sicherstellen).

**Verbote (gesperrt):** verzerren/stauchen, neu einfaerben, Schlagschatten/Effekte, Gruen-auf-Gruen, auf unruhigem Hintergrund ohne Overlay, unter Mindesthoehe skalieren, Signet und Wortmarke neu anordnen.

---

### 2.3 Farbpalette (vollstaendig, mit WCAG-2.2-AA-Kontrast)

Primaerfarbe ist **Gruen** (Logo-Bezug: Sicherheit/Freigabe), Akzent ist **warmes Orange** ausschliesslich fuer Notfall/CTA. Es gilt die **60/30/10-Regel**: 60 % Neutral, 30 % Gruen + Ink, 10 % Signal-Orange. Pro Viewport **maximal ein** dominantes Signal.

**Brand-Gruen (Skala 50–800)**

| Token | Hex | Verwendung | Kontrast / Hinweis |
|---|---|---|---|
| `green-50` | `#ECFDF3` | Sektions-Hintergrund, Hover-Flaechen | dekorativ |
| `green-100` | `#D1FADF` | Badge-Hintergrund, Tags | dekorativ |
| `green-300` | `#6CE9A6` | Akzentlinien, Illustrationen | nicht fuer Text |
| `green-500` | `#16A34A` | Logo-/Marken-Erkennung, grosse Flaechen | **nie kleiner Fliesstext** (3.3:1 auf Weiss) |
| `green-600` | `#15803D` | Text/Links/Button-Default auf Weiss | **4.54:1** auf Weiss = AA fuer Normaltext |
| `green-700` | `#0F6E37` | Hover-Zustand Buttons/Links | AA |
| `green-800` | `#0A5128` | Aktiv/Pressed, Text auf hellgruen | hoher Kontrast |

**Ink/Dunkel (Seriositaet – Header/Footer/Overlays)**

| Token | Hex | Verwendung | Hinweis |
|---|---|---|---|
| `ink-900` | `#0B2027` | Footer, dunkle Sektionen, Overlays | weisser Text darauf = AAA |
| `ink-800` | `#12313C` | Header-Hintergrund, Cards dunkel | weisser Text = AA+ |
| `ink-700` | `#1E4A57` | Icon-Farbe dunkel, sekundaere Flaechen | weisser Text = AA |

**Signal/Notfall (sparsam, max. 1 dominantes Signal/Viewport)**

| Token | Hex | Verwendung | Kontrast / Hinweis |
|---|---|---|---|
| `signal-100` | `#FDEBD8` | Notfall-Bannerflaeche hell | dekorativ |
| `signal-500` | `#EA6A12` | nur Grosstext/UI-Akzent | **nicht** fuer Normaltext auf Weiss |
| `signal-600` | `#C2540A` | Notfall-Button (weisser Text) | **5.0:1** = AA |

**Neutral**

| Token | Hex | Verwendung | Hinweis |
|---|---|---|---|
| `white` | `#FFFFFF` | Basis-Hintergrund | — |
| `gray-50` | `#F7F9F8` | abwechselnder Sektions-BG | dekorativ |
| `gray-100` | `#EEF1F0` | Input-BG, Card-BG | dekorativ |
| `gray-200` | `#DDE3E1` | dekorative Linien | **nicht** fuer funktionale Borders |
| `gray-400` | `#9AA6A2` | funktionale Borders, Trennlinien UI | `>= 3:1` = AA Non-Text |
| `gray-500` | `#6B7873` | Sekundaertext, Captions | AA fuer Grosstext, Pruefung bei Kleintext |
| `gray-700` | `#3A4742` | **Fliesstext-Standard** | hoher Kontrast auf Weiss |
| `gray-900` | `#172420` | Headlines | maximaler Kontrast |

**Semantische Farben (nie Farbe allein – immer Icon + Text)**

| Token | Hex | Bedeutung |
|---|---|---|
| `success` | `#15803D` | Erfolg/Bestaetigung (Formular versendet) |
| `warning` | `#B45309` | Warnung/Hinweis |
| `danger` | `#B42318` | Fehler/Validierung |
| `info` | `#175CD3` | neutraler Hinweis |

**Kontrast-Grundsaetze (WCAG 2.2 AA):** Normaltext `>= 4.5:1`, Grosstext (`>= 24 px` bzw. `>= 19 px` bold) `>= 3:1`, UI-Komponenten/Grafikobjekte/Fokusring `>= 3:1`. Button-Gruen traegt **immer weissen** Text. Jede neu kombinierte Farbpaarung wird vor Freigabe mit Chrome DevTools / einem Kontrast-Checker verifiziert (siehe 2.11).

---

### 2.4 Typografie

- **Schrift:** **Inter** fuer Headline und Body, **selbst gehostet** als WOFF2 (DSGVO-konform, keine Google-Fonts-CDN – vgl. LG Muenchen I). Schnitte 400/500/600/700. Optional **Source Serif 4** ausschliesslich fuer hervorgehobene Kundenzitate.
- **Subsetting:** `latin` + `latin-ext` (deutsche Umlaute ae/oe/ue/ss korrekt abgedeckt). Hauptschnitt (400 + 600) per `<link rel="preload">` vorgeladen, `font-display: swap`, `unicode-range` gesetzt.

**Typografische Skala (Basis 18 px Fliesstext, Faktor ~1.25; Desktop / Mobile)**

| Stil | Groesse Desktop/Mobile | Weight | Line-Height | Einsatz |
|---|---|---|---|---|
| display | 56 / 36 px | 700 | 1.1 | Hero-Headline |
| h1 | 44 / 30 px | 700 | 1.15 | Seitentitel |
| h2 | 32 / 26 px | 600 | 1.25 | Sektionsueberschriften |
| h3 | 24 / 22 px | 600 | 1.3 | Unterabschnitte |
| body | 18 / 16 px | 400 | 1.65 | Fliesstext |
| small | 16 / 15 px | 400 | 1.5 | Captions, Meta |
| legal | 14 px | 400 | 1.5 | Impressum/Footer-Recht |

**Anwendungsregeln:** Zeilenlaenge `max-width: 70ch` (~720 px Lesecontainer), **linksbuendig** (kein Blocksatz – Lesbarkeit/Barrierefreiheit), Headlines `letter-spacing: -0.01em`. Genau **eine** `<h1>` pro Seite. Schriftgroessen in `rem` (Zoom-/Accessibility-sicher). Keine reinen Versalien fuer Fliesstext.

---

### 2.5 Spacing-, Grid-System & Breakpoints

- **Grid:** 12-Spalten, max. Content-Breite **1200 px**, Lesetext-Container **720 px**. Gutter 24 px Desktop / 16 px Mobile.
- **Spacing-Skala (4er-Basis, als Tokens):** `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128` px.
- **Sektionsrhythmus:** 96 px Desktop / 64 px Mobile vertikaler Abstand zwischen Sektionen.
- **Radius:** Buttons/Inputs 12 px, Karten 16 px, Pill nur fuer Badges.
- **Schatten:** weich, nie hart/farbig – Standard `0 8px 24px rgba(11,32,39,.08)`.

**Breakpoints (Mobile-First)**

| Name | Min-Breite | Ziel |
|---|---|---|
| `sm` | 640 px | grosse Smartphones |
| `md` | 768 px | Tablets |
| `lg` | 1024 px | kleine Laptops |
| `xl` | 1280 px | Desktop (Content-Cap 1200 px) |
| `2xl` | 1536 px | grosse Monitore (Inhalt zentriert) |

Mobil: **sticky Kontaktleiste** (Anruf + WhatsApp) am unteren Rand, Tap-Targets `>= 44 px`.

---

### 2.6 Komponenten-Inventar

Basis ist eine **shadcn/Astro-Komponentenbibliothek** mit projekteigenen Tokens (kein generischer Default-Look). Komponenten sind barrierefrei (semantisches HTML, ARIA nur wo noetig) und JS-arm (Astro Islands nur bei echter Interaktivitaet).

**Globale Bausteine**

| Komponente | Kurzbeschreibung |
|---|---|
| `Header` | Sticky-Navigation, Logo, Hauptmenue, prominenter Anruf-/Anfrage-CTA |
| `Footer` | Negativ-Logo, NAP, Leistungs-/Standort-Links, Recht, TRGS-Badges |
| `MobileCallBar` | Fixe untere Leiste (Anrufen + WhatsApp) nur Mobile |
| `Breadcrumb` | Sichtbare Brotkrumen + `BreadcrumbList`-Schema |
| `CookielessNotice` | Schlanker Datenschutz-Hinweis (kein Banner, da cookieless Stack) |

**Inhalts-/Conversion-Komponenten**

| Komponente | Kurzbeschreibung |
|---|---|
| `Hero` | Claim, Sub-Claim, Trust-Zeile, Doppel-CTA, Projektfoto/Overlay |
| `Button` | Varianten: primary (Gruen), secondary (outline), emergency (Signal-Orange), ghost; immer weisser Text auf Fuellung |
| `TrustBar` | Kennzahlen (1.000+ Projekte, 15+ Jahre, 100 % zertifiziert) + Badges |
| `ServiceCard` | Leistung mit Icon, Kurztext, Link zur Pillar-Seite |
| `ProcessSteps` | 5-Schritt-Ablauf (Anfrage → Uebergabe) als nummerierte Liste |
| `BeforeAfterSlider` | Vorher/Nachher-Vergleich echter Projektfotos (a11y: Schieber per Tastatur) |
| `ReviewCard` | Kundenstimme (Name/Ort), optional Serifenzitat; nur first-party |
| `CityFactBox` | Stadtseiten: Anfahrt km/Fahrzeit, Stadtteile, Entsorgungswege |
| `FaqAccordion` | W-Fragen, Answer-First, `<details>`-basiert + `FAQPage`-Schema |
| `AuthorBox` | Autor-Foto, Bio, Credentials (E-E-A-T), `Person`-Schema-Anker |
| `CtaSection` | Wiederkehrender Conversion-Block (Anruf/WhatsApp/Formular) |
| `ContactForm` | Felder: Name, Telefon, E-Mail, Ort, Dienstleistung, Nachricht, Bildupload (max. 8); DSGVO-Hinweis verlinkt |
| `Table` / `Callout` / `Badge` | Redaktionsbausteine fuer Ratgeber (Tabelle/Hinweisbox/Label) |

---

### 2.7 Design-Tokens-Konzept

Alle Werte werden **einmal** als Tokens definiert und durchgaengig konsumiert: in Astro/CSS als **CSS Custom Properties** unter `:root` und parallel in der **`tailwind.config`** (Theme-Extend), sodass Utility-Klassen und Komponenten dieselbe Quelle nutzen. Optional Export als `tokens.json` (W3C-Design-Token-Format) fuer Figma-Sync via Figma Dev Mode MCP.

**Token-Kategorien:** `color.*` (Brand/Ink/Signal/Neutral/Semantic), `font.family/size/weight/leading`, `space.*` (4er-Skala), `radius.*`, `shadow.*`, `breakpoint.*`, `z.*` (Layer), `motion.duration/easing`.

**Beispiel (Auszug `:root`):**

```css
:root {
  --color-green-600: #15803D;   /* Default-Action / Links auf Weiss */
  --color-green-700: #0F6E37;   /* Hover */
  --color-ink-900:   #0B2027;   /* Footer / Overlays */
  --color-signal-600:#C2540A;   /* Notfall-Button */
  --color-text:      #3A4742;   /* gray-700, Fliesstext */
  --space-24: 1.5rem;  --space-96: 6rem;
  --radius-button: 12px; --radius-card: 16px;
  --shadow-card: 0 8px 24px rgba(11,32,39,.08);
  --font-sans: "Inter", system-ui, sans-serif;
}
```

**Namenskonvention:** semantisch wo moeglich (`--color-action`, `--color-surface`, `--color-text`) mit Verweis auf die Rohwerte – erleichtert spaetere Theming-Anpassungen ohne Komponenten-Refactor.

---

### 2.8 Bildsprache & Fotokonzept

**Leitlinie:** **Kompetenz statt Angst.** Dokumentarische, echte Projektfotos sind das Rueckgrat (Unique-Content- und E-E-A-T-Signal), lizenzierte Stockfotos nur als Ergaenzung.

**Pflicht-Motivkatalog (eigene Aufnahmen):**

1. **Vorher/Nachher** (Floor-Flex-Boden, Welleternit-Dach, Fassade) – fuer `BeforeAfterSlider`.
2. **PSA/Vollschutz** – Team in Schutzkleidung, Atemschutz (Kompetenz, nicht Schock).
3. **Schwarz-Weiss-Schleuse & Unterdruckhaltung** – sichtbares TRGS-519-Verfahren.
4. **Probenahme/Materialanalyse** – Labor-/Probennahme-Situation.
5. **Fachgerechte Entsorgung** – Big Bags, Kennzeichnung, Verladung.
6. **Team-Portraits** – fuer `AuthorBox` und Firmenseite (Naehe/Vertrauen).
7. **Geraet/Detail** – Unterdruckgeraet, Freimessung/Luftmessung VDI 3492.

**Stil:** leicht kuehl-neutrale Farbstimmung mit **dezentem Gruen-Hauch**, natuerliches Licht, aufgeraeumte Baustelle (unterstuetzt "Sauberkeit"). Keine angstmachenden Reisser, keine sterilen Klischee-Stockmotive.

**Technik:** Format **AVIF/WebP** mit Fallback, responsive `srcset`/`sizes`, `loading="lazy"` (ausser Hero/LCP-Bild = `eager` + `fetchpriority="high"`), explizite `width`/`height` gegen CLS, beschreibende deutsche `alt`-Texte (z. B. "Asbesthaltige Floor-Flex-Platten werden unter Schutzausruestung entfernt"). Auslieferung ueber Cloudflare Images bzw. Astro `<Image>`/`<Picture>` + Sharp.

**Bildrechte (gesperrt):** Stocklizenzen revisionssicher archivieren; fuer alle erkennbaren Personen (Team/Kunden) **schriftliche, widerrufbare Einwilligung** mit Loeschprozess. `ImageObject`-Schema mit `license` + `acquireLicensePage` (einziges echtes Bild-Rich-Result). **Foto-Watermark:** dezentes Logo-Signet (siehe 2.2), schuetzt eigene Aufnahmen und verstaerkt Markenpraesenz.

---

### 2.9 Icon- & Illustrationsstil

- **Icon-Set:** lineares **Outline-Set** (Lucide oder Phosphor), einheitliche Strichstaerke (~1.75 px), Standardgroessen 20/24 px. Farbe `green-600` oder `ink-700`. Icons sind **dekorativ** (`aria-hidden="true"`), wenn ein Textlabel vorhanden ist; eigenstaendige Icon-Buttons erhalten `aria-label`.
- **Verwendung:** Leistungs-Cards, Trust-/USP-Bloecke, Prozess-Schritte, Kontaktwege. Keine bunten 3D-/Emoji-Icons.
- **Illustrationen:** sparsam, nur wo Foto unmoeglich (z. B. schematischer TRGS-519-Ablauf, Schleusen-Aufbau). Stil: reduziert, linear, Marken-Gruen + Ink, gleiche Strichlogik wie Icons. Keine generischen Stock-Vektor-Cliparts.

---

### 2.10 Barrierefreiheit im Design (WCAG 2.2 AA)

Gemaess Briefing bauen wir **WCAG 2.2 AA** als Qualitaets- und Zukunftssicherung (auch ohne formale BFSG-Pflicht). Design-relevante Pflichten:

- **Kontrast:** Text `>= 4.5:1` (Grosstext `>= 3:1`), UI-Objekte/Fokusring `>= 3:1` (siehe 2.3). Vor Freigabe pro Paarung geprueft.
- **Fokuszustaende:** deutlich sichtbarer Fokusring (`2 px` `green-700`/Ink, `>= 3:1` zum Hintergrund, ausreichender Offset), niemals `outline: none` ohne Ersatz. Erfuellt **WCAG 2.2 – 2.4.11 Focus Not Obscured** (sticky Header/Bar duerfen Fokus nicht verdecken) und **2.4.13 Focus Appearance**.
- **Zielgroessen (2.5.8 Target Size Minimum):** interaktive Elemente `>= 24x24 px`, Touch-Primaeraktionen `>= 44x44 px` mit ausreichendem Abstand.
- **Farbe nie allein:** Status/Fehler immer Icon + Text + Farbe (vgl. semantische Farben).
- **Reduzierte Bewegung:** `prefers-reduced-motion: reduce` respektieren – Slider/Animationen/Parallax abschalten oder auf Opazitaet reduzieren; keine Auto-Play-Bewegung > 5 s ohne Pause.
- **Struktur:** logische Heading-Hierarchie, sichtbarer **Skip-Link**, Tastatur-Bedienbarkeit aller Komponenten (inkl. `BeforeAfterSlider`, `FaqAccordion`), sichtbare Labels statt reiner Placeholder, `:focus-visible`-Strategie.
- **Konsistenz (2.4.5/3.2):** wiederkehrende Komponenten an gleicher Position; **2.4.11/2.5.7/3.3.7** (Redundant Entry – vermeiden, Eingaben nicht doppelt verlangen) im `ContactForm` beruecksichtigen.

---

### 2.11 Design-Tooling-Setup fuer Claude Code

Empfohlener Stack fuer professionelle UIs mit visueller Iteration. **Windows/PowerShell-Hinweis:** keine Bash-Substitutionen (`$(...)`, `grep`) verwenden; Keys/Werte direkt eintragen. MCP-Scope: `--scope project` erzeugt teamweite `.mcp.json`, `--scope user` ist persoenlich-global. Nach jeder Installation Claude Code neu starten und mit `/mcp`, `/plugin`, `/skills` bzw. `claude mcp list` verifizieren.

| Tool | Einrichtungsbefehl | Nutzen im Projekt |
|---|---|---|
| **frontend-design Plugin** (Anthropic) | `/plugin install frontend-design@claude-plugins-official` | Hebt Design-Qualitaet, wirkt "AI-Slop" entgegen – Basis fuer markenkonforme UIs |
| **shadcn MCP** (offiziell) | `pnpm dlx shadcn@latest mcp init --client claude` | Saubere, zugaengliche Komponentenbasis fuer das Inventar (2.6) |
| **Chrome DevTools MCP** (wichtigstes Tool) | `/plugin marketplace add ChromeDevTools/chrome-devtools-mcp` oder `claude mcp add chrome-devtools npx chrome-devtools-mcp@latest` | Screenshots, DOM-Inspect, **a11y- und Kontrast-Audits**, Core-Web-Vitals, visuelle Iteration |
| **Playwright MCP** (Node 18+) | `claude mcp add --scope project playwright npx @playwright/mcp@latest` | Browser-Automatisierung, Screenshot-Verifikation ueber Breakpoints, Regressionschecks |
| **Figma Dev Mode MCP** (optional) | `claude plugin install figma@claude-plugins-official` | Import von Design-Tokens/Komponenten aus Figma; Sync mit `tokens.json` (2.7) |

**Empfohlener Workflow:** Tokens in Figma definieren → via Figma Dev Mode MCP nach `tokens.json` exportieren → in `tailwind.config`/`:root` uebernehmen → Komponenten mit shadcn bauen → mit Chrome DevTools MCP Kontrast/a11y/CWV pruefen → mit Playwright MCP ueber alle Breakpoints visuell verifizieren. Diese Schleife (Bauen → Messen → Korrigieren) ist verbindlicher Bestandteil der Definition-of-Done je UI-Komponente.

---

## 3. Informationsarchitektur & Content-Strategie

Dieser Abschnitt uebersetzt die strategischen Leitplanken (Abschnitte 0–2) in eine konkrete, baubare Informationsarchitektur. Er ist die verbindliche Quelle fuer R1 (Routing/Templates), R3 (Wireframes), R4 (Content-Produktion) und R5 (CMS-Modellierung). Alle URLs, Templates und Workflows hier sind gesperrt und nur durch den Lead-Architekten aenderbar.

---

### 3.1 Vollstaendige Sitemap der neuen Seite

Kanonische Domain: `https://www.asbesta-schadstoffsanierung.de/`. Alle URLs enden mit Trailing-Slash, sind kleingeschrieben, ohne Umlaute (transliteriert: ae/oe/ue/ss), ohne Datums- oder ID-Praefixe.

```text
/                                            Startseite (Org-Schema Vollreferenz)
│
├── /leistungen/                             Leistungs-Hub (Pillar-Uebersicht, 13 Leistungen)
│   ├── /leistungen/asbestsanierung/         (1)  Pillar
│   ├── /leistungen/abbrucharbeiten/         (2)  Pillar
│   ├── /leistungen/materialanalyse/         (3)  Pillar
│   ├── /leistungen/floorflex-entfernen/     (4)  Pillar
│   ├── /leistungen/bitumenkleber-entfernen/ (5)  Pillar
│   ├── /leistungen/welleternit-ausbauen/    (6)  Pillar
│   ├── /leistungen/fassadenplatten-ausbauen/(7)  Pillar
│   ├── /leistungen/asbestzement-ausbauen/   (8)  Pillar
│   ├── /leistungen/fensterbaenke-ausbauen/  (9)  Pillar
│   ├── /leistungen/cushion-vinyl-entfernen/ (10) Pillar
│   ├── /leistungen/kmf-sanierung/           (11) Pillar
│   ├── /leistungen/pak-sanierung/           (12) Pillar
│   ├── /leistungen/luftanalysen/            (13) Pillar
│   │
│   └── /leistungen/[leistung]/[stadt]/      Spoke (Leistung × Stadt) – nur indexwuerdige Kombinationen
│       z. B. /leistungen/floorflex-entfernen/essen/
│
├── /standorte/                              Standort-Hub (Stadt-Uebersicht, Karte)
│   ├── /standorte/marl/                     P1 – Premium-Unique (Hauptstandort)
│   ├── /standorte/bottrop/                  P1 – Premium-Unique
│   ├── /standorte/essen/                    P1 – Premium-Unique
│   ├── /standorte/oberhausen/               P1 – Premium-Unique
│   ├── /standorte/duesseldorf/              P1 – Premium-Unique
│   ├── /standorte/gelsenkirchen/            P1 – Premium-Unique
│   ├── /standorte/gladbeck/                 P1 – Premium-Unique
│   ├── /standorte/koeln/                    P1 – Premium-Unique
│   ├── /standorte/herten/                   P1 – Premium-Unique
│   └── /standorte/[stadt]/                  P2 – Template + echte lokale Daten (gestaffelt, Index-Gate)
│
├── /ratgeber/                               Blog/Ratgeber-Hub (Uebersicht, Filter nach Kategorie)
│   ├── /ratgeber/kategorie/asbest-erkennen/      Kategorie-Archiv
│   ├── /ratgeber/kategorie/kosten-foerderung/    Kategorie-Archiv
│   ├── /ratgeber/kategorie/recht-normen/         Kategorie-Archiv
│   ├── /ratgeber/kategorie/sanierung-ablauf/     Kategorie-Archiv
│   ├── /ratgeber/kategorie/schadstoffe-az/       Kategorie-Archiv
│   └── /ratgeber/[slug]/                          Einzel-Beitrag
│
├── /firma/                                  Ueber uns / Unternehmen (AboutPage)
│   └── /team/[name]/                        Autoren-/Experten-Profil (Person-Schema, E-E-A-T)
│
├── /bewertungen/                            Referenzen & Kundenstimmen (first-party)
├── /kontakt/                                Kontakt (ContactPage, Formular, NAP, Karte)
├── /karriere/                               Karriere / Stellenangebote (JobPosting-Schema)
│
├── /impressum/                              Recht (§ 5 DDG)
├── /datenschutz/                            Recht (Art. 13 DSGVO)
│
├── /suche/                                  Pagefind-Ergebnisseite (noindex,follow)
├── /danke/                                  Formular-Bestaetigung (noindex,follow)
├── /404                                     Fehlerseite (soft, mit Navigation + Suche)
│
├── /sitemap-index.xml                       Sitemap-Index (verweist auf Teilsitemaps)
├── /robots.txt                              Crawler-Direktiven + Sitemap-Deklaration
├── /llms.txt  · /llms-full.txt              GEO-Index + Volltext
└── /facts.json · /entities.json             Maschinenlesbare Fakten/Entitaeten
```

**Indexierungs-Status je Seitentyp (Schnellreferenz):**

| Seitentyp | Standard-Index-Status | Bedingung |
|---|---|---|
| Hauptseiten (`/`, `/firma`, `/kontakt`, `/bewertungen`, `/karriere`) | `index,follow` | immer |
| Leistungs-Hub + 13 Pillars | `index,follow` | immer (tragende Geldseiten) |
| Standort-Hub | `index,follow` | immer |
| Stadtseiten P1 (9 Prioritaetsstaedte) | `index,follow` | Premium-Unique vorhanden |
| Stadtseiten P2 (Template) | `index,follow` **nur nach Daten-Gate** | sonst `noindex,follow` |
| Spoke (Leistung × Stadt) | `noindex,follow` per Default | `index` nur bei bestandenem QS-Gate (6.3) |
| Ratgeber-Beitraege | `index,follow` | nach redaktioneller Freigabe |
| Kategorie-Archive | `index,follow` | ab ≥ 4 Beitraegen, sonst `noindex,follow` |
| Autorenprofile `/team/[name]/` | `index,follow` | bei ≥ 1 publiziertem Beitrag |
| `/suche/`, `/danke/`, Tag-Listen | `noindex,follow` | immer |
| `/impressum/`, `/datenschutz/` | `index,follow` | immer (Trust-Signal) |

---

### 3.2 URL-Konzept

**Grundregeln (gesperrt):**

1. **Schema:** `https://www.asbesta-schadstoffsanierung.de/[hub]/[slug]/` – flach, sprechend, kleingeschrieben, Bindestrich-getrennt, Trailing-Slash, max. 3 Pfadsegmente Tiefe.
2. **Keine Umlaute/Sonderzeichen:** `duesseldorf`, `koeln`, `fensterbaenke`, `welleternit` (Transliteration ae/oe/ue/ss). Slug ist im CMS pro Stadt/Leistung fest hinterlegt, nicht auto-generiert (verhindert Drift).
3. **Hub-zentrierte Hierarchie statt Flachstreuung:** Leistungen liegen unter `/leistungen/`, Standorte unter `/standorte/`, Ratgeber unter `/ratgeber/`. Das spiegelt Themen-Cluster und staerkt internes PageRank-Sculpting.
4. **Spoke-URL:** `/leistungen/[leistung]/[stadt]/` (Leistung zuerst, Stadt als Verfeinerung). Begruendung: das Geld-Keyword ist die Leistung; die Stadt qualifiziert sie. So bleibt der Leistungs-Pillar der hierarchische Elternknoten und verteilt Autoritaet nach unten.
5. **Stadtseite vs. Spoke – klare Abgrenzung:** `/standorte/[stadt]/` = „Was bieten wir in dieser Stadt?" (alle Leistungen, lokaler Kontext). `/leistungen/[leistung]/[stadt]/` = „Diese eine Leistung in dieser Stadt" (transaktional, eng). Keine Keyword-Kannibalisierung, da unterschiedliche Suchintention.
6. **Keine Parameter-URLs fuer Inhalte.** Filter im Ratgeber/Standort-Hub als statische Kategorie-Pfade (`/ratgeber/kategorie/...`), nicht `?cat=`. Pagefind-Suche unter `/suche/` (noindex).
7. **Permanenz:** Einmal publizierte indexierte URLs aendern sich nicht. Bei unvermeidbarer Aenderung 301 + Eintrag in die Redirect-Map (Abschnitt 5).

**Migrations-Mapping Alt → Neu (Auszug, Vollmapping in Abschnitt 5):**

| Alt-URL (WordPress) | Neu-URL | Code |
|---|---|---|
| `/leistungen/asbestsanierung-essen/` | `/leistungen/asbestsanierung/essen/` *(falls indexwuerdig)* sonst `/standorte/essen/` | 301 |
| `/leistungen/floorflex-marl/` | `/leistungen/floorflex-entfernen/marl/` | 301 |
| `/leistungen/[x]-[kleinstadt]/` (kein neues Ziel) | `/leistungen/[x]/` (Pillar) | 301 |
| `/firma` | `/firma/` | 301 |
| `http://…` / non-www | `https://www.…` | 301 |
| Alt-Kombination ohne sinnvolles Ziel | – | 410 |

---

### 3.3 Navigationskonzept

**3.3.1 Hauptnavigation (Header, sticky, max. 7 Top-Level-Items)**

| Position | Label | Ziel | Verhalten |
|---|---|---|---|
| Logo | (Wortmarke + Signet) | `/` | immer sichtbar, Schutzzone gewahrt |
| 1 | Leistungen | `/leistungen/` | Mega-Menue (Desktop): 13 Leistungen in 3 Spalten, gruppiert (Asbest / Boden & Kleber / Weitere Schadstoffe), je mit Icon |
| 2 | Standorte | `/standorte/` | Dropdown: 9 Prioritaetsstaedte + „Alle Einsatzgebiete" |
| 3 | Ratgeber | `/ratgeber/` | Dropdown: 5 Kategorien + „Alle Beitraege" |
| 4 | Firma | `/firma/` | direkter Link |
| 5 | Bewertungen | `/bewertungen/` | direkter Link |
| 6 | Kontakt | `/kontakt/` | direkter Link |
| CTA | „Kostenlose Anfrage" (green-600) + „Anrufen" (Telefon-Icon) | `/kontakt/` · `tel:` | rechts abgesetzt, primaerer Conversion-Anker |

- **Mobil:** Hamburger-Drawer mit denselben Items (Akkordeon fuer Leistungen/Standorte/Ratgeber). Zusaetzlich **sticky Bottom-Bar** mit drei Tap-Targets ≥ 44 px: „Anrufen" · „WhatsApp" (`wa.me/4917657724558`) · „Anfrage" (signal-600 nur fuer Notfall-Akzent, sonst green-600).
- Karriere, Impressum, Datenschutz **nicht** in der Hauptnav (Footer).

**3.3.2 Footer-Navigation (4 Spalten + Rechtsleiste)**

| Spalte 1 — Leistungen | Spalte 2 — Standorte | Spalte 3 — Unternehmen | Spalte 4 — Kontakt/NAP |
|---|---|---|---|
| Top-6 Leistungen + „Alle Leistungen" | 9 Prioritaetsstaedte + „Alle Einsatzgebiete" | Firma · Bewertungen · Ratgeber · Karriere | Logo · Adresse (Venusweg 24, 45770 Marl) · Telefon · WhatsApp · E-Mail · Oeffnungszeiten |
| | | | NAP exakt = GBP/Impressum/Schema |

- **Rechtsleiste (unter den Spalten):** Impressum · Datenschutz · © Asbesta Schadstoffsanierung 2026. Trust-Badges (TRGS 519/521/524, Fachbetrieb GefStoffV) als Text + Icon.
- Footer enthaelt **keine** 50–80er Stadt-Linkliste (Doorway-Signal). Maximal die 9 P1-Staedte + ein Link auf den Standort-Hub.

**3.3.3 Breadcrumbs (alle Seiten ausser Startseite, mit `BreadcrumbList`-Schema)**

```text
Start › Leistungen › Asbestsanierung
Start › Leistungen › Floor-Flex entfernen › Essen
Start › Standorte › Essen
Start › Ratgeber › Asbest erkennen › Floor-Flex-Platten erkennen
Start › Firma › Team › Daniel Alboush
```

- Letztes Element ist die aktuelle Seite (kein Link). Sichtbar oben unter dem Header, links ausgerichtet, klein (`small`), `gray-500`.

**3.3.4 Kontextuelle interne Verlinkung (PageRank-Sculpting)**

- Jeder **Pillar** verlinkt auf seine indexwuerdigen Spokes + 2–3 thematisch verwandte Leistungen + 1–2 passende Ratgeber.
- Jede **Stadtseite** verlinkt auf 2–3 geografische Nachbarstaedte (echte Anker, z. B. „Asbestsanierung in Gelsenkirchen") + die wichtigsten Leistungen.
- Jeder **Ratgeber** verlinkt auf 1–2 Geldseiten (Pillar/Stadt) als Conversion-Bruecke + 1–2 verwandte Beitraege.
- **Verbot:** versteckte/zugeklappte Massen-Linklisten, identische Anker ueber viele Seiten.

---

### 3.4 Template-Spezifikationen je Seitentyp

Notation: `H1/H2/H3` = Ueberschriftenebene; jeder Block ist eine wiederverwendbare Astro-Komponente. Schema je Typ siehe Abschnitt 7.

#### (a) Startseite `/`

| # | Block | Heading | Inhalt / Komponente |
|---|---|---|---|
| 1 | Hero | **H1:** „Asbest? Wir holen Sie da raus – schnell, sicher & professionell." | Sub-Claim „Spezialisten fuer Schadstoffe. Aus Marl. Fuer ganz NRW." · 3 CTAs (Anrufen / WhatsApp / Kostenlose Anfrage) · Vertrauenszeile (1.000+ Projekte · 15+ Jahre · 100 % zertifiziert) · dokumentarisches Hero-Foto (PSA/Schleuse), `loading=eager` |
| 2 | Trust-Bar | (kein H, ARIA-Label) | TRGS 519/521/524, Fachbetrieb § 8 GefStoffV, Betriebshaftpflicht – als Icon+Text |
| 3 | Leistungen | **H2:** „Unsere Leistungen – alles aus einer Hand" | Grid der 13 Leistungen (Icon, Titel, 1-Satz-Nutzen, Link zum Pillar) |
| 4 | Ablauf | **H2:** „In 5 Schritten sicher saniert" | 01 Anfrage › 02 Besichtigung › 03 Festpreis › 04 Sanierung (TRGS 519) › 05 Entsorgung & Uebergabe |
| 5 | Warum Asbesta | **H2:** „6 Gruende fuer Asbesta" | Schnell · Professionell · Puenktlich · Sauber · Freundlich · Fachgerechte Entsorgung |
| 6 | Einsatzgebiet | **H2:** „Im Einsatz in ganz NRW" | Karte/Stadtliste der 9 P1-Staedte + Link Standort-Hub |
| 7 | Referenzen | **H2:** „Das sagen unsere Kunden" | 3–5 echte Bewertungen (first-party), Link `/bewertungen/` |
| 8 | Ratgeber-Teaser | **H2:** „Wissen rund um Asbest & Schadstoffe" | 3 neueste Beitraege |
| 9 | Final-CTA | **H2:** „Asbestverdacht? Wir melden uns innerhalb von 24 Stunden." | Anfrageformular-Kurzform / CTA-Block |
| 10 | Footer | s. 3.3.2 | — |

#### (b) Leistungsseite (Pillar) `/leistungen/[leistung]/`

| # | Block | Heading | Inhalt |
|---|---|---|---|
| 1 | Breadcrumb | — | Start › Leistungen › [Leistung] |
| 2 | Hero | **H1:** „[Leistung] – [Nutzenversprechen]" (z. B. „Asbestsanierung nach TRGS 519 – sicher, dokumentiert, festpreisbasiert") | Intro Answer-First (Was, fuer wen, warum Asbesta) · CTAs · Leistungsfoto |
| 3 | Leistungsumfang | **H2:** „Was wir bei der [Leistung] uebernehmen" | Bullet-Liste Taetigkeiten; ggf. Untertypen als H3 |
| 4 | Ablauf | **H2:** „Ablauf Ihrer [Leistung]" | 5-Schritte, leistungsspezifisch konkretisiert |
| 5 | Recht/Norm | **H2:** „Vorschriften & Sicherheit" | H3: TRGS 519/521/524, GefStoffV, Schwarz-Weiss-Schleuse, Unterdruck, Freimessung |
| 6 | Kosten | **H2:** „Was kostet die [Leistung]?" | qm-Preisspanne (Tabelle), Festpreis-Hinweis, Link Kosten-Ratgeber |
| 7 | Einsatzgebiet | **H2:** „[Leistung] in Ihrer Stadt" | Links zu indexwuerdigen Spokes + Standort-Hub |
| 8 | FAQ | **H2:** „Haeufige Fragen zur [Leistung]" | 4–6 W-Fragen als H3, Answer-First (`FAQPage`) |
| 9 | Verwandtes | **H2:** „Passende Leistungen & Ratgeber" | 2–3 Leistungen + 1–2 Ratgeber |
| 10 | CTA | **H2:** „Jetzt kostenloses Festpreis-Angebot anfordern" | Formular/CTA |

#### (c) Stadt-Landingpage `/standorte/[stadt]/` — HYBRID-Logik

Block-Klassen folgen Abschnitt 6.2: **A = echt unique (Index-Pflicht)**, **B = lokal umrahmt/variabel**, **C = Boilerplate**. Ziel: ≥ 25–30 % Nicht-Boilerplate, 600–900 Woerter, Daten-Gate vor Index.

| # | Block | Heading | Klasse | Inhalt – HYBRID |
|---|---|---|---|---|
| 1 | Breadcrumb | — | C | Start › Standorte › [Stadt] |
| 2 | Hero | **H1:** „Asbestsanierung in [Stadt] – Ihr Fachbetrieb aus Marl" | B | Intro mit echter Entfernung/Fahrzeit ab Marl · CTAs · lokales/echtes Foto wenn vorhanden |
| 3 | Anfahrt & Gebiet | **H2:** „Schnell vor Ort in [Stadt]" | **A** | **Echte Daten:** km + Fahrzeit ab Marl, abgedeckte **reale Stadtteile** (Namen), eingebettete echte Maps-Route |
| 4 | Bausubstanz-Bezug | **H2:** „Asbest in [Stadt]: typische Bausubstanz" | **A** | **Echte fachliche Schlussfolgerung:** Baujahr-/Quartiersbezug, Ruhrgebiet → Bergsenkungsgebiete, typische Materialien vor Ort |
| 5 | Leistungen lokal | **H2:** „Unsere Leistungen in [Stadt]" | B | 13 Leistungen, lokal umrahmt; Links zu Spokes (sofern indexwuerdig) |
| 6 | Referenzprojekt | **H2:** „Referenzprojekt in [Stadt]" | **A** | 1–3 **echte, anonymisierte** lokale Projekte (Objektart, Material, Umfang, Ergebnis) |
| 7 | Entsorgung regional | **H2:** „Fachgerechte Entsorgung im Raum [Stadt]" | **A** | **Echte** regionale Entsorgungswege/Deponien |
| 8 | Trust/Ablauf | **H2:** „So arbeiten wir – zuverlaessig & dokumentiert" | C | Zertifikate, 5-Schritte-Ablauf (Boilerplate) |
| 9 | FAQ lokal | **H2:** „Haeufige Fragen aus [Stadt]" | **A** | 2–4 **stadtspezifische** FAQ (`FAQPage`) |
| 10 | Nachbarstaedte | **H2:** „Auch in der Naehe von [Stadt]" | B | 2–3 echte Nachbarstadt-Links (Anker mit Stadtname) |
| 11 | CTA | **H2:** „Asbestsanierung in [Stadt] anfragen" | C | Formular/CTA |

- **Index-Gate:** Sind die A-Bloecke 3/4/6/7/9 nicht mit echten Daten befuellt (CMS-Pflichtfelder leer), setzt der Build automatisch `noindex,follow`. Kein Veroeffentlichen leerer Template-Huelsen.
- **Verbot:** keine fingierte zweite Adresse je Stadt; Schema `Service` mit `areaServed={Stadt}`, **nicht** zweite `PostalAddress`.
- **P1-Staedte:** alle A-Bloecke handgepflegt, zusaetzlich echte lokale Fotos + 2–3 Referenzen. **P2-Staedte:** A-Bloecke aus gepflegter Datentabelle (km, Stadtteile, Deponie, 2 lokale FAQ) – gestaffelter Rollout (10–15/Welle).

#### (d) Ratgeber-Beitrag `/ratgeber/[slug]/` — EINHEITLICHE Struktur (E-E-A-T)

Verbindlich fuer **alle** Beitraege (entspricht Abschnitt 5.2):

| # | Block | Heading | Inhalt |
|---|---|---|---|
| 1 | Breadcrumb | — | Start › Ratgeber › [Kategorie] › [Titel] |
| 2 | Titel + Intro | **H1:** [Beitragstitel als W-Frage/Thema] | **Answer-First** (Leitfrage im 1. Satz beantwortet) + optionale **TL;DR-Box** |
| 3 | **Autorenbox** | — | **Foto + Name + jobTitle** („Sachkundiger nach TRGS 519") + Kurz-Bio + Link `/team/[name]/` · sichtbar `datePublished` + „Aktualisiert am [dateModified]" |
| 4 | Inhaltsverzeichnis | — | Sprungmarken zu allen H2 (ab ~800 Woertern) |
| 5 | Hauptteil | **H2/H3** | Semantische Chunks (100–300 Woerter, isoliert verstaendlich, Entitaet beim Namen) |
| 6 | **Pflicht-Tabelle** | (im Hauptteil) | mind. **1 Tabelle** (z. B. Materialvergleich, Kostenmatrix) |
| 7 | **Pflicht-Liste** | (im Hauptteil) | mind. **1 nummerierte Liste** (z. B. Schritt-fuer-Schritt) |
| 8 | Bilder | — | echte Projektfotos + lizenziertes Stock, beschreibende `alt`, AVIF/WebP |
| 9 | FAQ | **H2:** „Haeufige Fragen" | echte W-Fragen als H3, Answer-First (`FAQPage`) |
| 10 | **Quellen** | **H2:** „Quellen & Normen" | GefStoffV, TRGS 519/521/524, BAuA, DGUV, VDI 3492 (mit Stand/Datum) |
| 11 | Conversion | **H2:** [kontextueller CTA] | Bruecke zur passenden Geldseite (Pillar/Stadt) + Anruf/WhatsApp |
| 12 | Verwandtes | **H2:** „Weiterlesen" | 2–3 thematisch verwandte Beitraege |

- Schema: `BlogPosting` + `Person` (Autor per `@id`) + `BreadcrumbList` + `WebPage` (`mainEntityOfPage`) + `ImageObject` + optional `FAQPage`.
- KI darf assistieren, fachliche Verantwortung liegt beim namentlichen Experten (Who/How/Why).

---

### 3.5 Content-Plan: 13 Leistungsseiten

| # | Leistung (Pillar) | Haupt-Keyword | Kerninhalte (zusaetzlich zum Standard-Template) |
|---|---|---|---|
| 1 | Asbestsanierung | asbestsanierung nrw / kosten | TRGS 519, Schwarz-Weiss-Schleuse, Unterdruck, Freimessung VDI 3492, objektbezogene Anzeige Bezirksregierung, qm-Preise nach Materialart |
| 2 | Abbrucharbeiten | abbruch / rueckbau nrw | Teil-/Komplettabbruch, Schadstoff-Vorerkundung, Trennung/Entsorgung, Statik-Hinweise |
| 3 | Materialanalyse | asbest test / materialanalyse | Probenahme, akkreditiertes Labor, REM/Lichtmikroskopie, Probenkosten 50–150 €, Dauer/Ablauf |
| 4 | Floor-Flex entfernen | floor flex entfernen kosten | Erkennung, Plattengroessen 25×25 cm, Kleber/Schwarzkleber, Schnellgewinn-Hinweis, qm-Preis |
| 5 | Bitumenkleber entfernen | asbest bitumenkleber entfernen | schwarzer Kleber Asbest vs. PAK, rueckstandslose Entfernung, Untergrund, Folgebelag |
| 6 | Welleternit/Wellasbest ausbauen | welleternit entsorgen kosten | Dachplatten, Fixierung/Abtrag ohne Bruch, Big-Bag-Entsorgung, EFH-Dach-Beispielrechnung |
| 7 | Fassadenplatten ausbauen | asbest fassadenplatten | Demontage, Geruest/Absturzsicherung, Entsorgung, Sanierungsoptionen danach |
| 8 | Asbestzement ausbauen | asbestzement entsorgen | Rohre/Platten/Bauteile, Bruchvermeidung, Verpackung, Nachweis |
| 9 | Fensterbaenke ausbauen | asbest fensterbank | Innen-/Aussenbank, Erkennung, kleinteilige Sanierung, Festpreis |
| 10 | Cushion-Vinyl entfernen | cv belag asbest entfernen | CV-/PVC-Belag, Traegerpappe-Asbest, schichtweiser Abtrag, Untergrund |
| 11 | KMF-Sanierung | kmf sanierung / mineralwolle | alte vs. neue KMF, TRGS 521, Erkennung Baujahr, fachgerechte Entfernung |
| 12 | PAK-Sanierung | pak sanierung / teerkleber | PAK/Teer in Klebern/Parkett, Gefaehrdung, Abtrag, Entsorgung |
| 13 | Luftanalysen / Raumluftmessung | raumluftmessung vdi 3492 | VDI 3492, Faserzaehlung, Freimessung nach Sanierung, Kosten 200–500 €/Raum |

---

### 3.6 Stadt-Strategie (9 Prioritaetsstaedte + Skalierung)

**Phase 1 – Premium-Unique (handgepflegt, sofort):**

| Stadt | Region | Ca. Entfernung ab Marl* | Besonderheit fuer Klasse-A-Content |
|---|---|---|---|
| Marl | Ruhrgebiet | 0 km (Hauptstandort) | Heimmarkt, Chemiepark, viele Bestandsbauten 1960–80 |
| Herten | Ruhrgebiet | ~7 km | Bergbau-Erbe, Zechensiedlungen |
| Gelsenkirchen | Ruhrgebiet | ~15 km | dichte Bestandsbebauung, Bergsenkungsgebiete |
| Gladbeck | Ruhrgebiet | ~13 km | Wohnquartiere 60er/70er |
| Bottrop | Ruhrgebiet | ~18 km | Zechen-/Industrieumfeld |
| Oberhausen | Ruhrgebiet | ~28 km | Industriekultur, Altbestand |
| Essen | Ruhrgebiet | ~30 km | Grossstadt, gemischter Bestand, Bergsenkung |
| Duesseldorf | Rheinland | ~55 km | Gewerbe/Buero, Hausverwaltungen |
| Koeln | Rheinland | ~75 km | Grossstadt, hohe Nachfrage, Mehrfamilienhaeuser |

*Werte vor Launch faktenpruefen (Routing) und in die CMS-Datentabelle eintragen – sie sind Klasse-A-Pflichtfelder.

**Phase 2 – Skalierung (Template + echte Daten, gestaffelt):** Kandidaten u. a. Recklinghausen, Dorsten, Haltern am See, Dortmund, Bochum, Muenster, Aachen, Bielefeld, Soest. Rollout in Wellen von 10–15 Seiten alle 2–4 Wochen, jede Seite nur nach Daten-Gate + QS (3.7). **Spoke-Prioritaet:** Floor-Flex × Stadt zuerst (schwacher lokaler Wettbewerb = Schnellgewinn), beginnend mit den 9 P1-Staedten.

---

### 3.7 Redaktions-/Themenplan Blog (≥ 15 Titel, Kadenz)

**Kadenz:** Phase 4 Produktion von 4 Foundation-Beitraegen pro Cluster; ab Launch **1 neuer Beitrag/Woche** (R4), Top-Content quartalsweises Refresh (Norm-Aktualitaet). Jeder Beitrag folgt Template (d).

| # | Titel | Cluster/Kategorie | Haupt-Keyword | Verlinkt auf (Geldseite) |
|---|---|---|---|---|
| 1 | Floor-Flex-Platten erkennen: Bilder, Groessen & Baujahr | asbest-erkennen | floor flex erkennen | /leistungen/floorflex-entfernen/ |
| 2 | Schwarzer Kleber: Bitumen, PAK oder Asbest? | asbest-erkennen | schwarzer kleber asbest | /leistungen/bitumenkleber-entfernen/ |
| 3 | Asbest im Haus erkennen: Checkliste vor dem Hauskauf (Baujahr 1960–1993) | asbest-erkennen | asbest erkennen haus | /leistungen/materialanalyse/ |
| 4 | Welleternit erkennen: Wellasbest am Dach sicher identifizieren | asbest-erkennen | welleternit erkennen | /leistungen/welleternit-ausbauen/ |
| 5 | Asbestsanierung Kosten 2026: Preise je Material + EFH-Beispielrechnung | kosten-foerderung | asbestsanierung kosten | /leistungen/asbestsanierung/ |
| 6 | Eternitdach entsorgen: Kosten pro m² + Ablauf | kosten-foerderung | eternit entsorgen kosten | /leistungen/welleternit-ausbauen/ |
| 7 | Floor-Flex entfernen: Was kostet es pro Quadratmeter? | kosten-foerderung | floor flex entfernen kosten | /leistungen/floorflex-entfernen/ |
| 8 | Foerderung Asbestsanierung 2026: KfW & BAFA im Ueberblick | kosten-foerderung | foerderung asbestsanierung 2026 | /leistungen/asbestsanierung/ |
| 9 | Neue GefStoffV 2024/2025: Ampel-Modell & Pflichten einfach erklaert | recht-normen | neue gefahrstoffverordnung asbest | /leistungen/asbestsanierung/ |
| 10 | Asbest selbst entsorgen oder Fachbetrieb? Recht, Risiko, Kosten | recht-normen | asbest selbst entsorgen | /leistungen/asbestsanierung/ |
| 11 | TRGS 519 einfach erklaert: Was ein Fachbetrieb leisten muss | recht-normen | trgs 519 | /firma/ |
| 12 | Ablauf einer Asbestsanierung: Schritt fuer Schritt mit Schleuse & Freimessung | sanierung-ablauf | ablauf asbestsanierung | /leistungen/asbestsanierung/ |
| 13 | Raumluftmessung nach VDI 3492: Wann, wie, was kostet sie? | sanierung-ablauf | raumluftmessung vdi 3492 | /leistungen/luftanalysen/ |
| 14 | KMF / Mineralwolle: Alt oder neu? Erkennung & TRGS 521 | schadstoffe-az | kmf alte mineralwolle | /leistungen/kmf-sanierung/ |
| 15 | Nachtspeicheroefen & Asbest: Risiko, Ausbau, Entsorgung | schadstoffe-az | nachtspeicherofen asbest | /leistungen/materialanalyse/ |
| 16 | PAK & Teer im Estrich/Parkettkleber erkennen und sanieren | schadstoffe-az | pak teerkleber estrich | /leistungen/pak-sanierung/ |
| 17 | Cushion-Vinyl (CV-Belag): Asbest in der Traegerschicht erkennen | asbest-erkennen | cv belag asbest | /leistungen/cushion-vinyl-entfernen/ |

---

### 3.8 Autoren-/E-E-A-T-Konzept

**Prinzip:** Jeder Ratgeber-Beitrag traegt einen **namentlichen, qualifizierten Autor**. Bei YMYL (Asbest = Gesundheit/Sicherheit) ist Trust Pflicht. KI assistiert hoechstens; die fachliche Verantwortung liegt beim Experten.

**Autorenprofile (`/team/[name]/`, volles `Person`-Schema):**

| Rolle | jobTitle (Schema) | Expertise / knowsAbout | hasCredential | sameAs (Pflicht) |
|---|---|---|---|---|
| Inhaber / Sachkundiger | „Sachkundiger nach TRGS 519, Geschaeftsfuehrer" | Asbestsanierung, GefStoffV, Projektleitung, Entsorgung | TRGS-519-Sachkundenachweis | LinkedIn + Kammer-/Zertifikatsnachweis |
| Fachbauleiter | „Fachbauleiter Schadstoffsanierung" | TRGS 519/521/524, KMF, PAK, Bauleitung | Sachkunde-Zertifikate | LinkedIn |
| Sachverstaendige/r Analytik | „Sachverstaendige(r) Schadstoffanalytik" | Probenahme, VDI 3492, Materialanalyse, Freimessung | Mess-/Analytik-Qualifikation | LinkedIn / Fachverband |

- Jedes Profil: Foto, Bio (Werdegang, Jahre Erfahrung), `knowsAbout`, `hasCredential`, `worksFor`→Org `@id`, **`sameAs`** (hoechst-hebelndes Feld nach `name`). Artikel referenzieren den Autor per `@id` (keine verwaisten Entitaeten).
- **Quellenpflicht:** Jeder Beitrag schliesst mit „Quellen & Normen" (GefStoffV, TRGS 519/521/524, BAuA, DGUV, VDI 3492, KfW/BAFA) inkl. Stand-Datum. Keine erfundenen Studien/Zahlen.
- **Aktualitaet:** Norm-bezogene Beitraege quartalsweise pruefen; `dateModified` nur bei echter inhaltlicher Aktualisierung setzen (kein Fake-Refresh).

---

### 3.9 Content-Produktions-Workflow & Qualitaetskontrolle

**Workflow (R4 fuehrt, R2 prueft SEO, R3 liefert Bilder, Experte zeichnet fachlich ab):**

```text
1. Briefing       → Keyword, Suchintention, Zielseite, interne Links, Quellen festgelegt (R4+R2)
2. Outline        → H1/H2/H3 nach Template (b)/(c)/(d); Pflicht-Tabelle/-Liste/FAQ eingeplant
3. Draft          → Text (KI darf assistieren), Answer-First, Entitaeten benannt
4. Fachpruefung   → namentlicher Experte prueft Korrektheit/Haftung (YMYL!) und zeichnet ab
5. Bilder         → echte Projektfotos + lizenziertes Stock, AVIF/WebP, alt-Texte (R3)
6. SEO-/QS-Gate   → s. u. (R2)
7. Freigabe       → CMS-Status „published"; Sitemap + interne Links aktualisiert
8. Monitoring     → GSC quartalsweise; „crawled – not indexed" → anreichern oder noindex
```

**QS-Gates gegen Thin-/Duplicate-Content (vor Publish, automatisiert wo moeglich):**

| Gate | Schwelle / Regel | Aktion bei Verstoss |
|---|---|---|
| Unique-Anteil | ≥ 25–30 % Nicht-Boilerplate; Geld-/Stadtseiten 600–900 Woerter | unter Schwelle → nicht publizieren |
| Paarweiser Aehnlichkeitscheck | > 80 % Aehnlichkeit zu bestehender Seite | als Near-Duplicate flaggen → ueberarbeiten |
| Daten-Vollstaendigkeit (Stadt) | alle A-Pflichtfelder befuellt (km, Stadtteile, Deponie, ≥ 2 lokale FAQ, Referenz) | leeres Pflichtfeld → automatisch `noindex` |
| Faktencheck | Entfernungen, Deponien, Preise, Normen verifiziert | Fehler → Korrektur vor Freigabe |
| Cannibalization-Audit | keine zwei Seiten auf identisches Keyword/Intent | Konflikt → konsolidieren/canonical |
| Mensch-Stichprobe | 20 % aller Template-Seiten manuell gelesen | Maengel → Stichprobe ausweiten |
| Struktur-Gate (Ratgeber) | Autorenbox + ≥1 Tabelle + ≥1 Liste + Quellen + FAQ vorhanden | fehlt → zurueck an Redaktion |
| Index-Hygiene | indexierte Seitenzahl proportional zur Domain-Autoritaet | klein starten (P1), gestaffelt skalieren |

**Grundsatz:** Lieber 30 starke, indexierte Seiten als 300 duenne. Jede neue Seite muss eine eigenstaendige Suchintention bedienen und einen echten lokalen oder fachlichen Mehrwert liefern – sonst wird sie nicht publiziert oder auf `noindex` gesetzt.

---

## 4. SEO-Architektur (technisch & On-Page)

Dieser Abschnitt operationalisiert die in Abschnitt 3 (Briefing) gesperrten SEO-Prinzipien zu umsetzungsfertigen Standards. Kanonische Domain durchgaengig: `https://www.asbesta-schadstoffsanierung.de/` (www, mit Trailing Slash). Jede Festlegung hier ist fuer R2 (SEO/GEO-Lead) verbindlich und fuer R1/R4/R5 bindend, wo sie Templates, Content oder Infrastruktur betrifft.

---

### 4.1 On-Page-Standards je Seitentyp

**Grundregeln (fuer alle Seitentypen):**

- **Genau ein `<h1>` pro Seite.** Logische H2/H3-Hierarchie ohne Sprung (kein H2 → H4). H-Tags sind semantisch, nicht zur Optik gewaehlt.
- **`<title>`** 50–60 Zeichen (≤ ~575 px), Primaer-Keyword vorne, Marke am Ende nach Pipe: `… | Asbesta`. Pro URL einzigartig.
- **`<meta name="description">`** 140–160 Zeichen, aktiver Nutzennutzen + CTA + USP (TRGS 519, 24-h-Rueckmeldung), keine Keyword-Stuffing, pro URL einzigartig. Kein Ranking-Faktor, aber CTR-Hebel.
- **Self-referencing Canonical** auf jeder indexierbaren Seite (absolute URL, www, Trailing Slash).
- **`<html lang="de">`**, ein `og:locale` = `de_DE`. Keine hreflang (nur Deutsch, kein internationales Targeting).
- **Open Graph + Twitter Cards** auf jeder Seite (s. u.).
- **Breadcrumb sichtbar** (DOM) + als `BreadcrumbList`-JSON-LD.

**Title-/Description-/H1-Muster je Seitentyp:**

| Seitentyp | `<title>`-Muster | H1-Muster | Description-Leitlinie |
|---|---|---|---|
| Startseite | `Asbestsanierung NRW – zertifiziert nach TRGS 519 \| Asbesta` | `Asbest? Wir holen Sie da raus – schnell, sicher & professionell.` | Positionierung + Einsatzgebiet NRW + 24-h-Rueckmeldung + CTA |
| Leistungs-Pillar | `[Leistung] – TRGS 519 Fachbetrieb \| Asbesta` (z. B. `Asbestsanierung – zertifiziert nach TRGS 519 \| Asbesta`) | `[Leistung] vom zertifizierten Fachbetrieb` | Leistung + Verfahren + Zertifizierung + Festpreis-Angebot |
| Stadt-Hub | `Asbestsanierung [Stadt] – Fachbetrieb aus Marl \| Asbesta` | `Asbestsanierung in [Stadt] – Ihr Fachbetrieb vor Ort` | Stadt + Anfahrt ab Marl + Leistungen + lokale Referenz |
| Spoke (Leistung×Stadt) | `[Leistung] [Stadt] – Festpreis & TRGS 519 \| Asbesta` | `[Leistung] in [Stadt]` | Leistung + Stadt + qm-Preisspanne + 24-h-Erreichbarkeit |
| Ratgeber/Artikel | `[Leitfrage/Thema] – Ratgeber \| Asbesta` | exakte Leitfrage oder Themen-H1 | Answer-First-Kurzfassung + Lesenutzen |
| Firma | `Ueber Asbesta – Fachbetrieb fuer Schadstoffsanierung \| Asbesta` | `Inhabergefuehrter Fachbetrieb fuer Schadstoffsanierung` | Erfahrung (15+ J., 1.000+ Projekte) + Zertifikate + Werte |
| Bewertungen | `Bewertungen & Referenzen \| Asbesta` | `Das sagen unsere Kunden` | echte Stimmen, regionale Projekte |
| Kontakt | `Kontakt & kostenlose Anfrage \| Asbesta` | `Kontakt – kostenlose Besichtigung anfragen` | Tel/WhatsApp/Formular + 24-h-Zusage |

**Open-Graph-/Twitter-Block (Beispiel Leistungs-Pillar):**

```html
<meta property="og:type" content="website">
<meta property="og:locale" content="de_DE">
<meta property="og:site_name" content="Asbesta Schadstoffsanierung">
<meta property="og:title" content="Asbestsanierung – zertifiziert nach TRGS 519 | Asbesta">
<meta property="og:description" content="Zertifizierte Asbestsanierung mit Schwarz-Weiss-Schleuse und Unterdruck. Festpreis-Angebot, Rueckmeldung in 24 h. Fachbetrieb aus Marl fuer ganz NRW.">
<meta property="og:url" content="https://www.asbesta-schadstoffsanierung.de/leistungen/asbestsanierung/">
<meta property="og:image" content="https://www.asbesta-schadstoffsanierung.de/og/leistungen-asbestsanierung.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Asbesta-Team in Vollschutz bei der Asbestsanierung">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Asbestsanierung – zertifiziert nach TRGS 519 | Asbesta">
<meta name="twitter:description" content="Zertifizierte Asbestsanierung, Festpreis-Angebot, Rueckmeldung in 24 h.">
<meta name="twitter:image" content="https://www.asbesta-schadstoffsanierung.de/og/leistungen-asbestsanierung.jpg">
```

- **`og:type`**: `website` fuer Startseite/Leistungen/Stadt/Kontakt/Firma; `article` fuer Ratgeber (zusaetzlich `article:published_time`, `article:modified_time`, `article:author`, `article:section`).
- **OG-Images** pro Seitentyp generiert (1200×630, < 200 KB, Logo prominent eingebettet, Motiv passend zur Seite). Fallback: globales Marken-OG-Image. Niemals OG-Image fehlend (sonst leerer Social-/Chat-Share).

---

### 4.2 URL- & Slug-Konventionen

| Regel | Festlegung |
|---|---|
| Schema | Kleinbuchstaben, Bindestriche, **keine** Umlaute (ae/oe/ue/ss), keine Unterstriche, keine Parameter, keine Datums-Praefixe |
| Trailing Slash | **Immer mit** Trailing Slash (Astro: `trailingSlash: 'always'`); konsistent erzwingen (301 fuer abweichende Variante) |
| Tiefe | max. 3 Ebenen ab Root |
| Stabilitaet | Slugs sind permanent; Aenderung nur mit 301 |

**Slug-Map (gesperrte Leistungs-Slugs, 13 Leistungen):**

| Leistung | Slug |
|---|---|
| Abbrucharbeiten | `/leistungen/abbrucharbeiten/` |
| Materialanalyse | `/leistungen/materialanalyse/` |
| Asbestsanierung | `/leistungen/asbestsanierung/` |
| Floor-Flex entfernen | `/leistungen/floorflex-entfernen/` |
| Asbesthaltigen Bitumenkleber entfernen | `/leistungen/bitumenkleber-entfernen/` |
| Welleternit/Wellasbest ausbauen | `/leistungen/welleternit-ausbauen/` |
| Fassadenplatten ausbauen | `/leistungen/fassadenplatten-ausbauen/` |
| Asbestzement ausbauen | `/leistungen/asbestzement-ausbauen/` |
| Fensterbaenke ausbauen | `/leistungen/fensterbaenke-ausbauen/` |
| Cushion-Vinyl (CV) entfernen | `/leistungen/cv-belag-entfernen/` |
| KMF-Sanierung | `/leistungen/kmf-sanierung/` |
| PAK-Sanierung | `/leistungen/pak-sanierung/` |
| Luftanalysen / Raumluftmessung | `/leistungen/luftanalysen/` |

**Stadt-Slugs:** entumlautet, z. B. `/standorte/marl/`, `/standorte/duesseldorf/`, `/standorte/koeln/`, `/standorte/gelsenkirchen/`.
**Spoke:** `/leistungen/[leistung]/[stadt]/`, z. B. `/leistungen/floorflex-entfernen/essen/`.
**Ratgeber:** `/ratgeber/[slug]/`, themenbasiert ohne Datum, z. B. `/ratgeber/floor-flex-erkennen/`.

---

### 4.3 Interne Verlinkungs-Strategie (Hub-and-Spoke)

Ziel: gerichteter Link-Equity-Fluss zu Geldseiten, klare Topical-Cluster, kurze Klickpfade (jede wichtige Seite ≤ 3 Klicks von der Startseite), **keine** Orphans.

**Cluster-Modell (Leistung ↔ Stadt ↔ Ratgeber):**

```
Startseite
 ├─ /leistungen/ (Hub) ──────► 13 Leistungs-Pillars
 │                                   ├─ Spokes [leistung]/[stadt]/
 │                                   └─ verlinkt: passende Ratgeber + Stadt-Hubs
 ├─ /standorte/ (Hub) ───────► Stadt-Hubs (9 Premium + skalierte)
 │                                   ├─ listet Leistungen in der Stadt (→ Spokes)
 │                                   └─ verlinkt 2–3 Nachbarstaedte
 └─ /ratgeber/ (Hub) ────────► Ratgeber-Artikel
                                     └─ verlinkt thematisch passende Leistungs-Pillars (Conversion-Bruecke)
```

**Verbindliche Verlinkungsregeln:**

1. **Hub → Pillar/Stadt:** Leistungs-Hub verlinkt alle 13 Pillars; Standort-Hub verlinkt alle indexierten Stadt-Hubs.
2. **Pillar ↔ Stadt:** Jeder Leistungs-Pillar verlinkt zu relevanten Stadt-Spokes; jeder Stadt-Hub listet die wichtigsten Leistungen vor Ort (zum Spoke oder, falls nicht indexiert, zum Pillar mit Stadt-Anker).
3. **Spoke:** verlinkt zurueck zu **beiden** Hubs (Leistung + Stadt) **und** zu 2–3 geografischen Nachbarstaedten (echte Anker wie „Floor-Flex entfernen in Gladbeck", **keine** 80er-Footer-Linkliste = Doorway-Signal).
4. **Ratgeber → Geldseite:** Jeder Artikel verlinkt 2–4 thematisch passende Leistungs-/Stadtseiten (Conversion-Bruecke P2→P1). Beispiel: „Floor-Flex erkennen" → `/leistungen/floorflex-entfernen/`.
5. **Geldseite → Ratgeber:** Pillar verlinkt 1–2 vertiefende Ratgeber (Topical Authority, Verweildauer).
6. **Anker-Texte** beschreibend und variiert (kein „hier klicken", kein Exact-Match-Spam).
7. **Kontextlinks im Fliesstext** schlagen Footer-Massenlinks – Footer haelt nur Haupt-Navigation + Recht.
8. **Orphan-Check** im Build/CI: Seite ohne eingehenden internen Link blockiert den Build (R5).

---

### 4.4 XML-Sitemap-Strategie

- **Generierung** via `@astrojs/sitemap` automatisiert aus dem Build. Nur **kanonische, indexierbare 200-URLs** – **niemals** `noindex`-, Redirect- oder 404-URLs.
- **Sitemap-Index** (`/sitemap-index.xml`) + thematische Teilsitemaps fuer saubere GSC-Diagnose und gezieltes Crawl-Steuern:

| Teilsitemap | Inhalt |
|---|---|
| `/sitemap-core.xml` | Startseite, Firma, Bewertungen, Kontakt, Impressum, Datenschutz, Hubs |
| `/sitemap-leistungen.xml` | 13 Leistungs-Pillars |
| `/sitemap-standorte.xml` | indexierte Stadt-Hubs |
| `/sitemap-spokes.xml` | indexierte Leistung×Stadt-Spokes |
| `/sitemap-ratgeber.xml` | Ratgeber-Artikel |
| `/sitemap-images.xml` | optional: Bild-Sitemap (Projektfotos mit `image:loc`) |

- `<lastmod>` echt aus CMS-`dateModified` (kein pauschales Build-Datum) — Aktualitaetssignal.
- **Split-Regel:** > 50.000 URLs pro Datei → automatisch splitten (Astro-Sitemap macht das). Realistisch bleiben wir weit darunter.
- **Einreichen:** Google Search Console **und** Bing Webmaster Tools (ChatGPT-Suche nutzt Bing-Index). In `robots.txt` als `Sitemap:` deklariert.
- Bei `noindex`-Setzung einer zuvor indexierten Seite: aus Sitemap entfernen, aber crawlbar lassen, bis Google die Auszeichnung verarbeitet hat.

---

### 4.5 robots.txt, Canonical-/noindex-Strategie & Index-Hygiene

**`robots.txt` (kanonische Fassung):**

```txt
User-agent: *
Allow: /

# Retrieval-/AI-Crawler explizit erlauben (Zitierfaehigkeit)
User-agent: Googlebot
Allow: /
User-agent: Bingbot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Claude-SearchBot
Allow: /

# Keine Crawl-Sperre fuer noindex-Seiten (sonst kann Google noindex nicht lesen)

Sitemap: https://www.asbesta-schadstoffsanierung.de/sitemap-index.xml
# Maschinenlesbar:
# https://www.asbesta-schadstoffsanierung.de/llms.txt
```

- **Keine** `Disallow`-Regeln fuer `noindex`-Seiten (Google muss den Tag lesen koennen). Nur echte Tech-Pfade (z. B. interne JSON-Endpoints ohne SEO-Wert) bei Bedarf sperren.

**Canonical-/noindex-Strategie (gesperrt):**

- **Self-referencing Canonical** auf jeder indexierbaren Seite.
- **Canonical und `noindex` NIE auf derselben Seite mischen** – ein klares Signal pro Seite.
- **`<meta name="robots" content="noindex,follow">`** fuer: Danke-/Bestaetigungsseiten nach Formular, interne Pagefind-Suchergebnisse, schwache/datenlose Stadt-Kombinationen, etwaige Filter-/Parameter-Ansichten.
- **`index,follow`** (Default) nur, wenn die Index-Gate-Logik (4.5 Index-Gate) erfuellt ist.

**Index-Gate fuer Stadt-Kombinationen (automatisch im Build, R1/R5):**

Eine Spoke-Seite wird **nur** auf `index` gesetzt und in die Sitemap aufgenommen, wenn **alle** Bedingungen erfuellt sind:

| Bedingung | Schwelle |
|---|---|
| Unique-Anteil (nicht-Boilerplate) | ≥ 25–30 %, Ziel 600–900 Woerter |
| Pflicht-A-Bloecke vollstaendig | Anfahrt km+Fahrzeit, Stadtteile, ≥ 1 lokale Referenz, ≥ 2 stadtspezifische FAQ |
| Near-Duplicate-Check | < 80 % Aehnlichkeit zu jeder anderen Seite |
| Interner Inlink vorhanden | ≥ 1 |

Faellt eine Bedingung weg → automatisch `noindex,follow` + aus Sitemap. So bleibt die indexierte Seitenzahl proportional zur Domain-Autoritaet (klein starten: 9 Premium-Staedte, dann staffelweise 10–15/Welle).

**GSC-Hygiene quartalsweise:** „Crawled – currently not indexed" / „Discovered – not indexed" = Googles Urteil „zu duenn" → Inhalt anreichern **oder** sauber auf `noindex` setzen (kein Index-Bloat tolerieren).

---

### 4.6 Crawl-Budget-Management

Bei < 10.000 Seiten ist Crawl-Budget kein akutes Engpassthema – Disziplin hier zahlt aber auf Crawl-Effizienz, schnelle (Re-)Indexierung neuer Geldseiten und saubere GSC-Signale ein.

- **Index-Bloat vermeiden:** keine 1.960 Thin-Pages mehr; nur indexwuerdige URLs ueberhaupt erzeugen/indexieren.
- **Keine Crawl-Fallen:** keine endlosen Parameter-/Filter-URLs, keine Kalender-/Session-IDs, keine Faceted-Navigation mit Parametern.
- **Saubere Statuscodes:** 200 fuer Content, 301 fuer Umzuege (keine Ketten), 410 fuer endgueltig entfernte Inhalte, 404 nur fuer echte Fehler. **Redirect-Ketten und Soft-404 eliminieren.**
- **Schnelle Antwortzeiten** (statisches HTML von Cloudflare-Edge) erhoehen die effektive Crawl-Rate.
- **`lastmod` korrekt** → Google re-crawlt gezielt geaenderte Seiten.
- **Interne Verlinkung** lenkt Crawler zuerst auf Geldseiten (Hub-Naehe = Crawl-Prioritaet).
- **Bilder/Assets** mit langen `Cache-Control`-Headern + Hash-Dateinamen (Immutable Caching).

---

### 4.7 Strukturierte Daten / JSON-LD je Seitentyp

Immer **JSON-LD** im `<head>`, **ein `@graph` pro Seite**, Organisation **einmal** voll auf der Startseite, ueberall sonst per `@id` referenziert. `@id`-Werte identisch zu `facts.json`/`entities.json`. **Nur sichtbare Inhalte markieren** (Spam-Richtlinie). `aggregateRating`/`Review` **nur** mit echten, first-party sichtbar dargestellten Bewertungen.

**Realismus 2026:** Sichtbare Rich Results praktisch nur **Breadcrumbs** + **Article**; `FAQPage`/Org-Sterne meist kein Snippet mehr – Markup bleibt fuer Knowledge Graph / AI Overviews / Entitaetsverstaendnis wertvoll. `ImageObject` mit `license`+`acquireLicensePage` = einziges echtes Bild-Rich-Result.

**Startseite – `Organization`+`HomeAndConstructionBusiness` + `WebSite` + `WebPage` (Auszug):**

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "HomeAndConstructionBusiness"],
      "@id": "https://www.asbesta-schadstoffsanierung.de/#organization",
      "name": "Asbesta Schadstoffsanierung",
      "url": "https://www.asbesta-schadstoffsanierung.de/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.asbesta-schadstoffsanierung.de/logo.png",
        "width": 512, "height": 512
      },
      "image": "https://www.asbesta-schadstoffsanierung.de/og/startseite.jpg",
      "telephone": "+49-2365-2960630",
      "email": "kontakt@asbesta-schadstoffsanierung.de",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Venusweg 24",
        "addressLocality": "Marl",
        "postalCode": "45770",
        "addressRegion": "Nordrhein-Westfalen",
        "addressCountry": "DE"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 51.6566, "longitude": 7.0900 },
      "areaServed": [
        { "@type": "City", "name": "Marl" },
        { "@type": "City", "name": "Essen" },
        { "@type": "GeoCircle",
          "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 51.6566, "longitude": 7.0900 },
          "geoRadius": "60000" }
      ],
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "07:00", "closes": "18:00"
      }],
      "knowsAbout": ["Asbestsanierung","TRGS 519","KMF-Sanierung","PAK-Sanierung","Floor-Flex"],
      "sameAs": [
        "https://www.google.com/maps?cid=XXXX",
        "https://www.wikidata.org/wiki/QXXXX"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.asbesta-schadstoffsanierung.de/#website",
      "url": "https://www.asbesta-schadstoffsanierung.de/",
      "name": "Asbesta Schadstoffsanierung",
      "publisher": { "@id": "https://www.asbesta-schadstoffsanierung.de/#organization" },
      "inLanguage": "de-DE",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.asbesta-schadstoffsanierung.de/suche/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.asbesta-schadstoffsanierung.de/#webpage",
      "url": "https://www.asbesta-schadstoffsanierung.de/",
      "isPartOf": { "@id": "https://www.asbesta-schadstoffsanierung.de/#website" },
      "about": { "@id": "https://www.asbesta-schadstoffsanierung.de/#organization" },
      "inLanguage": "de-DE"
    }
  ]
}
```

> Hinweis: `aggregateRating` wird der Organisation **nur** hinzugefuegt, wenn echte, auf `/bewertungen/` sichtbare Bewertungen vorliegen (siehe Review-Snippet). Telefon/E-Mail/Geo vor Launch verifizieren; E-Mail final laut Impressum-Klaerung.

**Leistungs-/Spoke-Seite – `Service` + `BreadcrumbList` + `FAQPage` (Auszug Spoke):**

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.asbesta-schadstoffsanierung.de/leistungen/floorflex-entfernen/essen/#service",
      "serviceType": "Floor-Flex-Platten entfernen",
      "provider": { "@id": "https://www.asbesta-schadstoffsanierung.de/#organization" },
      "areaServed": { "@type": "City", "name": "Essen" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Floor-Flex-Entfernung Essen",
        "itemListElement": [{
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Floor-Flex-Platten und Kleber entfernen" }
        }]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Start", "item": "https://www.asbesta-schadstoffsanierung.de/" },
        { "@type": "ListItem", "position": 2, "name": "Leistungen", "item": "https://www.asbesta-schadstoffsanierung.de/leistungen/" },
        { "@type": "ListItem", "position": 3, "name": "Floor-Flex entfernen", "item": "https://www.asbesta-schadstoffsanierung.de/leistungen/floorflex-entfernen/" },
        { "@type": "ListItem", "position": 4, "name": "Essen", "item": "https://www.asbesta-schadstoffsanierung.de/leistungen/floorflex-entfernen/essen/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "Was kostet die Floor-Flex-Entfernung in Essen?",
        "acceptedAnswer": { "@type": "Answer", "text": "Die Entfernung von Floor-Flex-Platten inkl. Kleber liegt erfahrungsgemaess bei rund 35–45 EUR/m2 zzgl. Entsorgung. Den verbindlichen Festpreis nennen wir nach kostenfreier Besichtigung vor Ort." }
      }]
    }
  ]
}
```

**Bewertungen – `Review` + `AggregateRating` (nur first-party, sichtbar):**

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.asbesta-schadstoffsanierung.de/#organization",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "37"
  },
  "review": [{
    "@type": "Review",
    "author": { "@type": "Person", "name": "Familie Krueger" },
    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    "reviewBody": "Schnell, professionell, puenktlich und freundlich."
  }]
}
```

> `ratingValue`/`reviewCount` **nur** mit real auf `/bewertungen/` sichtbaren, verifizierbaren Bewertungen befuellen – sonst Policy-Verstoss. Platzhalterwerte vor Launch durch echte Zahlen ersetzen.

**Ratgeber – `Article`/`BlogPosting` + `Person` (Autor) (Auszug):**

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.asbesta-schadstoffsanierung.de/ratgeber/floor-flex-erkennen/#article",
      "headline": "Floor-Flex-Platten erkennen: Bilder, Groessen, Baujahr",
      "image": "https://www.asbesta-schadstoffsanierung.de/ratgeber/floor-flex-erkennen/hero.jpg",
      "datePublished": "2026-05-12",
      "dateModified": "2026-06-01",
      "author": { "@id": "https://www.asbesta-schadstoffsanierung.de/team/max-mustermann/#person" },
      "publisher": { "@id": "https://www.asbesta-schadstoffsanierung.de/#organization" },
      "mainEntityOfPage": "https://www.asbesta-schadstoffsanierung.de/ratgeber/floor-flex-erkennen/",
      "inLanguage": "de-DE"
    },
    {
      "@type": "Person",
      "@id": "https://www.asbesta-schadstoffsanierung.de/team/max-mustermann/#person",
      "name": "Max Mustermann",
      "jobTitle": "Sachkundiger nach TRGS 519",
      "worksFor": { "@id": "https://www.asbesta-schadstoffsanierung.de/#organization" },
      "knowsAbout": ["Asbestsanierung","Floor-Flex","TRGS 519"],
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Sachkundenachweis TRGS 519"
      },
      "sameAs": ["https://www.linkedin.com/in/XXXX"]
    }
  ]
}
```

**Kontakt – `ContactPage` + `LocalBusiness`** (address/geo/telephone/openingHoursSpecification + `ContactPoint`), `Firma` → `AboutPage` + `Person`(en). Stadt-Hub analog zu Spoke, aber `Service` mit `areaServed`={Stadt} ohne fingierte zweite Adresse.

**Validierung:** jeder Seitentyp gegen Google Rich Results Test + Schema.org-Validator (CI-Gate, R5). Kein erfundenes Markup, kein Markup ohne sichtbares Pendant.

---

### 4.8 Core Web Vitals – Budget & Massnahmen

Astro-SSG liefert das Fundament (reines HTML, minimaler JS). Verbindliche Budgets (Feldwert-Ziel, 75. Perzentil, mobil):

| Metrik | Budget | Hebel |
|---|---|---|
| **LCP** | < 2.0 s (Ziel 1.5 s) | Hero-Bild als `<img>` mit `fetchpriority="high"`, AVIF, korrektes `srcset`/`sizes`; kein Lazyload des LCP-Elements; Hauptschrift `preload` |
| **INP** | < 200 ms | Astro Islands nur wo noetig; kein Render-blocking-JS; kleine, isolierte Interaktivitaet (Slider, Akkordeon) |
| **CLS** | < 0.1 | feste `width`/`height` bzw. `aspect-ratio` auf allen Bildern/Embeds; Schrift `swap` mit gematchten Fallback-Metriken; keine spaet injizierten Banner |
| **TTFB** | < 0.6 s | Cloudflare-Edge-Auslieferung des statischen HTML |
| **JS-Gesamt** (initial) | < 50 KB komprimiert | Islands-Architektur, kein Framework-Hydration-Overhead auf statischen Seiten |

**Weitere Massnahmen:** kritisches CSS inline / kleine CSS-Bundles; `font-display: swap` + selbst gehostetes Inter (WOFF2, latin+latin-ext-Subset); `Cache-Control: public, max-age=31536000, immutable` fuer gehashte Assets; keine Third-Party-Tags ausser cookieless Analytics (Plausible/Umami). **CI-Gate:** Lighthouse-CI/PageSpeed-Budget bricht Build bei Verletzung (R1/R5).

---

### 4.9 Bild-SEO

| Aspekt | Festlegung |
|---|---|
| Format | AVIF (primaer) + WebP (Fallback) via Astro `<Picture>`/Cloudflare Images |
| Responsive | `srcset` + `sizes` fuer reale Breakpoints; keine ueberdimensionierten Bilder |
| Lazyload | `loading="lazy"` + `decoding="async"` ueberall **ausser** LCP/Hero (`fetchpriority="high"`, eager) |
| Dimensionen | immer `width`/`height` bzw. `aspect-ratio` (CLS-Schutz) |
| Dateinamen | sprechend, entumlautet: `asbestsanierung-marl-schwarz-weiss-schleuse.avif` |
| Alt-Texte | beschreibend, kontextuell, ohne Keyword-Stuffing; dekorative Bilder `alt=""` |
| Bild-Lizenz-Markup | `ImageObject` mit `license` + `acquireLicensePage` (echtes Bild-Rich-Result) |
| Bild-Sitemap | Projektfotos optional in `/sitemap-images.xml` |
| CDN/Caching | Cloudflare Images / Edge, Hash-Dateinamen + Immutable-Cache |

---

### 4.10 301-Redirect-Mapping von der Alt-Seite (~1.960 URLs)

Die Alt-WordPress-Struktur (`/leistungen/[leistung]-[stadt]`, ~1.960 Thin-Pages, + www-Variante) wird vollstaendig migriert. **Kein** Massendelete ohne Redirect (Link-Equity-Verlust + 404-Welle).

**Vorgehen (R2, im CI als Redirect-Map gepflegt):**

1. **Vollstaendiger URL-Inventar** der Alt-Domain ziehen: GSC (indexierte URLs), Screaming Frog Crawl, alte XML-Sitemap, Server-Logs, Top-Backlink-Ziele (Ahrefs/GSC-Links). Liste deduplizieren.
2. **www-/Protokoll-Normalisierung:** alle `http://` und nicht-`www` → `https://www`-Kanonisch (eine globale 301-Regel auf Edge/Cloudflare).
3. **Pattern-basiertes Mapping** Alt → Neu: `/leistungen/[leistung]-[stadt]` → neue Spoke `/leistungen/[leistung]/[stadt]/` **falls** diese indexwuerdig ist; **sonst** → Leistungs-Pillar `/leistungen/[leistung]/` (naechstbestes relevantes Ziel). Niemals pauschal alles auf die Startseite (Soft-404-Signal).
4. **Slug-Normalisierung** alter Leistungsnamen auf die gesperrte Slug-Map (4.2).
5. **Kein Ziel vorhanden** (irrelevante/aufgeloeste Leistung) → **410 Gone** (klares Entfernen-Signal, kein ewiger Redirect).
6. **Keine Redirect-Ketten** (max. 1 Hop); Protokoll/www-Normalisierung und Pfad-Redirect in einer Regel zusammenfuehren.
7. **Trailing-Slash-Konsistenz** in jeder Zielangabe.

**Beispiel-Mapping-Tabelle:**

| Alt-URL | Neu-Ziel | Code |
|---|---|---|
| `http://asbesta-schadstoffsanierung.de/leistungen/asbestsanierung-essen` | `https://www.asbesta-schadstoffsanierung.de/leistungen/asbestsanierung/essen/` | 301 |
| `https://asbesta-schadstoffsanierung.de/leistungen/floorflex-essen` | `https://www.asbesta-schadstoffsanierung.de/leistungen/floorflex-entfernen/essen/` | 301 |
| `…/leistungen/asbestsanierung-kleinstadtohnegehalt` (nicht indexwuerdig) | `https://www.asbesta-schadstoffsanierung.de/leistungen/asbestsanierung/` | 301 |
| `…/leistungen/welleternit-koeln` | `https://www.asbesta-schadstoffsanierung.de/leistungen/welleternit-ausbauen/koeln/` | 301 |
| `…/leistungen/cv-belag-bochum` (kein indexwuerdiger Spoke) | `https://www.asbesta-schadstoffsanierung.de/leistungen/cv-belag-entfernen/` | 301 |
| `…/leistungen/eternit-entsorgen-veraltet` (kein Ziel) | — | 410 |
| `http://asbesta-schadstoffsanierung.de/firma` | `https://www.asbesta-schadstoffsanierung.de/firma/` | 301 |

**Technisch:** Redirect-Map als Cloudflare Pages `_redirects`-Datei bzw. Bulk-Redirect-Liste (skaliert fuer ~1.960 Eintraege). Nach Launch: GSC „Coverage"/„Seiten"-Report + Crawl auf 404/Soft-404/Ketten pruefen (Phase 7), Restposten nachziehen. Alte Sitemap bewusst kurz erreichbar lassen, damit Google die Alt-URLs schnell neu crawlt und die 301 verarbeitet.

---

### 4.11 Google Business Profile & lokale Citations/Bewertungen

**GBP-Setup (R2):**

- Primaerkategorie **„Sanierungsunternehmen"** oder **„Abbruchunternehmen"**; Sekundaer: Asbestuntersuchungsdienst, Schadstoffsanierung.
- NAP **exakt** = Master-NAP (Asbesta Schadstoffsanierung · Venusweg 24, 45770 Marl · +49 2365 2960630) – identisch zu Impressum, Schema, facts.json.
- Servicegebiet (Service-Area-Business) statt rein Ladengeschaeft, falls kein Laufkundenverkehr: NRW-Staedte als Einzugsgebiet pflegen.
- **10+ Fotos** initial (echte Projektfotos, Team, Fahrzeuge), danach **1 neues Vorher/Nachher-Foto pro Woche**.
- GBP-Leistungen + regelmaessige Beitraege (Updates), Q&A vorbefuellen.
- **CID-URL** aus GBP in `sameAs` (Schema/entities.json) und Citations konsistent.

**Citations (NAP-Konsistenz, 20–50 DE-Verzeichnisse):**

Gelbe Seiten, Das Oertliche, 11880, Cylex, meinestadt.de, Bing Places, Apple Business Connect, IHK/HWK-Verzeichnis u. a. **Master-NAP** als Single Source of Truth; jede Abweichung (Abk., Telefonformat) bereinigen.

**Bewertungsstrategie:**

- Bewertungs-Velocity **stetig** (Ziel > 10, dann kontinuierlich), nicht stossweise.
- **Niemals** Anreize/Bezahlung – seit April 2026 auch Mitarbeiter-Boni untersagt (UWG-/Google-Verstoss).
- Aktiver, sachlicher Reklamationsprozess; auf jede Bewertung antworten.
- Falschbewertungen mit personenbezogenen Daten ueber DSGVO-Loeschanspruch/Google-Flagging abwehren.
- Nur echte, auf `/bewertungen/` sichtbare Bewertungen ins `AggregateRating`-Schema (Konsistenz zu 4.7).

---

### 4.12 Analytics, Search Console & Monitoring

| Tool | Zweck | Hinweis |
|---|---|---|
| **Google Search Console** | Indexierung, Performance, Coverage, Core Web Vitals, Sitemaps | Property fuer `https://www.…` (Domain-Property bevorzugt); Sitemap-Index einreichen |
| **Bing Webmaster Tools** | Bing-Index (ChatGPT-Suche), Sitemap | Sitemap separat einreichen |
| **Plausible oder Umami** (EU-hosted) | Traffic/Conversion, cookieless | DSGVO-konform, kein Cookie-Banner noetig |
| **Lighthouse-CI / PageSpeed** | CWV-Budget im CI | Build-Gate (4.8) |
| **Uptime-/Statuscode-Monitor** | Verfuegbarkeit, 404/5xx-Alarme | z. B. UptimeRobot/Cron-Check |

- **Conversions** als Events: Klick „Anrufen", Klick WhatsApp (`wa.me`), Formular-Absenden – in Plausible/Umami als Ziele.
- **GSC-Routine quartalsweise:** „Crawled/Discovered – not indexed", Cannibalization (mehrere URLs auf dasselbe Keyword), Query-Mapping, CWV-Drift.
- **Schema-Monitoring:** Rich Results Test im CI; nach Launch GSC-„Erweiterungen" auf Fehler pruefen.

---

### 4.13 Off-Page / Backlink-Grundlagen

YMYL-Trust haengt stark an externer Reputation. Kein Linkkauf, kein PBN (Risiko + Policy).

- **NAP-Citations** (4.11) sind die Backlink-Basis (lokale Relevanz + Konsistenz).
- **Brancheneintraege:** Handwerkskammer/IHK, Fachverbaende (z. B. Abbruch-/Schadstoffsanierungsverbaende), regionale Bau-/Handwerksportale.
- **Lokale Relevanz:** regionale Presse/Branchenblogs, Referenzprojekte mit Erwaehnung (Einwilligung beachten), Kooperationen (Hausverwaltungen, Architekten, Gutachter) mit echten Verlinkungen.
- **Wikidata-QID** anlegen → `sameAs`-Konsistenz (Org, GBP-CID, LinkedIn, Wikidata) staerkt Entitaetsverstaendnis (GEO/Knowledge Graph).
- **Digital-PR/Linkable Assets:** der Ratgeber (P3, einzigartig – Wettbewerber haben keinen Blog) ist der staerkste organische Link-Magnet (z. B. „Floor-Flex erkennen", „Neue GefStoffV 2024/2025").
- **Monitoring:** Backlink-Profil (GSC-Links / Ahrefs) regelmaessig auf toxische Links pruefen; Disavow nur bei nachweislichem Spam.

---

## 5. GEO & AI-Search-Optimierung

> Stand: 2026-06-10 · Verbindlich gemaess Briefing (Abschnitt 4 GEO/AI-Vorgaben, Abschnitt 7 Schema.org). Sprache: ausschliesslich Deutsch.

### 5.1 Was ist GEO – und warum es fuer Asbesta entscheidend ist

**GEO (Generative Engine Optimization)** ist die Disziplin, Inhalte so aufzubereiten, dass sie von generativen Antwortsystemen – **ChatGPT-Suche, Perplexity, Google AI Overviews / AI Mode, Google Gemini, Microsoft Copilot, Claude** – verstanden, korrekt wiedergegeben und **mit Quellenangabe zitiert** werden. Waehrend klassisches SEO auf einen Klick aus der blauen Linkliste zielt, zielt GEO darauf, in der **generierten Antwort selbst** als vertrauenswuerdige Quelle zu erscheinen – idealerweise mit Markennennung und Zitations-Link.

**Die wichtigste strategische Klarstellung (Realismus 2026):** Google hat bestaetigt, dass AI Overviews und AI Mode auf **denselben Ranking- und Qualitaetssystemen** wie die klassische Suche basieren. Es gibt also kein separates „AI-Ranking". **Beste klassische SEO + Top-Performance (Core Web Vitals) + saubere Entitaeten = beste GEO-Sichtbarkeit.** GEO ist daher kein paralleles Projekt, sondern die konsequente Fortsetzung unserer SEO-Architektur (Abschnitt 3) und unseres E-E-A-T-Konzepts (Abschnitt 4). Die in diesem Abschnitt beschriebenen Dateien (`llms.txt` & Co.) sind **Bonus-Signale und maschinenlesbare Single Source of Truth – kein Ersatz** fuer sauberes HTML, Schema.org und echte fachliche Tiefe.

**Warum GEO fuer ein Asbest-Fachunternehmen besonders relevant ist:**

| Faktor | Konsequenz fuer Asbesta |
|---|---|
| **YMYL-Thema** (Gesundheit/Sicherheit) | AI-Systeme bevorzugen bei Gesundheitsfragen autoritative, belegte Quellen mit klaren Credentials (TRGS-519-Sachkunde, Behoerdennachweise). Unser E-E-A-T-Vorsprung ist hier direkt GEO-wirksam. |
| **Informationsgetriebene Suche** | Nutzer fragen AI-Systeme: „Wie erkenne ich Floor-Flex-Platten?", „Was kostet Asbestsanierung pro m²?", „Brauche ich einen Fachbetrieb?". Genau hier landet unser Ratgeber-Content (Abschnitt 9, P3 – Wettbewerber haben keinen Blog). |
| **Lokaler Bezug** | „Asbestsanierung Essen" → AI-Antworten zitieren Anbieter mit konsistenter NAP, GBP-Verknuepfung und echtem lokalem Content (Abschnitt 6). |
| **ChatGPT-Suche nutzt den Bing-Index** | Daraus folgt eine harte Pflicht: Sitemap **auch** in den Bing Webmaster Tools einreichen, `Bingbot` und `OAI-SearchBot` in `robots.txt` erlauben. |

---

### 5.2 AI-Crawler-Dateien (Single Source of Truth)

Alle vier Dateien liegen im **Root** der Domain, sind UTF-8-kodiert, werden mit korrektem `Content-Type` ausgeliefert (`text/plain; charset=utf-8` bzw. `application/json; charset=utf-8`) und sind in `robots.txt` deklariert. **Sie werden im Build aus denselben Datenquellen generiert wie die Seiten selbst** (siehe 5.7) – keine manuelle Doppelpflege.

#### (a) `/llms.txt` – Index-Landkarte (Markdown)

**Zweck:** Eine kompakte, kuratierte „Sitemap fuer Sprachmodelle". Sie nennt die wichtigsten Seiten mit einer Ein-Satz-Beschreibung, damit ein AI-Crawler die Struktur und die zitierfaehigen Kernseiten ohne Crawl-Aufwand erfasst. **Aufbau:** H1 = Marke, Blockzitat = Kurzbeschreibung, danach thematische H2-Sektionen mit Link-Listen (Linktext + Doppelpunkt + praeziser Nutzen).

```markdown
# Asbesta Schadstoffsanierung

> Inhabergefuehrter Fachbetrieb fuer Asbest- und Schadstoffsanierung aus Marl
> fuer ganz NRW. Zertifiziert nach TRGS 519/521/524. Alles aus einer Hand:
> Gutachten, Sanierung, Entsorgung, Freimessung. Rueckmeldung innerhalb 24 h.
> Telefon: +49 2365 2960630 · Adresse: Venusweg 24, 45770 Marl.

## Leistungen
- [Asbestsanierung TRGS 519](https://www.asbesta-schadstoffsanierung.de/leistungen/asbestsanierung/): Zertifizierte Sanierung mit Schwarz-Weiss-Schleuse und Unterdruckhaltung.
- [Floor-Flex-Platten entfernen](https://www.asbesta-schadstoffsanierung.de/leistungen/floorflex-entfernen/): Sichere Entfernung von Floor-Flex-Platten und Kleber.
- [Asbesthaltigen Bitumenkleber entfernen](https://www.asbesta-schadstoffsanierung.de/leistungen/bitumenkleber-entfernen/): Rueckstandslose Entfernung von schwarzem Bitumen-/Asbestkleber.
- [Welleternit / Wellasbest ausbauen](https://www.asbesta-schadstoffsanierung.de/leistungen/welleternit-ausbauen/): Sicherer Ausbau asbesthaltiger Dachplatten.
- [Fassadenplatten ausbauen](https://www.asbesta-schadstoffsanierung.de/leistungen/fassadenplatten-ausbauen/): Demontage asbesthaltiger Fassadenplatten.
- [Asbestzement ausbauen](https://www.asbesta-schadstoffsanierung.de/leistungen/asbestzement-ausbauen/): Demontage von Asbestzement-Bauteilen.
- [Cushion-Vinyl (CV-Belaege) entfernen](https://www.asbesta-schadstoffsanierung.de/leistungen/cv-belaege-entfernen/): Sichere Entfernung asbesthaltiger CV-Bodenbelaege.
- [KMF-Sanierung](https://www.asbesta-schadstoffsanierung.de/leistungen/kmf-sanierung/): Fachgerechte Entfernung kuenstlicher Mineralfasern nach TRGS 521.
- [PAK-Sanierung](https://www.asbesta-schadstoffsanierung.de/leistungen/pak-sanierung/): Entfernung polyzyklischer aromatischer Kohlenwasserstoffe.
- [Materialanalyse im Labor](https://www.asbesta-schadstoffsanierung.de/leistungen/materialanalyse/): Asbest- und Schadstoffanalyse von Materialproben.
- [Luftanalysen / Raumluftmessung VDI 3492](https://www.asbesta-schadstoffsanierung.de/leistungen/luftanalysen/): Raumluftmessung und Freimessung nach Sanierung.
- [Abbrucharbeiten](https://www.asbesta-schadstoffsanierung.de/leistungen/abbrucharbeiten/): Professioneller Rueckbau und Teilabbruch.

## Standorte (Prioritaetsstaedte)
- [Asbestsanierung Marl](https://www.asbesta-schadstoffsanierung.de/standorte/marl/): Hauptstandort und Einsatzgebiet.
- [Asbestsanierung Essen](https://www.asbesta-schadstoffsanierung.de/standorte/essen/): Leistungen, Anfahrt, Referenzen.
- [Asbestsanierung Gelsenkirchen](https://www.asbesta-schadstoffsanierung.de/standorte/gelsenkirchen/): Leistungen, Anfahrt, Referenzen.
- [Asbestsanierung Bottrop](https://www.asbesta-schadstoffsanierung.de/standorte/bottrop/): Leistungen, Anfahrt, Referenzen.
- [Asbestsanierung Gladbeck](https://www.asbesta-schadstoffsanierung.de/standorte/gladbeck/): Leistungen, Anfahrt, Referenzen.
- [Asbestsanierung Herten](https://www.asbesta-schadstoffsanierung.de/standorte/herten/): Leistungen, Anfahrt, Referenzen.
- [Asbestsanierung Oberhausen](https://www.asbesta-schadstoffsanierung.de/standorte/oberhausen/): Leistungen, Anfahrt, Referenzen.
- [Asbestsanierung Duesseldorf](https://www.asbesta-schadstoffsanierung.de/standorte/duesseldorf/): Leistungen, Anfahrt, Referenzen.
- [Asbestsanierung Koeln](https://www.asbesta-schadstoffsanierung.de/standorte/koeln/): Leistungen, Anfahrt, Referenzen.

## Ratgeber
- [Floor-Flex-Platten erkennen](https://www.asbesta-schadstoffsanierung.de/ratgeber/floor-flex-erkennen/): Bilder, gaengige Groessen, Baujahr-Bezug.
- [Asbestsanierung Kosten](https://www.asbesta-schadstoffsanierung.de/ratgeber/asbestsanierung-kosten/): Preisfaktoren je Material, m²-Spannen, Beispielrechnung.
- [Neue GefStoffV 2024/2025](https://www.asbesta-schadstoffsanierung.de/ratgeber/gefstoffv-2025/): Ampel-Modell, Erkundungs- und Mitteilungspflichten.
- [Schwarzer Kleber: Bitumen, PAK oder Asbest?](https://www.asbesta-schadstoffsanierung.de/ratgeber/schwarzer-kleber/): Erkennung und sicheres Vorgehen.

## Maschinenlesbare Fakten
- [facts.json](https://www.asbesta-schadstoffsanierung.de/facts.json): Firmenfakten (NAP, Leistungen, Zertifikate, Einsatzgebiet).
- [entities.json](https://www.asbesta-schadstoffsanierung.de/entities.json): Entitaeten und sameAs-Verknuepfungen.
- [llms-full.txt](https://www.asbesta-schadstoffsanierung.de/llms-full.txt): Konsolidierter Volltext der Kernseiten.

## Ueber das Unternehmen
- [Firma](https://www.asbesta-schadstoffsanierung.de/firma): Geschichte, Zertifikate, Team.
- [Kontakt](https://www.asbesta-schadstoffsanierung.de/kontakt): Anfrage, Telefon, WhatsApp, Anfahrt.
- [Impressum](https://www.asbesta-schadstoffsanierung.de/impressum)
- [Datenschutz](https://www.asbesta-schadstoffsanierung.de/datenschutz)
```

> **Regeln:** Nur kanonische, indexierbare URLs aufnehmen (keine `noindex`-Stadtseiten). `llms.txt` ersetzt **nicht** die XML-Sitemap, sondern ergaenzt sie. Bei jedem Build automatisch aus den Content Collections neu generieren, damit keine toten Links entstehen.

#### (b) `/llms-full.txt` – Volltext der Kernseiten

**Konzept:** Eine einzige, grosse Markdown-Datei, die den **vollstaendigen, sauberen Fliesstext** der wichtigsten Seiten ohne Navigation, Footer, Skripte oder UI-Rauschen buendelt. So koennen AI-Crawler die kanonischen Inhalte in einem Zug erfassen und korrekt zitieren. **Jeder Kernseiten-Block ist eine H2-Sektion mit (1) Quell-URL und (2) „Stand: JJJJ-MM-TT"** – Aktualitaet ist ein expliziter Rankingfaktor fuer Perplexity und Google AI. Generiert wird die Datei im Build aus dem gerenderten Seiteninhalt (Markdown-/MDX-Quelle), sodass sie immer synchron zur Live-Seite ist.

**Umfang (verbindlich):** Startseite, 13 Leistungs-Pillar-Seiten, 9 Prioritaets-Stadtseiten, Firma/Ueber-uns, Kontakt sowie die veroeffentlichten Ratgeber-Beitraege. Beispielauszug:

```markdown
# Asbesta Schadstoffsanierung — Vollstaendige Inhalte
> Konsolidierter Volltext der Kernseiten fuer AI-Crawler. Sprache: Deutsch.
> Stand: 2026-06-10. Kanonische Domain: https://www.asbesta-schadstoffsanierung.de/

---

## Asbestsanierung nach TRGS 519
Quelle: https://www.asbesta-schadstoffsanierung.de/leistungen/asbestsanierung/
Stand: 2026-06-01

Asbesta saniert asbesthaltige Bauteile zertifiziert nach TRGS 519. Als Asbest-Fachbetrieb
nach Paragraf 8 Abs. 8 i.V.m. Anhang I Nr. 2.4.2 GefStoffV arbeiten wir mit
Schwarz-Weiss-Schleuse und Unterdruckhaltung, fuehren die objektbezogene Anzeige bei der
Bezirksregierung durch und dokumentieren jeden Schritt lueckenlos.

### Fuer wen geeignet
Private Bauherren, Hausverwaltungen, Industrie und oeffentliche Auftraggeber bei Wohn-,
Gewerbe- und Industrieobjekten in Marl und ganz NRW.

### Ablauf
1. Anfrage senden — Rueckmeldung innerhalb von 24 Stunden (Telefon, WhatsApp, Formular).
2. Kostenfreie Besichtigung vor Ort — Material und Umfang werden bestimmt.
3. Transparentes Festpreis-Angebot — ohne versteckte Kosten.
4. Fachgerechte Sanierung nach TRGS 519 — Schwarz-Weiss-Schleuse und Unterdruck.
5. Entsorgung und Uebergabe — Entsorgungsnachweis, Freimessung, Schlussdokumentation.

### Kostenorientierung
Asbesthaltige Bodenbelaege liegen marktueblich bei rund 35–45 €/m², asbesthaltige Kleber
bei rund 55–90 €/m². Der verbindliche Preis ergibt sich aus der Vor-Ort-Besichtigung.

### Quellen
GefStoffV; TRGS 519 (Asbest – Abbruch-, Sanierungs- und Instandhaltungsarbeiten); BAuA.

---

## Asbestsanierung Essen
Quelle: https://www.asbesta-schadstoffsanierung.de/standorte/essen/
Stand: 2026-05-20

Asbesta ist in Essen im gesamten Stadtgebiet im Einsatz — Anfahrt ab Marl rund 30 km
(ca. 30 Minuten ueber die A52/A2). Schwerpunkt sind Gebaeude der Baujahre 1960–1993 ...
```

#### (c) `/facts.json` – maschinenlesbare Firmenfakten (JSON-LD-kompatibel)

**Zweck:** Eine atomare, von Maschinen direkt parsbare Faktenbasis (NAP, Leistungen, Zertifikate, Servicegebiet). Das Schema ist bewusst **JSON-LD-kompatibel** (`@context`/`@type`), damit dieselbe Struktur sowohl von AI-Crawlern als auch im Build fuer das On-Page-Schema wiederverwendet werden kann. **`@id` ist identisch zum On-Page-JSON-LD** (eine Entitaet, eine Identitaet).

```json
{
  "@context": "https://schema.org",
  "@type": ["Organization", "HomeAndConstructionBusiness"],
  "@id": "https://www.asbesta-schadstoffsanierung.de/#organization",
  "name": "Asbesta Schadstoffsanierung",
  "description": "Inhabergefuehrter Fachbetrieb fuer Asbest- und Schadstoffsanierung aus Marl fuer ganz NRW. Zertifiziert nach TRGS 519/521/524. Alles aus einer Hand: Gutachten, Sanierung, Entsorgung, Freimessung.",
  "url": "https://www.asbesta-schadstoffsanierung.de",
  "telephone": "+49-2365-2960630",
  "email": "kontakt@asbesta-schadstoffsanierung.de",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Venusweg 24",
    "addressLocality": "Marl",
    "postalCode": "45770",
    "addressRegion": "Nordrhein-Westfalen",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.6566,
    "longitude": 7.0900
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "18:00"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+49-2365-2960630",
    "contactType": "customer service",
    "availableLanguage": "German",
    "areaServed": "DE"
  },
  "slogan": "Asbest? Wir holen Sie da raus - schnell, sicher und professionell.",
  "foundingLocation": "Marl",
  "knowsAbout": [
    "Asbestsanierung", "TRGS 519", "TRGS 521", "TRGS 524",
    "KMF-Sanierung", "PAK-Sanierung", "Floor-Flex-Platten",
    "Welleternit", "Asbestzement", "Raumluftmessung VDI 3492", "Materialanalyse"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Asbest-Fachbetrieb nach Paragraf 8 Abs. 8 i.V.m. Anhang I Nr. 2.4.2 Abs. 4 GefStoffV",
      "credentialCategory": "Behoerdliche Zulassung"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Sachkunde nach TRGS 519 (Anlage 3)",
      "credentialCategory": "Sachkundenachweis"
    }
  ],
  "makesOffer": [
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Asbestsanierung nach TRGS 519" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Floor-Flex-Platten entfernen" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Asbesthaltigen Bitumenkleber entfernen" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Welleternit / Wellasbest ausbauen" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fassadenplatten ausbauen" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Asbestzement ausbauen" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cushion-Vinyl (CV-Belaege) entfernen" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "KMF-Sanierung nach TRGS 521" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PAK-Sanierung" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Materialanalyse im Labor" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Luftanalysen / Raumluftmessung VDI 3492" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Abbrucharbeiten" } }
  ],
  "areaServed": [
    { "@type": "City", "name": "Marl" },
    { "@type": "City", "name": "Bottrop" },
    { "@type": "City", "name": "Essen" },
    { "@type": "City", "name": "Oberhausen" },
    { "@type": "City", "name": "Duesseldorf" },
    { "@type": "City", "name": "Gelsenkirchen" },
    { "@type": "City", "name": "Gladbeck" },
    { "@type": "City", "name": "Koeln" },
    { "@type": "City", "name": "Herten" },
    {
      "@type": "GeoCircle",
      "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 51.6566, "longitude": 7.0900 },
      "geoRadius": "60000"
    }
  ],
  "keyFacts": {
    "projectsCompleted": "1000+",
    "yearsOfExperience": "15+",
    "certificationRate": "100%",
    "responseTime": "innerhalb 24 Stunden"
  },
  "_meta": {
    "version": "1.0",
    "lastUpdated": "2026-06-10",
    "note": "Maschinenlesbare Firmenfakten. Kein erfundenes aggregateRating; Bewertungswerte nur aus first-party sichtbaren Bewertungen.",
    "verifyBeforeLaunch": ["email", "geo", "openingHoursSpecification"]
  }
}
```

> **Verbindliche Regeln:** (1) `aggregateRating` **nur** mit echten, auf der Seite sichtbaren first-party Bewertungen befuellen – sonst Policy-Verstoss. (2) E-Mail, Geo-Koordinaten und Oeffnungszeiten **vor Launch verifizieren** (Projektkontext-Mail `kontakt@alboush-elektro.de` ist noch zu klaeren). (3) Alle Werte muessen **exakt** der Master-NAP (Abschnitt 6) und dem Impressum entsprechen.

#### (d) `/entities.json` – Entity-Graph & sameAs-Verknuepfung

**Zweck:** Eine explizite Auflistung der wichtigsten **Entitaeten** (Organisation, Leistungen, Orte, Personen/Autoren) mit ihren stabilen `@id`-Ankern und `sameAs`-Verknuepfungen zu externen Wissensgraphen (Google Business Profile/CID, Wikidata, LinkedIn). Das macht das Entitaetsmodell der Website maschinenlesbar und staerkt den Aufbau eines eigenen **Knowledge-Graph-Eintrags**.

```json
{
  "schemaVersion": "1.0",
  "generatedAt": "2026-06-10",
  "primaryEntity": "https://www.asbesta-schadstoffsanierung.de/#organization",
  "entities": [
    {
      "@id": "https://www.asbesta-schadstoffsanierung.de/#organization",
      "type": "Organization",
      "name": "Asbesta Schadstoffsanierung",
      "entityType": "Schadstoffsanierungsunternehmen",
      "sameAs": [
        "https://www.google.com/maps?cid=XXXXXXXXXXXX",
        "https://www.wikidata.org/wiki/QXXXXXXX",
        "https://www.linkedin.com/company/asbesta-schadstoffsanierung"
      ]
    },
    {
      "@id": "https://www.asbesta-schadstoffsanierung.de/leistungen/asbestsanierung/#service",
      "type": "Service",
      "name": "Asbestsanierung",
      "providedBy": "https://www.asbesta-schadstoffsanierung.de/#organization",
      "standard": "TRGS 519",
      "sameAs": ["https://www.wikidata.org/wiki/Q167328"]
    },
    {
      "@id": "https://www.asbesta-schadstoffsanierung.de/leistungen/kmf-sanierung/#service",
      "type": "Service",
      "name": "KMF-Sanierung",
      "providedBy": "https://www.asbesta-schadstoffsanierung.de/#organization",
      "standard": "TRGS 521"
    },
    {
      "@id": "https://www.asbesta-schadstoffsanierung.de/#place-marl",
      "type": "Place",
      "name": "Marl",
      "wikidata": "https://www.wikidata.org/wiki/Q4264",
      "role": "Hauptstandort und Einsatzgebiet"
    },
    {
      "@id": "https://www.asbesta-schadstoffsanierung.de/#place-essen",
      "type": "Place",
      "name": "Essen",
      "wikidata": "https://www.wikidata.org/wiki/Q2066",
      "role": "Einsatzgebiet (Prioritaetsstadt)"
    },
    {
      "@id": "https://www.asbesta-schadstoffsanierung.de/team/mustermann/#person",
      "type": "Person",
      "name": "Vorname Nachname",
      "jobTitle": "Sachkundiger nach TRGS 519",
      "worksFor": "https://www.asbesta-schadstoffsanierung.de/#organization",
      "sameAs": [
        "https://www.linkedin.com/in/XXXXXXXX"
      ]
    }
  ],
  "_meta": {
    "idStrategy": "URL-Fragment-Anker, identisch zum On-Page-JSON-LD.",
    "note": "Platzhalter (CID, QID, Person) vor Launch durch reale Werte ersetzen; Wikidata-QID fuer die Organisation anlegen.",
    "consistencyRule": "Alle sameAs-URLs muessen identisch in JSON-LD, facts.json und GBP gepflegt sein."
  }
}
```

> **Kernregel (gesperrt):** Die `@id`-Werte in `entities.json` **muessen identisch** zum On-Page-JSON-LD und zu `facts.json` sein. Eine Entitaet hat genau **eine** Identitaet ueber die ganze Site. Platzhalter (`XXXX`) sind vor Launch durch reale CID/QID/LinkedIn-URLs zu ersetzen.

---

### 5.3 `robots.txt` – AI-Bots gezielt steuern

Grundprinzip: **Retrieval-/Such-Bots erlauben** (sie ermoeglichen Zitate in den Antworten), **Training-Bots optional steuern**. Wichtigste Entscheidung (gesperrt): **`Googlebot` und `Google-Extended` NIE blocken** – `Google-Extended` steuert die Nutzung fuer Gemini/AI Overviews; ein Block kostet Sichtbarkeit in der Google-AI-Suche, ohne das klassische Ranking zu schuetzen.

| Bot (User-Agent) | Betreiber / Funktion | Entscheidung |
|---|---|---|
| `Googlebot` | Google Index (speist auch AI Overviews) | **Allow** (nie blocken) |
| `Google-Extended` | Google – Gemini / AI-Trainings- & Grounding-Steuerung | **Allow** |
| `Bingbot` | Bing-Index (ChatGPT-Suche nutzt diesen) | **Allow** |
| `OAI-SearchBot` | OpenAI – Suche/Retrieval (Zitate in ChatGPT-Suche) | **Allow** |
| `ChatGPT-User` | OpenAI – Live-Abruf bei Nutzeranfrage | **Allow** |
| `GPTBot` | OpenAI – Training | **Allow** (Zitierfaehigkeit ueberwiegt) |
| `PerplexityBot` | Perplexity – Index/Retrieval | **Allow** |
| `Perplexity-User` | Perplexity – Live-Abruf | **Allow** |
| `ClaudeBot` / `Claude-SearchBot` | Anthropic – Crawl/Suche | **Allow** |
| `Applebot` / `Applebot-Extended` | Apple – Siri/Spotlight | **Allow** |
| `CCBot` | Common Crawl (Datensatz fuer viele LLMs) | optional **Allow** |

**Beispiel `/robots.txt`:**

```text
# robots.txt — asbesta-schadstoffsanierung.de
# Grundsatz: klassische Crawler und AI-Retrieval-Bots erlauben; Sitemap deklarieren.

User-agent: *
Allow: /
Disallow: /danke/
Disallow: /suche

# AI-/Such-Bots ausdruecklich erlauben (Zitierfaehigkeit in AI-Antworten)
User-agent: Googlebot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Bingbot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: Applebot-Extended
Allow: /

# Maschinenlesbare GEO-Dateien und Sitemap
Sitemap: https://www.asbesta-schadstoffsanierung.de/sitemap-index.xml
# Weiterfuehrend: /llms.txt, /llms-full.txt, /facts.json, /entities.json
```

> **Wichtige Praezisierung:** `noindex`-Seiten (duenne Stadtkombinationen, Danke-Seiten) duerfen in `robots.txt` **nicht** zusaetzlich per `Disallow` gesperrt werden, sonst kann der `noindex`-Meta-Tag nicht gelesen werden. Ausnahme oben sind echte Sackgassen (`/danke/`, interne Suche), die weder indexiert noch gecrawlt werden muessen. IndexNow ist nur fuer Bing/Yandex relevant (Google ignoriert es); die Google-Indexing-API ist fuer unsere Seitentypen nicht zugelassen.

---

### 5.4 Entity-SEO & Knowledge-Graph-Aufbau

Ziel ist, dass Suchmaschinen und AI-Systeme „Asbesta Schadstoffsanierung" als **eindeutige Entitaet** verstehen – nicht als beliebige Stringkombination. Das ist die Grundlage fuer einen eigenen Knowledge-Panel-Eintrag und fuer korrekte Markennennung in AI-Antworten.

**Vorgehen (verbindlich):**

1. **Eine kanonische Identitaet.** Die Organisation wird **einmal** voll auf der Startseite per JSON-LD definiert (`@id = …/#organization`) und ueberall sonst nur per `@id` referenziert. `facts.json` und `entities.json` verwenden **denselben** `@id`.
2. **`sameAs`-Netz aufbauen** (nach `name` das hoechst hebelnde Feld). Konsistente, identische URLs in JSON-LD, `facts.json`, `entities.json` und auf den jeweiligen Profilen:
   - Google Business Profile (CID-URL)
   - **Wikidata-QID** fuer die Organisation neu anlegen
   - LinkedIn-Unternehmensseite
   - relevante Fach-/Branchenverzeichnisse (sofern Profil-URL stabil)
3. **Autor-Entitaeten (E-E-A-T, YMYL-Pflicht).** Jeder Ratgeber-Autor erhaelt eine `/team/[name]/`-Seite mit vollem **Person-Schema** (`name`, `@id`, `jobTitle` z. B. „Sachkundiger nach TRGS 519", `image`, `knowsAbout`, `hasCredential`, `worksFor` per `@id`, `sameAs` mit LinkedIn + Zertifizierungs-/Kammernachweis). Artikel referenzieren den Autor per `@id` – das verhindert verwaiste Entitaeten.
4. **Master-NAP** (Name, Adresse, Telefon) muss in GBP, Impressum, On-Page-Schema, `facts.json` und allen Verzeichnissen **byte-identisch** sein. Jede Abweichung schwaecht die Entitaet.

---

### 5.5 Content-Strukturierung fuer AI-Extraktion

AI-Systeme extrahieren bevorzugt klar strukturierte, isoliert verstaendliche Inhaltsbloecke. Die folgenden Muster sind fuer **alle** Leistungs-, Stadt- und Ratgeberseiten verbindlich (vgl. Abschnitt 5 des Briefings, einheitliche Beitragsstruktur):

| Muster | Umsetzung | GEO-Wirkung |
|---|---|---|
| **Answer-First-Intro** | Leitfrage im ersten Satz direkt beantworten, optional TL;DR-Box. | AI zitiert kompakte Direktantworten bevorzugt. |
| **Semantische Chunks** | H2/H3-Abschnitte von ~100–300 Woertern, isoliert verstaendlich; **Entitaet beim Namen nennen** („Asbesta…", „Floor-Flex…") statt „es"/„wir". | Bloecke sind ohne Kontext zitierfaehig. |
| **Tabellen** | Mind. eine Tabelle pro Beitrag (z. B. m²-Preisspannen je Material, Materialtypen, Fristen). | Tabellen erhoehen die AI-Zitierhaeufigkeit deutlich. |
| **Nummerierte Listen** | Ablaeufe, Checklisten, Schritt-fuer-Schritt. | Klar extrahierbare Prozeduren. |
| **Definitionslisten / Begriffsklaerung** | Fachbegriffe (Floor-Flex, KMF, PAK, Freimessung, Unterdruckhaltung) praezise definieren. | Staerkt Entitaets- und Themenverstaendnis. |
| **FAQ (Answer-First)** | Echte W-Fragen als H3, sofort beantwortet, + `FAQPage`-Schema. | Direkt als Antwort-Snippet/AI-Antwort nutzbar. |
| **Quellenangaben** | Behoerden/Normen nennen (GefStoffV, TRGS 519/521/524, BAuA, DGUV, VDI 3492). | Erhoeht Vertrauen/Zitierwuerdigkeit bei YMYL. |
| **Aktualitaetssignale** | Sichtbares `datePublished`/`dateModified` + „Stand:" in `llms-full.txt`. | Aktualitaet ist Rankingfaktor (v. a. Perplexity). |

**Beispiel einer zitierfaehigen Direktantwort (Muster fuer Ratgeber):**

> **Was kostet es, asbesthaltige Floor-Flex-Platten entfernen zu lassen?**
> Die Entfernung asbesthaltiger Floor-Flex-Platten kostet marktueblich rund **35–45 €/m²** fuer den Belag; bleibt asbesthaltiger Kleber zurueck, kommen etwa **55–90 €/m²** hinzu. Der verbindliche Preis ergibt sich nach kostenfreier Vor-Ort-Besichtigung als transparentes Festpreis-Angebot. *(Quelle: Marktpreisanker; verbindlich nur nach Besichtigung.)*

---

### 5.6 Warum diese Dateien AUCH fuer Entwickler nuetzlich sind

Die GEO-Dateien sind nicht nur ein AI-Signal, sondern eine **maschinenlesbare Single Source of Truth (SSOT)**, die im Build mehrfach verwendet wird. Das spart Pflegeaufwand und verhindert Inkonsistenzen.

- **Eine Datenquelle, mehrere Ausgaben.** Firmenfakten und Leistungen liegen einmal als strukturierte Daten in den Astro **Content Collections** (z. B. `src/data/company.ts`, `src/content/leistungen/*`). Daraus generiert der Build sowohl die HTML-Seiten als auch `facts.json`, `entities.json`, das On-Page-JSON-LD, `llms.txt` und `llms-full.txt`.
- **Garantierte Konsistenz.** NAP, Leistungsnamen, `@id`-Werte und `sameAs`-URLs stammen aus **einer** Quelle → kein Auseinanderlaufen zwischen On-Page-Schema, GEO-Dateien und Impressum.
- **Wiederverwendung im Build.** Beispiel-Pipeline (Astro): eine Endpoint-Route `src/pages/facts.json.ts` liest `company.ts` und serialisiert es; `llms.txt` wird aus dem Collection-Index gerendert; `llms-full.txt` aus dem gerenderten Markdown der Kernseiten. Alle Dateien sind damit **bei jedem Deploy automatisch aktuell** und referenzieren ausschliesslich existierende, kanonische URLs.
- **Validierbarkeit.** JSON-Dateien lassen sich in CI per Schema-Check validieren (Pflichtfelder vorhanden, `@id`-Konsistenz, keine `XXXX`-Platzhalter im Production-Build) – als QS-Gate vor Launch.
- **Entwickler-Doku als Nebenprodukt.** `llms.txt`/`facts.json` dienen neuen Teammitgliedern und externen Dienstleistern als kompakte, immer aktuelle Uebersicht der Seitenstruktur und Firmendaten.

---

### 5.7 Monitoring der AI-Sichtbarkeit

GEO-Erfolg ist messbar – aber mit anderen Werkzeugen als klassisches Ranking-Tracking. Verantwortung: **R2 (SEO/GEO-Lead)**, quartalsweise Review.

| Was wird gemessen | Wie / Werkzeug | Frequenz |
|---|---|---|
| **Referral-Traffic aus AI-Quellen** | Plausible/Umami: Referrer wie `chatgpt.com`, `perplexity.ai`, `gemini.google.com`, `copilot.microsoft.com` segmentieren. | laufend / monatlich |
| **Markennennung in AI-Antworten** | Manuelle Test-Prompts in ChatGPT-Suche, Perplexity, Gemini, Copilot zu Kernabfragen („Asbestsanierung Essen", „Floor-Flex erkennen", „Asbest Kosten m²") – wird Asbesta genannt/zitiert? | quartalsweise + nach Content-Releases |
| **AI-Bot-Crawl-Aktivitaet** | Server-/Cloudflare-Logs auf `GPTBot`, `OAI-SearchBot`, `PerplexityBot`, `ClaudeBot`, `Google-Extended` filtern (werden GEO-Dateien abgerufen?). | monatlich |
| **Google AI Overviews / klassisch** | Google Search Console: Impressions/Klicks; Abgleich „Crawled – currently not indexed" / „Discovered – not indexed" = Urteil „zu duenn" → anreichern oder `noindex`. | quartalsweise |
| **Bing-Index (fuer ChatGPT-Suche)** | Bing Webmaster Tools: Sitemap-Status, Indexabdeckung. | monatlich |
| **Entitaets-/Knowledge-Status** | Wikidata-QID-Pflege, GBP-Konsistenz, `sameAs`-Erreichbarkeit pruefen. | quartalsweise |

**Realistische Erwartung:** AI-Referral-Traffic ist anfangs klein und wird in Analytics teils ungenau attribuiert (viele AI-Antworten erzeugen gar keinen Klick). Primaerer Frueh-Indikator ist daher **Markennennung/Zitation in Test-Prompts** plus **nachweisbare Crawl-Aktivitaet der AI-Bots** auf den GEO-Dateien, nicht allein der Klick-Traffic. Die Datenbasis (`facts.json`/`entities.json`) wird bei jeder Faktenaenderung und mindestens quartalsweise aktualisiert (`lastUpdated` pflegen).

---

## 6. Der 100-Tage-Fahrplan (Tag-fuer-Tag)

### Teil A - Tag 1 bis 50

---

### Phase 0 - Kickoff, Discovery & Audit (Tag 1-8)
*Ziel: Gemeinsames Verstaendnis, vollstaendiges Bestandsaufnahme der Alt-Domain, verifizierte Fakten (NAP, E-Mail, Kennzahlen) und ein freigegebenes Setup, auf dem alle 5 Rollen aufsetzen koennen. Nichts wird gebaut, bevor die Datenbasis steht.*

**Tag 1 - Kickoff, Discovery & Audit**
- R1: Kickoff-Moderation, Repo-Anlage (GitHub, `asbesta-web`), Branch-Strategie (`main` geschuetzt, `develop`, Feature-Branches) skizzieren, Definition of Done je Seitentyp aufsetzen.
- R2: Zugriff auf bestehende GSC, Analytics, alte WordPress-Sitemap anfordern; Crawl-Setup (Screaming Frog) vorbereiten.
- R3: Marken-Discovery-Workshop (Werte: Sicherheit/Sauberkeit/Seriositaet), Sammlung vorhandener Logo-Dateien, Fotos, Referenzbilder.
- R4: Content-Inventar der Alt-Seite starten (Hauptseiten + Stichprobe der ~1.960 pSEO-Seiten), Tonalitaets-Briefing.
- R5: Stakeholder-Fragebogen (USt-IdNr., HWK-Zugehoerigkeit, Mitarbeiterzahl/Umsatz fuer BFSG-Einordnung, offizielle Kontakt-E-Mail) versenden.

**Tag 2 - Kickoff, Discovery & Audit**
- R1: Tooling-Setup gem. Abschnitt 2.11 (frontend-design Plugin, shadcn MCP, Chrome DevTools MCP, Playwright MCP) auf allen Maschinen, `.mcp.json` mit `--scope project`.
- R2: Vollstaendiger Crawl der Alt-Domain (alle URLs, Status-Codes, Titles, Indexierungsstatus, Backlinks via Ahrefs/SEMrush).
- R3: Wettbewerbs- & Referenz-Benchmark (visuell): 8-10 Mitbewerber + Branchen-Best-Practices, Moodboard-Rohsammlung.
- R4: Keyword-Discovery-Rohliste (Seed-Keywords je 13 Leistungen + 9 Prioritaetsstaedte).
- R5: Hosting-Account Cloudflare Pages anlegen, DNS-Ist-Zustand der Domain dokumentieren, Domain-Registrar-Zugang klaeren.
- R5: ESLint-Komplexitaets-/`max-lines`-Regelset + SonarJS + Knip + Stylelint als blockierende CI-Gates einrichten (Abschnitt 8.2-8.4); Coverage-Gate fuer `lib/` aktivieren.

**Tag 3 - Kickoff, Discovery & Audit**
- R2: SEO-Audit Alt-Domain (Thin-Content-Belege, Indexierungsquote, Cannibalization, technische Maengel) dokumentieren.
- R3: Logo-Audit (Vektorfaehigkeit, Varianten, Farbtreue), Bedarf fuer Logo-Bereinigung/Negativ-Variante feststellen.
- R3: Anti-AI-Slop-/Design-Integritaets-Checkliste (Abschnitt 8.5) als verbindliches PR-Review-Template im Repo anlegen.
- R4: NAP-/Faktenpruefung gegen Briefing (Telefon, WhatsApp, Adresse, Kennzahlen 1.000+/15+ Jahre); offene Punkte an Kunden.
- R5: Datenschutz-/Compliance-Ist-Aufnahme (welche Tools real geplant), AVV-Bedarfsliste (Cloudflare, Formspree, Plausible) erstellen.

**Tag 4 - Kickoff, Discovery & Audit**
- R1: Technische Risikoanalyse Migration (URL-Volumen, Crawl-Budget, Redirect-Last) + Performance-Budget definieren (Hero-JS, LCP-Ziel < 2,0 s).
- R2: Backlink-Audit der Alt-Domain: wertvolle eingehende Links identifizieren (deren Zielseiten brauchen praezise Redirects).
- R4: Bewertungs-Inventar (5 echte Stimmen) verifizieren, Freigabe zur Nutzung klaeren (Quelle, Stadtbezug).
- R5: Backup der kompletten Alt-Domain (Inhalte, DB-Export, Medien) sichern - Rollback-Faehigkeit.

**Tag 5 - Kickoff, Discovery & Audit**
- R1: Architektur-Entwurf-Skizze (Astro-Verzeichnisstruktur, Content Collections, Routing-Konzept) als RFC.
- R1: ADR-Format + `docs/adr/`-Konvention (Abschnitt 8.7) etablieren; die Architektur-Skizze als erste ADR festhalten.
- R2: Erste Sichtung der 9 Prioritaetsstaedte: lokale Wettbewerbsdichte, SERP-Features, GBP-Landschaft.
- R3: Accessibility-Ist-Check der Alt-Seite (WCAG-Grobpruefung als Negativbeispiel-Lernmaterial).
- R4: Quellen-Register fuer E-E-A-T aufsetzen (GefStoffV, TRGS 519/521/524, BAuA, DGUV, VDI 3492) - zentrale Referenzliste.

**Tag 6 - Kickoff, Discovery & Audit**
- R2: Indexierungsstrategie-Grobkonzept (welche Alt-URLs 301, welche 410) als Entscheidungsmatrix beginnen.
- R3: Foto-Bestandsaufnahme: vorhandene echte Projektfotos sichten, Luecken fuer Stock/Neushooting auflisten.
- R4: Auswahl der ersten Autoren-Persona(s) fuer E-E-A-T (Sachkundiger nach TRGS 519) mit dem Kunden klaeren.
- R5: CI/CD-Tool-Entscheidung (GitHub Actions + Cloudflare Pages Deploy), Secrets-Management-Konzept.

**Tag 7 - Kickoff, Discovery & Audit**
- R1: Konsolidierung aller Audit-Inputs in technisches Foundations-Dokument.
- R2: Audit-Findings in priorisierten SEO-Backlog ueberfuehren.
- R3: Discovery-Synthese: Marken- & UX-Erkenntnisse in Design-Brief verdichten.
- R4: Content-Gap-Analyse (was fehlt vs. Wettbewerb, Blog als USP bestaetigen).
- R5: Rechts-/Compliance-Findings + offene Kundenfragen konsolidieren.

**Tag 8 - Kickoff, Discovery & Audit**
- R1: Setup-/Standards-Review Phase 0 - CI-Gates (8.4) und ADR-Konvention (8.7) verifiziert, Design-Integritaets-Checkliste (8.5) liegt vor.
- **MEILENSTEIN: Discovery- & Audit-Report freigegeben (verifizierte NAP/Fakten, Alt-URL-Inventar, SEO-Backlog, Foto-Luecken, Compliance-Bedarfsliste).**
- **SPRINT-REVIEW Phase 0: gemeinsame Abnahme aller Audit-Deliverables, Risiken & offene Kundenpunkte (E-Mail, USt-IdNr., HWK, Kennzahlen) protokolliert.**

---

### Phase 1 - Strategie, Keyword-/GEO-Research, Informationsarchitektur & Tech-Foundations (Tag 9-20)
*Ziel: Verbindliche Keyword-Map, finale Sitemap/IA, Redirect-Inventar und ein lauffaehiges Astro-Grundgeruest mit CI/CD. Strategie und Datenmodell stehen, bevor Design und Build starten.*

**Tag 9 - Strategie, Keyword-/GEO-Research, IA & Tech-Foundations**
- R1: Astro 6 Projekt initialisieren (TypeScript, Content Collections, MDX, `@astrojs/sitemap`), Repo-Push.
- R2: Keyword-Research vertiefen (P1 Geld-Keywords je Leistung/Stadt, Suchvolumen, SERP-Intent).
- R4: Themen-/Keyword-Cluster fuer Ratgeber (P3) sammeln, Topical-Map-Entwurf.
- R5: GitHub Actions CI-Pipeline (Lint, Build, Preview-Deploy auf Cloudflare Pages) aufsetzen.

**Tag 10 - Strategie, Keyword-/GEO-Research, IA & Tech-Foundations**
- R1: Tailwind + Design-Token-Geruest (CSS Custom Properties fuer Farben/Spacing/Radius aus Abschnitt 2) als leeres Token-Layer einbinden.
- R2: Keyword-Map konsolidieren: Keyword → Ziel-URL-Typ (Pillar/Spoke/Ratgeber), Cannibalization vermeiden.
- R3: Moodboard & Stilrichtungen (2 Varianten) in Figma, Abstimmung mit Markenwerten.
- R5: Cloudflare Pages Produktiv-Projekt + Preview-Environments einrichten, Branch-Deploys verifizieren.

**Tag 11 - Strategie, Keyword-/GEO-Research, IA & Tech-Foundations**
- R2: GEO-Research: AI-Crawler-Verhalten, llms.txt-Best-Practice, sameAs-Quellen (Wikidata-QID-Bedarf, GBP-CID) recherchieren.
- R3: **Design-Richtung-Entscheid (1 Variante final)** mit Kunde - Moodboard-Freigabe.
- R4: Informationsarchitektur-Entwurf (Hub/Spoke gem. 3.1) mit R1/R2, Seitentypen-Liste.
- R1: Routing-Prototyp `[leistung]`/`[stadt]`/`[leistung]-[stadt]` via `getStaticPaths` aus Dummy-Datentabelle.

**Tag 12 - Strategie, Keyword-/GEO-Research, IA & Tech-Foundations**
- R1: Content-Collections-Schemata (Zod) fuer `leistungen`, `standorte`, `ratgeber`, `team`, `bewertungen` definieren.
- R2: **Finale Sitemap/IA** dokumentieren (alle URL-Pfade gem. 3.1), Freigabe einholen.
- R4: Stadt × Leistung Matrix anlegen (Datentabelle), indexwuerdige Kombinationen erstmarkieren (Floor-Flex × Stadt priorisiert).
- R5: CMS-Entscheidung umsetzen: Sveltia/Decap einrichten, Git-Backend-Anbindung testen.

**Tag 13 - Strategie, Keyword-/GEO-Research, IA & Tech-Foundations**
- R2: Redirect-Inventar erstellen: alle ~1.960 Alt-URLs → naechstbestes neues Ziel (301) oder 410, in Mapping-Tabelle.
- R4: Lokale-Daten-Erhebung fuer 9 Prioritaetsstaedte starten (Anfahrt km/Fahrzeit ab Marl, Stadtteile, Bausubstanz/Bergsenkungsgebiete, Deponien).
- R3: Wireframes Startseite + Leistungs-Pillar (Low-Fidelity) in Figma.
- R1: Build-Performance-Test mit 2.000 Dummy-Routen (Skalierungsnachweis Astro).

**Tag 14 - Strategie, Keyword-/GEO-Research, IA & Tech-Foundations**
- R2: Index-Gate-Logik spezifizieren (Pflicht-A-Bloecke leer → automatisch `noindex`), als Regelwerk fuer Templates.
- R3: Wireframes Stadt-/Spoke-Seite + Ratgeber-Beitrag + Kontakt (Low-Fidelity).
- R4: Redaktionsplan-Geruest (Reihenfolge: Pillars → 9 Stadtseiten → Ratgeber-Startset) mit Prioritaeten.
- R5: Formular-Backend-Entscheidung (Formspree/Formgrid) testen, DSGVO-/EU-Speicherung pruefen.

**Tag 15 - Strategie, Keyword-/GEO-Research, IA & Tech-Foundations**
- R1: Komponenten-Inventar ableiten (Header, Footer, Hero, Service-Card, CTA-Leiste, Autorenbox, FAQ, Breadcrumb) als Build-Backlog.
- R2: Schema.org-Plan je Seitentyp (Abschnitt 7) in konkrete JSON-LD-Bauplaene/Snippets ueberfuehren.
- R3: Wireframes Firma/Ueber-uns + Bewertungen + Standort-Hub.
- R4: Leistungs-Texte: Recherche & Outline fuer Pillar „Asbestsanierung TRGS 519".

**Tag 16 - Strategie, Keyword-/GEO-Research, IA & Tech-Foundations**
- R1: Bild-Pipeline-Konzept (Cloudflare Images, Fallback Astro `<Image>`/Sharp, AVIF/WebP, srcset) prototypisch.
- R2: robots.txt-Entwurf (Retrieval-Bots erlauben, Sitemap deklarieren) + Canonical-Strategie (www als kanonisch) festschreiben.
- R3: **Wireframe-Set komplett** - Review mit R1/R4 auf Umsetzbarkeit/Content-Passung.
- R5: Plausible/Umami (cookieless) Einbindungs-Test, Bestaetigung „kein Cookie-Banner noetig".

**Tag 17 - Strategie, Keyword-/GEO-Research, IA & Tech-Foundations**
- R1: Selbst gehostete Inter-Fonts (WOFF2, latin+latin-ext Subset, Preload, `font-display:swap`) einbinden.
- R2: GEO-Dateien-Spezifikation (llms.txt, llms-full.txt, facts.json, entities.json) gem. Abschnitt 4 als Build-Vorgabe.
- R4: Lokale-Daten-Erhebung Prioritaetsstaedte fortsetzen (Referenzprojekte anonymisiert, stadtspezifische FAQ je Stadt).
- R5: AVV-Vertraege anstossen (Cloudflare, Form-Backend, Analytics), Verzeichnis Verarbeitungstaetigkeiten (Art. 30) anlegen.

**Tag 18 - Strategie, Keyword-/GEO-Research, IA & Tech-Foundations**
- R1: `@astrojs/sitemap` konfigurieren (nur kanonische/indexierbare URLs, Sitemap-Index-faehig), Pagefind-Integration vorbereiten.
- R2: Keyword-Map mit Redaktionsplan verknuepfen (jede Geldseite/Beitrag hat genau 1 primaeres Keyword + Brief).
- R4: Autorenkonzept finalisieren: Person-Profil(e), Credentials, `knowsAbout`, `sameAs`-Quellen (LinkedIn, Zertifikatsnachweis).
- R3: Accessibility-Plan WCAG 2.2 AA (Kontrastnachweise der Farbtokens, Fokus-States, Tap-Targets ≥ 44 px).

**Tag 19 - Strategie, Keyword-/GEO-Research, IA & Tech-Foundations**
- R1: Konsolidierung Tech-Foundations: Lauffaehiges Astro-Skeleton (Routing, Collections, Tokens, Fonts, Sitemap, CI) auf Preview-Deploy.
- R2: Finalisierung **Redirect-Inventar** (vollstaendiges 301/410-Mapping) + Review mit R5 auf technische Umsetzbarkeit.
- R4: Finalisierung **Keyword-Map & Redaktionsplan** als verbindliche Content-Roadmap.
- R5: Launch-Runbook-Geruest + Staging-Umgebung mit Basic-Auth (noindex) aufsetzen.

**Tag 20 - Strategie, Keyword-/GEO-Research, IA & Tech-Foundations**
- R1: Architektur-Review Phase 1 (Schichtentrennung des Skeletons gegen 8.1, Budget-/Komplexitaets-Gates aktiv); R3: Design-Integritaets-Sweep der Design-Richtung (8.6).
- **MEILENSTEIN: Strategie- & Foundations-Paket freigegeben - finale IA/Sitemap, Keyword-Map, Redirect-Inventar, Schema-Plaene, lauffaehiges Astro-Skeleton mit CI/CD.**
- **SPRINT-REVIEW Phase 1: Abnahme IA, Keyword-Map, Redirect-Inventar, Design-Richtung; Go fuer Design-System.**

---

### Phase 2 - Design-System & UX-Prototyp (Tag 21-34)
*Ziel: Vollstaendiges, WCAG-2.2-AA-konformes Design-System (Tokens, Komponenten, Logo-Varianten, Bildsprache) und high-fidelity, klickbare Prototypen aller Seitentypen - als verbindliche Vorlage fuer das Core-Development. Design vor Build.*

**Tag 21 - Design-System & UX-Prototyp**
- R3: **Farbtokens final** in Figma-Bibliothek (alle Hex aus 2.1 mit AA-Kontrastnachweis), Light-Foundation.
- R1: Tailwind-Config mit den finalen Tokens synchronisieren (1:1 Mapping Figma ↔ CSS Custom Properties).
- R5: Storybook/Komponenten-Sandbox aufsetzen fuer isolierte Komponenten-Entwicklung.

**Tag 22 - Design-System & UX-Prototyp**
- R3: Typografie-System final (Inter-Skala display→legal, line-heights, `max-width:70ch`, Headline-Tracking).
- R1: Basis-Layout (12-Spalten-Grid, Container 1200/720 px, Spacing-Skala, Sektionsrhythmus) als Astro-Layout-Komponente.
- R4: Leistungs-Text „Asbestsanierung TRGS 519" Rohtext fertig (Pillar-Referenztext).

**Tag 23 - Design-System & UX-Prototyp**
- R3: **Logo-Varianten finalisieren** (Original auf Hell, Negativ-Weiss mit Gruenakzent, Schutzzone, Mindesthoehe, Favicon-Set 16/32/180/512).
- R1: Header- & Footer-Komponente (Logo prominent, Navigation, NAP, Sticky Mobile-CTA-Leiste) bauen.
- R5: Favicon-/OG-Image-Pipeline technisch einbinden.

**Tag 24 - Design-System & UX-Prototyp**
- R3: Button-System (green-600 Default mit weissem Text, Hover/Aktiv, Notfall signal-600), Form-Inputs, Fokus-States (AA).
- R1: Button-, Input- & Form-Komponenten gem. Design umsetzen (Radius 12 px, Tap-Target ≥ 44 px).
- R5: Kontaktformular-Frontend an Form-Backend anbinden (Felder: Name, Telefon, E-Mail, Ort, Dienstleistung, Nachricht, Bildupload max. 8).

**Tag 25 - Design-System & UX-Prototyp**
- R3: Karten-/Service-Card-, Badge-, Trust-Element-Komponenten (Radius 16 px, weiche Schatten).
- R3: Woechentliches Design-Integritaets-Review gegen 8.5-Checkliste (MCP-Screenshots, Pass/Fail dokumentiert).
- R1: Service-Card-, Badge-, Kennzahlen-Komponenten bauen; in Storybook dokumentieren.
- R4: Leistungs-Texte „Floor-Flex entfernen" + „Welleternit ausbauen" Rohtexte.

**Tag 26 - Design-System & UX-Prototyp**
- R3: Hero-Konzept (Claim H1, Sub-Claim, CTA-Hierarchie, Bildbehandlung kuehl-neutral, kein Reisser-Bild).
- R1: Hero-Komponente + LCP-optimiertes Hero-Bild (Preload, kein Lazy) umsetzen.
- R2: JSON-LD-Komponente (`@graph` pro Seite, Org einmal voll, sonst `@id`-Referenz) als wiederverwendbares Astro-Snippet.

**Tag 27 - Design-System & UX-Prototyp**
- R3: Autorenbox- & FAQ-Akkordeon-Design (E-E-A-T-konform: Foto, Bio, Credentials, datePublished/dateModified sichtbar).
- R1: Autorenbox-, FAQ-, Breadcrumb-Komponenten bauen.
- R4: Leistungs-Texte „KMF-Sanierung" + „PAK-Sanierung" Rohtexte.

**Tag 28 - Design-System & UX-Prototyp**
- R3: Bildsprache-/Fotokonzept final (Vorher/Nachher-Slider, PSA, Schwarz-Weiss-Schleuse, Big-Bag-Entsorgung; alt-Text-Regeln; AVIF/WebP).
- R1: Vorher/Nachher-Slider- & Bildkomponente (responsive srcset, lazy ausser Hero) umsetzen.
- R5: Bild-Optimierungs-Pipeline (Sharp/Cloudflare Images) im Build verifizieren.

**Tag 29 - Design-System & UX-Prototyp**
- R3: **High-Fidelity-Prototyp Startseite** in Figma (alle Sektionen: Hero, Leistungen, 6 Gruende, Ablauf 5 Schritte, Bewertungen, CTA).
- R1: Startseiten-Template aus Komponenten zusammensetzen (statisch, mit Dummy-Daten).
- R4: Leistungs-Texte „Luftanalysen VDI 3492" + „Materialanalyse" Rohtexte.

**Tag 30 - Design-System & UX-Prototyp**
- R3: High-Fidelity-Prototyp Leistungs-Pillar + Stadt-/Spoke-Seite (Klasse-A/B/C-Bloecke visuell getrennt).
- R3: Woechentliches Design-Integritaets-Review gegen 8.5-Checkliste (MCP-Screenshots, Pass/Fail dokumentiert).
- R1: Leistungs-Pillar-Template bauen (Service-Schema-Slot, FAQ, CTA, interne Hub-Verlinkung).
- R2: Breadcrumb- & FAQPage-Schema in Templates verdrahten.

**Tag 31 - Design-System & UX-Prototyp**
- R3: High-Fidelity-Prototyp Ratgeber-Beitrag (einheitliche Beitragsstruktur 5.2: Answer-First, Tabelle, Liste, Quellen, FAQ).
- R1: Ratgeber-Template bauen (Article/BlogPosting-Schema-Slot, Autoren-`@id`-Referenz, Quellenblock).
- R4: Leistungs-Texte Restpaket (Abbrucharbeiten, Bitumenkleber, Fassadenplatten, Asbestzement, Fensterbaenke, CV-Belaege) starten.

**Tag 32 - Design-System & UX-Prototyp**
- R3: High-Fidelity-Prototyp Firma, Bewertungen, Kontakt; Barrierefreiheits-Annotationen (Fokusreihenfolge, ARIA).
- R1: Stadt-/Spoke-, Hub-, Firma-, Kontakt-Templates aus Komponenten zusammensetzen.
- R5: a11y-Automatik (axe/Lighthouse CI) in Pipeline einbinden.

**Tag 33 - Design-System & UX-Prototyp**
- R3: Design-QA aller Prototypen mit Chrome DevTools MCP (visuelle Iteration, Kontrast, Responsivitaet 360/768/1200 px).
- R1: Komponenten-Bibliothek-Review & Refactoring, Storybook-Dokumentation vervollstaendigen.
- R2: Schema-Validierung der Template-Slots (Rich Results Test / Schema Validator) - Breadcrumb & Article gruen.

**Tag 34 - Design-System & UX-Prototyp**
- R1: Architektur-/Komponenten-Review Phase 2 (Komponenten-Budgets 8.2, Token-Konformitaet 8.1); R3: Design-Integritaets-Voll-Sweep aller Prototypen (8.6).
- **MEILENSTEIN: Design-System + klickbare High-Fidelity-Prototypen aller Seitentypen freigegeben (Tokens, Logo-Varianten, Komponenten-Bibliothek, WCAG-2.2-AA-Nachweis).**
- **SPRINT-REVIEW Phase 2: Kundenabnahme Design & Prototypen; Templates technisch verifiziert; Go fuer Core-Development.**

---

### Phase 3 - Core-Development: Komponenten, Seiten-Templates, CMS, Infrastruktur (Tag 35-55)
*Ziel: Produktionsreife, schema-validierte Seiten-Templates mit Index-Gate-Logik, voll angebundenes Git-CMS, GEO-Dateien-Generierung und gehaertete Infrastruktur (Forms, Analytics, Suche, Security). Templates vor Content-Massenproduktion.*

**Tag 35 - Core-Development**
- R1: Komponenten-Bibliothek aus Phase 2 in produktiven Code ueberfuehren, Token-Konsistenz final pruefen.
- R5: CMS Sveltia/Decap voll konfigurieren (Collections-Mapping zu Zod-Schemata, Editor-Rollen, Media-Library).
- R2: facts.json + entities.json Generator (aus zentraler Datenquelle, `@id` identisch zum On-Page-JSON-LD) bauen.

**Tag 36 - Core-Development**
- R1: Startseiten-Template produktionsreif (alle Sektionen, echte Komponenten, Lazy/Preload korrekt).
- R2: Startseiten-Schema voll (`Organization`+`HomeAndConstructionBusiness`+`WebSite`+SearchAction+`WebPage`) implementieren.
- R5: CMS-Anbindung Startseiten-Inhalte (editierbare Felder) testen.

**Tag 37 - Core-Development**
- R1: Leistungs-Pillar-Template produktionsreif (13-fach datengetrieben aus Content Collection).
- R2: `Service`+`WebPage`+`BreadcrumbList`+`FAQPage`+`ImageObject` je Pillar verdrahten.
- R4: Leistungs-Rohtexte (Restpaket) abschliessen, Redaktion/Faktencheck.

**Tag 38 - Core-Development**
- R1: Stadt-/Spoke-Template produktionsreif inkl. **Index-Gate-Logik** (leere Pflicht-A-Bloecke → `noindex,follow`).
- R2: Spoke-Schema (`Service` mit `areaServed`={Stadt}, keine fingierte Adresse) + stadtspezifische FAQPage verdrahten.
- R5: Datentabelle Stadt × Leistung in CMS/Datenlayer einpflegen, Pflichtfeld-Validierung serverseitig im Build.

**Tag 39 - Core-Development**
- R1: Standort-Hub `/standorte/` + Leistungs-Hub `/leistungen/` Templates (Uebersicht, kontextuelle Verlinkung).
- R2: Interne-Verlinkungs-Logik (Spoke → beide Hubs + 2-3 Nachbarstaedte, kein 80er-Footer-Linkblock) implementieren.
- R3: Design-QA Hub-/Spoke-Templates mit echten Tokens (visuelle Iteration).

**Tag 40 - Core-Development**
- R1: Ratgeber-Template produktionsreif (einheitliche Struktur 5.2, MDX-Komponenten fuer Tabelle/Liste/Quellen/TL;DR).
- R2: `BlogPosting`/`Article`+`Person`(@id)+`BreadcrumbList`+`WebPage`+`ImageObject` verdrahten, Autoren-`@id` aufloesen.
- R4: Autorenseiten-Inhalt `/team/[name]/` (Bio, Credentials, knowsAbout) finalisieren.

**Tag 41 - Core-Development**
- R1: Autorenseiten-Template `/team/[name]/` + voll ausgepraegtes `Person`-Schema (hasCredential, sameAs, worksFor `@id`).
- R5: Kontaktformular produktiv: Form-Backend, Spam-Schutz (Honeypot/Rate-Limit), Bildupload-Limits, Danke-Seite `noindex`.
- R2: ContactPage- + LocalBusiness-Schema (ContactPoint, openingHoursSpecification) auf `/kontakt`.

**Tag 42 - Core-Development**
- R1: Firma-, Bewertungen-, Impressum-, Datenschutz-Templates produktionsreif.
- R2: `AboutPage`-Schema (Firma) + first-party `aggregateRating` nur falls echte sichtbare Bewertungen vorhanden.
- R5: DSGVO-Formular-Flow Ende-zu-Ende (EU-Speicherung, Loeschkonzept, Datenschutzhinweis verlinkt) testen.

**Tag 43 - Core-Development**
- R1: Pagefind-Suche integrieren (`astro-pagefind`, client-seitig, Build-Output-Index) + WebSite-SearchAction.
- R2: llms.txt + llms-full.txt Generator (Markdown aus Kernseiten, „Stand: JJJJ-MM-TT" je Block) bauen.
- R5: Plausible/Umami produktiv einbinden, Goal-Tracking (Anruf-Klick, WhatsApp, Formular-Submit).

**Tag 44 - Core-Development**
- R1: 301/410-Redirect-Mechanik in Cloudflare (`_redirects`/Bulk Redirects) aus Redirect-Inventar generieren.
- R2: Redirect-Inventar 1:1 technisch verproben (Stichproben-Tests Alt-URL → neues Ziel, Status 301/410).
- R5: Cloudflare-Security (HTTPS-Erzwingung, Security-Header, WAF-Basics) konfigurieren.

**Tag 45 - Core-Development**
- R1: Performance-Pass Templates (Core Web Vitals: LCP/CLS/INP), JS-Budget pruefen (Islands minimal halten).
- R3: Visuelle QA & Micro-Interactions (Hover, Slider, Akkordeon) - Konsistenz zu Prototyp; woechentliches Design-Integritaets-Review gegen 8.5-Checkliste (MCP-Screenshots).
- R5: Lighthouse-CI-Schwellen (Perf/SEO/a11y/Best-Practices ≥ 95) als Pipeline-Gate setzen.

**Tag 46 - Core-Development**
- R1: Responsiveness-Haertung (360/768/1024/1200 px) aller Templates, Sticky Mobile-CTA-Leiste final.
- R3: Barrierefreiheits-Pass (Fokusreihenfolge, ARIA-Labels, Slider-Tastaturbedienung, alt-Texte).
- R2: Self-referencing Canonical pro Template + Pruefung „Canonical/noindex nie gemischt".

**Tag 47 - Core-Development**
- R1: OG-Image-Generierung (dynamisch je Seitentyp, Logo prominent) + Favicon-Set final einbinden.
- R2: Schema-Vollvalidierung aller 6 Seitentypen (Rich Results Test, `@id`-Konsistenz facts.json ↔ entities.json ↔ On-Page).
- R5: robots.txt produktiv (Retrieval-Bots erlauben, Googlebot nie blocken, Sitemap deklarieren).

**Tag 48 - Core-Development**
- R1: Sitemap-Index produktiv (nur kanonische/indexierbare URLs, `noindex`-Ausschluss verifiziert).
- R4: Content-Integration: erste Pillar-Texte (Asbestsanierung, Floor-Flex, Welleternit) ins CMS einpflegen.
- R5: Staging-Voll-Deploy (Basic-Auth, noindex) fuer Stakeholder-Review.

**Tag 49 - Core-Development**
- R1: Code-Review-Runde (alle Templates), Refactoring-Puffer: technische Schulden + Budget-Verstoesse aus 8.2 aufloesen.
- R4: Content-Integration: restliche Leistungs-Pillars ins CMS einpflegen, interne Verlinkung setzen.
- R2: GSC-/Bing-Webmaster-Property-Vorbereitung (Verifizierung der Staging→Prod-Domain planen).

**Tag 50 - Core-Development**
- R1: Konsolidierung: alle Seiten-Templates produktionsreif, schema-validiert, CWV-konform auf Staging.
- R4: Pillar-Content vollstaendig integriert (13 Leistungsseiten live auf Staging).
- R5: **ZWISCHEN-DELIVERABLE: Voll funktionsfaehiges Staging - alle Templates, CMS, Forms, Analytics, Suche, Redirect-Mechanik, GEO-Dateien-Generatoren betriebsbereit; Bruecke in Phase 4 (Content-Produktion ab Tag 56).**

---

### Teil B - Tag 51 bis 100

**Tag 51 - Phase 3: Core-Development (Komponenten, Seiten-Templates, CMS, Infrastruktur)**
- R1: Finalisierung des Komponenten-Systems - `BeforeAfterSlider`, `StickyContactBar` (mobil, Tap-Target >=44px), `TrustBadgeRow` (1.000+ Projekte / 15+ Jahre / 100% zertifiziert) auf Storybook-Niveau dokumentiert.
- R2: JSON-LD-Helper als zentrale Astro-Komponente (`<SchemaGraph>`) - ein `@graph` pro Seite, Org einmal voll auf `/`, sonst per `@id` referenziert.
- R3: Review aller Templates gegen Design-Tokens (Farbpalette, Spacing-Skala 4-128, Radius, Schatten); WCAG-Kontrast-Stichprobe.
- R4: Content-Modell-Abnahme der Content Collections (Frontmatter-Schemata fuer Leistung, Stadt, Spoke, Ratgeber, Autor).
- R5: CMS-Anbindung (Sveltia/Decap) gegen Git-Repo final verdrahtet; Redaktions-Login + Branch-Workflow getestet.
- **Deliverable: Komponenten-Bibliothek eingefroren; CMS produktiv bedienbar.**

**Tag 52 - Phase 3: Core-Development**
- R1: Implementierung Leistungs-Pillar-Template `/leistungen/[leistung]/` inkl. `getStaticPaths` aus Content Collection.
- R2: `Service`+`WebPage`+`BreadcrumbList`+`FAQPage`+`ImageObject`-Schema in Leistungs-Template verdrahtet (nur sichtbare Inhalte markiert).
- R3: Hero-, Ablauf- (5 Schritte) und FAQ-Sektionen designseitig final.
- R4: Pilot-Leistungstext "Asbestsanierung TRGS 519" als Goldstandard-Vorlage geschrieben.
- R5: Build-Pipeline-Check: `getStaticPaths` skaliert; Build-Zeit-Baseline gemessen.

**Tag 53 - Phase 3: Core-Development**
- R1: Stadt-/Spoke-Template `/leistungen/[leistung]/[stadt]/` + `/standorte/[stadt]/` mit Index-Gate-Logik (Daten-Vollstaendigkeit -> index/noindex).
- R2: Spoke-Schema (`Service` mit `areaServed`={Stadt}, KEINE fingierte Zweitadresse) + stadtspezifisches `FAQPage`.
- R3: Stadtseiten-Layout fuer Klasse-A-Bloecke (Anfahrt, Stadtteile, Bausubstanz, Referenzen, Maps-Route).
- R4: Datentabelle Stadt x Leistung strukturell befuellt (9 Prioritaetsstaedte zuerst, Pflicht-A-Felder markiert).
- R5: Index-Gate als Build-Assertion: leere Pflicht-A-Bloecke erzwingen automatisch `noindex,follow`.

**Tag 54 - Phase 3: Core-Development**
- R1: Ratgeber-Template `/ratgeber/[slug]/` + Autorenseiten `/team/[name]/`.
- R2: `BlogPosting`/`Article`+`Person`(@id)+`BreadcrumbList`+`WebPage`-Schema; `datePublished`/`dateModified` aus Frontmatter.
- R3: Einheitliche Beitragsstruktur designt (Answer-First-Intro, TL;DR-Box, Autorenbox, Tabelle, FAQ, CTA).
- R4: Autorenkonzept finalisiert: Person-Schema-Felder (`jobTitle` "Sachkundiger nach TRGS 519", `hasCredential`, `sameAs`).
- R5: Pagefind (`astro-pagefind`) integriert; client-seitige Suche gegen Build-Output verifiziert.

**Tag 55 - Phase 3: Core-Development (Abschluss) + Sprint-Review**
- R1: Hauptseiten-Templates (`/`, `/firma`, `/bewertungen`, `/kontakt`, `/impressum`, `/datenschutz`) fertiggestellt.
- R2: Startseiten-`@graph` (Organization+HomeAndConstructionBusiness voll, WebSite+SearchAction, WebPage) final.
- R3: Designabnahme aller Templates; Komponenten-Inventar gegen Wireframes geprueft.
- R4: Kontaktseiten-Texte + 6-Gruende-/Werte-Bloecke; Bewertungen (echte Stimmen) eingepflegt.
- R5: CI/CD auf Cloudflare Pages (Preview-Deploys pro Branch) gruen; Formspree/Formgrid-Endpoint testweise angebunden.
- R1: Architektur-/Refactoring-Review Phase 3 (Budget-Check 8.2, technische Schulden, ADR-Stand); R3: Design-Integritaets-Voll-Sweep (8.6).
- **MEILENSTEIN PHASE 3 ABGESCHLOSSEN: Alle Seiten-Templates + CMS + Infrastruktur stehen. Sprint-Review mit Kunde (Template-Demo).**

**Tag 56 - Phase 4: Content-Produktion (Leistungs-/Stadt-Landingpages, Blog & GEO-Dateien)**
- R4: Leistungstexte 2-3 (Floorflex entfernen, Welleternit ausbauen) - einzigartig, fachlich, publikationsreif.
- R3: Bildkonzept-Umsetzung Start: Shotlist fuer echte Projektfotos (PSA, Schwarz-Weiss-Schleuse, Big Bags, Vorher/Nachher).
- R1: `<Image>`/`<Picture>`-Pipeline (Sharp) + Cloudflare Images konfiguriert (AVIF/WebP, responsive srcset).
- R2: GEO-Datei-Geruest angelegt: `/llms.txt`, `/llms-full.txt`, `/facts.json`, `/entities.json` als generierte Build-Artefakte.
- R5: Form-Backend final (EU-Speicherung, Upload-Limit max. 8 Bilder, Datenminimierung); Honeypot/Spamschutz.

**Tag 57 - Phase 4: Content-Produktion**
- R4: Leistungstexte 4-6 (Bitumenkleber, Fassadenplatten, Asbestzement).
- R3: Fotoshooting-Begleitung / Stockfoto-Auswahl (lizenziert, kuehl-neutral, dezenter Gruen-Hauch); `alt`-Texte vergeben.
- R2: `facts.json` mit verifizierten NAP/geo/Leistungen befuellt (`@id` identisch zum On-Page-JSON-LD); `_meta.lastUpdated` gesetzt.
- R1: Logo-Assets final (Favicon 16/32/180/512, OG-Images-Template, optional Foto-Watermark).
- R5: DSGVO-Pruefung Form-Flow; Consent NICHT vorausgehakt; Datenschutzhinweis am Formular verlinkt.

**Tag 58 - Phase 4: Content-Produktion**
- R4: Leistungstexte 7-9 (Fensterbaenke, Cushion-Vinyl, KMF-Sanierung).
- R2: `entities.json` befuellt (primaryEntity, Service-/Place-Entitaeten, `sameAs`: GBP-CID, Wikidata-QID, LinkedIn) - `@id` deckungsgleich.
- R3: Vorher/Nachher-Slider mit echten Projektbildern bestueckt.
- R1: Bild-Optimierungs-Budget definiert (Hero ohne lazy, Rest `loading="lazy"`); LCP-Element pro Template festgelegt.
- R5: Wikidata-QID-Antrag vorbereitet; GBP-CID extrahiert fuer konsistente `sameAs`-Verknuepfung.

**Tag 59 - Phase 4: Content-Produktion**
- R4: Leistungstexte 10-13 (PAK-Sanierung, Luftanalysen VDI 3492, Materialanalyse, Abbrucharbeiten) - alle 13 Pillars fertig.
- R2: `llms.txt` als Index-Landkarte generiert (Leistungen/Standorte/Ratgeber/Fakten verlinkt).
- R3: Designabnahme aller 13 Leistungsseiten mit finalen Bildern.
- R1: Performance-Pre-Check Leistungsseiten (CWV-Baseline via Chrome DevTools MCP).
- R5: AVV-Liste gestartet (Cloudflare, Formspree/Formgrid, Analytics, CMS) - Drittlandtransfer (DPF/SCC) dokumentiert.
- **Deliverable: Alle 13 Leistungs-Pillar-Seiten content-complete.**

**Tag 60 - Phase 4: Content-Produktion**
- R4: Premium-Stadtseiten Marl + Essen (Klasse A: Anfahrt km/Fahrzeit, Stadtteile, Bausubstanz/Bergsenkung, 1-3 echte Referenzen).
- R2: Stadt-Spoke-Schema je Seite verifiziert; Index-Gate auf erfuellte A-Bloecke geprueft.
- R3: Eingebettete Maps-Route (2-Klick/Platzhalter, erst nach Einwilligung) gestaltet.
- R1: Geo-Daten (Anfahrtszeiten) als strukturierte Datenquelle ins Repo.
- R5: Faktencheck-Gate: Entfernungen + regionale Deponien/Entsorgungswege verifiziert.

**Tag 61 - Phase 4: Content-Produktion**
- R4: Premium-Stadtseiten Bottrop + Oberhausen + Gelsenkirchen (Unique-Anteil >=25-30%, 600-900 Woerter).
- R2: Paarweiser Aehnlichkeitscheck (>80% = Near-Duplicate flaggen) automatisiert.
- R3: Stadtspezifische Fotos/lokale Bildmotive zugeordnet.
- R1: Build-Skalierungstest mit wachsendem Seitenbestand.
- R5: Cannibalization-Audit-Skript (Stadt x Leistung Keyword-Overlap) vorbereitet.

**Tag 62 - Phase 4: Content-Produktion**
- R4: Premium-Stadtseiten Gladbeck + Herten + Koeln + Duesseldorf - alle 9 Prioritaetsstaedte fertig.
- R2: Interne Verlinkung je Spoke: zurueck zu beiden Hubs + 2-3 geografische Nachbarstaedte (kontextuelle Anker, KEINE Footer-Linkliste).
- R3: Designabnahme aller 9 Stadtseiten.
- R1: Orphan-Check (jede Seite >=1 interner Link).
- R5: Mensch-Stichprobe 20% der Stadtseiten gegen QS-Gates.
- **Deliverable: 9 Premium-Stadtseiten live im Preview.**

**Tag 63 - Phase 4: Content-Produktion (Blog/Ratgeber)**
- R4: Ratgeber 1-2: "Floor-Flex erkennen (Bilder/Groessen/Baujahr)" + "Schwarzer Kleber: Bitumen/PAK oder Asbest?" - Answer-First, Tabelle + Liste, Quellen (BAuA/DGUV/TRGS).
- R2: `BlogPosting`+`Person`+`FAQPage`-Schema pro Beitrag; Autor per `@id` referenziert.
- R3: Beitragsbilder + Autorenfotos eingebunden; Autorenbox final.
- R1: Ratgeber-Index/Hub `/ratgeber/` mit Pagination.
- R5: Quellenangaben/Normen-Links auf Korrektheit geprueft (GefStoffV, VDI 3492).

**Tag 64 - Phase 4: Content-Produktion (Blog/Ratgeber)**
- R4: Ratgeber 3-4: "Neue GefStoffV 2024/2025 (Ampel-Modell, Genehmigungspflicht ab Dez. 2025)" + "Asbestsanierung Kosten (qm-Preise + EFH-Beispielrechnung)".
- R2: Aktualitaets-Stempel "Stand: JJJJ-MM-TT" je Beitrag (zaehlt fuer Perplexity); `dateModified`-Logik.
- R3: Tabellen-/Infografik-Design fuer Kosten-Preisanker (45-90 EUR/m^2 etc.).
- R1: Pagefind-Reindex inkl. neuer Ratgeberbeitraege.
- R5: Faktenpruefung Preisanker + GefStoffV-Fristen.

**Tag 65 - Phase 4: Content-Produktion (Blog/Ratgeber)**
- R4: Ratgeber 5-6: "Checkliste vor Hauskauf (Baujahr 1960-1993)" + "Asbest selbst entsorgen vs. Fachbetrieb".
- R2: Interne Verlinkung Ratgeber -> Geldseiten (Conversion-Bruecke P2->P1).
- R3: CTA-Pfad je Beitrag (Anruf/WhatsApp/Anfrage) designkonform.
- R1: Bilder-Lazyload + Schema-`ImageObject` (`license`+`acquireLicensePage`) pro Beitrag.
- R5: Loeschkonzept fuer Personen-/Mitarbeiterfotos (Einwilligung dokumentiert).

**Tag 66 - Phase 4: Content-Produktion (Blog/Ratgeber)**
- R4: Ratgeber 7-8: "Nachtspeicheroefen & Asbest" + "KMF alt vs. neu / TRGS 521" - Topical Authority komplett.
- R2: `llms-full.txt` mit Volltext der Kernseiten + "Stand:"-Bloecke generiert.
- R3: Konsistenz-Review Bildsprache ueber alle Ratgeber.
- R1: Build inkl. aller GEO-Dateien als reproduzierbare Artefakte verifiziert.
- R5: Quellenarchiv (Lizenzen, Normen-Quellen) revisionssicher abgelegt.
- **Deliverable: 8 Ratgeber-Beitraege + alle 4 GEO-Dateien (llms.txt, llms-full.txt, facts.json, entities.json) fertig.**

**Tag 67 - Phase 4: Content-Produktion**
- R4: Firmenseite `/firma` (Geschichte, Zertifikate TRGS 519/521/524, Team, E-E-A-T-Tiefe) + Autorenseiten finalisiert.
- R2: `AboutPage`+`Organization`(Ref)+`Person`-Schema mit `hasCredential`/`knowsAbout`/`sameAs`.
- R3: Zertifikats-/Qualifikationsdarstellung (Fachbetrieb nach GefStoffV) visuell aufbereitet.
- R1: OG-Images pro Seitentyp generiert (Logo prominent).
- R5: Bildrechte/Einwilligungen Team-Portraits dokumentiert.

**Tag 68 - Phase 4: Content-Produktion**
- R4: Bewertungsseite `/bewertungen` (echte First-Party-Stimmen: Krueger, Hoffmann, Becker, Klein, Hausverwaltung).
- R2: `aggregateRating` NUR mit echten, sichtbaren First-Party-Bewertungen (sonst weglassen - Policy).
- R3: Bewertungs-Cards designkonform; Quellenkennzeichnung.
- R1: WhatsApp nur als `wa.me`-Link (kein eingebettetes Widget = kein Cookie-Banner-Trigger).
- R5: UWG-Konformitaet Bewertungen (KEINE Anreize/Boni, auch nicht fuer Mitarbeiter seit April 2026).

**Tag 69 - Phase 4: Content-Produktion**
- R4: Startseiten-Text final (Claim "Asbest? Wir holen Sie da raus", Sub-Claim, Positionierung, 6 Gruende, Ablauf).
- R3: Startseiten-Komposition (Hero, Trust, Leistungs-Grid, CTA-Sektionen) final.
- R2: Startseiten-`@graph` Endkontrolle gegen NAP/GBP/Impressum.
- R1: Sticky Anruf-/WhatsApp-Leiste mobil verifiziert.
- R5: Kontaktdaten-Konsistenz (Tel +49 2365 2960630, Marl, E-Mail-Verifikation offen markiert).

**Tag 70 - Phase 4: Content-Produktion**
- R4: Skalierbares Stadt-Qualitaets-Template (Phase-2-pSEO) mit echten lokalen Daten fuer erste 10-15 Folgestaedte vorbereitet (Staffel-Rollout, NICHT auf einmal).
- R2: Index-Hygiene: Folgestaedte mit unvollstaendigen A-Bloecken -> `noindex,follow`.
- R3: Template-Bildslots fuer Folgestaedte definiert.
- R1: Datentabelle erweitert; Build-Zeit erneut gemessen.
- R5: Daten-Vollstaendigkeits-Gate auf Folgestaedte angewandt.

**Tag 71 - Phase 4: Content-Produktion**
- R4: Erste Staffel Folgestaedte (10-15) befuellt mit ECHTEN lokalen Daten (Anfahrt, Stadtteile, Deponien).
- R2: Floor-Flex x Stadt priorisiert (Schnellgewinn, schwacher Wettbewerb) - Index-Freigabe nur bei erfuellten Gates.
- R3: Stichproben-Designabnahme Folgestaedte.
- R1: Sitemap-Generierung (`@astrojs/sitemap`) - nur kanonische, indexierbare URLs.
- R5: QS-Gates (Unique-Anteil, Near-Duplicate, Faktencheck) auf Staffel 1 angewandt.

**Tag 72 - Phase 4: Content-Produktion**
- R4: Pagefind-Suchindex inhaltlich geprueft; Content-Lektorat-Durchlauf (Tonalitaet, Faktentreue) Gesamtbestand.
- R2: Interne-Verlinkungs-Audit gesamt (Hub<->Spoke<->Nachbarstaedte, Ratgeber->Geldseiten).
- R3: Barrierefreiheits-Vorpruefung Content (Headline-Hierarchie, `alt`-Texte vollstaendig).
- R1: Bild-Gesamtbudget-Check (Gewicht, Formate AVIF/WebP).
- R5: 410-Liste fuer Alt-URLs ohne neues Ziel begonnen.

**Tag 73 - Phase 4: Content-Produktion**
- R4: Rechtsseiten-Textentwurf: Impressum (Inhalt) + Datenschutzerklaerung-Entwurf an DSB/Anwalt vorbereitet.
- R5: Impressum (Paragraf 5 DDG): HWK, Berufsbezeichnung, USt-IdNr., Register - Pflichtfelder zusammengestellt; alte EU-OS-Hinweise entfernt.
- R2: Datenschutz listet ALLE real eingesetzten Tools (Cloudflare, Plausible/Umami, Form-Backend) - keine Blind-Vorlage.
- R3: Rechtsseiten-Layout (lesbar, "Impressum" max. 2 Klicks erreichbar).
- R1: Footer mit prominentem Logo + Pflicht-Links final.

**Tag 74 - Phase 4: Content-Produktion (Abschluss) + Sprint-Review**
- R4: Gesamt-Content-Freeze; redaktionelle Endabnahme.
- R2: GEO-Dateien Endkontrolle (`@id`-Deckungsgleichheit ueber JSON-LD/facts/entities).
- R3: Visuelle Gesamtabnahme aller Seitentypen.
- R1: Vollstaendiger Production-Build gruen; Artefakt-Inventar.
- R5: AVV-Liste vollstaendig; Verzeichnis der Verarbeitungstaetigkeiten (Art. 30) angelegt.
- R1: Architektur-/Refactoring-Review Phase 4 (Budget-Check 8.2, technische Schulden); R3: Design-Integritaets-Voll-Sweep aller Seitentypen (8.6).
- **MEILENSTEIN PHASE 4 ABGESCHLOSSEN: Alle Inhalte (13 Leistungen, 9 Premium-Staedte + Staffel 1, 8 Ratgeber, Haupt-/Rechtsseiten) + GEO-Dateien fertig. Sprint-Review mit Kunde.**

**Tag 75 - Phase 5: Technische SEO, strukturierte Daten, 301-Redirects & Performance-Tuning**
- R2: Vollstaendiger JSON-LD-Audit (Rich Results Test / Schema-Validator) ueber alle Seitentypen; ein `@graph` pro Seite bestaetigt.
- R1: `<head>`-Audit: Self-referencing Canonical je Seite; Canonical und `noindex` NIE gemischt.
- R5: 301-Redirect-Map Alt->Neu der ~1.960 Alt-URLs begonnen (naechstbestes Ziel; sonst 410).
- R3: Favicon-/OG-/Touch-Icon-Set ueber alle Groessen verifiziert.
- R4: Meta-Titles/Descriptions je Seite (einzigartig, Keyword-fokussiert P1).

**Tag 76 - Phase 5: Technische SEO**
- R5: 301-Map systematisiert: jede Alt-URL `/leistungen/[leistung]-[stadt]` -> neues Spoke- oder Stadt-/Leistungsziel; Cloudflare-Redirect-Regeln (Bulk).
- R2: XML-Sitemap final: nur kanonische, indexierbare URLs; >50.000 -> Sitemap-Index; in `robots.txt` deklariert.
- R1: www-Kanonisierung: 301 von non-www auf `https://www.asbesta-schadstoffsanierung.de/` (eine Variante, verbindlich).
- R3: Print-/Reduced-Motion-Stylesheets geprueft.
- R4: Breadcrumb-Beschriftungen sprachlich final.

**Tag 77 - Phase 5: Technische SEO**
- R5: Redirect-Tests (Stichprobe 100+ Alt-URLs): 301-Status, Zielkorrektheit, keine Redirect-Ketten/-Loops.
- R2: `robots.txt` final: Retrieval-Bots erlaubt (OAI-SearchBot, ChatGPT-User, PerplexityBot, Claude-SearchBot, Bingbot, Googlebot NIE blocken); Sitemap + llms.txt verlinkt.
- R1: HTTP-Header (HTTPS-Erzwingung, Security-Header CSP/HSTS, `Content-Type` fuer GEO-Dateien text/plain bzw. application/json).
- R4: 410-Texte/Soft-404-Vermeidung redaktionell.
- R3: Fokus-Indikatoren/Tab-Reihenfolge designseitig geprueft.

**Tag 78 - Phase 5: Performance-Tuning**
- R1: Core-Web-Vitals-Tuning (Chrome DevTools MCP): LCP < 2.5s, CLS < 0.1, INP < 200ms; Font-Preload (Inter WOFF2, `font-display:swap`).
- R2: Strukturierte-Daten-Regression nach Build-Optimierungen.
- R3: Layout-Shift-Quellen (Bilder mit Dimensionen, reservierte Slots) eliminiert.
- R5: Cloudflare-Caching/Compression (Brotli) + Cache-Regeln fuer statische Assets.
- R4: Above-the-fold-Text-Prioritaet je Template bestaetigt.

**Tag 79 - Phase 5: Performance-Tuning**
- R1: Bild-Pipeline-Feinschliff (AVIF-First, exakte `srcset`-Breakpoints, Hero-Preload); minimales JS (Islands nur wo noetig).
- R2: Lighthouse/PSI-Lauf SEO+Performance >=95 je Schluesselseite dokumentiert.
- R5: Pagefind-Index-Groesse + Ladeverhalten optimiert.
- R3: Schrift-Subsetting (latin+latin-ext, ae/oe/ue/ss) verifiziert.
- R4: Content-Laenge vs. Ladezeit bei langen Ratgebern abgewogen.

**Tag 80 - Phase 5: Technische SEO + strukturierte Daten**
- R2: `ImageObject` mit `license`+`acquireLicensePage` (einziges echtes Bild-Rich-Result) flaechendeckend gesetzt.
- R1: `hreflang`/Sprachsignal (nur de-DE) + `lang`-Attribut korrekt.
- R5: Bing Webmaster Tools eingerichtet; Sitemap zusaetzlich eingereicht (ChatGPT-Suche nutzt Bing-Index).
- R3: Dark-/High-Contrast-Mode-Stichprobe.
- R4: FAQ-Inhalte gegen "nur sichtbare Inhalte markieren"-Regel geprueft.

**Tag 81 - Phase 5: Technische SEO**
- R2: Google Search Console + Bing eingerichtet; Property verifiziert; Sitemap eingereicht (Staging/Pre-Prod).
- R5: Google Business Profile vorbereitet (Primaerkategorie "Sanierungsunternehmen", 10+ Fotos, NAP exakt = Master-NAP).
- R1: 404-Seite + Soft-404-Vermeidung; interne Suche `noindex`.
- R3: GBP-Foto-Set (Vorher/Nachher) kuratiert.
- R4: NAP-Konsistenz-Check ueber alle Seiten + GEO-Dateien.

**Tag 82 - Phase 5: Performance + SEO**
- R1: Finaler CWV-Gesamtdurchlauf mobil+desktop; INP-Hotspots (Sticky-Bar, Slider) entschaerft.
- R2: Cannibalization-Audit ausgewertet (Keyword-Overlap Stadt/Leistung) - Konsolidierung/Canonicals gesetzt.
- R5: 20-50 DE-Verzeichnisse (Gelbe Seiten, Das Oertliche, 11880, Cylex, meinestadt.de, Bing Places, Apple Business Connect, IHK/HWK) - NAP-Eintragsplan.
- R3: Conversion-Element-Check (CTA-Sichtbarkeit, Tap-Targets).
- R4: Snippet-Vorschau-Optimierung (Title/Description-CTR).

**Tag 83 - Phase 5: Technische SEO**
- R5: 301-Redirect-Map vollstaendig (alle ~1.960 Alt-URLs zugeordnet: 301-Ziel oder 410); Review durch R2.
- R2: Redirect-Map gegen Sitemap/interne Links gegengeprueft (keine Redirect->noindex-Konflikte).
- R1: Staging-Gesamtbuild mit Redirect-Regeln deployt.
- R3: Visuelle Regression (Screenshot-Diff) nach Performance-Aenderungen.
- R4: Letzte Textkorrekturen aus SEO-Audit.

**Tag 84 - Phase 5 (Abschluss) + Sprint-Review**
- R2: Technisches-SEO-Abnahmeprotokoll (Canonical, Sitemap, robots, Schema, Redirects) - alles gruen.
- R1: Performance-Abnahme (CWV/Lighthouse-Report) dokumentiert.
- R5: Redirect-/410-Liste + GBP-/Verzeichnis-Plan freigegeben.
- R3+R4: Inhalts-/Design-Konsistenz final.
- R1: Architektur-/Refactoring-Review Phase 5 (Budget-Check 8.2, technische Schulden, ADR-Stand).
- **MEILENSTEIN PHASE 5 ABGESCHLOSSEN: Technische SEO, Schema, Redirects, Performance abnahmebereit. Sprint-Review.**

**Tag 85 - Phase 6: QA, Barrierefreiheit, Recht/Compliance & Pre-Launch-Haertung**
- R5: QA-Testplan aufgesetzt (Funktional, Cross-Browser Chrome/Firefox/Safari/Edge, Mobil iOS/Android, Formulare).
- R3: WCAG 2.2 AA Vollaudit Start (Kontrast, Fokus, Tastaturbedienung, ARIA, Zoom 200%).
- R1: Playwright-E2E-Suite (kritische Pfade: Anfrage absenden, Anruf-Tap, Navigation, Suche).
- R2: Schema-Endvalidierung gegen Live-naehe Staging.
- R4: Korrekturlauf Texte aus QA-Findings.

**Tag 86 - Phase 6: QA & Barrierefreiheit**
- R3: WCAG-Fixes (Fokus-Indikatoren, Formular-Labels/Fehlermeldungen, Skip-Links, `prefers-reduced-motion`).
- R1: Layout-/Komponenten-Bugfixing aus Cross-Browser-Tests.
- R5: Formular-QA: Validierung, Bildupload (max. 8, Typ/Groesse), Honeypot, Erfolgs-/Fehler-States, `noindex` Danke-Seite.
- R2: Strukturierte-Daten-Smoke-Test nach Fixes.
- R4: Mikrocopy Formular/Fehlertexte final.

**Tag 87 - Phase 6: Recht/Compliance**
- R5: Impressum final (Paragraf 5 DDG: ladungsfaehige Anschrift, E-Mail+Telefon, HWK, Berufsbezeichnung, berufsrechtliche Regelungen, Register/Nr., USt-IdNr.) - juristisch gegengelesen.
- R2: NAP/E-Mail-Verifikation final geklaert (kundenseitig oeffentliche Adresse) - konsistent in NAP/Impressum/Schema.
- R4: Impressums-/Datenschutz-Texte sprachlich final.
- R1: Footer-/Header-Links auf Pflichtseiten verifiziert (max. 2 Klicks).
- R3: Lesbarkeit Rechtsseiten (Typo, Kontrast).

**Tag 88 - Phase 6: Recht/Compliance**
- R5: Datenschutzerklaerung final (Art. 13 DSGVO: alle Tools, Zwecke/Rechtsgrundlagen, AV, Drittland DPF/SCC, Speicherdauer, Betroffenenrechte).
- R5: Cookie-/Consent-Pruefung (Paragraf 25 TDDDG): Stack ist cookieless (Plausible/Umami) + selbst gehostete Fonts + `wa.me`-Link => Bestaetigung KEIN Cookie-Banner noetig (dokumentiert).
- R2: Falls Maps eingebettet: 2-Klick/Platzhalter, erst nach Einwilligung - Endkontrolle.
- R1: Google-Fonts-Selbsthosting bestaetigt (kein externes CDN, LG-Muenchen-Praezedenz).
- R3: Consent-/Platzhalter-UI (falls Maps) designkonform.

**Tag 89 - Phase 6: Recht/Compliance (BFSG) + Haertung**
- R5: BFSG-Einordnung dokumentiert: Lead-/Infoseite ohne Online-Vertragsabschluss => voraussichtlich NICHT verpflichtet; Kleinstunternehmen-Ausnahme (<10 MA UND <=2 Mio. EUR) - Kennzahlen vom Kunden eingeholt + dokumentiert. Entscheidung: WCAG 2.2 AA dennoch umgesetzt.
- R3: WCAG-2.2-AA-Konformitaetserklaerung (Selbstbewertung) erstellt.
- R1: Security-Header-Haertung (CSP final, HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy).
- R2: `noindex`-Seiten crawlbar (nicht in robots.txt gesperrt) bestaetigt.
- R4: Rechtstext-Querverweise gepflegt.

**Tag 90 - Phase 6: Pre-Launch-Haertung**
- R1: Last-/Build-Stresstest; Cache-Hit-Ratio Cloudflare; Fallback-Verhalten.
- R5: Backup-/Rollback-Strategie definiert; AVV final unterzeichnet (Cloudflare, Form-Backend, Analytics, CMS).
- R2: GSC/Bing-Property fuer Live-Domain vorbereitet (Verifikation eingestellt).
- R3: Finaler visueller QA-Sweep (alle Templates, Mobile-First).
- R4: Content-Last-Check (tote Links, Platzhalter, Datums-Stempel aktuell).
- **Deliverable: Recht/Compliance + Barrierefreiheit abgenommen.**

**Tag 91 - Phase 6: Pre-Launch-Haertung**
- R5: Launch-Runbook v1 (Cutover-Schritte, Verantwortliche, Zeitfenster, Rollback-Trigger).
- R1: DNS-/Cutover-Plan (TTL vorab auf 300s senken, Cloudflare-Routing, SSL/Edge-Zertifikat).
- R2: 301-Redirect-Generalprobe auf Staging (gesamte Alt-URL-Liste maschinell durchgetestet).
- R3: OG-/Social-Preview-Test (Logo prominent) ueber Debugger.
- R4: Notfall-/Fallback-Texte (Wartungshinweis) bereit.

**Tag 92 - Phase 6: Pre-Launch-Haertung**
- R1: Vollstaendiger E2E-Regressionslauf (Playwright) gruen; visuelle Regression final.
- R5: Monitoring/Alerting eingerichtet (Uptime, Form-Submission-Erfolg, 404/5xx-Alerts, Core-Web-Vitals-Feld).
- R2: Analytics (Plausible/Umami) Zielereignisse (Anruf-Tap, WhatsApp, Formular) verifiziert - cookieless.
- R3: Barrierefreiheits-Re-Test der Fixes (Screenreader-Stichprobe NVDA/VoiceOver).
- R4: Finale Faktenpruefung Preisanker/Normen-Fristen.

**Tag 93 - Phase 6: Pre-Launch-Haertung**
- R2: SEO-Pre-Launch-Checkliste (Canonical, Sitemap, robots, Schema, Titles/Descriptions, noindex-Hygiene) komplett gruen.
- R5: Form-Backend-Produktiv-Test (echte Zustellung an verifizierte E-Mail, DSGVO-Bestaetigung).
- R1: Build-Reproduzierbarkeit + Artefakt-Signatur; Staging == Prod-Parity.
- R3: Letzte Conversion-Detail-Polish (CTA-Hierarchie, Sticky-Bar).
- R4: Redaktioneller Final-Read der Top-20-Seiten.

**Tag 94 - Phase 6 (Abschluss) + Go/No-Go**
- Alle: Go/No-Go-Meeting anhand Checkliste (Technik, SEO, Recht, A11y, Performance, Monitoring).
- R5: Runbook v2 final freigegeben; Rollback geprobt.
- R2: GEO-Dateien + `@id`-Konsistenz letzter Check.
- R1: Abschluss-Review Phase 6 (alle CI-Gates 8.4 gruen, Komponenten-Budgets 8.2 eingehalten, ADRs aktuell); finale Design-Integritaets-Bestaetigung (8.6).
- **MEILENSTEIN PHASE 6 ABGESCHLOSSEN: Pre-Launch-Haertung komplett. GO-Entscheidung dokumentiert. Sprint-Review.**

**Tag 95 - Phase 7: Go-Live (Cutover/DNS/Monitoring)**
- R1: **CUTOVER** - DNS auf Cloudflare Pages umgestellt, SSL aktiv, HTTPS/HSTS erzwungen, www-Kanonisierung live.
- R5: 301-Redirects der ~1.960 Alt-URLs produktiv geschaltet; Live-Stichproben (Status/Ziel).
- R2: Live-Sitemap in GSC + Bing eingereicht; `robots.txt`/llms.txt live verifiziert.
- R3: Visueller Live-Smoke-Test (Desktop/Mobil, OG-Previews).
- R4: Live-Content-Smoke (Schluesselseiten, Kontaktdaten).
- **MEILENSTEIN: GO-LIVE auf `https://www.asbesta-schadstoffsanierung.de/`.**

**Tag 96 - Phase 7: Post-Launch-Stabilisierung**
- R2: GSC-Live-Monitoring (Indexierungs-Start, Abdeckungsfehler, Redirect-Erkennung); URL-Inspection Schluesselseiten.
- R1: Echtzeit-Monitoring (5xx/404, CWV-Feld, Cache-Hit-Ratio); DNS-Propagation bestaetigt.
- R5: Form-/E-Mail-Zustellung live verifiziert; Alert-Schwellen scharf gestellt.
- R3: Cross-Device-Live-Check; Conversion-Pfade.
- R4: Live-FAQ/Inhalt auf Korrektheit.

**Tag 97 - Phase 7: Post-Launch-Stabilisierung**
- R2: Redirect-Fehler/404-Report aus GSC+Logs ausgewertet; Nachsteuerung 301/410 fuer uebersehene Alt-URLs.
- R5: GBP live geschaltet/verknuepft; erste Verzeichniseintraege (NAP) gestartet.
- R1: Performance-Feinjustierung anhand Felddaten (CrUX/INP-Hotspots).
- R3: A11y-Live-Stichprobe.
- R4: Erste Ratgeber-Aktualitaets-Stempel-Pflege.

**Tag 98 - Phase 7: Post-Launch-Stabilisierung**
- R2: Indexierungsfortschritt (Coverage) gemonitort; "Discovered/Crawled - not indexed" frueh erkennen; IndexNow an Bing/Yandex (Google ignoriert).
- R5: Restliche DE-Verzeichnis-Eintraege; NAP-Konsistenz-Audit extern.
- R1: Bug-Triage/Hotfix-Runde aus Live-Findings.
- R3: Conversion-/Heatmap-Beobachtung (cookieless).
- R4: Staffel-2-Stadtseiten-Vorbereitung (10-15, NICHT auf einmal).

**Tag 99 - Phase 7: Post-Launch-Stabilisierung**
- R2: SEO-Frueh-Report (Impressions/Klicks, erste Rankings P1-Keywords, Floor-Flex x Stadt); Cannibalization-Nachkontrolle.
- R1: Stabilitaets-Bestaetigung (keine offenen 5xx/Regressionen); finale Cache-/Security-Header-Kontrolle.
- R5: Backup-/Rollback final getestet; Monitoring-Dashboards uebergeben.
- R3: Design-/A11y-Restpunkte abgearbeitet.
- R4: Redaktions-/Refresh-Kalender (quartalsweiser Content-Refresh, Normen-Aktualitaet) erstellt.

**Tag 100 - Phase 7: Abschluss (Retro + Uebergabe + Wartungsplan-Start)**
- Alle: **Projekt-Retrospektive** (Was lief gut/schlecht, Lessons Learned, Backlog-Uebergabe).
- R5: **Betriebs-/Wartungs-Handbuch** uebergeben (Deploy-Prozess, CMS-Redaktion, Monitoring, Backup/Rollback, Incident-Response).
- R2: **Wartungsplan-Start SEO/GEO:** GSC-Quartals-Review, Staffel-Rollout-Plan Folgestaedte (10-15 alle paar Wochen), GBP-Foto-Kadenz (1 Vorher/Nachher pro Woche), Bewertungs-Velocity (>10, ohne Anreize), quartalsweiser Content-Refresh, jaehrliche Normen-/GefStoffV-Pruefung.
- R1: Code-/Repo-Uebergabe (Doku, ADRs gem. 8.7, Build-Runbook); Wissens-Transfer an Kunde.
- R3: Design-System-/Brand-Guide-Uebergabe (Figma, Tokens, Logo-Regeln).
- R4: Redaktionsleitfaden + Autorenkonzept + Content-Kalender uebergeben.
- **MEILENSTEIN PROJEKTABSCHLUSS (Tag 100): Website live & stabil, Alt-SEO sauber migriert (301/410), Monitoring aktiv, Wartung & laufender Qualitaets-Rollout gestartet. Finale Kunden-Abnahme & Sign-off.**

---

## 7. Qualitaetssicherung, Recht, Launch & Betrieb

Dieser Abschnitt definiert, wie das in Abschnitt 1-6 spezifizierte System abgenommen, rechtssicher gemacht, live gebracht und dauerhaft betrieben wird. Verantwortlich fuer die Gesamtkoordination ist **R5 (Backend/DevOps & QA)** in enger Abstimmung mit **R1 (Tech Lead)**, **R2 (SEO/GEO)** und **R3 (UI/UX & A11y)**. Alle Gates sind in der CI/CD-Pipeline (Cloudflare Pages + GitHub Actions) hinterlegt; ein roter Gate-Status blockiert das Deploy.

**Grundprinzip:** Quality Gates sind automatisiert und reproduzierbar. „Bestanden auf meinem Rechner" zaehlt nicht – nur der Pipeline-Status auf dem `main`-Branch und die Staging-Abnahme zaehlen.

---

### 7.1 QA-Strategie & Test-Matrix

#### 7.1.1 Teststufen im Ueberblick

| Stufe | Was wird geprueft | Werkzeug | Trigger | Gate (blockierend?) |
|---|---|---|---|---|
| **Unit/Component** | Astro-Komponenten, Schema-Generatoren, Datenvalidierung (Stadt × Leistung) | Vitest | Pre-Commit + CI | Ja |
| **Build-Integritaet** | `astro build` ohne Fehler/Warnungen, alle `getStaticPaths` aufloesbar | Astro CLI | CI | Ja |
| **Funktional/E2E** | Navigation, Formular-Submit, Sticky-CTA, WhatsApp-Link, Pagefind-Suche | Playwright | CI (nightly + pre-merge) | Ja |
| **Cross-Browser/Device** | Rendering & Interaktion auf Browser-/Geraete-Matrix | Playwright + BrowserStack-Stichprobe | Pre-Release | Ja |
| **Visual Regression** | Pixel-Diff der Kern-Templates | Playwright `toHaveScreenshot` / Percy (optional) | CI | Warnung → manuelle Freigabe |
| **Performance/CWV** | Lighthouse-Scores, LCP/INP/CLS, Bundle-Groesse | Lighthouse CI (LHCI) | CI je Template-Repraesentant | Ja (Budgets s. 7.5) |
| **Link-Integritaet** | Interne/externe Links, Orphan-Check, Redirect-Kette | Lychee / `linkinator` | CI + woechentlich (Cron) | Ja (intern), Warnung (extern) |
| **Schema-Validierung** | JSON-LD je Seitentyp, `@id`-Konsistenz | Schema.org Validator API + eigenes Skript | CI | Ja |
| **A11y** | WCAG 2.2 AA automatisiert | axe-core (Playwright-Integration) + Lighthouse a11y | CI je Template | Ja (0 kritische Verstoesse) |
| **Rechtschreib-/Faktencheck** | Deutsche Orthografie, NAP-Konsistenz, Fakten | LanguageTool (de-DE) + manuelles Review (R4) | Pre-Publish je Seite | Ja |
| **Code-Komplexitaet/Groesse** | Komponenten-/Funktions-Budgets, toter Code (Abschnitt 8.2) | ESLint (`max-lines`/`complexity`/`max-depth`) + SonarJS + Knip | Pre-Commit + CI | Ja (Hard-Limits 8.2) |
| **Design-Integritaet / Anti-AI-Slop** | Marken-Echtheit, keine KI-Slop-Marker (Abschnitt 8.5) | Review-Template (8.5) + Chrome DevTools/Playwright MCP-Screenshots | Pro Komponente/Seite + woechentl. | Ja (manuell) |
| **Bundle-/Dependency-Budget** | JS pro Seite, neue/ungenutzte Dependencies | `size-limit` + Lighthouse CI + `npm audit`/osv-scanner | CI | Ja (JS <= 30 KB, 0 High-Vulns) |

#### 7.1.2 Cross-Browser-/Device-Matrix (verbindlich)

| Browser | Versionen | Geraete-Profil | Prioritaet |
|---|---|---|---|
| Chrome | aktuell + n-1 | Desktop 1920/1366, Android (Pixel) | P0 |
| Safari | aktuell + n-1 | macOS, iPhone (iOS Safari) | P0 |
| Firefox | aktuell | Desktop | P1 |
| Edge | aktuell | Desktop | P1 |
| Samsung Internet | aktuell | Android | P2 |

Breakpoints gegen die Layout-Tokens aus Abschnitt 2.5 testen (360, 768, 1024, 1200 px). Pflicht-Checks pro Viewport: Sticky Anruf-/WhatsApp-Leiste sichtbar & Tap-Target ≥ 44 px, Hero-LCP-Bild laedt, kein horizontaler Scroll, Logo ≥ 32 px sichtbar.

#### 7.1.3 Visuelles Regression-Testing

- Baseline-Screenshots je **Template-Repraesentant** (nicht je Seite): Startseite, Leistungs-Pillar, Stadt-Spoke, Ratgeber-Artikel, Kontakt, Impressum.
- Threshold 0,1 % Pixel-Differenz; Diffs als CI-Artefakt. Aenderung erfordert bewusste Baseline-Aktualisierung durch R3/R1 (kein Auto-Approve).

#### 7.1.4 Schema-Validierungs-Skript (Eigenleistung)

Da der Schema.org-/Rich-Results-Validator keine `@id`-Graph-Konsistenz prueft, baut R2 ein Node-Skript, das im Build-Output:
1. alle JSON-LD-Bloecke extrahiert und gegen das Schema.org-Vokabular validiert,
2. prueft, dass die Organisation **genau einmal** voll definiert ist (Startseite) und sonst nur per `@id` referenziert wird,
3. `@id`-Werte in On-Page-JSON-LD **identisch** zu `facts.json`/`entities.json` sind (Abschnitt 4.3/4.4),
4. `aggregateRating` nur ausgibt, wenn first-party-Bewertungen sichtbar gerendert sind (sonst Build-Fehler).

#### 7.1.5 Rechtschreib- & Faktencheck

- **Orthografie/Grammatik:** LanguageTool (de-DE-Profil) in CI; fachsprachliches Woerterbuch (TRGS, Welleternit, Floor-Flex, Cushion-Vinyl) als Whitelist.
- **NAP-Konsistenz-Gate:** automatischer Vergleich aller gerenderten Telefon-/Adress-/E-Mail-Vorkommen gegen den **Master-NAP** (Single Source of Truth in `facts.json`). Abweichung = Build-Fehler.
- **Faktencheck (R4):** stadtspezifische Daten (Entfernung/Fahrzeit ab Marl, Stadtteile, Deponien) gegen Quellen; Normverweise (GefStoffV, TRGS 519/521/524, VDI 3492) auf Aktualitaet (neue GefStoffV 2024/2025). YMYL = doppeltes Augenmaerk.

---

### 7.2 Barrierefreiheit (WCAG 2.2 AA)

#### 7.2.1 Testplan (kombiniert automatisiert + manuell)

| Prueftyp | Methode/Tool | Abdeckung | Frequenz |
|---|---|---|---|
| Automatisiert | axe-core (via Playwright), Lighthouse a11y | ~30-40 % der Kriterien | jede CI |
| Tastatur-Navigation | manuell (Tab/Shift-Tab/Enter/Esc) | alle interaktiven Elemente | Pre-Release |
| Screenreader | NVDA (Windows/Firefox), VoiceOver (macOS/iOS) | Kern-Flows | Pre-Release |
| Kontrast | axe + manuelle Stichprobe gegen Palette (Abschnitt 2.1) | alle Text-/UI-Farben | Design + Pre-Release |
| Zoom/Reflow | 200 % Zoom, 320 px Reflow | alle Templates | Pre-Release |

#### 7.2.2 WCAG-2.2-AA-Schwerpunkte (inkl. neuer 2.2-Kriterien)

- **Fokus sichtbar** (2.4.7) und **Focus Appearance** – deutlicher, nicht verdeckter Fokusring (≥ 2 px, ausreichender Kontrast).
- **Focus Not Obscured** (2.4.11, neu in 2.2) – Sticky-CTA-Leiste darf fokussierte Elemente nicht verdecken.
- **Target Size (Minimum)** (2.5.8, neu) – interaktive Ziele ≥ 24×24 px (unser Tap-Target ≥ 44 px erfuellt das komfortabel).
- **Dragging Movements** (2.5.7) – Vorher/Nachher-Slider braucht eine Nicht-Drag-Alternative (Buttons/Tastatur).
- **Consistent Help** (3.2.6) – Kontaktmoeglichkeit (Telefon/WhatsApp) konsistent positioniert.
- **Redundant Entry** (3.3.7) / **Accessible Authentication** (3.3.8) – relevant nur fuer Formular (keine Captcha-Raetsel, Honeypot statt visuelles Captcha, s. 7.4).
- **Semantik:** korrekte Landmarks, eine `<h1>` je Seite, beschreibende `alt`-Texte (Abschnitt 2.4), Farbe nie alleiniger Informationstraeger (Icon+Text, Abschnitt 2.1), `lang="de"`.

#### 7.2.3 BFSG-Einschaetzung & Barrierefreiheitserklaerung

Konsistent zu Abschnitt 8 des Briefings:
- Die Site ist eine **Lead-/Informationsseite mit Kontakt-/Anfrageformular ohne verbindlichen Online-Vertragsabschluss** → faellt **voraussichtlich nicht** unter das BFSG; zusaetzlich greift sehr wahrscheinlich die **Kleinstunternehmen-Ausnahme** (< 10 Beschaeftigte UND ≤ 2 Mio. € Umsatz/Bilanzsumme).
- **Pflicht-Aufgabe:** Kennzahlen (Beschaeftigte, Umsatz/Bilanz) beim Kunden einholen und die Einordnung **schriftlich dokumentieren** (Datum, Grundlage).
- **Entscheidung (gesperrt):** Wir bauen dennoch WCAG 2.2 AA – Zukunftssicherheit, SEO- und Zielgruppenvorteil.
- **Barrierefreiheitserklaerung:** nur dann als formale Pflicht-Erklaerung, wenn das BFSG greift. Andernfalls **freiwillige Accessibility-Statement-Seite** (Stand der Konformitaet, bekannte Einschraenkungen, Feedback-Kontakt) – guter Trust- und E-E-A-T-Beitrag.
- **Risiko-Trigger:** sobald eine verbindliche Online-Buchung/Bezahlung eingebaut wuerde, kippt die Einordnung → vor jeder solchen Erweiterung neu pruefen.

---

### 7.3 Recht-/Compliance-Checkliste

> **Hinweis (verbindlich):** Dies ist **kein Rechtsrat**. Alle Rechtstexte und die Datenverarbeitung sind **vor Launch durch eine Rechtsanwaeltin/einen Rechtsanwalt bzw. die/den Datenschutzbeauftragte(n) zu pruefen**. Die folgende Liste ist die Arbeitsgrundlage, nicht der Freigabe-Ersatz.

| # | Pflicht | Rechtsgrundlage | Inhalt/Kriterium | Status-Owner |
|---|---|---|---|---|
| 1 | **Impressum** | § 5 DDG | Name + ladungsfaehige Anschrift, E-Mail **und** Telefon, zustaendige **Handwerkskammer**, Berufsbezeichnung + berufsrechtliche Regelungen, Register/Registernr., **USt-IdNr.**; max. 2 Klicks erreichbar; alte EU-OS-Hinweise entfernt | R5 + Anwalt |
| 2 | **Datenschutzerklaerung** | Art. 13 DSGVO | Alle real eingesetzten Tools (Cloudflare, Form-Backend, Plausible/Umami, Pagefind), Zwecke/Rechtsgrundlagen, Empfaenger/AV, Drittland, Speicherdauer, Betroffenenrechte; **keine** Blind-Vorlage | R5 + DSB |
| 3 | **Cookie-/Consent** | § 25 TDDDG | Stack ist **cookieless** (Plausible/Umami) + selbst gehostete Fonts + WhatsApp nur als `wa.me`-Link ⇒ **idealerweise kein Banner**. Falls Maps eingebunden: 2-Klick/Platzhalter + CMP mit gleichwertig „Akzeptieren/Ablehnen" | R5 + R2 |
| 4 | **Google Fonts** | LG Muenchen I | Inter **selbst gehostet** (Abschnitt 2.2) – kein CDN-Abruf | R1 |
| 5 | **AVV (Auftragsverarbeitung)** | Art. 28 DSGVO | Vertraege mit Cloudflare (Hosting/CDN/Images), Form-Backend (Formspree/Formgrid), Analytics, CMS/Agentur; Drittlandtransfer (DPF/SCC) pruefen | R5 + DSB |
| 6 | **Verzeichnis der Verarbeitungstaetigkeiten** | Art. 30 DSGVO | VVT anlegen/pflegen | R5 + DSB |
| 7 | **Kontaktformular/Bildupload** | DSGVO (Datenminimierung) | Felder: Name, Telefon, E-Mail, Ort, Dienstleistung, Nachricht, max. 8 Bilder; HTTPS/TLS, kein vorausgehaktes Consent, Datenschutzhinweis verlinkt, EU-Speicherung, Upload-Limits, Loeschkonzept | R5 |
| 8 | **Bildrechte** | UrhG/KUG | Stocklizenzen archiviert; **schriftliche Einwilligung** fuer Mitarbeiter-/Personenfotos (widerrufbar, Loeschprozess); Beweislast beim Veroeffentlichenden | R3 + R5 |
| 9 | **NAP/E-Mail final** | – | Oeffentliche Kontakt-E-Mail final geklaert (nicht zwingend `kontakt@alboush-elektro.de`), konsistent in NAP, Impressum, Schema, `facts.json` | R2 + Kunde |
| 10 | **Bewertungen** | UWG / Google-Policy | `aggregateRating`/Zitate nur echt & first-party; **keine** Anreize/Bezahlung (seit April 2026 auch Mitarbeiter-Boni untersagt) | R4 + R2 |

---

### 7.4 Sicherheit

| Bereich | Massnahme | Detail |
|---|---|---|
| **Transport** | HTTPS erzwungen, **HSTS** | `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`; HTTP→HTTPS-Redirect; www-Kanonisierung per 301 (Abschnitt 0) |
| **Security-Header** | via Cloudflare Pages `_headers` | `Content-Security-Policy` (strikt, nur eigene + Form-/Analytics-Endpunkte), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: DENY` bzw. `frame-ancestors 'none'`, `Permissions-Policy` (Kamera/Mikro/Geolocation aus) |
| **Formular-Spam** | mehrschichtig | **Honeypot**-Feld + Time-Trap (Mindest-Ausfuellzeit), serverseitige Rate-Limits beim Form-Backend, **kein** visuelles Captcha (A11y-Konflikt, s. 7.2.2). Optional Cloudflare Turnstile nur falls Spam eskaliert (datenschutzarm) |
| **Upload-Haertung** | Bildupload | MIME-/Endungs-Whitelist (JPG/PNG/HEIC/WebP), Groessen-Limit, max. 8 Dateien, Scan/Sanitizing am Backend, keine Ausfuehrung |
| **Secrets** | CI/Hosting | API-Keys (Form-Backend, IndexNow) ausschliesslich als verschluesselte Repo-/Cloudflare-Secrets; nie im Code/Commit |
| **Backups** | Git + Hosting | Quellcode + Content in Git (versioniert, off-site GitHub); Cloudflare-Pages-Deployments historisiert (jederzeitiges Rollback auf vorheriges Deployment); Form-Eingaenge/Uploads gem. Loeschkonzept (Abschnitt 7.3 #7) |
| **Abhaengigkeiten** | Supply-Chain | `npm audit`/Dependabot in CI; gepinnte Versionen; minimale Plugin-Oberflaeche (Astro-Vorteil ggue. WordPress) |

---

### 7.5 Performance-Budget & Monitoring

#### 7.5.1 Verbindliche Budgets (Gate in Lighthouse CI)

| Metrik | Budget (Mobile, blockierend) | Begruendung |
|---|---|---|
| **LCP** | ≤ 2,0 s (Ziel), Hard-Fail > 2,5 s | CWV „good"-Schwelle |
| **INP** | ≤ 200 ms | CWV „good" (Astro = wenig JS, leicht zu halten) |
| **CLS** | ≤ 0,1 | feste Bild-Dimensionen, `font-display:swap` mit Fallback-Metriken |
| **Lighthouse Performance** | ≥ 95 | statischer Astro-Output |
| **Lighthouse SEO / Best Practices / A11y** | je ≥ 95 (A11y = 100 angestrebt) | – |
| **JS pro Seite (Transfer)** | ≤ 30 KB (Ziel ~9-15 KB) | Islands-Architektur (Abschnitt 1) |
| **Hero-Bild** | AVIF, responsive `srcset`, ≤ 150 KB im Default-Viewport | Bildsprache Abschnitt 2.4 |
| **Webfont** | nur Inter-Subset (latin+latin-ext), WOFF2, preloaded | Abschnitt 2.2 |

#### 7.5.2 Monitoring (laufend)

- **Field-Daten (CrUX/RUM):** Plausible/Umami-RUM bzw. Google Search Console „Core Web Vitals"-Report (Feld-LCP/INP/CLS).
- **Lab-Daten:** woechentlicher LHCI-Lauf gegen Produktion (Cron), Trend-Dashboard.
- **Uptime:** externer Uptime-Monitor (z. B. UptimeRobot/Better Stack) auf Startseite + Kontakt, Alarm per E-Mail/Push.
- **Fehler/Logs:** Cloudflare-Analytics fuer 4xx/5xx-Spitzen; 404-Report woechentlich (verweist auf fehlende Redirects).

---

### 7.6 Launch-Runbook

**Ziel-Setup:** Migration von WordPress (`asbesta-schadstoffsanierung.de`, ~1.960 Alt-URLs) auf Astro/Cloudflare Pages. Kanonisch = `https://www.asbesta-schadstoffsanierung.de/`. Launch-Fenster: verkehrsarmer Zeitraum, Team in Bereitschaft.

#### 7.6.1 Pre-Launch-Checkliste (T-7 bis T-1)

- [ ] Alle QA-Gates (7.1) gruen auf `main`; Performance-Budgets (7.5) erfuellt.
- [ ] A11y-Pre-Release-Pass (7.2) abgeschlossen, kritische Befunde = 0.
- [ ] Rechtstexte (Impressum, Datenschutz, ggf. Accessibility-Statement) **anwaltlich freigegeben** (7.3).
- [ ] **Master-NAP** verifiziert (Telefon, Adresse, finale E-Mail) und konsistent in Schema/`facts.json`/Impressum/GBP.
- [ ] **Redirect-Map** vollstaendig: jede der ~1.960 Alt-URLs → 301 auf naechstbestes Ziel **oder** 410 (kein Ziel). Stichprobe 50 URLs manuell verifiziert; keine Redirect-Ketten/Loops.
- [ ] `robots.txt`, `sitemap.xml`/Sitemap-Index, `llms.txt`, `llms-full.txt`, `facts.json`, `entities.json` final, valide, im Root, korrekter `Content-Type`.
- [ ] Self-referencing Canonicals korrekt; `noindex` nur auf duennen Seiten; Canonical/`noindex` nirgends gemischt (Abschnitt 3).
- [ ] Security-Header/HSTS/CSP getestet (7.4); Formular End-to-End (inkl. Bildupload, DSGVO-Hinweis, E-Mail-Zustellung) verifiziert.
- [ ] Analytics (cookieless) misst korrekt; kein Cookie-Banner-Bedarf bestaetigt.
- [ ] DNS-TTL **vorab auf 300 s gesenkt** (≥ 24 h vor Cutover) fuer schnellen Wechsel/Rollback.
- [ ] **Full-Site-Backup** des WordPress-Stands (Files + DB) gesichert und wiederherstellbar.

#### 7.6.2 Staging-Abnahme

- Staging-Deploy auf Cloudflare-Preview-URL, per Basic-Auth/Header **`noindex` + robots-Disallow** geschuetzt (darf nie indexiert werden).
- Formale Abnahme durch R1 (Technik), R2 (SEO/Schema/Redirects), R3 (Design/A11y), R4 (Content/Fakten), R5 (Compliance/Security) – dokumentiertes Sign-off je Rolle.
- Kunden-Freigabe (UAT) auf Staging eingeholt und schriftlich festgehalten.

#### 7.6.3 Cutover / DNS (T-0)

| Schritt | Aktion | Owner | Verifikation |
|---|---|---|---|
| 1 | Production-Deploy auf Cloudflare Pages (finaler Build) | R1 | Build gruen, Preview = Prod-Stand |
| 2 | Custom Domain in Cloudflare Pages verknuepfen, SSL/TLS aktiv | R5 | Zertifikat gueltig, HTTPS erreichbar |
| 3 | DNS umstellen (Apex + `www` → Cloudflare Pages), www-Kanonisierung 301 aktiv | R5 | `dig`/Resolver-Check weltweit |
| 4 | **301-Redirects scharf schalten** (Alt-URL-Map produktiv) | R2/R5 | Stichproben-Crawl: 301 → 200 kanonisch |
| 5 | `staging`-`noindex`/Disallow entfernt? (nein – Prod hat eigene robots) | R2 | Prod `robots.txt` erlaubt Crawling, deklariert Sitemap |
| 6 | Security-Header live, HSTS aktiv | R5 | Header-Scan (securityheaders.com) |

#### 7.6.4 Search-Console / Sitemap-Submit (direkt nach Cutover)

- [ ] **Google Search Console:** kanonische Property verifizieren (DNS-TXT), `sitemap.xml`/Index einreichen, **„Adressaenderung"** nicht noetig (gleiche Domain) – aber Live-Test der Startseite + 3 Kern-URLs (URL-Pruefung → Indexierung beantragen).
- [ ] **Bing Webmaster Tools:** Property verifizieren, Sitemap einreichen (relevant fuer ChatGPT-Suche, Abschnitt 4.5).
- [ ] **IndexNow** (Bing/Yandex) fuer geaenderte URLs anstossen; Google ignoriert IndexNow (Abschnitt 3.2) – dort kein API-Push.
- [ ] **GBP** auf neue URL/NAP pruefen; `sameAs` (GBP-CID, LinkedIn, Wikidata-QID) konsistent (Abschnitt 4.4/6.4).

#### 7.6.5 Rollback-Plan

| Trigger | Sofortmassnahme | Verantwortlich |
|---|---|---|
| Kritischer Funktionsfehler / Massen-5xx | Cloudflare-Pages-Rollback auf vorheriges Deployment (1 Klick) | R1/R5 |
| DNS-/Routing-Problem nach Cutover | DNS auf alten WordPress-Host zuruecksetzen (niedrige TTL macht es schnell) | R5 |
| Fehlerhafte Redirect-Map (Loops/Massen-404) | Redirect-Regeln deaktivieren/zuruecksetzen, Hotfix-Deploy | R2/R5 |
| Datenschutz-/Rechtsproblem entdeckt | betroffene Seite auf `noindex`/temporaer offline, Rechtsfreigabe nachholen | R5 |

Rollback-Entscheidung trifft R1 (Go/No-Go); Zeitfenster fuer Stabilisierungsbeobachtung: **2 h aktiv, 48 h erhoehte Wachsamkeit**.

---

### 7.7 Post-Launch-Stabilisierung (Tag 95-100)

| Zeitpunkt | Aktivitaet | KPI/Kontrolle |
|---|---|---|
| **T+0 bis T+2 h** | Live-Smoke-Test (Kern-Flows, Formular, CTAs), Header-/SSL-Scan, Redirect-Stichproben | 0 kritische Fehler |
| **T+24 h** | GSC „Abdeckung"/„Seiten" auf Crawl-Fehler, 404-Report, erste Indexierungssignale | keine unerwarteten 404/Soft-404 |
| **T+72 h** | CWV-Feld-Trend, Redirect-Vollstaendigkeit (Log-/Crawl-Abgleich), Analytics-Plausibilitaet | LCP/INP/CLS „good" |
| **T+1 Woche** | Indexierungs-Kontrolle Top-Seiten (9 Prioritaetsstaedte + 13 Leistungen + Startseite) | Kern-URLs indexiert |
| **T+2-4 Wochen** | „Crawled – currently not indexed"/„Discovered – not indexed" auswerten → anreichern oder `noindex` (Abschnitt 3.2) | duenne Seiten bereinigt |

---

### 7.8 Wartungs-/Betriebsplan & laufende Content-/SEO-Fortfuehrung

#### 7.8.1 Routine-Rhythmus

| Frequenz | Aufgabe | Owner |
|---|---|---|
| **Woechentlich** | 1 neues Vorher/Nachher-Foto in GBP (Abschnitt 6.4); 404-/Uptime-/Link-Report sichten; Dependabot-PRs pruefen | R5 + R4 |
| **2-woechentlich** | Redaktion: 1 Ratgeber-Beitrag bzw. Stadt-Seiten-Staffel (10-15 Seiten, **nie 200 auf einmal**, Abschnitt 6.1) nach QS-Gates (6.3) | R4 + R2 |
| **Monatlich** | SEO-/Performance-**Report** (s. 7.8.2); LHCI-Trend; Bewertungs-Velocity (Ziel > 10, ohne Anreize) | R2 |
| **Quartalsweise** | GSC-Index-Hygiene-Audit; Top-Content-Refresh (Normen-Aktualitaet GefStoffV/TRGS, Abschnitt 5.3); Cannibalization-Audit; Schema-Revalidierung | R2 + R4 |
| **Jaehrlich** | Rechtstexte-Review (Impressum/Datenschutz/AVV/VVT) mit DSB/Anwalt; Lizenz-/Einwilligungs-Archiv pruefen; Tech-/Dependency-Major-Updates | R5 |

#### 7.8.2 Monatlicher Report (feste Struktur)

1. **Sichtbarkeit:** Rankings der P1-Geld-Keywords je Prioritaetsstadt, GSC-Impressionen/Klicks/CTR/Position, Trend.
2. **Indexierung:** indexierte vs. eingereichte URLs, neue „not indexed"-Faelle, ergriffene Massnahme.
3. **GEO/AI:** Zitate/Sichtbarkeit in AI-Antworten (Stichprobe), Crawl-Zugriffe der Retrieval-Bots (Logfile).
4. **Performance:** CWV-Feld (LCP/INP/CLS), LHCI-Lab-Trend, Budget-Verstoesse.
5. **Conversion:** Anrufe/WhatsApp/Formular-Anfragen (cookieless-Event-Tracking), Top-Conversion-Seiten.
6. **Local:** GBP-Insights (Anrufe, Routen, Aufrufe), neue Bewertungen, NAP-/Verzeichnis-Konsistenz.
7. **Backlog/Empfehlung:** naechste Content-Staffel, technische To-dos.

#### 7.8.3 Redaktionsplan (laufend)

- Themen-Pipeline aus Abschnitt 9 (P2/P3): Kosten-Ratgeber je Material, „Floor-Flex erkennen", „Neue GefStoffV 2024/2025", „Checkliste vor Hauskauf" usw.
- Jeder Beitrag folgt der **einheitlichen Beitragsstruktur** (Abschnitt 5.2) **mit namentlichem Autor** und Person-Schema (Abschnitt 5.1) und durchlaeuft alle QA-Gates (7.1) inkl. Faktencheck.
- Stadt-Rollout strikt gestaffelt mit Index-Hygiene (Abschnitt 6.1/6.3).

---

### 7.9 Schulung & Uebergabe an den Kunden

| Leistung | Format | Inhalt |
|---|---|---|
| **CMS-Schulung** | Live-Session (ca. 2 h) + Aufzeichnung | Pflege via Sveltia/Decap (Git-based): Beitrag anlegen, Bilder hochladen/optimiert ersetzen, Autor zuordnen, Veroeffentlichung; **was NICHT** ohne R-Team angefasst wird (Schema-Felder, Redirects, robots/Sitemap) |
| **Redaktions-Leitfaden** | PDF/Handbuch | Beitragsstruktur (5.2), Tonalitaet, Bild-/`alt`-Regeln (2.4), Logo-Regeln (2.3), SEO-Basics (Title/Description), Index-Hygiene-Regeln (duenne Seiten = `noindex`) |
| **NAP-/Brand-Kit** | Dokument | Master-NAP, Farb-/Logo-/Schrift-Vorgaben (Abschnitt 2), GBP-Pflegeanleitung (Fotos, Bewertungen ohne Anreize) |
| **Betriebs-/Notfall-Runbook** | Dokument | Hosting-/Domain-/DNS-Zugaenge, Rollback-Prozedur (7.6.5), Ansprechpartner/Eskalation, Backup-Wiederherstellung, Form-Backend-Kontingente |
| **Recht/Compliance-Mappe** | Ordner | Freigegebene Rechtstexte, AVV-Vertraege, VVT, Lizenz-/Einwilligungsnachweise (Bildrechte), BFSG-Einordnungsdokumentation (7.2.3) |

**Uebergabe-Sign-off:** Kunde bestaetigt schriftlich Erhalt aller Zugaenge, Dokumente und der absolvierten Schulung. Empfehlung: optionaler **Wartungsvertrag** (monatliches SEO-/Content-/Security-Paket) zur Sicherung der in Abschnitt 7.8 definierten Fortfuehrung – ohne kontinuierliche Pflege verfaellt der YMYL-/E-E-A-T-Vorsprung.

---

## 8. Engineering- & Qualitaets-Charta

Dieser Abschnitt ist die verbindliche, normative Grundlage fuer Code-Qualitaet, Wartbarkeit und Design-Echtheit. Er ergaenzt die Definition of Done (1.6), das Komponenten-Inventar (2.6), das Design-Tokens-Konzept (2.7), das Design-Tooling (2.11) und die QA-Matrix (7.1). Leitprinzipien: **Erweiterbarkeit vor Cleverness, Komposition vor Duplikation, Marken-Echtheit vor generischem Default-Look.** Owner: R1 (Architektur, Standards, Gates), R3 (Design-Integritaet), R5 (CI-Automatisierung). Aenderungen nur durch den Lead-Architekten.

---

### 8.1 Code-Architektur & Erweiterbarkeit

**Verzeichnisstruktur (Astro, schicht- und feature-getrennt):**

| Pfad | Zweck | Regel |
|---|---|---|
| `src/pages/` | Routing & Seiten-Komposition (duenn) | Nur Daten holen + Layout/Sektionen zusammensetzen, KEINE Geschaeftslogik |
| `src/content/` + `content.config.ts` | Content Collections + Zod-Schemata (SSOT der Inhalte) | Jede Collection (`leistungen`, `standorte`, `ratgeber`, `team`, `bewertungen`) zod-validiert |
| `src/components/ui/` | Primitive (Button, Input, Badge, Card) | Marken-Tokens, keine Domaenenlogik |
| `src/components/patterns/` | Zusammengesetzte Bausteine (Hero, ServiceCard, FaqAccordion, CtaSection) | Komposition aus `ui/` |
| `src/components/sections/` | Seitensektionen (LeistungsGrid, TrustSektion) | Nur Layout + Daten-Mapping |
| `src/components/schema/` | JSON-LD-Generatoren (`<SchemaGraph>`) | Reine Daten -> JSON-LD, keine Praesentation |
| `src/layouts/` | Seiten-Layouts (Header-/Footer-Geruest) | - |
| `src/lib/` | Reine TS-Logik (Index-Gate, Redirect-Map, Formatter, NAP-Helper) | Framework-frei, unit-testbar |
| `src/data/` | Strukturierte Datentabellen (Stadt x Leistung, Anfahrtszeiten, Geo) | Single Source, kein Hardcoding in Komponenten |
| `src/styles/tokens.css` | Tokens als CSS Custom Properties (SSOT) | Spiegelung in `tailwind.config` |

**Architektur-Invarianten (verbindlich):**
- **Trennung Daten / Praesentation / Logik:** Daten in `content/` und `data/`, Logik in `lib/` (unit-getestet), Praesentation in `components/`. Eine Komponente, die rechnet UND rendert UND Daten holt, wird aufgeteilt.
- **Datengetrieben statt dupliziert:** Die 13 Leistungen, 9+ Staedte und alle Spokes entstehen aus *einer* zod-validierten Datenquelle ueber `getStaticPaths` - kein Copy-Paste je Seite. Eine Schema-Aenderung erzeugt einen Build-Fehler statt stillen Drift.
- **Tokens als Single Source of Truth:** Farbe/Spacing/Radius/Schatten/Typo ausschliesslich ueber Tokens (2.7). Kein roher Hex-/px-Wert in Komponenten (durchgesetzt via Stylelint, 8.3). Eine neue Marken-Variante ist eine Token-Aenderung, kein Komponenten-Refactor.
- **Komposition statt Duplikation:** Varianten ueber Props/Slots + `cva`-artige Varianten-Maps, nicht ueber kopierte Komponenten. Wiederholt sich Markup dreimal -> extrahieren (Rule of Three).
- **Klare Komponenten-API (Props-Contract):** Jede oeffentliche Komponente hat ein exportiertes, TS-typisiertes `Props`-Interface mit JSDoc je Prop. Pflicht- vs. Optional-Props explizit; kein `any`; keine impliziten Globals. Aenderung oeffentlicher Props -> Eintrag im Komponenten-Changelog (8.7).
- **Islands sparsam:** `client:*`-Direktiven nur bei echter Interaktivitaet (Slider, Akkordeon, Suche). Statisch als Default (stuetzt das CWV-Budget aus 4.8).

---

### 8.2 Komponenten-Governance (Anti-God-Component-Regeln)

Eine "God-Component" vereint zu viele Verantwortungen, ist zu gross, zu tief verschachtelt oder hat zu viele Props. Folgende **messbaren Budgets** gelten als CI-Gate (8.4): Ueberschreitung = Build-Warnung ab Soft-Limit, Build-Fehler ab Hard-Limit.

| Metrik | Soft-Limit (Review) | Hard-Limit (CI-Fail) | Begruendung / Quelle |
|---|---|---|---|
| Zeilen je Komponenten-Datei (`.astro`/`.tsx`) | 200 | 300 | ESLint `max-lines` Default = 300 |
| Zeilen je Funktion/Script-Block | 50 | 80 | ESLint `max-lines-per-function` Default = 50 |
| Props je Komponente | 7 | 10 | > 7 Props = fehlende Abstraktion |
| Zyklomatische Komplexitaet je Funktion | 10 | 15 | NIST-Empfehlung: max. 10 |
| Cognitive Complexity (SonarJS) | 15 | 15 | `sonarjs/cognitive-complexity` Default = 15 |
| Verschachtelungstiefe (Bloecke) | 3 | 4 | ESLint `max-depth` Default = 4 |
| JSX-/Markup-Verschachtelungstiefe | 4 | 6 | Tiefere Baeume = fehlende Sub-Komponente |
| Verantwortungen je Komponente | 1 | 1 | Single Responsibility |

**Aufteilungs-Heuristiken - eine Komponente wird gesplittet, wenn:**
1. sie mehr als **eine** Antwort auf "Was rendert das?" hat (z. B. Layout + Datenabruf + Validierung);
2. ein Soft-Limit ueberschritten ist UND sich ein sinnvoller Teilbaum mit eigenem Namen benennen laesst;
3. ein `if/else`-Zweig ganze, unterschiedliche Sub-UIs rendert -> je Zweig eine Komponente;
4. Props mit Praefixen Cluster bilden (`heroTitle`, `heroImage`, `heroCta` -> `hero`-Objekt oder eigene `<Hero>`);
5. sich Markup an >= 3 Stellen wiederholt (Rule of Three) -> in `ui/` oder `patterns/` extrahieren;
6. ein State/Island nur einen kleinen Teilbaum betrifft -> nur diesen Teil als Island isolieren (CWV).

**Verbotene Anti-Patterns:** "Mega-Sektion", die Hero, Trust, Grid, FAQ und CTA in einer Datei buendelt; Komponenten mit `...rest`-Spread auf unbekannte Props; boolesche Flag-Schwemme (`isMobile && isCompact && isDark`) statt Varianten.

---

### 8.3 Coding-Standards & Typsicherheit

- **TypeScript `strict`/`strictest`** (inkl. `noUncheckedIndexedAccess`, `noImplicitAny`, `exactOptionalPropertyTypes`). Kein `any`, kein `@ts-ignore` ohne begruendeten Kommentar.
- **ESLint (Flat Config), blockierend:** `max-lines: [error, 300]`, `max-lines-per-function: [error, 80]`, `complexity: [error, 15]`, `max-depth: [error, 4]`, `max-params: [error, 4]`, `max-nested-callbacks: [error, 3]`; `eslint-plugin-sonarjs` (`cognitive-complexity`, `no-duplicate-string`, `no-identical-functions`); `eslint-plugin-astro`, `eslint-plugin-jsx-a11y`, `eslint-plugin-import` (Import-Ordnung, `no-cycle`); `@typescript-eslint`; `no-magic-numbers` (Ausnahmen 0/1/-1) - Werte als benannte Konstanten/Tokens.
- **Prettier** (nur Formatierung) + `prettier-plugin-astro`. **Stylelint** mit `declaration-property-value-disallowed-list`, das rohe Hex-/px-Werte in Komponenten verbietet (erzwingt Token-Nutzung, 8.1).
- **Namenskonventionen:** Komponenten/Typen `PascalCase`, Funktionen/Variablen `camelCase`, Konstanten `UPPER_SNAKE_CASE`, Dateiname = Komponentenname, CSS-Custom-Properties `--kategorie-name` (semantisch, 2.7), boolesche Props mit `is/has/should`.
- **Kommentar-/Doku-Norm:** JSDoc auf jeder oeffentlichen Komponente (Zweck + jede Prop) und auf `lib/`-Funktionen. Kommentare erklaeren das *Warum*, nicht das *Was*. Keine auskommentierten Code-Leichen im Merge.

---

### 8.4 Automatisierte Qualitaets-Gates in CI

Anschlussfaehig an 7.1: Alle Gates laufen in GitHub Actions; roter Status blockiert den Merge auf `main`. "Laeuft auf meinem Rechner" zaehlt nicht.

| Gate | Werkzeug | Schwelle / Kriterium | Trigger | Blockierend? |
|---|---|---|---|---|
| Lint | ESLint (+ sonarjs/astro/jsx-a11y) | 0 Errors | Pre-Commit + CI | Ja |
| Typecheck | `astro check` / `tsc --noEmit` (strict) | 0 Fehler | CI | Ja |
| Format/Style | Prettier `--check`, Stylelint | 0 Abweichungen; keine rohen Hex/px | CI | Ja |
| Komplexitaet/Groesse | ESLint `max-lines`/`complexity`/`max-depth` + sonarjs | Hard-Limits 8.2 | CI | Ja |
| Test-Coverage | Vitest `--coverage` | `lib/` >= 80 % Statements; Schema-/Index-Gate-Logik 100 % | CI | Ja |
| Dead Code / Unused | Knip | 0 unbenutzte Files/Exports/Deps | CI | Ja (Warnung erste 2 Sprints) |
| Bundle-/Dependency-Budget | `size-limit` / Lighthouse CI | JS <= 30 KB/Seite (4.8); neue Heavy-Dep nur mit ADR | CI | Ja |
| Security-Deps | `npm audit` / `osv-scanner` | 0 High/Critical | CI + woechentl. Cron | Ja (High+) |
| A11y | axe-core (Playwright) + Lighthouse a11y | 0 kritische Verstoesse | CI je Template | Ja |
| Visual Regression | Playwright `toHaveScreenshot` | <= 0,1 % Diff | CI | Warnung -> manuelle Freigabe |
| Design-Integritaet (Anti-AI-Slop) | Review-Template (8.5/8.6) + MCP-Screenshots | Checkliste 8.5 bestanden | Pro Komponente/Seite | Ja (manuell) |

---

### 8.5 Design-Integritaets-Charta (Anti-AI-Slop)

Ziel: Das Design wirkt **handgemacht und markeneigen** (Asbesta: Sicherheit/Sauberkeit/Seriositaet, Logo-Gruen), nicht wie ein generischer KI-Default. Jede UI wird gegen folgende Checkliste geprueft.

**A) Zu VERMEIDENDE KI-Design-Marker (Fail-Kriterien):**
- [ ] Generische Lila-/Blau-/Violett-Verlaufs-Heroes oder Verlaufs-Buttons/-Backgrounds ohne semantischen Grund (klassischster KI-Marker).
- [ ] Default-Schrift (z. B. Inter) unveraendert als einzige Schrift, ohne intentionale Hierarchie/Charakter.
- [ ] Uniformer 16px-Radius ueberall, identische Card-Hoehen/Paddings ohne Rhythmus.
- [ ] Stereotypes Bauschema: Hero -> immer drei Feature-Cards -> Testimonials -> Preis -> Footer.
- [ ] Generische/halluzinierte Stock- oder KI-Bilder (zu glatt, zu symmetrisch, sechs Finger, "diverses Team mit Laptops", erkennbare Artefakte).
- [ ] Emoji-Uebernutzung als Icons/Trust-Signale.
- [ ] Beliebige, nicht verifizierte "Trust"-Badges / erfundene Auszeichnungen ohne Beleg.
- [ ] Inkonsistente Abstaende / fehlender Spacing-Rhythmus (kein sichtbares Token-System).
- [ ] Nichtssagende Floskel-Texte ("Ihr zuverlaessiger Partner fuer exzellente Loesungen"), Hedging, generische Superlative ("cutting-edge", "best-in-class").
- [ ] Center-alles-Layouts ohne bewusste Asymmetrie/Blickfuehrung.
- [ ] Fehlende/snappende Interaktionen: keine Hover-States, generisches Fade-in-on-scroll auf jedem Element, kein Easing.

**B) POSITIVE Marken-Echtheits-Kriterien (Pass - mind. erfuellt):**
- [ ] Echte Projektfotos (Vorher/Nachher, PSA, Schwarz-Weiss-Schleuse, Big Bags) statt Stock (2.8); echte Team-Portraits in der `AuthorBox`.
- [ ] Echte First-Party-Bewertungen mit Name/Ort und echte lokale Daten (Anfahrt km/Fahrzeit ab Marl, Stadtteile, Deponien) - keine Platzhalter.
- [ ] Intentionale Typo- und Spacing-Rhythmik aus den Tokens (2.4/2.5): klare Skala, `max-width: 70ch`, bewusste Headline-Entscheidung.
- [ ] Semantisches Marken-Farbsystem (Gruen = Aktion, Signal-Orange = Notfall) statt dekorativer Verlaeufe - Farbe = Funktion (2.3).
- [ ] Markeneigene Details: Logo-Highlighting (2.2), Outline-Icon-Set mit einheitlicher Strichstaerke (2.9), Foto-Watermark.
- [ ] Spezifische, festgelegte Copy im Asbesta-Ton (Claim "Asbest? Wir holen Sie da raus") - Test: "Wuerde der Inhaber das so sagen?"
- [ ] Zweckgetriebene Motion: Hover-/Aktiv-States vorhanden, Animation kommuniziert Zustand, `prefers-reduced-motion` respektiert (2.10).

> Quellen der Marker-Validierung (Stand 2026): 925studios "AI Slop Web Design Guide" (Default-Schrift, Lila-/Blau-Verlauf, 16px-Radius-Uniformitaet, Drei-Card-Schema, glatte KI-Bilder, Floskel-Copy, fehlende Hover/Easing); prg.sh "Why Your AI Keeps Building the Same Purple Gradient Website"; Anthropic `frontend-design`-Plugin (2.11) als technische Gegenmassnahme.

---

### 8.6 Design-Review-Prozess & Akzeptanzkriterien

Jede Komponente und jede Seite durchlaeuft vor dem Merge ein **Design-Integritaets-Review** zusaetzlich zum Code-Review.

- **Ablauf (verbindlich, je UI):** Bauen -> mit **Chrome DevTools MCP** Screenshots + Kontrast/a11y/CWV messen -> mit **Playwright MCP** ueber alle Breakpoints (360/768/1024/1200 px) verifizieren -> gegen die **8.5-Checkliste** + Token-/Marken-Konformitaet pruefen. Das verlaengert den DoD-Loop "Bauen -> Messen -> Korrigieren" aus 2.11.
- **Rollen:** R3 fuehrt das Review (Design-Integritaet, Marken-Echtheit), R1 prueft Token-/Code-Konformitaet, R4 prueft Copy gegen die Floskel-Marker (8.5-A).
- **Frequenz:** (1) je Komponente/Seite vor Merge; (2) woechentliches Design-Integritaets-Review des Inkrements (Demo-Tag); (3) Voll-Sweep je Phasenende.
- **Pass/Fail:** Fail bei >= 1 erfuelltem KI-Marker (8.5-A) ODER fehlendem Pflicht-Positivkriterium (8.5-B). Fail = Rework vor Merge, kein "spaeter". Ergebnis wird im PR als Checkliste dokumentiert (Screenshot-Artefakte angehaengt).
- **Baseline:** R3 legt frueh (Phase 0/1) das Review-Template (Markdown-Checkliste aus 8.5) im Repo an, das jeder UI-PR ausfuellt.

---

### 8.7 Architektur-Entscheidungen (ADRs) & technische Dokumentation

- **ADRs (Architecture Decision Records):** Jede nicht-triviale Architektur-/Tooling-Entscheidung (neue Heavy-Dependency, CMS-/Form-Variante, Routing-Strategie, State-Insel) wird als ADR unter `docs/adr/NNNN-titel.md` festgehalten. Format: **Kontext - Entscheidung - Status (vorgeschlagen/akzeptiert/abgeloest) - Konsequenzen - Alternativen**. Pflicht-Trigger: alles, was die gesperrten Stack-Entscheidungen (9.5) beruehrt oder das Bundle-Budget (4.8/8.4) erweitert.
- **Komponenten-Doku:** Jede Komponente in Storybook (ab Tag 21) mit Props-Tabelle (aus dem TS-Interface), Varianten und Do/Don't gegen 8.5.
- **Onboarding-/Uebergabe-Doku:** `README`/`CONTRIBUTING` mit Setup, Ordnerkonventionen (8.1), Standards (8.3) und Gate-Uebersicht (8.4). Beim Abschluss (Tag 100) Teil des Betriebs-/Wartungs-Handbuchs (7.9) - sichert die Wartbarkeit nach Uebergabe.

---

### 8.8 Erweiterte Definition of Done (Delta zu 1.6)

Zusaetzlich zu den sieben Punkten in 1.6 gilt eine Aufgabe erst als fertig, wenn:
8. **Komponenten-Budgets (8.2) eingehalten** - kein neuer God-Component (CI-Gate gruen: max-lines/complexity/max-depth/Props).
9. **Coding-Standards (8.3) erfuellt** - strict-TS, Lint/Sonar/Stylelint ohne Errors, keine Magic Numbers, Tokens statt Rohwerte.
10. **Design-Integritaets-Review (8.6) bestanden** - 0 KI-Marker (8.5-A), Pflicht-Positivkriterien (8.5-B) erfuellt, MCP-Screenshots dokumentiert.
11. **ADR vorhanden (8.7)**, falls eine Architektur-/Tooling-/Dependency-Entscheidung getroffen wurde; Komponenten-Doku/Storybook aktualisiert.

---

## 9. Anhaenge

Dieser Abschnitt buendelt alle Referenz-, Mapping- und Nachschlage-Artefakte des Projekts. Er ist normativ fuer die nachgelagerte Umsetzung: Die Inhalts-Bestandsaufnahme (9.1) ist die einzige zulaessige Faktenquelle fuer Texte, die Keyword-Map (9.2) steuert die Seitenarchitektur, das Redirect-Mapping (9.3) sichert die Migration, die RACI-Matrix (9.4) klaert Verantwortung. Aenderungen nur durch den Lead-Architekten.

---

### 9.1 Vollstaendige Inhalts-Bestandsaufnahme der Alt-Seite

Konsolidierte Referenz aller belastbaren Fakten aus der Bestandsaufnahme (SITE_FACTS). Diese Tabelle ist die verbindliche „Single Source of Truth" fuer NAP, Leistungstexte und Trust-Elemente. Vor Launch zu verifizierende Felder sind ausdruecklich markiert.

#### 8.1.1 Unternehmen, Claim & Positionierung

| Feld | Inhalt | Status |
|---|---|---|
| Unternehmen | Asbesta Schadstoffsanierung – inhabergefuehrter Fachbetrieb | bestaetigt |
| H1 / Claim | „Asbest? Wir holen Sie da raus – schnell, sicher & professionell." | bestaetigt |
| Sub-Claim | „Spezialisten fuer Schadstoffe. Aus Marl. Fuer ganz NRW." | bestaetigt |
| Positionierung | „Alles aus einer Hand. Vom Gutachten bis zur Uebergabe." Arbeit nach strengsten Vorgaben der GefStoffV; „Persoenlich, transparent und absolut zuverlaessig." | bestaetigt |

#### 8.1.2 Kontakt / Master-NAP

| Feld | Inhalt | Status |
|---|---|---|
| Telefon | +49 2365 2960630 (Schema-Format: `+49-2365-2960630`) | vor Launch verifizieren |
| WhatsApp | +49 176 57724558 → `https://wa.me/4917657724558` | vor Launch verifizieren |
| Adresse | Venusweg 24, 45770 Marl, Nordrhein-Westfalen, DE | vor Launch verifizieren |
| E-Mail | `kontakt@alboush-elektro.de` (Projektkontext) – oeffentliche Adresse final klaeren | KRITISCH vor Launch verifizieren |
| Reaktionszusage | Rueckmeldung innerhalb 24 h | bestaetigt |
| Geo (facts.json) | lat 51.6566 / lng 7.0900 (Naeherung) | vor Launch verifizieren |

> Hinweis: NAP muss in Header, Footer, Impressum, GBP, JSON-LD, facts.json und allen Verzeichniseintraegen **zeichengleich** gefuehrt werden (Master-NAP-Prinzip, vgl. Abschnitt 6.4).

#### 8.1.3 Die 13 Leistungen mit Kurzbeschreibung

| # | Leistung | Kurzbeschreibung |
|---|---|---|
| 1 | Abbrucharbeiten | Professioneller Rueckbau & Teilabbruch |
| 2 | Materialanalyse | Asbest- & Schadstoffanalysen im Labor |
| 3 | Asbestsanierung | Zertifizierte Sanierung nach TRGS 519 |
| 4 | Floorflex entfernen | Floor-Flex-Platten & Kleber entfernen |
| 5 | Asbesthaltigen Bitumenkleber entfernen | Schwarzen Bitumen-/Asbestkleber rueckstandslos entfernen |
| 6 | Welleternit-/Wellasbestplatten ausbauen | Sicherer Ausbau asbesthaltiger Dachplatten |
| 7 | Fassadenplatten ausbauen | Demontage asbesthaltiger Fassadenplatten |
| 8 | Asbestzement ausbauen | Demontage von Asbestzement-Bauteilen |
| 9 | Fensterbaenke ausbauen | Asbesthaltige Fensterbaenke entfernen |
| 10 | Cushion-Vinyl (CV-Belaege) entfernen | CV-Belaege sicher entfernen |
| 11 | KMF-Sanierung | Kuenstliche Mineralfasern fachgerecht entfernen |
| 12 | PAK-Sanierung | Polyzyklische aromatische Kohlenwasserstoffe entfernen |
| 13 | Luftanalysen / Raumluftmessung | Raumluftmessung nach VDI 3492 |

#### 8.1.4 Zertifizierung & Qualifikation

- Sachkunde nach **TRGS 519** (Asbest), **TRGS 521** (Faserstaeube/KMF), **TRGS 524** (Sanierung kontaminierter Bereiche).
- Anerkannter Asbest-Fachbetrieb nach **§ 8 Abs. 8 i.V.m. Anhang I Nr. 2.4.2 Abs. 4 GefStoffV**.
- Sachkundige Mitarbeiter gem. **TRGS Anlage 3**.
- Arbeitsmedizinische Vorsorgeuntersuchungen der Mitarbeiter.
- Volle **Betriebshaftpflicht**.
- Vollstaendige Dokumentation inkl. **objektbezogener Anzeige bei der Bezirksregierung**.

#### 8.1.5 Kennzahlen

| Kennzahl | Wert |
|---|---|
| Abgeschlossene Projekte | 1.000+ |
| Erfahrung | 15+ Jahre |
| Zertifizierung | 100 % zertifiziert |

#### 8.1.6 Die 6 Gruende (USP)

1. **Schnell** – Termine kurzfristig, auch im Notfall.
2. **Professionell** – Arbeit nach TRGS 519/521/524.
3. **Puenktlich** – verbindliche Termine, garantierte Uebergabe.
4. **Sauber** – staubarme Verfahren, besenreine Uebergabe.
5. **Freundlich** – persoenlicher Ansprechpartner.
6. **Fachgerechte Entsorgung** – Komplettentsorgung mit lueckenlosem Nachweis.

**Werte:** persoenliche Betreuung, faire Festpreise, absolute Termintreue, direkter Kontakt zum Inhaber ohne Umwege.

#### 8.1.7 5-Schritte-Ablauf

| Schritt | Phase | Inhalt |
|---|---|---|
| 01 | Anfrage senden | Tel/WhatsApp/Formular, Rueckmeldung < 24 h |
| 02 | Kostenfreie Besichtigung vor Ort | Material & Umfang aufnehmen |
| 03 | Transparentes Festpreis-Angebot | ohne versteckte Kosten |
| 04 | Fachgerechte Sanierung nach TRGS 519 | Schwarz-Weiss-Schleuse & Unterdruck |
| 05 | Entsorgung & Uebergabe | Entsorgungsnachweis, Freimessung, Schlussdokumentation |

#### 8.1.8 Zielgruppen & Objekte

- **Zielgruppen:** private Bauherren, Hausverwaltungen, Industrie, oeffentliche Auftraggeber.
- **Objekte:** Wohngebaeude, Gewerbe, Industrieanlagen.

#### 8.1.9 CTAs & Kontaktformular

- **CTAs:** „Jetzt anrufen", „WhatsApp Kontakt", „Kostenlose Anfrage".
- **Formularfelder:** Name, Telefon, E-Mail, Ort, Dienstleistung, Nachricht, Bildupload (max. 8 Bilder).

#### 8.1.10 Bewertungen (echte Stimmen, first-party)

| Quelle | Ort | Aussage |
|---|---|---|
| Familie Krueger | Marl | „Schnell, professionell, puenktlich und freundlich" |
| M. Hoffmann | Recklinghausen | „Von der Planung bis zur Entsorgung alles professionell" |
| S. Becker | Gelsenkirchen | „Top Arbeit, sauber und zuverlaessig" |
| Bauherr R. Klein | Dorsten | „Unkomplizierte, schnelle und professionelle Ausfuehrung" |
| Hausverwaltung NRW | Bochum | „Verlaesslicher Partner fuer mehrere Objekte" |

> Diese Stimmen sind die einzige zulaessige Quelle fuer sichtbare Bewertungen. `aggregateRating` darf nur befuellt werden, wenn diese (oder weitere echte) Bewertungen first-party sichtbar auf der Seite stehen (vgl. Abschnitt 4.3 / 7).

#### 8.1.11 Einsatzgebiet

- **Kern:** Marl + 50+ Staedte in NRW (Ruhrgebiet, Muensterland, Rheinland, Sauerland).
- **Genannte Staedte u. a.:** Recklinghausen, Dorsten, Haltern am See, Herten, Gelsenkirchen, Essen, Bochum, Dortmund, Koeln, Duesseldorf, Aachen, Muenster, Bielefeld, Soest.
- **Prioritaetsstaedte Phase 1 (9):** Marl, Bottrop, Essen, Oberhausen, Duesseldorf, Gelsenkirchen, Gladbeck, Koeln, Herten.

#### 8.1.12 Alt-Technik & Alt-URL-Struktur (Migrationsbasis)

| Merkmal | Bestand |
|---|---|
| CMS | WordPress |
| Programmatische Landingpages | ~1.960 (13 Leistungen × ~49 Staedte) |
| URL-Schema Spokes | `/leistungen/[leistung]-[stadt]` (Bindestrich-Variante, **flach**) |
| Hauptseiten | `/`, `/firma`, `/leistungen`, `/bewertungen`, `/kontakt` |
| Domain | mit www- und nicht-www-Variante |
| Kundenbewertung Alt-SEO | schlecht (Thin Content, austauschbare Massenseiten) |

> Wesentlicher Unterschied Alt → Neu: Alt nutzt eine **flache Bindestrich-URL** (`/leistungen/asbestsanierung-essen`); Neu nutzt eine **hierarchische Pfad-Struktur** (`/leistungen/asbestsanierung/essen/`). Daraus ergibt sich der zentrale Redirect-Aufwand in 8.3.

---

### 9.2 Keyword-Map (Seitentyp → Cluster → Beispiel-Keywords)

Steuert Seitenarchitektur und vermeidet Kannibalisierung (eine dominante Intention pro URL). „Prio" entspricht der Keyword-Klassifizierung aus Abschnitt 9 (P1 = Geld, P2 = Conversion-Bruecke, P3 = Topical Authority).

| Seitentyp | URL-Muster | Cluster / Intention | Beispiel-Keywords | Prio |
|---|---|---|---|---|
| Startseite | `/` | Marke + Hauptleistung + Region | `asbestsanierung nrw`, `schadstoffsanierung marl`, `asbest fachbetrieb nrw` | P1 |
| Leistungs-Hub | `/leistungen/` | Leistungsuebersicht | `asbestsanierung leistungen`, `schadstoffsanierung leistungen` | P1 |
| Leistungs-Pillar | `/leistungen/asbestsanierung/` | Generisch + Norm | `asbestsanierung`, `asbest entfernen`, `asbestsanierung trgs 519` | P1 |
| Leistungs-Pillar | `/leistungen/floorflex-entfernen/` | Nischenleistung (Schnellgewinn) | `floor flex entfernen`, `floorflex platten entfernen`, `floor flex kleber entfernen` | P1 |
| Leistungs-Pillar | `/leistungen/welleternit-ausbauen/` | Dach/Material | `welleternit entfernen`, `wellasbest ausbauen`, `eternit dach abbau` | P1 |
| Leistungs-Pillar | `/leistungen/kmf-sanierung/` | Faserstoff | `kmf sanierung`, `mineralwolle entsorgen`, `glaswolle entfernen` | P1 |
| Leistungs-Pillar | `/leistungen/pak-sanierung/` | Schadstoff | `pak sanierung`, `teerkleber entfernen`, `schwarzer kleber asbest` | P1 |
| Leistungs-Pillar | `/leistungen/luftanalysen/` | Messung | `raumluftmessung asbest`, `asbest luftmessung vdi 3492`, `freimessung asbest` | P1 |
| Standort-Hub | `/standorte/` | Regional-Uebersicht | `asbestsanierung nrw staedte`, `einsatzgebiet asbestsanierung` | P1 |
| Stadt-Seite | `/standorte/essen/` | Lokal generisch | `asbestsanierung essen`, `asbest entfernen essen`, `schadstoffsanierung essen` | P1 |
| Spoke (Leistung × Stadt) | `/leistungen/asbestsanierung/essen/` | Lokal + Leistung | `asbestsanierung essen kosten`, `asbest entsorgen essen` | P1 |
| Spoke (Schnellgewinn) | `/leistungen/floorflex-entfernen/gelsenkirchen/` | Nische × Stadt | `floor flex entfernen gelsenkirchen`, `floorflex platten gelsenkirchen` | P1 |
| Ratgeber (Kosten) | `/ratgeber/asbestsanierung-kosten/` | Preis-Recherche | `asbestsanierung kosten`, `asbest entsorgen kosten m2`, `eternit entsorgen kosten` | P2 |
| Ratgeber (Kosten) | `/ratgeber/floor-flex-entfernen-kosten/` | Preis Nische | `floor flex entfernen kosten`, `floor flex kosten m2` | P2 |
| Ratgeber (Analyse) | `/ratgeber/asbest-test/` | Pruefen/Messen | `asbest test`, `asbest selbst testen`, `raumluftmessung kosten` | P2 |
| Ratgeber (Methodik) | `/ratgeber/ablauf-asbestsanierung/` | Trust/Prozess | `ablauf asbestsanierung`, `wie laeuft asbestsanierung ab` | P2 |
| Ratgeber (Wissen) | `/ratgeber/floor-flex-erkennen/` | Identifikation | `floor flex erkennen`, `floor flex platten bilder`, `floor flex baujahr` | P3 |
| Ratgeber (Wissen) | `/ratgeber/schwarzer-kleber-asbest-oder-pak/` | Abgrenzung | `schwarzer kleber asbest`, `bitumenkleber asbest erkennen` | P3 |
| Ratgeber (Recht) | `/ratgeber/gefstoffv-2024-2025/` | Norm-Update | `neue gefstoffv 2024`, `gefstoffv asbest ampelmodell`, `asbest genehmigungspflicht 2025` | P3 |
| Ratgeber (Wissen) | `/ratgeber/asbest-checkliste-hauskauf/` | Kaufberatung | `asbest hauskauf`, `asbest baujahr 1960 1993`, `asbest checkliste` | P3 |
| Ratgeber (Wissen) | `/ratgeber/nachtspeicheroefen-asbest/` | Spezialfall | `nachtspeicheroefen asbest`, `nachtspeicherheizung entsorgen` | P3 |
| Ratgeber (Foerderung) | `/ratgeber/asbest-foerderung-2026/` | Finanzierung | `asbest foerderung 2026`, `kfw asbest`, `bafa schadstoffsanierung` | P3 |
| Autorenseite | `/team/[name]/` | E-E-A-T / Person | (kein Ranking-Ziel; Entitaets-/Trust-Signal) | – |
| Firma | `/firma` | Brand/Trust | `asbesta erfahrungen`, `asbesta fachbetrieb` | – |
| Bewertungen | `/bewertungen` | Social Proof | `asbesta bewertungen` | – |
| Kontakt | `/kontakt` | Transaktional | `asbestsanierung anfrage`, `asbest angebot kostenlos` | – |

---

### 9.3 301-Redirect-Mapping-Vorlage (Alt-URL-Muster → Neu-URL)

Ziel: Erhalt von Linkequity der ~1.960 Alt-Seiten bei gleichzeitiger Index-Hygiene. Grundsaetze:

- **301** auf das **naechstbeste relevante Ziel** (nie pauschal alles auf die Startseite – „Soft-404"-Risiko, Equity-Verlust).
- **Eine kanonische Domain:** alle `http://` und alle nicht-www auf `https://www.…` (Host-/Protokoll-Redirect zuerst, dann Pfad-Redirect; **kein** doppelter Hop, wo vermeidbar).
- Kein Ziel vorhanden → **410 Gone** (nicht 404), um Crawl-Budget schnell freizugeben.
- Implementierung statisch via Cloudflare Pages `_redirects` (bzw. `Redirects`-Regeln); Vorrang von spezifischen vor generischen Mustern beachten.

| # | Alt-URL-Muster (Beispiel) | Neu-Ziel | Status | Anmerkung |
|---|---|---|---|---|
| 1 | `http://asbesta-…/*` | `https://www.asbesta-…/*` | 301 | Protokoll-Upgrade, global zuerst |
| 2 | `https://asbesta-…/*` (nicht-www) | `https://www.asbesta-…/*` | 301 | Host-Kanonisierung auf www |
| 3 | `/` | `/` | 301 (nur Host/Proto) | Startseite bleibt |
| 4 | `/firma` | `/firma` | 200 / 301 | Pfad bleibt; nur Host-Kanonisierung |
| 5 | `/leistungen` | `/leistungen/` | 301 | Trailing-Slash-Normalisierung |
| 6 | `/bewertungen` | `/bewertungen` | 200 / 301 | Pfad bleibt |
| 7 | `/kontakt` | `/kontakt` | 200 / 301 | Pfad bleibt |
| 8 | `/leistungen/asbestsanierung-essen` | `/leistungen/asbestsanierung/essen/` | 301 | Spoke flach → hierarchisch; **indexwuerdige** Kombination |
| 9 | `/leistungen/floorflex-entfernen-gelsenkirchen` | `/leistungen/floorflex-entfernen/gelsenkirchen/` | 301 | Schnellgewinn-Spoke, bleibt erhalten |
| 10 | `/leistungen/asbestsanierung-koeln` | `/leistungen/asbestsanierung/koeln/` | 301 | Prioritaetsstadt |
| 11 | `/leistungen/[leistung]-[stadt]` (Stadt = Prioritaetsstadt, indexwuerdig) | `/leistungen/[leistung]/[stadt]/` | 301 | Generelle Mapping-Regel fuer erhaltene Spokes |
| 12 | `/leistungen/[leistung]-[stadt]` (Stadt nicht abgedeckt / duenn, **kein** neues Ziel) | `/leistungen/[leistung]/` (Pillar) | 301 | Fallback auf Leistungs-Pillar statt Loeschung, wenn thematisch passend |
| 13 | `/leistungen/[leistung]-[stadt]` (Leistung entfaellt / kein passendes Ziel) | – | 410 | Gone, falls weder Spoke noch sinnvoller Pillar existiert |
| 14 | `/leistungen/[veraltete-leistung]` | `/leistungen/` (Hub) oder naechste Leistung | 301 | z. B. nicht mehr gefuehrte Leistungsbezeichnung |
| 15 | `?utm_*` / Query-Parameter-Varianten | Basis-URL (Parameter strippen) | 301 | Nur wenn Alt-URLs indexierte Parameter-Varianten erzeugt haben |
| 16 | `/feed`, `/wp-json/*`, `/wp-admin/*`, `/?p=123` (WP-Artefakte) | – | 410 | WordPress-Reste sauber abraeumen |

> **Pflicht-Schritte fuer R2/R5:** (a) vollstaendigen Alt-URL-Export aus GSC + Sitemap + Server-Logs ziehen, (b) jede der ~1.960 URLs einer der Regeln 8–13 zuordnen (Mapping-Spreadsheet als Liefergegenstand), (c) Redirect-Kette < 1 Hop sicherstellen, (d) nach Go-Live Stichprobe (≥ 100 URLs) + GSC-Coverage-Report monitoren, (e) alte XML-Sitemaps 30 Tage verfuegbar halten, damit Google die Redirects schneller verarbeitet.

---

### 9.4 RACI-Matrix (Aufgabenbereiche × R1–R5)

Legende: **R** = Responsible (fuehrt aus), **A** = Accountable (eine pro Zeile, traegt Verantwortung), **C** = Consulted, **I** = Informed.
Rollen: **R1** Tech Lead/Frontend · **R2** SEO/GEO-Lead · **R3** UI/UX & Brand · **R4** Content-Lead · **R5** Backend/DevOps & QA.

| Aufgabenbereich | R1 | R2 | R3 | R4 | R5 |
|---|---|---|---|---|---|
| Gesamtarchitektur & Tech-Stack (Astro/Cloudflare) | A/R | C | I | I | C |
| Komponentensystem & Templates | A/R | C | C | I | C |
| Core Web Vitals / Performance-Budget | A/R | C | I | I | C |
| Keyword-/GEO-Research & Informationsarchitektur | C | A/R | C | C | I |
| Strukturierte Daten / JSON-LD (`@graph`, `@id`) | C | A/R | I | C | C |
| llms.txt / llms-full.txt / facts.json / entities.json | C | A/R | I | C | C |
| Indexierungs-Strategie & Index-Gate-Logik | C | A/R | I | C | C |
| 301-Redirect-Mapping & Migration | C | A/R | I | I | R |
| Google Business Profile & lokale Verzeichnisse | I | A/R | C | C | I |
| Monitoring/Analytics (Plausible/Umami, GSC) | C | A/R | I | I | R |
| Design-System & Design-Tokens | C | C | A/R | I | I |
| Markenidentitaet & Logo-Strategie | I | C | A/R | C | I |
| Bildsprache/Fotokonzept & Bildoptimierung | C | C | A/R | C | C |
| Barrierefreiheit (WCAG 2.2 AA) | C | C | A/R | I | R |
| Conversion-Design (CTA/Forms-UX) | C | C | A/R | C | C |
| Unique-Texte Leistungs- & Stadtseiten | I | C | I | A/R | I |
| Blog/Ratgeber & Redaktionsplan | I | C | I | A/R | I |
| E-E-A-T / Autoren- & Person-Schema-Konzept | I | C | I | A/R | C |
| Faktenpruefung (Normen, Entfernungen, Deponien) | I | C | I | A/R | C |
| CMS-Integration (Sveltia/Decap) | C | C | C | C | A/R |
| CI/CD & Hosting/Infra/Security | C | I | I | I | A/R |
| Formulare & DSGVO-Datenfluss | C | C | C | I | A/R |
| Recht/Compliance (Impressum, Datenschutz, Consent, BFSG) | I | C | C | C | A/R |
| Automatisierte Tests & QS-Gates (pSEO) | C | R | I | C | A/R |
| Launch-Runbook & Go-Live | R | C | I | I | A/R |

---

### 9.5 Tech-Stack & Tooling-Uebersicht

Konsolidiert aus Abschnitt 1 (Referenzarchitektur) und Abschnitt 2.11 (Design-Tooling). Verbindlich, soweit als „gesperrt" gekennzeichnet.

| Kategorie | Werkzeug / Entscheidung | Zweck | Status |
|---|---|---|---|
| Framework | Astro 6+ (SSG, Content Collections, MDX) | Reines HTML, beste CWV, Skalierung | gesperrt |
| Programmatic Pages | Astro Dynamic Routes `[leistung]/[stadt]` aus Datentabelle | pSEO-Hybrid mit Index-Gate | gesperrt |
| CMS | Sveltia oder Decap (Git-based); Storyblok nur bei Visual-Editor-Bedarf | lokal pflegbar, kein Abo-Lock-in | gesperrt (Variante offen) |
| Hosting | Cloudflare Pages | unlimitierte Bandbreite, globales Netz | gesperrt |
| Bild-CDN | Cloudflare Images (Fallback: Astro `<Image>`/`<Picture>` + Sharp) | AVIF/WebP, responsive srcset | gesperrt |
| Analytics | Plausible (EU) oder Umami – cookieless | DSGVO-konform, kein Cookie-Banner | gesperrt |
| Forms | Formspree (Start) oder Formgrid (self-host) | Form-Backend fuer statische Site | gesperrt (Variante offen) |
| Suche | Pagefind (`astro-pagefind`) | client-seitige Suche, kein Server/DB | gesperrt |
| Schriften | Inter (WOFF2, selbst gehostet, `font-display:swap`); optional Source Serif 4 | DSGVO + Performance | gesperrt |
| Sitemap | `@astrojs/sitemap` (Index + Split > 50k) | nur kanonische, indexierbare URLs | gesperrt |
| Redirects | Cloudflare Pages `_redirects` | 301/410-Migration | gesperrt |
| Styling | Tailwind mit Token-Config (Farb-/Spacing-Tokens aus Abschnitt 2) | konsistentes Design-System | empfohlen |
| Icons | Lucide / Phosphor (Outline) | einheitliches Icon-Set | empfohlen |
| Design-Qualitaet | frontend-design Plugin (Anthropic) | gegen „AI-Slop" | empfohlen |
| Komponenten | shadcn MCP | saubere Komponentenbasis | empfohlen |
| Visuelle QA | Chrome DevTools MCP | Screenshots, a11y-/Performance-Audits | empfohlen |
| Browser-Automation | Playwright MCP | E2E + Screenshot-Verifikation | empfohlen |
| Design-Tokens | Figma Dev Mode MCP | Token-/Komponenten-Import | optional |
| AI-/GEO-Dateien | llms.txt, llms-full.txt, facts.json, entities.json | AI-Crawler + Dev-Nutzen | gesperrt |

---

### 9.6 Glossar

| Begriff | Erklaerung |
|---|---|
| **TRGS 519** | Technische Regeln fuer Gefahrstoffe „Asbest: Abbruch-, Sanierungs- oder Instandhaltungsarbeiten". Regelt Sachkunde, Schutzmassnahmen, Schwarz-Weiss-Schleuse, Unterdruck. Grundlage der Asbest-Fachbetriebs-Anerkennung. |
| **TRGS 521** | Technische Regeln zu Abbruch-, Sanierungs- und Instandhaltungsarbeiten mit **biopersistenten Faserstaeuben (KMF)** – kuenstliche Mineralfasern. |
| **TRGS 524** | Technische Regeln „Schutzmassnahmen bei Taetigkeiten in kontaminierten Bereichen" (z. B. Altlasten, schadstoffbelastete Bausubstanz). |
| **GefStoffV** | Gefahrstoffverordnung – nationale Verordnung zum Schutz vor Gefahrstoffen; Rechtsrahmen ueber den die TRGS konkretisiert werden. Novelle 2024/2025 mit Ampel-Modell, Mitteilungs-/Erkundungspflicht und Genehmigungspflicht (ab Dez. 2025). |
| **KMF** | Kuenstliche Mineralfasern (Glas-/Steinwolle). „Alte" KMF (vor 1996/2000) gelten als potenziell krebserzeugend; Abgrenzung „alt vs. neu" relevant fuer Schutzmassnahmen (TRGS 521). |
| **PAK** | Polyzyklische aromatische Kohlenwasserstoffe – in alten Teer-/Bitumenklebern und -anstrichen; gesundheitsschaedlich/krebserzeugend, eigener Sanierungspfad. |
| **VDI 3492** | Richtlinie zur **Messung der Innenraumluft auf Asbestfasern** (rasterelektronenmikroskopisch). Grundlage von Raumluftmessung und Freimessung. |
| **Floor-Flex** | Asbesthaltige PVC-/Vinyl-Bodenplatten (typ. ~25 × 25 cm), verbaut ca. 1960er–1980er. Haeufig mit asbest-/teerhaltigem schwarzem Kleber – Identifikation ueber Format/Baujahr. |
| **Welleternit / Wellasbest** | Asbesthaltige Faserzement-Wellplatten (Dach/Fassade), Markenbegriff „Eternit"; fest gebundener Asbest, Ausbau dennoch genehmigungs-/anzeigepflichtig. |
| **Asbestzement** | Mit Asbestfasern verstaerkter Zement (Platten, Rohre, Bauteile) – „fest gebundener" Asbest. |
| **Cushion-Vinyl (CV-Belag)** | Mehrschichtiger, geschaeumter Vinyl-Bodenbelag; aeltere Belaege koennen eine asbesthaltige Traegerschicht enthalten. |
| **Freimessung** | Abschliessende Raumluftmessung nach VDI 3492, die belegt, dass der sanierte Bereich die Faser-Grenzwerte einhaelt und freigegeben werden kann. |
| **Schwarz-Weiss-Schleuse** | Personenschleuse (Trennung „schwarz" = kontaminiert / „weiss" = rein) mit Dekontaminationsstufen; verhindert Faserverschleppung aus dem Sanierungsbereich. |
| **Unterdruck(haltung)** | Erzeugen eines Unterdrucks im abgeschotteten Sanierungsbereich, damit Fasern nicht nach aussen gelangen; ueberwacht und dokumentiert. |
| **Big Bags** | Reissfeste Groß-/Spezialsaecke zur staubdichten Sammlung und fachgerechten Entsorgung asbesthaltiger Abfaelle. |
| **E-E-A-T** | Experience, Expertise, Authoritativeness, Trust – Googles Qualitaetsrahmen, fuer YMYL-Themen (hier: Gesundheit/Sicherheit) mit erhoehter Prueftiefe. |
| **YMYL** | „Your Money or Your Life" – Themen mit potenziell hohem Einfluss auf Gesundheit/Sicherheit/Finanzen; strengere Qualitaetsanforderungen. |
| **GEO** | Generative Engine Optimization – Optimierung fuer KI-Suche/AI Overviews/AI Mode (Sichtbarkeit & Zitierfaehigkeit in generativen Antworten). |
| **CWV** | Core Web Vitals – Googles Performance-/UX-Metriken (LCP, INP, CLS). |
| **JSON-LD** | JavaScript Object Notation for Linked Data – empfohlenes Format fuer strukturierte Daten (Schema.org) im `<head>`. |
| **`@graph` / `@id`** | JSON-LD-Konstrukte: `@graph` buendelt mehrere Entitaeten pro Seite; `@id` (URL-Fragment-Anker) verknuepft Entitaeten eindeutig und seitenuebergreifend. |
| **Pillar / Spoke (Hub-and-Spoke)** | Content-Architektur: thematische Hauptseite (Pillar/Hub) + spezifische Unterseiten (Spokes), untereinander verlinkt – staerkt Topical Authority. |
| **pSEO** | Programmatic SEO – datengetriebene Massengenerierung von Seiten (hier: Leistung × Stadt), zwingend mit Qualitaets-/Index-Gate. |
| **Index-Gate / Index-Hygiene** | Regelwerk, das nur qualitativ ausreichende Seiten indexieren laesst; duenne Seiten erhalten `noindex,follow`. |
| **NAP** | Name, Address, Phone – die ueberall zeichengleich zu fuehrenden Kerndaten fuer Local SEO/GBP. |
| **GBP** | Google Business Profile (frueher Google My Business) – lokales Unternehmensprofil. |
| **llms.txt** | Markdown-Datei im Root als „Index-Landkarte" der Kernseiten fuer KI-Crawler. |
| **llms-full.txt** | Konsolidierter Volltext der Kernseiten (Markdown) mit „Stand"-Datum je Block fuer KI-Crawler. |
| **facts.json / entities.json** | Maschinenlesbare Firmenfakten bzw. Entity-Graph mit `sameAs`-Verknuepfungen; `@id` identisch zum On-Page-JSON-LD. |
| **IndexNow** | Push-Protokoll zur sofortigen Indexierungs-Benachrichtigung (Bing/Yandex etc.); **von Google ignoriert**. |
| **Doorway Page** | Von Google abgestrafte „Bruecken-/Tuer-Seite" ohne eigenstaendigen Mehrwert (z. B. austauschbare Stadtseiten, versteckte Massen-Linklisten). |
| **BFSG** | Barrierefreiheitsstaerkungsgesetz – Umsetzung des European Accessibility Act; hier voraussichtlich nicht verpflichtend, WCAG 2.2 AA dennoch umgesetzt. |
| **WCAG 2.2 AA** | Web Content Accessibility Guidelines – Barrierefreiheits-Standard, Konformitaetsstufe AA. |
| **DDG / TDDDG** | Digitale-Dienste-Gesetz (Impressumspflicht, § 5) bzw. Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz (Cookie-/Consent-Pflicht, § 25). |
| **AVV** | Auftragsverarbeitungsvertrag nach Art. 28 DSGVO mit Dienstleistern (Hosting, Forms, Analytics, CMS). |

---

### 9.7 Offene Punkte & benoetigte Zulieferungen vom Kunden

Diese Punkte sind **vor** den jeweiligen Phasen zu klaeren; KRITISCH-markierte sind Launch-Blocker.

| # | Offener Punkt | Benoetigt von | Verantwortlich (Team) | Benoetigt bis | Prioritaet |
|---|---|---|---|---|---|
| 1 | **Oeffentliche E-Mail-Adresse** final festlegen (Projektkontext `kontakt@alboush-elektro.de` ggf. nicht oeffentlich) – konsistent fuer NAP/Impressum/Schema | Kunde | R2/R5 | vor Content-Produktion (Phase 4) | KRITISCH |
| 2 | **Telefon, WhatsApp, Adresse, Geo-Koordinaten** verifizieren (Master-NAP) | Kunde | R2 | vor Phase 4 | KRITISCH |
| 3 | **Impressumsdaten:** ladungsfaehige Anschrift, zustaendige Handwerkskammer, Berufsbezeichnung, Register/Registernr., USt-IdNr., ggf. Aufsichtsbehoerde | Kunde | R5 | vor Phase 6 | KRITISCH |
| 4 | **BFSG-Kennzahlen:** Beschaeftigtenzahl (< 10?) und Jahresumsatz/Bilanz (≤ 2 Mio. €?) zur Dokumentation der Kleinstunternehmen-Ausnahme | Kunde | R5 | vor Phase 6 | hoch |
| 5 | **Domain-/DNS-Zugriff** und Registrar-Zugang fuer Cloudflare-Migration + Kanonisierung www | Kunde | R1/R5 | vor Phase 7 | KRITISCH |
| 6 | **Vollstaendiger Alt-URL-Export** (GSC-Property-Zugriff, Server-Logs, alte Sitemaps) fuer Redirect-Mapping der ~1.960 Seiten | Kunde | R2/R5 | vor Phase 5 | hoch |
| 7 | **Echte Projektfotos** (Vorher/Nachher, PSA, Schleuse/Unterdruck, Probenahme, Entsorgung, Team-Portraits) in hoher Aufloesung | Kunde | R3 | vor Phase 4 | hoch |
| 8 | **Echte lokale Referenzprojekte** (anonymisiert) je Prioritaetsstadt fuer Klasse-A-Unique-Content | Kunde | R4 | vor Phase 4 | hoch |
| 9 | **Autoren-/Experten-Daten** fuer E-E-A-T: Name, Foto, Bio, Funktion (z. B. „Sachkundiger nach TRGS 519"), Zertifikate, LinkedIn/`sameAs`-Nachweise | Kunde | R4 | vor Phase 4 | hoch |
| 10 | **Zertifikats-/Nachweisdokumente** (TRGS-Sachkunde, Fachbetriebs-Anerkennung, Betriebshaftpflicht) als Scan/Beleg fuer Trust-Darstellung | Kunde | R4/R5 | vor Phase 4 | mittel |
| 11 | **GBP-Zugriff** (oder Neuanlage) + CID fuer `sameAs`; bestehende Verzeichniseintraege zur NAP-Bereinigung | Kunde | R2 | vor Phase 4 | mittel |
| 12 | **Einwilligungen fuer Personen-/Mitarbeiterfotos** (schriftlich, widerrufbar) und vorhandene **Stocklizenz-Nachweise** | Kunde | R3/R5 | vor Phase 4 | hoch |
| 13 | **CMS-Variante entscheiden:** Sveltia/Decap (Standard) vs. Storyblok (Visual-Editor) | Kunde | R1/R5 | vor Phase 3 | mittel |
| 14 | **Form-Backend-Variante:** Formspree (Start) vs. Formgrid (self-host) inkl. AVV | Kunde/R5 | R5 | vor Phase 3 | mittel |
| 15 | **AVV-Abschluss** mit Cloudflare, Form-Backend, Analytics, CMS/Agentur; Drittlandtransfer (DPF/SCC) pruefen | Kunde | R5 | vor Phase 7 | hoch |
| 16 | **Anwaltliche/DSB-Pruefung** von Impressum, Datenschutzerklaerung und Consent-Konzept | Kunde | R5 | vor Phase 7 | KRITISCH |
| 17 | **Liste indexwuerdiger Stadt×Leistung-Kombinationen** abstimmen (Phase-2-Rollout-Reihenfolge) | Kunde/R2 | R2/R4 | vor Phase 5 | mittel |
| 18 | **Oeffnungszeiten / Erreichbarkeit** fuer `openingHoursSpecification` (Schema, GBP) | Kunde | R2 | vor Phase 4 | mittel |
| 19 | **Wikidata-QID** anlegen und `sameAs`-Profile (LinkedIn etc.) bestaetigen | Kunde/R2 | R2 | vor Phase 5 | niedrig |
| 20 | **Logo in Vektorform** (SVG) + Marken-Assets fuer Favicon/OG/Negativ-Variante | Kunde | R3 | vor Phase 2 | hoch |

---
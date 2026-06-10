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
| Startseiten-Bausteine (Gründe, Ablauf, Bewertungen) | `src/data/inhalte.ts` |
| Design-Tokens (Farben/Typo) | `src/styles/global.css` |
| Rechtstexte | `src/pages/impressum.astro`, `src/pages/datenschutz.astro` |

## Typische Aufgaben

- **Text/FAQ/Preis-Hinweis ändern:** entsprechende Daten-Datei bearbeiten.
- **Neue Stadt:** Eintrag in `src/data/standorte.ts` + Detail-Objekt in `src/data/standorte-detail.ts`
  (vollständiger Unique-Content, sonst greift das Index-Gate → `noindex`).
- **Neue Leistung:** Eintrag in `src/data/leistungen.ts` (+ Lucide-Icon) + Detail in `src/data/leistungen-detail.ts`.
- **Neue Bewertung:** `src/data/inhalte.ts`.

## Befehle

```bash
pnpm dev      # lokale Vorschau (http://localhost:4321)
pnpm check    # Typecheck + ESLint/SonarJS + Stylelint (vor jedem Commit)
pnpm build    # Produktions-Build
pnpm shoot    # Screenshots (SHOOT_ROUTES=/pfad/ node scripts/shoot.mjs)
```

## Deploy-Konfiguration (Cloudflare Pages)

- Build-Befehl: `pnpm build`, Output: `dist`.
- ENV/Secrets: `RESEND_API_KEY`, `CONTACT_TO` (Kontaktformular), `CF_ANALYTICS_TOKEN` (in `src/lib/config.ts`).
- `functions/` wird von Cloudflare Pages automatisch als Pages Functions deployt.

## Laufende Pflege (Empfehlung)

Quartalsweiser Content-Refresh (Aktualität/E-E-A-T), jährliche Normen-Prüfung (TRGS/GefStoffV),
Google-Business-Profil & Bewertungen pflegen, GSC-Monitoring.

# Cookie-/Consent-Bewertung (§ 25 TDDDG) – Tag 88

> **Stand:** 2026-06-24. Empirisch verifizierte Prüfung, ob die Website ohne Cookie-/Consent-Banner
> auskommt. Ergebnis aus 3 unabhängigen Rechtsperspektiven (strikt §25 / funktionale Notwendigkeit /
> Art. 13 DSGVO) + Synthese.

## Empirisch verifizierte Fakten

| Prüfung | Befund | Methode |
|---|---|---|
| Cookies auf öffentlichen Seiten | **0× `Set-Cookie`** auf `/`, `/kontakt/`, `/leistungen/`, `/datenschutz/`, `/impressum/`, Ratgeber | curl gegen `server.mjs` |
| Webanalyse aktiv? | **Nein** – `CF_ANALYTICS_TOKEN=''` → Cloudflare-Beacon (`BaseLayout.astro:133-142`) wird nicht gerendert | Code + Build |
| Conversion-Skript | `conversions.js` ruft `window.plausible`/`dataLayer` nur auf, wenn vorhanden (beides nicht geladen) → No-op, **kein Storage, kein Drittanbieter** | Code |
| Fonts | **self-hosted** (`@fontsource`, CSP `font-src 'self'`), keine Google-Fonts/CDN | Code |
| WhatsApp/Telefon | reine Links (`wa.me`/`tel:`), **kein eingebettetes Widget** | Code |
| Drittanbieter-Skripte | Prod-CSP `script-src 'self'` blockt Dritt-Skripte ohnehin | `server.mjs` |
| Client-Speicherung (öffentlich) | **nur `sessionStorage`** `asbesta_src` (UTM-Quelle) in `anfrage-form.js` – session-scoped, first-party | Code |
| Admin | technisch notwendiges Session-Cookie (HMAC, httpOnly), nur bei Login, `/admin` `noindex`+Auth → §25-Ausnahme | Code |

## Ergebnis

| Kriterium | Bewertung | Confidence |
|---|---|---|
| Klassischer Cookie-Banner nötig? | **Nein** (keine Cookies, kein Tracking, keine Dritt-Dienste) | hoch |
| § 25 (1) TDDDG greift auf `sessionStorage`? | ja (Speicherung im Endgerät) | mittel |
| § 25 (2) Ausnahme („unbedingt erforderlich")? | **Graubereich** – Formular funktioniert auch ohne Quellen-Pufferung | mittel |
| Art. 13 DSGVO Transparenz | war lückenhaft (sessionStorage nicht offengelegt) → **mit diesem Commit behoben** | – |
| Praktisches Bußgeldrisiko aktuell | niedrig | mittel |

**Fazit:** Ein Cookie-Consent-Banner ist **nicht erforderlich**. Der einzig offene Punkt ist die
§25(2)-Einordnung der `sessionStorage`-UTM-Pufferung. Die Transparenzlücke (Art. 13) ist mit diesem
Commit geschlossen (Offenlegung in der Datenschutzerklärung, Abschnitt 4).

## Offene Entscheidung (sessionStorage-UTM)

Drei Wege, um den §25(2)-Graubereich aufzulösen:

1. **Beibehalten + dokumentiert** *(jetzt umgesetzt; geringes praktisches Risiko)* – session-scoped,
   first-party, jetzt transparent offengelegt. Restrisiko: strenge Aufsicht könnte Einwilligung fordern.
2. **`sessionStorage` entfernen**, UTM erst beim Absenden direkt aus der URL lesen – beseitigt die
   §25-Frage vollständig; Nachteil: Quellen-Attribution geht über externe Zwischenschritte verloren.
3. **Micro-Consent** vor dem Schreibzugriff – rechtlich wasserdicht, aber UX-Belastung.

→ Entscheidung durch Inhaber (Marketing-Attribution vs. maximale Defensivität).

## Anwaltlich freizugeben (needs-lawyer)

- Finale Freigabe der ergänzten Datenschutzerklärung (Rechtsgrundlagen Art. 6 (1) f / § 25 (2) TDDDG für die UTM-Verarbeitung).
- Argumentationslinie für die §25(2)-Einordnung, falls eine Aufsichtsbehörde sie in Frage stellt.
- Transparenz, dass UTM-Metadaten mit der Anfrage an Brevo übergeben werden (Abschnitt 4 prüfen).
- Klarstellung: Eine künftige Aktivierung von Web-Analytics würde – je nach Dienst – Einwilligung erfordern.

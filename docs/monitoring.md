# Monitoring & Alerting (Setup-Leitfaden) – Tag 92

> **Stand:** 2026-06-24. Was nach dem Go-Live überwacht wird und welche Alarme nötig sind.
> Muss **mit dem Cutover live** sein (nicht erst danach), damit Rollback-Trigger sichtbar werden
> (`docs/launch-runbook.md`).

## Was überwachen + Schwellwerte (Trigger)

| Signal | Quelle | Alarm-Trigger |
|---|---|---|
| **Erreichbarkeit / Uptime** | externer Uptime-Monitor (z. B. UptimeRobot/Better Uptime) auf `https://www.asbesta-schadstoffsanierung.de/` | Down ≥ 2 aufeinanderfolgende Checks (≤ 1–5 min Intervall) |
| **5xx-Fehlerrate** | Railway-Logs/-Metrics | > 2 % über 5 min |
| **SSL-Zertifikat** | Uptime-Monitor (TLS-Expiry-Check) | Ablauf < 14 Tage oder ungültig |
| **Formular-Zustellung (Lead)** | synthetischer Canary ODER tägliche Sichtprüfung `/admin` + Brevo | 0 Leads über 30 min in Geschäftszeiten / Canary schlägt fehl |
| **404/Redirect-Gesundheit** | GSC „Seiten"/Coverage, Server-Logs | Anstieg 404 auf zuvor rankende Alt-URLs (Folgetage) |
| **Core Web Vitals (Feld)** | GSC „Core Web Vitals" / CrUX | LCP/INP/CLS verlassen „Good" |

## Bausteine

- **Uptime + SSL:** externer Monitor (HTTP 200 auf `/` + TLS-Check), Benachrichtigung per E-Mail an
  `info@asbesta-schadstoffsanierung.de` (und ggf. SMS/Push).
- **5xx / Logs:** Railway-Service-Logs beobachten; der anonyme `lead_submitted`-Log (stdout in
  `api/anfrage.ts`) dient als Lead-Zähler ohne personenbezogene Daten.
- **Formular-Canary:** optional ein zeitgesteuerter Testlauf, der `/api/anfrage/` mit Test-Payload
  anspricht und auf `{ok:true}` prüft (markiert als Test, damit kein echter Lead/keine Mail entsteht).
- **GSC/Bing:** nach Cutover Property verifizieren; Coverage + CWV wöchentlich prüfen.

## Analytics (cookieless, optional)

Das Conversion-Tracking ist verdrahtet (`public/scripts/conversions.js`: `data-conv="call|whatsapp"` +
Formular-`form_submit`), ruft aber nur `window.plausible`/`dataLayer` auf, **wenn vorhanden** – aktuell
kein Analytics geladen (cookieless-Status, `docs/cookieless-tdddg.md`). Aktivierung später mit einem
cookielosen Dienst (Plausible/Umami, EU): Skript einbinden, Ziele = Anruf-/WhatsApp-Klick + Formular;
**Datenschutzerklärung entsprechend ergänzen** (Ziffer 6 ist dafür vorbereitet). Cloudflare Web
Analytics nur sinnvoll hinter Cloudflare (`CF_ANALYTICS_TOKEN`, derzeit leer; CSP in `server.mjs` müsste
dann `static.cloudflareinsights.com` erlauben – siehe `docs/bfsg-einordnung.md`).

## Zugänge nötig (Inhaber)

- Railway-Projektzugang (Logs/Metrics, Backups).
- Account beim gewählten Uptime-Monitor.
- Google-/Bing-Webmaster-Zugang für die Live-Domain.

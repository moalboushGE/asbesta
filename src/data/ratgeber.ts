/** Ratgeber-/Blog-Beiträge (SSOT für Übersicht, Artikel-Header, Schema, Sitemap). */
import type { ImageMetadata } from 'astro';
import heroDach from '../assets/images/ratgeber/hero-dach.jpg';

export interface RatgeberFaq {
  readonly frage: string;
  readonly antwort: string;
}

export interface RatgeberArtikel {
  readonly slug: string;
  readonly title: string;
  readonly metaTitle: string;
  readonly metaDescription: string;
  readonly excerpt: string;
  readonly kategorie: string;
  /** ISO-Datum YYYY-MM-DD. */
  readonly datePublished: string;
  readonly dateModified: string;
  readonly author: string;
  readonly authorRole: string;
  readonly lesezeitMin: number;
  readonly heroImage: ImageMetadata;
  readonly heroAlt: string;
  readonly faqs: readonly RatgeberFaq[];
}

export const ratgeberArtikel: readonly RatgeberArtikel[] = [
  {
    slug: 'asbestsanierung-pflicht-kosten-ablauf',
    title: 'Asbestsanierung: Pflicht, Kosten & Ablauf',
    metaTitle: 'Asbestsanierung: Pflicht, Kosten & Ablauf (2026) | Asbesta Ratgeber',
    metaDescription:
      'Wann ist eine Asbestsanierung Pflicht, was kostet sie pro m² und wie läuft sie nach TRGS 519 ab? Der komplette Ratgeber 2026 mit Kostentabelle, Ablauf und FAQ vom Fachbetrieb.',
    excerpt:
      'Wann ist eine Asbestsanierung Pflicht, was kostet sie pro Quadratmeter und wie läuft sie nach TRGS 519 ab? Der komplette Überblick – mit Kostentabelle, Schritt-für-Schritt-Ablauf und Antworten auf die häufigsten Fragen.',
    kategorie: 'Ratgeber Asbest',
    datePublished: '2026-06-10',
    dateModified: '2026-06-10',
    author: 'Asbesta Fachredaktion',
    authorRole: 'Fachbetrieb mit Sachkunde nach TRGS 519',
    lesezeitMin: 12,
    heroImage: heroDach,
    heroAlt: 'Verwittertes Asbestzement-Wellplattendach an einem älteren Gebäude',
    faqs: [
      {
        frage: 'Ist eine Asbestsanierung in Deutschland Pflicht?',
        antwort:
          'Sobald bei Bau-, Sanierungs- oder Abbrucharbeiten asbesthaltige Materialien betroffen sind, dürfen diese Arbeiten nur von einem Fachbetrieb mit Sachkunde nach TRGS 519 ausgeführt und müssen vorab der zuständigen Behörde angezeigt werden. Unbeschädigtes, fest gebundenes Material muss nicht zwingend sofort entfernt werden – sobald Sie aber daran arbeiten lassen, greift die Sanierungspflicht.',
      },
      {
        frage: 'Was kostet eine Asbestsanierung pro Quadratmeter?',
        antwort:
          'Als grobe Orientierung liegen die Kosten zwischen rund 50 und 350 € pro Quadratmeter – abhängig von Material, Bindung (fest oder schwach gebunden), Zugänglichkeit und Entsorgung. Ein Asbestzement-Dach liegt häufig bei 40–100 €/m², schwach gebundene Putze deutlich höher. Den verbindlichen Preis nennen wir nach einer kostenlosen Besichtigung als Festpreis.',
      },
      {
        frage: 'Wie lange dauert eine Asbestsanierung?',
        antwort:
          'Ein überschaubares Asbestdach ist oft in 1–3 Arbeitstagen saniert, größere oder schwach gebundene Objekte dauern länger. Hinzu kommen die gesetzliche Anzeigefrist (in der Regel mindestens 7 Tage vor Beginn) sowie die abschließende Freimessung der Raumluft.',
      },
      {
        frage: 'Darf ich Asbest selbst entfernen?',
        antwort:
          'Davon ist dringend abzuraten. Schwach gebundener Asbest darf ausschließlich von sachkundigen Fachbetrieben entfernt werden. Auch bei fest gebundenen Materialien gilt: nicht bohren, sägen, schleifen oder brechen – dabei werden gefährliche Fasern freigesetzt. Im Zweifel immer den Fachbetrieb beauftragen.',
      },
      {
        frage: 'Woran erkenne ich, ob Asbest verbaut ist?',
        antwort:
          'Ein starkes Indiz ist das Baujahr: In Gebäuden, die vor 1993 errichtet oder saniert wurden, ist Asbest wahrscheinlich. Typische Fundorte sind Welleternit-Dächer, Fassadenplatten, Floor-Flex-Bodenplatten, Fliesenkleber und Nachtspeicheröfen. Sicherheit gibt nur eine Materialprobe, die im Labor analysiert wird.',
      },
      {
        frage: 'Wer trägt die Kosten – Eigentümer oder Mieter?',
        antwort:
          'In der Regel ist die Asbestsanierung Sache des Eigentümers bzw. Vermieters, da sie zur Instandhaltung des Gebäudes gehört. Die genaue Kostenverteilung hängt vom Einzelfall und vom Mietvertrag ab.',
      },
      {
        frage: 'Gibt es eine Förderung für die Asbestsanierung?',
        antwort:
          'Eine eigene „Asbest-Förderung" gibt es nicht. Wird die Sanierung aber mit einer energetischen Maßnahme kombiniert (z. B. neues, gedämmtes Dach), sind KfW-/BAFA-Förderungen und der Steuerbonus nach § 35c EStG möglich. Für reine Handwerkerleistungen lässt sich häufig § 35a EStG nutzen.',
      },
    ],
  },
];

export function getArtikel(slug: string): RatgeberArtikel | undefined {
  return ratgeberArtikel.find((a) => a.slug === slug);
}

/** Ratgeber-/Blog-Beiträge (SSOT für Übersicht, Artikel-Header, Schema, Sitemap). */
import type { ImageMetadata } from 'astro';
import heroDach from '../assets/images/ratgeber/hero-dach.jpg';
import heroAsbestdach from '../assets/images/leistungen/welleternit-ausbauen.jpg';

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
    slug: 'asbestdach-entsorgen-kosten-ablauf',
    title: 'Asbestdach entsorgen: Erkennen, Kosten, Pflicht & Ablauf',
    metaTitle: 'Asbestdach entsorgen: Kosten, Pflicht & Ablauf (2026) | Asbesta Ratgeber',
    metaDescription:
      'Asbestdach erkennen, Kosten pro m², Entfernungspflicht nach TRGS 519 und Ablauf der Entsorgung – der komplette Ratgeber 2026 mit Kostentabelle und FAQ vom Fachbetrieb.',
    excerpt:
      'Graue Welleternit-Platten auf Dach oder Garage? Wann ein Asbestdach raus muss, was die Entsorgung pro Quadratmeter kostet und wie der Ausbau nach TRGS 519 abläuft – mit Kostentabelle, Schritt-für-Schritt-Ablauf und den häufigsten Fragen.',
    kategorie: 'Ratgeber Asbest',
    datePublished: '2026-06-11',
    dateModified: '2026-06-11',
    author: 'Asbesta Fachredaktion',
    authorRole: 'Fachbetrieb mit Sachkunde nach TRGS 519',
    lesezeitMin: 12,
    heroImage: heroAsbestdach,
    heroAlt: 'Arbeiter in Schutzkleidung trägt asbesthaltige Wellplatten von einem Dach ab',
    faqs: [
      {
        frage: 'Woran erkenne ich, ob mein Dach Asbest enthält?',
        antwort:
          'Ein starkes Indiz ist das Baujahr: Wellplatten und Faserzement-Dächer, die vor 1993 verbaut wurden, enthalten mit hoher Wahrscheinlichkeit Asbest. Typisch sind graue, leicht gewellte Faserzementplatten („Welleternit"), oft mit Moosbewuchs und verwitterter Oberfläche; auf der Plattenunterseite findet sich teilweise ein Herstellerstempel mit Datum. Sicherheit gibt aber nur eine Materialprobe, die im Labor analysiert wird – eine Sichtprüfung allein reicht nicht aus.',
      },
      {
        frage: 'Muss ich ein intaktes Asbestdach entfernen?',
        antwort:
          'Eine generelle Austauschpflicht für jedes Asbestdach gibt es nicht. Solange die Platten fest gebunden, unbeschädigt und ungestört sind, dürfen sie zunächst liegen bleiben. Sobald Sie jedoch am Dach arbeiten lassen, es umbauen, abreißen oder das Material beschädigt bzw. stark verwittert ist, greift die Sanierungspflicht nach Gefahrstoffverordnung und TRGS 519 – dann darf nur ein Fachbetrieb ran.',
      },
      {
        frage: 'Was kostet es, ein Asbestdach entsorgen zu lassen?',
        antwort:
          'Als grobe Orientierung liegen Abbau und Entsorgung eines Asbestzement-Daches in Deutschland meist bei rund 35 bis 80 € pro Quadratmeter, je nach Dachneigung, Höhe, Zugänglichkeit und Gerüstbedarf. Hinzu kommen Deponiegebühren (ca. 100–300 € pro Tonne) und ggf. die Materialprobe. Den verbindlichen Preis nennen wir als Festpreis erst nach einer kostenlosen Besichtigung.',
      },
      {
        frage: 'Darf ich mein Asbestdach selbst abbauen?',
        antwort:
          'Davon ist dringend abzuraten, und für die meisten Fälle ist es nicht zulässig. Der Ausbau asbesthaltiger Dachplatten ist nach TRGS 519 eine erlaubnis- und anzeigepflichtige Tätigkeit, die Sachkunde, Schutzausrüstung und eine fachgerechte Entsorgung voraussetzt. Wer Platten bricht, flext oder hochdruckreinigt, setzt massenhaft Fasern frei und gefährdet sich und die Nachbarschaft – außerdem drohen Bußgelder.',
      },
      {
        frage: 'Kann man ein Asbestdach beschichten oder überdecken statt entfernen?',
        antwort:
          'Nein. Das Beschichten, Überdecken, Abschleifen oder Hochdruckreinigen asbesthaltiger Dächer ist unzulässig, weil dabei besonders viele Fasern freigesetzt werden. Diese vermeintlichen „Sanierungen" lösen das Problem nicht, sondern verschärfen es und erschweren die spätere fachgerechte Entsorgung. Der einzig sichere Weg ist der kontrollierte Ausbau und die Entsorgung durch einen Fachbetrieb.',
      },
      {
        frage: 'Wie wird ein Asbestdach fachgerecht entsorgt?',
        antwort:
          'Die Platten werden möglichst zerstörungsfrei abgenommen, staubdicht in gekennzeichneten Big Bags verpackt und als gefährlicher Abfall (Abfallschlüssel AVV 17 06 05*) über zugelassene Deponien entsorgt. Sie erhalten einen lückenlosen Entsorgungsnachweis. Asbesthaltige Platten gehören keinesfalls in den Hausmüll oder unverpackt auf den Wertstoffhof.',
      },
      {
        frage: 'Gibt es Förderung, wenn ich das Asbestdach durch ein neues, gedämmtes Dach ersetze?',
        antwort:
          'Eine eigene „Asbest-Förderung" gibt es nicht. Wird der Dachausbau aber mit einer energetischen Maßnahme kombiniert – etwa einer neuen Dämmung oder Photovoltaik – sind KfW-/BAFA-Förderungen und der Steuerbonus nach § 35c EStG möglich. Für reine Handwerkerleistungen lässt sich häufig § 35a EStG nutzen. Lassen Sie sich dazu individuell steuerlich beraten.',
      },
    ],
  },
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

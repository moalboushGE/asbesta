/** Ratgeber-/Blog-Beiträge (SSOT für Übersicht, Artikel-Header, Schema, Sitemap). */
import type { ImageMetadata } from 'astro';
import heroDach from '../assets/images/ratgeber/hero-dach.jpg';
import heroAsbestdach from '../assets/images/leistungen/welleternit-ausbauen.jpg';
import heroErkennen from '../assets/images/leistungen/materialanalyse.jpg';
import heroBoden from '../assets/images/leistungen/floor-flex-entfernen.jpg';

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
    slug: 'asbest-bodenbelag',
    title: 'Asbest im Bodenbelag: Floor-Flex, Cushion-Vinyl & schwarzer Kleber',
    metaTitle: 'Asbest im Bodenbelag erkennen & entfernen | Asbesta',
    metaDescription:
      'Floor-Flex, Cushion-Vinyl und schwarzer Bitumenkleber: Asbest im alten Bodenbelag erkennen, Gefahren verstehen und nach TRGS 519 sicher entfernen lassen.',
    excerpt:
      'Harte Vinyl-Platten, alter PVC-Belag, schwarzer Kleber auf dem Estrich – in Böden bis Baujahr 1993 steckt häufig Asbest. Woran Sie Floor-Flex, Cushion-Vinyl und Bitumenkleber erkennen, warum sie erst beim Entfernen gefährlich werden und wie die Sanierung abläuft.',
    kategorie: 'Ratgeber Asbest',
    datePublished: '2026-06-11',
    dateModified: '2026-06-11',
    author: 'Asbesta Fachredaktion',
    authorRole: 'Fachbetrieb mit Sachkunde nach TRGS 519',
    lesezeitMin: 11,
    heroImage: heroBoden,
    heroAlt: 'Fachkraft entfernt einen alten, asbestverdächtigen Bodenbelag vom Untergrund',
    faqs: [
      {
        frage: 'Woran erkenne ich asbesthaltigen Bodenbelag?',
        antwort:
          'Verdächtig sind vor allem Böden bis Baujahr 1993: harte, oft 25×25 cm große Vinyl-Asbest-Platten (Floor-Flex), elastische Cushion-Vinyl-Bahnen sowie der schwarze, harte Bitumenkleber darunter. Optisch lässt sich Asbest aber nicht sicher feststellen – auch der Kleber kann asbestfrei oder asbesthaltig sein. Sicherheit gibt nur eine Materialprobe im Labor. Reißen Sie verdächtige Beläge bis dahin nicht heraus.',
      },
      {
        frage: 'Was sind Floor-Flex-Platten?',
        antwort:
          'Floor-Flex-Platten sind harte Vinyl-Asbest-Bodenplatten, die von den 1960er- bis in die 1980er-Jahre millionenfach verlegt wurden – meist im Format 25×25 cm, in vielen Farben und Mustern. Sie enthalten fest gebundenen Asbest und wurden fast immer mit schwarzem, ebenfalls asbestverdächtigem Bitumenkleber verklebt. Solange sie unbeschädigt liegen, ist die Gefahr gering; beim Brechen, Schleifen oder Herausreißen werden jedoch Fasern frei.',
      },
      {
        frage: 'Ist der schwarze Kleber unter altem PVC immer Asbest?',
        antwort:
          'Nicht zwingend, aber er steht unter dringendem Verdacht. Schwarzer Bitumenkleber („Schwarzkleber") unter Belägen, die vor den 1990er-Jahren verlegt wurden, enthält häufig Asbest, das die Klebkraft verbessern sollte. Sicher ist nur die Laboranalyse einer Probe. Gefährlich wird der festhaftende Kleber vor allem, wenn er später abgeschliffen oder abgestemmt wird.',
      },
      {
        frage: 'Darf ich den alten Belag selbst herausreißen?',
        antwort:
          'Bei Asbestverdacht raten wir dringend ab. Das Herausreißen, Brechen oder Abschleifen asbesthaltiger Bodenplatten und Kleber setzt lungengängige Fasern frei. Die Entfernung ist nach TRGS 519 eine erlaubnis- und anzeigepflichtige Tätigkeit, die staubarm und mit Schutzmaßnahmen erfolgen muss. Lassen Sie vorab eine Probe nehmen und die Arbeiten von einem Fachbetrieb ausführen.',
      },
      {
        frage: 'Kann ich einfach einen neuen Boden darüber verlegen?',
        antwort:
          'Ein intakter, fest sitzender asbesthaltiger Belag darf in manchen Fällen überdeckt statt entfernt werden – das verschiebt das Problem aber nur und ist bei der nächsten Sanierung teurer. Sobald der Untergrund uneben ist, geschliffen oder gefräst werden muss oder Sie sicher gehen wollen, ist die fachgerechte Entfernung der richtige Weg. Bohren, schleifen oder fräsen Sie nie auf gut Glück über altem Belag.',
      },
      {
        frage: 'Was kostet die Entfernung pro Quadratmeter?',
        antwort:
          'Als grobe Orientierung liegt die fachgerechte Entfernung von Belag plus schwarzem Kleber – inklusive Entsorgung – häufig bei rund 50 bis 120 € pro Quadratmeter, je nach Klebersorte, Untergrund, Fläche und Zugänglichkeit. Den verbindlichen Preis nennen wir als Festpreis nach einer kostenlosen Besichtigung und Materialprobe.',
      },
      {
        frage: 'Ist der Estrich nach der Entfernung wieder nutzbar?',
        antwort:
          'Ja. Wir entfernen Belag und Bitumenkleber rückstandslos, sodass der Estrich frei von Klebe- und Faserresten und anschließend belegreif ist. Nach der Feinreinigung belegt eine Freimessung der Raumluft, dass die Räume wieder sicher genutzt werden können – dann kann ein neuer Bodenbelag verlegt werden.',
      },
    ],
  },
  {
    slug: 'asbest-erkennen',
    title: 'Asbest erkennen: Baujahr, Fundorte & Materialprobe',
    metaTitle: 'Asbest erkennen: Baujahr, Fundorte & Materialprobe | Asbesta',
    metaDescription:
      'Woran erkennt man Asbest? Das Baujahr vor 1993, typische Fundorte im Haus und warum nur eine Materialprobe im Labor Sicherheit gibt – der Ratgeber vom Fachbetrieb.',
    excerpt:
      'Graue Wellplatten, alter Bodenkleber, Spachtelmasse – steckt da Asbest drin? Woran Sie ein Asbestrisiko erkennen: das Baujahr als wichtigstes Indiz, typische Fundorte im Haus und warum endgültige Sicherheit nur eine Materialprobe im Labor bringt.',
    kategorie: 'Ratgeber Asbest',
    datePublished: '2026-06-11',
    dateModified: '2026-06-11',
    author: 'Asbesta Fachredaktion',
    authorRole: 'Fachbetrieb mit Sachkunde nach TRGS 519',
    lesezeitMin: 11,
    heroImage: heroErkennen,
    heroAlt: 'Asbestfaser-Materialprobe wird im Labor unter dem Mikroskop analysiert',
    faqs: [
      {
        frage: 'Woran erkenne ich, ob in meinem Haus Asbest verbaut ist?',
        antwort:
          'Das wichtigste Indiz ist das Baujahr: In Gebäuden, die vor dem Asbestverbot 1993 errichtet oder saniert wurden, ist Asbest wahrscheinlich – besonders aus der Hochphase von etwa 1960 bis 1990. Typische Fundorte sind Welleternit-Dächer, Asbestzement-Fassadenplatten, Floor-Flex-Bodenplatten mit schwarzem Bitumenkleber, Spritzasbest, Spachtelmassen, Fliesenkleber, Fensterbänke und Nachtspeicheröfen. Sicher feststellen lässt sich Asbest aber nur über eine Materialprobe, die im Labor analysiert wird – eine reine Sichtprüfung genügt nicht.',
      },
      {
        frage: 'Ab welchem Baujahr muss ich mit Asbest rechnen?',
        antwort:
          'Asbest wurde in Deutschland bis zum vollständigen Verbot 1993 verbaut, mit einem Schwerpunkt zwischen den 1960er- und 1980er-Jahren. Als Faustregel gilt: Bei Gebäuden und Einbauten vor 1993 besteht Asbestverdacht – vor allem, wenn seither nicht kernsaniert wurde. Auch Modernisierungen aus dieser Zeit (neue Böden, Putze, Kleber) können Asbest eingebracht haben, selbst wenn das Gebäude älter und ursprünglich asbestfrei war.',
      },
      {
        frage: 'Kann man Asbest mit bloßem Auge erkennen?',
        antwort:
          'Nicht zuverlässig. Manche Produkte wie graue Welleternit-Wellplatten oder Floor-Flex-Bodenplatten sind zwar verdächtig, aber Asbest steckt oft unsichtbar in Klebern, Spachtelmassen, Putzen oder Fliesenklebern. Optisch lassen sich asbesthaltige und asbestfreie Materialien meist nicht unterscheiden. Zweifelsfreie Sicherheit gibt nur die Laboranalyse einer Probe.',
      },
      {
        frage: 'Darf ich selbst eine Asbestprobe nehmen?',
        antwort:
          'Davon raten wir dringend ab. Beim Anbohren, Abkratzen oder Brechen verdächtiger Materialien werden genau die gefährlichen Fasern freigesetzt, die Sie eigentlich vermeiden wollen. Die Probenahme sollte staubmindernd und durch sachkundiges Personal nach TRGS 519 erfolgen. Wir entnehmen die Probe fachgerecht, dokumentieren die Entnahmestelle und lassen sie in einem akkreditierten Labor untersuchen.',
      },
      {
        frage: 'Was kostet eine Asbest-Analyse?',
        antwort:
          'Die Kosten hängen von Anzahl und Art der Proben sowie vom Untersuchungsumfang ab; eine einzelne Materialprobe liegt oft im niedrigen zweistelligen Eurobereich pro Probe. Den genauen Preis nennen wir nach einer kostenlosen Besichtigung. Gemessen am Gesundheitsrisiko und an möglichen Folgekosten einer unentdeckten Belastung ist die Analyse eine kleine, lohnende Investition.',
      },
      {
        frage: 'Materialprobe oder Raumluftmessung – was brauche ich?',
        antwort:
          'Beide Verfahren beantworten unterschiedliche Fragen. Eine Materialprobe zeigt, ob ein bestimmtes Bauteil Asbest enthält – ideal vor Umbau, Sanierung oder Kauf. Eine Raumluftmessung nach VDI 3492 zeigt dagegen, ob aktuell Fasern frei in der Atemluft schweben – etwa bei Verdacht auf eine bestehende Belastung oder als Freimessung nach einer Sanierung. Wir beraten Sie, welches Verfahren in Ihrem Fall sinnvoll ist.',
      },
      {
        frage: 'Was soll ich bei Asbestverdacht tun?',
        antwort:
          'Bleiben Sie besonnen und bearbeiten Sie verdächtige Materialien auf keinen Fall: nicht bohren, sägen, schleifen, brechen oder hochdruckreinigen. Vermeiden Sie jede unnötige Beschädigung, dokumentieren Sie die Stelle mit einem Foto und halten Sie das Baujahr bereit. Holen Sie dann einen Fachbetrieb hinzu, der eine Probe nimmt und das weitere Vorgehen klärt.',
      },
    ],
  },
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

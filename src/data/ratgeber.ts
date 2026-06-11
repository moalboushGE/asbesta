/** Ratgeber-/Blog-Beiträge (SSOT für Übersicht, Artikel-Header, Schema, Sitemap). */
import type { ImageMetadata } from 'astro';
import heroDach from '../assets/images/ratgeber/hero-dach.jpg';
import heroAsbestdach from '../assets/images/leistungen/welleternit-ausbauen.jpg';
import heroErkennen from '../assets/images/leistungen/materialanalyse.jpg';
import heroBoden from '../assets/images/leistungen/floor-flex-entfernen.jpg';
import { ratgeberFigure } from './ratgeber-content';

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
    slug: "asbest-hauskauf",
    title: "Asbest beim Hauskauf: Pflichten, Risiken & Kosten",
    metaTitle: "Asbest beim Hauskauf: Pflichten, Risiken & Kosten | Asbesta",
    metaDescription: "Asbest beim Hauskauf: Offenbarungspflicht des Verkäufers, Grenzen von \"gekauft wie gesehen\", Gutachten vor dem Kauf, Kosten-Richtwerte und Verhandlungstipps.",
    excerpt: "Ältere Häuser sind günstig – bergen aber oft Asbest. Welche Aufklärungspflichten der Verkäufer hat, warum \"gekauft wie gesehen\" Sie nicht immer schützt und wie Sie mit einem Gutachten vor dem Kauf und cleverer Verhandlung teure Überraschungen vermeiden.",
    kategorie: "Ratgeber Asbest",
    datePublished: "2026-06-11",
    dateModified: "2026-06-11",
    author: "Asbesta Fachredaktion",
    authorRole: "Fachbetrieb mit Sachkunde nach TRGS 519",
    lesezeitMin: 12,
    heroImage: ratgeberFigure("materialanalyse"),
    heroAlt: "Materialprobe wird im Labor unter dem Mikroskop auf Asbestfasern untersucht – Schadstoffgutachten vor dem Hauskauf",
    faqs: [
      {
        "frage": "Muss der Verkäufer mir Asbest im Haus mitteilen?",
        "antwort": "Über einen ihm bekannten, gesundheitsrelevanten Asbestmangel, den Sie bei einer üblichen Besichtigung nicht erkennen können, muss der Verkäufer von sich aus aufklären. Verschweigt er eine ihm bekannte Belastung bewusst, kann das eine arglistige Täuschung sein – dann hilft ihm auch ein vereinbarter Gewährleistungsausschluss nicht. Weiß der Verkäufer dagegen nichts von Asbest und hatte auch keinen konkreten Anlass für einen Verdacht, handelt er nicht arglistig. Auf Nachfrage muss er aber stets wahrheitsgemäß antworten. Diese Einordnung ersetzt keine Rechtsberatung im Einzelfall."
      },
      {
        "frage": "Schützt mich die Klausel \"gekauft wie gesehen\" als Käufer wirklich?",
        "antwort": "Ein Gewährleistungsausschluss wie \"gekauft wie gesehen\" ist beim privaten Immobilienverkauf üblich und grundsätzlich wirksam, hat aber klare Grenzen. Er greift nicht, wenn der Verkäufer einen bekannten Mangel arglistig verschwiegen oder eine bestimmte Eigenschaft ausdrücklich zugesichert hat. Außerdem deckt \"wie gesehen\" vor allem sichtbare Mängel ab – verborgene Asbestbelastungen in Klebern, Putzen oder unter Belägen sind nicht automatisch erfasst. Verlassen Sie sich trotzdem nicht allein darauf: Arglist nachzuweisen ist schwierig. Sicherer ist es, vor dem Kauf ein Gutachten erstellen zu lassen."
      },
      {
        "frage": "Lohnt sich ein Asbestgutachten vor dem Kauf?",
        "antwort": "In aller Regel ja. Die Kosten für eine Begehung und einige Materialproben sind im Vergleich zum Kaufpreis gering, schaffen aber Gewissheit statt Vermutung. Ein bestätigter Befund verschafft Ihnen eine sachliche Grundlage, um Sanierungskosten in die Kaufpreisverhandlung einzubringen – oder bewahrt Sie vor einem teuren Fehlkauf. Wichtig ist, das Gutachten vor der Unterschrift einzuplanen, idealerweise mit einer Klausel, die Ihnen bei positivem Befund ein Rücktritts- oder Nachverhandlungsrecht sichert."
      },
      {
        "frage": "Wie bringe ich Sanierungskosten in die Kaufpreisverhandlung ein?",
        "antwort": "Am wirkungsvollsten mit konkreten Zahlen statt pauschaler Abschläge. Lassen Sie Fundorte, Mengen und Bindungsart im Gutachten dokumentieren und holen Sie eine fundierte Kostenschätzung oder ein Festpreis-Angebot für die Sanierung ein. Diesen Betrag argumentieren Sie sachlich als Wertminderung gegenüber einem asbestfreien Vergleichsobjekt. Faire Lösungen sind ein Preisnachlass in Höhe der Sanierungskosten, eine Sanierung durch den Verkäufer vor Übergabe oder ein hinterlegter Einbehalt bis zur Erledigung der Arbeiten."
      },
      {
        "frage": "Ab welchem Baujahr muss ich beim Hauskauf mit Asbest rechnen?",
        "antwort": "Asbest wurde in Deutschland bis zum vollständigen Verbot 1993 verbaut, mit einem Schwerpunkt zwischen den 1960er- und 1980er-Jahren. Als Faustregel gilt: Bei Gebäuden vor 1993 besteht Asbestverdacht – besonders, wenn seither nicht kernsaniert wurde. Auch Modernisierungen aus dieser Zeit, etwa neue Böden, Kleber oder Putze, können Asbest eingebracht haben, selbst in einem älteren, ursprünglich asbestfreien Haus. Sicherheit gibt nur eine Materialprobe im Labor, nicht das Baujahr allein."
      },
      {
        "frage": "Mindert Asbest den Wert einer Immobilie?",
        "antwort": "Ja, ein bestätigter Asbestbefund mindert in der Regel den Wert – nicht, weil das Haus unbewohnbar wäre, sondern weil dem Käufer absehbare Sanierungs- und Entsorgungskosten entstehen. Die Höhe der Minderung orientiert sich an den zu erwartenden Kosten, die je nach Material, Menge und Zugänglichkeit stark schwanken. Umgekehrt kann eine bereits fachgerecht durchgeführte und dokumentierte Asbestsanierung ein älteres Haus deutlich attraktiver machen, weil sie dem Käufer das Risiko nimmt und den Verkauf beschleunigt."
      },
      {
        "frage": "Gibt es eine Förderung für die Asbestsanierung nach dem Kauf?",
        "antwort": "Eine eigene Förderung nur für die Asbestentfernung gibt es nicht. Wird die Sanierung jedoch mit einer energetischen Maßnahme kombiniert – etwa einem neuen, gedämmten Dach nach Ausbau eines Asbestdaches –, kommen KfW- und BAFA-Förderungen sowie der Steuerbonus nach § 35c EStG in Betracht. Für reine Handwerkerleistungen lässt sich häufig § 35a EStG nutzen. Welche Variante passt, klärt eine individuelle steuerliche oder energetische Beratung; die Asbestentfernung selbst planen wir transparent dazu."
      }
    ],
  },
  {
    slug: "gefstoffv-novelle-2024",
    title: "GefStoffV-Novelle 2024: die neuen Asbest-Pflichten erklärt",
    metaTitle: "GefStoffV-Novelle 2024: neue Asbest-Pflichten | Asbesta",
    metaDescription: "Novellierte Gefahrstoffverordnung 2024: neue Erkundungs- & Informationspflicht für Gebäude vor 1993. Was Eigentümer, Verwalter & Handwerker jetzt beachten.",
    excerpt: "Seit Dezember 2024 gilt die novellierte Gefahrstoffverordnung mit neuen Asbest-Pflichten. Wir erklären verständlich die Erkundungs- und Informationspflicht bei Gebäuden vor 1993, die Aufgaben von Eigentümern, Hausverwaltungen und Handwerkern – und die wichtigsten Praxisschritte.",
    kategorie: "Ratgeber Asbest",
    datePublished: "2026-06-11",
    dateModified: "2026-06-11",
    author: "Asbesta Fachredaktion",
    authorRole: "Fachbetrieb mit Sachkunde nach TRGS 519",
    lesezeitMin: 12,
    heroImage: ratgeberFigure("asbestsanierung"),
    heroAlt: "Asbest-Fachkräfte in Schutzausrüstung bei einer Sanierung gemäß der novellierten Gefahrstoffverordnung 2024",
    faqs: [
      {
        "frage": "Ab welchem Baujahr greift die neue Asbest-Erkundungspflicht?",
        "antwort": "Maßgeblich ist der Stichtag des Asbestverbots: Gebäude, die vor dem 31. Oktober 1993 errichtet wurden, gelten als potenziell asbestbelastet. Bei Bau-, Sanierungs- oder Abbrucharbeiten an solchen Gebäuden ist vorab zu klären, ob asbesthaltige Materialien betroffen sein können. Bei jüngeren Gebäuden ist Asbest aufgrund des Verbots in der Regel kein Thema. Im Zweifel sollten Sie das Baujahr und vorhandene Unterlagen vor Beginn der Arbeiten prüfen lassen."
      },
      {
        "frage": "Muss ich als privater Eigentümer selbst ein Asbest-Gutachten beauftragen?",
        "antwort": "Die Novelle verlangt vom Veranlasser vor allem eine Informations- und Mitwirkungspflicht: Sie müssen dem beauftragten Betrieb alle vorliegenden Informationen, insbesondere zum Baujahr und zu bekannten Asbestvorkommen, zur Verfügung stellen. Ein vollständiges Gutachten müssen Sie als Laie nicht selbst erstellen. In der Praxis ist es jedoch sinnvoll, bei Unsicherheit vor Arbeitsbeginn eine Materialanalyse zu beauftragen, damit der Betrieb die Gefährdung korrekt beurteilen kann. Asbesta übernimmt Probenahme und Laboranalyse gern für Sie."
      },
      {
        "frage": "Was ändert sich konkret für Handwerksbetriebe?",
        "antwort": "Handwerksbetriebe müssen das Baualter eines Gebäudes verpflichtend in ihre Gefährdungsbeurteilung einbeziehen und bei Unsicherheit eine Erkundung veranlassen, bevor sie an Altbausubstanz arbeiten. Das betrifft viele Gewerke, etwa Elektriker, Maler, Fliesenleger oder Sanitärbetriebe. Tätigkeiten an asbesthaltigen Materialien dürfen nur mit der erforderlichen Sachkunde und Ausstattung ausgeführt werden. Fehlt diese, sollte ein spezialisierter Fachbetrieb hinzugezogen werden."
      },
      {
        "frage": "Was bedeutet das Ampelmodell der Gefahrstoffverordnung?",
        "antwort": "Das Modell ordnet Tätigkeiten nach der zu erwartenden Asbestfaser-Konzentration in der Luft in drei Bereiche ein: gering (unter 10.000 Fasern/m³), mittel (unter 100.000 Fasern/m³) und hoch (über 100.000 Fasern/m³). Je höher das Risiko, desto strenger die erforderlichen Schutzmaßnahmen. Hohe Risiken bleiben qualifizierten Fachbetrieben vorbehalten. In welchen Bereich eine konkrete Tätigkeit fällt, ermittelt der sachkundige Betrieb anhand von Material, Bindungsart und Arbeitsverfahren."
      },
      {
        "frage": "Was ist der Unterschied zwischen Sachkunde nach Anlage 3 und Anlage 4 der TRGS 519?",
        "antwort": "Die Sachkunde nach Anlage 3 ist die umfassende Qualifikation für Abbruch-, Sanierungs- und Instandhaltungsarbeiten an allen asbesthaltigen Materialien, einschließlich der anspruchsvollen schwach gebundenen Produkte. Die Anlage 4 konzentriert sich auf Asbestzement-Produkte, Tätigkeiten mit geringer Exposition und Arbeiten geringen Umfangs. Beide Nachweise sind nach Bestehen in der Regel sechs Jahre gültig und lassen sich durch Fortbildung verlängern. Welche Qualifikation nötig ist, hängt von der konkreten Aufgabe ab."
      },
      {
        "frage": "Welche Konsequenzen drohen bei einem Verstoß gegen die GefStoffV?",
        "antwort": "Verstöße gegen die Asbest-Vorgaben können als Ordnungswidrigkeit mit Bußgeldern geahndet werden, in schweren Fällen sind auch strafrechtliche Folgen möglich. Hinzu kommen mittelbare Folgen wie ein behördlicher Baustopp, eine aufwendige Dekontamination kontaminierter Räume sowie Haftungs- und Versicherungsfragen. Für Betriebe kommt der Reputationsverlust hinzu. Durch einen sauberen, dokumentierten Ablauf mit vorheriger Klärung lassen sich diese Risiken nahezu vollständig vermeiden."
      },
      {
        "frage": "Wie läuft eine Materialanalyse vor Sanierungsbeginn ab?",
        "antwort": "Zunächst werden die Bauteile festgelegt, die bei der geplanten Maßnahme berührt werden. Anschließend entnehmen Sachkundige staubarm und sicher Materialproben, die ein akkreditiertes Labor auf Asbest untersucht. Auf Basis des Befundes werden Verfahren, Schutzmaßnahmen und Kosten bestimmt und der Befund wird zu den Bauunterlagen genommen. Eine Materialprobe ist im Verhältnis zu den Folgekosten eines unentdeckten Befundes günstig; den verbindlichen Preis nennen wir nach kurzer Klärung des Aufwands."
      }
    ],
  },
  {
    slug: "asbest-entsorgen",
    title: "Asbest entsorgen: Kosten, Vorschriften & der richtige Weg",
    metaTitle: "Asbest entsorgen: Kosten, Vorschriften & Weg | Asbesta",
    metaDescription: "Asbest richtig entsorgen: Abfallschlüssel AVV 17 06 05*, zugelassene Big Bags, Deponie, Entsorgungsnachweis und Kosten. Was erlaubt ist und was Bußgeld kostet.",
    excerpt: "Asbest ist gefährlicher Abfall und gehört weder in den Hausmüll noch in den Bauschuttcontainer. Wie Sie asbesthaltige Abfälle staubdicht verpacken, korrekt deklarieren (AVV 17 06 05*) und über zugelassene Deponien entsorgen lassen – mit Kostenorientierung, Bußgeld-Warnung und dem Unterschied zwischen privater Kleinmenge und Fachbetrieb.",
    kategorie: "Ratgeber Asbest",
    datePublished: "2026-06-11",
    dateModified: "2026-06-11",
    author: "Asbesta Fachredaktion",
    authorRole: "Fachbetrieb mit Sachkunde nach TRGS 519",
    lesezeitMin: 12,
    heroImage: ratgeberFigure("welleternit-ausbauen"),
    heroAlt: "Arbeiter in Schutzkleidung verpackt abgebaute Asbestzement-Wellplatten staubdicht in einen gekennzeichneten Big Bag",
    faqs: [
      {
        "frage": "Welcher Abfallschlüssel gilt für Asbest?",
        "antwort": "Asbesthaltige Baustoffe wie Asbestzement-Platten von Dach und Fassade werden unter dem Abfallschlüssel AVV 17 06 05* geführt; das Sternchen kennzeichnet einen gefährlichen Abfall. Asbesthaltige Dämmmaterialien, etwa schwach gebundene Dämmungen, laufen unter AVV 17 06 01*. Diese Deklaration muss auf den Begleitpapieren stehen und bestimmt, auf welcher Deponie der Abfall angenommen wird. Welcher Schlüssel im Einzelfall gilt, klärt zuverlässig eine Materialanalyse im Labor."
      },
      {
        "frage": "Darf ich Asbest in den Bauschuttcontainer oder Hausmüll werfen?",
        "antwort": "Nein, auf keinen Fall. Asbest ist gefährlicher Abfall und gehört weder in den Hausmüll noch in einen normalen Bauschutt- oder Mischabfallcontainer. Eine einzelne Asbestplatte verunreinigt die gesamte Containerladung, die dann kostenpflichtig als Sonderabfall behandelt werden muss. Die illegale Entsorgung ist eine Ordnungswidrigkeit und kann je nach Bundesland und Menge Bußgelder im vier- bis fünfstelligen Bereich nach sich ziehen."
      },
      {
        "frage": "Wie muss Asbest für die Entsorgung verpackt werden?",
        "antwort": "Asbesthaltige Abfälle müssen staubdicht in zugelassenen, gekennzeichneten Behältnissen verpackt werden – in der Regel in reißfesten Asbest-Big-Bags oder in doppelter, verklebter PE-Folie ab 0,2 mm Stärke. Jede Verpackung muss den Warnhinweis Asbest tragen, sonst verweigert die Deponie die Annahme. Die Platten werden dabei möglichst zerstörungsfrei ausgebaut und nicht gebrochen, vorhandener Staub wird zuvor mit Bindemitteln gebunden. Für private Kleinmengen schreiben kommunale Annahmestellen spezielle Asbestsäcke vor."
      },
      {
        "frage": "Kann ich kleine Mengen Asbest selbst zum Wertstoffhof bringen?",
        "antwort": "In vielen Kommunen ja, aber nur unter strengen Bedingungen. Kleinmengen fest gebundener Asbestzement-Abfälle werden meist nur nach vorheriger Voranmeldung, in zugelassenen und gekennzeichneten Asbestsäcken und in begrenzter Menge angenommen. Lose, unverpackte Platten oder volle Anhänger lehnen die Annahmestellen ab. Da die Regeln je nach Entsorgungsträger unterschiedlich sind, sollten Sie vorab bei Ihrem örtlichen Abfallwirtschaftsbetrieb nachfragen. Schon das Abnehmen muss staubarm und ohne Beschädigung erfolgen."
      },
      {
        "frage": "Was kostet die Entsorgung von Asbest?",
        "antwort": "Die Kosten setzen sich aus Ausbau, Verpackung, Transport und Deponiegebühr zusammen. Als grobe Orientierung liegt die Deponiegebühr für asbesthaltigen Abfall (AVV 17 06 05*) bei rund 100 bis 300 € pro Tonne, zugelassene Big Bags kosten etwa 20 bis 60 € pro Stück, der Ausbau von Asbestzement etwa 35 bis 100 € pro Quadratmeter. Für ein Einfamilienhaus-Dach von rund 120 m² liegen die Gesamtkosten häufig zwischen 6.000 und 15.000 €. Den verbindlichen Preis nennen wir als Festpreis nach einer kostenlosen Besichtigung."
      },
      {
        "frage": "Was ist ein Entsorgungsnachweis und warum brauche ich ihn?",
        "antwort": "Der Entsorgungsnachweis dokumentiert lückenlos, dass die asbesthaltigen Abfälle korrekt deklariert, transportiert und auf einer zugelassenen Deponie abgelagert wurden. Bei gefährlichen Abfällen begleiten Begleit- und Übernahmescheine den Weg vom Erzeuger bis zur Entsorgungsanlage. Für Sie als Eigentümer ist der Nachweis ein Beleg für die rechtskonforme Entsorgung, ein Vertrauensvorteil beim Hausverkauf und ein belastbares Dokument gegenüber Behörden und Versicherung. Ein Fachbetrieb stellt Ihnen diesen Nachweis nach Abschluss aus."
      },
      {
        "frage": "Muss die Asbestentsorgung angemeldet werden?",
        "antwort": "Ja, je nach Fall auf unterschiedliche Weise. Private Kleinmengen müssen vorab bei der kommunalen Annahmestelle angemeldet werden. Sanierungs- und Abbrucharbeiten mit Asbest sind der zuständigen Behörde – in NRW meist der Bezirksregierung bzw. dem Amt für Arbeitsschutz – in der Regel mindestens sieben Tage vor Beginn anzuzeigen. Zusätzlich wird die Anlieferung an der Deponie vorab angemeldet. Diese behördlichen Schritte und die korrekte Deklaration übernimmt der Fachbetrieb vollständig für Sie."
      }
    ],
  },
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

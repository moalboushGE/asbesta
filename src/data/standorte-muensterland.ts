/** Münsterland-Standorte (Borken, Dülmen, Coesfeld, Ahaus, Bocholt) + 9 Kern-Kombis je Stadt.
 *  Generiert aus dem Content-Workflow (2026-06-18). Gemerged in standorteDetail (standorte-detail.ts)
 *  und kombiDetail (kombi-detail.ts) via Spread. Zustaendige Behoerde: Bezirksregierung Münster. */
import type { StandortDetail } from './standorte-detail';
import type { KombiDetail } from './kombi-detail';

export const muensterlandStandortDetail: Record<string, StandortDetail> = {
  borken: {
    metaTitle: 'Asbestsanierung Borken | Asbesta',
    metaDescription:
      'Asbest- und Schadstoffsanierung in Borken nach TRGS 519: Materialanalyse, sichere Entsorgung, Freimessung. Fachbetrieb aus Marl, Festpreis nach Besichtigung.',
    heroIntro:
      'Sie planen in Borken eine Sanierung, einen Umbau oder Abriss und vermuten Asbest oder andere Schadstoffe im Gebäude? Asbesta ist ein inhabergeführter Fachbetrieb für Schadstoffsanierung mit Sitz in Marl, sachkundig nach TRGS 519 und 524 und in ganz NRW im Einsatz. Wir kommen für die kostenlose Besichtigung rund 50 km über die A31 zu Ihnen in den Kreis Borken und sagen Ihnen ehrlich, was wirklich zu tun ist.',
    anfahrt:
      'Von unserem Sitz in Marl erreichen wir Borken rund 50 km über die A31, sodass wir Termine im gesamten Stadtgebiet und in den Ortsteilen zuverlässig wahrnehmen.',
    lokalKontext: [
      'Borken im westlichen Münsterland ist ländlich und mittelständisch geprägt: Neben der historischen Innenstadt bestimmen Hofstellen, Stallungen und landwirtschaftliche Nebengebäude in Weseke, Burlo, Marbeck und Rhedebrügge das Bild. Gerade auf diesen Wirtschaftsgebäuden aus der Zeit vor dem Asbest-Totalverbot 1993 finden sich häufig Asbestzement-Wellplatten auf Dächern von Scheunen, Schuppen und Carports. Vor jedem Eingriff steht bei uns die Materialanalyse im akkreditierten Labor: Erst wenn klar ist, welcher Schadstoff in welcher Menge vorliegt, planen wir die fachgerechte Sanierung nach TRGS 519.',
      'Die Wohnhäuser in der Innenstadt sowie in Gemen mit seiner Wasserburg wurden über Jahrzehnte mehrfach modernisiert. Typische Funde sind hier Floor-Flex-Platten und schwarzer Bitumenkleber unter alten Bodenbelägen sowie asbesthaltige Fliesen- und Spachtelmassen. Diese Materialien sind unauffällig, solange sie unbeschädigt bleiben, setzen aber beim Bohren, Brechen oder Herausreißen Fasern frei. Wir nehmen solche Bodenaufbauten staubarm und unter Unterdruck zurück, mit Schwarz-Weiß-Schleusen und geprüften Verfahren, damit weder Bewohner noch Nachbarschaft gefährdet werden.',
      'In den Nachkriegssiedlungen und den dörflich geprägten Ortslagen wie Hoxfeld, Grütlohn und Borkenwirthe treffen wir neben Asbest auf weitere Schadstoffe. Künstliche Mineralfasern (KMF) aus alter Mineralwolle in Dach- und Geschossdämmungen behandeln wir nach TRGS 521, PAK aus Teerklebern, Parkettpech und alten Dachbahnen nach TRGS 524 und 551. KMF und PAK sind ausdrücklich kein Asbest – wir grenzen die Stoffe per Analyse sauber ab und wählen für jeden das passende Schutz- und Entsorgungskonzept.',
      'Für asbestbezogene Arbeiten ist in Borken die Bezirksregierung Münster als zuständige Arbeitsschutzbehörde maßgeblich. Die gesetzlich vorgeschriebene objektbezogene Anzeige nach TRGS 519 reichen wir dort fristgerecht ein, bevor die Sanierung beginnt. Der asbesthaltige Abfall wird staubdicht verpackt und unter dem Abfallschlüssel AVV 17 06 05* entsorgt, zum Abschluss erfolgt die Freimessung nach VDI 3492. So erhalten Sie als Eigentümer, Landwirt oder Verwalter eine vollständige, lückenlose Dokumentation des gesamten Ablaufs.',
    ],
    stadtteile: [
      'Innenstadt',
      'Gemen',
      'Weseke',
      'Burlo',
      'Marbeck',
      'Grütlohn',
      'Hoxfeld',
      'Borkenwirthe',
      'Rhedebrügge',
    ],
    localFaqs: [
      {
        frage: 'Welche Behörde ist in Borken für die Asbest-Anzeige zuständig?',
        antwort:
          'Für die objektbezogene Anzeige asbesthaltiger Arbeiten nach TRGS 519 ist in Borken die Bezirksregierung Münster als Arbeitsschutzbehörde zuständig. Diese Anzeige reichen wir vor Beginn der Sanierung fristgerecht ein. Sie müssen sich darum nicht selbst kümmern – wir übernehmen die gesamte behördliche Abwicklung für Sie.',
      },
      {
        frage: 'Ist Asbesta als Asbestsanierer in Borken vor Ort ansässig?',
        antwort:
          'Nein, unser Firmensitz ist in Marl. Wir sind jedoch in ganz NRW und damit regelmäßig im westlichen Münsterland tätig. Borken erreichen wir rund 50 km über die A31. Für die kostenlose Besichtigung und die spätere Sanierung kommen wir zuverlässig zu Ihrem Objekt im Kreis Borken, ob in der Innenstadt, in Gemen oder in Weseke.',
      },
      {
        frage: 'Wir haben in Weseke ein altes Scheunendach aus Wellplatten – ist das Asbest?',
        antwort:
          'Auf landwirtschaftlichen Nebengebäuden in Weseke, Burlo oder Marbeck stammen Wellplatten oft aus der Zeit vor 1993 und bestehen häufig aus Asbestzement. Sicherheit gibt nur eine Materialanalyse im Labor. Wir prüfen das Dach bei der kostenlosen Besichtigung, entnehmen bei Bedarf fachgerecht eine Probe und demontieren die Platten anschließend zerstörungsfrei nach TRGS 519.',
      },
      {
        frage: 'Behandeln Sie in Borken auch KMF und PAK, nicht nur Asbest?',
        antwort:
          'Ja. Neben Asbest sanieren wir in Borken auch künstliche Mineralfasern (KMF) aus alter Mineralwolle nach TRGS 521 sowie PAK-haltige Teer- und Parkettkleber nach TRGS 524 und 551. KMF und PAK sind kein Asbest, erfordern aber ebenfalls geschützte Verfahren. Wir grenzen die Stoffe per Analyse klar ab und entsorgen jeden fachgerecht und getrennt.',
      },
      {
        frage: 'Was kostet eine Asbestsanierung in Borken?',
        antwort:
          'Die Kosten hängen von Material, Menge, Zugänglichkeit und Entsorgung ab und lassen sich nicht pauschal nennen. Kleinere Maßnahmen beginnen oft im niedrigen vierstelligen Bereich. Nach einer kostenlosen Besichtigung in Borken erhalten Sie von uns einen verbindlichen Festpreis ohne versteckte Nachträge, damit Sie sicher kalkulieren können.',
      },
    ],
  },
  duelmen: {
    metaTitle: 'Asbestsanierung Dülmen | Asbesta',
    metaDescription:
      'Asbest- und Schadstoffsanierung in Dülmen nach TRGS 519. Asbesta aus Marl: Analyse, sichere Entsorgung, Festpreis nach kostenloser Besichtigung.',
    heroIntro:
      'Sie planen in Dülmen einen Umbau, eine Sanierung oder einen Abriss und vermuten Asbest oder andere Schadstoffe im Gebäude? Asbesta ist ein inhabergeführter Fachbetrieb mit Sachkunde nach TRGS 519 und 524, der von Marl aus in ganz NRW und damit auch im Kreis Coesfeld für Sie tätig ist. Von unserem Sitz sind es rund 30 km über die A43 bis zu Ihnen, sodass wir Termine für die kostenlose Besichtigung zuverlässig wahrnehmen und Ihnen ehrlich sagen, was wirklich zu tun ist.',
    anfahrt:
      'Von unserem Sitz in Marl erreichen wir Dülmen über die A43 in rund 30 km, sodass wir Besichtigung und Sanierung im gesamten Stadtgebiet zuverlässig durchführen können.',
    lokalKontext: [
      'Dülmen ist eine münsterländische Stadt mit gewachsener Innenstadt und ländlich geprägten Ortschaften wie Buldern, Hiddingsel und Hausdülmen. Viele Wohnhäuser, Hofstellen und Nebengebäude stammen aus der Zeit vor dem Asbest-Totalverbot von 1993. Gerade in diesen Gebäuden stoßen Eigentümer bei Modernisierungen häufig auf asbesthaltige Materialien wie Floor-Flex-Platten und schwarzen Bitumenkleber unter alten Bodenbelägen. Vor jeder Maßnahme entnehmen wir eine Materialprobe und lassen sie im akkreditierten Labor analysieren, denn nur eine gesicherte Analyse zeigt, ob und welche Sanierung nach TRGS 519 nötig ist.',
      'Die landwirtschaftliche Prägung des Dülmener Umlands hinterlässt eine Bausubstanz mit vielen Asbestzement-Produkten. Auf Scheunen, Ställen, Carports und Nebengebäuden in Merfeld, Rorup und Dernekamp finden sich oft Welleternit-Dächer, dazu Asbestzement-Fassadenplatten, -rohre und -kanäle. Diese fest gebundenen Materialien sind unauffällig, solange sie intakt bleiben, werden aber beim Bohren, Brechen oder Abriss zum Risiko. Wir demontieren Welleternit und Fassadenplatten zerstörungsfrei, verpacken sie vorschriftsmäßig und entsorgen sie über den Abfallschlüssel AVV 17 06 05* mit lückenlosem Nachweis.',
      'In den Nachkriegsbauten der 1950er- bis 1980er-Jahre, die rund um die Dülmener Innenstadt und in Hausdülmen zahlreich stehen, treffen wir neben Asbest oft auf künstliche Mineralfasern in alten Dämmungen sowie auf PAK in Teerklebern, Parkettpech und alten Dachbahnen. Alte Mineralwolle wird nach TRGS 521 behandelt, PAK nach TRGS 524 und 551 - beides ist ausdrücklich kein Asbest, erfordert aber eine ebenso fachgerechte und getrennte Vorgehensweise. Wir grenzen die Schadstoffe sauber ab, damit Sie genau wissen, womit Sie es zu tun haben, und behandeln jeden Stoff separat.',
      'Dülmen gehört zum Kreis Coesfeld, und die zuständige Arbeitsschutzbehörde ist hier die Bezirksregierung Münster. Jede anzeigepflichtige Asbestsanierung melden wir vor Arbeitsbeginn objektbezogen nach TRGS 519 dort an. Bei größeren Arbeiten richten wir Schwarz-Weiß-Bereiche mit Unterdruckhaltung ein, arbeiten mit Personenschleusen und Feinstaubfiltern und schließen mit einer Freimessung nach VDI 3492 ab. So bleibt die Belastung für Bewohner und nachfolgende Gewerke minimal, und Sie erhalten am Ende eine prüffähige Dokumentation für Bauamt, Käufer oder Versicherung.',
    ],
    stadtteile: [
      'Innenstadt',
      'Buldern',
      'Hiddingsel',
      'Hausdülmen',
      'Merfeld',
      'Rorup',
      'Dernekamp',
    ],
    localFaqs: [
      {
        frage: 'Arbeitet Asbesta auch in den ländlichen Ortschaften rund um Dülmen?',
        antwort:
          'Ja. Wir sind nicht nur in der Dülmener Innenstadt, sondern auch in Buldern, Hiddingsel, Hausdülmen, Merfeld, Rorup und Dernekamp im Einsatz. Gerade Hofstellen und Nebengebäude im Umland tragen oft Welleternit-Dächer und Asbestzement-Verkleidungen. Wir planen Anfahrt, Abschottung und Abtransport vorab so, dass auch auf abgelegenen Grundstücken staubarm und sicher gearbeitet wird. Bei der kostenlosen Besichtigung klären wir die Gegebenheiten direkt vor Ort.',
      },
      {
        frage: 'Welche Behörde ist in Dülmen für die Asbest-Anzeige zuständig?',
        antwort:
          'Dülmen gehört zum Kreis Coesfeld, die zuständige Arbeitsschutzbehörde ist die Bezirksregierung Münster. Jede anzeigepflichtige Asbestsanierung müssen wir vor Beginn der Arbeiten objektbezogen nach TRGS 519 dort anzeigen. Diese Anzeige sowie die gesamte behördliche Dokumentation übernehmen wir für Sie, sodass Ihre Sanierung in Dülmen rechtssicher und nachweisbar abläuft.',
      },
      {
        frage:
          'Mein Altbau in der Dülmener Innenstadt hat alte Bodenbeläge - kann das Asbest sein?',
        antwort:
          'In Dülmener Gebäuden aus der Zeit vor 1993 stecken häufig Floor-Flex-Platten oder schwarzer Bitumenkleber unter dem Belag, die asbesthaltig sein können. Sicherheit gibt nur eine Materialanalyse im akkreditierten Labor. Wir entnehmen die Probe fachgerecht, werten sie aus und besprechen mit Ihnen das weitere Vorgehen. Entnehmen Sie keine Proben selbst, ohne gesicherte Analyse wird in solchen Böden nicht gearbeitet.',
      },
      {
        frage:
          'Wir haben ein Welleternit-Dach auf der Scheune in Merfeld - übernimmt Asbesta die Entsorgung?',
        antwort:
          'Ja. Welleternit und Asbestzement, wie sie an Scheunen, Ställen und Nebengebäuden in Merfeld, Rorup oder Dernekamp vorkommen, sind fest gebunden und solange unauffällig, wie sie intakt bleiben. Beim Bearbeiten oder Abriss setzen sie jedoch Fasern frei. Wir demontieren die Platten zerstörungsfrei, verpacken sie staubdicht in Big-Bags und entsorgen sie als gefährlichen Abfall unter AVV 17 06 05* mit lückenlosem Entsorgungsnachweis.',
      },
      {
        frage: 'Was kostet eine Asbestsanierung in Dülmen?',
        antwort:
          'Der Preis hängt vom Material, der Menge und der Zugänglichkeit ab - eine kleine Bodenfläche mit Floor-Flex lässt sich anders kalkulieren als ein komplettes Welleternit-Dach auf einer Hofstelle. Verbindliche Zahlen nennen wir erst nach einer kostenlosen Besichtigung vor Ort, danach erhalten Sie einen Festpreis ohne versteckte Nachträge. So wissen Sie vorab genau, womit Sie rechnen.',
      },
    ],
  },
  coesfeld: {
    metaTitle: 'Asbestsanierung Coesfeld | Asbesta',
    metaDescription:
      'Asbest- und Schadstoffsanierung in Coesfeld nach TRGS 519. Asbesta aus Marl: Materialanalyse, sichere Entsorgung, Festpreis nach Besichtigung.',
    heroIntro:
      'Sie planen in Coesfeld eine Sanierung, einen Umbau oder Abriss und vermuten Asbest oder andere Schadstoffe in Ihrem Gebäude? Asbesta ist ein inhabergeführter Fachbetrieb für Schadstoffsanierung mit Sitz in Marl und sachkundig nach TRGS 519 und 524 in ganz NRW tätig, also auch in der Kreisstadt im westlichen Münsterland. Von Marl erreichen wir Sie über rund 40 km über die B58 und A43 und sagen Ihnen bei der kostenlosen Besichtigung ehrlich, was wirklich zu tun ist.',
    anfahrt:
      'Von unserem Sitz in Marl erreichen wir Coesfeld rund 40 km über die B58 und A43, sodass wir Besichtigung und Sanierung im gesamten Kreis Coesfeld zuverlässig durchführen.',
    lokalKontext: [
      'Coesfeld ist eine im Zweiten Weltkrieg stark zerstörte und anschließend wieder aufgebaute Kreisstadt, deren Innenstadt und die umliegenden Wohnquartiere überwiegend aus den Jahrzehnten zwischen 1950 und 1990 stammen. Genau in dieser Bauphase, also vor dem Asbest-Totalverbot von 1993, wurden asbesthaltige Materialien in großem Umfang verbaut. In den Wohngebäuden rund um die Innenstadt sowie in Lette und Stockum stoßen wir bei Modernisierungen häufig auf Floor-Flex-Platten und schwarzen Bitumenkleber unter alten Bodenbelägen. Vor jeder Maßnahme entnehmen wir eine Materialprobe und lassen sie im akkreditierten Labor untersuchen, denn nur eine gesicherte Analyse zeigt, ob und welche Sanierung nach TRGS 519 nötig ist.',
      'Das landwirtschaftlich geprägte Umland mit den Bauerschaften und Außenbereichen von Goxel, Flamschen, Harle und Sirksfeld bringt eine ganz eigene Bausubstanz mit. Auf Höfen, Scheunen, Stallgebäuden und Nebengebäuden finden sich sehr oft Asbestzement-Wellplatten als Dacheindeckung sowie Asbestzement-Fassadenplatten und alte Faserzementrohre. Solche fest gebundenen Asbestprodukte sind unauffällig, solange sie intakt bleiben, werden aber beim Bohren, Sägen, Brechen oder Abriss zum Risiko. Wir demontieren Welleternit zerstörungsfrei, verpacken die Platten staubdicht und entsorgen sie als gefährlichen Abfall unter dem Abfallschlüssel AVV 17 06 05* mit lückenlosem Nachweis.',
      'In den Nachkriegs- und Siedlungsbauten der 1960er- bis 1980er-Jahre treffen wir neben Asbest regelmäßig auf künstliche Mineralfasern in alten Dämmungen sowie auf PAK in Teerklebern, Parkettpech und alten Dachbahnen. Alte Mineralwolle (KMF) wird nach TRGS 521 behandelt, PAK nach TRGS 524 und 551 - beides ist ausdrücklich kein Asbest, erfordert aber eine ebenso fachgerechte und getrennte Vorgehensweise. Wir grenzen die einzelnen Schadstoffgruppen sauber voneinander ab, damit Sie genau wissen, womit Sie es zu tun haben und welches Regelwerk gilt.',
      'Jede anzeigepflichtige Asbestsanierung in Coesfeld melden wir vor Arbeitsbeginn objektbezogen bei der zuständigen Arbeitsschutzbehörde an - das ist für den Kreis Coesfeld die Bezirksregierung Münster. Bei schwach gebundenem Asbest richten wir einen abgeschotteten Schwarzbereich mit Unterdruckhaltung und Personenschleuse ein, arbeiten mit Feinstaubfiltern und schließen mit einer Freimessung nach VDI 3492 ab. So bleibt die Belastung für Bewohner, Nachbarn und nachfolgende Gewerke minimal, und Sie erhalten am Ende eine prüffähige Dokumentation für Bauamt, Käufer oder Versicherung.',
    ],
    stadtteile: ['Innenstadt', 'Lette', 'Goxel', 'Stockum', 'Flamschen', 'Harle', 'Sirksfeld'],
    localFaqs: [
      {
        frage: 'Bietet Asbesta die Asbestsanierung auch in Coesfeld an?',
        antwort:
          'Ja. Asbesta hat seinen Sitz in Marl und ist als inhabergeführter, sachkundiger Fachbetrieb nach TRGS 519 und 524 in ganz NRW tätig, also auch im Kreis Coesfeld. Coesfeld erreichen wir rund 40 km über die B58 und A43. Ein eigenes Büro vor Ort haben wir nicht, doch wir kommen für die kostenlose Besichtigung und die Sanierung zuverlässig zu Ihnen, ob in die Innenstadt, nach Lette oder zu einem Hof in Goxel oder Flamschen.',
      },
      {
        frage: 'Welche Behörde ist in Coesfeld für die Asbest-Anzeige zuständig?',
        antwort:
          'Für den Kreis Coesfeld ist die Bezirksregierung Münster die zuständige Arbeitsschutzbehörde. Dort melden wir jede anzeigepflichtige Asbestsanierung vor Beginn der Arbeiten objektbezogen nach TRGS 519 an. Diese Anzeige übernehmen wir vollständig für Sie und halten die gesetzlichen Fristen ein, sodass Sie sich um die behördlichen Formalitäten nicht selbst kümmern müssen.',
      },
      {
        frage: 'Mein Hof im Außenbereich von Coesfeld hat ein Asbestdach - was ist zu tun?',
        antwort:
          'Auf landwirtschaftlichen Gebäuden in Goxel, Flamschen, Harle oder Sirksfeld sind Asbestzement-Wellplatten als Dacheindeckung sehr verbreitet. Solange sie intakt sind, geben sie kaum Fasern ab, beim Bearbeiten oder Abriss aber schon. Wir demontieren die Platten zerstörungsfrei, verpacken sie in Big-Bags und entsorgen sie als gefährlichen Abfall unter AVV 17 06 05*. Bei der kostenlosen Besichtigung klären wir Zustand, Fläche und Ablauf direkt vor Ort.',
      },
      {
        frage: 'Mein Coesfelder Haus hat alte Bodenbeläge - kann das Asbest sein?',
        antwort:
          'In Coesfelder Wohngebäuden aus der Zeit vor 1993 stecken häufig Floor-Flex-Platten oder schwarzer Bitumenkleber unter dem Belag, die asbesthaltig sein können. Sicherheit gibt nur eine Materialanalyse im akkreditierten Labor. Wir entnehmen die Probe fachgerecht, werten sie aus und besprechen mit Ihnen das weitere Vorgehen. Entnehmen Sie bitte keine Proben selbst, denn dabei können Fasern freigesetzt werden.',
      },
      {
        frage: 'Was kostet eine Asbestsanierung in Coesfeld?',
        antwort:
          'Der Preis hängt von Material, Menge und Zugänglichkeit ab. Eine kleinere Bodensanierung lässt sich anders kalkulieren als ein komplettes Welleternit-Dach auf einer Scheune. Verbindliche Zahlen nennen wir erst nach einer kostenlosen Besichtigung vor Ort als Festpreis. So wissen Sie vorab genau, womit Sie rechnen, ohne versteckte Nachträge.',
      },
    ],
  },
  ahaus: {
    metaTitle: 'Asbestsanierung Ahaus | Asbesta',
    metaDescription:
      'Asbest- und Schadstoffsanierung in Ahaus nach TRGS 519. Asbesta aus Marl: Materialanalyse, sichere Entsorgung, Festpreis nach Besichtigung.',
    heroIntro:
      'Sie planen in Ahaus eine Sanierung, einen Umbau oder Abriss und vermuten Asbest oder andere Schadstoffe im Gebäude? Asbesta ist ein sachkundiger Fachbetrieb nach TRGS 519 und 524 mit Sitz in Marl und in ganz NRW tätig, also auch im Westmünsterland. Wir fahren rund 65 km über die A31 zu Ihnen ins Kreis-Borken-Gebiet und sagen Ihnen bei der kostenlosen Besichtigung ehrlich, was wirklich zu tun ist.',
    anfahrt:
      'Von unserem Sitz in Marl erreichen wir Ahaus rund 65 km über die A31, sodass wir Besichtigungs- und Sanierungstermine im gesamten Stadtgebiet zuverlässig wahrnehmen.',
    lokalKontext: [
      'Ahaus liegt im Westmünsterland im Kreis Borken und ist von einer ländlich-städtischen Mischbebauung geprägt. Rund um die Innenstadt und in den Ortsteilen Wüllen, Wessum und Ottenstein stehen viele Wohnhäuser, Hofstellen und landwirtschaftliche Nebengebäude aus der Zeit vor dem Asbest-Totalverbot von 1993. In dieser Bausubstanz finden sich häufig asbesthaltige Materialien wie Floor-Flex-Platten und schwarzer Bitumenkleber unter alten Bodenbelägen. Vor jeder Maßnahme entnehmen wir eine Materialprobe und lassen sie im akkreditierten Labor analysieren, denn nur ein gesicherter Befund zeigt, ob und welche Sanierung nach TRGS 519 nötig ist.',
      'Die münsterländische Prägung der Stadt zeigt sich besonders bei Dächern und Fassaden. Auf Scheunen, Stallungen, Garagen und Schuppen in Alstätte, Graes und Averbeck liegen oft noch Asbestzement-Wellplatten, sogenannter Welleternit, dazu kommen Asbestzement-Fassadenplatten und -schindeln an älteren Wohn- und Wirtschaftsgebäuden. Solche fest gebundenen Asbestprodukte sind unauffällig, solange sie unversehrt bleiben, werden aber beim Bohren, Brechen oder Abriss zum Risiko. Wir demontieren Welleternit und Fassadenplatten zerstörungsfrei, verpacken sie staubdicht in Big-Bags und entsorgen sie als gefährlichen Abfall unter dem Abfallschlüssel AVV 17 06 05*.',
      'In den Nachkriegs- und Siedlungsbauten der 1950er- bis 1980er-Jahre, wie sie in der Innenstadt und in Wüllen zahlreich stehen, treffen wir zudem oft auf künstliche Mineralfasern in alten Dämmungen sowie auf PAK in Teerklebern, Parkettpech und alten Dachbahnen. KMF behandeln wir nach TRGS 521, PAK nach TRGS 524 und 551 - beides ist ausdrücklich kein Asbest, erfordert aber eine ebenso fachgerechte und getrennte Vorgehensweise. Wir grenzen die einzelnen Schadstoffe sauber ab, damit Sie genau wissen, womit Sie es im jeweiligen Bauteil zu tun haben.',
      'Jede anzeigepflichtige Asbestsanierung in Ahaus melden wir vor Arbeitsbeginn objektbezogen bei der zuständigen Arbeitsschutzbehörde an. Für den Kreis Borken und damit für Ahaus ist das die Bezirksregierung Münster. Bei größeren Innenarbeiten richten wir abgeschottete Schwarzbereiche mit Unterdruckhaltung und Personenschleuse ein, arbeiten mit Feinstaubfiltern und schließen mit einer Freimessung nach VDI 3492 ab. So bleibt die Belastung für Bewohner und nachfolgende Gewerke minimal, und Sie erhalten eine prüffähige Dokumentation für Bauamt, Käufer oder Versicherung.',
    ],
    stadtteile: ['Innenstadt', 'Alstätte', 'Graes', 'Ottenstein', 'Wessum', 'Wüllen', 'Averbeck'],
    localFaqs: [
      {
        frage: 'Ist Asbesta auch in Ahaus und den Ortsteilen im Westmünsterland im Einsatz?',
        antwort:
          'Ja. Asbesta hat seinen Sitz in Marl und ist als sachkundiger Fachbetrieb nach TRGS 519 und 524 in ganz NRW tätig, also auch im Kreis Borken. Ahaus erreichen wir rund 65 km über die A31. Ein eigenes Büro vor Ort haben wir nicht, doch wir kommen für Besichtigung und Sanierung zuverlässig zu Ihnen in die Innenstadt, nach Wüllen, Wessum, Ottenstein oder Alstätte.',
      },
      {
        frage: 'Welche Behörde ist in Ahaus für die Asbest-Anzeige zuständig?',
        antwort:
          'Für Ahaus im Kreis Borken ist die Bezirksregierung Münster die zuständige Arbeitsschutzbehörde. Jede anzeigepflichtige Asbestsanierung nach TRGS 519 muss dort vor Beginn der Arbeiten objektbezogen angezeigt werden. Diese Anzeige sowie die behördliche Dokumentation übernehmen wir vollständig für Sie, sodass Ihre Sanierung in Ahaus von Anfang an rechtssicher und nachweisbar abläuft.',
      },
      {
        frage: 'Mein Hof in Wessum hat ein altes Welleternit-Dach - wie geht Asbesta vor?',
        antwort:
          'Auf Scheunen, Ställen und Schuppen im Münsterland liegen häufig Asbestzement-Wellplatten. Diese sind fest gebunden und solange unauffällig, wie sie intakt bleiben, setzen beim Brechen oder Hochdruckreinigen aber Fasern frei. Wir demontieren das Welleternit zerstörungsfrei, verpacken es staubdicht in Big-Bags und entsorgen es als gefährlichen Abfall unter AVV 17 06 05* mit lückenlosem Nachweis. Bei unklarem Material klären wir per Probe vorab, ob überhaupt Asbest vorliegt.',
      },
      {
        frage: 'In meinem Altbau in der Innenstadt liegen alte Bodenbeläge - kann das Asbest sein?',
        antwort:
          'In Ahauser Gebäuden aus der Zeit vor 1993 stecken häufig Floor-Flex-Platten oder schwarzer Bitumenkleber unter dem Belag, die asbesthaltig sein können. Sicherheit gibt nur eine Materialanalyse im akkreditierten Labor. Wir entnehmen die Probe fachgerecht, werten sie aus und besprechen mit Ihnen das weitere Vorgehen. Entnehmen Sie keine Proben selbst und beginnen Sie ohne Befund keine Arbeiten an solchen Böden.',
      },
      {
        frage: 'Was kostet eine Asbestsanierung in Ahaus?',
        antwort:
          'Der Preis hängt von Material, Menge und Zugänglichkeit ab. Eine kleinere Floor-Flex-Bodenfläche lässt sich anders kalkulieren als ein komplettes Welleternit-Dach auf einer Scheune in Graes oder Averbeck. Seriöse Zahlen nennen wir erst nach einer kostenlosen Besichtigung vor Ort als Festpreis. So wissen Sie vorab genau, womit Sie rechnen, ohne versteckte Nachträge.',
      },
    ],
  },
  bocholt: {
    metaTitle: 'Asbestsanierung Bocholt | Asbesta',
    metaDescription:
      'Asbest- und Schadstoffsanierung in Bocholt nach TRGS 519: Materialanalyse, sichere Entsorgung, Festpreis nach kostenloser Besichtigung. Jetzt anfragen.',
    heroIntro:
      'Sie planen in Bocholt eine Sanierung oder einen Umbau und vermuten Asbest oder andere Schadstoffe im Gebäude? Asbesta ist ein sachkundiger Fachbetrieb für Schadstoffsanierung mit Sitz in Marl und in ganz NRW tätig, also auch im Kreis Borken am westlichen Münsterland. Wir kommen rund 55 km über die A31 zur kostenlosen Besichtigung zu Ihnen nach Bocholt und sagen Ihnen ehrlich, was wirklich zu tun ist.',
    anfahrt:
      'Von unserem Sitz in Marl erreichen wir Bocholt rund 55 km über die A31, sodass wir Termine im gesamten Stadtgebiet und in den Außenbezirken zuverlässig wahrnehmen.',
    lokalKontext: [
      'Bocholt liegt im Kreis Borken am westlichen Rand des Münsterlandes, dicht an der niederländischen Grenze. Die Stadt ist durch ihre Textilgeschichte geprägt: Rund um die Innenstadt und entlang der Aa stehen zahlreiche Wohn- und Geschäftshäuser sowie ehemalige Fabrikanten-Villen aus der Zeit vor dem Asbest-Totalverbot von 1993. In diesen Altbauten finden sich häufig asbesthaltige Materialien wie Floor-Flex-Platten und schwarzer Bitumenkleber unter alten Bodenbelägen. Vor jeder Maßnahme nehmen wir eine Materialprobe und lassen sie im akkreditierten Labor analysieren, denn nur eine gesicherte Analyse zeigt, ob und welche Sanierung nach TRGS 519 erforderlich ist.',
      'Das ehemalige Textil- und Industrieerbe Bocholts hinterlässt in Stadtteilen wie Mussum, Biemenhorst und entlang der alten Werksareale eine Bausubstanz mit Welleternit-Dächern und Asbestzement-Fassadenplatten. In den ländlich geprägten Ortsteilen Barlo, Hemden, Holtwick, Liedern und Spork prägen zudem landwirtschaftliche Nebengebäude, Scheunen und Schuppen mit Wellplattendächern das Bild. Solche fest gebundenen Asbestprodukte sind unauffällig, solange sie unversehrt sind, werden aber beim Bohren, Brechen oder Abriss zum Risiko. Wir demontieren Welleternit staubarm, verpacken die Platten vorschriftsmäßig und entsorgen sie als gefährlichen Abfall über zugelassene Annahmestellen mit lückenlosem Nachweis.',
      'In den Nachkriegsbauten der 1950er- bis 1980er-Jahre, die in Lowick, Stenern und im Bocholter Süden zahlreich stehen, treffen wir oft auf künstliche Mineralfasern in alten Dämmungen sowie auf PAK in Teerklebern, Parkettpech und alten Dachbahnen. KMF, also alte Glas- und Steinwolle, wird nach TRGS 521 behandelt, PAK nach TRGS 524 und 551 - beides ist ausdrücklich kein Asbest, erfordert aber eine ebenso fachgerechte und getrennte Vorgehensweise. Wir grenzen die Schadstoffe sauber voneinander ab, damit Sie genau wissen, womit Sie es zu tun haben.',
      'Jede anzeigepflichtige Asbestsanierung in Bocholt melden wir vor Arbeitsbeginn objektbezogen bei der zuständigen Arbeitsschutzbehörde an - das ist für den Kreis Borken die Bezirksregierung Münster. Bei größeren Arbeiten richten wir Schwarz-Weiß-Bereiche mit Unterdruckhaltung ein, arbeiten mit Personenschleusen und Feinstaubfiltern und dokumentieren jeden Schritt. So bleibt die Belastung für Anwohner und nachfolgende Gewerke minimal, und Sie erhalten am Ende eine prüffähige Dokumentation mit Freimessung nach VDI 3492 für Bauamt, Käufer oder Versicherung.',
    ],
    stadtteile: [
      'Innenstadt',
      'Biemenhorst',
      'Mussum',
      'Lowick',
      'Stenern',
      'Barlo',
      'Hemden',
      'Holtwick',
      'Liedern',
      'Suderwick',
    ],
    localFaqs: [
      {
        frage: 'Bietet Asbesta die Asbestsanierung auch in Bocholt an?',
        antwort:
          'Ja. Asbesta hat seinen Sitz in Marl und ist als sachkundiger Fachbetrieb nach TRGS 519 in ganz NRW tätig, auch im Kreis Borken. Bocholt erreichen wir rund 55 km über die A31. Ein Büro vor Ort haben wir nicht, doch wir kommen für Besichtigung und Sanierung zuverlässig zu Ihnen in die Innenstadt, nach Biemenhorst, Mussum oder in die Außenbezirke wie Barlo und Suderwick.',
      },
      {
        frage: 'Welche Behörde ist in Bocholt für die Asbest-Anzeige zuständig?',
        antwort:
          'Für Bocholt und den gesamten Kreis Borken ist die Bezirksregierung Münster die zuständige Arbeitsschutzbehörde. Dort melden wir jede anzeigepflichtige Asbestsanierung vor Beginn der Arbeiten objektbezogen nach TRGS 519 an. Diese Anzeige übernehmen wir vollständig für Sie, sodass alle gesetzlichen Fristen eingehalten werden und Sie sich um die behördlichen Formalitäten nicht selbst kümmern müssen.',
      },
      {
        frage: 'Mein Bocholter Altbau hat alte Bodenbeläge - kann das Asbest sein?',
        antwort:
          'In Bocholter Wohn- und Geschäftshäusern aus der Zeit vor 1993 stecken häufig Floor-Flex-Platten oder schwarzer Bitumenkleber unter dem Belag, die asbesthaltig sein können. Sicherheit gibt nur eine Materialanalyse im akkreditierten Labor. Wir entnehmen die Probe fachgerecht, werten sie aus und besprechen mit Ihnen das weitere Vorgehen - ohne Probe wird in solchen Böden nicht gearbeitet.',
      },
      {
        frage:
          'Wir haben ein altes Wellplattendach auf einer Scheune in Barlo oder Hemden - entsorgt Asbesta das?',
        antwort:
          'Ja. Gerade auf landwirtschaftlichen Nebengebäuden, Scheunen und Schuppen in den Bocholter Außenbezirken wie Barlo, Hemden, Holtwick oder Spork finden sich oft Welleternit- und Asbestzement-Dächer. Diese fest gebundenen Platten sind intakt unauffällig, setzen beim Brechen oder Abriss aber Fasern frei. Wir demontieren sie zerstörungsfrei und staubarm, verpacken sie in Big Bags und entsorgen sie als gefährlichen Abfall mit lückenlosem Nachweis.',
      },
      {
        frage: 'Was kostet eine Asbestsanierung in Bocholt?',
        antwort:
          'Der Preis hängt vom Material, der Menge und der Zugänglichkeit ab. Eine kleinere Bodensanierung wird anders kalkuliert als ein komplettes Welleternit-Dach auf einem Nebengebäude. Verbindliche Zahlen nennen wir erst nach einer kostenlosen Besichtigung vor Ort als Festpreis. So wissen Sie vorab genau, womit Sie rechnen, ohne versteckte Nachträge.',
      },
    ],
  },
};

export const muensterlandKombi: Record<string, KombiDetail> = {
  'asbestsanierung/borken': {
    leistung: 'asbestsanierung',
    stadt: 'borken',
    metaTitle: 'Asbestsanierung TRGS 519 Borken | Asbesta',
    metaDescription:
      'Asbestsanierung nach TRGS 519 in Borken: Schwarzbereich, Unterdruck, Personenschleuse und Freimessung VDI 3492. Festpreis nach kostenloser Besichtigung.',
    intro:
      'Asbesta saniert schwach gebundenen Asbest in Innenräumen in Borken nach den strengen Vorgaben der TRGS 519. Wir arbeiten als anzeigepflichtiger Fachbetrieb mit abgeschottetem Schwarzbereich, Unterdruckhaltung und kontrollierter Freimessung. Unser Sitz ist in Marl, von dort fahren wir rund 50 km über die A31 ins westliche Münsterland an.',
    lokalServiceKontext: [
      'Eine Asbestsanierung nach TRGS 519 in Borken beginnt bei uns immer mit einer kostenlosen Besichtigung vor Ort und einer Materialanalyse. Erst wenn ein Labor schwach gebundenen Asbest bestätigt, planen wir den anzeigepflichtigen Rückbau. Dafür richten wir einen abgeschotteten Schwarzbereich mit Unterdruckhaltung und Personenschleuse ein, damit keine Fasern in angrenzende Räume gelangen. Nach dem Rückbau erfolgt die Feinreinigung und die Freimessung nach VDI 3492, bevor der Bereich wieder freigegeben wird. So bleibt die Belastung für Bewohner und Nachbarn kontrolliert und nachweisbar.',
      'Borkens Bausubstanz ist von der Innenstadt, den Wohnlagen in Gemen und den dörflichen Ortsteilen geprägt. Schwach gebundener Asbest steckt in älteren Wohn- und Gewerbebauten oft in Spritzputzen, alten Dämmplatten oder Brandschutzverkleidungen im Innenraum, etwa in Heizungsräumen oder hinter Verkleidungen. Gerade in Gebäuden aus der Zeit vor dem Asbest-Totalverbot von 1993 ist eine sorgfältige Erkundung vor jedem Eingriff entscheidend, damit niemand unbemerkt Fasern freisetzt.',
      'Jede anzeigepflichtige Asbestsanierung in Borken muss objektbezogen bei der zuständigen Arbeitsschutzbehörde angezeigt werden – das ist hier die Bezirksregierung Münster. Diese Anzeige übernehmen wir für Sie und halten die gesetzlichen Fristen ein. Wichtig ist die saubere fachliche Abgrenzung: Floor-Flex-Platten und Bitumenkleber in Böden oder Welleternit an Dach und Fassade enthalten zwar Asbest, künstliche Mineralfasern in Dämmungen fallen dagegen unter die TRGS 521, PAK in alten Klebern und Teer unter die TRGS 524 und 551. KMF und PAK sind kein Asbest. Wir benennen jedes Material klar und wählen das passende Verfahren.',
    ],
    comboFaqs: [
      {
        frage: 'Ist eine Asbestsanierung in Borken immer anzeigepflichtig?',
        antwort:
          'Arbeiten an schwach gebundenem Asbest nach TRGS 519 sind anzeigepflichtig und müssen objektbezogen bei der Bezirksregierung Münster angezeigt werden. Diese Anzeige übernehmen wir für Sie und richten den abgeschotteten Schwarzbereich mit Unterdruck und Personenschleuse ein. So bleibt die Sanierung in der Innenstadt, in Gemen oder in Weseke rechtssicher und für alle Beteiligten nachvollziehbar dokumentiert.',
      },
      {
        frage: 'Woran erkenne ich schwach gebundenen Asbest in einem Borkener Altbau?',
        antwort:
          'Sicher erkennbar ist Asbest nur im Labor. In älteren Wohn- und Gewerbebauten in Borken stecken verdächtige Materialien oft in Spritzputzen, alten Dämmplatten oder Brandschutzverkleidungen. Wir nehmen bei der Besichtigung Proben und lassen sie analysieren. Erst nach dem Befund entscheiden wir über das Verfahren – so vermeiden Sie unnötige Eingriffe und unkontrollierte Faserfreisetzung im bewohnten Gebäude.',
      },
      {
        frage: 'Wie schnell ist Asbesta aus Marl in Borken vor Ort?',
        antwort:
          'Unser Sitz ist in Marl, von dort sind es rund 50 km über die A31 bis Borken – ein Termin ist meist kurzfristig möglich. Ein eigenes Büro vor Ort haben wir nicht, wir sind in ganz NRW tätig. Nach der kostenlosen Besichtigung erhalten Sie einen verbindlichen Festpreis. Die genannten Preise verstehen sich nur als grobe Orientierung und hängen von Material, Umfang und Zugänglichkeit ab.',
      },
    ],
  },
  'abbrucharbeiten/borken': {
    leistung: 'abbrucharbeiten',
    stadt: 'borken',
    metaTitle: 'Abbrucharbeiten Borken | Rückbau TRGS 519 | Asbesta',
    metaDescription:
      'Kontrollierter Abbruch und schadstoffgetrennter Rückbau in Borken nach Schadstofferkundung. Festpreis nach kostenloser Besichtigung. Jetzt anfragen.',
    intro:
      'Asbesta plant und führt kontrollierten Abbruch und Rückbau in Borken aus – von der Schadstofferkundung bis zum selektiven, schadstoffgetrennten Rückbau. Wir kommen aus Marl rund 50 km über die A31 ins westliche Münsterland und arbeiten nach TRGS 519, 521 und 524. Vor jedem Eingriff klären wir, welche Materialien verbaut sind und welche Stoffströme getrennt entsorgt werden müssen.',
    lokalServiceKontext: [
      'Ein kontrollierter Rückbau in Borken beginnt bei uns nicht mit dem Bagger, sondern mit der Schadstofferkundung. Wir erkunden das Objekt, entnehmen Materialproben und lassen sie analysieren, bevor irgendetwas bewegt wird. Erst wenn klar ist, ob Asbest, künstliche Mineralfasern oder PAK-belastete Kleber vorliegen, planen wir den selektiven Rückbau. Die belasteten Fraktionen werden zuerst und gesichert ausgebaut, die mineralischen Reststoffe danach separat. So bleiben die Stoffströme sauber getrennt und der Abtransport für Sie planbar.',
      'Borkens Bausubstanz ist gemischt: In der Innenstadt und in Gemen stehen ältere Wohnhäuser, in Weseke, Burlo, Marbeck und Rhedebrügge prägen Hofstellen, Scheunen und landwirtschaftliche Nebengebäude das Bild. In solchen Gebäuden finden sich häufig Floor-Flex-Platten und Bitumenkleber in Böden, Asbestzement-Wellplatten an Dächern von Stallungen und Schuppen sowie KMF-Dämmungen. Bei landwirtschaftlichen Anlagen mit großen Dachflächen planen wir die Erschließung und Logistik vor dem Rückbau gezielt mit ein, damit Schadstofftrennung und Abtransport ineinandergreifen.',
      'Asbest unterliegt seit dem Totalverbot 1993 strengen Regeln. Steht bei einem Abbruch in Borken asbesthaltiges Material an, erstatten wir die objektbezogene Anzeige nach TRGS 519 bei der zuständigen Arbeitsschutzbehörde, der Bezirksregierung Münster. KMF behandeln wir nach TRGS 521, PAK-belastete Teer- und Klebstoffreste nach TRGS 524 beziehungsweise 551 – beides ist kein Asbest, wird aber ebenso fachgerecht getrennt und entsorgt. Sie erhalten von uns eine verbindliche Dokumentation und einen klaren Ablauf für Ihr Objekt im Kreis Borken.',
    ],
    comboFaqs: [
      {
        frage: 'Wie läuft ein Abbruch bei einer alten Hofstelle in Weseke oder Marbeck ab?',
        antwort:
          'Zuerst erkunden wir die Schadstoffe, entnehmen Proben und lassen sie analysieren. Auf Hofstellen finden wir oft Asbestzement-Wellplatten auf Scheunen und Ställen, Floor-Flex-Böden oder Bitumenkleber. Belastete Materialien bauen wir gesichert und getrennt aus, danach folgt der mineralische Rückbau. Bei Asbest erstatten wir vorab die Anzeige nach TRGS 519 bei der Bezirksregierung Münster.',
      },
      {
        frage: 'Was kostet ein kontrollierter Rückbau in Borken?',
        antwort:
          'Eine seriöse Pauschale gibt es nicht: Der Preis hängt von Objektgröße, Schadstoffart und Zugänglichkeit ab – ein einzelnes Nebengebäude lässt sich anders kalkulieren als ein kompletter Hofkomplex. Verbindlich nennen wir den Festpreis erst nach einer kostenlosen Besichtigung vor Ort, danach gibt es keine versteckten Nachträge.',
      },
      {
        frage: 'Sind PAK und KMF dasselbe wie Asbest?',
        antwort:
          'Nein. Künstliche Mineralfasern (KMF) in Dämmungen und PAK in alten Teer- und Klebstoffresten sind eigene Schadstoffgruppen, die wir nach TRGS 521 beziehungsweise TRGS 524/551 behandeln. Asbest fällt unter TRGS 519. In vielen Borkener Bauten treten mehrere dieser Stoffe zusammen auf – deshalb klären wir sie bei der Erkundung sauber ab und trennen die Stoffströme im Rückbau konsequent.',
      },
    ],
  },
  'welleternit-ausbauen/borken': {
    leistung: 'welleternit-ausbauen',
    stadt: 'borken',
    metaTitle: 'Welleternit ausbauen in Borken | Asbesta',
    metaDescription:
      'Welleternit in Borken zerstörungsfrei ausbauen: Demontage asbesthaltiger Wellplatten nach TRGS 519, Big-Bag-Entsorgung. Jetzt Besichtigung anfragen.',
    intro:
      'Asbesta baut asbesthaltige Welleternit-Platten in Borken zerstörungsfrei aus – von Scheunendächern in Weseke bis zu Garagen und Nebengebäuden in Gemen und Marbeck. Als inhabergeführter Fachbetrieb mit Sitz in Marl reisen wir rund 50 km über die A31 an und übernehmen die staubarme Demontage samt fachgerechter Big-Bag-Entsorgung. Vor jeder Arbeit klären wir per Materialprobe, ob Asbest vorliegt.',
    lokalServiceKontext: [
      'Der Welleternit-Ausbau in Borken beginnt bei uns mit einer kostenlosen Besichtigung vor Ort. Da Welleternit fest gebundene Asbestzement-Wellplatten sind, dürfen sie weder gebrochen, hochdruckgereinigt noch überstrichen werden – das würde Fasern freisetzen. Stattdessen lösen wir die Platten zerstörungsfrei, indem wir die Befestigungen vorsichtig öffnen und die Platten einzeln abnehmen. Bei unklarem Material entnehmen wir vorab eine Probe zur Laboranalyse. Erst nach gesicherter Diagnose und freigegebener Anzeige planen wir den staubarmen Ausbau auf Ihrem Dach oder Nebengebäude.',
      'Borkens ländliche Bausubstanz prägt die Arbeit deutlich. In Weseke, Burlo, Marbeck und Rhedebrügge tragen viele Scheunen, Stallungen und Schuppen großflächige Welleternit-Dächer, während in der Innenstadt und in Gemen eher Garagen, Carports und kleinere Anbauten mit Wellplatten gedeckt sind. Gerade bei großen landwirtschaftlichen Dachflächen stimmen wir Anfahrt, Gerüst, Materialtransport und Big-Bag-Stellplatz frühzeitig ab, damit der Ausbau sicher, staubarm und im Zeitplan abläuft.',
      'Für die gesetzlich vorgeschriebene Asbest-Anzeige nach TRGS 519 ist in Borken die Bezirksregierung Münster die zuständige Arbeitsschutzbehörde. Diese Anzeige reichen wir vor Beginn der Arbeiten ein – das übernehmen wir für Sie. Die demontierten Welleternit-Platten verpacken wir staubdicht in Big-Bags und entsorgen sie als gefährlichen Abfall unter dem Abfallschlüssel AVV 17 06 05*. Sie erhalten die Entsorgungsnachweise lückenlos. So bleibt der gesamte Ablauf vom Ausbau bis zur Deponie rechtssicher dokumentiert, egal ob Ihr Objekt in Weseke, Gemen oder in der Innenstadt liegt.',
    ],
    comboFaqs: [
      {
        frage: 'Was kostet der Welleternit-Ausbau in Borken?',
        antwort:
          'Der Preis hängt von Plattenfläche, Dachhöhe und Zugänglichkeit ab – gerade bei großen Scheunendächern in Weseke oder Marbeck variiert der Aufwand stark. Als grobe Orientierung liegen kleinere Garagen- oder Schuppendächer im niedrigen vierstelligen Bereich inklusive Entsorgung. Den verbindlichen Festpreis nennen wir nach kostenloser Besichtigung vor Ort.',
      },
      {
        frage: 'Brauche ich für den Ausbau in Borken eine behördliche Anzeige?',
        antwort:
          'Ja. Arbeiten an asbesthaltigem Welleternit müssen vor Beginn nach TRGS 519 angezeigt werden. Zuständige Arbeitsschutzbehörde für Borken ist die Bezirksregierung Münster. Diese Anzeige übernehmen wir vollständig für Sie, sodass Ihr Projekt – ob Scheunendach im Außenbereich oder Garage in der Innenstadt – von Anfang an rechtssicher und ordnungsgemäß abläuft.',
      },
      {
        frage: 'Kann das Welleternit-Dach nicht einfach überstrichen werden?',
        antwort:
          'Nein. Überstreichen, Hochdruckreinigen oder Brechen von Welleternit ist unzulässig, weil dabei Asbestfasern freigesetzt werden. Seit dem Totalverbot 1993 ist nur der zerstörungsfreie Ausbau durch einen sachkundigen Fachbetrieb erlaubt. Wir demontieren die Platten staubarm nach TRGS 519 und entsorgen sie über Big-Bags fachgerecht – das ist in Borken die einzig zulässige und dauerhaft sichere Lösung.',
      },
    ],
  },
  'fassadenplatten-ausbauen/borken': {
    leistung: 'fassadenplatten-ausbauen',
    stadt: 'borken',
    metaTitle: 'Fassadenplatten ausbauen Borken | Asbesta',
    metaDescription:
      'Asbesthaltige Fassadenplatten in Borken fachgerecht ausbauen nach TRGS 519, oft vor der Dämmung. Asbesta aus Marl. Kostenlose Besichtigung anfragen.',
    intro:
      'Asbestzement-Fassadenplatten und -schindeln an Borkener Gebäuden gehören kontrolliert demontiert, bevor eine neue Fassade entsteht. Asbesta baut diese Platten staubarm und nach TRGS 519 aus – von der Materialanalyse bis zur dokumentierten Entsorgung. Wir kommen aus Marl rund 50 km über die A31 und sind im gesamten westlichen Münsterland im Einsatz.',
    lokalServiceKontext: [
      'Ein typischer Auftrag in Borken beginnt mit der kostenlosen Besichtigung und einer Materialprobe der Fassadenplatten, da sich Asbestzement optisch kaum von neueren Faserzementplatten unterscheidet. Fällt der Befund positiv aus, erstellen wir die objektbezogene Anzeige bei der Bezirksregierung Münster, der für Borken zuständigen Arbeitsschutzbehörde. Erst danach beginnt der Ausbau. Die Platten werden möglichst zerstörungsfrei vom Untergrund gelöst, staubarm gehandhabt und in zugelassenen Big-Bags verpackt. Sie erhalten anschließend einen Entsorgungsnachweis für Ihre Unterlagen.',
      'Borkens Bausubstanz prägt die Arbeit spürbar: In der Innenstadt und in Gemen wurden Giebel, Wetterseiten und Anbauten älterer Häuser oft mit Asbestzementschindeln verkleidet, während viele Nachkriegsbauten und Wirtschaftsgebäude in Weseke, Burlo, Hoxfeld und Grütlohn großformatige Fassadenplatten tragen. Auf dem Land bedeuten freistehende Gebäude und Gerüststellungen ringsum häufig einen erhöhten Aufwand. Wir stimmen die Demontage daher früh mit dem Gerüstbau ab, damit der Ausbau am Gerüst sicher und im Zeitplan abläuft.',
      'Häufig ist der Plattenausbau der erste Schritt vor einer energetischen Fassadensanierung mit neuem Dämmsystem. Damit kein Verzug entsteht, koordinieren wir uns mit Ihrem Architekten oder dem ausführenden Fassadenbetrieb. Treffen wir hinter der Verkleidung zusätzlich Mineralfaserdämmung (KMF) an, ordnen wir diese klar der TRGS 521 zu – KMF ist kein Asbest, erfordert aber ebenfalls einen kontrollierten Ausbau. Auch alte teer- oder bitumenhaltige Kleber (PAK, TRGS 524) grenzen wir sauber ab, damit jede Schadstoffgruppe korrekt behandelt und getrennt entsorgt wird.',
    ],
    comboFaqs: [
      {
        frage: 'Wie erkenne ich, ob meine Fassadenplatten in Borken Asbest enthalten?',
        antwort:
          'Asbestzement-Fassadenplatten lassen sich optisch kaum von neueren Faserzementplatten unterscheiden. Sicherheit gibt nur eine Materialprobe im akkreditierten Labor. Bei der kostenlosen Besichtigung in Borken prüfen wir die Verkleidung, entnehmen bei Verdacht fachgerecht eine Probe und planen den Ausbau erst nach gesichertem Befund. Eigenmächtig sollten Sie nichts abbrechen oder anbohren.',
      },
      {
        frage: 'Lohnt sich der Plattenausbau vor der neuen Dämmung in Borken?',
        antwort:
          'Ja. Asbesthaltige Fassadenplatten dürfen nicht einfach überbaut, gebohrt oder bearbeitet werden, ohne dass Fasern freigesetzt werden. Vor einer energetischen Fassadensanierung bauen wir die Platten daher kontrolliert nach TRGS 519 aus und entsorgen sie fachgerecht. So kann Ihr Fassadenbetrieb anschließend auf einem sauberen, gefahrfreien Untergrund weiterarbeiten.',
      },
      {
        frage: 'Wer ist in Borken für die Anzeige der Fassadenarbeiten zuständig?',
        antwort:
          'Die objektbezogene Anzeige asbesthaltiger Fassadenarbeiten nach TRGS 519 reichen wir vor Beginn bei der Bezirksregierung Münster ein, der für Borken zuständigen Arbeitsschutzbehörde. Diese Abwicklung übernehmen wir vollständig für Sie. Sie erhalten am Ende eine lückenlose Dokumentation mit Analyse, Anzeige und Entsorgungsnachweis.',
      },
    ],
  },
  'asbestzement-ausbauen/borken': {
    leistung: 'asbestzement-ausbauen',
    stadt: 'borken',
    metaTitle: 'Asbestzement ausbauen in Borken | Asbesta',
    metaDescription:
      'Asbestzement in Borken fachgerecht ausbauen: Platten, Rohre, Kanäle und Blumenkästen nach TRGS 519 entfernen und entsorgen. Kostenlose Besichtigung.',
    intro:
      'Asbestzement steckt in Borken in vielen Bauteilen – von Platten und Rohren über Lüftungskanäle bis zu Blumenkästen. Asbesta baut diese fest gebundenen Asbestprodukte fachgerecht nach TRGS 519 aus und entsorgt sie unter dem Abfallschlüssel AVV 17 06 05*. Wir kommen aus Marl rund 50 km über die A31 ins westliche Münsterland und klären vor jedem Eingriff per Materialprobe, ob Asbest vorliegt.',
    lokalServiceKontext: [
      'Der Ausbau von Asbestzement in Borken beginnt bei uns mit einer kostenlosen Besichtigung und, bei Verdacht, einer Materialprobe. Asbestzement ist fest gebunden und solange unauffällig, wie das Bauteil intakt ist – beim Sägen, Bohren, Brechen oder Abriss werden jedoch Fasern frei. Deshalb lösen wir Platten, Rohre und Kanäle möglichst zerstörungsfrei, arbeiten staubarm und verpacken alles staubdicht. Erst nach gesichertem Laborbefund und – bei anzeigepflichtigen Arbeiten – nach erfolgter Anzeige beginnt der eigentliche Ausbau.',
      'In Borken finden wir Asbestzement an sehr unterschiedlichen Stellen: als Wellplatten und Fassadenplatten an Wohnhäusern und Wirtschaftsgebäuden in Weseke, Marbeck und Rhedebrügge, als Abwasser- und Regenrohre, Lüftungskanäle oder Blumenkästen und Fensterbänke an Häusern in der Innenstadt und in Gemen. Gerade auf den vielen Hofstellen und landwirtschaftlichen Nebengebäuden des Kreises Borken sind großflächige Asbestzement-Bauteile aus der Zeit vor 1993 noch verbreitet. Wir nehmen jedes Bauteil einzeln auf und planen den Ausbau passend zur Lage.',
      'Für anzeigepflichtige Arbeiten an Asbestzement ist in Borken die Bezirksregierung Münster die zuständige Arbeitsschutzbehörde. Die objektbezogene Anzeige nach TRGS 519 reichen wir dort fristgerecht ein – das übernehmen wir für Sie. Den asbesthaltigen Abfall entsorgen wir staubdicht verpackt unter dem Abfallschlüssel AVV 17 06 05* über zugelassene Annahmestellen, mit lückenlosem Entsorgungsnachweis. So ist Ihr Asbestzement-Bauteil in Borken sauber und rechtssicher aus dem Gebäude und vom Grundstück verschwunden.',
    ],
    comboFaqs: [
      {
        frage: 'Welche Asbestzement-Bauteile baut Asbesta in Borken aus?',
        antwort:
          'Wir bauen in Borken alle gängigen Asbestzement-Bauteile aus: Wellplatten und Fassadenplatten, Abwasser- und Regenrohre, Lüftungs- und Kabelkanäle sowie Blumenkästen und Fensterbänke. Alles wird fest gebunden, staubarm und zerstörungsfrei nach TRGS 519 demontiert und unter AVV 17 06 05* entsorgt. Bei der kostenlosen Besichtigung sehen wir uns die Bauteile an und planen den Ausbau konkret.',
      },
      {
        frage: 'Ist Asbestzement gefährlich, solange er intakt ist?',
        antwort:
          'Solange Asbestzement unbeschädigt ist, sind die Fasern fest gebunden und das Risiko gering. Gefährlich wird es beim Sägen, Bohren, Brechen, Hochdruckreinigen oder Abriss, weil dabei Fasern frei werden. Deshalb dürfen solche Bauteile nicht eigenmächtig bearbeitet werden. Wir bauen sie in Borken kontrolliert und staubarm aus, statt sie zu zerstören.',
      },
      {
        frage: 'Wer meldet die Asbestzement-Arbeiten in Borken bei der Behörde an?',
        antwort:
          'Das übernehmen wir. Anzeigepflichtige Arbeiten an Asbestzement melden wir vor Beginn objektbezogen nach TRGS 519 bei der Bezirksregierung Münster an, der für Borken zuständigen Arbeitsschutzbehörde. Sie müssen sich um die behördlichen Formalitäten nicht selbst kümmern und erhalten am Ende eine vollständige Dokumentation.',
      },
    ],
  },
  'bitumenkleber-entfernen/borken': {
    leistung: 'bitumenkleber-entfernen',
    stadt: 'borken',
    metaTitle: 'Bitumenkleber entfernen Borken | TRGS 519 Asbesta',
    metaDescription:
      'Schwarzen Bitumenkleber in Borken entfernen: saubere Abgrenzung Asbest (TRGS 519) und PAK (TRGS 524/551), staubarm unter alten Böden. Jetzt anfragen.',
    intro:
      'Unter alten Bodenbelägen in Borken steckt häufig schwarzer Bitumenkleber, der asbest- oder teerhaltig sein kann. Asbesta entfernt diesen Kleber staubarm und grenzt dabei sauber ab, ob es sich um Asbest nach TRGS 519 oder um PAK nach TRGS 524 und 551 handelt. Wir kommen aus Marl rund 50 km über die A31 und klären vor jedem Eingriff per Materialprobe, womit wir es zu tun haben.',
    lokalServiceKontext: [
      'Die Entfernung von schwarzem Bitumenkleber in Borken beginnt bei uns mit der kostenlosen Besichtigung und einer Materialprobe, denn der schwarze Kleber unter Parkett, Fliesen oder PVC kann zwei sehr unterschiedliche Schadstoffe enthalten. Erst der Laborbefund zeigt, ob Asbest oder PAK vorliegt – davon hängt das gesamte Verfahren ab. Bei Asbest arbeiten wir anzeigepflichtig nach TRGS 519 mit Abschottung und staubarmer Aufnahme, bei PAK nach TRGS 524 und 551. So vermeiden wir, dass im bewohnten Gebäude unkontrolliert Fasern oder Schadstoffe freigesetzt werden.',
      'Borkens Wohnbestand in der Innenstadt, in Gemen und in den Ortsteilen Weseke, Marbeck und Hoxfeld stammt vielfach aus der Zeit vor 1993 und wurde mehrfach renoviert. Unter heute sichtbaren Belägen liegen oft ältere Aufbauten mit schwarzem Kleber. Gerade bei der Sanierung von Estrichen und Bodenaufbauten in diesen Häusern stoßen Eigentümer auf solche Schichten. Wir nehmen den Bodenaufbau kontrolliert auf, halten die Belastung gering und trennen die Stoffströme von Beginn an.',
      'Die saubere Abgrenzung ist hier entscheidend: Asbesthaltiger Bitumenkleber unterliegt der TRGS 519 und muss bei anzeigepflichtigen Arbeiten objektbezogen bei der Bezirksregierung Münster angezeigt werden, der für Borken zuständigen Arbeitsschutzbehörde. Teerhaltiger Kleber mit PAK fällt dagegen unter die TRGS 524 und 551 – PAK ist kein Asbest. Wir benennen jedes Material klar, wählen das passende Verfahren und entsorgen den Abfall fachgerecht und getrennt, mit lückenlosem Nachweis.',
    ],
    comboFaqs: [
      {
        frage: 'Ist schwarzer Bitumenkleber unter dem Boden immer Asbest?',
        antwort:
          'Nein. Schwarzer Bitumenkleber kann asbesthaltig sein (TRGS 519) oder teerhaltig mit PAK (TRGS 524/551) – beides sieht ähnlich aus, erfordert aber unterschiedliche Verfahren. Sicherheit gibt nur eine Materialprobe im Labor. Deshalb entnehmen wir in Borken vor Arbeitsbeginn eine Probe und entscheiden erst nach dem Befund, wie der Kleber sicher entfernt wird.',
      },
      {
        frage: 'Wie wird der Kleber in Borken staubarm entfernt?',
        antwort:
          'Je nach Befund arbeiten wir mit Abschottung, Absaugung und staubarmen Aufnahmeverfahren. Bei Asbest richten wir nach TRGS 519 einen kontrollierten Bereich ein und melden die Arbeiten bei der Bezirksregierung Münster an. So bleibt die Faser- bzw. Schadstofffreisetzung im bewohnten Haus in Borken minimal und der Bodenaufbau kann anschließend sauber neu aufgebaut werden.',
      },
      {
        frage: 'Was kostet die Entfernung von Bitumenkleber in Borken?',
        antwort:
          'Der Preis hängt von Fläche, Schadstoffart und Bodenaufbau ab und lässt sich nicht pauschal nennen. Eine asbesthaltige Fläche mit Anzeigepflicht wird anders kalkuliert als eine reine PAK-Sanierung. Nach der kostenlosen Besichtigung in Borken erhalten Sie einen verbindlichen Festpreis ohne versteckte Nachträge.',
      },
    ],
  },
  'floor-flex-entfernen/borken': {
    leistung: 'floor-flex-entfernen',
    stadt: 'borken',
    metaTitle: 'Floor-Flex entfernen Borken | Asbesta TRGS 519',
    metaDescription:
      'Floor-Flex-Platten in Borken staubarm entfernen: Vinyl-Asbest-Fliesen samt Kleber aufnehmen, anzeigepflichtig nach TRGS 519. Kostenlose Besichtigung.',
    intro:
      'Floor-Flex-Platten – auch Vinyl-Asbest-Fliesen genannt – liegen in Borken in vielen Altbauten unter neueren Belägen. Asbesta nimmt diese Platten samt asbesthaltigem Kleber staubarm und anzeigepflichtig nach TRGS 519 auf. Wir kommen aus Marl rund 50 km über die A31 ins westliche Münsterland und klären vor jedem Eingriff per Materialprobe, ob tatsächlich Asbest vorliegt.',
    lokalServiceKontext: [
      'Die Floor-Flex-Entfernung in Borken beginnt bei uns mit der kostenlosen Besichtigung und einer Materialprobe, da sich die Platten optisch kaum von asbestfreien Belägen unterscheiden. Bestätigt das Labor Asbest, planen wir die anzeigepflichtige Aufnahme nach TRGS 519: Wir lösen die Platten möglichst ganz, vermeiden Brechen und Schleifen und arbeiten staubarm mit Abschottung und Absaugung. Häufig steckt unter den Platten zusätzlich schwarzer Bitumenkleber, den wir im selben Zug fachgerecht mit aufnehmen, damit der Boden vollständig saniert ist.',
      'Borkens Altbaubestand in der Innenstadt, in Gemen und in den Ortsteilen wie Weseke, Marbeck und Hoxfeld stammt vielfach aus der Zeit vor 1993. In Wohnungen, Fluren, Kellern und Treppenhäusern dieser Gebäude wurden Floor-Flex-Platten verbreitet verlegt und später überdeckt. Bei Renovierungen kommen sie oft erst zum Vorschein, wenn der obere Belag entfernt wird. Wir nehmen den Bodenaufbau kontrolliert auf und halten Bewohner und Nachbarschaft von der Faserbelastung fern.',
      'Arbeiten an Floor-Flex-Platten sind anzeigepflichtig und müssen objektbezogen nach TRGS 519 bei der zuständigen Arbeitsschutzbehörde angezeigt werden – das ist in Borken die Bezirksregierung Münster. Diese Anzeige übernehmen wir für Sie und halten die gesetzlichen Fristen ein. Den asbesthaltigen Abfall verpacken wir staubdicht und entsorgen ihn unter dem Abfallschlüssel AVV 17 06 05* mit lückenlosem Nachweis. Zum Abschluss kann eine Freimessung nach VDI 3492 erfolgen, bevor der Bereich wieder genutzt wird.',
    ],
    comboFaqs: [
      {
        frage: 'Sind Floor-Flex-Arbeiten in Borken anzeigepflichtig?',
        antwort:
          'Ja. Floor-Flex-Platten enthalten in der Regel Asbest, daher sind die Arbeiten nach TRGS 519 anzeigepflichtig und müssen objektbezogen bei der Bezirksregierung Münster angezeigt werden. Diese Anzeige übernehmen wir für Sie und nehmen die Platten staubarm auf. So bleibt die Sanierung in Ihrem Borkener Objekt rechtssicher und für alle Beteiligten nachvollziehbar.',
      },
      {
        frage: 'Woran erkenne ich Floor-Flex-Platten in meinem Borkener Altbau?',
        antwort:
          'Floor-Flex-Platten sind meist quadratische, oft 25 mal 25 cm große, etwas spröde Fliesen, die unter neueren Belägen liegen können. Optisch lassen sie sich kaum sicher zuordnen, deshalb gibt nur eine Laboranalyse Gewissheit. Entfernen Sie die Platten nicht selbst – wir entnehmen bei der Besichtigung in Borken eine Probe und entscheiden erst nach dem Befund über das Verfahren.',
      },
      {
        frage: 'Wird der Kleber unter den Floor-Flex-Platten mit entfernt?',
        antwort:
          'Ja. Unter Floor-Flex-Platten liegt häufig zusätzlich schwarzer Bitumenkleber, der ebenfalls Asbest enthalten kann. Wir nehmen Platten und Kleber im selben Arbeitsgang staubarm auf, damit der Boden vollständig und sauber saniert ist. So bleibt nach den Arbeiten kein belasteter Rest im Aufbau zurück, und Sie können den Boden neu aufbauen.',
      },
    ],
  },
  'pak-sanierung/borken': {
    leistung: 'pak-sanierung',
    stadt: 'borken',
    metaTitle: 'PAK-Sanierung Borken nach TRGS 524/551 | Asbesta',
    metaDescription:
      'PAK-Sanierung in Borken nach TRGS 524/551: Teerkleber, Parkettpech und alte Dachbahnen fachgerecht entfernen. PAK ist kein Asbest. Jetzt anfragen.',
    intro:
      'PAK steckt in Borken in alten Teerklebern, Parkettpech und alten Dachbahnen aus der Zeit, als Teerprodukte üblich waren. Asbesta saniert diese PAK-belasteten Materialien fachgerecht nach TRGS 524 und 551 – PAK ist ausdrücklich kein Asbest. Wir kommen aus Marl rund 50 km über die A31 ins westliche Münsterland und klären vor jedem Eingriff per Materialprobe, welcher Schadstoff vorliegt.',
    lokalServiceKontext: [
      'Die PAK-Sanierung in Borken beginnt bei uns mit der kostenlosen Besichtigung und einer Materialprobe. PAK (polyzyklische aromatische Kohlenwasserstoffe) finden sich vor allem in dunklen Teer- und Parkettklebern, im Parkettpech alter Holzböden und in alten teerhaltigen Dachbahnen. Diese Materialien können stark riechen und sind gesundheitlich nicht harmlos. Bestätigt das Labor PAK, sanieren wir nach TRGS 524 und 551 mit geeignetem Atemschutz, Absaugung und staubarmen Verfahren und entsorgen das belastete Material fachgerecht und getrennt.',
      'In Borkens Wohnhäusern in der Innenstadt und in Gemen liegt unter altem Parkett oft Parkettpech, in Bodenaufbauten finden sich teerhaltige Kleber. Auf Garagen, Schuppen und Nebengebäuden in Weseke, Marbeck und den weiteren Ortsteilen treffen wir auf alte teerhaltige Dachbahnen. Da Teer- und Bitumenprodukte sich ähneln, ist die Probenahme entscheidend: Sie zeigt, ob PAK, Bitumen oder im schwarzen Kleber auch Asbest enthalten ist. Wir nehmen jedes Bauteil einzeln auf und planen die Sanierung passend zur Lage.',
      'Wichtig ist die klare Abgrenzung der Schadstoffgruppen: PAK fällt unter die TRGS 524 und 551, Asbest unter die TRGS 519, KMF unter die TRGS 521. PAK ist kein Asbest und nicht in jedem Fall asbestrechtlich anzeigepflichtig – tritt im selben Bodenaufbau jedoch zusätzlich Asbest auf, melden wir die asbestbezogenen Arbeiten objektbezogen bei der Bezirksregierung Münster an, der für Borken zuständigen Arbeitsschutzbehörde. Wir benennen jedes Material klar und entsorgen die Stoffe fachgerecht und getrennt.',
    ],
    comboFaqs: [
      {
        frage: 'Ist PAK dasselbe wie Asbest?',
        antwort:
          'Nein. PAK (polyzyklische aromatische Kohlenwasserstoffe) stecken in Teerklebern, Parkettpech und alten Dachbahnen und werden nach TRGS 524 und 551 behandelt. Asbest ist ein anderer Schadstoff und fällt unter TRGS 519. In Borkener Altbauten treten beide manchmal zusammen auf – deshalb klären wir per Materialprobe, was genau vorliegt, und behandeln jeden Stoff getrennt.',
      },
      {
        frage: 'Woran erkenne ich PAK in meinem Borkener Haus?',
        antwort:
          'Verdächtig sind dunkle, teerartige Kleber unter altem Parkett, schwarzes Parkettpech sowie alte teerhaltige Dachbahnen, die oft typisch riechen. Sicher erkennbar ist PAK aber nur im Labor. Wir entnehmen bei der kostenlosen Besichtigung in Borken eine Probe und entscheiden erst nach dem Befund, wie das Material nach TRGS 524/551 saniert wird.',
      },
      {
        frage: 'Muss eine PAK-Sanierung in Borken bei der Behörde angezeigt werden?',
        antwort:
          'PAK ist kein Asbest und fällt unter die TRGS 524 und 551, nicht unter die asbestrechtliche Anzeigepflicht der TRGS 519. Liegt im selben Bodenaufbau jedoch zusätzlich Asbest vor, melden wir die asbestbezogenen Arbeiten objektbezogen bei der Bezirksregierung Münster an. Welche Schritte für Ihr Objekt nötig sind, klären wir nach der Materialprobe transparent mit Ihnen.',
      },
    ],
  },
  'kmf-sanierung/borken': {
    leistung: 'kmf-sanierung',
    stadt: 'borken',
    metaTitle: 'KMF-Sanierung Borken | TRGS 521 | Asbesta',
    metaDescription:
      'KMF-Sanierung in Borken nach TRGS 521: alte Mineralwolle (Glas-/Steinwolle vor 2000) fachgerecht entfernen. KMF ist kein Asbest. Kostenlose Besichtigung.',
    intro:
      'Alte Mineralwolle – Glas- und Steinwolle, vor 2000 verbaut – gilt als künstliche Mineralfaser (KMF) und gehört in Borken fachgerecht nach TRGS 521 ausgebaut. Asbesta entfernt diese Dämmungen staubarm und getrennt; KMF ist ausdrücklich kein Asbest. Wir kommen aus Marl rund 50 km über die A31 ins westliche Münsterland und klären vor jedem Eingriff, um welches Dämmmaterial es sich handelt.',
    lokalServiceKontext: [
      'Die KMF-Sanierung in Borken beginnt bei uns mit der kostenlosen Besichtigung. Alte Mineralwolle, die vor dem Jahr 2000 verbaut wurde, kann lungengängige Fasern freisetzen und wird deshalb nach TRGS 521 behandelt. Wir bauen die Dämmung staubarm aus, vermeiden unnötiges Aufwirbeln, arbeiten mit Absaugung und geeignetem Atemschutz und verpacken das Material staubdicht. Neuere Mineralwolle ab 2000 trägt in der Regel das RAL-Gütezeichen und ist unbedenklicher – wir ordnen das Material vor dem Ausbau klar ein.',
      'In Borken finden wir alte Mineralwolle in Dachschrägen, obersten Geschossdecken, Zwischenwänden und hinter Verkleidungen vieler Häuser in der Innenstadt, in Gemen und in den Ortsteilen Weseke, Marbeck und Burlo. Auch in landwirtschaftlichen Gebäuden und Nebengebäuden des Kreises Borken steckt KMF häufig in nachträglich gedämmten Dächern und Wänden. Bei energetischen Sanierungen kommt die alte Dämmung oft erst beim Öffnen der Konstruktion zum Vorschein. Wir nehmen sie kontrolliert auf, damit beim Ausbau keine Fasern im Gebäude verteilt werden.',
      'Wichtig ist die klare Abgrenzung: KMF aus alter Mineralwolle fällt unter die TRGS 521 und ist kein Asbest – für KMF-Arbeiten ist auch kein TRGS-519-Verfahren und keine asbestrechtliche Anzeige nötig. Treffen wir beim Ausbau zusätzlich auf Asbest, etwa in angrenzenden Platten oder Klebern, melden wir die asbestbezogenen Arbeiten objektbezogen bei der Bezirksregierung Münster an, der für Borken zuständigen Arbeitsschutzbehörde. So wird jede Schadstoffgruppe korrekt behandelt, getrennt und fachgerecht entsorgt.',
    ],
    comboFaqs: [
      {
        frage: 'Ist alte Mineralwolle (KMF) dasselbe wie Asbest?',
        antwort:
          'Nein. Künstliche Mineralfasern (KMF) aus alter Glas- oder Steinwolle sind kein Asbest. Sie werden nach TRGS 521 behandelt, nicht nach der Asbestvorschrift TRGS 519. Alte Mineralwolle vor 2000 kann dennoch lungengängige Fasern freisetzen, deshalb bauen wir sie in Borken staubarm und kontrolliert aus und entsorgen sie fachgerecht und getrennt.',
      },
      {
        frage: 'Woran erkenne ich, ob meine Dämmung in Borken alte KMF ist?',
        antwort:
          'Ausschlaggebend ist das Einbaujahr: Mineralwolle, die vor 2000 verbaut wurde, gilt als kritische KMF und wird nach TRGS 521 behandelt. Neuere Produkte ab 2000 tragen meist das RAL-Gütezeichen und sind unbedenklicher. Bei der kostenlosen Besichtigung in Borken ordnen wir Ihre Dämmung ein und sagen Ihnen ehrlich, ob und wie ein Ausbau erforderlich ist.',
      },
      {
        frage: 'Braucht eine KMF-Sanierung in Borken eine behördliche Anzeige?',
        antwort:
          'Nein, reine KMF-Arbeiten nach TRGS 521 sind nicht asbestrechtlich anzeigepflichtig und erfordern kein TRGS-519-Verfahren. Erst wenn beim Ausbau zusätzlich Asbest auftaucht, melden wir die asbestbezogenen Arbeiten bei der Bezirksregierung Münster an. Wir trennen die Schadstoffe sauber und behandeln KMF und Asbest jeweils nach der passenden Vorschrift.',
      },
    ],
  },
  'asbestsanierung/duelmen': {
    leistung: 'asbestsanierung',
    stadt: 'duelmen',
    metaTitle: 'Asbestsanierung TRGS 519 Dülmen | Asbesta',
    metaDescription:
      'Asbestsanierung nach TRGS 519 in Dülmen: Schwarzbereich, Unterdruck, Personenschleuse und Freimessung VDI 3492. Festpreis nach Besichtigung.',
    intro:
      'Asbesta saniert schwach gebundenen Asbest in Innenräumen Dülmens nach den strengen Vorgaben der TRGS 519. Wir arbeiten als anzeigepflichtiger Fachbetrieb mit abgeschottetem Schwarzbereich, Unterdruckhaltung, Personenschleuse und abschließender Freimessung. Unser Sitz ist in Marl, von dort fahren wir rund 30 km über die A43 in den Kreis Coesfeld an.',
    lokalServiceKontext: [
      'Eine Asbestsanierung nach TRGS 519 in Dülmen beginnt bei uns immer mit einer kostenlosen Besichtigung vor Ort und einer Materialanalyse. Erst wenn ein akkreditiertes Labor schwach gebundenen Asbest bestätigt, planen wir den anzeigepflichtigen Rückbau. Dafür richten wir einen abgeschotteten Schwarzbereich mit Unterdruckhaltung und Personenschleuse ein, damit keine Fasern in angrenzende Räume gelangen. Nach dem Rückbau folgen Feinreinigung und die Freimessung nach VDI 3492, bevor der Bereich wieder freigegeben wird. So bleibt die Belastung für Bewohner und Nachbarn kontrolliert und nachweisbar.',
      'Dülmens Bausubstanz ist geprägt von der gewachsenen Innenstadt und ländlichen Ortschaften wie Buldern, Hiddingsel und Hausdülmen, in denen viele Wohnhäuser und Hofstellen aus der Zeit vor dem Asbest-Totalverbot von 1993 stammen. Schwach gebundener Asbest steckt im Innenraum oft in Spritzputzen, alten Dämmplatten oder Brandschutzverkleidungen. Gerade bei Modernisierungen in Merfeld, Rorup und Dernekamp ist eine sorgfältige Erkundung vor jedem Eingriff entscheidend, weil das Material von außen kaum zu erkennen ist.',
      'Jede anzeigepflichtige Asbestsanierung in Dülmen muss objektbezogen bei der zuständigen Arbeitsschutzbehörde angezeigt werden - das ist hier die Bezirksregierung Münster. Diese Anzeige übernehmen wir für Sie und halten die gesetzlichen Fristen ein. Wichtig ist die saubere fachliche Abgrenzung: Floor-Flex-Platten und Bitumenkleber in Böden oder Welleternit an Dach und Fassade enthalten zwar Asbest, alte Mineralwolle in Dämmungen fällt dagegen unter die TRGS 521, PAK in Teerklebern und Parkettpech unter die TRGS 524 und 551. Mineralwolle und PAK sind kein Asbest. Wir benennen jedes Material klar und wählen das passende Verfahren.',
    ],
    comboFaqs: [
      {
        frage: 'Ist eine Asbestsanierung in Dülmen immer anzeigepflichtig?',
        antwort:
          'Arbeiten an schwach gebundenem Asbest nach TRGS 519 sind anzeigepflichtig und müssen objektbezogen bei der Bezirksregierung Münster angezeigt werden. Diese Anzeige übernehmen wir für Sie und richten den abgeschotteten Schwarzbereich mit Unterdruck und Personenschleuse ein. So bleibt die Sanierung in der Innenstadt, in Buldern oder Hausdülmen rechtssicher und für alle Beteiligten nachvollziehbar dokumentiert.',
      },
      {
        frage: 'Woran erkenne ich schwach gebundenen Asbest in einem Dülmener Altbau?',
        antwort:
          'Sicher erkennbar ist Asbest nur im Labor. In Bauten vor 1993 stecken verdächtige Materialien oft in Spritzputzen, alten Dämmplatten oder Brandschutzverkleidungen. Wir nehmen bei der Besichtigung Proben und lassen sie analysieren. Erst nach dem Befund entscheiden wir über das Verfahren - so vermeiden Sie unnötige Eingriffe und eine unkontrollierte Faserfreisetzung im bewohnten Gebäude.',
      },
      {
        frage: 'Wie schnell ist Asbesta aus Marl in Dülmen vor Ort?',
        antwort:
          'Unser Sitz ist in Marl, von dort sind es rund 30 km über die A43 bis Dülmen - ein Termin ist meist kurzfristig möglich. Ein eigenes Büro vor Ort haben wir nicht, wir sind in ganz NRW tätig. Nach der kostenlosen Besichtigung erhalten Sie einen verbindlichen Festpreis, der von Material, Umfang und Zugänglichkeit abhängt.',
      },
    ],
  },
  'abbrucharbeiten/duelmen': {
    leistung: 'abbrucharbeiten',
    stadt: 'duelmen',
    metaTitle: 'Abbrucharbeiten Dülmen | Rückbau TRGS 519 | Asbesta',
    metaDescription:
      'Kontrollierter Abbruch und schadstoffgetrennter Rückbau in Dülmen nach Schadstofferkundung. Festpreis nach kostenloser Besichtigung.',
    intro:
      'Asbesta plant und führt kontrollierten Abbruch und Rückbau in Dülmen aus - von der Schadstofferkundung bis zum selektiven, schadstoffgetrennten Rückbau. Wir kommen aus Marl rund 30 km über die A43 in den Kreis Coesfeld und arbeiten nach TRGS 519, 521 und 524. Vor jedem Eingriff klären wir, welche Materialien verbaut sind und welche Stoffströme getrennt entsorgt werden müssen.',
    lokalServiceKontext: [
      'Ein kontrollierter Rückbau in Dülmen beginnt bei uns nicht mit dem Bagger, sondern mit der Bestandsaufnahme. Wir erkunden das Objekt, entnehmen Materialproben und lassen sie analysieren, bevor irgendetwas bewegt wird. Erst wenn klar ist, ob Asbest, alte Mineralwolle oder PAK-belastete Kleber vorliegen, planen wir den selektiven Rückbau. Die belasteten Fraktionen bauen wir zuerst und gesichert aus, die mineralischen Reststoffe danach separat. So bleiben die Stoffströme sauber getrennt und die Anfahrt aus Marl für Sie planbar.',
      'Dülmens Bausubstanz ist gemischt: Neben der gewachsenen Innenstadt prägen landwirtschaftliche Hofstellen mit Scheunen, Ställen und Nebengebäuden in Merfeld, Rorup und Dernekamp das Umland. In solchen Gebäuden finden sich häufig Floor-Flex-Platten und Bitumenkleber in Böden, Welleternit und Asbestzement an Dach und Fassade sowie alte Mineralwolle in Dämmungen. In Buldern, Hiddingsel und Hausdülmen treffen wir oft auf ältere Wohn- und Wirtschaftsgebäude, deren Erschließung wir vor dem Rückbau gezielt einplanen, damit Logistik und Schadstofftrennung ineinandergreifen.',
      'Asbest unterliegt seit dem Totalverbot 1993 strengen Regeln. Steht bei einem Abbruch in Dülmen asbesthaltiges Material an, erstatten wir die objektbezogene Anzeige nach TRGS 519 bei der zuständigen Arbeitsschutzbehörde, der Bezirksregierung Münster. Alte Mineralwolle behandeln wir nach TRGS 521, PAK-belastete Teer- und Klebstoffreste nach TRGS 524 beziehungsweise 551 - beides ist kein Asbest, wird aber ebenso fachgerecht getrennt und entsorgt. Sie erhalten von uns eine verbindliche Dokumentation und einen klaren Ablauf.',
    ],
    comboFaqs: [
      {
        frage: 'Wie läuft ein Abbruch auf einer Hofstelle in Merfeld oder Rorup ab?',
        antwort:
          'Zuerst erkunden wir die Schadstoffe, entnehmen Proben und lassen sie analysieren. Auf Hofstellen finden wir oft Welleternit-Dächer, Asbestzement-Verkleidungen, Floor-Flex-Böden oder Bitumenkleber. Belastete Materialien bauen wir gesichert und getrennt aus, danach folgt der mineralische Rückbau. Bei Asbest erstatten wir vorab die Anzeige nach TRGS 519 bei der Bezirksregierung Münster.',
      },
      {
        frage: 'Was kostet ein kontrollierter Rückbau in Dülmen?',
        antwort:
          'Eine seriöse Pauschale gibt es nicht: Der Preis hängt von Objektgröße, Schadstoffart und Zugänglichkeit ab. Eine kleine Floor-Flex-Sanierung lässt sich anders kalkulieren als der Rückbau einer kompletten Scheune. Verbindlich nennen wir den Festpreis nach einer kostenlosen Besichtigung vor Ort, danach gibt es keine versteckten Nachträge.',
      },
      {
        frage: 'Sind PAK und alte Mineralwolle dasselbe wie Asbest?',
        antwort:
          'Nein. Alte Mineralwolle (KMF) in Dämmungen und PAK in Teer- und Klebstoffresten sind eigene Schadstoffgruppen, die wir nach TRGS 521 beziehungsweise TRGS 524/551 behandeln. Asbest fällt unter TRGS 519. In vielen Dülmener Bauten treten mehrere dieser Stoffe zusammen auf - deshalb klären wir sie bei der Erkundung sauber ab und trennen die Stoffströme im Rückbau konsequent.',
      },
    ],
  },
  'welleternit-ausbauen/duelmen': {
    leistung: 'welleternit-ausbauen',
    stadt: 'duelmen',
    metaTitle: 'Welleternit ausbauen in Dülmen | Asbesta',
    metaDescription:
      'Welleternit in Dülmen zerstörungsfrei ausbauen: Demontage asbesthaltiger Wellplatten nach TRGS 519, Big-Bag-Entsorgung. Jetzt Besichtigung anfragen.',
    intro:
      'Asbesta baut asbesthaltige Welleternit-Platten in Dülmen zerstörungsfrei aus - von Scheunendächern in Merfeld bis zu Garagen und Nebengebäuden in Buldern und Hausdülmen. Als Fachbetrieb mit Sachkunde nach TRGS 519 und Sitz in Marl reisen wir rund 30 km über die A43 an und übernehmen die staubarme Demontage samt fachgerechter Big-Bag-Entsorgung. Vor jeder Arbeit klären wir per Materialprobe, ob Asbest vorliegt.',
    lokalServiceKontext: [
      'Der Welleternit-Ausbau in Dülmen beginnt bei uns mit einer kostenlosen Besichtigung vor Ort. Da Welleternit fest gebundene Asbestzement-Wellplatten sind, dürfen sie weder gebrochen, hochdruckgereinigt noch überstrichen werden - das würde Fasern freisetzen. Stattdessen lösen wir die Platten zerstörungsfrei, indem wir die Befestigungen vorsichtig öffnen und die Platten einzeln abnehmen. Bei unklarem Material entnehmen wir vorab eine Probe zur Laboranalyse. Erst nach gesicherter Diagnose und freigegebener Anzeige planen wir den staubarmen Ausbau auf Ihrem Dach oder Nebengebäude.',
      'Dülmens landwirtschaftlich geprägtes Umland prägt diese Arbeit deutlich. Auf Hofstellen in Merfeld, Rorup und Dernekamp finden sich Welleternit-Dächer oft auf Scheunen, Ställen und großen Nebengebäuden, während rund um die Innenstadt und in Hiddingsel häufig Garagen, Carports und Anbauten Wellplatten tragen. Wir stimmen Anfahrt, Materialtransport und Big-Bag-Stellplatz auf die jeweilige Lage ab - ob auf einem freien Hofgrundstück oder in dichter Wohnbebauung in Hausdülmen.',
      'Für die gesetzlich vorgeschriebene Asbest-Anzeige nach TRGS 519 ist in Dülmen die Bezirksregierung Münster die zuständige Arbeitsschutzbehörde. Diese Anzeige reichen wir vor Beginn der Arbeiten ein - das übernehmen wir für Sie. Die demontierten Welleternit-Platten verpacken wir staubdicht in Big-Bags und entsorgen sie als gefährlichen Abfall unter dem Abfallschlüssel AVV 17 06 05*. Sie erhalten die Entsorgungsnachweise lückenlos, sodass der gesamte Ablauf vom Ausbau bis zur Deponie rechtssicher dokumentiert bleibt.',
    ],
    comboFaqs: [
      {
        frage: 'Was kostet der Welleternit-Ausbau in Dülmen?',
        antwort:
          'Der Preis hängt von Plattenfläche, Dachhöhe und Zugänglichkeit ab - eine große Scheune in Merfeld bedeutet einen anderen Aufwand als eine einzelne Garage in der Innenstadt. Verbindlich nennen wir den Festpreis nach kostenloser Besichtigung vor Ort, inklusive Big-Bag-Entsorgung und Entsorgungsnachweis, ohne versteckte Nachträge.',
      },
      {
        frage: 'Brauche ich für den Ausbau in Dülmen eine behördliche Anzeige?',
        antwort:
          'Ja. Arbeiten an asbesthaltigem Welleternit müssen vor Beginn nach TRGS 519 angezeigt werden. Zuständige Arbeitsschutzbehörde für Dülmen im Kreis Coesfeld ist die Bezirksregierung Münster. Diese Anzeige übernehmen wir vollständig für Sie, sodass Ihr Projekt auf der Hofstelle oder am Wohnhaus von Anfang an rechtssicher und ordnungsgemäß abläuft.',
      },
      {
        frage: 'Kann das Welleternit-Dach nicht einfach überstrichen werden?',
        antwort:
          'Nein. Überstreichen, Hochdruckreinigen oder Brechen von Welleternit ist unzulässig, weil dabei Asbestfasern freigesetzt werden. Seit dem Totalverbot 1993 ist nur der zerstörungsfreie Ausbau durch einen sachkundigen Fachbetrieb erlaubt. Wir demontieren die Platten staubarm nach TRGS 519 und entsorgen sie über AVV 17 06 05* - das ist in Dülmen die einzig zulässige und dauerhaft sichere Lösung.',
      },
    ],
  },
  'fassadenplatten-ausbauen/duelmen': {
    leistung: 'fassadenplatten-ausbauen',
    stadt: 'duelmen',
    metaTitle: 'Fassadenplatten ausbauen Dülmen | Asbesta',
    metaDescription:
      'Asbesthaltige Fassadenplatten in Dülmen fachgerecht ausbauen nach TRGS 519. Asbesta aus Marl, oft vor der Fassadensanierung. Kostenlose Besichtigung.',
    intro:
      'Asbesta baut asbesthaltige Fassadenplatten und -schindeln in Dülmen kontrolliert aus - häufig als Vorbereitung einer energetischen Fassadensanierung. Als Fachbetrieb mit Sachkunde nach TRGS 519 und Sitz in Marl reisen wir rund 30 km über die A43 in den Kreis Coesfeld an. Vor jedem Eingriff klären wir per Materialprobe, ob die Verkleidung tatsächlich Asbestzement enthält.',
    lokalServiceKontext: [
      'Der Ausbau asbesthaltiger Fassadenplatten in Dülmen beginnt bei uns mit einer kostenlosen Besichtigung und, bei unklarem Material, einer Laboranalyse. Asbestzement-Fassadenplatten und -schindeln sind fest gebunden und solange unauffällig, wie sie intakt sind - beim Abbruch, Anbohren oder Überdämmen ohne Schutz setzen sie jedoch Fasern frei. Wir lösen die Platten kontrolliert und zerstörungsfrei, sichern den Arbeitsbereich staubarm ab und nehmen die Verkleidung Stück für Stück ab, bevor die neue Fassade aufgebaut werden kann.',
      'Gerade vor einer energetischen Sanierung mit Wärmedämmverbundsystem stoßen Eigentümer in Dülmen häufig auf alte Asbestzement-Verkleidungen. Sie finden sich an Wohnhäusern und Nebengebäuden rund um die Innenstadt ebenso wie an Wirtschaftsgebäuden und Hofstellen in Buldern, Hausdülmen und Rorup. Wir stimmen den Ausbau eng mit dem geplanten Fassadenaufbau ab, damit Sie nach der Demontage ohne Verzögerung mit der Dämmung weitermachen können und keine asbesthaltigen Reste hinter der neuen Hülle verbleiben.',
      'Für die Asbest-Anzeige nach TRGS 519 ist in Dülmen die Bezirksregierung Münster die zuständige Arbeitsschutzbehörde. Diese Anzeige reichen wir vor Beginn der Arbeiten für Sie ein. Die ausgebauten Fassadenplatten verpacken wir staubdicht und entsorgen sie als gefährlichen Abfall unter dem Abfallschlüssel AVV 17 06 05* mit lückenlosem Nachweis. So ist der gesamte Ablauf von der Demontage bis zur Deponie sauber dokumentiert, und Ihre neue Fassade startet auf einem schadstofffreien Untergrund.',
    ],
    comboFaqs: [
      {
        frage: 'Müssen die Asbest-Fassadenplatten vor der Dämmung raus?',
        antwort:
          'In der Regel ja. Asbestzement-Fassadenplatten dürfen nicht einfach überdämmt oder angebohrt werden, weil dabei Fasern freigesetzt werden. Vor einer energetischen Fassadensanierung in Dülmen bauen wir die alte Verkleidung kontrolliert nach TRGS 519 aus und entsorgen sie fachgerecht. Erst danach beginnt der Aufbau des neuen Dämmsystems auf einem sauberen Untergrund.',
      },
      {
        frage: 'Welche Behörde ist in Dülmen für die Anzeige zuständig?',
        antwort:
          'Dülmen gehört zum Kreis Coesfeld, zuständige Arbeitsschutzbehörde ist die Bezirksregierung Münster. Den Ausbau asbesthaltiger Fassadenplatten zeigen wir dort vor Beginn nach TRGS 519 objektbezogen an. Diese Anzeige sowie die Entsorgungsnachweise übernehmen wir vollständig für Sie, sodass Ihre Fassadensanierung rechtssicher und nachweisbar abläuft.',
      },
      {
        frage: 'Woran erkenne ich, ob meine Fassadenplatten Asbest enthalten?',
        antwort:
          'Sicher lässt sich das nur im Labor klären. Asbestzement-Schindeln und -platten an Fassaden wurden bis zum Totalverbot 1993 verbaut und sehen heutigen, faserfreien Platten oft täuschend ähnlich. Wir entnehmen bei der Besichtigung fachgerecht eine Probe und lassen sie analysieren. Erst nach dem Befund entscheiden wir über den weiteren Ablauf - entnehmen Sie keine Proben selbst.',
      },
    ],
  },
  'asbestzement-ausbauen/duelmen': {
    leistung: 'asbestzement-ausbauen',
    stadt: 'duelmen',
    metaTitle: 'Asbestzement ausbauen in Dülmen | Asbesta',
    metaDescription:
      'Asbestzement in Dülmen fachgerecht ausbauen: Platten, Rohre, Kanäle und Blumenkästen nach TRGS 519 entsorgen. Festpreis nach Besichtigung.',
    intro:
      'Asbesta baut Asbestzement in Dülmen fachgerecht aus - ob Platten, Rohre, Lüftungskanäle oder Blumenkästen. Als Fachbetrieb mit Sachkunde nach TRGS 519 und Sitz in Marl reisen wir rund 30 km über die A43 in den Kreis Coesfeld an. Vor jeder Demontage klären wir per Materialprobe, ob das Bauteil tatsächlich Asbestzement enthält.',
    lokalServiceKontext: [
      'Der Ausbau von Asbestzement in Dülmen beginnt bei uns mit einer kostenlosen Besichtigung und, falls nötig, einer Laboranalyse. Asbestzement ist ein fest gebundenes Material und solange unauffällig, wie es unversehrt bleibt - beim Sägen, Bohren oder Brechen setzt es jedoch Fasern frei. Wir bauen Platten, Rohre, Kanäle und Blumenkästen daher zerstörungsfrei aus, sichern den Arbeitsbereich staubarm ab und vermeiden jede mechanische Bearbeitung, die Fasern freisetzen könnte.',
      'Asbestzement begegnet uns in Dülmen in vielen Formen: als Dach- und Fassadenplatten, als Abwasser- und Lüftungsrohre, als Kabelkanäle und als Blumenkästen oder Pflanztröge in Gärten. In der gewachsenen Innenstadt ebenso wie auf Hofstellen in Merfeld, Hiddingsel und Dernekamp stammen diese Bauteile meist aus der Zeit vor dem Totalverbot 1993. Wir erfassen bei der Besichtigung alle betroffenen Bauteile und planen den Ausbau so, dass auch versteckte Rohre und Kanäle vollständig erfasst werden.',
      'Für die Asbest-Anzeige nach TRGS 519 ist in Dülmen die Bezirksregierung Münster die zuständige Arbeitsschutzbehörde. Diese Anzeige reichen wir vor Beginn der Arbeiten für Sie ein. Das ausgebaute Asbestzement-Material verpacken wir staubdicht und entsorgen es als gefährlichen Abfall unter dem Abfallschlüssel AVV 17 06 05* mit lückenlosem Nachweis. So bleibt jeder Schritt von der Demontage bis zur Deponie sauber dokumentiert und für Bauamt oder Käufer prüffähig.',
    ],
    comboFaqs: [
      {
        frage: 'Sind auch Asbestzement-Rohre und Blumenkästen gefährlich?',
        antwort:
          'Solange Asbestzement-Rohre, -Kanäle oder -Blumenkästen unversehrt sind, geben sie kaum Fasern ab. Sobald sie zerbrechen, gesägt oder gebohrt werden, setzen sie jedoch Asbestfasern frei. Deshalb bauen wir auch solche Kleinteile zerstörungsfrei aus und entsorgen sie fachgerecht unter AVV 17 06 05*. Werfen Sie alte Asbestzement-Blumenkästen keinesfalls in den normalen Bauschutt.',
      },
      {
        frage: 'Welche Behörde ist in Dülmen für die Anzeige zuständig?',
        antwort:
          'Dülmen liegt im Kreis Coesfeld, zuständige Arbeitsschutzbehörde ist die Bezirksregierung Münster. Den Ausbau von Asbestzement zeigen wir dort vor Beginn der Arbeiten nach TRGS 519 objektbezogen an. Diese Anzeige sowie die Entsorgungsnachweise übernehmen wir für Sie, sodass Ihre Maßnahme in Dülmen rechtssicher und vollständig dokumentiert abläuft.',
      },
      {
        frage: 'Was kostet der Ausbau von Asbestzement in Dülmen?',
        antwort:
          'Der Preis hängt von Art, Menge und Zugänglichkeit der Bauteile ab - ein einzelner Blumenkasten lässt sich anders kalkulieren als ein ganzes Rohrleitungssystem oder eine Dachfläche. Verbindliche Zahlen nennen wir erst nach einer kostenlosen Besichtigung vor Ort als Festpreis, inklusive fachgerechter Entsorgung und ohne versteckte Nachträge.',
      },
    ],
  },
  'bitumenkleber-entfernen/duelmen': {
    leistung: 'bitumenkleber-entfernen',
    stadt: 'duelmen',
    metaTitle: 'Bitumenkleber entfernen Dülmen | TRGS 519 Asbesta',
    metaDescription:
      'Schwarzer Bitumenkleber in Dülmen entfernen: Abgrenzung Asbest (TRGS 519) und PAK (TRGS 524/551), staubarme Aufnahme. Kostenlose Besichtigung.',
    intro:
      'Asbesta entfernt schwarzen Bitumenkleber unter alten Bodenbelägen in Dülmen - oft asbest- oder teerhaltig. Als Fachbetrieb mit Sachkunde nach TRGS 519 und 524 und Sitz in Marl reisen wir rund 30 km über die A43 in den Kreis Coesfeld an. Entscheidend ist die saubere Abgrenzung: enthält der Kleber Asbest oder PAK? Das klären wir vorab im Labor.',
    lokalServiceKontext: [
      'Schwarzer Bitumenkleber unter alten Bodenbelägen ist in Dülmen ein häufiger Fund bei Sanierungen. Bevor wir etwas aufnehmen, entnehmen wir eine Materialprobe und lassen sie analysieren, denn der Kleber kann Asbest enthalten und fällt dann unter die TRGS 519, oder er ist teer- beziehungsweise PAK-haltig und fällt unter die TRGS 524 und 551. Erst nach dem Befund legen wir das Verfahren fest. Asbesthaltigen Kleber nehmen wir staubarm im abgeschotteten Bereich auf, PAK-belasteten Kleber mit dem passenden Schutzkonzept - beides ohne mechanisches Aufschleifen, das Fasern oder Stäube freisetzen würde.',
      'In den Wohnhäusern der gewachsenen Innenstadt sowie in den älteren Gebäuden von Buldern, Hausdülmen und Hiddingsel finden sich solche Klebereste oft unter Parkett, PVC oder alten Fliesen aus der Zeit vor dem Totalverbot 1993. Häufig liegt der Bitumenkleber zusammen mit Floor-Flex-Platten vor, was die Abgrenzung der Schadstoffe besonders wichtig macht. Wir erfassen bei der Besichtigung den gesamten Bodenaufbau und planen die Aufnahme so, dass die einzelnen Schichten und Stoffströme sauber getrennt bleiben.',
      'Liegt asbesthaltiger Bitumenkleber vor, zeigen wir die Arbeiten objektbezogen nach TRGS 519 bei der zuständigen Arbeitsschutzbehörde, der Bezirksregierung Münster, an - das übernehmen wir für Sie. PAK-belasteter Kleber ist kein Asbest und wird nach TRGS 524 und 551 behandelt, aber ebenso fachgerecht und getrennt entsorgt. Asbesthaltiges Material geht als gefährlicher Abfall über AVV 17 06 05* zur Deponie. Sie erhalten in jedem Fall eine lückenlose Dokumentation mit Analyseergebnissen und Entsorgungsnachweisen.',
    ],
    comboFaqs: [
      {
        frage: 'Ist schwarzer Bitumenkleber immer asbesthaltig?',
        antwort:
          'Nein. Schwarzer Bitumenkleber kann Asbest enthalten und fällt dann unter TRGS 519, er kann aber auch teer- beziehungsweise PAK-haltig sein und fällt dann unter TRGS 524 und 551. PAK ist kein Asbest. Welcher Stoff vorliegt, klärt nur eine Laboranalyse. Wir entnehmen die Probe bei der Besichtigung und wählen erst nach dem Befund das richtige Verfahren für Ihr Objekt in Dülmen.',
      },
      {
        frage: 'Welche Behörde ist bei asbesthaltigem Kleber in Dülmen zuständig?',
        antwort:
          'Liegt asbesthaltiger Bitumenkleber vor, ist die Arbeit nach TRGS 519 anzeigepflichtig. Zuständige Arbeitsschutzbehörde für Dülmen im Kreis Coesfeld ist die Bezirksregierung Münster. Diese Anzeige übernehmen wir vor Beginn der Arbeiten für Sie. Bei rein PAK-haltigem Kleber greift die TRGS 524/551, hier richtet sich das Vorgehen nach dem Gefährdungsgrad.',
      },
      {
        frage: 'Kann ich den alten Kleber nicht einfach abschleifen?',
        antwort:
          'Bitte nicht. Trockenes Abschleifen oder Abfräsen von asbest- oder PAK-haltigem Bitumenkleber setzt große Mengen Fasern und Stäube frei und ist gefährlich. Wir nehmen den Kleber staubarm und mit dem passenden Schutzkonzept auf, je nach Befund nach TRGS 519 oder TRGS 524/551. So bleibt die Belastung kontrolliert und der Untergrund wird sauber für den neuen Boden.',
      },
    ],
  },
  'floor-flex-entfernen/duelmen': {
    leistung: 'floor-flex-entfernen',
    stadt: 'duelmen',
    metaTitle: 'Floor-Flex entfernen Dülmen | Asbesta TRGS 519',
    metaDescription:
      'Floor-Flex-Platten in Dülmen staubarm entfernen: Vinyl-Asbest-Fliesen samt Kleber, anzeigepflichtig nach TRGS 519. Kostenlose Besichtigung.',
    intro:
      'Asbesta nimmt Floor-Flex-Platten in Dülmen staubarm auf - die alten Vinyl-Asbest-Fliesen samt anhaftendem Kleber. Als Fachbetrieb mit Sachkunde nach TRGS 519 und Sitz in Marl reisen wir rund 30 km über die A43 in den Kreis Coesfeld an. Die Arbeit ist anzeigepflichtig, wir klären vorab per Materialprobe, ob tatsächlich Asbest enthalten ist.',
    lokalServiceKontext: [
      'Die Aufnahme von Floor-Flex-Platten in Dülmen beginnt bei uns mit einer kostenlosen Besichtigung und einer Materialprobe. Floor-Flex sind Vinyl-Asbest-Fliesen, die fest gebundenen Asbest enthalten; gefährlich werden sie vor allem beim Brechen oder beim trockenen Abschleifen des darunterliegenden Klebers. Wir nehmen die Platten daher möglichst ganz und staubarm auf, ohne sie zu zerbrechen, und behandeln den oft asbest- oder teerhaltigen Kleber im selben Arbeitsgang mit dem passenden Verfahren. Bei größerer Fläche richten wir einen abgeschotteten Bereich ein.',
      'In den Wohnhäusern und Verwaltungsbauten der Dülmener Innenstadt ebenso wie in älteren Gebäuden in Buldern, Hausdülmen und Hiddingsel liegen Floor-Flex-Platten häufig unter neueren Bodenbelägen verborgen. Sie wurden bis zum Asbest-Totalverbot 1993 in großem Umfang verlegt und tauchen heute bei fast jeder Kernsanierung wieder auf. Wir erfassen bei der Besichtigung den gesamten Bodenaufbau, damit auch der darunterliegende Kleber und mögliche Estrichschichten richtig eingeordnet werden.',
      'Die Aufnahme asbesthaltiger Floor-Flex-Platten ist nach TRGS 519 anzeigepflichtig. Wir zeigen die Arbeiten objektbezogen bei der zuständigen Arbeitsschutzbehörde, der Bezirksregierung Münster, an - das übernehmen wir für Sie. Die aufgenommenen Platten und der anhaftende Kleber gehen als gefährlicher Abfall über den Abfallschlüssel AVV 17 06 05* zur Entsorgung. Sie erhalten eine lückenlose Dokumentation mit Analyseergebnis und Entsorgungsnachweis, sodass Ihr Bodenprojekt in Dülmen von Anfang an rechtssicher abläuft.',
    ],
    comboFaqs: [
      {
        frage: 'Ist die Floor-Flex-Entfernung in Dülmen anzeigepflichtig?',
        antwort:
          'Ja. Floor-Flex-Platten enthalten Asbest, ihre Aufnahme ist nach TRGS 519 anzeigepflichtig. Zuständige Arbeitsschutzbehörde für Dülmen im Kreis Coesfeld ist die Bezirksregierung Münster. Diese Anzeige übernehmen wir vor Beginn der Arbeiten vollständig für Sie, sodass Ihr Bodenprojekt in der Innenstadt oder in Buldern von Anfang an rechtssicher abläuft.',
      },
      {
        frage: 'Was ist mit dem schwarzen Kleber unter den Platten?',
        antwort:
          'Der schwarze Kleber unter Floor-Flex ist oft asbest- oder teerhaltig und muss zusammen mit den Platten fachgerecht behandelt werden. Wir nehmen ihn staubarm auf, je nach Befund nach TRGS 519 oder TRGS 524/551, und schleifen ihn nicht trocken ab. So bleibt der Untergrund sauber für den neuen Bodenbelag und die Faser- und Staubfreisetzung kontrolliert.',
      },
      {
        frage: 'Was kostet die Floor-Flex-Entfernung in Dülmen?',
        antwort:
          'Der Preis hängt von der Fläche, dem Zustand der Platten und dem darunterliegenden Kleber ab. Eine kleine Fläche lässt sich anders kalkulieren als eine ganze Etage. Verbindliche Zahlen nennen wir erst nach einer kostenlosen Besichtigung vor Ort als Festpreis, inklusive Anzeige und fachgerechter Entsorgung, ohne versteckte Nachträge.',
      },
    ],
  },
  'pak-sanierung/duelmen': {
    leistung: 'pak-sanierung',
    stadt: 'duelmen',
    metaTitle: 'PAK-Sanierung Dülmen nach TRGS 524/551 | Asbesta',
    metaDescription:
      'PAK-Sanierung in Dülmen: Teerkleber, Parkettpech und alte Dachbahnen nach TRGS 524/551. PAK ist kein Asbest. Festpreis nach Besichtigung.',
    intro:
      'Asbesta saniert PAK-belastete Materialien in Dülmen - etwa Teerkleber, Parkettpech und alte Dachbahnen - nach den Vorgaben der TRGS 524 und 551. Als Fachbetrieb mit Sachkunde nach TRGS 519 und 524 und Sitz in Marl reisen wir rund 30 km über die A43 in den Kreis Coesfeld an. Wichtig vorweg: PAK ist kein Asbest und wird nach eigenen Regeln behandelt.',
    lokalServiceKontext: [
      'Eine PAK-Sanierung in Dülmen beginnt bei uns mit einer kostenlosen Besichtigung und einer Materialanalyse. PAK, also polyzyklische aromatische Kohlenwasserstoffe, stecken in alten Teerklebern unter Parkett, in Parkettpech, in Klebebitumen sowie in alten Teer- und Dachbahnen. Sie sind kein Asbest, werden aber nach den TRGS 524 und 551 behandelt, weil ihre Stäube und Dämpfe gesundheitsschädlich sind. Wir nehmen die belasteten Schichten staubarm und ohne trockenes Aufschleifen auf, sichern den Arbeitsbereich ab und sorgen für eine geregelte Entsorgung.',
      'In den Wohnhäusern der Dülmener Innenstadt und in älteren Gebäuden von Buldern, Hausdülmen und Rorup finden sich PAK-haltige Teerkleber häufig unter altem Parkett und PVC, in Estrichen oder unter Flachdächern aus der Zeit vor dem Totalverbot 1993. Oft liegen PAK und Asbest im selben Bodenaufbau nebeneinander - etwa PAK-Teerkleber unter asbesthaltigen Floor-Flex-Platten. Genau deshalb erkunden wir vorab den gesamten Aufbau und grenzen die Stoffe sauber voneinander ab, bevor wir mit der Sanierung beginnen.',
      'Bei der PAK-Sanierung ist die saubere fachliche Abgrenzung entscheidend: PAK fällt unter die TRGS 524 und 551, Asbest dagegen unter die TRGS 519 mit Anzeigepflicht bei der Bezirksregierung Münster, alte Mineralwolle unter die TRGS 521. Stoßen wir bei der Erkundung zusätzlich auf Asbest, übernehmen wir auch dessen objektbezogene Anzeige. Die PAK-belasteten Materialien entsorgen wir fachgerecht und getrennt als gefährlichen Abfall. Sie erhalten eine lückenlose Dokumentation, die jeden Stoff klar benennt und einordnet.',
    ],
    comboFaqs: [
      {
        frage: 'Ist PAK dasselbe wie Asbest?',
        antwort:
          'Nein. PAK, polyzyklische aromatische Kohlenwasserstoffe, sind eine eigene Schadstoffgruppe in Teerklebern, Parkettpech und alten Dachbahnen. Sie werden nach TRGS 524 und 551 behandelt, Asbest dagegen nach TRGS 519. PAK ist also kein Asbest, aber ebenfalls gesundheitsschädlich. In vielen Dülmener Böden treten beide Stoffe zusammen auf, weshalb wir sie bei der Erkundung sauber voneinander abgrenzen.',
      },
      {
        frage: 'Muss eine PAK-Sanierung bei der Bezirksregierung Münster angezeigt werden?',
        antwort:
          'Die Anzeigepflicht nach TRGS 519 bei der Bezirksregierung Münster gilt für Asbestarbeiten. Eine reine PAK-Sanierung fällt unter die TRGS 524 und 551, hier richtet sich das Vorgehen nach dem Gefährdungsgrad. Treffen wir bei der Erkundung in Dülmen zusätzlich auf Asbest, übernehmen wir dessen objektbezogene Anzeige bei der Bezirksregierung Münster selbstverständlich mit.',
      },
      {
        frage: 'Woran erkenne ich PAK in meinem Dülmener Haus?',
        antwort:
          'PAK-haltige Materialien fallen oft durch einen typischen teerartigen Geruch auf, etwa beim schwarzen, glänzenden Kleber unter altem Parkett oder bei alten Dachbahnen. Sicher feststellen lässt sich PAK aber nur im Labor. Wir entnehmen bei der Besichtigung eine Probe und besprechen nach dem Befund das weitere Vorgehen - entnehmen Sie keine Proben selbst und schleifen Sie verdächtige Schichten nicht trocken ab.',
      },
    ],
  },
  'kmf-sanierung/duelmen': {
    leistung: 'kmf-sanierung',
    stadt: 'duelmen',
    metaTitle: 'KMF-Sanierung Dülmen | TRGS 521 | Asbesta',
    metaDescription:
      'KMF-Sanierung in Dülmen: alte Glas- und Steinwolle vor 2000 nach TRGS 521 ausbauen. KMF ist kein Asbest. Festpreis nach kostenloser Besichtigung.',
    intro:
      'Asbesta baut alte künstliche Mineralfasern (KMF) in Dülmen fachgerecht aus - Glas- und Steinwolle, die vor dem Jahr 2000 verbaut wurde - nach den Vorgaben der TRGS 521. Als inhabergeführter Fachbetrieb mit Sitz in Marl reisen wir rund 30 km über die A43 in den Kreis Coesfeld an. Wichtig vorweg: KMF ist kein Asbest und wird nach eigenen Regeln behandelt.',
    lokalServiceKontext: [
      'Eine KMF-Sanierung in Dülmen beginnt bei uns mit einer kostenlosen Besichtigung vor Ort. Alte Mineralwolle, also Glas- und Steinwolle, die vor 2000 hergestellt wurde, kann lungengängige Fasern freisetzen und wird deshalb nach der TRGS 521 behandelt. Wir bauen die Dämmung staubarm aus, befeuchten sie bei Bedarf, vermeiden unnötiges Aufwirbeln und verpacken das Material staubdicht. So bleibt die Faserbelastung beim Ausbau aus Dachschrägen, Geschossdecken oder vorgehängten Konstruktionen kontrolliert und für Bewohner und nachfolgende Gewerke gering.',
      'In Dülmen findet sich alte Mineralwolle in vielen Nachkriegs- und Bestandsbauten: in Dachdämmungen und Zwischensparren, in abgehängten Decken, hinter Trockenbauwänden und in technischen Anlagen. Rund um die Innenstadt ebenso wie in Buldern, Hausdülmen und Hiddingsel stoßen Eigentümer bei der Modernisierung von Dach und Fassade häufig auf solche Dämmstoffe. Wir erfassen bei der Besichtigung, wo die alte Mineralwolle verbaut ist, und planen den Ausbau so, dass er sich nahtlos in Ihre Sanierung einfügt.',
      'Bei der KMF-Sanierung ist die fachliche Abgrenzung wichtig: Alte Mineralwolle fällt unter die TRGS 521, ist aber ausdrücklich kein Asbest und unterliegt nicht der Anzeigepflicht nach TRGS 519 bei der Bezirksregierung Münster. Für KMF-Arbeiten ist auch kein eigenes Betriebs-Zertifikat erforderlich; wir führen sie nach den anerkannten Schutzmaßnahmen der TRGS 521 durch. Stoßen wir bei der Erkundung zusätzlich auf Asbest, behandeln wir diesen getrennt nach TRGS 519. Das ausgebaute KMF-Material entsorgen wir fachgerecht als gesonderten Abfall mit entsprechendem Nachweis.',
    ],
    comboFaqs: [
      {
        frage: 'Ist alte Mineralwolle dasselbe wie Asbest?',
        antwort:
          'Nein. Künstliche Mineralfasern (KMF) wie alte Glas- und Steinwolle sind kein Asbest. Sie werden nach der TRGS 521 behandelt, Asbest dagegen nach der TRGS 519. Vor 2000 verbaute Mineralwolle kann allerdings lungengängige Fasern freisetzen und sollte deshalb fachgerecht und staubarm ausgebaut werden. Wir grenzen KMF und Asbest bei der Erkundung in Dülmen klar voneinander ab.',
      },
      {
        frage: 'Muss eine KMF-Sanierung bei der Bezirksregierung Münster angezeigt werden?',
        antwort:
          'Nein. Die Anzeigepflicht nach TRGS 519 bei der Bezirksregierung Münster gilt für Asbestarbeiten, nicht für alte Mineralwolle. KMF-Arbeiten richten sich nach der TRGS 521 und erfordern weder diese Anzeige noch ein eigenes Betriebs-Zertifikat. Wir führen sie nach den anerkannten Schutzmaßnahmen durch. Treffen wir zusätzlich auf Asbest, übernehmen wir dessen Anzeige selbstverständlich.',
      },
      {
        frage: 'Woran erkenne ich alte Mineralwolle in meinem Dülmener Haus?',
        antwort:
          'Alte Glas- und Steinwolle aus der Zeit vor 2000 wurde vor allem in Dachdämmungen, abgehängten Decken und hinter Trockenbauwänden verbaut. Am Alter der Dämmung lässt sich grob abschätzen, ob es sich um kritische alte Mineralwolle handelt. Bei der Besichtigung beurteilen wir das vor Ort und empfehlen, alte Dämmstoffe nicht eigenhändig herauszureißen, da dabei Fasern frei werden.',
      },
    ],
  },
  'asbestsanierung/coesfeld': {
    leistung: 'asbestsanierung',
    stadt: 'coesfeld',
    metaTitle: 'Asbestsanierung TRGS 519 Coesfeld | Asbesta',
    metaDescription:
      'Asbestsanierung nach TRGS 519 in Coesfeld: Schwarzbereich, Unterdruck, Personenschleuse und Freimessung. Festpreis nach kostenloser Besichtigung.',
    intro:
      'Asbesta saniert schwach gebundenen Asbest in Innenräumen in Coesfeld nach den strengen Vorgaben der TRGS 519. Wir arbeiten als sachkundiger, anzeigepflichtiger Fachbetrieb mit abgeschottetem Schwarzbereich, Unterdruckhaltung, Personenschleuse und kontrollierter Freimessung. Unser Sitz ist in Marl, von dort fahren wir rund 40 km über die B58 und A43 ins westliche Münsterland an.',
    lokalServiceKontext: [
      'Eine Asbestsanierung nach TRGS 519 in Coesfeld beginnt bei uns immer mit einer kostenlosen Besichtigung vor Ort und einer Materialanalyse. Erst wenn ein Labor schwach gebundenen Asbest bestätigt, planen wir den anzeigepflichtigen Rückbau. Dafür richten wir einen abgeschotteten Schwarzbereich mit Unterdruckhaltung und Personenschleuse ein, damit keine Fasern in angrenzende Räume gelangen. Nach dem Rückbau folgen Feinreinigung und Freimessung nach VDI 3492, bevor der Bereich wieder freigegeben wird. So bleibt die Belastung für Bewohner und Nachbarn kontrolliert und nachweisbar.',
      'Coesfelds Bausubstanz ist vom Wiederaufbau nach 1945 und von Siedlungsbauten der 1950er- bis 1980er-Jahre geprägt, dazu kommen Höfe und Nebengebäude im Außenbereich. In Wohnquartieren der Innenstadt sowie in Lette und Stockum steckt schwach gebundener Asbest aus der Zeit vor 1993 oft in Spritzputzen, alten Dämmplatten oder Brandschutzverkleidungen im Innenraum. Gerade bei älteren Wohn- und Gewerbebauten ist eine sorgfältige Erkundung vor jedem Eingriff entscheidend, damit nichts unkontrolliert aufgebrochen wird.',
      'Jede anzeigepflichtige Asbestsanierung in Coesfeld muss objektbezogen bei der zuständigen Arbeitsschutzbehörde angezeigt werden - das ist für den Kreis Coesfeld die Bezirksregierung Münster. Diese Anzeige übernehmen wir für Sie und halten die gesetzlichen Fristen ein. Wichtig ist die saubere fachliche Abgrenzung: Floor-Flex-Platten und Bitumenkleber in Böden oder Welleternit an Dach und Fassade enthalten zwar Asbest, alte Mineralwolle in Dämmungen fällt dagegen unter die TRGS 521, PAK in Klebern und Teer unter die TRGS 524 und 551. KMF und PAK sind kein Asbest. Wir benennen jedes Material klar und wählen das passende Verfahren.',
    ],
    comboFaqs: [
      {
        frage: 'Ist eine Asbestsanierung in Coesfeld immer anzeigepflichtig?',
        antwort:
          'Arbeiten an schwach gebundenem Asbest nach TRGS 519 sind anzeigepflichtig und müssen objektbezogen bei der Bezirksregierung Münster angezeigt werden. Diese Anzeige übernehmen wir für Sie und richten den abgeschotteten Schwarzbereich mit Unterdruck und Personenschleuse ein. So bleibt die Sanierung in der Innenstadt, in Lette oder Stockum rechtssicher und für alle Beteiligten nachvollziehbar dokumentiert.',
      },
      {
        frage: 'Woran erkenne ich schwach gebundenen Asbest in einem Coesfelder Altbau?',
        antwort:
          'Sicher erkennbar ist Asbest nur im Labor. In den Wiederaufbau- und Nachkriegsbauten Coesfelds stecken verdächtige Materialien oft in Spritzputzen, alten Dämmplatten oder Brandschutzverkleidungen. Wir nehmen bei der Besichtigung Proben und lassen sie analysieren. Erst nach dem Befund entscheiden wir über das Verfahren - so vermeiden Sie unnötige Eingriffe und unkontrollierte Faserfreisetzung im bewohnten Gebäude.',
      },
      {
        frage: 'Wie schnell ist Asbesta aus Marl in Coesfeld vor Ort?',
        antwort:
          'Unser Sitz ist in Marl, von dort sind es rund 40 km über die B58 und A43 bis Coesfeld - ein Termin ist meist kurzfristig möglich. Ein eigenes Büro vor Ort haben wir nicht, wir sind in ganz NRW tätig. Nach der kostenlosen Besichtigung erhalten Sie einen verbindlichen Festpreis, der von Material, Umfang und Zugänglichkeit abhängt.',
      },
    ],
  },
  'abbrucharbeiten/coesfeld': {
    leistung: 'abbrucharbeiten',
    stadt: 'coesfeld',
    metaTitle: 'Abbrucharbeiten Coesfeld | Rückbau TRGS 519 | Asbesta',
    metaDescription:
      'Kontrollierter Abbruch und schadstoffgetrennter Rückbau in Coesfeld nach Schadstofferkundung. Festpreis nach kostenloser Besichtigung.',
    intro:
      'Asbesta plant und führt kontrollierten Abbruch und Rückbau in Coesfeld aus - von der Schadstofferkundung bis zum selektiven, schadstoffgetrennten Rückbau. Wir kommen aus Marl rund 40 km über die B58 und A43 ins westliche Münsterland und arbeiten nach TRGS 519, 521 und 524. Vor jedem Eingriff klären wir, welche Materialien verbaut sind und welche Stoffströme getrennt entsorgt werden müssen.',
    lokalServiceKontext: [
      'Ein kontrollierter Rückbau in Coesfeld beginnt bei uns nicht mit dem Bagger, sondern mit der Schadstofferkundung. Wir erkunden das Objekt, entnehmen Materialproben und lassen sie analysieren, bevor irgendetwas bewegt wird. Erst wenn klar ist, ob Asbest, alte Mineralwolle oder PAK-belastete Kleber vorliegen, planen wir den selektiven Rückbau. Die belasteten Fraktionen werden zuerst und gesichert ausgebaut, die mineralischen Reststoffe danach separat. So bleiben die Stoffströme sauber getrennt und die Anfahrt aus Marl für Sie planbar.',
      'Coesfelds Bausubstanz ist gemischt: In der wiederaufgebauten Innenstadt und in Siedlungsbauten von Lette und Stockum prägen Nachkriegsbauten das Bild, im Außenbereich von Goxel, Flamschen und Harle kommen Höfe mit Scheunen, Stallungen und Nebengebäuden hinzu. In solchen Gebäuden finden sich häufig Floor-Flex-Platten und Bitumenkleber in Böden, Welleternit und Asbestzement an Dach und Fassade sowie KMF-Dämmungen. Bei landwirtschaftlichen Objekten planen wir die Erschließung und Logistik gezielt mit ein, damit Abtransport und Schadstofftrennung ineinandergreifen.',
      'Asbest unterliegt seit dem Totalverbot 1993 strengen Regeln. Steht bei einem Abbruch in Coesfeld asbesthaltiges Material an, erstatten wir die objektbezogene Anzeige nach TRGS 519 bei der zuständigen Arbeitsschutzbehörde, der Bezirksregierung Münster. Alte Mineralwolle behandeln wir nach TRGS 521, PAK-belastete Teer- und Klebstoffreste nach TRGS 524 beziehungsweise 551 - beides ist kein Asbest, wird aber ebenso fachgerecht getrennt und entsorgt. Sie erhalten von uns eine verbindliche Dokumentation und einen klaren Ablauf.',
    ],
    comboFaqs: [
      {
        frage: 'Wie läuft ein Abbruch mit Schadstoffen in Coesfeld ab?',
        antwort:
          'Zuerst erkunden wir die Schadstoffe, entnehmen Proben und lassen sie analysieren. In Coesfelder Bauten finden wir oft Floor-Flex-Böden, Bitumenkleber oder Welleternit. Belastete Materialien bauen wir gesichert und getrennt aus, danach folgt der mineralische Rückbau. Bei Asbest erstatten wir vorab die Anzeige nach TRGS 519 bei der Bezirksregierung Münster.',
      },
      {
        frage: 'Was kostet ein kontrollierter Rückbau in Coesfeld?',
        antwort:
          'Eine seriöse Pauschale gibt es nicht: Der Preis hängt von Objektgröße, Schadstoffart und Zugänglichkeit ab - ein Hof im Außenbereich ist anders zu kalkulieren als ein Reihenhaus in der Innenstadt. Verbindlich nennen wir den Festpreis nach einer kostenlosen Besichtigung vor Ort, ohne versteckte Nachträge.',
      },
      {
        frage: 'Sind PAK und KMF dasselbe wie Asbest?',
        antwort:
          'Nein. Alte Mineralwolle (KMF) in Dämmungen und PAK in Teer- und Klebstoffresten sind eigene Schadstoffgruppen, die wir nach TRGS 521 beziehungsweise TRGS 524/551 behandeln. Asbest fällt unter TRGS 519. In vielen Coesfelder Bauten treten mehrere dieser Stoffe zusammen auf - deshalb klären wir sie bei der Erkundung sauber ab und trennen die Stoffströme im Rückbau konsequent.',
      },
    ],
  },
  'welleternit-ausbauen/coesfeld': {
    leistung: 'welleternit-ausbauen',
    stadt: 'coesfeld',
    metaTitle: 'Welleternit ausbauen in Coesfeld | Asbesta',
    metaDescription:
      'Welleternit in Coesfeld zerstörungsfrei ausbauen: Demontage asbesthaltiger Wellplatten nach TRGS 519, Big-Bag-Entsorgung. Jetzt Besichtigung anfragen.',
    intro:
      'Asbesta baut asbesthaltige Welleternit-Platten in Coesfeld zerstörungsfrei aus - von Scheunen- und Stalldächern in Goxel und Flamschen bis zu Garagen und Nebengebäuden in der Innenstadt und in Lette. Als sachkundiger Fachbetrieb mit Sitz in Marl reisen wir rund 40 km über die B58 und A43 an und übernehmen die staubarme Demontage samt fachgerechter Big-Bag-Entsorgung unter AVV 17 06 05*. Vor jeder Arbeit klären wir per Materialprobe, ob Asbest vorliegt.',
    lokalServiceKontext: [
      'Der Welleternit-Ausbau in Coesfeld beginnt bei uns mit einer kostenlosen Besichtigung vor Ort. Da Welleternit aus fest gebundenen Asbestzement-Wellplatten besteht, dürfen sie weder gebrochen, hochdruckgereinigt noch überstrichen werden - das würde Fasern freisetzen. Stattdessen lösen wir die Platten zerstörungsfrei, indem wir die Befestigungen vorsichtig öffnen und die Platten einzeln abnehmen. Bei unklarem Material entnehmen wir vorab eine Probe zur Laboranalyse. Erst nach gesicherter Diagnose und freigegebener Anzeige planen wir den staubarmen Ausbau auf Ihrem Dach oder Nebengebäude.',
      'Coesfelds Bausubstanz prägt die Arbeit deutlich. Im landwirtschaftlich geprägten Umland von Goxel, Flamschen, Harle und Sirksfeld finden sich Welleternit-Dächer sehr häufig auf großen Scheunen, Stallungen und Maschinenhallen, während die Wohnquartiere der Innenstadt und in Lette oder Stockum eher Garagen, Carports und Anbauten mit Wellplatten tragen. Wir stimmen Anfahrt, Materialtransport und Big-Bag-Stellplatz auf die jeweilige Lage ab, ob beengter Hinterhof in der Stadt oder weitläufiger Hof im Außenbereich.',
      'Für die gesetzlich vorgeschriebene Asbest-Anzeige nach TRGS 519 ist im Kreis Coesfeld die Bezirksregierung Münster die zuständige Arbeitsschutzbehörde. Diese Anzeige reichen wir vor Beginn der Arbeiten ein - das übernehmen wir für Sie. Die demontierten Welleternit-Platten verpacken wir staubdicht in Big-Bags und entsorgen sie als gefährlichen Abfall unter dem Abfallschlüssel AVV 17 06 05*. Sie erhalten die Entsorgungsnachweise lückenlos, sodass der gesamte Ablauf vom Ausbau bis zur Deponie rechtssicher dokumentiert bleibt.',
    ],
    comboFaqs: [
      {
        frage: 'Was kostet der Welleternit-Ausbau in Coesfeld?',
        antwort:
          'Der Preis hängt von Plattenfläche, Dachhöhe und Zugänglichkeit ab - gerade auf großen Scheunendächern in Goxel oder Flamschen unterscheidet sich der Aufwand deutlich von einer kleinen Garage in der Innenstadt. Den verbindlichen Festpreis inklusive Entsorgung nennen wir nach kostenloser Besichtigung vor Ort, ohne versteckte Nachträge.',
      },
      {
        frage: 'Brauche ich für den Ausbau in Coesfeld eine behördliche Anzeige?',
        antwort:
          'Ja. Arbeiten an asbesthaltigem Welleternit müssen vor Beginn nach TRGS 519 angezeigt werden. Zuständige Arbeitsschutzbehörde für den Kreis Coesfeld ist die Bezirksregierung Münster. Diese Anzeige übernehmen wir vollständig für Sie, sodass Ihr Projekt von Anfang an rechtssicher und ordnungsgemäß abläuft.',
      },
      {
        frage: 'Kann das Welleternit-Dach auf meiner Scheune nicht einfach überstrichen werden?',
        antwort:
          'Nein. Überstreichen, Hochdruckreinigen oder Brechen von Welleternit ist unzulässig, weil dabei Asbestfasern freigesetzt werden. Seit dem Totalverbot 1993 ist nur der zerstörungsfreie Ausbau durch einen Fachbetrieb erlaubt. Wir demontieren die Platten staubarm nach TRGS 519 und entsorgen sie unter AVV 17 06 05* - das ist in Coesfeld die einzig zulässige und dauerhaft sichere Lösung.',
      },
    ],
  },
  'fassadenplatten-ausbauen/coesfeld': {
    leistung: 'fassadenplatten-ausbauen',
    stadt: 'coesfeld',
    metaTitle: 'Fassadenplatten ausbauen Coesfeld | Asbesta',
    metaDescription:
      'Asbest-Fassadenplatten in Coesfeld fachgerecht ausbauen nach TRGS 519, oft vor der energetischen Sanierung. Kostenlose Besichtigung anfragen.',
    intro:
      'Asbesta baut asbesthaltige Fassadenplatten und -schindeln in Coesfeld kontrolliert aus - oft als erster Schritt vor einer energetischen Fassadensanierung. Als sachkundiger Fachbetrieb mit Sitz in Marl reisen wir rund 40 km über die B58 und A43 ins westliche Münsterland an und arbeiten nach TRGS 519. Vor jeder Demontage klären wir per Materialprobe, ob die Platten tatsächlich Asbest enthalten.',
    lokalServiceKontext: [
      'Der Ausbau von Asbestzement-Fassadenplatten in Coesfeld beginnt bei uns mit einer kostenlosen Besichtigung und einer Materialprobe. Asbestzement-Platten und -schindeln sind fest gebunden und solange unauffällig, wie sie unversehrt bleiben, setzen aber beim Lösen, Bohren oder Brechen Fasern frei. Wir demontieren die Platten staubarm und kontrolliert, lösen die Befestigungen vorsichtig und nehmen die Elemente einzeln ab. Häufig ist dieser Ausbau der erste Schritt, bevor eine neue, gedämmte Fassade aufgebaut wird.',
      'In Coesfeld finden sich asbesthaltige Fassadenplatten typischerweise an Wohnhäusern und Anbauten der 1960er- bis 1980er-Jahre in der Innenstadt sowie in Lette und Stockum, oft als Verkleidung von Giebeln, Brüstungen oder ganzen Wandflächen. Im Außenbereich von Goxel, Flamschen und Harle treten sie zudem an landwirtschaftlichen Gebäuden und Nebengebäuden auf. Wir stimmen Gerüst, Abschottung und Materialtransport auf die jeweilige Fassade und Lage ab, damit auch an höheren oder schwer zugänglichen Wandflächen sauber gearbeitet wird.',
      'Für die Asbest-Anzeige nach TRGS 519 ist im Kreis Coesfeld die Bezirksregierung Münster zuständig. Diese Anzeige reichen wir vor Beginn der Arbeiten für Sie ein. Die demontierten Fassadenplatten verpacken wir staubdicht und entsorgen sie als gefährlichen Abfall unter dem Abfallschlüssel AVV 17 06 05* mit lückenlosem Nachweis. So liegt vor der energetischen Sanierung eine saubere, faserfreie Wandfläche vor, und Sie erhalten eine prüffähige Dokumentation für Bauamt oder Förderung.',
    ],
    comboFaqs: [
      {
        frage: 'Warum sollten alte Fassadenplatten vor der Dämmung ausgebaut werden?',
        antwort:
          'Asbesthaltige Fassadenplatten dürfen nicht überdämmt, gebohrt oder gebrochen werden, weil dabei Fasern frei werden. Vor einer energetischen Sanierung bauen wir sie deshalb kontrolliert nach TRGS 519 aus und entsorgen sie unter AVV 17 06 05*. Erst auf der faserfreien Wand wird die neue Dämmung aufgebaut. So vermeiden Sie spätere Probleme und erfüllen die gesetzlichen Vorgaben.',
      },
      {
        frage: 'Sind meine Fassadenplatten in Coesfeld überhaupt asbesthaltig?',
        antwort:
          'Das lässt sich von außen nicht sicher sagen. Asbestzement-Platten wurden bis 1993 verbaut, danach folgten faserzementfreie Produkte. Sicherheit gibt nur eine Materialprobe im akkreditierten Labor. Wir entnehmen die Probe bei der Besichtigung fachgerecht und werten sie aus, bevor an der Fassade in der Innenstadt, in Lette oder an einem Hof im Außenbereich gearbeitet wird.',
      },
      {
        frage: 'Welche Behörde ist beim Fassadenausbau in Coesfeld zuständig?',
        antwort:
          'Für den Kreis Coesfeld ist die Bezirksregierung Münster die zuständige Arbeitsschutzbehörde. Den Ausbau asbesthaltiger Fassadenplatten zeigen wir dort vor Beginn der Arbeiten nach TRGS 519 objektbezogen an. Diese Anzeige übernehmen wir vollständig für Sie, sodass Ihr Fassadenprojekt von Anfang an rechtssicher abläuft.',
      },
    ],
  },
  'asbestzement-ausbauen/coesfeld': {
    leistung: 'asbestzement-ausbauen',
    stadt: 'coesfeld',
    metaTitle: 'Asbestzement ausbauen in Coesfeld | Asbesta',
    metaDescription:
      'Asbestzement in Coesfeld fachgerecht ausbauen: Platten, Rohre, Kanäle und Blumenkästen nach TRGS 519, Entsorgung AVV 17 06 05*. Jetzt anfragen.',
    intro:
      'Asbesta baut Asbestzement-Produkte in Coesfeld fachgerecht aus - ob Platten, Rohre, Lüftungskanäle, Fensterbänke oder Blumenkästen. Als sachkundiger Fachbetrieb mit Sitz in Marl reisen wir rund 40 km über die B58 und A43 ins westliche Münsterland an und arbeiten nach TRGS 519. Vor jedem Ausbau klären wir per Materialprobe, ob Asbest vorliegt, und entsorgen anschließend unter AVV 17 06 05*.',
    lokalServiceKontext: [
      'Der Ausbau von Asbestzement in Coesfeld beginnt bei uns mit einer kostenlosen Besichtigung. Asbestzement ist fest gebunden und steckt in vielen Bauteilen, die man auf den ersten Blick nicht damit verbindet: in Wellplatten und Fassadenelementen, in alten Faserzementrohren und Abwasserleitungen, in Lüftungskanälen, Fensterbänken, Blumenkästen und Garteneinfassungen. Solange diese Teile intakt sind, geben sie kaum Fasern ab, beim Sägen, Bohren oder Brechen jedoch schon. Wir bauen sie deshalb zerstörungsfrei und staubarm aus, statt sie zu zertrennen.',
      'In Coesfeld treffen wir Asbestzement quer durch den Bestand an: an Wohnhäusern und Anbauten der Innenstadt sowie in Lette und Stockum, vor allem aber an den Höfen und Nebengebäuden im Außenbereich von Goxel, Flamschen, Harle und Sirksfeld. Dort finden sich neben Dach- und Fassadenplatten oft alte Faserzementrohre und Kanäle. Wir erfassen bei der Besichtigung alle betroffenen Bauteile, damit der Ausbau vollständig geplant werden kann und nichts übersehen wird.',
      'Für die Asbest-Anzeige nach TRGS 519 ist im Kreis Coesfeld die Bezirksregierung Münster zuständig, sofern die Maßnahme anzeigepflichtig ist. Diese Anzeige übernehmen wir für Sie. Sämtliche ausgebauten Asbestzement-Teile verpacken wir staubdicht und entsorgen sie als gefährlichen Abfall unter dem Abfallschlüssel AVV 17 06 05*. Sie erhalten die Entsorgungsnachweise lückenlos, sodass der gesamte Ablauf prüffähig dokumentiert ist.',
    ],
    comboFaqs: [
      {
        frage: 'Welche Asbestzement-Teile baut Asbesta in Coesfeld aus?',
        antwort:
          'Wir bauen sämtliche Asbestzement-Produkte aus: Wellplatten und Fassadenelemente, alte Faserzementrohre und Abwasserleitungen, Lüftungskanäle, Fensterbänke, Blumenkästen und Garteneinfassungen. Alles wird zerstörungsfrei und staubarm nach TRGS 519 ausgebaut und unter AVV 17 06 05* entsorgt. Bei der Besichtigung erfassen wir alle betroffenen Bauteile an Ihrem Objekt in Coesfeld.',
      },
      {
        frage: 'Woran erkenne ich Asbestzement an meinem Coesfelder Gebäude?',
        antwort:
          'Asbestzement wirkt grau, hart und mineralisch und wurde bis 1993 verbaut. Sicher unterscheiden lässt er sich von faserzementfreien Nachfolgeprodukten nur per Materialprobe im akkreditierten Labor. Wir entnehmen die Probe bei der Besichtigung fachgerecht. Bitte sägen oder brechen Sie verdächtige Teile nicht selbst, denn dabei können Asbestfasern frei werden.',
      },
      {
        frage: 'Wie wird Asbestzement in Coesfeld entsorgt?',
        antwort:
          'Ausgebaute Asbestzement-Teile sind gefährlicher Abfall und werden unter dem Abfallschlüssel AVV 17 06 05* entsorgt. Wir verpacken sie staubdicht, transportieren sie zu einer zugelassenen Annahmestelle und übergeben Ihnen die Entsorgungsnachweise. So bleibt die Entsorgung lückenlos dokumentiert und rechtssicher.',
      },
    ],
  },
  'bitumenkleber-entfernen/coesfeld': {
    leistung: 'bitumenkleber-entfernen',
    stadt: 'coesfeld',
    metaTitle: 'Bitumenkleber entfernen Coesfeld | TRGS 519 Asbesta',
    metaDescription:
      'Schwarzen Bitumenkleber in Coesfeld entfernen: saubere Abgrenzung Asbest (TRGS 519) und PAK (TRGS 524/551). Festpreis nach kostenloser Besichtigung.',
    intro:
      'Asbesta entfernt schwarzen, asbest- oder teerhaltigen Bitumenkleber unter alten Bodenbelägen in Coesfeld. Als sachkundiger Fachbetrieb mit Sitz in Marl reisen wir rund 40 km über die B58 und A43 an. Entscheidend ist die richtige Diagnose, denn schwarzer Kleber kann Asbest nach TRGS 519 oder PAK nach TRGS 524/551 enthalten - das grenzen wir vor der Arbeit sauber ab.',
    lokalServiceKontext: [
      'Die Entfernung von schwarzem Bitumenkleber in Coesfeld beginnt bei uns mit einer Materialprobe, denn der Belag sieht in beiden Fällen ähnlich aus. Enthält der Kleber Asbest, gelten die strengen Regeln der TRGS 519 mit Abschottung, Unterdruck und Freimessung. Handelt es sich um teerhaltigen, PAK-belasteten Kleber, arbeiten wir nach TRGS 524 und 551. Wir nehmen den Kleber staubarm und gesichert auf, statt ihn trocken abzuschleifen, und reinigen den Untergrund anschließend so, dass ein neuer Belag aufgebaut werden kann.',
      'In Coesfeld stoßen wir auf schwarzen Bitumenkleber vor allem in Wohngebäuden der 1950er- bis 1980er-Jahre in der Innenstadt sowie in Lette und Stockum, häufig unter altem Parkett, PVC oder Fliesen. Oft liegt darunter zusätzlich ein älterer Estrich. Wir erkunden den gesamten Bodenaufbau, damit klar ist, welche Schichten belastet sind und wie der Aufbau wieder hergestellt werden muss. So vermeiden Sie unangenehme Überraschungen mitten in der Sanierung.',
      'Die saubere Abgrenzung der Stoffe ist hier der Kern unserer Arbeit. Asbest fällt unter TRGS 519 und ist im anzeigepflichtigen Fall objektbezogen bei der Bezirksregierung Münster anzuzeigen, die für den Kreis Coesfeld zuständig ist. PAK ist dagegen kein Asbest und wird nach TRGS 524/551 behandelt. Wir benennen klar, welcher Stoff vorliegt, wählen das passende Verfahren und entsorgen die Reststoffe getrennt und fachgerecht mit lückenlosem Nachweis.',
    ],
    comboFaqs: [
      {
        frage: 'Ist schwarzer Bitumenkleber immer asbesthaltig?',
        antwort:
          'Nein. Schwarzer Kleber unter alten Böden kann Asbest enthalten, häufig steckt aber teerhaltiger, PAK-belasteter Kleber dahinter - beides sieht ähnlich aus. Nur eine Materialprobe im Labor schafft Klarheit. Asbest fällt unter TRGS 519, PAK unter TRGS 524/551. Wir grenzen die Stoffe vor der Arbeit eindeutig ab und wählen danach das richtige Verfahren.',
      },
      {
        frage: 'Worin unterscheidet sich der Asbest- vom PAK-Kleber bei der Sanierung?',
        antwort:
          'Bei asbesthaltigem Kleber arbeiten wir nach TRGS 519 mit Abschottung, Unterdruck und Freimessung nach VDI 3492, anzeigepflichtige Arbeiten melden wir bei der Bezirksregierung Münster. PAK-belasteter Kleber wird nach TRGS 524/551 behandelt; PAK ist kein Asbest. In beiden Fällen nehmen wir den Kleber staubarm auf und entsorgen ihn getrennt und fachgerecht.',
      },
      {
        frage: 'Was kostet die Entfernung von Bitumenkleber in Coesfeld?',
        antwort:
          'Der Preis hängt von Fläche, Untergrund und Schadstoffart ab - asbesthaltiger Kleber erfordert mehr Aufwand als PAK-belasteter. Verbindlich kalkulieren wir erst nach der Materialprobe und einer kostenlosen Besichtigung vor Ort und nennen Ihnen dann einen Festpreis ohne versteckte Nachträge.',
      },
    ],
  },
  'floor-flex-entfernen/coesfeld': {
    leistung: 'floor-flex-entfernen',
    stadt: 'coesfeld',
    metaTitle: 'Floor-Flex entfernen Coesfeld | Asbesta TRGS 519',
    metaDescription:
      'Floor-Flex-Platten in Coesfeld staubarm entfernen: Vinyl-Asbest-Fliesen samt Kleber nach TRGS 519, anzeigepflichtig. Kostenlose Besichtigung anfragen.',
    intro:
      'Asbesta nimmt Floor-Flex-Platten, also Vinyl-Asbest-Fliesen, samt darunterliegendem Kleber in Coesfeld staubarm auf. Als sachkundiger Fachbetrieb mit Sitz in Marl reisen wir rund 40 km über die B58 und A43 ins westliche Münsterland an. Die Arbeit ist nach TRGS 519 anzeigepflichtig, weil beim Lösen der Platten Asbestfasern frei werden können.',
    lokalServiceKontext: [
      'Die Entfernung von Floor-Flex in Coesfeld beginnt bei uns mit einer Materialprobe, denn die festen, oft gesprenkelten Vinyl-Asbest-Fliesen sehen unauffälligen Belägen zum Verwechseln ähnlich. Bestätigt das Labor Asbest, planen wir die anzeigepflichtige Aufnahme nach TRGS 519. Wir lösen die Platten ganzflächig und ohne Bruch, statt sie zu zerschlagen, und nehmen den darunterliegenden schwarzen Kleber gleich mit auf. Der Untergrund wird anschließend so gereinigt, dass ein neuer Bodenaufbau möglich ist.',
      'In Coesfeld liegen Floor-Flex-Platten vor allem in Wohnungen, Fluren, Kellern und Treppenhäusern der 1950er- bis 1980er-Jahre in der Innenstadt sowie in Lette und Stockum, häufig unter neueren Belägen verborgen. Auch in Gewerbe- und Verwaltungsbauten dieser Zeit kommen sie vor. Wir erkunden den gesamten Bodenaufbau und prüfen, ob unter den Fliesen zusätzlich asbest- oder PAK-belasteter Kleber steckt, damit der Umfang der Arbeit von Anfang an klar ist.',
      'Arbeiten an asbesthaltigen Floor-Flex-Platten sind anzeigepflichtig und müssen objektbezogen bei der zuständigen Arbeitsschutzbehörde gemeldet werden - für den Kreis Coesfeld ist das die Bezirksregierung Münster. Diese Anzeige übernehmen wir für Sie. Die aufgenommenen Platten und der Kleber werden staubdicht verpackt und als gefährlicher Abfall unter AVV 17 06 05* entsorgt. Sie erhalten die Entsorgungsnachweise lückenlos.',
    ],
    comboFaqs: [
      {
        frage: 'Sind Floor-Flex-Arbeiten in Coesfeld anzeigepflichtig?',
        antwort:
          'Ja. Floor-Flex-Platten sind Vinyl-Asbest-Fliesen, ihre Aufnahme ist nach TRGS 519 anzeigepflichtig und muss objektbezogen bei der Bezirksregierung Münster gemeldet werden. Diese Anzeige übernehmen wir für Sie. Wir nehmen die Platten staubarm und ohne Bruch auf und entsorgen sie unter AVV 17 06 05*.',
      },
      {
        frage: 'Woran erkenne ich Floor-Flex-Platten in meinem Coesfelder Gebäude?',
        antwort:
          'Floor-Flex-Platten sind meist 25 mal 25 oder 30 mal 30 Zentimeter groß, hart, spröde und oft gesprenkelt, häufig liegt schwarzer Kleber darunter. Sicher unterscheiden lassen sie sich von asbestfreien Fliesen nur per Materialprobe im Labor. Wir entnehmen die Probe bei der Besichtigung. Bitte brechen Sie die Platten nicht selbst heraus, denn dabei werden Fasern frei.',
      },
      {
        frage: 'Kann ich Floor-Flex-Platten nicht einfach überkleben?',
        antwort:
          'Ein Überkleben ist allenfalls eine kurzfristige Notlösung und löst das Problem nicht, denn die Fasern bleiben im Gebäude und werden spätestens beim nächsten Umbau zum Thema. Fachlich sauber ist die staubarme Aufnahme nach TRGS 519 mit fachgerechter Entsorgung. So ist der Boden dauerhaft faserfrei und ein neuer Aufbau rechtssicher möglich.',
      },
    ],
  },
  'pak-sanierung/coesfeld': {
    leistung: 'pak-sanierung',
    stadt: 'coesfeld',
    metaTitle: 'PAK-Sanierung Coesfeld nach TRGS 524/551 | Asbesta',
    metaDescription:
      'PAK-Sanierung in Coesfeld: Teerkleber, Parkettpech und alte Dachbahnen nach TRGS 524/551. PAK ist kein Asbest. Festpreis nach kostenloser Besichtigung.',
    intro:
      'Asbesta saniert PAK-belastete Materialien in Coesfeld - vor allem Teerkleber, Parkettpech und alte Dachbahnen nach TRGS 524 und 551. Als sachkundiger Fachbetrieb mit Sitz in Marl reisen wir rund 40 km über die B58 und A43 ins westliche Münsterland an. Wichtig vorweg: PAK ist kein Asbest, wird aber als eigene Schadstoffgruppe ebenso fachgerecht und getrennt behandelt.',
    lokalServiceKontext: [
      'Eine PAK-Sanierung in Coesfeld beginnt bei uns mit der Erkundung und einer Materialprobe, denn PAK aus Steinkohlenteer steckt in Materialien, die optisch oft an Asbestprodukte erinnern. Typisch ist schwarzer, klebrig-glänzender Teerkleber unter Parkett, das sogenannte Parkettpech, dazu kommen alte teerhaltige Dachbahnen und Abdichtungen. Wir arbeiten nach TRGS 524 und 551, nehmen die belasteten Schichten staubarm und gesichert auf und reinigen den Untergrund so, dass ein neuer Aufbau möglich ist. Bei Verdacht auf zusätzlichen Asbest grenzen wir die Stoffe vorab klar ab.',
      'In Coesfeld finden sich PAK-belastete Materialien vor allem in Wohn- und Verwaltungsbauten der Nachkriegszeit in der Innenstadt sowie in Lette und Stockum, oft unter altem Parkett oder in mehrlagigen Dachaufbauten. Im Außenbereich kommen teerhaltige Abdichtungen an Nebengebäuden hinzu. Wir erfassen den gesamten Aufbau, damit klar ist, welche Schichten belastet sind und wie der Boden oder das Dach wieder hergestellt wird.',
      'Die saubere Abgrenzung ist hier zentral: PAK fällt unter TRGS 524 und 551 und ist ausdrücklich kein Asbest - eine Asbest-Anzeige bei der Bezirksregierung Münster ist für reine PAK-Arbeiten daher nicht erforderlich. Liegt jedoch zusätzlich Asbest vor, etwa in einem darunterliegenden Bitumenkleber, gelten dafür die Regeln der TRGS 519. Wir benennen jeden Stoff klar, wählen das passende Verfahren und entsorgen die Reststoffe getrennt und fachgerecht mit Nachweis.',
    ],
    comboFaqs: [
      {
        frage: 'Ist PAK dasselbe wie Asbest?',
        antwort:
          'Nein. PAK, also polyzyklische aromatische Kohlenwasserstoffe aus Steinkohlenteer, ist eine eigene Schadstoffgruppe und kein Asbest. PAK wird nach TRGS 524 und 551 behandelt, Asbest nach TRGS 519. Beide können im selben Bodenaufbau vorkommen, deshalb grenzen wir die Stoffe bei der Erkundung sauber ab und entsorgen sie getrennt.',
      },
      {
        frage: 'Woran erkenne ich PAK-belastetes Parkettpech in Coesfeld?',
        antwort:
          'Parkettpech ist ein schwarzer, teerartiger, oft glänzender Kleber unter altem Parkett, der bei Wärme weich wird und typisch nach Teer riecht. Sicher nachweisbar ist PAK nur per Materialprobe im Labor. Wir entnehmen die Probe bei der Besichtigung und entscheiden danach über das Verfahren nach TRGS 524/551.',
      },
      {
        frage:
          'Muss eine PAK-Sanierung in Coesfeld bei der Bezirksregierung Münster angezeigt werden?',
        antwort:
          'Reine PAK-Arbeiten nach TRGS 524/551 unterliegen nicht der Asbest-Anzeigepflicht nach TRGS 519, sind aber fachgerecht und mit den nötigen Schutzmaßnahmen auszuführen. Erst wenn zusätzlich Asbest im Bauteil steckt, kommt die objektbezogene Anzeige bei der Bezirksregierung Münster hinzu. Was genau vorliegt, klären wir vorab per Materialprobe.',
      },
    ],
  },
  'kmf-sanierung/coesfeld': {
    leistung: 'kmf-sanierung',
    stadt: 'coesfeld',
    metaTitle: 'KMF-Sanierung Coesfeld | TRGS 521 | Asbesta',
    metaDescription:
      'KMF-Sanierung in Coesfeld: alte Glas- und Steinwolle vor 2000 nach TRGS 521. KMF ist kein Asbest. Festpreis nach kostenloser Besichtigung anfragen.',
    intro:
      'Asbesta saniert alte Mineralwolle (KMF) in Coesfeld - also Glas- und Steinwolle, die vor dem Jahr 2000 verbaut wurde, nach TRGS 521. Als sachkundiger Fachbetrieb mit Sitz in Marl reisen wir rund 40 km über die B58 und A43 ins westliche Münsterland an. Wichtig vorweg: KMF ist kein Asbest, und wir behaupten dafür kein gesondertes Betriebs-Zertifikat - die Arbeit erfolgt fachgerecht nach TRGS 521.',
    lokalServiceKontext: [
      'Eine KMF-Sanierung in Coesfeld beginnt bei uns mit der Erkundung der verbauten Dämmungen. Alte künstliche Mineralfasern, die vor 2000 hergestellt wurden, gelten als gesundheitlich kritisch, weil ihre Fasern lungengängig sein können; neuere Mineralwolle ist davon ausgenommen. Wir bauen die alte Dämmung kontrolliert und staubarm aus, befeuchten sie bei Bedarf, verpacken sie staubdicht und entsorgen sie fachgerecht. Liegt im selben Bauteil zusätzlich Asbest vor, grenzen wir die Stoffe vorab klar ab und behandeln jeden nach seinem eigenen Regelwerk.',
      'In Coesfeld findet sich alte Mineralwolle vor allem in Dächern, obersten Geschossdecken, Trennwänden und hinter Verkleidungen von Gebäuden der 1960er- bis 1990er-Jahre - in der Innenstadt sowie in Lette und Stockum ebenso wie in Stallungen und Nebengebäuden der Höfe in Goxel, Flamschen und Harle. Bei energetischen Sanierungen, bei denen ohnehin neu gedämmt wird, ist der Ausbau der alten KMF oft der erste Arbeitsschritt. Wir erfassen bei der Besichtigung den Umfang, damit Ausbau und Entsorgung sauber geplant werden.',
      'Hier ist die Abgrenzung entscheidend: KMF fällt unter TRGS 521 und ist kein Asbest. Eine Asbest-Anzeige bei der Bezirksregierung Münster ist für reine KMF-Arbeiten daher nicht erforderlich, und ein TRGS-521-Betriebs-Zertifikat gibt es in dieser Form nicht - wir arbeiten sachkundig und nach den Vorgaben der TRGS 521. Steckt jedoch zusätzlich Asbest im Bauteil, gelten dafür die Regeln der TRGS 519 samt Anzeige. Wir benennen jeden Stoff klar und entsorgen die Materialien getrennt und fachgerecht.',
    ],
    comboFaqs: [
      {
        frage: 'Ist alte Mineralwolle (KMF) dasselbe wie Asbest?',
        antwort:
          'Nein. KMF, also alte Glas- und Steinwolle vor 2000, ist eine eigene Schadstoffgruppe und kein Asbest. Sie wird nach TRGS 521 behandelt, Asbest nach TRGS 519. Wir bauen die alte Dämmung staubarm aus und entsorgen sie fachgerecht. Liegt im selben Bauteil zusätzlich Asbest vor, grenzen wir die Stoffe ab und behandeln jeden nach seinem Regelwerk.',
      },
      {
        frage: 'Muss KMF in Coesfeld bei der Bezirksregierung Münster angezeigt werden?',
        antwort:
          'Nein. Reine KMF-Arbeiten nach TRGS 521 unterliegen nicht der Asbest-Anzeigepflicht nach TRGS 519, werden aber fachgerecht und mit den nötigen Schutzmaßnahmen ausgeführt. Erst wenn zusätzlich Asbest im Bauteil steckt, kommt die objektbezogene Anzeige bei der Bezirksregierung Münster hinzu. Was genau vorliegt, klären wir bei der Besichtigung.',
      },
      {
        frage: 'Woran erkenne ich kritische alte Mineralwolle in meinem Coesfelder Gebäude?',
        antwort:
          'Entscheidend ist das Herstellungsdatum: Mineralwolle, die vor dem Jahr 2000 verbaut wurde, gilt als kritisch, neuere ist davon ausgenommen. Optisch lässt sich das nicht sicher unterscheiden, oft hilft das Baujahr oder die Lage hinter alten Verkleidungen weiter. Wir beurteilen das bei der Besichtigung vor Ort und planen den Ausbau nach TRGS 521 entsprechend.',
      },
    ],
  },
  'asbestsanierung/ahaus': {
    leistung: 'asbestsanierung',
    stadt: 'ahaus',
    metaTitle: 'Asbestsanierung TRGS 519 Ahaus | Asbesta',
    metaDescription:
      'Asbestsanierung nach TRGS 519 in Ahaus: Schwarzbereich, Unterdruck, Personenschleuse und Freimessung. Festpreis nach kostenloser Besichtigung.',
    intro:
      'Asbesta saniert schwach gebundenen Asbest in Innenräumen in Ahaus nach den strengen Vorgaben der TRGS 519. Wir arbeiten als anzeigepflichtiger, sachkundiger Fachbetrieb mit abgeschottetem Schwarzbereich, Unterdruckhaltung und kontrollierter Freimessung. Unser Sitz ist in Marl, von dort fahren wir rund 65 km über die A31 ins Westmünsterland an.',
    lokalServiceKontext: [
      'Eine Asbestsanierung nach TRGS 519 in Ahaus beginnt bei uns immer mit einer kostenlosen Besichtigung vor Ort und einer Materialanalyse. Erst wenn ein Labor schwach gebundenen Asbest bestätigt, planen wir den anzeigepflichtigen Rückbau. Dafür richten wir einen abgeschotteten Schwarzbereich mit Unterdruckhaltung und Personenschleuse ein, damit keine Fasern in angrenzende Räume gelangen. Nach dem Rückbau folgen Feinreinigung und Freimessung nach VDI 3492, bevor der Bereich wieder freigegeben wird. So bleibt die Belastung für Bewohner und Nachbarn kontrolliert und nachweisbar.',
      'Ahaus im Kreis Borken ist von einer ländlich-städtischen Mischbebauung geprägt. In der Innenstadt sowie in Wüllen, Wessum und Ottenstein stehen viele Wohnhäuser und Nebengebäude aus der Zeit vor dem Asbest-Totalverbot von 1993. Schwach gebundener Asbest steckt dort häufig in alten Spritzputzen, Dämmplatten oder Brandschutzverkleidungen im Innenraum. Gerade bei den zahlreichen Hofstellen und Wirtschaftsgebäuden im Westmünsterland ist eine sorgfältige Erkundung vor jedem Eingriff entscheidend, damit nichts übersehen wird.',
      'Jede anzeigepflichtige Asbestsanierung in Ahaus muss objektbezogen bei der zuständigen Arbeitsschutzbehörde angezeigt werden - das ist für den Kreis Borken die Bezirksregierung Münster. Diese Anzeige übernehmen wir für Sie und halten die gesetzlichen Fristen ein. Wichtig ist die saubere fachliche Abgrenzung: Floor-Flex-Platten und Bitumenkleber in Böden oder Welleternit an Dach und Fassade enthalten Asbest, künstliche Mineralfasern in Dämmungen fallen dagegen unter die TRGS 521, PAK in alten Klebern und Teer unter die TRGS 524 und 551. KMF und PAK sind kein Asbest. Wir benennen jedes Material klar und wählen das passende Verfahren.',
    ],
    comboFaqs: [
      {
        frage: 'Ist eine Asbestsanierung in Ahaus immer anzeigepflichtig?',
        antwort:
          'Arbeiten an schwach gebundenem Asbest nach TRGS 519 sind anzeigepflichtig und müssen objektbezogen bei der Bezirksregierung Münster angezeigt werden. Diese Anzeige übernehmen wir für Sie und richten den abgeschotteten Schwarzbereich mit Unterdruck und Personenschleuse ein. So bleibt die Sanierung in der Innenstadt, in Wüllen oder Wessum rechtssicher und für alle Beteiligten nachvollziehbar dokumentiert.',
      },
      {
        frage: 'Woran erkenne ich schwach gebundenen Asbest in einem Ahauser Altbau?',
        antwort:
          'Sicher erkennbar ist Asbest nur im Labor. In älteren Wohn- und Wirtschaftsgebäuden in Ahaus stecken verdächtige Materialien oft in Spritzputzen, alten Dämmplatten oder Brandschutzverkleidungen. Wir nehmen bei der Besichtigung Proben und lassen sie analysieren. Erst nach dem Befund entscheiden wir über das Verfahren - so vermeiden Sie unnötige Eingriffe und unkontrollierte Faserfreisetzung im bewohnten Gebäude.',
      },
      {
        frage: 'Wie schnell ist Asbesta aus Marl in Ahaus vor Ort?',
        antwort:
          'Unser Sitz ist in Marl, von dort sind es rund 65 km über die A31 bis Ahaus - ein Termin ist meist kurzfristig möglich. Ein eigenes Büro vor Ort haben wir nicht, wir sind in ganz NRW tätig. Nach der kostenlosen Besichtigung erhalten Sie einen verbindlichen Festpreis, der von Material, Umfang und Zugänglichkeit abhängt.',
      },
    ],
  },
  'abbrucharbeiten/ahaus': {
    leistung: 'abbrucharbeiten',
    stadt: 'ahaus',
    metaTitle: 'Abbrucharbeiten Ahaus | Rückbau TRGS 519 | Asbesta',
    metaDescription:
      'Kontrollierter Abbruch und schadstoffgetrennter Rückbau in Ahaus nach Schadstofferkundung. Festpreis nach kostenloser Besichtigung.',
    intro:
      'Asbesta plant und führt kontrollierten Abbruch und Rückbau in Ahaus aus - von der Schadstofferkundung bis zum selektiven, schadstoffgetrennten Rückbau. Wir kommen aus Marl rund 65 km über die A31 ins Westmünsterland und arbeiten nach TRGS 519, 521 und 524. Vor jedem Eingriff klären wir, welche Materialien verbaut sind und welche Stoffströme getrennt entsorgt werden müssen.',
    lokalServiceKontext: [
      'Ein kontrollierter Rückbau in Ahaus beginnt bei uns nicht mit dem Bagger, sondern mit der Schadstofferkundung. Wir untersuchen das Objekt, entnehmen Materialproben und lassen sie analysieren, bevor irgendetwas bewegt wird. Erst wenn klar ist, ob Asbest, künstliche Mineralfasern oder PAK-belastete Kleber vorliegen, planen wir den selektiven Rückbau. Die belasteten Stoffströme werden zuerst und gesichert ausgebaut, die mineralischen Reststoffe danach getrennt. So bleibt die Anfahrt aus Marl über die A31 für Sie planbar und der Rückbau sauber abgegrenzt.',
      'Ahaus ist von einer Mischung aus städtischer Wohnbebauung und ländlichen Hofstellen geprägt. In der Innenstadt sowie in Wüllen, Wessum und Ottenstein finden sich Floor-Flex-Platten und Bitumenkleber in Böden, dazu Welleternit und Asbestzement an Dächern und Fassaden von Scheunen, Ställen und Nebengebäuden in Alstätte, Graes und Averbeck. Häufig kommen KMF-Dämmungen hinzu. Diese münsterländische Bausubstanz erkunden wir vor dem Rückbau gezielt, damit Logistik und Schadstofftrennung von Anfang an ineinandergreifen.',
      'Asbest unterliegt seit dem Totalverbot 1993 strengen Regeln. Steht bei einem Abbruch in Ahaus asbesthaltiges Material an, erstatten wir die objektbezogene Anzeige nach TRGS 519 bei der zuständigen Arbeitsschutzbehörde, der Bezirksregierung Münster. KMF behandeln wir nach TRGS 521, PAK-belastete Teer- und Klebstoffreste nach TRGS 524 beziehungsweise 551 - beides ist kein Asbest, wird aber ebenso fachgerecht getrennt und entsorgt. Sie erhalten von uns eine verbindliche Dokumentation und einen klaren Ablauf, der zur jeweiligen Bausubstanz passt.',
    ],
    comboFaqs: [
      {
        frage: 'Wie läuft ein Abbruch mit Schadstofferkundung in Ahaus ab?',
        antwort:
          'Zuerst erkunden wir die Schadstoffe, entnehmen Proben und lassen sie analysieren. In älteren Ahauser Gebäuden finden wir oft Floor-Flex-Böden, Bitumenkleber oder Welleternit. Belastete Materialien bauen wir gesichert und getrennt aus, danach folgt der mineralische Rückbau. Bei Asbest erstatten wir vorab die Anzeige nach TRGS 519 bei der Bezirksregierung Münster.',
      },
      {
        frage: 'Was kostet ein kontrollierter Rückbau in Ahaus?',
        antwort:
          'Eine seriöse Pauschale gibt es nicht: Der Preis hängt von Objektgröße, Schadstoffart und Zugänglichkeit ab. Eine Hofstelle in Wessum mit Welleternit-Scheune wird anders kalkuliert als ein Wohnhaus in der Innenstadt. Verbindlich nennen wir den Festpreis erst nach einer kostenlosen Besichtigung vor Ort.',
      },
      {
        frage: 'Sind PAK und KMF dasselbe wie Asbest?',
        antwort:
          'Nein. Künstliche Mineralfasern (KMF) in Dämmungen und PAK in alten Teer- und Klebstoffresten sind eigene Schadstoffgruppen, die wir nach TRGS 521 beziehungsweise TRGS 524/551 behandeln. Asbest fällt unter TRGS 519. In vielen Ahauser Bauten treten mehrere dieser Stoffe zusammen auf - deshalb klären wir sie bei der Erkundung sauber ab und trennen die Stoffströme im Rückbau konsequent.',
      },
    ],
  },
  'welleternit-ausbauen/ahaus': {
    leistung: 'welleternit-ausbauen',
    stadt: 'ahaus',
    metaTitle: 'Welleternit ausbauen in Ahaus | Asbesta',
    metaDescription:
      'Welleternit in Ahaus zerstörungsfrei ausbauen: Demontage asbesthaltiger Wellplatten nach TRGS 519, Big-Bag-Entsorgung. Jetzt Besichtigung anfragen.',
    intro:
      'Asbesta baut asbesthaltige Welleternit-Platten in Ahaus zerstörungsfrei aus - von Scheunen- und Stalldächern in Wessum bis zu Garagen und Schuppen in der Innenstadt. Als sachkundiger Fachbetrieb mit Sitz in Marl reisen wir rund 65 km über die A31 ins Westmünsterland an und übernehmen die staubarme Demontage samt Big-Bag-Entsorgung. Vor jeder Arbeit klären wir per Materialprobe, ob Asbest vorliegt.',
    lokalServiceKontext: [
      'Der Welleternit-Ausbau in Ahaus beginnt bei uns mit einer kostenlosen Besichtigung vor Ort. Da Welleternit fest gebundene Asbestzement-Wellplatten sind, dürfen sie weder gebrochen noch hochdruckgereinigt oder überstrichen werden - das würde Fasern freisetzen. Stattdessen lösen wir die Platten zerstörungsfrei, indem wir die Befestigungen vorsichtig öffnen und die Platten einzeln abnehmen. Bei unklarem Material entnehmen wir vorab eine Probe zur Laboranalyse. Erst nach gesicherter Diagnose und freigegebener Anzeige planen wir den staubarmen Ausbau auf Ihrem Dach oder Nebengebäude.',
      'Die münsterländische Bausubstanz prägt diese Arbeit deutlich. In Ahaus liegt Welleternit besonders häufig auf Scheunen, Stallungen, Remisen und Garagen der zahlreichen Hofstellen in Alstätte, Graes, Ottenstein und Averbeck, während in der Innenstadt und in Wüllen eher Carports, Schuppen und Anbauten betroffen sind. Diese großen Dachflächen auf Wirtschaftsgebäuden erfordern oft gesicherte Gerüste und sorgfältig geplante Zugänge. Wir stimmen Anfahrt, Materialtransport und Big-Bag-Stellplatz auf die jeweilige Lage des Objekts ab.',
      'Für die gesetzlich vorgeschriebene Asbest-Anzeige nach TRGS 519 ist in Ahaus die Bezirksregierung Münster die zuständige Arbeitsschutzbehörde. Diese Anzeige reichen wir vor Beginn der Arbeiten ein - das übernehmen wir für Sie. Die demontierten Welleternit-Platten verpacken wir staubdicht in Big-Bags und entsorgen sie als gefährlichen Abfall unter dem Abfallschlüssel AVV 17 06 05*. Sie erhalten die Entsorgungsnachweise lückenlos. So bleibt der gesamte Ablauf vom Ausbau bis zur Deponie rechtssicher dokumentiert, egal ob Ihr Objekt in Wessum, Wüllen oder der Innenstadt liegt.',
    ],
    comboFaqs: [
      {
        frage: 'Was kostet der Welleternit-Ausbau in Ahaus?',
        antwort:
          'Der Preis hängt von Plattenfläche, Dachhöhe und Zugänglichkeit ab - gerade bei großen Scheunendächern auf Hofstellen in Graes oder Averbeck variiert der Aufwand stark. Eine kleine Garagen- oder Schuppenfläche lässt sich anders kalkulieren als ein komplettes Stalldach. Den verbindlichen Festpreis inklusive Entsorgung nennen wir nach kostenloser Besichtigung vor Ort.',
      },
      {
        frage: 'Brauche ich für den Welleternit-Ausbau in Ahaus eine behördliche Anzeige?',
        antwort:
          'Ja. Arbeiten an asbesthaltigem Welleternit müssen vor Beginn nach TRGS 519 angezeigt werden. Zuständige Arbeitsschutzbehörde für Ahaus im Kreis Borken ist die Bezirksregierung Münster. Diese Anzeige übernehmen wir vollständig für Sie, sodass Ihr Projekt auf der Scheune oder am Wohnhaus von Anfang an rechtssicher und ordnungsgemäß abläuft.',
      },
      {
        frage: 'Kann das Welleternit-Dach auf meiner Scheune nicht einfach überstrichen werden?',
        antwort:
          'Nein. Überstreichen, Hochdruckreinigen oder Brechen von Welleternit ist unzulässig, weil dabei Asbestfasern freigesetzt werden. Seit dem Totalverbot 1993 ist nur der zerstörungsfreie Ausbau durch einen Fachbetrieb erlaubt. Wir demontieren die Platten staubarm nach TRGS 519 und entsorgen sie unter AVV 17 06 05* - das ist in Ahaus die einzig zulässige und dauerhaft sichere Lösung.',
      },
    ],
  },
  'fassadenplatten-ausbauen/ahaus': {
    leistung: 'fassadenplatten-ausbauen',
    stadt: 'ahaus',
    metaTitle: 'Fassadenplatten ausbauen Ahaus | Asbesta',
    metaDescription:
      'Asbesthaltige Fassadenplatten in Ahaus fachgerecht ausbauen nach TRGS 519, oft vor energetischer Sanierung. Kostenlose Besichtigung anfragen.',
    intro:
      'Asbesta baut asbesthaltige Fassadenplatten und -schindeln in Ahaus kontrolliert aus - oft als erster Schritt vor einer energetischen Fassadensanierung. Als sachkundiger Fachbetrieb mit Sitz in Marl fahren wir rund 65 km über die A31 ins Westmünsterland und übernehmen die staubarme Demontage samt Entsorgung. Vor jeder Arbeit klären wir per Materialprobe, ob die Platten Asbest enthalten.',
    lokalServiceKontext: [
      'Der Ausbau von Asbestzement-Fassadenplatten in Ahaus beginnt bei uns mit einer kostenlosen Besichtigung und, bei unklarem Material, einer Laboranalyse. Asbestzement-Platten und -schindeln sind fest gebunden und solange unauffällig, wie sie intakt bleiben, setzen aber beim Bohren, Sägen oder Abreißen Fasern frei. Wir lösen die Platten kontrolliert von der Unterkonstruktion, ohne sie zu brechen, und arbeiten staubarm. Häufig steht dieser Ausbau am Anfang einer energetischen Fassadensanierung - die alte Asbestverkleidung muss zuerst sicher weg, bevor neue Dämmung und Bekleidung aufgebracht werden.',
      'In Ahaus finden sich Asbestzement-Fassadenplatten vor allem an Wohnhäusern, Giebeln und Wirtschaftsgebäuden der 1960er- bis 1980er-Jahre, wie sie in der Innenstadt, in Wüllen, Wessum und Ottenstein zahlreich stehen. Auch verschindelte Wetterseiten und Verkleidungen an Hofstellen in Alstätte und Graes sind betroffen. Diese münsterländische Bausubstanz erschließen wir mit gesichertem Gerüst, damit der Ausbau in jeder Höhe sicher und staubarm gelingt. So lässt sich die Fassade anschließend ohne Schadstoffrisiko energetisch ertüchtigen.',
      'Für die anzeigepflichtige Asbest-Anzeige nach TRGS 519 ist in Ahaus die Bezirksregierung Münster die zuständige Arbeitsschutzbehörde. Diese Anzeige reichen wir vor Beginn der Arbeiten für Sie ein. Die demontierten Fassadenplatten verpacken wir staubdicht und entsorgen sie als gefährlichen Abfall unter dem Abfallschlüssel AVV 17 06 05* mit lückenlosem Nachweis. Sie erhalten eine prüffähige Dokumentation, die auch Ihrem Fassadenbauer für die nachfolgende energetische Sanierung Sicherheit gibt.',
    ],
    comboFaqs: [
      {
        frage: 'Muss die alte Asbest-Fassade vor der Dämmung raus?',
        antwort:
          'Ja. Asbestzement-Fassadenplatten dürfen nicht überdämmt, gebohrt oder gesägt werden, weil dabei Fasern freigesetzt werden. Vor einer energetischen Fassadensanierung in Ahaus bauen wir die alte Verkleidung deshalb zuerst kontrolliert und staubarm nach TRGS 519 aus. Erst danach kann Ihr Fachbetrieb die neue Dämmung und Bekleidung sicher aufbringen.',
      },
      {
        frage: 'Welche Behörde ist für den Fassadenplatten-Ausbau in Ahaus zuständig?',
        antwort:
          'Für Ahaus im Kreis Borken ist die Bezirksregierung Münster die zuständige Arbeitsschutzbehörde. Die anzeigepflichtigen Arbeiten an asbesthaltigen Fassadenplatten melden wir dort vor Beginn objektbezogen nach TRGS 519 an. Diese Anzeige übernehmen wir vollständig für Sie, sodass Ihre Fassadensanierung von Anfang an rechtssicher abläuft.',
      },
      {
        frage: 'Wie erkenne ich, ob meine Fassadenplatten Asbest enthalten?',
        antwort:
          'Sicher erkennbar ist das nur im Labor. Asbestzement-Platten an Ahauser Gebäuden aus der Zeit vor 1993 wirken äußerlich wie harmlose Faserzementplatten. Wir entnehmen bei der Besichtigung eine Materialprobe und lassen sie analysieren. Erst nach dem Befund planen wir den Ausbau - entnehmen Sie keine Proben selbst, da schon das Abbrechen Fasern freisetzen kann.',
      },
    ],
  },
  'asbestzement-ausbauen/ahaus': {
    leistung: 'asbestzement-ausbauen',
    stadt: 'ahaus',
    metaTitle: 'Asbestzement ausbauen in Ahaus | Asbesta',
    metaDescription:
      'Asbestzement in Ahaus fachgerecht ausbauen: Platten, Rohre, Kanäle und Blumenkästen nach TRGS 519, AVV 17 06 05*. Kostenlose Besichtigung.',
    intro:
      'Asbesta baut Asbestzement in Ahaus fachgerecht aus - Platten, Rohre, Kanäle und Blumenkästen werden kontrolliert demontiert und entsorgt. Als sachkundiger Fachbetrieb mit Sitz in Marl fahren wir rund 65 km über die A31 ins Westmünsterland. Vor jeder Arbeit klären wir per Materialprobe, ob das Bauteil tatsächlich asbesthaltigen Zement enthält.',
    lokalServiceKontext: [
      'Der Asbestzement-Ausbau in Ahaus beginnt bei uns mit einer kostenlosen Besichtigung und, falls nötig, einer Laboranalyse. Asbestzement begegnet uns in vielen Formen: als Wellplatten und Fassadenplatten, als Abwasser- und Lüftungsrohre, als Kabelkanäle und Schächte oder als Blumenkästen und Fensterbänke. All diese Produkte sind fest gebunden und unauffällig, solange sie unversehrt sind, werden aber beim Brechen, Bohren oder Sägen zum Risiko. Wir demontieren die Bauteile zerstörungsfrei und staubarm, ohne sie zu zertrümmern, und arbeiten bei Bedarf mit Abschottung und Feinstaubfiltern.',
      'In Ahaus und seinen Ortsteilen Wüllen, Wessum, Ottenstein und Alstätte trifft man Asbestzement in der typischen Bausubstanz vor dem Verbot von 1993 an: Wellplatten auf Scheunen und Schuppen, Fassadenverkleidungen an Wohn- und Wirtschaftsgebäuden, alte Asbestzement-Rohre in Versorgungsleitungen sowie Kanäle und Schächte in Keller und Technik. Auch Blumenkästen und Pflanztröge aus Asbestzement finden sich noch in Gärten und an Hofstellen. Wir nehmen jedes Bauteil einzeln auf und planen den Ausbau passend zur jeweiligen Einbausituation.',
      'Für die anzeigepflichtige Asbest-Anzeige nach TRGS 519 ist in Ahaus die Bezirksregierung Münster die zuständige Arbeitsschutzbehörde. Diese Anzeige übernehmen wir für Sie. Den ausgebauten Asbestzement verpacken wir staubdicht und entsorgen ihn als gefährlichen Abfall unter dem Abfallschlüssel AVV 17 06 05* mit lückenlosem Entsorgungsnachweis. Die abschließende Freimessung erfolgt bei Innenarbeiten nach VDI 3492, sodass Sie eine vollständige, prüffähige Dokumentation erhalten.',
    ],
    comboFaqs: [
      {
        frage: 'Welche Asbestzement-Bauteile baut Asbesta in Ahaus aus?',
        antwort:
          'Wir bauen sämtliche Asbestzement-Produkte aus: Well- und Fassadenplatten, Abwasser- und Lüftungsrohre, Kabelkanäle, Schächte sowie Blumenkästen und Fensterbänke. All das sind fest gebundene Asbestprodukte, die wir zerstörungsfrei und staubarm nach TRGS 519 demontieren und unter AVV 17 06 05* entsorgen - ob in der Innenstadt, in Wüllen oder auf einer Hofstelle in Wessum.',
      },
      {
        frage: 'Sind alte Asbestzement-Rohre und Blumenkästen wirklich gefährlich?',
        antwort:
          'Solange sie unversehrt sind, geben fest gebundene Asbestzement-Bauteile kaum Fasern ab. Gefährlich wird es beim Brechen, Bohren, Sägen oder bei stark verwittertem Material. Deshalb sollten Sie solche Teile weder selbst zerschlagen noch im Hausmüll entsorgen. Wir bauen sie kontrolliert aus und entsorgen sie fachgerecht als gefährlichen Abfall.',
      },
      {
        frage: 'Welche Behörde ist in Ahaus für den Asbestzement-Ausbau zuständig?',
        antwort:
          'Für Ahaus im Kreis Borken ist die Bezirksregierung Münster die zuständige Arbeitsschutzbehörde. Die anzeigepflichtigen Arbeiten nach TRGS 519 melden wir dort vor Beginn objektbezogen an. Diese Anzeige sowie die Entsorgungsnachweise und die Dokumentation übernehmen wir vollständig für Sie.',
      },
    ],
  },
  'bitumenkleber-entfernen/ahaus': {
    leistung: 'bitumenkleber-entfernen',
    stadt: 'ahaus',
    metaTitle: 'Bitumenkleber entfernen Ahaus | TRGS 519 Asbesta',
    metaDescription:
      'Schwarzen Bitumenkleber in Ahaus entfernen: saubere Abgrenzung Asbest TRGS 519 und PAK TRGS 524/551. Festpreis nach kostenloser Besichtigung.',
    intro:
      'Asbesta entfernt schwarzen, asbest- oder teerhaltigen Bitumenkleber unter alten Böden in Ahaus. Als sachkundiger Fachbetrieb nach TRGS 519 und 524 mit Sitz in Marl fahren wir rund 65 km über die A31 ins Westmünsterland. Entscheidend ist die saubere Abgrenzung: Wir klären, ob der Kleber Asbest oder PAK enthält, denn beides verlangt ein anderes Verfahren.',
    lokalServiceKontext: [
      'Schwarzer Bitumenkleber unter alten Bodenbelägen ist in Ahaus ein häufiger Fund - er kann asbesthaltig sein und fällt dann unter die TRGS 519, oder er ist teer- beziehungsweise PAK-haltig und wird nach TRGS 524 und 551 behandelt. Beide sehen sich zum Verwechseln ähnlich. Deshalb beginnt jede Maßnahme bei uns mit einer Materialprobe und einer Laboranalyse, bevor wir den Boden anrühren. Erst nach dem Befund planen wir das passende Verfahren und nehmen den Kleber staubarm und kontrolliert auf, ohne ihn trocken abzuschleifen.',
      'In Ahauser Wohnhäusern und Wirtschaftsgebäuden aus der Zeit vor 1993 liegt dieser Kleber typischerweise unter Floor-Flex-Platten, alten PVC-Bahnen oder Parkett. In der Innenstadt sowie in Wüllen, Wessum und Ottenstein finden wir ihn in Erdgeschoss- und Kellerräumen ebenso wie in umgebauten Hofgebäuden. Je nach Befund grenzen wir den belasteten Bereich ab und sorgen dafür, dass weder asbest- noch PAK-haltiger Staub in angrenzende Räume gelangt. So bleibt der Eingriff auf das nötige Maß beschränkt.',
      'Liegt asbesthaltiger Bitumenkleber vor, ist die Arbeit anzeigepflichtig - wir erstatten die objektbezogene Anzeige nach TRGS 519 bei der Bezirksregierung Münster, der für Ahaus zuständigen Arbeitsschutzbehörde. Asbest fällt unter AVV 17 06 05*, PAK-belasteter Kleber wird als eigener gefährlicher Abfall getrennt entsorgt. Wir benennen klar, womit Sie es zu tun haben, und dokumentieren Analyse, Entsorgung und gegebenenfalls Freimessung lückenlos.',
    ],
    comboFaqs: [
      {
        frage: 'Ist schwarzer Bitumenkleber immer asbesthaltig?',
        antwort:
          'Nein. Schwarzer Kleber unter alten Böden kann Asbest enthalten und fällt dann unter TRGS 519, ebenso oft ist er aber teer- beziehungsweise PAK-haltig und wird nach TRGS 524/551 behandelt. Optisch sind beide nicht zu unterscheiden. Erst eine Laboranalyse zeigt, was vorliegt - deshalb nehmen wir vor jeder Entfernung in Ahaus eine Materialprobe.',
      },
      {
        frage: 'Worin unterscheidet sich die Entfernung von asbest- und PAK-haltigem Kleber?',
        antwort:
          'Asbesthaltiger Bitumenkleber ist anzeigepflichtig nach TRGS 519 und wird unter AVV 17 06 05* entsorgt. PAK-haltiger Teerkleber fällt unter TRGS 524 und 551 und ist ein eigener gefährlicher Abfall - kein Asbest. Beides entfernen wir staubarm und getrennt. Welches Verfahren greift, entscheidet allein der Laborbefund, den wir vorab einholen.',
      },
      {
        frage: 'Welche Behörde ist in Ahaus für asbesthaltigen Bitumenkleber zuständig?',
        antwort:
          'Liegt Asbest vor, ist die Bezirksregierung Münster als Arbeitsschutzbehörde für Ahaus zuständig. Wir erstatten dort vor Beginn die objektbezogene Anzeige nach TRGS 519 und übernehmen die gesamte behördliche Abwicklung für Sie. Bei reinem PAK-Kleber entfällt diese Anzeige, die fachgerechte getrennte Entsorgung bleibt aber Pflicht.',
      },
    ],
  },
  'floor-flex-entfernen/ahaus': {
    leistung: 'floor-flex-entfernen',
    stadt: 'ahaus',
    metaTitle: 'Floor-Flex entfernen Ahaus | Asbesta TRGS 519',
    metaDescription:
      'Floor-Flex-Platten in Ahaus staubarm entfernen: Vinyl-Asbest-Fliesen samt Kleber, anzeigepflichtig nach TRGS 519. Kostenlose Besichtigung anfragen.',
    intro:
      'Asbesta entfernt Floor-Flex-Platten in Ahaus staubarm und vollständig - die Vinyl-Asbest-Fliesen werden samt anhaftendem Kleber aufgenommen. Als sachkundiger Fachbetrieb mit Sitz in Marl fahren wir rund 65 km über die A31 ins Westmünsterland. Die Arbeit ist anzeigepflichtig nach TRGS 519, die Anzeige übernehmen wir für Sie.',
    lokalServiceKontext: [
      'Floor-Flex-Platten - auch Vinyl-Asbest-Fliesen genannt - sind in Ahaus ein Klassiker in Gebäuden aus der Zeit vor 1993. Sie wurden meist mit schwarzem Bitumenkleber verlegt, der seinerseits Asbest oder PAK enthalten kann. Deshalb nehmen wir die Platten nie trocken hoch, sondern lösen sie samt Kleber kontrolliert und staubarm vom Untergrund. Vor Beginn entnehmen wir eine Materialprobe und lassen sie analysieren, damit das Verfahren genau zum Befund passt und keine Fasern unkontrolliert freigesetzt werden.',
      'In Ahaus finden wir Floor-Flex-Böden in Wohnhäusern, Fluren, Kellern und umgebauten Hofgebäuden der Innenstadt sowie in Wüllen, Wessum, Ottenstein und Alstätte. Oft liegen mehrere Belagschichten übereinander, sodass die alten Platten erst beim Ausbau zum Vorschein kommen. Wir grenzen den Arbeitsbereich ab, arbeiten mit Feinstaubfiltern und reinigen anschließend gründlich, damit der Raum für die nachfolgenden Gewerke - etwa neuen Estrich oder Bodenbelag - sauber übergeben werden kann.',
      'Die Entfernung asbesthaltiger Floor-Flex-Platten ist anzeigepflichtig nach TRGS 519. Wir erstatten die objektbezogene Anzeige bei der Bezirksregierung Münster, der für Ahaus im Kreis Borken zuständigen Arbeitsschutzbehörde. Platten und Kleber entsorgen wir als gefährlichen Abfall unter dem Abfallschlüssel AVV 17 06 05*. Bei größeren Flächen schließen wir mit einer Freimessung nach VDI 3492 ab, sodass Sie eine lückenlose Dokumentation für Bauamt oder Käufer erhalten.',
    ],
    comboFaqs: [
      {
        frage: 'Sind Floor-Flex-Platten gefährlich und muss ich sie entfernen lassen?',
        antwort:
          'Floor-Flex-Platten enthalten fest gebundenen Asbest und sind im verlegten, intakten Zustand zunächst unauffällig. Gefährlich wird es beim Herausbrechen, Schleifen oder bei einer Sanierung. Steht ein Umbau oder neuer Bodenaufbau an, sollten die Platten samt Kleber fachgerecht nach TRGS 519 entfernt werden - das übernehmen wir staubarm und anzeigepflichtig für Sie.',
      },
      {
        frage: 'Warum ist die Floor-Flex-Entfernung in Ahaus anzeigepflichtig?',
        antwort:
          'Weil Floor-Flex-Platten asbesthaltig sind, fallen die Arbeiten unter TRGS 519 und müssen vor Beginn objektbezogen angezeigt werden. Zuständig ist in Ahaus die Bezirksregierung Münster. Diese Anzeige übernehmen wir vollständig für Sie, sodass Ihre Bodensanierung in der Innenstadt, in Wüllen oder Wessum rechtssicher abläuft.',
      },
      {
        frage: 'Kann ich Floor-Flex-Platten nicht einfach selbst herausreißen?',
        antwort:
          'Nein, davon raten wir dringend ab. Beim trockenen Herausreißen brechen die Platten und setzen Asbestfasern frei, außerdem ist die Entsorgung über den Hausmüll unzulässig. Wir nehmen die Platten samt Kleber staubarm auf, entsorgen sie unter AVV 17 06 05* und dokumentieren alles - das ist die einzig zulässige und sichere Lösung.',
      },
    ],
  },
  'pak-sanierung/ahaus': {
    leistung: 'pak-sanierung',
    stadt: 'ahaus',
    metaTitle: 'PAK-Sanierung Ahaus nach TRGS 524/551 | Asbesta',
    metaDescription:
      'PAK-Sanierung in Ahaus nach TRGS 524/551: Teerkleber, Parkettpech und alte Dachbahnen. PAK ist kein Asbest. Festpreis nach Besichtigung.',
    intro:
      'Asbesta saniert PAK-belastete Materialien in Ahaus nach TRGS 524 und 551 - von Teerklebern unter Böden über Parkettpech bis zu alten Dachbahnen. Als sachkundiger Fachbetrieb nach TRGS 524 mit Sitz in Marl fahren wir rund 65 km über die A31 ins Westmünsterland. Wichtig vorweg: PAK ist kein Asbest und wird nach eigenen Regeln behandelt.',
    lokalServiceKontext: [
      'Eine PAK-Sanierung in Ahaus beginnt bei uns mit einer kostenlosen Besichtigung und einer Materialprobe. PAK - polyzyklische aromatische Kohlenwasserstoffe - stecken vor allem in alten Teerklebern unter Parkett und Holzpflaster, im sogenannten Parkettpech sowie in alten Teer-Dachbahnen und Bitumenanstrichen. Diese Stoffe riechen oft typisch teerig. Wir nehmen sie staubarm und kontrolliert nach TRGS 524 und 551 auf, ohne sie trocken abzuschleifen, und grenzen den Arbeitsbereich sauber ab, damit keine Belastung in angrenzende Räume gelangt.',
      'In Ahaus finden wir PAK-Belastungen häufig in Wohnhäusern und Wirtschaftsgebäuden der Innenstadt sowie in Wüllen, Wessum und Ottenstein, gerade dort, wo altes Parkett oder Holzpflaster auf Teerklebern verlegt wurde. Auf Hofstellen und Nebengebäuden in Alstätte und Graes kommen alte Teer-Dachbahnen hinzu. Da PAK-haltige Kleber optisch dem asbesthaltigen Bitumenkleber gleichen, ist die Laboranalyse entscheidend: Sie zeigt, ob TRGS 524/551 oder TRGS 519 greift, und verhindert, dass das falsche Verfahren gewählt wird.',
      'PAK ist ausdrücklich kein Asbest, deshalb entfällt die Asbest-Anzeige nach TRGS 519. Die fachgerechte, getrennte Entsorgung als eigener gefährlicher Abfall bleibt aber Pflicht. Treten in einem Ahauser Objekt Asbest und PAK gemeinsam auf - was häufig vorkommt -, grenzen wir die Stoffe klar ab und behandeln jeden nach seinem eigenen Regelwerk. Für die asbestbezogenen Teile ist dann die Bezirksregierung Münster zuständig, für die wir die Anzeige übernehmen. Sie erhalten in jedem Fall eine vollständige Dokumentation.',
    ],
    comboFaqs: [
      {
        frage: 'Ist PAK dasselbe wie Asbest?',
        antwort:
          'Nein. PAK (polyzyklische aromatische Kohlenwasserstoffe) sind eine eigene Schadstoffgruppe, die in Teerklebern, Parkettpech und alten Dachbahnen vorkommt und nach TRGS 524 und 551 behandelt wird. Asbest fällt unter TRGS 519. Beide Stoffe verlangen unterschiedliche Verfahren - wir grenzen sie per Laboranalyse sauber ab, bevor wir in Ahaus mit der Sanierung beginnen.',
      },
      {
        frage: 'Muss eine PAK-Sanierung in Ahaus bei der Behörde angezeigt werden?',
        antwort:
          'Da PAK kein Asbest ist, entfällt die Asbest-Anzeige nach TRGS 519 bei der Bezirksregierung Münster. Die Arbeiten erfolgen nach TRGS 524 und 551, und die getrennte Entsorgung als gefährlicher Abfall ist Pflicht. Liegen zusätzlich Asbestmaterialien vor, übernehmen wir für diesen Teil die behördliche Anzeige.',
      },
      {
        frage: 'Woran erkenne ich PAK-belastete Materialien in meinem Ahauser Haus?',
        antwort:
          'PAK-haltige Teerkleber und Parkettpech riechen oft typisch teerig und finden sich unter altem Parkett, Holzpflaster oder in alten Dachbahnen. Sicher erkennbar ist PAK aber nur im Labor, zumal die Kleber dem asbesthaltigen Bitumenkleber ähneln. Wir entnehmen bei der Besichtigung eine Probe und bestimmen daraus das richtige Verfahren.',
      },
    ],
  },
  'kmf-sanierung/ahaus': {
    leistung: 'kmf-sanierung',
    stadt: 'ahaus',
    metaTitle: 'KMF-Sanierung Ahaus | TRGS 521 | Asbesta',
    metaDescription:
      'KMF-Sanierung in Ahaus nach TRGS 521: alte Mineralwolle, Glas- und Steinwolle vor 2000. KMF ist kein Asbest. Festpreis nach Besichtigung.',
    intro:
      'Asbesta entfernt alte künstliche Mineralfasern (KMF) in Ahaus nach TRGS 521 - Glas- und Steinwolle, die vor 2000 verbaut wurde. Als sachkundiger Fachbetrieb mit Sitz in Marl fahren wir rund 65 km über die A31 ins Westmünsterland. Wichtig vorweg: KMF ist kein Asbest und erfordert kein TRGS-519-Verfahren.',
    lokalServiceKontext: [
      'Eine KMF-Sanierung in Ahaus beginnt bei uns mit einer Besichtigung vor Ort. Alte Mineralwolle, die vor dem Jahr 2000 hergestellt wurde, kann lungengängige Fasern enthalten und wird deshalb nach TRGS 521 ausgebaut. Wir arbeiten staubarm, befeuchten das Material bei Bedarf, verpacken es in reißfeste, staubdichte Säcke und vermeiden so, dass Fasern in die Raumluft gelangen. Typische Fundorte sind Dach- und Geschossdämmungen, Zwischensparren- und Trittschalldämmungen sowie Dämmungen an Rohren und Lüftungskanälen.',
      'In Ahaus treffen wir KMF vor allem in Wohnhäusern, Dachgeschossen und Nebengebäuden der Innenstadt sowie in Wüllen, Wessum, Ottenstein und Alstätte an, oft in Bauten der 1960er- bis 1990er-Jahre. Bei Hofstellen in Graes und Averbeck finden sich alte Mineralwolle-Dämmungen häufig in Dachräumen und an Wirtschaftsgebäuden. Da KMF und Asbest in alten Gebäuden gelegentlich nebeneinander vorkommen, grenzen wir die Materialien sorgfältig ab und behandeln jedes nach dem passenden Regelwerk.',
      'KMF ist ausdrücklich kein Asbest. Die Sanierung erfolgt nach TRGS 521 und ist nicht nach TRGS 519 anzeigepflichtig - eine Asbest-Anzeige bei der Bezirksregierung Münster ist hierfür nicht erforderlich. Für reine KMF-Arbeiten benötigt der Betrieb auch kein Asbest-Zertifikat; wir setzen unsere Sachkunde im Umgang mit Mineralfasern ein. Treten in einem Ahauser Objekt zusätzlich Asbest oder PAK auf, grenzen wir die Stoffe klar ab und übernehmen für die asbestbezogenen Teile die nötige Anzeige. Die Entsorgung der KMF erfolgt fachgerecht als eigener Abfall mit Nachweis.',
    ],
    comboFaqs: [
      {
        frage: 'Ist alte Mineralwolle (KMF) Asbest?',
        antwort:
          'Nein. Künstliche Mineralfasern wie Glas- und Steinwolle sind kein Asbest. Alte KMF, die vor 2000 verbaut wurde, kann jedoch lungengängige Fasern enthalten und wird deshalb nach TRGS 521 ausgebaut. Wir behandeln KMF staubarm und getrennt von Asbest, der unter TRGS 519 fällt - in Ahaus grenzen wir beide Stoffe vor der Arbeit klar ab.',
      },
      {
        frage:
          'Muss eine KMF-Sanierung in Ahaus bei der Bezirksregierung Münster angezeigt werden?',
        antwort:
          'Nein. Da KMF kein Asbest ist, greift die TRGS 521, und die anzeigepflichtige Asbest-Anzeige nach TRGS 519 bei der Bezirksregierung Münster entfällt. Die fachgerechte, staubarme Entfernung und die getrennte Entsorgung der alten Mineralwolle als eigener Abfall bleiben aber Pflicht - das übernehmen wir für Sie.',
      },
      {
        frage: 'Woran erkenne ich, ob meine Dämmung alte, gefährliche KMF ist?',
        antwort:
          'Mineralwolle, die vor dem Jahr 2000 hergestellt wurde, gilt als alte KMF mit möglichem Faserrisiko, neuere Produkte tragen ein Gütezeichen und gelten als unbedenklich. Eindeutig ist das am verbauten Material oft nicht zu erkennen. Bei der Besichtigung in Ahaus schätzen wir Alter und Zustand ein und empfehlen Ihnen das sichere Vorgehen nach TRGS 521.',
      },
    ],
  },
  'asbestsanierung/bocholt': {
    leistung: 'asbestsanierung',
    stadt: 'bocholt',
    metaTitle: 'Asbestsanierung TRGS 519 Bocholt | Asbesta',
    metaDescription:
      'Asbestsanierung nach TRGS 519 in Bocholt: Schwarzbereich, Unterdruck, Personenschleuse und Freimessung VDI 3492. Festpreis nach kostenloser Besichtigung.',
    intro:
      'Asbesta saniert schwach gebundenen Asbest in Innenräumen Bocholts nach den strengen Vorgaben der TRGS 519. Wir arbeiten als sachkundiger Fachbetrieb mit abgeschottetem Schwarzbereich, Unterdruckhaltung und kontrollierter Freimessung. Unser Sitz ist in Marl, von dort fahren wir rund 55 km über die A31 in den Kreis Borken an.',
    lokalServiceKontext: [
      'Eine Asbestsanierung nach TRGS 519 in Bocholt beginnt bei uns immer mit einer kostenlosen Besichtigung vor Ort und einer Materialanalyse. Erst wenn ein Labor schwach gebundenen Asbest bestätigt, planen wir den anzeigepflichtigen Rückbau. Dafür richten wir einen abgeschotteten Schwarzbereich mit Unterdruckhaltung und Personenschleuse ein, damit keine Fasern in angrenzende Räume gelangen. Nach dem Rückbau erfolgen die Feinreinigung und die Freimessung nach VDI 3492, bevor der Bereich wieder freigegeben wird. So bleibt die Belastung für Bewohner und Nachbarn kontrolliert und nachweisbar.',
      'Bocholts Bausubstanz ist geprägt von der Textil- und Industriegeschichte rund um die Innenstadt und entlang der Aa sowie von Nachkriegsbauten in Stadtteilen wie Lowick, Stenern und Biemenhorst. In diesen älteren Wohn- und Gewerbebauten aus der Zeit vor dem Asbest-Totalverbot von 1993 steckt schwach gebundener Asbest oft in Spritzputzen, alten Dämmplatten oder Brandschutzverkleidungen im Innenraum. Gerade in ehemaligen Werks- und Fabrikgebäuden sowie in den landwirtschaftlich geprägten Ortsteilen ist eine sorgfältige Erkundung vor jedem Eingriff entscheidend.',
      'Jede anzeigepflichtige Asbestsanierung in Bocholt muss objektbezogen bei der zuständigen Arbeitsschutzbehörde angezeigt werden - das ist für den Kreis Borken die Bezirksregierung Münster. Diese Anzeige übernehmen wir für Sie und halten die gesetzlichen Fristen ein. Wichtig ist die saubere fachliche Abgrenzung: Floor-Flex-Platten und Bitumenkleber in Böden oder Welleternit an Dach und Fassade enthalten zwar Asbest, künstliche Mineralfasern in Dämmungen fallen dagegen unter die TRGS 521, PAK in alten Klebern und Teer unter die TRGS 524 und 551. KMF und PAK sind kein Asbest. Wir benennen jedes Material klar und wählen das passende Verfahren.',
    ],
    comboFaqs: [
      {
        frage: 'Ist eine Asbestsanierung in Bocholt immer anzeigepflichtig?',
        antwort:
          'Arbeiten an schwach gebundenem Asbest nach TRGS 519 sind anzeigepflichtig und müssen objektbezogen bei der Bezirksregierung Münster angezeigt werden. Diese Anzeige übernehmen wir für Sie und richten den abgeschotteten Schwarzbereich mit Unterdruck und Personenschleuse ein. So bleibt die Sanierung in der Innenstadt, in Biemenhorst oder Mussum rechtssicher und für alle Beteiligten nachvollziehbar dokumentiert.',
      },
      {
        frage: 'Woran erkenne ich schwach gebundenen Asbest in einem Bocholter Altbau?',
        antwort:
          'Sicher erkennbar ist Asbest nur im Labor. In den Wohn- und Gewerbebauten Bocholts stecken verdächtige Materialien oft in Spritzputzen, alten Dämmplatten oder Brandschutzverkleidungen. Wir nehmen bei der Besichtigung Proben und lassen sie analysieren. Erst nach dem Befund entscheiden wir über das Verfahren - so vermeiden Sie unnötige Eingriffe und unkontrollierte Faserfreisetzung im bewohnten Gebäude.',
      },
      {
        frage: 'Wie schnell ist Asbesta aus Marl in Bocholt vor Ort?',
        antwort:
          'Unser Sitz ist in Marl, von dort sind es rund 55 km über die A31 bis Bocholt - ein Termin ist meist kurzfristig möglich. Ein eigenes Büro vor Ort haben wir nicht, wir sind in ganz NRW tätig. Nach der kostenlosen Besichtigung erhalten Sie einen verbindlichen Festpreis, der von Material, Umfang und Zugänglichkeit abhängt.',
      },
    ],
  },
  'abbrucharbeiten/bocholt': {
    leistung: 'abbrucharbeiten',
    stadt: 'bocholt',
    metaTitle: 'Abbrucharbeiten Bocholt | Rückbau TRGS 519 | Asbesta',
    metaDescription:
      'Kontrollierter Abbruch und schadstoffgetrennter Rückbau in Bocholt nach Schadstofferkundung. Festpreis nach kostenloser Besichtigung. Jetzt anfragen.',
    intro:
      'Asbesta plant und führt kontrollierten Abbruch und Rückbau in Bocholt aus - von der Schadstofferkundung bis zum schadstoffgetrennten Rückbau. Wir kommen aus Marl rund 55 km über die A31 in den Kreis Borken und arbeiten nach TRGS 519, 521 und 524. Vor jedem Eingriff klären wir, welche Materialien verbaut sind und welche Fraktionen getrennt entsorgt werden müssen.',
    lokalServiceKontext: [
      'Ein kontrollierter Rückbau in Bocholt beginnt bei uns nicht mit dem Bagger, sondern mit der Bestandsaufnahme. Wir erkunden das Objekt, entnehmen Materialproben und lassen sie analysieren, bevor irgendetwas bewegt wird. Erst wenn klar ist, ob Asbest, künstliche Mineralfasern oder PAK-belastete Kleber vorliegen, planen wir den selektiven, schadstoffgetrennten Rückbau. Die belasteten Fraktionen werden zuerst und gesichert ausgebaut, die mineralischen Reststoffe danach separat. So bleibt die Anfahrt aus Marl für Sie planbar und die Trennung der Stoffströme sauber abgegrenzt.',
      'Bocholts Bausubstanz ist gemischt: Rund um die Innenstadt und entlang der Aa prägen Textil- und Industrieerbe das Bild, dazu kommen Nachkriegsbauten in Lowick, Stenern und Biemenhorst sowie landwirtschaftliche Nebengebäude in den Ortsteilen Barlo, Hemden, Holtwick und Spork. In solchen Gebäuden finden sich häufig Floor-Flex-Platten und Bitumenkleber in Böden, Welleternit und Asbestzement an Dach und Fassade sowie KMF-Dämmungen. Die Erschließung und Logistik planen wir vor dem Rückbau gezielt mit ein, damit Abbruch und Schadstofftrennung ineinandergreifen.',
      'Asbest unterliegt seit dem Totalverbot 1993 strengen Regeln. Steht bei einem Abbruch in Bocholt asbesthaltiges Material an, erstatten wir die objektbezogene Anzeige nach TRGS 519 bei der zuständigen Arbeitsschutzbehörde, der Bezirksregierung Münster. KMF behandeln wir nach TRGS 521, PAK-belastete Teer- und Klebstoffreste nach TRGS 524 beziehungsweise 551 - beides ist kein Asbest, wird aber ebenso fachgerecht getrennt und entsorgt. Sie erhalten von uns eine verbindliche Dokumentation und einen klaren Ablauf, der zum jeweiligen Objekt in Stadt oder Außenbezirk passt.',
    ],
    comboFaqs: [
      {
        frage: 'Wie läuft ein Abbruch in einem älteren Bocholter Wohnhaus ab?',
        antwort:
          'Zuerst erkunden wir die Schadstoffe, entnehmen Proben und lassen sie analysieren. In älteren Bauten finden wir oft Floor-Flex-Böden, Bitumenkleber oder Welleternit. Belastete Materialien bauen wir gesichert und getrennt aus, danach folgt der mineralische Rückbau. Bei Asbest erstatten wir vorab die Anzeige nach TRGS 519 bei der Bezirksregierung Münster.',
      },
      {
        frage: 'Was kostet ein kontrollierter Rückbau in Bocholt?',
        antwort:
          'Eine seriöse Pauschale gibt es nicht: Der Preis hängt von Objektgröße, Schadstoffart und Zugänglichkeit ab. Ein Nebengebäude in Barlo wird anders kalkuliert als ein Komplettrückbau in der Innenstadt. Verbindlich nennen wir den Festpreis erst nach einer kostenlosen Besichtigung vor Ort - inklusive Schadstofferkundung und Entsorgungskonzept.',
      },
      {
        frage: 'Sind PAK und KMF dasselbe wie Asbest?',
        antwort:
          'Nein. Künstliche Mineralfasern (KMF) in Dämmungen und PAK in alten Teer- und Klebstoffresten sind eigene Schadstoffgruppen, die wir nach TRGS 521 beziehungsweise TRGS 524/551 behandeln. Asbest fällt unter TRGS 519. In vielen Bocholter Bauten treten mehrere dieser Stoffe zusammen auf - deshalb klären wir sie bei der Erkundung sauber ab und trennen sie im Rückbau konsequent.',
      },
    ],
  },
  'welleternit-ausbauen/bocholt': {
    leistung: 'welleternit-ausbauen',
    stadt: 'bocholt',
    metaTitle: 'Welleternit ausbauen in Bocholt | Asbesta',
    metaDescription:
      'Welleternit in Bocholt zerstörungsfrei ausbauen: Demontage asbesthaltiger Wellplatten nach TRGS 519, Big-Bag-Entsorgung. Jetzt Besichtigung anfragen.',
    intro:
      'Asbesta baut asbesthaltige Welleternit-Platten in Bocholt zerstörungsfrei aus - von Garagendächern in der Innenstadt bis zu Scheunen und Nebengebäuden in Barlo, Hemden und Spork. Als sachkundiger Fachbetrieb mit Sitz in Marl reisen wir rund 55 km über die A31 in den Kreis Borken an und übernehmen die staubarme Demontage samt fachgerechter Big-Bag-Entsorgung. Vor jeder Arbeit klären wir per Materialprobe, ob Asbest vorliegt.',
    lokalServiceKontext: [
      'Beim Ausbau von Welleternit in Bocholt arbeiten wir zerstörungsfrei: Die Asbestzement-Wellplatten werden nicht gebrochen oder geflext, sondern vorsichtig entnagelt oder entschraubt und im Ganzen abgenommen. So bleibt die Faserfreisetzung minimal. Anschließend verpacken wir die Platten staubdicht in Big Bags, kennzeichnen sie und entsorgen sie als gefährlichen Abfall unter der Abfallschlüsselnummer AVV 17 06 05* über zugelassene Annahmestellen mit lückenlosem Nachweis. Vor Beginn legen wir bei größeren Dachflächen die nötigen Schutzmaßnahmen fest.',
      'Welleternit-Dächer finden sich in Bocholt vor allem auf Garagen, Carports, Schuppen und älteren Nebengebäuden. Besonders in den ländlich geprägten Ortsteilen Barlo, Hemden, Holtwick, Liedern und Spork prägen landwirtschaftliche Scheunen und Wirtschaftsgebäude mit großen Wellplattendächern das Bild, dazu kommen Werks- und Lagergebäude aus der Textil- und Industriegeschichte rund um Mussum und Biemenhorst. Diese fest gebundenen Platten stammen meist aus der Zeit vor dem Asbestverbot von 1993 und sind intakt unauffällig - kritisch wird es erst beim Bearbeiten, Brechen oder bei der Verwitterung.',
      'Auch der Ausbau von Welleternit ist asbestbezogen und wird, sofern er anzeigepflichtig ist, objektbezogen bei der Bezirksregierung Münster als zuständiger Arbeitsschutzbehörde für den Kreis Borken angezeigt. Diese Anmeldung übernehmen wir für Sie. Verwechseln Sie Welleternit nicht mit neueren, asbestfreien Faserzementplatten - nur eine Materialprobe schafft Klarheit. Sammeln Sie heruntergefallene Bruchstücke nicht selbst ein, sondern lassen Sie die Demontage und Entsorgung fachgerecht von uns durchführen.',
    ],
    comboFaqs: [
      {
        frage: 'Können wir das Welleternit-Dach auf unserer Scheune in Barlo selbst abbauen?',
        antwort:
          'Davon raten wir dringend ab. Beim Abnehmen, Brechen oder Abkippen alter Wellplatten werden Asbestfasern frei, die gesundheitsgefährdend sind. Zudem darf asbesthaltiger Abfall nicht über den Hausmüll oder Bauschutt entsorgt werden. Wir demontieren das Dach zerstörungsfrei und staubarm, verpacken die Platten in Big Bags und entsorgen sie als gefährlichen Abfall mit Nachweis.',
      },
      {
        frage: 'Wie wird Welleternit aus Bocholt entsorgt?',
        antwort:
          'Asbestzement-Wellplatten sind gefährlicher Abfall mit der Abfallschlüsselnummer AVV 17 06 05*. Wir verpacken sie staubdicht und reißfest in Big Bags, kennzeichnen sie vorschriftsmäßig und übergeben sie an eine zugelassene Annahmestelle. Sie erhalten von uns einen lückenlosen Entsorgungsnachweis, den Sie etwa für Bauamt oder Förderanträge vorlegen können.',
      },
      {
        frage: 'Woran erkenne ich, ob mein Wellplattendach Asbest enthält?',
        antwort:
          'Wellplatten, die vor 1993 verbaut wurden, enthalten mit hoher Wahrscheinlichkeit Asbest. Eindeutig erkennbar ist das jedoch nur im Labor, da neuere asbestfreie Faserzementplatten optisch ähnlich aussehen. Wir entnehmen bei der kostenlosen Besichtigung in Bocholt eine Materialprobe und lassen sie analysieren, bevor wir über die Demontage entscheiden.',
      },
    ],
  },
  'fassadenplatten-ausbauen/bocholt': {
    leistung: 'fassadenplatten-ausbauen',
    stadt: 'bocholt',
    metaTitle: 'Fassadenplatten ausbauen Bocholt | Asbesta',
    metaDescription:
      'Asbestzement-Fassadenplatten in Bocholt kontrolliert ausbauen nach TRGS 519, oft vor energetischer Sanierung. Festpreis nach kostenloser Besichtigung.',
    intro:
      'Asbesta baut asbesthaltige Fassadenplatten und -schindeln in Bocholt kontrolliert aus - häufig als erster Schritt vor einer energetischen Fassadensanierung. Als sachkundiger Fachbetrieb mit Sitz in Marl reisen wir rund 55 km über die A31 in den Kreis Borken an. Vor jeder Demontage klären wir per Materialprobe, ob die Platten Asbest enthalten, und planen den staubarmen Ausbau.',
    lokalServiceKontext: [
      'Beim Ausbau von Asbestzement-Fassadenplatten in Bocholt gehen wir kontrolliert und zerstörungsfrei vor: Die Platten und Schindeln werden einzeln gelöst und im Ganzen abgenommen, statt sie zu brechen oder zu schneiden. So vermeiden wir die unkontrollierte Freisetzung von Fasern. Die demontierten Platten verpacken wir staubdicht, kennzeichnen sie und entsorgen sie als gefährlichen Abfall (AVV 17 06 05*) über zugelassene Annahmestellen. Erst danach ist die Fassade frei für die neue Dämmung oder Verkleidung.',
      'Asbestzement-Fassadenverkleidungen finden sich in Bocholt vor allem an Wohn- und Wirtschaftsgebäuden, die zwischen den 1960er- und frühen 1990er-Jahren errichtet oder verkleidet wurden. In Stadtteilen wie Lowick, Stenern, Biemenhorst und Mussum sowie an älteren Häusern in der Innenstadt stoßen Eigentümer oft erst bei der Planung einer energetischen Sanierung auf diese Platten. Da viele Eigentümer ihre Fassade dämmen möchten, ist der fachgerechte Ausbau der alten Asbestzementverkleidung der notwendige erste Schritt - sauber getrennt von der eigentlichen Dämmarbeit.',
      'Der Ausbau asbesthaltiger Fassadenplatten ist asbestbezogen und wird, soweit anzeigepflichtig, objektbezogen bei der Bezirksregierung Münster als zuständiger Arbeitsschutzbehörde für den Kreis Borken angezeigt. Diese Anmeldung übernehmen wir. Wichtig ist die Abgrenzung: Asbestzementplatten fallen unter TRGS 519, eine eventuell dahinterliegende alte Mineralwolldämmung dagegen unter TRGS 521 - das ist kein Asbest. Wir benennen jedes Material klar und entsorgen die Fraktionen getrennt mit lückenlosem Nachweis.',
    ],
    comboFaqs: [
      {
        frage: 'Müssen die alten Fassadenplatten raus, bevor wir in Bocholt dämmen?',
        antwort:
          'In aller Regel ja. Asbesthaltige Fassadenplatten müssen vor einer energetischen Sanierung fachgerecht ausgebaut und entsorgt werden, da man nicht einfach über sie hinweg dämmen sollte. Wir nehmen die Platten zerstörungsfrei ab, verpacken und entsorgen sie als gefährlichen Abfall und übergeben Ihnen anschließend eine saubere Fassade für die neue Dämmung.',
      },
      {
        frage: 'Enthalten meine Fassadenschindeln in Bocholt wirklich Asbest?',
        antwort:
          'Faserzement-Fassadenplatten und -schindeln aus der Zeit vor 1993 enthalten häufig Asbest, sehen aber neueren asbestfreien Produkten oft täuschend ähnlich. Klarheit gibt nur eine Materialanalyse im Labor. Wir entnehmen bei der kostenlosen Besichtigung in Bocholt eine Probe und werten sie aus, bevor wir über den Ausbau entscheiden.',
      },
      {
        frage: 'Wer zeigt die Fassadensanierung bei der Behörde an?',
        antwort:
          'Das übernehmen wir für Sie. Ist der Ausbau der asbesthaltigen Fassadenplatten anzeigepflichtig, erstatten wir die objektbezogene Anzeige nach TRGS 519 bei der Bezirksregierung Münster, die für den Kreis Borken zuständig ist. Sie müssen sich um die behördlichen Formalitäten nicht selbst kümmern.',
      },
    ],
  },
  'asbestzement-ausbauen/bocholt': {
    leistung: 'asbestzement-ausbauen',
    stadt: 'bocholt',
    metaTitle: 'Asbestzement ausbauen in Bocholt | Asbesta',
    metaDescription:
      'Asbestzement in Bocholt fachgerecht ausbauen: Platten, Rohre, Kanäle und Blumenkästen nach TRGS 519, sichere Entsorgung. Jetzt Besichtigung anfragen.',
    intro:
      'Asbesta baut Asbestzement in Bocholt fachgerecht aus - ob Platten, Rohre, Lüftungskanäle oder die typischen Blumenkästen aus den 70ern. Als sachkundiger Fachbetrieb mit Sitz in Marl reisen wir rund 55 km über die A31 in den Kreis Borken an. Vor jedem Ausbau klären wir per Materialprobe, ob Asbest vorliegt, und planen die staubarme Demontage samt Entsorgung.',
    lokalServiceKontext: [
      'Asbestzement, oft unter dem Markennamen Eternit bekannt, wurde bis zum Verbot 1993 für viele Bauteile verwendet: Wellplatten, ebene Fassadenplatten, Abwasser- und Lüftungsrohre, Kabelkanäle, Fensterbänke und Blumenkästen. Beim Ausbau in Bocholt gehen wir zerstörungsfrei vor, lösen die Bauteile im Ganzen und vermeiden Brechen oder Schneiden. Anschließend verpacken wir alles staubdicht, kennzeichnen es und entsorgen es als gefährlichen Abfall unter AVV 17 06 05* über zugelassene Annahmestellen mit lückenlosem Nachweis.',
      'In Bocholt treffen wir auf Asbestzement quer durch die Bausubstanz: an Garagendächern und Schuppen in der Innenstadt, an Wirtschaftsgebäuden und Scheunen in den Ortsteilen Barlo, Hemden, Holtwick und Spork sowie an Wohn- und Werksbauten der Textil- und Industriegeschichte in Mussum und Biemenhorst. Auch alte Asbestzementrohre in Heizungs- und Lüftungstechnik sind in Nachkriegsbauten in Lowick und Stenern keine Seltenheit. Solange die Bauteile intakt sind, sind sie unauffällig - beim Bearbeiten oder bei Verwitterung werden jedoch Fasern frei.',
      'Der Ausbau von Asbestzement ist asbestbezogen und wird, soweit anzeigepflichtig, objektbezogen bei der Bezirksregierung Münster als zuständiger Arbeitsschutzbehörde für den Kreis Borken angezeigt. Diese Anzeige übernehmen wir. Verwechseln Sie alten Asbestzement nicht mit neueren, asbestfreien Faserzementprodukten - nur eine Materialprobe schafft Klarheit. Entsorgen Sie Bruchstücke niemals über Hausmüll oder Bauschutt, sondern lassen Sie Ausbau und Entsorgung fachgerecht von uns durchführen.',
    ],
    comboFaqs: [
      {
        frage: 'Sind alte Asbestzementrohre und Blumenkästen in Bocholt gefährlich?',
        antwort:
          'Solange Asbestzement-Rohre, -Kanäle oder -Blumenkästen intakt sind, ist die Faserfreisetzung gering. Kritisch wird es, sobald sie brechen, verwittern oder bearbeitet werden - dann werden Asbestfasern frei. Wir bauen solche Bauteile zerstörungsfrei aus, verpacken sie staubdicht und entsorgen sie als gefährlichen Abfall mit lückenlosem Nachweis.',
      },
      {
        frage: 'Woran erkenne ich Asbestzement in meinem Bocholter Gebäude?',
        antwort:
          'Asbestzement-Bauteile, die vor 1993 verbaut wurden, enthalten mit hoher Wahrscheinlichkeit Asbest, sehen aber neueren asbestfreien Faserzementprodukten oft ähnlich. Eindeutig ist das nur im Labor feststellbar. Wir entnehmen bei der kostenlosen Besichtigung in Bocholt eine Materialprobe und lassen sie analysieren, bevor wir den Ausbau planen.',
      },
      {
        frage: 'Wie wird Asbestzement aus Bocholt entsorgt?',
        antwort:
          'Asbestzement gilt als gefährlicher Abfall mit der Abfallschlüsselnummer AVV 17 06 05*. Wir verpacken die Bauteile staubdicht und reißfest, kennzeichnen sie vorschriftsmäßig und übergeben sie an eine zugelassene Annahmestelle. Sie erhalten von uns einen lückenlosen Entsorgungsnachweis - eine Entsorgung über Hausmüll oder Bauschutt ist nicht zulässig.',
      },
    ],
  },
  'bitumenkleber-entfernen/bocholt': {
    leistung: 'bitumenkleber-entfernen',
    stadt: 'bocholt',
    metaTitle: 'Bitumenkleber entfernen Bocholt | TRGS 519 Asbesta',
    metaDescription:
      'Schwarzen Bitumenkleber in Bocholt entfernen: saubere Abgrenzung Asbest (TRGS 519) und PAK (TRGS 524/551). Festpreis nach kostenloser Besichtigung.',
    intro:
      'Asbesta entfernt schwarzen, asbest- oder teerhaltigen Bitumenkleber unter alten Böden in Bocholt. Als sachkundiger Fachbetrieb mit Sitz in Marl reisen wir rund 55 km über die A31 in den Kreis Borken an. Entscheidend ist die saubere Abgrenzung: Asbest fällt unter TRGS 519, teerhaltiger PAK-Kleber unter TRGS 524/551 - vor der Arbeit klären wir per Materialprobe, womit wir es zu tun haben.',
    lokalServiceKontext: [
      'Schwarzer Bitumenkleber, auch Schwarzkleber genannt, wurde in Bocholt über Jahrzehnte unter Parkett, Linoleum und Floor-Flex-Platten eingesetzt. Das Tückische: Der schwarze Kleber kann asbesthaltig sein, teer- und damit PAK-haltig oder beides zugleich. Erst die Materialanalyse zeigt, welche Vorschrift greift. Asbesthaltiger Kleber wird nach TRGS 519 staubarm und im abgeschotteten Bereich abgetragen, teerhaltiger PAK-Kleber nach TRGS 524 und 551. Wir grenzen die Stoffe klar ab und behandeln jeden mit dem passenden Verfahren.',
      'In Bocholt finden wir Schwarzkleber besonders häufig in Wohn- und Geschäftshäusern aus der Zeit vor 1993 - rund um die Innenstadt, in Nachkriegsbauten in Lowick und Stenern sowie in umgebauten Werks- und Bürogebäuden der ehemaligen Textilbetriebe. Wenn unter altem Parkett oder unter herausgerissenen Belägen ein schwarzer, klebriger oder spröder Untergrund zum Vorschein kommt, ist Vorsicht geboten. Wir nehmen eine Probe, bevor geschliffen oder gefräst wird, denn unkontrolliertes Bearbeiten setzt entweder Asbestfasern oder PAK-Stäube frei.',
      'Liegt asbesthaltiger Bitumenkleber vor, ist die Sanierung anzeigepflichtig und wird objektbezogen bei der Bezirksregierung Münster als zuständiger Arbeitsschutzbehörde für den Kreis Borken angezeigt - diese Anzeige übernehmen wir. Bei reinem PAK-Kleber entfällt die Asbest-Anzeige, dennoch arbeiten wir auch hier mit Staubschutz und getrennter Entsorgung. So erhalten Sie in jedem Fall eine klare Materialabgrenzung und eine dokumentierte, fachgerechte Entsorgung.',
    ],
    comboFaqs: [
      {
        frage: 'Ist schwarzer Kleber unter meinem Boden in Bocholt Asbest oder PAK?',
        antwort:
          'Das lässt sich nur im Labor sicher klären. Schwarzer Bitumenkleber kann asbesthaltig sein, teer- und damit PAK-haltig oder beides. Wir entnehmen bei der Besichtigung eine Probe und werten sie aus. Erst nach dem Befund entscheiden wir, ob nach TRGS 519 (Asbest) oder TRGS 524/551 (PAK) gearbeitet wird - das verhindert eine unkontrollierte Schadstofffreisetzung.',
      },
      {
        frage: 'Kann ich den alten Schwarzkleber nicht einfach abschleifen?',
        antwort:
          'Davon raten wir ab. Trockenes Schleifen oder Fräsen von Bitumenkleber setzt je nach Belastung Asbestfasern oder PAK-haltige Stäube frei, die gesundheitsgefährdend sind. Wir tragen den Kleber staubarm und mit den passenden Schutzmaßnahmen ab und entsorgen ihn fachgerecht als gefährlichen Abfall - sicher und mit Nachweis.',
      },
      {
        frage: 'Muss die Entfernung von Bitumenkleber in Bocholt angezeigt werden?',
        antwort:
          'Das hängt vom Befund ab. Ist der Kleber asbesthaltig, ist die Arbeit anzeigepflichtig und wird objektbezogen bei der Bezirksregierung Münster angezeigt - das übernehmen wir. Bei reinem PAK-Kleber entfällt diese Asbest-Anzeige, wir arbeiten aber auch dann mit Staubschutz und getrennter, dokumentierter Entsorgung.',
      },
    ],
  },
  'floor-flex-entfernen/bocholt': {
    leistung: 'floor-flex-entfernen',
    stadt: 'bocholt',
    metaTitle: 'Floor-Flex entfernen Bocholt | Asbesta TRGS 519',
    metaDescription:
      'Floor-Flex-Platten in Bocholt staubarm entfernen: Vinyl-Asbest-Fliesen samt Kleber nach TRGS 519, anzeigepflichtig. Festpreis nach Besichtigung.',
    intro:
      'Asbesta nimmt Floor-Flex-Platten in Bocholt staubarm auf - die alten Vinyl-Asbest-Fliesen samt dem darunterliegenden Kleber. Als sachkundiger Fachbetrieb mit Sitz in Marl reisen wir rund 55 km über die A31 in den Kreis Borken an. Die Arbeit ist anzeigepflichtig nach TRGS 519, vorab klären wir per Materialprobe, ob die Platten und der Kleber Asbest enthalten.',
    lokalServiceKontext: [
      'Floor-Flex-Platten, auch Vinyl-Asbest-Fliesen genannt, sind meist quadratische Bodenfliesen, die bis 1993 in vielen Gebäuden verlegt wurden. Beim Entfernen in Bocholt gehen wir staubarm vor: Wir lösen die Platten möglichst im Ganzen, ohne sie zu brechen, und nehmen den oft asbesthaltigen schwarzen Bitumenkleber darunter gleich mit auf. Anschließend verpacken wir alles staubdicht, kennzeichnen es und entsorgen es als gefährlichen Abfall unter AVV 17 06 05* über zugelassene Annahmestellen mit lückenlosem Nachweis.',
      'In Bocholt liegen Floor-Flex-Platten häufig in Wohn-, Geschäfts- und Verwaltungsgebäuden aus der Zeit vor 1993 - in der Innenstadt, in Nachkriegsbauten in Lowick und Stenern sowie in umgebauten Werks- und Bürogebäuden der ehemaligen Textilbetriebe in Mussum und Biemenhorst. Oft kommen die Fliesen erst beim Herausreißen eines neueren Belags wieder zum Vorschein. Wer sie trocken aufstemmt oder bricht, setzt Asbestfasern frei - deshalb nehmen wir vor jedem Eingriff eine Materialprobe und arbeiten nur nach gesichertem Befund.',
      'Die Entfernung asbesthaltiger Floor-Flex-Platten ist anzeigepflichtig nach TRGS 519. Wir erstatten die objektbezogene Anzeige bei der Bezirksregierung Münster als zuständiger Arbeitsschutzbehörde für den Kreis Borken - diese Anmeldung übernehmen wir für Sie. Wichtig ist, dass nicht nur die Platten, sondern auch der darunterliegende Bitumenkleber sauber aufgenommen wird, da gerade dieser oft asbesthaltig ist. So bleibt der Untergrund frei für den neuen Bodenaufbau.',
    ],
    comboFaqs: [
      {
        frage: 'Sind Floor-Flex-Platten in meinem Bocholter Gebäude immer asbesthaltig?',
        antwort:
          'Vinyl-Asbest-Fliesen aus der Zeit vor 1993 enthalten sehr häufig Asbest, auch der Kleber darunter ist oft belastet. Eindeutig ist das nur im Labor feststellbar. Wir entnehmen bei der kostenlosen Besichtigung in Bocholt eine Materialprobe von Platte und Kleber und lassen sie analysieren, bevor wir mit der Entfernung beginnen.',
      },
      {
        frage: 'Muss die Floor-Flex-Entfernung in Bocholt angezeigt werden?',
        antwort:
          'Ja. Die Entfernung asbesthaltiger Floor-Flex-Platten ist nach TRGS 519 anzeigepflichtig und muss objektbezogen bei der Bezirksregierung Münster angezeigt werden. Diese Anzeige übernehmen wir vollständig für Sie und halten die gesetzlichen Fristen ein, sodass Sie sich um die Formalitäten nicht selbst kümmern müssen.',
      },
      {
        frage: 'Kann ich die alten Bodenfliesen nicht einfach selbst herausstemmen?',
        antwort:
          'Davon raten wir dringend ab. Trockenes Stemmen oder Brechen von Floor-Flex-Platten setzt Asbestfasern frei, die gesundheitsgefährdend sind, und der Abfall darf nicht über den Hausmüll entsorgt werden. Wir nehmen Platten und Kleber staubarm auf, verpacken sie vorschriftsmäßig und entsorgen sie als gefährlichen Abfall mit Nachweis.',
      },
    ],
  },
  'pak-sanierung/bocholt': {
    leistung: 'pak-sanierung',
    stadt: 'bocholt',
    metaTitle: 'PAK-Sanierung Bocholt nach TRGS 524/551 | Asbesta',
    metaDescription:
      'PAK-Sanierung in Bocholt nach TRGS 524/551: Teerkleber, Parkettpech und alte Dachbahnen sicher entfernen. Festpreis nach kostenloser Besichtigung.',
    intro:
      'Asbesta saniert PAK-belastete Materialien in Bocholt nach TRGS 524 und 551 - etwa Teerkleber, Parkettpech und alte teerhaltige Dachbahnen. Als sachkundiger Fachbetrieb mit Sitz in Marl reisen wir rund 55 km über die A31 in den Kreis Borken an. Wichtig vorweg: PAK ist kein Asbest, erfordert aber eine ebenso fachgerechte und getrennte Behandlung.',
    lokalServiceKontext: [
      'PAK, also polyzyklische aromatische Kohlenwasserstoffe, stecken in Bocholt vor allem in teerhaltigen Produkten: im schwarzen Pech unter altem Stäbchenparkett, in Teerklebern unter Bodenbelägen und in alten Bitumen- und Dachbahnen. Beim Entfernen arbeiten wir nach TRGS 524 und 551 mit Staubschutz, abgegrenztem Arbeitsbereich und gezielter Absaugung, damit die PAK-haltigen Stäube nicht freigesetzt werden. Das belastete Material wird getrennt erfasst, verpackt und als gefährlicher Abfall fachgerecht entsorgt - mit lückenlosem Nachweis.',
      'In Bocholt finden wir PAK-Belastungen besonders in Gebäuden, die vor den 1980er-Jahren errichtet wurden - in der Innenstadt, in Nachkriegsbauten in Lowick und Stenern sowie in umgebauten Werks- und Bürogebäuden der ehemaligen Textilbetriebe. Parkettpech und Teerkleber kommen oft erst beim Aufnehmen alter Böden zum Vorschein, teerhaltige Dachbahnen bei der Dachsanierung. Da PAK über Hautkontakt und Staub aufgenommen werden kann, ist auch hier eine sorgfältige Erkundung und Probenahme vor dem Eingriff wichtig.',
      'PAK ist ausdrücklich kein Asbest und fällt nicht unter die TRGS 519, sondern unter TRGS 524 und 551 - eine Anzeige bei der Bezirksregierung Münster wie bei Asbest ist hier nicht erforderlich. Dennoch behandeln wir PAK-Material mit demselben Anspruch an Sicherheit und Dokumentation. Treten in einem Bocholter Objekt PAK und Asbest gemeinsam auf, was etwa bei schwarzem Bitumenkleber vorkommt, grenzen wir die Stoffe sauber ab und wenden für jeden das richtige Verfahren an.',
    ],
    comboFaqs: [
      {
        frage: 'Ist PAK dasselbe wie Asbest?',
        antwort:
          'Nein. PAK (polyzyklische aromatische Kohlenwasserstoffe) sind teerhaltige Schadstoffe, die in Pech, Teerklebern und alten Dachbahnen vorkommen. Sie fallen unter TRGS 524 und 551, nicht unter die Asbest-Vorschrift TRGS 519. Eine Asbest-Anzeige bei der Bezirksregierung Münster ist für reines PAK-Material nicht nötig - dennoch arbeiten wir mit vollem Staubschutz und getrennter Entsorgung.',
      },
      {
        frage: 'Woran erkenne ich PAK in meinem Bocholter Altbau?',
        antwort:
          'PAK steckt typischerweise im schwarzen, teerigen Parkettpech unter altem Stäbchenparkett, in Teerklebern unter Böden und in alten Dachbahnen. Der charakteristische teerige Geruch ist ein Hinweis, sicher ist die Bestimmung aber nur über eine Laboranalyse. Wir entnehmen bei der kostenlosen Besichtigung eine Probe, bevor wir mit der Sanierung beginnen.',
      },
      {
        frage: 'Was passiert, wenn Asbest und PAK zusammen vorkommen?',
        antwort:
          'Das ist nicht selten, etwa bei schwarzem Bitumenkleber, der beide Schadstoffe enthalten kann. Wir klären über Materialproben, welche Stoffe vorliegen, und behandeln Asbest nach TRGS 519 und PAK nach TRGS 524/551 jeweils mit dem passenden Verfahren. Die Fraktionen werden getrennt erfasst und entsorgt, sodass alle Vorgaben eingehalten werden.',
      },
    ],
  },
  'kmf-sanierung/bocholt': {
    leistung: 'kmf-sanierung',
    stadt: 'bocholt',
    metaTitle: 'KMF-Sanierung Bocholt | TRGS 521 | Asbesta',
    metaDescription:
      'KMF-Sanierung in Bocholt nach TRGS 521: alte Mineralwolle (Glas- und Steinwolle vor 2000) sicher entfernen. Festpreis nach kostenloser Besichtigung.',
    intro:
      'Asbesta entfernt alte Mineralwolle in Bocholt nach TRGS 521 - also künstliche Mineralfasern (KMF) wie Glas- und Steinwolle, die vor dem Jahr 2000 verbaut wurden. Als sachkundiger Fachbetrieb mit Sitz in Marl reisen wir rund 55 km über die A31 in den Kreis Borken an. Wichtig vorweg: KMF ist kein Asbest und erfordert kein Betriebs-Zertifikat, aber dennoch eine fachgerechte, staubarme Vorgehensweise.',
    lokalServiceKontext: [
      'Alte künstliche Mineralfasern (KMF), also Glas- und Steinwolle aus der Zeit vor 2000, gelten als gesundheitlich kritisch, weil die damaligen Fasern lungengängig sein konnten. Beim Ausbau in Bocholt arbeiten wir nach TRGS 521 mit Staubschutz, gezielter Absaugung und abgegrenztem Arbeitsbereich, damit möglichst wenig Fasern freigesetzt werden. Die alte Dämmung wird staubarm aufgenommen, in reißfesten Säcken verpackt und fachgerecht entsorgt. Neuere Mineralwolle ab 2000 trägt das RAL-Gütezeichen und ist als unbedenklich eingestuft.',
      'In Bocholt finden wir alte KMF-Dämmungen vor allem in Dächern, obersten Geschossdecken, Trennwänden und hinter Verkleidungen von Gebäuden, die vor 2000 errichtet oder gedämmt wurden. Das betrifft Nachkriegsbauten in Lowick und Stenern, Wohnhäuser in der Innenstadt sowie Wirtschafts- und Werksgebäude in den Ortsteilen und in Mussum und Biemenhorst. Häufig stoßen Eigentümer auf die alte Mineralwolle erst bei einem Dachausbau oder einer energetischen Sanierung - genau dann ist der fachgerechte Ausbau und Austausch sinnvoll.',
      'KMF ist ausdrücklich kein Asbest und fällt nicht unter die TRGS 519, sondern unter TRGS 521. Eine Anzeige bei der Bezirksregierung Münster wie bei Asbest ist hier nicht erforderlich, und für KMF-Arbeiten ist auch kein gesondertes Betriebs-Zertifikat nötig - wir arbeiten mit unserer Sachkunde und nach den anerkannten Regeln der TRGS 521. Treten KMF und Asbest gemeinsam auf, was bei alten Dämmkonstruktionen vorkommt, grenzen wir die Materialien klar ab und behandeln Asbest separat nach TRGS 519.',
    ],
    comboFaqs: [
      {
        frage: 'Ist alte Mineralwolle in Bocholt gefährlich?',
        antwort:
          'Künstliche Mineralfasern (KMF) wie Glas- und Steinwolle, die vor 2000 verbaut wurden, können lungengängige Fasern enthalten und gelten deshalb als kritisch. Sie sind aber kein Asbest. Wir bauen die alte Dämmung nach TRGS 521 staubarm aus, verpacken sie reißfest und entsorgen sie fachgerecht. Mineralwolle ab 2000 mit RAL-Gütezeichen gilt dagegen als unbedenklich.',
      },
      {
        frage: 'Braucht Asbesta für die KMF-Sanierung ein besonderes Zertifikat?',
        antwort:
          'Nein. KMF-Arbeiten nach TRGS 521 erfordern kein gesondertes Betriebs-Zertifikat wie die Asbestsanierung. Wir führen sie mit unserer Sachkunde und nach den anerkannten Regeln der TRGS 521 durch - mit Staubschutz, Absaugung und fachgerechter Entsorgung. Eine Anzeige bei der Bezirksregierung Münster wie bei Asbest ist für reine KMF-Arbeiten nicht nötig.',
      },
      {
        frage: 'Wie unterscheide ich alte KMF von Asbest in meinem Gebäude?',
        antwort:
          'KMF, also Glas- und Steinwolle, ist eine faserige, meist gelbliche oder bräunliche Dämmung, während Asbest oft in festen Platten, Putzen oder Klebern steckt. Optisch lassen sich beide nicht immer sicher trennen. Wir klären bei der Besichtigung über Materialproben, welche Stoffe vorliegen, und wenden für KMF die TRGS 521 und für Asbest die TRGS 519 an.',
      },
    ],
  },
};

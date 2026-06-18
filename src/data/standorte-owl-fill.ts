/** OWL-Vollmatrix-Ergaenzung: die 5 fehlenden Kern-Leistungen (abbrucharbeiten, asbestzement-,
 *  bitumenkleber-, floor-flex-, pak-) je OWL-Stadt. Hebt OWL auf das 9er-Kernset der Hauptstaedte.
 *  Generiert aus dem Content-Workflow (2026-06-19). Gemerged in kombiDetail via Spread.
 *  Zustaendige Behoerde OWL: Bezirksregierung Detmold. */
import type { KombiDetail } from './kombi-detail';

export const owlKombiFill: Record<string, KombiDetail> = {
  'abbrucharbeiten/guetersloh': {
    leistung: 'abbrucharbeiten',
    stadt: 'guetersloh',
    metaTitle: 'Abbrucharbeiten Gütersloh | Rückbau TRGS 519 | Asbesta',
    metaDescription:
      'Abbruch und schadstoffgetrennter Rückbau in Gütersloh nach Schadstofferkundung. Festpreis nach kostenloser Besichtigung. Asbesta aus Marl.',
    intro:
      'Asbesta plant und führt kontrollierten Abbruch und Rückbau in Gütersloh aus – von der vorherigen Schadstofferkundung bis zum selektiven, schadstoffgetrennten Rückbau. Wir kommen aus Marl rund 85 km über die A2 in den Kreis Gütersloh und arbeiten nach TRGS 519, 521 und 524. Vor jedem Eingriff klären wir, welche Materialien verbaut sind und welche Stoffströme getrennt entsorgt werden müssen.',
    lokalServiceKontext: [
      'Ein Abbruch in Gütersloh beginnt bei uns nicht mit dem Bagger, sondern mit der Schadstofferkundung. Bei einer kostenlosen Besichtigung vor Ort prüfen wir das Gebäude auf Asbest, künstliche Mineralfasern und PAK und entnehmen bei Verdacht Materialproben für das akkreditierte Labor. Erst wenn feststeht, was wo verbaut ist, planen wir den selektiven Rückbau: Schadstoffhaltige Bauteile werden zuerst fachgerecht ausgebaut, danach folgt der konventionelle Abbruch der entkernten Substanz. So entstehen getrennte Stoffströme statt eines durchmischten, teuer zu entsorgenden Bauschutts, und in der Innenstadt, in Spexard oder in Avenwedde bleibt die Staub- und Faserbelastung für Nachbarn kontrolliert.',
      'Güterslohs Bausubstanz prägt jeden Rückbau. Der starke industrielle Mittelstand aus Druck, Möbeln und Hausgeräten hat ausgedehnte Hallen, Werkstätten und Verwaltungsbauten hinterlassen, in denen vor dem Asbest-Totalverbot 1993 oft Asbestzement an Dach und Fassade sowie asbesthaltige Spachtelmassen und Brandschutzelemente verbaut wurden. In den Gründerzeitquartieren der Innenstadt und in Kattenstroth stecken Floor-Flex-Platten und schwarzer Bitumenkleber unter alten Böden, in den Nachkriegssiedlungen von Spexard, Avenwedde und Friedrichsdorf sowie in den dörflichen Ortslagen Isselhorst und Hollen kommen KMF-Dämmungen und Welleternit-Nebengebäude hinzu. Diese Vielfalt entscheidet darüber, welche Fraktionen beim Rückbau getrennt werden müssen.',
      'Sobald asbesthaltige Bauteile zurückgebaut werden, ist die Maßnahme anzeigepflichtig. Zuständige Arbeitsschutzbehörde für Gütersloh ist die Bezirksregierung Detmold; die objektbezogene Anzeige nach TRGS 519 reichen wir vor Arbeitsbeginn fristgerecht dort ein. Asbestabfall verpacken wir staubdicht und entsorgen ihn unter dem Abfallschlüssel AVV 17 06 05*, KMF behandeln wir nach TRGS 521, PAK-belastete Materialien nach TRGS 524 und 551. KMF und PAK sind ausdrücklich kein Asbest und werden getrennt erfasst. Sie erhalten am Ende eine lückenlose Dokumentation mit Analyseergebnissen und Entsorgungsnachweisen für Bauamt, Käufer oder Versicherung.',
    ],
    comboFaqs: [
      {
        frage: 'Was bedeutet schadstoffgetrennter Rückbau in Gütersloh konkret?',
        antwort:
          'Statt das Gebäude in einem Zug abzureißen, bauen wir erst alle schadstoffhaltigen Bauteile gezielt aus – Asbestzement, Floor-Flex, KMF-Dämmung, PAK-Kleber. Diese Fraktionen werden getrennt erfasst und jeweils richtig entsorgt, erst danach folgt der eigentliche Abbruch der sauberen Restsubstanz. Das senkt die Entsorgungskosten und hält die Belastung in der Innenstadt, in Spexard oder Isselhorst niedrig.',
      },
      {
        frage: 'Brauche ich vor einem Abbruch in Gütersloh eine Schadstofferkundung?',
        antwort:
          'Bei jedem Gebäude aus der Zeit vor 1993 ist eine Schadstofferkundung dringend zu empfehlen und bei asbesthaltigen Arbeiten Voraussetzung für die Anzeige. Wir prüfen das Objekt, nehmen Materialproben und lassen sie im akkreditierten Labor analysieren. Erst der Befund zeigt, welche Stoffe vorliegen und wie der Rückbau geplant werden muss – ohne Erkundung lässt sich weder Aufwand noch Preis seriös bestimmen.',
      },
      {
        frage: 'Wer meldet den asbestbezogenen Abbruch in Gütersloh bei der Behörde an?',
        antwort:
          'Das übernehmen wir. Werden asbesthaltige Bauteile zurückgebaut, reichen wir vor Arbeitsbeginn die objektbezogene Anzeige nach TRGS 519 bei der Bezirksregierung Detmold ein, der zuständigen Arbeitsschutzbehörde für Gütersloh. Sie müssen sich um die Formalitäten nicht kümmern und erhalten am Ende eine prüffähige Dokumentation samt Entsorgungsnachweisen.',
      },
    ],
  },
  'asbestzement-ausbauen/guetersloh': {
    leistung: 'asbestzement-ausbauen',
    stadt: 'guetersloh',
    metaTitle: 'Asbestzement ausbauen in Gütersloh | Asbesta',
    metaDescription:
      'Asbestzement in Gütersloh zerstörungsfrei ausbauen: Platten, Rohre, Kanäle nach TRGS 519, Entsorgung AVV 17 06 05*. Festpreis nach Besichtigung.',
    intro:
      'Asbesta baut fest gebundene Asbestzement-Bauteile in Gütersloh fachgerecht aus: Wellplatten, Rohre, Lüftungskanäle, Fensterbänke und Blumenkästen. Wir kommen aus Marl rund 85 km über die A2 in den Kreis Gütersloh und arbeiten nach TRGS 519 von der Materialanalyse bis zur dokumentierten Entsorgung unter dem Schlüssel AVV 17 06 05*.',
    lokalServiceKontext: [
      'Der Asbestzement-Ausbau in Gütersloh beginnt bei uns mit einer kostenlosen Besichtigung und bei unklarem Material mit einer Probe für das akkreditierte Labor. Asbestzement ist fest gebunden und so lange unauffällig, wie das Bauteil intakt bleibt – beim Brechen, Bohren oder Hochdruckreinigen setzt es jedoch Fasern frei. Deshalb lösen wir Platten, Rohre und Kanäle zerstörungsfrei: Befestigungen werden vorsichtig geöffnet, Bauteile einzeln abgenommen und unzerstört in Big-Bags verpackt. Erst nach gesichertem Befund und freigegebener Anzeige planen wir den staubarmen Ausbau, ob auf einem Garagendach in der Innenstadt oder an einer Fassade in Avenwedde.',
      'Asbestzement findet sich in Gütersloh in vielen Formen. Auf Dächern und Fassaden von Garagen, Schuppen und Gewerbebauten in der Innenstadt, in Spexard und Friedrichsdorf liegen Wellplatten und Fassadentafeln; im Erd- und Tiefbau treffen wir auf Asbestzement-Rohre und -Kanäle, etwa als alte Abwasser- oder Lüftungsleitungen. In den dörflich geprägten Ortslagen Isselhorst, Hollen und Blankenhagen kommen großflächige Stall- und Scheunendächer sowie als Blumenkästen genutzte Pflanztröge aus Asbestzement hinzu. Wir stimmen Anfahrt, Demontagetechnik und Big-Bag-Stellplatz auf das jeweilige Bauteil und die Zugänglichkeit ab.',
      'Für die Asbest-Anzeige nach TRGS 519 ist in Gütersloh die Bezirksregierung Detmold die zuständige Arbeitsschutzbehörde. Diese Anzeige reichen wir vor Beginn der Arbeiten fristgerecht ein – das übernehmen wir für Sie. Die ausgebauten Asbestzement-Bauteile verpacken wir staubdicht in Big-Bags und entsorgen sie als gefährlichen Abfall unter dem Abfallschlüssel AVV 17 06 05* über zugelassene Annahmestellen. Sie erhalten die Entsorgungsnachweise lückenlos, sodass der gesamte Ablauf vom Ausbau bis zur Deponie rechtssicher dokumentiert ist.',
    ],
    comboFaqs: [
      {
        frage: 'Welche Asbestzement-Bauteile baut Asbesta in Gütersloh aus?',
        antwort:
          'Wir bauen das gesamte Spektrum an Asbestzement-Produkten aus: Wellplatten und Fassadentafeln von Dächern und Fassaden, Asbestzement-Rohre und Lüftungskanäle, Fensterbänke sowie Pflanztröge und Blumenkästen. Alle werden zerstörungsfrei demontiert, in Big-Bags verpackt und unter AVV 17 06 05* entsorgt – ob im Stadtgebiet, in Spexard oder auf einem Hof in Isselhorst.',
      },
      {
        frage: 'Darf ich Asbestzement-Platten in Gütersloh selbst abnehmen?',
        antwort:
          'Davon ist dringend abzuraten. Arbeiten an asbesthaltigem Asbestzement sind nach TRGS 519 anzeigepflichtig und müssen durch einen sachkundigen Fachbetrieb erfolgen. Beim Brechen oder Hochdruckreinigen werden Fasern freigesetzt, die Sie und Ihre Nachbarn gefährden. Wir demontieren zerstörungsfrei, melden die Arbeit bei der Bezirksregierung Detmold an und entsorgen alles fachgerecht.',
      },
      {
        frage: 'Wie wird Asbestzement aus Gütersloh entsorgt?',
        antwort:
          'Die ausgebauten Bauteile verpacken wir staubdicht in Big-Bags und entsorgen sie als gefährlichen Abfall unter dem Abfallschlüssel AVV 17 06 05* über zugelassene Annahmestellen. Sie erhalten die Entsorgungsnachweise lückenlos. Damit ist belegt, dass das Material vorschriftsmäßig und nicht im normalen Bauschutt entsorgt wurde.',
      },
    ],
  },
  'bitumenkleber-entfernen/guetersloh': {
    leistung: 'bitumenkleber-entfernen',
    stadt: 'guetersloh',
    metaTitle: 'Bitumenkleber entfernen Gütersloh | TRGS 519 Asbesta',
    metaDescription:
      'Schwarzen Bitumenkleber in Gütersloh fachgerecht entfernen: Abgrenzung Asbest nach TRGS 519 und PAK nach TRGS 524/551. Festpreis nach Besichtigung.',
    intro:
      'Unter alten Bodenbelägen in Gütersloher Altbauten und Nachkriegshäusern steckt häufig schwarzer Bitumenkleber, der asbest- oder teerhaltig sein kann. Asbesta entfernt diesen Schwarzkleber fachgerecht und grenzt vorab sauber ab, ob Asbest (TRGS 519) oder PAK (TRGS 524/551) vorliegt. Wir sitzen in Marl und sind rund 85 km über die A2 in ganz Ostwestfalen-Lippe tätig, also auch in Gütersloh.',
    lokalServiceKontext: [
      'Schwarzer Bitumenkleber sieht immer ähnlich aus, ist aber nicht immer dasselbe – und genau hier setzt unsere Arbeit in Gütersloh an. Bei der kostenlosen Besichtigung entnehmen wir eine Probe und lassen sie im akkreditierten Labor untersuchen, denn der Schwarzkleber unter alten Böden kann Asbest enthalten, PAK aus Teer oder beides. Erst der Befund entscheidet über das Verfahren: Bei asbesthaltigem Kleber arbeiten wir nach TRGS 519 mit Abschottung und Unterdruck, bei teerhaltigem PAK-Kleber nach TRGS 524 und 551. Anschließend übergeben wir den Untergrund belegreif, sodass der neue Bodenaufbau direkt aufgebaut werden kann.',
      'In Gütersloh treffen wir Schwarzkleber vor allem in den gründerzeitlichen und Vorkriegswohnhäusern der Innenstadt und in Kattenstroth an, die über Jahrzehnte mehrfach modernisiert wurden, sowie in den Nachkriegssiedlungen von Spexard, Avenwedde und Friedrichsdorf. Dort liegt er meist als dünne, spröde Schwarzschicht unter Floor-Flex-Platten, altem Linoleum, Parkett oder PVC. Solange der Belag unbeschädigt aufliegt, bleibt der Kleber unauffällig; beim Herausreißen, Schleifen oder Stemmen setzt er jedoch Fasern oder PAK-haltigen Staub frei. Wir nehmen solche Bodenaufbauten deshalb staubarm und kontrolliert auf, statt sie grob zu entfernen.',
      'Die saubere Abgrenzung der Stoffe ist hier entscheidend: Asbest und PAK sind zwei völlig verschiedene Schadstoffe mit unterschiedlichen Regelwerken. Asbesthaltiger Kleber fällt unter TRGS 519 und ist anzeigepflichtig – zuständige Arbeitsschutzbehörde für Gütersloh ist die Bezirksregierung Detmold, dort reichen wir die Anzeige vor Arbeitsbeginn ein. Asbestabfall wird unter AVV 17 06 05* entsorgt. Teerhaltiger PAK-Kleber dagegen ist kein Asbest und wird nach TRGS 524 und 551 saniert und getrennt entsorgt. Wir benennen nach dem Laborbefund klar, womit Sie es zu tun haben, und behaupten nie pauschal das eine oder andere.',
    ],
    comboFaqs: [
      {
        frage: 'Ist schwarzer Bitumenkleber in Gütersloh immer asbesthaltig?',
        antwort:
          'Nein. Schwarzkleber kann Asbest enthalten, teerhaltigen PAK oder beides – mit bloßem Auge ist das nicht zu unterscheiden. Deshalb nehmen wir vor jeder Arbeit eine Probe und lassen sie im Labor analysieren. Erst der Befund zeigt, ob nach TRGS 519 (Asbest) oder TRGS 524 und 551 (PAK) gearbeitet werden muss. Diese Abgrenzung treffen wir nie pauschal, sondern immer auf Basis der Analyse.',
      },
      {
        frage: 'Worin unterscheidet sich die Asbest- von der PAK-Sanierung beim Bodenkleber?',
        antwort:
          'Asbesthaltiger Kleber ist nach TRGS 519 anzeigepflichtig und wird mit Abschottung und Unterdruck entfernt, der Abfall unter AVV 17 06 05* entsorgt. Teerhaltiger PAK-Kleber ist kein Asbest, wird nach TRGS 524 und 551 saniert und getrennt entsorgt. Beide Verfahren sind staubarm, unterscheiden sich aber in Schutzkonzept, Anzeige und Entsorgungsweg – darum klären wir vorab per Labor, welcher Fall vorliegt.',
      },
      {
        frage: 'Kann Asbesta den Boden in Gütersloh nach dem Entfernen belegreif übergeben?',
        antwort:
          'Ja. Nachdem wir den Schwarzkleber – ob Asbest oder PAK – fachgerecht entfernt haben, reinigen wir den Untergrund und übergeben ihn belegreif. So kann das Folgegewerk den neuen Bodenaufbau direkt erstellen, ohne dass Reste des alten Klebers das Ergebnis beeinträchtigen. Den verbindlichen Festpreis nennen wir nach der kostenlosen Besichtigung vor Ort.',
      },
    ],
  },
  'floor-flex-entfernen/guetersloh': {
    leistung: 'floor-flex-entfernen',
    stadt: 'guetersloh',
    metaTitle: 'Floor-Flex entfernen Gütersloh | Asbesta TRGS 519',
    metaDescription:
      'Floor-Flex-Platten in Gütersloh staubarm entfernen: Vinyl-Asbest-Fliesen samt Kleber nach TRGS 519, anzeigepflichtig. Festpreis nach Besichtigung.',
    intro:
      'Floor-Flex-Platten, also Vinyl-Asbest-Fliesen, und der darunterliegende Schwarzkleber enthalten in Gebäuden vor 1993 häufig Asbest. Asbesta nimmt diese Beläge in Gütersloh staubarm und nach den Vorgaben der TRGS 519 auf. Wir kommen aus Marl rund 85 km über die A2 in den Kreis Gütersloh und beginnen jedes Projekt mit einer Materialanalyse, bevor gearbeitet wird.',
    lokalServiceKontext: [
      'Die Floor-Flex-Entfernung in Gütersloh beginnt bei uns mit einer kostenlosen Besichtigung und einer Materialprobe für das akkreditierte Labor. Floor-Flex-Platten sind quadratische Vinyl-Asbest-Fliesen, die meist auf einem schwarzen, oft ebenfalls asbesthaltigen Bitumenkleber verlegt sind. Wir nehmen die Platten staubarm und möglichst unzerbrochen auf, statt sie zu schleifen oder zu brechen, und arbeiten je nach Umfang mit Abschottung und Unterdruck. Anschließend entfernen wir die Kleberschicht und übergeben den Untergrund belegreif. So bleibt die Faserbelastung in bewohnten Wohnungen in der Innenstadt, in Spexard oder Avenwedde kontrolliert.',
      'In Gütersloh stecken Floor-Flex-Platten vor allem in den gründerzeitlichen Wohnhäusern der Innenstadt und in Kattenstroth, die über die Jahrzehnte mehrfach modernisiert wurden, sowie in den Nachkriegssiedlungen von Spexard, Avenwedde und Friedrichsdorf. Häufig liegen sie unter neueren Belägen wie Laminat, Teppich oder PVC verborgen und fallen erst beim Umbau auf. Auch in Treppenhäusern, Kellern und ehemaligen Gewerberäumen sind die typischen 25-mal-25-Zentimeter-Fliesen verbreitet. Wir stimmen die Abschottung, die Anfahrt und den Abtransport auf die konkrete Wohnsituation und Zugänglichkeit ab, damit der Betrieb im restlichen Gebäude möglichst ungestört weiterläuft.',
      'Arbeiten an asbesthaltigen Floor-Flex-Platten sind nach TRGS 519 anzeigepflichtig. Zuständige Arbeitsschutzbehörde für Gütersloh ist die Bezirksregierung Detmold; die objektbezogene Anzeige reichen wir vor Arbeitsbeginn fristgerecht dort ein – das übernehmen wir für Sie. Platten und Kleber verpacken wir staubdicht und entsorgen sie als gefährlichen Abfall unter dem Abfallschlüssel AVV 17 06 05*. Nach der Feinreinigung und, bei abgeschotteten Bereichen, der Freimessung nach VDI 3492 erhalten Sie eine lückenlose Dokumentation mit Analyse- und Entsorgungsnachweisen.',
    ],
    comboFaqs: [
      {
        frage: 'Sind Floor-Flex-Arbeiten in Gütersloh anzeigepflichtig?',
        antwort:
          'Ja. Floor-Flex-Platten sind Vinyl-Asbest-Fliesen, und Arbeiten daran sind nach TRGS 519 anzeigepflichtig. Die objektbezogene Anzeige reichen wir vor Beginn bei der Bezirksregierung Detmold ein, der zuständigen Arbeitsschutzbehörde für Gütersloh. Das übernehmen wir vollständig für Sie, sodass Ihr Projekt in der Innenstadt, in Spexard oder Kattenstroth von Anfang an rechtssicher abläuft.',
      },
      {
        frage: 'Erkenne ich Floor-Flex-Platten in meiner Gütersloher Wohnung selbst?',
        antwort:
          'Ein typischer Hinweis sind quadratische, etwa 25 mal 25 Zentimeter große Vinylfliesen, oft auf schwarzem Kleber und häufig unter neueren Belägen verborgen. Sicherheit gibt aber nur die Laboranalyse. Entfernen Sie nichts eigenmächtig, denn beim Brechen werden Fasern frei. Wir nehmen bei der Besichtigung eine Probe und entscheiden erst nach dem Befund über das Verfahren.',
      },
      {
        frage: 'Wird beim Floor-Flex-Ausbau in Gütersloh auch der Kleber mit entfernt?',
        antwort:
          'Ja. Der schwarze Bitumenkleber unter den Floor-Flex-Platten ist oft selbst asbesthaltig und wird mit aufgenommen. Wir entfernen Platten und Kleberschicht staubarm und übergeben den Untergrund belegreif, sodass der neue Bodenaufbau direkt erfolgen kann. Alles wird unter AVV 17 06 05* entsorgt und lückenlos nachgewiesen.',
      },
    ],
  },
  'pak-sanierung/guetersloh': {
    leistung: 'pak-sanierung',
    stadt: 'guetersloh',
    metaTitle: 'PAK-Sanierung Gütersloh nach TRGS 524/551 | Asbesta',
    metaDescription:
      'PAK-Sanierung in Gütersloh: Teerkleber, Parkettpech und alte Dachbahnen nach TRGS 524/551 entfernen. PAK ist kein Asbest. Kostenlose Besichtigung.',
    intro:
      'Schwarzer Parkettkleber, Parkettpech, Teer-Estrichkleber oder alte Dachbahnen in Gütersloher Altbauten enthalten oft PAK, also polyzyklische aromatische Kohlenwasserstoffe. Asbesta saniert diese teerhaltigen Materialien fachgerecht nach TRGS 524 und 551 – sachkundig, staubarm und mit dokumentierter Entsorgung. Wir kommen aus Marl rund 85 km über die A2 nach Gütersloh. PAK ist kein Asbest.',
    lokalServiceKontext: [
      'Eine PAK-Sanierung in Gütersloh beginnt bei uns mit einer kostenlosen Besichtigung und einer Materialprobe für das akkreditierte Labor. PAK stecken vor allem in teerhaltigen Klebern, im Parkettpech unter altem Stabparkett, in Teer-Estrichklebern und in alten Bitumen- und Teerdachbahnen. Diese Materialien geben beim Aufstemmen, Schleifen oder Erwärmen gesundheitsschädliche Stoffe ab, weshalb wir sie staubarm und nach TRGS 524 und 551 aufnehmen, bei Bedarf mit Abschottung und Absaugung. Den Untergrund übergeben wir anschließend gereinigt, sodass der neue Aufbau direkt erstellt werden kann – ob in der Innenstadt, in Avenwedde oder in Friedrichsdorf.',
      'In Gütersloh treffen wir PAK vor allem in den gründerzeitlichen und nachkriegszeitlichen Wohnhäusern der Innenstadt und in Kattenstroth an, wo Stabparkett historisch oft in schwarzes Parkettpech gesetzt wurde. In den Nachkriegssiedlungen von Spexard, Avenwedde und Friedrichsdorf sowie auf Gewerbe- und Hallenflächen finden sich teerhaltige Estrichkleber und alte Teerdachbahnen. In den dörflichen Ortslagen Isselhorst und Hollen kommen ältere Dach- und Abdichtungsaufbauten hinzu. Wir stimmen Abschottung, Anfahrt und Abtransport auf die jeweilige Bausubstanz ab, damit die Sanierung sauber und mit möglichst wenig Beeinträchtigung abläuft.',
      'Wichtig ist die klare Abgrenzung: PAK ist kein Asbest. Die PAK-Sanierung richtet sich nach TRGS 524 und 551, nicht nach TRGS 519, und unterliegt nicht der asbestbezogenen Anzeigepflicht. Wir behaupten daher nie ein Asbest-Zertifikat, wo PAK vorliegt, sondern benennen den Stoff nach dem Laborbefund korrekt. Sollten in einem Bodenaufbau zusätzlich Asbestbestandteile auftauchen, grenzen wir die Stoffe sauber ab und behandeln jeden nach seinem eigenen Regelwerk. Das teerhaltige Material entsorgen wir als gefährlichen Abfall über zugelassene Wege und dokumentieren die Entsorgung lückenlos. Die für asbestbezogene Fragen in Gütersloh zuständige Behörde wäre im Übrigen die Bezirksregierung Detmold.',
    ],
    comboFaqs: [
      {
        frage: 'Ist PAK in Gütersloh dasselbe wie Asbest?',
        antwort:
          'Nein. PAK, also polyzyklische aromatische Kohlenwasserstoffe, sind teerhaltige Schadstoffe in Klebern, Parkettpech und alten Dachbahnen und haben mit Asbest nichts zu tun. Die PAK-Sanierung richtet sich nach TRGS 524 und 551, nicht nach TRGS 519. Wir grenzen die Stoffe nach Laborbefund klar ab und behandeln jeden nach seinem eigenen Regelwerk.',
      },
      {
        frage: 'Woran erkenne ich PAK in meinem Gütersloher Altbau?',
        antwort:
          'Typische Hinweise sind schwarzes, teerartig riechendes Parkettpech unter altem Stabparkett, schwarzer Estrich- oder Bodenkleber und alte Teerdachbahnen. Sicherheit gibt aber nur die Laboranalyse. Wir nehmen bei der kostenlosen Besichtigung eine Probe und entscheiden erst nach dem Befund über das passende Verfahren nach TRGS 524 und 551.',
      },
      {
        frage: 'Muss eine PAK-Sanierung in Gütersloh bei der Behörde angezeigt werden?',
        antwort:
          'Die asbestbezogene Anzeigepflicht nach TRGS 519 gilt für PAK nicht, da PAK kein Asbest ist. Die Sanierung erfolgt nach TRGS 524 und 551 mit staubarmen, geschützten Verfahren und dokumentierter Entsorgung des teerhaltigen Abfalls. Sollten in einem Bodenaufbau zusätzlich asbesthaltige Schichten stecken, würden wir diese getrennt nach TRGS 519 behandeln und bei der Bezirksregierung Detmold anmelden.',
      },
    ],
  },
  'abbrucharbeiten/detmold': {
    leistung: 'abbrucharbeiten',
    stadt: 'detmold',
    metaTitle: 'Abbrucharbeiten Detmold | Rückbau TRGS 519 | Asbesta',
    metaDescription:
      'Abbruch und Rückbau in Detmold mit vorheriger Schadstofferkundung, selektivem Rückbau und getrennten Stoffströmen. Kostenlose Besichtigung anfragen.',
    intro:
      'Asbesta führt Abbruch- und Rückbauarbeiten in Detmold durch, bei denen vor dem ersten Bagger eine fundierte Schadstofferkundung steht. Statt unkontrolliert abzureißen, bauen wir selektiv und schadstoffgetrennt zurück, damit belastete Bauteile sauber von verwertbarem Material getrennt bleiben. Unser Sitz ist in Marl, von dort fahren wir rund 110 km über die A2 und B239 in den Kreis Lippe.',
    lokalServiceKontext: [
      'Ein Abbruch in Detmold beginnt bei uns nicht mit dem Bagger, sondern mit der kostenlosen Besichtigung und einer Schadstofferkundung des Gebäudes. Wir entnehmen Materialproben aus Böden, Putzen, Dämmungen, Dächern und Rohrleitungen und lassen sie im akkreditierten Labor untersuchen. Erst wenn klar ist, welche Schadstoffe in welchen Bauteilen stecken, planen wir den Rückbau. Belastete Materialien wie Asbestzement, Floor-Flex oder teerhaltige Kleber bauen wir vorab selektiv und schadstoffgetrennt aus, bevor das eigentliche Bauwerk fällt. So vermeiden wir, dass Schadstoffe in den allgemeinen Bauschutt gelangen und der gesamte Abbruch teuer zur Sondermüllfraktion wird.',
      'Detmold als Residenzstadt des einstigen Fürstentums Lippe hat eine vielschichtige Bausubstanz, die jeden Abbruch anders aussehen lässt. In der historischen Innenstadt mit Fachwerk und gründerzeitlichen Gebäuden sind enge Zufahrten, schmale Gassen und denkmalnahe Nachbarschaft die Regel, sodass Anlieferung, Abschottung und Abtransport vorausschauend geplant werden müssen. In den Wohnsiedlungen der 1950er- bis 1980er-Jahre in Heidenoldendorf, Pivitsheide und Spork-Eichholz stecken in Wohnhäusern, Garagen und Nebengebäuden häufig Asbestzement und alte Mineralwolle, am Teutoburger Wald in Hiddesen und Heiligenkirchen kommen ältere Hofstellen und touristische Bauten mit eigenen Materialgemischen hinzu.',
      'Sobald asbesthaltige Bauteile im Spiel sind, ist die objektbezogene Anzeige nach TRGS 519 Pflicht, und für Detmold ist die Bezirksregierung Detmold die zuständige Arbeitsschutzbehörde. Diese Anzeige übernehmen wir vor Arbeitsbeginn für Sie. Beim selektiven Rückbau führen wir getrennte Stoffströme: Asbest-Abfall wird staubdicht verpackt und unter dem Abfallschlüssel AVV 17 06 05* entsorgt, künstliche Mineralfasern laufen nach TRGS 521, PAK-haltige Materialien nach TRGS 524 und 551, und mineralischer Bauschutt, Holz und Metall werden zur Verwertung getrennt. Über jeden Stoffstrom erhalten Sie lückenlose Entsorgungsnachweise für Bauamt, Käufer oder Versicherung.',
    ],
    comboFaqs: [
      {
        frage: 'Warum braucht es vor dem Abbruch in Detmold eine Schadstofferkundung?',
        antwort:
          'Weil Detmolder Gebäude aus der Zeit vor dem Asbestverbot 1993 oft Asbestzement, Floor-Flex, teerhaltige Kleber oder alte Mineralwolle enthalten. Reißt man ohne Erkundung ab, vermischen sich diese Schadstoffe mit dem Bauschutt, und die gesamte Menge muss als Sondermüll entsorgt werden. Mit vorheriger Erkundung und selektivem Rückbau trennen wir die Stoffströme sauber, das ist sicherer und meist deutlich günstiger.',
      },
      {
        frage: 'Was bedeutet selektiver, schadstoffgetrennter Rückbau konkret?',
        antwort:
          'Wir bauen ein Gebäude in Detmold nicht in einem Rutsch ab, sondern in einer geplanten Reihenfolge. Zuerst entfernen wir die belasteten Bauteile wie Asbestzement, Floor-Flex oder PAK-Kleber fachgerecht und einzeln verpackt, danach folgt der konventionelle Abbruch der unbelasteten Substanz. So bleiben Asbest-Abfall (AVV 17 06 05*), KMF, PAK und verwertbarer Bauschutt von Anfang an getrennt und werden je eigenem Entsorgungsweg zugeführt.',
      },
      {
        frage: 'Übernimmt Asbesta in Detmold auch die behördliche Anzeige und Entsorgung?',
        antwort:
          'Ja. Bei asbestbezogenen Arbeiten reichen wir die objektbezogene Anzeige nach TRGS 519 vor Beginn bei der Bezirksregierung Detmold ein, der für den Kreis Lippe zuständigen Arbeitsschutzbehörde. Wir verpacken den Asbest-Abfall staubdicht, entsorgen ihn unter AVV 17 06 05* und führen jeden weiteren Stoffstrom getrennt zu. Sie erhalten alle Entsorgungsnachweise lückenlos dokumentiert.',
      },
    ],
  },
  'asbestzement-ausbauen/detmold': {
    leistung: 'asbestzement-ausbauen',
    stadt: 'detmold',
    metaTitle: 'Asbestzement ausbauen in Detmold | Asbesta',
    metaDescription:
      'Asbestzement in Detmold zerstörungsfrei ausbauen: Platten, Rohre, Kanäle und Blumenkästen nach TRGS 519, Entsorgung AVV 17 06 05*. Jetzt anfragen.',
    intro:
      'Asbesta baut asbesthaltige Asbestzement-Produkte in Detmold zerstörungsfrei aus, ob Fassaden- und Dachplatten, Rohre, Lüftungskanäle oder die typischen Blumenkästen vor dem Haus. Als sachkundiger Fachbetrieb nach TRGS 519 mit Sitz in Marl reisen wir rund 110 km über die A2 und B239 in den Kreis Lippe an. Vor jeder Demontage klären wir per Materialprobe, ob tatsächlich Asbest enthalten ist.',
    lokalServiceKontext: [
      'Der Asbestzement-Ausbau in Detmold beginnt bei uns mit einer kostenlosen Besichtigung. Asbestzement ist fest gebundener Asbest, der unauffällig bleibt, solange das Material intakt ist, beim Brechen, Bohren, Flexen oder Hochdruckreinigen aber Fasern freisetzt. Deshalb arbeiten wir grundsätzlich zerstörungsfrei: Wir lösen Befestigungen vorsichtig, nehmen Platten und Bauteile einzeln ab und vermeiden jede Beschädigung. Bei unklarem Material entnehmen wir vorab eine Probe zur Laboranalyse, denn nur ein gesicherter Befund zeigt, ob ein Bauteil wirklich asbesthaltig ist und nach TRGS 519 behandelt werden muss.',
      'In Detmold begegnet uns Asbestzement in vielen Formen. An Wohnhäusern, Garagen und Nebengebäuden in Heidenoldendorf, Pivitsheide und Spork-Eichholz finden sich Wellplatten und ebene Fassadenplatten, in Kellern und an älteren Hofstellen am Teutoburger Wald in Hiddesen und Heiligenkirchen liegen Asbestzement-Rohre, Abwasser- und Lüftungskanäle. Auch die langlebigen grauen Blumenkästen, Pflanztröge und kleinen Fertigteile im Garten bestehen oft aus Asbestzement. In der historischen Innenstadt kommen Verkleidungen und Brüstungselemente hinzu. Wir stimmen Anfahrt, Gerüst, Materialtransport und Big-Bag-Stellplatz auf das jeweilige Objekt und die örtlichen Gegebenheiten ab.',
      'Für asbestbezogene Arbeiten in Detmold ist die Bezirksregierung Detmold die zuständige Arbeitsschutzbehörde. Die objektbezogene Anzeige nach TRGS 519 reichen wir dort vor Beginn der Demontage ein, das übernehmen wir für Sie. Die ausgebauten Asbestzement-Bauteile verpacken wir staubdicht in Big-Bags oder geeignete Gebinde und entsorgen sie als gefährlichen Abfall unter dem Abfallschlüssel AVV 17 06 05* über zugelassene Annahmestellen. Sie erhalten die Entsorgungsnachweise lückenlos, sodass der gesamte Weg vom Ausbau bis zur Deponie dokumentiert und rechtssicher bleibt.',
    ],
    comboFaqs: [
      {
        frage: 'Welche Asbestzement-Teile baut Asbesta in Detmold aus?',
        antwort:
          'Wir bauen in Detmold alle gängigen Asbestzement-Produkte aus: Wellplatten und ebene Fassadenplatten an Dach und Wand, Asbestzement-Rohre und Abwasserleitungen, Lüftungs- und Kabelkanäle sowie die typischen grauen Blumenkästen und Pflanztröge im Garten. Alle diese Bauteile sind fest gebundener Asbest und werden zerstörungsfrei demontiert, staubdicht verpackt und unter AVV 17 06 05* entsorgt.',
      },
      {
        frage: 'Kann man Asbestzement nicht einfach selbst abnehmen oder überstreichen?',
        antwort:
          'Davon raten wir dringend ab. Asbestzement darf nicht gebrochen, geflext, hochdruckgereinigt oder beschädigt werden, weil dabei Asbestfasern frei werden. Auch Überstreichen ist keine Lösung, da das Material darunter bleibt und beim späteren Rückbau weiter gefährlich ist. Seit dem Asbestverbot 1993 ist nur der zerstörungsfreie Ausbau durch einen Fachbetrieb nach TRGS 519 zulässig. Genau das übernehmen wir in Detmold.',
      },
      {
        frage: 'Wie wird der Asbestzement aus Detmold entsorgt?',
        antwort:
          'Asbestzement ist gefährlicher Abfall und wird unter dem Abfallschlüssel AVV 17 06 05* entsorgt. Wir verpacken die ausgebauten Platten, Rohre und Kästen staubdicht in Big-Bags oder geeignete Gebinde und bringen sie zu einer zugelassenen Annahmestelle. Die objektbezogene Anzeige nach TRGS 519 läuft vorab über die Bezirksregierung Detmold. Sie erhalten alle Entsorgungsnachweise lückenlos.',
      },
    ],
  },
  'bitumenkleber-entfernen/detmold': {
    leistung: 'bitumenkleber-entfernen',
    stadt: 'detmold',
    metaTitle: 'Bitumenkleber entfernen Detmold | TRGS 519 Asbesta',
    metaDescription:
      'Schwarzen Bitumenkleber in Detmold entfernen: saubere Abgrenzung Asbest nach TRGS 519 und PAK nach TRGS 524/551 per Analyse. Jetzt Termin anfragen.',
    intro:
      'Unter alten Bodenbelägen in Detmold steckt häufig schwarzer Bitumenkleber, der asbest- oder teerhaltig sein kann. Asbesta entfernt diesen Kleber fachgerecht und grenzt vorab per Materialanalyse klar ab, ob Asbest nach TRGS 519 oder PAK nach TRGS 524 und 551 vorliegt. Unser Sitz ist in Marl, von dort fahren wir rund 110 km über die A2 und B239 in den Kreis Lippe.',
    lokalServiceKontext: [
      'Wenn in Detmold ein alter Boden raus soll und darunter schwarzer, klebriger Bitumenkleber zum Vorschein kommt, beginnt unsere Arbeit mit einer kostenlosen Besichtigung und einer Materialprobe. Schwarzer Kleber ist nicht gleich schwarzer Kleber: Er kann Asbest enthalten, dann gilt TRGS 519 mit Anzeigepflicht, oder er kann teerhaltig sein und polyzyklische aromatische Kohlenwasserstoffe (PAK) enthalten, dann gilt TRGS 524 und 551. Beide Stoffe sehen oft ähnlich aus, sind aber unterschiedlich zu behandeln. Erst das Laborergebnis entscheidet über das Verfahren, deshalb wird bei uns kein verdächtiger Kleber ohne vorherige Analyse abgetragen.',
      'Detmolds Bausubstanz liefert reichlich Anlässe für solche Funde. In den Fachwerk- und Gründerzeithäusern der Innenstadt sowie in den Wohnsiedlungen der 1950er- bis 1980er-Jahre in Heidenoldendorf, Pivitsheide und Spork-Eichholz liegen unter Linoleum, PVC-Bahnen, alten Fliesen oder Parkett oft mehrere Klebergenerationen übereinander. Mal ist es asbesthaltiger Schwarzkleber unter Floor-Flex-Platten, mal teerhaltiger Bitumenkleber unter Parkett oder Estrich. Auch in den älteren Bauten am Teutoburger Wald in Hiddesen und Heiligenkirchen treffen wir auf diese Mischungen. Wir tragen den Kleber staubarm ab, je nach Befund mit den Schutzmaßnahmen der jeweils einschlägigen TRGS.',
      'Die saubere Materialabgrenzung ist hier der Kern unserer Arbeit. Liegt Asbest vor, ist die Tätigkeit anzeigepflichtig nach TRGS 519, und wir reichen die objektbezogene Anzeige vor Beginn bei der für Detmold zuständigen Bezirksregierung Detmold ein. Der Asbest-Abfall wird unter dem Abfallschlüssel AVV 17 06 05* entsorgt. Handelt es sich dagegen um PAK aus Teerklebern, arbeiten wir nach TRGS 524 und 551, denn PAK ist ausdrücklich kein Asbest und wird nicht über den Asbest-Abfallschlüssel entsorgt. Wir benennen jedes Material klar, wählen das passende Verfahren und dokumentieren den gesamten Ablauf.',
    ],
    comboFaqs: [
      {
        frage: 'Ist schwarzer Bitumenkleber unter meinem Boden in Detmold immer Asbest?',
        antwort:
          'Nein. Schwarzer Bitumenkleber kann asbesthaltig sein, dann gilt TRGS 519, er kann aber auch teerhaltig sein und PAK enthalten, dann gilt TRGS 524 und 551. Beide sehen sich oft zum Verwechseln ähnlich. Sicherheit gibt nur eine Materialanalyse im akkreditierten Labor. Wir entnehmen die Probe vor jeder Entfernung und entscheiden erst nach dem Befund über das richtige Verfahren.',
      },
      {
        frage: 'Worin liegt der Unterschied zwischen asbesthaltigem und PAK-haltigem Kleber?',
        antwort:
          'Asbesthaltiger Schwarzkleber enthält Asbestfasern und fällt unter die anzeigepflichtige TRGS 519, der Abfall geht unter AVV 17 06 05* in die Entsorgung. PAK-haltiger Bitumen- oder Teerkleber enthält dagegen polyzyklische aromatische Kohlenwasserstoffe und wird nach TRGS 524 und 551 behandelt. PAK ist kein Asbest und braucht kein TRGS-519-Verfahren. Welcher Fall vorliegt, klärt allein die Laboranalyse.',
      },
      {
        frage: 'Welche Behörde ist bei asbesthaltigem Kleber in Detmold zuständig?',
        antwort:
          'Bestätigt das Labor Asbest im Kleber, ist die Arbeit anzeigepflichtig nach TRGS 519, und die objektbezogene Anzeige geht an die Bezirksregierung Detmold als zuständige Arbeitsschutzbehörde für den Kreis Lippe. Diese Anzeige übernehmen wir vor Arbeitsbeginn für Sie. Bei reinem PAK-Befund nach TRGS 524 und 551 entfällt die Asbest-Anzeige, wir arbeiten dann nach den dortigen Vorgaben.',
      },
    ],
  },
  'floor-flex-entfernen/detmold': {
    leistung: 'floor-flex-entfernen',
    stadt: 'detmold',
    metaTitle: 'Floor-Flex entfernen Detmold | Asbesta TRGS 519',
    metaDescription:
      'Floor-Flex-Platten in Detmold staubarm entfernen: Vinyl-Asbest-Fliesen samt Kleber nach TRGS 519, anzeigepflichtig. Kostenlose Besichtigung anfragen.',
    intro:
      'Asbesta nimmt Floor-Flex-Platten in Detmold samt Kleber staubarm auf, also die alten Vinyl-Asbest-Fliesen, die in vielen Häusern vor 1993 verlegt wurden. Die Arbeit ist nach TRGS 519 anzeigepflichtig, und genau so führen wir sie als sachkundiger Fachbetrieb aus. Unser Sitz ist in Marl, von dort fahren wir rund 110 km über die A2 und B239 in den Kreis Lippe.',
    lokalServiceKontext: [
      'Die Floor-Flex-Entfernung in Detmold beginnt bei uns mit einer kostenlosen Besichtigung und in der Regel einer Materialprobe. Floor-Flex-Platten sind Vinyl-Asbest-Fliesen, meist im 25er- oder 30er-Raster verlegt, oft in gedeckten Farben mit körniger Maserung. Der Asbest steckt fest gebunden in der Platte, kritisch wird es jedoch beim Aufstemmen, Schleifen oder Herausreißen und vor allem beim darunterliegenden schwarzen Kleber. Wir nehmen die Platten möglichst ganz auf, statt sie zu zerbrechen, arbeiten staubarm und entfernen auch die Klebereste kontrolliert. Erst nach gesichertem Befund und eingereichter Anzeige beginnt der eigentliche Ausbau.',
      'In Detmold finden wir Floor-Flex besonders häufig in den Wohnsiedlungen der 1950er- bis 1980er-Jahre in Heidenoldendorf, Pivitsheide und Spork-Eichholz, wo die Platten in Wohnungen, Fluren, Kellern und Treppenhäusern verlegt wurden. Auch in den Fachwerk- und Gründerzeithäusern der Innenstadt, die im Lauf der Jahrzehnte mehrfach modernisiert wurden, liegen sie oft unter neueren Belägen verborgen. In älteren Objekten am Teutoburger Wald in Hiddesen und Heiligenkirchen stoßen wir ebenfalls darauf. Wir stimmen Abschottung, Staubschutz und Abtransport auf die Raumsituation ab, gerade in bewohnten Wohnungen und engen Treppenhäusern.',
      'Die Aufnahme von Floor-Flex-Platten ist eine anzeigepflichtige Tätigkeit nach TRGS 519. Für Detmold reichen wir die objektbezogene Anzeige vor Arbeitsbeginn bei der Bezirksregierung Detmold ein, das übernehmen wir für Sie. Häufig liegt unter den Platten ein schwarzer Schwarzkleber, der seinerseits Asbest oder PAK enthalten kann, weshalb wir auch den Kleber per Analyse einordnen. Die asbesthaltigen Platten und Klebereste verpacken wir staubdicht und entsorgen sie als gefährlichen Abfall unter dem Abfallschlüssel AVV 17 06 05*. Sie erhalten Anzeige und Entsorgungsnachweise lückenlos dokumentiert.',
    ],
    comboFaqs: [
      {
        frage: 'Woran erkenne ich Floor-Flex-Platten in meinem Detmolder Haus?',
        antwort:
          'Floor-Flex-Platten sind quadratische Vinyl-Asbest-Fliesen, meist 25 mal 25 oder 30 mal 30 Zentimeter, oft in gedeckten Tönen mit körniger oder marmorierter Maserung, häufig auf einem schwarzen Kleber verlegt. Sicher erkennbar ist der Asbestgehalt aber nur im Labor. Reißen Sie die Platten nicht selbst heraus, sondern lassen Sie vor dem Ausbau eine Probe nehmen, denn beim Brechen werden Fasern frei.',
      },
      {
        frage: 'Ist das Entfernen von Floor-Flex in Detmold anzeigepflichtig?',
        antwort:
          'Ja. Die Aufnahme asbesthaltiger Floor-Flex-Platten ist eine anzeigepflichtige Tätigkeit nach TRGS 519. Die objektbezogene Anzeige reichen wir vor Arbeitsbeginn bei der für Detmold zuständigen Bezirksregierung Detmold ein. Diese Anzeige übernehmen wir vollständig für Sie, sodass Ihr Projekt in der Innenstadt, in Heidenoldendorf oder in Pivitsheide von Anfang an rechtssicher abläuft.',
      },
      {
        frage: 'Muss der schwarze Kleber unter den Floor-Flex-Platten mit raus?',
        antwort:
          'In der Regel ja, denn der schwarze Schwarzkleber unter den Platten kann ebenfalls Asbest oder teerhaltige PAK enthalten. Wir lassen ihn per Materialanalyse einordnen und entfernen die Klebereste kontrolliert und staubarm. Bei Asbest läuft die Entsorgung über AVV 17 06 05*, bei reinem PAK-Befund nach TRGS 524 und 551. So bleibt der Untergrund sauber und der neue Belag kann sicher verlegt werden.',
      },
    ],
  },
  'pak-sanierung/detmold': {
    leistung: 'pak-sanierung',
    stadt: 'detmold',
    metaTitle: 'PAK-Sanierung Detmold nach TRGS 524/551 | Asbesta',
    metaDescription:
      'PAK-Sanierung in Detmold nach TRGS 524/551: Teerkleber, Parkettpech und alte Dachbahnen sicher entfernen. PAK ist kein Asbest. Jetzt anfragen.',
    intro:
      'Asbesta saniert PAK-belastete Materialien in Detmold nach TRGS 524 und 551, vom teerhaltigen Parkettkleber über Parkettpech bis zu alten Dachbahnen. PAK, also polyzyklische aromatische Kohlenwasserstoffe, sind ausdrücklich kein Asbest, erfordern aber ebenso ein fachgerechtes, geschütztes Verfahren. Unser Sitz ist in Marl, von dort fahren wir rund 110 km über die A2 und B239 in den Kreis Lippe.',
    lokalServiceKontext: [
      'Die PAK-Sanierung in Detmold beginnt bei uns mit einer kostenlosen Besichtigung und einer Materialanalyse, denn PAK lässt sich am Material nicht sicher mit bloßem Auge bestimmen. Typische Quellen sind teerhaltige Kleber unter Parkett und Holzpflaster, das sogenannte Parkettpech, schwarze Klebemassen unter Estrich sowie alte teerhaltige Dachbahnen und Abdichtungen. Diese Stoffe riechen oft typisch teerig und können bei Wärme oder Bearbeitung ausgasen. Wir arbeiten nach TRGS 524 und ergänzend TRGS 551, das heißt mit geeigneter Absaugung, Atemschutz, staubarmen Abtragverfahren und sauberer Abschottung, damit weder Bewohner noch nachfolgende Gewerke belastet werden.',
      'In Detmolds Bausubstanz begegnet uns PAK regelmäßig. In den Fachwerk- und Gründerzeithäusern der Innenstadt sowie in repräsentativen Altbauten liegt unter alten Holzfußböden häufig teerhaltiges Parkettpech, das früher zum Verkleben von Stab- und Tafelparkett genutzt wurde. In den Wohn- und Zweckbauten der 1950er- bis 1980er-Jahre in Heidenoldendorf, Pivitsheide und Spork-Eichholz finden sich teerhaltige Estrichkleber und Bitumenabdichtungen, an älteren Hofstellen und Nebengebäuden am Teutoburger Wald in Hiddesen und Heiligenkirchen alte Dachbahnen und Schweißbahnen mit Teeranteilen. Wir stimmen Verfahren, Absaugung und Abtransport auf das jeweilige Objekt und die Raumsituation ab.',
      'Hier ist die saubere Materialabgrenzung entscheidend: PAK ist kein Asbest. Eine PAK-Sanierung läuft daher nicht über die TRGS 519 und nicht über den Asbest-Abfallschlüssel AVV 17 06 05*, sondern nach TRGS 524 und 551 mit eigener Abfalleinstufung des teerhaltigen Materials. Wir grenzen per Laboranalyse klar ab, ob in einem schwarzen Kleber Asbest oder PAK steckt, denn beide kommen in Detmolder Altbauten vor und sehen sich oft ähnlich. So vermeiden wir, dass ein Befund mit dem anderen verwechselt wird. Über das gewählte Verfahren und die Entsorgung erhalten Sie eine prüffähige Dokumentation.',
    ],
    comboFaqs: [
      {
        frage: 'Ist eine PAK-Sanierung in Detmold dasselbe wie eine Asbestsanierung?',
        antwort:
          'Nein. PAK, also polyzyklische aromatische Kohlenwasserstoffe, sind kein Asbest. Eine PAK-Sanierung läuft nach TRGS 524 und 551, nicht nach der Asbest-Regel TRGS 519, und der Abfall wird nicht unter AVV 17 06 05* eingestuft. Beide Stoffe erfordern geschützte Verfahren, sind aber rechtlich und entsorgungstechnisch verschieden. Wir grenzen sie in Detmold per Materialanalyse klar voneinander ab.',
      },
      {
        frage: 'Wo tritt PAK in Detmolder Gebäuden typischerweise auf?',
        antwort:
          'PAK steckt in Detmold vor allem in teerhaltigen Klebern: im Parkettpech unter altem Holzparkett in Innenstadt-Altbauten, in schwarzen Estrich- und Bodenklebern der Nachkriegsbauten in Heidenoldendorf oder Pivitsheide sowie in alten teerhaltigen Dachbahnen an Hofstellen und Nebengebäuden in Hiddesen und Heiligenkirchen. Sicher nachweisbar ist PAK nur im Labor, deshalb steht am Anfang immer eine Materialprobe.',
      },
      {
        frage: 'Wie läuft die PAK-Sanierung bei Asbesta in Detmold ab?',
        antwort:
          'Nach der kostenlosen Besichtigung und der Materialanalyse planen wir das Verfahren nach TRGS 524 und 551. Wir schotten den Bereich ab, arbeiten mit Absaugung, Atemschutz und staubarmen Abtragverfahren und entfernen Parkettpech, Teerkleber oder alte Dachbahnen kontrolliert. Das teerhaltige Material wird entsprechend seiner Einstufung entsorgt. Über den gesamten Ablauf erhalten Sie eine prüffähige Dokumentation.',
      },
    ],
  },
  'abbrucharbeiten/herford': {
    leistung: 'abbrucharbeiten',
    stadt: 'herford',
    metaTitle: 'Abbrucharbeiten Herford | Rückbau TRGS 519 | Asbesta',
    metaDescription:
      'Abbruch und schadstoffgetrennter Rueckbau in Herford nach Schadstofferkundung. Asbesta aus Marl, ganz NRW. Jetzt Besichtigung anfragen.',
    intro:
      'Asbesta plant und fuehrt kontrollierten Abbruch und Rueckbau in Herford aus, von der vorherigen Schadstofferkundung bis zum selektiven, schadstoffgetrennten Rueckbau. Vom Fachwerkkern der Innenstadt bis zu den alten Fabrikarealen entlang der Werre kommen wir aus Marl rund 100 km ueber die A2 und A30 nach Ostwestfalen-Lippe. Vor jedem Eingriff klaeren wir, welche Materialien verbaut sind und welche Stoffstroeme getrennt entsorgt werden muessen.',
    lokalServiceKontext: [
      'Ein kontrollierter Rueckbau in Herford beginnt bei uns nicht mit dem Bagger, sondern mit der Schadstofferkundung. Wir erkunden das Objekt, entnehmen Materialproben und lassen sie im akkreditierten Labor untersuchen, bevor irgendetwas bewegt wird. Erst wenn klar ist, ob Asbest, kuenstliche Mineralfasern oder PAK-belastete Kleber vorliegen, planen wir den selektiven, schadstoffgetrennten Rueckbau. Die belasteten Fraktionen bauen wir zuerst gesichert aus, die mineralischen Reststoffe wie Mauerwerk, Beton und Bauschutt danach in getrennten Stoffstroemen. So bleibt die Anfahrt aus Marl ueber die A2 und A30 fuer Sie planbar und der Rueckbau in der Innenstadt wie in den Aussenlagen sauber abgegrenzt.',
      'Herfords Bausubstanz ist gemischt: Im Fachwerkkern der Innenstadt und in den Gruenderzeitquartieren am Stiftberg pragen aeltere Wohnbauten das Bild, dazu kommen Nachkriegssiedlungen in Schwarzenmoor, Falkendiek, Elverdissen und Laar sowie das Textil- und Moebelerbe entlang der Werre. In solchen Gebaeuden finden sich haeufig Floor-Flex-Platten und Bitumenkleber unter alten Boeden, Asbestzement an Dach und Fassade sowie KMF-Daemmungen in Decken und Trockenbauwaenden. Gerade bei den verwinkelten Hof- und Anbausituationen des Hansestadtkerns planen wir Erschliessung und Logistik vorab so, dass Rueckbau und Schadstofftrennung ineinandergreifen.',
      'Asbest unterliegt seit dem Totalverbot 1993 strengen Regeln. Steht bei einem Abbruch in Herford asbesthaltiges Material an, erstatten wir die objektbezogene Anzeige nach TRGS 519 bei der zustaendigen Arbeitsschutzbehoerde, der Bezirksregierung Detmold. KMF behandeln wir nach TRGS 521, PAK-belastete Teer- und Klebstoffreste nach TRGS 524 beziehungsweise 551. KMF und PAK sind ausdruecklich kein Asbest, werden aber ebenso fachgerecht getrennt und entsorgt. Asbesthaltiger Abfall geht staubdicht verpackt unter dem Schluessel AVV 17 06 05* zur Deponie. Sie erhalten von uns eine nachvollziehbare Dokumentation und einen klaren Ablauf, der zur jeweiligen Lage in Herford passt.',
    ],
    comboFaqs: [
      {
        frage: 'Was bedeutet schadstoffgetrennter Rueckbau bei einem Abbruch in Herford?',
        antwort:
          'Schadstoffgetrennter Rueckbau heisst, dass wir vor dem Abbruch erst die Schadstoffe erkunden und belastete Materialien wie Asbest, KMF oder PAK-Kleber gesichert und getrennt ausbauen. Erst danach folgt der mineralische Rueckbau von Mauerwerk und Beton. So entstehen getrennte Stoffstroeme, die jeweils korrekt entsorgt werden. Bei Asbest erstatten wir vorab die Anzeige nach TRGS 519 bei der Bezirksregierung Detmold.',
      },
      {
        frage: 'Ist vor einem Abbruch in Herford immer eine Schadstofferkundung noetig?',
        antwort:
          'Bei Gebaeuden aus der Zeit vor dem Asbest-Totalverbot 1993 ist eine Schadstofferkundung dringend zu empfehlen und bei anzeigepflichtigen Asbestarbeiten faktisch unverzichtbar. In Herforder Fachwerk-, Gruenderzeit- und Nachkriegsbauten stecken haeufig Floor-Flex, Bitumenkleber oder Welleternit. Wir entnehmen Proben, lassen sie analysieren und planen den Rueckbau erst auf Basis des Befunds, statt mit Pauschalannahmen zu arbeiten.',
      },
      {
        frage: 'Sind PAK und KMF beim Rueckbau dasselbe wie Asbest?',
        antwort:
          'Nein. Kuenstliche Mineralfasern (KMF) aus alter Mineralwolle behandeln wir nach TRGS 521, PAK in alten Teer- und Klebstoffresten nach TRGS 524 und 551. Asbest faellt unter TRGS 519. In vielen Herforder Bauten treten mehrere dieser Stoffe zusammen auf, deshalb grenzen wir sie bei der Erkundung sauber ab und trennen sie im Rueckbau konsequent. So wird jede Stoffgruppe nach dem passenden Regelwerk entsorgt.',
      },
    ],
  },
  'asbestzement-ausbauen/herford': {
    leistung: 'asbestzement-ausbauen',
    stadt: 'herford',
    metaTitle: 'Asbestzement ausbauen in Herford | Asbesta',
    metaDescription:
      'Asbestzement in Herford zerstoerungsfrei ausbauen: Platten, Rohre, Kanaele nach TRGS 519, Entsorgung AVV 17 06 05*. Besichtigung anfragen.',
    intro:
      'Asbestzement steckt in Herford in vielerlei Form: in Wellplatten und Fassadenschindeln, in alten Abwasser- und Lueftungsrohren, in Kanaelen, Blumenkaesten und Schachtabdeckungen. Asbesta baut diese fest gebundenen Asbestzementprodukte zerstoerungsfrei und nach TRGS 519 aus und entsorgt sie unter dem Abfallschluessel AVV 17 06 05*. Wir kommen aus Marl rund 100 km ueber die A2 und A30 in den gesamten Kreis Herford.',
    lokalServiceKontext: [
      'Ein Asbestzement-Ausbau in Herford beginnt bei uns mit einer kostenlosen Besichtigung und einer Materialprobe, denn Asbestzement laesst sich optisch kaum von neueren Faserzementprodukten unterscheiden. Da das Material fest gebunden ist, darf es weder gebrochen, gesaegt, hochdruckgereinigt noch ueberstrichen werden, weil dabei Fasern frei wuerden. Wir loesen Platten, Rohre und Kanaele stattdessen zerstoerungsfrei, lockern Verbindungen und Befestigungen vorsichtig und nehmen die Teile im Ganzen ab. Erst nach gesichertem Befund und freigegebener Anzeige planen wir den staubarmen Ausbau an Ihrem Objekt.',
      'Herfords Bausubstanz bringt sehr unterschiedliche Asbestzement-Funde mit sich. Im Fachwerk- und Gruenderzeitkern der Innenstadt und am Stiftberg sind Hofseiten und Anbauten oft mit Asbestzementschindeln verkleidet, dazu kommen alte Faulrohre und Abluftkanaele in Kellern und Schaechten. In den Eigenheim- und Siedlungsgebieten von Schwarzenmoor, Falkendiek, Elverdissen und Laar treffen wir auf Welleternit-Daecher von Garagen und Carports sowie auf Blumenkaesten und Brunnenringe aus Asbestzement. An den Textil- und Moebelfabrikarealen entlang der Werre sind ganze Hallendaecher und Versorgungsleitungen betroffen. Anfahrt, Materialtransport und Big-Bag-Stellplatz stimmen wir auf die jeweilige Zufahrt ab.',
      'Fuer den Ausbau asbesthaltigen Asbestzements ist in Herford eine objektbezogene Anzeige nach TRGS 519 erforderlich, zustaendige Arbeitsschutzbehoerde ist die Bezirksregierung Detmold. Diese Anzeige reichen wir vor Beginn der Arbeiten fuer Sie ein. Die ausgebauten Teile, ob Platten, Rohre oder Kanaele, verpacken wir staubdicht in zugelassenen Big-Bags und entsorgen sie als gefaehrlichen Abfall unter dem Schluessel AVV 17 06 05* mit lueckenlosem Nachweis. So bleibt der gesamte Ablauf vom Ausbau bis zur Deponie rechtssicher dokumentiert, egal ob Ihr Objekt in der Innenstadt, in Elverdissen oder an einem alten Fabrikareal liegt.',
    ],
    comboFaqs: [
      {
        frage: 'Welche Asbestzement-Teile baut Asbesta in Herford aus?',
        antwort:
          'Wir bauen alle Formen von Asbestzement aus: Wellplatten und Fassadenschindeln, alte Abwasser-, Faul- und Lueftungsrohre, Lueftungs- und Kabelkanaele sowie Blumenkaesten, Brunnenringe und Schachtabdeckungen. Alle diese Produkte sind fest gebunden und enthalten Asbest. Wir nehmen sie zerstoerungsfrei nach TRGS 519 ab und entsorgen sie unter AVV 17 06 05*.',
      },
      {
        frage: 'Kann ich Asbestzement-Platten in Herford nicht einfach selbst abnehmen?',
        antwort:
          'Davon raten wir dringend ab. Beim Brechen, Saegen oder unsachgemaessen Abnehmen werden Asbestfasern frei, und Arbeiten an Asbest sind seit dem Totalverbot 1993 streng geregelt. Der Ausbau muss nach TRGS 519 erfolgen und ist objektbezogen bei der Bezirksregierung Detmold anzuzeigen. Wir uebernehmen Anzeige, zerstoerungsfreien Ausbau und Entsorgung fuer Sie.',
      },
      {
        frage: 'Was kostet der Asbestzement-Ausbau in Herford?',
        antwort:
          'Der Preis haengt von Art, Menge und Zugaenglichkeit ab. Ein paar Meter altes Faulrohr im Keller lassen sich anders kalkulieren als ein verkleidetes Hallendach an einem Fabrikareal in Herford. Als grobe Orientierung beginnen kleinere Massnahmen im niedrigen vierstelligen Bereich inklusive Entsorgung. Den verbindlichen Festpreis nennen wir nach einer kostenlosen Besichtigung vor Ort.',
      },
    ],
  },
  'bitumenkleber-entfernen/herford': {
    leistung: 'bitumenkleber-entfernen',
    stadt: 'herford',
    metaTitle: 'Bitumenkleber entfernen Herford | TRGS 519 Asbesta',
    metaDescription:
      'Schwarzen Bitumenkleber unter alten Boeden in Herford fachgerecht entfernen: saubere Abgrenzung Asbest TRGS 519 und PAK TRGS 524. Besichtigung anfragen.',
    intro:
      'Unter alten Boeden in Herford steckt haeufig schwarzer Bitumenkleber, der asbest- oder teerhaltig sein kann. Asbesta entfernt diesen Schwarzkleber fachgerecht und grenzt dabei sauber ab, ob es sich um Asbest nach TRGS 519 oder um PAK-haltigen Teerkleber nach TRGS 524 und 551 handelt. Aus Marl kommen wir rund 100 km ueber die A2 und A30 in den gesamten Kreis Herford.',
    lokalServiceKontext: [
      'Schwarzer Bitumenkleber unter Parkett, Fliesen oder Estrich ist in Herford ein klassischer Fund bei der Modernisierung. Optisch sieht der Kleber gleich aus, chemisch macht es aber einen grossen Unterschied: Er kann Asbest enthalten und faellt dann unter TRGS 519, oder er ist teerhaltig und PAK-belastet und faellt unter TRGS 524 und 551. Deshalb steht am Anfang immer die Materialprobe im akkreditierten Labor. Erst der Befund entscheidet ueber das Verfahren. Asbesthaltigen Kleber nehmen wir staubarm und unter Abschottung auf, PAK-belasteten Teerkleber mit dem passenden Schutz- und Entsorgungskonzept. So vermeiden wir, dass beim Abschleifen oder Herausreissen unkontrolliert Fasern oder Daempfe frei werden.',
      'Herfords Bausubstanz liefert viele solcher Boeden. In den Fachwerk- und Gruenderzeithaeusern der Innenstadt und am Stiftberg wurden ueber Jahrzehnte Belaege uebereinander verlegt, sodass Schwarzkleber oft mehrlagig unter spaeteren Boeden liegt. In den Nachkriegs- und Eigenheimgebieten von Schwarzenmoor, Falkendiek, Elverdissen und Laar finden wir Floor-Flex-Platten mit schwarzem Kleber sowie teerhaltige Parkettkleber. In umgebauten Gewerbe- und Buroflaechen entlang der Werre und an den alten Fabrikarealen kommen grossflaechige Klebebetten dazu. Jeden Bodenaufbau pruefen wir einzeln, statt vom Aussehen auf den Schadstoff zu schliessen.',
      'Die Materialabgrenzung ist hier entscheidend, denn Asbest und PAK sind zwei verschiedene Schadstoffe mit unterschiedlichen Regelwerken. Ist der Kleber asbesthaltig, erstatten wir die objektbezogene Anzeige nach TRGS 519 bei der Bezirksregierung Detmold als zustaendiger Arbeitsschutzbehoerde und entsorgen den Abfall unter AVV 17 06 05*. Ist er teer- beziehungsweise PAK-belastet, arbeiten wir nach TRGS 524 und 551. PAK ist ausdruecklich kein Asbest und erfordert kein TRGS-519-Verfahren, wohl aber einen ebenso sorgfaeltigen, getrennten Ausbau. Wir benennen jedes Material klar und waehlen das richtige Vorgehen, damit Sie wissen, womit Sie es tatsaechlich zu tun haben.',
    ],
    comboFaqs: [
      {
        frage: 'Ist schwarzer Bitumenkleber unter meinem Boden in Herford immer Asbest?',
        antwort:
          'Nein. Schwarzer Kleber kann asbesthaltig sein und faellt dann unter TRGS 519, er kann aber auch teer- und damit PAK-haltig sein und faellt unter TRGS 524 und 551. Vom Aussehen laesst sich das nicht unterscheiden. Wir nehmen eine Probe und lassen sie analysieren. Erst der Laborbefund entscheidet, welches Verfahren noetig ist und wie der Kleber entsorgt wird.',
      },
      {
        frage: 'Wie grenzt Asbesta Asbest und PAK beim Klebstoff in Herford ab?',
        antwort:
          'Ueber die Laboranalyse der Materialprobe. Faellt der Befund auf Asbest, arbeiten wir nach TRGS 519, zeigen die Arbeiten bei der Bezirksregierung Detmold an und entsorgen unter AVV 17 06 05*. Faellt er auf teerhaltigen PAK-Kleber, gilt TRGS 524 und 551. PAK ist kein Asbest. Diese klare Abgrenzung bestimmt Schutzmassnahmen, Ablauf und Entsorgungsweg.',
      },
      {
        frage: 'Kann ich den alten Schwarzkleber in Herford nicht einfach abschleifen?',
        antwort:
          'Auf keinen Fall ungeprueft. Beim trockenen Abschleifen oder Herausreissen werden bei asbesthaltigem Kleber Fasern und bei Teerklebern PAK-haltiger Staub frei. Das gefaehrdet Ihre Gesundheit und die der Nachbarschaft. Wir klaeren per Probe ab, was vorliegt, und nehmen den Kleber dann staubarm und mit dem passenden Verfahren nach TRGS 519 oder TRGS 524 auf.',
      },
    ],
  },
  'floor-flex-entfernen/herford': {
    leistung: 'floor-flex-entfernen',
    stadt: 'herford',
    metaTitle: 'Floor-Flex entfernen Herford | Asbesta TRGS 519',
    metaDescription:
      'Floor-Flex-Platten in Herford staubarm aufnehmen: Vinyl-Asbest-Fliesen samt Kleber, anzeigepflichtig nach TRGS 519. Jetzt Besichtigung anfragen.',
    intro:
      'Floor-Flex-Platten, also Vinyl-Asbest-Fliesen, liegen in Herford noch in vielen Boeden aus der Zeit vor dem Asbest-Totalverbot 1993. Asbesta nimmt diese Platten samt anhaftendem Kleber staubarm auf, anzeigepflichtig und nach TRGS 519. Aus Marl kommen wir rund 100 km ueber die A2 und A30 in die alte Hansestadt und den gesamten Kreis Herford. Vor jeder Arbeit klaeren wir per Materialprobe, ob Asbest vorliegt.',
    lokalServiceKontext: [
      'Die Floor-Flex-Entfernung in Herford beginnt bei uns mit einer kostenlosen Besichtigung und einer Materialprobe, denn Vinyl-Asbest-Fliesen sehen aelteren PVC-Boeden zum Verwechseln aehnlich. Bestaetigt das Labor Asbest, planen wir die anzeigepflichtige Aufnahme. Die Platten sind zwar fest gebunden, brechen aber leicht, und der oft mitverlegte schwarze Bitumenkleber kann zusaetzlich asbesthaltig sein. Deshalb arbeiten wir staubarm, loesen die Fliesen moeglichst im Ganzen und nehmen den Kleber kontrolliert mit auf, statt ihn trocken abzuschleifen. So bleibt die Faserfreisetzung in Ihren Raeumen so gering wie moeglich.',
      'Herfords Bausubstanz erklaert, warum Floor-Flex hier so verbreitet ist. In den Fachwerk- und Gruenderzeithaeusern der Innenstadt und am Stiftberg wurden bei Modernisierungen der 1960er- bis 1980er-Jahre haeufig Vinyl-Asbest-Fliesen verlegt, ebenso in den Nachkriegs- und Eigenheimgebieten von Schwarzenmoor, Falkendiek, Elverdissen und Laar. In umgebauten Schulen, Praxen, Buros und Gewerbeflaechen entlang der Werre und an den alten Fabrikarealen finden sich grossflaechige Floor-Flex-Boeden, oft unter spaeteren Belaegen verborgen. Da die Platten haeufig erst beim Ausraeumen sichtbar werden, planen wir Zufahrt und Materiallogistik flexibel auf das jeweilige Objekt.',
      'Die Aufnahme asbesthaltiger Floor-Flex-Platten ist nach TRGS 519 anzeigepflichtig. Die objektbezogene Anzeige reichen wir vor Beginn bei der Bezirksregierung Detmold als zustaendiger Arbeitsschutzbehoerde fuer Sie ein. Platten und anhaftender Kleber werden staubdicht verpackt und als gefaehrlicher Abfall unter dem Schluessel AVV 17 06 05* entsorgt, mit lueckenlosem Nachweis. Wichtig ist die Abgrenzung des Klebers: Ist der Schwarzkleber nicht asbest-, sondern teerhaltig, faellt er als PAK unter TRGS 524 und 551 und ist damit kein Asbest. Wir pruefen das per Analyse und behandeln jede Schicht nach dem richtigen Regelwerk.',
    ],
    comboFaqs: [
      {
        frage: 'Sind Floor-Flex-Platten in meinem Herforder Boden anzeigepflichtig?',
        antwort:
          'Ja. Floor-Flex sind Vinyl-Asbest-Fliesen, und ihre Aufnahme ist nach TRGS 519 anzeigepflichtig. Die objektbezogene Anzeige reichen wir vor Beginn bei der Bezirksregierung Detmold ein. Das uebernehmen wir vollstaendig fuer Sie, sodass Ihre Bodensanierung in der Innenstadt, am Stiftberg oder in Falkendiek von Anfang an rechtssicher ablaeuft.',
      },
      {
        frage: 'Woran erkenne ich Floor-Flex-Platten in einem Herforder Altbau?',
        antwort:
          'Vinyl-Asbest-Fliesen sind meist quadratisch, oft im Format um 25 oder 30 Zentimeter, und sehen aelteren PVC-Boeden sehr aehnlich. Haeufig liegt schwarzer Bitumenkleber darunter. Sicher erkennbar ist Asbest aber nur im Labor. Wir nehmen bei der Besichtigung eine Probe und lassen sie analysieren, bevor in dem Boden gearbeitet wird.',
      },
      {
        frage: 'Wird beim Floor-Flex-Ausbau in Herford auch der Kleber mit entfernt?',
        antwort:
          'Ja, der anhaftende Kleber gehoert mit zur Sanierung. Er kann selbst asbesthaltig sein und faellt dann ebenfalls unter TRGS 519. Ist er teer- und damit PAK-haltig, gilt TRGS 524 und 551, und es handelt sich nicht um Asbest. Wir klaeren das per Analyse, nehmen Platten und Kleber staubarm auf und entsorgen jede Schicht nach dem passenden Regelwerk.',
      },
    ],
  },
  'pak-sanierung/herford': {
    leistung: 'pak-sanierung',
    stadt: 'herford',
    metaTitle: 'PAK-Sanierung Herford nach TRGS 524/551 | Asbesta',
    metaDescription:
      'PAK-Sanierung in Herford nach TRGS 524 und 551: Teerkleber, Parkettpech, alte Dachbahnen. PAK ist kein Asbest. Jetzt Besichtigung anfragen.',
    intro:
      'PAK steckt in Herford vor allem in alten Teerklebern, im Parkettpech unter historischen Holzboeden und in geteerten Dachbahnen. Asbesta saniert diese PAK-belasteten Materialien fachgerecht nach TRGS 524 und 551. Wichtig vorab: PAK ist kein Asbest. Aus Marl kommen wir rund 100 km ueber die A2 und A30 nach Herford und in den gesamten Kreis.',
    lokalServiceKontext: [
      'Eine PAK-Sanierung in Herford beginnt bei uns mit einer kostenlosen Besichtigung und einer Materialprobe, denn polyzyklische aromatische Kohlenwasserstoffe (PAK) entstehen aus Teer und Pech und lassen sich nur im Labor sicher nachweisen. Bestaetigt der Befund PAK, planen wir den Ausbau nach TRGS 524 und 551. Wir arbeiten staubarm und mit dem passenden Schutzkonzept, weil beim trockenen Abschleifen von Teerkleber oder Parkettpech gesundheitsschaedlicher Staub frei wird. Aus Marl ueber die A2 und A30 planen wir die Anfahrt fest in den Ablauf ein, sodass Termin und Logistik fuer Ihr Herforder Objekt verlaesslich stehen.',
      'Herfords Bausubstanz bringt typische PAK-Funde mit sich. In den Fachwerk- und Gruenderzeithaeusern der Innenstadt und am Stiftberg liegt unter altem Stab- oder Tafelparkett haeufig schwarzes Parkettpech, das die Holzstaebe einst im Estrich verklebte. In Nachkriegs- und Eigenheimgebieten von Schwarzenmoor, Falkendiek, Elverdissen und Laar finden sich teerhaltige Klebebetten unter Boeden sowie alte, geteerte Dachpappe und Bitumenbahnen auf Garagen und Nebengebaeuden. An den alten Textil- und Moebelfabrikarealen entlang der Werre kommen grossflaechige geteerte Dach- und Abdichtungsschichten dazu. Jede Schicht pruefen wir einzeln, denn PAK tritt oft zusammen mit anderen Altbaustoffen auf.',
      'Die saubere Abgrenzung der Stoffe ist hier zentral: PAK aus Teer und Pech faellt unter TRGS 524 und 551 und ist kein Asbest, fuer den TRGS 519 gilt. Eine objektbezogene Anzeige bei der Bezirksregierung Detmold ist daher nur fuer asbesthaltige Materialien noetig. Treffen wir in einem Herforder Objekt neben PAK zusaetzlich auf Asbest, etwa asbesthaltigen Bitumenkleber oder Floor-Flex, uebernehmen wir auch diese TRGS-519-Anzeige bei der Bezirksregierung Detmold als zustaendiger Arbeitsschutzbehoerde, sodass alles aus einer Hand laeuft. Den PAK-belasteten Abfall fuehren wir getrennt und ordnungsgemaess der Entsorgung zu und dokumentieren den Nachweis. So wissen Sie genau, welcher Stoff in welchem Verfahren behandelt wird.',
    ],
    comboFaqs: [
      {
        frage: 'Ist PAK dasselbe wie Asbest?',
        antwort:
          'Nein. PAK sind polyzyklische aromatische Kohlenwasserstoffe aus Teer und Pech, etwa in alten Klebern, Parkettpech und geteerten Dachbahnen. Sie werden nach TRGS 524 und 551 saniert, Asbest dagegen nach TRGS 519. PAK ist kein Asbest, erfordert aber ebenfalls ein geschuetztes, fachgerechtes Vorgehen. In Herforder Bauten treten oft beide Stoffe nebeneinander auf, die wir per Analyse klar voneinander abgrenzen.',
      },
      {
        frage:
          'Brauche ich fuer eine PAK-Sanierung in Herford eine Anzeige bei der Bezirksregierung Detmold?',
        antwort:
          'Fuer reine PAK-Arbeiten nach TRGS 524 und 551 ist keine objektbezogene Anzeige noetig, denn diese gilt nur fuer Asbest nach TRGS 519. Finden wir in Ihrem Herforder Gebaeude zusaetzlich Asbest, etwa asbesthaltigen Bitumenkleber, uebernehmen wir die Anzeige bei der Bezirksregierung Detmold als zustaendiger Arbeitsschutzbehoerde fuer Sie. So bleibt alles aus einer Hand.',
      },
      {
        frage: 'Woran erkenne ich PAK-belastetes Parkettpech in meinem Herforder Altbau?',
        antwort:
          'Parkettpech ist eine schwarze, teerartige Klebemasse, mit der altes Stab- oder Tafelparkett frueher im Estrich verklebt wurde, oft mit typischem Teergeruch. Sicher nachweisbar ist PAK aber nur ueber eine Laboranalyse. Gerade in Gruenderzeit- und Fachwerkhaeusern der Herforder Innenstadt ist es haeufig. Wir nehmen bei der Besichtigung eine Probe und besprechen das Vorgehen erst nach dem Befund.',
      },
    ],
  },
  'abbrucharbeiten/paderborn': {
    leistung: 'abbrucharbeiten',
    stadt: 'paderborn',
    metaTitle: 'Abbrucharbeiten Paderborn | Rückbau TRGS 519 | Asbesta',
    metaDescription:
      'Abbruch und schadstoffgetrennter Rückbau in Paderborn nach vorheriger Schadstofferkundung. Asbesta aus Marl. Kostenlose Besichtigung.',
    intro:
      'Asbesta plant und führt kontrollierten Abbruch und Rückbau in Paderborn aus - von der Schadstofferkundung bis zum selektiven, schadstoffgetrennten Rückbau. Wir kommen aus Marl rund 110 km über die A2 und A33 nach Ostwestfalen-Lippe und arbeiten nach TRGS 519, 521 und 524. Vor jedem Eingriff klären wir, welche Materialien in Kernstadt, Elsen oder Sennelager verbaut sind und welche Stoffströme getrennt entsorgt werden müssen.',
    lokalServiceKontext: [
      'Ein kontrollierter Rückbau in Paderborn beginnt bei uns nicht mit dem Bagger, sondern mit der Schadstofferkundung. Wir erkunden das Objekt, entnehmen Materialproben und lassen sie im akkreditierten Labor analysieren, bevor irgendetwas bewegt wird. Erst wenn klar ist, ob Asbest, künstliche Mineralfasern oder PAK-belastete Kleber vorliegen, planen wir den selektiven, schadstoffgetrennten Rückbau. Die belasteten Fraktionen bauen wir zuerst und gesichert aus, die mineralischen Reststoffe danach separat. So bleiben die Stoffströme von Anfang an getrennt und die Anfahrt aus Marl für Sie planbar.',
      'Paderborns Bausubstanz ist vielschichtig: In der Kernstadt prägen Wiederaufbau- und Wachstumsbauten das Bild, dazu kommen große Nachkriegssiedlungen in Elsen, Sande und Schloß Neuhaus sowie die militärisch geprägte Bausubstanz und Gewerbeflächen rund um Sennelager. In solchen Gebäuden finden sich häufig Floor-Flex-Platten und Bitumenkleber in Böden, Asbestzement an Dach und Fassade sowie alte KMF-Dämmungen. In den ländlich geprägten Ortsteilen wie Wewer stoßen wir zusätzlich auf Scheunen und Wirtschaftsgebäude, deren Erschließung wir vor dem Rückbau gezielt einplanen, damit Logistik und Schadstofftrennung ineinandergreifen.',
      'Asbest unterliegt seit dem Totalverbot 1993 strengen Regeln. Steht bei einem Abbruch in Paderborn asbesthaltiges Material an, erstatten wir die objektbezogene Anzeige nach TRGS 519 bei der zuständigen Arbeitsschutzbehörde, der Bezirksregierung Detmold. Asbesthaltiger Abfall wird unter dem Abfallschlüssel AVV 17 06 05* entsorgt. KMF behandeln wir nach TRGS 521, PAK-belastete Teer- und Klebstoffreste nach TRGS 524 beziehungsweise 551 - beides ist kein Asbest, wird aber ebenso fachgerecht getrennt und entsorgt. Sie erhalten von uns eine verbindliche Dokumentation und einen klaren Ablauf mit sauber getrennten Stoffströmen.',
      'Weil ein Rückbau selten nur einen Schadstoff betrifft, koordinieren wir die einzelnen Gewerke so, dass jede Fraktion zur richtigen Zeit ausgebaut wird. Für Eigentümer, Verwalter und Architekten in Paderborn bedeutet das einen nachvollziehbaren Bauablauf mit lückenlosen Entsorgungsnachweisen für Bauamt, Käufer oder Versicherung.',
    ],
    comboFaqs: [
      {
        frage: 'Warum braucht ein Abbruch in Paderborn eine Schadstofferkundung vorab?',
        antwort:
          'Weil sich nur so verhindern lässt, dass beim Rückbau Asbest, KMF oder PAK unkontrolliert freigesetzt und verschiedene Stoffe vermischt werden. Wir erkunden das Objekt, entnehmen Proben und lassen sie analysieren, bevor irgendetwas bewegt wird. Erst danach planen wir den selektiven Rückbau und trennen die Stoffströme. Bei Asbest erstatten wir vorab die Anzeige nach TRGS 519 bei der Bezirksregierung Detmold.',
      },
      {
        frage: 'Was bedeutet schadstoffgetrennter Rückbau konkret?',
        antwort:
          'Statt alles gemeinsam abzubrechen, bauen wir belastete Materialien zuerst und gesichert aus - etwa Floor-Flex-Böden, Bitumenkleber, Asbestzement oder alte Mineralwolle. Erst danach folgt der mineralische Rückbau. So entstehen getrennte Stoffströme, die jeweils fachgerecht entsorgt werden: Asbest unter AVV 17 06 05*, KMF nach TRGS 521, PAK nach TRGS 524 beziehungsweise 551. Das hält die Entsorgung sauber und nachweisbar.',
      },
      {
        frage: 'Was kostet ein kontrollierter Rückbau in Paderborn?',
        antwort:
          'Eine seriöse Pauschale gibt es nicht: Der Preis hängt von Objektgröße, Schadstoffart, Zugänglichkeit und Entsorgungsaufwand ab. Die genannten Werte verstehen sich nur als grobe Orientierung. Verbindlich nennen wir den Festpreis nach einer kostenlosen Besichtigung vor Ort in der Kernstadt, in Elsen oder einem Ortsteil. Unser Sitz ist in Marl, rund 110 km über die A2 und A33.',
      },
    ],
  },
  'asbestzement-ausbauen/paderborn': {
    leistung: 'asbestzement-ausbauen',
    stadt: 'paderborn',
    metaTitle: 'Asbestzement ausbauen in Paderborn | Asbesta',
    metaDescription:
      'Asbestzement in Paderborn zerstörungsfrei ausbauen: Platten, Rohre und Kanäle nach TRGS 519, Entsorgung AVV 17 06 05*. Jetzt Besichtigung anfragen.',
    intro:
      'Asbesta baut asbesthaltigen Asbestzement in Paderborn zerstörungsfrei aus - Platten, Rohre, Kanäle und alte Blumenkästen aus der Zeit vor dem Totalverbot 1993. Als sachkundiger Fachbetrieb mit Sitz in Marl reisen wir rund 110 km über die A2 und A33 an und übernehmen die staubarme Demontage samt fachgerechter Entsorgung. Vor jeder Arbeit klären wir per Materialprobe, ob in Kernstadt, Schloß Neuhaus oder Wewer tatsächlich Asbest vorliegt.',
    lokalServiceKontext: [
      'Der Asbestzement-Ausbau in Paderborn beginnt bei uns mit einer kostenlosen Besichtigung vor Ort. Asbestzement ist fest gebundener Asbest und darf weder gebrochen, gesägt, hochdruckgereinigt noch überstrichen werden, weil dabei Fasern freigesetzt werden. Stattdessen lösen wir Platten, Rohre und Kanäle zerstörungsfrei, indem wir Befestigungen vorsichtig öffnen und die Bauteile möglichst ganz abnehmen. Bei unklarem Material entnehmen wir vorab eine Probe zur Laboranalyse. Erst nach gesicherter Diagnose und freigegebener Anzeige planen wir den staubarmen Ausbau an Ihrem Objekt.',
      'Paderborns Bausubstanz bringt viele typische Asbestzement-Produkte mit sich. In der Kernstadt und in den Siedlungen von Elsen, Sande und Schloß Neuhaus finden sich Asbestzement-Platten an Fassaden und Dächern, dazu Lüftungs- und Abwasserkanäle sowie alte Faserzement-Rohre und -Blumenkästen an Wohnhäusern, Garagen und Carports. In den landwirtschaftlich geprägten Ortsteilen wie Wewer und Sennelager tragen Scheunen, Ställe und Hofgebäude häufig großflächige Wellplatten und Rohre aus Asbestzement. Wir stimmen Anfahrt aus Marl, Materialtransport und Stellplatz für die Verpackung vorab genau ab.',
      'Für die gesetzlich vorgeschriebene Asbest-Anzeige nach TRGS 519 ist in Paderborn die Bezirksregierung Detmold die zuständige Arbeitsschutzbehörde. Diese Anzeige reichen wir vor Beginn der Arbeiten ein - das übernehmen wir für Sie. Die ausgebauten Asbestzement-Bauteile verpacken wir staubdicht, etwa in Big-Bags, und entsorgen sie als gefährlichen Abfall unter dem Abfallschlüssel AVV 17 06 05*. Sie erhalten die Entsorgungsnachweise lückenlos. So bleibt der gesamte Ablauf vom Ausbau bis zur Deponie rechtssicher dokumentiert, egal ob Ihr Objekt in der Kernstadt, in Schloß Neuhaus oder auf einem Hof in Wewer liegt.',
    ],
    comboFaqs: [
      {
        frage: 'Welche Bauteile zählen in Paderborn als Asbestzement?',
        antwort:
          'Asbestzement steckt nicht nur in Wellplatten, sondern auch in ebenen Fassaden- und Dachplatten, in Lüftungs- und Abwasserkanälen, in Faserzement-Rohren und sogar in alten Blumenkästen. Verbaut wurde das Material bis zum Totalverbot 1993. Optisch ist es kaum von neueren Faserzementprodukten zu unterscheiden, deshalb klären wir die Frage in Paderborn immer über eine Materialprobe im Labor.',
      },
      {
        frage: 'Warum darf Asbestzement nicht einfach abgesägt oder gereinigt werden?',
        antwort:
          'Weil jedes Brechen, Sägen, Bohren oder Hochdruckreinigen Asbestfasern freisetzt. Seit dem Totalverbot 1993 ist nur der zerstörungsfreie Ausbau durch einen Fachbetrieb zulässig. Wir lösen Platten, Rohre und Kanäle möglichst ganz vom Untergrund, arbeiten staubarm nach TRGS 519 und verpacken die Teile staubdicht. Die Entsorgung erfolgt als gefährlicher Abfall unter AVV 17 06 05*.',
      },
      {
        frage: 'Wer ist in Paderborn für die Anzeige des Asbestzement-Ausbaus zuständig?',
        antwort:
          'Der Ausbau asbesthaltigen Asbestzements ist nach TRGS 519 anzeigepflichtig. Zuständige Arbeitsschutzbehörde für Paderborn ist die Bezirksregierung Detmold. Die objektbezogene Anzeige reichen wir vor Arbeitsbeginn dort ein - Sie müssen sich darum nicht kümmern, das ist Teil unserer Leistung. Anschließend erhalten Sie alle Entsorgungsnachweise für Ihre Unterlagen.',
      },
    ],
  },
  'bitumenkleber-entfernen/paderborn': {
    leistung: 'bitumenkleber-entfernen',
    stadt: 'paderborn',
    metaTitle: 'Bitumenkleber entfernen Paderborn | TRGS 519 Asbesta',
    metaDescription:
      'Schwarzen asbest- oder teerhaltigen Bitumenkleber in Paderborn entfernen: saubere Abgrenzung TRGS 519 und TRGS 524/551. Kostenlose Besichtigung.',
    intro:
      'Unter alten Bodenbelägen in Paderborn steckt oft schwarzer Bitumenkleber - mal asbesthaltig, mal teerhaltig (PAK). Asbesta nimmt diese Klebereste staubarm auf und grenzt vorher sauber ab, ob TRGS 519 (Asbest) oder TRGS 524/551 (PAK) gilt. Wir kommen aus Marl rund 110 km über die A2 und A33 in die Kernstadt, nach Elsen oder Schloß Neuhaus und arbeiten erst nach gesicherter Materialanalyse.',
    lokalServiceKontext: [
      'Die Arbeit am Bitumenkleber in Paderborn beginnt bei uns mit einer kostenlosen Besichtigung und einer Materialprobe. Schwarzer Kleber unter altem Parkett, Linoleum oder PVC kann asbesthaltig oder teer- beziehungsweise pechhaltig (PAK) sein - mit bloßem Auge ist das nicht zu unterscheiden. Erst die Laboranalyse zeigt, welcher Schadstoff vorliegt. Danach wählen wir das passende Verfahren: Asbesthaltiger Kleber wird nach TRGS 519 unter Abschottung und Unterdruck staubarm aufgenommen, PAK-haltiger Kleber nach TRGS 524 mit geeignetem Atem- und Hautschutz. So vermeiden wir, dass im bewohnten Gebäude Fasern oder gesundheitsschädliche Dämpfe entstehen.',
      'Paderborns Bausubstanz macht solche Funde wahrscheinlich. In den Wohn- und Geschäftshäusern der Kernstadt sowie in den Nachkriegssiedlungen von Elsen, Sande und Schloß Neuhaus wurden über Jahrzehnte Böden verklebt, die heute beim Umbau oder bei der Sanierung freigelegt werden. Häufig stecken Floor-Flex-Platten und schwarzer Kleber zusammen im selben Bodenaufbau. In Gewerbe- und Verwaltungsbauten rund um Sennelager treffen wir zusätzlich auf großflächig verklebte Estriche. Wir nehmen den Bodenaufbau gezielt Schicht für Schicht zurück, damit jede Schadstoffschicht getrennt erfasst wird.',
      'Die saubere Abgrenzung ist hier entscheidend, denn Asbest und PAK sind verschiedene Schadstoffgruppen. Asbest unterliegt seit dem Totalverbot 1993 der TRGS 519, asbesthaltiger Abfall wird unter AVV 17 06 05* entsorgt und die anzeigepflichtige Arbeit melden wir bei der für Paderborn zuständigen Bezirksregierung Detmold. PAK aus Teer- und Pechklebern fällt dagegen unter die TRGS 524 und 551 und ist kein Asbest. Wir benennen jedes Material klar, behandeln jeden Stoff nach der passenden Vorschrift und entsorgen die Fraktionen getrennt.',
    ],
    comboFaqs: [
      {
        frage: 'Ist schwarzer Bitumenkleber in Paderborn immer Asbest?',
        antwort:
          'Nein. Schwarzer Kleber unter alten Böden kann asbesthaltig oder teer- beziehungsweise pechhaltig (PAK) sein - beides ist mit bloßem Auge nicht zu unterscheiden. Nur eine Laboranalyse zeigt, welcher Schadstoff vorliegt. Deshalb nehmen wir bei der Besichtigung in der Kernstadt, in Elsen oder Sande zuerst eine Probe und entscheiden erst danach über das Verfahren.',
      },
      {
        frage: 'Wie unterscheiden Sie Asbest und PAK beim Kleber?',
        antwort:
          'Über die Materialanalyse im Labor. Fällt sie auf Asbest aus, gilt die TRGS 519: Wir arbeiten unter Abschottung und Unterdruck, melden die Arbeit bei der Bezirksregierung Detmold und entsorgen unter AVV 17 06 05*. Ist der Kleber teer- oder pechhaltig, gilt PAK nach TRGS 524 und 551 - kein Asbest, aber ebenfalls gesundheitsschädlich. Wir behandeln und entsorgen beide Stoffe getrennt.',
      },
      {
        frage: 'Muss der Estrich unter dem Kleber mit raus?',
        antwort:
          'Das hängt davon ab, wie tief der Schadstoff eingedrungen ist. Oft lässt sich der Kleber von der Tragschicht lösen, manchmal ist eine dünne Abtragung des Untergrunds nötig. Wir prüfen das vor Ort und nehmen den Bodenaufbau Schicht für Schicht staubarm zurück, damit jede belastete Lage getrennt erfasst wird. Den verbindlichen Festpreis nennen wir nach kostenloser Besichtigung.',
      },
    ],
  },
  'floor-flex-entfernen/paderborn': {
    leistung: 'floor-flex-entfernen',
    stadt: 'paderborn',
    metaTitle: 'Floor-Flex entfernen Paderborn | Asbesta TRGS 519',
    metaDescription:
      'Floor-Flex-Platten in Paderborn staubarm entfernen: Vinyl-Asbest-Fliesen samt Kleber nach TRGS 519, anzeigepflichtig. Jetzt Besichtigung anfragen.',
    intro:
      'Floor-Flex-Platten - also Vinyl-Asbest-Fliesen - liegen in vielen Paderborner Böden aus der Zeit vor 1993, oft mit asbesthaltigem schwarzem Kleber darunter. Asbesta nimmt diese Platten samt Kleber staubarm und nach TRGS 519 auf; die Arbeit ist anzeigepflichtig. Wir kommen aus Marl rund 110 km über die A2 und A33 in die Kernstadt, nach Schloß Neuhaus oder Elsen und arbeiten erst nach gesicherter Materialprobe.',
    lokalServiceKontext: [
      'Die Floor-Flex-Entfernung in Paderborn beginnt bei uns mit einer kostenlosen Besichtigung und einer Materialprobe, denn die quadratischen Vinyl-Asbest-Fliesen sehen harmlosen Designbelägen oft täuschend ähnlich. Bestätigt das Labor Asbest, planen wir die anzeigepflichtige Aufnahme nach TRGS 519. Die Platten werden möglichst ganz und unzerbrochen vom Untergrund gelöst, der darunterliegende schwarze Kleber wird ebenfalls staubarm erfasst. Wir arbeiten je nach Umfang unter Abschottung und Unterdruck, damit keine Fasern in angrenzende Räume oder in die Lüftung gelangen.',
      'Paderborns Bausubstanz macht Floor-Flex zu einem häufigen Fund. In Wohn- und Geschäftshäusern der Kernstadt, in Schulen und Verwaltungsbauten sowie in den Nachkriegssiedlungen von Elsen, Sande und Schloß Neuhaus wurden diese Platten über Jahrzehnte verlegt. Oft liegen sie unter neueren Belägen verborgen und tauchen erst beim Umbau auf. In Gewerbe- und Zweckbauten rund um Sennelager finden wir großflächig verlegte Floor-Flex-Böden, deren Aufnahme wir mit dem Bauablauf abstimmen, damit nachfolgende Gewerke nicht warten müssen.',
      'Die Aufnahme von Floor-Flex-Platten ist nach TRGS 519 anzeigepflichtig. Die objektbezogene Anzeige erstatten wir bei der für Paderborn zuständigen Arbeitsschutzbehörde, der Bezirksregierung Detmold, bevor die Arbeit beginnt. Platten und Kleber verpacken wir staubdicht und entsorgen sie als gefährlichen Abfall unter dem Abfallschlüssel AVV 17 06 05*. Treffen wir unter den Fliesen statt asbesthaltigem auf teer- oder pechhaltigen Kleber, ordnen wir diesen klar der PAK-Gruppe nach TRGS 524 und 551 zu - PAK ist kein Asbest, wird aber ebenso fachgerecht und getrennt entsorgt.',
    ],
    comboFaqs: [
      {
        frage: 'Was sind Floor-Flex-Platten und warum sind sie gefährlich?',
        antwort:
          'Floor-Flex sind Vinyl-Asbest-Fliesen, meist quadratische Bodenplatten, die bis zum Totalverbot 1993 verlegt wurden. Sie enthalten fest gebundenen Asbest und sind unauffällig, solange sie unbeschädigt sind. Beim Herausreißen, Brechen oder Schleifen setzen sie jedoch Fasern frei - ebenso der oft asbesthaltige schwarze Kleber darunter. Deshalb gehört die Aufnahme in die Hand eines Fachbetriebs.',
      },
      {
        frage: 'Ist die Floor-Flex-Entfernung in Paderborn anzeigepflichtig?',
        antwort:
          'Ja. Die Aufnahme asbesthaltiger Floor-Flex-Platten ist nach TRGS 519 anzeigepflichtig. Die objektbezogene Anzeige reichen wir vor Arbeitsbeginn bei der für Paderborn zuständigen Bezirksregierung Detmold ein - das übernehmen wir für Sie. Anschließend nehmen wir Platten und Kleber staubarm auf und entsorgen sie unter dem Abfallschlüssel AVV 17 06 05*.',
      },
      {
        frage: 'Was kostet die Floor-Flex-Entfernung in Paderborn?',
        antwort:
          'Der Preis hängt von Fläche, Zustand der Platten, dem Kleber darunter und der Zugänglichkeit ab. Die genannten Werte sind nur eine grobe Orientierung, da jeder Bodenaufbau anders ist. Verbindlich nennen wir den Festpreis nach einer kostenlosen Besichtigung vor Ort - ob in der Kernstadt, in Elsen oder in einem Zweckbau rund um Sennelager.',
      },
    ],
  },
  'pak-sanierung/paderborn': {
    leistung: 'pak-sanierung',
    stadt: 'paderborn',
    metaTitle: 'PAK-Sanierung Paderborn nach TRGS 524/551 | Asbesta',
    metaDescription:
      'PAK-Sanierung in Paderborn nach TRGS 524/551: Teerkleber, Parkettpech und alte Dachbahnen fachgerecht entfernen. PAK ist kein Asbest. Jetzt anfragen.',
    intro:
      'PAK steckt in Paderborn in alten Teerklebern, im Parkettpech und in bituminösen Dachbahnen aus den Jahrzehnten vor dem Verzicht auf Teerprodukte. Asbesta saniert PAK-belastete Materialien nach TRGS 524 und 551 - PAK ist ausdrücklich kein Asbest. Wir kommen aus Marl rund 110 km über die A2 und A33 in die Kernstadt, nach Schloß Neuhaus oder Elsen und klären vorher per Analyse, welcher Schadstoff vorliegt.',
    lokalServiceKontext: [
      'Eine PAK-Sanierung in Paderborn beginnt bei uns mit einer kostenlosen Besichtigung und einer Materialprobe. PAK (polyzyklische aromatische Kohlenwasserstoffe) entstehen aus Teer und Pech und finden sich vor allem in schwarzen Klebern unter Parkett und Böden, im sogenannten Parkettpech sowie in alten teerhaltigen Dachbahnen und Schweißbahnen. Bestätigt das Labor PAK, planen wir den Ausbau nach TRGS 524 und 551 mit geeignetem Atem- und Hautschutz, Absaugung und abgegrenztem Arbeitsbereich, damit keine gesundheitsschädlichen Dämpfe und Stäube in bewohnte oder benachbarte Bereiche gelangen.',
      'Paderborns Bausubstanz macht PAK-Funde wahrscheinlich. In den Wohn- und Geschäftshäusern der Kernstadt sowie in den Nachkriegssiedlungen von Elsen, Sande und Schloß Neuhaus wurde Parkett über Jahrzehnte mit Teerkleber verlegt; bei Umbauten kommt das schwarze Pech unter dem Holz wieder zum Vorschein. Auf Flachdächern von Wohn-, Gewerbe- und Verwaltungsbauten, auch rund um Sennelager, liegen oft alte teerhaltige Dachbahnen. In den Ortsteilen wie Wewer treffen wir zusätzlich auf bituminöse Abdichtungen an Hof- und Wirtschaftsgebäuden. Wir tragen die belasteten Schichten gezielt und getrennt ab.',
      'Die saubere Abgrenzung steht im Mittelpunkt: PAK ist kein Asbest. Asbest unterliegt seit dem Totalverbot 1993 der TRGS 519 und wird unter AVV 17 06 05* entsorgt; PAK aus Teer und Pech fällt dagegen unter die TRGS 524 und 551. Wir behaupten für PAK-Arbeiten niemals ein Asbest-Verfahren oder eine Asbest-Anzeige. Treffen wir bei der Sanierung zusätzlich auf Asbest - etwa asbesthaltigen Kleber unter Floor-Flex -, klären wir das per Analyse und melden die anzeigepflichtige Asbestarbeit bei der für Paderborn zuständigen Bezirksregierung Detmold. Jeder Stoff wird nach seiner eigenen Vorschrift behandelt und getrennt entsorgt.',
    ],
    comboFaqs: [
      {
        frage: 'Ist PAK in Paderborn dasselbe wie Asbest?',
        antwort:
          'Nein. PAK steht für polyzyklische aromatische Kohlenwasserstoffe und stammt aus Teer und Pech - etwa in schwarzen Klebern, Parkettpech und alten Dachbahnen. PAK wird nach TRGS 524 und 551 saniert, Asbest dagegen nach TRGS 519. Beide sind gesundheitsschädlich, aber unterschiedliche Stoffe. In vielen Paderborner Altbauten finden wir beides und grenzen es per Materialanalyse klar voneinander ab.',
      },
      {
        frage: 'Wo steckt PAK in Paderborner Gebäuden typischerweise?',
        antwort:
          'Vor allem in Teerklebern unter Parkett und Böden, im Parkettpech selbst sowie in alten teerhaltigen Dachbahnen und Abdichtungen. In den Nachkriegssiedlungen von Elsen und Schloß Neuhaus und in Wohnhäusern der Kernstadt taucht das schwarze Pech oft erst beim Umbau wieder auf. Beim Ausbau setzt es Stäube und Dämpfe frei, weshalb wir nach TRGS 524 unter Schutz und Abgrenzung arbeiten.',
      },
      {
        frage: 'Brauche ich für eine PAK-Sanierung in Paderborn eine Asbest-Anzeige?',
        antwort:
          'Für reine PAK-Arbeiten nicht, denn PAK ist kein Asbest und fällt unter die TRGS 524 und 551, nicht unter die TRGS 519. Wir behaupten hier kein Asbest-Verfahren. Erst wenn bei der Sanierung zusätzlich Asbest auftaucht, wird die anzeigepflichtige Asbestarbeit objektbezogen bei der Bezirksregierung Detmold gemeldet. Das klären wir vorab über die Materialanalyse, damit jeder Stoff korrekt behandelt wird.',
      },
    ],
  },
  'abbrucharbeiten/minden': {
    leistung: 'abbrucharbeiten',
    stadt: 'minden',
    metaTitle: 'Abbrucharbeiten Minden | Rückbau TRGS 519 | Asbesta',
    metaDescription:
      'Abbruch und Rückbau in Minden mit vorheriger Schadstofferkundung und schadstoffgetrenntem Rückbau. Aus Marl in OWL. Kostenlose Besichtigung.',
    intro:
      'Asbesta plant und führt kontrollierten Abbruch und Rückbau in Minden aus – von der Schadstofferkundung bis zum selektiven, schadstoffgetrennten Rückbau. Wir kommen aus Marl rund 120 km über die A2 und A30 an die Weser und arbeiten nach TRGS 519, 521 und 524. Vor jedem Eingriff klären wir, welche Materialien verbaut sind und welche Stoffströme getrennt entsorgt werden müssen.',
    lokalServiceKontext: [
      'Ein kontrollierter Rückbau in Minden beginnt bei uns nicht mit dem Bagger, sondern mit der Bestandsaufnahme. Wir erkunden das Objekt, entnehmen Materialproben und lassen sie im akkreditierten Labor analysieren, bevor irgendetwas bewegt wird. Erst wenn klar ist, ob Asbest, künstliche Mineralfasern oder PAK-belastete Kleber vorliegen, planen wir den selektiven, schadstoffgetrennten Rückbau. Die belasteten Fraktionen bauen wir zuerst und gesichert aus, die mineralischen Reststoffe danach separat. So bleiben die Stoffströme von Beginn an getrennt und die Anfahrt aus Marl für Sie planbar.',
      'Mindens Bausubstanz ist als alte Hanse- und Domstadt vielschichtig: In der Innenstadt rund um Dom und Rathaus steht historische, mehrfach modernisierte Substanz, während die Wohnsiedlungen der 1950er- bis 1980er-Jahre in Stadtteilen wie Dützen, Hahlen, Bölhorst und Rodenbeck typische Materialien aus der Zeit vor dem Asbest-Totalverbot 1993 enthalten. Häufig finden sich Floor-Flex-Platten und schwarzer Bitumenkleber unter alten Böden, Welleternit und Asbestzement an Dächern und Fassaden sowie KMF-Dämmungen. In den Gewerbe- und Hafenflächen am Wasserstraßenkreuz und entlang der Bahn kommen Hallen und Werkstätten mit eigener Logistik hinzu, deren Erschließung wir vor dem Rückbau gezielt einplanen.',
      'Asbest unterliegt seit dem Totalverbot 1993 strengen Regeln. Steht bei einem Abbruch in Minden asbesthaltiges Material an, erstatten wir die objektbezogene Anzeige nach TRGS 519 bei der zuständigen Arbeitsschutzbehörde, der Bezirksregierung Detmold. KMF behandeln wir nach TRGS 521, PAK-belastete Teer- und Klebstoffreste nach TRGS 524 beziehungsweise 551 – beides ist kein Asbest, wird aber ebenso fachgerecht getrennt und unter dem jeweils richtigen Abfallschlüssel entsorgt. Asbesthaltiger Abfall geht als gefährlicher Abfall unter AVV 17 06 05* an zugelassene Annahmestellen. Sie erhalten von uns eine verbindliche Dokumentation und einen klaren Ablauf.',
      'Häufige Stadtteile, in denen wir abbrechen und zurückbauen, sind Innenstadt, Dützen, Häverstädt, Hahlen, Bölhorst und Rodenbeck.',
    ],
    comboFaqs: [
      {
        frage: 'Wie läuft ein schadstoffgetrennter Rückbau in Minden ab?',
        antwort:
          'Zuerst erkunden wir die Schadstoffe, entnehmen Proben und lassen sie analysieren. In Mindener Bauten vor 1993 finden wir oft Floor-Flex-Böden, Bitumenkleber, Welleternit oder KMF-Dämmungen. Belastete Materialien bauen wir gesichert und getrennt aus, danach folgt der mineralische Rückbau. Bei Asbest erstatten wir vorab die Anzeige nach TRGS 519 bei der Bezirksregierung Detmold, sodass die Stoffströme von Anfang an sauber getrennt bleiben.',
      },
      {
        frage: 'Warum erst Schadstofferkundung und dann Abbruch?',
        antwort:
          'Wer ohne Erkundung abreißt, vermischt belastete und unbelastete Fraktionen und verteuert die Entsorgung erheblich – im schlimmsten Fall werden Fasern unkontrolliert freigesetzt. Deshalb erkunden wir in Minden zuerst und legen die Stoffströme fest. Erst dann beginnt der selektive Rückbau. So bleibt der Abbruch rechtssicher, sauber dokumentiert und für Sie kalkulierbar.',
      },
      {
        frage: 'Was kostet ein kontrollierter Rückbau in Minden?',
        antwort:
          'Eine seriöse Pauschale gibt es nicht: Der Preis hängt von Objektgröße, Schadstoffart, Lage und Entsorgungsaufwand ab. Eine reine Floor-Flex- oder Bitumensanierung wird anders kalkuliert als ein Komplettrückbau mit mehreren Fraktionen. Verbindlich nennen wir den Festpreis erst nach einer kostenlosen Besichtigung vor Ort, ohne versteckte Nachträge.',
      },
    ],
  },
  'asbestzement-ausbauen/minden': {
    leistung: 'asbestzement-ausbauen',
    stadt: 'minden',
    metaTitle: 'Asbestzement ausbauen in Minden | Asbesta',
    metaDescription:
      'Asbestzement in Minden zerstörungsfrei ausbauen: Platten, Rohre, Kanäle und Blumenkästen nach TRGS 519, Entsorgung AVV 17 06 05*. Jetzt anfragen.',
    intro:
      'Asbestzement steckt in Minden in vielen Bauteilen – von Platten und Rohren über Lüftungskanäle bis zu Blumenkästen. Asbesta baut diese fest gebundenen Asbestprodukte zerstörungsfrei nach TRGS 519 aus und entsorgt sie unter dem Abfallschlüssel AVV 17 06 05*. Wir kommen aus Marl rund 120 km über die A2 und A30 an die Weser und klären vor jedem Eingriff per Materialprobe, ob Asbest vorliegt.',
    lokalServiceKontext: [
      'Der Ausbau von Asbestzement in Minden beginnt bei uns mit einer kostenlosen Besichtigung und, bei Verdacht, einer Materialprobe. Asbestzement ist fest gebunden und solange unauffällig, wie das Bauteil intakt ist – beim Sägen, Bohren, Brechen, Hochdruckreinigen oder Abriss werden jedoch Fasern frei. Deshalb lösen wir Platten, Rohre, Kanäle und Blumenkästen möglichst zerstörungsfrei, arbeiten staubarm und verpacken alles staubdicht. Erst nach gesichertem Laborbefund und – bei anzeigepflichtigen Arbeiten – nach erfolgter Anzeige beginnt der eigentliche Ausbau.',
      'In Minden finden wir Asbestzement an sehr unterschiedlichen Stellen: als Wellplatten und Fassadenplatten an Wohnhäusern, Garagen und Nebengebäuden in Stadtteilen wie Dützen, Häverstädt, Hahlen und Bölhorst, als Abwasser- und Regenrohre, Lüftungskanäle oder als Blumenkästen und Fensterbänke an Häusern in der Innenstadt und in Rodenbeck. In den Gewerbe- und Hafenflächen am Wasserstraßenkreuz sind daneben großflächige Asbestzement-Bauteile aus der Zeit vor 1993 verbreitet. Wir nehmen jedes Bauteil einzeln auf und planen den Ausbau passend zur Lage.',
      'Für anzeigepflichtige Arbeiten an Asbestzement ist in Minden die Bezirksregierung Detmold die zuständige Arbeitsschutzbehörde. Die objektbezogene Anzeige nach TRGS 519 reichen wir dort fristgerecht ein – das übernehmen wir für Sie. Den asbesthaltigen Abfall entsorgen wir staubdicht verpackt unter dem Abfallschlüssel AVV 17 06 05* über zugelassene Annahmestellen, mit lückenlosem Entsorgungsnachweis. So ist Ihr Asbestzement-Bauteil in Minden sauber und rechtssicher aus dem Gebäude und vom Grundstück verschwunden.',
    ],
    comboFaqs: [
      {
        frage: 'Welche Asbestzement-Bauteile baut Asbesta in Minden aus?',
        antwort:
          'Wir bauen in Minden alle gängigen Asbestzement-Bauteile aus: Wellplatten und Fassadenplatten, Abwasser- und Regenrohre, Lüftungs- und Kabelkanäle sowie Blumenkästen und Fensterbänke. Alles wird fest gebunden, staubarm und zerstörungsfrei nach TRGS 519 demontiert und unter AVV 17 06 05* entsorgt. Bei der kostenlosen Besichtigung sehen wir uns die Bauteile an und planen den Ausbau konkret.',
      },
      {
        frage: 'Ist Asbestzement gefährlich, solange er intakt ist?',
        antwort:
          'Solange Asbestzement unbeschädigt ist, sind die Fasern fest gebunden und das Risiko gering. Gefährlich wird es beim Sägen, Bohren, Brechen, Hochdruckreinigen oder Abriss, weil dabei Fasern frei werden. Deshalb dürfen solche Bauteile nicht eigenmächtig bearbeitet werden. Wir bauen sie in Minden kontrolliert und zerstörungsfrei aus, statt sie zu zerstören.',
      },
      {
        frage: 'Wer meldet die Asbestzement-Arbeiten in Minden bei der Behörde an?',
        antwort:
          'Das übernehmen wir. Anzeigepflichtige Arbeiten an Asbestzement melden wir vor Beginn objektbezogen nach TRGS 519 bei der Bezirksregierung Detmold an, der für Minden zuständigen Arbeitsschutzbehörde. Sie müssen sich um die behördlichen Formalitäten nicht selbst kümmern und erhalten am Ende eine vollständige Dokumentation samt Entsorgungsnachweis.',
      },
    ],
  },
  'bitumenkleber-entfernen/minden': {
    leistung: 'bitumenkleber-entfernen',
    stadt: 'minden',
    metaTitle: 'Bitumenkleber entfernen Minden | TRGS 519 Asbesta',
    metaDescription:
      'Schwarzen Bitumenkleber in Minden entfernen: saubere Abgrenzung Asbest (TRGS 519) und PAK (TRGS 524/551), staubarm. Kostenlose Besichtigung.',
    intro:
      'Unter alten Bodenbelägen in Minden steckt häufig schwarzer Bitumenkleber, der asbest- oder teerhaltig sein kann. Asbesta entfernt diesen Kleber staubarm und grenzt dabei sauber ab, ob es sich um Asbest nach TRGS 519 oder um PAK nach TRGS 524 und 551 handelt. Wir kommen aus Marl rund 120 km über die A2 und A30 an die Weser und klären vor jedem Eingriff per Materialprobe, womit wir es zu tun haben.',
    lokalServiceKontext: [
      'Die Entfernung von schwarzem Bitumenkleber in Minden beginnt bei uns mit der kostenlosen Besichtigung und einer Materialprobe, denn der schwarze Kleber unter Parkett, Fliesen oder PVC kann zwei sehr unterschiedliche Schadstoffe enthalten. Erst der Laborbefund zeigt, ob Asbest oder PAK vorliegt – davon hängt das gesamte Verfahren ab. Bei Asbest arbeiten wir anzeigepflichtig nach TRGS 519 mit Abschottung und staubarmer Aufnahme, bei PAK nach TRGS 524 und 551. So vermeiden wir, dass im bewohnten Gebäude unkontrolliert Fasern oder Schadstoffe freigesetzt werden.',
      'Mindens Wohnbestand in der Innenstadt sowie in Stadtteilen wie Dützen, Häverstädt, Hahlen, Bölhorst und Rodenbeck stammt vielfach aus der Zeit vor 1993 und wurde mehrfach renoviert. Unter heute sichtbaren Belägen liegen oft ältere Aufbauten mit schwarzem Kleber. Gerade bei der Sanierung von Estrichen und Bodenaufbauten in diesen gründerzeitlichen und Nachkriegshäusern stoßen Eigentümer auf solche Schichten. Wir nehmen den Bodenaufbau kontrolliert auf, halten die Belastung gering und trennen die Stoffströme von Beginn an.',
      'Die saubere Abgrenzung ist hier entscheidend: Asbesthaltiger Bitumenkleber unterliegt der TRGS 519 und muss bei anzeigepflichtigen Arbeiten objektbezogen bei der Bezirksregierung Detmold angezeigt werden, der für Minden zuständigen Arbeitsschutzbehörde. Teerhaltiger Kleber mit PAK fällt dagegen unter die TRGS 524 und 551 – PAK ist kein Asbest. Wir benennen jedes Material klar, wählen das passende Verfahren und entsorgen den Abfall fachgerecht und getrennt, mit lückenlosem Nachweis; asbesthaltiger Abfall geht unter AVV 17 06 05*.',
    ],
    comboFaqs: [
      {
        frage: 'Ist schwarzer Bitumenkleber unter dem Boden immer Asbest?',
        antwort:
          'Nein. Schwarzer Bitumenkleber kann asbesthaltig sein (TRGS 519) oder teerhaltig mit PAK (TRGS 524/551) – beides sieht ähnlich aus, erfordert aber unterschiedliche Verfahren. Sicherheit gibt nur eine Materialprobe im Labor. Deshalb entnehmen wir in Minden vor Arbeitsbeginn eine Probe und entscheiden erst nach dem Befund, wie der Kleber sicher entfernt wird.',
      },
      {
        frage: 'Wie wird der Kleber in Minden staubarm entfernt?',
        antwort:
          'Je nach Befund arbeiten wir mit Abschottung, Absaugung und staubarmen Aufnahmeverfahren. Bei Asbest richten wir nach TRGS 519 einen kontrollierten Bereich ein und melden die Arbeiten bei der Bezirksregierung Detmold an. So bleibt die Faser- bzw. Schadstofffreisetzung im bewohnten Haus in Minden minimal und der Bodenaufbau kann anschließend sauber neu aufgebaut werden.',
      },
      {
        frage: 'Was kostet die Entfernung von Bitumenkleber in Minden?',
        antwort:
          'Der Preis hängt von Fläche, Schadstoffart und Bodenaufbau ab und lässt sich nicht pauschal nennen. Eine asbesthaltige Fläche mit Anzeigepflicht wird anders kalkuliert als eine reine PAK-Sanierung. Nach der kostenlosen Besichtigung in Minden erhalten Sie einen verbindlichen Festpreis ohne versteckte Nachträge.',
      },
    ],
  },
  'floor-flex-entfernen/minden': {
    leistung: 'floor-flex-entfernen',
    stadt: 'minden',
    metaTitle: 'Floor-Flex entfernen Minden | Asbesta TRGS 519',
    metaDescription:
      'Floor-Flex-Platten in Minden staubarm entfernen: Vinyl-Asbest-Fliesen samt Kleber aufnehmen, anzeigepflichtig nach TRGS 519. Jetzt anfragen.',
    intro:
      'Floor-Flex-Platten – auch Vinyl-Asbest-Fliesen genannt – liegen in Minden in vielen Altbauten unter neueren Belägen. Asbesta nimmt diese Platten samt asbesthaltigem Kleber staubarm und anzeigepflichtig nach TRGS 519 auf. Wir kommen aus Marl rund 120 km über die A2 und A30 an die Weser und klären vor jedem Eingriff per Materialprobe, ob tatsächlich Asbest vorliegt.',
    lokalServiceKontext: [
      'Die Floor-Flex-Entfernung in Minden beginnt bei uns mit der kostenlosen Besichtigung und einer Materialprobe, da sich die Platten optisch kaum von asbestfreien Belägen unterscheiden. Bestätigt das Labor Asbest, planen wir die anzeigepflichtige Aufnahme nach TRGS 519: Wir lösen die Platten möglichst ganz, vermeiden Brechen und Schleifen und arbeiten staubarm mit Abschottung und Absaugung. Häufig steckt unter den Platten zusätzlich schwarzer Bitumenkleber, den wir im selben Zug fachgerecht mit aufnehmen, damit der Boden vollständig saniert ist.',
      'Mindens Altbaubestand in der Innenstadt und in Stadtteilen wie Dützen, Häverstädt, Hahlen, Bölhorst und Rodenbeck stammt vielfach aus der Zeit vor 1993. In Wohnungen, Fluren, Kellern und Treppenhäusern dieser gründerzeitlichen und Nachkriegsgebäude wurden Floor-Flex-Platten verbreitet verlegt und später überdeckt. Bei Renovierungen kommen sie oft erst zum Vorschein, wenn der obere Belag entfernt wird. Wir nehmen den Bodenaufbau kontrolliert auf und halten Bewohner und Nachbarschaft von der Faserbelastung fern.',
      'Arbeiten an Floor-Flex-Platten sind anzeigepflichtig und müssen objektbezogen nach TRGS 519 bei der zuständigen Arbeitsschutzbehörde angezeigt werden – das ist in Minden die Bezirksregierung Detmold. Diese Anzeige übernehmen wir für Sie und halten die gesetzlichen Fristen ein. Den asbesthaltigen Abfall verpacken wir staubdicht und entsorgen ihn unter dem Abfallschlüssel AVV 17 06 05* mit lückenlosem Nachweis. Zum Abschluss kann eine Freimessung nach VDI 3492 erfolgen, bevor der Bereich wieder genutzt wird.',
    ],
    comboFaqs: [
      {
        frage: 'Sind Floor-Flex-Arbeiten in Minden anzeigepflichtig?',
        antwort:
          'Ja. Floor-Flex-Platten enthalten in der Regel Asbest, daher sind die Arbeiten nach TRGS 519 anzeigepflichtig und müssen objektbezogen bei der Bezirksregierung Detmold angezeigt werden. Diese Anzeige übernehmen wir für Sie und nehmen die Platten staubarm auf. So bleibt die Sanierung in Ihrem Mindener Objekt rechtssicher und für alle Beteiligten nachvollziehbar.',
      },
      {
        frage: 'Woran erkenne ich Floor-Flex-Platten in meinem Mindener Altbau?',
        antwort:
          'Floor-Flex-Platten sind meist quadratische, oft 25 mal 25 cm große, etwas spröde Fliesen, die unter neueren Belägen liegen können. Optisch lassen sie sich kaum sicher zuordnen, deshalb gibt nur eine Laboranalyse Gewissheit. Entfernen Sie die Platten nicht selbst – wir entnehmen bei der Besichtigung in Minden eine Probe und entscheiden erst nach dem Befund über das Verfahren.',
      },
      {
        frage: 'Wird der Kleber unter den Floor-Flex-Platten mit entfernt?',
        antwort:
          'Ja. Unter Floor-Flex-Platten liegt häufig zusätzlich schwarzer Bitumenkleber, der ebenfalls Asbest enthalten kann. Wir nehmen Platten und Kleber im selben Arbeitsgang staubarm auf, damit der Boden vollständig und sauber saniert ist. So bleibt nach den Arbeiten kein belasteter Rest im Aufbau zurück, und Sie können den Boden neu aufbauen.',
      },
    ],
  },
  'pak-sanierung/minden': {
    leistung: 'pak-sanierung',
    stadt: 'minden',
    metaTitle: 'PAK-Sanierung Minden nach TRGS 524/551 | Asbesta',
    metaDescription:
      'PAK-Sanierung in Minden nach TRGS 524/551: Teerkleber, Parkettpech und alte Dachbahnen entfernen. PAK ist kein Asbest. Kostenlose Besichtigung.',
    intro:
      'PAK steckt in Minden in alten Teerklebern, Parkettpech und alten Dachbahnen aus der Zeit, als Teerprodukte üblich waren. Asbesta saniert diese PAK-belasteten Materialien fachgerecht nach TRGS 524 und 551 – PAK ist ausdrücklich kein Asbest. Wir kommen aus Marl rund 120 km über die A2 und A30 an die Weser und klären vor jedem Eingriff per Materialprobe, welcher Schadstoff vorliegt.',
    lokalServiceKontext: [
      'Die PAK-Sanierung in Minden beginnt bei uns mit der kostenlosen Besichtigung und einer Materialprobe. PAK (polyzyklische aromatische Kohlenwasserstoffe) finden sich vor allem in dunklen Teer- und Parkettklebern, im Parkettpech alter Holzböden und in alten teerhaltigen Dachbahnen. Diese Materialien können stark riechen und sind gesundheitlich nicht harmlos. Bestätigt das Labor PAK, sanieren wir nach TRGS 524 und 551 mit geeignetem Atemschutz, Absaugung und staubarmen Verfahren und entsorgen das belastete Material fachgerecht und getrennt.',
      'In Mindens Wohnhäusern in der Innenstadt und in Rodenbeck liegt unter altem Parkett oft Parkettpech, in Bodenaufbauten finden sich teerhaltige Kleber. Auf Garagen, Schuppen und Nebengebäuden in Dützen, Häverstädt, Hahlen und Bölhorst treffen wir auf alte teerhaltige Dachbahnen, ebenso in den Gewerbe- und Hafenflächen am Wasserstraßenkreuz. Da Teer- und Bitumenprodukte sich ähneln, ist die Probenahme entscheidend: Sie zeigt, ob PAK, Bitumen oder im schwarzen Kleber auch Asbest enthalten ist. Wir nehmen jedes Bauteil einzeln auf und planen die Sanierung passend zur Lage.',
      'Wichtig ist die klare Abgrenzung der Schadstoffgruppen: PAK fällt unter die TRGS 524 und 551, Asbest unter die TRGS 519, KMF unter die TRGS 521. PAK ist kein Asbest und nicht in jedem Fall asbestrechtlich anzeigepflichtig – tritt im selben Bodenaufbau jedoch zusätzlich Asbest auf, melden wir die asbestbezogenen Arbeiten objektbezogen bei der Bezirksregierung Detmold an, der für Minden zuständigen Arbeitsschutzbehörde. Wir benennen jedes Material klar und entsorgen die Stoffe fachgerecht und getrennt.',
    ],
    comboFaqs: [
      {
        frage: 'Ist PAK dasselbe wie Asbest?',
        antwort:
          'Nein. PAK (polyzyklische aromatische Kohlenwasserstoffe) stecken in Teerklebern, Parkettpech und alten Dachbahnen und werden nach TRGS 524 und 551 behandelt. Asbest ist ein anderer Schadstoff und fällt unter TRGS 519. In Mindener Altbauten treten beide manchmal zusammen auf – deshalb klären wir per Materialprobe, was genau vorliegt, und behandeln jeden Stoff getrennt.',
      },
      {
        frage: 'Woran erkenne ich PAK in meinem Mindener Haus?',
        antwort:
          'Verdächtig sind dunkle, teerartige Kleber unter altem Parkett, schwarzes Parkettpech sowie alte teerhaltige Dachbahnen, die oft typisch riechen. Sicher erkennbar ist PAK aber nur im Labor. Wir entnehmen bei der kostenlosen Besichtigung in Minden eine Probe und entscheiden erst nach dem Befund, wie das Material nach TRGS 524/551 saniert wird.',
      },
      {
        frage: 'Muss eine PAK-Sanierung in Minden bei der Behörde angezeigt werden?',
        antwort:
          'PAK ist kein Asbest und fällt unter die TRGS 524 und 551, nicht unter die asbestrechtliche Anzeigepflicht der TRGS 519. Liegt im selben Bodenaufbau jedoch zusätzlich Asbest vor, melden wir die asbestbezogenen Arbeiten objektbezogen bei der Bezirksregierung Detmold an. Welche Schritte für Ihr Objekt nötig sind, klären wir nach der Materialprobe transparent mit Ihnen.',
      },
    ],
  },
};

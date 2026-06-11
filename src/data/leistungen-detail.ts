/** Einzigartiger Detail-Content je Leistung (SSOT). Generiert aus dem Content-Workflow. */

export interface LeistungAblaufSchritt {
  readonly titel: string;
  readonly text: string;
}

export interface LeistungFaq {
  readonly frage: string;
  readonly antwort: string;
}

export interface LeistungDetail {
  readonly metaTitle: string;
  readonly metaDescription: string;
  readonly heroIntro: string;
  readonly einleitung: readonly string[];
  readonly leistungsumfang: readonly string[];
  readonly ablauf: readonly LeistungAblaufSchritt[];
  readonly faqs: readonly LeistungFaq[];
}

export const leistungenDetail: Record<string, LeistungDetail> = {
  "asbestsanierung": {
    "metaTitle": "Asbestsanierung nach TRGS 519 in NRW | Asbesta",
    "metaDescription": "Zertifizierte Asbestsanierung nach TRGS 519 in ganz NRW. Fachgerechte Demontage, Unterdruckhaltung, Freimessung und Entsorgungsnachweis. Jetzt kostenfrei besichtigen lassen.",
    "heroIntro": "Asbest ist krebserregend und darf nur von Fachbetrieben mit Sachkunde nach TRGS 519 entfernt werden. Asbesta saniert asbesthaltige Materialien in ganz NRW sicher, behördlich angezeigt und mit lückenlosem Entsorgungsnachweis.",
    "einleitung": [
      "Asbest wurde bis zum bundesweiten Verbot 1993 in unzähligen Baumaterialien verarbeitet - von Dachplatten und Fassadenverkleidungen über Bodenkleber und Flex-Platten bis zu Spachtelmassen, Rohrisolierungen und Brandschutzfeuerungen. Werden diese Materialien beschädigt, gebohrt, gebrochen oder abgerissen, setzen sie lungengängige Fasern frei, die nachweislich Asbestose, Lungen- und Rippenfellkrebs verursachen können. Aus diesem Grund regelt die TRGS 519 (Technische Regeln für Gefahrstoffe) Abbruch-, Sanierungs- und Instandhaltungsarbeiten an asbesthaltigen Materialien verbindlich.",
      "Die TRGS 519 unterscheidet zwischen Arbeiten geringen Umfangs (ASI-Arbeiten) und umfangreichen Sanierungen, für die ein behördlich anerkannter Sachkundenachweis und eine objektbezogene Anzeige bei der zuständigen Bezirksregierung erforderlich sind. Asbesta ist als Fachbetrieb nach Gefahrstoffverordnung (GefStoffV) zugelassen, beschäftigt sachkundige Mitarbeiter nach TRGS 519 Anlage 3 und arbeitet mit arbeitsmedizinischer Vorsorge sowie voller Betriebshaftpflicht.",
      "Wir begleiten Sie vom ersten Verdacht bis zur Freigabe: kostenfreie Besichtigung, transparenter Festpreis, fachgerechte Demontage unter Schutzmaßnahmen, gesetzeskonforme Entsorgung als gefährlicher Abfall sowie eine Freimessung nach VDI 3492, die die Wiedernutzung der Räume belegt. So erhalten private Bauherren, Hausverwaltungen, Industrie und öffentliche Auftraggeber eine rechtssichere und dokumentierte Sanierung."
    ],
    "leistungsumfang": [
      "Probenahme und Materialanalyse zur Bestätigung des Asbestverdachts (z.B. an Putzen, Klebern, Platten oder Spachtelmassen)",
      "Objektbezogene Anzeige der Sanierung bei der zuständigen Bezirksregierung gemäß TRGS 519",
      "Einrichtung von Schwarz-Weiß-Schleuse und Unterdruckhaltung mit Personenschleuse bei Faserfreisetzung",
      "Fachgerechte, möglichst emissionsarme Demontage asbesthaltiger Materialien durch sachkundiges Personal",
      "Staubdichte Verpackung, Kennzeichnung und Entsorgung als gefährlicher Abfall mit Entsorgungsnachweis",
      "Freimessung der Raumluft nach VDI 3492 als Voraussetzung für die Freigabe",
      "Schlussdokumentation mit Anzeige, Entsorgungsnachweis und Freimessprotokoll"
    ],
    "ablauf": [
      {
        "titel": "Besichtigung und Probenahme",
        "text": "Wir besichtigen das Objekt kostenfrei, identifizieren verdächtige Materialien und sichern bei Bedarf Proben zur Laboranalyse. Erst das Ergebnis bestätigt, ob und in welcher Form Asbest vorliegt."
      },
      {
        "titel": "Festpreisangebot und Behördenanzeige",
        "text": "Sie erhalten einen transparenten Festpreis. Bei anzeigepflichtigen Arbeiten melden wir die Sanierung objektbezogen bei der zuständigen Bezirksregierung gemäß TRGS 519 an."
      },
      {
        "titel": "Einrichtung des Schwarzbereichs",
        "text": "Wir richten den Arbeitsbereich mit Schwarz-Weiß-Schleuse und Unterdruckhaltung ein, damit keine Fasern in angrenzende Bereiche gelangen. Das Personal arbeitet mit geeigneter persönlicher Schutzausrüstung."
      },
      {
        "titel": "Demontage und Entsorgung",
        "text": "Die asbesthaltigen Materialien werden emissionsarm demontiert, staubdicht verpackt, gekennzeichnet und als gefährlicher Abfall entsorgt. Der Entsorgungsnachweis dokumentiert den Verbleib lückenlos."
      },
      {
        "titel": "Freimessung und Freigabe",
        "text": "Nach der Feinreinigung erfolgt die Freimessung der Raumluft nach VDI 3492. Erst nach Unterschreitung des Grenzwerts geben wir die Räume frei und übergeben die vollständige Schlussdokumentation."
      }
    ],
    "faqs": [
      {
        "frage": "Woran erkenne ich, ob in meinem Gebäude Asbest verbaut ist?",
        "antwort": "Asbest wurde vor allem vor 1993 verwendet, etwa in Faserzement-Dachplatten (Wellplatten), Fassadenverkleidungen, Bodenbelägen, Fliesenklebern, Spachtelmassen und Rohrisolierungen. Sicherheit gibt nur eine Materialanalyse durch ein Labor - eine Sichtkontrolle allein reicht nicht aus. Wir entnehmen die Proben fachgerecht und ohne unnötige Faserfreisetzung."
      },
      {
        "frage": "Ist eine Behördenanzeige bei jeder Asbestsanierung Pflicht?",
        "antwort": "Die TRGS 519 unterscheidet zwischen Arbeiten geringen Umfangs und umfangreicheren Sanierungen. Letztere sind vor Beginn objektbezogen bei der zuständigen Bezirksregierung anzuzeigen. Wir prüfen den Einzelfall und übernehmen die Anzeige für Sie."
      },
      {
        "frage": "Was kostet eine Asbestsanierung?",
        "antwort": "Die Kosten hängen von Material, Menge, Zugänglichkeit und den erforderlichen Schutzmaßnahmen ab - etwa ob eine Unterdruckhaltung nötig ist. Eine pauschale Zahl wäre unseriös. Wir besichtigen kostenfrei und erstellen anschließend einen transparenten Festpreis."
      },
      {
        "frage": "Wie lange dauert eine Asbestsanierung?",
        "antwort": "Die Dauer richtet sich nach Umfang und Verfahren. Kleinere Maßnahmen sind oft an einem Tag erledigt, größere Sanierungen mit Schwarzbereich und Freimessung dauern entsprechend länger. Den voraussichtlichen Zeitrahmen nennen wir im Angebot."
      },
      {
        "frage": "Darf ich Asbest nicht einfach selbst entfernen?",
        "antwort": "Nein. Arbeiten an asbesthaltigen Materialien dürfen nur durch Personen mit Sachkunde nach TRGS 519 ausgeführt werden, da unsachgemäße Demontage gesundheitsgefährdende Fasern freisetzt. Asbesta ist Fachbetrieb nach GefStoffV und setzt ausschließlich sachkundiges Personal ein."
      }
    ]
  },
  "abbrucharbeiten": {
    "metaTitle": "Abbrucharbeiten in NRW | Rückbau & Teilabbruch | Asbesta",
    "metaDescription": "Abbrucharbeiten in ganz NRW: fachgerechter Rückbau, Teilabbruch und Entkernung mit vorheriger Schadstofferkundung, sauberer Trennung und Entsorgungsnachweis. Jetzt anfragen.",
    "heroIntro": "Wir führen Abbruch-, Rückbau- und Teilabbrucharbeiten in ganz NRW durch – mit vorheriger Schadstofferkundung, sortenreiner Trennung und lückenlosem Entsorgungsnachweis. So wird aus dem Abriss ein kontrollierter, dokumentierter Prozess statt eines unkalkulierbaren Risikos.",
    "einleitung": [
      "Abbrucharbeiten umfassen weit mehr als das reine Niederlegen von Bauteilen. Vor jedem Eingriff steht die Erkundung der verbauten Stoffe: In Gebäuden vor 1995 sind asbesthaltige Materialien, künstliche Mineralfasern (KMF), PAK-haltige Klebstoffe und PCB-belastete Fugenmassen verbreitet. Erst wenn diese Schadstoffe identifiziert und – wo erforderlich – vorab durch eine Sanierung entfernt sind, beginnt der eigentliche Abbruch. Dieses Vorgehen ist nicht optional, sondern ergibt sich aus der Gefahrstoffverordnung und der TRGS 519 für asbesthaltige Bauteile.",
      "Wir unterscheiden zwischen vollständigem Rückbau, Teilabbruch einzelner Bauteile und der Entkernung, bei der das Tragwerk erhalten bleibt und nur der Innenausbau entfernt wird. Welcher Weg sinnvoll ist, hängt von Statik, Nachbarbebauung, Schadstofflage und Ihrem Bauziel ab. Als inhabergeführter Fachbetrieb mit über 1.000 Projekten und 15 Jahren Erfahrung planen wir den Bauablauf so, dass tragende Strukturen und angrenzende Gebäudeteile geschützt bleiben.",
      "Ein zentraler Punkt ist die Trennung der Abbruchmassen. Statt alles als Mischabfall zu entsorgen, trennen wir Bauschutt, Holz, Metall, Gips und belastete Fraktionen direkt vor Ort sortenrein. Das senkt die Entsorgungskosten, ist abfallrechtlich vorgeschrieben und liefert Ihnen einen nachvollziehbaren Verbleib jeder Fraktion – belegt durch Entsorgungs- und Begleitscheine."
    ],
    "leistungsumfang": [
      "Schadstofferkundung und Materialprüfung vor Beginn – auf Wunsch mit Laboranalyse verdächtiger Bauteile",
      "Vollständiger Rückbau, Teilabbruch einzelner Bauteile und Entkernung bei erhaltenem Tragwerk",
      "Vorgezogene Sanierung asbest- und schadstoffhaltiger Materialien nach TRGS 519, 521 und 524",
      "Sortenreine Trennung der Abbruchmassen vor Ort: Bauschutt, Holz, Metall, Gips, belastete Fraktionen",
      "Schutz angrenzender Bauteile, Nachbarbebauung und Versorgungsleitungen während des Abbruchs",
      "Komplettentsorgung mit lückenlosem Entsorgungs- und Begleitscheinnachweis",
      "Besenreine Übergabe und Schlussdokumentation des gesamten Bauablaufs"
    ],
    "ablauf": [
      {
        "titel": "Besichtigung & Schadstofferkundung",
        "text": "Wir besichtigen das Objekt kostenfrei, prüfen verbaute Materialien und nehmen bei Verdacht Proben für die Laboranalyse. So ist vor dem ersten Schlag klar, ob Asbest, KMF oder PAK vorliegen."
      },
      {
        "titel": "Abbruchplanung & Festpreis",
        "text": "Auf Basis von Statik, Schadstofflage und Bauziel legen wir Reihenfolge und Verfahren fest – vollständiger Rückbau, Teilabbruch oder Entkernung – und unterbreiten ein transparentes Festpreis-Angebot."
      },
      {
        "titel": "Vorgezogene Schadstoffsanierung",
        "text": "Belastete Bauteile werden vor dem Abbruch fachgerecht entfernt, bei Asbest nach TRGS 519 mit den erforderlichen Schutzmaßnahmen und Anzeige bei der Bezirksregierung."
      },
      {
        "titel": "Abbruch & sortenreine Trennung",
        "text": "Der Rückbau erfolgt kontrolliert, mit Schutz angrenzender Bauteile. Die Abbruchmassen werden direkt vor Ort in Fraktionen getrennt."
      },
      {
        "titel": "Entsorgung & Übergabe",
        "text": "Jede Fraktion wird ordnungsgemäß entsorgt und mit Entsorgungs- und Begleitscheinen dokumentiert. Sie erhalten eine besenreine Fläche und die Schlussdokumentation."
      }
    ],
    "faqs": [
      {
        "frage": "Brauche ich für einen Abbruch eine Genehmigung?",
        "antwort": "Das hängt vom Objekt und Umfang ab. Vollständige Abbrüche und bestimmte Teilabbrüche sind in NRW häufig anzeige- oder genehmigungspflichtig; reine Innen-Entkernungen oft nicht. Werden asbesthaltige Bauteile entfernt, kommt zusätzlich die Anzeige der Arbeiten bei der Bezirksregierung nach TRGS 519 hinzu. Wir klären den jeweiligen Bedarf bei der Besichtigung."
      },
      {
        "frage": "Was kostet ein Abbruch?",
        "antwort": "Eine seriöse Pauschale lässt sich nicht ohne Objektkenntnis nennen, denn die Kosten hängen von Gebäudegröße, Bauweise, Schadstoffbelastung, Zugänglichkeit und Entsorgungsmenge ab. Nach der kostenfreien Besichtigung erhalten Sie von uns ein transparentes Festpreis-Angebot ohne versteckte Kosten."
      },
      {
        "frage": "Worin liegt der Unterschied zwischen Abriss, Teilabbruch und Entkernung?",
        "antwort": "Beim vollständigen Abriss wird das gesamte Gebäude zurückgebaut. Beim Teilabbruch werden nur einzelne Bauteile entfernt, etwa ein Anbau oder eine Geschossdecke. Bei der Entkernung bleibt das Tragwerk stehen und nur der Innenausbau – Wände, Estriche, Installationen – wird entfernt, typisch bei Kernsanierungen."
      },
      {
        "frage": "Warum muss vor dem Abbruch auf Schadstoffe geprüft werden?",
        "antwort": "Bei Gebäuden vor 1995 sind Asbest, KMF, PAK und PCB verbreitet. Würde man sie unkontrolliert mit abbrechen, gelangten Fasern und Schadstoffe in die Umwelt, und der gesamte Bauschutt gälte als belastet. Die vorherige Erkundung und vorgezogene Sanierung sind nach Gefahrstoffverordnung und TRGS Pflicht und halten zugleich die Entsorgungskosten kalkulierbar."
      },
      {
        "frage": "Wie wird der Abbruchschutt entsorgt?",
        "antwort": "Wir trennen die Massen bereits vor Ort sortenrein in Fraktionen wie Bauschutt, Holz, Metall, Gips und belastete Materialien. Jede Fraktion wird über zugelassene Entsorgungswege abgeführt und mit Entsorgungs- und Begleitscheinen dokumentiert, sodass der Verbleib lückenlos nachweisbar ist."
      }
    ]
  },
  "materialanalyse": {
    "metaTitle": "Materialanalyse Asbest & Schadstoffe NRW | Asbesta",
    "metaDescription": "Materialanalyse durch akkreditiertes Labor: Asbest, KMF, PAK, PCB & Schwermetalle sicher nachweisen. Probenahme in ganz NRW. Jetzt kostenfrei beraten lassen.",
    "heroIntro": "Ob ein Bauteil Asbest oder andere Schadstoffe enthält, lässt sich nur im Labor zweifelsfrei klären. Wir nehmen die Proben fachgerecht und sachkundig und lassen sie in einem akkreditierten Labor auswerten - die Grundlage jeder rechtssicheren Sanierungsentscheidung.",
    "einleitung": [
      "Eine Materialanalyse beantwortet die entscheidende Frage vor jeder Sanierung oder jedem Umbau: Welcher Gefahrstoff steckt im Bauteil und in welcher Konzentration? Mit blossem Auge oder anhand des Baujahrs lässt sich Asbest in Putzen, Klebern, Spachtelmassen oder Bodenbelägen nicht sicher erkennen. Erst die Analyse einer entnommenen Probe im Labor liefert ein belastbares, gerichtsfestes Ergebnis.",
      "Asbestfasern werden im akkreditierten Labor lichtmikroskopisch und bei Bedarf rasterelektronenmikroskopisch (REM/EDX) nach den Vorgaben der VDI 3866 identifiziert. So lassen sich auch geringe Asbestgehalte in mineralischen Baustoffen nachweisen, etwa in Fliesenklebern, Fugen oder bituminösen Produkten. Neben Asbest untersuchen wir auf weitere typische Gebäudeschadstoffe wie künstliche Mineralfasern (KMF), PAK in Teerklebern und Parkettklebern, PCB in Fugenmassen sowie Schwermetalle.",
      "Die fachgerechte Probenahme ist dabei genauso wichtig wie die Laboranalyse selbst: Wer falsch oder ungeschützt Proben entnimmt, setzt Fasern frei und gefährdet sich und andere. Unsere sachkundigen Mitarbeiter (TRGS 519, Anlage 3) entnehmen die Proben unter Staubminderung, dokumentieren jede Entnahmestelle und sorgen für eine eindeutige Zuordnung. Auf dieser Basis erhalten Sie eine klare Empfehlung zum weiteren Vorgehen."
    ],
    "leistungsumfang": [
      "Begehung und gezielte Festlegung der zu beprobenden Bauteile (Putze, Kleber, Spachtel, Bodenbeläge, Dichtungen, Dacheindeckungen)",
      "Staubmindernde, dokumentierte Probenahme durch sachkundiges Personal nach TRGS 519",
      "Laboranalyse auf Asbest mittels Lichtmikroskopie und REM/EDX nach VDI 3866",
      "Untersuchung auf weitere Schadstoffe: KMF, PAK, PCB, Schwermetalle (auftragsabhängig)",
      "Eindeutige Kennzeichnung und Fotodokumentation jeder Entnahmestelle",
      "Schriftlicher Prüfbericht mit Befund und Bewertung der Belastung",
      "Handlungsempfehlung zu Sanierungsbedarf, Dringlichkeit und erforderlichem Schutzniveau"
    ],
    "ablauf": [
      {
        "titel": "Beratung & Festlegung",
        "text": "Wir besprechen Verdacht, Baujahr und geplante Maßnahme und legen gemeinsam fest, welche Bauteile beprobt werden müssen. Die Erstbesichtigung ist kostenfrei."
      },
      {
        "titel": "Fachgerechte Probenahme",
        "text": "Sachkundige Mitarbeiter entnehmen die Proben staubmindernd und sicher, kennzeichnen jede Entnahmestelle und dokumentieren sie fotografisch."
      },
      {
        "titel": "Laboranalyse",
        "text": "Ein akkreditiertes Labor untersucht die Proben nach VDI 3866 auf Asbest sowie auf weitere beauftragte Schadstoffe und bestimmt die Materialart."
      },
      {
        "titel": "Befund & Empfehlung",
        "text": "Sie erhalten einen schriftlichen Prüfbericht. Wir erläutern das Ergebnis verständlich und geben eine konkrete Empfehlung zum weiteren Vorgehen."
      }
    ],
    "faqs": [
      {
        "frage": "Warum reicht eine Sichtprüfung nicht aus?",
        "antwort": "Asbest ist in vielen Baustoffen wie Fliesenklebern, Spachtelmassen oder Bodenbelägen optisch nicht erkennbar. Auch das Baujahr ist nur ein Indiz. Nur die Laboranalyse einer Probe liefert einen zweifelsfreien, rechtssicheren Nachweis."
      },
      {
        "frage": "Wie wird Asbest im Labor nachgewiesen?",
        "antwort": "Die Proben werden nach VDI 3866 lichtmikroskopisch und bei Bedarf rasterelektronenmikroskopisch mit EDX untersucht. So lassen sich Asbestfasern eindeutig identifizieren und von anderen Fasern unterscheiden, auch in geringen Gehalten."
      },
      {
        "frage": "Kann ich die Probe nicht selbst entnehmen?",
        "antwort": "Davon raten wir dringend ab. Beim Anbohren oder Abkratzen verdächtiger Materialien werden Fasern freigesetzt. Die Probenahme sollte staubmindernd und durch sachkundiges Personal nach TRGS 519 erfolgen."
      },
      {
        "frage": "Welche Schadstoffe können neben Asbest untersucht werden?",
        "antwort": "Wir lassen je nach Verdacht auch auf künstliche Mineralfasern (KMF), PAK in Teer- und Parkettklebern, PCB in Fugenmassen und elastischen Dichtungen sowie auf Schwermetalle untersuchen."
      },
      {
        "frage": "Was kostet eine Materialanalyse?",
        "antwort": "Die Kosten hängen von Anzahl und Art der Proben sowie vom Untersuchungsumfang ab. Nach der kostenfreien Besichtigung erhalten Sie ein transparentes Festpreisangebot - ohne versteckte Posten."
      }
    ]
  },
  "floor-flex-entfernen": {
    "metaTitle": "Floor-Flex entfernen in NRW | Asbesta Fachbetrieb",
    "metaDescription": "Floor-Flex-Platten und schwarzen Bitumenkleber asbestsicher entfernen lassen. Asbesta saniert nach TRGS 519 in ganz NRW. Kostenfreie Besichtigung anfragen.",
    "heroIntro": "Floor-Flex-Platten enthalten in aller Regel fest gebundenen Asbest und dürfen nur von einem Fachbetrieb nach TRGS 519 entfernt werden. Asbesta demontiert Platten und schwarzen Kleber emissionsarm, entsorgt nachweislich und übergibt eine Schlussdokumentation.",
    "einleitung": [
      "Floor-Flex (auch Vinyl-Asbest- oder PVC-Asbest-Platten genannt) sind quadratische Bodenplatten, meist im Format 25 x 25 cm oder 30 x 30 cm, die von den 1950er bis in die 1980er Jahre millionenfach verlegt wurden. Sie enthalten Chrysotil-Asbest, der in eine PVC-Matrix eingebunden ist, weshalb sie zu den fest gebundenen Asbestprodukten zählen. Gefährlich ist weniger die intakte Platte selbst, sondern das Aufbrechen, Schleifen oder unsachgemäße Heraushebeln, weil dabei lungengängige Asbestfasern freigesetzt werden.",
      "Eine besondere Tücke liegt unter den Platten: Der zur Verklebung verwendete schwarze Bitumenkleber (sogenannter Schwarzkleber oder Cutback-Kleber) ist häufig zusätzlich asbesthaltig und gilt als kritischer als die Platte selbst, da der Asbest hier schwächer gebunden ist. Eine fachgerechte Sanierung umfasst deshalb immer beide Schichten - Platte und Kleberrückstand - und nicht nur das Abheben des sichtbaren Belags.",
      "Rechtsgrundlage für die Entfernung ist die Technische Regel für Gefahrstoffe TRGS 519 in Verbindung mit der Gefahrstoffverordnung. Asbesta arbeitet als zugelassener Fachbetrieb mit sachkundigem Personal nach TRGS 519 Anlage 3, zeigt die Arbeiten vorab bei der zuständigen Bezirksregierung an und wendet das für Floor-Flex passende, emissionsarme Verfahren an. So bleibt die Faserfreisetzung kontrolliert und die gesetzlichen Pflichten werden lückenlos erfüllt."
    ],
    "leistungsumfang": [
      "Materialprüfung und Verdachtsabklärung von Platte und schwarzem Kleber, bei Bedarf mit Probenahme und Laboranalyse",
      "Objektbezogene Anzeige der Asbestarbeiten bei der zuständigen Bezirksregierung nach TRGS 519",
      "Emissionsarmes Abheben der Floor-Flex-Platten ohne Bruch, Schleifen oder Zerkleinern (BT-Verfahren / emissionsarme Verfahren)",
      "Vollständige Entfernung des asbesthaltigen schwarzen Bitumen-/Cutback-Klebers vom Estrich",
      "Staubdichte Verpackung und nachweisliche Entsorgung als asbesthaltiger Abfall (AVV 17 06 05) mit Entsorgungsnachweis",
      "Reinigung des Untergrunds und Freimessung der Raumluft nach VDI 3492, sofern erforderlich",
      "Schlussdokumentation inklusive Entsorgungsbelegen zur Vorlage bei Behörden, Käufern oder Verwaltung"
    ],
    "ablauf": [
      {
        "titel": "Besichtigung und Materialklärung",
        "text": "Wir besichtigen den Bodenbelag kostenfrei vor Ort, beurteilen Platten und Kleber und sichern den Asbestverdacht bei Bedarf durch eine Laboranalyse ab. Auf dieser Basis erstellen wir einen transparenten Festpreis."
      },
      {
        "titel": "Anzeige und Vorbereitung",
        "text": "Vor Beginn zeigen wir die Arbeiten bei der Bezirksregierung an, sperren den Bereich ab und richten den Arbeitsbereich emissionsarm ein. Möbel und angrenzende Bauteile werden geschützt."
      },
      {
        "titel": "Plattenentfernung",
        "text": "Die Floor-Flex-Platten werden mit emissionsarmen Verfahren am Stück abgehoben, statt sie zu brechen oder zu schleifen. So vermeiden wir eine unnötige Faserfreisetzung."
      },
      {
        "titel": "Klebersanierung",
        "text": "Anschließend entfernen wir den darunterliegenden asbesthaltigen schwarzen Kleber vollständig vom Estrich, da dieser den kritischeren Teil der Belastung darstellt."
      },
      {
        "titel": "Entsorgung, Freimessung und Dokumentation",
        "text": "Das Material wird staubdicht verpackt, als asbesthaltiger Abfall entsorgt und der Untergrund gereinigt. Auf Wunsch erfolgt eine Freimessung; Sie erhalten Entsorgungsnachweis und Schlussdokumentation."
      }
    ],
    "faqs": [
      {
        "frage": "Woran erkenne ich Floor-Flex-Platten?",
        "antwort": "Floor-Flex sind in der Regel quadratische Bodenplatten in den Formaten 25 x 25 cm oder 30 x 30 cm, oft marmoriert oder gesprenkelt, verlegt zwischen den 1950er und 1980er Jahren. Sicherheit gibt nur eine Materialanalyse - wir nehmen bei der Besichtigung eine Probe und lassen sie im Labor untersuchen."
      },
      {
        "frage": "Ist auch der Kleber unter den Platten gefährlich?",
        "antwort": "Ja, häufig sogar mehr als die Platte. Der schwarze Bitumen- bzw. Cutback-Kleber kann ebenfalls Asbest enthalten, der dort schwächer gebunden ist. Eine fachgerechte Sanierung entfernt deshalb immer auch den Kleberrückstand und nicht nur den sichtbaren Belag."
      },
      {
        "frage": "Darf ich Floor-Flex selbst herausreissen?",
        "antwort": "Davon ist dringend abzuraten. Beim Aufbrechen, Schleifen oder Heraushebeln werden Asbestfasern freigesetzt. Die Entfernung asbesthaltiger Bodenbeläge ist nach TRGS 519 sachkundigen Fachbetrieben vorbehalten und muss vorab bei der Bezirksregierung angezeigt werden."
      },
      {
        "frage": "Muss die Entfernung bei einer Behörde angezeigt werden?",
        "antwort": "Ja. Asbestsanierungsarbeiten sind nach TRGS 519 vor Beginn objektbezogen bei der zuständigen Bezirksregierung anzuzeigen. Asbesta übernimmt diese Anzeige für Sie und dokumentiert die fachgerechte Entsorgung."
      },
      {
        "frage": "Was kostet die Entfernung von Floor-Flex?",
        "antwort": "Die Kosten hängen von Fläche, Plattenformat, Kleberart und Zugänglichkeit ab - insbesondere die Klebersanierung beeinflusst den Aufwand. Nach einer kostenfreien Besichtigung erhalten Sie von uns einen transparenten Festpreis ohne versteckte Posten."
      }
    ]
  },
  "bitumenkleber-entfernen": {
    "metaTitle": "Asbesthaltigen Bitumenkleber entfernen | Asbesta NRW",
    "metaDescription": "Schwarzen Bitumen-/Asbestkleber rückstandslos & nach TRGS 519 entfernen lassen. Fachbetrieb Asbesta aus Marl, Einsatz in ganz NRW. Kostenfreie Besichtigung.",
    "heroIntro": "Schwarzer Bitumenkleber unter alten Bodenbelägen enthält häufig Asbest. Wir entfernen ihn rückstandslos, staubarm und nach TRGS 519 - inklusive Entsorgungsnachweis und Freimessung.",
    "einleitung": [
      "Schwarzer Bitumenkleber - oft als \"Schwarzkleber\" oder \"Klebebitumen\" bezeichnet - wurde bis in die 1990er Jahre zum Verkleben von Bodenbelägen wie PVC-Platten, Linoleum, Parkett oder Fliesen eingesetzt. Bauteilen dieser Zeit wurde häufig Asbest beigemischt, um die Klebkraft und Hitzebeständigkeit zu erhöhen. Auch wenn der eigentliche Belag (z. B. Cushion-Vinyl oder Floor-Flex-Platten) bereits entfernt wurde, bleibt der festhaftende schwarze Kleber als kritische Restschicht auf dem Estrich zurück und stellt ein gesundheitliches Risiko dar.",
      "Die Gefahr entsteht, sobald die spröde Kleberschicht mechanisch bearbeitet, abgeschliffen oder abgestemmt wird: Dabei können lungengängige Asbestfasern freigesetzt werden, die als krebserzeugend gelten. Deshalb ist die Entfernung asbesthaltigen Bitumenklebers in Deutschland streng geregelt. Maßgeblich ist die TRGS 519, die Sachkunde, Anzeigepflicht und Schutzmaßnahmen vorschreibt; ergänzend gelten die Gefahrstoffverordnung sowie das emissionsarme Verfahren BT 13 der TRGS 519.",
      "Asbesta entfernt asbesthaltigen Bitumenkleber als sachkundiger Fachbetrieb staubarm und rückstandslos - so, dass der Untergrund anschließend wieder belegreif ist. Vor Beginn klären wir per Materialprobe und Laboranalyse, ob tatsächlich Asbest enthalten ist, und legen das passende, emissionsarme Verfahren fest."
    ],
    "leistungsumfang": [
      "Materialprobe des schwarzen Klebers und Laboranalyse auf Asbestfasern vor Arbeitsbeginn",
      "Objektbezogene Anzeige der Sanierung bei der zuständigen Bezirksregierung nach TRGS 519",
      "Staubarme, rückstandslose Entfernung im emissionsarmen Verfahren (z. B. BT 13) mit Unterdruckhaltung",
      "Schwarz-Weiß-Schleuse, Abschottung der Arbeitsbereiche und persönliche Schutzausrüstung",
      "Belegreife Wiederherstellung des Untergrunds - Estrich frei von Klebe- und Faserrückständen",
      "Fachgerechte Verpackung und Entsorgung als Gefahrstoff mit Entsorgungsnachweis",
      "Abschließende Freimessung der Raumluft (VDI 3492) und Schlussdokumentation"
    ],
    "ablauf": [
      {
        "titel": "Besichtigung & Probennahme",
        "text": "Kostenfreie Begutachtung vor Ort, Entnahme einer Materialprobe des schwarzen Klebers und Laboranalyse. So steht fest, ob Asbest enthalten ist und welches Verfahren erforderlich wird."
      },
      {
        "titel": "Angebot & Anzeige",
        "text": "Sie erhalten einen transparenten Festpreis. Bei Asbestnachweis melden wir die Arbeiten fristgerecht und objektbezogen bei der Bezirksregierung an (TRGS 519)."
      },
      {
        "titel": "Abschottung & Schutzmaßnahmen",
        "text": "Wir richten den Arbeitsbereich mit Abschottung, Unterdruckhaltung und Schwarz-Weiß-Schleuse ein, damit keine Fasern in angrenzende Bereiche gelangen."
      },
      {
        "titel": "Staubarme Entfernung",
        "text": "Der Bitumenkleber wird im emissionsarmen Verfahren rückstandslos vom Untergrund gelöst, sodass der Estrich anschließend wieder belegreif ist."
      },
      {
        "titel": "Entsorgung, Freimessung & Dokumentation",
        "text": "Verpackung und Entsorgung als Gefahrstoff mit Nachweis, Freimessung der Raumluft und Übergabe der Schlussdokumentation."
      }
    ],
    "faqs": [
      {
        "frage": "Woran erkenne ich, ob mein schwarzer Bodenkleber Asbest enthält?",
        "antwort": "Optisch lässt sich das nicht sicher feststellen. Sicherheit gibt nur eine Materialprobe mit Laboranalyse. Als Faustregel gilt: Schwarzer Bitumenkleber unter Belägen, die vor den 1990er Jahren verlegt wurden, ist asbestverdächtig. Wir nehmen die Probe im Rahmen der Besichtigung."
      },
      {
        "frage": "Muss asbesthaltiger Bitumenkleber zwingend entfernt werden?",
        "antwort": "Solange die Kleberschicht ungestört und fest gebunden ist, geht von ihr im Ruhezustand kaum Gefahr aus. Sobald jedoch saniert, geschliffen, gefräst oder ein neuer Belag verlegt werden soll, ist eine fachgerechte Entfernung nach TRGS 519 erforderlich, weil dabei Fasern freigesetzt werden können."
      },
      {
        "frage": "Wie läuft die Entfernung staubarm ab?",
        "antwort": "Wir arbeiten im emissionsarmen Verfahren (z. B. BT 13 der TRGS 519) mit Abschottung, Unterdruckhaltung und Schwarz-Weiß-Schleuse. Der Kleber wird so gelöst, dass möglichst wenig Staub entsteht; abschließend belegen wir mit einer Freimessung, dass die Raumluft unbedenklich ist."
      },
      {
        "frage": "Was kostet das Entfernen von asbesthaltigem Bitumenkleber?",
        "antwort": "Die Kosten hängen von Fläche, Untergrund, Zugänglichkeit und Verfahren ab. Eine pauschale Angabe ist seriös nicht möglich. Nach der kostenfreien Besichtigung erhalten Sie von uns einen transparenten Festpreis ohne versteckte Posten."
      },
      {
        "frage": "Ist der Estrich nach der Entfernung wieder belegreif?",
        "antwort": "Ja. Wir entfernen den Bitumenkleber rückstandslos, sodass der Untergrund frei von Klebe- und Faserrückständen ist und anschließend ein neuer Bodenbelag verlegt werden kann."
      }
    ]
  },
  "welleternit-ausbauen": {
    "metaTitle": "Welleternit / Wellasbestplatten ausbauen in NRW | Asbesta",
    "metaDescription": "Wellasbestplatten und Welleternit fachgerecht ausbauen lassen - zertifiziert nach TRGS 519. Asbesta saniert Asbestdächer in ganz NRW. Festpreis & Entsorgungsnachweis.",
    "heroIntro": "Asbesthaltige Welleternit- und Wellasbestplatten gehören zu den häufigsten Asbestprodukten an Dächern und Fassaden in NRW. Asbesta baut sie emissionsarm nach TRGS 519 aus - mit transparentem Festpreis, ordnungsgemäßer Entsorgung und vollständiger Dokumentation.",
    "einleitung": [
      "Welleternit, oft auch als Wellasbest oder Asbestzement-Wellplatte bezeichnet, wurde jahrzehntelang als kostengünstiges und witterungsbeständiges Dach- und Fassadenmaterial verbaut. Bis zum Asbestverbot 1993 enthielten diese Faserzementplatten in der Regel Chrysotil (Weißasbest), teils auch Krokydolith. Solange die Platten intakt und fest verbaut sind, gelten sie als schwach gebundenes bis fest gebundenes Material - sobald jedoch Bohren, Sägen, Brechen oder die Verwitterung der Oberfläche ins Spiel kommt, können lungengängige Asbestfasern freigesetzt werden. Genau deshalb ist der Ausbau eine erlaubnispflichtige Tätigkeit, die nach TRGS 519 ausschließlich durch sachkundige Fachbetriebe erfolgen darf.",
      "Asbesta ist ein inhabergeführter Fachbetrieb für Schadstoffsanierung aus Marl und in ganz Nordrhein-Westfalen im Einsatz. Unsere Mitarbeiter sind nach TRGS 519 Anlage 3 sachkundig geschult, stehen unter arbeitsmedizinischer Vorsorge und arbeiten mit der erforderlichen persönlichen Schutzausrüstung. Wir bauen Wellasbestplatten möglichst zerstörungsfrei und ohne hohe Kräfte aus, um die Faserfreisetzung von vornherein zu minimieren. Bei Bedarf werden die Platten vorab mit einem Restfaserbindemittel behandelt.",
      "Mit über 1.000 abgeschlossenen Projekten und mehr als 15 Jahren Erfahrung bieten wir Ihnen den kompletten Ablauf aus einer Hand: kostenfreie Besichtigung vor Ort, transparenter Festpreis, der fachgerechte Ausbau, die zugelassene Entsorgung mit Entsorgungsnachweis sowie die Schlussdokumentation. So haben Sie als Eigentümer, Hausverwaltung oder Gewerbebetrieb von Anfang an Rechtssicherheit und einen festen Ansprechpartner."
    ],
    "leistungsumfang": [
      "Emissionsarmer Ausbau asbesthaltiger Welleternit- und Wellasbestplatten von Dächern, Carports, Schuppen, Hallen und Fassaden",
      "Demontage nach TRGS 519 - zerstörungsfreies Lösen der Befestigungen statt Brechen, bei Bedarf Vorbehandlung mit faserbindendem Mittel",
      "Sichere Verpackung in staubdichten, gekennzeichneten Big Bags bzw. reissfester Folie und kontrollierter Abtransport",
      "Bereitstellung der persönlichen Schutzausrüstung (PSA) und Atemschutz für das gesamte Team",
      "Ordnungsgemäße Entsorgung über zugelassene Annahmestellen inklusive Entsorgungsnachweis",
      "Bei Faserfreisetzung im Innenbereich: Schwarz-Weiß-Schleuse und Unterdruckhaltung",
      "Schlussdokumentation und auf Wunsch Freimessung zur Bestätigung der Faserfreiheit"
    ],
    "ablauf": [
      {
        "titel": "Kostenfreie Besichtigung und Festpreisangebot",
        "text": "Wir begutachten Dachfläche, Plattenzustand und Zugänglichkeit vor Ort, klären den Materialverdacht und erstellen Ihnen ein verbindliches Festpreisangebot. Dabei legen wir auch die Arbeitsschutzmaßnahmen und die erforderliche Anzeige der Tätigkeit bei der zuständigen Behörde fest."
      },
      {
        "titel": "Vorbereitung und Arbeitsschutz",
        "text": "Vor Arbeitsbeginn richten wir den Arbeitsbereich ein, sichern Verkehrswege und stellen die PSA inklusive Atemschutz bereit. Bei stärker verwitterten Platten werden die Oberflächen mit einem Restfaserbindemittel behandelt, um aufgewirbelte Fasern zu binden."
      },
      {
        "titel": "Emissionsarmer Ausbau der Platten",
        "text": "Die Wellplatten werden möglichst zerstörungsfrei demontiert: Befestigungen werden gelöst statt durchtrennt, die Platten nicht geworfen oder gebrochen. So halten wir die Faserfreisetzung gemäß TRGS 519 so gering wie möglich."
      },
      {
        "titel": "Verpackung, Abtransport und Entsorgung",
        "text": "Die ausgebauten Platten werden staubdicht verpackt, als gefährlicher Abfall gekennzeichnet und über zugelassene Entsorgungsanlagen entsorgt. Sie erhalten den vollständigen Entsorgungsnachweis für Ihre Unterlagen."
      },
      {
        "titel": "Endkontrolle und Dokumentation",
        "text": "Zum Abschluss reinigen wir den Arbeitsbereich, führen bei Innenarbeiten eine Freimessung durch und übergeben Ihnen die Schlussdokumentation der durchgeführten Sanierung."
      }
    ],
    "faqs": [
      {
        "frage": "Woran erkenne ich, ob meine Wellplatten Asbest enthalten?",
        "antwort": "Welleternit, der vor 1993 verbaut wurde, enthält mit hoher Wahrscheinlichkeit Asbest. Sicherheit gibt nur eine Materialprobe und Laboranalyse. Auf der Plattenunterseite finden sich teils Herstellerstempel mit Datumsangabe. Sprechen Sie uns an - wir beurteilen den Verdacht bei der Besichtigung und veranlassen bei Bedarf eine Probennahme."
      },
      {
        "frage": "Darf ich Wellasbestplatten selbst abbauen?",
        "antwort": "Nein. Der Ausbau asbesthaltiger Platten ist eine nach TRGS 519 erlaubnispflichtige Tätigkeit und darf nur von sachkundigen Fachbetrieben durchgeführt werden. Eigenleistung ohne Sachkunde ist nicht zulässig und gefährdet Ihre Gesundheit sowie die der Nachbarschaft."
      },
      {
        "frage": "Was passiert mit den ausgebauten Platten?",
        "antwort": "Asbesthaltige Wellplatten gelten als gefährlicher Abfall. Wir verpacken sie staubdicht, kennzeichnen sie vorschriftsmäßig und entsorgen sie über zugelassene Annahmestellen. Den Entsorgungsnachweis erhalten Sie als Bestätigung der ordnungsgemäßen Entsorgung."
      },
      {
        "frage": "Muss der Ausbau bei einer Behörde angezeigt werden?",
        "antwort": "Ja, asbestsanierende Tätigkeiten sind vor Beginn bei der zuständigen Arbeitsschutzbehörde anzuzeigen. Diese Anzeige übernehmen wir als Fachbetrieb für Sie, sodass alle formalen Anforderungen erfüllt sind."
      },
      {
        "frage": "In welchem Gebiet ist Asbesta tätig?",
        "antwort": "Wir sind von unserem Standort in Marl aus in ganz Nordrhein-Westfalen im Einsatz - vom Ruhrgebiet über das Münsterland bis ins Rheinland. Eine erste Besichtigung vor Ort ist für Sie kostenfrei."
      }
    ]
  },
  "fassadenplatten-ausbauen": {
    "metaTitle": "Fassadenplatten ausbauen (Asbest) | Asbesta NRW",
    "metaDescription": "Asbesthaltige Fassadenplatten ausbauen lassen in ganz NRW: Fachbetrieb nach TRGS 519, emissionsarme Demontage, Entsorgungsnachweis. Jetzt kostenfrei besichtigen lassen.",
    "heroIntro": "Wir bauen asbesthaltige Fassadenplatten in ganz NRW staubarm, vorschriftskonform nach TRGS 519 und mit lückenlosem Entsorgungsnachweis aus. Kostenfreie Besichtigung und transparenter Festpreis inklusive.",
    "einleitung": [
      "Asbestzement-Fassadenplatten - oft unter dem Markennamen Eternit bekannt - wurden bis 1993 millionenfach an Außenwänden, Giebeln und vorgehängten Fassaden verbaut. Sie bestehen aus einem Zement-Gemisch mit eingebundenen Asbestfasern (in der Regel fest gebundener Asbest) und gelten optisch als unscheinbare graue oder farbig beschichtete Platten. Solange sie unbeschädigt sind, geben sie kaum Fasern ab - beim Ausbau, Brechen, Bohren oder durch jahrzehntelange Verwitterung werden jedoch lungengängige Fasern frei, die nachweislich Krebs auslösen können.",
      "Genau deshalb ist die Demontage keine gewöhnliche Abbrucharbeit, sondern eine anzeigepflichtige Asbestsanierung. Maßgeblich ist die TRGS 519 (Asbest - Abbruch-, Sanierungs- oder Instandhaltungsarbeiten); ergänzend gelten die Gefahrstoffverordnung und die LV 19/Asbest-Richtlinie. Wir führen die Arbeiten ausschließlich mit sachkundigem Personal nach TRGS 519 Anlage 3 durch und zeigen das Vorhaben vor Beginn bei der zuständigen Bezirksregierung an.",
      "Als inhabergeführter Fachbetrieb aus Marl mit über 1.000 abgeschlossenen Projekten planen wir jeden Fassadenausbau objektbezogen: emissionsarme, möglichst zerstörungsfreie Demontage der ganzen Platten, gesicherte Verpackung in zugelassene Big Bags und ordnungsgemäße Entsorgung als gefährlicher Abfall. So bleibt Ihre Baustelle sicher - für Bewohner, Nachbarn und unsere Mitarbeiter."
    ],
    "leistungsumfang": [
      "Begutachtung der Fassade und Materialansprache (Verdacht auf Asbestzement), bei Bedarf Probenahme und Laboranalyse",
      "Objektbezogene Anzeige der Asbestarbeiten bei der zuständigen Bezirksregierung in NRW",
      "Emissionsarme, weitgehend zerstörungsfreie Demontage der Fassadenplatten samt Befestigungsmitteln (Nägel, Krallen, Schrauben)",
      "Staubbindung durch Anfeuchten/Vorbehandlung sowie Einsatz faserbindender Verfahren statt Brechen oder Flexen",
      "Sofortige, dichte Verpackung in gekennzeichnete Big Bags bzw. zugelassene Asbestgebinde",
      "Entsorgung als gefährlicher Abfall (AVV 17 06 05*) über zugelassene Deponien inklusive Entsorgungsnachweis",
      "Reinigung des Arbeitsbereichs, Abschlusskontrolle und Schlussdokumentation der Sanierung"
    ],
    "ablauf": [
      {
        "titel": "Besichtigung & Materialklärung",
        "text": "Wir besichtigen die Fassade kostenfrei vor Ort, beurteilen Plattenart, Befestigung und Zustand und klären bei Unsicherheit per Materialprobe und Laboranalyse, ob tatsächlich Asbest vorliegt. Auf dieser Basis erhalten Sie einen transparenten Festpreis."
      },
      {
        "titel": "Anzeige & Vorbereitung",
        "text": "Vor Arbeitsbeginn zeigen wir das Vorhaben bei der Bezirksregierung an und richten den Arbeitsbereich ein. Gerüst, Absperrung und Staubschutz werden so geplant, dass keine Fasern in die Umgebung gelangen."
      },
      {
        "titel": "Emissionsarme Demontage",
        "text": "Die Platten werden angefeuchtet und möglichst ganz, ohne Brechen oder Flexen, von der Unterkonstruktion gelöst. Diese zerstörungsfreie Arbeitsweise nach TRGS 519 hält die Faserfreisetzung minimal."
      },
      {
        "titel": "Verpackung & Entsorgung",
        "text": "Die ausgebauten Platten werden sofort staubdicht in gekennzeichnete Big Bags verpackt und als gefährlicher Abfall über zugelassene Deponien entsorgt. Sie erhalten den vollständigen Entsorgungsnachweis."
      },
      {
        "titel": "Reinigung & Dokumentation",
        "text": "Zum Abschluss reinigen wir den Bereich, kontrollieren auf Faserrückstände und übergeben Ihnen die Schlussdokumentation - die Grundlage für den anschließenden Aufbau Ihrer neuen Fassade."
      }
    ],
    "faqs": [
      {
        "frage": "Sind alle alten Fassadenplatten asbesthaltig?",
        "antwort": "Nicht zwingend, aber Platten, die vor dem Asbestverbot 1993 verbaut wurden, stehen unter dringendem Verdacht. Sicherheit gibt nur eine Materialprobe mit Laboranalyse. Wir beurteilen das Material bei der Besichtigung und veranlassen bei Bedarf eine Probenahme, bevor gearbeitet wird."
      },
      {
        "frage": "Darf ich asbesthaltige Fassadenplatten selbst abbauen?",
        "antwort": "Nein. Das eigenmächtige Entfernen ist nach TRGS 519 und Gefahrstoffverordnung nicht zulässig und gefährdet Ihre Gesundheit. Die Demontage ist anzeigepflichtig und darf nur durch sachkundige Fachbetriebe erfolgen - genau das übernehmen wir für Sie."
      },
      {
        "frage": "Was kostet der Ausbau der Fassadenplatten?",
        "antwort": "Der Preis hängt von Fläche, Plattenart, Befestigung, Gerüstbedarf und Entsorgungsmenge ab. Wir besichtigen kostenfrei und nennen Ihnen danach einen transparenten Festpreis ohne versteckte Kosten - inklusive Entsorgung und Dokumentation."
      },
      {
        "frage": "Wie wird verhindert, dass Fasern in die Nachbarschaft gelangen?",
        "antwort": "Wir arbeiten emissionsarm: Die Platten werden angefeuchtet, möglichst ganz und ohne Brechen demontiert und sofort dicht verpackt. Der Arbeitsbereich wird abgesichert; bei Bedarf ergänzen wir weitere Staubschutzmaßnahmen, sodass die Faserfreisetzung minimal bleibt."
      },
      {
        "frage": "Erhalte ich einen Nachweis über die Entsorgung?",
        "antwort": "Ja. Asbestzementplatten gelten als gefährlicher Abfall (AVV 17 06 05*) und werden über zugelassene Deponien entsorgt. Sie bekommen den vollständigen Entsorgungsnachweis sowie eine Schlussdokumentation der gesamten Sanierung."
      }
    ]
  },
  "asbestzement-ausbauen": {
    "metaTitle": "Asbestzement ausbauen in NRW | TRGS 519 Fachbetrieb Asbesta",
    "metaDescription": "Asbestzement (Faserzement) fachgerecht ausbauen lassen: zertifizierter Fachbetrieb nach TRGS 519 in ganz NRW. Kostenfreie Besichtigung, Festpreis, Entsorgungsnachweis. Jetzt anfragen.",
    "heroIntro": "Asbestzement-Bauteile sicher und gesetzeskonform demontieren - durch den zertifizierten Fachbetrieb Asbesta nach TRGS 519, in ganz NRW.",
    "einleitung": [
      "Asbestzement, auch als Faserzement bekannt, wurde jahrzehntelang in unzähligen Bauteilen verarbeitet: Dach- und Fassadenplatten (Welleternit), Blumenkästen, Lüftungskanäle, Wasserrohre, Fensterbänke und Zwischenwände. Solange das Material unbeschädigt verbaut ist, bleiben die Asbestfasern weitgehend gebunden. Sobald Asbestzement jedoch bohrt, brechen, sägen oder verwittern Sie es, können lungengängige Fasern freigesetzt werden - mit erheblichem Gesundheitsrisiko. Aus diesem Grund darf der Ausbau ausschließlich durch einen sachkundigen Fachbetrieb erfolgen.",
      "Als inhabergeführter Fachbetrieb für Schadstoffsanierung übernimmt Asbesta die Demontage von Asbestzement-Bauteilen aller Art. Unsere Arbeiten richten sich konsequent nach der TRGS 519 (Asbest - Abbruch-, Sanierungs- oder Instandhaltungsarbeiten) sowie den Vorgaben der Gefahrstoffverordnung. Unsere Mitarbeiter sind sachkundig nach TRGS 519 Anlage 3 und werden arbeitsmedizinisch betreut. So gewährleisten wir, dass der Ausbau emissionsarm, dokumentiert und rechtssicher abgewickelt wird.",
      "Mit über 1.000 abgeschlossenen Projekten und mehr als 15 Jahren Erfahrung sind wir Ihr zuverlässiger Partner in ganz Nordrhein-Westfalen. Von der kostenfreien Besichtigung über den transparenten Festpreis bis zur Freimessung und Schlussdokumentation begleiten wir Ihr Vorhaben aus einer Hand - inklusive ordnungsgemäßer Entsorgung mit Entsorgungsnachweis und voller Betriebshaftpflicht."
    ],
    "leistungsumfang": [
      "Demontage von Asbestzement-Dachplatten und Wellplatten (Welleternit) inklusive Befestigungsmaterial",
      "Ausbau von Asbestzement-Fassadenplatten, Verkleidungen und Brüstungselementen",
      "Rückbau von Faserzement-Bauteilen wie Blumenkästen, Fensterbänken, Lüftungs- und Abwasserrohren",
      "Emissionsarme Demontage nach TRGS 519 - Vermeidung von Bruch, kein Sägen oder Schleifen am verbauten Material",
      "Staubbindung, sichere Verpackung in zugelassenen Big Bags bzw. Gewebesäcken und Kennzeichnung der Abfälle",
      "Ordnungsgemäße Entsorgung als asbesthaltiger Abfall mit lückenlosem Entsorgungsnachweis",
      "Bei Faserfreisetzung: Schwarz-Weiß-Schleuse, Unterdruckhaltung und abschließende Freimessung"
    ],
    "ablauf": [
      {
        "titel": "Kostenfreie Besichtigung und Festpreisangebot",
        "text": "Wir begutachten die Asbestzement-Bauteile vor Ort, klären Umfang, Zugänglichkeit und mögliche Faserfreisetzung und beraten Sie zum weiteren Vorgehen. Anschließend erhalten Sie ein transparentes Angebot zum Festpreis - ohne versteckte Kosten."
      },
      {
        "titel": "Anzeige und Vorbereitung der Arbeiten",
        "text": "Wir übernehmen die nach TRGS 519 erforderliche Anzeige bei der zuständigen Behörde und Berufsgenossenschaft. Der Arbeitsbereich wird abgegrenzt und gesichert; bei Bedarf richten wir eine Schwarz-Weiß-Schleuse und Unterdruckhaltung ein."
      },
      {
        "titel": "Emissionsarme Demontage",
        "text": "Die Asbestzement-Bauteile werden zerstörungsarm gelöst, um die Faserbindung zu erhalten. Wir verzichten auf staubintensive Verfahren wie Sägen oder Schleifen, binden anfallenden Staub und arbeiten mit persönlicher Schutzausrüstung."
      },
      {
        "titel": "Verpackung und ordnungsgemäße Entsorgung",
        "text": "Das Material wird staubdicht verpackt, gekennzeichnet und als asbesthaltiger Abfall zu einer zugelassenen Deponie verbracht. Sie erhalten den vollständigen Entsorgungsnachweis für Ihre Unterlagen."
      },
      {
        "titel": "Freimessung und Schlussdokumentation",
        "text": "Sofern eine Faserfreisetzung möglich war, erfolgt eine Freimessung des Arbeitsbereichs. Zum Abschluss erhalten Sie eine nachvollziehbare Schlussdokumentation der durchgeführten Arbeiten."
      }
    ],
    "faqs": [
      {
        "frage": "Darf ich Asbestzement selbst ausbauen?",
        "antwort": "Für Privatpersonen ist der Eigenausbau rechtlich stark eingeschränkt und mit erheblichen Gesundheitsrisiken verbunden. Sobald Fasern freigesetzt werden können, schreibt die TRGS 519 sachkundiges Personal und definierte Schutzmaßnahmen vor. Im gewerblichen Bereich ist die Beauftragung eines Fachbetriebs grundsätzlich erforderlich. Wir übernehmen den Ausbau rechtssicher für Sie."
      },
      {
        "frage": "Wie erkenne ich, ob mein Bauteil aus Asbestzement besteht?",
        "antwort": "Faserzement wurde bis Anfang der 1990er-Jahre häufig mit Asbest hergestellt - typisch sind graue Wellplatten, Fassadenplatten oder Rohre. Eine sichere Aussage liefert nur eine Materialprobe und Laboranalyse. Wir beraten Sie bei der Besichtigung und veranlassen bei Bedarf eine Beprobung."
      },
      {
        "frage": "Nach welcher Vorschrift arbeiten Sie beim Ausbau von Asbestzement?",
        "antwort": "Asbestarbeiten richten sich nach der TRGS 519 (Asbest - Abbruch-, Sanierungs- oder Instandhaltungsarbeiten) sowie der Gefahrstoffverordnung. Asbesta ist hierfür zertifiziert, unsere Mitarbeiter sind sachkundig nach TRGS 519 Anlage 3 und arbeitsmedizinisch betreut."
      },
      {
        "frage": "Wie wird der Asbestzement nach dem Ausbau entsorgt?",
        "antwort": "Asbestzement gilt als gefährlicher Abfall. Wir verpacken das Material staubdicht, kennzeichnen es vorschriftsmäßig und verbringen es zu einer zugelassenen Deponie. Sie erhalten einen lückenlosen Entsorgungsnachweis."
      },
      {
        "frage": "Was kostet der Ausbau von Asbestzement?",
        "antwort": "Die Kosten hängen von Menge, Bauteilart, Zugänglichkeit und den erforderlichen Schutzmaßnahmen ab. Deshalb besichtigen wir kostenfrei vor Ort und erstellen Ihnen anschließend ein verbindliches Festpreisangebot ohne versteckte Zusatzkosten."
      }
    ]
  },
  "fensterbänke-ausbauen": {
    "metaTitle": "Asbest-Fensterbänke ausbauen in NRW | Asbesta",
    "metaDescription": "Asbesthaltige Fensterbänke fachgerecht ausbauen und entsorgen nach TRGS 519. Asbesta saniert in ganz NRW mit Festpreis, Freimessung und Entsorgungsnachweis.",
    "heroIntro": "Asbesthaltige Fensterbänke aus Asbestzement entfernen wir staubarm und rechtssicher nach TRGS 519 - inklusive Entsorgungsnachweis. Kostenfreie Besichtigung in ganz NRW.",
    "einleitung": [
      "Innen- und Außenfensterbänke aus Asbestzement (umgangssprachlich oft \"Eternit\") wurden vor allem in Bauten der 1960er- bis 1980er-Jahre verbaut, weil das Material formstabil, witterungsbeständig und schwer entflammbar ist. Erkennbar sind die grauen, harten und vergleichsweise dünnen Platten meist an der charakteristischen Oberfläche; eine sichere Bestätigung liefert jedoch nur eine Materialanalyse. Solange die Fensterbank intakt verbaut ist, bindet die Zementmatrix die Fasern fest - kritisch wird es beim Ausbau, Bohren, Brechen oder Flexen, denn dabei werden lungengängige Asbestfasern freigesetzt.",
      "Genau deshalb ist der Ausbau asbesthaltiger Fensterbänke kein Abbruch im klassischen Sinn, sondern eine genehmigungspflichtige Sanierungstätigkeit. Maßgeblich sind die Gefahrstoffverordnung (GefStoffV) und die TRGS 519, die das Arbeiten mit Asbest, die erforderliche Sachkunde und die zulässigen Verfahren regeln. Schon das einfache \"Heraushebeln\" einer alten Fensterbank durch Laien ist riskant und nicht zulässig, sobald Asbest im Spiel ist.",
      "Asbesta baut Ihre Fensterbänke als zertifizierter Fachbetrieb möglichst zerstörungsfrei und emissionsarm aus, fixiert offene Schnittkanten und Bruchstellen, verpackt den Bauschutt staubdicht und übergibt ihn der zugelassenen Deponie. Sie erhalten einen rechtsgültigen Entsorgungsnachweis sowie eine Schlussdokumentation - so ist die Maßnahme für Eigentümer, Hausverwaltung und Behörde lückenlos belegt."
    ],
    "leistungsumfang": [
      "Materialprüfung der Fensterbank (Probenahme und Laboranalyse zur Asbestbestätigung)",
      "Objektbezogene Anzeige der Arbeiten bei der zuständigen Bezirksregierung nach TRGS 519",
      "Staubarmer, möglichst zerstörungsfreier Ausbau der Innen- und Außenfensterbänke ohne Flexen oder Brechen",
      "Abdichten und Fixieren von Schnitt-, Bruch- und Auflagekanten zur Vermeidung von Faserfreisetzung",
      "Reinigung der Laibung und Fensterbankauflage sowie Vorbereitung für den Neueinbau",
      "Staubdichte Verpackung in zugelassene Big Bags bzw. Gewebesäcke und Transport zur Deponie",
      "Entsorgungsnachweis, bei Bedarf Freimessung nach VDI 3492 und Schlussdokumentation"
    ],
    "ablauf": [
      {
        "titel": "Besichtigung und Materialklärung",
        "text": "Wir besichtigen die Fensterbänke kostenfrei vor Ort, beurteilen Einbausituation und Zustand und sichern bei Verdacht eine Materialprobe zur Laboranalyse. Auf dieser Grundlage erhalten Sie einen transparenten Festpreis."
      },
      {
        "titel": "Anzeige und Schutzmaßnahmen",
        "text": "Vor Beginn zeigen wir die Arbeiten bei der Bezirksregierung an. Der Arbeitsbereich wird abgegrenzt, die Beschäftigten tragen die nach TRGS 519 vorgeschriebene persönliche Schutzausrüstung; bei höherer Faserfreisetzung kommen Unterdruckhaltung und Schwarz-Weiß-Schleuse zum Einsatz."
      },
      {
        "titel": "Emissionsarmer Ausbau",
        "text": "Die Fensterbänke werden möglichst im Ganzen gelöst statt zerschlagen, Bruch- und Schnittkanten vorab mit Restfaserbindemittel behandelt und Stäube direkt am Entstehungsort mit H-Klasse-Geräten abgesaugt."
      },
      {
        "titel": "Verpackung und Entsorgung",
        "text": "Das asbesthaltige Material wird staubdicht verpackt, gekennzeichnet und über einen zugelassenen Entsorgungsweg zur Deponie gebracht. Sie erhalten den Entsorgungsnachweis."
      },
      {
        "titel": "Reinigung und Abschluss",
        "text": "Wir reinigen den Bereich, kontrollieren auf Faserfreiheit und übergeben bei Bedarf eine Freimessung nach VDI 3492 sowie die Schlussdokumentation. Die Auflage ist danach bereit für die neue Fensterbank."
      }
    ],
    "faqs": [
      {
        "frage": "Woran erkenne ich, ob meine Fensterbank Asbest enthält?",
        "antwort": "Verdächtig sind graue, harte, dünne Fensterbänke aus Asbestzement (oft als \"Eternit\" bezeichnet) aus den 1960er- bis 1980er-Jahren. Sicherheit gibt nur eine Materialprobe mit Laboranalyse - eine Beurteilung allein nach Optik reicht nicht aus. Wir nehmen die Probe bei der Besichtigung."
      },
      {
        "frage": "Darf ich eine asbesthaltige Fensterbank selbst ausbauen?",
        "antwort": "Nein. Sobald Asbest bestätigt ist, gelten Gefahrstoffverordnung und TRGS 519. Der Ausbau setzt Sachkunde, geeignete Verfahren und Schutzmaßnahmen voraus und muss vorab angezeigt werden. Eigenleistung ist hier nicht zulässig und gesundheitlich gefährlich."
      },
      {
        "frage": "Was kostet der Ausbau einer asbesthaltigen Fensterbank?",
        "antwort": "Die Kosten hängen von Anzahl, Größe, Einbausituation und Zugänglichkeit der Fensterbänke sowie von der Entsorgungsmenge ab. Nach der kostenfreien Besichtigung erhalten Sie einen transparenten Festpreis ohne versteckte Posten."
      },
      {
        "frage": "Wird beim Ausbau gebohrt oder geflext?",
        "antwort": "Wir vermeiden Flexen und Brechen, weil dabei besonders viele Fasern frei werden. Die Fensterbänke werden möglichst im Ganzen gelöst, Kanten vorab gebunden und Stäube am Entstehungsort abgesaugt - das hält die Faserfreisetzung gering."
      },
      {
        "frage": "Wie wird das Material entsorgt und was bekomme ich als Nachweis?",
        "antwort": "Das asbesthaltige Material wird staubdicht verpackt, gekennzeichnet und auf einer zugelassenen Deponie entsorgt. Sie erhalten einen rechtsgültigen Entsorgungsnachweis und auf Wunsch eine Freimessung nach VDI 3492 sowie die Schlussdokumentation."
      }
    ]
  },
  "cushion-vinyl-entfernen": {
    "metaTitle": "Cushion-Vinyl (CV-Belag) entfernen in NRW | Asbesta",
    "metaDescription": "CV-Beläge mit asbesthaltiger Trägerpappe fachgerecht entfernen nach TRGS 519. Asbesta saniert in ganz NRW: Beprobung, Unterdruck, Freimessung, Nachweis.",
    "heroIntro": "Cushion-Vinyl-Beläge (CV-Beläge) aus den 1960er- bis 1980er-Jahren tragen häufig eine asbesthaltige Trägerpappe auf der Unterseite. Wir entfernen diese Bodenbeläge staubdicht und rechtssicher nach TRGS 519 in ganz NRW.",
    "einleitung": [
      "Cushion-Vinyl (kurz CV) ist ein mehrschichtiger, geschäumter Bodenbelag, der zwischen etwa 1960 und 1985 sehr verbreitet war - vor allem in Küchen, Bädern und Fluren. Das Tückische liegt nicht im sichtbaren Vinyl, sondern in der Unterseite: Viele dieser Beläge wurden auf eine Trägerpappe aus Asbest (sogenannte Asbestpappe) kaschiert. Diese Pappe enthält schwach gebundene Asbestfasern und ist damit deutlich gefährlicher einzustufen als fest gebundene Produkte wie Vinyl-Asbest-Platten (Floor-Flex).",
      "Schwach gebundener Asbest kann beim Reissen, Schleifen oder trockenen Ablösen des Belags Fasern in großer Zahl freisetzen. Genau deshalb unterliegt die Entfernung von CV-Belägen den strengen Anforderungen der TRGS 519 und der Gefahrstoffverordnung. Eine Demontage durch Laien oder unqualifizierte Handwerker ist nicht nur verboten, sondern ein erhebliches Gesundheitsrisiko - eingeatmete Asbestfasern können Jahrzehnte später Asbestose, Lungen- und Rippenfellkrebs auslösen.",
      "Asbesta ist als Fachbetrieb nach GefStoffV mit Sachkundenachweis (TRGS 519, Anlage 3) auf genau diese Fälle spezialisiert. Wir klären zunächst per Materialprobe, ob und welcher Asbest vorliegt, planen die Sanierung objektbezogen und entfernen den Belag samt Pappe und Kleberrückständen kontrolliert - mit Unterdruckhaltung, persönlicher Schutzausrüstung und anschließender Freimessung. So übergeben wir Ihnen eine nachweislich faserfreie Fläche."
    ],
    "leistungsumfang": [
      "Identifikation des Belags und Probenahme der Trägerpappe mit Laboranalyse (Faserart, Bindung)",
      "Objektbezogene Anzeige der Asbestarbeiten bei der zuständigen Bezirksregierung",
      "Einrichtung des Schwarz-Weiß-Bereichs mit Personen- und Materialschleuse sowie Unterdruckhaltung",
      "Staubarme, möglichst zerstörungsfreie Abnahme des CV-Belags samt asbesthaltiger Trägerpappe",
      "Entfernung von Kleberresten und Papprückständen vom Untergrund (z. B. Estrich)",
      "Verpackung, deklarierte Entsorgung als gefährlicher Abfall und lückenloser Entsorgungsnachweis",
      "Abschluss-Freimessung der Raumluft nach VDI 3492 und Schlussdokumentation"
    ],
    "ablauf": [
      {
        "titel": "Besichtigung und Beprobung",
        "text": "Wir besichtigen die Fläche kostenfrei und entnehmen eine Materialprobe der Belagsunterseite. Erst die Laboranalyse zeigt sicher, ob die Trägerpappe Asbest enthält und wie das Vorgehen gewählt werden muss."
      },
      {
        "titel": "Festpreis und behördliche Anzeige",
        "text": "Auf Basis des Befunds erhalten Sie einen transparenten Festpreis. Vor Arbeitsbeginn zeigen wir die Asbestsanierung objektbezogen bei der Bezirksregierung an, wie es TRGS 519 vorschreibt."
      },
      {
        "titel": "Abschottung und Unterdruck",
        "text": "Der Arbeitsbereich wird staubdicht abgeschottet und in Unterdruck gehalten. Personen- und Materialschleuse verhindern, dass Fasern in angrenzende Bereiche gelangen."
      },
      {
        "titel": "Kontrollierte Entfernung",
        "text": "Belag und Asbestpappe werden faserarm abgenommen, anhaftende Kleber- und Papprückstände entfernt und alles direkt staubdicht verpackt. Trockenes Reissen oder Schleifen wird vermieden."
      },
      {
        "titel": "Freimessung und Übergabe",
        "text": "Nach Feinreinigung messen wir die Raumluft nach VDI 3492 frei. Sie erhalten Entsorgungsnachweis und Schlussdokumentation - die Fläche ist danach nachweislich saniert."
      }
    ],
    "faqs": [
      {
        "frage": "Woran erkenne ich, ob mein alter Bodenbelag ein asbesthaltiger CV-Belag ist?",
        "antwort": "Sicher erkennbar ist das nur im Labor. CV-Beläge aus der Zeit vor etwa 1985 haben oft eine graue bis hellbraune, pappartige Unterseite - das ist der Verdacht auf Asbestpappe. Eine Sichtprüfung reicht nicht aus, daher entnehmen wir eine Probe und lassen die Faserart analysieren, bevor gearbeitet wird."
      },
      {
        "frage": "Worin unterscheidet sich ein CV-Belag von Floor-Flex-Platten?",
        "antwort": "Floor-Flex sind feste PVC-Vinyl-Platten mit fest gebundenem Asbest. CV-Beläge sind flexible, geschäumte Bahnenbeläge mit einer schwach gebundenen Asbestpappe als Träger. Schwach gebundener Asbest setzt leichter Fasern frei und gilt als gefährlicher - die Schutzmaßnahmen nach TRGS 519 sind entsprechend strenger."
      },
      {
        "frage": "Darf ich einen CV-Belag selbst herausreissen?",
        "antwort": "Nein. Enthält die Trägerpappe Asbest, ist das Entfernen durch Privatpersonen oder nicht sachkundige Betriebe untersagt. Die Arbeiten dürfen nur von einem Fachbetrieb nach GefStoffV mit Sachkundenachweis (TRGS 519) ausgeführt werden, inklusive Anzeige bei der Behörde."
      },
      {
        "frage": "Was kostet die Entfernung eines CV-Belags?",
        "antwort": "Das hängt von Fläche, Untergrund, Klebersituation und Zugänglichkeit ab. Nach der kostenfreien Besichtigung und der Laborprobe nennen wir Ihnen einen transparenten Festpreis ohne erfundene Pauschalen. Erfundene Preise vorab wären unseriös, da der Befund das Vorgehen bestimmt."
      },
      {
        "frage": "Wie wird der entfernte Belag entsorgt?",
        "antwort": "Asbesthaltige Beläge und Pappen sind gefährlicher Abfall. Wir verpacken sie staubdicht, deklarieren sie vorschriftsmäßig und entsorgen sie über zugelassene Annahmestellen. Sie erhalten einen lückenlosen Entsorgungsnachweis als Teil der Schlussdokumentation."
      }
    ]
  },
  "kmf-sanierung": {
    "metaTitle": "KMF-Sanierung nach TRGS 521 in NRW | Asbesta",
    "metaDescription": "Alte Mineralwolle (Glas- und Steinwolle) fachgerecht ausbauen und entsorgen nach TRGS 521. Asbesta saniert KMF in ganz NRW mit Festpreis, Staubschutz und Entsorgungsnachweis.",
    "heroIntro": "Alte Glas- und Steinwolle vor 1996 gilt als krebsverdächtig und darf nur staubarm und fachgerecht ausgebaut werden. Asbesta saniert künstliche Mineralfasern (KMF) in ganz NRW nach TRGS 521 - mit Staubschutz, sachkundigem Personal und lückenlosem Entsorgungsnachweis.",
    "einleitung": [
      "Künstliche Mineralfasern (KMF) sind Dämmstoffe aus Glaswolle, Steinwolle oder Schlackenwolle, die jahrzehntelang zur Wärme- und Schalldämmung verbaut wurden - in Dachschrägen, Zwischendecken, Trockenbauwänden, Rohrleitungen, hinter Heizkörpern und in technischen Anlagen. Entscheidend für die Gefährdungsbeurteilung ist das Alter: Mineralwolle, die vor 1996 hergestellt wurde, enthält häufig sogenannte 'alte' Fasern, die wegen ihrer Geometrie und Beständigkeit als krebsverdächtig (Kategorie 1B/2) eingestuft sind. Erst seit Juni 2000 dürfen in Deutschland nur noch biologisch abbaubare, nachweislich unbedenkliche Mineralfasern in den Verkehr gebracht werden, die das RAL-Gütezeichen tragen.",
      "Anders als Asbest fällt KMF nicht unter die TRGS 519, sondern unter die TRGS 521 (Abbruch-, Sanierungs- und Instandhaltungsarbeiten mit alter Mineralwolle). Sie regelt verbindlich, welche Schutzmaßnahmen je nach Faserkonzentration, Tätigkeit und Dauer erforderlich sind. Beim Ausbau, Zerreissen oder Zusammendrücken alter Dämmungen werden lungengängige Fasern freigesetzt, die Haut, Augen und Atemwege reizen und bei krebsverdächtigen alten Fasern ein langfristiges Gesundheitsrisiko darstellen. Aus diesem Grund sind staubmindernde Verfahren, geeignete Schutzausrüstung und eine fachgerechte Entsorgung vorgeschrieben.",
      "Asbesta ist als Fachbetrieb nach Gefahrstoffverordnung zugelassen und setzt sachkundiges Personal nach den Anforderungen der TRGS-Reihe ein. Wir klären zunächst, ob es sich um krebsverdächtige alte oder um unbedenkliche neuere Mineralwolle handelt, planen die Sanierung objektbezogen und bauen die Dämmung staubarm aus - mit Abschottung, Absaugung und gesicherter Verpackung. So erhalten private Bauherren, Hausverwaltungen, Industrie und öffentliche Auftraggeber eine saubere, dokumentierte Sanierung mit transparentem Festpreis."
    ],
    "leistungsumfang": [
      "Beurteilung der Mineralwolle nach Einbaujahr und Beschaffenheit, bei Bedarf mit Probenahme und Laboranalyse zur Abgrenzung alter (krebsverdächtiger) von unbedenklicher KMF",
      "Gefährdungsbeurteilung und Festlegung der Schutzmaßnahmen nach TRGS 521 je nach Faserfreisetzung und Tätigkeitsdauer",
      "Staubarmer Ausbau von Glas- und Steinwolle aus Dächern, Decken, Trockenbauwänden, Rohr- und Anlagendämmungen ohne unnötiges Aufreissen oder Zerkleinern",
      "Abschottung des Arbeitsbereichs, Staubbindung sowie Absaugung mit geprüften Entstaubern der Staubklasse H",
      "Persönliche Schutzausrüstung (Atemschutz, Schutzanzug) und bei höherer Faserfreisetzung Unterdruckhaltung und Schwarz-Weiß-Schleuse",
      "Staubdichte Verpackung in zugelassene Gebinde bzw. Big Bags und ordnungsgemäße Entsorgung mit Entsorgungsnachweis",
      "Feinreinigung des Bereichs und Schlussdokumentation der Sanierung"
    ],
    "ablauf": [
      {
        "titel": "Besichtigung und Einstufung der Mineralwolle",
        "text": "Wir besichtigen das Objekt kostenfrei, beurteilen die Dämmung nach Einbaujahr, Zustand und Beschaffenheit und klären, ob krebsverdächtige alte Mineralwolle vorliegt. Bei Unsicherheit sichern wir eine Probe zur Laboranalyse. Auf dieser Basis erhalten Sie einen transparenten Festpreis."
      },
      {
        "titel": "Gefährdungsbeurteilung und Vorbereitung",
        "text": "Nach TRGS 521 legen wir die erforderlichen Schutzmaßnahmen fest, schotten den Arbeitsbereich ab und bereiten Staubbindung sowie Absaugung vor. Bei hoher Faserfreisetzung richten wir Unterdruckhaltung und Schwarz-Weiß-Schleuse ein."
      },
      {
        "titel": "Staubarmer Ausbau",
        "text": "Die Mineralwolle wird möglichst zusammenhängend entnommen statt zerrissen, direkt am Entstehungsort mit H-Klasse-Geräten abgesaugt und unmittelbar verpackt. So bleibt die Faserfreisetzung gering. Unser Personal arbeitet mit geeignetem Atemschutz und Schutzanzug."
      },
      {
        "titel": "Verpackung und Entsorgung",
        "text": "Das Material wird staubdicht in zugelassene Gebinde oder Big Bags verpackt, gekennzeichnet und über zugelassene Entsorgungswege abgeführt. Sie erhalten den vollständigen Entsorgungsnachweis."
      },
      {
        "titel": "Feinreinigung und Dokumentation",
        "text": "Zum Abschluss reinigen wir den Bereich, kontrollieren auf Faserrückstände und übergeben Ihnen die Schlussdokumentation - die Grundlage für den anschließenden Aufbau Ihrer neuen Dämmung."
      }
    ],
    "faqs": [
      {
        "frage": "Ist jede Glas- und Steinwolle gesundheitsgefährdend?",
        "antwort": "Entscheidend ist das Herstellungsjahr. Mineralwolle, die vor 1996 produziert wurde, gilt als krebsverdächtig und sollte fachgerecht ausgebaut werden. Seit Juni 2000 dürfen in Deutschland nur noch biologisch abbaubare, als unbedenklich eingestufte Fasern verkauft werden, die das RAL-Gütezeichen tragen. Bei Unsicherheit klären wir die Einstufung durch eine Materialbeurteilung, bei Bedarf mit Laboranalyse."
      },
      {
        "frage": "Worin unterscheidet sich die KMF-Sanierung von einer Asbestsanierung?",
        "antwort": "Asbest fällt unter die TRGS 519 mit strenger Anzeigepflicht. Alte künstliche Mineralfasern werden dagegen nach der TRGS 521 saniert. Beide Faserarten reizen die Atemwege und gelten als krebsverdächtig, die rechtlichen Anforderungen und Schutzmaßnahmen unterscheiden sich jedoch. Wir wenden je nach Material die passende Technische Regel an."
      },
      {
        "frage": "Welche Beschwerden können alte Mineralfasern auslösen?",
        "antwort": "Kurzfristig reizen die Fasern Haut, Augen und obere Atemwege und können Juckreiz und Husten verursachen. Bei den krebsverdächtigen alten Fasern besteht zudem ein langfristiges Gesundheitsrisiko durch das Einatmen lungengängiger Fasern. Deshalb sind staubarme Verfahren und geeigneter Atemschutz beim Ausbau wichtig."
      },
      {
        "frage": "Kann ich alte Dämmwolle nicht selbst entfernen?",
        "antwort": "Davon raten wir ab. Beim Herausreissen und Zusammendrücken alter Mineralwolle werden große Mengen Fasern freigesetzt. Die TRGS 521 schreibt für solche Arbeiten Schutzmaßnahmen, geeignete Absaugung und Schutzausrüstung vor. Als Fachbetrieb führen wir den Ausbau staubarm und fachgerecht aus und sorgen für die ordnungsgemäße Entsorgung."
      },
      {
        "frage": "Was kostet eine KMF-Sanierung?",
        "antwort": "Die Kosten hängen von Menge, Einbausituation, Zugänglichkeit und den erforderlichen Schutzmaßnahmen ab. Eine pauschale Angabe wäre unseriös. Nach der kostenfreien Besichtigung erhalten Sie von uns einen transparenten Festpreis ohne versteckte Posten - inklusive Entsorgung und Dokumentation."
      }
    ]
  },
  "pak-sanierung": {
    "metaTitle": "PAK-Sanierung in NRW | Fachbetrieb Asbesta",
    "metaDescription": "PAK-Sanierung vom Fachbetrieb: Teerklebstoff, Parkett-Kleber & Dachpappe fachgerecht entfernen. Probenahme, Festpreis, Entsorgungsnachweis. NRW-weit. Jetzt anfragen.",
    "heroIntro": "Wir sanieren PAK-belastete Bauteile wie Teerklebstoffe unter Altparkett, schwarze Kleberreste und teerhaltige Dachbahnen fachgerecht und staubarm. Als Fachbetrieb nach GefStoffV arbeiten wir in ganz NRW mit Probenahme, Festpreis und lückenlosem Entsorgungsnachweis.",
    "einleitung": [
      "Polyzyklische aromatische Kohlenwasserstoffe (PAK) entstehen bei der unvollständigen Verbrennung organischer Stoffe und gelangten über Jahrzehnte vor allem als Steinkohlenteer in Bauprodukte. Typisch sind schwarze, teerartige Klebstoffe unter altem Parkett und Holzpflaster, teerhaltige Dachpappen und Bitumenbahnen, alte Korkdämmungen sowie Teerkork und bestimmte Fugenmassen. Der maßgebliche Leitschadstoff ist Benzo[a]pyren (BaP), der als krebserzeugend gilt und über Staub und Ausgasung in die Raumluft gelangen kann.",
      "Die Gefahr von PAK liegt weniger in der Faser als beim Asbest, sondern in der Freisetzung gesundheitsschädlicher, teils krebserzeugender Verbindungen beim Anschleifen, Aufstemmen oder thermischen Bearbeiten der belasteten Materialien. Deshalb sind bei der Sanierung staubmindernde, emissionsarme Verfahren und konsequenter Arbeitsschutz erforderlich. Rechtliche Grundlage ist die Gefahrstoffverordnung in Verbindung mit der TRGS 524 (Schutzmaßnahmen bei Tätigkeiten in kontaminierten Bereichen) und der TRGS 551 für teer- und pechhaltige Stoffe; für die Bewertung und Entsorgung sind die LAGA-Vorgaben und die Abfallklassifizierung nach Abfallverzeichnis-Verordnung relevant.",
      "Asbesta plant jede PAK-Sanierung objektbezogen: Wir klären zunächst durch Materialproben und Laboranalyse, ob und in welcher Konzentration PAK vorliegen, definieren daraus die Schutzmaßnahmen und das passende Ausbauverfahren und dokumentieren Ausbau, Entsorgung und Freigabe nachvollziehbar. So erhalten private Bauherren, Hausverwaltungen, Industrie und öffentliche Auftraggeber ein Ergebnis, das gesundheitlich unbedenklich und rechtlich abgesichert ist."
    ],
    "leistungsumfang": [
      "Materialprobenahme von verdächtigen Klebstoffen, Dachbahnen und Estrichaufbauten mit Laboranalyse auf den PAK-Gehalt (Leitparameter Benzo[a]pyren)",
      "Gefährdungsbeurteilung und Festlegung der Schutzmaßnahmen nach GefStoffV, TRGS 524 und TRGS 551 vor Arbeitsbeginn",
      "Staubarmer, emissionsarmer Ausbau teerhaltiger Parkett- und Holzpflasterkleber, Teerkork-Dämmungen und teerhaltiger Dachpappen",
      "Einsatz abgesaugter Maschinen, gegebenenfalls Unterdruckhaltung und Abschottung belasteter Bereiche",
      "Sortenreine Verpackung, Deklaration und Entsorgung des PAK-belasteten Materials über zugelassene Entsorgungswege mit Entsorgungsnachweis",
      "Reinigung der Bereiche und auf Wunsch Kontroll- bzw. Raumluftmessung zur Bestätigung der Sanierung",
      "Schlussdokumentation mit Laborbefunden, Entsorgungsbelegen und Freigabeprotokoll"
    ],
    "ablauf": [
      {
        "titel": "Besichtigung und Probenahme",
        "text": "Wir besichtigen das Objekt kostenfrei, erfassen die verdächtigen Bauteile und entnehmen Materialproben. Die Laboranalyse weist Art und Höhe der PAK-Belastung nach und bildet die Grundlage für alle weiteren Schritte."
      },
      {
        "titel": "Gefährdungsbeurteilung und Festpreis",
        "text": "Auf Basis der Befunde erstellen wir eine Gefährdungsbeurteilung nach GefStoffV und TRGS 524/551, legen Verfahren und Schutzmaßnahmen fest und kalkulieren einen transparenten Festpreis ohne versteckte Kosten."
      },
      {
        "titel": "Vorbereitung und Abschottung",
        "text": "Wir richten den Arbeitsbereich ein, schützen angrenzende Flächen, sorgen für Abschottung und bei Bedarf Unterdruckhaltung und stellen die persönliche Schutzausrüstung sowie staubmindernde Technik bereit."
      },
      {
        "titel": "Ausbau und Entsorgung",
        "text": "Die teerhaltigen Klebstoffe, Beläge oder Dachbahnen werden emissionsarm entfernt, sortenrein verpackt und über zugelassene Entsorger entsorgt. Jeder Schritt wird mit Entsorgungsnachweis dokumentiert."
      },
      {
        "titel": "Reinigung, Kontrolle und Dokumentation",
        "text": "Nach der Feinreinigung kontrollieren wir das Ergebnis, führen bei Bedarf eine Raumluftmessung durch und übergeben eine Schlussdokumentation mit Laborbefunden, Entsorgungsbelegen und Freigabe."
      }
    ],
    "faqs": [
      {
        "frage": "Woran erkenne ich, dass ein PAK-Verdacht besteht?",
        "antwort": "Typische Hinweise sind schwarze, teerartig riechende Klebstoffreste unter altem Parkett oder Holzpflaster, alte schwarze Dachpappen und Bitumenbahnen sowie Teerkork-Dämmungen, meist aus Gebäuden vor etwa 1980. Sicherheit gibt nur eine Materialprobe mit Laboranalyse, die wir für Sie durchführen."
      },
      {
        "frage": "Ist eine PAK-Sanierung gesetzlich vorgeschrieben?",
        "antwort": "Sobald bei Bau-, Abbruch- oder Renovierungsarbeiten mit PAK-haltigen Materialien umgegangen wird, greifen die Gefahrstoffverordnung und die TRGS 524 sowie TRGS 551. Sie verpflichten zu einer Gefährdungsbeurteilung, zu Schutzmaßnahmen und zu einer ordnungsgemäßen Entsorgung über zugelassene Wege."
      },
      {
        "frage": "Was kostet eine PAK-Sanierung?",
        "antwort": "Die Kosten hängen von Material, Fläche, Belastungshöhe und Zugänglichkeit ab, etwa beim Entfernen teerhaltiger Parkettkleber oder Dachbahnen. Nach kostenfreier Besichtigung und Probenahme erhalten Sie von uns einen transparenten Festpreis. Erfundene Pauschalpreise nennen wir bewusst nicht."
      },
      {
        "frage": "Wie wird das belastete Material entsorgt?",
        "antwort": "PAK-belastete Abfälle werden je nach Befund klassifiziert, sortenrein verpackt und über zugelassene Entsorgungsanlagen entsorgt. Sie erhalten von uns einen lückenlosen Entsorgungsnachweis als Teil der Schlussdokumentation."
      },
      {
        "frage": "Wie lange dauert eine PAK-Sanierung?",
        "antwort": "Die Dauer richtet sich nach Umfang und Verfahren. Kleinere Flächen wie ein einzelner Raum mit Teerkleber sind oft in wenigen Tagen erledigt, größere Objekte entsprechend länger. Einen konkreten Zeitrahmen nennen wir nach der Besichtigung verbindlich."
      }
    ]
  },
  "luftanalysen-vdi-3492": {
    "metaTitle": "Raumluftmessung nach VDI 3492 in NRW | Asbesta",
    "metaDescription": "Luftanalysen und Freimessung nach VDI 3492 in ganz NRW: Bestimmung der Asbestfaserkonzentration in der Raumluft durch den Fachbetrieb Asbesta. Jetzt anfragen.",
    "heroIntro": "Mit der Raumluftmessung nach VDI 3492 weisen wir nach, ob in der Innenraumluft anorganische Faserstäube - insbesondere Asbestfasern - vorhanden sind. So belegen wir messtechnisch, dass ein Raum nach einer Sanierung wieder gefahrlos genutzt werden kann.",
    "einleitung": [
      "Die VDI-Richtlinie 3492 beschreibt das anerkannte Verfahren zur Messung der Konzentration anorganischer Fasern - vor allem Asbest - in der Innenraumluft. Dabei wird über mehrere Stunden ein definiertes Luftvolumen über einen Goldbedampften Filter gesaugt; die abgeschiedenen Fasern werden anschließend im Rasterelektronenmikroskop (REM) ausgezählt und nach Länge, Durchmesser und Materialart bewertet. Anders als eine reine Materialprobe zeigt die Luftmessung, ob tatsächlich Fasern frei in der Atemluft schweben - also ob eine akute Gefährdung der Nutzer besteht.",
      "Die Messung ist immer dann erforderlich, wenn nach Arbeiten an asbesthaltigen Materialien die Faserfreiheit eines Raumes belegt werden muss (Freimessung) oder wenn der Verdacht auf eine bestehende Belastung durch beschädigte Asbestprodukte besteht. Rechtlicher Rahmen sind die Gefahrstoffverordnung und die TRGS 519, die für Asbestsanierungen eine Erfolgskontrolle vorschreiben. Erst eine Faserkonzentration unterhalb des Freimesswertes erlaubt die Aufhebung der Schutzmaßnahmen und die Wiedernutzung der Räume.",
      "Asbesta organisiert die Probenahme vor Ort und die Auswertung in einem akkreditierten Labor. Wir dokumentieren Messpunkte, Probenahmebedingungen und Ergebnisse nachvollziehbar und ordnen die Werte für Sie fachlich ein - ob als unabhängige Bestandsaufnahme oder als abschließende Freimessung im Rahmen einer Sanierung in ganz NRW."
    ],
    "leistungsumfang": [
      "Probenahme der Innenraumluft nach VDI 3492 mit kalibrierten Pumpen und Goldbeschichteten Filtermembranen",
      "Festlegung repräsentativer Messpunkte und Dokumentation der Probenahmebedingungen (Temperatur, Luftbewegung, Raumnutzung)",
      "Auswertung im Rasterelektronenmikroskop (REM) durch ein akkreditiertes Labor mit Faserdifferenzierung nach Materialart",
      "Freimessung als Erfolgskontrolle nach Asbestsanierungen gemäß TRGS 519",
      "Aufwirbelversuch bei Bedarf zur realitätsnahen Beurteilung der Faserfreisetzung",
      "Fachliche Bewertung der Messergebnisse im Verhältnis zum Freimesswert",
      "Prüfberichte und Schlussdokumentation als Nachweis für Behörden, Eigentümer und Nutzer"
    ],
    "ablauf": [
      {
        "titel": "Beratung und Messkonzept",
        "text": "Bei der kostenfreien Besichtigung klären wir Anlass, Raumsituation und Zielsetzung. Wir legen Anzahl und Lage der Messpunkte sowie das geeignete Verfahren (Freimessung oder Bestandsmessung) fest."
      },
      {
        "titel": "Probenahme nach VDI 3492",
        "text": "Mit kalibrierten Pumpen saugen wir ein definiertes Luftvolumen über die Filtermembranen. Bei Freimessungen erfolgt dies unter standardisierten, leicht aufgewirbelten Raumbedingungen, um eine sichere Aussage zu erhalten."
      },
      {
        "titel": "Laboranalyse im REM",
        "text": "Die Filter werden in einem akkreditierten Labor im Rasterelektronenmikroskop ausgewertet. Die Fasern werden ausgezählt und nach Geometrie und Materialart differenziert, um Asbest sicher von anderen Fasern zu trennen."
      },
      {
        "titel": "Bewertung und Dokumentation",
        "text": "Wir vergleichen die ermittelte Faserkonzentration mit dem Freimesswert und ordnen das Ergebnis fachlich ein. Sie erhalten einen nachvollziehbaren Prüfbericht als Nachweis."
      },
      {
        "titel": "Freigabe oder weitere Schritte",
        "text": "Liegt der Wert unterhalb des Freimesswertes, kann die Raumnutzung freigegeben und Schutzmaßnahmen können aufgehoben werden. Andernfalls beraten wir zu erforderlichen Sanierungs- oder Reinigungsmaßnahmen."
      }
    ],
    "faqs": [
      {
        "frage": "Wann ist eine Raumluftmessung nach VDI 3492 notwendig?",
        "antwort": "Eine Messung ist erforderlich, wenn nach einer Asbestsanierung die Faserfreiheit belegt werden muss (Freimessung nach TRGS 519) oder wenn der Verdacht besteht, dass beschädigte asbesthaltige Materialien Fasern an die Raumluft abgeben. Auch bei Mietstreitigkeiten oder vor einer Nutzungsfreigabe schafft die Messung Klarheit."
      },
      {
        "frage": "Was ist der Unterschied zwischen einer Materialprobe und einer Luftmessung?",
        "antwort": "Eine Materialprobe zeigt, ob ein Bauteil Asbest enthält. Die Luftmessung nach VDI 3492 zeigt dagegen, ob tatsächlich freie Fasern in der Atemluft vorhanden sind - also ob aktuell eine Gefährdung der Nutzer besteht. Beide Verfahren ergänzen sich je nach Fragestellung."
      },
      {
        "frage": "Wie lange dauert eine Messung und wann liegt das Ergebnis vor?",
        "antwort": "Die Probenahme vor Ort dauert mehrere Stunden, da ein großes Luftvolumen über den Filter gesaugt werden muss. Die anschließende REM-Auswertung erfolgt im akkreditierten Labor; die Bearbeitungszeit richtet sich nach Labor und Dringlichkeit. Wir informieren Sie bei der Beauftragung über den konkreten Zeitrahmen."
      },
      {
        "frage": "Was bedeutet das Messergebnis für mich?",
        "antwort": "Entscheidend ist die ermittelte Faserkonzentration im Verhältnis zum Freimesswert. Liegt der Wert darunter, gilt der Raum als faserfrei und kann wieder genutzt werden. Wir erläutern Ihnen das Ergebnis verständlich und ordnen es fachlich ein, statt nur Zahlen zu liefern."
      },
      {
        "frage": "Warum ist eine REM-Auswertung erforderlich?",
        "antwort": "Asbestfasern sind extrem dünn und im Lichtmikroskop nicht sicher zu erkennen oder von anderen Fasern zu unterscheiden. Das Rasterelektronenmikroskop ermöglicht die in VDI 3492 geforderte eindeutige Identifizierung und Differenzierung der Fasern nach Geometrie und Materialart."
      }
    ]
  }
};

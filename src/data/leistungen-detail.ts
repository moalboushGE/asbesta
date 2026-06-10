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
    "heroIntro": "Asbest ist krebserregend und darf nur von Fachbetrieben mit Sachkunde nach TRGS 519 entfernt werden. Asbesta saniert asbesthaltige Materialien in ganz NRW sicher, behoerdlich angezeigt und mit lueckenlosem Entsorgungsnachweis.",
    "einleitung": [
      "Asbest wurde bis zum bundesweiten Verbot 1993 in unzaehligen Baumaterialien verarbeitet - von Dachplatten und Fassadenverkleidungen ueber Bodenkleber und Flex-Platten bis zu Spachtelmassen, Rohrisolierungen und Brandschutzfeuerungen. Werden diese Materialien beschaedigt, gebohrt, gebrochen oder abgerissen, setzen sie lungengaengige Fasern frei, die nachweislich Asbestose, Lungen- und Rippenfellkrebs verursachen koennen. Aus diesem Grund regelt die TRGS 519 (Technische Regeln fuer Gefahrstoffe) Abbruch-, Sanierungs- und Instandhaltungsarbeiten an asbesthaltigen Materialien verbindlich.",
      "Die TRGS 519 unterscheidet zwischen Arbeiten geringen Umfangs (ASI-Arbeiten) und umfangreichen Sanierungen, fuer die ein behoerdlich anerkannter Sachkundenachweis und eine objektbezogene Anzeige bei der zustaendigen Bezirksregierung erforderlich sind. Asbesta ist als Fachbetrieb nach Gefahrstoffverordnung (GefStoffV) zugelassen, beschaeftigt sachkundige Mitarbeiter nach TRGS 519 Anlage 3 und arbeitet mit arbeitsmedizinischer Vorsorge sowie voller Betriebshaftpflicht.",
      "Wir begleiten Sie vom ersten Verdacht bis zur Freigabe: kostenfreie Besichtigung, transparenter Festpreis, fachgerechte Demontage unter Schutzmassnahmen, gesetzeskonforme Entsorgung als gefaehrlicher Abfall sowie eine Freimessung nach VDI 3492, die die Wiedernutzung der Raeume belegt. So erhalten private Bauherren, Hausverwaltungen, Industrie und oeffentliche Auftraggeber eine rechtssichere und dokumentierte Sanierung."
    ],
    "leistungsumfang": [
      "Probenahme und Materialanalyse zur Bestaetigung des Asbestverdachts (z.B. an Putzen, Klebern, Platten oder Spachtelmassen)",
      "Objektbezogene Anzeige der Sanierung bei der zustaendigen Bezirksregierung gemaess TRGS 519",
      "Einrichtung von Schwarz-Weiss-Schleuse und Unterdruckhaltung mit Personenschleuse bei Faserfreisetzung",
      "Fachgerechte, moeglichst emissionsarme Demontage asbesthaltiger Materialien durch sachkundiges Personal",
      "Staubdichte Verpackung, Kennzeichnung und Entsorgung als gefaehrlicher Abfall mit Entsorgungsnachweis",
      "Freimessung der Raumluft nach VDI 3492 als Voraussetzung fuer die Freigabe",
      "Schlussdokumentation mit Anzeige, Entsorgungsnachweis und Freimessprotokoll"
    ],
    "ablauf": [
      {
        "titel": "Besichtigung und Probenahme",
        "text": "Wir besichtigen das Objekt kostenfrei, identifizieren verdaechtige Materialien und sichern bei Bedarf Proben zur Laboranalyse. Erst das Ergebnis bestaetigt, ob und in welcher Form Asbest vorliegt."
      },
      {
        "titel": "Festpreisangebot und Behoerdenanzeige",
        "text": "Sie erhalten einen transparenten Festpreis. Bei anzeigepflichtigen Arbeiten melden wir die Sanierung objektbezogen bei der zustaendigen Bezirksregierung gemaess TRGS 519 an."
      },
      {
        "titel": "Einrichtung des Schwarzbereichs",
        "text": "Wir richten den Arbeitsbereich mit Schwarz-Weiss-Schleuse und Unterdruckhaltung ein, damit keine Fasern in angrenzende Bereiche gelangen. Das Personal arbeitet mit geeigneter persoenlicher Schutzausruestung."
      },
      {
        "titel": "Demontage und Entsorgung",
        "text": "Die asbesthaltigen Materialien werden emissionsarm demontiert, staubdicht verpackt, gekennzeichnet und als gefaehrlicher Abfall entsorgt. Der Entsorgungsnachweis dokumentiert den Verbleib lueckenlos."
      },
      {
        "titel": "Freimessung und Freigabe",
        "text": "Nach der Feinreinigung erfolgt die Freimessung der Raumluft nach VDI 3492. Erst nach Unterschreitung des Grenzwerts geben wir die Raeume frei und uebergeben die vollstaendige Schlussdokumentation."
      }
    ],
    "faqs": [
      {
        "frage": "Woran erkenne ich, ob in meinem Gebaeude Asbest verbaut ist?",
        "antwort": "Asbest wurde vor allem vor 1993 verwendet, etwa in Faserzement-Dachplatten (Wellplatten), Fassadenverkleidungen, Bodenbelaegen, Fliesenklebern, Spachtelmassen und Rohrisolierungen. Sicherheit gibt nur eine Materialanalyse durch ein Labor - eine Sichtkontrolle allein reicht nicht aus. Wir entnehmen die Proben fachgerecht und ohne unnoetige Faserfreisetzung."
      },
      {
        "frage": "Ist eine Behoerdenanzeige bei jeder Asbestsanierung Pflicht?",
        "antwort": "Die TRGS 519 unterscheidet zwischen Arbeiten geringen Umfangs und umfangreicheren Sanierungen. Letztere sind vor Beginn objektbezogen bei der zustaendigen Bezirksregierung anzuzeigen. Wir pruefen den Einzelfall und uebernehmen die Anzeige fuer Sie."
      },
      {
        "frage": "Was kostet eine Asbestsanierung?",
        "antwort": "Die Kosten haengen von Material, Menge, Zugaenglichkeit und den erforderlichen Schutzmassnahmen ab - etwa ob eine Unterdruckhaltung noetig ist. Eine pauschale Zahl waere unserioes. Wir besichtigen kostenfrei und erstellen anschliessend einen transparenten Festpreis."
      },
      {
        "frage": "Wie lange dauert eine Asbestsanierung?",
        "antwort": "Die Dauer richtet sich nach Umfang und Verfahren. Kleinere Massnahmen sind oft an einem Tag erledigt, groessere Sanierungen mit Schwarzbereich und Freimessung dauern entsprechend laenger. Den voraussichtlichen Zeitrahmen nennen wir im Angebot."
      },
      {
        "frage": "Darf ich Asbest nicht einfach selbst entfernen?",
        "antwort": "Nein. Arbeiten an asbesthaltigen Materialien duerfen nur durch Personen mit Sachkunde nach TRGS 519 ausgefuehrt werden, da unsachgemaesse Demontage gesundheitsgefaehrdende Fasern freisetzt. Asbesta ist Fachbetrieb nach GefStoffV und setzt ausschliesslich sachkundiges Personal ein."
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
    "heroIntro": "Ob ein Bauteil Asbest oder andere Schadstoffe enthaelt, laesst sich nur im Labor zweifelsfrei klaeren. Wir nehmen die Proben fachgerecht und sachkundig und lassen sie in einem akkreditierten Labor auswerten - die Grundlage jeder rechtssicheren Sanierungsentscheidung.",
    "einleitung": [
      "Eine Materialanalyse beantwortet die entscheidende Frage vor jeder Sanierung oder jedem Umbau: Welcher Gefahrstoff steckt im Bauteil und in welcher Konzentration? Mit blossem Auge oder anhand des Baujahrs laesst sich Asbest in Putzen, Klebern, Spachtelmassen oder Bodenbelaegen nicht sicher erkennen. Erst die Analyse einer entnommenen Probe im Labor liefert ein belastbares, gerichtsfestes Ergebnis.",
      "Asbestfasern werden im akkreditierten Labor lichtmikroskopisch und bei Bedarf rasterelektronenmikroskopisch (REM/EDX) nach den Vorgaben der VDI 3866 identifiziert. So lassen sich auch geringe Asbestgehalte in mineralischen Baustoffen nachweisen, etwa in Fliesenklebern, Fugen oder bituminoesen Produkten. Neben Asbest untersuchen wir auf weitere typische Gebaeudeschadstoffe wie kuenstliche Mineralfasern (KMF), PAK in Teerklebern und Parkettklebern, PCB in Fugenmassen sowie Schwermetalle.",
      "Die fachgerechte Probenahme ist dabei genauso wichtig wie die Laboranalyse selbst: Wer falsch oder ungeschuetzt Proben entnimmt, setzt Fasern frei und gefaehrdet sich und andere. Unsere sachkundigen Mitarbeiter (TRGS 519, Anlage 3) entnehmen die Proben unter Staubminderung, dokumentieren jede Entnahmestelle und sorgen fuer eine eindeutige Zuordnung. Auf dieser Basis erhalten Sie eine klare Empfehlung zum weiteren Vorgehen."
    ],
    "leistungsumfang": [
      "Begehung und gezielte Festlegung der zu beprobenden Bauteile (Putze, Kleber, Spachtel, Bodenbelaege, Dichtungen, Dacheindeckungen)",
      "Staubmindernde, dokumentierte Probenahme durch sachkundiges Personal nach TRGS 519",
      "Laboranalyse auf Asbest mittels Lichtmikroskopie und REM/EDX nach VDI 3866",
      "Untersuchung auf weitere Schadstoffe: KMF, PAK, PCB, Schwermetalle (auftragsabhaengig)",
      "Eindeutige Kennzeichnung und Fotodokumentation jeder Entnahmestelle",
      "Schriftlicher Pruefbericht mit Befund und Bewertung der Belastung",
      "Handlungsempfehlung zu Sanierungsbedarf, Dringlichkeit und erforderlichem Schutzniveau"
    ],
    "ablauf": [
      {
        "titel": "Beratung & Festlegung",
        "text": "Wir besprechen Verdacht, Baujahr und geplante Massnahme und legen gemeinsam fest, welche Bauteile beprobt werden muessen. Die Erstbesichtigung ist kostenfrei."
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
        "text": "Sie erhalten einen schriftlichen Pruefbericht. Wir erlaeutern das Ergebnis verstaendlich und geben eine konkrete Empfehlung zum weiteren Vorgehen."
      }
    ],
    "faqs": [
      {
        "frage": "Warum reicht eine Sichtpruefung nicht aus?",
        "antwort": "Asbest ist in vielen Baustoffen wie Fliesenklebern, Spachtelmassen oder Bodenbelaegen optisch nicht erkennbar. Auch das Baujahr ist nur ein Indiz. Nur die Laboranalyse einer Probe liefert einen zweifelsfreien, rechtssicheren Nachweis."
      },
      {
        "frage": "Wie wird Asbest im Labor nachgewiesen?",
        "antwort": "Die Proben werden nach VDI 3866 lichtmikroskopisch und bei Bedarf rasterelektronenmikroskopisch mit EDX untersucht. So lassen sich Asbestfasern eindeutig identifizieren und von anderen Fasern unterscheiden, auch in geringen Gehalten."
      },
      {
        "frage": "Kann ich die Probe nicht selbst entnehmen?",
        "antwort": "Davon raten wir dringend ab. Beim Anbohren oder Abkratzen verdaechtiger Materialien werden Fasern freigesetzt. Die Probenahme sollte staubmindernd und durch sachkundiges Personal nach TRGS 519 erfolgen."
      },
      {
        "frage": "Welche Schadstoffe koennen neben Asbest untersucht werden?",
        "antwort": "Wir lassen je nach Verdacht auch auf kuenstliche Mineralfasern (KMF), PAK in Teer- und Parkettklebern, PCB in Fugenmassen und elastischen Dichtungen sowie auf Schwermetalle untersuchen."
      },
      {
        "frage": "Was kostet eine Materialanalyse?",
        "antwort": "Die Kosten haengen von Anzahl und Art der Proben sowie vom Untersuchungsumfang ab. Nach der kostenfreien Besichtigung erhalten Sie ein transparentes Festpreisangebot - ohne versteckte Posten."
      }
    ]
  },
  "floor-flex-entfernen": {
    "metaTitle": "Floor-Flex entfernen in NRW | Asbesta Fachbetrieb",
    "metaDescription": "Floor-Flex-Platten und schwarzen Bitumenkleber asbestsicher entfernen lassen. Asbesta saniert nach TRGS 519 in ganz NRW. Kostenfreie Besichtigung anfragen.",
    "heroIntro": "Floor-Flex-Platten enthalten in aller Regel fest gebundenen Asbest und duerfen nur von einem Fachbetrieb nach TRGS 519 entfernt werden. Asbesta demontiert Platten und schwarzen Kleber emissionsarm, entsorgt nachweislich und uebergibt eine Schlussdokumentation.",
    "einleitung": [
      "Floor-Flex (auch Vinyl-Asbest- oder PVC-Asbest-Platten genannt) sind quadratische Bodenplatten, meist im Format 25 x 25 cm oder 30 x 30 cm, die von den 1950er bis in die 1980er Jahre millionenfach verlegt wurden. Sie enthalten Chrysotil-Asbest, der in eine PVC-Matrix eingebunden ist, weshalb sie zu den fest gebundenen Asbestprodukten zaehlen. Gefaehrlich ist weniger die intakte Platte selbst, sondern das Aufbrechen, Schleifen oder unsachgemaesse Heraushebeln, weil dabei lungengaengige Asbestfasern freigesetzt werden.",
      "Eine besondere Tuecke liegt unter den Platten: Der zur Verklebung verwendete schwarze Bitumenkleber (sogenannter Schwarzkleber oder Cutback-Kleber) ist haeufig zusaetzlich asbesthaltig und gilt als kritischer als die Platte selbst, da der Asbest hier schwaecher gebunden ist. Eine fachgerechte Sanierung umfasst deshalb immer beide Schichten - Platte und Kleberrueckstand - und nicht nur das Abheben des sichtbaren Belags.",
      "Rechtsgrundlage fuer die Entfernung ist die Technische Regel fuer Gefahrstoffe TRGS 519 in Verbindung mit der Gefahrstoffverordnung. Asbesta arbeitet als zugelassener Fachbetrieb mit sachkundigem Personal nach TRGS 519 Anlage 3, zeigt die Arbeiten vorab bei der zustaendigen Bezirksregierung an und wendet das fuer Floor-Flex passende, emissionsarme Verfahren an. So bleibt die Faserfreisetzung kontrolliert und die gesetzlichen Pflichten werden lueckenlos erfuellt."
    ],
    "leistungsumfang": [
      "Materialpruefung und Verdachtsabklaerung von Platte und schwarzem Kleber, bei Bedarf mit Probenahme und Laboranalyse",
      "Objektbezogene Anzeige der Asbestarbeiten bei der zustaendigen Bezirksregierung nach TRGS 519",
      "Emissionsarmes Abheben der Floor-Flex-Platten ohne Bruch, Schleifen oder Zerkleinern (BT-Verfahren / emissionsarme Verfahren)",
      "Vollstaendige Entfernung des asbesthaltigen schwarzen Bitumen-/Cutback-Klebers vom Estrich",
      "Staubdichte Verpackung und nachweisliche Entsorgung als asbesthaltiger Abfall (AVV 17 06 05) mit Entsorgungsnachweis",
      "Reinigung des Untergrunds und Freimessung der Raumluft nach VDI 3492, sofern erforderlich",
      "Schlussdokumentation inklusive Entsorgungsbelegen zur Vorlage bei Behoerden, Kaeufern oder Verwaltung"
    ],
    "ablauf": [
      {
        "titel": "Besichtigung und Materialklaerung",
        "text": "Wir besichtigen den Bodenbelag kostenfrei vor Ort, beurteilen Platten und Kleber und sichern den Asbestverdacht bei Bedarf durch eine Laboranalyse ab. Auf dieser Basis erstellen wir einen transparenten Festpreis."
      },
      {
        "titel": "Anzeige und Vorbereitung",
        "text": "Vor Beginn zeigen wir die Arbeiten bei der Bezirksregierung an, sperren den Bereich ab und richten den Arbeitsbereich emissionsarm ein. Moebel und angrenzende Bauteile werden geschuetzt."
      },
      {
        "titel": "Plattenentfernung",
        "text": "Die Floor-Flex-Platten werden mit emissionsarmen Verfahren am Stueck abgehoben, statt sie zu brechen oder zu schleifen. So vermeiden wir eine unnoetige Faserfreisetzung."
      },
      {
        "titel": "Klebersanierung",
        "text": "Anschliessend entfernen wir den darunterliegenden asbesthaltigen schwarzen Kleber vollstaendig vom Estrich, da dieser den kritischeren Teil der Belastung darstellt."
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
        "frage": "Ist auch der Kleber unter den Platten gefaehrlich?",
        "antwort": "Ja, haeufig sogar mehr als die Platte. Der schwarze Bitumen- bzw. Cutback-Kleber kann ebenfalls Asbest enthalten, der dort schwaecher gebunden ist. Eine fachgerechte Sanierung entfernt deshalb immer auch den Kleberrueckstand und nicht nur den sichtbaren Belag."
      },
      {
        "frage": "Darf ich Floor-Flex selbst herausreissen?",
        "antwort": "Davon ist dringend abzuraten. Beim Aufbrechen, Schleifen oder Heraushebeln werden Asbestfasern freigesetzt. Die Entfernung asbesthaltiger Bodenbelaege ist nach TRGS 519 sachkundigen Fachbetrieben vorbehalten und muss vorab bei der Bezirksregierung angezeigt werden."
      },
      {
        "frage": "Muss die Entfernung bei einer Behoerde angezeigt werden?",
        "antwort": "Ja. Asbestsanierungsarbeiten sind nach TRGS 519 vor Beginn objektbezogen bei der zustaendigen Bezirksregierung anzuzeigen. Asbesta uebernimmt diese Anzeige fuer Sie und dokumentiert die fachgerechte Entsorgung."
      },
      {
        "frage": "Was kostet die Entfernung von Floor-Flex?",
        "antwort": "Die Kosten haengen von Flaeche, Plattenformat, Kleberart und Zugaenglichkeit ab - insbesondere die Klebersanierung beeinflusst den Aufwand. Nach einer kostenfreien Besichtigung erhalten Sie von uns einen transparenten Festpreis ohne versteckte Posten."
      }
    ]
  },
  "bitumenkleber-entfernen": {
    "metaTitle": "Asbesthaltigen Bitumenkleber entfernen | Asbesta NRW",
    "metaDescription": "Schwarzen Bitumen-/Asbestkleber rueckstandslos & nach TRGS 519 entfernen lassen. Fachbetrieb Asbesta aus Marl, Einsatz in ganz NRW. Kostenfreie Besichtigung.",
    "heroIntro": "Schwarzer Bitumenkleber unter alten Bodenbelaegen enthaelt haeufig Asbest. Wir entfernen ihn rueckstandslos, staubarm und nach TRGS 519 - inklusive Entsorgungsnachweis und Freimessung.",
    "einleitung": [
      "Schwarzer Bitumenkleber - oft als \"Schwarzkleber\" oder \"Klebebitumen\" bezeichnet - wurde bis in die 1990er Jahre zum Verkleben von Bodenbelaegen wie PVC-Platten, Linoleum, Parkett oder Fliesen eingesetzt. Bauteilen dieser Zeit wurde haeufig Asbest beigemischt, um die Klebkraft und Hitzebestaendigkeit zu erhoehen. Auch wenn der eigentliche Belag (z. B. Cushion-Vinyl oder Floor-Flex-Platten) bereits entfernt wurde, bleibt der festhaftende schwarze Kleber als kritische Restschicht auf dem Estrich zuruecks und stellt ein gesundheitliches Risiko dar.",
      "Die Gefahr entsteht, sobald die sproede Kleberschicht mechanisch bearbeitet, abgeschliffen oder abgestemmt wird: Dabei koennen lungengaengige Asbestfasern freigesetzt werden, die als krebserzeugend gelten. Deshalb ist die Entfernung asbesthaltigen Bitumenklebers in Deutschland streng geregelt. Massgeblich ist die TRGS 519, die Sachkunde, Anzeigepflicht und Schutzmassnahmen vorschreibt; ergaenzend gelten die Gefahrstoffverordnung sowie das emissionsarme Verfahren BT 13 der TRGS 519.",
      "Asbesta entfernt asbesthaltigen Bitumenkleber als sachkundiger Fachbetrieb staubarm und rueckstandslos - so, dass der Untergrund anschliessend wieder belegreif ist. Vor Beginn klaeren wir per Materialprobe und Laboranalyse, ob tatsaechlich Asbest enthalten ist, und legen das passende, emissionsarme Verfahren fest."
    ],
    "leistungsumfang": [
      "Materialprobe des schwarzen Klebers und Laboranalyse auf Asbestfasern vor Arbeitsbeginn",
      "Objektbezogene Anzeige der Sanierung bei der zustaendigen Bezirksregierung nach TRGS 519",
      "Staubarme, rueckstandslose Entfernung im emissionsarmen Verfahren (z. B. BT 13) mit Unterdruckhaltung",
      "Schwarz-Weiss-Schleuse, Abschottung der Arbeitsbereiche und persoenliche Schutzausruestung",
      "Belegreife Wiederherstellung des Untergrunds - Estrich frei von Klebe- und Faserrueckstaenden",
      "Fachgerechte Verpackung und Entsorgung als Gefahrstoff mit Entsorgungsnachweis",
      "Abschliessende Freimessung der Raumluft (VDI 3492) und Schlussdokumentation"
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
        "titel": "Abschottung & Schutzmassnahmen",
        "text": "Wir richten den Arbeitsbereich mit Abschottung, Unterdruckhaltung und Schwarz-Weiss-Schleuse ein, damit keine Fasern in angrenzende Bereiche gelangen."
      },
      {
        "titel": "Staubarme Entfernung",
        "text": "Der Bitumenkleber wird im emissionsarmen Verfahren rueckstandslos vom Untergrund geloest, sodass der Estrich anschliessend wieder belegreif ist."
      },
      {
        "titel": "Entsorgung, Freimessung & Dokumentation",
        "text": "Verpackung und Entsorgung als Gefahrstoff mit Nachweis, Freimessung der Raumluft und Uebergabe der Schlussdokumentation."
      }
    ],
    "faqs": [
      {
        "frage": "Woran erkenne ich, ob mein schwarzer Bodenkleber Asbest enthaelt?",
        "antwort": "Optisch laesst sich das nicht sicher feststellen. Sicherheit gibt nur eine Materialprobe mit Laboranalyse. Als Faustregel gilt: Schwarzer Bitumenkleber unter Belaegen, die vor den 1990er Jahren verlegt wurden, ist asbestverdaechtig. Wir nehmen die Probe im Rahmen der Besichtigung."
      },
      {
        "frage": "Muss asbesthaltiger Bitumenkleber zwingend entfernt werden?",
        "antwort": "Solange die Kleberschicht ungestoert und fest gebunden ist, geht von ihr im Ruhezustand kaum Gefahr aus. Sobald jedoch saniert, geschliffen, gefraest oder ein neuer Belag verlegt werden soll, ist eine fachgerechte Entfernung nach TRGS 519 erforderlich, weil dabei Fasern freigesetzt werden koennen."
      },
      {
        "frage": "Wie laeuft die Entfernung staubarm ab?",
        "antwort": "Wir arbeiten im emissionsarmen Verfahren (z. B. BT 13 der TRGS 519) mit Abschottung, Unterdruckhaltung und Schwarz-Weiss-Schleuse. Der Kleber wird so geloest, dass moeglichst wenig Staub entsteht; abschliessend belegen wir mit einer Freimessung, dass die Raumluft unbedenklich ist."
      },
      {
        "frage": "Was kostet das Entfernen von asbesthaltigem Bitumenkleber?",
        "antwort": "Die Kosten haengen von Flaeche, Untergrund, Zugaenglichkeit und Verfahren ab. Eine pauschale Angabe ist serioes nicht moeglich. Nach der kostenfreien Besichtigung erhalten Sie von uns einen transparenten Festpreis ohne versteckte Posten."
      },
      {
        "frage": "Ist der Estrich nach der Entfernung wieder belegreif?",
        "antwort": "Ja. Wir entfernen den Bitumenkleber rueckstandslos, sodass der Untergrund frei von Klebe- und Faserrueckstaenden ist und anschliessend ein neuer Bodenbelag verlegt werden kann."
      }
    ]
  },
  "welleternit-ausbauen": {
    "metaTitle": "Welleternit / Wellasbestplatten ausbauen in NRW | Asbesta",
    "metaDescription": "Wellasbestplatten und Welleternit fachgerecht ausbauen lassen - zertifiziert nach TRGS 519. Asbesta saniert Asbestdaecher in ganz NRW. Festpreis & Entsorgungsnachweis.",
    "heroIntro": "Asbesthaltige Welleternit- und Wellasbestplatten gehoeren zu den haeufigsten Asbestprodukten an Daechern und Fassaden in NRW. Asbesta baut sie emissionsarm nach TRGS 519 aus - mit transparentem Festpreis, ordnungsgemaesser Entsorgung und vollstaendiger Dokumentation.",
    "einleitung": [
      "Welleternit, oft auch als Wellasbest oder Asbestzement-Wellplatte bezeichnet, wurde jahrzehntelang als kostenguenstiges und witterungsbestaendiges Dach- und Fassadenmaterial verbaut. Bis zum Asbestverbot 1993 enthielten diese Faserzementplatten in der Regel Chrysotil (Weissasbest), teils auch Krokydolith. Solange die Platten intakt und fest verbaut sind, gelten sie als schwach gebundenes bis fest gebundenes Material - sobald jedoch Bohren, Saegen, Brechen oder die Verwitterung der Oberflaeche ins Spiel kommt, koennen lungengaengige Asbestfasern freigesetzt werden. Genau deshalb ist der Ausbau eine erlaubnispflichtige Taetigkeit, die nach TRGS 519 ausschliesslich durch sachkundige Fachbetriebe erfolgen darf.",
      "Asbesta ist ein inhabergefuehrter Fachbetrieb fuer Schadstoffsanierung aus Marl und in ganz Nordrhein-Westfalen im Einsatz. Unsere Mitarbeiter sind nach TRGS 519 Anlage 3 sachkundig geschult, stehen unter arbeitsmedizinischer Vorsorge und arbeiten mit der erforderlichen persoenlichen Schutzausruestung. Wir bauen Wellasbestplatten moeglichst zerstoerungsfrei und ohne hohe Kraefte aus, um die Faserfreisetzung von vornherein zu minimieren. Bei Bedarf werden die Platten vorab mit einem Restfaserbindemittel behandelt.",
      "Mit ueber 1.000 abgeschlossenen Projekten und mehr als 15 Jahren Erfahrung bieten wir Ihnen den kompletten Ablauf aus einer Hand: kostenfreie Besichtigung vor Ort, transparenter Festpreis, der fachgerechte Ausbau, die zugelassene Entsorgung mit Entsorgungsnachweis sowie die Schlussdokumentation. So haben Sie als Eigentuemer, Hausverwaltung oder Gewerbebetrieb von Anfang an Rechtssicherheit und einen festen Ansprechpartner."
    ],
    "leistungsumfang": [
      "Emissionsarmer Ausbau asbesthaltiger Welleternit- und Wellasbestplatten von Daechern, Carports, Schuppen, Hallen und Fassaden",
      "Demontage nach TRGS 519 - zerstoerungsfreies Loesen der Befestigungen statt Brechen, bei Bedarf Vorbehandlung mit faserbindendem Mittel",
      "Sichere Verpackung in staubdichten, gekennzeichneten Big Bags bzw. reissfester Folie und kontrollierter Abtransport",
      "Bereitstellung der persoenlichen Schutzausruestung (PSA) und Atemschutz fuer das gesamte Team",
      "Ordnungsgemaesse Entsorgung ueber zugelassene Annahmestellen inklusive Entsorgungsnachweis",
      "Bei Faserfreisetzung im Innenbereich: Schwarz-Weiss-Schleuse und Unterdruckhaltung",
      "Schlussdokumentation und auf Wunsch Freimessung zur Bestaetigung der Faserfreiheit"
    ],
    "ablauf": [
      {
        "titel": "Kostenfreie Besichtigung und Festpreisangebot",
        "text": "Wir begutachten Dachflaeche, Plattenzustand und Zugaenglichkeit vor Ort, klaeren den Materialverdacht und erstellen Ihnen ein verbindliches Festpreisangebot. Dabei legen wir auch die Arbeitsschutzmassnahmen und die erforderliche Anzeige der Taetigkeit bei der zustaendigen Behoerde fest."
      },
      {
        "titel": "Vorbereitung und Arbeitsschutz",
        "text": "Vor Arbeitsbeginn richten wir den Arbeitsbereich ein, sichern Verkehrswege und stellen die PSA inklusive Atemschutz bereit. Bei staerker verwitterten Platten werden die Oberflaechen mit einem Restfaserbindemittel behandelt, um aufgewirbelte Fasern zu binden."
      },
      {
        "titel": "Emissionsarmer Ausbau der Platten",
        "text": "Die Wellplatten werden moeglichst zerstoerungsfrei demontiert: Befestigungen werden geloest statt durchtrennt, die Platten nicht geworfen oder gebrochen. So halten wir die Faserfreisetzung gemaess TRGS 519 so gering wie moeglich."
      },
      {
        "titel": "Verpackung, Abtransport und Entsorgung",
        "text": "Die ausgebauten Platten werden staubdicht verpackt, als gefaehrlicher Abfall gekennzeichnet und ueber zugelassene Entsorgungsanlagen entsorgt. Sie erhalten den vollstaendigen Entsorgungsnachweis fuer Ihre Unterlagen."
      },
      {
        "titel": "Endkontrolle und Dokumentation",
        "text": "Zum Abschluss reinigen wir den Arbeitsbereich, fuehren bei Innenarbeiten eine Freimessung durch und uebergeben Ihnen die Schlussdokumentation der durchgefuehrten Sanierung."
      }
    ],
    "faqs": [
      {
        "frage": "Woran erkenne ich, ob meine Wellplatten Asbest enthalten?",
        "antwort": "Welleternit, der vor 1993 verbaut wurde, enthaelt mit hoher Wahrscheinlichkeit Asbest. Sicherheit gibt nur eine Materialprobe und Laboranalyse. Auf der Plattenunterseite finden sich teils Herstellerstempel mit Datumsangabe. Sprechen Sie uns an - wir beurteilen den Verdacht bei der Besichtigung und veranlassen bei Bedarf eine Probennahme."
      },
      {
        "frage": "Darf ich Wellasbestplatten selbst abbauen?",
        "antwort": "Nein. Der Ausbau asbesthaltiger Platten ist eine nach TRGS 519 erlaubnispflichtige Taetigkeit und darf nur von sachkundigen Fachbetrieben durchgefuehrt werden. Eigenleistung ohne Sachkunde ist nicht zulaessig und gefaehrdet Ihre Gesundheit sowie die der Nachbarschaft."
      },
      {
        "frage": "Was passiert mit den ausgebauten Platten?",
        "antwort": "Asbesthaltige Wellplatten gelten als gefaehrlicher Abfall. Wir verpacken sie staubdicht, kennzeichnen sie vorschriftsmaessig und entsorgen sie ueber zugelassene Annahmestellen. Den Entsorgungsnachweis erhalten Sie als Bestaetigung der ordnungsgemaessen Entsorgung."
      },
      {
        "frage": "Muss der Ausbau bei einer Behoerde angezeigt werden?",
        "antwort": "Ja, asbestsanierende Taetigkeiten sind vor Beginn bei der zustaendigen Arbeitsschutzbehoerde anzuzeigen. Diese Anzeige uebernehmen wir als Fachbetrieb fuer Sie, sodass alle formalen Anforderungen erfuellt sind."
      },
      {
        "frage": "In welchem Gebiet ist Asbesta taetig?",
        "antwort": "Wir sind von unserem Standort in Marl aus in ganz Nordrhein-Westfalen im Einsatz - vom Ruhrgebiet ueber das Muensterland bis ins Rheinland. Eine erste Besichtigung vor Ort ist fuer Sie kostenfrei."
      }
    ]
  },
  "fassadenplatten-ausbauen": {
    "metaTitle": "Fassadenplatten ausbauen (Asbest) | Asbesta NRW",
    "metaDescription": "Asbesthaltige Fassadenplatten ausbauen lassen in ganz NRW: Fachbetrieb nach TRGS 519, emissionsarme Demontage, Entsorgungsnachweis. Jetzt kostenfrei besichtigen lassen.",
    "heroIntro": "Wir bauen asbesthaltige Fassadenplatten in ganz NRW staubarm, vorschriftskonform nach TRGS 519 und mit lueckenlosem Entsorgungsnachweis aus. Kostenfreie Besichtigung und transparenter Festpreis inklusive.",
    "einleitung": [
      "Asbestzement-Fassadenplatten - oft unter dem Markennamen Eternit bekannt - wurden bis 1993 millionenfach an Aussenwaenden, Giebeln und vorgehaengten Fassaden verbaut. Sie bestehen aus einem Zement-Gemisch mit eingebundenen Asbestfasern (in der Regel fest gebundener Asbest) und gelten optisch als unscheinbare graue oder farbig beschichtete Platten. Solange sie unbeschaedigt sind, geben sie kaum Fasern ab - beim Ausbau, Brechen, Bohren oder durch jahrzehntelange Verwitterung werden jedoch lungengaengige Fasern frei, die nachweislich Krebs ausloesen koennen.",
      "Genau deshalb ist die Demontage keine gewoehnliche Abbrucharbeit, sondern eine anzeigepflichtige Asbestsanierung. Maßgeblich ist die TRGS 519 (Asbest - Abbruch-, Sanierungs- oder Instandhaltungsarbeiten); ergaenzend gelten die Gefahrstoffverordnung und die LV 19/Asbest-Richtlinie. Wir fuehren die Arbeiten ausschliesslich mit sachkundigem Personal nach TRGS 519 Anlage 3 durch und zeigen das Vorhaben vor Beginn bei der zustaendigen Bezirksregierung an.",
      "Als inhabergefuehrter Fachbetrieb aus Marl mit ueber 1.000 abgeschlossenen Projekten planen wir jeden Fassadenausbau objektbezogen: emissionsarme, moeglichst zerstoerungsfreie Demontage der ganzen Platten, gesicherte Verpackung in zugelassene Big Bags und ordnungsgemaesse Entsorgung als gefaehrlicher Abfall. So bleibt Ihre Baustelle sicher - fuer Bewohner, Nachbarn und unsere Mitarbeiter."
    ],
    "leistungsumfang": [
      "Begutachtung der Fassade und Materialansprache (Verdacht auf Asbestzement), bei Bedarf Probenahme und Laboranalyse",
      "Objektbezogene Anzeige der Asbestarbeiten bei der zustaendigen Bezirksregierung in NRW",
      "Emissionsarme, weitgehend zerstoerungsfreie Demontage der Fassadenplatten samt Befestigungsmitteln (Naegel, Krallen, Schrauben)",
      "Staubbindung durch Anfeuchten/Vorbehandlung sowie Einsatz faserbindender Verfahren statt Brechen oder Flexen",
      "Sofortige, dichte Verpackung in gekennzeichnete Big Bags bzw. zugelassene Asbestgebinde",
      "Entsorgung als gefaehrlicher Abfall (AVV 17 06 05*) ueber zugelassene Deponien inklusive Entsorgungsnachweis",
      "Reinigung des Arbeitsbereichs, Abschlusskontrolle und Schlussdokumentation der Sanierung"
    ],
    "ablauf": [
      {
        "titel": "Besichtigung & Materialklaerung",
        "text": "Wir besichtigen die Fassade kostenfrei vor Ort, beurteilen Plattenart, Befestigung und Zustand und klaeren bei Unsicherheit per Materialprobe und Laboranalyse, ob tatsaechlich Asbest vorliegt. Auf dieser Basis erhalten Sie einen transparenten Festpreis."
      },
      {
        "titel": "Anzeige & Vorbereitung",
        "text": "Vor Arbeitsbeginn zeigen wir das Vorhaben bei der Bezirksregierung an und richten den Arbeitsbereich ein. Geruest, Absperrung und Staubschutz werden so geplant, dass keine Fasern in die Umgebung gelangen."
      },
      {
        "titel": "Emissionsarme Demontage",
        "text": "Die Platten werden angefeuchtet und moeglichst ganz, ohne Brechen oder Flexen, von der Unterkonstruktion geloest. Diese zerstoerungsfreie Arbeitsweise nach TRGS 519 haelt die Faserfreisetzung minimal."
      },
      {
        "titel": "Verpackung & Entsorgung",
        "text": "Die ausgebauten Platten werden sofort staubdicht in gekennzeichnete Big Bags verpackt und als gefaehrlicher Abfall ueber zugelassene Deponien entsorgt. Sie erhalten den vollstaendigen Entsorgungsnachweis."
      },
      {
        "titel": "Reinigung & Dokumentation",
        "text": "Zum Abschluss reinigen wir den Bereich, kontrollieren auf Faserrueckstaende und uebergeben Ihnen die Schlussdokumentation - die Grundlage fuer den anschliessenden Aufbau Ihrer neuen Fassade."
      }
    ],
    "faqs": [
      {
        "frage": "Sind alle alten Fassadenplatten asbesthaltig?",
        "antwort": "Nicht zwingend, aber Platten, die vor dem Asbestverbot 1993 verbaut wurden, stehen unter dringendem Verdacht. Sicherheit gibt nur eine Materialprobe mit Laboranalyse. Wir beurteilen das Material bei der Besichtigung und veranlassen bei Bedarf eine Probenahme, bevor gearbeitet wird."
      },
      {
        "frage": "Darf ich asbesthaltige Fassadenplatten selbst abbauen?",
        "antwort": "Nein. Das eigenmaechtige Entfernen ist nach TRGS 519 und Gefahrstoffverordnung nicht zulaessig und gefaehrdet Ihre Gesundheit. Die Demontage ist anzeigepflichtig und darf nur durch sachkundige Fachbetriebe erfolgen - genau das uebernehmen wir fuer Sie."
      },
      {
        "frage": "Was kostet der Ausbau der Fassadenplatten?",
        "antwort": "Der Preis haengt von Flaeche, Plattenart, Befestigung, Geruestbedarf und Entsorgungsmenge ab. Wir besichtigen kostenfrei und nennen Ihnen danach einen transparenten Festpreis ohne versteckte Kosten - inklusive Entsorgung und Dokumentation."
      },
      {
        "frage": "Wie wird verhindert, dass Fasern in die Nachbarschaft gelangen?",
        "antwort": "Wir arbeiten emissionsarm: Die Platten werden angefeuchtet, moeglichst ganz und ohne Brechen demontiert und sofort dicht verpackt. Der Arbeitsbereich wird abgesichert; bei Bedarf ergaenzen wir weitere Staubschutzmassnahmen, sodass die Faserfreisetzung minimal bleibt."
      },
      {
        "frage": "Erhalte ich einen Nachweis ueber die Entsorgung?",
        "antwort": "Ja. Asbestzementplatten gelten als gefaehrlicher Abfall (AVV 17 06 05*) und werden ueber zugelassene Deponien entsorgt. Sie bekommen den vollstaendigen Entsorgungsnachweis sowie eine Schlussdokumentation der gesamten Sanierung."
      }
    ]
  },
  "asbestzement-ausbauen": {
    "metaTitle": "Asbestzement ausbauen in NRW | TRGS 519 Fachbetrieb Asbesta",
    "metaDescription": "Asbestzement (Faserzement) fachgerecht ausbauen lassen: zertifizierter Fachbetrieb nach TRGS 519 in ganz NRW. Kostenfreie Besichtigung, Festpreis, Entsorgungsnachweis. Jetzt anfragen.",
    "heroIntro": "Asbestzement-Bauteile sicher und gesetzeskonform demontieren - durch den zertifizierten Fachbetrieb Asbesta nach TRGS 519, in ganz NRW.",
    "einleitung": [
      "Asbestzement, auch als Faserzement bekannt, wurde jahrzehntelang in unzaehligen Bauteilen verarbeitet: Dach- und Fassadenplatten (Welleternit), Blumenkaesten, Lueftungskanaele, Wasserrohre, Fensterbaenke und Zwischenwaende. Solange das Material unbeschaedigt verbaut ist, bleiben die Asbestfasern weitgehend gebunden. Sobald Asbestzement jedoch bohrt, brechen, saegen oder verwittern Sie es, koennen lungengaengige Fasern freigesetzt werden - mit erheblichem Gesundheitsrisiko. Aus diesem Grund darf der Ausbau ausschliesslich durch einen sachkundigen Fachbetrieb erfolgen.",
      "Als inhabergefuehrter Fachbetrieb fuer Schadstoffsanierung uebernimmt Asbesta die Demontage von Asbestzement-Bauteilen aller Art. Unsere Arbeiten richten sich konsequent nach der TRGS 519 (Asbest - Abbruch-, Sanierungs- oder Instandhaltungsarbeiten) sowie den Vorgaben der Gefahrstoffverordnung. Unsere Mitarbeiter sind sachkundig nach TRGS 519 Anlage 3 und werden arbeitsmedizinisch betreut. So gewaehrleisten wir, dass der Ausbau emissionsarm, dokumentiert und rechtssicher abgewickelt wird.",
      "Mit ueber 1.000 abgeschlossenen Projekten und mehr als 15 Jahren Erfahrung sind wir Ihr zuverlaessiger Partner in ganz Nordrhein-Westfalen. Von der kostenfreien Besichtigung ueber den transparenten Festpreis bis zur Freimessung und Schlussdokumentation begleiten wir Ihr Vorhaben aus einer Hand - inklusive ordnungsgemaesser Entsorgung mit Entsorgungsnachweis und voller Betriebshaftpflicht."
    ],
    "leistungsumfang": [
      "Demontage von Asbestzement-Dachplatten und Wellplatten (Welleternit) inklusive Befestigungsmaterial",
      "Ausbau von Asbestzement-Fassadenplatten, Verkleidungen und Bruestungselementen",
      "Rueckbau von Faserzement-Bauteilen wie Blumenkaesten, Fensterbaenken, Lueftungs- und Abwasserrohren",
      "Emissionsarme Demontage nach TRGS 519 - Vermeidung von Bruch, kein Saegen oder Schleifen am verbauten Material",
      "Staubbindung, sichere Verpackung in zugelassenen Big Bags bzw. Gewebesaecken und Kennzeichnung der Abfaelle",
      "Ordnungsgemaesse Entsorgung als asbesthaltiger Abfall mit luecklenlosem Entsorgungsnachweis",
      "Bei Faserfreisetzung: Schwarz-Weiss-Schleuse, Unterdruckhaltung und abschliessende Freimessung"
    ],
    "ablauf": [
      {
        "titel": "Kostenfreie Besichtigung und Festpreisangebot",
        "text": "Wir begutachten die Asbestzement-Bauteile vor Ort, klaeren Umfang, Zugaenglichkeit und moegliche Faserfreisetzung und beraten Sie zum weiteren Vorgehen. Anschliessend erhalten Sie ein transparentes Angebot zum Festpreis - ohne versteckte Kosten."
      },
      {
        "titel": "Anzeige und Vorbereitung der Arbeiten",
        "text": "Wir uebernehmen die nach TRGS 519 erforderliche Anzeige bei der zustaendigen Behoerde und Berufsgenossenschaft. Der Arbeitsbereich wird abgegrenzt und gesichert; bei Bedarf richten wir eine Schwarz-Weiss-Schleuse und Unterdruckhaltung ein."
      },
      {
        "titel": "Emissionsarme Demontage",
        "text": "Die Asbestzement-Bauteile werden zerstoerungsarm geloest, um die Faserbindung zu erhalten. Wir verzichten auf staubintensive Verfahren wie Saegen oder Schleifen, binden anfallenden Staub und arbeiten mit persoenlicher Schutzausruestung."
      },
      {
        "titel": "Verpackung und ordnungsgemaesse Entsorgung",
        "text": "Das Material wird staubdicht verpackt, gekennzeichnet und als asbesthaltiger Abfall zu einer zugelassenen Deponie verbracht. Sie erhalten den vollstaendigen Entsorgungsnachweis fuer Ihre Unterlagen."
      },
      {
        "titel": "Freimessung und Schlussdokumentation",
        "text": "Sofern eine Faserfreisetzung moeglich war, erfolgt eine Freimessung des Arbeitsbereichs. Zum Abschluss erhalten Sie eine nachvollziehbare Schlussdokumentation der durchgefuehrten Arbeiten."
      }
    ],
    "faqs": [
      {
        "frage": "Darf ich Asbestzement selbst ausbauen?",
        "antwort": "Fuer Privatpersonen ist der Eigenausbau rechtlich stark eingeschraenkt und mit erheblichen Gesundheitsrisiken verbunden. Sobald Fasern freigesetzt werden koennen, schreibt die TRGS 519 sachkundiges Personal und definierte Schutzmassnahmen vor. Im gewerblichen Bereich ist die Beauftragung eines Fachbetriebs grundsaetzlich erforderlich. Wir uebernehmen den Ausbau rechtssicher fuer Sie."
      },
      {
        "frage": "Wie erkenne ich, ob mein Bauteil aus Asbestzement besteht?",
        "antwort": "Faserzement wurde bis Anfang der 1990er-Jahre haeufig mit Asbest hergestellt - typisch sind graue Wellplatten, Fassadenplatten oder Rohre. Eine sichere Aussage liefert nur eine Materialprobe und Laboranalyse. Wir beraten Sie bei der Besichtigung und veranlassen bei Bedarf eine Beprobung."
      },
      {
        "frage": "Nach welcher Vorschrift arbeiten Sie beim Ausbau von Asbestzement?",
        "antwort": "Asbestarbeiten richten sich nach der TRGS 519 (Asbest - Abbruch-, Sanierungs- oder Instandhaltungsarbeiten) sowie der Gefahrstoffverordnung. Asbesta ist hierfuer zertifiziert, unsere Mitarbeiter sind sachkundig nach TRGS 519 Anlage 3 und arbeitsmedizinisch betreut."
      },
      {
        "frage": "Wie wird der Asbestzement nach dem Ausbau entsorgt?",
        "antwort": "Asbestzement gilt als gefaehrlicher Abfall. Wir verpacken das Material staubdicht, kennzeichnen es vorschriftsmaessig und verbringen es zu einer zugelassenen Deponie. Sie erhalten einen luecklenlosen Entsorgungsnachweis."
      },
      {
        "frage": "Was kostet der Ausbau von Asbestzement?",
        "antwort": "Die Kosten haengen von Menge, Bauteilart, Zugaenglichkeit und den erforderlichen Schutzmassnahmen ab. Deshalb besichtigen wir kostenfrei vor Ort und erstellen Ihnen anschliessend ein verbindliches Festpreisangebot ohne versteckte Zusatzkosten."
      }
    ]
  },
  "fensterbaenke-ausbauen": {
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
    "metaDescription": "CV-Belaege mit asbesthaltiger Traegerpappe fachgerecht entfernen nach TRGS 519. Asbesta saniert in ganz NRW: Beprobung, Unterdruck, Freimessung, Nachweis.",
    "heroIntro": "Cushion-Vinyl-Belaege (CV-Belaege) aus den 1960er- bis 1980er-Jahren tragen haeufig eine asbesthaltige Traegerpappe auf der Unterseite. Wir entfernen diese Bodenbelaege staubdicht und rechtssicher nach TRGS 519 in ganz NRW.",
    "einleitung": [
      "Cushion-Vinyl (kurz CV) ist ein mehrschichtiger, geschaeumter Bodenbelag, der zwischen etwa 1960 und 1985 sehr verbreitet war - vor allem in Kuechen, Baedern und Fluren. Das Tueckische liegt nicht im sichtbaren Vinyl, sondern in der Unterseite: Viele dieser Belaege wurden auf eine Traegerpappe aus Asbest (sogenannte Asbestpappe) kaschiert. Diese Pappe enthaelt schwach gebundene Asbestfasern und ist damit deutlich gefaehrlicher einzustufen als fest gebundene Produkte wie Vinyl-Asbest-Platten (Floor-Flex).",
      "Schwach gebundener Asbest kann beim Reissen, Schleifen oder trockenen Abloesen des Belags Fasern in grosser Zahl freisetzen. Genau deshalb unterliegt die Entfernung von CV-Belaegen den strengen Anforderungen der TRGS 519 und der Gefahrstoffverordnung. Eine Demontage durch Laien oder unqualifizierte Handwerker ist nicht nur verboten, sondern ein erhebliches Gesundheitsrisiko - eingeatmete Asbestfasern koennen Jahrzehnte spaeter Asbestose, Lungen- und Rippenfellkrebs ausloesen.",
      "Asbesta ist als Fachbetrieb nach GefStoffV mit Sachkundenachweis (TRGS 519, Anlage 3) auf genau diese Faelle spezialisiert. Wir klaeren zunaechst per Materialprobe, ob und welcher Asbest vorliegt, planen die Sanierung objektbezogen und entfernen den Belag samt Pappe und Kleberruecksstaenden kontrolliert - mit Unterdruckhaltung, persoenlicher Schutzausruestung und anschliessender Freimessung. So uebergeben wir Ihnen eine nachweislich faserfreie Flaeche."
    ],
    "leistungsumfang": [
      "Identifikation des Belags und Probenahme der Traegerpappe mit Laboranalyse (Faserart, Bindung)",
      "Objektbezogene Anzeige der Asbestarbeiten bei der zustaendigen Bezirksregierung",
      "Einrichtung des Schwarz-Weiss-Bereichs mit Personen- und Materialschleuse sowie Unterdruckhaltung",
      "Staubarme, moeglichst zerstoerungsfreie Abnahme des CV-Belags samt asbesthaltiger Traegerpappe",
      "Entfernung von Kleberresten und Pappruecksstaenden vom Untergrund (z. B. Estrich)",
      "Verpackung, deklarierte Entsorgung als gefaehrlicher Abfall und lueckenloser Entsorgungsnachweis",
      "Abschluss-Freimessung der Raumluft nach VDI 3492 und Schlussdokumentation"
    ],
    "ablauf": [
      {
        "titel": "Besichtigung und Beprobung",
        "text": "Wir besichtigen die Flaeche kostenfrei und entnehmen eine Materialprobe der Belagsunterseite. Erst die Laboranalyse zeigt sicher, ob die Traegerpappe Asbest enthaelt und wie das Vorgehen gewaehlt werden muss."
      },
      {
        "titel": "Festpreis und behoerdliche Anzeige",
        "text": "Auf Basis des Befunds erhalten Sie einen transparenten Festpreis. Vor Arbeitsbeginn zeigen wir die Asbestsanierung objektbezogen bei der Bezirksregierung an, wie es TRGS 519 vorschreibt."
      },
      {
        "titel": "Abschottung und Unterdruck",
        "text": "Der Arbeitsbereich wird staubdicht abgeschottet und in Unterdruck gehalten. Personen- und Materialschleuse verhindern, dass Fasern in angrenzende Bereiche gelangen."
      },
      {
        "titel": "Kontrollierte Entfernung",
        "text": "Belag und Asbestpappe werden faserarm abgenommen, anhaftende Kleber- und Papprueckstaende entfernt und alles direkt staubdicht verpackt. Trockenes Reissen oder Schleifen wird vermieden."
      },
      {
        "titel": "Freimessung und Uebergabe",
        "text": "Nach Feinreinigung messen wir die Raumluft nach VDI 3492 frei. Sie erhalten Entsorgungsnachweis und Schlussdokumentation - die Flaeche ist danach nachweislich saniert."
      }
    ],
    "faqs": [
      {
        "frage": "Woran erkenne ich, ob mein alter Bodenbelag ein asbesthaltiger CV-Belag ist?",
        "antwort": "Sicher erkennbar ist das nur im Labor. CV-Belaege aus der Zeit vor etwa 1985 haben oft eine graue bis hellbraune, pappartige Unterseite - das ist der Verdacht auf Asbestpappe. Eine Sichtpruefung reicht nicht aus, daher entnehmen wir eine Probe und lassen die Faserart analysieren, bevor gearbeitet wird."
      },
      {
        "frage": "Worin unterscheidet sich ein CV-Belag von Floor-Flex-Platten?",
        "antwort": "Floor-Flex sind feste PVC-Vinyl-Platten mit fest gebundenem Asbest. CV-Belaege sind flexible, geschaeumte Bahnenbelaege mit einer schwach gebundenen Asbestpappe als Traeger. Schwach gebundener Asbest setzt leichter Fasern frei und gilt als gefaehrlicher - die Schutzmassnahmen nach TRGS 519 sind entsprechend strenger."
      },
      {
        "frage": "Darf ich einen CV-Belag selbst herausreissen?",
        "antwort": "Nein. Enthaelt die Traegerpappe Asbest, ist das Entfernen durch Privatpersonen oder nicht sachkundige Betriebe untersagt. Die Arbeiten duerfen nur von einem Fachbetrieb nach GefStoffV mit Sachkundenachweis (TRGS 519) ausgefuehrt werden, inklusive Anzeige bei der Behoerde."
      },
      {
        "frage": "Was kostet die Entfernung eines CV-Belags?",
        "antwort": "Das haengt von Flaeche, Untergrund, Klebersituation und Zugaenglichkeit ab. Nach der kostenfreien Besichtigung und der Laborprobe nennen wir Ihnen einen transparenten Festpreis ohne erfundene Pauschalen. Erfundene Preise vorab waeren unserioes, da der Befund das Vorgehen bestimmt."
      },
      {
        "frage": "Wie wird der entfernte Belag entsorgt?",
        "antwort": "Asbesthaltige Belaege und Pappen sind gefaehrlicher Abfall. Wir verpacken sie staubdicht, deklarieren sie vorschriftsmaessig und entsorgen sie ueber zugelassene Annahmestellen. Sie erhalten einen lueckenlosen Entsorgungsnachweis als Teil der Schlussdokumentation."
      }
    ]
  },
  "kmf-sanierung": {
    "metaTitle": "KMF-Sanierung nach TRGS 521 in NRW | Asbesta",
    "metaDescription": "Alte Mineralwolle (Glas- und Steinwolle) fachgerecht ausbauen und entsorgen nach TRGS 521. Asbesta saniert KMF in ganz NRW mit Festpreis, Staubschutz und Entsorgungsnachweis.",
    "heroIntro": "Alte Glas- und Steinwolle vor 1996 gilt als krebsverdaechtig und darf nur staubarm und fachgerecht ausgebaut werden. Asbesta saniert kuenstliche Mineralfasern (KMF) in ganz NRW nach TRGS 521 - mit Staubschutz, sachkundigem Personal und lueckenlosem Entsorgungsnachweis.",
    "einleitung": [
      "Kuenstliche Mineralfasern (KMF) sind Daemmstoffe aus Glaswolle, Steinwolle oder Schlackenwolle, die jahrzehntelang zur Waerme- und Schalldaemmung verbaut wurden - in Dachschraegen, Zwischendecken, Trockenbauwaenden, Rohrleitungen, hinter Heizkoerpern und in technischen Anlagen. Entscheidend fuer die Gefaehrdungsbeurteilung ist das Alter: Mineralwolle, die vor 1996 hergestellt wurde, enthaelt haeufig sogenannte 'alte' Fasern, die wegen ihrer Geometrie und Bestaendigkeit als krebsverdaechtig (Kategorie 1B/2) eingestuft sind. Erst seit Juni 2000 duerfen in Deutschland nur noch biologisch abbaubare, nachweislich unbedenkliche Mineralfasern in den Verkehr gebracht werden, die das RAL-Guetezeichen tragen.",
      "Anders als Asbest faellt KMF nicht unter die TRGS 519, sondern unter die TRGS 521 (Abbruch-, Sanierungs- und Instandhaltungsarbeiten mit alter Mineralwolle). Sie regelt verbindlich, welche Schutzmassnahmen je nach Faserkonzentration, Taetigkeit und Dauer erforderlich sind. Beim Ausbau, Zerreissen oder Zusammendruecken alter Daemmungen werden lungengaengige Fasern freigesetzt, die Haut, Augen und Atemwege reizen und bei krebsverdaechtigen alten Fasern ein langfristiges Gesundheitsrisiko darstellen. Aus diesem Grund sind staubmindernde Verfahren, geeignete Schutzausruestung und eine fachgerechte Entsorgung vorgeschrieben.",
      "Asbesta ist als Fachbetrieb nach Gefahrstoffverordnung zugelassen und setzt sachkundiges Personal nach den Anforderungen der TRGS-Reihe ein. Wir klaeren zunaechst, ob es sich um krebsverdaechtige alte oder um unbedenkliche neuere Mineralwolle handelt, planen die Sanierung objektbezogen und bauen die Daemmung staubarm aus - mit Abschottung, Absaugung und gesicherter Verpackung. So erhalten private Bauherren, Hausverwaltungen, Industrie und oeffentliche Auftraggeber eine saubere, dokumentierte Sanierung mit transparentem Festpreis."
    ],
    "leistungsumfang": [
      "Beurteilung der Mineralwolle nach Einbaujahr und Beschaffenheit, bei Bedarf mit Probenahme und Laboranalyse zur Abgrenzung alter (krebsverdaechtiger) von unbedenklicher KMF",
      "Gefaehrdungsbeurteilung und Festlegung der Schutzmassnahmen nach TRGS 521 je nach Faserfreisetzung und Taetigkeitsdauer",
      "Staubarmer Ausbau von Glas- und Steinwolle aus Daechern, Decken, Trockenbauwaenden, Rohr- und Anlagendaemmungen ohne unnoetiges Aufreissen oder Zerkleinern",
      "Abschottung des Arbeitsbereichs, Staubbindung sowie Absaugung mit geprueften Entstaubern der Staubklasse H",
      "Persoenliche Schutzausruestung (Atemschutz, Schutzanzug) und bei hoeherer Faserfreisetzung Unterdruckhaltung und Schwarz-Weiss-Schleuse",
      "Staubdichte Verpackung in zugelassene Gebinde bzw. Big Bags und ordnungsgemaesse Entsorgung mit Entsorgungsnachweis",
      "Feinreinigung des Bereichs und Schlussdokumentation der Sanierung"
    ],
    "ablauf": [
      {
        "titel": "Besichtigung und Einstufung der Mineralwolle",
        "text": "Wir besichtigen das Objekt kostenfrei, beurteilen die Daemmung nach Einbaujahr, Zustand und Beschaffenheit und klaeren, ob krebsverdaechtige alte Mineralwolle vorliegt. Bei Unsicherheit sichern wir eine Probe zur Laboranalyse. Auf dieser Basis erhalten Sie einen transparenten Festpreis."
      },
      {
        "titel": "Gefaehrdungsbeurteilung und Vorbereitung",
        "text": "Nach TRGS 521 legen wir die erforderlichen Schutzmassnahmen fest, schotten den Arbeitsbereich ab und bereiten Staubbindung sowie Absaugung vor. Bei hoher Faserfreisetzung richten wir Unterdruckhaltung und Schwarz-Weiss-Schleuse ein."
      },
      {
        "titel": "Staubarmer Ausbau",
        "text": "Die Mineralwolle wird moeglichst zusammenhaengend entnommen statt zerrissen, direkt am Entstehungsort mit H-Klasse-Geraeten abgesaugt und unmittelbar verpackt. So bleibt die Faserfreisetzung gering. Unser Personal arbeitet mit geeignetem Atemschutz und Schutzanzug."
      },
      {
        "titel": "Verpackung und Entsorgung",
        "text": "Das Material wird staubdicht in zugelassene Gebinde oder Big Bags verpackt, gekennzeichnet und ueber zugelassene Entsorgungswege abgefuehrt. Sie erhalten den vollstaendigen Entsorgungsnachweis."
      },
      {
        "titel": "Feinreinigung und Dokumentation",
        "text": "Zum Abschluss reinigen wir den Bereich, kontrollieren auf Faserrueckstaende und uebergeben Ihnen die Schlussdokumentation - die Grundlage fuer den anschliessenden Aufbau Ihrer neuen Daemmung."
      }
    ],
    "faqs": [
      {
        "frage": "Ist jede Glas- und Steinwolle gesundheitsgefaehrdend?",
        "antwort": "Entscheidend ist das Herstellungsjahr. Mineralwolle, die vor 1996 produziert wurde, gilt als krebsverdaechtig und sollte fachgerecht ausgebaut werden. Seit Juni 2000 duerfen in Deutschland nur noch biologisch abbaubare, als unbedenklich eingestufte Fasern verkauft werden, die das RAL-Guetezeichen tragen. Bei Unsicherheit klaeren wir die Einstufung durch eine Materialbeurteilung, bei Bedarf mit Laboranalyse."
      },
      {
        "frage": "Worin unterscheidet sich die KMF-Sanierung von einer Asbestsanierung?",
        "antwort": "Asbest faellt unter die TRGS 519 mit strenger Anzeigepflicht. Alte kuenstliche Mineralfasern werden dagegen nach der TRGS 521 saniert. Beide Faserarten reizen die Atemwege und gelten als krebsverdaechtig, die rechtlichen Anforderungen und Schutzmassnahmen unterscheiden sich jedoch. Wir wenden je nach Material die passende Technische Regel an."
      },
      {
        "frage": "Welche Beschwerden koennen alte Mineralfasern ausloesen?",
        "antwort": "Kurzfristig reizen die Fasern Haut, Augen und obere Atemwege und koennen Juckreiz und Husten verursachen. Bei den krebsverdaechtigen alten Fasern besteht zudem ein langfristiges Gesundheitsrisiko durch das Einatmen lungengaengiger Fasern. Deshalb sind staubarme Verfahren und geeigneter Atemschutz beim Ausbau wichtig."
      },
      {
        "frage": "Kann ich alte Daemmwolle nicht selbst entfernen?",
        "antwort": "Davon raten wir ab. Beim Herausreissen und Zusammendruecken alter Mineralwolle werden grosse Mengen Fasern freigesetzt. Die TRGS 521 schreibt fuer solche Arbeiten Schutzmassnahmen, geeignete Absaugung und Schutzausruestung vor. Als Fachbetrieb fuehren wir den Ausbau staubarm und fachgerecht aus und sorgen fuer die ordnungsgemaesse Entsorgung."
      },
      {
        "frage": "Was kostet eine KMF-Sanierung?",
        "antwort": "Die Kosten haengen von Menge, Einbausituation, Zugaenglichkeit und den erforderlichen Schutzmassnahmen ab. Eine pauschale Angabe waere unserioes. Nach der kostenfreien Besichtigung erhalten Sie von uns einen transparenten Festpreis ohne versteckte Posten - inklusive Entsorgung und Dokumentation."
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
    "heroIntro": "Mit der Raumluftmessung nach VDI 3492 weisen wir nach, ob in der Innenraumluft anorganische Faserstaeube - insbesondere Asbestfasern - vorhanden sind. So belegen wir messtechnisch, dass ein Raum nach einer Sanierung wieder gefahrlos genutzt werden kann.",
    "einleitung": [
      "Die VDI-Richtlinie 3492 beschreibt das anerkannte Verfahren zur Messung der Konzentration anorganischer Fasern - vor allem Asbest - in der Innenraumluft. Dabei wird ueber mehrere Stunden ein definiertes Luftvolumen ueber einen Goldbedampften Filter gesaugt; die abgeschiedenen Fasern werden anschliessend im Rasterelektronenmikroskop (REM) ausgezaehlt und nach Laenge, Durchmesser und Materialart bewertet. Anders als eine reine Materialprobe zeigt die Luftmessung, ob tatsaechlich Fasern frei in der Atemluft schweben - also ob eine akute Gefaehrdung der Nutzer besteht.",
      "Die Messung ist immer dann erforderlich, wenn nach Arbeiten an asbesthaltigen Materialien die Faserfreiheit eines Raumes belegt werden muss (Freimessung) oder wenn der Verdacht auf eine bestehende Belastung durch beschaedigte Asbestprodukte besteht. Rechtlicher Rahmen sind die Gefahrstoffverordnung und die TRGS 519, die fuer Asbestsanierungen eine Erfolgskontrolle vorschreiben. Erst eine Faserkonzentration unterhalb des Freimesswertes erlaubt die Aufhebung der Schutzmassnahmen und die Wiedernutzung der Raeume.",
      "Asbesta organisiert die Probenahme vor Ort und die Auswertung in einem akkreditierten Labor. Wir dokumentieren Messpunkte, Probenahmebedingungen und Ergebnisse nachvollziehbar und ordnen die Werte fuer Sie fachlich ein - ob als unabhaengige Bestandsaufnahme oder als abschliessende Freimessung im Rahmen einer Sanierung in ganz NRW."
    ],
    "leistungsumfang": [
      "Probenahme der Innenraumluft nach VDI 3492 mit kalibrierten Pumpen und Goldbeschichteten Filtermembranen",
      "Festlegung repraesentativer Messpunkte und Dokumentation der Probenahmebedingungen (Temperatur, Luftbewegung, Raumnutzung)",
      "Auswertung im Rasterelektronenmikroskop (REM) durch ein akkreditiertes Labor mit Faserdifferenzierung nach Materialart",
      "Freimessung als Erfolgskontrolle nach Asbestsanierungen gemaess TRGS 519",
      "Aufwirbelversuch bei Bedarf zur realitaetsnahen Beurteilung der Faserfreisetzung",
      "Fachliche Bewertung der Messergebnisse im Verhaeltnis zum Freimesswert",
      "Pruefberichte und Schlussdokumentation als Nachweis fuer Behoerden, Eigentuemer und Nutzer"
    ],
    "ablauf": [
      {
        "titel": "Beratung und Messkonzept",
        "text": "Bei der kostenfreien Besichtigung klaeren wir Anlass, Raumsituation und Zielsetzung. Wir legen Anzahl und Lage der Messpunkte sowie das geeignete Verfahren (Freimessung oder Bestandsmessung) fest."
      },
      {
        "titel": "Probenahme nach VDI 3492",
        "text": "Mit kalibrierten Pumpen saugen wir ein definiertes Luftvolumen ueber die Filtermembranen. Bei Freimessungen erfolgt dies unter standardisierten, leicht aufgewirbelten Raumbedingungen, um eine sichere Aussage zu erhalten."
      },
      {
        "titel": "Laboranalyse im REM",
        "text": "Die Filter werden in einem akkreditierten Labor im Rasterelektronenmikroskop ausgewertet. Die Fasern werden ausgezaehlt und nach Geometrie und Materialart differenziert, um Asbest sicher von anderen Fasern zu trennen."
      },
      {
        "titel": "Bewertung und Dokumentation",
        "text": "Wir vergleichen die ermittelte Faserkonzentration mit dem Freimesswert und ordnen das Ergebnis fachlich ein. Sie erhalten einen nachvollziehbaren Pruefbericht als Nachweis."
      },
      {
        "titel": "Freigabe oder weitere Schritte",
        "text": "Liegt der Wert unterhalb des Freimesswertes, kann die Raumnutzung freigegeben und Schutzmassnahmen koennen aufgehoben werden. Andernfalls beraten wir zu erforderlichen Sanierungs- oder Reinigungsmassnahmen."
      }
    ],
    "faqs": [
      {
        "frage": "Wann ist eine Raumluftmessung nach VDI 3492 notwendig?",
        "antwort": "Eine Messung ist erforderlich, wenn nach einer Asbestsanierung die Faserfreiheit belegt werden muss (Freimessung nach TRGS 519) oder wenn der Verdacht besteht, dass beschaedigte asbesthaltige Materialien Fasern an die Raumluft abgeben. Auch bei Mietstreitigkeiten oder vor einer Nutzungsfreigabe schafft die Messung Klarheit."
      },
      {
        "frage": "Was ist der Unterschied zwischen einer Materialprobe und einer Luftmessung?",
        "antwort": "Eine Materialprobe zeigt, ob ein Bauteil Asbest enthaelt. Die Luftmessung nach VDI 3492 zeigt dagegen, ob tatsaechlich freie Fasern in der Atemluft vorhanden sind - also ob aktuell eine Gefaehrdung der Nutzer besteht. Beide Verfahren ergaenzen sich je nach Fragestellung."
      },
      {
        "frage": "Wie lange dauert eine Messung und wann liegt das Ergebnis vor?",
        "antwort": "Die Probenahme vor Ort dauert mehrere Stunden, da ein grosses Luftvolumen ueber den Filter gesaugt werden muss. Die anschliessende REM-Auswertung erfolgt im akkreditierten Labor; die Bearbeitungszeit richtet sich nach Labor und Dringlichkeit. Wir informieren Sie bei der Beauftragung ueber den konkreten Zeitrahmen."
      },
      {
        "frage": "Was bedeutet das Messergebnis fuer mich?",
        "antwort": "Entscheidend ist die ermittelte Faserkonzentration im Verhaeltnis zum Freimesswert. Liegt der Wert darunter, gilt der Raum als faserfrei und kann wieder genutzt werden. Wir erlaeutern Ihnen das Ergebnis verstaendlich und ordnen es fachlich ein, statt nur Zahlen zu liefern."
      },
      {
        "frage": "Warum ist eine REM-Auswertung erforderlich?",
        "antwort": "Asbestfasern sind extrem duenn und im Lichtmikroskop nicht sicher zu erkennen oder von anderen Fasern zu unterscheiden. Das Rasterelektronenmikroskop ermoeglicht die in VDI 3492 geforderte eindeutige Identifizierung und Differenzierung der Fasern nach Geometrie und Materialart."
      }
    ]
  }
};

/** Single Source of Truth für die Wissensseite /wissen/ UND die maschinenlesbaren Artefakte
 *  (facts.json, entities.json, llms.txt, llms-full.txt) sowie das Dataset-/DefinedTermSet-Schema.
 *  Inhalte sind sachlich-korrekt (Asbest-Recht) – keine erfundenen Fakten/Zahlen.
 *  Keine absoluten internen URLs hier (origin wird an den Aufrufstellen aufgelöst). */

export interface Definition {
  readonly term: string;
  readonly abbr?: string;
  readonly definition: string;
  /** Alternative Bezeichnungen / Suchsynonyme (z. B. „Freimessung" ↔ „Raumluftmessung"). */
  readonly altLabel?: readonly string[];
  /** Nur verifizierte externe Referenz (Wikipedia/offiziell) – im Zweifel weglassen. */
  readonly sameAs?: readonly string[];
  readonly kategorie: 'Stoff' | 'Verfahren' | 'Dokument' | 'Gesundheit';
}

export interface Regelwerk {
  readonly code: string;
  readonly name: string;
  readonly description: string;
  readonly appliesTo: string;
  readonly sameAs?: readonly string[];
}

export interface Kernfakt {
  readonly aussage: string;
}

export interface WissensFaq {
  readonly frage: string;
  readonly antwort: string;
}

export interface Kostenfaktor {
  readonly faktor: string;
  readonly einfluss: string;
}

/** Glossar – Stoffe, Verfahren und Dokumente rund um Asbest- & Schadstoffsanierung. */
export const definitionen: readonly Definition[] = [
  {
    term: 'Asbest',
    definition:
      'Sammelbegriff für natürlich vorkommende, faserförmige Silikat-Minerale. In Deutschland seit 1993 verboten. Eingeatmete Fasern sind lungengängig und können Asbestose sowie Lungen- und Rippenfellkrebs (Mesotheliom) verursachen.',
    sameAs: ['https://de.wikipedia.org/wiki/Asbest'],
    kategorie: 'Stoff',
  },
  {
    term: 'Asbestsanierung',
    definition:
      'Das fachgerechte Entfernen asbesthaltiger Materialien nach TRGS 519 unter definierten Schutzmaßnahmen – inklusive Entsorgung als gefährlicher Abfall und abschließender Freimessung der Raumluft.',
    altLabel: ['Asbestentfernung', 'Asbest entfernen', 'Asbestmaterialentfernung', 'Asbestrückbau'],
    sameAs: ['https://de.wikipedia.org/wiki/Asbestsanierung'],
    kategorie: 'Verfahren',
  },
  {
    term: 'Materialanalyse',
    definition:
      'Laboruntersuchung einer entnommenen Materialprobe auf Asbest nach VDI 3866. Sie weist eindeutig nach, ob ein Bauteil asbesthaltig ist – die Grundlage jeder fachgerechten Planung vor dem Eingriff.',
    altLabel: ['Asbest-Test', 'Asbestuntersuchung', 'Asbestanalyse', 'Materialprobe', 'Asbest testen'],
    kategorie: 'Verfahren',
  },
  {
    term: 'Spritzasbest',
    definition:
      'Schwach gebundenes, besonders gefährliches Asbestprodukt, das früher als Brand- und Schallschutz aufgespritzt wurde. Es setzt schon bei geringer Beanspruchung sehr leicht Fasern frei.',
    kategorie: 'Stoff',
  },
  {
    term: 'Künstliche Mineralfaser',
    abbr: 'KMF',
    definition:
      'Sammelbegriff für künstlich hergestellte glasige Silikatfasern wie alte Glas- und Steinwolle. Ältere Dämmwollen (vor 1996/2000) können krebsverdächtig sein; der Umgang ist in der TRGS 521 geregelt.',
    altLabel: ['KMF-Entfernung', 'KMF-Sanierung', 'alte Mineralwolle entfernen', 'Glaswolle entsorgen', 'Steinwolle entsorgen'],
    sameAs: ['https://de.wikipedia.org/wiki/Mineralwolle'],
    kategorie: 'Stoff',
  },
  {
    term: 'Polyzyklische aromatische Kohlenwasserstoffe',
    abbr: 'PAK',
    definition:
      'Gruppe organischer Schadstoffe, die unter anderem in alten Teer- und Bitumenklebern sowie Parkettklebstoffen vorkommt. Einige PAK sind krebserzeugend.',
    sameAs: ['https://de.wikipedia.org/wiki/Polycyclische_aromatische_Kohlenwasserstoffe'],
    kategorie: 'Stoff',
  },
  {
    term: 'Freimessung',
    definition:
      'Messung der Raumluft nach Abschluss der Sanierung gemäß VDI 3492. Sie weist nach, dass die Faserkonzentration unter dem Grenzwert liegt und die Räume gefahrlos wieder genutzt werden dürfen.',
    altLabel: ['Raumluftmessung', 'Abnahmemessung', 'Luftanalyse', 'Endkontrolle nach Sanierung'],
    kategorie: 'Verfahren',
  },
  {
    term: 'Unterdruckhaltung',
    definition:
      'Erzeugung eines dauerhaften Unterdrucks im abgeschotteten Arbeitsbereich, damit keine Fasern nach außen gelangen. Die Abluft wird über Faserfilter (HEPA) gereinigt.',
    kategorie: 'Verfahren',
  },
  {
    term: 'Schwarz-Weiß-Schleuse',
    definition:
      'Mehrkammer-Personenschleuse zwischen dem kontaminierten Schwarzbereich und dem sauberen Weißbereich. Sie dient der Dekontamination der Beschäftigten beim Verlassen des Arbeitsbereichs.',
    kategorie: 'Verfahren',
  },
  {
    term: 'TRGS 519',
    definition:
      'Technische Regeln für Gefahrstoffe „Asbest – Abbruch-, Sanierungs- und Instandhaltungsarbeiten". Sie legen Sachkunde, Schutzmaßnahmen und Anzeigepflichten für Arbeiten an asbesthaltigen Materialien fest.',
    sameAs: ['https://www.baua.de/DE/Angebote/Regelwerk/TRGS/TRGS-519'],
    kategorie: 'Dokument',
  },
  {
    term: 'VDI 3492',
    definition:
      'VDI-Richtlinie zur Messung der Asbest-/Faserkonzentration in der Innenraumluft mittels Rasterelektronenmikroskopie. Sie ist die Grundlage der Freimessung nach einer Sanierung.',
    kategorie: 'Dokument',
  },
  {
    term: 'Gefahrstoffverordnung',
    abbr: 'GefStoffV',
    definition:
      'Verordnung zum Schutz vor Gefahrstoffen. Sie bildet den rechtlichen Rahmen unter anderem für Asbestarbeiten und die Anerkennung als Fachbetrieb.',
    sameAs: ['https://de.wikipedia.org/wiki/Gefahrstoffverordnung'],
    kategorie: 'Dokument',
  },
  {
    term: 'Chrysotil',
    definition:
      'Weißasbest – die mit Abstand am häufigsten verarbeitete Asbestart aus der Serpentin-Gruppe. Verbaut in Asbestzement, Bodenbelägen, Klebern und Dichtungen; wie alle Asbestarten krebserzeugend.',
    altLabel: ['Weißasbest'],
    sameAs: ['https://de.wikipedia.org/wiki/Chrysotil'],
    kategorie: 'Stoff',
  },
  {
    term: 'Asbestzement',
    definition:
      'Fest gebundenes Gemisch aus Zement und Asbestfasern – verwendet für Wellplatten (Welleternit), Fassadenplatten, Rohre und Blumenkästen. Solange intakt unauffällig; beim Bearbeiten, Brechen oder Abbruch werden Fasern frei.',
    altLabel: ['Faserzement', 'Welleternit', 'Eternit', 'Wellasbest'],
    sameAs: ['https://de.wikipedia.org/wiki/Faserzement'],
    kategorie: 'Stoff',
  },
  {
    term: 'Floor-Flex-Platten',
    definition:
      'Harte Vinyl-Asbest-Bodenplatten (meist 25×25 cm), bis 1993 millionenfach verlegt. Der oft schwarze Bitumenkleber darunter kann ebenfalls asbesthaltig sein. Gefährlich vor allem beim Entfernen, Bohren oder Schleifen.',
    altLabel: ['Vinyl-Asbest-Platten', 'Cushion-Vinyl', 'PVC-Asbest-Platten'],
    kategorie: 'Stoff',
  },
  {
    term: 'Bitumenkleber',
    definition:
      'Schwarzer, harter Klebstoff unter alten Bodenbelägen. Er kann asbesthaltig (TRGS 519) oder teer-/PAK-haltig (TRGS 524/551) sein – welcher Schadstoff vorliegt, klärt nur eine Materialanalyse.',
    altLabel: ['schwarzer Kleber', 'Schwarzkleber'],
    kategorie: 'Stoff',
  },
  {
    term: 'Asbestkataster',
    definition:
      'Systematische Bestandsaufnahme aller asbest- und schadstoffhaltigen Materialien eines Gebäudes mit Lage, Zustand und Dringlichkeit. Grundlage für die Sanierungsplanung und die Erkundungspflicht bei Gebäuden vor 1993.',
    altLabel: ['Schadstoffkataster', 'Gebäudeschadstoffkataster'],
    kategorie: 'Dokument',
  },
  {
    term: 'Sachkundenachweis',
    definition:
      'Behördlich anerkannter Nachweis der Sachkunde nach TRGS 519 (Anlage 3 für Abbruch-, Sanierungs- und Instandhaltungsarbeiten). Pflicht für die verantwortliche Leitung asbestbezogener Arbeiten.',
    altLabel: ['Sachkunde nach TRGS 519'],
    kategorie: 'Dokument',
  },
  {
    term: 'Personenschleuse',
    definition:
      'Mehrkammerige Schleuse am Übergang vom Schwarz- in den Weißbereich. Beschäftigte werden beim Verlassen des Sanierungsbereichs entstaubt und legen die Schutzkleidung kontrolliert ab. Teil der Schwarz-Weiß-Anlage.',
    altLabel: ['Dekontaminationsschleuse'],
    kategorie: 'Verfahren',
  },
  {
    term: 'Abfallschlüssel 17 06 05*',
    definition:
      'Europäischer Abfallschlüssel (AVV) für asbesthaltige Baustoffe. Das Sternchen kennzeichnet gefährlichen Abfall, der getrennt, deklariert und mit Entsorgungsnachweis über zugelassene Annahmestellen entsorgt werden muss.',
    altLabel: ['AVV 17 06 05*', 'AVV-Code Asbest'],
    kategorie: 'Dokument',
  },
  {
    term: 'Asbestose',
    definition:
      'Durch eingeatmete Asbestfasern verursachte Vernarbung (Fibrose) des Lungengewebes. Eine anerkannte Berufskrankheit, die meist erst Jahrzehnte nach der Faserbelastung auftritt und die Atemfunktion dauerhaft einschränkt.',
    altLabel: ['Asbeststaublunge'],
    sameAs: ['https://de.wikipedia.org/wiki/Asbestose'],
    kategorie: 'Gesundheit',
  },
  {
    term: 'Mesotheliom',
    definition:
      'Bösartiger Tumor des Rippen- oder Bauchfells, der nahezu ausschließlich durch Asbest verursacht wird. Die Latenzzeit zwischen Faserbelastung und Erkrankung beträgt oft 20 bis 40 Jahre.',
    altLabel: ['Rippenfellkrebs', 'Pleuramesotheliom'],
    sameAs: ['https://de.wikipedia.org/wiki/Mesotheliom'],
    kategorie: 'Gesundheit',
  },
  {
    term: 'Faserjahre',
    definition:
      'Maß für die kumulierte berufliche Asbest-Faserbelastung (Faserkonzentration multipliziert mit der Expositionsdauer). Es dient der arbeitsmedizinischen Bewertung und der Anerkennung asbestbedingter Berufskrankheiten.',
    altLabel: ['kumulative Asbestdosis'],
    kategorie: 'Gesundheit',
  },
  {
    term: 'Krokydolith',
    definition:
      'Blauasbest – eine besonders gefährliche Asbestart aus der Amphibolgruppe. Die geraden, sehr dünnen und biobeständigen Fasern dringen tief in die Lunge ein und gelten als stark krebserzeugend. Wurde u. a. in Spritzasbest und Hochtemperatur-Isolierungen verwendet.',
    altLabel: ['Blauasbest'],
    sameAs: ['https://de.wikipedia.org/wiki/Krokydolith'],
    kategorie: 'Stoff',
  },
  {
    term: 'Amosit',
    definition:
      'Braunasbest aus der Amphibolgruppe (asbestförmiger Grunerit). Spröde, gerade Fasern; vor allem in Spritzasbest, Brandschutz- und Dämmplatten verbaut. Wie alle Amphibolasbeste gesundheitlich besonders kritisch.',
    altLabel: ['Braunasbest'],
    sameAs: ['https://de.wikipedia.org/wiki/Amosit'],
    kategorie: 'Stoff',
  },
  {
    term: 'Eternit',
    definition:
      'Bekannter Markenname für Faserzement. Bis zum Asbestverbot 1993 enthielten Eternit-Produkte – vor allem Well-, Dach- und Fassadenplatten – Asbest (Asbestzement). Heute hergestellte Eternit-Produkte sind asbestfrei; bei Altbeständen aus der Zeit vor 1993 ist von Asbest auszugehen.',
    altLabel: ['Eternitplatten', 'Welleternit', 'Eternit-Wellplatten'],
    sameAs: ['https://de.wikipedia.org/wiki/Eternit'],
    kategorie: 'Stoff',
  },
  {
    term: 'ASI-Arbeiten',
    abbr: 'ASI',
    definition:
      'Abbruch-, Sanierungs- und Instandhaltungsarbeiten an asbesthaltigen Materialien – der zentrale Anwendungsbereich der TRGS 519. Solche Arbeiten dürfen nur von sachkundigen Fachbetrieben mit den dort geregelten Schutzmaßnahmen ausgeführt werden.',
    altLabel: ['Abbruch-, Sanierungs- und Instandhaltungsarbeiten'],
    sameAs: ['https://www.baua.de/DE/Angebote/Regelwerk/TRGS/TRGS-519'],
    kategorie: 'Verfahren',
  },
  {
    term: 'Anzeigepflicht',
    definition:
      'Pflicht, Asbest-ASI-Arbeiten vor Beginn der zuständigen Behörde – in Nordrhein-Westfalen der Bezirksregierung – schriftlich anzuzeigen. Die Anzeige nach TRGS 519 muss rechtzeitig, in der Regel mindestens sieben Tage vor Arbeitsbeginn, vorliegen und nennt u. a. Arbeitsverfahren und Schutzmaßnahmen.',
    altLabel: ['Behördenanzeige', 'Asbestsanierung anzeigen'],
    sameAs: ['https://www.baua.de/DE/Angebote/Regelwerk/TRGS/TRGS-519'],
    kategorie: 'Dokument',
  },
  {
    term: 'Arbeitsmedizinische Vorsorge',
    definition:
      'Ärztliche Vorsorge für Personen mit Asbestkontakt. Wegen der langen Latenzzeit asbestbedingter Erkrankungen ist auch nach Ende der Tätigkeit eine nachgehende Vorsorge vorgesehen; sie dient der Früherkennung von Asbestose sowie Lungen- und Rippenfellkrebs.',
    altLabel: ['nachgehende Vorsorge', 'Vorsorgeuntersuchung Asbest'],
    sameAs: ['https://de.wikipedia.org/wiki/Arbeitsmedizinische_Vorsorge'],
    kategorie: 'Gesundheit',
  },
];

/** Einschlägige Regelwerke und Schlüssel. TRGS 521 ist hier ausschließlich als Regelwerk (alte
 *  Mineralwolle/KMF) genannt – Asbesta hält die Sachkunde nach TRGS 519 und TRGS 524, kein TRGS-521-Zertifikat. */
export const regelwerke: readonly Regelwerk[] = [
  {
    code: 'TRGS 519',
    name: 'Asbest – Abbruch-, Sanierungs- und Instandhaltungsarbeiten',
    description:
      'Verbindliche Technische Regel für alle Arbeiten an asbesthaltigen Materialien: Sachkunde, Schutzmaßnahmen, Anzeige- und Dokumentationspflichten.',
    appliesTo: 'Asbest',
    sameAs: ['https://www.baua.de/DE/Angebote/Regelwerk/TRGS/TRGS-519'],
  },
  {
    code: 'TRGS 521',
    name: 'Abbruch-, Sanierungs- und Instandhaltungsarbeiten mit alter Mineralwolle',
    description:
      'Regelt den Schutz vor alten künstlichen Mineralfasern (KMF). Betrifft alte Dämmwolle, nicht Asbest.',
    appliesTo: 'Künstliche Mineralfaser (KMF)',
    sameAs: ['https://www.baua.de/DE/Angebote/Regelwerk/TRGS/TRGS-521'],
  },
  {
    code: 'TRGS 524',
    name: 'Schutzmaßnahmen bei Tätigkeiten in kontaminierten Bereichen',
    description:
      'Technische Regel für Arbeiten in schadstoffbelasteten Bereichen, etwa bei Bodenkontaminationen oder Altlasten.',
    appliesTo: 'kontaminierte Bereiche',
    sameAs: ['https://www.baua.de/DE/Angebote/Regelwerk/TRGS/TRGS-524'],
  },
  {
    code: 'VDI 3492',
    name: 'Messen von Innenraumluftverunreinigungen – Faseranzahlkonzentration',
    description:
      'VDI-Richtlinie für die Raumluftmessung von Asbest-/Faserkonzentrationen. Grundlage der Freimessung.',
    appliesTo: 'Raumluftmessung / Freimessung',
  },
  {
    code: 'GefStoffV',
    name: 'Gefahrstoffverordnung',
    description: 'Verordnung zum Schutz vor Gefahrstoffen – rechtlicher Rahmen für Asbest- und Schadstoffarbeiten.',
    appliesTo: 'Gefahrstoffe allgemein',
    sameAs: ['https://de.wikipedia.org/wiki/Gefahrstoffverordnung'],
  },
  {
    code: 'AVV 17 06 05*',
    name: 'Abfallschlüssel für asbesthaltige Baustoffe',
    description:
      'Kennzeichnet asbesthaltige Baustoffe als gefährlichen Abfall (das Sternchen markiert „gefährlich"). Maßgeblich für die Entsorgung mit Nachweis.',
    appliesTo: 'Entsorgung asbesthaltiger Abfälle',
    sameAs: ['https://de.wikipedia.org/wiki/Abfallverzeichnis-Verordnung'],
  },
  {
    code: 'AVV 17 06 01*',
    name: 'Abfallschlüssel für asbesthaltiges Dämmmaterial',
    description:
      'Kennzeichnet Dämmmaterial, das Asbest enthält, als gefährlichen Abfall. Relevant z. B. für asbesthaltige Rohr- und Behälterisolierungen.',
    appliesTo: 'Entsorgung asbesthaltigen Dämmmaterials',
    sameAs: ['https://de.wikipedia.org/wiki/Abfallverzeichnis-Verordnung'],
  },
  {
    code: 'AVV 17 06 03*',
    name: 'Abfallschlüssel für sonstiges gefährliches Dämmmaterial',
    description:
      'Kennzeichnet anderes Dämmmaterial, das aus gefährlichen Stoffen besteht oder solche enthält – etwa alte künstliche Mineralfasern (KMF) vor 1996/2000. Kein Asbest, aber ebenfalls gefährlicher Abfall.',
    appliesTo: 'Entsorgung alter Mineralwolle / KMF (TRGS 521)',
    sameAs: ['https://de.wikipedia.org/wiki/Abfallverzeichnis-Verordnung'],
  },
];

/** Belegbare Kernfakten (keine erfundenen Kennzahlen). */
export const kernfakten: readonly Kernfakt[] = [
  { aussage: 'Asbest ist in Deutschland seit dem 31. Oktober 1993 verboten (Herstellungs- und Verwendungsverbot).' },
  {
    aussage:
      'Asbestfasern sind lungengängig und können Asbestose sowie Lungen- und Rippenfellkrebs (Mesotheliom) verursachen.',
  },
  {
    aussage:
      'Arbeiten an asbesthaltigen Materialien dürfen nur von sachkundigen Fachbetrieben nach TRGS 519 ausgeführt werden.',
  },
  {
    aussage:
      'Umfangreiche Asbestsanierungen müssen vor Beginn bei der zuständigen Bezirksregierung angezeigt werden.',
  },
  {
    aussage:
      'Asbesthaltige Abfälle gelten als gefährlicher Abfall und werden unter dem Abfallschlüssel AVV 17 06 05* entsorgt.',
  },
  {
    aussage:
      'Nach der Sanierung belegt eine Freimessung der Raumluft nach VDI 3492 die gefahrlose Wiedernutzung der Räume.',
  },
];

/** Ehrliche Kostenfaktoren (KEINE erfundenen Preise/Ranges – nur belegbare Einflussgrößen).
 *  Für KI-Antworten auf „Was kostet …?" als strukturierte Faktorenliste. */
export const kostenfaktoren: readonly Kostenfaktor[] = [
  { faktor: 'Material', einfluss: 'Floor-Flex, Putz, Welleternit oder Spritzasbest unterscheiden sich stark im Aufwand.' },
  { faktor: 'Menge / Fläche', einfluss: 'Je größer die zu sanierende Fläche, desto höher Arbeits- und Entsorgungsaufwand.' },
  { faktor: 'Zugänglichkeit', einfluss: 'Schwer erreichbare Bauteile (Dach, Schacht, enge Räume) erhöhen den Aufwand.' },
  { faktor: 'Schutzaufwand', einfluss: 'Schwarz-Weiß-Schleuse und Unterdruckhaltung sind bei Faserfreisetzung Pflicht und kostenrelevant.' },
  { faktor: 'Entsorgungsmenge', einfluss: 'Asbesthaltiger Abfall (AVV 17 06 05*) wird als gefährlicher Abfall mit Nachweis entsorgt.' },
  { faktor: 'Anzeige & Dokumentation', einfluss: 'Anzeigepflichtige Sanierungen erfordern Behördenanzeige, Freimessung und Schlussdokumentation.' },
];

/** Kuratierte Kern-FAQ (kanonischer Wortlaut für den Datensatz – bewusst eigenständig formuliert,
 *  nicht blind aus den Leistungs-/Ratgeber-FAQs aggregiert, um die FAQPage bündig zu halten). */
export const wissensFaqs: readonly WissensFaq[] = [
  {
    frage: 'Ist Asbest in Deutschland verboten?',
    antwort:
      'Ja. Herstellung und Verwendung von Asbest sind in Deutschland seit dem 31. Oktober 1993 verboten. In Bestandsgebäuden ist Asbest aber weiterhin verbaut und muss bei Arbeiten fachgerecht entfernt werden.',
  },
  {
    frage: 'Woran erkenne ich, ob in meinem Gebäude Asbest verbaut ist?',
    antwort:
      'Sicher lässt sich Asbest nur durch eine Materialanalyse im Labor nachweisen. Verdacht besteht vor allem bei Gebäuden, die vor 1993 errichtet oder saniert wurden – etwa bei Dach- und Fassadenplatten, Bodenklebern, Flex-Platten, Putzen und Spachtelmassen.',
  },
  {
    frage: 'Darf ich Asbest selbst entfernen?',
    antwort:
      'Nein. Umfangreiche Asbestarbeiten dürfen nur sachkundige Fachbetriebe nach TRGS 519 ausführen. Eigenmächtiges Entfernen setzt gefährliche Fasern frei und ist nicht zulässig.',
  },
  {
    frage: 'Muss eine Asbestsanierung behördlich angezeigt werden?',
    antwort:
      'Ja, anzeigepflichtige Sanierungen müssen vor Beginn bei der zuständigen Bezirksregierung angezeigt werden. Asbesta übernimmt die Anzeige und die vollständige Dokumentation.',
  },
  {
    frage: 'Was kostet eine Asbestsanierung?',
    antwort:
      'Die Kosten hängen von Material, Menge, Zugänglichkeit und Schutzaufwand ab. Nach einer kostenlosen Besichtigung erhalten Sie einen transparenten Festpreis – ohne versteckte Zusatzkosten.',
  },
  {
    frage: 'Wie wird asbesthaltiger Abfall entsorgt?',
    antwort:
      'Asbesthaltiger Abfall ist gefährlicher Abfall (Abfallschlüssel AVV 17 06 05*). Er wird staubdicht verpackt, gekennzeichnet und mit lückenlosem Entsorgungsnachweis auf zugelassenen Deponien entsorgt.',
  },
  {
    frage: 'Was ist eine Freimessung?',
    antwort:
      'Eine Freimessung ist eine Raumluftmessung nach VDI 3492 nach Abschluss der Sanierung. Sie belegt, dass die Faserkonzentration unter dem Grenzwert liegt und die Räume wieder genutzt werden dürfen.',
  },
  {
    frage: 'Was unterscheidet TRGS 519, TRGS 521 und TRGS 524?',
    antwort:
      'TRGS 519 regelt Arbeiten an Asbest, TRGS 521 den Umgang mit alter Mineralwolle (KMF) und TRGS 524 Tätigkeiten in kontaminierten Bereichen. Asbesta arbeitet sachkundig nach TRGS 519 und TRGS 524.',
  },
  {
    frage: 'Ist alte Mineralwolle (KMF) gefährlich?',
    antwort:
      'Ältere künstliche Mineralfasern (vor 1996/2000) können krebsverdächtig sein. Der Umgang ist in der TRGS 521 geregelt; sie werden ähnlich vorsichtig ausgebaut und entsorgt wie Asbest.',
  },
  {
    frage: 'Wie lange dauert eine Asbestsanierung?',
    antwort:
      'Das hängt vom Umfang ab – von einem Tag bei kleinen Maßnahmen bis zu mehreren Wochen bei großen Objekten. Den genauen Zeitrahmen nennen wir verbindlich im Angebot.',
  },
];

/** Dataset-Metadaten (feste, handgepflegte Konstanten – kein new Date()). */
export const wissenMeta = {
  name: 'Wissensdatenbank: Asbest- & Schadstoffsanierung',
  description:
    'Strukturierte, sachkundig gepflegte Wissensbasis zur Asbest- und Schadstoffsanierung: Definitionen, Regelwerke (TRGS 519/521/524, VDI 3492, GefStoffV), belegbare Kernfakten und häufige Fragen – herausgegeben von der Asbesta Schadstoffsanierung, Fachbetrieb nach TRGS 519 aus Marl für ganz Nordrhein-Westfalen.',
  keywords: [
    'Asbest',
    'Asbestsanierung',
    'Schadstoffsanierung',
    'TRGS 519',
    'TRGS 521',
    'TRGS 524',
    'VDI 3492',
    'Gefahrstoffverordnung',
    'KMF',
    'PAK',
    'Freimessung',
    'Nordrhein-Westfalen',
  ],
  inLanguage: 'de',
  datePublished: '2026-06-18',
  dateModified: '2026-06-25',
} as const;

/** Lizenz des Datensatzes: CC BY 4.0 – frei zitierbar mit Quellenangabe (gut für KI/GEO). */
export const wissenLicense = {
  isAccessibleForFree: true,
  license: 'https://creativecommons.org/licenses/by/4.0/',
} as const;

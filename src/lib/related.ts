/** Themen-Zuordnung Leistung -> passende Ratgeber-Beiträge (bidirektionale Verlinkung,
 *  wiederverwendet in Leistungs-Detail- und Kombi-Seiten). */
export const RATGEBER_MAP: Record<string, readonly string[]> = {
  'welleternit-ausbauen': [
    'asbestdach-foerderung-neues-dach',
    'asbestdach-entsorgen-kosten-ablauf',
    'asbest-entsorgen',
  ],
  'fassadenplatten-ausbauen': [
    'asbest-fassadenplatten-erkennen',
    'asbestdach-entsorgen-kosten-ablauf',
    'asbest-entsorgen',
  ],
  'asbestzement-ausbauen': [
    'asbest-fassadenplatten-erkennen',
    'asbest-entsorgen',
    'asbestzement-rohre-erkennen-entsorgen',
  ],
  'floor-flex-entfernen': [
    'asbest-bodenbelag',
    'asbest-erkennen',
    'asbestsanierung-pflicht-kosten-ablauf',
  ],
  'bitumenkleber-entfernen': [
    'asbest-bodenbelag',
    'asbest-putz-fliesenkleber-spachtelmasse',
    'asbest-entsorgen',
  ],
  'cushion-vinyl-entfernen': [
    'asbest-bodenbelag',
    'asbest-erkennen',
    'asbestsanierung-pflicht-kosten-ablauf',
  ],
  materialanalyse: [
    'asbest-testen-lassen',
    'asbest-erkennen',
    'asbest-putz-fliesenkleber-spachtelmasse',
  ],
  'luftanalysen-vdi-3492': [
    'asbest-testen-lassen',
    'asbestsanierung-pflicht-kosten-ablauf',
    'spritzasbest-erkennen-sanieren',
  ],
  asbestsanierung: [
    'spritzasbest-erkennen-sanieren',
    'asbestsanierung-pflicht-kosten-ablauf',
    'nachtspeicherofen-asbest-entsorgen',
  ],
  abbrucharbeiten: [
    'asbestsanierung-pflicht-kosten-ablauf',
    'asbest-entsorgen',
    'asbest-hausabriss-abbruch',
  ],
  'kmf-sanierung': ['mineralwolle-kmf-entsorgen', 'asbest-erkennen', 'gefstoffv-novelle-2024'],
  'pak-sanierung': ['asbestsanierung-pflicht-kosten-ablauf', 'asbest-erkennen', 'asbest-entsorgen'],
  'fensterbaenke-ausbauen': [
    'asbest-fensterbaenke-erkennen-entfernen',
    'asbest-erkennen',
    'asbest-entsorgen',
  ],
};

export const DEFAULT_RATGEBER: readonly string[] = [
  'asbest-erkennen',
  'asbestsanierung-pflicht-kosten-ablauf',
  'asbest-entsorgen',
];

/** Liefert die passenden Ratgeber-Slugs zu einer Leistung (mit Fallback). */
export function ratgeberFuer(leistungSlug: string): readonly string[] {
  return RATGEBER_MAP[leistungSlug] ?? DEFAULT_RATGEBER;
}

/** Themen-Zuordnung Ratgeber -> verwandte Ratgeber (Topical-Cluster statt „immer die neuesten 3"). */
export const RATGEBER_RELATED: Record<string, readonly string[]> = {
  'asbest-erkennen': [
    'asbest-testen-lassen',
    'asbest-fassadenplatten-erkennen',
    'asbest-putz-fliesenkleber-spachtelmasse',
  ],
  'asbest-testen-lassen': [
    'asbest-erkennen',
    'asbest-fassadenplatten-erkennen',
    'asbestsanierung-pflicht-kosten-ablauf',
  ],
  'asbestsanierung-pflicht-kosten-ablauf': ['asbest-entsorgen', 'gefstoffv-novelle-2024', 'asbest-hauskauf'],
  'asbest-entsorgen': [
    'asbestdach-entsorgen-kosten-ablauf',
    'mineralwolle-kmf-entsorgen',
    'asbestsanierung-pflicht-kosten-ablauf',
  ],
  'asbest-fassadenplatten-erkennen': [
    'asbestzement-rohre-erkennen-entsorgen',
    'asbestdach-entsorgen-kosten-ablauf',
    'asbest-erkennen',
  ],
  'spritzasbest-erkennen-sanieren': ['asbest-erkennen', 'asbestsanierung-pflicht-kosten-ablauf', 'asbest-entsorgen'],
  'asbestdach-foerderung-neues-dach': [
    'asbestdach-entsorgen-kosten-ablauf',
    'asbest-fassadenplatten-erkennen',
    'asbest-entsorgen',
  ],
  'asbestdach-entsorgen-kosten-ablauf': [
    'asbestdach-foerderung-neues-dach',
    'asbest-fassadenplatten-erkennen',
    'asbest-entsorgen',
  ],
  'nachtspeicherofen-asbest-entsorgen': ['asbest-entsorgen', 'asbest-erkennen', 'asbestsanierung-pflicht-kosten-ablauf'],
  'asbest-putz-fliesenkleber-spachtelmasse': [
    'asbest-erkennen',
    'asbest-bodenbelag',
    'asbestsanierung-pflicht-kosten-ablauf',
  ],
  'mineralwolle-kmf-entsorgen': ['asbest-entsorgen', 'asbest-erkennen', 'gefstoffv-novelle-2024'],
  'asbest-hauskauf': ['asbest-erkennen', 'asbestsanierung-pflicht-kosten-ablauf', 'gefstoffv-novelle-2024'],
  'gefstoffv-novelle-2024': ['asbestsanierung-pflicht-kosten-ablauf', 'asbest-hauskauf', 'asbest-entsorgen'],
  'asbest-bodenbelag': ['asbest-putz-fliesenkleber-spachtelmasse', 'asbest-erkennen', 'asbestsanierung-pflicht-kosten-ablauf'],
  'asbest-mietwohnung-rechte': ['asbest-erkennen', 'asbest-hauskauf', 'asbestsanierung-pflicht-kosten-ablauf'],
  'asbestdach-vor-photovoltaik': [
    'asbestdach-foerderung-neues-dach',
    'asbestdach-entsorgen-kosten-ablauf',
    'asbest-fassadenplatten-erkennen',
  ],
  'asbest-schornstein-ofenrohr-heizung': ['nachtspeicherofen-asbest-entsorgen', 'asbest-erkennen', 'asbest-entsorgen'],
  'asbest-arbeitsplatz-arbeitgeberpflichten': [
    'gefstoffv-novelle-2024',
    'asbestkataster-schadstoffkataster',
    'asbestsanierung-pflicht-kosten-ablauf',
  ],
  'asbest-exposition-sofortmassnahmen': ['asbest-erkennen', 'asbestsanierung-pflicht-kosten-ablauf', 'asbest-entsorgen'],
  'asbestkataster-schadstoffkataster': [
    'gefstoffv-novelle-2024',
    'asbest-arbeitsplatz-arbeitgeberpflichten',
    'asbest-hauskauf',
  ],
  'asbest-wellplatten-gartenhaus-kleinmengen': [
    'asbestdach-entsorgen-kosten-ablauf',
    'asbest-entsorgen',
    'asbestdach-foerderung-neues-dach',
  ],
  'asbest-versicherung': ['asbestdach-entsorgen-kosten-ablauf', 'asbest-hauskauf', 'asbestsanierung-pflicht-kosten-ablauf'],
  'asbestzement-rohre-erkennen-entsorgen': [
    'asbest-fassadenplatten-erkennen',
    'asbestdach-entsorgen-kosten-ablauf',
    'asbest-entsorgen',
  ],
  'asbest-hausabriss-abbruch': [
    'asbestsanierung-pflicht-kosten-ablauf',
    'asbest-entsorgen',
    'gefstoffv-novelle-2024',
  ],
  'asbest-fensterbaenke-erkennen-entfernen': [
    'asbest-erkennen',
    'asbest-putz-fliesenkleber-spachtelmasse',
    'asbest-entsorgen',
  ],
};

/** Verwandte Ratgeber-Slugs zu einem Beitrag (leer, wenn nicht kuratiert -> Layout-Fallback). */
export function verwandteRatgeber(slug: string): readonly string[] {
  return RATGEBER_RELATED[slug] ?? [];
}

/** Reverse: passende Leistungs-Slugs zu einem Ratgeber-Beitrag (aus der gepflegten Kuratierung). */
export function leistungenFuerRatgeber(ratgeberSlug: string): readonly string[] {
  const treffer = Object.entries(RATGEBER_MAP)
    .filter(([, slugs]) => slugs.includes(ratgeberSlug))
    .map(([leistungSlug]) => leistungSlug);
  return treffer.length > 0 ? treffer : ['asbestsanierung', 'welleternit-ausbauen', 'materialanalyse'];
}

/** Kuratierte Entity-Verknuepfung (about/mentions) je Content-Seite auf den Knowledge-Graph
 *  (DefinedTerms/Regelwerke aus /wissen/). Nur reale definitionen[].term / regelwerke[].code –
 *  schema.ts filtert zusaetzlich gegen den Bestand (Typo-sicher). Staerkt Entity-Salience fuer
 *  Google-Entity-Verstaendnis und KI-Answer-Engines, die JSON-LD parsen. */
export interface ContentEntities {
  readonly aboutTerms?: readonly string[];
  readonly mentionsTerms?: readonly string[];
  readonly mentionsRegs?: readonly string[];
}

const RATGEBER_ENTITIES: Record<string, ContentEntities> = {
  'asbest-testen-lassen': { aboutTerms: ['Materialanalyse'], mentionsTerms: ['Asbest', 'Freimessung'], mentionsRegs: ['TRGS 519', 'VDI 3492'] },
  'asbest-mietwohnung-rechte': { aboutTerms: ['Asbest'], mentionsRegs: ['GefStoffV', 'TRGS 519'] },
  'asbestdach-vor-photovoltaik': { aboutTerms: ['Asbestzement'], mentionsTerms: ['Eternit'], mentionsRegs: ['TRGS 519'] },
  'asbest-schornstein-ofenrohr-heizung': { aboutTerms: ['Asbest'], mentionsTerms: ['Asbestzement'], mentionsRegs: ['TRGS 519'] },
  'asbest-arbeitsplatz-arbeitgeberpflichten': { aboutTerms: ['ASI-Arbeiten'], mentionsTerms: ['Anzeigepflicht', 'Arbeitsmedizinische Vorsorge', 'Sachkundenachweis', 'Faserjahre'], mentionsRegs: ['TRGS 519', 'GefStoffV'] },
  'asbest-exposition-sofortmassnahmen': { aboutTerms: ['Asbest'], mentionsTerms: ['Asbestose', 'Mesotheliom', 'Arbeitsmedizinische Vorsorge'], mentionsRegs: ['TRGS 519'] },
  'asbestkataster-schadstoffkataster': { aboutTerms: ['Asbestkataster'], mentionsTerms: ['ASI-Arbeiten', 'Anzeigepflicht'], mentionsRegs: ['TRGS 519', 'GefStoffV'] },
  'asbest-wellplatten-gartenhaus-kleinmengen': { aboutTerms: ['Asbestzement'], mentionsTerms: ['Eternit'], mentionsRegs: ['TRGS 519', 'AVV 17 06 05*'] },
  'asbest-versicherung': { aboutTerms: ['Asbestzement'], mentionsRegs: ['TRGS 519'] },
  'asbest-fassadenplatten-erkennen': { aboutTerms: ['Asbestzement'], mentionsTerms: ['Eternit', 'Materialanalyse'], mentionsRegs: ['TRGS 519', 'AVV 17 06 05*'] },
  'spritzasbest-erkennen-sanieren': { aboutTerms: ['Spritzasbest'], mentionsTerms: ['Krokydolith', 'Amosit', 'Schwarz-Weiß-Schleuse', 'Unterdruckhaltung', 'Freimessung'], mentionsRegs: ['TRGS 519', 'VDI 3492'] },
  'asbestdach-foerderung-neues-dach': { aboutTerms: ['Asbestzement'], mentionsTerms: ['Eternit'], mentionsRegs: ['TRGS 519'] },
  'nachtspeicherofen-asbest-entsorgen': { aboutTerms: ['Asbest'], mentionsTerms: ['Chrysotil'], mentionsRegs: ['TRGS 519', 'AVV 17 06 05*'] },
  'asbest-putz-fliesenkleber-spachtelmasse': { aboutTerms: ['Asbest'], mentionsTerms: ['Materialanalyse', 'Chrysotil'], mentionsRegs: ['TRGS 519'] },
  'mineralwolle-kmf-entsorgen': { aboutTerms: ['Künstliche Mineralfaser'], mentionsRegs: ['TRGS 521', 'AVV 17 06 03*'] },
  'asbest-hauskauf': { aboutTerms: ['Asbest'], mentionsTerms: ['Materialanalyse', 'Asbestkataster'], mentionsRegs: ['TRGS 519', 'GefStoffV'] },
  'gefstoffv-novelle-2024': { aboutTerms: ['Gefahrstoffverordnung'], mentionsTerms: ['Anzeigepflicht', 'ASI-Arbeiten'], mentionsRegs: ['GefStoffV', 'TRGS 519'] },
  'asbest-entsorgen': { aboutTerms: ['Asbest'], mentionsTerms: ['Abfallschlüssel 17 06 05*'], mentionsRegs: ['AVV 17 06 05*', 'TRGS 519'] },
  'asbest-bodenbelag': { aboutTerms: ['Floor-Flex-Platten'], mentionsTerms: ['Bitumenkleber', 'Chrysotil', 'Materialanalyse'], mentionsRegs: ['TRGS 519', 'AVV 17 06 05*'] },
  'asbest-erkennen': { aboutTerms: ['Asbest'], mentionsTerms: ['Materialanalyse', 'Asbestzement', 'Spritzasbest', 'Floor-Flex-Platten'], mentionsRegs: ['TRGS 519'] },
  'asbestdach-entsorgen-kosten-ablauf': { aboutTerms: ['Asbestzement'], mentionsTerms: ['Eternit'], mentionsRegs: ['TRGS 519', 'AVV 17 06 05*'] },
  'asbestsanierung-pflicht-kosten-ablauf': { aboutTerms: ['Asbestsanierung'], mentionsTerms: ['Anzeigepflicht', 'Freimessung', 'Unterdruckhaltung', 'Schwarz-Weiß-Schleuse'], mentionsRegs: ['TRGS 519', 'VDI 3492', 'GefStoffV'] },
  'asbestzement-rohre-erkennen-entsorgen': { aboutTerms: ['Asbestzement'], mentionsTerms: ['Eternit'], mentionsRegs: ['TRGS 519', 'AVV 17 06 05*'] },
  'asbest-hausabriss-abbruch': { aboutTerms: ['ASI-Arbeiten'], mentionsTerms: ['Asbestkataster', 'Anzeigepflicht', 'Freimessung'], mentionsRegs: ['TRGS 519', 'GefStoffV', 'AVV 17 06 05*'] },
  'asbest-fensterbaenke-erkennen-entfernen': { aboutTerms: ['Asbestzement'], mentionsTerms: ['Eternit', 'Materialanalyse'], mentionsRegs: ['TRGS 519', 'AVV 17 06 05*'] },
};

const LEISTUNG_ENTITIES: Record<string, ContentEntities> = {
  asbestsanierung: { aboutTerms: ['Asbestsanierung'], mentionsTerms: ['Asbest', 'Unterdruckhaltung', 'Schwarz-Weiß-Schleuse', 'Freimessung', 'Anzeigepflicht'], mentionsRegs: ['TRGS 519', 'VDI 3492', 'GefStoffV'] },
  'welleternit-ausbauen': { aboutTerms: ['Asbestzement'], mentionsTerms: ['Eternit'], mentionsRegs: ['TRGS 519', 'AVV 17 06 05*'] },
  'fassadenplatten-ausbauen': { aboutTerms: ['Asbestzement'], mentionsTerms: ['Eternit', 'Materialanalyse'], mentionsRegs: ['TRGS 519', 'AVV 17 06 05*'] },
  'asbestzement-ausbauen': { aboutTerms: ['Asbestzement'], mentionsTerms: ['Eternit', 'Chrysotil'], mentionsRegs: ['TRGS 519', 'AVV 17 06 05*'] },
  'floor-flex-entfernen': { aboutTerms: ['Floor-Flex-Platten'], mentionsTerms: ['Chrysotil', 'Bitumenkleber', 'Materialanalyse', 'Freimessung'], mentionsRegs: ['TRGS 519', 'AVV 17 06 05*'] },
  'bitumenkleber-entfernen': { aboutTerms: ['Bitumenkleber'], mentionsTerms: ['Floor-Flex-Platten', 'Materialanalyse'], mentionsRegs: ['TRGS 519', 'AVV 17 06 05*'] },
  'cushion-vinyl-entfernen': { aboutTerms: ['Asbest'], mentionsTerms: ['Materialanalyse', 'Freimessung'], mentionsRegs: ['TRGS 519', 'AVV 17 06 05*'] },
  'fensterbaenke-ausbauen': { aboutTerms: ['Asbestzement'], mentionsTerms: ['Eternit', 'Materialanalyse'], mentionsRegs: ['TRGS 519', 'AVV 17 06 05*'] },
  materialanalyse: { aboutTerms: ['Materialanalyse'], mentionsTerms: ['Asbest'], mentionsRegs: ['TRGS 519'] },
  'luftanalysen-vdi-3492': { aboutTerms: ['Freimessung'], mentionsTerms: ['Asbest'], mentionsRegs: ['VDI 3492', 'TRGS 519'] },
  'kmf-sanierung': { aboutTerms: ['Künstliche Mineralfaser'], mentionsRegs: ['TRGS 521', 'AVV 17 06 03*'] },
  'pak-sanierung': { aboutTerms: ['Polyzyklische aromatische Kohlenwasserstoffe'], mentionsRegs: ['TRGS 524'] },
  abbrucharbeiten: { aboutTerms: ['ASI-Arbeiten'], mentionsTerms: ['Asbestkataster', 'Anzeigepflicht', 'Freimessung'], mentionsRegs: ['TRGS 519', 'GefStoffV', 'AVV 17 06 05*'] },
};

/** Entity-Verknuepfung fuer einen Ratgeber-Slug (leer, wenn nicht kuratiert). */
export function ratgeberEntities(slug: string): ContentEntities {
  return RATGEBER_ENTITIES[slug] ?? {};
}

/** Entity-Verknuepfung fuer eine Leistung (leer, wenn nicht kuratiert). */
export function leistungEntities(slug: string): ContentEntities {
  return LEISTUNG_ENTITIES[slug] ?? {};
}

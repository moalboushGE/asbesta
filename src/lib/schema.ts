import { site, owner, qualifikationen } from '../data/site';
import { leistungen } from '../data/leistungen';
import { standorte } from '../data/standorte';
import { googleReviewsUrl } from '../data/bewertungen';
import { definitionen, wissenMeta, wissenLicense, wissensFaqs, type Definition } from '../data/wissen';

/** JSON-LD-Builder (framework-frei, unit-testbar – Plan Kap. 8.1). */

export interface FaqItem {
  readonly frage: string;
  readonly antwort: string;
}

export interface Crumb {
  readonly name: string;
  readonly url: string;
}

const ORG_ID = '#organization';
const PERSON_ID = '#owner';

/** NRW als Servicegebiet inkl. konkreter Einsatzstädte (belegbar aus standorte) – stärkeres Local-Signal. */
function nrwAreaServed(): Record<string, unknown> {
  return {
    '@type': 'AdministrativeArea',
    name: 'Nordrhein-Westfalen',
    containsPlace: standorte.map((s) => ({ '@type': 'City', name: s.name })),
  };
}

/** Inhaber als Person-Knoten mit echten, nachgewiesenen Qualifikationen (E-E-A-T). */
function personNode(origin: string): Record<string, unknown> {
  return {
    '@type': 'Person',
    '@id': origin + '/' + PERSON_ID,
    url: origin + '/ueber-uns/#qualifikationen',
    name: owner.name,
    jobTitle: owner.role,
    worksFor: { '@id': origin + '/' + ORG_ID },
    knowsAbout: ['Asbestsanierung', 'Schadstoffsanierung', 'TRGS 519', 'TRGS 524', 'Gefahrstoffe'],
    hasCredential: qualifikationen.map((q) => ({
      '@type': 'EducationalOccupationalCredential',
      name: q.title,
      credentialCategory: 'certification',
      recognizedBy: { '@type': 'Organization', name: q.issuer, ...(q.issuerUrl ? { url: q.issuerUrl } : {}) },
      url: origin + '/ueber-uns/#qualifikationen',
      ...(q.validUntil ? { description: `Gültig bis ${q.validUntil}.` } : {}),
    })),
  };
}

/** HowTo-Knoten aus den Ablaufschritten einer Leistung – macht den Sanierungsprozess maschinenlesbar. */
function howToNode(
  name: string,
  steps: readonly { titel: string; text: string }[],
): Record<string, unknown> {
  return {
    '@type': 'HowTo',
    name: `Ablauf: ${name}`,
    inLanguage: 'de-DE',
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.titel,
      text: s.text,
    })),
  };
}

/** Vollständiger, sitewide identischer LocalBusiness-Knoten (Entity-Hub für SEO/GEO).
 *  Bewusst OHNE openingHours/priceRange – diese erst eintragen, wenn echte Daten vorliegen.
 *  Bewusst OHNE aggregateRating/review am Org-Knoten: Selbst-ausgespielte (aus dem Google-
 *  Profil aggregierte) Bewertungen sind laut Google-Review-Snippet-Policy nicht stern-fähig
 *  und ein Risiko für eine manuelle Maßnahme. Die echten Rezensionen bleiben sichtbar auf der
 *  Startseite gerendert; die Verbindung läuft ehrlich über sameAs auf das Google-Business-Profil. */
function organizationNode(origin: string): Record<string, unknown> {
  const telephone = site.phone.href.replace('tel:', '');
  const node: Record<string, unknown> = {
    '@type': ['Organization', 'HomeAndConstructionBusiness'],
    '@id': origin + '/' + ORG_ID,
    name: site.legalName,
    alternateName: site.name,
    url: origin + '/',
    slogan: site.claim,
    knowsLanguage: ['de'],
    telephone,
    email: site.email,
    image: { '@type': 'ImageObject', url: origin + '/og.png', width: 1200, height: 630 },
    logo: { '@type': 'ImageObject', url: origin + '/logo.png' },
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      postalCode: site.address.zip,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: 'DE',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 51.6713862, longitude: 7.1535892 },
    founder: { '@id': origin + '/' + PERSON_ID },
    areaServed: ['Nordrhein-Westfalen', ...standorte.map((s) => s.name)],
    knowsAbout: leistungen.map((l) => l.title),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone,
      contactType: 'customer service',
      areaServed: 'DE',
      availableLanguage: ['de'],
    },
    sameAs: [googleReviewsUrl, site.whatsapp.href],
  };
  return node;
}

export function breadcrumbNode(origin: string, crumbs: readonly Crumb[]): Record<string, unknown> {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: origin + crumb.url,
    })),
  };
}

export interface ListEntry {
  readonly name: string;
  readonly url: string;
}

/** Hub-Seite: Organization + CollectionPage + ItemList + Breadcrumb (z. B. /leistungen, /standorte). */
export function buildCollectionGraph(
  origin: string,
  args: { name: string; crumb: string; description: string; path: string; items: readonly ListEntry[] },
): unknown[] {
  const url = origin + args.path;
  return [
    organizationNode(origin),
    personNode(origin),
    {
      '@type': 'CollectionPage',
      '@id': url,
      url,
      name: args.name,
      description: args.description,
      isPartOf: { '@id': origin + '/' + ORG_ID },
    },
    {
      '@type': 'ItemList',
      itemListElement: args.items.map((it, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: it.name,
        url: it.url,
      })),
    },
    breadcrumbNode(origin, [
      { name: 'Start', url: '/' },
      { name: args.crumb, url: args.path },
    ]),
  ];
}

/** Einfache indexierbare Seite: Organization + WebPage/ContactPage/AboutPage + Breadcrumb.
 *  `withPerson` ergänzt den Inhaber-Knoten (E-E-A-T) – z. B. auf der Über-uns-Seite. */
export function buildBasicPageGraph(
  origin: string,
  args: {
    type: string;
    name: string;
    crumb: string;
    description: string;
    path: string;
    withPerson?: boolean;
  },
): unknown[] {
  const url = origin + args.path;
  const page: Record<string, unknown> = {
    '@type': args.type,
    '@id': url,
    url,
    name: args.name,
    description: args.description,
    isPartOf: { '@id': origin + '/' + ORG_ID },
  };
  if (args.withPerson) {
    page.about = { '@id': origin + '/' + PERSON_ID };
  }
  // personNode immer mitgeben: organizationNode referenziert #owner via founder.
  const graph: unknown[] = [organizationNode(origin), personNode(origin), page];
  graph.push(
    breadcrumbNode(origin, [
      { name: 'Start', url: '/' },
      { name: args.crumb, url: args.path },
    ]),
  );
  return graph;
}

export function faqNode(faqs: readonly FaqItem[], url?: string): Record<string, unknown> {
  const node: Record<string, unknown> = {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.frage,
      acceptedAnswer: { '@type': 'Answer', text: faq.antwort },
    })),
  };
  if (url) {
    node['@id'] = url + '#faq';
    node.url = url;
    node.inLanguage = 'de-DE';
    node.isPartOf = { '@id': url };
  }
  return node;
}

export interface ServiceGraphArgs {
  readonly origin: string;
  readonly title: string;
  readonly description: string;
  readonly path: string;
  readonly faqs: readonly FaqItem[];
  /** Ablaufschritte der Leistung -> HowTo-Knoten (optional). */
  readonly ablauf?: readonly { titel: string; text: string }[];
}

export function buildServiceGraph(args: ServiceGraphArgs): unknown[] {
  const url = args.origin + args.path;
  const graph: unknown[] = [
    organizationNode(args.origin),
    {
      '@type': 'Service',
      '@id': url + '#service',
      name: args.title,
      serviceType: args.title,
      description: args.description,
      provider: { '@id': args.origin + '/' + ORG_ID },
      areaServed: nrwAreaServed(),
      url,
      mainEntityOfPage: { '@id': url },
    },
    {
      '@type': 'WebPage',
      '@id': url,
      url,
      name: args.title,
      description: args.description,
      inLanguage: 'de-DE',
      isPartOf: { '@id': args.origin + '/' + ORG_ID },
      mainEntity: { '@id': url + '#service' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
    },
    personNode(args.origin),
    breadcrumbNode(args.origin, [
      { name: 'Start', url: '/' },
      { name: 'Leistungen', url: '/leistungen/' },
      { name: args.title, url: args.path },
    ]),
  ];
  if (args.ablauf && args.ablauf.length > 0) {
    graph.push(howToNode(args.title, args.ablauf));
  }
  if (args.faqs.length > 0) {
    graph.push(faqNode(args.faqs, url));
  }
  return graph;
}

export interface LocationGraphArgs {
  readonly origin: string;
  readonly city: string;
  readonly description: string;
  readonly path: string;
  readonly faqs: readonly FaqItem[];
}

export function buildLocationGraph(args: LocationGraphArgs): unknown[] {
  const url = args.origin + args.path;
  const graph: unknown[] = [
    // Sitz bleibt Marl (organizationNode); die Stadt ist Servicegebiet - KEINE fiktive Lokaladresse.
    organizationNode(args.origin),
    {
      '@type': 'Service',
      '@id': url + '#service',
      name: `Asbest- und Schadstoffsanierung ${args.city}`,
      serviceType: 'Schadstoffsanierung',
      description: args.description,
      provider: { '@id': args.origin + '/' + ORG_ID },
      areaServed: { '@type': 'City', name: args.city },
      url,
      mainEntityOfPage: { '@id': url },
    },
    {
      '@type': 'WebPage',
      '@id': url,
      url,
      name: `Asbest- und Schadstoffsanierung in ${args.city}`,
      description: args.description,
      inLanguage: 'de-DE',
      isPartOf: { '@id': args.origin + '/' + ORG_ID },
      mainEntity: { '@id': url + '#service' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
    },
    personNode(args.origin),
    breadcrumbNode(args.origin, [
      { name: 'Start', url: '/' },
      { name: 'Standorte', url: '/standorte/' },
      { name: args.city, url: args.path },
    ]),
  ];
  if (args.faqs.length > 0) {
    graph.push(faqNode(args.faqs, url));
  }
  return graph;
}

export interface ServiceLocationGraphArgs {
  readonly origin: string;
  readonly leistungTitle: string;
  readonly leistungPath: string;
  readonly city: string;
  readonly description: string;
  readonly path: string;
  readonly faqs: readonly FaqItem[];
}

export function buildServiceLocationGraph(args: ServiceLocationGraphArgs): unknown[] {
  const url = args.origin + args.path;
  const graph: unknown[] = [
    organizationNode(args.origin),
    {
      '@type': 'Service',
      '@id': url + '#service',
      name: `${args.leistungTitle} ${args.city}`,
      serviceType: args.leistungTitle,
      description: args.description,
      provider: { '@id': args.origin + '/' + ORG_ID },
      areaServed: { '@type': 'City', name: args.city },
      url,
      mainEntityOfPage: { '@id': url },
    },
    {
      '@type': 'WebPage',
      '@id': url,
      url,
      name: `${args.leistungTitle} in ${args.city}`,
      description: args.description,
      inLanguage: 'de-DE',
      isPartOf: { '@id': args.origin + '/' + ORG_ID },
      mainEntity: { '@id': url + '#service' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
    },
    personNode(args.origin),
    breadcrumbNode(args.origin, [
      { name: 'Start', url: '/' },
      { name: 'Leistungen', url: '/leistungen/' },
      { name: args.leistungTitle, url: args.leistungPath },
      { name: args.city, url: args.path },
    ]),
  ];
  if (args.faqs.length > 0) {
    graph.push(faqNode(args.faqs, url));
  }
  return graph;
}

export interface ArticleGraphArgs {
  readonly origin: string;
  readonly title: string;
  readonly description: string;
  readonly path: string;
  /** Absolute Bild-URL (z. B. origin + Hero-Pfad). */
  readonly image: string;
  /** Bildmaße für ein ImageObject (empfohlen für Article-Rich-Results). */
  readonly imageWidth?: number;
  readonly imageHeight?: number;
  /** Rubrik (z. B. „Ratgeber Asbest") -> articleSection. */
  readonly kategorie?: string;
  /** ISO-Datum (YYYY-MM-DD). */
  readonly datePublished: string;
  readonly dateModified: string;
  readonly author: string;
  readonly faqs: readonly FaqItem[];
}

/** Ratgeber-Beitrag: Article (E-E-A-T) + WebPage + Breadcrumb + optional FAQPage. */
export function buildArticleGraph(args: ArticleGraphArgs): unknown[] {
  const url = args.origin + args.path;
  const graph: unknown[] = [
    organizationNode(args.origin),
    {
      '@type': 'Article',
      '@id': url + '#article',
      headline: args.title,
      description: args.description,
      image:
        args.imageWidth && args.imageHeight
          ? { '@type': 'ImageObject', url: args.image, width: args.imageWidth, height: args.imageHeight }
          : args.image,
      ...(args.kategorie ? { articleSection: args.kategorie } : {}),
      datePublished: args.datePublished,
      dateModified: args.dateModified,
      author: { '@id': args.origin + '/' + PERSON_ID },
      publisher: { '@id': args.origin + '/' + ORG_ID },
      mainEntityOfPage: url,
      inLanguage: 'de-DE',
    },
    personNode(args.origin),
    {
      '@type': 'WebPage',
      '@id': url,
      url,
      name: args.title,
      description: args.description,
      inLanguage: 'de-DE',
      isPartOf: { '@id': args.origin + '/' + ORG_ID },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
    },
    breadcrumbNode(args.origin, [
      { name: 'Start', url: '/' },
      { name: 'Ratgeber', url: '/ratgeber/' },
      { name: args.title, url: args.path },
    ]),
  ];
  if (args.faqs.length > 0) {
    graph.push(faqNode(args.faqs, url));
  }
  return graph;
}

// ---------------------------------------------------------------------------
// Wissen / Dataset (GEO): DefinedTermSet, Dataset und Graph-Assembler.
// ---------------------------------------------------------------------------
const WISSEN_PATH = '/wissen/';
const TERMSET_ID = '#wissen-termset';

function slugifyTerm(s: string): string {
  return s
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-/, '')
    .replace(/-$/, '');
}

function termId(origin: string, term: string): string {
  return origin + WISSEN_PATH + '#term-' + slugifyTerm(term);
}

/** Glossar-Begriffe als DefinedTerm-Knoten (auch von entities.json wiederverwendet). */
export function definedTermNodes(origin: string, defs: readonly Definition[]): Record<string, unknown>[] {
  return defs.map((d) => {
    const node: Record<string, unknown> = {
      '@type': 'DefinedTerm',
      '@id': termId(origin, d.term),
      name: d.abbr ? `${d.term} (${d.abbr})` : d.term,
      description: d.definition,
      inDefinedTermSet: { '@id': origin + WISSEN_PATH + TERMSET_ID },
    };
    if (d.altLabel && d.altLabel.length > 0) node.alternateName = [...d.altLabel];
    if (d.kategorie === 'Dokument') node.termCode = d.abbr ?? d.term;
    if (d.sameAs && d.sameAs.length > 0) node.sameAs = [...d.sameAs];
    return node;
  });
}

export function definedTermSetNode(origin: string, defs: readonly Definition[]): Record<string, unknown> {
  return {
    '@type': 'DefinedTermSet',
    '@id': origin + WISSEN_PATH + TERMSET_ID,
    name: 'Glossar: Asbest- & Schadstoffsanierung',
    inLanguage: 'de',
    hasDefinedTerm: defs.map((d) => ({ '@id': termId(origin, d.term) })),
  };
}

/** schema.org/Dataset für /wissen/ – Google-Dataset-Search-fähig; verweist per @id auf Org/Owner. */
export function datasetNode(origin: string): Record<string, unknown> {
  const url = origin + WISSEN_PATH;
  const node: Record<string, unknown> = {
    '@type': 'Dataset',
    '@id': url + '#dataset',
    name: wissenMeta.name, // Pflichtfeld
    description: wissenMeta.description, // Pflichtfeld
    url,
    identifier: url,
    inLanguage: wissenMeta.inLanguage,
    datePublished: wissenMeta.datePublished,
    dateModified: wissenMeta.dateModified,
    keywords: [...wissenMeta.keywords],
    isAccessibleForFree: wissenLicense.isAccessibleForFree,
    creator: { '@id': origin + '/' + ORG_ID },
    publisher: { '@id': origin + '/' + ORG_ID },
    maintainer: { '@id': origin + '/' + PERSON_ID },
    spatialCoverage: {
      '@type': 'AdministrativeArea',
      name: 'Nordrhein-Westfalen',
      containsPlace: standorte.map((s) => ({ '@type': 'City', name: s.name })),
    },
    about: definitionen.map((d) => ({ '@id': termId(origin, d.term) })),
    hasPart: [{ '@id': url + '#faq' }, { '@id': origin + WISSEN_PATH + TERMSET_ID }],
    distribution: [
      { '@type': 'DataDownload', name: 'Strukturierte Fakten (JSON)', encodingFormat: 'application/json', contentUrl: origin + '/facts.json' },
      { '@type': 'DataDownload', name: 'Entitäten / Knowledge Graph (JSON-LD)', encodingFormat: 'application/ld+json', contentUrl: origin + '/entities.json' },
      { '@type': 'DataDownload', name: 'LLM-Index (Text)', encodingFormat: 'text/plain', contentUrl: origin + '/llms.txt' },
      { '@type': 'DataDownload', name: 'LLM-Volltext (Text)', encodingFormat: 'text/plain', contentUrl: origin + '/llms-full.txt' },
    ],
  };
  if (wissenLicense.license) node.license = wissenLicense.license;
  return node;
}

/** Voller /wissen/-Graph: Org + Person + WebPage + Dataset + DefinedTermSet + Terms + FAQPage + Breadcrumb. */
export function buildWissenGraph(origin: string): unknown[] {
  const url = origin + WISSEN_PATH;
  return [
    organizationNode(origin),
    personNode(origin),
    {
      '@type': 'WebPage',
      '@id': url,
      url,
      name: wissenMeta.name,
      description: wissenMeta.description,
      inLanguage: 'de-DE',
      isPartOf: { '@id': origin + '/' + ORG_ID },
      about: { '@id': url + '#dataset' },
      author: { '@id': origin + '/' + PERSON_ID },
      reviewedBy: { '@id': origin + '/' + PERSON_ID },
      dateModified: wissenMeta.dateModified,
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
    },
    datasetNode(origin),
    definedTermSetNode(origin, definitionen),
    ...definedTermNodes(origin, definitionen),
    faqNode(wissensFaqs, url),
    breadcrumbNode(origin, [
      { name: 'Start', url: '/' },
      { name: 'Wissen', url: '/wissen/' },
    ]),
  ];
}

/** entities.json als valides JSON-LD @graph: Org + Person + Services + DefinedTermSet/Terms + Dataset. */
export function buildEntitiesGraph(origin: string): unknown[] {
  return [
    organizationNode(origin),
    personNode(origin),
    ...leistungen.map((l) => ({
      '@type': 'Service',
      '@id': origin + '/leistungen/' + l.slug + '/#service',
      name: l.title,
      serviceType: l.title,
      url: origin + '/leistungen/' + l.slug + '/',
      provider: { '@id': origin + '/' + ORG_ID },
      areaServed: nrwAreaServed(),
    })),
    definedTermSetNode(origin, definitionen),
    ...definedTermNodes(origin, definitionen),
    datasetNode(origin),
  ];
}

/** Voller Startseiten-Graph: Entity-Hub (Organization/LocalBusiness) + WebSite + WebPage (speakable). */
export function buildHomeGraph(origin: string): unknown[] {
  const orgId = origin + '/' + ORG_ID;
  return [
    organizationNode(origin),
    personNode(origin),
    {
      '@type': 'WebSite',
      '@id': origin + '/#website',
      url: origin + '/',
      name: site.legalName,
      inLanguage: 'de-DE',
      publisher: { '@id': orgId },
    },
    {
      '@type': 'WebPage',
      '@id': origin + '/',
      url: origin + '/',
      name: 'Asbestsanierung Marl & NRW | Asbesta Schadstoffsanierung',
      isPartOf: { '@id': origin + '/#website' },
      about: { '@id': orgId },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
    },
  ];
}

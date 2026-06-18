import { site, owner, qualifikationen } from '../data/site';
import { leistungen } from '../data/leistungen';
import { standorte } from '../data/standorte';

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

/** Inhaber als Person-Knoten mit echten, nachgewiesenen Qualifikationen (E-E-A-T). */
function personNode(origin: string): Record<string, unknown> {
  return {
    '@type': 'Person',
    '@id': origin + '/' + PERSON_ID,
    name: owner.name,
    jobTitle: owner.role,
    worksFor: { '@id': origin + '/' + ORG_ID },
    knowsAbout: ['Asbestsanierung', 'Schadstoffsanierung', 'TRGS 519', 'TRGS 524', 'Gefahrstoffe'],
    hasCredential: qualifikationen.map((q) => ({
      '@type': 'EducationalOccupationalCredential',
      name: q.title,
      credentialCategory: 'certification',
      recognizedBy: { '@type': 'Organization', name: q.issuer },
      ...(q.validUntil ? { description: `Gültig bis ${q.validUntil}.` } : {}),
    })),
  };
}

/** Vollständiger, sitewide identischer LocalBusiness-Knoten (Entity-Hub für SEO/GEO).
 *  Bewusst OHNE openingHours/priceRange/sameAs – diese erst eintragen, wenn echte Daten
 *  bzw. ein Google-Business-Profil vorliegen (keine erfundenen Angaben). */
function organizationNode(origin: string): Record<string, unknown> {
  const telephone = site.phone.href.replace('tel:', '');
  return {
    '@type': ['Organization', 'HomeAndConstructionBusiness'],
    '@id': origin + '/' + ORG_ID,
    name: site.legalName,
    alternateName: site.name,
    url: origin + '/',
    telephone,
    email: site.email,
    image: origin + '/og.png',
    logo: origin + '/og.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      postalCode: site.address.zip,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: 'DE',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 51.6539, longitude: 7.0917 },
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
  };
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
  const graph: unknown[] = [organizationNode(origin), page];
  if (args.withPerson) {
    graph.push(personNode(origin));
  }
  graph.push(
    breadcrumbNode(origin, [
      { name: 'Start', url: '/' },
      { name: args.crumb, url: args.path },
    ]),
  );
  return graph;
}

export function faqNode(faqs: readonly FaqItem[]): Record<string, unknown> {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.frage,
      acceptedAnswer: { '@type': 'Answer', text: faq.antwort },
    })),
  };
}

export interface ServiceGraphArgs {
  readonly origin: string;
  readonly title: string;
  readonly description: string;
  readonly path: string;
  readonly faqs: readonly FaqItem[];
}

export function buildServiceGraph(args: ServiceGraphArgs): unknown[] {
  const url = args.origin + args.path;
  const graph: unknown[] = [
    organizationNode(args.origin),
    {
      '@type': 'Service',
      name: args.title,
      serviceType: args.title,
      description: args.description,
      provider: { '@id': args.origin + '/' + ORG_ID },
      areaServed: { '@type': 'AdministrativeArea', name: 'Nordrhein-Westfalen' },
      url,
    },
    {
      '@type': 'WebPage',
      '@id': url,
      url,
      name: args.title,
      description: args.description,
      isPartOf: { '@id': args.origin + '/' + ORG_ID },
    },
    breadcrumbNode(args.origin, [
      { name: 'Start', url: '/' },
      { name: 'Leistungen', url: '/leistungen/' },
      { name: args.title, url: args.path },
    ]),
  ];
  if (args.faqs.length > 0) {
    graph.push(faqNode(args.faqs));
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
      name: `Asbest- und Schadstoffsanierung ${args.city}`,
      serviceType: 'Schadstoffsanierung',
      provider: { '@id': args.origin + '/' + ORG_ID },
      areaServed: { '@type': 'City', name: args.city },
      url,
    },
    {
      '@type': 'WebPage',
      '@id': url,
      url,
      name: `Asbest- und Schadstoffsanierung in ${args.city}`,
      description: args.description,
      isPartOf: { '@id': args.origin + '/' + ORG_ID },
    },
    breadcrumbNode(args.origin, [
      { name: 'Start', url: '/' },
      { name: 'Standorte', url: '/standorte/' },
      { name: args.city, url: args.path },
    ]),
  ];
  if (args.faqs.length > 0) {
    graph.push(faqNode(args.faqs));
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
      name: `${args.leistungTitle} ${args.city}`,
      serviceType: args.leistungTitle,
      provider: { '@id': args.origin + '/' + ORG_ID },
      areaServed: { '@type': 'City', name: args.city },
      url,
    },
    {
      '@type': 'WebPage',
      '@id': url,
      url,
      name: `${args.leistungTitle} in ${args.city}`,
      description: args.description,
      isPartOf: { '@id': args.origin + '/' + ORG_ID },
    },
    breadcrumbNode(args.origin, [
      { name: 'Start', url: '/' },
      { name: 'Leistungen', url: '/leistungen/' },
      { name: args.leistungTitle, url: args.leistungPath },
      { name: args.city, url: args.path },
    ]),
  ];
  if (args.faqs.length > 0) {
    graph.push(faqNode(args.faqs));
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
      image: args.image,
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
      isPartOf: { '@id': args.origin + '/' + ORG_ID },
    },
    breadcrumbNode(args.origin, [
      { name: 'Start', url: '/' },
      { name: 'Ratgeber', url: '/ratgeber/' },
      { name: args.title, url: args.path },
    ]),
  ];
  if (args.faqs.length > 0) {
    graph.push(faqNode(args.faqs));
  }
  return graph;
}

/** Voller Startseiten-Graph: Entity-Hub (Organization/LocalBusiness) + WebSite + WebPage (speakable). */
export function buildHomeGraph(origin: string): unknown[] {
  const orgId = origin + '/' + ORG_ID;
  return [
    organizationNode(origin),
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

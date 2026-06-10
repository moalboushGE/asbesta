import { site } from '../data/site';
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

function organizationNode(origin: string): Record<string, unknown> {
  return {
    '@type': ['Organization', 'HomeAndConstructionBusiness'],
    '@id': origin + '/' + ORG_ID,
    name: site.legalName,
    url: origin + '/',
    telephone: site.phone.href.replace('tel:', ''),
    areaServed: { '@type': 'AdministrativeArea', name: 'Nordrhein-Westfalen' },
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      postalCode: site.address.zip,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: 'DE',
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

/** Voller Startseiten-Graph: Entity-Hub (Organization/LocalBusiness) + WebSite + WebPage (speakable). */
export function buildHomeGraph(origin: string): unknown[] {
  const orgId = origin + '/' + ORG_ID;
  return [
    {
      '@type': ['Organization', 'HomeAndConstructionBusiness'],
      '@id': orgId,
      name: site.legalName,
      alternateName: site.name,
      url: origin + '/',
      telephone: site.phone.href.replace('tel:', ''),
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
      areaServed: ['Nordrhein-Westfalen', ...standorte.map((s) => s.name)],
      knowsAbout: leistungen.map((l) => l.title),
    },
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

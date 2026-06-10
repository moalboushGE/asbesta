import { site } from '../data/site';

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

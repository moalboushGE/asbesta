import type { APIRoute } from 'astro';
import { site, owner, qualifikationen } from '../data/site';
import { leistungen } from '../data/leistungen';
import { leistungenDetail } from '../data/leistungen-detail';
import { ratgeberArtikel } from '../data/ratgeber';
import { standorte } from '../data/standorte';
import { resolveOrigin } from '../lib/origin';

// facts.json: maschinenlesbare Firmenfakten (Single Source of Truth fuer AI-Crawler & Entwickler).
export const GET: APIRoute = (context) => {
  const origin = resolveOrigin(context.site);

  // Frage-Antwort-Wissen aus den echten Leistungs- & Ratgeber-FAQs (KI-Zitierfaehigkeit).
  // Kombi-FAQs bewusst ausgelassen (Near-Duplicate-Vermeidung).
  const faq = [
    ...leistungen.flatMap((l) => {
      const d = leistungenDetail[l.slug];
      return d
        ? d.faqs.map((f) => ({
            question: f.frage,
            answer: f.antwort,
            topic: l.title,
            source: `${origin}/leistungen/${l.slug}/`,
          }))
        : [];
    }),
    ...ratgeberArtikel.flatMap((a) =>
      a.faqs.map((f) => ({
        question: f.frage,
        answer: f.antwort,
        topic: a.title,
        source: `${origin}/ratgeber/${a.slug}/`,
      })),
    ),
  ];

  const facts = {
    updated: '2026-06-18',
    organization: {
      name: site.legalName,
      shortName: site.name,
      url: origin + '/',
      telephone: site.phone.display,
      whatsapp: site.whatsapp.href,
      email: site.email,
      address: {
        street: site.address.street,
        postalCode: site.address.zip,
        city: site.address.city,
        region: site.address.region,
        country: site.address.country,
      },
      areaServed: 'Nordrhein-Westfalen, Schwerpunkt Ruhrgebiet / Emscher-Lippe-Region und Rheinland',
      serviceCities: standorte.map((s) => s.name),
      certifications: site.certifications,
      owner: {
        name: owner.name,
        role: owner.role,
        credentials: qualifikationen.map((q) => ({
          name: q.title,
          issuer: q.issuer,
          ...(q.validUntil ? { validUntil: q.validUntil } : {}),
        })),
      },
      ownerLed: true,
      insurance: 'Betriebshaftpflicht',
      documentation: 'Freimessung nach VDI 3492 + Entsorgungsnachweis',
      responseTime: site.responseTime,
    },
    services: leistungen.map((l) => ({
      slug: l.slug,
      name: l.title,
      summary: l.summary,
      url: `${origin}/leistungen/${l.slug}/`,
    })),
    faq,
    disclaimer:
      'Arbeiten an asbesthaltigen Materialien dürfen in Deutschland nur durch sachkundige Fachbetriebe nach TRGS 519 ausgeführt werden.',
  };

  return new Response(JSON.stringify(facts, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};

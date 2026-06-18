import type { APIRoute } from 'astro';
import { site, owner, qualifikationen } from '../data/site';
import { leistungen } from '../data/leistungen';
import { standorte } from '../data/standorte';
import { resolveOrigin } from '../lib/origin';

// facts.json: maschinenlesbare Firmenfakten (Single Source of Truth fuer AI-Crawler & Entwickler).
export const GET: APIRoute = (context) => {
  const origin = resolveOrigin(context.site);

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
      stats: {
        projects: '1000+',
        yearsExperience: '15+',
      },
      responseTime: site.responseTime,
    },
    services: leistungen.map((l) => ({
      slug: l.slug,
      name: l.title,
      summary: l.summary,
      url: `${origin}/leistungen/${l.slug}/`,
    })),
    disclaimer:
      'Arbeiten an asbesthaltigen Materialien dürfen in Deutschland nur durch sachkundige Fachbetriebe nach TRGS 519 ausgeführt werden.',
  };

  return new Response(JSON.stringify(facts, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};

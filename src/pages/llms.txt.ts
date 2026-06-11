import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { leistungen } from '../data/leistungen';
import { resolveOrigin } from '../lib/origin';

// llms.txt (Konvention llmstxt.org): kompakter, kuratierter Einstieg fuer LLMs.
export const GET: APIRoute = (context) => {
  const origin = resolveOrigin(context.site);
  const leistungsLinks = leistungen
    .map((l) => `- [${l.title}](${origin}/leistungen/${l.slug}/): ${l.summary}`)
    .join('\n');

  const md = `# ${site.legalName}

> ${site.intro}

Inhabergefuehrter Fachbetrieb aus Marl fuer ganz Nordrhein-Westfalen. Zertifiziert nach ${site.certifications.join(', ')}. Kennzahlen: ${site.stats.map((s) => `${s.value} ${s.label}`).join(', ')}.

Kontakt: Telefon ${site.phone.display}, WhatsApp ${site.whatsapp.href}, ${site.address.street}, ${site.address.zip} ${site.address.city}.

## Leistungen
${leistungsLinks}

## Wichtige Seiten
- [Startseite](${origin}/)
- [Alle Leistungen](${origin}/leistungen/)
- [Kontakt](${origin}/kontakt/)

## Maschinenlesbare Daten
- [Strukturierte Fakten (JSON)](${origin}/facts.json)
- [Entitäten (JSON)](${origin}/entities.json)
- [Volltext fuer LLMs](${origin}/llms-full.txt)

## Hinweis
Asbest ist gesundheitsgefaehrdend. Arbeiten an asbesthaltigen Materialien duerfen in Deutschland nur durch sachkundige Fachbetriebe nach TRGS 519 ausgefuehrt werden.
`;

  return new Response(md, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

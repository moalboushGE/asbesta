import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { leistungen } from '../data/leistungen';
import { leistungenDetail } from '../data/leistungen-detail';
import { standorte } from '../data/standorte';
import { resolveOrigin } from '../lib/origin';

// llms-full.txt: ausfuehrlicher Volltext (Firma + alle Leistungen) fuer LLM-Kontext.
export const GET: APIRoute = (context) => {
  const origin = resolveOrigin(context.site);

  const services = leistungen
    .map((l) => {
      const d = leistungenDetail[l.slug];
      const intro = d ? d.heroIntro : l.summary;
      const body = d ? d.einleitung.join('\n\n') : '';
      const umfang = d ? d.leistungsumfang.map((x) => `- ${x}`).join('\n') : '';
      return `### ${l.title}\nURL: ${origin}/leistungen/${l.slug}/\n\n${intro}\n\n${body}\n\nLeistungsumfang:\n${umfang}`;
    })
    .join('\n\n---\n\n');

  const md = `# ${site.legalName} — Volltext

${site.intro}

Standort: ${site.address.street}, ${site.address.zip} ${site.address.city} (${site.address.region}). Einsatzgebiet: Nordrhein-Westfalen, Schwerpunkt Ruhrgebiet / Emscher-Lippe-Region und Rheinland. Eigene Standortseiten: ${standorte.map((s) => s.name).join(', ')}.
Kontakt: Telefon ${site.phone.display}, WhatsApp ${site.whatsapp.href}.
Zertifizierung & Qualifikation: ${site.certifications.join(', ')}; sachkundige Mitarbeiter nach TRGS 519 Anlage 3; arbeitsmedizinische Vorsorge; volle Betriebshaftpflicht.
Kennzahlen: ${site.stats.map((s) => `${s.value} ${s.label}`).join(', ')}.

## Leistungen im Detail

${services}
`;

  return new Response(md, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

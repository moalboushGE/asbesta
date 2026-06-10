import type { APIRoute } from 'astro';
import { resolveOrigin } from '../lib/origin';

// AI-/Retrieval-Bots ausdruecklich erlaubt (GEO). Kein Inhalt wird blockiert.
const AI_BOTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'ClaudeBot',
  'Claude-Web',
  'Applebot-Extended',
  'CCBot',
];

export const GET: APIRoute = (context) => {
  const origin = resolveOrigin(context.site);
  const blocks = [
    'User-agent: *',
    'Allow: /',
    '',
    '# AI-/Retrieval-Crawler ausdruecklich erlaubt',
    ...AI_BOTS.flatMap((bot) => [`User-agent: ${bot}`, 'Allow: /', '']),
    `Sitemap: ${origin}/sitemap-index.xml`,
    `# Maschinenlesbare Uebersicht fuer LLMs: ${origin}/llms.txt`,
    '',
  ];
  return new Response(blocks.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

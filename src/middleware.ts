// Zentrales Auth-Gate. Schützt /admin/** und /api/admin/** (außer Login). Läuft im
// @astrojs/node middleware-mode für alle on-demand-Routen (prerendizte Seiten durchlaufen es nicht –
// deshalb MÜSSEN alle Admin-Seiten prerender=false sein).
import { defineMiddleware } from 'astro:middleware';
import { verifyToken, COOKIE } from './lib/admin-auth';

function istGeschuetzt(p: string): boolean {
  return p.startsWith('/admin') || p.startsWith('/api/admin');
}

export const onRequest = defineMiddleware((ctx, next) => {
  const p = ctx.url.pathname;
  if (!istGeschuetzt(p)) return next();

  // CSRF-Defense-in-depth (zusätzlich zu SameSite=Lax): bei Mutationen muss der Origin-Host
  // dem Request-Host entsprechen. Astros eingebauter checkOrigin ist abgeschaltet, weil url.origin
  // im middleware-mode hinter dem Railway-Proxy fälschlich http statt https berechnet.
  const m = ctx.request.method;
  if (m !== 'GET' && m !== 'HEAD') {
    const origin = ctx.request.headers.get('origin');
    if (origin) {
      try {
        if (new URL(origin).host !== ctx.request.headers.get('host')) {
          return new Response('Forbidden', { status: 403 });
        }
      } catch {
        return new Response('Forbidden', { status: 403 });
      }
    }
  }

  // Login-Seite + Login-POST bleiben offen.
  if (p.startsWith('/admin/login')) return next();

  if (!verifyToken(ctx.cookies.get(COOKIE)?.value)) {
    if (p.startsWith('/api/admin')) return new Response('Unauthorized', { status: 401 });
    return ctx.redirect('/admin/login/');
  }
  return next();
});

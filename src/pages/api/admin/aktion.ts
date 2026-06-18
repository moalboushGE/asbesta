// Zentraler Mutations-Endpunkt fürs Dashboard (Status/Notiz/Löschen/Logout).
// Klassischer Form-POST -> 303-Redirect (Post/Redirect/Get) – funktioniert OHNE Inline-JS (CSP-konform).
// Auth + Origin-Check erfolgen in src/middleware.ts (Gate für /api/admin/**).
export const prerender = false;
import type { APIRoute } from 'astro';
import { COOKIE } from '../../../lib/admin-auth';
import { updateStatus, updateNotiz, deleteLead, istStatus } from '../../../lib/leads';

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const form = await request.formData();
  const aktion = String(form.get('aktion') ?? '');

  if (aktion === 'logout') {
    cookies.delete(COOKIE, { path: '/' });
    return redirect('/admin/login/', 303);
  }

  const id = String(form.get('id') ?? '');
  if (!id) return redirect('/admin/anfragen/', 303);

  try {
    if (aktion === 'status') {
      const s = String(form.get('status') ?? '');
      if (istStatus(s)) await updateStatus(id, s);
      return redirect(`/admin/anfragen/${id}/`, 303);
    }
    if (aktion === 'notiz') {
      await updateNotiz(id, String(form.get('notiz') ?? '').slice(0, 5000));
      return redirect(`/admin/anfragen/${id}/`, 303);
    }
    if (aktion === 'delete') {
      await deleteLead(id);
      return redirect('/admin/anfragen/', 303);
    }
  } catch (e) {
    console.error('admin_aktion_failed', aktion, e);
  }
  return redirect('/admin/anfragen/', 303);
};

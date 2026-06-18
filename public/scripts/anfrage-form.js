// Kontaktformular: Anti-Spam-Zeitstempel + asynchroner Versand an /api/anfrage/.
// Externe Datei (nicht inline) -> von CSP `script-src 'self'` abgedeckt, ohne 'unsafe-inline'.
const form = document.getElementById('anfrage-form');
if (form instanceof HTMLFormElement) {
  const tsInput = form.querySelector('input[name="ts"]');
  if (tsInput instanceof HTMLInputElement) tsInput.value = String(Date.now());

  const statusEl = document.getElementById('anfrage-status');
  const setStatus = (msg) => {
    if (statusEl) statusEl.textContent = msg;
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    setStatus('Wird gesendet …');
    try {
      const response = await fetch('/api/anfrage/', { method: 'POST', body: new FormData(form) });
      const data = await response.json();
      if (data && data.ok) {
        form.reset();
        setStatus('Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.');
      } else {
        setStatus('Bitte prüfen Sie Ihre Eingaben – oder rufen Sie uns an: +49 2365 2960630.');
      }
    } catch {
      setStatus('Senden derzeit nicht möglich. Bitte rufen Sie uns an: +49 2365 2960630.');
    }
  });
}

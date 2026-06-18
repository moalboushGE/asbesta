// Asbesta-Formulare (Haupt-Kontaktformular + Inline-Mini-Anfragen + Rückruf).
// Greift auf jedes <form data-anfrage-form>: Anti-Spam-Zeitstempel, Quelle/UTM-Befüllung,
// asynchroner Versand an /api/anfrage/, sichtbarer Erfolgs-Zustand, Conversion-Event.
// Extern (public/) -> CSP `script-src 'self'`-konform.
(function () {
  function captureSource(form) {
    var stored = {};
    try {
      stored = JSON.parse(sessionStorage.getItem('asbesta_src') || '{}');
    } catch (e) {
      stored = {};
    }
    var params = new URLSearchParams(location.search);
    ['utm_source', 'utm_medium', 'utm_campaign', 'gclid'].forEach(function (k) {
      var v = params.get(k);
      if (v && !stored[k]) stored[k] = v;
    });
    if (!stored.landingpage) stored.landingpage = location.pathname;
    if (!stored.referrer && document.referrer && document.referrer.indexOf(location.host) === -1) {
      stored.referrer = document.referrer;
    }
    try {
      sessionStorage.setItem('asbesta_src', JSON.stringify(stored));
    } catch (e) {
      /* sessionStorage evtl. blockiert */
    }
    Object.keys(stored).forEach(function (k) {
      var input = form.querySelector('input[name="' + k + '"]');
      if (input) input.value = stored[k];
    });
  }

  function successBlock(typ) {
    var div = document.createElement('div');
    div.className = 'rounded-[var(--radius-card)] border border-red-100 bg-red-50/50 p-6 text-center';
    div.setAttribute('role', 'status');
    var msg =
      typ === 'rueckruf'
        ? 'Rückruf-Wunsch eingegangen – wir melden uns zur gewünschten Zeit.'
        : 'Anfrage eingegangen – Rückmeldung innerhalb von 24 Stunden.';
    div.innerHTML =
      '<p class="font-sans text-base font-semibold text-ink-900">Vielen Dank!</p>' +
      '<p class="mt-1 text-sm text-gray-700">' +
      msg +
      '</p>' +
      '<p class="mt-3 text-sm text-gray-700">Dringend? <a class="font-semibold text-red-700 underline" href="tel:+4923652960630" data-conv="call">Jetzt anrufen: +49 2365 2960630</a></p>';
    return div;
  }

  function init(form) {
    var tsInput = form.querySelector('input[name="ts"]');
    if (tsInput) tsInput.value = String(Date.now());
    captureSource(form);
    var statusEl = form.querySelector('[data-status]');
    function setStatus(m) {
      if (statusEl) statusEl.textContent = m;
    }
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      setStatus('Wird gesendet …');
      var typInput = form.querySelector('input[name="typ"]');
      var typ = typInput ? typInput.value || 'anfrage' : 'anfrage';
      fetch('/api/anfrage/', { method: 'POST', body: new FormData(form) })
        .then(function (r) {
          return r.json();
        })
        .then(function (data) {
          if (data && data.ok) {
            if (typeof window.asbestaTrack === 'function') window.asbestaTrack('form_submit', { typ: typ });
            form.replaceWith(successBlock(typ));
          } else {
            setStatus('Bitte prüfen Sie Ihre Eingaben – oder rufen Sie uns an: +49 2365 2960630.');
          }
        })
        .catch(function () {
          setStatus('Senden derzeit nicht möglich. Bitte rufen Sie uns an: +49 2365 2960630.');
        });
    });
  }

  var forms = document.querySelectorAll('form[data-anfrage-form]');
  for (var i = 0; i < forms.length; i++) init(forms[i]);
})();

// Asbesta-Formulare (Haupt-Kontaktformular + Inline-Mini-Anfragen + Rückruf).
// Greift auf jedes <form data-anfrage-form>: Anti-Spam-Zeitstempel, Quelle/UTM-Befüllung,
// barrierefreie Pflichtfeld-Validierung (aria-invalid + Fokus), asynchroner Versand an
// /api/anfrage/, sichtbarer Erfolgs-Zustand, Conversion-Event.
// Extern (public/) -> CSP `script-src 'self'`-konform.
(function () {
  var LABELS = {
    name: 'Name',
    email: 'E-Mail',
    telefon: 'Telefon',
    nachricht: 'Nachricht',
    einwilligung: 'Einwilligung zur Datenverarbeitung',
  };

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

  function feld(form, name) {
    return form.querySelector('[name="' + name + '"]');
  }

  function leer(form, name) {
    var el = feld(form, name);
    return !el || !String(el.value || '').trim();
  }

  // Pflichtfelder je Typ -> Liste fehlender Feldnamen (spiegelt die Server-Validierung).
  function fehlendeFelder(form, typ) {
    var fehlt = [];
    if (typ === 'rueckruf') {
      if (leer(form, 'name')) fehlt.push('name');
      if (leer(form, 'telefon')) fehlt.push('telefon');
    } else {
      if (leer(form, 'name')) fehlt.push('name');
      if (leer(form, 'email')) fehlt.push('email');
      if (leer(form, 'nachricht')) fehlt.push('nachricht');
    }
    var ein = feld(form, 'einwilligung');
    if (!ein || !ein.checked) fehlt.push('einwilligung');
    return fehlt;
  }

  function clearErrors(form) {
    var marked = form.querySelectorAll('[aria-invalid="true"]');
    for (var i = 0; i < marked.length; i++) {
      marked[i].removeAttribute('aria-invalid');
      marked[i].removeAttribute('aria-describedby');
    }
  }

  function zeigeFehler(form, fehlt, statusEl) {
    var labels = fehlt.map(function (n) {
      return LABELS[n] || n;
    });
    statusEl.textContent = 'Bitte ergänzen Sie: ' + labels.join(', ') + '.';
    for (var i = 0; i < fehlt.length; i++) {
      var el = feld(form, fehlt[i]);
      if (!el) continue;
      el.setAttribute('aria-invalid', 'true');
      el.setAttribute('aria-describedby', statusEl.id);
    }
    var first = feld(form, fehlt[0]);
    if (first && typeof first.focus === 'function') {
      try {
        first.focus({ preventScroll: true });
      } catch (e) {
        first.focus();
      }
      // Fehlerfeld zentriert einscrollen, falls außerhalb des sichtbaren Bereichs.
      if (typeof first.scrollIntoView === 'function') first.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  function sende(form, typ, setStatus) {
    var btn = form.querySelector('button[type="submit"]');
    if (btn) btn.disabled = true; // Doppel-Submit verhindern
    setStatus('Wird gesendet …');
    fetch('/api/anfrage/', { method: 'POST', body: new FormData(form) })
      .then(function (r) {
        return r.json();
      })
      .then(function (data) {
        if (data && data.ok) {
          if (typeof window.asbestaTrack === 'function') window.asbestaTrack('form_submit', { typ: typ });
          form.replaceWith(successBlock(typ));
        } else {
          if (btn) btn.disabled = false;
          // Spezifische Server-Meldung (z. B. ungültige E-Mail) anzeigen, sonst generischer Hinweis.
          setStatus(
            data && data.error
              ? data.error
              : 'Bitte prüfen Sie Ihre Eingaben – oder rufen Sie uns an: +49 2365 2960630.',
          );
        }
      })
      .catch(function () {
        if (btn) btn.disabled = false;
        setStatus('Senden derzeit nicht möglich. Bitte rufen Sie uns an: +49 2365 2960630.');
      });
  }

  function init(form, index) {
    var tsInput = feld(form, 'ts');
    if (tsInput) tsInput.value = String(Date.now());
    captureSource(form);
    var statusEl = form.querySelector('[data-status]');
    if (statusEl && !statusEl.id) statusEl.id = 'anfrage-status-' + index;
    function setStatus(m) {
      if (statusEl) statusEl.textContent = m;
    }

    // Korrigiertes Feld räumt seinen Fehlerzustand sofort ab.
    form.addEventListener('input', function (e) {
      var t = e.target;
      if (t && t.getAttribute && t.getAttribute('aria-invalid') === 'true') {
        t.removeAttribute('aria-invalid');
        t.removeAttribute('aria-describedby');
      }
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var typInput = feld(form, 'typ');
      var typ = typInput ? typInput.value || 'anfrage' : 'anfrage';
      clearErrors(form);
      var fehlt = fehlendeFelder(form, typ);
      if (fehlt.length && statusEl) {
        zeigeFehler(form, fehlt, statusEl);
        return;
      }
      sende(form, typ, setStatus);
    });
  }

  var forms = document.querySelectorAll('form[data-anfrage-form]');
  for (var i = 0; i < forms.length; i++) init(forms[i], i);
})();

// Anonyme Conversion-Events (Anruf-/WhatsApp-Klicks, Formular-Absendung).
// Analytics-ready & CSP-konform: ruft window.plausible / dataLayer NUR auf, wenn vorhanden,
// und feuert zusätzlich ein CustomEvent 'asbesta:conversion'. Ohne Analytics = harmloser No-op.
(function () {
  function track(name, props) {
    try {
      if (typeof window.plausible === 'function') {
        window.plausible(name, props ? { props: props } : undefined);
      }
      if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push(Object.assign({ event: name }, props || {}));
      }
      window.dispatchEvent(new CustomEvent('asbesta:conversion', { detail: { name: name, props: props } }));
    } catch (e) {
      /* noop */
    }
  }
  window.asbestaTrack = track;

  document.addEventListener(
    'click',
    function (e) {
      var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
      if (!a) return;
      var href = a.getAttribute('href') || '';
      var conv = a.getAttribute('data-conv');
      if (conv === 'call' || href.indexOf('tel:') === 0) track('call_click');
      else if (conv === 'whatsapp' || href.indexOf('wa.me') !== -1) track('whatsapp_click');
    },
    { passive: true },
  );
})();

// Scroll-Reveal (cross-browser, abhaengigkeitsfrei). Extern -> CSP `script-src 'self'`-konform.
// Die FOUC-Klasse `reveal-on` setzt bereits ein synchrones Inline-Snippet im <head> (vor dem Paint);
// dieses Script wird per defer geladen und blendet `.reveal`-Elemente per IntersectionObserver
// gestaffelt ein. Bei prefers-reduced-motion / ohne JS bleibt alles sichtbar.
(function () {
  try {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  } catch (e) {
    /* matchMedia nicht verfuegbar -> Inhalte bleiben sichtbar */
    return;
  }

  function setup() {
    var nodes = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      for (var i = 0; i < nodes.length; i++) nodes[i].classList.add('is-visible');
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );
    nodes.forEach(function (n) {
      io.observe(n);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }
})();

// Admin-Dashboard – nur Progressive Enhancement (das Dashboard funktioniert komplett ohne JS).
// Extern (public/) -> CSP `script-src 'self'`-konform.
(function () {
  // Sicherheitsabfrage vor destruktiven Aktionen (z. B. Löschen).
  document.addEventListener('submit', function (event) {
    var form = event.target;
    if (form && form.getAttribute) {
      var frage = form.getAttribute('data-confirm');
      if (frage && !window.confirm(frage)) event.preventDefault();
    }
  });

  // Filterleiste: Auswahl-Änderung wendet den Filter direkt an (ohne „Filtern"-Klick).
  var filter = document.querySelector('form[data-admin-filter]');
  if (filter) {
    var selects = filter.querySelectorAll('select');
    for (var i = 0; i < selects.length; i++) {
      selects[i].addEventListener('change', function () {
        filter.submit();
      });
    }
  }
})();

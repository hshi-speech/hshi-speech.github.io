(function () {
  'use strict';

  // Expansion: open a paper or project panel in place, without leaving the page.
  function setPanel(id, open) {
    var panel = document.getElementById(id);
    if (!panel) return;
    panel.classList.toggle('open', open);
    document.querySelectorAll('.expand[data-toggle="' + id + '"]').forEach(function (b) {
      b.setAttribute('aria-expanded', String(open));
      b.textContent = open ? 'Collapse' : 'Expand';
    });
  }
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-toggle]');
    if (!t) return;
    var id = t.getAttribute('data-toggle');
    setPanel(id, !document.getElementById(id).classList.contains('open'));
  });

  // Deep links such as /publications/#taslp-2024-shi open the year and the paper.
  function openHash() {
    if (!location.hash) return;
    var el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (!el || !el.classList.contains('entry')) return;
    var year = el.closest('details.year');
    if (year) year.open = true;
    setPanel('panel-' + el.id, true);
    el.scrollIntoView();
  }
  window.addEventListener('hashchange', openHash);
  openHash();

  // Publications filters.
  var form = document.getElementById('filters');
  if (!form) return;
  form.hidden = false;
  var chips = form.querySelectorAll('[data-theme]');
  var first = document.getElementById('f-first');
  var journal = document.getElementById('f-journal');
  var text = document.getElementById('f-text');
  var count = document.getElementById('f-count');
  var toggle = document.getElementById('f-toggle');
  var empty = document.getElementById('f-empty');
  var years = Array.prototype.slice.call(document.querySelectorAll('details.year'));
  var defaultOpen = years.map(function (y) { return y.open; });
  var theme = 'all';

  function apply() {
    var q = text.value.trim().toLowerCase();
    var active = theme !== 'all' || first.checked || journal.checked || q;
    var total = 0;
    years.forEach(function (y, i) {
      var n = 0;
      y.querySelectorAll('.entry').forEach(function (a) {
        var ok = (theme === 'all' || a.dataset.themes.split(' ').indexOf(theme) >= 0) &&
          (!first.checked || a.dataset.first === '1') &&
          (!journal.checked || a.dataset.type === 'journal') &&
          (!q || a.dataset.text.indexOf(q) >= 0);
        a.hidden = !ok;
        if (ok) n++;
      });
      y.hidden = n === 0;
      y.open = active ? n > 0 : defaultOpen[i];
      y.querySelector('.year-count').textContent = n + (n === 1 ? ' paper' : ' papers');
      total += n;
    });
    count.textContent = total + (total === 1 ? ' paper' : ' papers');
    empty.hidden = total > 0;
    syncToggle();
  }
  function selectTheme(name) {
    theme = name;
    chips.forEach(function (c) { c.setAttribute('aria-pressed', String(c.dataset.theme === name)); });
    apply();
  }
  function syncToggle() {
    var shown = years.filter(function (y) { return !y.hidden; });
    var allOpen = shown.every(function (y) { return y.open; });
    toggle.textContent = allOpen ? 'Collapse all years' : 'Expand all years';
  }
  chips.forEach(function (c) { c.addEventListener('click', function () { selectTheme(c.dataset.theme); }); });
  [first, journal].forEach(function (el) { el.addEventListener('change', apply); });
  text.addEventListener('input', apply);
  toggle.addEventListener('click', function () {
    var open = toggle.textContent.indexOf('Expand') === 0;
    years.forEach(function (y) { if (!y.hidden) y.open = open; });
    syncToggle();
  });
  years.forEach(function (y) { y.addEventListener('toggle', syncToggle); });

  var fromUrl = new URLSearchParams(location.search).get('theme');
  if (fromUrl && form.querySelector('[data-theme="' + fromUrl + '"]')) selectTheme(fromUrl);
  else syncToggle();
})();

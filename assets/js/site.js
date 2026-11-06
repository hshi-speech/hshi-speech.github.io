(function () {
  'use strict';

  var mobile = window.matchMedia('(max-width: 820px)');
  var box = document.querySelector('.subnav-box');

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

  // Deep links open whatever hides their target: a year, a research section, or a paper panel.
  function openHash() {
    if (!location.hash) return;
    var el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (!el) return;
    for (var d = el; d; d = d.parentElement) if (d.tagName === 'DETAILS') d.open = true;
    if (el.classList.contains('entry')) setPanel('panel-' + el.id, true);
    el.scrollIntoView();
  }
  window.addEventListener('hashchange', openHash);

  // Contextual navigation: a sidebar on desktop, a collapsible bar on mobile.
  if (box) {
    var syncBox = function () { box.open = !mobile.matches; };
    syncBox();
    mobile.addEventListener('change', syncBox);

    box.addEventListener('click', function (e) {
      var a = e.target.closest('a');
      if (!a) return;
      if (mobile.matches) box.open = false;
      if (a.hash) {
        pinned = a;
        setTimeout(function () { openHash(); update(); }, 0);
      }
    });

    // Highlight the section being read.
    var spy = Array.prototype.slice.call(box.querySelectorAll('a[href^="#"]')).map(function (a) {
      return { link: a, target: document.getElementById(a.hash.slice(1)) };
    }).filter(function (s) { return s.target; });
    var current = null;
    var pinned = null; // a clicked link stays current until the reader scrolls, even near the page end
    var update = function () {
      var edge = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) + 24;
      var shown = spy.filter(function (s) { return s.target.getClientRects().length; });
      var next = null;
      if (pinned) {
        next = shown.filter(function (s) { return s.link === pinned; })[0] || null;
      } else if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        next = shown[shown.length - 1] || null;
      } else {
        shown.forEach(function (s) {
          if (s.target.getBoundingClientRect().top <= edge) next = s;
        });
        next = next || shown[0] || null;
      }
      if (next === current) return;
      if (current) current.link.classList.remove('is-current');
      current = next;
      if (!current) return;
      current.link.classList.add('is-current');
      var group = current.link.closest('.nav-group');
      if (group) group.open = true;
    };
    var queued = false;
    var queue = function () {
      if (queued) return;
      queued = true;
      requestAnimationFrame(function () { queued = false; update(); });
    };
    ['wheel', 'touchmove', 'keydown'].forEach(function (type) {
      window.addEventListener(type, function () { pinned = null; }, { passive: true });
    });
    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', queue);
    document.addEventListener('toggle', queue, true);
    update();
  }
  openHash(); // after the mobile menu has collapsed, so the target does not shift

  // Research: open or close every section at once.
  var partsToggle = document.getElementById('parts-toggle');
  if (partsToggle) {
    var parts = Array.prototype.slice.call(document.querySelectorAll('details.part'));
    var syncParts = function () {
      var allOpen = parts.every(function (p) { return p.open; });
      partsToggle.textContent = allOpen ? 'Collapse all sections' : 'Expand all sections';
    };
    partsToggle.hidden = false;
    partsToggle.addEventListener('click', function () {
      var open = partsToggle.textContent.indexOf('Expand') === 0;
      parts.forEach(function (p) { p.open = open; });
      syncParts();
    });
    parts.forEach(function (p) { p.addEventListener('toggle', syncParts); });
    syncParts();
  }

  // Publications filters.
  var form = document.getElementById('filters');
  if (!form) return;
  form.hidden = false;
  var topics = document.querySelectorAll('.subnav [data-theme]');
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
      var link = document.querySelector('.subnav a[href="#' + y.id + '"]');
      link.querySelector('.count').textContent = n;
      link.parentElement.hidden = n === 0;
      total += n;
    });
    count.textContent = total + (total === 1 ? ' paper' : ' papers');
    empty.hidden = total > 0;
    syncToggle();
  }
  function selectTheme(name) {
    theme = name;
    topics.forEach(function (t) {
      if (t.dataset.theme === name) t.setAttribute('aria-current', 'true');
      else t.removeAttribute('aria-current');
    });
    apply();
  }
  function syncToggle() {
    var shown = years.filter(function (y) { return !y.hidden; });
    var allOpen = shown.every(function (y) { return y.open; });
    toggle.textContent = allOpen ? 'Collapse all years' : 'Expand all years';
  }
  topics.forEach(function (t) {
    t.addEventListener('click', function (e) {
      e.preventDefault();
      selectTheme(t.dataset.theme);
      history.replaceState(null, '', t.dataset.theme === 'all' ? location.pathname : '?theme=' + t.dataset.theme);
      document.querySelector('.filters').scrollIntoView();
    });
  });
  [first, journal].forEach(function (el) { el.addEventListener('change', apply); });
  text.addEventListener('input', apply);
  toggle.addEventListener('click', function () {
    var open = toggle.textContent.indexOf('Expand') === 0;
    years.forEach(function (y) { if (!y.hidden) y.open = open; });
    syncToggle();
  });
  years.forEach(function (y) { y.addEventListener('toggle', syncToggle); });

  var fromUrl = new URLSearchParams(location.search).get('theme');
  if (fromUrl && document.querySelector('.subnav [data-theme="' + fromUrl + '"]')) selectTheme(fromUrl);
  else syncToggle();
})();

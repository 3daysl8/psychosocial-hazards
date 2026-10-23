// App shell: jurisdiction selector, navigation, footer, and a simple hash router.
// Pages live in js/views/, wording lives in js/data/.
// Routes use the URL hash (#/hazards) so the site works on Live Server and Netlify with no server setup.

import { site, jurisdictions } from './data/jurisdictions.js';
import { el, externalLink } from './lib/dom.js';
import { fillTerms, forJurisdiction, formatDate } from './lib/text.js';
import { hasAnswers, resetListeners } from './lib/state.js';
import { homeView } from './views/home.js';
import { hazardListView, hazardDetailView } from './views/hazards.js';
import { lawView } from './views/law.js';
import { flowView } from './views/flow.js';
import { triagePage } from './data/triage.js';

const routes = [
  { pattern: /^\/$/, view: homeView },
  { pattern: /^\/hazards$/, view: hazardListView },
  { pattern: /^\/hazards\/([\w-]+)$/, view: hazardDetailView },
  { pattern: /^\/triage$/, view: ctx => flowView(ctx, triagePage) },
  { pattern: /^\/law$/, view: lawView },
];

// Only the jurisdiction choice is remembered between visits. Case details are never stored.
const STORAGE_KEY = 'phg-jurisdiction';

function savedJurisdiction() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && jurisdictions[saved]) return saved;
  } catch { /* storage blocked: fall back to the default */ }
  return site.defaultJurisdiction;
}

let jurisdictionId = savedJurisdiction();

function context() {
  const jur = jurisdictions[jurisdictionId];
  return {
    site,
    jur,
    fill: text => fillTerms(forJurisdiction(text, jur.id), jur.terms),
    rerender: () => renderPage({ moveFocus: false }),
  };
}

function currentPath() {
  const path = location.hash.replace(/^#/, '').replace(/\/+$/, '');
  return path || '/';
}

function notFoundView() {
  return {
    title: 'Page not found',
    node: el('div', {},
      el('h1', {}, 'Page not found'),
      el('p', {}, 'That page doesn\'t exist. ', el('a', { href: '#/' }, 'Go to the home page'), '.')),
  };
}

function renderPage({ moveFocus }) {
  const path = currentPath();
  const ctx = context();
  resetListeners();
  let page = null;
  for (const route of routes) {
    const match = path.match(route.pattern);
    if (match) { page = route.view(ctx, ...match.slice(1)); break; }
  }
  page = page || notFoundView();

  const main = document.getElementById('main');
  main.replaceChildren(page.node);
  document.title = page.title ? `${page.title} | ${site.title}` : site.title;
  renderNav(path);

  if (moveFocus) {
    // Move keyboard and screen reader focus to the new page's heading.
    const heading = main.querySelector('h1');
    if (heading) { heading.tabIndex = -1; heading.focus({ preventScroll: true }); }
    window.scrollTo(0, 0);
  }
}

function renderNav(path) {
  const list = document.getElementById('nav');
  list.replaceChildren(...site.nav.map(item => {
    const target = item.href.replace(/^#/, '');
    const current = target === '/' ? path === '/' : path === target || path.startsWith(`${target}/`);
    return el('li', {}, el('a', { href: item.href, 'aria-current': current ? 'page' : null }, item.label));
  }));
}

function renderShell() {
  document.getElementById('brand').textContent = site.title;
  document.getElementById('utility-note').textContent = site.independenceNote;

  const select = document.getElementById('jurisdiction');
  select.replaceChildren(...Object.values(jurisdictions).map(jur => el('option', { value: jur.id }, jur.label)));
  select.value = jurisdictionId;
  select.addEventListener('change', () => {
    jurisdictionId = select.value;
    try { localStorage.setItem(STORAGE_KEY, jurisdictionId); } catch { /* not saved, still works */ }
    renderPage({ moveFocus: false });
  });

  document.getElementById('disclaimer').textContent = site.disclaimer;
  document.getElementById('current-as-at').textContent = `Content current as at ${formatDate(site.currentAsAt)}. Version ${site.version}.`;
  document.getElementById('footer-links').replaceChildren(
    el('li', {}, externalLink(site.riskModelUrl, 'Psychological Risk Model')),
    el('li', {}, externalLink(site.repoUrl, 'Source code and build log on GitHub')),
    el('li', {}, externalLink(`${site.repoUrl}/blob/main/LICENSE`, 'Licence: MIT (code), CC BY 4.0 (content)')),
  );

  // The skip link targets #main, which would otherwise be read as a route.
  document.querySelector('.skip-link').addEventListener('click', event => {
    event.preventDefault();
    document.getElementById('main').focus();
  });
}

renderShell();
renderPage({ moveFocus: false });
window.addEventListener('hashchange', () => renderPage({ moveFocus: true }));

// Answers are never saved, so warn before a reload or close would lose them.
window.addEventListener('beforeunload', event => {
  if (hasAnswers()) event.preventDefault();
});

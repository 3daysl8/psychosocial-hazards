import { hazardLibrary, hazardCategories, hazards, hazardSourceVerify } from '../data/hazards.js';
import { el, externalLink } from '../lib/dom.js';
import { verifyNote, draftBadge, roleCallouts } from '../lib/components.js';

// Search and filter choices survive re-renders (e.g. switching jurisdiction) but are never saved.
const listState = { query: '', category: 'all' };

export function hazardName(hazard, ctx) {
  return hazard.names?.[ctx.jur.id] || hazard.name;
}

function matchesFilters(hazard, ctx) {
  if (listState.category !== 'all' && hazard.category !== listState.category) return false;
  const words = listState.query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (!words.length) return true;
  const searchable = [hazardName(hazard, ctx), hazard.summary, ...hazard.examples, ...hazard.warningSigns, ...hazard.tags]
    .join(' ').toLowerCase();
  return words.every(word => searchable.includes(word));
}

function sourceLine() {
  return el('p', { class: 'source-line' },
    'Hazard names from the ', externalLink(hazardLibrary.source.url, hazardLibrary.source.title),
    '. Descriptions are our own plain-English summaries.');
}

function hazardCard(hazard, ctx) {
  return el('li', {},
    el('article', { class: 'hazard-card' },
      el('h2', {}, el('a', { href: `#/hazards/${hazard.id}` }, hazardName(hazard, ctx))),
      el('p', { class: 'category-tag' }, hazardCategories[hazard.category]),
      el('p', {}, ctx.fill(hazard.summary))));
}

export function hazardListView(ctx) {
  const results = el('ul', { class: 'hazard-grid' });
  const status = el('p', { class: 'result-count', role: 'status' });

  function update() {
    const shown = hazards.filter(hazard => matchesFilters(hazard, ctx));
    results.replaceChildren(...shown.map(hazard => hazardCard(hazard, ctx)));
    status.textContent = shown.length
      ? `Showing ${shown.length} of ${hazards.length} hazards`
      : 'No hazards match. Try a different word, or show all groups.';
  }

  const search = el('input', {
    type: 'search', id: 'hazard-search', autocomplete: 'off',
    oninput: event => { listState.query = event.target.value; update(); },
  });
  search.value = listState.query;

  const filter = el('select', {
    id: 'hazard-category',
    onchange: event => { listState.category = event.target.value; update(); },
  },
    el('option', { value: 'all' }, 'All groups'),
    Object.entries(hazardCategories).map(([key, label]) => el('option', { value: key }, label)));
  filter.value = listState.category;

  const node = el('div', { class: 'hazard-library' },
    el('h1', {}, hazardLibrary.title),
    hazardLibrary.intro.map(paragraph => el('p', {}, ctx.fill(paragraph))),
    sourceLine(),
    verifyNote(hazardLibrary.introVerify, ctx),
    el('div', { class: 'filters', role: 'search' },
      el('div', { class: 'field' }, el('label', { for: 'hazard-search' }, 'Search hazards'), search),
      el('div', { class: 'field' }, el('label', { for: 'hazard-category' }, 'Show'), filter)),
    status,
    results,
    el('aside', { class: 'combine-note' },
      el('p', {}, ctx.fill(hazardLibrary.combineNote)),
      el('p', {}, externalLink(ctx.site.riskModelUrl, hazardLibrary.riskModelNote))),
  );
  update();
  return { title: hazardLibrary.title, node };
}

export function hazardDetailView(ctx, id) {
  const index = hazards.findIndex(hazard => hazard.id === id);
  if (index === -1) return null;
  const hazard = hazards[index];
  const previous = hazards[index - 1];
  const next = hazards[index + 1];
  const name = hazardName(hazard, ctx);

  const node = el('article', { class: 'hazard-detail' },
    el('p', { class: 'breadcrumb' }, el('a', { href: '#/hazards' }, '← Hazard library')),
    el('h1', {}, name),
    el('p', { class: 'category-tag' }, hazardCategories[hazard.category]),
    hazard.reviewStatus === 'draft' ? draftBadge(hazardLibrary.draftLabel) : null,

    el('h2', {}, 'What it is'),
    el('p', {}, ctx.fill(hazard.summary)),
    (hazard.definitions || []).map(definition => el('figure', { class: 'definition' },
      el('blockquote', { cite: hazardLibrary.source.url },
        el('p', {}, el('strong', {}, `${definition.term}: `), '“', definition.text, '”')),
      el('figcaption', {}, 'Quoted from the ', externalLink(hazardLibrary.source.url, hazardLibrary.source.title)))),
    verifyNote(hazard.definitionVerify, ctx),

    el('h2', {}, 'What it can look like'),
    el('ul', {}, hazard.examples.map(item => el('li', {}, ctx.fill(item)))),

    el('h2', {}, 'Early warning signs'),
    el('ul', {}, hazard.warningSigns.map(item => el('li', {}, ctx.fill(item)))),

    roleCallouts(hazard.callouts, ctx),

    el('aside', { class: 'combine-note' }, el('p', {}, ctx.fill(hazardLibrary.combineNote))),
    sourceLine(),
    verifyNote(hazardSourceVerify, ctx),

    el('nav', { class: 'pager', 'aria-label': 'Other hazards' },
      previous ? el('a', { href: `#/hazards/${previous.id}`, class: 'pager-prev' }, '← ', hazardName(previous, ctx)) : el('span'),
      next ? el('a', { href: `#/hazards/${next.id}`, class: 'pager-next' }, hazardName(next, ctx), ' →') : el('span')),
  );
  return { title: name, node };
}

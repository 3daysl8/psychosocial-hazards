import { hazardLibrary, hazardCategories, hazards } from '../data/hazards.js';
import { el, externalLink } from '../lib/dom.js';
import { verifyNote, draftBadge, roleCallouts } from '../lib/components.js';

// Search and filter choices survive re-renders (e.g. switching jurisdiction) but are never saved.
const listState = { query: '', category: 'all' };

// A hazard as the selected jurisdiction describes it (its overrides applied).
export function hazardFor(hazard, ctx) {
  return { ...hazard, ...hazard.overrides?.[ctx.jur.id] };
}

// Hazards the selected jurisdiction lists, in library order.
export function listedHazards(ctx) {
  return hazards
    .filter(hazard => !hazard.appliesTo || hazard.appliesTo.includes(ctx.jur.id))
    .map(hazard => hazardFor(hazard, ctx));
}

function matchesFilters(hazard) {
  if (listState.category !== 'all' && hazard.category !== listState.category) return false;
  const words = listState.query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (!words.length) return true;
  const searchable = [hazard.name, hazard.summary, ...hazard.examples, ...hazard.warningSigns, ...hazard.tags]
    .join(' ').toLowerCase();
  return words.every(word => searchable.includes(word));
}

function sourceLine(ctx) {
  const source = hazardLibrary.sources[ctx.jur.id];
  return el('p', { class: 'source-line' },
    'Hazard names from the ', externalLink(source.url, source.title),
    '. Descriptions are our own plain-English summaries.');
}

function hazardCard(hazard, ctx) {
  return el('li', {},
    el('article', { class: 'hazard-card' },
      el('h2', {}, el('a', { href: `#/hazards/${hazard.id}` }, hazard.name)),
      el('p', { class: 'category-tag' }, hazardCategories[hazard.category]),
      el('p', {}, ctx.fill(hazard.summary))));
}

export function hazardListView(ctx) {
  const listed = listedHazards(ctx);
  const results = el('ul', { class: 'hazard-grid' });
  const status = el('p', { class: 'result-count', role: 'status' });

  function update() {
    const shown = listed.filter(matchesFilters);
    results.replaceChildren(...shown.map(hazard => hazardCard(hazard, ctx)));
    status.textContent = shown.length
      ? `Showing ${shown.length} of ${listed.length} hazards`
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

  const listIntro = hazardLibrary.listIntro[ctx.jur.id].replace('{count}', listed.length);

  const node = el('div', { class: 'hazard-library' },
    el('h1', {}, hazardLibrary.title),
    el('p', {}, ctx.fill(hazardLibrary.intro)),
    el('p', {}, ctx.fill(listIntro), ' ', hazardLibrary.useNote),
    sourceLine(ctx),
    verifyNote(hazardLibrary.sourceVerify[ctx.jur.id], ctx),
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

function definitionBlock(definition) {
  const source = hazardLibrary.sources[definition.source];
  return el('figure', { class: 'definition' },
    el('blockquote', { cite: source.url },
      el('p', {}, el('strong', {}, `${definition.term}: `), '“', definition.text, '”')),
    el('figcaption', {}, 'Quoted from the ', externalLink(source.url, source.title)));
}

export function hazardDetailView(ctx, id) {
  const base = hazards.find(hazard => hazard.id === id);
  if (!base) return null;
  const hazard = hazardFor(base, ctx);
  const listed = listedHazards(ctx);
  const index = listed.findIndex(item => item.id === id);
  const coveredById = base.coveredBy?.[ctx.jur.id];
  const coveredBy = coveredById && listed.find(item => item.id === coveredById);

  const node = el('article', { class: 'hazard-detail' },
    el('p', { class: 'breadcrumb' }, el('a', { href: '#/hazards' }, '← Hazard library')),
    el('h1', {}, hazard.name),
    el('p', { class: 'category-tag' }, hazardCategories[hazard.category]),
    hazard.reviewStatus === 'draft' ? draftBadge(hazardLibrary.draftLabel) : null,

    index === -1
      ? el('aside', { class: 'callout callout-note' },
        el('p', {}, ctx.fill(hazardLibrary.coveredByNote), ' ',
          coveredBy ? el('a', { href: `#/hazards/${coveredBy.id}` }, coveredBy.name) : null))
      : null,

    el('h2', {}, 'What it is'),
    el('p', {}, ctx.fill(hazard.summary)),
    (hazard.definitions || []).map(definitionBlock),

    el('h2', {}, 'What it can look like'),
    el('ul', {}, hazard.examples.map(item => el('li', {}, ctx.fill(item)))),

    el('h2', {}, 'Early warning signs'),
    el('ul', {}, hazard.warningSigns.map(item => el('li', {}, ctx.fill(item)))),

    roleCallouts(hazard.callouts, ctx),

    el('aside', { class: 'combine-note' }, el('p', {}, ctx.fill(hazardLibrary.combineNote))),
    sourceLine(ctx),
    verifyNote(hazardLibrary.sourceVerify[ctx.jur.id], ctx),

    index !== -1 ? el('nav', { class: 'pager', 'aria-label': 'Other hazards' },
      listed[index - 1] ? el('a', { href: `#/hazards/${listed[index - 1].id}`, class: 'pager-prev' }, '← ', listed[index - 1].name) : el('span'),
      listed[index + 1] ? el('a', { href: `#/hazards/${listed[index + 1].id}`, class: 'pager-next' }, listed[index + 1].name, ' →') : el('span'))
      : null,
  );
  return { title: hazard.name, node };
}

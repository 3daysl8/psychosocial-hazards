// Resources page: the research and guidance behind the guide. All wording is in js/data/evidence.js.

import { el, externalLink } from '../lib/dom.js';
import { verifyNote, sourceItem, draftBadge } from '../lib/components.js';
import { listedHazards } from './hazards.js';
import { resourcesPage as page } from '../data/evidence.js';

const repoFile = (ctx, path) => `${ctx.site.repoUrl}/blob/main/${path}`;

// "van der Molen et al. 2020" from "van der Molen HF, Nieuwenhuijsen K, ... (2020). Title...";
// "Stansfeld & Candy 2006" when there are exactly two authors.
function shortCite(reference) {
  const authors = reference.cite.split(' (')[0].split(', ');
  const surname = name => name.match(/^(.+?) [A-Z]{1,4}$/)?.[1] || name;
  const year = reference.cite.match(/\((\d{4})\)/)?.[1] || '';
  const names = authors.length === 1 ? surname(authors[0])
    : authors.length === 2 && !authors[1].startsWith('et al') ? `${surname(authors[0])} & ${surname(authors[1])}`
    : `${surname(authors[0])} et al.`;
  return `${names} ${year}`;
}

function link(item, ctx) {
  return item.external ? externalLink(repoFile(ctx, item.external), item.text) : el('a', { href: item.href }, item.text);
}

function section(id, title, ...content) {
  return el('section', { class: 'resources-section', 'aria-labelledby': `r-${id}` },
    el('h2', { id: `r-${id}` }, title),
    content);
}

export function resourcesView(ctx) {
  const refs = new Map(page.references.items.map(reference => [reference.id, reference]));
  const sourcesLine = ids => ids.length
    ? el('p', { class: 'source-line' }, 'Sources: ', ids.map(id => shortCite(refs.get(id))).join('; '), '.')
    : null;

  const node = el('div', { class: 'resources' },
    el('h1', {}, page.title),
    el('p', { class: 'lede' }, page.intro),

    section('rating', page.rating.title,
      page.rating.paragraphs.map(text => el('p', {}, text)),
      el('ul', { class: 'source-list' }, page.rating.links.map(item => el('li', {}, link(item, ctx))))),

    section('hazards', page.hazards.title,
      page.hazards.paragraphs.map(text => el('p', {}, text)),
      el('div', { class: 'evidence-list' }, listedHazards(ctx).map(hazard => {
        const item = page.hazards.items[hazard.id];
        if (!item) return null;
        return el('article', { class: 'evidence-item' },
          el('h3', {}, hazard.name),
          el('p', { class: `evidence-status status-${item.status}` }, page.hazards.statusLabels[item.status]),
          el('p', {}, item.text),
          sourcesLine(item.sources));
      })),
      el('h3', {}, page.combining.title),
      el('p', {}, page.combining.text),
      sourcesLine(page.combining.sources)),

    section('frameworks', page.frameworks.title,
      draftBadge(page.frameworks.reviewNote),
      el('dl', { class: 'framework-list' }, page.frameworks.items.map(item => [
        el('dt', {}, item.name),
        el('dd', {}, item.text, ' ', el('span', { class: 'source-line' }, `(${shortCite(refs.get(item.source))})`)),
      ]))),

    section('guidance', page.guidance.title,
      el('p', {}, ctx.fill(page.guidance.intro)),
      el('ul', { class: 'source-list' },
        page.guidance.always.map(item => sourceItem(item, ctx)),
        // Skip jurisdiction items already in the "always" list (e.g. the Model Code under Model WHS).
        ctx.jur.guidance
          .filter(item => !page.guidance.always.some(always => always.url === item.url))
          .map(item => sourceItem(item, ctx))),
      el('p', {}, el('a', { href: '#/law' }, page.guidance.lawLink), '.')),

    section('limitations', page.limitations.title,
      el('ul', {}, page.limitations.items.map(text => el('li', {}, text)))),

    section('references', page.references.title,
      el('p', {}, page.references.intro),
      el('ul', { class: 'reference-list' }, page.references.items.map(reference => el('li', { id: `ref-${reference.id}` },
        el('p', { class: 'reference-cite' }, reference.cite, ' ', externalLink(`https://doi.org/${reference.doi}`, `doi:${reference.doi}`)),
        el('p', {}, reference.summary),
        verifyNote(reference.verify, ctx))))),

    section('checking', page.checking.title,
      el('p', {}, page.checking.text),
      el('p', {}, link(page.checking.link, ctx))),
  );
  return { title: page.title, node };
}

import { el } from '../lib/dom.js';
import { verifyNote, sourceItem } from '../lib/components.js';

export function lawView(ctx) {
  const { jur } = ctx;
  const title = `Law and regulators: ${jur.label}`;

  const node = el('div', { class: 'law' },
    el('h1', {}, title),
    el('p', { class: 'lede' }, ctx.fill(jur.intro)),
    el('p', {}, 'Change jurisdiction with the selector at the top of the page. The guide\'s terms, regulator names and links change to match.'),

    el('h2', {}, 'Terms used in this guide'),
    el('dl', { class: 'terms' },
      el('dt', {}, 'Who holds the duty'), el('dd', {}, ctx.fill('{DutyHolderLong}')),
      el('dt', {}, 'The laws are called'), el('dd', {}, ctx.fill('{LawLong} laws'))),

    el('h2', {}, jur.regulators.length > 1 ? 'Regulators' : 'Regulator'),
    el('ul', { class: 'source-list' }, jur.regulators.map(item => sourceItem(item, ctx))),
    verifyNote(jur.regulatorsVerify, ctx),

    el('h2', {}, 'Legislation'),
    el('ul', { class: 'source-list' }, jur.legislation.map(item => sourceItem(item, ctx))),

    el('h2', {}, 'Guidance'),
    el('ul', { class: 'source-list' }, jur.guidance.map(item => sourceItem(item, ctx))),

    jur.notes.length ? [
      el('h2', {}, 'Notes'),
      el('ul', { class: 'source-list' }, jur.notes.map(note => el('li', {}, ctx.fill(note.text), verifyNote(note.verify, ctx)))),
    ] : null,
  );
  return { title, node };
}

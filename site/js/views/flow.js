// Renders a guided page (triage, understanding the risk, investigating) from its data file.
// A page is a list of sections; each section is a list of blocks. Block types are in `blockRenderers`.
// To add a new kind of block, add a renderer here and use its `type` in a data file.
// Answers go to lib/state.js (memory only). Inputs read their current answer when drawn,
// so answers survive switching pages or jurisdiction.

import { el, externalLink } from '../lib/dom.js';
import { verifyNote, roleCallouts, sourceItem } from '../lib/components.js';
import { getAnswer, setAnswer, onAnswer, clearAnswers, hasAnswers } from '../lib/state.js';
import { listedHazards } from './hazards.js';
import { supportContacts, flowText } from '../data/flow.js';

const inputId = key => `f-${key.replace(/[^\w-]/g, '-')}`;

function paragraphs(list, ctx, className) {
  return (list || []).map(text => ctx.fill(text)).filter(Boolean).map(text => el('p', { class: className }, text));
}

// ---------- form fields ----------

function checklist(block, ctx, options = block.options) {
  const id = inputId(block.key);
  const chosen = new Set(getAnswer(block.key, []));
  return el('fieldset', { class: 'question checklist' },
    el('legend', {}, ctx.fill(block.label)),
    block.hint ? el('p', { class: 'hint' }, ctx.fill(block.hint)) : null,
    el('div', { class: 'options' }, options.map(option => {
      const label = ctx.fill(option.label);
      if (!label) return null;
      return el('label', { class: 'option', for: `${id}-${option.id}` },
        el('input', {
          type: 'checkbox', id: `${id}-${option.id}`, value: option.id, checked: chosen.has(option.id),
          onchange: event => {
            if (event.target.checked) chosen.add(option.id); else chosen.delete(option.id);
            setAnswer(block.key, [...chosen]);
          },
        }),
        el('span', {}, label));
    })));
}

function choice(block, ctx, options = block.options, extraClass = '') {
  const id = inputId(block.key);
  const current = getAnswer(block.key);
  return el('fieldset', { class: `question ${extraClass}`.trim() },
    el('legend', {}, ctx.fill(block.label)),
    block.hint ? el('p', { class: 'hint' }, ctx.fill(block.hint)) : null,
    el('div', { class: 'options' }, options.map(option => el('label', { class: 'option', for: `${id}-${option.id}` },
      el('input', {
        type: 'radio', name: id, id: `${id}-${option.id}`, value: option.id, checked: current === option.id,
        onchange: () => setAnswer(block.key, option.id),
      }),
      el('span', {}, ctx.fill(option.label))))));
}

function textField(block, ctx) {
  const id = inputId(block.key);
  const area = el('textarea', {
    id, rows: block.rows || '4', 'aria-describedby': block.hint ? `${id}-hint` : null,
    oninput: event => setAnswer(block.key, event.target.value),
  });
  area.value = getAnswer(block.key, '');
  return el('div', { class: 'field-wide' },
    el('label', { for: id }, ctx.fill(block.label)),
    block.hint ? el('p', { class: 'hint', id: `${id}-hint` }, ctx.fill(block.hint)) : null,
    area,
    el('p', { class: 'field-note' }, flowText.answerNote));
}

// ---------- block renderers ----------

const blockRenderers = {
  paragraphs: (block, ctx) => paragraphs(block.paragraphs, ctx),

  support: (block, ctx) => el('section', { class: 'support-box', 'aria-labelledby': 'support-title' },
    el('h3', { id: 'support-title' }, supportContacts.title),
    el('ul', { class: 'contact-list' }, supportContacts.contacts.map(contact => el('li', {},
      el('strong', {}, contact.number), el('span', {}, contact.label)))),
    supportContacts.note ? el('p', { class: 'support-note' }, supportContacts.note) : null),

  checklist: (block, ctx) => checklist(block, ctx),
  choice: (block, ctx) => choice(block, ctx),
  text: (block, ctx) => textField(block, ctx),

  callouts: (block, ctx) => roleCallouts(block.callouts, ctx),
  verify: (block, ctx) => verifyNote(block.text, ctx),

  learnMore: (block, ctx) => el('details', { class: 'learn-more' },
    el('summary', {}, ctx.fill(block.summary)),
    paragraphs(block.paragraphs, ctx),
    verifyNote(block.verify, ctx)),

  links: (block, ctx) => {
    const items = ctx.fill(block.items) || [];
    return el('ul', { class: 'source-list' }, items.map(item => sourceItem(item, ctx)));
  },

  // A note that only applies to some jurisdictions. Skipped where there's no text for this one.
  jurisdictionNote: (block, ctx) => {
    const text = ctx.fill(block.text);
    if (!text) return null;
    return el('aside', { class: 'callout callout-note', 'aria-label': ctx.jur.label },
      el('p', { class: 'callout-label' }, ctx.jur.label),
      el('p', {}, text),
      block.source ? el('p', { class: 'source-line' }, 'Source: ', externalLink(block.source.url, block.source.title)) : null,
      verifyNote(block.verify, ctx));
  },

  // Shows its blocks only when an earlier answer matches, and updates when that answer changes.
  conditional: (block, ctx) => {
    const holder = el('div', { class: 'conditional', 'aria-live': 'polite' });
    const draw = value => {
      const show = block.showIf.values.includes(value);
      holder.replaceChildren(...(show ? renderBlocks(block.blocks, ctx) : []));
    };
    draw(getAnswer(block.showIf.key));
    onAnswer(block.showIf.key, draw);
    return holder;
  },

  processes: (block, ctx) => el('div', { class: 'processes' }, block.items.map(item => el('article', { class: 'process-card' },
    el('h3', {}, ctx.fill(item.title)),
    el('dl', {},
      el('dt', {}, 'The question it answers'), el('dd', {}, ctx.fill(item.question)),
      el('dt', {}, 'Who leads it'), el('dd', {}, ctx.fill(item.who)),
      el('dt', {}, 'What it looks at'), el('dd', {}, ctx.fill(item.focus))),
    el('p', { class: 'key-point' }, ctx.fill(item.keyPoint)),
    verifyNote(item.verify, ctx)))),

  prompts: (block, ctx) => el('ul', { class: 'prompt-list' }, block.items.map(item => el('li', {}, ctx.fill(item)))),

  hazardPicker: (block, ctx) => {
    const options = listedHazards(ctx).map(hazard => ({ id: hazard.id, label: hazard.name }));
    return [
      checklist(block, ctx, options),
      el('p', { class: 'source-line' }, 'Not sure what a hazard covers? ', el('a', { href: '#/hazards' }, 'Open the hazard library'), '. Your answers here are kept while you look.'),
    ];
  },

  // One frequency and severity question per hazard picked in the hazardPicker block.
  hazardExposure: (block, ctx) => {
    const holder = el('div', { class: 'exposure', 'aria-live': 'polite' });
    const draw = () => {
      const picked = new Set(getAnswer(block.hazardsKey, []));
      const hazards = listedHazards(ctx).filter(hazard => picked.has(hazard.id));
      if (!hazards.length) {
        holder.replaceChildren(el('p', { class: 'empty-note' }, ctx.fill(block.emptyText)));
        return;
      }
      holder.replaceChildren(
        hazards.length > 1 ? el('p', { class: 'combine-count' }, ctx.fill(block.combineText).replace('{count}', hazards.length)) : null,
        ...hazards.map(hazard => el('section', { class: 'exposure-item', 'aria-label': hazard.name },
          el('h3', {}, hazard.name),
          el('div', { class: 'exposure-choices' },
            choice({ key: `${block.hazardsKey}.${hazard.id}.frequency`, label: block.frequency.label }, ctx, block.frequency.options, 'compact'),
            choice({ key: `${block.hazardsKey}.${hazard.id}.severity`, label: block.severity.label }, ctx, block.severity.options, 'compact')))),
      );
    };
    draw();
    onAnswer(block.hazardsKey, draw);
    return holder;
  },

  scorePlaceholder: (block, ctx) => el('section', { class: 'score-panel', 'aria-labelledby': 'score-title' },
    el('p', { class: 'score-tag' }, 'Indicative'),
    el('h3', { id: 'score-title' }, ctx.fill(block.title)),
    paragraphs(block.paragraphs, ctx),
    el('p', {}, externalLink(ctx.site.riskModelUrl, block.riskModelLink))),
};

function renderBlocks(blocks, ctx) {
  return blocks.flatMap(block => {
    const render = blockRenderers[block.type];
    if (!render) return [el('p', { class: 'verify-note' }, `Unknown block type: ${block.type}`)];
    const out = render(block, ctx);
    return Array.isArray(out) ? out : [out];
  }).filter(Boolean);
}

// ---------- page ----------

function steps(ctx, pageHref) {
  return el('nav', { 'aria-label': 'Steps in the guide' },
    el('ol', { class: 'steps' }, ctx.site.flow.map((step, index) => {
      const current = step.href === pageHref;
      const content = [el('span', { class: 'step-number' }, String(index + 1)), el('span', { class: 'step-label' }, step.label)];
      return el('li', { 'aria-current': current ? 'step' : null, class: step.href ? null : 'is-coming' },
        step.href && !current ? el('a', { href: step.href }, content) : content);
    })));
}

export function flowView(ctx, page) {
  const node = el('div', { class: `flow flow-${page.id}` },
    steps(ctx, page.href),
    el('h1', {}, ctx.fill(page.title)),
    paragraphs(page.intro, ctx, 'lede'),
    renderBlocks(page.blocks || [], ctx),
    page.sections.map(section => el('section', { class: 'flow-section', 'aria-labelledby': `s-${section.id}` },
      el('h2', { id: `s-${section.id}` }, ctx.fill(section.title)),
      renderBlocks(section.blocks, ctx))),
    el('div', { class: 'actions' },
      page.back ? el('a', { class: 'button button-secondary', href: page.back.href }, page.back.label) : el('span'),
      page.next?.href
        ? el('a', { class: 'button button-primary', href: page.next.href }, page.next.label)
        : el('p', { class: 'next-coming' }, page.next?.label)),
    el('div', { class: 'clear-answers' },
      el('p', {}, flowText.privacyReminder),
      el('button', {
        type: 'button', class: 'button button-secondary',
        onclick: () => {
          if (!hasAnswers() || window.confirm(flowText.clearConfirm)) { clearAnswers(); ctx.rerender(); }
        },
      }, flowText.clearButton)),
  );
  return { title: ctx.fill(page.title), node };
}

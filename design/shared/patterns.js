// Pattern sample page for the design directions.
// Shows components that Phases 2 to 5 will need, with sample wording, so each direction
// can be judged on more than the pages that exist today. Not part of the published site.

import { site, jurisdictions } from '../../site/js/data/jurisdictions.js';
import { el } from '../../site/js/lib/dom.js';
import { formatDate } from '../../site/js/lib/text.js';

document.getElementById('brand').textContent = site.title;
const select = document.getElementById('jurisdiction');
select.replaceChildren(...Object.values(jurisdictions).map(jur => el('option', { value: jur.id }, jur.label)));
document.getElementById('nav').replaceChildren(
  el('li', {}, el('a', { href: 'index.html#/' }, 'Home')),
  el('li', {}, el('a', { href: 'index.html#/hazards' }, 'Hazard library')),
  el('li', {}, el('a', { href: 'index.html#/law' }, 'Law and regulators')),
  el('li', {}, el('a', { href: 'patterns.html', 'aria-current': 'page' }, 'Pattern sample')),
);
document.getElementById('disclaimer').textContent = site.disclaimer;
document.getElementById('current-as-at').textContent = `Content current as at ${formatDate(site.currentAsAt)}. Version ${site.version}.`;
document.querySelector('.skip-link').addEventListener('click', event => {
  event.preventDefault();
  document.getElementById('main').focus();
});

const steps = ['Something\'s happened', 'Understanding the risk', 'Investigating', 'Controls and review', 'Summary'];

function option(name, value, label, checked) {
  return el('label', { class: 'option' },
    el('input', { type: 'radio', name, value, checked }),
    el('span', {}, label));
}

document.getElementById('main').replaceChildren(el('div', { class: 'patterns' },
  el('p', { class: 'eyebrow' }, 'Design preview, sample content'),
  el('h1', {}, 'Pattern sample'),
  el('p', { class: 'lede' }, 'Components the triage, risk and controls sections will use. Wording here is placeholder.'),

  el('h2', {}, 'Progress through the guide'),
  el('ol', { class: 'steps' },
    steps.map((step, index) => el('li', {
      class: index === 0 ? 'is-done' : null,
      'aria-current': index === 1 ? 'step' : null,
    }, el('span', { class: 'step-number' }, String(index + 1)), el('span', { class: 'step-label' }, step)))),

  el('h2', {}, 'Immediate safety first'),
  el('section', { class: 'support-box', 'aria-labelledby': 'support-title' },
    el('h3', { id: 'support-title' }, 'If someone is in danger or at risk right now'),
    el('ul', { class: 'contact-list' },
      el('li', {}, el('strong', {}, '000'), el('span', {}, 'Emergency: police, fire, ambulance')),
      el('li', {}, el('strong', {}, '13 11 14'), el('span', {}, 'Lifeline, 24 hours')),
      el('li', {}, el('strong', {}, '1300 22 4636'), el('span', {}, 'Beyond Blue')),
      el('li', {}, el('strong', {}, 'EAP'), el('span', {}, 'Your organisation\'s Employee Assistance Program')))),

  el('h2', {}, 'A question'),
  el('fieldset', { class: 'question' },
    el('legend', {}, 'How often are workers exposed to this hazard?'),
    el('p', { class: 'hint' }, 'Think about the work as it is usually done, not just the incident that was reported.'),
    el('div', { class: 'options' },
      option('freq', 'once', 'One-off', false),
      option('freq', 'recurring', 'Recurring', true),
      option('freq', 'sustained', 'Sustained, most days', false)),
    el('details', { class: 'learn-more' },
      el('summary', {}, 'Why we ask this'),
      el('p', {}, 'Frequent or long-lasting exposure raises the risk of harm, even when each instance seems minor.'))),

  el('div', { class: 'field field-wide' },
    el('label', { for: 'notes' }, 'What have workers told you?'),
    el('p', { class: 'hint', id: 'notes-hint' }, 'Record what was said as evidence, in their words where you can.'),
    el('textarea', { id: 'notes', rows: '4', 'aria-describedby': 'notes-hint' }),
    el('p', { class: 'field-note' }, 'Stays in this browser tab only. Nothing is saved or sent.')),

  el('aside', { class: 'callout callout-hsr', 'aria-label': 'For HSRs' },
    el('p', { class: 'callout-label' }, 'For HSRs'),
    el('p', {}, 'You have a right to be consulted when hazards are identified and risks assessed.')),
  el('aside', { class: 'callout callout-hr', 'aria-label': 'For HR' },
    el('p', { class: 'callout-label' }, 'For HR'),
    el('p', {}, 'A conduct complaint can run alongside this process. It doesn\'t replace it.')),

  el('h2', {}, 'Indicative risk score'),
  el('section', { class: 'score-panel', 'aria-labelledby': 'score-title' },
    el('p', { class: 'score-tag' }, 'Indicative'),
    el('h3', { id: 'score-title' }, 'High'),
    el('ol', { class: 'band-scale', 'aria-label': 'Risk bands' },
      ['Low', 'Moderate', 'High', 'Very high'].map(band => el('li', { 'aria-current': band === 'High' ? 'true' : null }, band))),
    el('p', {}, 'Driven mostly by sustained exposure and three hazards combining. This isn\'t a determination, and the duty to manage the risk applies whatever the band.'),
    el('details', { class: 'learn-more' },
      el('summary', {}, 'How this score works'),
      el('p', {}, 'Weights come from the evidence register. Individual factors never change the rating.'))),

  el('p', { class: 'verify-note' }, 'TODO-VERIFY: example of a note that still needs checking — source: Compliance Code'),

  el('div', { class: 'actions' },
    el('a', { class: 'button button-secondary', href: 'index.html#/hazards' }, 'Back'),
    el('a', { class: 'button button-primary', href: 'index.html#/hazards' }, 'Continue to investigating')),
));

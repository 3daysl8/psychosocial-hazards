import { el, externalLink } from '../lib/dom.js';

export function homeView(ctx) {
  const { site } = ctx;
  const node = el('div', { class: 'home' },
    el('h1', {}, site.title),
    el('p', { class: 'lede' }, ctx.fill(site.tagline)),
    el('p', { class: 'privacy-note' }, site.privacy),

    el('h2', {}, 'Where are you coming from?'),
    el('div', { class: 'role-grid' },
      site.roles.map(role => el('section', { class: `role-card role-${role.id}`, 'aria-labelledby': `role-${role.id}` },
        el('h3', { id: `role-${role.id}` }, role.title),
        el('p', {}, ctx.fill(role.text))))),

    el('h2', {}, 'What\'s in the guide'),
    el('ol', { class: 'section-list' },
      site.sections.map(section => el('li', { class: `section-item status-${section.status}` },
        section.status === 'available'
          ? el('a', { href: section.href }, section.title)
          : el('span', { class: 'section-title' }, section.title),
        section.status !== 'available' ? el('span', { class: 'status-tag' }, 'Coming soon') : null,
        el('p', {}, ctx.fill(section.summary))))),

    el('p', { class: 'family-note' },
      'This guide is a companion to the ', externalLink(site.riskModelUrl, 'Psychological Risk Model'),
      ', which shows how work factors combine to raise risk.'),
  );
  return { title: null, node };
}

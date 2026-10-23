// Small building blocks reused across views.
// Every function takes `ctx` (site settings, current jurisdiction, and fill() for {placeholders}).

import { el, externalLink } from './dom.js';

// A "TODO-VERIFY" note. Shows the full text while site.showVerifyNotes is true,
// otherwise a neutral line so unfinished checks don't read as errors.
export function verifyNote(text, ctx) {
  const filled = ctx.fill(text);
  if (!filled) return null;
  return el('p', { class: 'verify-note' },
    ctx.site.showVerifyNotes ? filled : 'This point is being checked against the official source.');
}

export function draftBadge(label) {
  return el('p', { class: 'draft-badge' }, label);
}

// Role-specific notes, e.g. { hr: { text, verify }, hsr: { text } }.
export function roleCallouts(callouts, ctx) {
  if (!callouts) return [];
  return Object.entries(ctx.site.roleLabels)
    .filter(([role]) => callouts[role] && ctx.fill(callouts[role].text))
    .map(([role, label]) => el('aside', { class: `callout callout-${role}`, 'aria-label': label },
      el('p', { class: 'callout-label' }, label),
      el('p', {}, ctx.fill(callouts[role].text)),
      verifyNote(callouts[role].verify, ctx)));
}

// A source item: { title, url?, note?, verify? }
export function sourceItem(item, ctx) {
  return el('li', {},
    item.url ? externalLink(item.url, item.title) : el('span', {}, item.title),
    item.note ? el('span', { class: 'item-note' }, ' ', ctx.fill(item.note)) : null,
    verifyNote(item.verify, ctx));
}

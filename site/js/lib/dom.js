// Tiny helper for building page elements without writing HTML strings.
// Text is always inserted as text (never as HTML), so content can't inject markup.
//
//   el('a', { href: '#/hazards', class: 'button' }, 'Hazard library')
//   el('button', { onclick: () => alert('hi') }, 'Click')
//
// Attributes set to null, undefined or false are skipped. true sets an empty attribute.
// Children can be strings, elements, arrays, or null (skipped).

export function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs || {})) {
    if (value == null || value === false) continue;
    if (key === 'class') node.className = value;
    else if (key.startsWith('on') && typeof value === 'function') node.addEventListener(key.slice(2), value);
    else if (value === true) node.setAttribute(key, '');
    else node.setAttribute(key, value);
  }
  for (const child of children.flat(Infinity)) {
    if (child == null || child === false) continue;
    node.append(child instanceof Node ? child : String(child));
  }
  return node;
}

// A link that opens in a new tab, with a hidden note for screen readers.
export function externalLink(href, text) {
  return el('a', { href, target: '_blank', rel: 'noopener noreferrer' },
    text, el('span', { class: 'visually-hidden' }, ' (opens in a new tab)'));
}

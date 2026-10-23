// Text helpers shared by every view.

// Any text in a data file can be a plain string, or an object with one version per jurisdiction:
//   { vic: 'Victorian wording', model: 'Model WHS wording' }   or   { all: 'Fallback for any jurisdiction' }
// Returns undefined when there's no version for this jurisdiction, so the item is skipped.
export function forJurisdiction(value, jurisdictionId) {
  if (value && typeof value === 'object' && !Array.isArray(value)) return value[jurisdictionId] ?? value.all;
  return value;
}

// Swap {placeholders} for the current jurisdiction's terms.
// {dutyHolder} -> "employer" or "PCBU"; {DutyHolder} -> "Employer" or "PCBU".
// Unknown placeholders are left as they are, so a typo is visible rather than silently blank.
export function fillTerms(text, terms) {
  if (typeof text !== 'string') return text;
  return text.replace(/\{(\w+)\}/g, (match, key) => {
    if (key in terms) return terms[key];
    const lower = key.charAt(0).toLowerCase() + key.slice(1);
    if (lower in terms) return capitalise(terms[lower]);
    return match;
  });
}

export function capitalise(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// "2026-10-22" -> "22 October 2026"
export function formatDate(isoDate) {
  const [year, month, day] = isoDate.split('-').map(Number);
  return new Date(year, month - 1, day).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
}

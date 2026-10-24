// The user's answers, held in memory only.
// Never written to localStorage, cookies or anywhere else, and never sent over the network.
// Answers survive moving between pages of the guide, and are gone when the tab is closed or reloaded.

const answers = new Map();
let listeners = [];

export function getAnswer(key, fallback = null) {
  return answers.has(key) ? answers.get(key) : fallback;
}

export function setAnswer(key, value) {
  const empty = value == null || value === '' || (Array.isArray(value) && value.length === 0);
  if (empty) answers.delete(key);
  else answers.set(key, value);
  for (const listener of listeners) {
    if (listener.key === key || listener.key === '*') listener.fn(value, key);
  }
}

// Run fn whenever the answer for key changes ('*' for any answer). Listeners are cleared each time a page renders.
export function onAnswer(key, fn) {
  listeners.push({ key, fn });
}

export function resetListeners() {
  listeners = [];
}

export function clearAnswers() {
  answers.clear();
}

export function hasAnswers() {
  return answers.size > 0;
}

// A copy of everything entered, for the printable summary (Phase 7).
export function allAnswers() {
  return new Map(answers);
}

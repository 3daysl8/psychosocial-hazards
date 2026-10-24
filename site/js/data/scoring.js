// The indicative risk rating (Phase 5). All rules and wording for the score live here; the
// arithmetic is in js/lib/score.js.
//
// Every rule below is JUDGEMENT, not a research-derived number. No source examined validates
// hazard weights, control discounts, multipliers or band cut-offs (see
// research/assessing-psychosocial-hazards-review.md). The rules follow the Model Code's
// assessment questions (s 4.2) and risk register (Appendix C), and each one names its row in
// EVIDENCE_REGISTER.md ("Guide rating rules"). Change them here; the page and the
// "How this score works" panel both read from this file.
//
// Option ids come from js/data/risk.js and must stay in step with it.

// Bands, lowest to highest. The order matters: ratings move up and down this list.
export const bands = [
  { id: 'low', label: 'Low' },
  { id: 'moderate', label: 'Moderate' },
  { id: 'high', label: 'High' },
  { id: 'veryhigh', label: 'Very high' },
];

// Register row G1: starting band for a hazard, from severity and how often.
// A severe one-off event starts at High, because one severe exposure can cause harm on its own (Code s 4.2).
export const startingBand = {
  minor: { oneoff: 'low', recurring: 'low', sustained: 'moderate' },
  moderate: { oneoff: 'low', recurring: 'moderate', sustained: 'high' },
  serious: { oneoff: 'moderate', recurring: 'high', sustained: 'veryhigh' },
  severe: { oneoff: 'high', recurring: 'veryhigh', sustained: 'veryhigh' },
};

// Register row G2: steps up or down the band list for how well current controls are working.
// No percentage discounts. If controls aren't rated, the starting band stands.
export const controlsStep = {
  none: 1,
  failing: 1,
  partial: 0,
  working: -1,
};

// Register row G3: working controls can't take a severe hazard below this band.
export const severeFloor = 'moderate';

// Register row G4: show the "hazards may interact" flag when at least this many hazards are rated
// at or above combineFrom. The flag never changes a rating (Code s 4.2: consider hazards together).
export const combineCount = 2;
export const combineFrom = 'moderate';

// Register row G5: the overall result is the highest single hazard rating. Nothing is averaged.

export const scoreText = {
  title: 'Indicative risk rating',
  tag: 'Indicative',
  overallLabel: 'Overall (highest hazard)',
  bandScaleLabel: 'Rating bands',
  noneYet: 'Not rated yet',
  needHazards: 'Select at least one hazard above, then answer how often and how serious for each one.',
  needAnswers: 'Answer how often and how serious for each hazard above to see its rating.',
  partly: 'Some hazards aren\'t rated yet because how often or how serious is missing.',
  tableCaption: 'Rating for each hazard',
  columns: ['Hazard', 'How often', 'How serious', 'Controls', 'Rating'],
  controlsNotRated: 'Not rated',
  overallSuffix: ' (overall answer)',
  drivenBy: 'Driven by: {hazards}.',
  combine: '{count} hazards are rated Moderate or above. Hazards can interact or combine and make each other worse, so look at them together when choosing controls. This flag doesn\'t change any rating.',
  controlsDefault: 'Where a hazard has no controls answer of its own, the answer under "Controls already in place" is used.',
  dutyReminder: 'Whatever the rating, the duty to eliminate or minimise the risk so far as is reasonably practicable still applies. A serious hazard needs action on its own merits.',
  cantTell: 'This rating is a summary of your own answers. It isn\'t a probability that someone will be injured, a diagnosis, or a finding about whether the law has been complied with. Individual circumstances are not included.',
  how: {
    summary: 'How this score works',
    paragraphs: [
      'Each hazard is rated on its own, from three answers: how often and for how long, how serious the harm could be, and how well current controls are working. These are the things Safe Work Australia\'s Code of Practice asks you to consider for each hazard (section 4.2) and to record in its risk register (Appendix C).',
      'The overall rating is the highest single hazard rating. Ratings are never averaged, so one serious hazard can\'t be hidden by several minor ones.',
      'The rules are judgement. Research links these hazards with poorer mental health, but none of the studies we examined validates numerical weights, discounts or cut-offs for scoring a workplace. Every hazard therefore counts the same, and the rules are kept simple and shown in full below.',
    ],
    matrixCaption: 'Starting rating: how serious (rows) by how often (columns)',
    controlsTitle: 'Then adjust for controls',
    controlsRules: [
      'Nothing in place, or in place but not working: up one band (no higher than Very high).',
      'Partly working: no change.',
      'Working well: down one band. A severe hazard never goes below Moderate.',
      'Controls not answered: no change.',
    ],
    combineRule: 'If two or more hazards are rated Moderate or above, a note asks you to look at them together. It doesn\'t change the ratings.',
    methodLink: 'Full method and sources',
    methodPath: '/blob/main/docs/scoring-method.md',
  },
};

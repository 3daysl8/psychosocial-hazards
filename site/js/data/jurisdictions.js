// Site-wide settings and jurisdiction data.
// All wording lives here (and in the other data files), never in layout or logic.
// To add a jurisdiction: copy one entry in `jurisdictions`, give it a new id, and edit its text.
//
// Placeholders like {dutyHolder} in any data file are swapped for the current jurisdiction's
// `terms` when the page renders. Start the placeholder with a capital ({DutyHolder}) for a
// capitalised word at the start of a sentence.
//
// Anything starting "TODO-VERIFY" must be checked against the named source before it's relied on.

export const site = {
  title: 'Psychosocial Hazard Investigation Guide',
  tagline: 'A free guide for HR practitioners and Health and Safety Representatives in Australia on identifying, investigating and controlling psychosocial hazards.',
  version: '0.5.0',

  // Shown on every page as "Content current as at ...". Update this one line when content is reviewed.
  currentAsAt: '2026-10-24',

  disclaimer:
    'This guide is for education and to support good practice. It is not legal advice and does not determine legal outcomes. ' +
    'Any risk score it shows is indicative only, has face validity only, and must not be used on its own to make employment or clinical decisions about an individual. ' +
    'Always check the current law and your regulator\'s guidance.',

  // Shown in the bar at the very top of every page.
  independenceNote: 'Independent guide. Not a government website.',

  privacy: 'Nothing you type into this guide is stored or sent anywhere. It all stays in your browser and is gone when you close the page.',

  // Jurisdiction shown to first-time visitors. Must match a key in `jurisdictions` below.
  defaultJurisdiction: 'vic',

  // true: show the full "TODO-VERIFY ..." text on the site (useful while building).
  // false: show a neutral "being checked" note instead. Set to false before promoting the site.
  showVerifyNotes: true,

  riskModelUrl: 'https://psychologicalriskmetre.netlify.app/',
  repoUrl: 'https://github.com/3daysl8/psychosocial-hazards',

  nav: [
    { href: '#/', label: 'Home' },
    { href: '#/hazards', label: 'Hazard library' },
    { href: '#/triage', label: 'Something\'s happened' },
    { href: '#/risk', label: 'Understanding the risk' },
    { href: '#/investigate', label: 'Investigating' },
    { href: '#/law', label: 'Law and regulators' },
  ],

  // The guided path, shown as numbered steps at the top of each guided page.
  // Steps without an href aren't built yet and show as plain text.
  flow: [
    { href: '#/triage', label: 'Something\'s happened' },
    { href: '#/risk', label: 'Understanding the risk' },
    { href: '#/investigate', label: 'Investigating' },
    { label: 'Controls and review' },
    { label: 'Summary' },
  ],

  roleLabels: { hr: 'For HR', hsr: 'For HSRs' },

  roles: [
    {
      id: 'hr',
      title: 'If you work in HR',
      text:
        'You might be arriving with a complaint, a grievance or a question about someone\'s conduct. ' +
        'This guide helps you look at the same situation as a work health and safety hazard: what conditions allowed the harm to occur, and what controls are needed. ' +
        'A conduct process can run alongside this, but it doesn\'t replace it.',
    },
    {
      id: 'hsr',
      title: 'If you are a Health and Safety Representative',
      text:
        'You might be arriving with a concern about hazards, consultation, or whether the {dutyHolder} is meeting its duties. ' +
        'This guide follows the same path HR uses, with notes where your role comes in.',
    },
  ],

  // The guide's sections, shown on the home page. Change status to 'available' as each is built.
  sections: [
    { title: 'Hazard library', href: '#/hazards', status: 'available', summary: 'The common psychosocial hazards listed for your jurisdiction, with examples and early warning signs.' },
    { title: 'Something\'s happened', href: '#/triage', status: 'available', summary: 'Immediate safety and support, the notifiable incident check, and which processes run side by side.' },
    { title: 'Understanding the risk', href: '#/risk', status: 'available', summary: 'Gathering objective information, consulting workers and HSRs, and an indicative risk rating for each hazard.' },
    { title: 'Investigating systemic factors', href: '#/investigate', status: 'available', summary: 'What conditions allowed this harm to occur.' },
    { title: 'Controls and review', status: 'coming', summary: 'The hierarchy of controls for psychosocial hazards, and 30/60/90 day reviews.' },
    { title: 'Learn', status: 'coming', summary: 'Glossary, worked scenarios and knowledge checks.' },
    { title: 'Resources', status: 'coming', summary: 'The research and guidance behind the guide, and how scores are calculated.' },
  ],
};

export const jurisdictions = {
  vic: {
    id: 'vic',
    label: 'Victoria',
    terms: {
      dutyHolder: 'employer',
      dutyHolderLong: 'employer',
      lawShort: 'OHS',
      lawLong: 'occupational health and safety (OHS)',
      regulator: 'WorkSafe Victoria',
    },
    intro: 'In Victoria, psychosocial hazards are managed under the state\'s OHS laws, which are separate from the harmonised WHS laws used elsewhere.',
    regulators: [
      { title: 'WorkSafe Victoria', url: 'https://www.worksafe.vic.gov.au/' },
    ],
    legislation: [
      {
        title: 'Occupational Health and Safety Act 2004 (Vic)',
        verify: 'TODO-VERIFY: link to the current authorised version — source: Victorian Legislation website',
      },
      {
        // Commencement confirmed on WorkSafe's psychological health page, 2026-10-23.
        title: 'Occupational Health and Safety (Psychological Health) Regulations 2025 (Vic)',
        note: 'In force from 1 December 2025.',
        verify: 'TODO-VERIFY: link to the authorised version — source: Victorian Legislation website',
      },
    ],
    guidance: [
      {
        title: 'Compliance Code: Psychological health (WorkSafe Victoria)',
        url: 'https://www.worksafe.vic.gov.au/compliance-code-psychological-health',
        note: 'Appendix B helps identify hazards. Appendix C describes 16 example hazards with sample risk controls.',
        verify: 'TODO-VERIFY: edition number and date — source: Compliance Code PDF',
      },
      {
        title: 'Psychological health hub, including the hazard identification tool and prevention plan template',
        url: 'https://www.worksafe.vic.gov.au/psychological-health',
        // Not mandatory: WorkSafe Regulations FAQ, checked 2026-10-23.
        note: 'Prevention plans aren\'t mandatory in Victoria, but WorkSafe encourages employers to use its template.',
      },
      {
        title: 'Psychological health regulations: frequently asked questions',
        url: 'https://www.worksafe.vic.gov.au/psychological-health-regulations-frequently-asked-questions',
      },
    ],
    notes: [],
  },

  model: {
    id: 'model',
    label: 'Model WHS (other states and territories)',
    terms: {
      dutyHolder: 'PCBU',
      dutyHolderLong: 'person conducting a business or undertaking (PCBU)',
      lawShort: 'WHS',
      lawLong: 'work health and safety (WHS)',
      regulator: 'your WHS regulator',
    },
    intro: 'Most states and territories, and the Commonwealth, have adopted laws based on the model Work Health and Safety (WHS) Act and Regulations. Each has its own regulator.',
    regulators: [
      { title: 'SafeWork NSW', url: 'https://www.safework.nsw.gov.au/' },
      { title: 'Workplace Health and Safety Queensland', url: 'https://www.worksafe.qld.gov.au/' },
      { title: 'SafeWork SA', url: 'https://www.safework.sa.gov.au/' },
      { title: 'WorkSafe Tasmania', url: 'https://worksafe.tas.gov.au/' },
      { title: 'WorkSafe WA', url: 'https://www.worksafe.wa.gov.au/' },
      { title: 'WorkSafe ACT', url: 'https://www.worksafe.act.gov.au/' },
      { title: 'NT WorkSafe', url: 'https://worksafe.nt.gov.au/' },
      { title: 'Comcare (Commonwealth)', url: 'https://www.comcare.gov.au/' },
    ],
    regulatorsVerify: 'TODO-VERIFY: regulator names, which jurisdictions have adopted the model laws (including WA\'s own WHS Act), and links — source: Safe Work Australia "Law and regulation" pages',
    legislation: [
      {
        title: 'Model Work Health and Safety Act and Regulations, as adopted in each state and territory',
        verify: 'TODO-VERIFY: which regulations cover psychosocial risks, and links to each jurisdiction\'s authorised version — source: model WHS Regulations / Safe Work Australia',
      },
    ],
    guidance: [
      {
        title: 'Model Code of Practice: Managing psychosocial hazards at work (Safe Work Australia, July 2022)',
        url: 'https://www.safeworkaustralia.gov.au/doc/model-code-practice-managing-psychosocial-hazards-work',
        note: 'Has legal effect only where a jurisdiction has approved it. Check with your regulator.',
        verify: 'TODO-VERIFY: which jurisdictions have approved it — source: each WHS regulator',
      },
      {
        title: 'Model Code of Practice: Health care and social assistance industry (Safe Work Australia), psychosocial hazards chapter',
        url: 'https://www.safeworkaustralia.gov.au/book/health-care-and-social-assistance/hazards-risks-and-controls/psychosocial-hazards',
        note: 'Industry examples and controls for health care and social assistance workplaces.',
      },
      { title: 'Safe Work Australia', url: 'https://www.safeworkaustralia.gov.au/', note: 'National policy body. It develops the model laws but does not enforce them.' },
    ],
    notes: [
      {
        text: 'Queensland requires written prevention plans for psychosocial hazards.',
        verify: 'TODO-VERIFY: Queensland prevention plan requirement, who it applies to and the date it started — source: Managing the risk of psychosocial hazards at work Code of Practice (Qld) / WHS Regulation 2011 (Qld)',
      },
    ],
  },
};

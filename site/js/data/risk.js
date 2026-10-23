// "Understanding the risk" (Phase 3). Ends where the indicative score will go (Phase 5).
// DRAFT content for the owner's review. Block types are described in js/views/flow.js.
// Answer keys start with "risk." and are held in memory only (js/lib/state.js).
//
// The exposure and controls options below are what the Phase 5 score will read.
// Keep their ids stable: the scoring weights will refer to them.

export const exposureFrequency = {
  label: 'How often, and for how long?',
  options: [
    { id: 'oneoff', label: 'One-off: a single event' },
    { id: 'recurring', label: 'Recurring: happens from time to time' },
    { id: 'sustained', label: 'Sustained: most days, or over a long period' },
  ],
};

export const exposureSeverity = {
  label: 'How serious could the harm be?',
  options: [
    { id: 'minor', label: 'Minor: distress that passes quickly' },
    { id: 'moderate', label: 'Moderate: affects wellbeing or work for a while' },
    { id: 'serious', label: 'Serious: likely to cause a psychological or physical injury' },
    { id: 'severe', label: 'Severe: risk of serious or lasting injury, or danger to life' },
  ],
};

export const controlsEffectiveness = [
  { id: 'none', label: 'Nothing is in place' },
  { id: 'failing', label: 'In place, but not working' },
  { id: 'partial', label: 'Partly working' },
  { id: 'working', label: 'Working well, as far as you can tell' },
];

export const riskPage = {
  id: 'risk',
  href: '#/risk',
  title: 'Understanding the risk',
  intro: [
    'Build a picture of the risk from three things: objective information, what workers and others have said, and consultation. This section ends with an indicative risk score.',
  ],
  sections: [
    {
      id: 'hazards',
      title: 'Which hazards are present?',
      blocks: [
        {
          type: 'paragraphs',
          paragraphs: [
            'Select every hazard that may be present, not just the one in the report. Hazards rarely occur alone, and they often make each other worse.',
          ],
        },
        { type: 'hazardPicker', key: 'risk.hazards', label: 'Hazards that may be present' },
      ],
    },
    {
      id: 'exposure',
      title: 'How often, how long and how serious',
      blocks: [
        {
          type: 'paragraphs',
          paragraphs: [
            'For each hazard, think about the work as it\'s usually done, not only the incident that was reported. Frequent or long-lasting exposure raises the risk, even when each instance seems minor.',
          ],
        },
        {
          type: 'hazardExposure',
          hazardsKey: 'risk.hazards',
          frequency: exposureFrequency,
          severity: exposureSeverity,
          emptyText: 'Select hazards above to rate them here.',
          combineText: 'You\'ve selected {count} hazards. When hazards combine, the risk is usually greater than any one of them alone.',
        },
        {
          type: 'learnMore',
          summary: 'Why one-off events can still be serious',
          paragraphs: [
            'Some events, such as an assault or exposure to a traumatic incident, can cause serious harm on their own. Rate the severity for what could happen, not just what did.',
          ],
        },
      ],
    },
    {
      id: 'records',
      title: 'Objective information',
      blocks: [
        {
          type: 'paragraphs',
          paragraphs: [
            'Look for patterns in records, not just the incident itself. Note who, what and where.',
          ],
        },
        {
          type: 'checklist',
          key: 'risk.records',
          label: 'Records reviewed',
          options: [
            { id: 'rosters', label: 'Rosters and timesheets: hours, breaks, rest between shifts' },
            { id: 'workload', label: 'Workloads and staffing: vacancies, ratios, backlogs' },
            { id: 'reports', label: 'Hazard, incident and injury reports' },
            { id: 'complaints', label: 'Complaints, grievances and past investigation reports' },
            { id: 'leave', label: 'Sick and unplanned leave trends' },
            { id: 'turnover', label: 'Turnover and exit interviews' },
            { id: 'claims', label: 'Workers compensation claims for psychological injury' },
            { id: 'eap', label: 'EAP usage reports (de-identified, work-related reasons)' },
            { id: 'minutes', label: 'Team meeting and health and safety committee minutes' },
            { id: 'surveys', label: 'Previous surveys and risk assessments' },
            { id: 'feedback', label: 'Customer or client feedback about wait times or service levels' },
            { id: 'productivity', label: 'Productivity records' },
          ],
        },
        {
          type: 'paragraphs',
          paragraphs: [
            { vic: 'Based on the record types WorkSafe Victoria\'s psychosocial hazard identification tool suggests reviewing.', model: 'Based on the record types WorkSafe Victoria suggests reviewing; they apply in any jurisdiction.' },
          ],
        },
        { type: 'text', key: 'risk.records.notes', label: 'What did the records show?', hint: 'Patterns, trends, and anything that confirms or adds to what was reported.' },
      ],
    },
    {
      id: 'accounts',
      title: 'What workers and others have said',
      blocks: [
        { type: 'text', key: 'risk.accounts.worker', label: 'What the worker or workers reported', hint: 'Record it as evidence, in their words where you can.' },
        { type: 'text', key: 'risk.accounts.others', label: 'What others said', hint: 'Colleagues, supervisors, witnesses, HSRs.' },
        {
          type: 'callouts',
          callouts: {
            hr: { text: 'Where accounts differ, record both. Differences point to things to check in the records, not to whose account to believe.' },
          },
        },
      ],
    },
    {
      id: 'consult',
      title: 'Consulting workers and HSRs',
      blocks: [
        {
          type: 'paragraphs',
          paragraphs: [
            {
              vic: 'Victorian employers must consult employees, so far as is reasonably practicable, on health and safety matters that directly affect them, such as identifying hazards and deciding on controls. Where employees are represented by an HSR, consultation must involve the HSR.',
              model: 'PCBUs must consult workers, so far as is reasonably practicable, when identifying hazards, assessing risks and deciding on controls, and involve HSRs where workers are represented.',
            },
          ],
        },
        { type: 'verify', text: { model: 'TODO-VERIFY: consultation duties and when HSRs must be involved — source: model WHS Act consultation provisions; Code of Practice section 1.3' } },
        {
          type: 'jurisdictionNote',
          text: { vic: 'Consultation duties as described in WorkSafe\'s FAQ on the psychological health regulations.' },
          source: { title: 'WorkSafe Victoria: psychological health regulations FAQ', url: 'https://www.worksafe.vic.gov.au/psychological-health-regulations-frequently-asked-questions' },
        },
        {
          type: 'checklist',
          key: 'risk.consult',
          label: 'Consultation',
          options: [
            { id: 'workers', label: 'Asked affected workers about the hazards and their views' },
            { id: 'hsr', label: 'Involved the HSR, where workers have one' },
            { id: 'recorded', label: 'Recorded their views and considered them' },
            { id: 'informed', label: 'Told workers what happens next' },
          ],
        },
        {
          type: 'callouts',
          callouts: {
            hsr: {
              text: {
                vic: 'You can access information the employer has about hazards and the health and safety of your work group. WorkSafe expects this to include information about psychological injuries in the group, without medical details unless the person consents.',
                model: 'Ask to be consulted at each step: identifying hazards, assessing the risk and choosing controls.',
              },
              verify: { model: 'TODO-VERIFY: HSR rights to information and consultation — source: model WHS Act HSR provisions' },
            },
          },
        },
      ],
    },
    {
      id: 'controls',
      title: 'Controls already in place',
      blocks: [
        { type: 'text', key: 'risk.controls.list', label: 'What\'s already being done?', hint: 'For example rosters, supervision, staffing, training, policies or support services.' },
        { type: 'choice', key: 'risk.controls.effectiveness', label: 'How well are they working?', options: controlsEffectiveness },
        {
          type: 'learnMore',
          summary: 'Why EAP and counselling don\'t count as controlling the risk',
          paragraphs: [
            'Support services like EAP help people after harm has happened. They\'re important, but they don\'t remove or reduce the hazard, so they don\'t meet the duty to eliminate or minimise the risk on their own.',
          ],
        },
      ],
    },
    {
      id: 'individual',
      title: 'Individual circumstances (not scored)',
      blocks: [
        {
          type: 'paragraphs',
          paragraphs: [
            'Someone\'s personal circumstances can shape the support they need. Note them here to inform support. They never raise or lower the risk rating, because the duty sits with how the work is designed and managed.',
          ],
        },
        { type: 'text', key: 'risk.individual', label: 'Notes to inform support', hint: 'Only what\'s needed. Leave out health details unless the person has agreed.' },
      ],
    },
    {
      id: 'score',
      title: 'Indicative risk score',
      blocks: [
        {
          type: 'scorePlaceholder',
          title: 'Not available yet',
          paragraphs: [
            'The indicative score will appear here once the research behind its weights has been checked (build Phase 5). It will use the hazards, exposure, severity and existing controls you\'ve entered above. Individual circumstances will not affect it.',
          ],
          riskModelLink: 'Meanwhile, the Psychological Risk Model shows how work factors combine.',
        },
      ],
    },
  ],
  back: { href: '#/triage', label: 'Back to something\'s happened' },
  next: { href: '#/investigate', label: 'Continue to investigating' },
};

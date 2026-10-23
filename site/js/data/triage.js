// "Something's happened": the triage section (Phase 2).
// DRAFT content for the owner's review. Block types are described in js/views/flow.js.
// Text can be one string, or { vic: '...', model: '...' } for jurisdiction-specific wording.
// Answer keys start with "triage." and are held in memory only (js/lib/state.js).

export const triagePage = {
  id: 'triage',
  href: '#/triage',
  title: 'Something\'s happened',
  intro: [
    'Start here when something has been reported: an incident, a complaint, a concern raised by a worker or HSR, or signs that someone is being harmed at work. Safety and support come first.',
  ],
  sections: [
    {
      id: 'safety',
      title: 'Immediate safety and support',
      blocks: [
        { type: 'support' },
        {
          type: 'paragraphs',
          paragraphs: [
            'If anyone is in immediate danger, call 000 first. Then make sure the person affected has support, and knows what will happen next.',
          ],
        },
        {
          type: 'checklist',
          key: 'triage.safety',
          label: 'First steps',
          hint: 'Tick each step as it\'s done.',
          options: [
            { id: 'danger', label: 'Checked whether anyone is in immediate danger, and called 000 if so' },
            { id: 'support', label: 'Offered the person support: EAP, a support person, or time away from work if they need it' },
            { id: 'contact', label: 'Agreed who will keep in touch with them, and how often' },
            { id: 'interim', label: 'Considered interim steps to stop further exposure while the matter is looked at' },
            { id: 'record', label: 'Recorded what was reported, factually and in the person\'s words' },
          ],
        },
        {
          type: 'learnMore',
          summary: 'Interim steps that don\'t disadvantage the person who reported',
          paragraphs: [
            'Interim steps might include changing who works with whom, adjusting rosters or duties, or adding supervision.',
            'Avoid steps that leave the person who raised the concern worse off, such as moving them out of their role against their wishes. That discourages reporting and can expose them to further harm.',
          ],
          verify: 'TODO-VERIFY: protections against adverse treatment for raising a health and safety issue — source: {lawShort} Act (discrimination / adverse action provisions)',
        },
        {
          type: 'callouts',
          callouts: {
            hr: { text: 'Treat the report as evidence about the work, not as a grievance to be tested. Even if a conduct process follows, the hazard needs managing now.' },
            hsr: {
              text: 'If the report came to you, you can raise it with the {dutyHolder} and ask what interim steps will be taken.',
              verify: 'TODO-VERIFY: HSR powers to raise issues and request action — source: {lawShort} Act HSR provisions',
            },
          },
        },
      ],
    },
    {
      id: 'notifiable',
      title: 'Is this a notifiable incident?',
      blocks: [
        {
          type: 'paragraphs',
          paragraphs: [
            'Some incidents must be reported to the regulator straight away. Read the regulator\'s own definition rather than relying on a summary.',
            'Psychological injury on its own rarely meets the threshold, but the incident that caused it might, for example a serious assault.',
          ],
        },
        {
          type: 'links',
          items: {
            vic: [
              { title: 'WorkSafe Victoria: incident notification', url: 'https://www.worksafe.vic.gov.au/incident-notification', note: 'What must be notified, and how.' },
            ],
            model: [
              { title: 'Safe Work Australia: incident notification', url: 'https://www.safeworkaustralia.gov.au/safety-topic/managing-health-and-safety/incident-notification', note: 'What counts as notifiable under the model WHS laws. Notify your own state or territory regulator.' },
            ],
          },
        },
        { type: 'verify', text: 'TODO-VERIFY: how psychological injury relates to the notifiable incident definitions — source: {lawShort} Act incident notification provisions; regulator guidance' },
        {
          type: 'choice',
          key: 'triage.notifiable',
          label: 'Having read the definition, could this be a notifiable incident?',
          options: [
            { id: 'yes', label: 'Yes' },
            { id: 'unsure', label: 'Not sure' },
            { id: 'no', label: 'No' },
          ],
        },
        {
          type: 'conditional',
          showIf: { key: 'triage.notifiable', values: ['yes', 'unsure'] },
          blocks: [
            {
              type: 'paragraphs',
              paragraphs: [
                'Follow the regulator\'s notification steps now. Notification has time limits, and the site may need to be left undisturbed. If you\'re not sure, contact {regulator} for advice.',
              ],
            },
            { type: 'verify', text: 'TODO-VERIFY: notification time limits and site preservation requirements — source: {lawShort} Act incident notification provisions' },
          ],
        },
        {
          type: 'jurisdictionNote',
          text: { vic: 'In Victoria, a notifiable incident involving psychosocial hazards is one of the triggers for reviewing your risk controls.' },
          source: { title: 'WorkSafe Victoria: psychological health regulations FAQ', url: 'https://www.worksafe.vic.gov.au/psychological-health-regulations-frequently-asked-questions' },
        },
      ],
    },
    {
      id: 'processes',
      title: 'Processes that can run side by side',
      blocks: [
        {
          type: 'paragraphs',
          paragraphs: [
            'One report can start more than one process. They answer different questions and follow different rules. One doesn\'t replace another, and the hazard process shouldn\'t wait for the others to finish.',
          ],
        },
        {
          type: 'processes',
          items: [
            {
              title: 'Hazard management ({lawShort})',
              question: 'What conditions at work are creating a risk, and how will they be controlled?',
              who: 'The {dutyHolder}, consulting workers and HSRs.',
              focus: 'How work is designed and managed, the work environment and interactions. Not individual blame.',
              keyPoint: 'This is what this guide covers. The duty continues whatever happens in the other processes.',
            },
            {
              title: 'Conduct or grievance process',
              question: 'Did someone behave in a way that breaches policy or expectations, and what should happen?',
              who: 'HR or management, under the organisation\'s policies.',
              focus: 'An individual\'s behaviour and its consequences.',
              keyPoint: 'A finding that a complaint isn\'t substantiated doesn\'t mean there\'s no hazard.',
            },
            {
              title: 'Workers compensation',
              question: 'Is an injured worker entitled to compensation for a work-related injury?',
              who: 'The insurer or scheme agent, under workers compensation law.',
              focus: 'The injury, and whether the claim is accepted.',
              keyPoint: 'Workers compensation has its own tests, including exclusions sometimes called "reasonable management action". Those tests belong to the claim. They play no part in assessing or controlling the hazard.',
              verify: 'TODO-VERIFY: workers compensation tests and exclusions for psychological injury — source: Workplace Injury Rehabilitation and Compensation Act 2013 (Vic) / state and territory workers compensation laws',
            },
          ],
        },
        {
          type: 'jurisdictionNote',
          text: { vic: 'WorkSafe confirms the psychological health regulations don\'t change eligibility for workers compensation, which is covered by separate law (the Workplace Injury Rehabilitation and Compensation Act 2013).' },
          source: { title: 'WorkSafe Victoria: psychological health regulations FAQ', url: 'https://www.worksafe.vic.gov.au/psychological-health-regulations-frequently-asked-questions' },
        },
        {
          type: 'callouts',
          callouts: {
            hr: { text: 'Plan a conduct process so it doesn\'t stall the hazard process. Interim controls shouldn\'t wait for an investigation outcome.' },
            hsr: {
              text: 'Your role is in the hazard process. You can be consulted on hazards and controls even while a confidential conduct process runs alongside.',
              verify: 'TODO-VERIFY: HSR rights to information and consultation where a confidential conduct process is running — source: {lawShort} Act HSR and consultation provisions',
            },
          },
        },
      ],
    },
    {
      id: 'report',
      title: 'Listening to the report',
      blocks: [
        {
          type: 'paragraphs',
          paragraphs: [
            'People rarely describe hazards in technical terms. They might say they feel stressed, burnt out, scared of a client, humiliated, treated unfairly, or confused about what\'s expected of them.',
            'Treat these descriptions as evidence about the work. Ask what was happening, how often and for how long, and record it in their words.',
          ],
        },
        {
          type: 'text',
          key: 'triage.report',
          label: 'What was reported',
          hint: 'Who reported it, when, and what they said. Use their words where you can.',
          rows: '6',
        },
      ],
    },
  ],
  next: { label: 'Next: Understanding the risk (coming in the next build phase)' },
};

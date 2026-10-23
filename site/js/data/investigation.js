// "Investigating systemic factors" (Phase 3).
// DRAFT content for the owner's review. Block types are described in js/views/flow.js.
// Answer keys start with "inv." and are held in memory only (js/lib/state.js).

export const investigationPage = {
  id: 'investigate',
  href: '#/investigate',
  title: 'Investigating systemic factors',
  intro: [
    'The question here is what conditions allowed this harm to occur, not who did what. Even where someone\'s behaviour was the trigger, look at what in the work made it more likely, or let it continue.',
  ],
  blocks: [
    {
      type: 'callouts',
      callouts: {
        hr: { text: 'If a conduct process is running, keep its findings separate. This section is about the system around the behaviour.' },
        hsr: { text: 'These questions are a good basis for consultation. Ask to see the information that answers them.' },
      },
    },
  ],
  sections: [
    {
      id: 'design',
      title: 'Work design',
      blocks: [
        {
          type: 'prompts',
          items: [
            'Were demands (workload, time pressure, emotional load) realistic for the staffing and time available?',
            'Did workers have a say over how and when the work was done?',
            'Were roles and responsibilities clear, or were people getting conflicting instructions?',
            'Were the tools, information and resources adequate?',
            'Did recent changes, such as a restructure, new systems or new rosters, affect the work?',
          ],
        },
        { type: 'text', key: 'inv.design', label: 'What did you find about work design?' },
      ],
    },
    {
      id: 'capability',
      title: 'Supervisor and manager capability',
      blocks: [
        {
          type: 'prompts',
          items: [
            'Did supervisors have the time, skills and training to support their teams?',
            'Were concerns taken seriously and acted on?',
            'How were performance and behaviour issues managed, and how quickly?',
            'Were supervisors themselves under pressure that affected how they led?',
          ],
        },
        { type: 'text', key: 'inv.capability', label: 'What did you find about supervision and management?' },
      ],
    },
    {
      id: 'reporting',
      title: 'Reporting systems',
      blocks: [
        {
          type: 'prompts',
          items: [
            'Were there earlier signs or reports? What happened to them?',
            'Could workers report informally, anonymously or confidentially?',
            'Were there barriers to reporting, such as fear of reprisal or not knowing how?',
            'Did earlier reports lead to a review of the risks and controls?',
          ],
        },
        { type: 'text', key: 'inv.reporting', label: 'What did you find about reporting?' },
      ],
    },
    {
      id: 'culture',
      title: 'Culture and environment',
      blocks: [
        {
          type: 'prompts',
          items: [
            'Were lower-level harmful behaviours, such as eye-rolling, jokes or incivility, tolerated or ignored?',
            'Are there power imbalances, or low diversity in the team?',
            'Do some groups, such as new, young, casual or migrant workers, have less support or less voice?',
            'Did the physical environment, isolation or remote work play a part?',
          ],
        },
        {
          type: 'learnMore',
          summary: 'Harmful behaviour as a symptom',
          paragraphs: [
            'Poor behaviour between colleagues can be a response to other hazards, such as high demands, unclear roles or poor support. Addressing those is often the first step in improving culture.',
          ],
        },
        { type: 'text', key: 'inv.culture', label: 'What did you find about culture and environment?' },
      ],
    },
    {
      id: 'findings',
      title: 'Findings',
      blocks: [
        {
          type: 'text',
          key: 'inv.findings',
          label: 'What conditions allowed this harm to occur?',
          hint: 'Summarise the conditions you found, in plain language. These carry forward into choosing controls.',
          rows: '6',
        },
      ],
    },
  ],
  back: { href: '#/risk', label: 'Back to understanding the risk' },
  next: { label: 'Next: Controls and review (coming in a later build phase)' },
};

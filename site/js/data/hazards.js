// Hazard library content.
// DRAFT: summaries, examples, warning signs and callouts were drafted for the owner's review
// (reviewStatus: 'draft'). They are plain-English explanations in our own words, not legal definitions.
// Source notes: research/notes/swa-psychosocial-codes.md and research/notes/worksafe-vic-psychological-health.md
//
// Victoria and the model WHS laws use different hazard lists:
//   Model Code (Safe Work Australia): 14 hazards.
//   Victorian Compliance Code (WorkSafe): 16 hazards, some named differently, some split or added.
// So each hazard can say which jurisdictions list it, and override its wording per jurisdiction.
//
// Each hazard:
//   id            stable id used in URLs (#/hazards/<id>) and by other data files. Don't change once published.
//   name          name as used in the model Code of Practice
//   appliesTo     optional list of jurisdiction ids that list this hazard. Leave out if all do.
//   coveredBy     optional, for jurisdictions that don't list it: { model: 'other-hazard-id' }
//   overrides     optional per-jurisdiction changes, e.g. { vic: { name, summary, examples, definitions } }
//   category      key from hazardCategories (a browsing aid, not an official classification)
//   summary       one to three plain-English sentences
//   examples      workplace examples
//   warningSigns  early warning signs at team or workplace level
//   callouts      optional role notes: { hr: { text, verify }, hsr: { text, verify } }
//   definitions   optional formal definitions quoted word for word: [{ term, text, source }]
//                 `source` is a key in hazardLibrary.sources, shown as the attribution.
//   tags          topic tags, used later to link education content (Phase 8) and evidence (Phase 4)
//   reviewStatus  'draft' until the owner has checked it, then 'reviewed'

export const hazardLibrary = {
  title: 'Hazard library',
  intro: 'Psychosocial hazards come from how work is designed and managed, the work environment, equipment, and how people interact at work. They can cause psychological harm, such as anxiety, depression or post-traumatic stress, and physical harm too.',

  // {count} is replaced with the number of hazards listed for the selected jurisdiction.
  listIntro: {
    model: 'Safe Work Australia\'s model Code of Practice lists {count} common psychosocial hazards. The list isn\'t exhaustive, and most people are exposed to several at once.',
    vic: 'WorkSafe Victoria\'s Compliance Code lists {count} examples of psychosocial hazards. The list isn\'t exhaustive, and most people are exposed to several at once.',
  },
  useNote: 'Use this library to recognise them, see what they can look like in a workplace, and spot early warning signs.',

  // Which document each jurisdiction's hazard names come from.
  sources: {
    model: {
      title: 'Model Code of Practice: Managing psychosocial hazards at work (Safe Work Australia, July 2022)',
      url: 'https://www.safeworkaustralia.gov.au/doc/model-code-practice-managing-psychosocial-hazards-work',
    },
    vic: {
      title: 'Compliance Code: Psychological health (WorkSafe Victoria)',
      url: 'https://www.worksafe.vic.gov.au/compliance-code-psychological-health',
    },
    vicTool: {
      title: 'Psychosocial hazard identification tool (WorkSafe Victoria, 2026)',
      url: 'https://www.worksafe.vic.gov.au/psychological-health',
    },
  },
  // Model names checked against the Code, section 3.1 (2026-10-23). Victorian names checked against
  // WorkSafe's hazard identification tool, which follows the Compliance Code (2026-10-23).
  sourceVerify: {
    vic: 'TODO-VERIFY: hazard names and descriptions against the Compliance Code itself (checked so far against WorkSafe\'s hazard identification tool, which follows it) — source: Compliance Code: Psychological health, Appendices B and C',
  },

  coveredByNote: 'This hazard isn\'t listed separately under the {lawShort} guidance for your jurisdiction. It\'s covered by:',
  combineNote:
    'Hazards rarely occur on their own. When several are present at once, or exposure is frequent, long-lasting or severe, the risk of harm increases. ' +
    'Look at the whole picture, not just the hazard that prompted the report.',
  riskModelNote: 'To explore how work factors combine, try the Psychological Risk Model.',
  draftLabel: 'Draft content, under review',
};

export const hazardCategories = {
  job: 'How the job is designed',
  organisation: 'How the organisation supports and treats people',
  environment: 'Work environment and exposure',
  behaviour: 'Harmful behaviour and relationships',
};

export const hazards = [
  {
    id: 'job-demands',
    name: 'Job demands',
    category: 'job',
    summary: 'Sustained high, or very low, physical, mental or emotional effort needed to do the job. Covers workload, time pressure, long or irregular hours, emotionally demanding work, high stakes if mistakes happen, and work that is monotonous or leaves people idle while work piles up.',
    examples: [
      'Workloads that can\'t be finished in paid hours, so unpaid overtime is routine.',
      'Frontline roles dealing with distressed or difficult people day after day.',
      'Rosters with long shifts, short breaks between shifts, or constant on-call.',
      'Repetitive, low-variety work with little to engage the worker.',
    ],
    warningSigns: [
      'Regular overtime, or work taken home.',
      'Breaks missed and leave not taken.',
      'Backlogs, errors or missed deadlines rising.',
      'Increased sick leave or turnover in one team.',
    ],
    overrides: {
      vic: {
        name: 'High job demands',
        summary: 'Work that needs sustained or repeated high physical, mental or emotional effort, or a mix of these. Covers time pressure, too much to do, skipped breaks, short rest between shifts, emotionally demanding work, and long stretches of intense focus.',
        examples: [
          'Workloads that can\'t be finished in paid hours, so unpaid overtime is routine.',
          'Frontline roles dealing with distressed or difficult people day after day, or roles where people have to hide how they feel.',
          'Rosters with long shifts, short breaks between shifts, or constant on-call.',
          'Tight or unrealistic deadlines as a matter of course.',
        ],
      },
    },
    tags: ['workload', 'working-hours', 'emotional-demands', 'job-demand-control'],
    reviewStatus: 'draft',
  },
  {
    id: 'low-job-demands',
    name: 'Low job demands',
    appliesTo: ['vic'],
    coveredBy: { model: 'job-demands' },
    category: 'job',
    summary: 'Work that needs sustained low physical, mental or emotional effort, such as long periods of monotonous or repetitive tasks, or work well below a person\'s skills and experience.',
    examples: [
      'Long stretches of repetitive data entry or monitoring with little variety.',
      'Experienced workers given tasks well below their skills.',
      'Long idle periods waiting on equipment or other people.',
    ],
    warningSigns: [
      'Workers say they\'re bored or under-used.',
      'Disengagement, or mistakes from lapses in attention.',
      'Requests for more varied work, or resignations.',
    ],
    tags: ['workload', 'underload', 'job-demand-control'],
    reviewStatus: 'draft',
  },
  {
    id: 'low-job-control',
    name: 'Low job control',
    category: 'job',
    summary: 'Workers have little say over how or when they do their work, such as the pace, the order of tasks, the methods used, or when they take breaks.',
    examples: [
      'Work paced by a machine, system or call queue with no flexibility.',
      'Tight scripts or procedures that leave no room for judgement.',
      'Close monitoring of every task.',
      'Decisions about how the work is done made without asking the people who do it.',
    ],
    warningSigns: [
      'Workers say they can\'t influence how their work is done.',
      'Suggestions aren\'t asked for, or are asked for and ignored.',
      'Disengagement and low morale.',
    ],
    tags: ['job-control', 'decision-latitude', 'job-demand-control'],
    reviewStatus: 'draft',
  },
  {
    id: 'poor-support',
    name: 'Poor support',
    category: 'organisation',
    summary: 'Workers don\'t get enough practical help, information, training, resources or emotional support from supervisors and colleagues to do the job well.',
    examples: [
      'Supervisors who are unavailable or too stretched to help.',
      'New, young or migrant workers left to work things out without training or support.',
      'Not enough staff, tools or equipment for the work expected.',
    ],
    warningSigns: [
      'Workers repeatedly ask for help that doesn\'t come.',
      'Mistakes that trace back to missing training or information.',
      'People working in isolation even within a team.',
    ],
    tags: ['social-support', 'supervisor-capability', 'resourcing'],
    reviewStatus: 'draft',
  },
  {
    id: 'role-clarity',
    name: 'Lack of role clarity',
    category: 'job',
    summary: 'Uncertainty about, or frequent changes to, tasks, responsibilities and expectations, conflicting demands from different people, or important information about the task not being available.',
    examples: [
      'Two managers giving conflicting priorities.',
      'Duties that change often without explanation.',
      'The same task given to several people without saying who does what.',
    ],
    warningSigns: [
      'Confusion about who is responsible for what.',
      'Work duplicated, or falling through the gaps.',
      'Disagreements about what good performance looks like.',
    ],
    overrides: { vic: { name: 'Low role clarity' } },
    tags: ['role-clarity', 'expectations'],
    reviewStatus: 'draft',
  },
  {
    id: 'change-management',
    name: 'Poor organisational change management',
    category: 'organisation',
    summary: 'Change that is poorly planned, communicated, supported or consulted on, such as restructures, new technology, new systems or relocations, without thinking through the effects on health, safety and performance.',
    examples: [
      'A restructure announced with little notice and no consultation.',
      'New systems introduced without training or time to adjust.',
      'Long periods of uncertainty about jobs during a review.',
    ],
    warningSigns: [
      'Rumours and anxiety about job security.',
      'More leave or resignations around a change.',
      'Workers saying they found out second-hand.',
    ],
    callouts: {
      hsr: {
        text: 'Proposed changes that may affect health and safety are generally a point where workers and HSRs should be consulted, before decisions are locked in.',
        verify: 'TODO-VERIFY: consultation duty on proposed changes — source: {lawShort} Act consultation provisions; Code of Practice / Compliance Code consultation section',
      },
    },
    tags: ['change', 'consultation', 'job-insecurity'],
    reviewStatus: 'draft',
  },
  {
    id: 'reward-recognition',
    name: 'Inadequate reward and recognition',
    category: 'organisation',
    summary: 'An imbalance between the effort workers put in and the recognition, reward or opportunities they get back.',
    examples: [
      'Extra effort routinely taken for granted.',
      'Little feedback, or mostly negative feedback.',
      'Skills and experience not recognised or used, with few chances to develop.',
    ],
    warningSigns: [
      'Workers say they feel undervalued.',
      'People doing the minimum rather than going the extra mile.',
      'Experienced staff leaving.',
    ],
    overrides: { vic: { name: 'Low recognition or reward' } },
    tags: ['effort-reward-imbalance', 'recognition'],
    reviewStatus: 'draft',
  },
  {
    id: 'organisational-justice',
    name: 'Poor organisational justice',
    category: 'organisation',
    summary: 'Unfairness in how the organisation treats people. That can be in how decisions are made, whether people get the information they need, or whether they\'re treated with dignity and respect.',
    examples: [
      'Rosters, overtime or opportunities shared out inconsistently.',
      'Policies applied to some people but not others.',
      'Decisions made without explanation, or important information withheld.',
      'Underperformance or harmful behaviour left unmanaged.',
    ],
    warningSigns: [
      'Talk of favouritism.',
      'Complaints about how decisions were made, not just what was decided.',
      'Low trust in management.',
    ],
    tags: ['justice', 'fairness'],
    reviewStatus: 'draft',
  },
  {
    id: 'traumatic-events',
    name: 'Traumatic events or material',
    category: 'environment',
    summary: 'Experiencing, witnessing or being exposed to traumatic events or material, including second-hand through accounts, images, recordings or case files.',
    examples: [
      'Emergency, health or community roles attending serious incidents.',
      'Reviewing distressing content, case files or footage.',
      'Witnessing a serious injury or death at work.',
    ],
    warningSigns: [
      'Changes in how someone works or interacts after an incident.',
      'Avoidance of certain tasks or locations.',
      'No debrief, rotation or support after exposure.',
    ],
    overrides: { vic: { name: 'Exposure to traumatic events or content' } },
    tags: ['trauma', 'vicarious-trauma'],
    reviewStatus: 'draft',
  },
  {
    id: 'remote-isolated-work',
    name: 'Remote or isolated work',
    category: 'environment',
    summary: 'Work where access to help, resources or other people is limited because of the location, the time of day, or the nature of the work.',
    examples: [
      'Working alone at night or in remote locations.',
      'Home visits, or working at another business\'s site.',
      'Working from home with little contact with the team.',
    ],
    warningSigns: [
      'Workers out of contact for long periods.',
      'No reliable way to call for help.',
      'Workers saying they feel cut off from the team.',
    ],
    tags: ['isolation', 'remote-work'],
    reviewStatus: 'draft',
  },
  {
    id: 'physical-environment',
    name: 'Poor physical environment',
    category: 'environment',
    summary: 'Unpleasant, poor quality or hazardous working conditions, such as noise, heat, poor air or lighting, or cramped spaces, including in work-provided accommodation.',
    examples: [
      'Constant noise in open-plan or industrial areas.',
      'Very hot or cold working conditions.',
      'Run-down facilities, or concerns about security and personal safety.',
    ],
    warningSigns: [
      'Repeated complaints about conditions.',
      'Workers avoiding certain areas.',
      'Fatigue or irritability that people link to the conditions.',
    ],
    overrides: { vic: { name: 'Poor environmental conditions' } },
    tags: ['environment', 'amenities'],
    reviewStatus: 'draft',
  },
  {
    id: 'violence-aggression',
    name: 'Violence and aggression',
    category: 'behaviour',
    summary: 'Being threatened, abused or assaulted at work, or being at risk of it, by anyone: customers, clients, patients, members of the public, or other workers.',
    examples: [
      'Verbal abuse from customers or members of the public.',
      'Clients in distress becoming physically aggressive.',
      'Threats made by phone, email or online.',
    ],
    warningSigns: [
      'Incident reports increasing.',
      'Workers avoiding certain clients, locations or shifts.',
      'Aggression treated as "part of the job" and not reported.',
    ],
    callouts: {
      hr: {
        text: 'Where the aggression comes from another worker, a conduct process may run alongside the hazard process. It doesn\'t replace managing the risk.',
      },
    },
    overrides: {
      vic: {
        name: 'Aggression or violence',
        definitions: [
          { term: 'Aggression or violence', text: 'Any incident in which a person is abused, threatened or assaulted in circumstances relating to their work.', source: 'vicTool' },
        ],
      },
    },
    tags: ['violence', 'aggression', 'customer-aggression'],
    reviewStatus: 'draft',
  },
  {
    id: 'bullying',
    name: 'Bullying',
    category: 'behaviour',
    summary: 'Repeated, unreasonable behaviour aimed at a worker or a group of workers that creates a risk to their health and safety. It can come from anyone at work: other workers, managers, clients, patients or visitors.',
    definitions: [
      { term: 'Bullying', text: 'Repeated unreasonable behaviour directed towards a worker or group of workers that creates a risk to health and safety.', source: 'model' },
    ],
    examples: [
      'Repeated belittling or humiliating comments.',
      'Deliberately leaving someone out of work activities or information.',
      'Setting tasks designed to undermine or set someone up to fail.',
    ],
    warningSigns: [
      'Several complaints involving the same team or person.',
      'A worker becoming isolated from the group.',
      'Requests to transfer out of a team.',
    ],
    callouts: {
      hr: {
        text: 'A bullying complaint may lead to a conduct investigation. That runs in parallel with the hazard process: the duty to identify and control the risk continues whatever the conduct outcome.',
      },
      hsr: {
        text: 'Patterns of bullying often point to wider drivers, such as workload, leadership capability or team culture. These are part of the hazard, not separate from it.',
      },
    },
    overrides: {
      vic: {
        definitions: [
          { term: 'Bullying', text: 'Repeated, unreasonable behaviour directed at a person or group that creates a risk to health and safety.', source: 'vicTool' },
        ],
      },
    },
    tags: ['bullying', 'conduct', 'culture'],
    reviewStatus: 'draft',
  },
  {
    id: 'harassment',
    name: 'Harassment including sexual harassment',
    category: 'behaviour',
    summary: 'Unwelcome behaviour that offends, humiliates or intimidates someone. This includes sexual harassment, and harassment because of personal characteristics such as age, disability, race, religion, sex, sexual orientation or gender identity. Harmful behaviour that happens only once, and so isn\'t bullying, can still be a hazard.',
    definitions: [
      { term: 'Sexual harassment', text: 'any unwelcome sexual advance, unwelcome request for sexual favours or other unwelcome conduct of a sexual nature, in circumstances where a reasonable person, having regard to all the circumstances, would anticipate the possibility that the person harassed would be offended, humiliated or intimidated.', source: 'model' },
    ],
    examples: [
      'Unwelcome comments about someone\'s appearance or private life.',
      'Sexual jokes, images or messages.',
      'Comments or treatment based on race, gender, age, disability or other personal characteristics.',
    ],
    warningSigns: [
      'Informal reports or talk that never becomes a formal complaint.',
      'Workers avoiding certain people or areas.',
      'Reluctance to attend work events.',
    ],
    callouts: {
      hr: {
        text: 'Sexual harassment can also engage anti-discrimination law, which runs alongside {lawShort} duties rather than replacing them.',
        verify: 'TODO-VERIFY: positive duty to eliminate sexual harassment and how it relates to {lawShort} duties — source: Sex Discrimination Act 1984 (Cth); Australian Human Rights Commission guidance',
      },
    },
    overrides: {
      vic: {
        name: 'Sexual harassment',
        summary: 'Unwelcome conduct of a sexual nature from anyone at work: other workers, managers, clients or customers. It includes unwelcome advances, repeated requests to go out, sexual comments or jokes, and unwelcome physical contact.',
        definitions: [
          { term: 'Sexual harassment', text: 'A person sexually harasses another person if he or she: makes an unwelcome sexual advance, or an unwelcome request for sexual favours, to the other person, or engages in any other unwelcome conduct of a sexual nature in relation to the other person in circumstances in which a reasonable person, having regard to all the circumstances, would have anticipated that the other person would be offended, humiliated or intimidated.', source: 'vicTool' },
        ],
        examples: [
          'Unwelcome sexual advances, requests for sexual favours, or repeated requests to go out.',
          'Sexual comments, jokes, images or messages.',
          'Unwelcome physical contact.',
        ],
      },
    },
    tags: ['harassment', 'sexual-harassment', 'conduct'],
    reviewStatus: 'draft',
  },
  {
    id: 'gendered-violence',
    name: 'Gendered violence',
    appliesTo: ['vic'],
    coveredBy: { model: 'harassment' },
    category: 'behaviour',
    summary: 'Behaviour aimed at, or affecting, someone because of their sex, gender, sexual orientation or gender identity, or because they don\'t fit gender stereotypes. It ranges from sexist jokes and comments to exclusion, threats and assault, and includes sexual harassment.',
    definitions: [
      { term: 'Gendered violence', text: 'Any behaviour that is directed at, or affecting, a person because of their sex, sexual orientation, gender, gender identity or because they do not follow socially prescribed gender roles and stereotypes.', source: 'vicTool' },
    ],
    examples: [
      'Sexist, homophobic or transphobic comments or jokes.',
      'Someone excluded or targeted for not fitting gender expectations.',
      'Offensive language or images about gender or sexuality at work.',
    ],
    warningSigns: [
      'Behaviour brushed off as "just banter".',
      'Complaints from people in a minority gender within a team.',
      'Workers avoiding certain people, areas or events.',
    ],
    callouts: {
      hr: {
        text: 'Gendered violence can also engage anti-discrimination law, which runs alongside {lawShort} duties rather than replacing them.',
        verify: 'TODO-VERIFY: how anti-discrimination duties (including the positive duty on sexual harassment) relate to {lawShort} duties — source: Sex Discrimination Act 1984 (Cth); Equal Opportunity Act 2010 (Vic)',
      },
    },
    tags: ['gendered-violence', 'harassment', 'sexual-harassment', 'conduct'],
    reviewStatus: 'draft',
  },
  {
    id: 'conflict-relationships',
    name: 'Conflict or poor workplace relationships and interactions',
    category: 'behaviour',
    summary: 'Poor relationships or interactions between workers, managers or others, such as frequent disagreements, incivility, or conflict that isn\'t resolved. Low-level incivility can escalate into more harmful behaviour if nobody addresses it.',
    examples: [
      'Ongoing tension between team members that nobody addresses.',
      'Rude, dismissive or disrespectful communication, including from managers or clients.',
      'Conflict between teams over resources or priorities.',
    ],
    warningSigns: [
      'Communication breaking down.',
      'Complaints about tone or behaviour.',
      'Teams working around each other instead of together.',
    ],
    overrides: { vic: { name: 'Poor workplace relationships' } },
    tags: ['conflict', 'relationships', 'incivility'],
    reviewStatus: 'draft',
  },
];

// Hazard library content.
// DRAFT: summaries, examples, warning signs and callouts were drafted for the owner's review
// (reviewStatus: 'draft'). They are plain-English explanations, not legal definitions.
//
// Each hazard:
//   id            stable id used in URLs (#/hazards/<id>) and by other data files. Don't change once published.
//   name          name as used in the Safe Work Australia Code of Practice
//   names         optional per-jurisdiction override, e.g. { vic: 'Name used in the Vic Compliance Code' }
//   category      key from hazardCategories (a grouping to help browsing, not an official classification)
//   summary       one or two plain-English sentences
//   examples      workplace examples
//   warningSigns  early warning signs at team or workplace level
//   callouts      optional role notes: { hr: { text, verify }, hsr: { text, verify } }
//   definitionVerify  set where the hazard has a formal definition that must be checked, not paraphrased
//   tags          topic tags, used later to link education content (Phase 8) and evidence (Phase 4)
//   reviewStatus  'draft' until the owner has checked it, then 'reviewed'

export const hazardLibrary = {
  title: 'Hazard library',
  intro: [
    'Psychosocial hazards are aspects of the work, the way it is designed and managed, the work environment and workplace interactions that can cause psychological or physical harm.',
    'The {lawShort} framework lists 14 common psychosocial hazards. Use this library to recognise them, see what they can look like in a workplace, and spot early warning signs.',
  ],
  introVerify: 'TODO-VERIFY: definition of psychosocial hazard, and whether the Victorian Compliance Code uses the same list and names as the Safe Work Australia Code — source: Model Code of Practice: Managing psychosocial hazards at work; Compliance Code: Psychological health (Vic)',
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
    summary: 'Sustained high, or very low, physical, mental or emotional effort needed to do the job. Covers workload, time pressure, long or irregular hours, emotionally demanding work, and work that is monotonous or understimulating.',
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
    tags: ['workload', 'working-hours', 'emotional-demands', 'job-demand-control'],
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
      'New starters left to work things out without training.',
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
    summary: 'Uncertainty about, or frequent changes to, tasks, responsibilities and expectations, or conflicting demands from different people.',
    examples: [
      'Two managers giving conflicting priorities.',
      'Duties that change often without explanation.',
      'No current position description or agreed expectations.',
    ],
    warningSigns: [
      'Confusion about who is responsible for what.',
      'Work duplicated, or falling through the gaps.',
      'Disagreements about what good performance looks like.',
    ],
    tags: ['role-clarity', 'expectations'],
    reviewStatus: 'draft',
  },
  {
    id: 'change-management',
    name: 'Poor organisational change management',
    category: 'organisation',
    summary: 'Change that is poorly planned, communicated, supported or consulted on, such as restructures, new technology, new systems or relocations.',
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
      'Little feedback or acknowledgement of good work.',
      'Few chances to develop skills or progress.',
    ],
    warningSigns: [
      'Workers say they feel undervalued.',
      'People doing the minimum rather than going the extra mile.',
      'Experienced staff leaving.',
    ],
    tags: ['effort-reward-imbalance', 'recognition'],
    reviewStatus: 'draft',
  },
  {
    id: 'organisational-justice',
    name: 'Poor organisational justice',
    category: 'organisation',
    summary: 'Decisions and processes that are unfair, inconsistent or biased, or where decisions aren\'t explained.',
    examples: [
      'Rosters, overtime or opportunities shared out inconsistently.',
      'Policies applied to some people but not others.',
      'Decisions made without explanation or a chance to be heard.',
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
      'Witnessing a serious injury at work.',
    ],
    warningSigns: [
      'Changes in how someone works or interacts after an incident.',
      'Avoidance of certain tasks or locations.',
      'No debrief, rotation or support after exposure.',
    ],
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
      'Working from home with little contact with the team.',
      'Long travel, or fly-in fly-out rosters.',
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
    summary: 'Unpleasant, poor quality or hazardous working conditions, such as noise, heat, poor lighting or cramped spaces, that add to strain.',
    examples: [
      'Constant noise in open-plan or industrial areas.',
      'Very hot or cold working conditions.',
      'Run-down facilities or inadequate amenities.',
    ],
    warningSigns: [
      'Repeated complaints about conditions.',
      'Workers avoiding certain areas.',
      'Fatigue or irritability that people link to the conditions.',
    ],
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
      'Incidents talked about but not formally reported.',
    ],
    callouts: {
      hr: {
        text: 'Where the aggression comes from another worker, a conduct process may run alongside the hazard process. It doesn\'t replace managing the risk.',
      },
    },
    tags: ['violence', 'aggression', 'customer-aggression'],
    reviewStatus: 'draft',
  },
  {
    id: 'bullying',
    name: 'Bullying',
    category: 'behaviour',
    summary: 'Repeated behaviour directed at a worker or group of workers that creates a risk to health and safety.',
    definitionVerify: 'TODO-VERIFY: definition of workplace bullying — source: Model Code of Practice: Managing psychosocial hazards at work / Compliance Code: Psychological health (Vic)',
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
    tags: ['bullying', 'conduct', 'culture'],
    reviewStatus: 'draft',
  },
  {
    id: 'harassment',
    name: 'Harassment including sexual harassment',
    category: 'behaviour',
    summary: 'Unwelcome behaviour that offends, humiliates or intimidates a person, including sexual harassment and harassment based on personal characteristics such as race, sex, age or disability.',
    definitionVerify: 'TODO-VERIFY: definitions of harassment and sexual harassment — source: Model Code of Practice: Managing psychosocial hazards at work / Compliance Code: Psychological health (Vic) / Sex Discrimination Act 1984 (Cth)',
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
    tags: ['harassment', 'sexual-harassment', 'conduct'],
    reviewStatus: 'draft',
  },
  {
    id: 'conflict-relationships',
    name: 'Conflict or poor workplace relationships and interactions',
    category: 'behaviour',
    summary: 'Poor relationships or interactions between workers, managers or others, such as frequent disagreements, incivility, or conflict that isn\'t resolved.',
    examples: [
      'Ongoing tension between team members that nobody addresses.',
      'Rude, dismissive or hostile communication.',
      'Conflict between teams over resources or priorities.',
    ],
    warningSigns: [
      'Communication breaking down.',
      'Complaints about tone or behaviour.',
      'Teams working around each other instead of together.',
    ],
    tags: ['conflict', 'relationships', 'incivility'],
    reviewStatus: 'draft',
  },
];

// Every hazard is checked against the Code of Practice before reviewStatus becomes 'reviewed'.
export const hazardSourceVerify = 'TODO-VERIFY: hazard name and description match the source — source: Model Code of Practice: Managing psychosocial hazards at work (Safe Work Australia) / Compliance Code: Psychological health (Vic)';

// The Resources page (Phase 6): research, frameworks, guidance and limitations behind the guide.
// This file mirrors EVIDENCE_REGISTER.md. Each part names the register section it comes from.
// When the register changes, change this file in the same commit so the two stay in step.
//
// Rules for figures: only figures marked VERIFIED in the register (checked against the original
// paper, table or page) appear here, always with their outcome and study design. Plain-English
// summaries are our own words.

export const resourcesPage = {
  title: 'Resources',
  intro: 'The research and guidance behind this guide: how the indicative rating works, what research says about each hazard, the sources, and the limits of what any of it can tell you.',

  // Register: "Guide rating rules (Phase 5)"
  rating: {
    title: 'How the indicative rating works',
    paragraphs: [
      'Each hazard is rated on its own from three answers: how often and for how long, how serious the harm could be, and how well current controls are working. The overall rating is the highest single hazard rating, never an average.',
      'The rules are judgement, kept simple and shown in full. They follow what Safe Work Australia\'s Code of Practice asks you to consider for each hazard (section 4.2) and record in its risk register (Appendix C). Research links these hazards with poorer mental health, but none of the studies examined validates numerical weights, discounts or cut-offs for rating a workplace, so the guide doesn\'t use any.',
    ],
    links: [
      { href: '#/risk', text: 'See the rating and its "How this score works" panel' },
      { external: 'docs/scoring-method.md', text: 'Full method' },
    ],
  },

  // Register: "Guide hazards: what the research shows"
  hazards: {
    title: 'What research says about each hazard',
    paragraphs: [
      'Figures are pooled estimates from observational studies unless marked otherwise. A figure above 1 means the outcome was more common among exposed workers than in the comparison group. Different outcomes and study designs aren\'t comparable, so these figures don\'t rank hazards against each other, and they don\'t give anyone\'s chance of being harmed.',
      'Where no comparable pooled estimate was found among the sources examined, that\'s a gap in the research, not a sign the hazard is minor. Every hazard is rated the same way in this guide.',
    ],
    statusLabels: {
      pooled: 'Pooled studies',
      single: 'Single study',
      correlational: 'Mostly cross-sectional',
      narrative: 'Prospective studies, not pooled',
      none: 'No pooled estimate found',
    },
    items: {
      'job-demands': {
        status: 'pooled',
        text: 'High job demands were linked with later stress-related disorders: OR 1.56 (1.41–1.72). For depressive episodes, estimates for workload and demands were smaller and not clearly different from no effect. Long working hours (generally 55+ a week) showed a small association with depressive symptoms overall, but no clear association in the Australian studies pooled.',
        sources: ['vandermolen2020', 'mikkelsen2021', 'virtanen2018'],
      },
      'low-job-demands': {
        status: 'none',
        text: 'No comparable pooled estimate was found for sustained low demands or underload in the sources examined.',
        sources: [],
      },
      'low-job-control': {
        status: 'pooled',
        text: 'Findings are mixed and depend on how control is measured. Low decision authority was linked with stress-related disorders, OR 1.34 (1.20–1.49), while low decision latitude showed no clear association in the same review, 1.07 (0.92–1.25). An older review found low decision latitude predicted common mental disorders, OR 1.23 (1.08–1.39).',
        sources: ['vandermolen2020', 'stansfeld2006'],
      },
      'poor-support': {
        status: 'pooled',
        text: 'Low support was linked with stress-related disorders: from co-workers OR 1.29 (1.17–1.43), from supervisors 1.27 (1.16–1.38).',
        sources: ['vandermolen2020', 'stansfeld2006'],
      },
      'role-clarity': {
        status: 'correlational',
        text: 'Role ambiguity and role conflict are correlated with depression (r about 0.28 and 0.32). Correlations show the two go together; they aren\'t a measure of how much one causes the other.',
        sources: ['schmidt2014'],
      },
      'change-management': {
        status: 'single',
        text: 'In one Norwegian cohort, downsizing was linked with later clinically relevant distress, OR 1.51 (1.12–2.03). Job insecurity, a related exposure, was linked with later depressive symptoms, 1.61 (1.29–2.00). Change itself isn\'t the same as poorly managed change.',
        sources: ['flovik2019', 'ronnblad2019'],
      },
      'reward-recognition': {
        status: 'pooled',
        text: 'Effort-reward imbalance (high effort, low reward) was linked with later stress-related disorders, OR 1.91 (1.70–2.15), and depressive disorders, RR 1.49 (1.23–1.80).',
        sources: ['vandermolen2020', 'rugulies2017'],
      },
      'organisational-justice': {
        status: 'pooled',
        text: 'Low procedural justice (unfair decision-making) was linked with stress-related disorders, OR 1.74 (1.62–1.86), and low relational justice (not being treated with respect), OR 1.55 (1.44–1.67).',
        sources: ['vandermolen2020'],
      },
      'traumatic-events': {
        status: 'none',
        text: 'No comparable pooled estimate of the effect of exposure to traumatic events or material was found in the sources examined. High emotional demands, a related exposure, were linked with stress-related disorders, OR 1.58 (1.35–1.84).',
        sources: ['vandermolen2020'],
      },
      'remote-isolated-work': {
        status: 'none',
        text: 'No comparable pooled estimate was found in the sources examined.',
        sources: [],
      },
      'physical-environment': {
        status: 'none',
        text: 'No comparable pooled estimate for work environment conditions (noise, heat, crowding and so on) and mental health was found in the sources examined.',
        sources: [],
      },
      'violence-aggression': {
        status: 'pooled',
        text: 'Physical violence or threats of it at work were linked with depressive disorder, RR 1.42 (1.31–1.54). The four studies behind this figure measured depression in different ways.',
        sources: ['rudkjoebing2020'],
      },
      bullying: {
        status: 'pooled',
        text: 'Bullying was linked with later depressive symptoms, OR 2.82 (2.21–3.59), and depressive episodes, RR 2.58 (1.13–5.93). Both estimates are imprecise and the underlying studies vary in quality.',
        sources: ['theorell2015', 'mikkelsen2021'],
      },
      harassment: {
        status: 'correlational',
        text: 'Reviews find different forms of workplace harassment, including sexual harassment, have similar negative effects on women\'s wellbeing at work. Most studies are cross-sectional.',
        sources: ['sojo2016', 'gerhardt2021'],
      },
      'gendered-violence': {
        status: 'narrative',
        text: 'A 2024 review of 29 prospective studies, mostly about sexual violence and harassment at work, consistently found links with poorer mental health. The studies weren\'t pooled into one figure, and only two looked at non-sexual forms of gendered violence.',
        sources: ['blindow2024'],
      },
      'conflict-relationships': {
        status: 'correlational',
        text: 'Interpersonal conflict and incivility at work are correlated with poorer wellbeing, at about the same strength as bullying in the same review. Most of these studies are cross-sectional.',
        sources: ['gerhardt2021'],
      },
    },
  },

  combining: {
    title: 'When hazards combine',
    text: 'In a Danish cohort of 2,158 workers, the odds of probable depression rose with the number of four work factors they were exposed to (quantitative demands, emotional demands, role conflict and bullying): OR 2.98 for one, 3.14 for two, 6.44 for three and 9.62 for all four, with wide uncertainty. This supports looking at hazards together. It doesn\'t give a multiplier.',
    sources: ['lunen2023'],
  },

  // Register: "Theoretical frameworks"
  frameworks: {
    title: 'Frameworks, explained simply',
    items: [
      { name: 'Job Demand-Control', text: 'Strain is most likely when a job asks a lot and gives people little say over how they do it.', source: 'karasek1979' },
      { name: 'Demand-Control-Support', text: 'Adds support from co-workers and supervisors: high demands with low control and low support is the riskiest mix.', source: 'johnsonhall1988' },
      { name: 'Effort-Reward Imbalance', text: 'Strain builds when the effort a job takes isn\'t matched by what people get back: pay, recognition, security or prospects.', source: 'siegrist1996' },
    ],
    reviewNote: 'Plain-English summaries, written for this guide. Draft for review.',
  },

  // Register: "Regulatory and standards guidance". Jurisdiction-specific links come from the
  // `guidance` list in js/data/jurisdictions.js, so this page and Law and regulators stay the same.
  guidance: {
    title: 'Regulator guidance',
    intro: 'Guidance for {lawShort} in your jurisdiction. Change jurisdiction at the top of the page.',
    always: [
      { title: 'Safe Work Australia: Model Code of Practice, Managing psychosocial hazards at work (2022)', url: 'https://www.safeworkaustralia.gov.au/doc/model-code-practice-managing-psychosocial-hazards-work', note: 'The method this guide\'s rating follows (sections 4.2 and Appendix C).' },
      { title: 'World Health Organization: Guidelines on mental health at work (2022)', url: 'https://www.who.int/publications/i/item/9789240053052', note: 'International recommendations on organisational interventions, manager training and individual support.' },
    ],
    lawLink: 'All legislation, regulators and guidance for your jurisdiction',
  },

  // Register: "Known limitations to state publicly"
  limitations: {
    title: 'What the evidence can\'t tell you',
    items: [
      'Almost all of it comes from observational studies. The authors of a 2021 systematic review concluded they can\'t say with confidence that any of these exposures causes depression, because of possible bias and confounding. That doesn\'t weaken the case for prevention.',
      'Most studies measure exposure by asking workers, which can make associations look stronger.',
      'Pooled figures describe groups of people, not the risk to any one person.',
      'Studies use different outcomes (symptoms, diagnosed disorders, distress, wellbeing) and designs, so their figures can\'t be compared to rank hazards.',
      'Several reviews reuse the same cohorts, so agreement between them isn\'t always independent confirmation.',
      'Some hazards have no comparable pooled estimate. That\'s a gap in the research, not evidence of low risk.',
      'This guide\'s rating rules are judgement. They haven\'t been tested against real workplace assessments.',
      'Sources were chosen from those checked during this project, not from a full systematic search.',
    ],
  },

  // Register: "Research sources". id is used by the hazard entries above.
  references: {
    title: 'Research sources',
    intro: 'Each source was checked against the original paper, table or abstract. The summary says what it found in plain English.',
    items: [
      { id: 'bailey2015', cite: 'Bailey TS, Dollard MF, Richards PAM (2015). A national standard for psychosocial safety climate (PSC): PSC 41 as the benchmark for low risk of job strain and depressive symptoms. Journal of Occupational Health Psychology 20(1):15–26.', doi: '10.1037/a0038166', summary: 'Set Australian benchmarks for the Psychosocial Safety Climate survey: an organisation averaging 37 or below is high risk, 41 or above low risk. These are for organisations using that survey, not cut-offs for individuals or other tools.' },
      { id: 'blindow2024', cite: 'Blindow KJ, Cedstrand E, Elling DL, Hagland M, et al. (2024). Gender-based violence and harassment at work and health and occupational outcomes: a systematic review of prospective studies. BMC Public Health 24:1788.', doi: '10.1186/s12889-024-19304-0', summary: '29 prospective studies, mostly of sexual violence and harassment at work. These were consistently linked with poorer mental health. Results were summarised in words rather than pooled into one figure.' },
      { id: 'flovik2019', cite: 'Fløvik L, Knardahl S, Christensen JO (2019). Organizational change and employee mental health: a prospective multilevel study. Scandinavian Journal of Work, Environment & Health 45(2):134–145.', doi: '10.5271/sjweh.3777', summary: 'One Norwegian cohort. Downsizing, layoffs and repeated change were linked with later clinically relevant distress.' },
      { id: 'gerhardt2021', cite: 'Gerhardt C, Semmer NK, Sauter S, Walker A, et al. (2021). How are social stressors at work related to well-being and health? A systematic review and meta-analysis. BMC Public Health 21:890.', doi: '10.1186/s12889-021-10894-7', summary: '557 studies. Bullying, conflict, incivility and sexual mistreatment at work were all correlated with poorer wellbeing. Most studies were cross-sectional, so they show association, not cause.' },
      { id: 'johnsonhall1988', cite: 'Johnson JV, Hall EM (1988). Job strain, work place social support, and cardiovascular disease. American Journal of Public Health 78(10):1336–1342.', doi: '10.2105/ajph.78.10.1336', summary: 'Added social support to the demand-control model.' },
      { id: 'karasek1979', cite: 'Karasek RA (1979). Job demands, job decision latitude, and mental strain: implications for job redesign. Administrative Science Quarterly 24(2):285–308.', doi: '10.2307/2392498', summary: 'The original demand-control model of job strain.' },
      { id: 'lunen2023', cite: 'Lunen JC, Rugulies R, Sørensen JK, Andersen LL, Clausen T (2023). Exploring exposure to multiple psychosocial work factors: prospective associations with depression and sickness absence. European Journal of Public Health 33(5):821–827.', doi: '10.1093/eurpub/ckad118', summary: 'One Danish cohort. The more of four adverse work factors people were exposed to, the higher their odds of probable depression six months later.' },
      { id: 'madsen2017', cite: 'Madsen IEH, et al. (2017). Job strain as a risk factor for clinical depression: systematic review and meta-analysis with additional individual participant data. Psychological Medicine 47(8):1342–1356.', doi: '10.1017/S003329171600355X', summary: 'Job strain was linked with later hospital-treated depression. Accounting for earlier depressive symptoms weakened the link considerably, which shows how much the analysis choices matter.' },
      { id: 'mikkelsen2021', cite: 'Mikkelsen S, Coggon D, Andersen JH, et al. (2021). Are depressive disorders caused by psychosocial stressors at work? A systematic review with metaanalysis. European Journal of Epidemiology 36(5):479–496.', doi: '10.1007/s10654-021-00725-9', summary: '54 longitudinal studies of 19 work exposures and depressive episodes. Most exposures were associated with more depression, but the authors concluded they couldn\'t be confident any of them causes it, because of bias and confounding.' },
      { id: 'niedhammer2021', cite: 'Niedhammer I, Bertrais S, Witt K (2021). Psychosocial work exposures and health outcomes: a meta-review of 72 literature reviews with meta-analysis. Scandinavian Journal of Work, Environment & Health 47(7):489–508.', doi: '10.5271/sjweh.3968', summary: 'A review of 72 reviews. Links with mental disorders were generally stronger than with heart disease; the best-quality reviews support job strain and long hours as risks for depression.' },
      { id: 'ronnblad2019', cite: 'Rönnblad T, Grönholm E, Jonsson J, et al. (2019). Precarious employment and mental health: a systematic review and meta-analysis of longitudinal studies. Scandinavian Journal of Work, Environment & Health 45(5):429–443.', doi: '10.5271/sjweh.3797', summary: 'Job insecurity was linked with later depressive symptoms.' },
      { id: 'rudkjoebing2020', cite: 'Rudkjoebing LA, et al. (2020). Work-related exposure to violence or threats and risk of mental disorders and symptoms: a systematic review and meta-analysis. Scandinavian Journal of Work, Environment & Health 46(4):339–349.', doi: '10.5271/sjweh.3877', summary: 'Physical violence or threats at work were linked with later depressive disorder and symptoms. The authors caution that differences between studies limit how far the pooled figures can be read.' },
      { id: 'rugulies2017', cite: 'Rugulies R, Aust B, Madsen IEH (2017). Effort–reward imbalance at work and risk of depressive disorders. Scandinavian Journal of Work, Environment & Health 43(4):294–306.', doi: '10.5271/sjweh.3632', summary: '8 cohort studies, about 85,000 people. Effort-reward imbalance was linked with later depressive disorders.' },
      { id: 'schmidt2014', cite: 'Schmidt S, Roesler U, Kusserow T, Rau R (2014). Uncertainty in the workplace: examining role ambiguity and role conflict, and their link to depression — a meta-analysis. European Journal of Work and Organizational Psychology 23(1):91–106.', doi: '10.1080/1359432X.2012.711523', summary: 'Role ambiguity and role conflict were both correlated with depression.' },
      { id: 'siegrist1996', cite: 'Siegrist J (1996). Adverse health effects of high-effort/low-reward conditions. Journal of Occupational Health Psychology 1(1):27–41.', doi: '10.1037/1076-8998.1.1.27', summary: 'The original effort-reward imbalance model.' },
      { id: 'sojo2016', cite: 'Sojo VE, Wood RE, Genat AE (2016). Harmful workplace experiences and women\'s occupational well-being: a meta-analysis. Psychology of Women Quarterly 40(1):10–40.', doi: '10.1177/0361684315599346', summary: 'Different forms of harmful workplace experiences, including sexual harassment, had similar negative effects on women\'s wellbeing at work.' },
      { id: 'stansfeld2006', cite: 'Stansfeld S, Candy B (2006). Psychosocial work environment and mental health: a meta-analytic review. Scandinavian Journal of Work, Environment & Health 32(6):443–462.', doi: '10.5271/sjweh.1050', summary: '11 longitudinal studies. Job strain, low decision latitude, low support, high demands, effort-reward imbalance and job insecurity all predicted common mental disorders.' },
      { id: 'theorell2015', cite: 'Theorell T, et al. (2015). A systematic review including meta-analysis of work environment and depressive symptoms. BMC Public Health 15:738.', doi: '10.1186/s12889-015-1954-4', summary: 'Bullying, job strain and low decision latitude were among the work exposures linked with later depressive symptoms.' },
      { id: 'vandermolen2020', cite: 'van der Molen HF, Nieuwenhuijsen K, Frings-Dresen MHW, de Groene G (2020). Work-related psychosocial risk factors for stress-related mental disorders: an updated systematic review and meta-analysis. BMJ Open 10(7):e034849.', doi: '10.1136/bmjopen-2019-034849', summary: 'Prospective studies of stress-related mental disorders. Moderate-quality evidence linked effort-reward imbalance, low justice, high demands, emotional demands, low decision authority and low support with later disorders. Some outcomes were defined by questionnaire scores.' },
      { id: 'virtanen2018', cite: 'Virtanen M, Jokela M, Madsen IEH, et al. (2018). Long working hours and depressive symptoms: systematic review and meta-analysis of published studies and unpublished individual participant data. Scandinavian Journal of Work, Environment & Health 44(3):239–250.', doi: '10.5271/sjweh.3712', summary: 'Long hours had a small overall link with depressive symptoms. No clear link was found in the Australian studies pooled.' },
    ],
  },

  // How the evidence was checked. Points to the review in the public repository.
  checking: {
    title: 'How the evidence was checked',
    text: 'An AI research tool helped find sources. Its report had citation errors and a misattributed quote, so it was audited twice by other AI systems, the audits were compared, and every figure used here was checked against the original paper. The full review, including what went wrong and what worked, is published with the guide\'s source code.',
    link: { external: 'research/assessing-psychosocial-hazards-review.md', text: 'Read the review: Assessing psychosocial hazards' },
  },
};

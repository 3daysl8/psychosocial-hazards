# Evidence Register

This file records the research and guidance behind every scored factor, weight and claim in the Psychological Risk Model and the Psychosocial Hazard Investigation Guide. Anyone reusing these tools should be able to trace a number on screen back to a source here.

Status key: `VERIFIED` (checked against the original source, page or table noted), `TO-CHECK` (source identified, figures not yet extracted or confirmed), `GAP` (factor used in a tool with no supporting source yet).

Phase 4 audit completed 2026-10-23. Full report: `docs/phases/phase-4.md`. The weights below are **proposals for the owner's review**; nothing in either tool has been changed.

**2026-10-24: the Guide will not use weights.** The owner chose per-hazard rating (decision in `docs/phases/phase-4.md`). The weight tables below stay as the record of the Risk Model audit and as research context; they don't feed the Guide's score. Figures from the Gemini report enter this register only if marked VERIFIED in `research/notes/gemini-report-audit.md` (as corrected) and re-cited from the original.

## How weights are derived

Pooled effect sizes (odds ratios or relative risks for a mental health outcome) are converted to log scale, `ln(OR)`, then scaled so the largest effect in the set equals 1.0. Record the raw estimate, its 95% confidence interval, the outcome, and the quality rating. Where a tool uses a factor with no pooled estimate, mark it `GAP` and record the reasoning for the weight chosen, so it's visible as a judgement call rather than presented as evidence.

The calculation is reproducible: `python research/notes/derive_weights.py` prints the tables in this file.

**Two candidate weight sets** (see "Derived weights" below), because estimates differ a lot between reviews:

- **Option A (one review, one outcome):** Mikkelsen et al 2021, Table 2. Every exposure measured against depressive episodes with the same methods, the most recent of the sources, and deliberately cautious about bias. Covers 18 exposures including justice and emotional demands.
- **Option B (best available per exposure):** Stansfeld & Candy 2006 (common mental disorders) and the reviews summarised in Niedhammer et al 2021 (depression). Larger estimates, but mixes outcomes and review quality.

Example of the spread: job strain is OR 1.14 in Option A and OR 1.82 in Option B. Weights are sensitive to which source is used.

The tools have face validity only. They are educational and indicative, not validated predictive instruments.

## Risk Model audit (reference/risk-model/index.html, live version of 2026-10-23)

### How the Risk Model actually scores

- 18 factors in 3 pillars of 6. Each factor is toggled up or down 0 to 2 steps; risk factors add, protective factors subtract. **All factors count equally**: no factor has its own weight.
- Pillar weights: Organisation 0.30, Job role 0.35, Individual 0.35. Cascade: Job = 0.85 Job + 0.15 Organisation; Individual = 0.80 Individual + 0.15 Job + 0.05 Organisation.
- After the cascade, share of the overall score: **Organisation 37.8%, Job role 34.2%, Individual 28.0%**. Each organisation factor moves the score 6.3% per step range, each job factor 5.7%, each individual factor 4.7%.
- Bands on a 0 to 10 scale: Low ≤3, Moderate ≤5, High ≤7, Very high above 7.
- Pillar weights, cascade weights and band thresholds: **GAP**. No source in the code or this register.
- The Risk Model's on-screen note says weights "are derived from meta-analytic effect sizes (Niedhammer, Bertrais & Witt, 2021; Stansfeld & Candy, 2006)". **No effect sizes are used in the code.** Flagged for the owner.

### Factor table

Option A and B weights are the evidence weights each factor would get if mapped to the nearest measured exposure. "Inverse" means the factor is the protective opposite of a measured risk exposure.

| Factor in tool | Pillar | Weight used | Nearest measured exposure | Option A: estimate (95% CI), weight | Option B: estimate (95% CI), weight | Status |
|---|---|---|---|---|---|---|
| Genuine leadership commitment to psychological safety (protective) | Org | Equal (6.3%) | None in sources | none | none | GAP |
| High workload demands with no mechanism for relief | Org | Equal (6.3%) | Work load / psychological demands | Work load 1.24 (0.95–1.61), 0.23, CI includes 1 | Demands 1.39 (1.15–1.69) CMD, 0.32 | VERIFIED (mapping is judgement) |
| Clear, fair and consistent workplace policies (protective) | Org | Equal (6.3%) | Procedural injustice (inverse) | 1.23 (1.02–1.47), 0.22 | none for depression or CMD | VERIFIED (A only) |
| Toxic or blame-based organisational culture | Org | Equal (6.3%) | No direct measure; nearest is relational injustice | 1.60 (1.14–2.24), 0.50, proxy only | none | GAP (proxy) |
| Early intervention and proactive support systems (protective) | Org | Equal (6.3%) | None in sources | none | none | GAP |
| Poorly managed organisational change or restructure | Org | Equal (6.3%) | Job insecurity (proxy) | 1.35 (1.21–1.50), 0.32 | 1.61 (1.29–2.00) depressive symptoms, 0.46 | VERIFIED (proxy) |
| High job demands with low decision-making control | Job | Equal (5.7%) | Job strain | 1.14 (1.05–1.25), 0.14 | 1.82 (1.06–3.10) CMD, 0.58 | VERIFIED; sources disagree |
| Role clarity and well-defined responsibilities (protective) | Job | Equal (5.7%) | Role ambiguity / conflict | none | none | GAP (candidate source TO-CHECK) |
| Workplace bullying, harassment or conflict exposure | Job | Equal (5.7%) | Bullying | 2.58 (1.13–5.93), 1.00 | 2.82 (2.21–3.59) depressive symptoms, 1.00 | VERIFIED for bullying only; harassment and conflict GAP |
| Meaningful work with recognition and regular feedback (protective) | Job | Equal (5.7%) | Effort-reward imbalance (inverse) | 1.53 (1.21–1.92), 0.45 | 1.84 (1.45–2.35) CMD, 0.59 | VERIFIED (mapping is judgement) |
| Emotional labour or repeated trauma exposure | Job | Equal (5.7%) | Emotional demands | 1.21 (1.08–1.36), 0.20 | none for depression or CMD | VERIFIED for emotional demands (A); trauma GAP |
| Supportive team relationships and peer connection (protective) | Job | Equal (5.7%) | Low support from colleagues (inverse) | 1.37 (1.07–1.74), 0.33 | Low social support 1.32 (1.21–1.44) CMD, 0.27 | VERIFIED (mapping is judgement) |
| Strong psychological resilience and coping capacity (protective) | Individual | Equal (4.7%) | Not a work exposure | none | none | GAP |
| Chronic sleep deprivation or fatigue | Individual | Equal (4.7%) | Not a work exposure (sleep is an outcome in the sources) | none | none | GAP |
| Pre-existing mental health condition or vulnerability | Individual | Equal (4.7%) | Not a work exposure (the sources treat it as a confounder to adjust for) | none | none | GAP |
| High self-efficacy and sense of agency at work (protective) | Individual | Equal (4.7%) | Not a work exposure | none | none | GAP |
| Social isolation or lack of support outside work | Individual | Equal (4.7%) | Not a work exposure | none | none | GAP |
| Meaningful life outside work and recovery routines (protective) | Individual | Equal (4.7%) | Not a work exposure | none | none | GAP |

CMD = common mental disorders. Option A outcome is always depressive episodes.

### Weights that look noticeably off (proposals, not changes)

1. **Equal weights for all factors.** The evidence ranges from bullying (weight 1.00) to job strain (0.14 in Option A). Propose using the evidence weights above for the 9 factors that have one.
2. **The Individual pillar (28% of the score) has no evidence and conflicts with the duty model.** None of its 6 factors is a work exposure; the reviews adjust for them rather than measure them as causes. Propose removing them from the score (show them as "support considerations" instead), matching the new guide's rule that individual factors never move the rating.
3. **Protective factors are scored as exact opposites of risk factors.** The sources measure the risk end only (for example low support, not high support). Propose scoring protective factors as "risk factor absent" (0) rather than subtracting.
4. **Bundled factors.** "High demands with low control" is one measured exposure (job strain), which is fine. "Bullying, harassment or conflict" bundles three different hazards; only bullying has an estimate. Propose splitting.
5. **Pillar, cascade and band values are unsourced.** Keep them only if labelled as design judgements, or drop the pillar structure.
6. **The on-screen claim about meta-analytic weights** should be changed to match the code, or the code changed to match the claim.

## Guide hazards mapped to evidence (for Phase 5)

How each hazard in the guide's library would be weighted. Hazards marked GAP need a judgement weight, clearly labelled, or must be left out of the score. Owner to decide in Phase 5.

| Guide hazard (Model WHS / Victoria name) | Measured exposure | Option A weight | Option B weight | Status |
|---|---|---|---|---|
| Job demands / High job demands | Work load; psychological demands; long hours | 0.23 work load (CI includes 1); 0.08 demands (CI includes 1); 0.07 long hours (CI includes 1) | 0.32 demands; 0.13 long hours | VERIFIED; weak in A |
| Low job demands (Victoria only) | None | none | none | GAP |
| Low job control | Low control | 0.07 | 0.20 (low decision latitude) | VERIFIED |
| Job demands and low job control together | Job strain (combination) | 0.14 | 0.58 | VERIFIED; candidate for a "combined" uplift |
| Poor support | Low support from colleagues / supervisors | 0.33 / 0.30 | 0.27 | VERIFIED |
| Lack of role clarity / Low role clarity | Role ambiguity / conflict | none | none | GAP (candidate TO-CHECK) |
| Poor organisational change management | Job insecurity (proxy) | 0.32 | 0.46 | VERIFIED (proxy) |
| Inadequate reward and recognition / Low recognition or reward | Effort-reward imbalance | 0.45 | 0.59 | VERIFIED |
| Poor organisational justice | Procedural / relational injustice | 0.22 / 0.50 | none | VERIFIED (A only) |
| Traumatic events or material / Exposure to traumatic events or content | None for depression; emotional demands is a partial proxy | 0.20 (proxy) | none | GAP (proxy) |
| Remote or isolated work | None | none | none | GAP |
| Poor physical environment / Poor environmental conditions | None (night work 0.15 in A is not the same thing) | none | none | GAP |
| Violence and aggression / Aggression or violence | Violence | 0.36 | 0.34 | VERIFIED |
| Bullying | Bullying | 1.00 | 1.00 | VERIFIED (low precision in both) |
| Harassment including sexual harassment / Sexual harassment | None in these sources | none | none | GAP (candidate TO-CHECK) |
| Gendered violence (Victoria only) | None in these sources | none | none | GAP |
| Conflict or poor workplace relationships / Poor workplace relationships | Relational injustice (proxy) | 0.50 (proxy) | none | GAP (proxy) |

The guide's other score inputs (frequency, severity, number of hazards combining, existing controls) have no pooled estimates either. They will be design judgements in Phase 5, labelled as such.

## Derived weights

Output of `research/notes/derive_weights.py`.

### Option A: Mikkelsen 2021 (depressive episodes)

| Exposure | Estimate (95% CI) | Precision | ln | Weight |
|---|---|---|---|---|
| Bullying | 2.58 (1.13–5.93) | Low | 0.948 | 1.00 |
| Relational injustice | 1.60 (1.14–2.24) | Low | 0.470 | 0.50 |
| Effort-reward imbalance | 1.53 (1.21–1.92) | Low | 0.425 | 0.45 |
| Violence | 1.40 (1.28–1.52) | High | 0.336 | 0.36 |
| Low support, colleagues | 1.37 (1.07–1.74) | Low | 0.315 | 0.33 |
| Job insecurity | 1.35 (1.21–1.50) | High | 0.300 | 0.32 |
| Low support, supervisors | 1.33 (1.11–1.60) | Moderate | 0.285 | 0.30 |
| Work load | 1.24 (0.95–1.61) | Low | 0.215 | 0.23 (CI includes 1) |
| Procedural injustice | 1.23 (1.02–1.47) | Moderate | 0.207 | 0.22 |
| Emotional demands | 1.21 (1.08–1.36) | High | 0.191 | 0.20 |
| Night work | 1.15 (1.01–1.30) | High | 0.140 | 0.15 |
| Job strain | 1.14 (1.05–1.25) | High | 0.131 | 0.14 |
| Low support, unspecified | 1.14 (0.98–1.32) | Moderate | 0.131 | 0.14 (CI includes 1) |
| Low skill discretion | 1.12 (0.98–1.29) | Moderate | 0.113 | 0.12 (CI includes 1) |
| Demands | 1.08 (0.98–1.19) | High | 0.077 | 0.08 (CI includes 1) |
| Low control | 1.07 (1.01–1.13) | High | 0.068 | 0.07 |
| Long working hours | 1.07 (0.98–1.18) | High | 0.068 | 0.07 (CI includes 1) |
| Low decision authority | 0.93 (0.77–1.13) | Moderate | -0.073 | -0.08 (CI includes 1) |

Precision is the paper's own rating, based on the width of the confidence interval.

### Option B: best available per exposure

| Exposure | Estimate (95% CI) | Outcome | Source | ln | Weight |
|---|---|---|---|---|---|
| Bullying | 2.82 (2.21–3.59) | Depressive symptoms | Theorell 2015 (low quality per Niedhammer) | 1.037 | 1.00 |
| Effort-reward imbalance | 1.84 (1.45–2.35) | Common mental disorders | Stansfeld & Candy 2006 | 0.610 | 0.59 |
| Job strain | 1.82 (1.06–3.10) | Common mental disorders | Stansfeld & Candy 2006 | 0.599 | 0.58 |
| Job insecurity | 1.61 (1.29–2.00) | Depressive symptoms | Rönnblad 2019 (high quality) | 0.476 | 0.46 |
| Violence | 1.42 (1.31–1.54) | Depression | Rudkjoebing 2020 (moderate quality) | 0.351 | 0.34 |
| High psychological demands | 1.39 (1.15–1.69) | Common mental disorders | Stansfeld & Candy 2006 | 0.329 | 0.32 |
| Low social support | 1.32 (1.21–1.44) | Common mental disorders | Stansfeld & Candy 2006 | 0.278 | 0.27 |
| Low decision latitude | 1.23 (1.08–1.39) | Common mental disorders | Stansfeld & Candy 2006 | 0.207 | 0.20 |
| Long working hours | 1.14 (1.03–1.25) | Depressive symptoms | Virtanen 2018 (high quality) | 0.131 | 0.13 |

Other estimates found, kept for reference: job strain and clinical depression 1.77 (1.47–2.13) (Madsen 2017); job strain and depressive symptoms 1.74 (1.53–1.96) and low decision latitude 1.37 (1.30–1.47) (Theorell 2015); effort-reward imbalance and depressive disorders 1.68 (1.40–2.01) (Rugulies 2017); burnout (emotional exhaustion): emotional demands 2.95 (2.40–3.62), injustice 2.86 (2.22–3.70), job demands 2.53 (2.36–2.71), low reward 1.86 (1.37–2.52), low support 1.81 (1.68–1.95), low control 1.63 (1.53–1.75), job insecurity 1.39 (1.22–1.57) (Aronsson 2017). Burnout figures aren't used for weights because the outcome differs and Niedhammer rates the evidence low to moderate quality.

## Research sources

**Stansfeld S, Candy B (2006).** Psychosocial work environment and mental health: a meta-analytic review. *Scandinavian Journal of Work, Environment & Health*, 32(6, special issue), 443–462. https://doi.org/10.5271/sjweh.1050
Longitudinal studies only (11 in the meta-analysis). Job strain, low decision latitude, low social support, high demands, effort-reward imbalance and job insecurity all predicted common mental disorders; strongest for job strain and effort-reward imbalance; effects differed between women and men. Figures from **Table 1, p. 448**: decision authority 1.21 (1.09–1.35); decision latitude 1.23 (1.08–1.39); psychological demands 1.39 (1.15–1.69) [men 1.55, women 1.34]; job strain 1.82 (1.06–3.10); social support 1.32 (1.21–1.44) [men 1.38, women 1.20]; effort-reward imbalance 1.84 (1.45–2.35); job insecurity 1.33 (1.06–1.67). Status: VERIFIED.

**Niedhammer I, Bertrais S, Witt K (2021).** Psychosocial work exposures and health outcomes: a meta-review of 72 literature reviews with meta-analysis. *Scandinavian Journal of Work, Environment & Health*, 47(7), 489–508. https://doi.org/10.5271/sjweh.3968 (open access: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8504166/)
Reviews from 2000–2020. Associations generally stronger for mental disorders than cardiovascular disease; high-quality reviews support job strain and long working hours with depression. Depression figures from the Results text (Figure 7) and **supplementary table S1**; quality ratings from the Results text. Status: VERIFIED (volume and pages confirmed).

**Mikkelsen S, Coggon D, Andersen JH, et al (2021).** Are depressive disorders caused by psychosocial stressors at work? A systematic review with metaanalysis. *European Journal of Epidemiology*, 36(5), 479–496. https://doi.org/10.1007/s10654-021-00725-9 (open access, CC BY 4.0: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8159794/)
54 longitudinal studies, 19 exposures, depressive episodes. Summary estimates above 1 for all but one exposure. The authors conclude that, given bias and confounding, they can't say with confidence whether any exposure causes depression. Figures from **Table 2**. Status: VERIFIED.

**Reviews cited through Niedhammer et al 2021 (figures from its supplementary table S1):**
- Theorell T et al (2015). A systematic review including meta-analysis of work environment and depressive symptoms. *BMC Public Health*, 15, 738. https://doi.org/10.1186/s12889-015-1954-4. Status: VERIFIED via S1.
- Madsen IE et al (2017). Job strain as a risk factor for clinical depression. *Psychological Medicine*, 47(8), 1342–1356. https://doi.org/10.1017/S003329171600355X. Status: VERIFIED via S1.
- Rugulies R, Aust B, Madsen IE (2017). Effort-reward imbalance at work and risk of depressive disorders. *Scand J Work Environ Health*, 43(4), 294–306. https://doi.org/10.5271/sjweh.3632. Status: VERIFIED via S1.
- Rönnblad T et al (2019). Precarious employment and mental health. *Scand J Work Environ Health*, 45(5), 429–443. https://doi.org/10.5271/sjweh.3797. Status: VERIFIED via S1.
- Rudkjoebing LA et al (2020). Work-related exposure to violence or threats and risk of mental disorders and symptoms. *Scand J Work Environ Health*, 46(4), 339–349. https://doi.org/10.5271/sjweh.3877. Status: VERIFIED via S1.
- Virtanen M et al (2018). Long working hours and depressive symptoms. *Scand J Work Environ Health*, 44(3), 239–250. Status: VERIFIED via Niedhammer Results text (DOI TO-CHECK).
- Aronsson G et al (2017). A systematic review including meta-analysis of work environment and burnout symptoms. *BMC Public Health*, 17(1), 264. https://doi.org/10.1186/s12889-017-4153-7. Status: VERIFIED via S1.

**Candidate sources for current gaps (not read; citations to confirm before use):**
- Role clarity: Schmidt S, Roesler U, Kusserow T, Rau R (2014). Uncertainty in the workplace: examining role ambiguity and role conflict, and their link to depression: a meta-analysis. *European Journal of Work and Organizational Psychology*, 23(1), 91–106. Listed in Niedhammer's supplementary material. Status: TO-CHECK (pooled estimates needed).
- Sexual harassment, gendered violence, traumatic events at work, remote or isolated work, poor physical environment, low job demands, leadership commitment / psychosocial safety climate: no pooled estimate found in the sources read. Status: GAP. Owner to suggest sources, or these stay judgement weights.

## Theoretical frameworks

**Job Demand-Control model:** Karasek RA (1979). Job demands, job decision latitude, and mental strain: implications for job redesign. *Administrative Science Quarterly*, 24(2), 285–308. Status: TO-CHECK.

**Demand-Control-Support (iso-strain):** Johnson JV, Hall EM (1988). Job strain, work place social support, and cardiovascular disease. *American Journal of Public Health*, 78(10), 1336–1342. Status: TO-CHECK.

**Effort-Reward Imbalance:** Siegrist J (1996). Adverse health effects of high-effort/low-reward conditions. *Journal of Occupational Health Psychology*, 1(1), 27–41. Status: TO-CHECK.

## Regulatory and standards guidance

**Safe Work Australia (2022).** Model Code of Practice: Managing psychosocial hazards at work. July 2022. ISBN 978-1-76114-138-6 (PDF). https://www.safeworkaustralia.gov.au/doc/model-code-practice-managing-psychosocial-hazards-work
Source of the 14 common psychosocial hazards (section 3.1, p. 16). Hazard names in `site/js/data/hazards.js` checked against it 2026-10-23. Licensed CC BY-NC 4.0, so the site paraphrases in its own words and quotes only short definitions with attribution. Notes: `research/notes/swa-psychosocial-codes.md`. Status: VERIFIED (edition, URL, hazard list). Still TO-CHECK: which jurisdictions have approved it.

**Safe Work Australia.** Model Code of Practice: Health care and social assistance industry, psychosocial hazards chapter. https://www.safeworkaustralia.gov.au/book/health-care-and-social-assistance/hazards-risks-and-controls/psychosocial-hazards
Industry-specific. Groups hazards into 6 broad types. Useful for: the matters to consider when choosing controls, why EAP alone doesn't meet the duty, short- vs long-term controls, words workers use to describe hazards, and case studies. Notes: `research/notes/swa-psychosocial-codes.md`. Status: VERIFIED (content read 2026-10-23). Licence of web page TO-CHECK.

**WorkSafe Victoria (2025).** Compliance Code: Psychological health, supporting the Occupational Health and Safety (Psychological Health) Regulations 2025. https://www.worksafe.vic.gov.au/compliance-code-psychological-health
Appendix B: identifying hazards. Appendix C: 16 example hazards with sample controls. Regulations commencement (1 December 2025) confirmed on WorkSafe's psychological health page. Status: VERIFIED (URL, commencement, 16-hazard count). TO-CHECK: edition number and date; hazard names against the Code itself.

**WorkSafe Victoria (2026).** Psychosocial hazard identification tool (WSV4056/01/01.26). Aligns with Compliance Code Appendix B. Source of the Victorian hazard names and the quoted Victorian definitions in `site/js/data/hazards.js`. Step 1 lists internal records to review (leave, incidents, hours, claims, complaints, turnover, EAP, grievances, productivity, surveys). Notes: `research/notes/worksafe-vic-psychological-health.md`. Status: VERIFIED (read 2026-10-23). Public URL TO-CHECK.

**WorkSafe Victoria.** Psychological health regulations FAQ. https://www.worksafe.vic.gov.au/psychological-health-regulations-frequently-asked-questions
Victoria's tailored control hierarchy (information, instruction or training can't be the main control), review triggers, consultation and HSR information access, prevention plans not mandatory, workers compensation unaffected. Status: VERIFIED (read 2026-10-23); check against the Regulations before stating section numbers.

**ISO 45003:2021.** Occupational health and safety management: psychological health and safety at work, guidelines for managing psychosocial risks. Status: TO-CHECK.

## Known limitations to state publicly

- Most underlying studies use self-reported exposures, which can inflate associations.
- Some estimates may be partly confounded by earlier mental ill health.
- Pooled estimates describe population-level risk, not risk for any individual.
- Effects vary by sex and occupation (for example, demands and support had larger effects for men in Stansfeld & Candy).
- **Estimates differ a lot between reviews.** Job strain ranges from OR 1.14 to 1.82 depending on the review, outcome and methods. Weights depend on which source is used.
- **Causality is uncertain.** The most recent review (Mikkelsen 2021) concludes it can't say with confidence that any of the exposures causes depressive episodes, because of bias and confounding.
- **Many hazards have no pooled estimate at all**, including sexual harassment, traumatic events, remote or isolated work, the physical environment and role clarity. Any weight for these is a judgement.
- Combining factors in the model assumes their effects compound in ways the source studies did not always test directly.

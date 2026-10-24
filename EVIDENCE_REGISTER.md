# Evidence Register

This file records the research and guidance behind every scored factor, weight and claim in the Psychological Risk Model and the Psychosocial Hazard Investigation Guide. Anyone reusing these tools should be able to trace a number on screen back to a source here.

Status key: `VERIFIED` (checked against the original source, page or table noted), `TO-CHECK` (source identified, figures not yet extracted or confirmed), `GAP` (factor used in a tool with no supporting source yet). `JUDGEMENT` (a rule chosen by the owner, guided by the named source but not derived from research figures).

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

## Guide rating rules (Phase 5)

The Guide's indicative rating uses no weights. Every rule is `JUDGEMENT`, guided by the Model Code's assessment questions and risk register. Full method: `docs/scoring-method.md`. Code: `site/js/data/scoring.js` (each rule's comment names its row here).

| Row | Rule | Status | Guided by |
|---|---|---|---|
| G1 | Starting rating from severity × how often (4 × 3 table); a severe one-off starts at High | JUDGEMENT | SWA Model Code s 4.2 (duration, frequency, severity; one severe exposure can harm), p. 23; Appendix C risk register, p. 54 |
| G2 | Controls: none or not working +1 band; partly 0; working well −1 band; no percentage discounts | JUDGEMENT | Code s 5.1 (controls ordered by effectiveness; administrative controls least reliable), pp. 24–25; Appendix C "How effective are the current controls?". No source supports the Gemini report's 10/25/60% discounts. |
| G3 | Working controls can't take a severe hazard below Moderate | JUDGEMENT | Code s 4.2 (severe single exposures); review recommendation "act on a serious hazard on its own merits" |
| G4 | Flag when 2+ hazards rated Moderate or above; flag never changes a rating | JUDGEMENT | Code s 4.2 (consider hazards collectively), p. 23; Lunen et al. 2023, Eur J Public Health 33(5):821–827, doi 10.1093/eurpub/ckad118 (odds of probable depression rise with number of exposures; VERIFIED, Table 3). No interaction multiplier. |
| G5 | Overall = highest single hazard rating; nothing averaged | JUDGEMENT | Owner decision 2026-10-24 (`docs/phases/phase-4.md`); arbitration M7 (dividing by a total dilutes a serious single hazard) |

## Guide hazards: what the research shows (Phase 6, shown on the Resources page)

No weights. This is what the Resources page (`site/js/data/evidence.js`, "hazards") says about each hazard. Figures are VERIFIED against the original (see Research sources and `research/notes/gemini-report-audit.md` section 3).

| Guide hazard | Evidence type | Key verified figures | Sources |
|---|---|---|---|
| Job demands / High job demands | Pooled | High demands, stress-related disorders OR 1.56 (1.41–1.72); workload/demands for depressive episodes CI includes 1; long hours 1.14 (1.03–1.25), Australia 0.95 (0.70–1.29) | van der Molen 2020 T3; Mikkelsen 2021 T2; Virtanen 2018 abstract |
| Low job demands (Vic) | None found | none | |
| Low job control | Pooled, mixed | Low decision authority OR 1.34 (1.20–1.49); low decision latitude 1.07 (0.92–1.25); Stansfeld decision latitude 1.23 (1.08–1.39) | van der Molen 2020 T3; Stansfeld & Candy 2006 T1 |
| Poor support | Pooled | Co-worker OR 1.29 (1.17–1.43); supervisor 1.27 (1.16–1.38) | van der Molen 2020 T3 |
| Role clarity | Correlational | Role ambiguity r .279, role conflict r .318 with depression | Schmidt 2014 abstract |
| Organisational change | Single study | Downsizing OR 1.51 (1.12–2.03); job insecurity 1.61 (1.29–2.00) | Fløvik 2019; Rönnblad 2019 |
| Reward and recognition | Pooled | ERI OR 1.91 (1.70–2.15) stress-related disorders; RR 1.49 (1.23–1.80) depressive disorders | van der Molen 2020 T3; Rugulies 2017 |
| Organisational justice | Pooled | Procedural OR 1.74 (1.62–1.86); relational 1.55 (1.44–1.67) | van der Molen 2020 T3 |
| Traumatic events or material | None found (exposure) | Emotional demands OR 1.58 (1.35–1.84) as related exposure | van der Molen 2020 T3 |
| Remote or isolated work | None found | none | |
| Physical environment | None found | none | |
| Violence and aggression | Pooled | Depressive disorder RR 1.42 (1.31–1.54) | Rudkjoebing 2020 |
| Bullying | Pooled | Depressive symptoms OR 2.82 (2.21–3.59); depressive episodes RR 2.58 (1.13–5.93) | Theorell 2015; Mikkelsen 2021 T2 |
| Harassment incl. sexual harassment | Correlational | Similar negative effects of different forms (conclusion only; exact values not used) | Sojo 2016 abstract; Gerhardt 2021 T4 |
| Gendered violence (Vic) | Prospective, not pooled | 29 studies, mostly sexual violence/harassment, consistently linked with poor mental health | Blindow 2024 abstract |
| Conflict / poor relationships | Correlational | Conflict r −.29, incivility r −.32 with well-being (bullying −.32 in same table) | Gerhardt 2021 T4 |
| Combination | Single study | 1/2/3/4 exposures OR 2.98 / 3.14 / 6.44 / 9.62 | Lunen 2023 T3 |

## Guide hazards mapped to evidence (Phase 4 proposal, superseded 2026-10-24)

How each hazard would have been weighted under the Phase 4 proposal. Kept as a record; the Guide uses no weights.

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

**Sources added 2026-10-24 (from the audited Gemini report; each re-checked against the original):**
- van der Molen HF, Nieuwenhuijsen K, Frings-Dresen MHW, de Groene G (2020). Work-related psychosocial risk factors for stress-related mental disorders: an updated systematic review and meta-analysis. *BMJ Open*, 10(7), e034849. https://doi.org/10.1136/bmjopen-2019-034849. Pooled ORs from **Table 3** (prose differs slightly). Status: VERIFIED.
- Lunen JC, Rugulies R, Sørensen JK, Andersen LL, Clausen T (2023). Exploring exposure to multiple psychosocial work factors. *Eur J Public Health*, 33(5), 821–827. https://doi.org/10.1093/eurpub/ckad118. Table 3. Status: VERIFIED.
- Fløvik L, Knardahl S, Christensen JO (2019). Organizational change and employee mental health. *Scand J Work Environ Health*, 45(2), 134–145. https://doi.org/10.5271/sjweh.3777. Status: VERIFIED.
- Gerhardt C, Semmer NK, Sauter S, et al (2021). How are social stressors at work related to well-being and health? *BMC Public Health*, 21, 890. https://doi.org/10.1186/s12889-021-10894-7. Table 4 overall well-being correlations. Status: VERIFIED.
- Schmidt S, Roesler U, Kusserow T, Rau R (2014). *Eur J Work Organ Psychol*, 23(1), 91–106. https://doi.org/10.1080/1359432X.2012.711523. Status: VERIFIED (abstract).
- Sojo VE, Wood RE, Genat AE (2016). Harmful workplace experiences and women's occupational well-being. *Psychology of Women Quarterly*, 40(1), 10–40. https://doi.org/10.1177/0361684315599346. Status: conclusion VERIFIED (abstract); exact values not used (author manuscript differs from the report; not reconciled).
- Blindow KJ, Cedstrand E, Elling DL, et al (2024). Gender-based violence and harassment at work and health and occupational outcomes. *BMC Public Health*, 24, 1788. https://doi.org/10.1186/s12889-024-19304-0. Status: VERIFIED (abstract, 2026-10-24).
- Bailey TS, Dollard MF, Richards PAM (2015). A national standard for psychosocial safety climate (PSC). *J Occup Health Psychol*, 20(1), 15–26. https://doi.org/10.1037/a0038166. PSC 37 or below high risk, 41 or above low risk (organisational). Status: VERIFIED (abstract).
- Virtanen 2018 DOI confirmed: https://doi.org/10.5271/sjweh.3712.

**Candidate sources for current gaps (not read; citations to confirm before use):**
- Role clarity: Schmidt S, Roesler U, Kusserow T, Rau R (2014). Uncertainty in the workplace: examining role ambiguity and role conflict, and their link to depression: a meta-analysis. *European Journal of Work and Organizational Psychology*, 23(1), 91–106. Listed in Niedhammer's supplementary material. Status: TO-CHECK (pooled estimates needed).
- Sexual harassment, gendered violence, traumatic events at work, remote or isolated work, poor physical environment, low job demands, leadership commitment / psychosocial safety climate: no pooled estimate found in the sources read. Status: GAP. Owner to suggest sources, or these stay judgement weights.

## Theoretical frameworks

**Job Demand-Control model:** Karasek RA (1979). Job demands, job decision latitude, and mental strain: implications for job redesign. *Administrative Science Quarterly*, 24(2), 285–308. https://doi.org/10.2307/2392498. Status: VERIFIED (citation, Crossref 2026-10-24).

**Demand-Control-Support (iso-strain):** Johnson JV, Hall EM (1988). Job strain, work place social support, and cardiovascular disease. *American Journal of Public Health*, 78(10), 1336–1342. https://doi.org/10.2105/ajph.78.10.1336. Status: VERIFIED (citation, Crossref 2026-10-24).

**Effort-Reward Imbalance:** Siegrist J (1996). Adverse health effects of high-effort/low-reward conditions. *Journal of Occupational Health Psychology*, 1(1), 27–41. https://doi.org/10.1037/1076-8998.1.1.27. Status: VERIFIED (citation, Crossref 2026-10-24).

Plain-English summaries of the three frameworks on the Resources page are our own, marked draft for owner review.

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

**World Health Organization (2022).** WHO guidelines on mental health at work. ISBN 978-92-4-005305-2. https://www.who.int/publications/i/item/9789240053052. Recommendation 1 (universal organisational interventions): conditional, very low-certainty evidence (p. 12). Recommendations 4 and 5 (manager training): strong, moderate certainty. Status: VERIFIED (owner's PDF, 2026-10-24).

**ISO 45003:2021.** Occupational health and safety management: psychological health and safety at work, guidelines for managing psychosocial risks. Status: TO-CHECK.

## Known limitations to state publicly

Shown on the Resources page (`site/js/data/evidence.js`, "limitations"). Updated 2026-10-24 for the per-hazard rating.

- Almost all evidence is observational. Mikkelsen 2021 concludes it can't say with confidence that any exposure causes depression, because of bias and confounding.
- Most studies use self-reported exposures, which can inflate associations.
- Pooled estimates describe groups, not risk for any individual.
- Outcomes and designs differ (symptoms, diagnosed disorders, distress, well-being), so estimates can't be compared to rank hazards. Job strain alone ranges from 1.14 to 1.82 depending on the review.
- Reviews reuse cohorts, so agreement isn't always independent confirmation.
- Several hazards have no comparable pooled estimate: low demands, remote or isolated work, physical environment, traumatic events as an exposure. A gap isn't evidence of low risk.
- The Guide's rating rules (G1 to G5) are judgement and haven't been tested against real workplace assessments.
- Sources were chosen from those checked during this project, not from a full systematic search.

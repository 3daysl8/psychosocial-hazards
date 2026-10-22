# Evidence Register

This file records the research and guidance behind every scored factor, weight and claim in the Psychological Risk Model and the Psychosocial Hazard Investigation Guide. Anyone reusing these tools should be able to trace a number on screen back to a source here.

Status key: `VERIFIED` (checked against the original source, page or table noted), `TO-CHECK` (source identified, figures not yet extracted), `GAP` (factor used in a tool with no supporting source yet).

## How weights are derived

Pooled effect sizes (usually odds ratios or relative risks for a mental health outcome) are converted to log scale, `ln(OR)`, then scaled so the largest effect in the model equals 1.0. Record the raw estimate, its 95% confidence interval, the outcome it relates to, and the quality rating of the review. Where the model uses a factor with no pooled estimate, mark it `GAP` and record the reasoning for the weight chosen, so it's visible as a judgement call rather than presented as evidence.

The tools have face validity only. They are educational and indicative, not validated predictive instruments.

## Factor table

| Factor in tool | Pillar | Weight used | Evidence for | Pooled estimate (95% CI) | Outcome | Source | Status |
|---|---|---|---|---|---|---|---|
| Job strain (high demands + low control) | Job | | | | Common mental disorders / depression | Stansfeld & Candy 2006; Niedhammer et al 2021 | TO-CHECK |
| Effort-reward imbalance | Job / Org | | | | Common mental disorders | Stansfeld & Candy 2006 | TO-CHECK |
| High psychological demands | Job | | | | Common mental disorders | Stansfeld & Candy 2006 | TO-CHECK |
| Low decision latitude | Job | | | | Common mental disorders | Stansfeld & Candy 2006 | TO-CHECK |
| Low social support at work | Job / Org | | | | Common mental disorders | Stansfeld & Candy 2006 | TO-CHECK |
| Job insecurity | Org | | | | Common mental disorders | Stansfeld & Candy 2006 | TO-CHECK |
| Long working hours | Job | | | | Depression | Niedhammer et al 2021 | TO-CHECK |
| *(add each remaining factor from the Risk Model source code)* | | | | | | | GAP |

## Research sources

**Stansfeld S, Candy B (2006).** Psychosocial work environment and mental health: a meta-analytic review. *Scandinavian Journal of Work, Environment & Health*, 32(6), 443–462. https://doi.org/10.5271/sjweh.1050
Longitudinal studies only. Job strain, low decision latitude, low social support, high demands, effort-reward imbalance and job insecurity all predicted common mental disorders, with the strongest effects for job strain and effort-reward imbalance. Effects differed between women and men. Extract pooled ORs from the results tables. Status: TO-CHECK.

**Niedhammer I, Bertrais S, Witt K (2021).** Psychosocial work exposures and health outcomes: a meta-review of 72 literature reviews with meta-analysis. *Scandinavian Journal of Work, Environment & Health*, 47(7), 489–508. https://doi.org/10.5271/sjweh.3968 (open access: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8504166/)
Covers reviews published 2000–2020. High-quality reviews support associations between job strain and long working hours and depression (and cardiovascular outcomes), with associations generally stronger for mental disorders than cardiovascular disease. Extract pooled estimates per exposure and outcome, with quality ratings. Status: TO-CHECK (confirm volume and page numbers).

**Mikkelsen S et al (2021).** Systematic review and meta-analysis of psychosocial working conditions and depressive disorders, flagged in the journal's editorial on the Niedhammer meta-review as confirming and extending its findings. Full citation TO-CHECK. Candidate for updating weights with more recent estimates.

## Theoretical frameworks

**Job Demand-Control model:** Karasek RA (1979). Job demands, job decision latitude, and mental strain: implications for job redesign. *Administrative Science Quarterly*, 24(2), 285–308. Status: TO-CHECK.

**Demand-Control-Support (iso-strain):** Johnson JV, Hall EM (1988). Job strain, work place social support, and cardiovascular disease. *American Journal of Public Health*, 78(10), 1336–1342. Status: TO-CHECK.

**Effort-Reward Imbalance:** Siegrist J (1996). Adverse health effects of high-effort/low-reward conditions. *Journal of Occupational Health Psychology*, 1(1), 27–41. Status: TO-CHECK.

## Regulatory and standards guidance

**Safe Work Australia (2022).** Model Code of Practice: Managing psychosocial hazards at work. Source of the 14 common psychosocial hazards. Status: TO-CHECK (confirm current edition and URL).

**WorkSafe Victoria (2025).** Compliance Code: Psychological health (Edition 1, September 2025), supporting the Occupational Health and Safety (Psychological Health) Regulations 2025, commenced 1 December 2025. Prevention plan template available from WorkSafe Victoria. Status: TO-CHECK (URL).

**ISO 45003:2021.** Occupational health and safety management: psychological health and safety at work, guidelines for managing psychosocial risks. Status: TO-CHECK.

## Known limitations to state publicly

Most underlying studies use self-reported exposures, which can inflate associations. Some estimates may be partly confounded by earlier mental ill health. Pooled estimates describe population-level risk, not risk for any individual. Effects vary by sex and occupation. Combining factors in the model assumes their effects compound in ways the source studies did not always test directly.

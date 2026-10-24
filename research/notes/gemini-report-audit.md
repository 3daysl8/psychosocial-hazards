# Audit of the Gemini literature review

Report audited: `research/notes/psychosocial_risk_literature_review.md` (Google Gemini deep research, received 2026-10-24, from the brief in `prompts/research/gemini-deep-research-scoring.md`).
Audited: 2026-10-24, by Claude Code for the project owner.

> **Corrected 2026-10-24 after arbitration.** A second AI audit (`argon-report-audit.md`) and a ChatGPT arbitration of both audits (`final-audit-arbitration.md`) found errors in this audit too. Claude Code re-checked the disputed points against the original sources and corrected them in place, each marked *[corrected]*:
>
> - **Madsen 2017:** the report's 1.22 (1.02–1.47) **is in the paper**. It is the model with extra socioeconomic adjustment; 1.27 (1.04–1.55) is the main model. The report's errors are the citation, the N and the missing baseline-symptom caveat, not the 1.22.
> - **Lunen 2023:** the first author's surname is **Lunen**, not "van Lunen".
> - **Fox 2022:** a matching real review exists: Fox, Johnson, Berkman et al., *Work & Stress* 36(1), doi 10.1080/02678373.2021.1969476. The "Cochrane" label was wrong; the paper is not invented. It gives no support for 10/25/60% control discounts.
> - **Rugulies 2017:** the least-adjusted 1.68 (1.40–2.01) **is verified** (paper's alternative analyses).
> - **Combining (section 4.2):** comparing the Lunen exposure-count ORs with powers of 2.98 illustrates the point but is **not an interaction test**. It can't prove effects are less than additive either.
> - **Section 6 is superseded.** The owner chose per-hazard rating on 2026-10-24 (see `docs/phases/phase-4.md`). No weight set, Option A included, is validated for a site-level score.
> - Still unconfirmed by Claude Code: the arbitration's Sojo author-manuscript values (PDF blocked automated download), People at Work's decommissioning date, and the WHO recommendation strength. Treat as TO-CHECK.

## Verdict in one paragraph

The report is a useful **map of where to look**, but it is **not safe to use or publish as it stands**. Most effect sizes it quotes from open-access papers are copied correctly. But **13 of its 32 references have the wrong DOI, journal, authors or pages** (five DOIs point to unrelated papers). Two well-known papers carry the wrong author names. It contains **one invented quotation** attributed to the Safe Work Australia Code, and **one number credited to a paper that does not contain it**. It also **mischaracterises a High Court case**. Several scoring recommendations are labelled "evidence-based" when they are judgement, and two contradict the data they cite. Nothing goes into `EVIDENCE_REGISTER.md` or onto the site from this report except the figures marked VERIFIED below, each re-cited from the original source.

## How it was checked

1. **Citations:** every DOI in the report was resolved against Crossref (the DOI registry), and the returned title, authors, journal and pages compared with the report. Where a DOI was wrong, the real record was found by a Crossref bibliographic search.
2. **Numbers:** open-access papers were pulled as full text from Europe PMC and searched for each quoted figure. For paywalled papers, the abstract (via Europe PMC or OpenAlex) was checked. Where neither shows the figure, it is marked UNVERIFIED.
3. **Arithmetic:** the report's conversions and log calculations were recomputed (`research/notes/audit_gemini_math.py`).
4. **Regulator text:** the quoted Safe Work Australia passage was searched for in the full text of the Model Code (2022 Word version, downloaded fresh from safeworkaustralia.gov.au).
5. Figures already verified in Phase 4 (Mikkelsen 2021 Table 2; Stansfeld & Candy 2006 Table 1; Niedhammer 2021 S1) were compared with the report's copies. **All match.**

Papers were kept outside the repo, per project rules.

## 1. Serious problems (must not be repeated anywhere)

| # | What the report says | What is true | Severity |
|---|---|---|---|
| S1 | Quotes the SWA Model Code (s 1.1): *"Managing psychosocial risks does not require employers to assess the personal mental health history, private life, or resilience of individual workers..."* | **This sentence is not in the Code.** Full-text search of the Code finds no such passage. The Code does say risk assessment considers "the duration, frequency and severity of the exposure", "how the psychosocial hazards may interact or combine" and "the design of work", and that controls go "from most to least effective". | Fabricated quotation |
| S2 | *Koehler v Cerebos* [2005] HCA 15 stands for "employers must take workers as they find them (eggshell skull)". | Mischaracterised. Koehler concerns when psychiatric injury is reasonably foreseeable in a negligence claim *[corrected: "the opposite point" was itself too strong a summary]*. This is a legal claim; under project rule 3 it must not be used without a legal source. **Recommendation: drop case law entirely**; the exclusion of individual factors is a design choice that the Code's focus on the design of work supports. | Wrong legal claim |
| S3 | Verkuil et al. (2015) found OR 2.82 (2.21–3.59) for bullying. Cited as *Depress Anxiety*. | Verkuil 2015 is in *PLOS ONE* and reports **correlations** (longitudinal r = 0.21). 2.82 (2.21–3.59) is Theorell 2015's figure, copied across. | Number credited to wrong paper |
| S4 | "Soucek, Paul, Ziegler & Moser (2021)", "611 studies, over one million workers". | The paper at that DOI is by **Gerhardt, Semmer, Sauter, Walker, de Wijn, Kälin, Kottwitz, Kersten, Ulrich & Elfering (2021)**, and it pooled **557 studies (640 samples)**. "One million" appears nowhere. | Wrong authors and size |
| S5 | "Bertrais, Witt & Niedhammer (2023)", Eur J Public Health 33(5):824–831. | The paper is by **Lunen, Rugulies, Sørensen, Andersen & Clausen (2023)** *[corrected: no "van"]*, pp. 821–827. The figures (OR 2.98 / 3.14 / 6.44 / 9.62) are correct. | Wrong authors |
| S6 | Madsen et al. 2017, *Lancet Psychiatry* 4(12):913–924; unpublished IPD RR 1.22 (1.02–1.47), N 124,558. | Madsen 2017 is in ***Psychological Medicine* 47(8):1342–1356**, doi 10.1017/S003329171600355X. Unpublished IPD main-model HR is **1.27 (1.04–1.55)**, N **120,221**. *[corrected: the report's 1.22 (1.02–1.47) is also real; it is the model with added socioeconomic adjustment. Label whichever model is used.]* The report also omits the key caveat: adjusting for baseline depressive symptoms reduced the RR to **1.03 (0.81–1.32)**. | Wrong citation and numbers |
| S7 | Cieslak et al. 2014: STS correlates with burnout at r = 0.55, k = 17, N = 3,744, *J Clin Psychol* 70(1). Converted to "OR ≈ 7.03" for traumatic material. | Paper is in ***Psychological Services* 11(1):75–86**, doi 10.1037/a0033798; 41 studies, 8,256 workers, r = 0.69. More importantly, secondary traumatic stress and burnout are **both outcomes**; their correlation says nothing about how harmful the exposure is. The conversion is also wrong (r = 0.55 gives about 10.9, not 7.03). | Misuse; unusable |

## 2. Citation errors (the DOI registry disagrees with the report)

| Report cites | Correct record |
|---|---|
| Stansfeld & Candy 2006, doi **10.5271/sjweh.1053** | doi **10.5271/sjweh.1050** (1053 is Geurts & Sonnentag). Our register already has the right DOI. |
| Rudkjoebing et al. 2020, 46(**2**):**123–138**, authors "Hansen, Rugulies, Kolstad, Bonde" | 46(**4**):**339–349**; Rudkjoebing, Bungum, Flachs, Eller, Borritz, Aust, Rugulies, Rod, Biering, Bonde. |
| van der Molen et al. 2020, authors "Blatter, Sluiter, Nieuwenhuijsen" | van der Molen, Nieuwenhuijsen, Frings-Dresen, de Groene. |
| Fløvik et al. 2019, doi 10.5271/sjweh.**3776** | doi 10.5271/sjweh.**3777**. |
| Bamberger et al. 2012, *BMC Public Health* 12:38, doi 10.1186/1471-2458-12-38 | ***Occup Environ Med* 69(8):592–598**, doi 10.1136/oemed-2011-100381. (Cited DOI is a paper on violent offenders.) |
| LaMontagne et al. 2007, *BMC Public Health* 7:221 | ***Int J Occup Environ Health* 13(3):268–280**, doi 10.1179/oeh.2007.13.3.268. (Cited DOI is a child psychiatry paper.) |
| Dzhambov & Dimitrova 2018, IJERPH 15(7):1358 | Cited DOI is a pharmacokinetics paper. Dzhambov's noise meta-analyses are on **work injury** (2017) and **road traffic noise** (Dzhambov & Lercher 2019); neither is occupational noise and depression. |
| Duchaine et al. 2020, *Occup Environ Med* 77(12), doi 10.1136/oemed-2020-106544 (does not resolve) | ***JAMA Psychiatry* 77(8):842–851**, doi 10.1001/jamapsychiatry.2020.0322. RR 1.66 (1.37–2.00) for ERI is correct. |
| Lunde et al. 2026, *BMC Public Health* 26:28220 | **Parent-Lamarche, Beauregard, Blanc et al. 2026**, *BMC Public Health* 26:**2717**. |
| Blindow et al. 2024, article **1792** | Article **1788**. |
| Fleming 2024, pp. **150–171** | pp. **162–182**. |
| Dollard, Tuckey & Dormann 2012, *Work & Stress* 26(4):385–404, doi 10.1080/02678373.2012.734031 (does not resolve) | Not found as cited. The **PSC-12 benchmarks** (high risk at 37 or below, low risk at 41 or above) come from **Bailey, Dollard & Richards 2015**, *J Occup Health Psychol* 20(1):15–26, doi 10.1037/a0038166. |
| Dollard & Bakker 2010, doi 10.1037/a0017920 (resolves to a book review) | *J Occup Organ Psychol* 83(3):579–599, doi 10.1348/096317909X470690. |
| Rönnblad et al. 2019, first author "M", "Bodin T" listed twice | Rönnblad **T**, Grönholm, Jonsson, Koranyi, Orellana, Kreshpaj, Chen, Stockfelt, Bodin. |
| Fox et al. 2022, Cochrane | *[corrected]* Not Cochrane. Likely intended source: Fox, Johnson, Berkman, Sianoja, Soh, Kubzansky & Kelly (2022), *Work & Stress* 36(1), doi 10.1080/02678373.2021.1969476. It does not support the report's control discounts. |

## 3. Figures checked against the source

VERIFIED = figure found in the paper's full text or abstract. Only these may enter the register.

| Source | Figure(s) in report | Result |
|---|---|---|
| van der Molen 2020, Table 3 (stress-related disorders, prospective, GRADE moderate) | ERI 1.91 (1.70–2.15); low procedural justice 1.74 (1.62–1.86); low relational justice 1.55 (1.44–1.67); high demands 1.56 (1.41–1.72); low coworker support 1.29 (1.17–1.43); low supervisor support 1.27 (1.16–1.38); both 1.41 (1.18–1.69); high emotional demands 1.58 (1.35–1.84); low decision authority 1.34 (1.20–1.49) | **VERIFIED**, all nine, with N and I². **Omitted by the report:** low decision latitude 1.07 (0.92–1.25, no effect), low skill discretion 1.11 (0.94–1.32), and bullying/violence rated **very low quality, inconsistent**. |
| Rudkjoebing 2020 | Depressive disorder RR 1.42 (1.31–1.54), I² 0%; depressive symptoms 2.33 (1.71–3.17); anxiety 2.40 (0.78–7.36); burnout 1.60 (1.25–2.05) | **VERIFIED.** But: only 1 of the 4 "depressive disorder" studies used a diagnosis (2 used antidepressant prescriptions), the 2.33 rests mostly on **cross-sectional** studies, and the authors warn that heterogeneity "invalidate[s] the strict interpretation of most pooled risk estimates". The N of 74,688 is not in the paper and does not equal the sum the report gives (98,554). |
| Rugulies 2017 | ERI RR 1.49 (1.23–1.80), 8 cohorts, 84,963 | **VERIFIED** (abstract). Least-adjusted 1.68 (1.40–2.01) *[corrected]* **VERIFIED** (alternative analyses section); same data, different model, not a second finding. |
| Virtanen 2018 | Long hours 1.14 (1.03–1.25), 189,729, I² 45.1% | **VERIFIED.** Australia: 0.95 (0.70–1.29), no association. |
| Rönnblad 2019 | Job insecurity, depressive symptoms 1.61 (1.29–2.00) | Consistent with Phase 4 (via Niedhammer S1). Paper's overall mental health figure is **1.52 (1.35–1.70)**. |
| Duchaine 2020 | ERI → mental-health sickness absence RR 1.66 (1.37–2.00) | **VERIFIED** (correct paper is JAMA Psychiatry, see section 2). |
| Fløvik 2019 (single Norwegian cohort, 5,297, clinically relevant distress) | Downsizing 1.51 (1.12–2.03); layoffs 1.46 (1.01–2.12); multiple changes 1.75 (1.28–2.38); repeated change 1.84 (1.29–2.63) | **VERIFIED.** The "reorganisation 1.46" is the **work-unit-level** figure and it lost significance after adjusting for work factors; the individual-level figure is 1.29 (1.01–1.65). One cohort, not a meta-analysis. |
| Lunen 2023 *[corrected name]* (single Danish cohort; 2,158 people, **105 cases**; questionnaire-defined probable depression) | 1/2/3/4 exposures: OR 2.98 / 3.14 / 6.44 / 9.62 | **VERIFIED.** CIs are very wide (4 exposures: 3.30–28.01). The one-exposure CI is printed as 1.09–4.44, which is unusually lopsided; quote as reported. |
| Gerhardt 2021 (cited as "Soucek") | Bullying r −.32; interpersonal conflict r −.29; incivility r −.32; role stress r −.25; sexual mistreatment r −.19 | **VERIFIED** (Table 4, overall well-being). Mostly cross-sectional correlations. Outcome-specific values from Table 5 not reliably checkable. |
| Schmidt 2014 | Role ambiguity r = .279; role conflict r = .318; 33 studies, 19,926 | **VERIFIED** (abstract). These are correlations, not ORs. |
| Sojo 2016 | Harassment and coercion "similar negative effects" | **VERIFIED** as a conclusion (abstract). Specific r_c values UNVERIFIED (paywalled). |
| Willness 2007 | r −0.28, 41 studies, ~70,000 | Study count and N **VERIFIED**; r UNVERIFIED (paywalled). |
| Magnusson Hanson 2020 | Suicide HR 2.82 (1.49–5.34); attempts 1.56 (1.18–2.05) | **VERIFIED** (Table 2, one adjusted model). |
| Blindow 2024 | 29 prospective studies, narrative synthesis | **VERIFIED**; the authors judged meta-analysis **not appropriate**. |
| Bailey 2015 (the real PSC source) | PSC ≤ 37 high risk; ≥ 41 low risk | **VERIFIED** (abstract). |
| Fleming 2024 | 46,336 workers, 233 organisations; participants "no better off" | **VERIFIED**, but it is **cross-sectional**, not a field study, and does not single out EAPs. |
| LaMontagne 2007 | 90 intervention reports | **VERIFIED.** The paper says individual approaches **do** help individual outcomes but not organisational ones. The report's "transient relief that decayed rapidly" is not in the abstract. |
| Theorell 2015 | Bullying 2.82 (2.21–3.59); strain 1.74; latitude 1.37 | Pooled values are in figures, not text; bullying confirmed in Phase 4 via Niedhammer S1. Register has strain CI 1.53–1.96; report says 1.54–1.96. Forest plots use the **least-adjusted** models, so "adjusted for baseline: Yes" is wrong. |
| Brewin 2000, Ozer 2003 | Trauma severity r 0.23; life threat r 0.26 | UNVERIFIED (paywalled). These compare people **already exposed** to trauma, so they cannot set a weight for exposure versus no exposure. |

## 4. Arithmetic and logic

1. **Correlation → odds ratio conversions.** Mostly computed correctly (Chinn method), two wrong (Cieslak; Brewin social support should be 4.87, not 4.25). But using them is **invalid** for this tool: they are mostly cross-sectional, self-report on both sides, different outcomes (well-being, burnout), and not adjusted for baseline mental health. Plugged into the weight formula they give **role conflict 1.17–1.28 and incivility 1.30–1.47, i.e. stronger than bullying**. The report says these anchor at "≈ 1.00", which is not what its own numbers give.
2. **"Super-additive / multiplicative" combining is not supported by the data cited.** Risk clearly **rises with the number of hazards**. The proposed **1.25 "compound interaction multiplier" has no basis** in this study. *[corrected: this audit originally compared 3.14 and 9.62 with 2.98² ≈ 8.9 and 2.98⁴ ≈ 79 and called the effect "less than additive". That comparison is illustrative only. The one-exposure group pools different hazards, so 2.98 is not each hazard's own effect, and the study did not test interaction. It supports "more hazards, more risk", nothing more precise.]*
3. **Score formula** `Weight × (Frequency multiplier + Severity weight)` adds a multiplier to a rating on a different scale. It is not derived from anything and is not recommended.
4. **"Evidence-based" labels on judgement numbers:** frequency multipliers 1.0 / 1.5 / 2.0, control reductions 10% / 25% / 60%, the +15% "amplifier", and the 25/50/75% band cut-offs are all **judgement**. The cited evidence supports the **direction** (sustained worse than one-off; organisational controls beat individual ones) but not the **numbers**. Of the dose-response evidence offered, the IPD chronic-strain estimate (1.63, 0.99–2.68) has a CI that includes 1. The bullying-frequency ORs ("1.3–1.5" vs "2.5–4.0") have no source.

## 5. What the report gets right

- Honest **"Not found"** for pooled estimates on underload, remote or isolated work, physical environment and organisational change. This matches what Phase 4 found and is useful to state publicly.
- Good leads that check out: **van der Molen 2020** (consistent prospective set covering justice, emotional demands and support, which were Phase 4 gaps), **Rugulies 2017**, **Duchaine 2020**, **Fløvik 2019**, **Blindow 2024**, **Bailey 2015** (via the PSC discussion), **Schmidt 2014**.
- Sound reasoning on why reviews disagree (outcome strictness, baseline adjustment, common-method bias, published vs unpublished cohorts) and on why population attributable fractions don't suit a site-level tool.
- Sensible **direction** for score inputs: sustained exposure and severe single events matter; individual supports alone shouldn't lower the rating much.

## 6. What this means for the score (Phase 5)

> *[Superseded 2026-10-24.]* The owner chose per-hazard rating instead of weights. Kept below as the record of what was recommended at the time. The arbitration's point stands: no weight set here, Option A included, is validated for scoring a workplace.

1. **Weights: keep Option A (Mikkelsen 2021) as recommended in Phase 4.** Nothing here beats it for one outcome, one method and clinical endpoints. **Add van der Molen 2020 as a second, independent sensitivity set** (prospective, GRADE moderate, stress-related disorders). It fills justice, emotional demands and support with consistent methods.
2. **Do not use any correlation-converted figure as a weight.** Role clarity, harassment, gendered violence, conflict and traumatic material stay **judgement weights**. The verified correlations can be cited on the Resources page as evidence that the hazard matters, not how much.
3. **Organisational change:** Fløvik 2019 (one cohort, OR 1.51 for downsizing) can inform a judgement weight, labelled "single study".
4. **Remote/isolated work and physical environment:** evidence supports treating them as hazards that **make other hazards worse** rather than as stand-alone causes (Parent-Lamarche 2026 for telework). Either a low judgement weight or a small labelled amplifier. Owner's choice.
5. **Combining:** add hazard scores and cap the total. No interaction multiplier. Show the Lunen figures on the "How this score works" panel as the reason more hazards mean higher risk.
6. **Frequency, severity, controls, bands:** simple rules **clearly labelled as judgement**, in a data file, each line naming the source it is guided by. Use the Code's own wording: duration, frequency and severity, hazards that interact or combine, and the hierarchy of controls.

## 7. What can be shared with site users

- **Do not publish the Gemini report itself**, or any of its plain-English summaries (section 7). Several of them repeat the errors above (wrong authors, "611 studies / one million workers", "hazards multiply each other's harm", "severe" depressive symptoms, "substantial protection" from support, "as detrimental as physical workload").
- **Publish instead (Phase 6):** our own short summaries written from the verified sources in section 3, with correct citations, and a plain statement of which hazards have no pooled estimate.
- **Possible transparency item:** a short "How the evidence was checked" note saying an AI research tool was used to find sources, and every figure was checked against the original paper, with the error rate found. That candour will help with public scrutiny. Owner's call.

## 8. Still to check before anything is published

- People at Work: hazard list, scoring bands and licence terms (the report's CC BY-NC and reuse claims are unverified). Check peopleatwork.gov.au.
- PSC-12 licence terms (UniSA): unverified.
- WHO 2022 Guidelines on mental health at work: the strength of the recommendation for organisational interventions (report says "strongly"; check the guideline).
- Model WHS Act s 19 and Vic OHS Act s 21 references: TODO-VERIFY against legislation.gov.au and legislation.vic.gov.au.
- Willness 2007, Sojo 2016, Brewin 2000 exact figures: paywalled; owner access or leave as UNVERIFIED.

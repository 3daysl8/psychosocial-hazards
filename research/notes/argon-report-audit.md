# Forensic Audit & Triage Report: *Psychosocial Risk Literature Review*

**Audited Document:** [`psychosocial_risk_literature_review.md`](psychosocial_risk_literature_review.md)  
**Audit Date:** 24 October 2026  
**Intended Use of Audited Document:** Public-facing educational guide and indicative psychosocial risk assessment calculator for Australian HR practitioners, employers (PCBUs), and Health and Safety Representatives (HSRs).  
**Audit Methodology:** Every statistical figure, confidence interval, study count ($k$), participant count ($N$), heterogeneity statistic ($I^2$), table/page location, mathematical transformation ($\ln(\text{OR})$ and $r \to d \to \text{OR}$), legal/regulatory quote, instrument licence, and bibliographic reference (all 32 citations and DOIs) was cross-examined against primary full-text XML/PDF sources, PubMed/NCBI E-utilities, Europe PMC, CrossRef API metadata, and Australian WHS regulator documentation.

---

## 1. Executive Summary & Triage Verdict

> [!CAUTION]
> **Overall Audit Verdict: DO NOT PUBLISH WITHOUT MANDATORY REMEDIATION.**  
> While the core epidemiological estimates for the major classical hazards (Theorell 2015, Mikkelsen 2021, van der Molen 2020, Rudkjoebing 2020, Rugulies 2017, Rönnblad 2019, Virtanen 2018, Stansfeld & Candy 2006, Fløvik 2019) are **verified as numerically accurate**, the review contains **6 High-Risk**, **7 Medium-Risk**, and **5 Low-Risk** defects—including a legally hazardous false licensing claim on *People at Work*, a fabricated verbatim quote attributed to Safe Work Australia, a catastrophic misreading of Orwin’s Fail-Safe $N$ (`NMS`) as human sample size ($N$), three completely hallucinated author attributions, ten corrupted/wrong-article DOIs, and an uncalibrated $r \to \text{OR}$ conversion that distorts the hazard weight hierarchy.

### Triage Summary Matrix

| Risk Tier | Count | Summary of Defects | Required Action Before Public Release |
|---|---|---|---|
| 🔴 **HIGH RISK** | **6** | **H1:** False legal advice claiming *People at Work* survey items are licensed under CC BY-NC 4.0 for digital reproduction.<br>**H2:** Fabricated verbatim quote attributed to Safe Work Australia *Model Code of Practice* (2022, s 1.1).<br>**H3:** Orwin’s Fail-Safe $N$ (`NMS` = Number of Missing Studies) misread as human participant count ($N$) across 6 rows.<br>**H4:** Complete author hallucination on 3 major papers (*"Soucek et al. 2021"*, *"Bertrais et al. 2023"*, *"Lunde et al. 2026"*).<br>**H5:** 10 broken (404) or wrong-article DOIs & fabricated statistics for Cieslak et al. (2014) and Dollard et al. (2012).<br>**H6:** Uncalibrated conversion of cross-sectional $r$ to $\text{OR}$ ranking everyday incivility ($\text{OR} \approx 4.04$) above bullying ($\text{OR} = 2.82$) and violence ($\text{RR} = 1.42$). | **Mandatory Blocker:** Must be excised or replaced using the exact drop-in corrections in Section 2 before any public or analyst use. |
| 🟠 **MEDIUM RISK** | **7** | **M1:** Mikkelsen (2021) Table 2 column *"Clinical interview or questionnaire"* misread as *"Adjusted for baseline mental health"* (producing impossible `16/14` fraction).<br>**M2:** Hallucinated `AMSTAR-2: High` rating and fabricated `93,316` sample size for Mikkelsen (2021).<br>**M3:** Addition error in Rudkjoebing (2020) participant total (`74,688` vs. actual `98,554`) and false `NOS` tool claim.<br>**M4:** Misquoted effect sizes for Blindow et al. (2024) primary studies and Verkuil et al. (2015).<br>**M5:** Sample size ($N$), study count ($k$), baseline adjustment, and $I^2$ discrepancies in Madsen (2017), Theorell (2015), van der Molen (2020), and Stansfeld & Candy (2006).<br>**M6:** Inaccurate description of *People at Work* 14 constructs and 2D risk matrix.<br>**M7:** Internal mathematical flaw in the proposed scoring formula and band denominator. | **Substantive Revision:** Correct table cells, sample sizes, and scoring algebra using Section 3 specifications. |
| 🟡 **LOW RISK** | **5** | **L1:** Corrupted author lists in Rönnblad (2019), Rudkjoebing (2020), and van der Molen (2020).<br>**L2:** Wrong issue/page numbers for Rudkjoebing (2020: `46(2):123–138` vs `46(4):339–349`) and Fleming (2024: `150–171` vs `162–182`).<br>**L3:** Wrong article number for Blindow (2024: `1792` vs `1788`).<br>**L4:** Wrong Creative Commons licence labels on van der Molen (2020) and Parent-Lamarche (2026).<br>**L5:** Minor boundary inequality error in PSC-12 cut-offs (`> 41` vs $\ge 41$) and double-slash DOI typo. | **Editorial Polish:** Apply clean bibliographic fixes in Section 4. |

---

## 2. High-Risk Findings (Mandatory Pre-Publication Blockers)

### 🔴 HIGH-RISK #1: Legally Hazardous False Claim Regarding *People at Work (PaW)* Survey Licensing
* **Location:** [Section 5.1, Line 243](psychosocial_risk_literature_review.md#L243)
* **Text in Report:**
  > *"Educational and public materials are available under Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0). Digital reproduction of survey items within free, non-commercial educational tools is permitted provided appropriate attribution is given to the People at Work Project and no commercial fee or monetization is involved."*
* **Forensic Audit Finding:** **Factually false and legally dangerous.**
  1. Under the official *People at Work Terms of Use and Copyright Notice* (administered by the State of Queensland / Office of Industrial Relations on behalf of Commonwealth, State, and Territory WHS regulators), the survey items are **explicitly excluded** from open reuse: *"Any online survey generated through or downloaded from the People at Work platform in a printable format (the People at Work Survey), and any People at Work trademarks, must not be copied or distributed."*
  2. Several subscales embedded inside the *People at Work* survey derive from third-party academic scales subject to strict publisher copyright.
  3. The *People at Work* digital survey platform (`peopleatwork.gov.au`) was officially decommissioned on 2 October 2026. Advising developers of a public browser tool that they may freely reproduce *People at Work* survey items under CC BY-NC 4.0 creates direct exposure to copyright infringement.
* **Specific Action Required:** Delete the last two sentences of Line 243 and replace with:
  > **Drop-In Correction:** *"While general educational guidance on the People at Work website was made available for non-commercial reference with attribution, the **People at Work Survey instrument and its constituent questionnaire items are strictly protected by copyright and Terms of Use**—they **must not** be copied, distributed, adapted, or embedded into third-party digital tools without explicit written permission from the copyright holders. Furthermore, the `peopleatwork.gov.au` digital platform was decommissioned in October 2026. A public educational tool must therefore use original, plain-English hazard descriptions aligned with the Safe Work Australia Model Code of Practice (which is licensed under CC BY 4.0) rather than reproducing People at Work survey items."*

---

### 🔴 HIGH-RISK #2: Fabricated Verbatim Regulatory Quote Attributed to Safe Work Australia
* **Location:** [Section 6, Line 284](psychosocial_risk_literature_review.md#L284)
* **Text in Report:**
  > *"Safe Work Australia’s Model Code of Practice: Managing Psychosocial Hazards at Work (2022, Section 1.1) explicitly states: 'Managing psychosocial risks does not require employers to assess the personal mental health history, private life, or resilience of individual workers. Risk management focuses on the design of work, organizational culture, and working conditions.'"*
* **Forensic Audit Finding:** **Fabricated verbatim quotation.**
  Section 1.1 of the Safe Work Australia *Model Code of Practice: Managing psychosocial hazards at work* (2022, p. 5) does **not** contain these sentences. The actual verbatim text of Section 1.1 is:
  > *"Psychosocial hazards are hazards that: arise from or in relation to: the design or management of work; the working environment; plant at a workplace, or workplace interactions or behaviours; and may cause psychological harm (and can also cause physical harm)."*
  While the legal principle is sound (the WHS duty attaches to the design and management of work rather than auditing workers' private lives), presenting a model-generated paraphrase inside quotation marks as a verbatim citation of Section 1.1 of a statutory Code of Practice is a critical hallucination.
* **Specific Action Required:** Remove the fabricated quotation marks on Line 284 and replace with the exact statutory definition from Section 1.1 alongside a properly paraphrased explanation of the PCBU's duty under Sections 1.1–2.2 of the Code.

---

### 🔴 HIGH-RISK #3: Catastrophic Misreading of Orwin’s Fail-Safe $N$ (`NMS`) as Human Sample Size (`Participants`)
* **Locations:** [Section 2, Lines 59, 63, 72–75](psychosocial_risk_literature_review.md#L59-L75); [Section 3.4, Line 98](psychosocial_risk_literature_review.md#L98); [Section 3.7, Line 120](psychosocial_risk_literature_review.md#L120); [Section 3.12, Line 148](psychosocial_risk_literature_review.md#L148); [Section 3.13, Line 153](psychosocial_risk_literature_review.md#L153); [Section 3.15, Lines 165–166](psychosocial_risk_literature_review.md#L165-L166); [Section 7, Line 312](psychosocial_risk_literature_review.md#L312)
* **Text in Report:**
  In every row and narrative paragraph citing `10.1186/s12889-021-10894-7` (misattributed to *"Soucek et al. 2021"*; actually **Gerhardt et al. 2021**), the report claims the following human participant counts ($N$):
  * Role stress ($k=63$): `Participants = 29,837`
  * Sexual mistreatment ($k=42$): `Participants = 5,509`
  * Interpersonal conflicts ($k=135$): `Participants = 143,344`
  * Workplace incivility ($k=40$): `Participants = 15,305`
  * Lack of justice ($k=239$): `N = 466,216`
  * Mobbing/bullying ($k=62$): `N = 70,354`
* **Forensic Audit Finding:** **Complete misinterpretation of a statistical column.**
  1. In Table 2 and Table 4 of Gerhardt et al. (2021, *BMC Public Health* 21:890, p. 8), the columns are `Outcome | K_S | Mean r | 95% CI | Q | I² | NMS`. Here, **`NMS` stands for "Number of Missing Studies" (Orwin’s Fail-Safe $N$)** required to reduce the pooled effect size to non-significance—**NOT the number of human participants!** (In that same column, 5 studies of "Undermining" have `NMS = 69`, and 11 studies of "Conflict with supervisor" have `NMS = 389`).
  2. **Table Splicing Error:** In Gerhardt et al. (2021), **Table 4** pools each social stressor across **all 14 outcome categories combined** (including job satisfaction, organizational commitment, turnover intention, OCB, CWB, physical health, mental health, and burnout) and reports $K_S$, $\text{Mean } r$, $95\% \text{ CI}$, $Q$, $I^2$, and $\text{NMS}$. **Table 5** then presents a cross-tabulation of point estimates ($r$) for specific stressor $\times$ outcome pairs (e.g., *Mental well-being* or *Low-arousal negative emotion*), but **Table 5 does not report cell-specific $k$, $95\% \text{ CI}$, or $I^2$**. In the Master Evidence Table (Lines 59, 63, 72–75), the previous author took the subgroup $r$ from Table 5 and attached the overall all-outcome $K_S$, $I^2$, and `NMS` from Table 4 as if they belonged to that specific mental health subgroup!
  3. **Incorrect Total Study Count (Line 312):** Section 7 claims the paper *"combined 611 studies representing over one million workers"*. In reality, Gerhardt et al. (2021, p. 6 & Discussion p. 9) analyzed **557 studies comprising 640 independent samples** (total $N \approx 224,702$).
* **Specific Action Required:**
  1. Remove all `NMS` figures (`29,837`, `5,509`, `143,344`, `15,305`, `466,216`, `70,354`) from the `Participants` column and narrative text; enter `"Not reported per stressor (Table 4 reports Orwin's Fail-Safe NMS, not N; total review N = 224,702 across 557 studies / 640 samples)"`.
  2. In the Master Evidence Table for Gerhardt et al. (2021), separate the Table 4 overall social stressor statistics (where $K_S$, $95\% \text{ CI}$, and $I^2$ are reported across all outcomes) from the Table 5 mental-health subgroup correlations ($r$, where cell-specific $k$, $95\% \text{ CI}$, and $I^2$ are not reported).

---

### 🔴 HIGH-RISK #4: Complete Author Hallucination on Three Major Cited Studies
* **Forensic Audit Finding:** CrossRef and PubMed verification revealed that three prominent papers in the review were attributed to completely wrong authors:

| Report Citation (Hallucinated Authors) | DOI / PMID in Report | True Authors, Title, & Journal (Verified via CrossRef / PubMed) | Nature of Error |
|---|---|---|---|
| **"Soucek, R., Paul, C., Ziegler, C., & Moser, K. (2021)"**<br>([Lines 8, 9, 59, 63, 72–75, 98, 120, 148, 153, 164, 278, 311, 420](psychosocial_risk_literature_review.md#L420)) | `10.1186/s12889-021-10894-7` | **Gerhardt, C., Semmer, N. K., Sauter, S., Walker, A., de Jong, J., Cits, ..., & Elfering, A. (2021).** *How are social stressors at work related to well-being and health? A systematic review and meta-analysis.* **BMC Public Health**, 21(1), Article 890. | **Complete author hallucination.** None of Soucek, Paul, Ziegler, or Moser are authors of this paper. |
| **"Bertrais, S., Witt, K., & Niedhammer, I. (2023)"**<br>([Lines 10, 197, 207, 319, 348](psychosocial_risk_literature_review.md#L348)) | `10.1093/eurpub/ckad118`<br>(PMID `37533280`) | **Lunen, J. C., Rugulies, R., Sørensen, J. K., Andersen, L. L., & Clausen, T. (2023).** *Exploring exposure to multiple psychosocial work factors: prospective associations with depression and sickness absence.* **European Journal of Public Health**, 33(5), **821–827** (not 824–831). | **Author conflation.** The model grafted the authors of the 2021 umbrella review (Niedhammer, Bertrais & Witt) onto the 2023 Danish cohort paper by Lunen et al. *(Note: The ORs `2.98, 3.14, 6.44, 9.62` and HRs `1.13, 1.67, 2.31, 4.04` are verified as accurate from Lunen et al. 2023).* |
| **"Lunde, L. K., et al. (2026)"**<br>([Lines 70, 129, 381](psychosocial_risk_literature_review.md#L381)) | `10.1186/s12889-026-28220-4`<br>(PMID `42414952`) | **Parent-Lamarche, A., Beauregard, N., Blanc, M.-È., Cadieux, N., & Dextras-Gauthier, J. (2026).** *Teleworking and its impact on health and well-being: a systematic review of longitudinal studies considering the psychosocial work environment (2005–2024).* **BMC Public Health**, 26(1), **Article 2717** (not 28220). Licence: **CC BY-NC-ND 4.0**. | **Author & article-number hallucination.** Lunde et al. published a 2022 telework review; the 2026 review (`PMID 42414952`) was written by Parent-Lamarche et al., is Article 2717 (`28220` is part of the internal DOI suffix), and is licensed CC BY-NC-ND 4.0. |

* **Specific Action Required:** Perform a global search-and-replace across the entire document to update `"Soucek et al. (2021)"` $\to$ **Gerhardt et al. (2021)**, `"Bertrais, Witt & Niedhammer (2023)"` $\to$ **Lunen et al. (2023)**, and `"Lunde et al. (2026)"` $\to$ **Parent-Lamarche et al. (2026)**.

---

### 🔴 HIGH-RISK #5: Ten Broken (404) or Wrong-Article DOIs and Fabricated Statistics in Cieslak (2014) and Dollard (2012)
* **Forensic Audit Finding:** Ten references in [Section 2](psychosocial_risk_literature_review.md#L18-L78) and [Section 9](psychosocial_risk_literature_review.md#L343-L439) have DOIs that either return `HTTP 404 Not Found` or resolve to completely unrelated articles (e.g., paediatric dental fluoride, child criminality, violent offenders), and two entries contain fabricated statistics:

| Ref # & Citation in Report | Claimed Journal & DOI in Report | What Claimed DOI Actually Resolves To | Verified True Citation, DOI, & Corrected Data |
|---|---|---|---|
| **Ref 1: Bamberger et al. (2012)**<br>([Line 345](psychosocial_risk_literature_review.md#L345)) | *BMC Public Health*, 12, Article 38<br>`10.1186/1471-2458-12-38` | Stenbacka et al. (2012), *"Mortality and causes of death among violent offenders and victims"* | **Occupational and Environmental Medicine**, 69(8), 592–598.<br>DOI: [`10.1136/oemed-2011-100381`](https://doi.org/10.1136/oemed-2011-100381) \| Open Access: No \| All Rights Reserved (BMJ). |
| **Ref 5: Cieslak et al. (2014)**<br>([Lines 68, 125, 357](psychosocial_risk_literature_review.md#L68)) | *Journal of Clinical Psychology*, 70(1), 75–86<br>`10.1002/jclp.22028`<br>Claimed: `r = 0.55 (0.49–0.60), k = 17, N = 3,744, I² = 80.5%` | Sheets et al. (2014), *"Personality Pathology Factors Predict Recurrent Major Depressive Disorder in Emerging Adults"* | **Psychological Services**, 11(1), 75–86.<br>DOI: [`10.1037/a0033798`](https://doi.org/10.1037/a0033798) (PMID `23937082`).<br>**True Statistics:** **$k = 41$ studies, $N = 8,256$ workers, overall weighted $r = 0.69$** ($r = 0.74$ in compassion fatigue framework; $r = 0.58$ in emotional exhaustion / PTSD-like STS framework). All numbers on Line 68 (`r=0.55, k=17, N=3,744, I²=80.5%`) were hallucinated. |
| **Ref 6: Dollard & Bakker (2010)**<br>([Line 360](psychosocial_risk_literature_review.md#L360)) | *J Occup Organ Psychol*, 15(4), 352–368<br>`10.1037/a0017920` | Oatley & Scheff (2009), *"Hierarchy and Its Discontents"*, *PsycCRITIQUES* 54(50) | **Journal of Occupational and Organizational Psychology**, 83(3), 579–599.<br>DOI: [`10.1348/096317909X470690`](https://doi.org/10.1348/096317909X470690). |
| **Ref 7: Dollard, Tuckey & Dormann (2012)**<br>([Lines 78, 170, 363](psychosocial_risk_literature_review.md#L78)) | *"Psychosocial safety climate moderates the usual work hierarchy: A study of Australian workplaces."* *Work & Stress*, 26(4), 385–404<br>`10.1080/02678373.2012.734031` | **HTTP 404 Not Found** (nonexistent paper title and DOI) | Conflates two papers:<br>1. **Bailey, T. S., Dollard, M. F., & Richards, P. A. M. (2015).** *A national standard for psychosocial safety climate (PSC): PSC 41 as the benchmark for low risk of job strain and depressive symptoms.* **Journal of Occupational Health Psychology**, 20(1), 15–26. DOI: [`10.1037/a0038166`](https://doi.org/10.1037/a0038166) (PMID `25347684`, $N = 1,081$ longitudinal + $N = 2,097$ and $1,043$ benchmark cohorts; established $\text{PSC} \le 37$ high risk and $\ge 41$ low risk).<br>2. **Dollard, M. F., Tuckey, M. R., & Dormann, C. (2012).** *Psychosocial safety climate moderates the job demand–resource interaction in predicting workgroup distress.* **Accident Analysis & Prevention**, 45, 694–704. DOI: [`10.1016/j.aap.2011.09.042`](https://doi.org/10.1016/j.aap.2011.09.042). |
| **Ref 8: Duchaine et al. (2020)**<br>([Lines 29, 366](psychosocial_risk_literature_review.md#L366)) | *"Psychosocial work factors and social inequalities in sickness absence..."* *Occup Environ Med*, 77(12), 856–866<br>`10.1136/oemed-2020-106544` | **HTTP 404 Not Found** | **Duchaine, C. S., et al. (2020).** *Psychosocial Stressors at Work and the Risk of Sickness Absence Due to a Diagnosed Mental Disorder: A Systematic Review and Meta-analysis.* **JAMA Psychiatry**, 77(8), 842–851.<br>DOI: [`10.1001/jamapsychiatry.2020.0322`](https://doi.org/10.1001/jamapsychiatry.2020.0322). |
| **Ref 9: Dzhambov & Dimitrova (2018/2019)**<br>([Lines 71, 133, 369](psychosocial_risk_literature_review.md#L369)) | *"Occupational noise exposure and the risk for depression: a systematic review and meta-analysis."* *IJERPH*, 15(7), 1358<br>`10.3390/ijerph15071358` | Jean et al. (2018), *"A Physiologically-Based Pharmacokinetic Modeling Approach... for an Optimal Fluoride Dose for Dental Health in Children"* | **Fabricated title/DOI combination.** Dzhambov & Dimitrova (2017) published on occupational noise and *work-related injury* (*Ann Work Expo Health* 61(9):1037–1053, DOI [`10.1093/annweh/wxx078`](https://doi.org/10.1093/annweh/wxx078)), while road/transportation noise & depression meta-analyses are **Dzhambov & Lercher (2019)** (*IJERPH* 16(21):4134, DOI [`10.3390/ijerph16214134`](https://doi.org/10.3390/ijerph16214134)) and **Hegewald et al. (2020)** (*IJERPH* 17(17):6171, DOI [`10.3390/ijerph17176171`](https://doi.org/10.3390/ijerph17176171)). |
| **Ref 11: Fløvik et al. (2019)**<br>([Lines 61–62, 375](psychosocial_risk_literature_review.md#L375)) | *Scand J Work Environ Health*, 45(2), 134–145<br>`10.5271/sjweh.3776` | **HTTP 404 Not Found** | True DOI is [`10.5271/sjweh.3777`](https://doi.org/10.5271/sjweh.3777) (PMID `30334062`). *(Note: All ORs extracted from Fløvik 2019—1.51, 1.46, 1.75, 1.84—are verified as exact).* |
| **Ref 12: LaMontagne et al. (2007)**<br>([Lines 212, 378](psychosocial_risk_literature_review.md#L378)) | *BMC Public Health*, 7, Article 221<br>`10.1186/1471-2458-7-221` | Engqvist & Rydelius (2007), *"Child and adolescent psychiatric patients and later criminality"* | **International Journal of Occupational and Environmental Health**, 13(3), 268–280.<br>DOI: [`10.1179/oeh.2007.13.3.268`](https://doi.org/10.1179/oeh.2007.13.3.268) \| Open Access: No \| All Rights Reserved. |
| **Ref 14: Madsen et al. (2017)**<br>([Lines 54–55, 384](psychosocial_risk_literature_review.md#L384)) | *The Lancet Psychiatry*, 4(12), 913–924 (Location: `Page 1883`)<br>`10.1016/S2215-0366(17)30408-3` | **HTTP 404 Not Found** | **Psychological Medicine**, 47(8), 1342–1356.<br>DOI: [`10.1017/S003329171600355X`](https://doi.org/10.1017/S003329171600355X) (PMC5471831, PMID `28122650`). Exact location is **Page 1348, Fig 1 & Fig 2**. |
| **Ref 27: Stansfeld & Candy (2006)**<br>([Lines 26, 40, 43, 50, 53, 423](psychosocial_risk_literature_review.md#L423)) | *Scand J Work Environ Health*, 32(6), 443–462<br>`10.5271/sjweh.1053` | Geurts & Sonnentag (2006), *"Recovery as an explanatory mechanism..."*, *SJWEH* 32(6):482–492 | True DOI is [`10.5271/sjweh.1050`](https://doi.org/10.5271/sjweh.1050). |

---

### 🔴 HIGH-RISK #6: Uncalibrated Conversion of Cross-Sectional Correlations ($r$) to Equivalent Odds Ratios ($\text{OR}$) Distorting the Hazard Weight Hierarchy
* **Locations:** [Section 1, Line 9](psychosocial_risk_literature_review.md#L9); [Section 2, Lines 57–59, 63–69, 72–75](psychosocial_risk_literature_review.md#L57-L75); [Section 6, Lines 277–278](psychosocial_risk_literature_review.md#L277-L278)
* **Forensic Audit Finding:**
  1. **Violation of Non-Inference Rule:** The user prompt instructed: *"Never estimate, round from memory, or infer a figure. Every number must come with the exact place it appears."* None of the `[equiv. OR ≈ ...]` figures in the Master Evidence Table appear in the source papers—they were computed by the model using Borenstein’s formula ($d = \frac{2r}{\sqrt{1-r^2}}$, $\text{OR} = \exp(d \cdot \pi / \sqrt{3})$).
  2. **Arithmetic Errors Within the Model’s Own Conversions:** Even when applying Borenstein’s formula, the model miscalculated several values (see Section 5 below), most notably reporting $r = 0.55 \to \text{OR} \approx 7.03$ (true Borenstein value is $\mathbf{10.90}$) and $r = 0.40 \to \text{OR} \approx 4.25$ (true value is $\mathbf{4.87}$).
  3. **Severe Epidemiological Scale Distortion (Apples-to-Oranges Comparison):** Converting bivariate Pearson correlations ($r$) from **predominantly cross-sectional, unadjusted self-report surveys** into $\text{OR}_{\text{equiv}}$ and comparing them directly against **prospective, baseline-adjusted epidemiological cohort ORs** massively inflates cross-sectional hazards:
     * In Gerhardt et al. (2021), **workplace incivility** has a cross-sectional correlation with mental well-being of $r = -0.36$ ($\text{OR}_{\text{equiv}} = 4.05$), whereas **workplace bullying** is $r = -0.31$ ($\text{OR}_{\text{equiv}} = 3.26$) and **physical violence** is $r = -0.10$ ($\text{OR}_{\text{equiv}} = 1.44$).
     * Because the report anchors Workplace Bullying at $\text{OR} = 2.82$ ($\text{weight} = 1.00$) and Violence at $\text{RR} = 1.42$ ($\text{weight} = 0.34$) from longitudinal cohorts, plugging $\text{OR}_{\text{equiv}} = 4.04$ for incivility or $\text{OR}_{\text{equiv}} = 3.38$ for role conflict directly into the weight table (Section 6, Lines 277–278) ranks **everyday incivility and role conflict higher than systematic bullying and nearly $3\times$ higher than physical assault**!
* **Specific Action Required:**
  1. Remove `[equiv. OR ≈ ...]` from the `Estimate` column of the Master Evidence Table (or move to a clearly labelled footnote as a theoretical conversion).
  2. **Bridge Calibration Method:** When assigning weights to hazards measured only via correlational meta-analyses (Role clarity, Interpersonal conflict/incivility), calibrate them using **within-review relative ratios** anchored to a common benchmark hazard in the same review:
     * In Gerhardt et al. (2021, Table 4), `Mobbing/Bullying` has $\text{Mean } r = -0.32$ ($\text{weight} = 1.00$). Relative to bullying within the same methodology:
       * `Interpersonal conflicts` ($\text{Mean } r = -0.29$) scales to $0.29 / 0.32 \times \text{Tier 2/3} \implies \text{calibrated weight} \approx \mathbf{0.45\text{--}0.55}$ (matching relational injustice $\text{OR} = 1.55\text{--}1.60$).
       * `Role stress` ($\text{Mean } r = -0.25$) scales to $\text{calibrated weight} \approx \mathbf{0.35\text{--}0.42}$ (matching high job demands $\text{OR} = 1.39\text{--}1.56$).
     * For `Sexual harassment`, use the **prospective cohort odds ratios** from Blindow et al. (2024, Table 1)—specifically Nielsen et al. (2012) $\text{OR} = 2.03$, Sterud et al. (2021) $\text{OR} = 1.64$, and Magnusson Hanson et al. (2020) suicide $\text{HR} = 2.47$—which robustly justify a high weight ($\mathbf{0.60\text{--}0.85}$, rising to $\mathbf{1.00}$ for severe/repeated harassment or sexual coercion/assault) without relying on unadjusted cross-sectional $r \to \text{OR}$ conversions.

---

## 3. Medium-Risk Findings (Statistical Table, Instrument, & Formula Corrections)

### 🟠 MEDIUM-RISK #1: Misreading Mikkelsen et al. (2021) Table 2 Column *"Clinical Interview or Questionnaire"* as *"Adjusted for Baseline Mental Health"*
* **Locations:** [Section 2, Lines 21, 36, 45, 46, 51, 56, 77](psychosocial_risk_literature_review.md#L21-L77)
* **Forensic Audit Finding:**
  In Mikkelsen et al. (2021, Table 2, p. 486), the columns under *"Methods used to diagnose depression (number of risk estimates)"* are split into: (1) *Clinical interview or questionnaire*, (2) *Antidepressant treatment*, and (3) *Hospital discharge diagnosis*. The previous author misread the first diagnostic column (*Clinical interview or questionnaire*) as the number of studies adjusted for baseline mental health, producing:
  * Line 21 (Bullying): `Yes (3/4 adjusted for baseline symptoms)` — actually `3` self-report exposure studies and `4` clinical interview/questionnaire outcomes (`1/1` adjusted for $\ge 5$ of 10 confounders).
  * Line 36 (Job insecurity): `Yes (8/9 risk estimates adjusted)` — actually `8` of `9` estimates used clinical interview/questionnaire (`2/2` adjusted for $\ge 5$ confounders).
  * Line 45 (Emotional demands): `Yes (7/13 adjusted)` — actually `7` of `13` estimates used clinical interview/questionnaire (`4/9` adjusted for $\ge 5$ confounders).
  * Line 46 (Quantitative demands): `Yes (9/22 adjusted)` — actually `9` of `22` estimates used clinical interview/questionnaire (`6/7` adjusted for $\ge 5$ confounders).
  * Line 51 (Low job control): `Yes (4/13 adjusted)` — actually `4` of `13` estimates used clinical interview/questionnaire (`2/2` adjusted for $\ge 5$ confounders).
  * Line 56 (Job strain): `Yes (5/12 adjusted)` — actually `5` of `12` estimates used clinical interview/questionnaire (`0/0` adjusted for $\ge 5$ confounders).
  * Line 77 (Long working hours): `Yes (16/14 estimates adjusted)` — an impossible fraction $> 100\%$ caused by copying `16` from the clinical interview column over `14` total risk estimates (`2/2` adjusted for $\ge 5$ confounders).
* **Specific Action Required:** Replace the `Adjusted for baseline mental health?` entries for all Mikkelsen (2021) rows with: *"Yes (Table 1: 40/54 cohort studies excluded/adjusted for baseline depression or symptoms; Table 2 confounder score $\ge 5/10$: [insert exact Table 2 fraction])"*.

---

### 🟠 MEDIUM-RISK #2: Hallucinated `AMSTAR-2: High` Rating and Fabricated `93,316` Sample Size for Mikkelsen et al. (2021)
* **Locations:** [Section 2, Lines 21, 24, 32, 33, 36, 41, 45, 46, 51, 56, 77](psychosocial_risk_literature_review.md#L21-L77)
* **Forensic Audit Finding:**
  1. Mikkelsen et al. (2021) never used or reported `AMSTAR-2`, nor was Mikkelsen et al. (2021) evaluated by Niedhammer et al. (2021).
  2. On Line 24 (Violence at work, Mikkelsen 2021), the participant count `93,316 across estimates` does not appear anywhere in Mikkelsen et al. (2021).
* **Specific Action Required:** Change `AMSTAR-2: High` to `"PRISMA; custom 10-confounder & reporting bias appraisal"` across all 11 Mikkelsen rows, and change `93,316 across estimates` on Line 24 to `"Not pooled in Table 2"`.

---

### 🟠 MEDIUM-RISK #3: Arithmetic Error in Rudkjoebing et al. (2020) Participant Sum (`74,688` vs. `98,554`) and False `NOS` Claim
* **Locations:** [Section 2, Lines 22–23](psychosocial_risk_literature_review.md#L22-L23); [Section 3.11, Line 137](psychosocial_risk_literature_review.md#L137)
* **Forensic Audit Finding:**
  1. Line 22 lists the four studies in Rudkjoebing et al. (2020, Table 1 & Fig 2): `Wieclaw 72,226; Geiger-Brown 1,198; Madsen 15,246; Dement 9,884`, and states their sum is `74,688`. Adding those four numbers yields:
     $$72,226 + 1,198 + 15,246 + 9,884 = \mathbf{98,554} \quad (\text{or } \mathbf{99,009} \text{ using Geiger-Brown Wave 1 } N = 1,643)$$
  2. Lines 22–23 state `NOS` (Newcastle-Ottawa Scale) in the `Review quality` column. Rudkjoebing et al. (2020) did not use the NOS; they used a custom 8-item completeness of reporting score (0–8) and 5-item bias score (0–5) adapted from Bonzini et al. (2007).
  3. On Line 23 (Depressive symptoms, $\text{RR} = 2.33, k = 8$), 7 of the 8 studies were cross-sectional and only 1 was prospective.
* **Specific Action Required:** Replace `74,688` with `98,554` on Lines 22 and 137; remove `NOS`; and note `7 cross-sectional, 1 cohort` on Line 23.

---

### 🟠 MEDIUM-RISK #4: Misquoted Effect Sizes from Blindow et al. (2024) and Verkuil et al. (2015)
* **Locations:** [Section 3.12, Line 149](psychosocial_risk_literature_review.md#L149); [Section 3.13, Line 152](psychosocial_risk_literature_review.md#L152)
* **Forensic Audit Finding:**
  1. **Verkuil et al. (2015) (Line 149):** The report states *"Verkuil et al. (2015, Depress Anxiety): Longitudinal bullying exposure predicted mental health problems with an OR of 2.82 (95% CI 2.21–3.59)."* In reality, Verkuil, Atasayi & Molendijk (2015) was published in **PLoS ONE** (`10(8):e0135225`, DOI `10.1371/journal.pone.0135225`)—not *Depression and Anxiety*—and pooled correlation coefficients ($r = 0.36$ cross-sectional; $r = 0.21$ longitudinal), whereas `OR 2.82 (2.21–3.59)` is Theorell et al. (2015)’s estimate repeated by mistake.
  2. **Blindow et al. (2024, Table 1) (Line 152):** Comparing Line 152 against the actual Table 1 of Blindow et al. (2024, *BMC Public Health* 24:1788):
     * **Blindow et al. (2022):** Report wrote `HR 1.31 (1.10–1.55)`; actual Table 1 values are **`HR 1.15 (95% CI 0.99–1.33)`** for once-off exposure and **`HR 1.37 (95% CI 1.12–1.67)`** for monthly–daily exposure.
     * **Sterud, Hanvold et al. (2021):** Report wrote `OR 1.63 (1.05–2.53)`; actual Table 1 value is **`OR 1.64 (95% CI 1.03–2.61)`**.
     * **Rugulies et al. (2020):** Report wrote `OR 1.87 (1.20–2.91)`; actual Table 1 values are linear regression coefficients on the MDI scale (**`b = 0.76, 95% CI -0.65 to 2.18`** for client/customer harassment; **`b = 2.54, 95% CI 0.62 to 4.46`** for workplace personnel harassment), whereas **Nielsen et al. (2012)** reported **`OR 2.03 (95% CI 1.20–3.39)`** for psychological distress in women.
     * **Magnusson Hanson et al. (2020):** Report wrote `HR 2.82 (1.49–5.34)` for completed suicide (which is the minimally adjusted estimate in the original *BMJ* paper; Blindow 2024 Table 1 reports the fully adjusted **`HR 2.47 (95% CI 1.25–4.87)`** for suicide and **`HR 1.56 (95% CI 1.18–2.05)`** for suicide attempts).
* **Specific Action Required:** Update Line 149 and Line 152 with the exact verified figures above.

---

### 🟠 MEDIUM-RISK #5: Table Cell Discrepancies in Madsen (2017), Theorell (2015), van der Molen (2020), and Stansfeld & Candy (2006)
* **Locations:** [Section 2, Lines 25–26, 30–31, 37–40, 42–44, 48–55](psychosocial_risk_literature_review.md#L25-L55)
* **Forensic Audit Finding & Required Corrections:**
  1. **Madsen et al. (2017) (Lines 54–55):**
     * Line 54 (`Published studies, k = 6`): Change `Participants = IPD-Work consortium` to **`27,461 (914 incident cases)`**.
     * Line 55 (`Unpublished IPD data, k = 14`): Change `Participants = 124,558` to **`120,221 (982 incident cases)`**. Change `Adjusted for baseline mental health? = Yes (multivariable adjusted)` to: *"Main estimate adjusted for age, sex, cohabitation, SES (RR 1.22); sensitivity analysis excluding baseline depressive symptoms yielded RR 1.25 (0.94–1.65), and adjusting for continuous baseline symptoms yielded RR 1.03 (0.81–1.32)"*.
  2. **Theorell et al. (2015) (Lines 48 & 52):**
     * Line 48 (Low decision latitude): Note that `k = 13` studies were in the meta-analysis (Fig 2a), whereas `N = 158,251` is across all `19` narrative review studies in Table 1. Also note that Theorell reported high decision latitude as protective (`OR 0.73, 95% CI 0.68–0.77`), which Niedhammer et al. (2021) inverted to `1.37 (1.30–1.47)`.
     * Line 52 (Job strain): Note that `k = 11` studies were in the meta-analysis (Fig 2b), whereas `N = 197,682` is across all `14` narrative review studies in Table 1. Also note Theorell’s 95% CI is `1.54–1.96` in the text (p. 6) and `1.53–1.96` in Niedhammer Table S1.
  3. **van der Molen et al. (2020) (Lines 25, 30, 31, 37–39, 42, 44, 49):**
     * In the column `Adjusted for baseline mental health?`, change `Yes (all cohorts controlled for baseline)` to **`Partial (9 of 17 primary studies controlled/adjusted for baseline morbidity per Table 2, Item 8)`**.
  4. **Stansfeld & Candy (2006) (Lines 26, 40, 43, 53):**
     * The `I² = 92.0%` value repeated identically across ERI, Low social support, Psychological demands, and Job strain is a transcription artifact in Niedhammer et al. (2021) Supplementary Table S1 (p. 17). Note in the table that `92.0%` is as reported in Niedhammer (2021) Table S1.

---

### 🟠 MEDIUM-RISK #6: Inaccurate Description of *People at Work (PaW)* Subscales and Risk Matrix Scoring
* **Locations:** [Section 4e, Line 224](psychosocial_risk_literature_review.md#L224); [Section 5.1, Lines 240, 242](psychosocial_risk_literature_review.md#L240-L242)
* **Forensic Audit Finding:**
  1. Line 240 claims PaW measures *traumatic events*, *remote work*, and *physical environment*. In reality, the 14 constructs measured by the *People at Work* survey are:
     * **6 Job Demands:** Role overload, Role ambiguity, Role conflict, Emotional demand, Group task conflict, Group relationship conflict.
     * **6 Job Resources:** Job control, Supervisor support, Co-worker support, Praise and recognition, Procedural justice, Change consultation.
     * **2 Harmful Behaviours:** Workplace bullying, Work-related violence/aggression.
  2. Lines 224 and 242 claim PaW categorizes hazard exposure percentages into 3 bands using the 25th and 75th percentiles. In reality, PaW calculates a composite **Job Demands score (1–7)** and a composite **Job Resources score (1–7)** and cross-tabulates them on a **2D four-quadrant risk matrix** yielding four bands (**Low Risk, Moderate Risk, Moderate-to-High Risk, High Risk**), while comparing individual subscales against Australian industry/population benchmark means.
* **Specific Action Required:** Update Section 4e and Section 5.1 to reflect the true 14 PaW constructs and its 2D Demands $\times$ Resources matrix.

---

### 🟠 MEDIUM-RISK #7: Internal Mathematical Flaw in the Proposed Scoring Equation and Band Denominator
* **Locations:** [Section 4b, Line 193](psychosocial_risk_literature_review.md#L193); [Section 4c, Line 207](psychosocial_risk_literature_review.md#L207); [Section 4d, Lines 216–220](psychosocial_risk_literature_review.md#L216-L220); [Section 4e, Lines 230–233](psychosocial_risk_literature_review.md#L230-L233)
* **Forensic Audit Finding:**
  1. **Additive Frequency + Severity Distortion (Line 193):** The formula $\text{Exposure Score} = \text{Hazard Weight} \times (\text{Frequency Multiplier} + \text{Severity Weight})$ means that if a hazard is *One-off* ($\text{Frequency} = 1.0$) and *Minor* ($\text{Severity} = 1.0$), its base weight is multiplied by $(1.0 + 1.0) = 2.0$, artificially doubling even the mildest exposure.
  2. **Unreachable Band Thresholds (Lines 230–233):** Section 4e defines the bands as percentages of the **"theoretical maximum"** (`Low: 0–25%`, `Moderate: 26–50%`, `High: 51–75%`, `Very High: >75%`). Because there are 15 hazards in the guide, the "theoretical maximum" (all 15 hazards present simultaneously, all sustained, all severe, with zero controls) is enormous. If a workplace has **severe, sustained workplace bullying AND physical violence with zero controls**, its score would only be $\sim 15\%\text{--}20\%$ of the 15-hazard theoretical maximum—meaning the calculator would output **"Low Risk"** for an actively violent, bullying workplace!
* **Specific Action Required:** Replace the scoring equations in Section 4b–4e with a self-consistent, calibrated specification:
  1. **Single-Hazard Score ($S_i$):** Normalize Frequency ($F_i \in \{0.5 \text{ one-off}, 1.0 \text{ recurring}, 1.5 \text{ sustained}\}$) and Severity ($V_i \in \{0.5 \text{ minor}, 1.0 \text{ moderate}, 1.5 \text{ serious}, 2.0 \text{ severe}\}$), combined with the Control Multiplier ($C_i \in \{1.00 \text{ none/failed}, 0.90 \text{ individual only}, 0.75 \text{ partial org}, 0.40 \text{ effective org}\}$):
     $$S_i = w_i \times \left(\frac{F_i + V_i}{2}\right) \times C_i$$
     *(With the Trauma/Assault override setting $F_i = 1.5$ automatically if $V_i \ge 1.5$ for Violence, Bullying, Sexual Harassment, Gendered Violence, or Traumatic Events).*
  2. **Composite Score ($S_{\text{total}}$) & Practical Reference Benchmark ($S_{\text{ref}}$):**
     Instead of dividing by the sum of all 15 hazards, normalize against a **Practical High-Risk Benchmark ($S_{\text{ref}} = 2.50$)** (equivalent to one unmitigated sustained severe Tier-1 hazard such as bullying [$1.00 \times 1.75 \times 1.0 = 1.75$] plus one recurring moderate Tier-2 hazard [$0.55 \times 1.0 \times 1.0 = 0.55$], or three concurrent moderate hazards with the $1.25\times$ co-exposure multiplier from Lunen et al. 2023):
     * **Low Indicative Risk:** $S_{\text{total}} < 0.60$
     * **Moderate Indicative Risk:** $0.60 \le S_{\text{total}} < 1.25$
     * **High Indicative Risk:** $1.25 \le S_{\text{total}} < 2.00$
     * **Very High Indicative Risk:** $S_{\text{total}} \ge 2.00$ *(or triggered automatically if any single interpersonal/trauma hazard has $V_i = 2.0 \text{ [Severe]}$ with $C_i \ge 0.90 \text{ [No effective org controls]}$)*.

---

## 4. Low-Risk Findings (Bibliographic, Author, Page, & Threshold Polish)

| ID | Location | Defect Identified | Specific Correction Required |
|---|---|---|---|
| **L1** | [Ref 20 (Line 402)](psychosocial_risk_literature_review.md#L402) & [Line 35](psychosocial_risk_literature_review.md#L35) | **Rönnblad et al. (2019)** author list is corrupted: first initial is given as `M.` instead of `T.` (Torkel), middle authors (`Lindegård, Bolte, Burström, Davis, Frank, Hemmingsson, Johansson, Selander`) are fabricated from other papers, and `Bodin, T.` is listed twice. | Replace author list with: **Rönnblad, T., Grönholm, E., Jonsson, J., Koranyi, I., Orellana, C., Kreshpaj, B., Chen, L., Stockfelt, L., & Bodin, T. (2019).** *(Note on Line 35: $k=2$ matches Rönnblad text p. 437 and Fig 2; Niedhammer Table S1 printed `3 studies` by mistake).* |
| **L2** | [Lines 22–23](psychosocial_risk_literature_review.md#L22-L23), [Line 136](psychosocial_risk_literature_review.md#L136), [Ref 21 (Line 405)](psychosocial_risk_literature_review.md#L405) | **Rudkjoebing et al. (2020)** author list (`Hansen ÅM, Kolstad HA`) and issue/pages (`46(2):123–138`, `Page 129`) are wrong. | Replace author list and citation with: **Rudkjoebing, L. A., Bungum, A. B., Flachs, E. M., Eller, N. H., Borritz, M., Aust, B., Rugulies, R., Rod, N. H., Biering, K., & Bonde, J. P. (2020).** *Scand J Work Environ Health*, **46(4), 339–349** (Results & Fig 2 on **pp. 342–344**). |
| **L3** | [Lines 25, 30–31, 37–39, 42, 44, 49](psychosocial_risk_literature_review.md#L25-L49), [Ref 29 (Line 429)](psychosocial_risk_literature_review.md#L429) | **van der Molen et al. (2020)** lists wrong co-authors (`Blatter, B. M., Sluiter, J. K.`) and wrong licence (`CC BY-NC 4.0`). | Replace authors with: **van der Molen, H. F., Nieuwenhuijsen, K., Frings-Dresen, M. H. W., & de Groene, G. (2020).** Change licence to **CC BY 4.0**. |
| **L4** | [Line 152](psychosocial_risk_literature_review.md#L152), [Ref 3 (Line 351)](psychosocial_risk_literature_review.md#L351), [Line 211](psychosocial_risk_literature_review.md#L211), [Ref 10 (Line 372)](psychosocial_risk_literature_review.md#L372) | **Blindow et al. (2024)** article number is `1788` (not `1792`). **Fleming (2024)** page range is `162–182` (not `150–171`). | Change `Article 1792` $\to$ `Article 1788` and `150–171` $\to$ `162–182`. |
| **L5** | [Lines 69, 355](psychosocial_risk_literature_review.md#L69) & [Lines 227, 250–251](psychosocial_risk_literature_review.md#L250-L251) | **Brewin et al. (2000)** DOI has double slash (`10.1037//0022-006x.68.5.748`). **PSC-12** Low-Risk threshold in Bailey, Dollard & Richards (2015) is $\text{PSC} \ge 41$ (not $> 41$) and Moderate-Risk is $37 < \text{PSC} < 41$ (i.e. $38\text{--}40$, not $37.1\text{--}41$). | Fix DOI to `10.1037/0022-006X.68.5.748` and update PSC-12 thresholds to: High Risk $\le 37$, Moderate Risk $37.1\text{--}40.9$ (or $38\text{--}40$), Low Risk $\ge 41$. |

---

## 5. Audit of Mathematical Calculations & Verified Weight Table

### 5.1 Verification of $\ln(\text{OR})$ Scaling (Prompt Background & Section 4c)
All natural logarithm transformations of Odds Ratios in the prompt background and in Section 4c ([Line 205](psychosocial_risk_literature_review.md#L205)) were audited and **confirmed mathematically exact**:
* $\ln(1.00) = 0.0000 \to \mathbf{0.00}$ (Exact)
* $\ln(2.98) = 1.0919 \to \mathbf{1.09}$ (Exact)
* $\ln(3.14) = 1.1442 \to \mathbf{1.14}$ (Exact)
* $\ln(6.44) = 1.8625 \to \mathbf{1.86}$ (Exact)
* $\ln(9.62) = 2.2638 \to \mathbf{2.26}$ (Exact)

### 5.2 Audit of Borenstein $r \to d \to \text{OR}$ Conversions in the Report
Using the standard conversion equations $d = \frac{2|r|}{\sqrt{1-r^2}}$ and $\text{OR} = \exp\left(d \cdot \frac{\pi}{\sqrt{3}}\right)$:

| Source & Variable | Reported $r$ | True $d$ | True $\text{OR}_{\text{equiv}}$ | Reported $\text{OR}_{\text{equiv}}$ | Audit Status |
|---|---|---|---|---|---|
| Schmidt (2014) Role ambiguity | $0.279$ | $0.581$ | $2.87$ | $2.87$ | ✅ Exact calculation |
| Schmidt (2014) Role conflict | $0.318$ | $0.671$ | $3.38$ | $3.38$ | ✅ Exact calculation |
| Willness (2007) / Sojo (2016) Harassment | $-0.280$ | $0.583$ | $2.88$ | $2.88$ | ✅ Exact calculation |
| Gerhardt (2021) Role stress | $-0.230$ | $0.473$ | $2.36$ | $2.30$ | ⚠️ Rounding error ($-0.06$) |
| Gerhardt (2021) Sexual mistreatment | $-0.200$ | $0.408$ | $2.10$ | $2.05$ | ⚠️ Rounding error ($-0.05$) |
| Sojo (2016) Sexual harassment | $-0.240$ | $0.494$ | $2.45$ | $2.42$ | ⚠️ Rounding error ($-0.03$) |
| Brewin (2000) Trauma severity | $0.230$ | $0.473$ | $2.36$ | $2.30$ | ⚠️ Rounding error ($-0.06$) |
| Brewin (2000) Lack of social support | $0.400$ | $0.873$ | $\mathbf{4.87}$ | $4.25$ | ❌ **Calculation error ($-0.62$)** |
| Cieslak (2014) Secondary trauma | $0.550$ *(false $r$; true $r=0.69$)* | $1.317$ | $\mathbf{10.90}$ | $7.03$ | ❌ **Both $r$ and $\text{OR}$ wrong** |

---

### 5.3 Audited, Ready-to-Use Master Weight Table for the Public Tool

Below is the **fully audited, corrected 15-hazard weight table** anchored on $\ln(\text{OR}_{\max}) = \ln(2.82) = 1.0367$ (Theorell et al. 2015, Workplace Bullying), with cross-sectional correlational hazards properly bridge-calibrated so they do not artificially exceed longitudinal epidemiological benchmarks:

| # | Safe Work Australia / WorkSafe Victoria Hazard | Primary Verified Anchor Source | Verified Effect Size (95% CI) | Raw $\ln(\text{Effect})$ | Audited Tool Weight ($w_i \in [0, 1]$) | Audit Confidence & Basis |
|---|---|---|---|---|---|---|
| 12 | **Bullying** | Theorell et al. (2015), Fig 2c ($k=3, N=15,173$); Mikkelsen et al. (2021), Table 2 ($k=4$) | **OR 2.82** (2.21–3.59)<br>*(Mikkelsen: OR 2.58, 1.13–5.93)* | $1.0367$ | **1.00** | **High** (Direct longitudinal OR anchor) |
| 13 | **Harassment including sexual harassment** | Blindow et al. (2024), Table 1 (Nielsen 2012; Magnusson Hanson 2020); Willness et al. (2007) ($k=41, N=69,985$) | **OR 2.03** (1.20–3.39) distress;<br>**HR 2.47** (1.25–4.87) suicide;<br>**$r = -0.28$** (-0.32 to -0.24) | $0.7080\text{--}0.9042$ | **0.75** *(1.00 with trauma/assault override)* | **High** (Prospective cohort OR/HR + meta-analytic $r$) |
| 14 | **Gendered violence** *(Victoria)* | Sojo, Wood & Genat (2016), Table 6 ($k=88, N=73,877$); Blindow et al. (2024) | **$r_c = -0.28$** (-0.32 to -0.24) gender harassment (equiv. to overt SH) | Parity with #13 | **0.75** *(1.00 with trauma/assault override)* | **High** (Empirical parity with sexual harassment in Sojo 2016) |
| 6 | **Inadequate reward and recognition (ERI)** | van der Molen et al. (2020), Table 3 ($k=6, N=76,760$); Stansfeld & Candy (2006) ($k=2$); Rugulies et al. (2017) ($k=8, N=84,963$) | **OR 1.91** (1.70–2.15) SRD;<br>**OR 1.84** (1.45–2.35) CMD;<br>**RR 1.68** (1.40–2.01) / **1.49** (1.23–1.80) | $0.5878\text{--}0.6471$ | **0.60** | **High** (Multiple convergent prospective meta-analyses) |
| 7 | **Poor organisational justice** | van der Molen et al. (2020), Table 3 ($k=5, N=64,676$); Mikkelsen et al. (2021), Table 2 ($k=4$) | **OR 1.74** (1.62–1.86) procedural;<br>**OR 1.55** (1.44–1.67) / **1.60** (1.14–2.24) relational | $0.4383\text{--}0.5539$ | **0.50** | **High** (Direct prospective meta-analysis, $I^2 = 0\%$) |
| 8 | **Traumatic events or material** | Brewin et al. (2000), Table 2 ($k=21$); Cieslak et al. (2014) ($k=41, N=8,256$) | **$r = 0.23$** (0.19–0.27) trauma severity; **$r = 0.69$** STS–burnout | Bridge-calibrated | **0.50** *(1.00 with acute critical incident override)* | **Moderate** (Correlational meta-analyses + DSM-5 PTSD criterion) |
| 15 | **Conflict or poor workplace relationships / incivility** | Gerhardt et al. (2021), Table 4 & 5 ($K_S=135$ conflict; $K_S=40$ incivility) | **$r = -0.29$** (-0.31 to -0.26) conflict;<br>**$r = -0.32$** (-0.36 to -0.29) incivility | Bridge-calibrated to #7 / #12 | **0.50** | **Moderate** (Within-study ratio vs. bullying $r = -0.32$ in Gerhardt 2021) |
| 5 | **Poor organisational change management** | Fløvik, Knardahl & Christensen (2019), Table 3 & 4 ($N=5,297$); Rönnblad et al. (2019), Fig 2 ($k=5$) | **OR 1.51** (1.12–2.03) downsizing;<br>**OR 1.75** (1.28–2.38) multiple;<br>**OR 1.61** (1.29–2.00) job insecurity | $0.4121\text{--}0.5596$ | **0.45** | **Moderate-High** (Prospective multilevel cohort + job insecurity meta-analysis) |
| 1a | **High job demands** *(incl. emotional demands)* | van der Molen et al. (2020), Table 3 ($k=8, N=41,397$); Stansfeld & Candy (2006) ($k=5$) | **OR 1.58** (1.35–1.84) emotional;<br>**OR 1.56** (1.41–1.72) high demands;<br>**OR 1.39** (1.15–1.69) CMD | $0.3293\text{--}0.4574$ | **0.42** | **High** (Direct prospective meta-analyses) |
| 4 | **Lack of role clarity** *(role ambiguity & conflict)* | Schmidt et al. (2014), Table 2 ($k=33, N=19,926$); Gerhardt et al. (2021), Table 4 ($K_S=63$) | **$r = 0.279$** (0.245–0.312) ambiguity;<br>**$r = 0.318$** (0.282–0.353) conflict;<br>**$r = -0.25$** (-0.29 to -0.21) role stress | Bridge-calibrated to #1a | **0.40** | **Moderate** (Within-study ratio in Gerhardt 2021 + Schmidt 2014) |
| 11 | **Violence and aggression** | Rudkjoebing et al. (2020), Fig 2 ($k=4, N=98,554$); Mikkelsen et al. (2021), Table 2 ($k=4$) | **RR 1.42** (1.31–1.54) clinical depression; **RR 2.33** (1.71–3.17) symptoms; **OR 1.40** (1.28–1.52) | $0.3365\text{--}0.3507$ | **0.35** *(1.00 with physical assault override)* | **High** (Register-linked prospective cohorts; acute trauma override applies) |
| 3 | **Poor support** *(supervisor & colleague)* | van der Molen et al. (2020), Table 3; Stansfeld & Candy (2006); Mikkelsen et al. (2021), Table 2 | **OR 1.41** (1.18–1.69) combined;<br>**OR 1.37** (1.07–1.74) colleague;<br>**OR 1.32** (1.21–1.44) social support | $0.2776\text{--}0.3436$ | **0.30** | **High** (Highly consistent across all 3 prospective meta-analyses) |
| 2 | **Low job control** | Theorell et al. (2015), Fig 2a ($k=13$); van der Molen et al. (2020) ($k=2$); Stansfeld & Candy (2006) ($k=3$) | **OR 1.37** (1.30–1.47) latitude;<br>**OR 1.34** (1.20–1.49) authority;<br>**OR 1.23** (1.08–1.39) CMD | $0.2070\text{--}0.3148$ | **0.28** | **High** (Direct prospective meta-analyses) |
| 1b | **Low job demands** *(underload / boredom)* | Theorell et al. (2015), Table 1 ($k=2, N=11,419$ passive job); Toscanelli et al. (2026) | **Not found** (No pooled meta-analytic OR; passive job in IPD-Work $\text{RR} \approx 1.12\text{--}1.20$) | Proxy floor | **0.18** | **Low** (Judgement floor; acts mainly via monotony/demotivation) |
| 9 | **Remote or isolated work** | Parent-Lamarche et al. (2026) ($k=20$ longitudinal cohorts) | **Not found** (Acts as contextual moderator / isolation amplifier) | Contextual amplifier | **0.20** *(or $+15\%$ amplifier on co-occurring hazards)* | **Moderate** (Systematic review shows moderation rather than main effect) |
| 10 | **Poor physical environment** | Theorell et al. (2015), Table 1; Dzhambov & Lercher (2019) | **Not found** as aggregate psychosocial OR (Noise $\text{OR} \approx 1.03\text{--}1.12$ per 10 dB) | Contextual amplifier | **0.18** *(or $+15\%$ amplifier on co-occurring hazards)* | **Moderate** (Acts as cognitive/fatigue load amplifier) |

---

## 6. Verified Reference Master Key (Drop-In Replacements for Section 9)

Replace the corrupted references in [Section 9](psychosocial_risk_literature_review.md#L343-L439) of the literature review with these verified entries:

1. **Bailey, T. S., Dollard, M. F., & Richards, P. A. M.** (2015). A national standard for psychosocial safety climate (PSC): PSC 41 as the benchmark for low risk of job strain and depressive symptoms. *Journal of Occupational Health Psychology*, 20(1), 15–26.  
   DOI: [10.1037/a0038166](https://doi.org/10.1037/a0038166) | Open Access: No | Licence: All Rights Reserved (APA). *(Replaces fabricated Ref 7 for PSC-12 benchmarks).*

2. **Bamberger, S. G., Vinding, A. L., Larsen, A., Nielsen, P., Fonager, K., Nielsen, R. N., Ryom, P., & Omland, O.** (2012). Impact of organisational change on mental health: a systematic review. *Occupational and Environmental Medicine*, 69(8), 592–598.  
   DOI: [10.1136/oemed-2011-100381](https://doi.org/10.1136/oemed-2011-100381) | Open Access: No | Licence: All Rights Reserved (BMJ). *(Fixes Ref 1).*

3. **Blindow, K. J., Cedstrand, E., Elling, D. L., Hagland, M., & Bodin, T.** (2024). Gender-based violence and harassment at work and health and occupational outcomes. A systematic review of prospective studies. *BMC Public Health*, 24(1), Article 1788.  
   DOI: [10.1186/s12889-024-19304-0](https://doi.org/10.1186/s12889-024-19304-0) | Open Access: Yes | Licence: CC BY 4.0. *(Fixes Ref 3 article number).*

4. **Brewin, C. R., Andrews, B., & Valentine, J. D.** (2000). Meta-analysis of risk factors for posttraumatic stress disorder in trauma-exposed adults. *Journal of Consulting and Clinical Psychology*, 68(5), 748–766.  
   DOI: [10.1037/0022-006X.68.5.748](https://doi.org/10.1037/0022-006X.68.5.748) | Open Access: No | Licence: All Rights Reserved (APA). *(Fixes Ref 4 DOI syntax).*

5. **Cieslak, R., Shoji, K., Douglas, A., Melville, E., Luszczynska, A., & Benight, C. C.** (2014). A meta-analysis of the relationship between job burnout and secondary traumatic stress among workers with indirect exposure to trauma. *Psychological Services*, 11(1), 75–86.  
   DOI: [10.1037/a0033798](https://doi.org/10.1037/a0033798) | Open Access: No | Licence: All Rights Reserved (APA). *(Fixes Ref 5 journal and DOI).*

6. **Dollard, M. F., & Bakker, A. B.** (2010). Psychosocial safety climate as a precursor to conducive work environments, psychological health problems, and employee engagement. *Journal of Occupational and Organizational Psychology*, 83(3), 579–599.  
   DOI: [10.1348/096317909X470690](https://doi.org/10.1348/096317909X470690) | Open Access: No | Licence: All Rights Reserved (Wiley/BPS). *(Fixes Ref 6 volume, pages, and DOI).*

7. **Dollard, M. F., Tuckey, M. R., & Dormann, C.** (2012). Psychosocial safety climate moderates the job demand–resource interaction in predicting workgroup distress. *Accident Analysis & Prevention*, 45, 694–704.  
   DOI: [10.1016/j.aap.2011.09.042](https://doi.org/10.1016/j.aap.2011.09.042) | Open Access: No | Licence: All Rights Reserved (Elsevier). *(Fixes Ref 7 title, journal, and DOI).*

8. **Duchaine, C. S., Aubé, K., Gilbert-Ouimet, M., Vézina, M., Ndjaboué, R., Massamba, V., Talbot, D., Lavigne-Robichaud, M., Trudel, X., Pena-Gralle, A.-P. B., Lesage, A., Moore, L., Sultan-Taïeb, H., St-Hilaire, F., & Brisson, C.** (2020). Psychosocial stressors at work and the risk of sickness absence due to a diagnosed mental disorder: a systematic review and meta-analysis. *JAMA Psychiatry*, 77(8), 842–851.  
   DOI: [10.1001/jamapsychiatry.2020.0322](https://doi.org/10.1001/jamapsychiatry.2020.0322) | Open Access: Yes (PMC7113835) | Licence: All Rights Reserved (AMA). *(Fixes Ref 8 title, journal, and DOI).*

9. **Dzhambov, A. M., & Lercher, P.** (2019). Road traffic noise exposure and depression/anxiety: An updated systematic review and meta-analysis. *International Journal of Environmental Research and Public Health*, 16(21), Article 4134.  
   DOI: [10.3390/ijerph16214134](https://doi.org/10.3390/ijerph16214134) | Open Access: Yes | Licence: CC BY 4.0. *(Replaces corrupted Ref 9).*

10. **Fleming, W. J.** (2024). Employee well-being outcomes from individual-level mental health interventions: Cross-sectional evidence from the United Kingdom. *Industrial Relations Journal*, 55(2), 162–182.  
    DOI: [10.1111/irj.12418](https://doi.org/10.1111/irj.12418) | Open Access: Yes | Licence: CC BY 4.0. *(Fixes Ref 10 page numbers).*

11. **Fløvik, L., Knardahl, S., & Christensen, J. O.** (2019). Organizational change and employee mental health: A prospective multilevel study of the associations between organizational changes and clinically relevant mental distress. *Scandinavian Journal of Work, Environment & Health*, 45(2), 134–145.  
    DOI: [10.5271/sjweh.3777](https://doi.org/10.5271/sjweh.3777) | Open Access: Yes | Licence: CC BY 4.0. *(Fixes Ref 11 DOI).*

12. **Gerhardt, C., Semmer, N. K., Sauter, S., Walker, A., de Jong, J., Cits, ..., & Elfering, A.** (2021). How are social stressors at work related to well-being and health? A systematic review and meta-analysis. *BMC Public Health*, 21(1), Article 890.  
    DOI: [10.1186/s12889-021-10894-7](https://doi.org/10.1186/s12889-021-10894-7) | Open Access: Yes | Licence: CC BY 4.0. *(Fixes Ref 26 hallucinated authors "Soucek et al.").*

13. **LaMontagne, A. D., Keegel, T., Louie, A. M., Ostry, A., & Landsbergis, P. A.** (2007). A systematic review of the job-stress intervention evaluation literature, 1990–2005. *International Journal of Occupational and Environmental Health*, 13(3), 268–280.  
    DOI: [10.1179/oeh.2007.13.3.268](https://doi.org/10.1179/oeh.2007.13.3.268) | Open Access: No | Licence: All Rights Reserved (Taylor & Francis). *(Fixes Ref 12 journal and DOI).*

14. **Lunen, J. C., Rugulies, R., Sørensen, J. K., Andersen, L. L., & Clausen, T.** (2023). Exploring exposure to multiple psychosocial work factors: prospective associations with depression and sickness absence. *European Journal of Public Health*, 33(5), 821–827.  
    DOI: [10.1093/eurpub/ckad118](https://doi.org/10.1093/eurpub/ckad118) | Open Access: Yes | Licence: CC BY 4.0. *(Fixes Ref 2 hallucinated authors "Bertrais, Witt & Niedhammer" and pages).*

15. **Madsen, I. E. H., Nyberg, S. T., Magnusson Hanson, L. L., Ferrie, J. E., Ahola, K., Alfredsson, L., Batty, G. D., Bjorner, J. B., Borritz, M., Burr, H., Chastang, J.-F., de Graaf, R., Dragano, N., Hamer, M., Jokela, M., Knutsson, A., Koskenvuo, M., Koskinen, A., Leineweber, C., ... Kivimäki, M.** (2017). Job strain as a risk factor for clinical depression: systematic review and meta-analysis with additional individual participant data. *Psychological Medicine*, 47(8), 1342–1356.  
    DOI: [10.1017/S003329171600355X](https://doi.org/10.1017/S003329171600355X) | Open Access: Yes (PMC5471831) | Licence: CC BY 4.0. *(Fixes Ref 14 journal, volume, pages, and DOI).*

16. **Parent-Lamarche, A., Beauregard, N., Blanc, M.-È., Cadieux, N., & Dextras-Gauthier, J.** (2026). Teleworking and its impact on health and well-being: a systematic review of longitudinal studies considering the psychosocial work environment (2005–2024). *BMC Public Health*, 26(1), Article 2717.  
    DOI: [10.1186/s12889-026-28220-4](https://doi.org/10.1186/s12889-026-28220-4) | Open Access: Yes | Licence: CC BY-NC-ND 4.0. *(Fixes Ref 13 hallucinated authors "Lunde et al.", article number, and licence).*

17. **Rönnblad, T., Grönholm, E., Jonsson, J., Koranyi, I., Orellana, C., Kreshpaj, B., Chen, L., Stockfelt, L., & Bodin, T.** (2019). Precarious employment and mental health: a systematic review and meta-analysis of longitudinal studies. *Scandinavian Journal of Work, Environment & Health*, 45(5), 429–443.  
    DOI: [10.5271/sjweh.3797](https://doi.org/10.5271/sjweh.3797) | Open Access: Yes | Licence: CC BY 4.0. *(Fixes Ref 20 author list).*

18. **Rudkjoebing, L. A., Bungum, A. B., Flachs, E. M., Eller, N. H., Borritz, M., Aust, B., Rugulies, R., Rod, N. H., Biering, K., & Bonde, J. P.** (2020). Work-related exposure to violence or threats and risk of mental disorders and symptoms: a systematic review and meta-analysis. *Scandinavian Journal of Work, Environment & Health*, 46(4), 339–349.  
    DOI: [10.5271/sjweh.3877](https://doi.org/10.5271/sjweh.3877) | Open Access: Yes | Licence: CC BY 4.0. *(Fixes Ref 21 author list, issue, and pages).*

19. **Stansfeld, S., & Candy, B.** (2006). Psychosocial work environment and mental health—a meta-analytic review. *Scandinavian Journal of Work, Environment & Health*, 32(6), 443–462.  
    DOI: [10.5271/sjweh.1050](https://doi.org/10.5271/sjweh.1050) | Open Access: Yes | Licence: CC BY 4.0. *(Fixes Ref 27 DOI).*

20. **van der Molen, H. F., Nieuwenhuijsen, K., Frings-Dresen, M. H. W., & de Groene, G.** (2020). Work-related psychosocial risk factors for stress-related mental disorders: an updated systematic review and meta-analysis. *BMJ Open*, 10(7), Article e034849.  
    DOI: [10.1136/bmjopen-2019-034849](https://doi.org/10.1136/bmjopen-2019-034849) | Open Access: Yes | Licence: CC BY 4.0. *(Fixes Ref 29 co-authors and licence).*

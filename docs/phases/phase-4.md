# Phase 4: evidence audit

Date: 2026-10-23

## Goal

Extract every factor and weight from the Psychological Risk Model, trace each to the research, record pooled estimates with confidence intervals and their source tables, mark gaps, flag weights that look off and propose corrections, without changing the Risk Model. Stop for the owner's review before any scoring is built.

## What was done

- **Source filed:** the live Risk Model (downloaded 2026-10-23) saved as `reference/risk-model/index.html`, the version audited. The owner's older copy (`injury-risk-widget-9.html`) moved to `reference/risk-model/history/`. Scoring logic is identical in both. See `reference/risk-model/README.md`.
- **Read block lifted** on `reference/` at the owner's OK (`.claude/settings.json`), except PDFs, which stay blocked.
- **Papers read** (all open access or free from the journal; copies kept outside the repo):
  - Stansfeld & Candy 2006, Table 1 (p. 448).
  - Niedhammer, Bertrais & Witt 2021, Results text and supplementary table S1.
  - Mikkelsen et al 2021, Table 2.
- **`EVIDENCE_REGISTER.md` rewritten:** how the Risk Model really scores, an 18-row factor table, flagged weights with proposed corrections, a mapping of every guide hazard to the evidence for Phase 5, two derived weight sets, full citations with table numbers, and expanded limitations.
- **`research/notes/derive_weights.py`:** reproduces every derived weight from the typed-in estimates.

## Report

### What the Risk Model actually does

1. **No factor has its own weight.** All 18 factors move the score by the same amount within their pillar. The evidence ranges from bullying (strongest) to job strain or low control (weakest, depending on the review).
2. **The on-screen note overstates the method.** It says weights are derived from meta-analytic effect sizes (Niedhammer 2021; Stansfeld & Candy 2006). No effect sizes appear in the code. The pillar weights (0.30 / 0.35 / 0.35), cascade weights (0.85 / 0.15; 0.80 / 0.15 / 0.05) and band cut-offs (3 / 5 / 7) have no source: all `GAP`.
3. **Individual factors drive 28% of the score.** None of the six is a work exposure, the reviews treat things like prior mental ill health as confounders rather than causes, and the new guide's brief says individual factors must never move the rating.
4. **Protective factors are scored as mirror images of risks.** The research measures the risk end (low support, injustice), not the protective end.
5. **One factor bundles three hazards** ("bullying, harassment or conflict"); only bullying has an estimate.

### Evidence found

9 of the 18 Risk Model factors map to a measured exposure. The other 9 are `GAP` (6 individual factors, leadership commitment, early intervention, role clarity). Two more are proxies (organisational change via job insecurity; blame culture via relational injustice).

For the guide's hazard library: 8 hazards have direct evidence (job demands, low control, poor support, reward and recognition, organisational justice, violence, bullying, and the job demands plus low control combination), 2 have proxies (change management, traumatic events), and 7 are `GAP` (low job demands, role clarity, remote or isolated work, physical environment, harassment including sexual harassment, gendered violence, conflict).

### Sources disagree, so the choice matters

| Exposure | Option A: Mikkelsen 2021 | Option B: best per exposure |
|---|---|---|
| Bullying | 2.58 → weight 1.00 | 2.82 → 1.00 |
| Effort-reward imbalance | 1.53 → 0.45 | 1.84 → 0.59 |
| Job strain | 1.14 → 0.14 | 1.82 → 0.58 |
| Job insecurity | 1.35 → 0.32 | 1.61 → 0.46 |
| Violence | 1.40 → 0.36 | 1.42 → 0.34 |
| Demands | 1.08 → 0.08 (not significant) | 1.39 → 0.32 |

**Recommendation: Option A as the primary weights**, with Option B shown on the Resources page as a sensitivity check. Option A uses one review, one outcome and one method for every exposure, so the weights are comparable; it is the most recent; it covers justice and emotional demands, which Option B lacks; and it is cautious about bias, which suits an indicative tool. The trade-off: it rates job demands and low control weakly, which some practitioners will find counter-intuitive, so the Resources page must explain why.

## Papers and tables for the owner to check

Figures already typed in from the sources (please spot-check):

1. Stansfeld & Candy 2006, **Table 1, p. 448**: all seven odds ratios.
2. Mikkelsen et al 2021, **Table 2**: all 18 summary estimates and precision ratings.
3. Niedhammer et al 2021, **supplementary table S1**: rows for Theorell 2015 (ref 69), Madsen 2017 (ref 51), Rugulies 2017 (ref 63), Rönnblad 2019 (ref 61), Rudkjoebing 2020 (ref 62), Aronsson 2017 (ref 15); and the **Results text for Figure 7** (Virtanen 2018, long hours 1.14).

Still to find (needed to close gaps):

4. Schmidt, Roesler, Kusserow & Rau 2014, *European Journal of Work and Organizational Psychology* 23(1):91–106: pooled estimates for **role ambiguity and role conflict** with depression.
5. Virtanen et al 2018, *Scand J Work Environ Health* 44(3):239–250: confirm the **DOI**.
6. A meta-analysis for **sexual harassment** and mental health outcomes.
7. A meta-analysis for **work-related traumatic exposure** (not violence) and PTSD or depression.
8. Any pooled estimates for **remote or isolated work**, **physical work environment**, **low job demands (underload)**, or **psychosocial safety climate / leadership commitment**.
9. The framework papers (Karasek 1979; Johnson & Hall 1988; Siegrist 1996): confirm citations.

## Decisions needed before Phase 5

1. **Weight set:** Option A (recommended), Option B, or something else.
2. **Hazards with no evidence (7 in the guide):** give them a neutral judgement weight, clearly labelled as judgement (recommended, so harassment and gendered violence still count), or leave them out of the score.
3. **Other score inputs** (frequency, severity, hazards combining, existing controls) have no pooled estimates. Phase 5 will propose simple, labelled judgement rules for them. OK to proceed on that basis?
4. **The Risk Model itself** (separate project, not changed here): whether to update its on-screen note and scoring later in line with this audit.

## Deferred

- Any scoring (Phase 5, after review).
- The Resources page that publishes this register (Phase 6).

## TODO-VERIFY / TO-CHECK added

All in `EVIDENCE_REGISTER.md`: the candidate sources above, framework citations, Virtanen 2018 DOI.

## How to review

1. Read the report above, then the "Risk Model audit" and "Guide hazards mapped to evidence" sections of `EVIDENCE_REGISTER.md`.
2. Optional: run `python research/notes/derive_weights.py` to reproduce the weights.
3. Answer the four decisions.

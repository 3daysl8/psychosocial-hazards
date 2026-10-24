# How the indicative risk rating works

The Guide's "Understanding the risk" page ends with an **indicative** risk rating. This page sets out exactly how it's worked out, so anyone can check it, disagree with it, or change it.

Rules and wording: `site/js/data/scoring.js`. Arithmetic: `site/js/lib/score.js`. Evidence rows: `EVIDENCE_REGISTER.md`, "Guide rating rules" (G1 to G5).

## What it is and isn't

- It's a structured summary of the user's own answers, organised the way the Safe Work Australia Model Code asks hazards to be assessed: duration and frequency, severity, how hazards combine, and how well controls work (Code s 4.2; risk register, Appendix C).
- It **isn't** a probability of injury, a diagnosis, or a finding about legal compliance. No source examined validates numerical hazard weights, control discounts, interaction multipliers or band cut-offs (see `research/assessing-psychosocial-hazards-review.md`). Every rule below is **judgement**, chosen to be simple and visible.
- Individual circumstances are never read. Only work-related answers count.

## Inputs (all per hazard)

| Input | Answer key | Options |
|---|---|---|
| Hazards present | `risk.hazards` | Hazard ids from the jurisdiction's list |
| How often, how long | `risk.hazards.<id>.frequency` | one-off, recurring, sustained |
| How serious the harm could be | `risk.hazards.<id>.severity` | minor, moderate, serious, severe |
| How well controls work for this hazard (optional) | `risk.hazards.<id>.controls` | none, failing, partial, working |
| How well controls work overall (fallback) | `risk.controls.effectiveness` | same options |

A hazard needs both frequency and severity to be rated. If its own controls answer is missing, the overall controls answer is used; if both are missing, no controls adjustment is made.

## Rules

**G1. Starting rating** (severity × how often):

| Severity \ How often | One-off | Recurring | Sustained |
|---|---|---|---|
| Minor | Low | Low | Moderate |
| Moderate | Low | Moderate | High |
| Serious | Moderate | High | Very high |
| Severe | High | Very high | Very high |

A severe one-off event starts at High, because a single severe exposure can cause harm on its own (Code s 4.2).

**G2. Controls adjustment** (steps along Low → Moderate → High → Very high):

- Nothing in place, or in place but not working: up one band (capped at Very high).
- Partly working: no change.
- Working well: down one band (no lower than Low).
- Not answered: no change.

**G3. Severe floor.** Working controls can't take a severe hazard below Moderate.

**G4. Combination flag.** If 2 or more hazards are rated Moderate or above, a note asks the user to look at them together (Code s 4.2: consider hazards collectively). The flag never changes a rating. Lunen et al. (2023) found the odds of probable depression rose with the number of adverse work factors, but no study supplies a multiplier.

**G5. Overall result.** The highest single hazard rating. Nothing is averaged, so a serious hazard can't be hidden by several mild ones. The panel names the hazard(s) that set it.

## What the panel shows

- The overall band on a four-band scale, labelled "Indicative".
- Which hazard(s) drove it.
- A table of every selected hazard with its answers and rating.
- The combination flag, when it applies.
- A reminder that the duty to eliminate or minimise the risk applies whatever the band.
- What the rating can't tell you.
- An expandable "How this score works" panel with these rules.

## Why no weights

Earlier drafts proposed hazard weights from meta-analyses (Phase 4). After the evidence was audited twice and arbitrated, the owner chose per-hazard rating instead (decision recorded in `docs/phases/phase-4.md`, 24 October 2026). The research shows these hazards are associated with poorer mental health; it doesn't support ranking them against each other with numbers for a workplace assessment.

## Changing the rules

Edit `site/js/data/scoring.js`. The page, the table and the "How this score works" panel all read from it. Update the matching G row in `EVIDENCE_REGISTER.md` and this file at the same time.

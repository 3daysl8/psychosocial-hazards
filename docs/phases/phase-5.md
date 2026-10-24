# Phase 5: indicative risk rating

Date: 2026-10-24

## Goal

Replace the score placeholder at the end of "Understanding the risk" with a working indicative rating and a "How this score works" panel, using the approach the owner chose after the evidence review: per-hazard rating, no weights.

## What was built

- **Per-hazard controls question** (`site/js/data/risk.js`): each selected hazard now asks how well its controls are working, next to how often and how serious. Optional. The existing "Controls already in place" answer is the fallback (relabelled "How well are they working overall?").
- **Rating rules** (`site/js/data/scoring.js`): bands, the severity × frequency table, controls steps, the severe floor, the combination flag and all panel wording. Each rule names its `EVIDENCE_REGISTER.md` row (G1 to G5) and is labelled judgement.
- **Rating logic** (`site/js/lib/score.js`): rates each hazard, finds the highest, names the hazard(s) that set it, counts unrated hazards, and decides whether to show the combination flag. Never reads the individual circumstances notes.
- **Score panel** (`score` block in `site/js/views/flow.js`): live overall band on the four-band scale, "Driven by", per-hazard table, combination flag, duty reminder, what the rating can't tell you, and an expandable "How this score works" panel that draws the rules table from the data file. It redraws on every answer change and keeps the panel open while it does.
- **State** (`site/js/lib/state.js`): `onAnswer('*', fn)` listens to any answer, so the panel can update live.
- **CSS:** score table styles; the mobile layout column can now shrink (`minmax(0, 1fr)`), which fixed sideways scrolling at 390px caused by the new tables.
- **Docs:** `docs/scoring-method.md` (full method), register rows G1 to G5 with a new `JUDGEMENT` status.
- Version 0.5.0, content date 24 October 2026.

## The rules (all judgement)

| Severity \ How often | One-off | Recurring | Sustained |
|---|---|---|---|
| Minor | Low | Low | Moderate |
| Moderate | Low | Moderate | High |
| Serious | Moderate | High | Very high |
| Severe | High | Very high | Very high |

Controls: nothing in place or not working +1 band; partly working no change; working well −1 band; a severe hazard never below Moderate. Overall = highest hazard. Flag when 2+ hazards are Moderate or above; the flag changes nothing.

## Decisions and why

- **No weights** (owner, 24 Oct 2026): no source examined validates weights, discounts, multipliers or cut-offs. See `research/assessing-psychosocial-hazards-review.md`.
- **Highest hazard, not an average,** so one serious hazard can't be diluted (arbitration finding M7).
- **Controls per hazard,** because the Code's risk register records control effectiveness per hazard (Appendix C). The overall answer stays as a fallback so earlier answers still count.
- **Steps, not percentages,** for controls. The report's 10/25/60% discounts had no source.
- **Combination is a flag, not a multiplier.** Lunen 2023 shows risk rising with the number of exposures but doesn't supply a factor.

## Tested

- All 60 combinations of severity × frequency × controls (including not answered) checked in Node against the table; edge cases (cap, floor, missing answers, fallback controls, combination count) pass.
- In the browser (local server, agent-browser): panel updates live, "Driven by" and the table are right, the "How this score works" panel stays open while answers change, no console errors. Desktop and 390px checked; no sideways scroll.

## Not done / next

- The "Full method and sources" link points to `docs/scoring-method.md` on GitHub until the Resources page exists (Phase 6).
- Decision 4 (updating the Risk Model) is still open; separate project.

# Deep research brief: evidence for an indicative psychosocial risk score

Paste everything below the line into Gemini Deep Research. Save the report it produces as `research/notes/gemini-deep-research-report.md` so Claude can review it.

---

## Your task

Do a deep literature review to strengthen the evidence behind an **indicative psychosocial risk score** in a free, public, browser-based guide for HR practitioners and Health and Safety Representatives in Australia. Use Google Scholar, PubMed, Europe PMC, Scopus-indexed journals, Cochrane, and Australian regulator publications. Produce a structured report (format at the end) that another analyst will check figure by figure before anything is used.

**Accuracy matters more than coverage.** Never estimate, round from memory, or infer a figure. Every number must come with the exact place it appears (table, figure, page or supplementary file). If you can't find something, write "Not found" and say what you searched. Distinguish odds ratios, relative risks and hazard ratios. Distinguish meta-analyses from single studies. Flag any journal you suspect is predatory.

## Background

The guide asks the user which psychosocial hazards are present, then, for each hazard, how often/how long (one-off, recurring, sustained) and how serious the potential harm is (minor, moderate, serious, severe). It also asks how well existing controls are working (nothing in place, in place but not working, partly working, working well) and counts how many hazards combine. The output is a band (Low, Moderate, High, Very high), always labelled "Indicative", never a determination. Only work-related factors are scored; individual circumstances (personal resilience, health history, life outside work) are deliberately excluded because the legal duty sits with how work is designed and managed.

Current method for hazard weights: take a pooled effect size for a mental health outcome, convert to ln(OR), and scale so the strongest effect = 1.0. Two candidate weight sets exist:

| Exposure | Option A: Mikkelsen et al 2021 (Eur J Epidemiol 36(5):479-496, Table 2), depressive episodes | Option B: best available per exposure |
|---|---|---|
| Bullying | 2.58 (1.13-5.93) → 1.00 | 2.82 (2.21-3.59), depressive symptoms, Theorell 2015 → 1.00 |
| Relational injustice | 1.60 (1.14-2.24) → 0.50 | none |
| Effort-reward imbalance | 1.53 (1.21-1.92) → 0.45 | 1.84 (1.45-2.35), CMD, Stansfeld & Candy 2006 → 0.59 |
| Violence | 1.40 (1.28-1.52) → 0.36 | 1.42 (1.31-1.54), depression, Rudkjoebing 2020 → 0.34 |
| Low support, colleagues | 1.37 (1.07-1.74) → 0.33 | Low social support 1.32 (1.21-1.44), CMD, Stansfeld & Candy → 0.27 |
| Job insecurity | 1.35 (1.21-1.50) → 0.32 | 1.61 (1.29-2.00), depressive symptoms, Rönnblad 2019 → 0.46 |
| Procedural injustice | 1.23 (1.02-1.47) → 0.22 | none |
| Emotional demands | 1.21 (1.08-1.36) → 0.20 | none |
| Job strain | 1.14 (1.05-1.25) → 0.14 | 1.82 (1.06-3.10), CMD, Stansfeld & Candy → 0.58 |
| Demands / work load | 1.08 (0.98-1.19) and 1.24 (0.95-1.61), both CIs include 1 | Psychological demands 1.39 (1.15-1.69), CMD → 0.32 |
| Low control | 1.07 (1.01-1.13) → 0.07 | Low decision latitude 1.23 (1.08-1.39), CMD → 0.20 |
| Long working hours | 1.07 (0.98-1.18), CI includes 1 | 1.14 (1.03-1.25), depressive symptoms, Virtanen 2018 → 0.13 |

Already read, no need to re-summarise unless you find errors: Stansfeld & Candy 2006 (Scand J Work Environ Health 32(6):443-462); Niedhammer, Bertrais & Witt 2021 (Scand J Work Environ Health 47(7):489-508) and its supplementary table S1; Mikkelsen et al 2021.

The guide's hazards follow the Safe Work Australia Model Code of Practice: Managing psychosocial hazards at work (2022, 14 hazards) and WorkSafe Victoria's Compliance Code: Psychological health (16 hazards):

1. Job demands (Victoria splits into high job demands and **low job demands**)
2. Low job control
3. Poor support
4. Lack of role clarity
5. Poor organisational change management
6. Inadequate reward and recognition
7. Poor organisational justice
8. Traumatic events or material
9. Remote or isolated work
10. Poor physical environment
11. Violence and aggression
12. Bullying
13. Harassment including sexual harassment (Victoria: sexual harassment)
14. Gendered violence (Victoria only)
15. Conflict or poor workplace relationships and interactions

## Research questions

### Part 1: pooled estimates for every hazard

For each of the 15 hazards above, find the best available **meta-analyses or umbrella reviews** linking the work exposure to mental health outcomes. Priority outcomes, in order: depressive disorder or episodes; common mental disorders; anxiety; PTSD (especially for traumatic events and violence); then burnout, sickness absence for mental disorders, or psychological injury claims as secondary outcomes. Prefer longitudinal designs and reviews published 2010 to 2026. Include individual-participant-data analyses (for example IPD-Work).

Highest priority, because there is currently **no pooled estimate**:
- Low job demands / underload / boredom
- Role ambiguity and role conflict (start with Schmidt, Roesler, Kusserow & Rau 2014, Eur J Work Organ Psychol 23(1):91-106)
- Sexual harassment at work
- Gender-based harassment / gendered violence at work
- Work-related traumatic exposure other than violence (critical incidents, vicarious or secondary trauma, distressing material)
- Remote, isolated or lone work
- Physical work environment (noise, heat, poor air, crowding, poor amenities) as a psychosocial hazard
- Interpersonal conflict and incivility at work
- Poorly managed organisational change and restructuring (directly, not only via job insecurity)
- Psychosocial safety climate / leadership commitment to psychological health (for example Dollard and colleagues)

Also look for anything **published after 2021** that updates the existing estimates (job strain, effort-reward imbalance, bullying, violence, support, job insecurity, justice, emotional demands, long hours), and explain why estimates for the same exposure differ between reviews (outcome definition, design, adjustment for baseline mental health, common-method bias).

### Part 2: the other score inputs

a. **Frequency and duration.** Is there dose-response evidence (for example bullying frequency, cumulative or repeated job strain, duration of exposure)? Can it justify relative multipliers for one-off, recurring and sustained exposure? Note that single severe events (assault, traumatic incidents) can cause serious harm alone.

b. **Severity of potential harm.** How do recognised frameworks handle severity for psychological harm: ISO 45003:2021, ISO 31000 risk matrices, the UK HSE Management Standards, People at Work (Australia), COPSOQ, PRIMA-EF, and Safe Work Australia or WorkSafe Victoria guidance? Is there any evidence-based way to combine likelihood and severity for psychosocial risk?

c. **Hazards combining.** What is the evidence that multiple psychosocial exposures combine additively, multiplicatively, or with diminishing returns? Look for studies of combined models (for example job strain plus effort-reward imbalance), cumulative exposure counts, and interaction effects. Quantify where possible.

d. **Existing controls.** What do intervention meta-analyses say about the relative effectiveness of organisation-level controls (work redesign, staffing, job control, workload) versus individual-level ones (EAP, resilience or stress-management training)? Is there evidence to justify how much "controls in place and working" should reduce an indicative rating, and that individual supports alone should reduce it little?

e. **Band thresholds.** How do validated tools set low, moderate and high cut-offs: People at Work, the HSE Indicator Tool benchmarks, COPSOQ traffic lights, the PSC-12 thresholds? Could any approach be adapted for a four-band indicative score?

### Part 3: Australian instruments and reuse

Describe People at Work, PSC-12 and any other Australian-validated psychosocial risk instruments: what they measure, how they score, their validation evidence, and their **licence or terms of reuse**.

### Part 4: method critique

- Is ln(OR) scaled to the strongest effect a reasonable way to weight hazards? Compare alternatives: relative risks used directly, population attributable fractions, weighting by GRADE certainty or precision, or equal weights with evidence used only to rank.
- How should hazards with no pooled estimate be handled in an indicative tool?
- Is there support in the literature or Australian regulator guidance for excluding individual factors from a workplace risk rating?

## Output format

Write the report in Markdown with these sections, in this order:

1. **Executive summary** (under 400 words): the main findings and your recommended changes to the weights and score inputs, each with a confidence rating (high, moderate, low).

2. **Master evidence table**, one row per exposure-outcome estimate, with exactly these columns:

   `Hazard (guide name) | Exposure as measured | Outcome | Estimate type (OR/RR/HR) | Estimate | 95% CI | Studies (k) | Participants | Design of primary studies | Adjusted for baseline mental health? | Heterogeneity (I²) | Review quality (tool and rating, if reported) | Exact location (table/figure/page) | Full citation | DOI | Open access? | Licence`

   Use "Not found" rather than leaving a hazard out.

3. **Findings by hazard**: a short section for each of the 15 hazards, including what was searched when nothing was found.

4. **Score inputs** (Part 2 a to e): evidence, and a concrete suggestion for each input, clearly marked as either evidence-based or judgement.

5. **Australian instruments and reuse** (Part 3).

6. **Method critique** (Part 4).

7. **Plain-English summaries**: for each key paper you'd recommend citing, 2 to 3 sentences in your own words (not copied from the abstract) suitable for a public "Resources" page, saying what was studied and what was found.

8. **Limitations and conflicts in the evidence.**

9. **Full reference list**: every source with full citation, DOI, open-access status and licence (for example CC BY 4.0, CC BY-NC, all rights reserved).

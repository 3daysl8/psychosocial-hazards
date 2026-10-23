# Phase 3: understanding the risk and investigating systemic factors

Date: 2026-10-23

## Goal

Two guided sections, with answers held in memory only: understanding the risk (objective information, accounts, consultation, exposure, existing controls, ending where the indicative score will go) and investigating the systemic conditions that allowed harm to occur.

## What was built

- **Understanding the risk** (`site/js/data/risk.js`, `#/risk`):
  1. Which hazards are present: a checklist of the selected jurisdiction's hazards (16 for Victoria, 14 for Model WHS), with a link to the library.
  2. How often, how long and how serious: one frequency question (one-off, recurring, sustained) and one severity question (minor, moderate, serious, severe) for each selected hazard. A note appears when hazards combine.
  3. Objective information: checklist of 12 record types (from WorkSafe's identification tool, step 1) and notes.
  4. What workers and others have said: two free-text records, with an HR note on handling accounts that differ.
  5. Consulting workers and HSRs: jurisdiction-specific explanation (Victoria from the WorkSafe FAQ; Model WHS flagged TODO-VERIFY), a consultation checklist, and an HSR note (Victoria: information access per WorkSafe FAQ).
  6. Controls already in place: description and an effectiveness rating (nothing in place, not working, partly working, working well), with a note that EAP and counselling don't count as controlling the risk.
  7. Individual circumstances (not scored): notes to inform support, stated plainly as never affecting the rating.
  8. Indicative risk score: placeholder panel until Phase 5.
- **Investigating systemic factors** (`site/js/data/investigation.js`, `#/investigate`): framed as "what conditions allowed this harm to occur, not who did what". Prompts and notes for work design, supervisor and manager capability, reporting systems, and culture and environment (with a "harmful behaviour as a symptom" panel from the SWA health care Code), then a findings summary that carries forward to controls.
- Nav, step indicator, home page and version (0.4.0) updated. The triage "Continue" button now goes to Understanding the risk.
- **Printable resource draft:** `resources/templates/investigation-record.md`.

## Decisions and why

- **Exposure is rated per hazard**, because the brief's score inputs (frequency, duration, severity, hazards combining) differ between hazards. The option ids in `risk.js` are fixed so the Phase 5 weights can refer to them.
- **Frequency and duration are one question** (one-off, recurring, sustained), matching the brief's own wording.
- **Severity is "how serious could the harm be"**, so a one-off assault is rated on its potential, not just its outcome.
- **Hazards not listed for the selected jurisdiction drop out** of the exposure questions when switching jurisdiction; their answers are kept in memory if the user switches back.
- **Individual circumstances are collected separately** and labelled "not scored", per the brief.
- **Investigation is prompts plus notes, not scored**, to keep the focus on conditions rather than blame.
- **Score placeholder, not a guess.** No scoring until the Phase 4 evidence audit is reviewed.

## Deferred

- Indicative score (Phase 5, after the Phase 4 audit).
- Controls, review and the printable summary of answers (Phase 7).

## TODO-VERIFY added

`site/js/data/risk.js`: Model WHS consultation duties and when HSRs must be involved; Model WHS HSR rights to information and consultation.

## How to test

1. Open `site/index.html` with Live Server. Go to **Understanding the risk**.
2. Tick two or more hazards: a rating card appears for each, plus a note about hazards combining. Rate one.
3. Switch jurisdiction: the hazard list changes (16 vs 14). A Victoria-only hazard you ticked drops out under Model WHS and comes back when you switch back.
4. Check the consultation section and HSR note change between Victoria and Model WHS.
5. Go to **Investigating**, fill in a section, go back to Understanding the risk: everything you entered is still there.
6. The steps at the top link between Something's happened, Understanding the risk and Investigating.
7. Phone width: no sideways scrolling.

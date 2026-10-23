# Phase 2: triage ("Something's happened")

Date: 2026-10-23

## Goal

The first step after an incident or report: immediate safety and support, the notifiable incident check, and an explanation that hazard management, conduct processes and workers compensation run side by side.

## What was built

- **Answer store** (`site/js/lib/state.js`): answers held in memory only, never stored or sent. They survive moving between pages and switching jurisdiction, and are lost on reload or close. The browser warns before a reload or close would lose them. Every guided page has a "Clear all my answers" button.
- **Guided page renderer** (`site/js/views/flow.js`): builds a page from a data file made of sections and blocks. Block types: paragraphs, support contacts, checklist, choice, text, role callouts, verify note, "learn more" panel, regulator links, jurisdiction-only note, conditional (shows blocks depending on an earlier answer), process comparison, prompts. Later phases add pages by writing data, not layout code.
- **Jurisdiction-specific text anywhere:** any text in a data file can be `{ vic: '...', model: '...' }`. Items with no text for the selected jurisdiction are skipped.
- **Triage content** (`site/js/data/triage.js`), four sections:
  1. Immediate safety and support: contacts box (000, Lifeline, Beyond Blue, EAP), first-steps checklist, guidance on interim steps that don't disadvantage the person who reported, HR and HSR notes.
  2. Notifiable incident check: links to the regulator's definition (WorkSafe Victoria or Safe Work Australia) rather than paraphrasing it. A yes / not sure / no question; "yes" or "not sure" reveals next steps. Victorian note that a notifiable incident involving psychosocial hazards triggers a review of controls (WorkSafe FAQ).
  3. Processes side by side: hazard management, conduct or grievance, and workers compensation compared (question, who leads, what it looks at, key point). "Reasonable management action" appears only in the workers compensation card, labelled as a claim test that plays no part in assessing or controlling the hazard. Victorian note that the regulations don't change workers compensation eligibility (WorkSafe FAQ).
  4. Listening to the report: how workers describe hazards in everyday words (from the SWA health care Code), treating those descriptions as evidence, and a free-text record of what was reported.
- **Step indicator** at the top of guided pages, driven by `site.flow` in `jurisdictions.js`.
- Nav, home page section list and version (0.3.0) updated.
- **Printable resource drafts:** `resources/checklists/first-24-hours.md`, `resources/guides/processes-side-by-side.md`.

## Decisions and why

- **Data-driven pages.** Triage, risk and investigation share one renderer, so wording changes stay in data files and new content types are one renderer each.
- **Answers in memory only, with a leave warning and a clear button.** Meets the brief's "nothing stored" rule while protecting users from losing work by accident.
- **Notifiable check links rather than paraphrases**, and asks the user to judge after reading the definition, per the brief.
- **RMA mentioned once, in the workers compensation card only**, to stop it creeping into the hazard assessment, per the brief's rule that it may appear only in a clearly labelled related-processes context.
- **"Continue" button shows a "coming next" note** until Phase 3 exists, so there's no dead link.

## Deferred

- Saving or printing answers (printable summary, Phase 7).
- Glossary links and related learning (Phase 8).

## TODO-VERIFY added

All in `site/js/data/triage.js`: protections against adverse treatment for raising a health and safety issue; HSR powers to raise issues and request action; how psychological injury relates to the notifiable incident definitions; notification time limits and site preservation; workers compensation tests and exclusions for psychological injury; HSR rights where a confidential conduct process is running.

## How to test

1. Open `site/index.html` with Live Server, then choose **Something's happened** in the sidebar.
2. Tick a first step, choose "Not sure" for the notifiable question (next steps appear), and type in "What was reported".
3. Switch jurisdiction: your answers stay; the regulator link changes; the Victorian notes appear only for Victoria.
4. Go to the Hazard library and back: answers are still there.
5. Try to reload: the browser warns you'll lose answers. Click **Clear all my answers**: everything empties.
6. Check at phone width (F12, Ctrl+Shift+M): no sideways scrolling.

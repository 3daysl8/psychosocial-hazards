# Investigation record template: DRAFT outline

Status: draft, for owner review. Finished PDF (fillable or print-and-write) built in Phase 9 into `site/downloads/templates/`.

## Purpose

A record of a psychosocial hazard investigation that mirrors the guide, for people who prefer paper, need a file copy, or want to work offline. Not a conduct investigation report.

## Content source (don't copy text here)

Sections and prompts come from the data files, in the same order as the guide:

1. **What was reported** (`triage.js`, "Listening to the report").
2. **Hazards present** and, for each, frequency and severity (`risk.js`: `exposureFrequency`, `exposureSeverity`), using the jurisdiction's hazard list from `hazards.js`.
3. **Records reviewed** (`risk.js`, `risk.records` options) with space for what they showed.
4. **What workers and others said** (`risk.js`).
5. **Consultation** checklist (`risk.js`, `risk.consult`), with names and dates.
6. **Controls already in place** and how well they're working (`risk.js`).
7. **Systemic factors**: work design, supervision and management, reporting systems, culture and environment, each with its prompts (`investigation.js`).
8. **Findings**: what conditions allowed this harm to occur.
9. **Indicative risk score** box (filled from the site once Phase 5 exists), labelled "Indicative".

Individual circumstances are deliberately left off the template: they inform support, not the record of the hazard.

## Layout

- A4 portrait, about 4 pages, generous writing space, prints in black and white.
- Header: "Psychosocial hazard investigation record", jurisdiction, date, prepared by, consulted with.
- Footer on every page: disclaimer, version, current-as-at date, site URL, and a privacy line ("This record may contain personal information. Store it securely.").

## Before publishing

- All TODO-VERIFY items in `risk.js` and `investigation.js` resolved.
- Entry added to `site/js/data/resources.js`.

# Hazard quick-reference card: DRAFT outline

Status: draft, for owner review. Finished PDF built in Phase 9 into `site/downloads/guides/`.

## Purpose

A one or two page card listing the 14 common psychosocial hazards, so HR and HSRs can recognise them quickly during a conversation, walk-through or meeting.

## Content source (don't copy text here)

All hazard text comes from `site/js/data/hazards.js` so the card and the site never drift apart. For each hazard, the card shows:

- `name` (or the jurisdiction's `names` override, if the card has a jurisdiction-specific version)
- `summary`
- the first two `warningSigns`

Grouped by `hazardCategories`, in the same order as the site.

## Layout

- A4 portrait, two columns, readable when printed in black and white.
- Header: guide title, "Hazard quick-reference", jurisdiction (or "All jurisdictions").
- Footer on every page: the disclaimer from `site/js/data/jurisdictions.js`, version number, "Content current as at" date, site URL.
- Short closing line: hazards rarely occur alone, so look at the whole picture (from `hazardLibrary.combineNote`).
- Uses the shared brand files in `resources/brand/` (to be created).

## Before publishing

- All 14 hazards moved from `reviewStatus: 'draft'` to `'reviewed'`.
- Hazard names and descriptions checked against the Code of Practice and Compliance Code (`hazardSourceVerify` in `hazards.js`).
- Entry added to `site/js/data/resources.js`.

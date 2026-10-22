# Phase 1: jurisdiction selector, disclaimer and date system, hazard library

Date: 2026-10-22

## Goal

Build the site shell that every later phase plugs into: a jurisdiction selector that swaps terms and links, a disclaimer and "current as at" date pulled from one place, and a searchable, filterable hazard library covering all 14 hazards.

## What was built

- **App shell** (`site/index.html`, `site/js/app.js`): header with jurisdiction selector, main navigation, footer with disclaimer, current-as-at date, version and links. Hash-based routing (`#/hazards`, `#/hazards/bullying`, `#/law`) so it works on Live Server and Netlify with no server setup. Page-not-found view.
- **Site settings and jurisdictions** (`site/js/data/jurisdictions.js`): title, disclaimer, privacy line, current-as-at date, version, nav, role intros, the list of guide sections with their status, and two jurisdictions (Victoria, Model WHS) with terms, regulators, legislation, guidance and notes.
- **Term swapping**: any data text can use `{dutyHolder}`, `{lawShort}`, `{lawLong}`, `{regulator}` and so on. They're filled in from the selected jurisdiction. A capitalised placeholder (`{DutyHolder}`) gives a capitalised word.
- **Hazard library** (`site/js/data/hazards.js`, `site/js/views/hazards.js`): all 14 hazards with a summary, workplace examples, early warning signs, tags, optional HR/HSR callouts, and a review status. Search across names, summaries, examples, signs and tags. Filter by group. Live result count for screen readers. Detail page per hazard with previous/next links.
- **Law and regulators page** (`site/js/views/law.js`): shows the selected jurisdiction's terms, regulators, legislation, guidance and notes (including the Queensland prevention plan note under Model WHS).
- **Home page** (`site/js/views/home.js`): intro, privacy note, HR and HSR "where are you coming from" cards, list of guide sections with "Coming soon" tags, link to the Risk Model.
- **Shared helpers** (`site/js/lib/`): `dom.js` builds elements safely (text is never inserted as HTML), `text.js` handles term swapping and dates, `components.js` has the verify note, draft badge, role callouts and source list items.
- **Styles** (`site/css/styles.css`): colour tokens, accessible focus styles, skip link, responsive layout tested at phone width, print styles.
- **Printable resource draft**: `resources/guides/hazard-quick-reference.md`, an outline that pulls its content from `hazards.js` rather than copying it.

## Decisions and why

- **ES modules, no build step.** Each file imports what it needs, which keeps files small and readable. Works with Live Server. (It won't work by double-clicking `index.html`, because browsers block modules from `file://`. Always use Live Server.)
- **Jurisdiction choice is remembered in the browser** (localStorage key `phg-jurisdiction`). It's a display preference, not case information. Nothing a user types is ever stored. If storage is blocked, the site still works and falls back to the default.
- **Default jurisdiction is Victoria.** One line to change: `defaultJurisdiction` in `jurisdictions.js`.
- **Hazard text drafted, not left blank.** The brief allows plain-English explanations if flagged for review, so each hazard has `reviewStatus: 'draft'` and shows a "Draft content, under review" badge until changed to `'reviewed'`.
- **Formal definitions are not paraphrased as law.** Bullying and harassment carry `definitionVerify` notes pointing to the source.
- **TODO-VERIFY notes are visible on the site** while `showVerifyNotes` is `true`. Set it to `false` to show a neutral "being checked" line instead.
- **Hazard groups are a browsing aid**, not an official classification. Labelled as "groups" in the filter.
- **Regulator homepages included; specific document links left as TODO-VERIFY.** Homepages were checked to exist (some block automated checks).
- **Knowledge check at the end of the hazard library is deferred to Phase 8**, when the education content model exists.
- **Section list on the home page is data-driven**, so each later phase only changes a status from `coming` to `available`.

## Deferred

- Knowledge check (Phase 8).
- Glossary links in hazard text (Phase 8).
- "Related learning" blocks (Phase 8).
- Printed PDF of the quick-reference card (Phase 9).
- Brand files in `resources/brand/` (Phase 9).

## TODO-VERIFY added

All in `site/js/data/`:

- `jurisdictions.js`: Vic OHS Act link; Vic Psychological Health Regulations 2025 commencement date and link; Vic Compliance Code edition and URL; Vic prevention plan requirement and template URL; Model WHS regulator names, adopting jurisdictions (including WA) and links; model WHS Regulations covering psychosocial risk; Model Code of Practice edition, URL and approvals; Queensland prevention plan requirement.
- `hazards.js`: definition of psychosocial hazard and whether the Vic Compliance Code uses the same list and names; hazard names and descriptions for all 14 hazards; definition of bullying; definitions of harassment and sexual harassment; consultation duty on proposed changes; positive duty on sexual harassment.

## Follow-up (2026-10-23): checked against Safe Work Australia

The owner pointed to the SWA Health care and social assistance Code's psychosocial page as a primary source. That page is industry-specific and groups hazards into 6 types; it links to the general Model Code of Practice: Managing psychosocial hazards at work (July 2022), which is the source of the 14 hazards. Both were read and summarised in `research/notes/swa-psychosocial-codes.md`.

- All 14 hazard names matched the Model Code exactly. Those TODO-VERIFY items now only cover Victoria.
- Bullying summary fixed: it had left out "unreasonable". Bullying and sexual harassment definitions now quoted word for word with attribution, shown in a styled quote block.
- Harassment summary now says single instances of harmful behaviour can still be a hazard. Job demands summary mentions high stakes if mistakes happen and idle periods.
- Library intro rewritten to follow the Code's definition (in our own words). Source line added to the library and every hazard page.
- Model WHS guidance on the Law page now links the Model Code and the health care industry Code.
- Both Codes added to `EVIDENCE_REGISTER.md` as VERIFIED.
- **Licensing decision:** SWA Codes are CC BY-NC 4.0 and this guide's content is CC BY 4.0, so the guide writes in its own words and links to the source. Only short formal definitions are quoted. Added to `docs/content-rules.md`.
- Content date 23 October 2026, version 0.1.1.

### Second follow-up (2026-10-23): Victoria's own hazard list

The owner added WorkSafe Victoria's Psychosocial hazard identification tool (Feb 2026) to `reference/`. With their permission it was read, along with WorkSafe's Regulations FAQ and Compliance Code page. Notes: `research/notes/worksafe-vic-psychological-health.md`.

- **Victoria lists 16 hazards, not 14.** Job demands is split into high and low; harassment becomes sexual harassment plus a separate gendered violence hazard; several names differ (e.g. "Aggression or violence", "Poor workplace relationships", "Poor environmental conditions").
- **Library restructured so each jurisdiction shows its own list.** Hazards can now be limited to some jurisdictions (`appliesTo`), override their name, summary, examples and definitions per jurisdiction (`overrides`), and point to the hazard that covers them elsewhere (`coveredBy`). Two Victoria-only hazards added: Low job demands and Gendered violence. Previous/next links follow the selected jurisdiction's list.
- **Victorian definitions quoted** from the WorkSafe tool: bullying, sexual harassment, gendered violence, aggression or violence. Each quote names its own source.
- **Closed TODO-VERIFYs:** Vic regulation commencement (1 Dec 2025), Compliance Code URL, Vic prevention plans (not mandatory, template encouraged).
- **Source documents gitignored:** the SWA Code .docx had been committed by mistake. It's now in `research/papers/` and all PDFs/Word files are ignored except finished guides in `site/downloads/`.
- Version 0.1.2. Useful material for later phases (Victoria's tailored control hierarchy, review triggers, HSR information access, internal records to review) is recorded in the notes file.

## How to test

1. In VS Code, right-click `site/index.html` and choose "Open with Live Server".
2. **Home:** check the disclaimer and "Content current as at 22 October 2026" appear in the footer.
3. **Jurisdiction:** switch between Victoria and Model WHS. On the home page, the HSR card should change between "employer" and "PCBU". Open **Law and regulators** and check the regulators, legislation and notes change. Reload the page: your choice should stick.
4. **Hazard library:** 14 hazards show. Type "abuse" in search: only Violence and aggression shows. Clear it, choose "Harmful behaviour and relationships": 4 show. Switch jurisdiction: your search and filter stay.
5. **Hazard detail:** open Bullying. Check the HR and HSR callouts, the draft badge, the TODO-VERIFY notes, and the previous/next links.
6. **Keyboard:** press Tab from the top of the page. The first stop is "Skip to content". Every link and control can be reached, and the focus outline is visible.
7. **Phone width:** in the browser's dev tools, switch to a phone view. There's no sideways scrolling.
8. **Print:** print a hazard page. The navigation and filters are hidden. The disclaimer and date print.
9. **Not found:** go to `#/nothing-here`. A "Page not found" page shows.

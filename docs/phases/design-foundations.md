# Design foundations (between Phase 1 and Phase 2)

Date: 2026-10-23

## Goal

Settle the look and the interaction patterns before Phases 2 to 5 add triage, questions, answers and the score, so those phases build on one consistent design instead of being reworked later.

## Why now, not at the end

Visual polish can wait (colours and spacing are tokens in one file), but the patterns for steps, questions, answer fields, role notes and the score get copied into every later phase. Choosing them before Phase 2 is one short pass; changing them after Phase 5 would mean rework across four phases.

## What was built

Three working directions in `design/` (not published), each running the real site code and content with only the page shell and stylesheet changed, plus a pattern sample page previewing the Phase 2 to 5 components:

- **A. Civic:** after Safe Work Australia's Code of Practice "book" pages. Rounded tinted panels, contents sidebar, Montserrat. Own blue, no logo, "Independent guide. Not a government website." line.
- **B. Workshop:** after isaacpeterson.au. Ruled puzzle grid, paper and ink, tomato offset shadow, Archivo Black, JetBrains Mono, Georgia.
- **C. Casebook:** a quiet document style. Serif on warm paper, numbered indexes, HR/HSR notes in the margin.

Fonts were self-hosted (all OFL) because the site's CSP blocks Google Fonts.

## Decision

The owner chose **A. Civic**. Applied to the live site:

- `site/index.html`: utility bar, masthead, contents sidebar layout.
- `site/css/styles.css`: Civic styles, including the Phase 2 to 5 components.
- `site/assets/fonts/montserrat-400-700-normal.woff2` (self-hosted, preloaded).
- "Independent guide. Not a government website." moved into `site/js/data/jurisdictions.js` (`independenceNote`).
- `docs/design.md`: tokens, components and rules for later phases.
- Version 0.2.0.

Directions B and C stay in `design/` as a record of the options.

## Changes from the Phase 1 styles

- Coloured left-stripe callouts replaced with full borders and tints.
- Teal accent replaced with civic blue.

## How to test

1. Open `site/index.html` with Live Server.
2. Check the utility bar, sidebar contents and rounded panels on Home, Hazard library, a hazard page and Law and regulators.
3. At phone width (F12, then Ctrl+Shift+M) the sidebar becomes a row of links and nothing scrolls sideways.
4. To compare the options again, open `design/index.html` with Live Server.

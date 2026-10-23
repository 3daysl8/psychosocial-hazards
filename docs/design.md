# Design: "Civic"

Chosen 2026-10-23 from three working directions (see `design/`, and `docs/phases/design-foundations.md` for why). Read this before adding any UI.

## Feel

After Safe Work Australia's Code of Practice pages: white page, large rounded tinted panels, a contents sidebar, Montserrat. Familiar to HR and HSRs who use regulator sites. Uses its own blue, no logo, and always shows "Independent guide. Not a government website." so it's never mistaken for official material.

## Tokens (in `site/css/styles.css` `:root`)

- **Colours** are OKLCH. `--primary` (civic blue) is for links, the current nav item, primary buttons, selected options and the current score band. Not decoration.
- **Role tints:** `--hr-bg` / `--hr-ink` (warm) for HR, `--hsr-bg` / `--hsr-ink` (green) for HSRs. Always pair with a text label ("For HR", "For HSRs"); colour never carries meaning alone.
- **States:** `--warn-*` for TODO-VERIFY and draft badges, `--urgent-*` for the emergency support box.
- **Shape:** `--radius-lg` for page-level panels, `--radius` for cards, fields and callouts, `99px` for pills and buttons.
- **Font:** Montserrat 400 to 700, self-hosted in `site/assets/fonts/` (OFL). The CSP blocks Google Fonts, so any new font must be self-hosted.

## Components

Built and styled: contents sidebar, utility bar, masthead with jurisdiction picker, hazard cards, filters panel, role callouts, definition quote, combine note, draft badge, verify note, pager, law terms list.

Styled and ready for Phases 2 to 5 (previewed in `design/a-civic/patterns.html`): `.steps` progress, `.support-box` emergency contacts, `.question` fieldset with `.option` rows, `details.learn-more`, `.field-wide` textarea with `.field-note`, `.score-panel` with `.band-scale`, `.button-primary` / `.button-secondary`, `.actions`, `.eyebrow`.

Reuse these. Don't invent a new style for something one of them already does.

## Rules

- No coloured stripe down one side of a box (`border-left` over 1px). Use a full border, a background tint, or a label.
- No modals. Use inline sections and `<details>` panels.
- No card inside a card.
- Every form control has a visible `<label>` or `<legend>`. Hints are linked with `aria-describedby`.
- Selected states must show by more than colour (border weight, fill, or a check).
- Transitions 150 to 250 ms, ease-out, colour and background only. Respect `prefers-reduced-motion`.
- Mobile: the sidebar becomes a wrapped row of links under 60rem. Check every page at 390px wide for sideways scrolling.
- Print: hide navigation, filters, pager and the jurisdiction picker; keep the disclaimer and date.

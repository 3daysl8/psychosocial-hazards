# Phase 1 prompts

Brief section used: "Phase 1: jurisdiction selector, disclaimer and date system, and the hazard library with placeholder content structure for all 14 hazards", plus "each phase that creates content also adds any matching printable resource to `resources/` as a draft". Full brief: `phase-0-brief.md`.

**Prompt:**

> Start phase 1

**Follow-up after the phase was released:**

> primary resource for content can you access it https://www.safeworkaustralia.gov.au/book/health-care-and-social-assistance/hazards-risks-and-controls/psychosocial-hazards

The assistant read that page and the general Model Code it links to, reported what matched, what needed fixing and a licensing conflict (SWA is CC BY-NC), then asked two questions. Answers: write in our own words and link, quoting only short definitions; fix the hazard library and push as a small follow-up, then start Phase 2.

The assistant then found the SWA Code .docx had been committed from `reference/` and asked what to do. Answer: move it out of the repo and gitignore source documents (no history rewrite). A WorkSafe Victoria PDF had also appeared in `reference/`; the assistant asked whether to read it before Phase 2. Answer: yes. Reading it showed Victoria lists 16 hazards, so the library was restructured per jurisdiction.

No other follow-up instructions were given during the build. The assistant made these calls itself and recorded them in `docs/phases/phase-1.md` for review: default jurisdiction Victoria, hazard text drafted and flagged rather than left blank, jurisdiction choice remembered in localStorage, knowledge check deferred to Phase 8.

# Psychosocial Hazard Investigation Guide

Browser-only web guide for Australian HR practitioners and Health and Safety Representatives (HSRs). Walks them through identifying, investigating and controlling psychosocial hazards after an incident or report, gives an indicative risk score, and teaches the concepts along the way. Sister tool to the Psychological Risk Model (https://psychologicalriskmetre.netlify.app/). Plain HTML/CSS/JS, public GitHub repo, Netlify deploys `site/` only. Owner is not a professional developer: explain non-obvious things briefly, keep code simple.

## Current phase: 0

Phase 0a (scaffold) done. Next: 0b (pipeline: tools check, git init, GitHub repo, Netlify). Licence already chosen: MIT code + CC BY 4.0 content.

## Folder map

- `site/` the only published folder (has its own CLAUDE.md). Content lives in `site/js/data/`.
- `resources/` editable sources for printable guides (has its own CLAUDE.md).
- `docs/` brief, content rules, scoring method, education roadmap, `phases/phase-N.md`.
- `prompts/` exact prompts used per phase, for others to replay.
- `reference/risk-model/` original Risk Model source. Read-only, read deny until Phase 4.
- `research/papers/` PDFs, gitignored, never read. `research/notes/` short extractions.
- `EVIDENCE_REGISTER.md` single source of truth for every factor, weight and regulatory claim.
- `BUILD_LOG.md` short index table, detail in `docs/phases/`.

## Key rules

1. It's a guide. Never states a legal outcome. Score is always "Indicative", never a determination.
2. Nothing the user enters is stored or sent. No backend, accounts, analytics, trackers, or localStorage for case details.
3. No legal or regulatory content from memory. Use `TODO-VERIFY: [what needs checking] — source: [document/section]`.
4. No "reasonable management action" in hazard assessment, scoring or investigation. Only in a separate "related processes" section, if at all.
5. Score work-related factors only. Individual factors may be noted for support but never move the rating.
6. Don't invent research figures. Unsourced weights are marked `GAP`.
7. No framework, no build step, no npm without asking first.
8. Work in phases. At the end of each: update `BUILD_LOG.md`, `docs/phases/phase-N.md`, `prompts/phase-N.md`, this file's "Current phase", commit, tag `phase-N`, push, GitHub Release. Then stop and wait.
9. Report failed pushes or deploys plainly. Don't work around them silently.

## Read only when relevant

- `docs/brief.md` full brief. Read when starting a phase or when a decision depends on it.
- `docs/content-rules.md` tone, audience, privacy, legal content rules. Read before writing any user-facing content.
- `EVIDENCE_REGISTER.md` read for scoring, evidence or Resources work.

## Token habits

Open only the data file being changed. Don't re-read files just written. When the `reference/**` deny is lifted in Phase 4, read the Risk Model once, record findings in the register, then work from the register.

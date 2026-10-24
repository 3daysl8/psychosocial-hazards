# Build log

Short index of each build phase. Full detail for each phase is in `docs/phases/`, and the exact prompts used are in `prompts/` so anyone can replay the build. Each completed phase is tagged in git (`phase-N`) with a matching GitHub Release.

| Phase | Date | Summary | Detail |
|---|---|---|---|
| 0a | 2026-10-22 | Project scaffold: folder structure, CLAUDE.md files, content rules, Claude read-deny settings, .gitignore, netlify.toml with security headers, licence, placeholder page | [phase-0](docs/phases/phase-0.md) |
| 0b | 2026-10-22 | Pipeline: git repo, public GitHub repo, Netlify auto-deploy from `main`, placeholder live with security headers verified | [phase-0](docs/phases/phase-0.md) |
| 1 | 2026-10-22 | Site shell, jurisdiction selector with term swapping, disclaimer and date system, Law and regulators page, searchable hazard library with all 14 hazards (draft content) | [phase-1](docs/phases/phase-1.md) |
| 1 (follow-up) | 2026-10-23 | Hazard library checked against SWA Model Code: names verified, bullying and sexual harassment definitions quoted, source links, own-words licensing rule | [phase-1](docs/phases/phase-1.md#follow-up-2026-10-23-checked-against-safe-work-australia) |
| 1 (follow-up 2) | 2026-10-23 | Victoria's 16-hazard list from WorkSafe: per-jurisdiction hazard lists, 2 Vic-only hazards, Vic definitions quoted, Vic TODO-VERIFYs closed, source documents gitignored | [phase-1](docs/phases/phase-1.md#second-follow-up-2026-10-23-victorias-own-hazard-list) |
| Design | 2026-10-23 | Three working design directions compared; "Civic" chosen and applied, with components ready for Phases 2 to 5 | [design-foundations](docs/phases/design-foundations.md) |
| 2 | 2026-10-23 | Triage: safety and support, notifiable incident check (links, not paraphrase), processes side by side, listening to the report; in-memory answers and data-driven guided pages | [phase-2](docs/phases/phase-2.md) |
| 3 | 2026-10-23 | Understanding the risk (hazards, per-hazard exposure and severity, records, accounts, consultation, existing controls, unscored individual notes, score placeholder) and investigating systemic factors | [phase-3](docs/phases/phase-3.md) |
| 4 | 2026-10-23 | Evidence audit: Risk Model factors traced to Stansfeld & Candy 2006, Niedhammer 2021 and Mikkelsen 2021; gaps and unsupported weights flagged; two candidate weight sets proposed; awaiting owner review | [phase-4](docs/phases/phase-4.md) |
| Research | 2026-10-24 | Gemini literature review audited twice and arbitrated; reader-facing review `research/assessing-psychosocial-hazards-review.md`; owner chose per-hazard rating, no weights | [phase-4 decision](docs/phases/phase-4.md#owner-decision-2026-10-24-per-hazard-rating) |
| 5 | 2026-10-24 | Indicative risk rating: per-hazard rating from severity, frequency and controls (judgement rules G1 to G5), highest hazard sets the overall band, combination flag, "How this score works" panel, per-hazard controls question | [phase-5](docs/phases/phase-5.md) |
| 6 | 2026-10-24 | Resources page from the register: how the rating works, per-hazard evidence with verified figures and evidence-type tags, frameworks, regulator guidance by jurisdiction, limitations, 20 references with plain-English summaries, how the evidence was checked; score panel links to it | [phase-6](docs/phases/phase-6.md) |

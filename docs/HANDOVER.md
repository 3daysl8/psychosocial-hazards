# Handover: start here

Last updated 2026-10-24. Read this first, then only the files it points to.

## Where things stand

- **Built:** Phase 0 (scaffold, pipeline), Phase 1 (shell, jurisdictions, hazard library), design foundations ("Civic"), Phase 2 (triage), Phase 3 (understanding the risk, investigating), Phase 4 (evidence audit), research review (2026-10-24), Phase 5 (indicative rating). Site version 0.5.0.
- **Live site** (https://psychosocialhazards.netlify.app) shows everything through Phase 5. Pushed 2026-10-24: `main`, tag `phase-5`, GitHub Release. Live `#/triage`, `#/risk` (rating tested), `#/investigate` checked: render, no console errors.
- Earlier: Pushed 2026-10-23: `main`, tags `phase-2`, `phase-3`, `phase-4`, and GitHub Releases for all three. Live `#/triage`, `#/risk`, `#/investigate` checked: render, no console errors.

## Waiting on the owner

1. ~~Test Phases 2 and 3, then push~~ Done 2026-10-23.
2. ~~Answer the four Phase 4 decisions~~ **Decided 2026-10-24: per-hazard rating, no weights.** Each hazard rated on its own (duration/frequency, severity, control effectiveness), worst hazard sets the overall result, combinations flagged not multiplied, no control discounts, no-evidence hazards rated like the rest. Recorded at the end of `docs/phases/phase-4.md` and in `EVIDENCE_REGISTER.md`. Decision 3 approved 2026-10-24 (judgement rules OK). Still open: decision 4 (Risk Model update, separate project).
3. **Gemini report: received, audited twice, arbitrated, done 2026-10-24.**
   - Raw report: `research/notes/psychosocial_risk_literature_review.md`. Contains an invented SWA quote and 13 of 32 bad references. **Don't publish it.**
   - Audits: `research/notes/gemini-report-audit.md` (Claude Code, **corrected** after arbitration: Madsen 1.22 is real, "Lunen" not "van Lunen", Fox 2022 is real in Work & Stress, Rugulies 1.68 verified, section 6 superseded) and `research/notes/argon-report-audit.md` (second AI audit; has its own errors, don't use its weights).
   - Arbitration by ChatGPT: `research/notes/final-audit-arbitration.md` plus `arbitration-reference-register.md`, `arbitration_citation_metadata.json`, `proposed-publication-corrections.md`. Spot-checked 7 rulings against sources, all held. Its "publication" framing assumed the Gemini report would be published; ignore the article-rewrite parts.
   - **Rewritten review for readers:** `research/assessing-psychosocial-hazards-review.md`. Methods for assessing psychosocial hazards, answer to "how do I make the determination" (SWA Model Code process, Appendix C register), verified findings, recommendations, and AI research lessons. Draft for owner review; candidate Resources item (Phase 6).
   - The review was audited again (`research/assessing-psychosocial-hazards-review-audit.md`, 14 corrections A1–A14) and revised the same day. Kept model names (owner-supplied) despite A12's advice to go generic; kept the AI-lessons section in the piece (owner asked for it) rather than splitting it out.
   - Confirmed 2026-10-24: People at Work platform closed 2 Oct 2026 (WorkSafe Qld page); Victoria r 15(3)–(4) limits on information/instruction/training (WorkSafe Vic Compliance Code page).
   - WHO confirmed 2026-10-24 from owner's PDF (`reference/WHO mental health at work.pdf`, gitignored): Rec 1 conditional, very low certainty (p. 12); Recs 4–5 manager training strong, moderate certainty.
   - Still not read directly by Claude Code: Fleming's volunteering exception (stated by arbitration and review audit), Sojo author-manuscript values (PDF blocked).
   - **Not committed yet.** Owner to decide: commit the notes and the review, and whether the raw Gemini report goes in the public repo (recommend not, or only with a header pointing to the audits).
4. Owner review of draft content: hazard text (`reviewStatus: 'draft'`), triage/risk/investigation wording, severity scale (minor/moderate/serious/severe) and controls scale (nothing/not working/partly/working well), which Phase 5 will build on.

## When the owner says "push"

```bash
cd /c/dev/psychological-hazards
git push origin main
git push origin phase-5
# wait for Netlify to deploy the latest commit:
H=$(git rev-parse --short=7 HEAD)
until netlify api listSiteDeploys --data '{"site_id":"5144a2de-4861-4f94-a0fb-070a831970e7"}' | python -c "import json,sys;d=json.load(sys.stdin)[0];r=(d.get('commit_ref') or '')[:7];print(d['state'],r);sys.exit(0 if r=='$H' and d['state'] in ('ready','error') else 1)"; do sleep 5; done
```

Then load the live site in a browser (agent-browser) and check `#/triage`, `#/risk` (fill a hazard and see the rating), `#/investigate` render with no console errors under the live CSP. Then `gh release create phase-5` with notes from `BUILD_LOG.md`, linking `docs/phases/phase-N.md` and `prompts/phase-N.md` at the tag (see the phase-1 release for the format, ending with the Claude Code attribution line).

## Next phases (from `docs/brief.md`)

- ~~**5:** indicative rating~~ Built 2026-10-24 (`docs/phases/phase-5.md`). Rules: `site/js/data/scoring.js` (register rows G1 to G5); method: `docs/scoring-method.md`. Per-hazard answer keys: `risk.hazards.<id>.frequency|severity|controls`; overall controls `risk.controls.effectiveness` is the fallback.
- **6:** Resources section generated from the register (`site/js/data/evidence.js`).
- **7:** controls, 30/60/90 review, return to work branch, printable summary (`allAnswers()` in `js/lib/state.js`). Victoria's tailored control hierarchy and review triggers are in `research/notes/worksafe-vic-psychological-health.md`.
- **8:** education tools (content model in `site/js/data/education.js`), glossary, scenarios, knowledge checks.
- **9:** downloads, PDFs, accessibility pass, "How this was built" page, final TODO-VERIFY list.

## How the site works (so you don't need to re-read code)

- `site/js/app.js`: hash router, shell, jurisdiction selector (choice kept in localStorage; nothing else stored), leave warning when answers exist.
- `site/js/views/flow.js`: renders guided pages from data. Block types: paragraphs, support, checklist, choice, text, callouts, verify, learnMore, links, jurisdictionNote, conditional, processes, prompts, hazardPicker, hazardExposure, scorePlaceholder.
- Any data text can be `{ vic: '...', model: '...' }`; `{dutyHolder}`-style placeholders swap per jurisdiction.
- Hazards: Victoria lists 16, Model WHS 14 (`appliesTo`, `overrides`, `coveredBy` in `site/js/data/hazards.js`).
- Design rules and components: `docs/design.md`.

## Gotchas learned this session

- **Shells:** PowerShell mangles JSON quotes passed to native tools (netlify, gh). Use the Bash tool. Write Python to a file rather than inline (escaping gets eaten).
- **Browser testing:** serve with `python -m http.server 8765 --directory C:/dev/psychological-hazards/site` (background), drive with `agent-browser`. If answers have been entered, `reload` hangs on the leave-warning dialog: use `agent-browser close --all` and a fresh browser. Full-page screenshots show the sticky sidebar mid-page; that's expected.
- **Fetching sources:** gov sites need a browser User-Agent with curl. Open-access papers: Europe PMC `.../PMC<id>/fullTextXML` and `/supplementaryFiles` (zip needs Windows `tar.exe -xf`). Keep downloaded papers in the scratchpad, never in the repo.
- **Licensing:** SWA Codes are CC BY-NC; guide content is CC BY 4.0. Write in own words, quote only short definitions with attribution. PDFs and Word files are gitignored.
- **Netlify:** site `psychosocialhazards`, id `5144a2de-4861-4f94-a0fb-070a831970e7`, deploys from the GitHub app on push to `main`.
- **Owner preferences:** Live Server is installed; owner wants plain explanations; em-dash rule does not apply to this project.

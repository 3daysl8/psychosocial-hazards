# Handover: start here

Last updated 2026-10-23, end of a long session. Read this first, then only the files it points to.

## Where things stand

- **Built:** Phase 0 (scaffold, pipeline), Phase 1 (shell, jurisdictions, hazard library), design foundations ("Civic"), Phase 2 (triage), Phase 3 (understanding the risk, investigating), Phase 4 (evidence audit). Site version 0.4.0.
- **Live site** (https://psychosocialhazards.netlify.app) shows everything **up to design foundations only**. Phases 2, 3 and 4 are committed and tagged **locally but not pushed**: commits `8842b8e` (phase-2), `6890f5a` (phase-3), `22ef1e3` (phase-4), `a2680ac` (research brief), plus the handover commit. Local tags `phase-2`, `phase-3`, `phase-4` exist; no GitHub Releases yet for them.

## Waiting on the owner

1. **Test Phases 2 and 3 in Live Server**, then say "push". The brief says the owner tests locally before anything goes live.
2. **Answer the four Phase 4 decisions** (end of `docs/phases/phase-4.md`): weight set (Option A Mikkelsen 2021 recommended), how to treat hazards with no evidence (neutral labelled judgement weight recommended), OK to propose judgement rules for frequency/severity/combining/controls, and whether the Risk Model itself should be updated later (separate project).
3. **Gemini deep research report.** Owner is running `prompts/research/gemini-deep-research-scoring.md` in Gemini. Report will land at `research/notes/gemini-deep-research-report.md`. Verify **every** figure against the cited source (Europe PMC full text API works for open-access papers) before adding to `EVIDENCE_REGISTER.md`. Then propose final weights and score rules for approval.
4. Owner review of draft content: hazard text (`reviewStatus: 'draft'`), triage/risk/investigation wording, severity scale (minor/moderate/serious/severe) and controls scale (nothing/not working/partly/working well), which Phase 5 will build on.

## When the owner says "push"

```bash
cd /c/dev/psychological-hazards
git push origin main
git push origin phase-2 phase-3 phase-4
# wait for Netlify to deploy the latest commit:
H=$(git rev-parse --short=7 HEAD)
until netlify api listSiteDeploys --data '{"site_id":"5144a2de-4861-4f94-a0fb-070a831970e7"}' | python -c "import json,sys;d=json.load(sys.stdin)[0];r=(d.get('commit_ref') or '')[:7];print(d['state'],r);sys.exit(0 if r=='$H' and d['state'] in ('ready','error') else 1)"; do sleep 5; done
```

Then load the live site in a browser (agent-browser) and check `#/triage`, `#/risk`, `#/investigate` render with no console errors under the live CSP. Then `gh release create phase-2|phase-3|phase-4` with notes from `BUILD_LOG.md`, linking `docs/phases/phase-N.md` and `prompts/phase-N.md` at the tag (see the phase-1 release for the format, ending with the Claude Code attribution line).

## Next phases (from `docs/brief.md`)

- **5:** indicative risk score and "How this score works" panel, using the approved weights. Score inputs already collected in `site/js/data/risk.js` (ids are fixed: `risk.hazards`, `risk.hazards.<id>.frequency|severity`, `risk.controls.effectiveness`). Replace the `scorePlaceholder` block. Put weights and thresholds in a data file with comments naming their register row. Write `docs/scoring-method.md`.
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

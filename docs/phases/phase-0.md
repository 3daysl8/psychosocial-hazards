# Phase 0: setup and pipeline

## 0a: scaffold (2026-10-22)

### Goal
Set up the folder structure, guidance files and config so later phases start cheap and consistent. No real features.

### What was built
- Brief moved from `psychosocial-guide-prompt.md` to `docs/brief.md`, copy saved as `prompts/phase-0-brief.md`.
- Folder tree from the brief, with `.gitkeep` in empty folders.
- Root `CLAUDE.md` (under 60 lines), `site/CLAUDE.md`, `resources/CLAUDE.md`.
- `docs/content-rules.md` extracted from the brief (legal content rules, tone, audience, jurisdictions, support contacts, privacy).
- `.claude/settings.json` denying Claude reads of `research/papers/**`, `site/downloads/**`, `reference/**`.
- `.gitignore`, `netlify.toml` (publish `site`, empty build command, CSP and security headers).
- `LICENSE` (MIT for code, CC BY 4.0 for written content).
- `BUILD_LOG.md` index, `README.md` stub.
- Placeholder `site/index.html` and `site/css/styles.css`.

### Decisions and why
- **Licence chosen early (MIT + CC BY 4.0).** The brief said to ask before Phase 1; settling it in 0a let the `LICENSE` file be written with the scaffold. 0b no longer needs to ask.
- **TODO-VERIFY marker kept exactly as written in the brief** (including the em dash) so it's easy to search for.
- **`research/papers/` gitignored except its `.gitkeep`**, so the folder exists in the repo but no copyrighted PDF can be committed by accident.
- **Placeholder page has no inline styles or scripts**, so it already passes the strict CSP in `netlify.toml`.
- **Placeholder disclaimer and date are hard-coded for now.** Phase 1 moves them into `site/js/data/jurisdictions.js` as the single source.
- **`EVIDENCE_REGISTER.md` left untouched** until the Phase 4 audit.

### Deferred
- git init, GitHub repo, Netlify connection (0b).
- `docs/scoring-method.md` and `docs/education-roadmap.md` (created in Phases 5 and 8 when there's something to say).
- `site/js/app.js`, `scoring.js` and data files (Phase 1 onward).
- Risk Model source in `reference/risk-model/` (owner to supply before Phase 4).

### TODO-VERIFY added
None in code. `docs/content-rules.md` notes that the Victorian regulation commencement date and Queensland prevention plan requirement come from the brief and need checking before they appear on the site.

### How to test
1. Open `C:\dev\psychological-hazards` in VS Code and check the tree matches the brief.
2. Right-click `site/index.html` and choose "Open with Live Server". The placeholder page should show a title, a short "in development" note, the disclaimer and a current-as-at line.
3. Open the browser dev tools console: no errors.

## 0b: pipeline (2026-10-22)

### Goal
Get the placeholder from local folder to GitHub to a live Netlify site before any real building starts.

### What was built
- Tools checked: git 2.54, GitHub CLI 2.96 (logged in), Netlify CLI 26.1 (logged in). VS Code Live Server not detected; owner to install.
- `git init -b main`, git identity set for this repo only, using the GitHub noreply email so no personal email is published in commits.
- `.gitattributes` added to store text files with LF line endings.
- Public repo created with `gh repo create`: https://github.com/3daysl8/psychosocial-hazards
- Netlify site `psychosocialhazards` created via the Netlify CLI API and linked to the repo through the existing Netlify GitHub app: https://psychosocialhazards.netlify.app
- README updated with live and repo URLs.

### Decisions and why
- **Repo named `psychosocial-hazards`**, not the folder name, because "psychosocial hazards" is the collective name of the reforms and legislation. The local folder stays `psychological-hazards`; git doesn't care.
- **Netlify connected by CLI instead of the dashboard**, at the owner's request. Same result: build settings come from `netlify.toml`, pushes to `main` deploy automatically.
- **Noreply commit email** keeps the owner's address out of a public history.

### Deferred
- Installing VS Code Live Server (owner).

### TODO-VERIFY added
None.

### How to test
1. Visit https://psychosocialhazards.netlify.app. The placeholder page loads.
2. In dev tools, Network tab, click the page request: response headers include `Content-Security-Policy`, `X-Frame-Options: DENY`, `Referrer-Policy: no-referrer`, `X-Content-Type-Options: nosniff`.
3. Push any commit to `main` and watch a new deploy appear in the Netlify dashboard.

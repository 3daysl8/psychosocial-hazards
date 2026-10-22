# Project brief: Psychosocial Hazard Investigation Guide

You're helping me build a web-based guide for HR practitioners and Health and Safety Representatives (HSRs) in Australia. It walks them through identifying, investigating and controlling psychosocial hazards after an incident or report, gives an indicative risk score, and teaches the concepts along the way. I'm building this locally in VS Code with you (Claude Code), pushing to a public GitHub repo, and hosting on Netlify with automatic deploys from GitHub. I'm not a professional developer, so explain anything non-obvious briefly as you go, and keep the codebase simple enough that I can maintain it myself.

This project will be shared publicly. Other people should be able to reuse either the finished site and its tools, or the prompts and build process to make their own version. That's why the build is tracked phase by phase (see "Build tracking" below).

Work in phases. Finish one phase, update the build log, tell me what you built and how to test it, then stop and wait for me before starting the next.

## Related existing tool

I've already built a Psychological Risk Model at https://psychologicalriskmetre.netlify.app/. It lets users toggle factors across three pillars (organisational, job, individual), scores compounding risk in real time, and uses factor weights derived from meta-analytic effect sizes (Niedhammer, Bertrais & Witt, 2021; Stansfeld & Candy, 2006) mapped to the Job Demand-Control-Support and Effort-Reward Imbalance frameworks. Its disclaimer says it has face validity only and is for education, not individual employment or clinical decisions.

This new guide should feel like part of the same family. Match its tone and disclaimer approach, and link to it from the scoring and education sections. I'll put the Risk Model's source code in `/reference/risk-model/`. Don't modify it there; read it to extract its factors, weights and combination logic.

The Risk Model was built a while ago and its weights were never formally documented against the research. Part of this project is fixing that (see "Evidence base and resources").

## Evidence base and resources

`EVIDENCE_REGISTER.md` (I'll provide a starter version) is the single record of the research and guidance behind every scored factor, weight and regulatory claim in both tools. It has a factor table, the research sources, theoretical frameworks, regulatory guidance and known limitations.

Your job with it: extract every factor and weight from the Risk Model source and add a row for each. Where a pooled estimate exists in the cited sources, record it with its confidence interval, outcome and source table or page, and show how the weight was derived (log of the odds ratio, scaled so the strongest effect is 1.0). Where the Risk Model uses a weight with no clear source, mark it `GAP` and say so plainly. Don't invent figures. If you can't access a paper, list exactly which table or figure I need to look up and I'll fill it in. Where the evidence suggests a weight is noticeably off, flag it and propose a corrected value, but don't change the Risk Model itself.

The new guide's scoring uses the same register, so both tools trace back to one source of truth.

On the site, build a **Resources** section generated from the register data: research references with DOIs and plain-English summaries of what each found, the frameworks explained simply, regulator and standards links by jurisdiction, a "how the scores are calculated" page showing the factor table and method, and the known limitations stated honestly. Store this in `site/js/data/evidence.js` built from the register, so updating the register and the site stays in step. Link to Resources from every score display.

## What this tool is, and what it isn't

It's a guide. It asks the questions a good investigator would ask, explains the concepts in plain English, links to the actual regulator material, gives an indicative risk score, and lets the user print a summary of what they worked through. It never tells the user what the legal outcome is, and the score is never presented as a determination.

Nothing the user enters is stored or sent anywhere. Everything runs in the browser. No accounts, no analytics, no backend, no localStorage for case details. A user might type sensitive information about a real person, so treat that seriously.

Every page shows a short disclaimer and a "content current as at [date]" line pulled from one place in the code so I can update it once.

## Indicative risk score

The score sits at the end of the "Understanding the risk" section and is labelled "Indicative" everywhere it appears.

Inputs come from what the user has already entered: which hazards are present, frequency and duration of exposure (one-off, recurring, sustained), severity of potential harm, how many hazards are combining, and what controls are already in place and how effective they seem. The output is a band (Low, Moderate, High, Very high) rather than a precise number, shown with a plain-English explanation of which inputs drove it, what the score can't tell you, and a reminder that the duty to manage the risk exists whatever the band.

Score work-related factors only. Individual factors (such as someone's personal circumstances) can be noted to inform support, but they must not raise or lower the risk rating, because the duty sits with the work and how it's designed.

Put all weights and band thresholds in the data file with a comment referencing the matching row in `EVIDENCE_REGISTER.md`, so anyone reusing the tool can see and adjust the logic. Include a short "How this score works" panel the user can expand.

## Education tools

Start simple, but build it so it can grow. Version one is a plain knowledge base. Later I'll want it more dynamic and linked to other kinds of content (video, podcasts, articles, interactive exercises, my own Substack and site articles). So the content model matters more than the first UI.

Version one, built in Phase 8: a "Learn more" expandable panel attached to key concepts (the hierarchy of controls, how hazards combine, hazard management vs conduct processes, consultation duties, notifiable incidents). A glossary with terms linked wherever they appear. Two or three short worked scenarios that don't identify any real person or organisation. Short knowledge checks (three to five questions) at the end of the hazard library and the controls section, with an explanation for each answer.

The content model, in `site/js/data/education.js`: every item is an entry with an `id`, `title`, `type`, `summary`, `body` or `url`, `tags` (hazard ids, topics), `audience` (HR, HSR, both), `jurisdiction` (all, vic, model), `level` (intro, practitioner), `source` and attribution where it isn't mine, `reviewed` date, and `related` (ids of other items). Start with types `text`, `glossary`, `scenario`, `quiz` and `link`. Design it so adding `video`, `podcast`, `article`, `interactive` or `download` later means adding a renderer and some entries, not restructuring.

One render function picks a renderer by `type`. Any type without a renderer falls back to a titled card linking out, so new content can be added before its renderer exists. Hazards, triage, investigation and controls content reference education items by `id` or tag, never by copying text, so one edit updates everywhere. Add a simple "Related learning" block wherever a tag matches.

Embeds and privacy: the site's CSP blocks third-party content. In version one, external content opens as a link in a new tab rather than embedding. If I later want embedded video, ask me first, use privacy-friendly embeds (for example youtube-nocookie.com), and update `netlify.toml` to allow only that domain. Never add anything that tracks users.

Keep a short `docs/education-roadmap.md` listing content types and features I've mentioned but we haven't built yet, so they're parked rather than forgotten.

## Audience

Two groups who come at this from different angles. HR people often arrive thinking about conduct, grievances and who did what. HSRs arrive thinking about hazards, consultation and whether the employer is meeting its duties. Use a single path for both, with short role-specific callouts where their perspectives differ (for example, where an HSR's right to be consulted applies, or where a conduct complaint runs in parallel with the hazard process rather than replacing it).

The tone is neutral and practical. It must not read as a claims-defence tool or as an advocacy tool. Worker reports are treated as evidence, not as something to be "reality tested." Avoid language that frames the worker's account as subjective or emotional by default.

## Jurisdictions

A selector at the top: Victoria (OHS Act 2004 and the OHS (Psychological Health) Regulations 2025, in force from 1 December 2025) and Model WHS (covering the harmonised states and territories), with a note that Queensland requires written prevention plans. The selector swaps terminology (employer vs PCBU, OHS vs WHS), regulator names and links. Build this so adding another jurisdiction later means editing a data file, not rewriting components.

## Content rules (important)

Do not write legal or regulatory content from memory. For anything that states what the law requires, a section number, a definition, or a threshold, put a clearly marked placeholder like `TODO-VERIFY: [what needs checking] — source: [Code of Practice / Compliance Code / Act section]` and I'll fill it in from the source documents. Plain-English explanations, education content and investigation questions you can draft, but flag them for my review.

Do not include the "reasonable management action" test anywhere in the hazard assessment, scoring or investigation flow. It's a workers compensation and Fair Work concept, not a WHS/OHS duty. If it appears at all, it goes in a separate, clearly labelled "related processes" section.

Psychological injury rarely meets the notifiable incident threshold. The notification check should link to the regulator's definition rather than paraphrase it.

Support contacts shown on the triage screen: 000 for emergencies, Lifeline 13 11 14, Beyond Blue 1300 22 4636, and a prompt to contact the organisation's EAP.

## Structure

1. **Hazard library.** The 14 psychosocial hazards from the Safe Work Australia Code of Practice, each with a plain-English summary, workplace examples and early warning signs. Searchable and filterable. Works as a standalone reference. Ends with a knowledge check.
2. **Something's happened (triage).** Immediate safety and support first. Then the notifiable incident check. Then an explanation that WHS/OHS hazard management, HR conduct processes and workers compensation can all run at the same time.
3. **Understanding the risk.** Prompts for objective information (rosters, timesheets, workloads, staffing, prior reports), alongside what the worker and others have said. Frequency, duration and severity. How hazards combine. An explicit step on consulting workers and HSRs. Ends with the indicative risk score.
4. **Investigating systemic factors.** The question is "what conditions allowed this harm to occur," not "who did what." Questions on work design, supervisor capability, reporting systems that failed, and cultural or environmental drivers.
5. **Controls and review.** The hierarchy of controls applied to psychosocial hazards, with work redesign at the top and individual supports like EAP at the bottom. A 30/60/90 day review prompt. A branch into return to work considerations if someone has already been injured. Ends with a knowledge check.

Plus a **Learn** area holding the glossary and worked scenarios, and a **Printable summary**: a clean print view (print-to-PDF via the browser) of the user's answers and indicative score, with the disclaimer and date.

## Tech approach

Plain HTML, CSS and vanilla JavaScript. No framework, no build step, no npm unless there's a real reason, and if there is, ask me first. I should be able to open `index.html` with VS Code's Live Server extension and see it working.

Keep all content (hazards, questions, scoring weights, education material, jurisdiction terms, links, support contacts, the "current as at" date) in the small data files under `site/js/data/` so I can update wording without touching layout or logic.

Mobile friendly, readable, accessible (proper headings, labels on form fields, keyboard navigable, good contrast). Clean and professional, not corporate-stock. Include print styles.

## Folder structure and token efficiency

The project lives at `C:\dev\psychological-hazards`. Only `site/` is published to Netlify, so drafts, research papers and working files never go live by accident.

The layout is designed to keep each session cheap. Claude Code loads the root `CLAUDE.md` every session, so it stays short (under 60 lines) and points to longer docs that are read only when relevant. Folder-level `CLAUDE.md` files load only when work happens in that folder. Site content is split into small data files so a wording fix loads one file, not all of them. `BUILD_LOG.md` stays a short index, with phase detail in `docs/phases/`. `.claude/settings.json` blocks reads of large or copyrighted folders.

```
psychological-hazards/
├── CLAUDE.md                  SHORT (≤60 lines): summary, folder map, key rules, current phase, pointers
├── README.md                  overview, run locally, deploy, live and repo URLs
├── BUILD_LOG.md               index table: phase | date | summary | link to docs/phases/
├── EVIDENCE_REGISTER.md       evidence behind every score and claim
├── LICENSE
├── netlify.toml               publish = "site", empty build command, security headers
├── .gitignore
├── .claude/
│   └── settings.json          deny Read on research/papers/**, site/downloads/**, reference/**
├── docs/
│   ├── brief.md               this full brief
│   ├── content-rules.md       TODO-VERIFY rules, no RMA, tone, privacy (extracted from brief)
│   ├── scoring-method.md      how the indicative score works
│   ├── education-roadmap.md   content types and features parked for later
│   └── phases/
│       └── phase-N.md         goal, what changed, decisions and why, deferred, TODO-VERIFY added, how to test
├── prompts/
│   └── phase-N.md             exact prompts used per phase, for others to replay
├── reference/
│   └── risk-model/            original Risk Model source, read only
├── research/
│   ├── papers/                PDFs, gitignored, never read by Claude
│   └── notes/                 short extraction notes that feed the register
├── resources/                 editable sources for the printable guides
│   ├── CLAUDE.md              ~10 lines: shared brand, disclaimer, version and current-as-at date on every guide
│   ├── brand/
│   ├── guides/
│   ├── templates/
│   ├── checklists/
│   └── posters/
└── site/                      the only folder Netlify publishes
    ├── CLAUDE.md              ~10 lines: vanilla HTML/CSS/JS, no build step, accessibility, print styles, CSP, data lives in js/data/
    ├── index.html
    ├── css/styles.css
    ├── js/
    │   ├── app.js
    │   ├── scoring.js
    │   └── data/
    │       ├── hazards.js
    │       ├── jurisdictions.js     includes disclaimer text and current-as-at date
    │       ├── triage.js
    │       ├── investigation.js
    │       ├── controls.js
    │       ├── education.js
    │       ├── evidence.js          built from EVIDENCE_REGISTER.md
    │       └── resources.js         list of downloadable guides
    ├── assets/img/
    ├── assets/icons/
    └── downloads/guides/  downloads/templates/  downloads/checklists/  downloads/posters/
```

Working habits that keep tokens down: read `docs/brief.md` only when starting a phase or when a decision depends on it, not every session. Open only the data file being changed. Don't re-read files just written. When the reference deny is lifted for the evidence audit, read the Risk Model once, record what's needed in `EVIDENCE_REGISTER.md`, and work from the register after that.

## Physical resource guides

The site includes a **Downloads** area of printable resources for HR and HSRs. Source files live in `resources/`, finished PDFs go in `site/downloads/`, and `site/js/data/resources.js` lists each one with a title, description, audience, jurisdiction, version number and "current as at" date so the Downloads page builds itself. Every guide carries the same disclaimer and date as the site and uses the shared brand files.

Starting set to plan for (drafts, flagged for my review): a hazard quick-reference card covering the 14 hazards, a triage checklist for the first 24 hours, an investigation record template, a controls and action plan template with the hierarchy of controls, a 30/60/90 day review template, and a one-page explainer on how hazard management, conduct processes and workers compensation run side by side.

When you generate PDFs, keep the editable source in `resources/` and only the output in `site/downloads/`. Never put research papers in `site/`.

## Deployment workflow

Local first, then GitHub, then Netlify. I test everything locally with Live Server before anything is pushed.

GitHub: one public repository for the project. If the GitHub CLI (`gh`) is installed, use it to create the repo and push; if not, walk me through creating it on github.com and connecting the local folder. Never commit secrets, personal notes or anything outside the project folder, and set up `.gitignore` before the first commit (include `.DS_Store`, `.vscode/` settings that are personal, and any scratch files).

Netlify: connected to the GitHub repo so every push to `main` deploys automatically. There's no build step, so the publish directory is `site` and the build command is empty. Put this in `netlify.toml` so the setup lives in the repo and anyone who forks it gets the same config. Add sensible security headers there too (Content-Security-Policy suited to a static site with no external scripts, X-Frame-Options, Referrer-Policy, X-Content-Type-Options). Walk me through linking the repo in the Netlify dashboard the first time, since that step happens in the browser.

The working routine for each phase: build and test locally, commit, push to `main`, check the Netlify deploy succeeded and the live site works, then tag the phase and push the tag. Tell me if a push or deploy fails and what to do about it rather than working around it silently.

Once the GitHub repo exists, replace the relative links on the "How this was built" page with the full GitHub URLs, and add the live Netlify URL and repo URL to the README.

## Build tracking

This is how other people will be able to follow or replay the build, so keep it up to date as part of every phase, not as an afterthought.

Use git. Commit regularly with clear messages, and at the end of each phase create a tag (`phase-1`, `phase-2` and so on) and push it to GitHub so anyone can check out the project exactly as it was at that point. Also create a GitHub Release for each phase tag with a short summary from the build log, so people browsing the repo can see the phases without using git.

Keep `BUILD_LOG.md` as a short index table (phase, date, one-line summary, link). Put the full entry for each phase in `docs/phases/phase-N.md`: the phase goal, what was built, files added or changed, decisions made and why, anything deferred, TODO-VERIFY items added, and how to test it. Update "Current phase" in the root `CLAUDE.md` at the end of each phase.

Save the prompt used for each phase in `prompts/phase-N.md`, including any follow-up instructions I gave during that phase, so someone else can feed the same prompts to their own AI assistant.

Add a small "How this was built" page on the site that summarises the phases and links to the build log, prompts and phase releases on GitHub.

Before Phase 1, ask me which licence I want. A common choice for this kind of project is MIT for the code and Creative Commons BY 4.0 (or BY-NC 4.0 if I don't want commercial reuse) for the written content.

## Phases

Phase 0a, setup: this brief arrives as `psychosocial-guide-prompt.md` in the project root. Move it to `docs/brief.md` and save a copy as `prompts/phase-0-brief.md`. Create the folder structure above with `.gitkeep` in empty folders. Write the root `CLAUDE.md` (under 60 lines: one-paragraph summary, folder map, key rules (guide only, nothing stored, no legal content from memory so use TODO-VERIFY, no reasonable management action in assessment or scoring, work in phases and stop after each), "Current phase: 0", and pointers to `docs/brief.md`, `docs/content-rules.md` and `EVIDENCE_REGISTER.md` to read only when relevant). Write `docs/content-rules.md` by extracting the content rules, audience tone and privacy sections from the brief. Write the short `site/CLAUDE.md` and `resources/CLAUDE.md`. Create `.claude/settings.json` denying Read on `research/papers/**`, `site/downloads/**` and `reference/**`. Write `.gitignore`, `netlify.toml`, the `BUILD_LOG.md` index and a placeholder `site/index.html`. Show me the final tree and stop.

Phase 0b, pipeline: check what's installed (git, `gh`, VS Code Live Server), ask me about the licence, git init and first commit, then create the GitHub repo, push, connect Netlify, and confirm the placeholder is live before any real building starts.

Phase 1 to 9 as below, with one addition: each phase that creates content also adds any matching printable resource to `resources/` as a draft. Building finished PDFs into `site/downloads/` and the Downloads page happens in Phase 9.

Phase 1: jurisdiction selector, disclaimer and date system, and the hazard library with placeholder content structure for all 14 hazards.

Phase 2: the triage section.

Phase 3: understanding the risk and investigating systemic factors, with answers held in memory only.

Phase 4: evidence audit. First ask me to remove the `reference/**` deny from `.claude/settings.json`. Extract the Risk Model's factors and weights, complete the factor table in `EVIDENCE_REGISTER.md`, flag gaps and questionable weights, and give me a short report and a list of papers or tables I need to check. Stop for my review before any scoring is built.

Phase 5: the indicative risk score and "How this score works" panel, using the audited weights.

Phase 6: the Resources section built from the register.

Phase 7: controls, review, return to work branch, and the printable summary.

Phase 8: education tools, version one (content model and type renderers, learn-more panels, glossary, scenarios, knowledge checks, related learning blocks, education roadmap).

Phase 9: Downloads page and finished PDFs of the resource guides, accessibility and mobile pass, "How this was built" page, README, and a list of every remaining TODO-VERIFY and TO-CHECK item for me to work through.

Start with Phase 0a. Before writing code, give me a short summary of how you plan to structure it and ask anything you need to know.

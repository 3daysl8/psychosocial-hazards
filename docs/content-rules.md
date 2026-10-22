# Content rules

Extracted from `docs/brief.md`. Read before writing any user-facing content (site, education items, printable resources).

## What the tool is and isn't

- A guide. It asks the questions a good investigator would ask, explains concepts in plain English, links to regulator material, gives an indicative risk score, and lets the user print a summary.
- It never tells the user what the legal outcome is. The score is never presented as a determination and is labelled "Indicative" everywhere it appears.
- Every page shows a short disclaimer and a "content current as at [date]" line, both pulled from one place in the code (`site/js/data/jurisdictions.js`).
- Match the tone and disclaimer approach of the Psychological Risk Model: face validity only, for education, not for individual employment or clinical decisions.

## Legal and regulatory content

- Do not write legal or regulatory content from memory. Anything stating what the law requires, a section number, a definition, or a threshold gets a placeholder:
  `TODO-VERIFY: [what needs checking] — source: [Code of Practice / Compliance Code / Act section]`
- Plain-English explanations, education content and investigation questions may be drafted, but flag them for review.
- The notifiable incident check links to the regulator's definition. Don't paraphrase it. Psychological injury rarely meets the notifiable incident threshold.
- "Reasonable management action" is a workers compensation and Fair Work concept, not a WHS/OHS duty. It must not appear in hazard assessment, scoring or the investigation flow. If it appears at all, it goes in a separate, clearly labelled "related processes" section.

## Using source material (licensing)

- Safe Work Australia's Codes of Practice are CC BY-NC 4.0. This guide's content is CC BY 4.0. So: **write in our own plain English and link to the source. Don't copy or closely adapt SWA wording.**
- Short formal definitions (e.g. bullying, sexual harassment) may be quoted word for word, in quotation marks, with the source named. Quote rather than paraphrase where the wording carries legal weight.
- Check the licence of any other regulator material before reusing its wording.

## Research and evidence

- Every scored factor, weight and regulatory claim traces to a row in `EVIDENCE_REGISTER.md`.
- Don't invent figures. Unsourced weights are marked `GAP`. Unchecked sources are `TO-CHECK`.

## Audience and tone

- Two audiences on one path: HR (often arriving via conduct, grievances, who did what) and HSRs (hazards, consultation, whether duties are met). Use short role-specific callouts where perspectives differ, e.g. where an HSR's right to be consulted applies, or where a conduct complaint runs in parallel with the hazard process rather than replacing it.
- Neutral and practical. Not a claims-defence tool, not an advocacy tool.
- Worker reports are evidence, not something to be "reality tested". Don't frame the worker's account as subjective or emotional by default.
- Systemic framing: "what conditions allowed this harm to occur", not "who did what".
- Hierarchy of controls: work redesign at the top, individual supports (e.g. EAP) at the bottom.
- Scoring uses work-related factors only. Individual factors can be noted to inform support but never raise or lower the rating, because the duty sits with the work and how it's designed.
- Worked scenarios never identify a real person or organisation.

## Jurisdictions

- Victoria: OHS Act 2004 and the OHS (Psychological Health) Regulations 2025 (in force from 1 December 2025, per brief; verify wording before publishing).
- Model WHS: harmonised states and territories. Note that Queensland requires written prevention plans (verify before publishing).
- The selector swaps terminology (employer vs PCBU, OHS vs WHS), regulator names and links. All of it lives in a data file.

## Support contacts (triage screen)

- 000 for emergencies
- Lifeline 13 11 14
- Beyond Blue 1300 22 4636
- Prompt to contact the organisation's EAP

## Privacy

- Nothing entered is stored or sent. Everything runs in the browser.
- No accounts, analytics, backend, trackers, or localStorage for case details. Users may type sensitive information about real people.
- The CSP blocks third-party content. External content opens as a link in a new tab, not an embed. Embedded video only after asking, using privacy-friendly embeds (e.g. youtube-nocookie.com), with `netlify.toml` updated to allow only that domain.

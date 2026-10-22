# Phase 0 prompts

## 0a: scaffold

**Prompt 1** (with the brief saved as `psychosocial-guide-prompt.md` and a starter `EVIDENCE_REGISTER.md` in the project root):

> Lets kick of this new project C:\dev\psychological-hazards

The assistant read the brief, which ends "Start with Phase 0a. Before writing code, give me a short summary of how you plan to structure it and ask anything you need to know." The full brief is in `phase-0-brief.md`.

**Follow-up questions asked by the assistant, and answers:**

1. Which licence? Answer: MIT for code + CC BY 4.0 for written content.
2. Should an "avoid em dashes" writing preference apply to this project (including the TODO-VERIFY marker)? Answer: No, keep the brief's marker as written.

The assistant then presented a plan for 0a, which was approved as-is.

## 0b: pipeline

> Ok - step me through what needs to happen next

The assistant checked installed tools and laid out the steps (git identity, Live Server, git init, GitHub repo, Netlify, verify, close phase), asking for git email, repo name and Netlify status.

> use git noreply address, change the repo to psychosocial hazards as that the collective name of the reforms and legislation. I already have netlify linked to Github

The assistant committed, created the GitHub repo and pushed, then gave dashboard steps for Netlify.

> Can you just do it

The assistant created and linked the Netlify site with the Netlify CLI (`netlify api createSite` with the repo and the existing GitHub app installation), confirmed the deploy and headers, and closed the phase.

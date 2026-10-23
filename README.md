# Psychosocial Hazard Investigation Guide

A free, browser-only guide for HR practitioners and Health and Safety Representatives (HSRs) in Australia. It walks through identifying, investigating and controlling psychosocial hazards after an incident or report, gives an indicative risk score, and explains the concepts along the way.

It's a guide, not legal advice. Nothing you type is stored or sent anywhere: everything runs in your browser.

Part of the same family as the [Psychological Risk Model](https://psychologicalriskmetre.netlify.app/).

- **Live site:** https://psychosocialhazards.netlify.app
- **Repo:** https://github.com/3daysl8/psychosocial-hazards

**Status:** in development (Phase 4 complete, awaiting review). See [BUILD_LOG.md](BUILD_LOG.md).

## Run it locally

1. Open this folder in VS Code.
2. Install the Live Server extension if you don't have it.
3. Right-click `site/index.html` and choose "Open with Live Server".

No install, no build step.

## Deploy

Netlify publishes the `site/` folder on every push to `main`. Settings (publish folder, empty build command, security headers) are in `netlify.toml`, so a fork connected to Netlify gets the same setup with no dashboard changes.

## Reuse it

- The finished site and its data files can be forked and adapted.
- The build is tracked phase by phase. `BUILD_LOG.md`, `docs/phases/` and `prompts/` show exactly what was done and which prompts were used, so you can replay it with your own AI assistant.
- The evidence behind every score is in `EVIDENCE_REGISTER.md`.

## Licence

Code: MIT. Written content: CC BY 4.0. See [LICENSE](LICENSE).

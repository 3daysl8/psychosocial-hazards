# site/ (published by Netlify)

- Plain HTML, CSS, vanilla JS. No framework, no build step, no npm. Must work via VS Code Live Server.
- All content (hazards, questions, weights, education, jurisdiction terms, links, contacts, disclaimer, current-as-at date) lives in small files under `js/data/`. Logic and layout never hold wording.
- CSP allows only same-origin scripts and styles: no inline `<script>`/`style=""`, no CDNs, no third-party embeds, no trackers.
- Nothing the user enters is stored or sent. No localStorage for case details.
- Accessible: proper heading order, labels on every field, keyboard navigable, visible focus, WCAG AA contrast.
- Mobile friendly. Print styles for the printable summary.
- Every page shows the disclaimer and "current as at" line from `js/data/jurisdictions.js`.
- Weights and thresholds carry a comment naming their `EVIDENCE_REGISTER.md` row.

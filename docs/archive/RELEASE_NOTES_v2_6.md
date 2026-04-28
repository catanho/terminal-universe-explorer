# Release Notes — v2.6 Functional Explorer Audit

v2.6 turns the Explorer from a polished static interface into an audited functional public alpha.

## Added

- Root `index.html` for GitHub Pages.
- Data-backed Explorer cards loaded from `data/terminals_v2_3_public_alpha.json`.
- Search across terminal name, language, lineage, notes, engine, rendering model, extensibility, and source fields.
- Filters for category, status, and ecosystem.
- Explorer Cards and Periodic Groups views.
- Terminal detail modal.
- Two-terminal comparison workflow.
- Visible-data CSV export.
- Persistent Light/Dark mode.
- Functional audit script: `npm run audit`.
- Generated audit report: `docs/FUNCTIONAL_AUDIT_v2_6.md`.

## Release discipline

Do not announce publicly until:

1. `npm run audit` passes.
2. GitHub Pages serves the Explorer, not README markdown.
3. Manual browser smoke checks pass.

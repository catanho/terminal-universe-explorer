# Release Notes — v2.7 Interaction Audit

This release fixes the first real QA findings from local use of the functional Explorer.

## Fixed

- Removed the redundant `Category` filter from the public interface because it duplicated the derived ecosystem grouping.
- Replaced it with more meaningful technical filters:
  - rendering generation
  - status
  - engine family
  - rendering surface
- Renamed **Periodic groups** to **Explorer groups** to avoid overclaiming the visual metaphor.
- Made **Scientific Mode** visibly change the interface:
  - cards expand with ontology fields
  - mode banner changes
  - toggle uses `aria-pressed`
  - Explorer groups switch to engine-family grouping in Scientific Mode
- Fixed CSV export semantics:
  - exports all currently visible records
  - exports all dataset columns, not only the card/display subset
  - filename includes exported record count

## Status

Release candidate for pre-public testing. Do not announce until the live GitHub Pages version passes manual QA.

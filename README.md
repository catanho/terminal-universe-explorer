# Terminal Universe Explorer

**A Periodic Table of Terminal Emulator Design**

Terminal Universe Explorer is an open, hybrid ontology and public explorer for Unix/Linux and related terminal emulators.

The project has two linked outputs:

1. **A Multidimensional Ontology of Unix/Linux Terminal Emulators** — the paper and formal dataset.
2. **Terminal Universe Explorer** — a public-facing visual tool for developers, researchers, enthusiasts, and curious users.

## The hybrid decision

This project explicitly uses a **hybrid ontology model**:

- **Formal ontology layer:** controlled vocabulary, reproducible records, validation, and machine-readable data.
- **Explorer layer:** readable labels, visual grouping, and plain-language summaries for the broader public.

This means the same data can support scientific review, software reuse, and casual exploration.

## Current public alpha

- Dataset records: **79**
- Scope: standalone terminal emulators only; multiplexers, shells, embedded IDE terminals, and non-emulator wrappers are excluded.
- Core data: `data/terminals_v2_3_public_alpha.csv`
- JSON data: `data/terminals_v2_3_public_alpha.json`
- Ontology spec: `ontology/HYBRID_ONTOLOGY_SPEC_v2_2.md`
- Validation report: `docs/VALIDATION_REPORT_v2_2.md`
- Explorer prototype: `app/index.html`

## Quick start

Open `app/index.html` in a browser, or serve the repository locally:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000/app/
```

## Validation

```bash
python3 scripts/validate_release_candidate.py
```

## Suggested publication route

- Archive tagged releases on Zenodo to mint a DOI.
- Submit the software artifact to JOSS.
- Submit the ontology/paper narrative to PeerJ Computer Science, F1000Research, or a similar open venue.

## Repository map

```text
app/        Static public Explorer prototype
data/       CSV/JSON/YAML ontology data
docs/       Validation reports, checklist, release notes
ontology/   Formal hybrid ontology specification
paper/      Manuscript draft and JOSS notes
schema/     JSON Schema
scripts/    Validation utilities
```

## License

Code is MIT. Data/text licensing should be finalized before public release; see `DATA_LICENSE.md`.


## v2.6 Functional Explorer

This release makes the Explorer interactive on GitHub Pages: terminal cards open detail views, periodic tiles are clickable, filtered results can be exported as CSV, and two terminals can be compared side by side.

## v2.5 Theme Integration

The Explorer includes persistent Light/Dark mode support with system-preference detection and a subtle tricolor identity palette.

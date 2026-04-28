# Terminal Universe v2.2 Release Candidate — Validation Report

Dataset: `data/terminals_v2_2_release_candidate.csv`  
Records: **79**  
Fields: **38**

## Scope validation

The release-candidate dataset is restricted to terminal emulators. Multiplexers, shells, embedded IDE terminals, and non-emulator wrappers are out of scope.

Detected blocking issues: **0**

- None detected.

## Category distribution

| Category | Count |
|---|---:|
| Experimental_UI | 30 |
| VTE_ecosystem | 23 |
| X11_legacy | 13 |
| GPU_modern | 10 |
| Qt_ecosystem | 3 |

## Status distribution

| Status | Count |
|---|---:|
| Active | 40 |
| Maintenance | 15 |
| Legacy | 12 |
| Experimental | 12 |

## Confidence distribution

| Confidence | Count |
|---|---:|
| high | 55 |
| medium | 20 |
| low | 4 |

## Hybrid additions in v2.2

- Added public-facing category labels.
- Added public-facing status labels.
- Added one-sentence Explorer summaries.
- Added parsed lineage list fields for software and concepts.
- Preserved the formal v2.1 columns for reproducibility.

## Release recommendation

The dataset passes the core release-candidate checks. Remaining improvements should focus on documentation, source verification depth, and frontend polish rather than structural cleanup.

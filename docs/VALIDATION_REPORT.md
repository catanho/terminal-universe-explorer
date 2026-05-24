# Terminal Universe v2.1 Validation Report

## Hybrid decision

This release explicitly uses a **hybrid ontology**: a formal, constrained, reproducible data layer paired with public-friendly labels and explanations for the Terminal Universe Explorer.

## Automated checks

- Input rows: 80
- Output rows: 79
- Removed scope violations: 1
- Removed: Black Screen
- Duplicate canonical IDs after normalization: 0
- Duplicate names: 0
- Rows with null FirstReleaseYear: 14
- Rows with null Language: 3

## Category split

The legacy `Category` column is retained for backward compatibility but decomposed into `rendering_generation`, `ecosystem`, and `era` for cleaner analysis.

## Scope rule

Included records are terminal emulators only. Multiplexers, embedded IDE terminals, shells, and wrappers are excluded from the canonical dataset.

## Remaining acceptable nulls

Nulls are allowed for unknown implementation language and unknown first release year. They replace literal `unknown` strings for machine readability.

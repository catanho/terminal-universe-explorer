# Terminal Universe Explorer v3.0 — final minor polish

## Workbench Mode changes

- Removed the separate Statistics card.
- Changed Dataset card to Dataset/Statistics with the requested combined text.
- Updated Similarity score wording to remove “v6 model”.
- Updated Similarity Matrix wording to “core model”.
- Added terminal-name-only autocomplete suggestions to the Workbench search field.
- Changed Explore Mode button in Workbench controls to burgundy.
- Added Classic TTY special casing in labels.
- Removed “terminals” from background group labels in the Similarity Graph.
- Reworked graph lines as SVG line elements with rounded caps to avoid broken/blunt line artifacts.
- Removed Representative Sets matrix download buttons.
- Made Representative Set cards more compact.
- Removed “v6” wording from Representative Set card summaries.
- Kept Rendering × Engine gap matrix available and functional.

## Explore Mode changes

- Renamed modal sections:
  - V6 Structural Identity → Structural Identity
  - V6 Extended Model → Extended Model
  - Nearest Neighbors V6 → Nearest Neighbors
- Made modal fields more compact.
- Removed “v6” wording from card/modal summary descriptions where displayed.

## Validation

- Workbench JavaScript parse: PASS
- Explore JavaScript parse: PASS
- Missing fetch targets: 0
- Missing download targets: 0
- SVG parse errors: 0

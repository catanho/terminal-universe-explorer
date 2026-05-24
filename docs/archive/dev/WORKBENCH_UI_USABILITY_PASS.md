# Workbench Mode UI usability pass

## Problems observed from screenshots

- Search looked present but did not visibly affect all active views.
- Representative cards were clickable, but the modal could appear low/clipped and felt unreliable.
- The green Explore control in the top control row appeared as an unlabeled block.
- Matrix view did not provide enough feedback when filtered.
- Role/outlier summary did not react to search.
- Empty search results had no clear message.

## Implemented fixes

### Search behavior
- Search now filters:
  - similarity graph nodes/edges
  - role/outlier summary cards
  - matrix rows/columns
  - representative-set cards
  - overview dimension tables
- Added result counter: `n / 67 terminals`.
- Added Clear button.
- Search now includes more fields:
  - name/id
  - rendering model
  - engine family/group/implementation
  - interaction complexity
  - semantic/workspace model
  - runtime/host platform
  - ecosystem/context
  - language
  - activity/maturity labels

### Cards and modal
- Representative cards and role-summary buttons open the correct terminal.
- Matrix cells now open the row terminal.
- Modal is now fixed, centered, scrollable, and less likely to be clipped.
- Focus outlines were added for cards, graph nodes, and neighbor buttons.

### Feedback states
- Added explicit empty-state messages for graph, matrix, and representative cards.
- Result counter updates when the view or search changes.

### Control polish
- The previously blank top control was replaced with a visible Explore Mode link plus Clear button.
- The Workbench interaction now feels more obviously functional.

## Still desirable later

- Add a dedicated filter drawer for fields rather than only free-text search.
- Add a “highlight matches” mode in the graph instead of fully hiding non-matches.
- Add pairwise terminal compare mode from matrix clicks.
- Add keyboard shortcuts for switching views.
- Add a reset-all controls button.

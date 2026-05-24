# Interaction polish update

## Fixed

- Explore Mode button in Workbench controls is now rounded like Clear search.
- Light mode received explicit styling fixes for body, cards, drawers, dialogs, matrix, and graph background.
- Search now suggests terminal names only.
- Selecting/searching a terminal now highlights it while keeping the full context visible:
  - Similarity Graph keeps all nodes visible and highlights the match.
  - Similarity Matrix keeps all rows/columns visible and highlights matching row/column/cells.
  - Representative Sets keep all cards visible and highlight matching cards.
- Graph hover now dims unrelated nodes and unrelated relationship lines more aggressively.
- Graph relation lines are rendered as SVG lines with rounded caps to avoid broken rectangular ends.
- Cards in Workbench and Explore are more compact.
- Modal fields in both modes are more compact.
- Visible “V6” wording was removed from Explore modal section titles and card/modal summaries.

## Validation

- Workbench JavaScript parse: PASS
- Explore JavaScript parse: PASS
- Missing fetch targets: 0
- Missing download targets: 0
- SVG parse errors: 0

# Edge-mode cleanup

## Why there were many unconnected nodes

Semantic/workspace mode was showing all terminals while drawing only semantic/workspace edges. Most terminals do not have workflow/document or workspace relationships, so they appeared as unconnected context nodes.

Now, when a single non-core relationship mode is selected, the graph shows only terminals participating in that relationship type.

## Why Contextual pathways showed no connections

The graph data had no `historical/context` edges even though the UI had a Contextual pathways toggle.

Added a sparse contextual pathway layer from shared ecosystem / architecture-epoch context.

Current edge counts:

```json
{
  "similarity": 164,
  "lineage/engine": 62,
  "semantic/workspace": 21,
  "historical/context": 5
}
```

## Button polish

The Explore Mode button now uses the same rounded pill geometry as Clear search while preserving burgundy color.

## Validation

```text
Workbench JS: PASS
Explore JS: PASS
Missing fetch targets: 0
Missing download targets: 0
SVG parse errors: 0
```

# Final graph layout polish

## Implemented

- The downloadable `nearest_neighbor_pathway_graph.svg` now matches the default **Similarity only** graph view.
- The graph JSON now stores a larger 1600 × 1000 canvas used by both the front-end and SVG export.
- Cluster centers were spread further apart.
- Dense groups use a two-ring deterministic layout to reduce node/name overlap.
- The front-end graph reads the canvas dimensions from `science_graph_v6.json`, so UI and export share the same coordinate system.
- The default Workbench graph is reset to the Similarity-only view on load.

## Model correctness

Relationship correctness was not sacrificed:
- node identities are unchanged
- edge definitions are unchanged for the similarity graph
- the exported SVG uses the same similarity edge set used by the default UI
- optional UI toggles still use the additional edge layers

## Validation

```text
Workbench JS: PASS
Explore JS: PASS
SVG parse errors: 0
Missing fetch targets: 0
Missing download targets: 0
Similarity edges: 164
All graph edges: 233
```

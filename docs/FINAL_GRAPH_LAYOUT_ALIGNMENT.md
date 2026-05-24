# Final graph layout alignment

## Implemented

- The downloadable `nearest_neighbor_pathway_graph.svg` now matches the default Similarity-only graph view.
- The graph layout was expanded from the previous cramped layout to a larger 1600 × 1000 projection.
- Group centers and within-group node positions were recalculated to reduce node/name overlap without changing the similarity model.
- The UI graph now reads canvas dimensions from `science_graph_v6.json`, so the front-end and SVG use the same coordinates.
- Default graph mode is now Similarity-only, matching the downloadable figure.

## Model integrity

The relationship model was not changed:
- Similarity edges still connect top nearest neighbors under the core similarity model.
- Other edge types remain available through UI toggles.
- Only layout coordinates and SVG export mode were changed for legibility/alignment.

## Checks

```json
{
  "workbench_js": "PASS",
  "explore_js": "PASS",
  "graph_canvas": {
    "width": 1600,
    "height": 1000
  },
  "download_svg_mode": "similarity",
  "similarity_edges": 164,
  "all_edges": 233,
  "missing_fetch": [],
  "missing_downloads": [],
  "svg_errors": []
}
```

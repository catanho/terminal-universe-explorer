
# Science Mode Phase 5 Stabilization

Implemented from the Phase 4 audit recommendations:

## Data / validation policy
- Empty `FirstReleaseYear` is explicitly allowed.
- Unknown years are treated as missing metadata, not a hard failure.

## Gap Explorer
- Added visible `Rendering × Engine` tab.
- Aligned visible gap matrices with downloadable SVG/CSV artifacts.

## Similarity Graph
- Added edge-type toggles:
  - Similarity only
  - Lineage/engine only
  - Semantic/workspace only
  - Contextual pathways
- Added cluster/community size plot.
- Added graph artifact export.

## Model transparency
- Added Model assumptions drawer.
- Added guided tour:
  - Start with matrix
  - Then explore graph
  - Then inspect gaps
- Added per-terminal explanation in details:
  - why it is in this cluster
  - why neighbors are nearest
  - which fields caused similarity

## Artifacts
- Added export-all science artifacts ZIP.
- Added explicit note that field-level confidence and user-selectable similarity weights are future work.
- v6 default similarity weights remain locked.

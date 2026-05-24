# Terminal Universe Workbench Mode — polish implementation report

## Implemented

### Naming and framing
- Scientific/Science Mode is now presented as **Workbench Mode**.
- The analytical layer is framed as a relationship projection, not a geographic map.
- Model assumptions were rewritten to be precise but informal.

### How to read this
Added an explicit guide:

- Nearby terminals share structural properties.
- Distant terminals differ in key dimensions.
- Clusters represent common design patterns.
- Isolated nodes indicate unusual or boundary designs.
- Connections are relationship projections, not geographic routes.

### Explanation layer
Terminal detail panels now explain:

- why the terminal is in its cluster
- who it is similar to
- why the similarities exist
- what makes it different from its nearest neighbor
- what role it plays in the space

Added model-derived role signals:

- cluster core
- cluster member
- bridge between groups
- boundary / unusual design
- representative basis member

Also added:

- outlier score
- boundary-link count
- representative-set membership

### Graph workbench
Added graph presets:

- Core similarity view
- Lineage view
- Semantic/workspace view
- All relations

Existing edge toggles remain available:

- similarity
- lineage/engine
- semantic/workspace
- contextual pathways

### Basis and gaps
- Representative sets are explicitly framed as explanatory, not rankings.
- Gap Explorer remains model-defined, not a list of automatically desirable products.

### Exports
- Added workbench explanation metadata.
- Export bundle renamed to: **Export all science analyzes**.
- The export ZIP now includes generated analysis files and workbench explanations.

## Sanity result

```text
JavaScript parse: PASS
Missing fetch targets: 0
Missing download targets: 0
SVG XML parse errors: 0
Required controls: PASS
Status: PASS
```

## Critical notes

This is now compliant with the requested claims, with one careful scientific nuance:

- The matrix is the canonical structural similarity view.
- The graph is an exploratory projection of relationships.
- Spatial position should not be interpreted as metric geography.

This is the right level of honesty for the app.

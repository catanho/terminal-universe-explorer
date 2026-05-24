# Terminal Universe Hybrid Ontology Specification v2.2

## Explicit hybrid decision

Terminal Universe uses a **hybrid ontology**. The formal layer is constrained, machine-readable, and reproducible. The interpretive layer provides human-readable labels, visual metaphors, and short explanations for public exploration.

This means the same dataset supports two audiences:

- **Scientific Mode:** exact fields, controlled vocabularies, lineage, confidence, and source traceability.
- **Explorer Mode:** readable names, category labels, summaries, filters, and visual grouping.

## Inclusion rule

Included records are terminal emulators: software that provides an interface for command-line interaction through terminal emulation or a terminal-like runtime.

Excluded records:

- terminal multiplexers
- shells
- embedded IDE terminals
- wrappers that do not function as terminal emulators in their own right

## Canonical dimensions

### Scope and identity

- `id`: stable machine identifier
- `Name`: display name
- `ScopeClass`: inclusion class within the terminal-emulator universe

### Technical dimensions

- `Arch`
- `RenderingSurface`
- `RenderingModel`
- `DisplayDependency`
- `CoreEngine`
- `EngineFamily`
- `EmulationTarget`

### Interaction dimensions

- `LayoutModel`
- `InteractionModel`
- `Extensibility`
- `StateModel`

### Temporal/activity dimensions

- `Status`
- `ActivitySignal`
- `MaturityScore`
- `FirstReleaseYear`

### Lineage and evidence dimensions

- `LineageSoftware`
- `LineageConcept`
- `LineageConfidence`
- `Confidence`
- `PrimarySource`
- `Notes`

## Composite category policy

`Category` is retained for compatibility and public grouping, but analysis should prefer its decomposed fields:

| Legacy category | rendering_generation | ecosystem | era |
|---|---|---|---|
| GPU_modern | gpu_modern | standalone | modern |
| VTE_ecosystem | cpu_classic | vte | modern |
| X11_legacy | cpu_classic | x11_xterm_family | legacy |
| Experimental_UI | mixed_or_experimental | experimental_ui | modern |
| Qt_ecosystem | cpu_classic | qt_kde | modern |

## Confidence levels

- `high`: strongly supported by primary or reliable sources
- `medium`: supported by multiple signals, but not fully primary-source verified
- `inferred`: deduced from implementation, lineage, or surrounding evidence
- `low`: uncertain, incomplete, or weakly supported

## Public-layer fields added in v2.2

- `public_category_label`
- `public_status_label`
- `explorer_summary`
- `lineage_software_list`
- `lineage_concept_list`

These fields are designed for the Terminal Universe Explorer and should not replace the formal ontology fields.

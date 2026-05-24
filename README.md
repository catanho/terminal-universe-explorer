# Terminal Universe Explorer v3.0

## Live app

Explore Mode:

https://catanho.github.io/terminal-universe-explorer/

Workbench Mode:

https://catanho.github.io/terminal-universe-explorer/science.html



Source-grounded structural explorer for the Unix/Linux terminal emulator design space.

This release candidate includes two linked static front-ends:

- **Explore Mode** — browse terminal cards, filters, groups, and source-linked records.
- **Workbench Mode** — analyze similarity, clusters, representative sets, graph relationships, and design-space gaps.

The app is fully static and can run locally with a simple HTTP server.

```bash
python3 -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000/
http://127.0.0.1:8000/science.html
```

## Product metadata

- Product: **Terminal Universe Explorer v3.0 RC1**
- Dataset: **Terminal Universe Dataset v6.0**
- Ontology/model: **Terminal Universe Structural Model v6.0**
- Status: **Release Candidate**

## Dataset

The release is powered by a curated dataset of **67 terminal emulators**.

Core model fields used in Workbench similarity:

- `RenderingModelGroup`
- `EngineFamily`
- `InteractionComplexity`

Context/explanation fields include:

- `SemanticLayer`
- `WorkspaceModel`
- `RuntimeEnvironment`
- `HostPlatform`
- `EcosystemFamily`
- `EcosystemContext`
- `PrimaryLanguage`
- `FirstReleaseYear`

Empty `FirstReleaseYear` values are allowed when the public release year is not confidently pinned down.

## Workbench interpretation

The Workbench is an analytical interface for exploring relationships in the design space.

It is not a geographic map. Spatial placement is a projection of modeled relationships.

Use it to:

- understand why terminals are similar
- inspect clusters and boundaries
- explore representative sets
- inspect gap matrices
- compare similarity relationships

The default similarity matrix score reflects agreement across the core structural dimensions. It does not measure quality, popularity, performance, beauty, or personal preference.

## Validation

Run:

```bash
npm run validate
npm run audit
npm run audit:science
```

## Repository structure

```text
index.html              Explore Mode
science.html            Workbench Mode
data/                   app datasets and model outputs
assets/science/         downloadable Workbench figures and CSVs
scripts/                validation and audit scripts
docs/                   reports, audit notes, roadmap
schema/                 dataset schema
ontology/               model/ontology notes
```

## Scope

Terminal Universe focuses on terminal emulator design structure. Multiplexers, shells, wrappers, and embedded-only terminal components are out of scope unless represented as standalone terminal emulator applications.

## Contributing

Contributions are welcome:

- correct metadata
- add source links
- refine model classifications
- improve explanatory notes
- propose missing terminals within scope

Consistency and traceability matter more than completeness.

## License

Code: MIT  
Data/documentation: see `DATA_LICENSE.md`.

# Data Dictionary

Core fields in the public-alpha dataset.

| Field | Meaning | Layer |
|---|---|---|
| `id` | Stable canonical record identifier | formal |
| `Name` | Public terminal emulator name | both |
| `ScopeClass` | Inclusion class; should denote terminal-emulator scope | formal |
| `Category` | Legacy high-level grouping retained for reproducibility | formal |
| `rendering_generation` | Normalized rendering-era/generation field | formal |
| `ecosystem` | Toolkit, lineage, or architectural ecosystem | formal |
| `era` | Broad temporal/technical era label | formal |
| `Status` | Development or historical status | formal |
| `ActivitySignal` | Evidence-oriented activity category | formal |
| `DisplayDependency` | Display server or platform dependency | formal |
| `EngineFamily` | Rendering or implementation family | formal |
| `RenderingModel` | How rendering is modeled | formal |
| `InteractionModel` | Interaction style | formal |
| `Extensibility` | Configuration/plugin/scripting style | formal |
| `Confidence` | Confidence in the record-level classification | formal |
| `FirstReleaseYear` | Earliest known release year, null if unknown | formal |
| `LineageSoftware` | Software ancestry or influence | formal |
| `LineageConcept` | Conceptual influences | formal |
| `LineageConfidence` | Confidence in lineage interpretation | formal |
| `PrimarySource` | Main source URL or reference | formal |
| `public_category_label` | Human-readable category label | explorer |
| `public_status_label` | Human-readable status label | explorer |
| `explorer_summary` | One-sentence public summary | explorer |
| `lineage_software_list` | Parsed lineage software list | bridge |
| `lineage_concept_list` | Parsed lineage concept list | bridge |

The hybrid design intentionally preserves formal fields while adding public-facing labels and summaries.

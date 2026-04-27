# Terminal Universe Explorer — Interface Specification

## Core principle

The Explorer must make the hybrid ontology visible:

- **Explorer Mode**: public labels, storytelling, search, comparison, visual periodic table.
- **Scientific Mode**: canonical fields, schema terms, provenance, confidence levels, exportable data.

## Recommended stack

- Astro + TypeScript for static site generation
- D3 or Observable Plot for visual layout
- JSON data from `data/terminals_v2_1_clean.json`
- GitHub Pages hosting

## Minimum features

1. Periodic-table view
2. Search and filter by category, ecosystem, era, rendering model, status, language
3. Terminal detail page/card
4. Compare two terminals
5. Download CSV/JSON/YAML
6. Accessibility: keyboard navigation, text alternative to visual layout, colorblind-safe design

# Terminal Universe Explorer

A way to explore the design space of Unix/Linux terminal emulators.

---

## What is this?

Terminal Universe Explorer is an interactive map of terminal emulators — not just as tools, but as a design space.

Instead of listing terminals, it lets you:

- browse them as a collection
- group them by ecosystem, engine, surface, rendering, and status
- compare their characteristics
- explore how different approaches relate to each other

Think of it as a structured view of how terminals are built and how they evolved.

---

## Explorer

https://catanho.github.io/terminal-universe-explorer/

---

## Dataset

The Explorer is powered by a curated dataset of terminal emulators.

### Key fields

- PrimaryLanguage — main implementation language
- FirstReleaseYear — historical introduction (when known)
- EngineFamily — underlying terminal engine or lineage
- RenderingSurface — display backend
- rendering_generation — conceptual rendering model
- public_status_label — active / inactive / experimental / archived

### Provenance

This dataset is a curated synthesis of multiple sources:

- project repositories (GitHub, GitLab, SourceForge)
- documentation and man pages
- historical and ecosystem knowledge

Some classifications are interpretative and meant to reveal structure rather than serve as strict taxonomy.

---

## Scope

This version focuses on:

→ exploration and orientation

It is intentionally:

- simple
- readable
- static (no backend)

---

## Contributing

Contributions are welcome:

- fix incorrect metadata
- improve source links
- add missing terminals
- refine classifications

Consistency matters more than completeness.

---

## Status

Public Alpha — v2.7.2

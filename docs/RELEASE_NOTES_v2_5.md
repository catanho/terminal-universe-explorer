# Release Notes — v2.5 Theme Integration

## Highlights

- Added persistent Light/Dark mode support to the Explorer.
- Uses system preference (`prefers-color-scheme`) on first visit.
- Stores explicit user choice in `localStorage`.
- Preserves the tricolor identity palette across both modes.
- Improves accessibility with focus states, color-scheme hints, reduced-motion support, and clear toggle labels.

## Design Principle

The theme system follows the project's hybrid model: readable and public-facing in Light Mode, immersive and terminal-friendly in Dark Mode.

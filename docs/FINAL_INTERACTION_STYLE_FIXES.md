# Final interaction/style fixes

Implemented:

- Nonmatching graph nodes no longer disappear during search/highlight; they remain visible but muted.
- Matrix borders now appear only when a terminal is selected/searched.
- Terminal-name autocomplete list is sorted alphabetically.
- Explore Mode control button now follows the rounded Clear Search button style.
- Light mode received explicit variable and component-level fixes.
- Graph hover keeps unrelated nodes visible while strongly dimming unrelated edges.

Validation:
- Workbench JavaScript parse: PASS
- Explore JavaScript parse: PASS
- Missing fetch targets: 0
- Missing download targets: 0
- SVG parse errors: 0

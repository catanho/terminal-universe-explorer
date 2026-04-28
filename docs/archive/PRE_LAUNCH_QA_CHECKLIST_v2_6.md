# Pre-Launch QA Checklist — v2.6

## Automated

Run from the repository root:

```bash
npm run audit
```

Expected result: all critical checks pass.

## Browser smoke test

Open:

```text
https://catanho.github.io/terminal-universe-explorer/
```

Verify:

- [ ] Explorer UI loads, not README markdown.
- [ ] Dataset count shows 79 terminal emulators.
- [ ] Search for `xterm` returns records.
- [ ] Search for nonsense returns empty-state message.
- [ ] Category filter changes visible cards.
- [ ] Status filter changes visible cards.
- [ ] Ecosystem filter changes visible cards.
- [ ] Reset Filters restores all records.
- [ ] Scientific Mode reveals additional fields.
- [ ] Periodic Groups view works.
- [ ] Clicking a card opens details.
- [ ] Add two terminals to compare and open comparison.
- [ ] Export visible CSV downloads a file.
- [ ] Light/Dark toggle works.
- [ ] Light/Dark choice persists after refresh.

## Launch rule

Only announce after all boxes above are checked.

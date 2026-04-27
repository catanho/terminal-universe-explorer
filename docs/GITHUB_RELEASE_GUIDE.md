# GitHub Release Guide

1. Create a new public repository, e.g. `terminal-universe-explorer`.
2. Upload this repository content.
3. Confirm the license choices in `LICENSE` and `DATA_LICENSE.md`.
4. Enable GitHub Pages from the repository settings.
5. Tag the first public release:

```bash
git tag v2.3.0-alpha
git push origin v2.3.0-alpha
```

6. Connect the repository to Zenodo and archive the tagged release.
7. Add the Zenodo DOI to `CITATION.cff` and the README.
8. Use the archived DOI for JOSS or manuscript submission.

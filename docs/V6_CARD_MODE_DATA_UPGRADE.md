
# v6 Card Mode Data Upgrade

This package intentionally preserves the existing Terminal Universe Explorer app.

No Science Mode UI was added.
No layout/CSS rewrite was performed.
No index.html behavior was changed.

Only the data files were replaced with v6-derived records shaped to the existing v2.3 public-alpha schema:

- `data/terminals_v2_3_public_alpha.json`
- `data/terminals_v2_3_public_alpha.csv`

The canonical v6 science files are also included for traceability:

- `data/science_dataset_v6.csv`
- `data/data_dictionary_v6.csv`
- `data/model_config_v6.json`

## Why keep the old filenames?

The current app already loads:

```js
data/terminals_v2_3_public_alpha.json
```

Keeping the filename lets the app run unchanged while using v6 model data.

## Run locally

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

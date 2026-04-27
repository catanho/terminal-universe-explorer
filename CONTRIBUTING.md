# Contributing

Contributions are welcome in the Unix/Linux free and open-source spirit.

Please submit changes as pull requests that:

1. Add or update records in `data/terminals_v2_1_clean.csv`.
2. Preserve the schema in `schema/terminal.schema.json`.
3. Provide a `PrimarySource` for each changed record.
4. Use confidence levels consistently: `high`, `medium`, `inferred`, or `low`.
5. Do not add out-of-scope software such as multiplexers, shells, embedded IDE terminals, or wrappers.

The project intentionally separates scientific labels from public labels. When proposing terminology changes, describe both the formal meaning and the public-facing wording.

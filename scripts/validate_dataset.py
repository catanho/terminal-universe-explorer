#!/usr/bin/env python3
import json
from pathlib import Path
from jsonschema import Draft202012Validator
root=Path(__file__).resolve().parents[1]
schema=json.loads((root/"schema"/"terminal.schema.json").read_text())
records=json.loads((root/"data"/"terminals_v2_1_clean.json").read_text())
v=Draft202012Validator(schema)
errors=[]
for i,r in enumerate(records):
    for e in v.iter_errors(r): errors.append(f"record {i} {r.get('Name')}: {e.message}")
if errors:
    print("Validation failed:"); print("\n".join(errors)); raise SystemExit(1)
print(f"Validation passed for {len(records)} records.")

#!/usr/bin/env python3
from pathlib import Path
import json
import math
import pandas as pd

ROOT = Path(__file__).resolve().parents[1]
DATA_JSON = ROOT / "data" / "terminals_v2_3_public_alpha.json"
DATA_CSV = ROOT / "data" / "terminals_v2_3_public_alpha.csv"

EXPECTED_ROWS = 67
BLOCKED_NAMES = {"tmux", "screen", "GNU Screen", "Black Screen"}
REQUIRED = [
    "id", "Name", "public_category_label", "public_status_label",
    "PrimaryLanguage", "Status", "ActivitySignal", "rendering_generation",
    "ecosystem", "RenderingSurface", "EngineFamily", "RenderingModelGroup",
    "EngineGroup", "EngineImplementationClass", "InteractionComplexity",
    "SemanticLayer", "WorkspaceModel", "RuntimeEnvironment", "HostPlatform",
    "EcosystemFamily", "PrimarySource", "explorer_summary"
]
CORE_FIELDS = ["RenderingModelGroup", "EngineFamily", "InteractionComplexity"]

def is_empty(v):
    if v is None:
        return True
    if isinstance(v, float) and math.isnan(v):
        return True
    return str(v).strip() == ""

def main():
    errors = []
    warnings = []

    if not DATA_JSON.exists():
        errors.append(f"Missing JSON dataset: {DATA_JSON}")
        rows = []
    else:
        rows = json.loads(DATA_JSON.read_text(encoding="utf-8"))

    if not isinstance(rows, list):
        errors.append("Dataset JSON is not an array")
        rows = []

    if len(rows) != EXPECTED_ROWS:
        errors.append(f"Expected {EXPECTED_ROWS} records, found {len(rows)}")

    ids = set()
    names = set()
    for i, row in enumerate(rows, start=1):
        for field in REQUIRED:
            if field not in row or is_empty(row.get(field)):
                errors.append(f"Row {i} missing required field: {field}")

        rid = row.get("id")
        name = row.get("Name")
        if rid in ids:
            errors.append(f"Duplicate id: {rid}")
        ids.add(rid)

        lname = str(name).strip().lower()
        if lname in names:
            errors.append(f"Duplicate terminal name: {name}")
        names.add(lname)

        if str(name) in BLOCKED_NAMES:
            errors.append(f"Out-of-scope blocked name found: {name}")

        # Empty FirstReleaseYear is explicitly allowed, but non-empty values must be plausible.
        year = row.get("FirstReleaseYear")
        if not is_empty(year):
            try:
                year_i = int(year)
                if year_i < 1800 or year_i > 2100:
                    errors.append(f"{name}: FirstReleaseYear out of range: {year}")
            except Exception:
                errors.append(f"{name}: FirstReleaseYear is not integer/null/empty: {year}")

        for field in CORE_FIELDS:
            if is_empty(row.get(field)):
                errors.append(f"{name}: empty core model field {field}")

        src = str(row.get("PrimarySource", ""))
        if not (src.startswith("http://") or src.startswith("https://")):
            warnings.append(f"{name}: PrimarySource is not an HTTP(S) URL")

    if DATA_CSV.exists():
        df = pd.read_csv(DATA_CSV)
        if len(df) != len(rows):
            errors.append(f"CSV/JSON row count mismatch: CSV={len(df)} JSON={len(rows)}")
        csv_ids = set(df["id"].astype(str)) if "id" in df.columns else set()
        if csv_ids and csv_ids != set(str(r.get("id")) for r in rows):
            errors.append("CSV/JSON id sets differ")
    else:
        warnings.append("CSV companion dataset not found")

    print("Terminal Universe Explorer v3.0 RC validation")
    print(f"Rows: {len(rows)}")
    print(f"Warnings: {len(warnings)}")
    for w in warnings:
        print("WARN", w)

    if errors:
        print("VALIDATION FAILED")
        for e in errors:
            print("ERROR", e)
        raise SystemExit(1)

    print("VALIDATION PASSED")

if __name__ == "__main__":
    main()

#!/usr/bin/env python3
from pathlib import Path
import pandas as pd

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / 'data' / 'terminals_v2_3_public_alpha.csv'

BLOCKED_CATEGORY = {'Multiplexer'}
BLOCKED_NAMES = {'tmux', 'screen', 'GNU Screen', 'Black Screen'}
REQUIRED = ['id','Name','ScopeClass','Category','rendering_generation','ecosystem','era','Status','Confidence','public_category_label','public_status_label','explorer_summary']

def main():
    df = pd.read_csv(DATA)
    errors = []
    missing = [c for c in REQUIRED if c not in df.columns]
    if missing:
        errors.append(f'Missing columns: {missing}')
    if df['id'].duplicated().any():
        errors.append('Duplicate ids detected')
    if df['Name'].duplicated().any():
        errors.append('Duplicate names detected')
    blocked = df[df.get('Category','').isin(BLOCKED_CATEGORY) | df.get('Name','').isin(BLOCKED_NAMES)]
    if len(blocked):
        errors.append('Scope violations detected: ' + ', '.join(blocked['Name'].astype(str).tolist()))
    if len(df) != 79:
        errors.append(f'Expected 79 records, found {len(df)}')
    if errors:
        print('VALIDATION FAILED')
        for e in errors: print('-', e)
        raise SystemExit(1)
    print('VALIDATION PASSED')
    print(f'Records: {len(df)}')
    print(f'Fields: {len(df.columns)}')

if __name__ == '__main__':
    main()

#!/usr/bin/env python3
"""Read-only comparison of guide evidence with a candidate app release."""
import argparse
import hashlib
import json
from pathlib import Path
import sys


def sha256(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source', type=Path, required=True)
    parser.add_argument('--web-build', type=Path)
    parser.add_argument('--record', type=Path, default=Path(__file__).parent / 'publication-2026-10-13.json')
    args = parser.parse_args()
    record = json.loads(args.record.read_text())
    changed = []
    count = 0

    def compare(path, expected, label):
        nonlocal count
        count += 1
        if not path.is_file():
            changed.append(f'MISSING {label}')
        elif sha256(path) != expected:
            changed.append(f'CHANGED {label}')

    for item in record['reviewed_source']['files']:
        compare(args.source / item['path'], item['sha256'], item['path'] + ' — review: ' + ', '.join(item['topics']))
    sample = record['sample']
    compare(args.source / sample['repository_path'], sample['sha256'], 'sample recording')
    for shot in record['screenshots']:
        compare(args.record.parent / shot['file'], shot['sha256'], 'screenshot ' + shot['file'])
    if 'publication' in record:
        guide = args.record.parent.parent.parent / record['publication']['current_source']
        for shot in record['screenshots']:
            compare(guide / 'images' / Path(shot['file']).name, shot['sha256'], 'published screenshot ' + Path(shot['file']).name)
    if args.web_build:
        app = record['published_app']
        compare(args.web_build / 'main.dart.js', app['main_dart_js_sha256'], 'deployed web app — review release behavior and captures')
        version = json.loads((args.web_build / 'version.json').read_text())
        count += 1
        if str(version.get('version')) != app['version'] or str(version.get('build_number')) != app['build_number']:
            changed.append('CHANGED published version/build metadata')
    print(f'Record: {record["record_id"]}; comparisons: {count}')
    for line in changed:
        print(line)
    if changed:
        print('Review affected documentation. The baseline was not changed.')
        return 1
    print('All tracked hashes and supplied metadata match. Still review untracked changes and test the released workflows.')
    return 0


if __name__ == '__main__':
    try:
        sys.exit(main())
    except (OSError, ValueError, KeyError) as error:
        print(f'Check could not complete: {error}', file=sys.stderr)
        sys.exit(2)

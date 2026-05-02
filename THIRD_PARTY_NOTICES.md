# Third-Party Notices

## AnimCJK Stroke Data

This repository includes generated stroke data at `src/data/strokes.json`.
That file is derived from the following AnimCJK graphics files:

- `graphicsZhHans.txt`
- `graphicsZhHant.txt`
- `graphicsJa.txt`

AnimCJK project:

- Source: https://github.com/parsimonhi/animCJK
- Copyright: AnimCJK project - Copyright 2016-2026 - FM&SH

AnimCJK states that text files prefixed by `graphics` and SVG files
representing a character may be redistributed and modified under the Arphic
Public License, published by Arphic Technology Co., Ltd.

The generated stroke data in this repository is therefore distributed under
the Arphic Public License (`Arphic-1999`). A copy of the license is included
at `licenses/ARPHICPL.TXT`.

Modification notice:

On 2026-05-02, this repository documents and distributes a JSON subset derived
from AnimCJK graphics files. The transformation is performed by
`scripts/build-stroke-data.mjs`: it selects the characters listed in
`src/data/characterGroups.json`, keeps the `character`, `strokes`, and
`medians` data, adds local `region` and `source` fields, and serializes the
selected records to `src/data/strokes.json`. No manual glyph-shape edits are
made in this repository.

The original application source code in this repository is licensed separately
under the MIT License unless a file or directory states otherwise.

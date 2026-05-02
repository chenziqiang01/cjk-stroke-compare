# CJK Stroke Compare

<p align="center">
  <a href="README.md">English</a> |
  <a href="README.zh-CN.md">简体中文</a> |
  <a href="README.zh-TW.md">繁體中文</a> |
  <a href="README.ja.md">日本語</a> |
  <a href="README.ko.md">한국어</a>
</p>

CJK Stroke Compare is a local-first tool for comparing Simplified Chinese, Japanese shinjitai, and Traditional Chinese glyphs and stroke order. It currently bundles 152 curated character groups with stroke-by-stroke playback, overlay comparison, search, and concise difference notes.

![CJK Stroke Compare English interface](docs/screenshot-en.png)

## Features

- Compare Simplified Chinese, Japanese shinjitai, and Traditional Chinese character forms.
- Replay stroke order one stroke at a time.
- Overlay regional variants to inspect shape differences.
- Search by character, meaning, or comparison focus.
- Run fully from local JSON after the stroke data is generated.

## Run Locally

```bash
npm install
npm run data:build
npm run dev
```

The default local development URL is `http://127.0.0.1:5173/`.

## Build

```bash
npm run build
```

## Data

`src/data/characterGroups.json` stores the curated character groups and explanatory copy. `npm run data:build` extracts the selected characters from AnimCJK's Simplified Chinese, Traditional Chinese, and Japanese glyph datasets, then writes the local `src/data/strokes.json` file. At runtime, the app reads only local JSON and does not require external network access.

Data source:

- [AnimCJK](https://github.com/parsimonhi/animCJK)

## License

The original application source code is licensed under the MIT License. The
generated stroke data in `src/data/strokes.json` is derived from AnimCJK
graphics files and is licensed under the Arphic Public License
(`Arphic-1999`). See `THIRD_PARTY_NOTICES.md` and `licenses/ARPHICPL.TXT`.

Related projects and references:

- [Make Me a Hanzi](https://www.skishore.me/makemeahanzi/)
- [Hanzi Writer](https://hanziwriter.org/docs.html)

## Acknowledgements

Built with Codex-assisted vibe coding.

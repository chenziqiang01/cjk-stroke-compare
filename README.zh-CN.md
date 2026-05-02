# CJK Stroke Compare

<p align="center">
  <a href="README.md">English</a> |
  <a href="README.zh-CN.md">简体中文</a> |
  <a href="README.zh-TW.md">繁體中文</a> |
  <a href="README.ja.md">日本語</a> |
  <a href="README.ko.md">한국어</a>
</p>

CJK Stroke Compare 是一个本地优先的简中、日文新字体、繁中字形与笔顺对照工具。当前内置 152 组常见差异字，支持逐笔播放、叠加对比、搜索和差异说明。

![CJK Stroke Compare 英文界面截图](docs/screenshot-en.png)

## 功能

- 对比简体中文、日文新字体、繁体中文的字形。
- 按笔画逐步回放笔顺。
- 叠加不同地区字形，便于观察结构差异。
- 支持按字、含义或对比要点搜索。
- 生成笔画数据后，应用运行时只读取本地 JSON。

## 本地运行

```bash
npm install
npm run data:build
npm run dev
```

默认本地开发地址是 `http://127.0.0.1:5173/`。

## 构建

```bash
npm run build
```

## 数据

`src/data/characterGroups.json` 维护精选字组和说明文案。`npm run data:build` 会从 AnimCJK 的简体、繁体、日文三套图形数据中抽取这些字，并生成本地 `src/data/strokes.json`。应用运行时只读取本地 JSON，不依赖外部网络。

数据来源：

- [AnimCJK](https://github.com/parsimonhi/animCJK)

## 许可

本仓库的原创应用源码使用 MIT License。`src/data/strokes.json` 中的生成笔画数据派生自 AnimCJK 的图形数据文件，按 Arphic Public License（`Arphic-1999`）分发。详见 `THIRD_PARTY_NOTICES.md` 和 `licenses/ARPHICPL.TXT`。

上游 / 相关资料：

- [Make Me a Hanzi](https://www.skishore.me/makemeahanzi/)
- [Hanzi Writer](https://hanziwriter.org/docs.html)

## 致谢

本项目使用 Codex 辅助的 vibe coding 完成。

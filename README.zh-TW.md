# CJK Stroke Compare

<p align="center">
  <a href="README.md">English</a> |
  <a href="README.zh-CN.md">简体中文</a> |
  <a href="README.zh-TW.md">繁體中文</a> |
  <a href="README.ja.md">日本語</a> |
  <a href="README.ko.md">한국어</a>
</p>

CJK Stroke Compare 是一個本地優先的簡中、日文新字體、繁中字形與筆順對照工具。目前內建 152 組常見差異字，支援逐筆播放、疊加對比、搜尋和差異說明。

![CJK Stroke Compare 英文介面截圖](docs/screenshot-en.png)

## 功能

- 對比簡體中文、日文新字體、繁體中文的字形。
- 按筆畫逐步回放筆順。
- 疊加不同地區字形，便於觀察結構差異。
- 支援按字、含義或對比要點搜尋。
- 生成筆畫資料後，應用執行時只讀取本地 JSON。

## 本地執行

```bash
npm install
npm run data:build
npm run dev
```

預設本地開發位址是 `http://127.0.0.1:5173/`。

## 建置

```bash
npm run build
```

## 資料

`src/data/characterGroups.json` 維護精選字組和說明文案。`npm run data:build` 會從 AnimCJK 的簡體、繁體、日文三套圖形資料中抽取這些字，並生成本地 `src/data/strokes.json`。應用執行時只讀取本地 JSON，不依賴外部網路。

資料來源：

- [AnimCJK](https://github.com/parsimonhi/animCJK)

## 授權

本倉庫的原創應用程式原始碼使用 MIT License。`src/data/strokes.json` 中的生成筆畫資料衍生自 AnimCJK 的圖形資料檔，並依 Arphic Public License（`Arphic-1999`）散布。詳見 `THIRD_PARTY_NOTICES.md` 和 `licenses/ARPHICPL.TXT`。

上游 / 相關資料：

- [Make Me a Hanzi](https://www.skishore.me/makemeahanzi/)
- [Hanzi Writer](https://hanziwriter.org/docs.html)

## 致謝

本專案使用 Codex 輔助的 vibe coding 完成。

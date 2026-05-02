# CJK Stroke Compare

<p align="center">
  <a href="README.md">English</a> |
  <a href="README.zh-CN.md">简体中文</a> |
  <a href="README.zh-TW.md">繁體中文</a> |
  <a href="README.ja.md">日本語</a> |
  <a href="README.ko.md">한국어</a>
</p>

CJK Stroke Compare は、簡体字中国語、日本新字体、繁体字中国語の字形と筆順を比較するローカルファーストのツールです。現在 152 組の代表的な差異字を収録し、1 画ずつの再生、重ね合わせ比較、検索、差異メモに対応しています。

![CJK Stroke Compare の英語インターフェース](docs/screenshot-en.png)

## 機能

- 簡体字中国語、日本新字体、繁体字中国語の字形を比較できます。
- 筆順を 1 画ずつ再生できます。
- 地域ごとの字形を重ね合わせて、形の違いを確認できます。
- 文字、意味、比較ポイントで検索できます。
- 筆画データ生成後は、実行時にローカル JSON のみを読み込みます。

## ローカル実行

```bash
npm install
npm run data:build
npm run dev
```

デフォルトのローカル開発 URL は `http://127.0.0.1:5173/` です。

## ビルド

```bash
npm run build
```

## データ

`src/data/characterGroups.json` は、選定された文字グループと説明文を管理します。`npm run data:build` は AnimCJK の簡体字中国語、繁体字中国語、日本語の 3 種類の字形データから対象文字を抽出し、ローカルの `src/data/strokes.json` を生成します。アプリの実行時はローカル JSON のみを読み込み、外部ネットワークには依存しません。

データソース:

- [AnimCJK](https://github.com/parsimonhi/animCJK)

## ライセンス

このリポジトリのオリジナルのアプリケーションソースコードは MIT License でライセンスされています。`src/data/strokes.json` の生成済み筆画データは AnimCJK のグラフィックデータファイルに由来し、Arphic Public License（`Arphic-1999`）で配布されます。詳しくは `THIRD_PARTY_NOTICES.md` と `licenses/ARPHICPL.TXT` を参照してください。

関連プロジェクトと参考資料:

- [Make Me a Hanzi](https://www.skishore.me/makemeahanzi/)
- [Hanzi Writer](https://hanziwriter.org/docs.html)

## 謝辞

このプロジェクトは Codex による vibe coding 支援を使って作成しました。

# Future Trends Research へのコントリビューション

このリポジトリへの改善提案・修正・ドキュメント更新にご協力いただき、ありがとうございます。本ドキュメントは、開発の進め方とレビュー時の期待値をまとめたものです。

サイトの概要や技術スタックは [README.md](./README.md) を参照してください。

## 行動規範

Issue や Pull Request、レビューコメントでは、建設的で敬意のあるやり取りをお願いします。差別的・攻撃的な表現は受け付けません。

## コントリビューションの種類

### バグ報告

GitHub の **Issues** から報告してください。次の情報があると対応しやすくなります。

- 再現手順（URL、操作、期待する結果と実際の結果）
- ブラウザ名とバージョン
- Node.js のバージョン（`node -v`）
- OS
- 可能であればスクリーンショットやコンソールのエラー

### 機能・改善の提案

- 課題や背景（誰のどんな困りごとを解決するか）
- 提案内容の概要
- 既存ページ・コンポーネントへの影響の有無

大きな変更は、実装前に Issue で方針を相談していただけると助かります。

### コンテンツ・文言の修正

本サイトは日本語のコーポレートサイトです。文言・料金表・リンク先の変更は、該当ページ（[README の「ページ編集の目安」](./README.md#ページ編集の目安)）と `src/config/site.ts` をあわせて確認してください。

## 開発環境のセットアップ

### 前提

- [Node.js](https://nodejs.org/)（LTS 推奨）
- npm（リポジトリ付属の `package-lock.json` に合わせて利用）

### 手順

```bash
git clone <リポジトリ URL>
cd futuretrendsresearch-astro
npm install
npm run dev
```

開発サーバーは通常 `http://localhost:4321` で起動します。

初回 clone 後は `npm install` により [Husky](https://typicode.github.io/husky/) の Git フックが有効になります（`package.json` の `prepare` スクリプト）。

## ブランチと Pull Request

1. `main`（または指定されたベースブランチ）から作業用ブランチを切る
2. 変更をコミットする
3. Pull Request を作成し、変更内容と確認方法を記載する

### ブランチ名の例

- `fix/contact-form-validation`
- `feature/tools-page-filter`
- `docs/update-contributing`

### コミットメッセージ

- 何を・なぜ変えたかが分かる短い英文または日本文
- 例: `fix: align contact form labels with design`, `docs: update deployment checklist`

### Pull Request の説明に含めるとよい内容

- 変更の概要と動機
- 関連 Issue があれば `Closes #123` のように記載
- 影響するページ（例: `/contact`, `/tools`）
- レビュアー向けの確認手順（ローカル URL、スクリーンショットなど）

## コード品質と自動チェック

### Git フック（Husky）

| タイミング | 内容 |
| --- | --- |
| `pre-commit` | [lint-staged](https://github.com/lint-staged/lint-staged) により、ステージしたファイルに ESLint（自動修正）と Prettier を実行 |
| `pre-push` | `npm run check`（Astro 診断）と `npm run typecheck` |

コミット前に手動で整えたい場合:

```bash
npm run fix
```

### マージ前に推奨するコマンド

README の「デプロイ前チェック」と同様です。

```bash
npm run format
npm run lint:check
npm run check
npm run typecheck
npm run build
```

テストを追加・変更した場合は `npm test` も実行してください。

## 実装時のガイドライン

### 技術スタック（2026 年時点）

- Astro 6
- Tailwind CSS 4
- TypeScript
- MDX（必要な場合）

バージョンは `package.json` を正とし、README や本ドキュメントと食い違う場合は `package.json` に合わせてください。

### ディレクトリの使い分け

| 用途 | 場所 |
| --- | --- |
| ページ | `src/pages/` |
| 共通レイアウト | `src/layouts/` |
| UI・ウィジェット | `src/components/` |
| サイト名・ナビ・SEO 用メタ | `src/config/site.ts` |
| 最適化したい画像 | `src/assets/` |
| そのまま配信する静的ファイル | `public/` |
| グローバルスタイル | `src/styles/global.css` |

新規コンポーネントは、既存の `src/components/ui/` や `src/components/widgets/` の命名・構造に合わせてください。

### スタイルとアクセシビリティ

- レイアウト・余白は Tailwind のユーティリティを優先する
- フォームやボタンは既存の `src/components/ui/` を再利用する
- 見出し階層、リンクテキスト、`alt` 属性など、a11y を意識する（ESLint の jsx-a11y ルールに従う）

### 設定の変更

- サイト名・説明・ナビ・公開 URL: `src/config/site.ts`
- サイトマップ・MDX・ビルド: `astro.config.mjs`

本番 URL や `site` 設定を変える場合は、README の「概要」も必要に応じて更新してください。

## レビューについて

メンテナーが内容・デザイン・ビルド可否を確認します。指摘への対応や追加コミットをお願いすることがあります。長期間応答がない PR はクローズすることがありますが、再開はいつでも歓迎です。

## ライセンス

コントリビューションは [MIT License](./LICENSE) の下で提供されるものとみなします（プロジェクトのライセンス方針に従ってください）。

---

ご質問や不明点は Issue でお知らせください。小さな typo 修正から大きな機能追加まで、どんな貢献もありがたく受け取ります。

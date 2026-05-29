# Future Trends Research

Future Trends Research の公式サイトです。

シードステージに特化した未来技術リサーチ、AI 活用、事業戦略コンサルティングの内容を紹介するための Astro 製スタティックサイトです。トップページ、サービス紹介、料金、調査・分析ツール、問い合わせ、情報セキュリティ・プライバシーポリシーを含みます。

## 概要

- サイト名: `Future Trends Research`
- 本番 URL: `https://futuretrendsresearch.com`
- Astro 設定上の `site`: `https://cloudflare-workers-autoconfig-futuretrendsresearch-astro.futuretrendsresearch.workers.dev`
- 主要言語: 日本語
- 出力形式: 静的サイト

## 主なページ

| パス | 内容 |
| --- | --- |
| `/` | Future Trends Research の概要、Development / Optimization / Consulting の紹介 |
| `/about` | ビジョン、バリュー、組織としての姿勢 |
| `/consulting` | 新規事業・起業支援のコンサルティング内容、成長モデル、事業計画、戦略フレームワーク |
| `/price` | メール、リモート、プレミアムの各コンサルティング料金プラン |
| `/tools` | AI ツール、分析リソース、市場調査・統計・未来予測系リソース一覧 |
| `/contact` | 問い合わせフォームと連絡手段 |
| `/information` | 情報セキュリティ基本方針、プライバシーポリシー |
| `/404` | Not Found ページ |

## 技術スタック

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MDX](https://mdxjs.com/)
- [astro-icon](https://github.com/natemoo-re/astro-icon)
- [Vercel Analytics](https://vercel.com/analytics)

## ディレクトリ構成

```text
.
├── public/                  # favicon や公開画像などの静的ファイル
├── src/
│   ├── assets/              # Astro で最適化する画像アセット
│   ├── components/          # レイアウト、SEO、UI、ウィジェット部品
│   ├── config/site.ts       # サイト名、説明文、URL、ナビゲーション設定
│   ├── layouts/             # 共通ページレイアウト
│   ├── pages/               # ファイルベースルーティング
│   ├── styles/global.css    # グローバル CSS と Tailwind 設定
│   └── types/               # 型定義
├── astro.config.mjs         # Astro / sitemap / MDX / i18n / Vite 設定
├── eslint.config.js         # ESLint 設定
├── package.json             # npm scripts と依存関係
└── tsconfig.json            # TypeScript 設定
```

## セットアップ

```bash
npm install
npm run dev
```

開発サーバーは通常 `http://localhost:4321` で起動します。

## npm scripts

| コマンド | 内容 |
| --- | --- |
| `npm run dev` | 開発サーバーを起動 |
| `npm run build` | 本番用の静的ファイルを `dist/` に生成 |
| `npm run preview` | ビルド済みサイトをローカルで確認 |
| `npm run check` | Astro の診断を実行 |
| `npm run typecheck` | TypeScript の型チェックを実行 |
| `npm run lint:check` | ESLint のチェックを実行 |
| `npm run lint` | ESLint の自動修正を実行 |
| `npm run format` | Prettier で整形 |
| `npm run fix` | Prettier と ESLint 自動修正をまとめて実行 |
| `npm test` | Vitest を実行 |

## サイト設定の変更

グローバルなサイト情報は `src/config/site.ts` で管理しています。

主に変更する項目:

- `name`: サイト名
- `description`: SEO やトップページで使う説明文
- `url`: 公開 URL
- `lang` / `locale`: 言語とロケール
- `author`: 著者・運営者名
- `socialLinks`: SNS などの外部リンク
- `navLinks`: ヘッダーのナビゲーション

Astro 側のサイト URL、サイトマップ、MDX、i18n、プリフェッチ、ビルド設定は `astro.config.mjs` で管理しています。

## 画像とアセット

- ページ内で最適化したい画像は `src/assets/images/` に配置します。
- そのまま公開したい静的ファイルは `public/` に配置します。
- `src/assets/images/Company_logo/` は `/tools` ページの分析リソース表示で利用します。

## ページ編集の目安

- トップページ: `src/pages/index.astro`
- About: `src/pages/about.astro`
- Consulting: `src/pages/consulting.astro`
- Price: `src/pages/price.astro`
- Tools: `src/pages/tools.astro`
- Contact: `src/pages/contact.astro`
- Information: `src/pages/information.astro`

共通レイアウトは `src/layouts/BaseLayout.astro`、ヘッダーとフッターは `src/components/layout/` にあります。

## デプロイ前チェック

```bash
npm run format
npm run lint:check
npm run check
npm run typecheck
npm run build
```

`npm run build` が成功すると、成果物は `dist/` に生成されます。

## Cloudflare Workers へのデプロイ

このプロジェクトは `output: "static"` の静的サイトです。**`@astrojs/cloudflare` アダプターは不要**です。`wrangler.jsonc` で `dist/` を静的アセットとして配信します。

Workers Builds（GitHub 連携）では **デプロイコマンドが必須** です。ダッシュボードの **ビルド** 設定は次のとおりにしてください。

| 項目 | 値 |
| --- | --- |
| ビルドコマンド | `npm run build` |
| デプロイコマンド | `npx wrangler deploy` または `npm run deploy` |
| パス | `/`（リポジトリルート） |

`wrangler.jsonc` の `name` は、Cloudflare ダッシュボードの **Worker 名**（例: `astro-cloudflare-app`）と一致させてください。

### なぜ KV エラーが出ていたか

`wrangler.jsonc` がリポジトリにない状態で `npx wrangler deploy` を実行すると、Wrangler が Astro 向けに **自動設定**（`astro add cloudflare`）を走らせ、`SESSION` 用 KV の作成を試みます。同名 KV が既にあると `code: 10014` で失敗します。

リポジトリに静的用の `wrangler.jsonc` を置くと自動設定はスキップされ、KV なしで `dist/` だけがデプロイされます。

### プレビュー（非本番ブランチ）

必要なら **非本番ブランチのデプロイコマンド** に `npx wrangler versions upload` を指定します（本番は `npx wrangler deploy` のまま）。

## ライセンス

このプロジェクトは MIT ライセンスです。詳細は `LICENSE` を確認してください。

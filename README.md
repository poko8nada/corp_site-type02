# corp-site-type01

![Version](https://img.shields.io/badge/version-0.1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Node](https://img.shields.io/badge/node-%3E%3D18-brightgreen?logo=node.js)

## Overview

中小企業向けの静的コーポレートサイトを、再利用しやすいテンプレートとして整備したリポジトリ。Honox + Hono + Vite で静的ビルドし、`dist/` をそのまま静的ホスティングへ置いて運用できる。

CMS 不要・お問い合わせのみの最小構成で、セキュリティリスクと運用コストを下げる。`content/` は取材・構成の設計メモ置き場であり import せず、実装者が目視して `app/` に手で反映する。

## Getting Started

### Prerequisites

- Node.js 18 以上
- [pnpm](https://pnpm.io/)

### Installation

```bash
git clone https://github.com/poko8nada/corp_site-type01.git
cd corp_site-type01
pnpm install
```

## Usage

```bash
pnpm run dev              # 開発サーバー
pnpm run build            # 静的成果物を dist/ に出力
pnpm run preview          # ビルド結果のプレビュー
pnpm run typecheck        # TypeScript チェック
pnpm run lint             # oxlint
pnpm run format           # oxfmt
pnpm run test:run         # Vitest
```

## Concept & Goals

### Goals

- 保守や高頻度更新を前提としない中小企業サイトを、静的 HTML + 最小限のバックエンド（お問い合わせのみ）で構築する
- CMSを持たないことでセキュリティリスクと運用コストを下げる
- 公式の一次情報置き場として、ユーザーがストレスなく情報にたどり着け、かつモダンでブランドイメージを醸成できるサイトを目指す
- `sections` と能力コンポーネントの組み替えで複数案件へ流用できる型にする

### Non-goals

- LP 特化の過剰演出・animation 主目的の表現
- CMS 直結・高頻度記事運用の内蔵
- `content/` からコードへの自動データ連携（手動確認が原則）
- ブラウザから直接 API を叩く構成（API key 隠蔽・cache・CORS は別システム側）
- webサイト単体の明確なKPI設定（流入元はGoogleMap・SNS・検索など多岐にわたり、そこのマーケティングはスコープ外）

### Operational assumptions

- 本番の主軸は静的配信。`dist/` をレンタルサーバーや静的ホスティングに置くだけで動作する
- Cloudflare Pages を本番の第一候補とし、GitHub Pages は代替案として扱う
- CMS が必要でも、ブラウザから直接 API を叩く構成は採らない

## Stack

- **App / SSG**: Honox + Hono + Vite。静的ビルド、`app/` が実装の自己完結領域
- **Styling**: Tailwind CSS 4 + DaisyUI。トークン・テーマは `app/style.css` 側
- **Font**: Noto Sans JP Variable（本文・見出し共通）。Cormorant Variable も同梱済み（切替可）
- **Package manager**: pnpm
- **Deploy**: Cloudflare Pages を本番第一候補とする

## App Architecture

### ページ構成

- `/`（home）: `lead` → `explanation` → `strengths` → `facts` → `conversion`
- `/contact`: `context`（電話CTA + フォーム案内）→ `form-area`（フォーム埋め込み or プレースホルダー）
- `/privacy`: プライバシーポリシー

フッターの法務欄はプライバシーポリシーのみ。

### クライアントサイド初期化パターン

`client.ts` はエントリポイント。ページ固有の初期化ロジックをモジュールとしてセクション内に配置し、`client.ts` から import して呼び出す。

- **`app/sections/home/scroll-reveal.ts`** — IntersectionObserver によるスクロール表示アニメーション
- **`app/sections/contact/form-init.ts`** — Google Forms iframe の送信検知（load カウンター）

### Directory structure

`app/components/`（能力単位）と `app/sections/`（ページ上の役割・共通枠）の組み替えで案件ごとのバリエーションを出す。

```text
app/
├── components/
│   ├── cta-band.tsx
│   ├── demo-banner.tsx
│   ├── faq-list.tsx
│   ├── image-break.tsx
│   ├── info-grid.tsx
│   ├── logo-icon.tsx
│   ├── map-embed.tsx
│   ├── map-with-info.tsx
│   ├── media-block.tsx
│   ├── rich-text.tsx
│   ├── section.tsx
│   ├── text-card-grid.tsx
│   └── visual-lead.tsx
│
├── sections/
│   ├── frame/
│   │   ├── index.ts            # frame config（brandText, nav, footer copy, isDemo flag）
│   │   ├── site-layout.tsx
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── drawer-nav.tsx
│   ├── home/
│   │   ├── index.ts            # catalog（全セクションの props）
│   │   ├── scroll-reveal.ts    # スクロール表示アニメ（client-side init）
│   │   └── home-page.tsx       # セクション集合
│   └── contact/
│       ├── index.ts            # catalog（context テキスト, form area config）
│       ├── context.tsx         # 電話CTA + フォーム案内
│       ├── form-area.tsx       # フォーム埋め込み or プレースホルダー
│       └── form-init.ts        # 送信検知 onload カウンター（client-side init）
│
├── routes/
│   ├── _renderer.tsx           # html/head/body + SiteLayout
│   ├── index.tsx               # /
│   ├── contact/index.tsx       # /contact
│   ├── privacy/index.tsx       # /privacy
│   ├── _404.tsx
│   └── _error.tsx
│
├── client.ts                   # entry: createClient() + init モジュール呼び出し
├── server.ts
└── style.css                   # Tailwind v4 @import + テーマ + カスタムCSS
```

### Routes and renderer

- `_renderer.tsx`: タイトル・description・lang 等を直接記述。`frameIsDemo` が `true` の間は `[DEMO]` プレフィックスと noindex が有効
- Route: `c.render` の第2引数で `headerPattern` / `footerPattern` を指定

### 案件データと catalog

案件切り替え時に編集する主要ファイル。コンポーネントのコードは変更せず、これらの catalog を書き換えるだけで差し替えられる設計。

- `app/data.ts` — 全ページ共通の基本データ（ブランド名・電話・住所・営業時間・ページタイトル・meta description）
- `app/sections/frame/index.ts` — frame 設定（nav, footer copy, `frameIsDemo` flag）
- `app/sections/home/index.ts` — ホームページ catalog（全セクション props・section layer 設定）
- `app/sections/contact/index.ts` — お問い合わせ catalog（電話/営業時間文言・フォーム埋め込み URL）
- `app/style.css` — テーマ・トークン（DaisyUI theme カラー・semantic token・カスタムCSS）

### MapEmbed / ContactFormArea

- **MapEmbed**: `src` プロパティが空の場合はプレースホルダー表示、実URLを渡すと Google Maps iframe を埋め込む
- **ContactFormArea**: `googleFormUrl` が空の場合はプレースホルダー表示、URLを設定すると Google Forms iframe を埋め込む
- 両コンポーネントとも catalog データからの注入で動作するため、コード変更なしに実URLに差し替え可能

## Content Workflow

`content/` は取材結果・設計メモのみ。コードから自動 import せず、実装者やエージェントが「ページに何を載せるか」を決めるときの参照材料とする。

| ファイル         | 内容                                            |
| ---------------- | ----------------------------------------------- |
| `interview.md`   | 案件ごとの取材整理（未作成）                    |
| `structure.md`   | サイト IA・frame の設計メモ                     |
| `pre_survey.md`  | 事前調査（GoogleMap・レビュー・競合分析）と仮説 |
| `investigate.md` | 現行サイトの技術調査レポート                    |

Header / footer のパターン名（`standard` / `compact` / `minimal` / `none` 等）は `structure.md` に寄せ、実装は `app/sections/frame/` のコンポーネントと `c.render` のオプションで直接指定する。

## Configuration

Pages プロジェクト名など: `package.json` の `deploy` スクリプトと `wrangler.jsonc` を、環境に合わせて変更する。

## 案件切替手順

このテンプレートを実案件で利用する際の最小手順。

### 1. 基本データを書き換える

`app/data.ts` を編集 — ブランド名・電話・住所・営業時間をクライアントのものに変更する。このファイルだけ変えれば全ページの基本情報が差し変わる。

### 2. デモ表示をオフにする

`app/sections/frame/index.ts` で `frameIsDemo` を `false` に変更する。これで noindex・`[DEMO]` タイトルが消える。

### 3. ページコピーを調整する

- **home**: `app/sections/home/index.ts` の各 catalog 定数（lead・explanation・strengths・facts・info・conversion）を編集
- **frame**: `app/sections/frame/index.ts` の `frameNavEntries`（ナビ）を編集
- **contact**: `app/sections/contact/index.ts` の `contactContextCatalog`・`contactFormAreaCatalog` を編集（フォーム埋め込みURLもここ）

### 4. スタイルを案件に合わせる

- **カラーテーマ**: `app/style.css` の DaisyUI theme `corporate-neutral` の OKLCH 値を変更。theme名も変更推奨。
- **セマンティックトークン**: 同じく `@theme inline` 内の `--color-surface-*` / `--color-border-*` / `--color-shadow-*` を編集
- **セクション layer**: `app/sections/home/index.ts` の `homeSectionLayers` で各セクションの `LayerConfig`（depth + surface/pattern クラス）を指定

### 5. フォントを切り替える（任意）

- `app/style.css` の `--font-display` を `var(--font-serif)` に変更すると Cormorant（セリフ体）に切り替わる
- 別のフォントを使う場合は import を追加し `--font-sans` / `--font-serif` を書き換える

### 6. 地図・フォームを有効化する

- **地図**: `app/sections/home/home-page.tsx` の `<MapEmbed>` に `src` プロパティで Google Maps 埋め込みURLを渡す
- **フォーム**: `app/sections/contact/index.ts` の `contactFormAreaCatalog.googleFormUrl` にフォームURLを設定する
- どちらも未設定時はプレースホルダーが表示される

### 7. ブランドロゴ・favicon を差し替える

`public/favicon.svg`（ブラウザタブ用）と `public/logo.svg`（ヘッダー用）を案件のロゴマークに置き換える。`logo.svg` の色は `currentColor` にしておくとヘッダーの文字色を継承する。

### 8. 画像を差し替える

`public/images/` 配下のプレースホルダー画像をクライアントのものに置き換える。各 section の catalog で `imageSrc` / `imageAlt` を更新する。

### 9. robots.txt を削除する

`public/robots.txt` には `Disallow: /` が書かれている。実案件では削除するか内容を書き換える。

### 10. 動作確認

```bash
pnpm run typecheck
pnpm run lint
pnpm run format
pnpm run build
pnpm run preview    # ブラウザで確認
```

### 11. content/ を更新する

`content/` 配下の設計ドキュメント（pre_survey.md・structure.md・investigate.md）を実案件の内容に書き換える。コードから import されないため、任意。

## Contributing

変更の単位と受け入れ条件は GitHub Issues に合わせる。PR では再現手順と関連 Issue の参照を書く。

## License

MIT（LICENSE ファイル未配置の場合はリポジトリオーナーに確認のうえ整備する）。

---
created: 2026-05-01
updated: 2026-05-01
client: casual-bar-lyra-demo
target_url: https://example.invalid/casual-bar-lyra-demo
focus: full
---

# Website Investigation Report（デモ）

> 実在の公式ドメイン・電話・SNS・アクセス解析の測定ID・具体URLはデモ用に架空化しています。技術スタックの型、ページ構成の型、サードパーティ連携の型は、元の調査観察を踏まえた一般化です。`pre_survey.md` と同一のデモ世界観（中洲エリアのカジュアルバー案件想定）に揃えています。

## Target

- 調査対象（架空）: CASUAL BAR Lyra 公式サイト想定 — `https://example.invalid/casual-bar-lyra-demo`
- Investigation date: 2026-05-01
- Focus: full

---

## Summary

トップは長いシングルページ構成で、グローバルナビは同一 HTML 内のアンカー（`#sec2` など）へスクロールするパターン。予約は別 URL のメールフォーム系ページ（`/e-mailform-demo/reservation.html` 想定）に分離している。

フロントは jQuery ベースの従来型 MPA で、ScrollMagic / Slick / Remodal 等を読み込む。メタ `author` と予約周りの `FCMailer` により、飲食向け制作基盤の **FoodConnection（FOODCONNECTION）系** と整合する。配信は Cloudflare 手前、`X-Powered-By: PleskLin` からオリジンは Plesk on Linux 上の静的〜サーバ生成 HTML と推測。計測は Google タグ（gtag、複数測定 ID）、Facebook SDK、Twitter ウィジェット、Cloudflare の beacon を確認した（測定 ID は本文ではプレースホルダ表記）。

---

## Technical Stack

| Layer              | Technology                      | Confidence |
| ------------------ | ------------------------------- | ---------- |
| Frontend framework | バニラ DOM + jQuery プラグイン  | High       |
| CMS / Platform     | FoodConnection / FCMailer 系    | High       |
| Rendering strategy | MPA                             | High       |
| Styling            | 独自 CSS + インライン `<style>` | High       |
| Hosting / CDN      | Cloudflare + Plesk/Linux        | High       |
| Backend / API      | undetermined                    | Low        |

### Evidence（スタック各行）

- Frontend: `shared/js/jquery.min.js`、`ScrollMagic.min.js`、`jquery.slick.min.js`、`remodal.js` 等（相対パス想定）。
- CMS: `<meta name="author" content="FOODCONNECTION"/>`。予約ページの `shared/js/FCMailer.js`、`FCMailer.css` コメントに `FoodConnection` / `http://foodconnection.jp/`（ベンダー表記は一般知識として残す）。
- Rendering: トップと予約で別 URL。`__NEXT_DATA__` 等の SPA シグナルなし。
- Styling: トップに `<style>` 複数、`FCMailer.css` のインライン展開。主要 `link rel=stylesheet` は未検出（JS 経由想定）。
- Hosting: ヘッダ `server: cloudflare`、`x-powered-by: PleskLin`、`cf-ray`、`static.cloudflareinsights.com/beacon.min.js`。
- Backend: 言語の明示なし。フォームの `action` が初期 HTML に露出せず。

### CMS / Platform

- Result: FoodConnection（FOODCONNECTION）エコシステムを利用したカスタム HTML サイト（FCMailer による予約フォーム）
- Confidence: High
- Evidence: 上記 CMS 行と同一（`meta author`、FCMailer 資産）。

---

## Site Structure

### Navigation Map

- L0 · Home — `https://example.invalid/casual-bar-lyra-demo` — シングルページ LP（長尺スクロール）
- L1 · 予約フォーム — `https://example.invalid/casual-bar-lyra-demo/e-mailform-demo/reservation.html` — リクエスト予約
- 外部 · Instagram — 店舗アカウント URL は差し替え（デモでは具体 URL を記載しない）
- 同一ページ内節（アンカー）: `#sec2` `#sec7` `#sec8` `#sec9` `#floor` `#sec-info` `#gmap` `#header`

### URL Structure

- Pattern: トップは `/` の単一ドキュメント。節はフラグメント（`#...`）。予約のみ `e-mailform-demo/*.html` 想定。
- Multilingual: No（`og:locale` は `ja_JP`、言語プレフィックスなし）
- Routing: サーバからの HTML ナビ + 同一ページ内アンカー。典型 SPA ルータではない。

### Semantic HTMLw

| Element     | Count |
| ----------- | ----- |
| `<header>`  | 1     |
| `<nav>`     | 0     |
| `<main>`    | 1     |
| `<article>` | 0     |
| `<aside>`   | 0     |
| `<section>` | 1     |
| `<footer>`  | 1     |

- Notes: ヘッダ内リンクがナビ相当。`<nav>` 未使用。`<section>` は少数で細分化は `div` 依存の可能性。

### Structured Data (JSON-LD)

- Schema types found: N/A（`application/ld+json` 未検出）
- Notes: OGP（`og:title` 等）と microformats の `profile` リンク（`https://microformats.org/profile/hcard`）あり。

---

## Key Features & Observations

### Performance

- Rendering: MPA。トップは縦に非常に長い（browser-use でページ高さ約 19505px 相当の取得例）ため初回コスト大。
- JS: jQuery + 複数プラグイン + SNS SDK + 計測で Moderate〜Heavy。
- Lazy loading: サンプル `img` に `loading="lazy"` なし。

### UX Patterns

- Navigation: ヘッダ固定リンク + 同一ページ内アンカー。モバイル側でリンク列の重複を確認。
- CTAs: 電話はダミー番号（例: `XXX-XXX-XXXX`）。「WEB予約はこちら」→ 予約フォーム、Instagram は外部導線として存在想定。
- Interactions: ScrollMagic、Slick、Remodal、予約ページで Magnific Popup（jQuery プラグイン系）。

### Third-party Integrations

- Google Analytics: Yes — `www.google-analytics.com/analytics.js`、`gtag/js?id=UA-000000000-00`（プレースホルダ）
- GA4: Yes — `gtag/js?id=G-EXAMPLE111111`、`G-EXAMPLE222222`（プレースホルダ）
- Google Tag Manager: Yes — gtag ローダ URL に `gtm=` クエリ（値はデモでは匿名化）
- Facebook SDK: Yes — `connect.facebook.net/ja_JP/sdk.js` 等
- Twitter (X): Yes — `platform.twitter.com/widgets.js`、埋め込み用 `button.*.js`
- Cloudflare Insights: Yes — `static.cloudflareinsights.com/beacon.min.js`
- Google Fonts: Partial — `fonts.googleapis.com` / `fonts.gstatic.com` への `preconnect` のみ（実 CSS は JS 経由の可能性）
- Hotjar / Clarity 等: No

### Accessibility

- ARIA: Partial（`main` はあるが `<nav>` なしでランドマーク弱い）
- Notes: viewport に **user-scalable=no** が指定され、拡大縮小が制限される。モバイル・アクセシビリティ上のリスクが高い。

---

## Limitations & Uncertainties

- `https://example.invalid/sitemap.xml` はデモでは未検証。元調査では許可されているが取得 500 の例があり、サイトマップ基盤の網羅的 IA は未実施の型として記載。
- 予約の送信先は初期 HTML に `<form action>` なし。バックエンド言語・API 形状は undetermined。
- トップの節の詳細は `div` 中心の可能性。セマンティック件数だけでは IA 粒度を表せない。

---

## Evidence Summary

Key signals found during investigation（一般化・匿名化後の列挙）:

- `shared/js/jquery.min.js` + ScrollMagic + Slick + Remodal → jQuery 中心のクラシック構成
- `<meta name="author" content="FOODCONNECTION"/>` → 制作・基盤の手掛かり
- `FCMailer.js` / `FCMailer.css` 内 FoodConnection / `foodconnection.jp` → 予約コンポーネント
- `server: cloudflare` + `x-powered-by: PleskLin` + `cf-ray` → Cloudflare 手前、Plesk 管理
- `gtag` の複数プロパティ → Google 計測の複数タグ併用パターン（ID はデモでは伏せ字）
- `connect.facebook.net`、`platform.twitter.com` → SNS
- `static.cloudflareinsights.com/beacon.min.js` → Cloudflare ビーコン
- トップナビの `href` が `#sec2` 等 → 単一 URL の長尺 LP + アンカーナビ
- スクリーンショット: デモでは `content/screens/inv_demo_home.png` / `inv_demo_reservation.png` のような命名を推奨（実ファイルは案件ポリシーに合わせて差し替え）

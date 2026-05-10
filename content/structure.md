---
updated: 2026-05-08
mode: redesign
source:
  - content/pre_survey.md
  - content/investigate.md
---

# Site Structure

## Design rationale

README の Concept & Goals にある「公式の一次情報置き場としてストレスなくたどり着ける」「静的 HTML + お問い合わせのみ」「CMS を持たない」方針に合わせ、現状の長尺シングルページ＋アンカー中心の IA と、制作基盤に閉じた予約フォーム URL は採らない。代わりに、ホームは意味の塊ごとに role を分けて読み順を固定し、予約・問い合わせは `/contact` に集約して外部フォーム／予約媒体への導線だけを明示する（ブラウザから直接 API を叩く構成は README Non-goals の外に置く）。

ページ数はホームと問い合わせの2本に絞る。プライバシーポリシー（`/privacy`）はお問い合わせフォームで個人情報を収集するための法的補完として、最小構成の静的ページを別途設ける。事前調査で指摘されている「メニュー・料金の目安・アクセス動線・信頼の根拠」は、ホーム内の explanation / strengths / facts に収め、更新頻度が高い Instagram やイベント告知はサイト本体ではリンク程度に留め、高頻度更新を要する仕組み（CMS 内蔵、記事運用）は README Non-goals から除外する。

フレームはナビで「ホーム」と「お問い合わせ」が迷子にならない `standard` ヘッダーと、店舗・連絡先・法務導線を載せられる `standard` フッターを前提とする（コンパクト化はビジュアル実装段階の判断に委ねる）。

## Diff summary

### Drop

- 同一 URL の `#sec*` アンカー章立て。最短動線に対し長尺スクロールとフラグメント依存の負荷が高いため、意味単位のページとセクションへ再編する。
- FoodConnection / FCMailer 依存の予約専用 HTML。CMS に閉じた依存を避け、予約は外部サービスと埋め込みまたはリンクへ置き換える。
- トップ1ファイルの縦積み肥大 MPA。静的配信と保守容易性のため情報設計で分割し、表示の軽量化は実装側で行う。

### Transform

- 長尺 LP 内ブロック（沿革・品揃え・協会・雰囲気・写真帯など）を、home の `lead` / `explanation` / `strengths` / `facts` に再配置する。目的は維持し、README の役割単位の sections に沿って再グルーピングする。
- 予約フォーム専用 URL（`/e-mailform-demo/reservation.html` 想定）を、`/contact` の `form-area`（外部フォームまたはバックエンド API）と電話・外部予約への CTA に置き換える。お問い合わせのみのバックエンド境界に揃える。
- ヘッダの同一ページスクロールを、ルート間ナビ（`/` と `/contact`）へ。ホーム内の in-page は必要最小限に留める。主要導線はルートで完結させる。

### Keep

- 店名・業態・電話・住所・営業時間。一次情報として必須。`facts` とフッターの重複は実装で整理する。
- Instagram 等 SNS への外部導線。定休とイベント告知の更新頻度が高いため、本体はリンク中心で静的運用を維持する。
- 電話と外部予約への CTA。有効な導線のため残す。`conversion` と `contact` の役割が重なりすぎないようコピーで調整する。

## Structure

```yaml
frame:
  header: standard
  footer: standard

pages:
  - route: /
    label: home
    sections:
      - role: lead
        note: 「カジュアルに入れる本格バー」というコアメッセージと、夜の中洲で寛げるトーンの視覚的導入
      - role: explanation
        note: 誰向けか、どんな時間の過ごし方ができるか（一人・少人数・二次会など）。営業時間帯の型は facts へ参照
      - role: strengths
        note: 老舗性、品揃えの規模感、協会・技術の証拠、女性バーテンダー文化の誤解のない説明。レビューで繰り返す安心材料を静的に要約
      - role: facts
        note: 住所、複合ビル内の動線ヒント、電話、営業時間・定休、料金の目安、混雑時の扱い、車椅子非対応などの事実ベース表現
      - role: conversion
        note: 電話・外部予約・お問い合わせページへの明確な次アクション（重複 CTA は実装で一本化可能）

  - route: /contact
    label: contact
    sections:
      - role: context
        note: 電話CTA（XXX-XXX-XXXX）とフォーム案内の1カラム。当日予約は電話、相談・取材はフォームへ誘導
      - role: form-area
        note: Google Forms iframe 埋め込み。送信検知は onload カウンター（1回目=表示、2回目=確認ページ）で行い、高さ縮小＋スクロール調整
      - role: legal-note
        note: フッター法務欄。プライバシーポリシーのみ

  - route: /privacy
    label: privacy
    sections:
      - role: policy-text
        note: フォーム収集する個人情報の利用目的・第三者非開示・管理方針。5段落の簡潔なポリシー文
```

## Open questions

- 取材メモ `content/interview.md` は未作成のため、オーナー意向の優先順位は未確定。作成後に strengths / facts の粒度を見直す。
- メニュー一覧をホーム内に静的でどこまで載せるか（カテゴリのみか、代表銘柄までか）はデザイン負荷とのトレードオフのため、実装前に決める。
- 計測（GTM / GA 等）は README Goals の基盤に含まれるが、本 structure にはページ role として含めない。実装は `_renderer` 側の方針に委ねる。

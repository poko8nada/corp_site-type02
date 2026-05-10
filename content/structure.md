---
updated: YYYY-MM-DD
mode: new / redesign
source:
  - content/pre_survey.md
  - content/investigate.md
---

# Site Structure

> テンプレートファイルです。案件ごとに pre_survey と investigate をもとにこの構造を編集します。

## Design rationale

このテンプレートは「静的 HTML + お問い合わせのみ」の最小構成を基本とします。CMS を持たないことでセキュリティリスクと運用コストを下げ、公式の一次情報置き場としてストレスなく情報にたどり着けるサイトを目指します。

ページ数はホームとお問い合わせの2本に絞ります。プライバシーポリシー（`/privacy`）はお問い合わせフォームで個人情報を収集するための法的補完として、最小構成の静的ページを別途設けます。

フレームはナビで「ホーム」「事業概要」「強み」「アクセス」「お問い合わせ」が迷子にならない standard ヘッダーと、会社情報・連絡先・法務導線を載せられる standard フッターを前提とします。

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
        note: ヒーローイメージ + キャッチコピー。ファーストビューで事業の核心を伝える
      - role: explanation
        note: 事業概要。誰向けか、どんな価値を提供するか
      - role: strengths
        note: 3つの強み。信頼性・技術力・実績などをカードで提示
      - role: facts
        note: 会社概要・アクセス・営業時間・電話番号など基本情報
      - role: conversion
        note: 電話CTA + お問い合わせページへの導線

  - route: /contact
    label: contact
    sections:
      - role: context
        note: 電話CTAとフォーム案内を1カラムで表示
      - role: form-area
        note: フォーム埋め込みエリア（Google Forms / 自社フォーム等）。プレースホルダーから差し替え
      - role: legal-note
        note: フッター法務欄。プライバシーポリシーのみ

  - route: /privacy
    label: privacy
    sections:
      - role: policy-text
        note: フォーム収集する個人情報の利用目的・第三者非開示・管理方針
```

## Open questions

- 実案件では、取材メモ `content/interview.md` を作成後に情報の優先順位を確定する
- フォームの方式（Google Forms / 自社API / 他社SaaS）を決定後に form-area を実装する
- 計測（GTM / GA 等）は `_renderer.tsx` にコメントアウトされたスロットがあるため、案件ごとに投入する

import type { CtaBandProps } from '@/components/cta-band';
import type { FaqListProps } from '@/components/faq-list';
import type { ImageBreakProps } from '@/components/image-break';
import type { InfoGridProps } from '@/components/info-grid';
import type { MapWithInfoProps, MapInfoRow } from '@/components/map-with-info';
import type { MediaBlockProps } from '@/components/media-block';
import type { RichTextProps } from '@/components/rich-text';
import type { TextCardGridProps } from '@/components/text-card-grid';
import type { VisualLeadProps } from '@/components/visual-lead';

export const sampleLead: VisualLeadProps = {
  eyebrow: '事業カテゴリ',
  headline: 'サンプル企業名',
  subhead: 'キャッチコピーをここに。',
  description: [
    '事業の概要や特徴を簡潔に伝えるテキストです。',
    '補足説明や差別化ポイントを記載すると効果的です。',
  ],
  imageSrc: '/images/placeholder-hero.svg',
  imageAlt: 'ヒーローイメージ プレースホルダー',
};

export const sampleMediaBlock: Omit<MediaBlockProps, 'children'> = {
  variant: 'wall',
  imageSrc: '/images/placeholder-content.svg',
  imageAlt: 'コンテンツイメージ プレースホルダー',
};

export const sampleRichText: RichTextProps = {
  heading: 'セクション見出し',
  paragraphs: [
    '内容を説明するテキストをここに記述します。訪問者に伝えたい情報を簡潔にまとめてください。',
    '2段落目：より詳細な説明や補足を加えると効果的です。',
  ],
};

export const sampleTextCardGrid: TextCardGridProps = {
  sectionHeading: 'カード一覧サンプル',
  columns: 3,
  items: [
    { heading: '項目 01', body: ['1つ目の項目の説明文です。'] },
    { heading: '項目 02', body: ['2つ目の項目の説明文です。'] },
    { heading: '項目 03', body: ['3つ目の項目の説明文です。'] },
  ],
};

export const sampleFaq: FaqListProps = {
  sectionHeading: 'よくある質問 サンプル',
  items: [
    { question: 'Q1. サンプルの質問ですか？', answer: 'A1. はい、サンプルの回答です。' },
    { question: 'Q2. もう一つ質問がありますか？', answer: 'A2. こちらもサンプル回答です。' },
  ],
};

export const sampleCta: CtaBandProps = {
  heading: 'お問い合わせサンプル',
  description: 'ご質問やご依頼はお気軽にどうぞ。',
  ctaLabel: 'お問い合わせ',
  ctaHref: '/contact',
  tel: '000-000-0000',
};

export const sampleImageBreak: ImageBreakProps = {
  src: '/images/placeholder-break-1.svg',
  alt: 'イメージブレイク サンプル',
};

export const sampleInfoGrid: InfoGridProps = {
  sectionHeading: '情報グリッド サンプル',
  groups: [
    {
      heading: 'グループ A',
      items: [
        { label: '項目1', value: '値1' },
        { label: '項目2', value: '値2' },
      ],
    },
    {
      heading: 'グループ B',
      items: [
        { label: '項目3', value: '値3' },
        { label: 'リンク項目', value: '詳細を見る', href: '/' },
      ],
    },
  ],
};

const sampleMapRows: readonly MapInfoRow[] = [
  { label: '所在地', value: 'サンプル所在地' },
  { label: '電話', value: '000-000-0000', valueHref: 'tel:0000000000' },
];

export const sampleMapWithInfo: MapWithInfoProps = {
  heading: 'マップサンプル',
  mapNote: 'こちらはプレースホルダーです。',
  rows: sampleMapRows,
};

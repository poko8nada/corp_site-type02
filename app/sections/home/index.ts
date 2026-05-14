/** Home page catalog: all section data lives here. Edit props to change copy without touching components. */
export { HomePage } from './home-page';

import {
  SITE_BRAND,
  SITE_PHONE,
  SITE_ZIP,
  SITE_ADDRESS,
  SITE_BUILDING,
  SITE_HOURS,
  SITE_HOLIDAY,
} from '@/data';
import type { CtaBandProps } from '@/components/cta-band';
import type { FaqListProps } from '@/components/faq-list';
import type { ImageBreakProps } from '@/components/image-break';
import type { MapInfoRow } from '@/components/map-with-info';
import type { MediaBlockProps } from '@/components/media-block';
import type { RichTextProps } from '@/components/rich-text';
import type { TextCardGridProps } from '@/components/text-card-grid';
import type { VisualLeadProps } from '@/components/visual-lead';

export const homeLeadCatalog: VisualLeadProps = {
  eyebrow: '事業カテゴリ',
  headline: SITE_BRAND,
  subhead: 'キャッチコピーをここに。',
  description: [
    '事業の概要や特徴を簡潔に伝えるテキストを記述します。',
    '2段落目：補足説明や差別化ポイントを記載すると効果的です。',
  ],
  imageSrc: '/images/placeholder-hero.svg',
  imageAlt: 'ヒーローイメージプレースホルダー',
  headingLevel: 1,
};

export const homeExplanationImage: Omit<MediaBlockProps, 'children'> = {
  variant: 'wall',
  imageSrc: '/images/placeholder-content.svg',
  imageAlt: 'コンテンツイメージプレースホルダー',
};

export const homeExplanationCatalog: RichTextProps = {
  heading: '事業概要',
  paragraphs: [
    'このセクションでは、事業内容やサービスの魅力を伝えます。訪問者が最初に目にする導線として、課題解決のストーリーを簡潔に記載してください。',
    '2段落目：さらに詳細な説明や、ターゲットとする顧客層についての補足を加えると、信頼感が高まります。',
    '必要に応じて段落を追加・編集してください。',
  ],
  headingLevel: 2,
};

export const homeStrengthsCatalog: TextCardGridProps = {
  columns: 3,
  items: [
    {
      heading: '強み 01',
      body: [
        '1つ目の強みを記載します。実績や数字を交えると説得力が増します。',
        '必要に応じて2行目を追加してください。',
      ],
    },
    {
      heading: '強み 02',
      body: [
        '2つ目の強みを記載します。競合との差別化ポイントを明確に。',
        '技術力・品質・納期・サポート体制など、業種に応じて軸を選んでください。',
      ],
    },
    {
      heading: '強み 03',
      body: [
        '3つ目の強みを記載します。お客様の声や導入実績があるとさらに効果的です。',
        '社会貢献やSDGsへの取り組みなど、共感を得られるテーマも有効です。',
      ],
    },
  ],
};

export const homeFactsMapNote = '訪問前に地図アプリで所在地と周辺動線をご確認ください。' as const;

export const homeFactsRows: readonly MapInfoRow[] = [
  {
    label: '所在地',
    value: `${SITE_ZIP} ${SITE_ADDRESS} ${SITE_BUILDING}`,
  },
  {
    label: 'アクセス',
    value:
      '最寄り駅からの所要時間や交通手段を記載します。目印となる建物やランドマークも併記してください。',
  },
  {
    label: '営業時間',
    value: SITE_HOURS,
  },
  {
    label: '定休日',
    value: SITE_HOLIDAY,
  },
  {
    label: '電話',
    value: SITE_PHONE,
    valueHref: `tel:${SITE_PHONE.replace(/-/g, '')}`,
  },
];

export const homeInfoFaq: FaqListProps = {
  items: [
    {
      question: '見積もりは無料ですか？',
      answer: '初回のお見積もりは無料です。お気軽にお問い合わせください。',
    },
    {
      question: '対応エリアを教えてください。',
      answer: '全国対応しております。オンラインでのご対応も可能ですので、まずはご相談ください。',
    },
    {
      question: '申し込みから納品までの期間は？',
      answer: '案件の規模や内容により異なります。お問い合わせの際に目安をお伝えします。',
    },
    {
      question: 'サポート体制を教えてください。',
      answer: '納品後もメールおよび電話でのサポートをご利用いただけます。',
    },
  ],
};

export const homeImageBreaks: readonly ImageBreakProps[] = [
  { src: '/images/placeholder-break-1.svg', alt: 'イメージブレイク 1' },
  { src: '/images/placeholder-break-2.svg', alt: 'イメージブレイク 2' },
  { src: '/images/placeholder-break-3.svg', alt: 'イメージブレイク 3' },
];

export const homeConversionCatalog: CtaBandProps = {
  description: 'ご質問やご依頼のご相談は、専用ページからお気軽にお送りください。',
  ctaLabel: 'お問い合わせ',
  ctaHref: '/contact',
  tel: SITE_PHONE,
};

/** Home page catalog: all section data lives here. Edit props to change copy without touching components. */
export { HomePage } from './home-page';

import { SITE_BRAND, SITE_PHONE, SITE_ZIP, SITE_ADDRESS, SITE_BUILDING, SITE_HOURS } from '@/data';
import type { CtaBandProps } from '@/components/cta-band';
import type { FaqListProps } from '@/components/faq-list';
import type { ImageBreakProps } from '@/components/image-break';
import type { LayerConfig } from '@/components/section';
import type { MapInfoRow } from '@/components/map-with-info';
import type { MediaBlockProps } from '@/components/media-block';
import type { RichTextProps } from '@/components/rich-text';
import type { TextCardGridProps } from '@/components/text-card-grid';
import type { VisualLeadProps } from '@/components/visual-lead';

export const homeLeadCatalog: VisualLeadProps = {
  eyebrow: 'カジュアルバー',
  headline: SITE_BRAND,
  subhead: '中洲のリラックスした夜に、本格的な一杯を。',
  description: [
    '女性バーテンダーならではの気配りと、クラシックから季節のカクテルまで楽しめる品揃え。',
    '初めての方にも、安心して過ごせる時間をお届けします。',
  ],
  imageSrc: '/images/counter-seats.jpg',
  imageAlt: '落ち着いた照明の店内とカウンター席',
};

export const homeExplanationImage: Omit<MediaBlockProps, 'children'> = {
  variant: 'wall',
  imageSrc: '/images/bartools-closeup.jpg',
  imageAlt: 'カウンターに並ぶシェイカーやジガー',
};

export const homeExplanationCatalog: RichTextProps = {
  heading: 'こんな方に選ばれています',
  paragraphs: [
    '出張や観光で「落ち着いて飲める店を探したい」方、仕事帰りや二次会でゆっくり話したい少人数の方にご利用いただいています。',
    'お一人でも入りやすい空気感を大切にしつつ、初来店でも好みに合わせた一杯をご提案します。女性同士でのご利用にも選ばれています。',
    '営業時間や最新のお知らせは、下記の店舗情報に加えて Instagram でもご確認ください。',
  ],
};

export const homeStrengthsCatalog: TextCardGridProps = {
  sectionHeading: 'Lyra が大切にしていること',
  columns: 3,
  items: [
    {
      heading: 'Trust',
      body: [
        '2000年代前半の開業以来、中洲で長く愛されるバーとして営業を続けてきました。',
        '安心して過ごせる接客と落ち着いた空間づくりを大切にしています。',
      ],
    },
    {
      heading: 'Craft',
      body: [
        'ウイスキー約50種以上、カクテル100種以上の幅広いラインアップ。',
        '日本バーテンダー協会所属の技術を活かし、定番から季節の一杯まで丁寧にお作りします。',
      ],
    },
    {
      heading: 'Comfort',
      body: [
        '「カジュアルに入れるのに、味は本格的」。',
        'このバランスを大切に、初めての方にも常連の方にも心地よい時間を届けることを目指しています。',
      ],
    },
  ],
};

export const homeFactsHeading = '店舗・アクセス' as const;

export const homeFactsMapNote =
  'ご来店前に地図アプリでビル入口と周辺動線をご確認ください。' as const;

export const homeFactsRows: readonly MapInfoRow[] = [
  {
    label: '住所',
    value: `${SITE_ZIP} ${SITE_ADDRESS} ${SITE_BUILDING}`,
  },
  {
    label: 'アクセス',
    value: '中洲の那珂川沿いエリア。ビル入口の位置は地図アプリでご確認ください。',
  },
  {
    label: '営業時間',
    value: SITE_HOURS,
  },
  {
    label: '定休日',
    value: '日曜（臨時休業・時間変更は Instagram でご案内）',
  },
  {
    label: '電話',
    value: SITE_PHONE,
    valueHref: `tel:${SITE_PHONE.replace(/-/g, '')}`,
  },
];

export const homeInfoFaq: FaqListProps = {
  sectionHeading: 'よくあるご質問',
  items: [
    {
      question: '料金の目安を教えてください',
      answer: 'お一人さま 5,000円前後（ご注文内容により変動）',
    },
    {
      question: '予約は必要ですか？',
      answer: '混雑しやすい時間帯は事前予約をおすすめします。',
    },
    {
      question: '最新情報はどこで確認できますか？',
      answer: 'Instagramで営業日変更・イベント情報を掲載しています',
    },
    {
      question: '車椅子での来店は可能ですか？',
      answer: 'ビル構造上、車椅子でのご来店が難しい場合があります。',
    },
  ],
};

export const homeImageBreaks: readonly ImageBreakProps[] = [
  { src: '/images/backbar-bottles.jpg', alt: 'バックバーに並ぶウイスキーやリキュールのボトル' },
  { src: '/images/counter-lantern.jpg', alt: 'カウンターの隅に灯るランタンとドリンク' },
  { src: '/images/backbar-wide.jpg', alt: 'ボトル棚の全景' },
];
export const homeSectionLayers: Record<string, LayerConfig | undefined> = {
  strengths: { depth: 1, surface: 'surface-emphasis section-pattern-dots' },
  info: { depth: 1, surface: 'surface-subtle section-pattern-stripe-v' },
};

export const homeConversionCatalog: CtaBandProps = {
  heading: 'ご予約・お問い合わせ',
  description: 'ご来店予約、貸切のご相談、取材のお問い合わせは専用ページから受け付けています。',
  ctaLabel: 'お問い合わせ',
  ctaHref: '/contact',
  tel: SITE_PHONE,
};

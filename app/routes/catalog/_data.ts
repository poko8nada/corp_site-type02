import type { CtaBandProps } from '@/components/cta-band';
import type { FaqListProps } from '@/components/faq-list';
import type { ImageBreakProps } from '@/components/image-break';
import type { ImageGalleryProps } from '@/components/image-gallery';
import type { InfoGridProps } from '@/components/info-grid';
import type { MapWithInfoProps, MapInfoRow } from '@/components/map-with-info';
import type { MediaBlockProps } from '@/components/media-block';
import type { ProcessStepsProps } from '@/components/process-steps';
import type { RichTextProps } from '@/components/rich-text';
import type { StatsCounterProps } from '@/components/stats-counter';
import type { LogoCloudProps } from '@/components/logo-cloud';
import type { TestimonialProps } from '@/components/testimonial';
import type { TextCardGridProps } from '@/components/text-card-grid';
import type { VisualLeadProps } from '@/components/visual-lead';
import type { VisualSlideshowProps } from '@/islands/visual-slideshow';

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
  revealOnScroll: true,
};

export const sampleMediaBlock: Omit<MediaBlockProps, 'children'> = {
  variant: 'wall',
  imageSrc: '/images/placeholder-content.svg',
  imageAlt: 'コンテンツイメージ プレースホルダー',
  revealOnScroll: true,
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
  revealOnScroll: true,
  items: [
    { heading: '項目 01', body: ['1つ目の項目の説明文です。'] },
    { heading: '項目 02', body: ['2つ目の項目の説明文です。'] },
    { heading: '項目 03', body: ['3つ目の項目の説明文です。'] },
  ],
};

export const sampleFaq: FaqListProps = {
  sectionHeading: 'よくある質問 サンプル',
  revealOnScroll: true,
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
  revealOnScroll: true,
};

export const sampleImageBreak: ImageBreakProps = {
  src: '/images/placeholder-break-1.svg',
  alt: 'イメージブレイク サンプル',
  revealOnScroll: true,
};

export const sampleInfoGrid: InfoGridProps = {
  sectionHeading: '情報グリッド サンプル',
  revealOnScroll: true,
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
  revealOnScroll: true,
};

export const sampleStatsCounter: StatsCounterProps = {
  items: [
    { value: '120', label: '対応実績', suffix: '件' },
    { value: '15', label: '在籍年数', suffix: '年' },
    { value: '98', label: '満足度', suffix: '%' },
    { value: '3', label: '拠点数' },
  ],
  revealOnScroll: true,
};

export const sampleLogoCloud: LogoCloudProps = {
  items: [
    { src: '/logo.svg', alt: 'ロゴ 01' },
    { src: '/logo.svg', alt: 'ロゴ 02' },
    { src: '/logo.svg', alt: 'ロゴ 03' },
    { src: '/logo.svg', alt: 'ロゴ 04' },
    { src: '/logo.svg', alt: 'ロゴ 05' },
    { src: '/logo.svg', alt: 'ロゴ 06' },
  ],
  revealOnScroll: true,
};

export const sampleVisualSlideshow: VisualSlideshowProps = {
  items: [
    {
      imageSrc: '/images/placeholder-hero.svg',
      imageAlt: 'スライド 01',
      caption: {
        eyebrow: '事業カテゴリ',
        headline: 'スライド 01',
        description: '1枚目のスライドです。',
      },
    },
    {
      imageSrc: '/images/placeholder-content.svg',
      imageAlt: 'スライド 02',
      caption: {
        eyebrow: '事業カテゴリ',
        headline: 'スライド 02',
        description: '2枚目のスライドです。',
      },
    },
    {
      imageSrc: '/images/placeholder-break-1.svg',
      imageAlt: 'スライド 03',
      caption: {
        eyebrow: '事業カテゴリ',
        headline: 'スライド 03',
        description: '3枚目のスライドです。',
      },
    },
  ],
  revealOnScroll: true,
};

export const sampleImageGallery: ImageGalleryProps = {
  items: [
    { src: '/images/placeholder-content.svg', alt: 'ギャラリー 01' },
    { src: '/images/placeholder-break-1.svg', alt: 'ギャラリー 02' },
    { src: '/images/placeholder-break-2.svg', alt: 'ギャラリー 03' },
    { src: '/images/placeholder-break-3.svg', alt: 'ギャラリー 04' },
    { src: '/images/placeholder-content.svg', alt: 'ギャラリー 05' },
    { src: '/images/placeholder-hero.svg', alt: 'ギャラリー 06' },
  ],
  revealOnScroll: true,
};

export const sampleProcessSteps: ProcessStepsProps = {
  items: [
    { label: 'STEP 01', description: 'ヒアリング・現状把握' },
    { label: 'STEP 02', description: '企画提案・見積もり' },
    { label: 'STEP 03', description: '制作・進行管理' },
    { label: 'STEP 04', description: '納品・フォローアップ' },
  ],
  revealOnScroll: true,
};

export const sampleTestimonial: TestimonialProps = {
  quote:
    'こちらの要望を丁寧にヒアリングいただき、期待以上の仕上がりになりました。納期も正確で、大変満足しています。',
  author: 'サンプル太郎',
  role: '株式会社サンプル 代表取締役',
  revealOnScroll: true,
};

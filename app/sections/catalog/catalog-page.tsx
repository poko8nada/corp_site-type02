import { Heading } from '@/components/heading';
import { Bg } from '@/components/background';
import { VisualLead } from '@/components/visual-lead';
import { VisualSlideshow } from '@/components/visual-slideshow';
import { StatsCounter } from '@/components/stats-counter';
import { LogoCloud } from '@/components/logo-cloud';
import { ImageGallery } from '@/components/image-gallery';
import { StepList } from '@/components/step-list';
import { TextCardGrid } from '@/components/text-card-grid';
import { FaqList } from '@/components/faq-list';
import { Testimonial } from '@/components/testimonial';
import { CtaBand } from '@/components/cta-band';
import { ImageBreak } from '@/components/image-break';
import { InfoGrid } from '@/components/info-grid';
import { MapEmbed } from '@/components/map-embed';
import { MapWithInfo } from '@/components/map-with-info';
import { InfoTable } from '@/components/info-table';
import { NewsList } from '@/components/news-list';
import DemoBanner from '@/components/$demo-banner';
import CatalogNav from '@/islands/catalog-nav';
import FramePanel from '@/islands/frame-panel';
import MediaBlockDemo from '@/islands/media-block-demo';
import {
  sampleLead,
  sampleVisualSlideshow,
  sampleStatsCounter,
  sampleLogoCloud,
  sampleImageGallery,
  sampleStepListNumbered,
  sampleStepListDated,
  sampleTextCardGrid,
  sampleTextCardGridWithImage,
  sampleFaq,
  sampleTestimonial,
  sampleCta,
  sampleImageBreak,
  sampleInfoGrid,
  sampleMapWithInfo,
  sampleInfoTable,
  sampleNewsList,
} from './index';

const catalogNavSections = [
  { id: 'catalog-header/footer', label: 'Frame' },
  { id: 'catalog-lead', label: 'VisualLead' },
  { id: 'catalog-visual-slideshow', label: 'VisualSlideshow' },
  { id: 'catalog-media-block', label: 'MediaBlock' },
  { id: 'catalog-image-break', label: 'ImageBreak' },
  { id: 'catalog-text-card-grid', label: 'TextCardGrid' },
  { id: 'catalog-logo-cloud', label: 'LogoCloud' },
  { id: 'catalog-image-gallery', label: 'ImageGallery' },
  { id: 'catalog-info-grid', label: 'InfoGrid' },
  { id: 'catalog-info-table', label: 'InfoTable' },
  { id: 'catalog-stats-counter', label: 'StatsCounter' },
  { id: 'catalog-step-list', label: 'StepList' },
  { id: 'catalog-news-list', label: 'NewsList' },
  { id: 'catalog-faq', label: 'FaqList' },
  { id: 'catalog-testimonial', label: 'Testimonial' },
  { id: 'catalog-map', label: 'Map' },
  { id: 'catalog-cta', label: 'CtaBand' },
  { id: 'catalog-demo-banner', label: 'DemoBanner' },
] as const;

export function CatalogPage() {
  return (
    <>
      <section id='catalog-intro'>
        <Bg wrapperClass='section-pad-relaxed' containerClass='max-w-5xl'>
          <h1 class='font-display text-4xl leading-tight tracking-tight sm:text-5xl'>
            Components Catalog
          </h1>
          <p class='mt-4 text-base leading-relaxed text-base-content/70'>
            全能力コンポーネントのサンプル一覧。右下のパネルで Header/Footer
            パターンを切り替え可能。
          </p>
        </Bg>
      </section>

      {/** ── Frame ── */}
      <section id='catalog-header/footer'>
        <Bg wrapperClass='section-pad-relaxed section-divider' containerClass='max-w-5xl'>
          <Heading level={2} class='mb-6'>
            Header / Footer
          </Heading>
          <div class='max-h-[90svh] overflow-hidden'>
            <FramePanel />
          </div>
        </Bg>
      </section>

      {/** ── Hero / Lead ── */}
      <section id='catalog-lead'>
        <Bg wrapperClass='section-pad-relaxed section-divider'>
          <div class='w-full'>
            <Heading level={2} class='mb-6 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8'>
              VisualLead
            </Heading>
            <p class='mt-1 mb-6 text-sm leading-relaxed text-base-content/60 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8'>
              ファーストビュー。home の lead スロット専用。
            </p>
            <VisualLead {...sampleLead} showScrollIndicator={false} />
          </div>
        </Bg>
      </section>

      <section id='catalog-visual-slideshow'>
        <Bg wrapperClass='section-pad-relaxed section-divider'>
          <div class='w-full'>
            <Heading level={2} class='mb-6 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8'>
              VisualSlideshow
            </Heading>
            <p class='mt-1 mb-6 text-sm leading-relaxed text-base-content/60 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8'>
              カルーセルスライド。visual-lead の代替として lead スロットに使用可能。
            </p>
            <div class='max-h-[90svh] overflow-hidden'>
              <VisualSlideshow {...sampleVisualSlideshow} />
            </div>
          </div>
        </Bg>
      </section>

      {/** ── Content ── */}
      <section id='catalog-media-block'>
        <Bg wrapperClass='section-pad-relaxed section-divider' containerClass='max-w-5xl'>
          <Heading level={2} class='mb-6'>
            MediaBlock + RichText
          </Heading>
          <p class='mt-1 mb-6 text-sm leading-relaxed text-base-content/60'>
            画像とテキストの組み合わせ。explanation スロットで使用。variant でレイアウト切替。
          </p>
          <MediaBlockDemo />
        </Bg>
      </section>

      <section id='catalog-image-break'>
        <Bg wrapperClass='section-pad-relaxed section-divider'>
          <div class='w-full'>
            <Heading level={2} class='mb-6 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8'>
              ImageBreak
            </Heading>
            <p class='mt-1 mb-6 text-sm leading-relaxed text-base-content/60 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8'>
              セクション間の区切り画像。image-break スロットで使用。
            </p>
            <ImageBreak {...sampleImageBreak} />
          </div>
        </Bg>
      </section>

      {/** ── Cards ── */}
      <section id='catalog-text-card-grid'>
        <Bg wrapperClass='section-pad-relaxed section-divider' containerClass='max-w-5xl'>
          <Heading level={2} class='mb-6'>
            TextCardGrid
          </Heading>
          <p class='mt-1 mb-6 text-sm leading-relaxed text-base-content/60'>
            カードグリッド。カードに任意画像も設定可能。strengths スロットで使用。
          </p>
          <div class='flex flex-col gap-8'>
            <TextCardGrid {...sampleTextCardGrid} />
            <div>
              <p class='text-sm text-base-content/50 mb-3'>画像あり variant</p>
              <TextCardGrid {...sampleTextCardGridWithImage} />
            </div>
          </div>
        </Bg>
      </section>

      <section id='catalog-logo-cloud'>
        <Bg wrapperClass='section-pad-relaxed section-divider' containerClass='max-w-5xl'>
          <Heading level={2} class='mb-6'>
            LogoCloud
          </Heading>
          <p class='mt-1 mb-6 text-sm leading-relaxed text-base-content/60'>
            取引先・協業先ロゴ一覧。variant で grid / bar 切替。
          </p>
          <div class='flex flex-col gap-8'>
            <div>
              <p class='text-sm text-base-content/50 mb-3'>variant: grid</p>
              <LogoCloud {...sampleLogoCloud} />
            </div>
            <div>
              <p class='text-sm text-base-content/50 mb-3'>variant: bar</p>
              <LogoCloud {...sampleLogoCloud} variant='bar' />
            </div>
          </div>
        </Bg>
      </section>

      <section id='catalog-image-gallery'>
        <Bg wrapperClass='section-pad-relaxed section-divider' containerClass='max-w-5xl'>
          <Heading level={2} class='mb-6'>
            ImageGallery
          </Heading>
          <p class='mt-1 mb-6 text-sm leading-relaxed text-base-content/60'>
            画像ギャラリー。variant で carousel / grid 切替。image-break の代替として使用可能。
          </p>
          <div class='flex flex-col gap-8'>
            <div>
              <p class='text-sm text-base-content/50 mb-3'>variant: carousel</p>
              <ImageGallery {...sampleImageGallery} />
            </div>
            <div>
              <p class='text-sm text-base-content/50 mb-3'>variant: grid</p>
              <ImageGallery {...sampleImageGallery} variant='grid' />
            </div>
          </div>
        </Bg>
      </section>

      {/** ── Data ── */}
      <section id='catalog-info-grid'>
        <Bg wrapperClass='section-pad-relaxed section-divider' containerClass='max-w-5xl'>
          <Heading level={2} class='mb-6'>
            InfoGrid
          </Heading>
          <p class='mt-1 mb-6 text-sm leading-relaxed text-base-content/60'>
            2カラム情報グリッド。facts スロットなどで使用。
          </p>
          <InfoGrid {...sampleInfoGrid} />
        </Bg>
      </section>

      <section id='catalog-info-table'>
        <Bg wrapperClass='section-pad-relaxed section-divider' containerClass='max-w-5xl'>
          <Heading level={2} class='mb-6'>
            InfoTable
          </Heading>
          <p class='mt-1 mb-6 text-sm leading-relaxed text-base-content/60'>
            料金表・スペック表。facts スロットなどで使用。
          </p>
          <InfoTable {...sampleInfoTable} />
        </Bg>
      </section>

      <section id='catalog-stats-counter'>
        <Bg wrapperClass='section-pad-relaxed section-divider' containerClass='max-w-5xl'>
          <Heading level={2} class='mb-6'>
            StatsCounter
          </Heading>
          <p class='mt-1 mb-6 text-sm leading-relaxed text-base-content/60'>
            数字＋ラベルの実績表示。facts スロットなどで使用。
          </p>
          <StatsCounter {...sampleStatsCounter} />
        </Bg>
      </section>

      {/** ── Step / Timeline ── */}
      <section id='catalog-step-list'>
        <Bg wrapperClass='section-pad-relaxed section-divider' containerClass='max-w-5xl'>
          <Heading level={2} class='mb-6'>
            StepList
          </Heading>
          <p class='mt-1 mb-6 text-sm leading-relaxed text-base-content/60'>
            時系列・処理ステップ。variant で dated / numbered 切替。
          </p>
          <div class='flex flex-col gap-8'>
            <div>
              <p class='text-sm text-base-content/50 mb-3'>variant: dated</p>
              <StepList {...sampleStepListDated} />
            </div>
            <div>
              <p class='text-sm text-base-content/50 mb-3'>variant: numbered</p>
              <StepList {...sampleStepListNumbered} direction='horizontal' />
            </div>
          </div>
        </Bg>
      </section>

      {/** ── List ── */}
      <section id='catalog-news-list'>
        <Bg wrapperClass='section-pad-relaxed section-divider' containerClass='max-w-5xl'>
          <Heading level={2} class='mb-6'>
            NewsList
          </Heading>
          <p class='mt-1 mb-6 text-sm leading-relaxed text-base-content/60'>
            お知らせ一覧。info スロットなどで使用。
          </p>
          <NewsList {...sampleNewsList} />
        </Bg>
      </section>

      <section id='catalog-faq'>
        <Bg wrapperClass='section-pad-relaxed section-divider' containerClass='max-w-5xl'>
          <Heading level={2} class='mb-6'>
            FaqList
          </Heading>
          <p class='mt-1 mb-6 text-sm leading-relaxed text-base-content/60'>
            FAQ アコーディオン。info スロットで使用。
          </p>
          <FaqList {...sampleFaq} />
        </Bg>
      </section>

      {/** ── Quote ── */}
      <section id='catalog-testimonial'>
        <Bg wrapperClass='section-pad-relaxed section-divider' containerClass='max-w-5xl'>
          <Heading level={2} class='mb-6'>
            Testimonial
          </Heading>
          <p class='mt-1 mb-6 text-sm leading-relaxed text-base-content/60'>
            お客様の声・引用表示。任意セクションで使用。
          </p>
          <div class='max-w-lg'>
            <Testimonial {...sampleTestimonial} />
          </div>
        </Bg>
      </section>

      <section id='catalog-map'>
        <Bg wrapperClass='section-pad-relaxed section-divider' containerClass='max-w-5xl'>
          <Heading level={2} class='mb-6'>
            MapWithInfo + MapEmbed
          </Heading>
          <p class='mt-1 mb-6 text-sm leading-relaxed text-base-content/60'>
            地図＋店舗情報。facts スロットなどで使用。
          </p>
          <MapWithInfo {...sampleMapWithInfo}>
            <MapEmbed />
          </MapWithInfo>
        </Bg>
      </section>

      <section id='catalog-cta'>
        <Bg wrapperClass='section-pad-relaxed section-divider' containerClass='max-w-5xl'>
          <Heading level={2} class='mb-6'>
            CtaBand
          </Heading>
          <p class='mt-1 mb-6 text-sm leading-relaxed text-base-content/60'>
            CTA バナー。conversion スロットで使用。
          </p>
          <CtaBand {...sampleCta} />
        </Bg>
      </section>

      <section id='catalog-demo-banner'>
        <Bg wrapperClass='section-pad-relaxed section-divider' containerClass='max-w-5xl'>
          <Heading level={2} class='mb-6'>
            DemoBanner
          </Heading>
          <p class='mt-1 mb-6 text-sm leading-relaxed text-base-content/60'>
            デモサイト警告バナー。フレームに内蔵。frameIsDemo で制御。
          </p>
          <DemoBanner isDemo />
        </Bg>
      </section>

      <CatalogNav sections={catalogNavSections} />
    </>
  );
}

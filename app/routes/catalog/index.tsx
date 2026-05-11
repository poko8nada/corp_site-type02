import { Section } from '@/components/section';
import { VisualLead } from '@/components/visual-lead';
import { StatsCounter } from '@/components/stats-counter';
import { LogoCloud } from '@/components/logo-cloud';
import { TextCardGrid } from '@/components/text-card-grid';
import { FaqList } from '@/components/faq-list';
import { CtaBand } from '@/components/cta-band';
import { ImageBreak } from '@/components/image-break';
import { InfoGrid } from '@/components/info-grid';
import { MapEmbed } from '@/components/map-embed';
import { MapWithInfo } from '@/components/map-with-info';
import { DemoBanner } from '@/components/demo-banner';
import { frameIsDemo } from '@/sections/frame';
import { createRoute } from 'honox/factory';
import FramePanel from '@/islands/frame-panel';
import MediaBlockDemo from '@/islands/media-block-demo';
import {
  sampleLead,
  sampleStatsCounter,
  sampleLogoCloud,
  sampleTextCardGrid,
  sampleFaq,
  sampleCta,
  sampleImageBreak,
  sampleInfoGrid,
  sampleMapWithInfo,
} from './_data';

export default createRoute((c) => {
  if (!frameIsDemo) {
    return c.notFound();
  }

  const container = 'mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8';

  return c.render(
    <>
      <Section class='w-full section-pad-relaxed' id='catalog-intro' label='カタログ説明'>
        <div class={container}>
          <h1 class='font-display text-4xl leading-tight tracking-tight sm:text-5xl'>
            Components Catalog
          </h1>
          <p class='mt-4 text-base leading-relaxed text-base-content/70'>
            全能力コンポーネントのサンプル一覧。右下のパネルで Header/Footer
            パターンを切り替え可能。
          </p>
        </div>
      </Section>

      <Section
        class='w-full section-pad-relaxed section-divider'
        id='catalog-header/footer'
        label='Header / Footer'
      >
        <div class={container}>
          <h2 class='font-display text-2xl leading-snug tracking-tight sm:text-3xl mb-6'>
            Header / Footer
          </h2>
          <div class='max-h-[90svh] overflow-hidden'>
            <FramePanel />
          </div>
        </div>
      </Section>

      <Section
        class='w-full section-pad-relaxed section-divider'
        id='catalog-lead'
        label='VisualLead'
      >
        <div class='w-full'>
          <h2 class='font-display text-2xl leading-snug tracking-tight sm:text-3xl mb-6 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8'>
            VisualLead
          </h2>
          <p class='mt-1 mb-6 text-sm leading-relaxed text-base-content/60 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8'>
            ファーストビュー。home の lead スロット専用。
          </p>
          <VisualLead {...sampleLead} showScrollIndicator={false} />
        </div>
      </Section>

      <Section
        class='w-full section-pad-relaxed section-divider'
        id='catalog-image-break'
        label='ImageBreak'
      >
        <div class='w-full'>
          <h2 class='font-display text-2xl leading-snug tracking-tight sm:text-3xl mb-6 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8'>
            ImageBreak
          </h2>
          <p class='mt-1 mb-6 text-sm leading-relaxed text-base-content/60 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8'>
            セクション間の区切り画像。image-break スロットで使用。
          </p>
          <ImageBreak {...sampleImageBreak} />
        </div>
      </Section>

      <Section
        class='w-full section-pad-relaxed section-divider'
        id='catalog-stats-counter'
        label='StatsCounter'
      >
        <div class={container}>
          <h2 class='font-display text-2xl leading-snug tracking-tight sm:text-3xl mb-6'>
            StatsCounter
          </h2>
          <p class='mt-1 mb-6 text-sm leading-relaxed text-base-content/60'>
            数字＋ラベルの実績表示。facts スロットなどで使用。
          </p>
          <StatsCounter {...sampleStatsCounter} />
        </div>
      </Section>

      <Section
        class='w-full section-pad-relaxed section-divider'
        id='catalog-logo-cloud'
        label='LogoCloud'
      >
        <div class={container}>
          <h2 class='font-display text-2xl leading-snug tracking-tight sm:text-3xl mb-6'>
            LogoCloud
          </h2>
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
        </div>
      </Section>

      <Section
        class='w-full section-pad-relaxed section-divider'
        id='catalog-media-block'
        label='MediaBlock + RichText'
      >
        <div class={container}>
          <h2 class='font-display text-2xl leading-snug tracking-tight sm:text-3xl mb-6'>
            MediaBlock + RichText
          </h2>
          <p class='mt-1 mb-6 text-sm leading-relaxed text-base-content/60'>
            画像とテキストの組み合わせ。explanation スロットで使用。variant でレイアウト切替。
          </p>
          <MediaBlockDemo />
        </div>
      </Section>

      <Section
        class='w-full section-pad-relaxed section-divider'
        id='catalog-text-card-grid'
        label='TextCardGrid'
      >
        <div class={container}>
          <h2 class='font-display text-2xl leading-snug tracking-tight sm:text-3xl mb-6'>
            TextCardGrid
          </h2>
          <p class='mt-1 mb-6 text-sm leading-relaxed text-base-content/60'>
            カードグリッド。strengths スロットで使用。
          </p>
          <TextCardGrid {...sampleTextCardGrid} />
        </div>
      </Section>
      <Section class='w-full section-pad-relaxed section-divider' id='catalog-faq' label='FaqList'>
        <div class={container}>
          <h2 class='font-display text-2xl leading-snug tracking-tight sm:text-3xl mb-6'>
            FaqList
          </h2>
          <p class='mt-1 mb-6 text-sm leading-relaxed text-base-content/60'>
            FAQ アコーディオン。info スロットで使用。
          </p>
          <FaqList {...sampleFaq} />
        </div>
      </Section>

      <Section
        class='w-full section-pad-relaxed section-divider'
        id='catalog-info-grid'
        label='InfoGrid'
      >
        <div class={container}>
          <h2 class='font-display text-2xl leading-snug tracking-tight sm:text-3xl mb-6'>
            InfoGrid
          </h2>
          <p class='mt-1 mb-6 text-sm leading-relaxed text-base-content/60'>
            2カラム情報グリッド。facts スロットなどで使用。
          </p>
          <InfoGrid {...sampleInfoGrid} />
        </div>
      </Section>

      <Section
        class='w-full section-pad-relaxed section-divider'
        id='catalog-map'
        label='MapWithInfo + MapEmbed'
      >
        <div class={container}>
          <h2 class='font-display text-2xl leading-snug tracking-tight sm:text-3xl mb-6'>
            MapWithInfo + MapEmbed
          </h2>
          <p class='mt-1 mb-6 text-sm leading-relaxed text-base-content/60'>
            地図＋店舗情報。facts スロットで使用。
          </p>
          <MapWithInfo {...sampleMapWithInfo}>
            <MapEmbed />
          </MapWithInfo>
        </div>
      </Section>

      <Section class='w-full section-pad-relaxed section-divider' id='catalog-cta' label='CtaBand'>
        <div class={container}>
          <h2 class='font-display text-2xl leading-snug tracking-tight sm:text-3xl mb-6'>
            CtaBand
          </h2>
          <p class='mt-1 mb-6 text-sm leading-relaxed text-base-content/60'>
            CTA バナー。conversion スロットで使用。
          </p>
          <CtaBand {...sampleCta} />
        </div>
      </Section>

      <Section
        class='w-full section-pad-relaxed section-divider'
        id='catalog-demo-banner'
        label='DemoBanner'
      >
        <div class={container}>
          <h2 class='font-display text-2xl leading-snug tracking-tight sm:text-3xl mb-6'>
            DemoBanner
          </h2>
          <p class='mt-1 mb-6 text-sm leading-relaxed text-base-content/60'>
            デモサイト警告バナー。フレームに内蔵。frameIsDemo で制御。
          </p>
          <DemoBanner isDemo />
        </div>
      </Section>
    </>,
    {
      title: 'Components Catalog',
      headerPattern: 'none',
      footerPattern: 'none',
    },
  );
});

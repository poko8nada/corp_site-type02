import { Section } from '@/components/section';
import { VisualLead } from '@/components/visual-lead';
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
          <ImageBreak {...sampleImageBreak} />
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
          <TextCardGrid {...sampleTextCardGrid} />
        </div>
      </Section>
      <Section class='w-full section-pad-relaxed section-divider' id='catalog-faq' label='FaqList'>
        <div class={container}>
          <h2 class='font-display text-2xl leading-snug tracking-tight sm:text-3xl mb-6'>
            FaqList
          </h2>
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
          <MapWithInfo {...sampleMapWithInfo}>
            <MapEmbed />
          </MapWithInfo>
        </div>
      </Section>

      <Section class='w-full section-pad-relaxed section-divider' id='catalog-cta' label='CtaBand'>
        <div class='mx-auto w-full max-w-lg px-4 sm:px-6 lg:px-8'>
          <h2 class='font-display text-2xl leading-snug tracking-tight sm:text-3xl mb-6 text-center'>
            CtaBand
          </h2>
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

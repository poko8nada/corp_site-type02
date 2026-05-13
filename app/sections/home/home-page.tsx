import { CtaBand } from '@/components/cta-band';
import { FaqList } from '@/components/faq-list';
import { Heading } from '@/components/heading';
import { ImageBreak } from '@/components/image-break';
import { MapEmbed } from '@/components/map-embed';
import { MapWithInfo } from '@/components/map-with-info';
import { MediaBlock } from '@/components/media-block';
import { RichText } from '@/components/rich-text';
import { Section } from '@/components/section';
import { TextCardGrid } from '@/components/text-card-grid';
import { VisualLead } from '@/components/visual-lead';

import {
  homeConversionCatalog,
  homeExplanationCatalog,
  homeExplanationImage,
  homeFactsHeading,
  homeFactsMapNote,
  homeFactsRows,
  homeImageBreaks,
  homeInfoFaq,
  homeLeadCatalog,
  homeSectionLayers,
  homeStrengthsCatalog,
} from './index';

const container = 'mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8';

export function HomePage() {
  return (
    <div class='text-base-content flex flex-col'>
      <Section id='home-section-lead' label='リード'>
        <VisualLead {...homeLeadCatalog} />
      </Section>

      <Section
        wrapperClass='section-divider section-pad-relaxed'
        id='home-section-explanation'
        label='ご案内'
      >
        <div class={container}>
          <div class='reveal-on-scroll [--reveal-delay:40ms]'>
            <MediaBlock {...homeExplanationImage} revealOnScroll>
              <RichText {...homeExplanationCatalog} />
            </MediaBlock>
          </div>
        </div>
      </Section>

      <Section
        wrapperClass='section-divider section-pad-relaxed'
        id='home-section-strengths'
        label='強み・信頼'
        layer={homeSectionLayers.strengths}
      >
        <div class={container}>
          <div class='reveal-on-scroll [--reveal-delay:60ms]'>
            <Heading level={2}>3つの強み</Heading>
            <TextCardGrid {...homeStrengthsCatalog} revealOnScroll />
          </div>
        </div>
      </Section>

      <div class='section-divider'>
        <ImageBreak {...homeImageBreaks[0]} revealOnScroll />
      </div>

      <Section
        wrapperClass='section-divider section-pad-relaxed'
        id='home-section-facts'
        label='店舗・アクセス'
      >
        <div class={container}>
          <div class='reveal-on-scroll [--reveal-delay:60ms]'>
            <MapWithInfo
              heading={homeFactsHeading}
              mapNote={homeFactsMapNote}
              rows={homeFactsRows}
              revealOnScroll
            >
              <MapEmbed />
            </MapWithInfo>
          </div>
        </div>
      </Section>

      <Section
        wrapperClass='section-divider section-pad-compact'
        id='home-section-info'
        label='営業・ご利用案内'
        layer={homeSectionLayers.info}
      >
        <div class={container}>
          <div class='reveal-on-scroll [--reveal-delay:80ms]'>
            <FaqList {...homeInfoFaq} revealOnScroll />
          </div>
        </div>
      </Section>

      <div class='section-divider'>
        <ImageBreak {...homeImageBreaks[1]} revealOnScroll />
      </div>

      <Section
        wrapperClass='section-divider section-pad-relaxed'
        id='home-section-conversion'
        label='お問い合わせ'
        layer={{ depth: 1, surface: 'cta-surface section-pattern-cross' }}
      >
        <div class='mx-auto w-full max-w-lg px-4 sm:px-6 lg:px-8 relative'>
          <CtaBand {...homeConversionCatalog} revealOnScroll />
        </div>
      </Section>
    </div>
  );
}

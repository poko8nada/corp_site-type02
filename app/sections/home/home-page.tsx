import { CtaBand } from '@/components/cta-band';
import { FaqList } from '@/components/faq-list';
import { Heading } from '@/components/heading';
import { ImageBreak } from '@/components/image-break';
import { MapEmbed } from '@/components/map-embed';
import { MapWithInfo } from '@/components/map-with-info';
import { MediaBlock } from '@/components/media-block';
import { RichText } from '@/components/rich-text';
import { Bg } from '@/components/background';
import { TextCardGrid } from '@/components/text-card-grid';
import { VisualLead } from '@/components/visual-lead';

import {
  homeConversionCatalog,
  homeExplanationCatalog,
  homeExplanationImage,
  homeFactsMapNote,
  homeFactsRows,
  homeImageBreaks,
  homeInfoFaq,
  homeLeadCatalog,
  homeStrengthsCatalog,
} from './index';

export function HomePage() {
  return (
    <div class='text-base-content flex flex-col'>
      <section id='home-section-lead'>
        <Bg>
          <VisualLead {...homeLeadCatalog} />
        </Bg>
      </section>

      <section id='home-section-explanation'>
        <Bg wrapperClass='section-divider section-pad-relaxed' containerClass='max-w-5xl'>
          <div class='reveal-on-scroll [--reveal-delay:40ms]'>
            <MediaBlock {...homeExplanationImage} revealOnScroll>
              <RichText {...homeExplanationCatalog} />
            </MediaBlock>
          </div>
        </Bg>
      </section>

      <section id='home-section-strengths'>
        <Bg
          background={{ imageSrc: '/bg-city.jpg' }}
          parallax={{ speed: 0.8 }}
          wrapperClass='section-divider section-pad-relaxed'
          containerClass='max-w-5xl'
        >
          <div class='reveal-on-scroll [--reveal-delay:60ms]'>
            <Heading level={2}>3つの強み</Heading>
            <TextCardGrid {...homeStrengthsCatalog} revealOnScroll />
          </div>
        </Bg>
      </section>

      <div class='section-divider'>
        <ImageBreak {...homeImageBreaks[0]} revealOnScroll />
      </div>

      <section id='home-section-facts'>
        <Bg wrapperClass='section-divider section-pad-relaxed' containerClass='max-w-5xl'>
          <div class='reveal-on-scroll [--reveal-delay:60ms]'>
            <Heading level={2}>会社概要・アクセス</Heading>
            <MapWithInfo mapNote={homeFactsMapNote} rows={homeFactsRows} revealOnScroll>
              <MapEmbed />
            </MapWithInfo>
          </div>
        </Bg>
      </section>

      <section id='home-section-info'>
        <Bg
          background={{ patternClass: 'bg-subtle bg-pattern-stripe-v' }}
          wrapperClass='section-divider section-pad-compact'
          containerClass='max-w-5xl'
        >
          <div class='reveal-on-scroll [--reveal-delay:80ms]'>
            <Heading level={2}>よくあるご質問</Heading>
            <FaqList {...homeInfoFaq} revealOnScroll />
          </div>
        </Bg>
      </section>

      <div class='section-divider'>
        <ImageBreak {...homeImageBreaks[1]} revealOnScroll />
      </div>

      <section id='home-section-conversion'>
        <Bg
          background={{ patternClass: 'bg-emphasis bg-pattern-cross' }}
          wrapperClass='section-divider section-pad-relaxed'
          containerClass='max-w-xl relative'
        >
          <Heading level={2} class='text-center'>
            お問い合わせ
          </Heading>
          <CtaBand {...homeConversionCatalog} revealOnScroll />
        </Bg>
      </section>
    </div>
  );
}

import { useState } from 'hono/jsx';
import { SITE_BRAND } from '@/data';
import {
  SITE_FRAME_DRAWER_ID,
  frameNavEntries,
  framePrimaryCta,
  frameFooterCopy,
  type HeaderPattern,
  type FooterPattern,
} from '@/sections/frame';
import { Header } from '@/sections/frame/header';
import { Footer } from '@/sections/frame/footer';

const headerPatterns: HeaderPattern[] = ['standard', 'none'];
const footerPatterns: FooterPattern[] = ['standard', 'bar', 'none'];

export default function FramePanel() {
  const [headerPattern, setHeaderPattern] = useState<HeaderPattern>('standard');
  const [footerPattern, setFooterPattern] = useState<FooterPattern>('standard');

  return (
    <div class='flex flex-col gap-6 my-6 w-full mx-auto'>
      <div class='flex flex-wrap gap-4 justify-start'>
        <div class='flex items-center gap-2'>
          {headerPatterns.map((p) => (
            <button
              class={headerPattern === p ? 'btn btn-primary btn-sm' : 'btn btn-outline btn-sm'}
              onClick={() => setHeaderPattern(p)}
              type='button'
              key={p}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div class='border-2 border-dashed border-base-300 rounded-box overflow-hidden w-full min-h-32 p-6'>
        {headerPattern !== 'none' && (
          <Header
            brandText={SITE_BRAND}
            drawerId={SITE_FRAME_DRAWER_ID}
            navEntries={frameNavEntries}
            primaryCta={framePrimaryCta}
          />
        )}
      </div>

      <div class='flex flex-wrap gap-4 justify-start'>
        <div class='flex items-center gap-2'>
          {footerPatterns.map((p) => (
            <button
              class={footerPattern === p ? 'btn btn-primary btn-sm' : 'btn btn-outline btn-sm'}
              onClick={() => setFooterPattern(p)}
              type='button'
              key={p}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div class='border-2 border-dashed border-base-300 rounded-box overflow-hidden w-full min-h-90 p-6'>
        <Footer copy={frameFooterCopy} pattern={footerPattern} />
      </div>
    </div>
  );
}

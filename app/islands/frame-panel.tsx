import { useState } from 'hono/jsx';
import { SITE_BRAND } from '@/data';
import {
  frameNavEntries,
  frameCtaEntry,
  frameFooterCopy,
  type HeaderPattern,
  type FooterPattern,
} from '@/sections/frame';
import {
  HeaderCta,
  HeaderTypeFullWidth,
  HeaderIcon,
  HeaderTypeIsland,
  HeaderNav,
} from '@/sections/frame/header';
import { Footer } from '@/sections/frame/footer';

const headerPatterns: HeaderPattern[] = ['standard', 'island', 'none'];
const footerPatterns: FooterPattern[] = ['standard', 'bar', 'none'];

export default function FramePanel() {
  const [headerPattern, setHeaderPattern] = useState<HeaderPattern>('standard');
  const [footerPattern, setFooterPattern] = useState<FooterPattern>('standard');

  const left = <HeaderIcon href='/' brandText={SITE_BRAND} />;

  const center = <HeaderNav entries={frameNavEntries} />;
  const right = (
    <HeaderCta entry={frameCtaEntry} shape={headerPattern === 'island' ? 'pill' : 'default'} />
  );
  const showDrawer = frameNavEntries.length > 0;

  const HeaderComponent = headerPattern === 'island' ? HeaderTypeIsland : HeaderTypeFullWidth;

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
          <HeaderComponent
            hamburger={showDrawer ? { side: 'left' } : undefined}
            bg='solid'
            left={left}
            center={center}
            right={right}
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

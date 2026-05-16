import type { Child } from 'hono/jsx';
import type {
  CtaSlot,
  HeaderContents,
  IconSlot,
  NavSlot,
  ResolvedFrameConfig,
} from './frame-config';
import { SITE_FRAME_DRAWER_ID } from './data';
import DemoBanner from '@/components/$demo-banner';
import { DrawerNav } from './drawer-nav';
import { Footer } from './footer';
import {
  HeaderTypeFullWidth,
  DrawerCta,
  HeaderCta,
  HeaderIcon,
  HeaderTypeIsland,
  HeaderNav,
} from './header';

export interface SiteLayoutProps {
  config: ResolvedFrameConfig;
  isDemo: boolean;
  main: Child;
}

function resolveHeaderContent(cnt: HeaderContents): Child {
  if (!cnt) return undefined;

  switch (cnt.type) {
    case 'icon': {
      const c = cnt as IconSlot;
      return <HeaderIcon {...c.entry} display={c.display} />;
    }
    case 'nav': {
      const c = cnt as NavSlot;
      return <HeaderNav entries={c.entry} display={c.display} />;
    }
    case 'cta': {
      const c = cnt as CtaSlot;
      return <HeaderCta entry={c.entry} shape={c.shape} display={c.display} />;
    }
    default:
      return undefined;
  }
}

export function SiteLayout({ config, isDemo, main }: SiteLayoutProps) {
  const {
    footerBg,
    footerCopy,
    footerPattern,
    headerBg,
    headerCenter,
    headerLeft,
    headerPattern,
    headerPosition,
    headerRight,
    hamburger,
    drawer,
  } = config;

  const left = resolveHeaderContent(headerLeft);
  const center = resolveHeaderContent(headerCenter);
  const right = resolveHeaderContent(headerRight);

  const HeaderComponent = headerPattern === 'island' ? HeaderTypeIsland : HeaderTypeFullWidth;

  return (
    <div class={`drawer ${drawer?.side === 'right' ? 'drawer-end' : ''}`}>
      <input class='drawer-toggle' id={SITE_FRAME_DRAWER_ID} type='checkbox' />
      <div class='drawer-content bg-base-100 flex min-h-dvh min-w-0 flex-col'>
        {headerPattern !== 'none' && (
          <div
            class={headerPosition === 'fixed' ? 'fixed inset-x-0 top-0 z-40' : 'sticky top-0 z-40'}
          >
            <DemoBanner isDemo={isDemo} />
            <HeaderComponent
              bg={headerBg}
              hamburger={hamburger}
              left={left}
              center={center}
              right={right}
            />
          </div>
        )}
        <div class='flex flex-col flex-1'>
          <a
            class='sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-60 focus:rounded-btn focus:border focus:border-base-300 focus:bg-base-100 focus:px-4 focus:py-2 focus:text-base-content focus:shadow focus:outline-2 focus:outline-offset-2'
            href='#main-content'
          >
            メインコンテンツへスキップ
          </a>
          <div class='flex min-h-screen flex-1 flex-col'>
            <main class='flex flex-1 flex-col' id='main-content'>
              {main}
            </main>
            <Footer bg={footerBg} copy={footerCopy} pattern={footerPattern} />
          </div>
        </div>
      </div>
      {drawer && (
        <div class='drawer-side z-50'>
          <label
            aria-label='画面のこの部分をタップしてメニューを閉じる'
            class='drawer-overlay'
            htmlFor={SITE_FRAME_DRAWER_ID}
          />
          <aside class='bg-base-200 text-base-content flex min-h-full w-80 max-w-[calc(100vw-1rem)] flex-col gap-4 border-l border-base-300 p-4'>
            <div class='flex min-w-0 items-start justify-between gap-2'>
              <p
                class='font-display text-lg leading-snug tracking-tight wrap-break-words'
                title={drawer.brandText}
              >
                {drawer.brandText}
              </p>
              <label
                aria-label='メニューを閉じる'
                class='btn btn-square btn-ghost btn-sm shrink-0'
                htmlFor={SITE_FRAME_DRAWER_ID}
              >
                <svg
                  aria-hidden='true'
                  class='h-5 w-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6 18L18 6M6 6l12 12'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                  />
                </svg>
              </label>
            </div>
            <DrawerNav entries={drawer.entry} />
            {drawer.ctaEntry && <DrawerCta entry={drawer.ctaEntry} />}
          </aside>
        </div>
      )}
    </div>
  );
}

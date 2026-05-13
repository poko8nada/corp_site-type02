import type { Child } from 'hono/jsx';
import type { FrameFooterCopy } from '@/sections/frame/footer/footer.types';
import type { FrameNavEntry } from '@/sections/frame/header/header.types';
import DemoBanner from '@/components/$demo-banner';
import { DrawerNav } from './drawer-nav';
import { Footer, type FooterPattern } from './footer';
import { Header, type HeaderPattern } from './header';

/** Top-level shell: demo banner → header → main → footer. All structure props flow down from _renderer. */
export interface SiteLayoutProps {
  brandText: string;
  drawerId: string;
  headerPattern: HeaderPattern;
  footerPattern: FooterPattern;
  isDemo: boolean;
  navEntries: readonly FrameNavEntry[];
  primaryCta: { readonly label: string; readonly href: string };
  footerCopy: FrameFooterCopy;
  /** Route body: Honox `Layout` wrapping page `children`. */
  main: Child;
}

export function SiteLayout(props: SiteLayoutProps) {
  const {
    brandText,
    drawerId,
    headerPattern,
    footerPattern,
    isDemo,
    navEntries,
    primaryCta,
    footerCopy,
    main,
  } = props;

  return (
    <div class='drawer drawer-end'>
      <input class='drawer-toggle' id={drawerId} type='checkbox' />
      <div class='drawer-content bg-base-100 flex min-h-dvh min-w-0 flex-col'>
        <div class='sticky top-0 z-40'>
          <DemoBanner isDemo={isDemo} />
          <Header
            brandText={brandText}
            drawerId={drawerId}
            navEntries={navEntries}
            pattern={headerPattern}
            primaryCta={primaryCta}
          />
        </div>
        <div class='parallax-scroll flex flex-col flex-1'>
          <div aria-hidden='true' class='parallax-backdrop' />
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
            <Footer copy={footerCopy} pattern={footerPattern} />
          </div>
        </div>
      </div>
      <div class='drawer-side z-50 lg:hidden'>
        <label
          aria-label='画面のこの部分をタップしてメニューを閉じる'
          class='drawer-overlay'
          htmlFor={drawerId}
        />
        <aside class='bg-base-200 text-base-content flex min-h-full w-80 max-w-[calc(100vw-1rem)] flex-col gap-4 border-l border-base-300 p-4'>
          <div class='flex min-w-0 items-start justify-between gap-2'>
            <p
              class='font-display text-lg leading-snug tracking-tight wrap-break-words'
              title={brandText}
            >
              {brandText}
            </p>
            <label
              aria-label='メニューを閉じる'
              class='btn btn-square btn-ghost btn-sm shrink-0'
              htmlFor={drawerId}
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
          <DrawerNav entries={navEntries} />
          <a class='btn btn-outline btn-primary btn-sm shrink-0' href={primaryCta.href}>
            {primaryCta.label}
          </a>
        </aside>
      </div>
    </div>
  );
}

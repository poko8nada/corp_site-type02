import type { Child } from 'hono/jsx';
import type { FrameBg, Hamburger } from '@/sections/frame/frame-config';
import { SITE_FRAME_DRAWER_ID } from '@/sections/frame/data';

export interface HeaderTypeIslandProps {
  left?: Child;
  center?: Child;
  right?: Child;
  bg?: FrameBg;
  hamburger?: Hamburger;
}

export function HeaderTypeIsland(props: HeaderTypeIslandProps) {
  const { left, center, right, bg = 'solid', hamburger: hamburgerConfig } = props;

  const isGlass = bg === 'glass';

  const headerBg = '';
  const islandBg = bg === 'solid' ? 'bg-base-100' : bg === 'transparent' ? '' : 'bg-base-100/70';
  const islandShadow = bg === 'transparent' ? '' : 'shadow-sm';

  const hamburger = hamburgerConfig && (
    <label
      aria-label='メニューを開く'
      class={`drawer-button btn btn-square btn-ghost shrink-0 relative z-10 ${hamburgerConfig.display === 'always' ? '' : 'md:hidden'}`}
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
          d='M4 6h16M4 12h16M4 18h16'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
        />
      </svg>
    </label>
  );

  return (
    <header class={headerBg}>
      <div class='relative z-10 mx-auto flex w-full max-w-5xl items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8'>
        <div
          class={`relative isolate flex w-full items-center gap-1 rounded-full border border-base-300/40 ${islandBg} px-4 py-3 sm:gap-2 ${islandShadow}`}
        >
          {isGlass && (
            <div
              aria-hidden='true'
              class='absolute inset-0 z-0 rounded-full backdrop-filter-[blur(16px)_saturate(150%)] [-webkit-backdrop-filter:blur(16px)_saturate(150%)]'
            />
          )}
          {hamburgerConfig?.side === 'left' && hamburger}
          <div class='min-w-0 shrink-0 flex justify-start relative z-10'>{left}</div>
          <div class='min-w-0 flex-1 flex justify-center relative z-10'>{center}</div>
          <div class='min-w-0 shrink-0 flex justify-end relative z-10'>{right}</div>
          {hamburgerConfig?.side === 'right' && hamburger}
        </div>
      </div>
    </header>
  );
}

import type { Child } from 'hono/jsx';
import type { DrawerSide, FrameBg } from '../frame-config';
import { SITE_FRAME_DRAWER_ID } from '../data';

export interface HeaderIslandProps {
  left?: Child;
  center?: Child;
  right?: Child;
  bg?: FrameBg;
  drawerSide?: DrawerSide;
}

export function HeaderIsland(props: HeaderIslandProps) {
  const { left, center, right, bg = 'solid', drawerSide } = props;

  const isGlass = bg !== 'solid' && bg !== 'transparent';

  const headerBg = bg === 'solid' ? 'bg-base-100' : bg === 'transparent' ? '' : 'bg-base-100/30';

  const hamburger = drawerSide && (
    <label
      aria-label='メニューを開く'
      class='drawer-button btn btn-square btn-ghost shrink-0 lg:hidden'
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
      {isGlass && (
        <div
          aria-hidden='true'
          class='absolute inset-0 backdrop-filter-[blur(16px)_saturate(150%)] [-webkit-backdrop-filter:blur(16px)_saturate(150%)]'
        />
      )}
      <div class='relative z-10 mx-auto flex w-full max-w-5xl items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8'>
        <div class='flex w-full items-center justify-between gap-3 rounded-full border border-base-300/40 bg-base-100 px-3 py-3 shadow-sm sm:gap-4 sm:px-4'>
          <div class='flex min-w-0 items-center gap-2 sm:gap-3'>
            {drawerSide === 'left' && hamburger}
            {left}
          </div>
          {center && <div class='hidden lg:block'>{center}</div>}
          {right && (
            <div class='flex shrink-0 items-center gap-2'>
              {drawerSide === 'right' && hamburger}
              {right}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

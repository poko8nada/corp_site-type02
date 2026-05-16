import type { Child } from 'hono/jsx';
import type { FrameBg, Hamburger } from '@/sections/frame/frame-config';
import { SITE_FRAME_DRAWER_ID } from '@/sections/frame/data';

export interface HeaderTypeFullWidthProps {
  left?: Child;
  center?: Child;
  right?: Child;
  bg?: FrameBg;
  hamburger?: Hamburger;
}

export function HeaderTypeFullWidth(props: HeaderTypeFullWidthProps) {
  const { left, center, right, bg = 'solid', hamburger: hamburgerConfig } = props;

  const isGlass = bg === 'glass';

  const headerBg =
    bg === 'solid'
      ? 'border-b border-base-300 bg-base-100'
      : bg === 'transparent'
        ? 'border-b border-base-100/10'
        : 'relative border-b border-base-100/20 bg-base-100/70 shadow-sm';

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
      {isGlass && (
        <div
          aria-hidden='true'
          class='absolute inset-0 backdrop-filter-[blur(16px)_saturate(150%)] [-webkit-backdrop-filter:blur(16px)_saturate(150%)]'
        />
      )}
      <div class='relative z-10 mx-auto flex w-full max-w-6xl min-w-0 items-center gap-x-4 px-4 py-3.5 sm:gap-x-6 sm:px-6 sm:py-4 lg:gap-x-8 lg:px-8 min-h-14 sm:min-h-16'>
        {hamburgerConfig?.side === 'left' && hamburger}
        <div class='min-w-0 shrink-0 flex justify-start relative z-10'>{left}</div>
        <div class='min-w-0 flex-1 flex justify-center relative z-10'>{center}</div>
        <div class='min-w-0 shrink-0 flex justify-end relative z-10'>{right}</div>
        {hamburgerConfig?.side === 'right' && hamburger}
      </div>
    </header>
  );
}

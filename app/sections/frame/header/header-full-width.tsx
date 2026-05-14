import type { Child } from 'hono/jsx';
import type { FrameBg } from '../frame.types';

export interface HeaderFullWidthProps {
  drawerId: string;
  left?: Child;
  center?: Child;
  right?: Child;
  bg?: FrameBg;
}

export function HeaderFullWidth(props: HeaderFullWidthProps) {
  const { drawerId, left, center, right, bg = 'solid' } = props;

  const isGlass = bg !== 'solid' && bg !== 'transparent';

  const headerBg =
    bg === 'solid'
      ? 'border-b border-base-300 bg-base-100'
      : bg === 'transparent'
        ? 'border-b border-base-100/10'
        : 'relative border-b border-base-100/20 bg-base-100/30 shadow-sm';

  return (
    <header class={headerBg}>
      {isGlass && (
        <div
          aria-hidden='true'
          class='absolute inset-0 backdrop-filter-[blur(16px)_saturate(150%)] [-webkit-backdrop-filter:blur(16px)_saturate(150%)]'
        />
      )}
      <div class='relative z-10 mx-auto flex w-full max-w-6xl min-w-0 items-center justify-between gap-x-4 px-4 py-3.5 sm:gap-x-6 sm:px-6 sm:py-4 lg:gap-x-8 lg:px-8 min-h-14 sm:min-h-16'>
        <div class='flex min-w-0 items-center gap-3 sm:gap-4'>
          <label
            aria-label='メニューを開く'
            class='drawer-button btn btn-square btn-ghost shrink-0 lg:hidden'
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
                d='M4 6h16M4 12h16M4 18h16'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
              />
            </svg>
          </label>
          {left}
        </div>
        {center}
        {right && <div class='flex min-w-0 shrink-0 items-center gap-2 sm:pl-2'>{right}</div>}
      </div>
    </header>
  );
}

import { LogoIcon } from '@/components/logo-icon';
import type { FrameNavEntry } from './index';

export type HeaderPattern = 'standard' | 'compact' | 'none';

/** Global header with responsive nav and CTA. Glass morphism can be toggled via the `glass` prop. */
export interface HeaderProps {
  pattern: HeaderPattern;
  brandText: string;
  drawerId: string;
  navEntries: readonly FrameNavEntry[];
  primaryCta: { readonly label: string; readonly href: string };
  glass?: boolean;
}

export function Header(props: HeaderProps) {
  const { pattern, brandText, drawerId, navEntries, primaryCta, glass = true } = props;

  if (pattern === 'none') {
    return null;
  }

  const compact = pattern === 'compact';

  const menuBtn = compact
    ? 'btn btn-square btn-ghost btn-sm lg:hidden'
    : 'btn btn-square btn-ghost lg:hidden';

  const barPad = compact ? 'py-2.5 sm:py-3' : 'py-3.5 sm:py-4';
  const barMinH = compact ? 'min-h-12 sm:min-h-14' : 'min-h-14 sm:min-h-16';

  const brandSize = compact
    ? 'text-lg leading-tight sm:text-xl'
    : 'text-xl leading-tight sm:text-2xl';

  const navText = compact ? 'text-sm' : 'text-sm sm:text-base';

  const headerBg = glass
    ? 'border-b border-base-300/80 bg-base-100/90 shadow-sm backdrop-blur'
    : 'border-b border-base-300 bg-base-100';

  return (
    <header class={headerBg}>
      <div
        class={`mx-auto flex w-full max-w-6xl min-w-0 items-center justify-between gap-x-4 px-4 sm:gap-x-6 sm:px-6 lg:gap-x-8 lg:px-8 ${barMinH} ${barPad}`}
      >
        <div class='flex min-w-0 items-center gap-3 sm:gap-4'>
          <label
            aria-label='メニューを開く'
            class={`drawer-button shrink-0 ${menuBtn}`}
            htmlFor={drawerId}
          >
            <svg
              aria-hidden='true'
              class={compact ? 'h-4 w-4' : 'h-5 w-5'}
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
          <a
            class={`font-display text-base-content inline-flex min-w-0 items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-left tracking-tight ${brandSize}`}
            href='/'
            title={brandText}
          >
            <LogoIcon class='inline-block h-[1.1em] w-[1.1em] shrink-0' />
            {brandText}
          </a>
        </div>

        <nav aria-label='グローバルナビ' class='hidden min-w-0 flex-1 justify-center px-2 lg:flex'>
          <ul
            class={`flex max-w-full flex-nowrap items-center justify-center gap-6 lg:gap-10 ${navText}`}
          >
            {navEntries.map((entry) => (
              <li class='shrink-0' key={entry.label}>
                {entry.kind === 'link' ? (
                  <a
                    class='link link-hover text-base-content inline-flex min-h-11 items-center rounded-sm px-1 py-2 transition-colors duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current'
                    href={entry.href}
                  >
                    {entry.label}
                  </a>
                ) : (
                  <span
                    class='text-base-content/50 inline-flex min-h-11 cursor-not-allowed items-center px-1 py-2'
                    data-frame-link-state='placeholder'
                    title={entry.reason}
                  >
                    {entry.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div class='flex min-w-0 shrink-0 items-center gap-2 sm:pl-2'>
          <a
            class={compact ? 'btn btn-outline btn-primary btn-sm' : 'btn btn-outline btn-primary'}
            href={primaryCta.href}
          >
            {primaryCta.label}
          </a>
        </div>
      </div>
    </header>
  );
}

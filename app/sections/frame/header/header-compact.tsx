import { LogoIcon } from '@/components/logo-icon';
import type { HeaderProps } from './header.types';

export function HeaderCompact(props: HeaderProps) {
  const { brandText, drawerId, navEntries, primaryCta, glass = true } = props;

  const headerBg = glass
    ? 'border-b border-base-300/80 bg-base-100/90 shadow-sm backdrop-blur'
    : 'border-b border-base-300 bg-base-100';

  return (
    <header class={headerBg}>
      <div class='mx-auto flex w-full max-w-6xl min-w-0 items-center justify-between gap-x-4 px-4 py-2.5 sm:gap-x-6 sm:px-6 sm:py-3 lg:gap-x-8 lg:px-8 min-h-12 sm:min-h-14'>
        <div class='flex min-w-0 items-center gap-3 sm:gap-4'>
          <label
            aria-label='メニューを開く'
            class='drawer-button btn btn-square btn-ghost btn-sm shrink-0 lg:hidden'
            htmlFor={drawerId}
          >
            <svg
              aria-hidden='true'
              class='h-4 w-4'
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
            class='font-display text-base-content inline-flex min-w-0 items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-left tracking-tight text-lg leading-tight sm:text-xl'
            href='/'
            title={brandText}
          >
            <LogoIcon class='inline-block h-[1.1em] w-[1.1em] shrink-0' />
            {brandText}
          </a>
        </div>

        <nav aria-label='グローバルナビ' class='hidden min-w-0 flex-1 justify-center px-2 lg:flex'>
          <ul class='flex max-w-full flex-nowrap items-center justify-center gap-6 text-sm lg:gap-10'>
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
          <a class='btn btn-outline btn-primary btn-sm' href={primaryCta.href}>
            {primaryCta.label}
          </a>
        </div>
      </div>
    </header>
  );
}

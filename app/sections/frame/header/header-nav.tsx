import type { FrameNavEntry } from '../frame-config';

export interface NavProps {
  entries: readonly FrameNavEntry[];
}

export function Nav({ entries }: NavProps) {
  return (
    <nav aria-label='グローバルナビ' class='hidden min-w-0 flex-1 justify-center px-2 lg:flex'>
      <ul class='flex max-w-full flex-nowrap items-center justify-center gap-6 text-sm sm:text-base lg:gap-10'>
        {entries.map((entry) => (
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
  );
}

import type { FrameNavEntry } from '@/sections/frame/header/header.types';

/** Mobile drawer nav using DaisyUI menu. Placeholder entries show with `cursor-not-allowed`. */
export interface DrawerNavProps {
  entries: readonly FrameNavEntry[];
}

export function DrawerNav(props: DrawerNavProps) {
  const { entries } = props;

  return (
    <ul class='menu menu-vertical bg-base-300/30 rounded-box w-full border border-base-300 p-0'>
      {entries.map((entry) => (
        <li key={entry.label}>
          {entry.kind === 'link' ? (
            <a class='text-base-content' href={entry.href}>
              {entry.label}
            </a>
          ) : (
            <span
              class='text-base-content/50 block cursor-not-allowed px-4 py-3'
              data-frame-link-state='placeholder'
              title={entry.reason}
            >
              {entry.label}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

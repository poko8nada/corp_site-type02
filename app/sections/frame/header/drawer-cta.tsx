import type { Entry } from '@/sections/frame/frame-config';

export type DrawerCtaProps = {
  entry: Entry;
};

export function DrawerCta({ entry }: DrawerCtaProps) {
  const label = entry.label;
  const href = entry.kind === 'link' ? entry.href : '#';

  return (
    <a class='btn btn-outline btn-primary btn-sm shrink-0' href={href}>
      {label}
    </a>
  );
}

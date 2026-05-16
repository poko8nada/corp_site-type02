import type { Entry, CtaSlot, DisplayMode } from '@/sections/frame/frame-config';

const SHAPE_CLASS: Record<CtaSlot['shape'], string> = {
  default: 'btn btn-outline btn-primary text-xs md:text-sm',
  pill: 'btn btn-outline btn-primary rounded-full shrink-0 text-xs md:text-sm',
};

export interface HeaderCtaProps {
  entry: Entry;
  shape?: CtaSlot['shape'];
  display?: DisplayMode;
}

export function HeaderCta({ entry, shape, display = 'auto' }: HeaderCtaProps) {
  const label = entry.label;
  const href = entry.kind === 'link' ? entry.href : '#';
  const isPlaceholder = entry.kind === 'placeholder';
  const displayClass = display === 'always' ? 'inline-flex' : 'hidden md:inline-flex';

  return (
    <a
      class={`${SHAPE_CLASS[shape ?? 'default']} ${displayClass}`}
      href={href}
      title={isPlaceholder ? entry.reason : undefined}
      data-frame-link-state={isPlaceholder ? 'placeholder' : undefined}
    >
      {label}
    </a>
  );
}

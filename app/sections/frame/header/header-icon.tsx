import type { DisplayMode, IconEntry } from '@/sections/frame/frame-config';

const LINK_CLASS =
  'font-display text-base-content inline-flex min-w-0 items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-left tracking-tight text-lg sm:text-xl lg:text-2xl px-1';

const ICON_CLASS = 'inline-block h-[1.1em] w-[1.1em] shrink-0';

export interface HeaderIconProps extends IconEntry {
  className?: string;
  display?: DisplayMode;
}

export function HeaderIcon({
  className,
  href,
  iconSrc,
  brandText,
  display = 'auto',
}: HeaderIconProps) {
  const textClass = display === 'always' ? 'block' : 'hidden md:block';

  return (
    <a class={LINK_CLASS} href={href} title={brandText}>
      {iconSrc && (
        <img
          alt=''
          class={className ? `${ICON_CLASS} ${className}` : ICON_CLASS}
          src={iconSrc}
          aria-hidden='true'
        />
      )}
      {brandText && <span class={textClass}>{brandText}</span>}
    </a>
  );
}

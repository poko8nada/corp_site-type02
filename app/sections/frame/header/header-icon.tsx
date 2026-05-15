const LINK_CLASS =
  'font-display text-base-content inline-flex min-w-0 items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-left tracking-tight text-xl leading-tight sm:text-2xl';

const ICON_CLASS = 'inline-block h-[1.1em] w-[1.1em] shrink-0';

export interface HeaderIconProps {
  class?: string;
  icon?: boolean;
  brandText?: string;
  showBrandText?: boolean;
}

export function HeaderIcon(props: HeaderIconProps) {
  const { class: className, icon = true, brandText, showBrandText } = props;

  return (
    <a class={LINK_CLASS} href='/' title={brandText}>
      {icon && (
        <img
          alt=''
          class={className ? `${ICON_CLASS} ${className}` : ICON_CLASS}
          src='/logo.svg'
          aria-hidden='true'
        />
      )}
      {showBrandText && brandText && <span>{brandText}</span>}
    </a>
  );
}

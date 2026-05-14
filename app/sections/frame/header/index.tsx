import type { FrameBg, FrameNavEntry } from '../frame.types';
import { LogoIcon } from '@/components/logo-icon';
import { HeaderFullWidth } from './header-full-width';
import { Nav } from './nav';

export { HeaderFullWidth, Nav };
export type { HeaderFullWidthProps } from './header-full-width';
export type { NavProps } from './nav';

export interface HeaderProps {
  brandText: string;
  drawerId: string;
  navEntries: readonly FrameNavEntry[];
  primaryCta: { readonly label: string; readonly href: string };
  bg?: FrameBg;
}

export function Header(props: HeaderProps) {
  const { brandText, drawerId, navEntries, primaryCta, bg } = props;

  return (
    <HeaderFullWidth
      bg={bg}
      drawerId={drawerId}
      left={
        <a
          class='font-display text-base-content inline-flex min-w-0 items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-left tracking-tight text-xl leading-tight sm:text-2xl'
          href='/'
          title={brandText}
        >
          <LogoIcon class='inline-block h-[1.1em] w-[1.1em] shrink-0' />
          {brandText}
        </a>
      }
      center={<Nav entries={navEntries} />}
      right={
        <a class='btn btn-outline btn-primary' href={primaryCta.href}>
          {primaryCta.label}
        </a>
      }
    />
  );
}

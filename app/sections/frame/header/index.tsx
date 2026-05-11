import type { HeaderPattern, HeaderProps } from './header.types';
import { HeaderStandard } from './header-standard';
import { HeaderCompact } from './header-compact';

export type { HeaderPattern, HeaderProps } from './header.types';

export interface HeaderPropsWithPattern extends HeaderProps {
  pattern: HeaderPattern;
}

export function Header(props: HeaderPropsWithPattern) {
  const { pattern, ...rest } = props;

  if (pattern === 'none') return null;
  if (pattern === 'standard') return <HeaderStandard {...rest} />;
  if (pattern === 'compact') return <HeaderCompact {...rest} />;

  return null;
}

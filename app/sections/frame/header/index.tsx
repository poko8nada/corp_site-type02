import type { HeaderPattern, HeaderProps } from './header.types';
import { HeaderStandard } from './header-standard';

export { HeaderStandard };
export type { HeaderPattern, HeaderProps } from './header.types';

export interface HeaderPropsWithPattern extends HeaderProps {
  pattern: HeaderPattern;
}

export function Header(props: HeaderPropsWithPattern) {
  const { pattern, ...rest } = props;

  if (pattern === 'none') return null;
  if (pattern === 'standard') return <HeaderStandard {...rest} />;

  return null;
}

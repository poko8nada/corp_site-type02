import type { FooterProps } from './footer.types';
import { FooterStandard } from './footer-standard';
import { FooterBar } from './footer-bar';

export { FooterStandard, FooterBar };
export type { FooterPattern, FooterProps } from './footer.types';

export function Footer(props: FooterProps) {
  const { pattern, copy, bg } = props;

  if (pattern === 'none') return null;
  if (pattern === 'standard') return <FooterStandard copy={copy} bg={bg} />;
  if (pattern === 'bar') return <FooterBar copy={copy} bg={bg} />;

  return null;
}

import type { FooterProps } from './footer.types';
import { FooterStandard } from './footer-standard';
import { FooterMinimal } from './footer-minimal';
import { FooterCompact } from './footer-compact';

export { FooterStandard, FooterMinimal, FooterCompact };
export type { FooterPattern, FooterProps } from './footer.types';

export function Footer(props: FooterProps) {
  const { pattern, copy } = props;

  if (pattern === 'none') return null;
  if (pattern === 'standard') return <FooterStandard copy={copy} />;
  if (pattern === 'minimal') return <FooterMinimal copy={copy} />;
  if (pattern === 'compact') return <FooterCompact copy={copy} />;

  return null;
}

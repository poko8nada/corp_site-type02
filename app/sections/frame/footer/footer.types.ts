import type { FrameBg, FooterPattern, FrameFooterCopy } from '../frame-config';

export interface FooterProps {
  pattern: FooterPattern;
  copy: FrameFooterCopy;
  bg?: FrameBg;
}

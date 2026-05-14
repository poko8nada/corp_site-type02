import type { FrameBg, FooterPattern, FrameFooterCopy } from '../frame.types';

export interface FooterProps {
  pattern: FooterPattern;
  copy: FrameFooterCopy;
  bg?: FrameBg;
}

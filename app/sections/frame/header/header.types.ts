import type { FrameBg } from '../frame.types';

export type FrameNavEntry =
  | { kind: 'link'; label: string; href: string }
  | { kind: 'placeholder'; label: string; reason: string };

export type HeaderPattern = 'standard' | 'none';

export interface HeaderProps {
  brandText: string;
  drawerId: string;
  navEntries: readonly FrameNavEntry[];
  primaryCta: { readonly label: string; readonly href: string };
  bg?: FrameBg;
}

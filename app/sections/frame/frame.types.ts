export type FrameBg = 'solid' | 'glass' | 'transparent';

export type HeaderPosition = 'sticky' | 'fixed';

export type HeaderPattern = 'standard' | 'none';

export type FooterPattern = 'standard' | 'bar' | 'none';

export type FrameNavEntry =
  | { kind: 'link'; label: string; href: string }
  | { kind: 'placeholder'; label: string; reason: string };

export type FrameLegalEntry =
  | { kind: 'link'; label: string; href: string }
  | { kind: 'placeholder'; label: string; reason: string };

export interface FrameFooterCopy {
  companyLines: readonly string[];
  contactLines: readonly string[];
  legalEntries: readonly FrameLegalEntry[];
  copyrightName: string;
}

export type FrameLegalEntry =
  | { kind: 'link'; label: string; href: string }
  | { kind: 'placeholder'; label: string; reason: string };

export interface FrameFooterCopy {
  companyLines: readonly string[];
  contactLines: readonly string[];
  legalEntries: readonly FrameLegalEntry[];
  copyrightName: string;
}

export type FooterPattern = 'standard' | 'minimal' | 'compact' | 'none';

export interface FooterProps {
  pattern: FooterPattern;
  copy: FrameFooterCopy;
}

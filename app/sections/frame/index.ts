/** Frame config: nav, footer, demo flag. Edit `SITE_*` imports from `@/data` to rebrand. */
import {
  SITE_BRAND,
  SITE_PHONE,
  SITE_ZIP,
  SITE_ADDRESS,
  SITE_BUILDING,
  SITE_HOURS,
  SITE_HOLIDAY,
} from '@/data';

export const SITE_FRAME_DRAWER_ID = 'site-frame-drawer' as const;

export const frameIsDemo = true as const;

export type FrameNavEntry =
  | { kind: 'link'; label: string; href: string }
  | { kind: 'placeholder'; label: string; reason: string };

export const frameNavEntries: readonly FrameNavEntry[] = [
  { kind: 'link', label: '事業概要', href: '/#home-section-explanation' },
  { kind: 'link', label: '強み', href: '/#home-section-strengths' },
  { kind: 'link', label: 'アクセス', href: '/#home-section-facts' },
  { kind: 'link', label: 'よくある質問', href: '/#home-section-info' },
] as const;

export const framePrimaryCta = {
  label: 'お問い合わせ',
  href: '/contact',
} as const;

export type FrameLegalEntry =
  | { kind: 'link'; label: string; href: string }
  | { kind: 'placeholder'; label: string; reason: string };

export interface FrameFooterCopy {
  companyHeading: string;
  companyLines: readonly string[];
  contactHeading: string;
  contactLines: readonly string[];
  legalHeading: string;
  legalEntries: readonly FrameLegalEntry[];
  copyrightName: string;
}

export const frameFooterCopy: FrameFooterCopy = {
  companyHeading: '会社情報',
  companyLines: [SITE_BRAND, `${SITE_ZIP} ${SITE_ADDRESS}`, SITE_BUILDING],
  contactHeading: '連絡先',
  contactLines: [`Tel ${SITE_PHONE}`, `営業: ${SITE_HOURS}（${SITE_HOLIDAY}）`],
  legalHeading: '法務・ポリシー',
  legalEntries: [{ kind: 'link', label: 'プライバシーポリシー', href: '/privacy' }],
  copyrightName: SITE_BRAND,
} as const;

export { DrawerNav } from './drawer-nav';

export type { DrawerNavProps } from './drawer-nav';
export { Footer } from './footer';
export type { FooterPattern, FooterProps } from './footer';
export { Header } from './header';
export type { HeaderPattern, HeaderProps } from './header';
export { SiteLayout } from './site-layout';
export type { SiteLayoutProps } from './site-layout';

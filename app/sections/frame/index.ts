import {
  SITE_BRAND,
  SITE_PHONE,
  SITE_ZIP,
  SITE_ADDRESS,
  SITE_BUILDING,
  SITE_HOURS,
  SITE_HOLIDAY,
} from '@/data';
import type { FrameFooterCopy, FrameNavEntry } from './frame.types';

export type {
  FrameBg,
  FrameFooterCopy,
  FrameLegalEntry,
  FrameNavEntry,
  HeaderPattern,
  FooterPattern,
  HeaderPosition,
} from './frame.types';

export const SITE_FRAME_DRAWER_ID = 'site-frame-drawer' as const;

export const frameIsDemo = true as const;

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

export const frameFooterCopy: FrameFooterCopy = {
  companyLines: [SITE_BRAND, `${SITE_ZIP} ${SITE_ADDRESS}`, SITE_BUILDING],
  contactLines: [`Tel ${SITE_PHONE}`, `営業: ${SITE_HOURS}（${SITE_HOLIDAY}）`],
  legalEntries: [{ kind: 'link', label: 'プライバシーポリシー', href: '/privacy' }],
  copyrightName: SITE_BRAND,
} as const;

export { DrawerNav } from './drawer-nav';
export type { DrawerNavProps } from './drawer-nav';
export { Footer, type FooterProps } from './footer';
export {
  Header,
  HeaderFullWidth,
  Nav,
  type HeaderProps,
  type HeaderFullWidthProps,
  type NavProps,
} from './header';
export { SiteLayout } from './site-layout';
export type { SiteLayoutProps } from './site-layout';

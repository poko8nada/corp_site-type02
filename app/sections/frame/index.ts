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
import type { FrameFooterCopy } from '@/sections/frame/footer/footer.types';
import type { FrameNavEntry } from '@/sections/frame/header/header.types';

export type { FrameFooterCopy } from '@/sections/frame/footer/footer.types';
export type { FrameLegalEntry } from '@/sections/frame/footer/footer.types';
export type { FrameNavEntry } from '@/sections/frame/header/header.types';

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
export { Footer, type FooterPattern, type FooterProps } from './footer';
export { Header, type HeaderPattern, type HeaderProps } from './header';
export { SiteLayout } from './site-layout';
export type { SiteLayoutProps } from './site-layout';

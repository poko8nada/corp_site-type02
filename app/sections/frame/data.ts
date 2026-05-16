import {
  SITE_BRAND,
  SITE_ZIP,
  SITE_ADDRESS,
  SITE_BUILDING,
  SITE_PHONE,
  SITE_HOURS,
  SITE_HOLIDAY,
} from '@/data';
import type { FrameFooterCopy, Entry, IconEntry } from './frame-config';

export const SITE_FRAME_DRAWER_ID = 'site-frame-drawer' as const;

export const frameIconEntry: IconEntry = {
  href: '/',
  iconSrc: '/logo.svg',
  brandText: SITE_BRAND,
} as const;

export const frameNavEntries: readonly Entry[] = [
  { kind: 'link', label: '事業概要', href: '/#home-section-explanation' },
  { kind: 'link', label: '強み', href: '/#home-section-strengths' },
  { kind: 'link', label: 'アクセス', href: '/#home-section-facts' },
  { kind: 'link', label: 'よくある質問', href: '/#home-section-info' },
] as const;

export const frameCtaEntry: Entry = {
  kind: 'link',
  label: 'お問い合わせ',
  href: '/contact',
} as const;

export const frameFooterCopy: FrameFooterCopy = {
  companyLines: [SITE_BRAND, `${SITE_ZIP} ${SITE_ADDRESS}`, SITE_BUILDING],
  contactLines: [`Tel ${SITE_PHONE}`, `営業: ${SITE_HOURS}（${SITE_HOLIDAY}）`],
  legalEntries: [{ kind: 'link', label: 'プライバシーポリシー', href: '/privacy' }],
  copyrightName: SITE_BRAND,
} as const;

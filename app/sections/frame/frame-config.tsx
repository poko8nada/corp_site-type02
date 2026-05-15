import type { Child } from 'hono/jsx';
import { SITE_BRAND } from '@/data';
import { frameFooterCopy, frameNavEntries, framePrimaryCta } from './data';
import { HeaderIcon, HeaderNav } from './header';

// ── Types ──────────────────────────────────────────

export type FrameBg = 'solid' | 'glass' | 'transparent';
export type DrawerSide = 'left' | 'right';
export type HeaderPosition = 'sticky' | 'fixed';
export type HeaderPattern = 'standard' | 'island' | 'none';
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

// ── Config ─────────────────────────────────────────

export interface ResolvedFrameConfig {
  brandText: string;
  drawerSide: DrawerSide | undefined;
  footerBg: FrameBg | undefined;
  footerCopy: FrameFooterCopy;
  footerPattern: FooterPattern;
  headerBg: FrameBg | undefined;
  headerCenter: Child | undefined;
  headerLeft: Child | undefined;
  headerPattern: HeaderPattern;
  headerPosition: HeaderPosition;
  headerRight: Child | undefined;
  isDemo: boolean;
  navEntries: readonly FrameNavEntry[];
  primaryCta: { readonly label: string; readonly href: string };
  title?: string;
}

export function FrameConfigDefaults(override?: Partial<ResolvedFrameConfig>): ResolvedFrameConfig {
  return {
    brandText: SITE_BRAND,
    drawerSide: 'right',
    footerBg: undefined,
    footerCopy: frameFooterCopy,
    footerPattern: 'standard',
    headerBg: 'transparent',
    headerCenter: undefined,
    headerLeft: <HeaderIcon brandText={SITE_BRAND} />,
    headerPattern: 'island',
    headerPosition: 'fixed',
    headerRight: <HeaderNav entries={frameNavEntries} />,
    isDemo: true,
    navEntries: frameNavEntries,
    primaryCta: framePrimaryCta,
    ...override,
  };
}

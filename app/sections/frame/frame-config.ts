import { SITE_BRAND } from '@/data';
import { frameFooterCopy, frameIconEntry, frameNavEntries, frameCtaEntry } from './data';

// ── Types ──────────────────────────────────────────

export type FrameBg = 'solid' | 'glass' | 'transparent';
export type HeaderPosition = 'sticky' | 'fixed';
export type HeaderPattern = 'standard' | 'island' | 'none';
export type FooterPattern = 'standard' | 'bar' | 'none';
export type Side = 'left' | 'right';
export type DisplayMode = 'auto' | 'always';

export type LinkEntry = {
  kind: 'link';
  label: string;
  href: string;
};

export type PlaceholderEntry = {
  kind: 'placeholder';
  label: string;
  reason: string;
};

export type Entry = LinkEntry | PlaceholderEntry;

export type IconEntry = {
  href?: string;
  iconSrc?: string;
  brandText?: string;
};

export type IconSlot = {
  type: 'icon';
  entry: IconEntry;
  display?: DisplayMode;
};

export type NavSlot = {
  type: 'nav';
  entry: readonly Entry[];
  display?: DisplayMode;
};

export type CtaSlot = {
  type: 'cta';
  entry: Entry;
  shape: 'default' | 'pill';
  display?: DisplayMode;
};

export type HeaderContents = IconSlot | NavSlot | CtaSlot | undefined;

export type Hamburger = {
  side: Side;
  display?: DisplayMode;
};

export type Drawer = {
  side: Side;
  entry: readonly Entry[];
  ctaEntry?: Entry;
  brandText?: string;
};

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
  footerBg?: FrameBg;
  footerCopy: FrameFooterCopy;
  footerPattern: FooterPattern;
  headerBg?: FrameBg;
  headerPattern: HeaderPattern;
  headerPosition: HeaderPosition;
  headerLeft?: HeaderContents;
  headerCenter?: HeaderContents;
  headerRight?: HeaderContents;
  hamburger?: Hamburger;
  drawer?: Drawer;
  title?: string;
}

export function FrameConfigDefaults(override?: Partial<ResolvedFrameConfig>): ResolvedFrameConfig {
  return {
    footerCopy: frameFooterCopy,
    footerPattern: 'standard',
    headerBg: 'solid',
    headerPattern: 'island',
    headerPosition: 'fixed',
    headerLeft: { type: 'icon', entry: frameIconEntry, display: 'always' },
    headerCenter: { type: 'nav', entry: frameNavEntries, display: 'auto' },
    headerRight: { type: 'cta', entry: frameCtaEntry, shape: 'pill', display: 'auto' },
    hamburger: { side: 'right', display: 'auto' },
    drawer: {
      side: 'right',
      entry: frameNavEntries,
      ctaEntry: frameCtaEntry,
      brandText: SITE_BRAND,
    },
    ...override,
  };
}

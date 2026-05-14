import { SITE_BRAND, SITE_DEFAULT_META_DESCRIPTION } from '@/data';
import {
  SITE_FRAME_DRAWER_ID,
  SiteLayout,
  frameFooterCopy,
  frameIsDemo,
  frameNavEntries,
  framePrimaryCta,
  type FrameBg,
} from '@/sections/frame';
import { raw } from 'hono/html';
import { jsxRenderer } from 'hono/jsx-renderer';
import { Link } from 'honox/server';

function escapeHtmlAttr(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
    .replaceAll('<', '&lt;');
}

export type SiteRenderProps = {
  title?: string;
  description?: string;
  headerPattern?: 'standard' | 'none';
  headerPosition?: 'sticky' | 'fixed';
  headerBg?: FrameBg;
  footerPattern?: 'standard' | 'bar' | 'none';
  footerBg?: FrameBg;
};

export default jsxRenderer((props) => {
  const { children, Layout } = props;
  const baseTitle = props.title ?? SITE_BRAND;
  const title = frameIsDemo ? `[DEMO] ${baseTitle}` : baseTitle;
  const baseDescription = props.description ?? SITE_DEFAULT_META_DESCRIPTION;
  const description = frameIsDemo ? `【架空のデモサイト】${baseDescription}` : baseDescription;
  const headerPattern = props.headerPattern ?? 'standard';
  const headerPosition = props.headerPosition ?? 'sticky';
  const headerBg = props.headerBg ?? 'solid';
  const footerPattern = props.footerPattern ?? 'standard';
  const footerBg = props.footerBg;
  const clientScriptSrc = import.meta.env.PROD ? '/static/client.js' : '/app/client.ts';

  return (
    <html lang='ja'>
      <head>
        {raw('<!-- site-frame:analytics-head (e.g. GTM container snippet) -->')}
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        {frameIsDemo && <meta content='noindex, nofollow' name='robots' />}
        <title>{title}</title>
        <meta name='description' content={escapeHtmlAttr(description)} />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <Link href='/app/style.css' rel='stylesheet' />
        <script src={clientScriptSrc} type='module'></script>
      </head>
      <body class='bg-base-100 text-base-content min-h-dvh overflow-x-hidden'>
        {raw('<!-- site-frame:analytics-body-open (e.g. GTM noscript iframe) -->')}
        <SiteLayout
          brandText={SITE_BRAND}
          drawerId={SITE_FRAME_DRAWER_ID}
          footerBg={footerBg}
          footerCopy={frameFooterCopy}
          footerPattern={footerPattern}
          headerBg={headerBg}
          headerPattern={headerPattern}
          headerPosition={headerPosition}
          isDemo={frameIsDemo}
          main={<Layout>{children}</Layout>}
          navEntries={frameNavEntries}
          primaryCta={framePrimaryCta}
        />
      </body>
    </html>
  );
});

import { SITE_BRAND, SITE_DEFAULT_META_DESCRIPTION, IS_DEMO } from '@/data';
import { SiteLayout, type ResolvedFrameConfig } from '@/sections/frame';
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

export default jsxRenderer((props) => {
  const { children, Layout } = props;
  const routeTitle = (props as unknown as Record<string, unknown>).title as string | undefined;
  const routeDescription = (props as unknown as Record<string, unknown>).description as
    | string
    | undefined;
  const baseTitle = routeTitle ?? SITE_BRAND;
  const resolvedTitle = IS_DEMO ? `[DEMO] ${baseTitle}` : baseTitle;
  const baseDescription = routeDescription ?? SITE_DEFAULT_META_DESCRIPTION;
  const resolvedDescription = IS_DEMO ? `【架空のデモサイト】${baseDescription}` : baseDescription;
  const clientScriptSrc = import.meta.env.PROD ? '/static/client.js' : '/app/client.ts';

  const config = {
    ...(props as unknown as Partial<ResolvedFrameConfig>),
  } as ResolvedFrameConfig;

  return (
    <html lang='ja'>
      <head>
        {raw('<!-- site-frame:analytics-head (e.g. GTM container snippet) -->')}
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        {IS_DEMO && <meta content='noindex, nofollow' name='robots' />}
        <title>{resolvedTitle}</title>
        <meta name='description' content={escapeHtmlAttr(resolvedDescription)} />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <Link href='/app/style.css' rel='stylesheet' />
        <script src={clientScriptSrc} type='module'></script>
      </head>
      <body class='bg-base-100 text-base-content min-h-dvh overflow-x-hidden'>
        {raw('<!-- site-frame:analytics-body-open (e.g. GTM noscript iframe) -->')}
        <SiteLayout config={config} isDemo={IS_DEMO} main={<Layout>{children}</Layout>} />
      </body>
    </html>
  );
});

export const SITE_BRAND = 'SITE_NAME' as const;
export const SITE_PHONE = 'XXX-XXX-XXXX' as const;
export const SITE_ZIP = '〒XXX-XXXX' as const;
export const SITE_ADDRESS = 'XX県XX市XX区XX町X-X-X' as const;
export const SITE_BUILDING = 'XXビル X階' as const;
export const SITE_HOURS = '営業時間未設定' as const;
export const SITE_HOLIDAY = '定休日未設定' as const;

export const SITE_FULL_ADDRESS = `${SITE_ZIP} ${SITE_ADDRESS} ${SITE_BUILDING}` as const;
export const SITE_HOURS_WITH_HOLIDAY = `${SITE_HOURS}（${SITE_HOLIDAY}）` as const;

export const SITE_DEFAULT_META_DESCRIPTION =
  'コーポレートサイトテンプレート。静的HTML + お問い合わせフォームで構成された、CMS不要のシンプルなサイトです。' as const;

export const ROUTE_TITLES = {
  home: SITE_BRAND,
  contact: `お問い合わせ | ${SITE_BRAND}`,
  privacy: `プライバシーポリシー | ${SITE_BRAND}`,
  notFound: '404 Not Found',
  internalError: 'Internal Server Error',
} as const;

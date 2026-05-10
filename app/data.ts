export const SITE_BRAND = 'CASUAL BAR Lyra' as const;
export const SITE_PHONE = 'XXX-XXX-XXXX' as const;
export const SITE_ZIP = '〒XXX-XXXX' as const;
export const SITE_ADDRESS = '福岡県福岡市博多区デモ町X-X-X' as const;
export const SITE_BUILDING = 'デモビル X階' as const;
export const SITE_HOURS = '月〜木 18:30〜翌2:00／金・土 18:30〜翌3:00' as const;
export const SITE_HOLIDAY = '日曜定休' as const;

export const SITE_FULL_ADDRESS = `${SITE_ZIP} ${SITE_ADDRESS} ${SITE_BUILDING}` as const;
export const SITE_HOURS_WITH_HOLIDAY = `${SITE_HOURS}（${SITE_HOLIDAY}）` as const;

export const SITE_DEFAULT_META_DESCRIPTION =
  '中洲のカジュアルバー CASUAL BAR Lyra。女性バーテンダーの気配りと本格的なカクテル・ウイスキーを、落ち着いた空間で楽しめます。' as const;

export const ROUTE_TITLES = {
  home: SITE_BRAND,
  contact: `お問い合わせ | ${SITE_BRAND}`,
  privacy: `プライバシーポリシー | ${SITE_BRAND}`,
  notFound: '404 Not Found',
  internalError: 'Internal Server Error',
} as const;

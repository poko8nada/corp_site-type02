/** Contact page catalog: context text and form area settings. */
export { ContactContextBlock } from './context';
export { ContactFormArea } from './form-area';

import { SITE_PHONE, SITE_HOURS, SITE_HOLIDAY } from '@/data';

export const contactContextCatalog = {
  phoneHeading: 'お電話でのお問い合わせ',
  phoneDesc: '当日のご予約・お急ぎの方はお電話でお受けしております。',
  phone: SITE_PHONE,
  hours: `${SITE_HOURS}（${SITE_HOLIDAY}）`,
  formHeading: 'フォームでのお問い合わせ',
  formDesc: 'ご予約のご相談、貸切のご希望、取材のお問い合わせは下記フォームからお送りください。',
  formNote:
    '内容を確認のうえ、3営業日以内にご連絡いたします。日曜・祝日は定休のため、返信にお時間をいただく場合がございます。',
} as const;

export const contactFormAreaCatalog = {
  googleFormUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSfnFDlDX-u3YY48zw1WQ2ubwkiC34YKgkzoDLm54eRD3McHCw/viewform',
  iframeId: 'contact-form-iframe',
  iframeTitle: 'お問い合わせフォーム',
  loadingText: '読み込んでいます…',
  fallbackNote: 'フォームが表示されない場合は',
  fallbackLinkLabel: 'こちら',
  fallbackNoteAfter: 'から直接お進みください。',
  phoneCtaBefore: 'お急ぎの方は',
  phoneCtaAfter: 'までお電話ください。',
} as const;

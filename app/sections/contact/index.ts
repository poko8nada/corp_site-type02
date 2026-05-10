/** Contact page catalog: context text and form area settings. */
export { ContactContextBlock } from './context';
export { ContactFormArea } from './form-area';

import { SITE_PHONE } from '@/data';

export const contactContextCatalog = {
  phoneHeading: 'お電話でのお問い合わせ',
  phoneDesc: 'お急ぎの方はお電話でお受けしております。',
  phone: SITE_PHONE,
  hours: '営業時間内にお問い合わせください。',
  formHeading: 'フォームでのお問い合わせ',
  formDesc: 'ご質問・ご依頼のご相談は下記フォームからお送りください。',
  formNote:
    '内容を確認のうえ、3営業日以内にご連絡いたします。定休日・祝日を挟む場合は、返信にお時間をいただく場合がございます。',
} as const;

export const contactFormAreaCatalog = {
  googleFormUrl: '' as string,
  iframeId: 'contact-form-iframe',
  iframeTitle: 'お問い合わせフォーム',
  loadingText: '読み込んでいます…',
  fallbackNote: 'フォームが表示されない場合は',
  fallbackLinkLabel: 'こちら',
  fallbackNoteAfter: 'から直接お進みください。',
  phoneCtaBefore: 'お急ぎの方は',
  phoneCtaAfter: 'までお電話ください。',
} as const;

import { Heading } from '@/components/heading';
import { Bg } from '@/components/background';
import { ROUTE_TITLES } from '@/data';
import { createRoute } from 'honox/factory';

const PRIVACY_LINES = [
  '当サイトは、お問い合わせフォームを通じてお客様の氏名、メールアドレス、電話番号等の個人情報をご提供いただく場合がございます。',
  'お客様からお預かりした個人情報は、お問い合わせへの回答・ご連絡のみに利用し、それ以外の目的で利用することはございません。',
  '当サイトは、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に開示・提供することはいたしません。',
  '個人情報の管理については、適切なセキュリティ対策を講じ、不正アクセス・紛失・漏洩等の防止に努めます。',
  '本ポリシーは、予告なく変更される場合がございます。変更後の内容は本ページにて公開された時点で有効となるものとします。',
];

export default createRoute((c) => {
  return c.render(
    <section id='privacy-section'>
      <Bg wrapperClass='section-pad-relaxed' containerClass='max-w-3xl'>
        <Heading level={1} class='sm:text-2xl! text-xl! text-center mx-4'>
          プライバシーポリシー
        </Heading>
        <div class='text-base-content/80 mt-20 space-y-4 text-sm leading-relaxed'>
          {PRIVACY_LINES.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
        <p class='text-base-content/50 mt-8 text-xs'>最終更新日: 2026年5月8日</p>
      </Bg>
    </section>,
    { title: ROUTE_TITLES.privacy, footerPattern: 'standard' },
  );
});

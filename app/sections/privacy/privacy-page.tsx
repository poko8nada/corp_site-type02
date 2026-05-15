import { Heading } from '@/components/heading';
import { Bg } from '@/components/background';
import { PRIVACY_LINES } from './data';

export function PrivacyPage() {
  return (
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
    </section>
  );
}

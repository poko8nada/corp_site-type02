import { Heading } from '@/components/heading';
import { Bg } from '@/components/background';
import { ROUTE_TITLES } from '@/data';
import { FrameConfigDefaults } from '@/sections/frame';
import { createRoute } from 'honox/factory';
import { ContactContextBlock, ContactFormArea } from '@/sections/contact';

export default createRoute((c) => {
  return c.render(
    <div class='text-base-content flex flex-col'>
      <section>
        <Heading level={1} class='mt-10 sm:text-2xl! text-xl! text-center mx-4'>
          お問い合わせ
        </Heading>
        <section id='contact-section-context'>
          <Bg wrapperClass='section-pad-relaxed' containerClass='max-w-3xl'>
            <Heading level={2} class='sr-only'>
              お問い合わせ方法
            </Heading>
            <div class='mt-0'>
              <ContactContextBlock />
            </div>
          </Bg>
        </section>

        <section id='contact-section-form'>
          <Bg
            wrapperClass='bg-emphasis bg-pattern-grid section-pad-relaxed section-divider'
            containerClass='max-w-3xl'
          >
            <Heading level={2} class='sm:text-2xl! text-xl! text-center mx-4'>
              お問い合わせフォーム
            </Heading>
            <div class='mt-6'>
              <ContactFormArea />
            </div>
          </Bg>
        </section>
      </section>
    </div>,
    FrameConfigDefaults({
      title: ROUTE_TITLES.contact,
      headerPattern: 'standard',
      headerBg: 'solid',
      headerPosition: 'sticky',
      headerCenter: undefined,
      headerRight: undefined,
      hamburger: undefined,
    }),
  );
});

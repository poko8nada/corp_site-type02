import { Heading } from '@/components/heading';
import { Section } from '@/components/section';
import { ROUTE_TITLES } from '@/data';
import { createRoute } from 'honox/factory';
import { ContactContextBlock, ContactFormArea } from '@/sections/contact';

export default createRoute((c) => {
  return c.render(
    <div class='text-base-content flex flex-col'>
      <section>
        <Heading level={1} class='text-center mt-10 mx-4'>
          お問い合わせ
        </Heading>
        <Section
          wrapperClass='section-pad-relaxed'
          id='contact-section-context'
          containerClass='max-w-3xl'
        >
          <Heading level={2} class='sr-only'>
            お問い合わせ方法
          </Heading>
          <div class='mt-0'>
            <ContactContextBlock />
          </div>
        </Section>

        <Section
          wrapperClass='surface-emphasis section-pattern-grid section-pad-relaxed section-divider'
          id='contact-section-form'
          containerClass='max-w-3xl'
        >
          <Heading level={2} class='text-center'>
            お問い合わせフォーム
          </Heading>
          <div class='mt-6'>
            <ContactFormArea />
          </div>
        </Section>
      </section>
    </div>,
    { title: ROUTE_TITLES.contact },
  );
});

import { Section } from '@/components/section';
import { ROUTE_TITLES } from '@/data';
import { createRoute } from 'honox/factory';
import { ContactContextBlock, ContactFormArea } from '@/sections/contact';

export default createRoute((c) => {
  return c.render(
    <div class='text-base-content flex flex-col'>
      <Section
        wrapperClass='section-pad-relaxed'
        id='contact-section-context'
        label='お問い合わせにあたって'
      >
        <ContactContextBlock />
      </Section>

      <Section
        wrapperClass='surface-emphasis section-pattern-grid section-pad-relaxed section-divider'
        id='contact-section-form'
        label='お問い合わせフォーム'
      >
        <ContactFormArea />
      </Section>
    </div>,
    { title: ROUTE_TITLES.contact },
  );
});

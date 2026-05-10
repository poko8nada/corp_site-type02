import { SITE_PHONE } from '@/data';
import { contactFormAreaCatalog } from './index';

export function ContactFormArea() {
  const {
    googleFormUrl,
    iframeId,
    iframeTitle,
    loadingText,
    fallbackNote,
    fallbackLinkLabel,
    fallbackNoteAfter,
    phoneCtaBefore,
    phoneCtaAfter,
  } = contactFormAreaCatalog;

  return (
    <div class='mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8'>
      <div class='min-h-fit'>
        <iframe
          id={iframeId}
          src={googleFormUrl + '?embedded=true'}
          height='1200'
          width='100%'
          frameborder='0'
          marginheight='0'
          marginwidth='0'
          title={iframeTitle}
        >
          {loadingText}
        </iframe>
      </div>
      <p class='mt-4 text-center text-xs text-base-content/50'>
        ※ {fallbackNote}
        <a
          href={googleFormUrl}
          target='_blank'
          rel='noopener noreferrer'
          class='underline hover:text-base-content/80'
        >
          {fallbackLinkLabel}
        </a>
        {fallbackNoteAfter} {phoneCtaBefore}{' '}
        <a
          href={`tel:${SITE_PHONE.replace(/-/g, '')}`}
          class='underline hover:text-base-content/80'
        >
          {SITE_PHONE}
        </a>{' '}
        {phoneCtaAfter}
      </p>
    </div>
  );
}

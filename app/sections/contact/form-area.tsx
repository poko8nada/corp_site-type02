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

  if (!googleFormUrl) {
    return (
      <>
        <div class='flex min-h-64 items-center justify-center rounded-xl border-2 border-dashed border-base-300 bg-base-200/50'>
          <p class='px-6 text-center text-sm text-base-content/60'>
            フォームプレースホルダー
            <br />
            実際のフォームURLに差し替えてください
          </p>
        </div>
        <p class='mt-4 text-center text-xs text-base-content/50'>
          {phoneCtaBefore}{' '}
          <a
            href={`tel:${SITE_PHONE.replace(/-/g, '')}`}
            class='underline hover:text-base-content/80'
          >
            {SITE_PHONE}
          </a>{' '}
          {phoneCtaAfter}
        </p>
      </>
    );
  }

  return (
    <>
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
    </>
  );
}

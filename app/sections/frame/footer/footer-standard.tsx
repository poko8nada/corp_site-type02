import type { FrameBg } from '../frame.types';
import type { FrameFooterCopy, FrameLegalEntry } from './footer.types';

function currentYear(): number {
  return new Date().getFullYear();
}

function legalRow(entry: FrameLegalEntry) {
  if (entry.kind === 'link') {
    return (
      <a
        class='link link-hover inline-flex min-h-9 items-center rounded-sm py-0.5 transition-colors duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current'
        href={entry.href}
      >
        {entry.label}
      </a>
    );
  }
  return (
    <span
      class='text-base-content/50 inline-flex min-h-9 cursor-not-allowed items-center py-0.5'
      data-frame-link-state='placeholder'
      title={entry.reason}
    >
      {entry.label}
    </span>
  );
}

export function FooterStandard({ copy, bg = 'solid' }: { copy: FrameFooterCopy; bg?: FrameBg }) {
  const footerBg =
    bg === 'glass'
      ? 'border-t border-base-100/20 bg-base-200/30 shadow-sm backdrop-blur-lg backdrop-saturate-150'
      : bg === 'transparent'
        ? 'border-t border-base-100/10'
        : 'border-t border-base-300 bg-base-200';

  const frameInset = 'mx-auto w-full max-w-6xl px-4 pt-12 pb-6 sm:px-6 sm:pt-14 sm:pb-8 lg:px-8';
  const sectionBlock = 'flex min-w-0 w-full md:w-auto flex-col gap-1.5 text-left';
  const sectionTitle =
    'text-base-content/60 text-xs font-bold uppercase tracking-[0.18em] sm:text-sm sm:tracking-wide';

  return (
    <footer class={footerBg}>
      <div class={frameInset}>
        <div class='grid w-full grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-14 md:gap-y-0 lg:gap-x-20'>
          <div class='flex flex-col gap-y-10 sm:flex-row sm:gap-x-14 sm:gap-y-0 lg:gap-x-16'>
            <section class={sectionBlock}>
              <h2 class={sectionTitle} id='footer-company-heading'>
                会社情報
              </h2>
              <ul
                aria-labelledby='footer-company-heading'
                class='flex flex-col gap-1.5 text-sm font-normal leading-relaxed'
              >
                {copy.companyLines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </section>
            <section class={sectionBlock}>
              <h2 class={sectionTitle} id='footer-contact-heading'>
                連絡先
              </h2>
              <ul
                aria-labelledby='footer-contact-heading'
                class='flex flex-col gap-1.5 text-sm font-normal leading-relaxed'
              >
                {copy.contactLines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </section>
          </div>
          <section class={`${sectionBlock} md:justify-self-end`}>
            <h2 class={sectionTitle} id='footer-legal-heading'>
              法務・ポリシー
            </h2>
            <ul
              aria-labelledby='footer-legal-heading'
              class='flex flex-col gap-1.5 text-sm font-normal leading-relaxed'
            >
              {copy.legalEntries.map((entry) => (
                <li key={entry.label}>{legalRow(entry)}</li>
              ))}
            </ul>
          </section>
        </div>
        <div class='border-base-300 mt-10 border-t pt-6 text-center'>
          <p class='text-sm leading-relaxed'>
            © {currentYear()} {copy.copyrightName}
          </p>
        </div>
      </div>
    </footer>
  );
}

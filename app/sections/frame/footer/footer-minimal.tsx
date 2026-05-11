import type { FrameFooterCopy } from './footer.types';

function currentYear(): number {
  return new Date().getFullYear();
}

export function FooterMinimal({ copy }: { copy: FrameFooterCopy }) {
  const frameInset = 'mx-auto w-full max-w-6xl px-4 pt-12 pb-6 sm:px-6 sm:pt-14 sm:pb-8 lg:px-8';

  return (
    <footer class='border-base-300 bg-base-200 text-base-content border-t'>
      <div class={frameInset}>
        <section
          aria-labelledby='footer-minimal-heading'
          class='flex min-w-0 w-full md:w-auto flex-col gap-4 text-left'
        >
          <h2 class='sr-only' id='footer-minimal-heading'>
            店舗・連絡先
          </h2>
          <div class='space-y-2 text-sm leading-relaxed'>
            <p class='text-base font-semibold leading-snug'>{copy.copyrightName}</p>
            {copy.contactLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div class='border-base-300 mt-8 border-t pt-6 text-center'>
            <p class='text-sm leading-relaxed'>
              © {currentYear()} {copy.copyrightName}
            </p>
          </div>
        </section>
      </div>
    </footer>
  );
}

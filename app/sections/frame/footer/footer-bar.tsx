import type { FrameBg } from '../frame.types';
import type { FrameFooterCopy } from './footer.types';

function currentYear(): number {
  return new Date().getFullYear();
}

export function FooterBar({ copy, bg = 'solid' }: { copy: FrameFooterCopy; bg?: FrameBg }) {
  const privacy = copy.legalEntries.find(
    (e) => e.kind === 'link' && e.label.includes('プライバシー'),
  );

  const footerBg =
    bg === 'glass'
      ? 'border-t border-base-100/20 bg-base-200/30 shadow-sm backdrop-blur-lg backdrop-saturate-150'
      : bg === 'transparent'
        ? 'border-t border-base-100/10'
        : 'border-t border-base-300 bg-base-200';

  return (
    <footer class={footerBg}>
      <div class='mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8'>
        <div class='flex flex-col items-center justify-center gap-1 text-center text-sm leading-relaxed sm:flex-row sm:gap-2'>
          <span>
            &copy; {currentYear()} {copy.copyrightName}
          </span>
          {privacy && privacy.kind === 'link' && (
            <>
              <span class='hidden sm:inline' aria-hidden='true'>
                /
              </span>
              <a
                class='link link-hover text-base-content/70 hover:text-base-content'
                href={privacy.href}
              >
                {privacy.label}
              </a>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}

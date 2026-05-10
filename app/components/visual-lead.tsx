/** Full-bleed hero with configurable overlay and optional scroll indicator. */
export type OverlayStyle = 'dark' | 'light' | 'none';

export interface VisualLeadProps {
  eyebrow: string;
  headline: string;
  subhead?: string;
  description: readonly string[];
  imageSrc: string;
  imageAlt: string;
  highlights?: readonly string[];
  overlayStyle?: OverlayStyle;
  showScrollIndicator?: boolean;
}

export function VisualLead(props: VisualLeadProps) {
  const {
    eyebrow,
    headline,
    subhead,
    description,
    imageSrc,
    imageAlt,
    highlights = [],
    overlayStyle = 'dark',
    showScrollIndicator = true,
  } = props;

  const isDark = overlayStyle === 'dark';
  const textMuted = isDark ? 'text-white/78' : 'text-base-content/78';
  const textBody = isDark ? 'text-white/70' : 'text-base-content/70';
  const textDim = isDark ? 'text-white/68' : 'text-base-content/68';
  const textFull = isDark ? 'text-white' : 'text-base-content';
  const scrollBorder = isDark ? 'border-white/35' : 'border-base-content/25';
  const scrollColor = isDark ? 'text-white/75' : 'text-base-content/60';

  return (
    <div class='relative flex min-h-[88svh] items-end sm:min-h-svh'>
      <img
        alt={imageAlt}
        class='absolute inset-0 h-full w-full object-cover'
        decoding='async'
        loading='eager'
        src={imageSrc}
      />
      {overlayStyle !== 'none' && (
        <div class='pointer-events-none absolute inset-0' aria-hidden='true'>
          {overlayStyle === 'dark' ? (
            <>
              <div class='absolute inset-0 bg-linear-to-t from-black/80 via-black/38 to-black/10' />
              <div class='absolute inset-0 bg-radial-[ellipse_65%_55%_at_50%_78%] from-primary/22 to-transparent' />
              <div class='absolute inset-0 bg-radial-[ellipse_55%_38%_at_30%_92%] from-secondary/12 to-transparent' />
            </>
          ) : (
            <>
              <div class='absolute inset-0 bg-linear-to-t from-base-100/70 via-base-100/40 to-base-100/10' />
              <div class='absolute inset-0 bg-radial-[ellipse_65%_55%_at_50%_78%] from-primary/12 to-transparent' />
            </>
          )}
          <div class='absolute inset-x-0 bottom-0 h-56 bg-linear-to-t from-base-100 via-base-100/78 to-transparent' />
        </div>
      )}

      <div class='relative mx-auto w-full max-w-5xl px-6 pb-32 sm:px-8 sm:pb-48 lg:px-10 lg:pb-50'>
        <p class={`lead-reveal text-sm font-semibold tracking-[0.2em] uppercase ${textMuted}`}>
          {eyebrow}
        </p>
        <h1
          class={`lead-reveal [--lead-delay:100ms] font-display mt-4 text-5xl leading-[0.95] tracking-tight ${textFull} sm:text-7xl lg:text-8xl`}
        >
          {headline}
        </h1>
        {subhead ? (
          <p
            class={`lead-reveal [--lead-delay:160ms] mt-5 font-display text-xl tracking-wide ${textFull} sm:text-2xl lg:text-3xl`}
          >
            {subhead}
          </p>
        ) : null}
        <div
          class={`lead-reveal [--lead-delay:220ms] mt-12 pl-2 max-w-xl space-y-3 text-base leading-relaxed ${textBody} sm:text-lg`}
        >
          {description.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        {highlights.length > 0 ? (
          <ul
            class={`lead-reveal [--lead-delay:300ms] mt-10 flex flex-wrap gap-x-8 gap-y-2 text-xs tracking-wide ${textDim} sm:text-sm`}
          >
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>

      {showScrollIndicator && (
        <div class='absolute inset-x-0 bottom-8 flex justify-center' aria-hidden='true'>
          <svg
            class={`scroll-indicator h-7 w-7 rounded-full border p-1 ${scrollBorder} ${scrollColor}`}
            fill='none'
            stroke='currentColor'
            stroke-width='1.5'
            viewBox='0 0 24 24'
          >
            <path d='M12 5v14M5 12l7 7 7-7' stroke-linecap='round' stroke-linejoin='round' />
          </svg>
        </div>
      )}
    </div>
  );
}

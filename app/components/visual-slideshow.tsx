/** Full-width hero carousel with anchor-based navigation. Drops in as visual-lead replacement. */
export interface VisualSlide {
  imageSrc: string;
  imageAlt: string;
  caption?: {
    eyebrow?: string;
    headline?: string;
    description?: string;
  };
}

export interface VisualSlideshowProps {
  items: readonly VisualSlide[];
  showArrows?: boolean;
  showDots?: boolean;
  revealOnScroll?: boolean;
}

export function VisualSlideshow(props: VisualSlideshowProps) {
  const { items, showArrows = true, showDots = true, revealOnScroll } = props;

  return (
    <div class={`relative ${revealOnScroll ? 'reveal-on-scroll [--reveal-delay:20ms]' : ''}`}>
      <div class='carousel w-full'>
        {items.map((slide, i) => (
          <div class='carousel-item relative w-full' id={`vslide-${i}`} key={slide.imageSrc}>
            <div class='relative flex min-h-[60svh] w-full items-end sm:min-h-[65svh]'>
              <img
                alt={slide.imageAlt}
                class='absolute inset-0 h-full w-full object-cover'
                decoding='async'
                loading={i === 0 ? 'eager' : 'lazy'}
                src={slide.imageSrc}
              />
              <div class='pointer-events-none absolute inset-0' aria-hidden='true'>
                <div class='absolute inset-0 bg-radial-[ellipse_65%_55%_at_50%_78%] from-primary/22 to-transparent' />
                <div class='absolute inset-0 bg-radial-[ellipse_55%_38%_at_30%_92%] from-secondary/12 to-transparent' />
              </div>
              {slide.caption && (
                <div class='relative z-10 mx-auto w-full max-w-5xl px-6 pb-32 sm:px-8 sm:pb-48 lg:px-10 lg:pb-50'>
                  {slide.caption.eyebrow && (
                    <p class='text-white/68 mb-2 text-sm tracking-[0.14em] uppercase'>
                      {slide.caption.eyebrow}
                    </p>
                  )}
                  {slide.caption.headline && (
                    <h2 class='font-display text-white text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl'>
                      {slide.caption.headline}
                    </h2>
                  )}
                  {slide.caption.description && (
                    <p class='text-white/78 mt-4 max-w-lg text-base leading-relaxed sm:text-lg'>
                      {slide.caption.description}
                    </p>
                  )}
                </div>
              )}
            </div>
            {showArrows && (
              <div class='absolute inset-0 flex items-center justify-between px-4'>
                <a
                  class='btn btn-circle btn-ghost text-white/70 hover:bg-white/15 hover:text-white'
                  href={i === 0 ? `#vslide-${items.length - 1}` : `#vslide-${i - 1}`}
                >
                  <svg aria-hidden='true' class='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path d='M15 19l-7-7 7-7' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' />
                  </svg>
                </a>
                <a
                  class='btn btn-circle btn-ghost text-white/70 hover:bg-white/15 hover:text-white'
                  href={i === items.length - 1 ? '#vslide-0' : `#vslide-${i + 1}`}
                >
                  <svg aria-hidden='true' class='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path d='M9 5l7 7-7 7' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' />
                  </svg>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
      {showDots && (
        <div class='absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2'>
          {items.map((_, i) => (
            <a class='h-2 w-2 rounded-full bg-white/40 hover:bg-white/70 transition-colors' href={`#vslide-${i}`} key={i}>
              <span class='sr-only'>スライド {i + 1}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

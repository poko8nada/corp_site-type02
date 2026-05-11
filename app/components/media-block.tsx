import type { Child } from 'hono/jsx';

/** Text + image composition. Variant picks the layout shape. */
export type MediaBlockVariant = 'standard' | 'overlay' | 'wall' | 'float';

export interface MediaBlockProps {
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  variant: MediaBlockVariant;
  children: Child;
  decorativeImage?: boolean;
  revealOnScroll?: boolean;
}

function renderWall(props: MediaBlockProps) {
  const { imageSrc, imageAlt, imagePosition = 'right', children, revealOnScroll } = props;
  const isRight = imagePosition === 'right';
  const imageSideClass = isRight ? 'right-0' : 'left-0';
  const imageAnchorClass = isRight ? 'left-0 object-left' : 'right-0 object-right';
  const contentPadClass = isRight
    ? 'lg:pr-[clamp(14rem,30vw,28rem)]'
    : 'lg:pl-[clamp(14rem,30vw,28rem)]';
  return (
    <>
      <div class='lg:hidden'>
        <div class='px-6 py-10 sm:px-8 sm:py-14'>
          <div
            class={`max-w-2xl${revealOnScroll ? ' reveal-on-scroll [--reveal-delay:120ms]' : ''}`}
          >
            {children}
          </div>
        </div>
        <img
          alt={imageAlt}
          class='h-64 w-full object-cover'
          decoding='async'
          loading='lazy'
          src={imageSrc}
        />
      </div>
      <div class='relative left-1/2 hidden w-svw -translate-x-1/2 overflow-hidden border-y border-base-300/20 lg:block'>
        <div class='relative mx-auto max-w-5xl px-6 sm:px-8 lg:px-10'>
          <div class={`relative min-h-80 lg:min-h-112 ${contentPadClass}`}>
            <div class='flex h-full items-center'>
              <div class='max-w-2xl py-14 lg:py-18'>
                <div class={`${revealOnScroll ? 'reveal-on-scroll [--reveal-delay:120ms]' : ''}`}>
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class={`absolute inset-y-0 ${imageSideClass} w-[clamp(14rem,30vw,28rem)] overflow-hidden`}
        >
          <img
            alt={imageAlt}
            class={`absolute inset-y-0 ${imageAnchorClass} h-full w-[150%] max-w-none object-cover`}
            decoding='async'
            loading='lazy'
            src={imageSrc}
          />
        </div>
      </div>
    </>
  );
}

function renderOverlay(props: MediaBlockProps, decorative: boolean) {
  const { imageSrc, imageAlt, imagePosition = 'right', children, revealOnScroll } = props;
  const isRight = imagePosition === 'right';
  const imgClass = decorative
    ? `absolute bottom-1 ${isRight ? 'right-1' : 'left-1'} w-3/5 aspect-4/3 object-cover opacity-20`
    : `absolute inset-0 w-full h-full object-cover opacity-10`;
  return (
    <div class='relative overflow-hidden border border-base-300/20'>
      <img alt={imageAlt} class={imgClass} decoding='async' loading='lazy' src={imageSrc} />
      <div class='relative z-10 px-6 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-18'>
        <div class={`max-w-2xl${revealOnScroll ? ' reveal-on-scroll [--reveal-delay:80ms]' : ''}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

function renderFloat(props: MediaBlockProps, decorative: boolean) {
  const { imageSrc, imageAlt, imagePosition = 'right', children, revealOnScroll } = props;
  const isRight = imagePosition === 'right';
  const imgClass = decorative
    ? `absolute top-0 ${isRight ? 'right-0' : 'left-0'} w-1/3 aspect-square rounded-full object-cover opacity-40`
    : `absolute inset-0 w-full h-full object-cover opacity-10`;
  return (
    <div class='relative overflow-hidden border border-base-300/20 rounded-xl'>
      <img alt={imageAlt} class={imgClass} decoding='async' loading='lazy' src={imageSrc} />
      <div class='relative z-10 px-6 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-18'>
        <div class={`max-w-2xl${revealOnScroll ? ' reveal-on-scroll [--reveal-delay:120ms]' : ''}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

function renderStandard(props: MediaBlockProps) {
  const { imageSrc, imageAlt, imagePosition = 'right', children, revealOnScroll } = props;
  const imageOrder = imagePosition === 'left' ? 'sm:order-first' : 'sm:order-last';
  return (
    <div class='grid items-center gap-6 sm:grid-cols-2 sm:gap-10 lg:gap-16'>
      <div class={`${revealOnScroll ? 'reveal-on-scroll [--reveal-delay:120ms]' : ''}`}>
        {children}
      </div>
      <div
        class={`${imageOrder}${revealOnScroll ? ' reveal-on-scroll [--reveal-delay:40ms]' : ''}`}
      >
        <img
          alt={imageAlt}
          class='aspect-4/3 w-full rounded-xl border border-border-image object-cover shadow-[0_16px_40px_-22px_var(--color-shadow-card-ambient),0_2px_6px_-2px_var(--color-shadow-card-small)]'
          decoding='async'
          loading='lazy'
          src={imageSrc}
        />
      </div>
    </div>
  );
}

export function MediaBlock(props: MediaBlockProps) {
  const { variant, decorativeImage = true } = props;
  switch (variant) {
    case 'overlay':
      return renderOverlay(props, decorativeImage);
    case 'wall':
      return renderWall(props);
    case 'float':
      return renderFloat(props, decorativeImage);
    default:
      return renderStandard(props);
  }
}

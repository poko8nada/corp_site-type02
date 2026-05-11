/** Full-width image separator between sections. `aria-hidden` so alt is decorative only. */
export interface ImageBreakProps {
  src: string;
  alt: string;
  revealOnScroll?: boolean;
}

export function ImageBreak(props: ImageBreakProps) {
  const { src, alt, revealOnScroll } = props;

  return (
    <div aria-hidden='true' class='w-full overflow-hidden'>
      <img
        alt={alt}
        class={`${revealOnScroll ? 'reveal-on-scroll [--reveal-delay:20ms] ' : ''}h-48 w-full object-cover sm:h-64 lg:h-72`}
        decoding='async'
        loading='lazy'
        src={src}
      />
    </div>
  );
}

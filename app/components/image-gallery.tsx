/** Image gallery with carousel or grid display. Drops in as image-break replacement. */
export interface GalleryImage {
  src: string;
  alt: string;
}

export interface ImageGalleryProps {
  items: readonly GalleryImage[];
  variant?: 'carousel' | 'grid';
  revealOnScroll?: boolean;
}

function GalleryGrid({ items }: { items: readonly GalleryImage[] }) {
  return (
    <div class='grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:gap-5'>
      {items.map((img) => (
        <div class='overflow-hidden rounded-xl' key={img.src}>
          <img
            alt={img.alt}
            class='aspect-4/3 w-full object-cover transition-transform duration-300 hover:scale-105'
            decoding='async'
            loading='lazy'
            src={img.src}
          />
        </div>
      ))}
    </div>
  );
}

function GalleryCarousel({ items }: { items: readonly GalleryImage[] }) {
  return (
    <div class='carousel w-full gap-4 rounded-box'>
      {items.map((img, i) => (
        <div class='carousel-item w-full' id={`gslide-${i}`} key={img.src}>
          <img
            alt={img.alt}
            class='aspect-4/3 w-full rounded-box object-cover sm:aspect-video'
            decoding='async'
            loading={i === 0 ? 'eager' : 'lazy'}
            src={img.src}
          />
        </div>
      ))}
    </div>
  );
}

export function ImageGallery(props: ImageGalleryProps) {
  const { items, variant = 'carousel', revealOnScroll } = props;
  const revealClass = revealOnScroll ? 'reveal-on-scroll [--reveal-delay:40ms]' : '';

  if (variant === 'grid')
    return (
      <div class={revealClass}>
        <GalleryGrid items={items} />
      </div>
    );

  return (
    <div class={revealClass}>
      <GalleryCarousel items={items} />
      {items.length > 1 && (
        <div class='mt-4 flex justify-center gap-2'>
          {items.map((_, i) => (
            <a class='btn btn-xs btn-outline' href={`#gslide-${i}`} key={i}>
              {i + 1}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

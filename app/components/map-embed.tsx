export interface MapEmbedProps {
  src: string;
  title?: string;
}

export function MapEmbed({ src, title = '地図' }: MapEmbedProps) {
  return (
    <div class='relative w-full aspect-4/3 lg:aspect-auto lg:min-h-80'>
      <iframe
        src={src}
        title={title}
        class='absolute inset-0 h-full w-full'
        style={{ border: 0 }}
        allowfullscreen
        loading='lazy'
        referrerpolicy='no-referrer-when-downgrade'
      />
    </div>
  );
}

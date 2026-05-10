export interface MapEmbedProps {
  src?: string;
  title?: string;
}

const PLACEHOLDER_SRC = '' as const;

export function MapEmbed({ src, title = '地図' }: MapEmbedProps) {
  if (!src || src === PLACEHOLDER_SRC) {
    return (
      <div class='relative flex aspect-4/3 w-full items-center justify-center rounded-xl border-2 border-dashed border-base-300 bg-base-200/50 lg:aspect-auto lg:min-h-80'>
        <p class='px-6 text-center text-sm text-base-content/60'>
          地図プレースホルダー
          <br />
          実際の地図埋め込みに差し替えてください
        </p>
      </div>
    );
  }

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

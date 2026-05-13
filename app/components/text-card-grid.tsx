/** Card grid with configurable cardStyle ('elevated'|'flat'|'outline') and optional image. */
export interface TextCardGridItem {
  heading?: string;
  body: readonly string[];
  imageSrc?: string;
  imageAlt?: string;
}

export type CardStyle = 'elevated' | 'flat' | 'outline';

const CARD_CLASS: Record<CardStyle, string> = {
  elevated:
    'bg-base-100 border border-base-300/70 shadow-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 ease-out motion-reduce:transform-none motion-reduce:shadow-sm motion-reduce:transition-none',
  flat: 'bg-base-100 border border-transparent hover:border-base-300/70 hover:bg-base-200/70 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 ease-out motion-reduce:transform-none motion-reduce:shadow-none motion-reduce:transition-none',
  outline:
    'bg-base-100 border border-base-300 hover:bg-base-200/70 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 ease-out motion-reduce:transform-none motion-reduce:shadow-none motion-reduce:transition-none',
};

const GRID_COLS: Record<number, string> = {
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
};

export interface TextCardGridProps {
  sectionHeading: string;
  items: readonly TextCardGridItem[];
  columns?: 2 | 3 | 4;
  cardStyle?: CardStyle;
  revealOnScroll?: boolean;
}

export function TextCardGrid(props: TextCardGridProps) {
  const { sectionHeading, items, columns = 3, cardStyle = 'elevated', revealOnScroll } = props;
  const gridCols = GRID_COLS[columns];
  const revealDelayByIndex = [
    '[--reveal-delay:0ms]',
    '[--reveal-delay:70ms]',
    '[--reveal-delay:140ms]',
    '[--reveal-delay:210ms]',
  ] as const;

  return (
    <div>
      <h3 class='font-display text-base-content text-3xl leading-snug tracking-tight sm:text-4xl'>
        {sectionHeading}
      </h3>
      <div class={`mt-10 grid gap-5 sm:mt-12 sm:gap-6 ${gridCols}`}>
        {items.map((item, index) => (
          <div
            class={`h-full ${revealOnScroll ? 'reveal-on-scroll ' + revealDelayByIndex[Math.min(index, revealDelayByIndex.length - 1)] : ''}`}
            key={`${item.heading ?? ''}${index}`}
          >
            <div class={`h-full overflow-hidden rounded-xl ${CARD_CLASS[cardStyle]}`}>
              <div class='px-6 py-6 sm:py-8 lg:py-10'>
                {item.imageSrc && (
                  <figure class='-mx-6 -mt-6 mb-5 overflow-hidden rounded-xl sm:-mt-8 sm:-mx-6 lg:-mt-10 lg:-mx-6'>
                    <img
                      alt={item.imageAlt ?? ''}
                      class='h-48 w-full object-cover'
                      src={item.imageSrc}
                    />
                  </figure>
                )}
                {item.heading ? (
                  <p class='font-display text-xl tracking-tight text-base-content sm:text-2xl'>
                    {item.heading}
                  </p>
                ) : null}
                <div
                  class={`text-base-content/82 space-y-4 text-sm leading-relaxed sm:text-base ${item.heading ? 'mt-5' : ''}`}
                >
                  {item.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

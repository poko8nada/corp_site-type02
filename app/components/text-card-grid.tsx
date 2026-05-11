/** Card grid with configurable cardStyle ('elevated'|'flat'|'outline'). */
export interface TextCardGridItem {
  heading?: string;
  body: readonly string[];
}

export type CardStyle = 'elevated' | 'flat' | 'outline';

const CARD_CLASS: Record<CardStyle, string> = {
  elevated: 'card-elevate',
  flat: '',
  outline: 'border border-base-300 rounded-xl',
};

export interface TextCardGridProps {
  sectionHeading: string;
  items: readonly TextCardGridItem[];
  columns?: 2 | 3;
  cardStyle?: CardStyle;
  revealOnScroll?: boolean;
}

export function TextCardGrid(props: TextCardGridProps) {
  const { sectionHeading, items, columns = 3, cardStyle = 'elevated', revealOnScroll } = props;
  const gridCols = columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3';
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
            class={`${revealOnScroll ? 'reveal-on-scroll ' + revealDelayByIndex[Math.min(index, revealDelayByIndex.length - 1)] + ' ' : ''}px-6 py-6 sm:py-8 lg:py-10 ${CARD_CLASS[cardStyle]}`}
            key={`${item.heading ?? ''}${index}`}
          >
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
        ))}
      </div>
    </div>
  );
}

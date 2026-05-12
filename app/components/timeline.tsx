/** daisyUI timeline wrapper. For history, achievements, or any chronological display. */
export interface TimelineItem {
  year: string;
  title: string;
  description?: string;
}

export interface TimelineProps {
  sectionHeading: string;
  items: readonly TimelineItem[];
  revealOnScroll?: boolean;
}

const revealDelayByIndex = [
  '[--reveal-delay:0ms]',
  '[--reveal-delay:80ms]',
  '[--reveal-delay:160ms]',
  '[--reveal-delay:240ms]',
  '[--reveal-delay:320ms]',
] as const;

export function Timeline(props: TimelineProps) {
  const { sectionHeading, items, revealOnScroll } = props;

  return (
    <div>
      <h3 class='font-display text-base-content text-3xl leading-snug tracking-tight sm:text-4xl'>
        {sectionHeading}
      </h3>
      <ul class='timeline timeline-vertical mt-10 sm:mt-12'>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const itemClass = revealOnScroll
            ? `reveal-on-scroll ${revealDelayByIndex[Math.min(index, revealDelayByIndex.length - 1)]}`
            : '';
          return (
            <li class={itemClass} key={`${item.year}-${item.title}`}>
              {index > 0 && <hr />}
              <div class='timeline-start timeline-box'>{item.year}</div>
              <div class='timeline-middle'>
                <svg
                  aria-hidden='true'
                  class='h-4 w-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    d='M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                  />
                </svg>
              </div>
              <div class='timeline-end timeline-box'>
                <p class='font-semibold text-base text-base-content'>{item.title}</p>
                {item.description && (
                  <p class='mt-1 text-sm leading-relaxed text-base-content/60'>
                    {item.description}
                  </p>
                )}
              </div>
              {!isLast && <hr />}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

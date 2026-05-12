export interface StepListItem {
  heading: string;
  description?: string;
  date?: string;
}

export interface StepListProps {
  sectionHeading?: string;
  items: readonly StepListItem[];
  variant?: 'dated' | 'numbered';
  direction?: 'vertical' | 'horizontal';
  revealOnScroll?: boolean;
}

const revealDelayByIndex = [
  '[--reveal-delay:0ms]',
  '[--reveal-delay:80ms]',
  '[--reveal-delay:160ms]',
  '[--reveal-delay:240ms]',
  '[--reveal-delay:320ms]',
] as const;

function stepDot() {
  return (
    <svg aria-hidden='true' class='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
      <path
        d='M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='2'
      />
    </svg>
  );
}

function stepCircle(index: number) {
  return (
    <div class='flex size-8 items-center justify-center rounded-full text-sm  sm:size-10'>
      {index + 1}
    </div>
  );
}

export function StepList(props: StepListProps) {
  const { items, variant = 'dated', direction = 'vertical', revealOnScroll } = props;

  return (
    <div class=''>
      <ul
        class={`justify-center timeline ${direction === 'vertical' ? 'timeline-vertical' : 'timeline-horizontal'} mt-10 sm:mt-12`}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const itemClass = revealOnScroll
            ? `reveal-on-scroll ${revealDelayByIndex[Math.min(index, revealDelayByIndex.length - 1)]}`
            : '';
          return (
            <li class={itemClass} key={item.heading}>
              {index > 0 && <hr />}
              {variant === 'dated' && <div class='timeline-start timeline-box'>{item.date}</div>}
              <div class='timeline-middle'>
                {variant === 'dated' ? stepDot() : stepCircle(index)}
              </div>
              <div class='timeline-end timeline-box'>
                <p class='font-semibold text-base text-base-content'>{item.heading}</p>
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

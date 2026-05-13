/** FAQ accordion list. Items rendered as <dl>. */
export interface FaqItem {
  question: string;
  answer: string;
  answerHref?: string;
}

export interface FaqListProps {
  items: readonly FaqItem[];
  columns?: 1 | 2;
  revealOnScroll?: boolean;
}

export function FaqList(props: FaqListProps) {
  const { items, columns = 2, revealOnScroll } = props;
  const dlCols = columns === 2 ? 'lg:grid-cols-2 lg:gap-x-10' : '';
  const revealDelayByIndex = [
    '[--reveal-delay:0ms]',
    '[--reveal-delay:60ms]',
    '[--reveal-delay:120ms]',
    '[--reveal-delay:180ms]',
    '[--reveal-delay:240ms]',
    '[--reveal-delay:300ms]',
    '[--reveal-delay:360ms]',
  ] as const;

  return (
    <dl class={`mt-10 grid md:mt-12 ${dlCols}`}>
      {items.map((item, index) => (
        <div
          class={`${revealOnScroll ? 'reveal-on-scroll ' + revealDelayByIndex[Math.min(index, revealDelayByIndex.length - 1)] + ' ' : ''}border-b border-base-300/60 py-4`}
          key={item.question}
        >
          <dt class='font-sans font-medium text-lg text-base-content/74'>{item.question}</dt>
          <dd class='mt-4 text-sm leading-relaxed text-base-content/92 sm:text-base-content/92'>
            {item.answerHref ? (
              <a
                class='link link-hover text-primary transition-colors duration-200 hover:text-primary/78 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/45'
                href={item.answerHref}
              >
                {item.answer}
              </a>
            ) : (
              item.answer
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

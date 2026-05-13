/** News / article list with date, title, and optional link. */
export interface NewsItem {
  date: string;
  title: string;
  href?: string;
  description?: string;
}

export interface NewsListProps {
  items: readonly NewsItem[];
  revealOnScroll?: boolean;
}

const revealDelayByIndex = [
  '[--reveal-delay:0ms]',
  '[--reveal-delay:60ms]',
  '[--reveal-delay:120ms]',
  '[--reveal-delay:180ms]',
  '[--reveal-delay:240ms]',
  '[--reveal-delay:300ms]',
  '[--reveal-delay:360ms]',
] as const;

export function NewsList(props: NewsListProps) {
  const { items, revealOnScroll } = props;

  return (
    <div>
      <ul class='mt-10 divide-y divide-base-300/60 sm:mt-12'>
        {items.map((item, index) => (
          <li
            class={`${revealOnScroll ? 'reveal-on-scroll ' + revealDelayByIndex[Math.min(index, revealDelayByIndex.length - 1)] + ' ' : ''}py-4 first:pt-0 last:pb-0`}
            key={`${item.date}-${item.title}`}
          >
            <time class='text-xs font-semibold tracking-[0.12em] uppercase text-base-content/50'>
              {item.date}
            </time>
            {item.href ? (
              <a
                class='link link-hover text-base-content mt-1 block text-base font-medium transition-colors duration-200 hover:text-primary sm:text-lg'
                href={item.href}
              >
                {item.title}
              </a>
            ) : (
              <p class='text-base-content mt-1 text-base font-medium sm:text-lg'>{item.title}</p>
            )}
            {item.description && (
              <p class='mt-1 text-sm leading-relaxed text-base-content/60'>{item.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

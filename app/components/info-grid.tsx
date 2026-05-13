/** Two-column info grid with groups. Each item can link. */
export interface InfoItem {
  label: string;
  value: string;
  href?: string;
}

export interface InfoGroup {
  heading: string;
  items: readonly InfoItem[];
}

export interface InfoGridProps {
  groups: readonly InfoGroup[];
  revealOnScroll?: boolean;
}

export function InfoGrid(props: InfoGridProps) {
  const { groups, revealOnScroll } = props;
  const revealDelayByIndex = ['[--reveal-delay:0ms]', '[--reveal-delay:90ms]'] as const;

  return (
    <div>
      <div class='mt-10 grid gap-10 md:mt-12 md:grid-cols-2 lg:gap-14'>
        {groups.map((group, index) => (
          <div
            class={`${revealOnScroll ? 'reveal-on-scroll ' + revealDelayByIndex[Math.min(index, revealDelayByIndex.length - 1)] : ''}`}
            key={group.heading}
          >
            <p class='text-sm font-semibold tracking-[0.14em] uppercase text-base-content/72'>
              {group.heading}
            </p>
            <dl class='mt-4 space-y-0'>
              {group.items.map((item) => (
                <div
                  class='border-b border-base-300/65 py-3.5 first:pt-0 last:border-0 last:pb-0'
                  key={item.label}
                >
                  <dt class='text-sm font-medium text-base-content/72'>{item.label}</dt>
                  <dd class='mt-0.5 text-sm leading-relaxed text-base-content/92'>
                    {item.href ? (
                      <a
                        class='text-primary transition-colors duration-200 hover:text-primary/78 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/45'
                        href={item.href}
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}

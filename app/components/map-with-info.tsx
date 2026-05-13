/** Location info rows + map placeholder. Provide `children` for a real map embed. */
export interface MapInfoRow {
  label: string;
  value: string;
  valueHref?: string;
}

export interface MapWithInfoProps {
  mapNote: string;
  rows: readonly MapInfoRow[];
  children?: import('hono/jsx').Child;
  revealOnScroll?: boolean;
}

export function MapWithInfo(props: MapWithInfoProps) {
  const { mapNote, rows, children, revealOnScroll } = props;

  return (
    <div class='mt-10 grid gap-10 md:mt-12 lg:grid-cols-[1fr_1fr] lg:gap-16'>
      <dl class={`${revealOnScroll ? 'reveal-on-scroll [--reveal-delay:40ms] ' : ''}space-y-0`}>
        {rows.map((row) => (
          <div
            class='flex gap-4 border-b border-base-300/70 py-4 first:pt-0 last:border-0 last:pb-0'
            key={row.label}
          >
            <dt class='w-28 shrink-0 text-sm font-medium text-base-content/74'>{row.label}</dt>
            <dd class='text-sm leading-relaxed text-base-content/92'>
              {row.valueHref ? (
                <a
                  class='text-primary transition-colors duration-200 hover:text-primary/78 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/45'
                  href={row.valueHref}
                >
                  {row.value}
                </a>
              ) : (
                row.value
              )}
            </dd>
          </div>
        ))}
      </dl>
      {children ? (
        <div
          class={`${revealOnScroll ? 'reveal-on-scroll [--reveal-delay:140ms] ' : ''}w-full overflow-hidden rounded-lg border border-base-300/75`}
        >
          {children}
        </div>
      ) : (
        <div
          aria-label={mapNote}
          class={`${revealOnScroll ? 'reveal-on-scroll [--reveal-delay:140ms] ' : ''}flex aspect-4/3 w-full items-center justify-center rounded-lg border border-base-300/75 bg-base-200/65 text-center text-sm text-base-content/72 lg:aspect-auto lg:min-h-80`}
          role='img'
        >
          <span class='max-w-48 px-4'>{mapNote}</span>
        </div>
      )}
    </div>
  );
}

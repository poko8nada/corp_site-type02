import type { PropsWithChildren } from 'hono/jsx';

/** Semantic heading component. Tag is determined by `level` (1-6). Default styles apply to all levels. */
export interface HeadingProps extends PropsWithChildren {
  /** HTML heading level 1 through 6 */
  level: 1 | 2 | 3 | 4 | 5 | 6;
  /** Additional classes appended to the default base styles */
  class?: string;
  /** Optional id for anchor linking or aria-labelledby */
  id?: string;
}

const BASE = 'font-display text-base-content tracking-tight' as const;

const SIZE: Record<HeadingProps['level'], string> = {
  1: 'text-4xl leading-tight sm:text-5xl',
  2: 'text-3xl leading-snug sm:text-4xl',
  3: 'text-2xl leading-snug sm:text-3xl',
  4: 'text-xl leading-snug sm:text-2xl',
  5: 'text-lg leading-snug',
  6: 'text-base leading-snug',
} as const;

export function Heading(props: HeadingProps) {
  const { level, class: className, id, children } = props;
  const cls = className ? `${BASE} ${SIZE[level]} ${className}` : `${BASE} ${SIZE[level]}`;

  switch (level) {
    case 1:
      return (
        <h1 class={cls} id={id}>
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 class={cls} id={id}>
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 class={cls} id={id}>
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 class={cls} id={id}>
          {children}
        </h4>
      );
    case 5:
      return (
        <h5 class={cls} id={id}>
          {children}
        </h5>
      );
    case 6:
      return (
        <h6 class={cls} id={id}>
          {children}
        </h6>
      );
  }
}

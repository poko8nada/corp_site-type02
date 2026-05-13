import type { PropsWithChildren } from 'hono/jsx';

const WRAPPER_BASE = 'w-full' as const;
const CONTAINER_BASE = 'mx-auto w-full px-4 sm:px-6 lg:px-8' as const;

export interface LayerConfig {
  depth: number;
  surface?: string;
  pattern?: string;
}

export interface SectionProps extends PropsWithChildren {
  id: string;
  wrapperClass?: string;
  containerClass?: string;
  label?: string;
  layer?: LayerConfig;
}

export function Section(props: SectionProps) {
  const { id, wrapperClass = '', containerClass, label, layer, children } = props;
  const headingId = `${id}-heading`;

  const wrapperCls = layer
    ? `relative overflow-hidden ${WRAPPER_BASE} ${wrapperClass}`.trim()
    : `${WRAPPER_BASE} ${wrapperClass}`.trim();

  const srHeading = label && (
    <h2 class='sr-only' id={headingId}>
      {label}
    </h2>
  );

  if (layer) {
    const layerCls = [
      'parallax-layer',
      `parallax-layer--d${layer.depth}`,
      layer.surface ?? '',
      layer.pattern ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <section aria-labelledby={headingId} class={wrapperCls} id={id}>
        <div aria-hidden='true' class={layerCls} />
        <div class='relative z-10'>
          {srHeading}
          {containerClass ? (
            <div class={`${CONTAINER_BASE} ${containerClass}`}>{children}</div>
          ) : (
            children
          )}
        </div>
      </section>
    );
  }

  return (
    <section aria-labelledby={headingId} class={wrapperCls} id={id}>
      {srHeading}
      {containerClass ? (
        <div class={`${CONTAINER_BASE} ${containerClass}`}>{children}</div>
      ) : (
        children
      )}
    </section>
  );
}

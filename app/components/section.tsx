import type { PropsWithChildren } from 'hono/jsx';

/** Layer config for parallax / rich background effects. Renders an absolute background div inside the section. */
export interface LayerConfig {
  /** translateZ(-Npx) の N. depth=1 → 弱, depth=2 → 強. */
  depth: number;
  /** 背景層に付与する surface クラス（surface-emphasis 等） */
  surface?: string;
  /** 背景層に付与する pattern クラス（section-pattern-dots 等） */
  pattern?: string;
}

/** Wrapper that provides an sr-only heading for accessibility. Add a surface class for visual distinction. */
export interface SectionProps extends PropsWithChildren {
  /** sr-only 見出しに使うテキスト */
  label: string;
  /** DOM の id 属性 */
  id: string;
  /** outer 要素に付与するクラス */
  class?: string;
  /** layer を指定すると、absolute な背景 div を描画 + parallax 対応になる */
  layer?: LayerConfig;
}

export function Section(props: SectionProps) {
  const { label, id, class: className = '', children, layer } = props;
  const headingId = `${id}-heading`;

  if (layer) {
    const layerClass = [
      'parallax-layer',
      `parallax-layer--d${layer.depth}`,
      layer.surface ?? '',
      layer.pattern ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <section aria-labelledby={headingId} class={`relative overflow-hidden ${className}`} id={id}>
        <div aria-hidden='true' class={layerClass} />
        <div class='relative z-10'>
          <h2 class='sr-only' id={headingId}>
            {label}
          </h2>
          {children}
        </div>
      </section>
    );
  }

  return (
    <section aria-labelledby={headingId} class={className} id={id}>
      <h2 class='sr-only' id={headingId}>
        {label}
      </h2>
      {children}
    </section>
  );
}

import type { Child } from 'hono/jsx';
import ParallaxLayer from '@/islands/parallax-layer';

const WRAPPER_BASE = 'w-full';
const CONTAINER_BASE = 'mx-auto w-full px-4 sm:px-6 lg:px-8';

export interface BgProps {
  background?:
    | { patternClass: string }
    | { imageSrc: string };
  parallax?: { speed?: number };
  wrapperClass?: string;
  containerClass?: string;
  children: Child;
}

export function Bg(props: BgProps) {
  const { background, parallax, wrapperClass = '', containerClass, children } = props;

  const wrapperCls = `relative overflow-hidden ${WRAPPER_BASE} ${wrapperClass}`.trim();

  const imageSrc = background && 'imageSrc' in background ? background.imageSrc : undefined;
  const patternCls = background && 'patternClass' in background ? background.patternClass : undefined;

  if (!imageSrc && !patternCls) {
    return (
      <div class={wrapperCls}>
        <div class={`${CONTAINER_BASE} ${containerClass ?? ''}`.trim()}>{children}</div>
      </div>
    );
  }

  return (
    <div data-bg class={wrapperCls}>
      {imageSrc && parallax && (
        <ParallaxLayer speed={parallax.speed ?? 0.8} src={imageSrc} />
      )}
      {imageSrc && !parallax && (
        <div aria-hidden='true' class='pointer-events-none absolute inset-0'
             style={{ backgroundImage: `url(${imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      )}
      {patternCls && parallax && (
        <ParallaxLayer speed={parallax.speed ?? 0.8} patternCls={patternCls} />
      )}
      {patternCls && !parallax && (
        <div aria-hidden='true' class={`absolute inset-0 pointer-events-none ${patternCls ?? ''}`.trim()} />
      )}
      <div class='relative z-10'>
        {containerClass ? (
          <div class={`${CONTAINER_BASE} ${containerClass}`}>{children}</div>
        ) : (
          children
        )}
      </div>
    </div>
  );
}

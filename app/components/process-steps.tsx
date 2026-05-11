/** Vertical or horizontal process steps. Rich design with gradients and shadows. */
export interface ProcessStep {
  label: string;
  description?: string;
}

export interface ProcessStepsProps {
  items: readonly ProcessStep[];
  variant?: 'horizontal' | 'vertical';
  revealOnScroll?: boolean;
}

function StepNumber({ index }: { readonly index: number }) {
  return (
    <div class='flex size-11 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-primary to-primary/80 text-base font-bold text-primary-content shadow-lg shadow-primary/20 ring-4 ring-primary/10'>
      {index + 1}
    </div>
  );
}

const revealDelayByIndex = [
  '[--reveal-delay:0ms]',
  '[--reveal-delay:80ms]',
  '[--reveal-delay:160ms]',
  '[--reveal-delay:240ms]',
  '[--reveal-delay:320ms]',
] as const;

export function ProcessSteps(props: ProcessStepsProps) {
  const { items, variant = 'horizontal', revealOnScroll } = props;
  const isVertical = variant === 'vertical';

  if (isVertical) {
    return (
      <div class='flex flex-col w-full'>
        {items.map((step, i) => {
          const isLast = i === items.length - 1;
          const stepClass = revealOnScroll
            ? `reveal-on-scroll ${revealDelayByIndex[Math.min(i, revealDelayByIndex.length - 1)]}`
            : '';
          return (
            <div class={`flex gap-5 ${stepClass}`} key={step.label}>
              <div class='flex flex-col items-center'>
                <StepNumber index={i} />
                {!isLast && (
                  <div class='w-0.5 flex-1 bg-linear-to-b from-primary/40 to-primary/10 mt-3 mb-2 rounded-full' />
                )}
              </div>
              <div class='pt-1.5 pb-8'>
                <p class='font-semibold text-lg text-base-content'>{step.label}</p>
                {step.description && (
                  <p class='mt-1.5 text-sm leading-relaxed text-base-content/60'>
                    {step.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div class='flex w-full'>
      {items.map((step, i) => {
        const isFirst = i === 0;
        const isLast = i === items.length - 1;
        const stepClass = revealOnScroll
          ? `reveal-on-scroll ${revealDelayByIndex[Math.min(i, revealDelayByIndex.length - 1)]}`
          : '';
        return (
          <div class={`flex flex-1 flex-col items-center ${stepClass}`} key={step.label}>
            <div class='flex w-full items-center'>
              {!isFirst && (
                <div class='flex-1 h-0.5 bg-linear-to-l from-primary/40 to-transparent rounded-full' />
              )}
              {isFirst && <div class='flex-1 h-0.5 bg-transparent' />}
              <div class='mx-3'>
                <StepNumber index={i} />
              </div>
              {!isLast && (
                <div class='flex-1 h-0.5 bg-linear-to-r from-primary/40 to-primary/10 rounded-full' />
              )}
              {isLast && <div class='flex-1 h-0.5 bg-transparent' />}
            </div>
            <div class='mt-5 px-2 text-center max-w-[16rem]'>
              <p class='font-semibold text-base text-base-content'>{step.label}</p>
              {step.description && (
                <p class='mt-1.5 text-sm leading-relaxed text-base-content/60'>
                  {step.description}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

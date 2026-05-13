/** CTA band with heading, description, button (variant-selectable), and optional tel link. */
export type CtaButtonVariant = 'primary' | 'outline';

export interface CtaBandProps {
  description: string;
  ctaLabel: string;
  ctaHref: string;
  tel?: string;
  buttonVariant?: CtaButtonVariant;
  telLabel?: string;
  revealOnScroll?: boolean;
}

const BTN_CLASS: Record<CtaButtonVariant, string> = {
  primary:
    'btn btn-primary mt-4 px-10 tracking-[0.16em] uppercase shadow-md transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/45',
  outline:
    'btn btn-outline btn-primary mt-4 px-10 tracking-[0.16em] uppercase transition-all duration-200 ease-out hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/45',
};

export function CtaBand(props: CtaBandProps) {
  const {
    description,
    ctaLabel,
    ctaHref,
    tel,
    buttonVariant = 'primary',
    telLabel,
    revealOnScroll,
  } = props;

  return (
    <div
      class={`${revealOnScroll ? 'reveal-on-scroll [--reveal-delay:80ms] ' : ''}flex flex-col items-center gap-6 text-center`}
    >
      <p class='text-base-content/80 max-w-xl text-base leading-relaxed'>{description}</p>
      <a class={BTN_CLASS[buttonVariant]} href={ctaHref}>
        {ctaLabel}
      </a>
      {tel ? (
        <p class='text-sm text-base-content/70'>
          {telLabel ?? (
            <>
              お電話でのご連絡は{' '}
              <a
                class='link link-hover text-primary transition-colors duration-200 hover:text-primary/78'
                href={`tel:${tel.replaceAll('-', '')}`}
              >
                {tel}
              </a>{' '}
              まで
            </>
          )}
        </p>
      ) : null}
    </div>
  );
}

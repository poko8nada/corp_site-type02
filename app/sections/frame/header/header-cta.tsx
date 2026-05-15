export interface CtaButtonProps {
  label: string;
  href: string;
  shape?: 'default' | 'pill';
}

const SHAPE_CLASS: Record<Required<CtaButtonProps>['shape'], string> = {
  default: 'btn btn-outline btn-primary',
  pill: 'btn btn-outline btn-primary rounded-full shrink-0',
};

export function CtaButton(props: CtaButtonProps) {
  const { label, href, shape = 'default' } = props;

  return (
    <a class={SHAPE_CLASS[shape]} href={href}>
      {label}
    </a>
  );
}

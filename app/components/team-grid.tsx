/** daisyUI card grid for team / staff introduction. */
export interface TeamMember {
  name: string;
  role: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export type TeamCardStyle = 'elevated' | 'flat' | 'outline';

const CARD_CLASS: Record<TeamCardStyle, string> = {
  elevated: 'card-elevate',
  flat: '',
  outline: 'border border-base-300 rounded-xl',
};

export interface TeamGridProps {
  sectionHeading: string;
  members: readonly TeamMember[];
  columns?: 2 | 3 | 4;
  cardStyle?: TeamCardStyle;
  revealOnScroll?: boolean;
}

const revealDelayByIndex = [
  '[--reveal-delay:0ms]',
  '[--reveal-delay:60ms]',
  '[--reveal-delay:120ms]',
  '[--reveal-delay:180ms]',
  '[--reveal-delay:240ms]',
] as const;

const GRID_COLS: Record<number, string> = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
};

export function TeamGrid(props: TeamGridProps) {
  const { sectionHeading, members, columns = 3, cardStyle = 'elevated', revealOnScroll } = props;

  return (
    <div>
      <h3 class='font-display text-base-content text-3xl leading-snug tracking-tight sm:text-4xl'>
        {sectionHeading}
      </h3>
      <div class={`mt-10 grid gap-5 sm:mt-12 sm:gap-6 ${GRID_COLS[columns]}`}>
        {members.map((member, index) => (
          <div
            class={`${revealOnScroll ? 'reveal-on-scroll ' + revealDelayByIndex[Math.min(index, revealDelayByIndex.length - 1)] + ' ' : ''}px-6 py-6 sm:py-8 lg:py-10 ${CARD_CLASS[cardStyle]}`}
            key={member.name}
          >
            {member.imageSrc && (
              <figure class='-mx-6 -mt-6 mb-5 sm:-mt-8 sm:-mx-6 lg:-mt-10 lg:-mx-6'>
                <img
                  alt={member.imageAlt ?? `${member.name}の写真`}
                  class='w-full h-48 object-cover'
                  src={member.imageSrc}
                />
              </figure>
            )}
            <p class='font-display text-xl tracking-tight text-base-content sm:text-2xl'>
              {member.name}
            </p>
            <p class='mt-1 text-xs font-semibold tracking-[0.12em] uppercase text-primary'>
              {member.role}
            </p>
            {member.description && (
              <p class='mt-3 text-sm leading-relaxed text-base-content/70'>{member.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

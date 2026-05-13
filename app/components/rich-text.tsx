import { Heading } from '@/components/heading';

/** Heading + paragraph stack. Used as child of MediaBlock or standalone. */
export interface RichTextProps {
  heading?: string;
  headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
  paragraphs: readonly string[];
}

export function RichText(props: RichTextProps) {
  const { heading, headingLevel = 2, paragraphs } = props;

  return (
    <div>
      <Heading level={headingLevel} class='text-3xl leading-snug sm:text-4xl'>
        {heading}
      </Heading>
      <div class='text-base-content/86 mt-8 space-y-6 text-base leading-[1.85] sm:text-lg sm:leading-[1.85]'>
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </div>
  );
}

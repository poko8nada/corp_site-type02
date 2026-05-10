/** Heading + paragraph stack. Used as child of MediaBlock or standalone. */
export interface RichTextProps {
  heading?: string;
  paragraphs: readonly string[];
}

export function RichText(props: RichTextProps) {
  const { heading, paragraphs } = props;

  return (
    <div>
      <h3 class='font-display text-base-content text-3xl leading-snug tracking-tight sm:text-4xl'>
        {heading}
      </h3>
      <div class='text-base-content/86 mt-8 space-y-6 text-base leading-[1.85] sm:text-lg sm:leading-[1.85]'>
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </div>
  );
}

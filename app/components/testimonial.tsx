/** Single testimonial card with quote, author, and optional role/avatar. */
export interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
  revealOnScroll?: boolean;
}

export function Testimonial(props: TestimonialProps) {
  const { quote, author, role, avatar, revealOnScroll } = props;

  return (
    <div class={`card border border-base-300/70 bg-base-100 shadow-sm ${revealOnScroll ? 'reveal-on-scroll [--reveal-delay:80ms]' : ''}`}>
      <div class='card-body gap-4 p-6 sm:p-8'>
        <svg aria-hidden='true' class='h-8 w-8 text-base-content/15' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.166 11 15c0 1.933-1.567 3.5-3.5 3.5-1.271 0-2.403-.635-2.917-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C19.591 11.69 21 13.166 21 15c0 1.933-1.567 3.5-3.5 3.5-1.271 0-2.403-.635-2.917-1.179z' />
        </svg>
        <blockquote class='text-base leading-relaxed text-base-content/86 sm:text-lg'>
          {quote}
        </blockquote>
        <div class='flex items-center gap-3 pt-2'>
          {avatar && (
            <div class='avatar'>
              <div class='w-10 rounded-full'>
                <img alt={author} src={avatar} />
              </div>
            </div>
          )}
          <div>
            <p class='text-sm font-semibold text-base-content'>{author}</p>
            {role && <p class='text-xs text-base-content/55'>{role}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

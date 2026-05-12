import { useState, useEffect } from 'hono/jsx';

export interface CatalogNavSection {
  id: string;
  label: string;
}

interface Props {
  sections: readonly CatalogNavSection[];
}

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function CatalogNav({ sections }: Props) {
  const [activeId, setActiveId] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px' },
    );

    const elements: Element[] = [];
    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) {
        observer.observe(el);
        elements.push(el);
      }
    }

    return () => {
      for (const el of elements) observer.unobserve(el);
      observer.disconnect();
    };
  }, [sections]);

  return (
    <>
      <div class='fixed z-50 right-0 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-0'>
        <div
          class={`flex-col gap-1.5 bg-base-200/80 backdrop-blur-lg border border-base-300/30 rounded-xl p-2 shadow-lg mr-1 transition-all duration-200 ${
            isOpen ? 'flex' : 'hidden'
          }`}
        >
          {sections.map((s) => (
            <button
              key={s.id}
              type='button'
              class={`text-left whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                activeId === s.id
                  ? 'bg-primary text-primary-content shadow-xs'
                  : 'text-base-content/50 hover:text-base-content/80 hover:bg-base-300/30'
              }`}
              onClick={() => scrollTo(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>
        <button
          type='button'
          class='flex items-center justify-center w-7 h-28 bg-base-200/80 backdrop-blur border-y border-l border-base-300/40 rounded-l-lg shadow-lg text-base-content/50 hover:text-base-content/80 transition-colors cursor-pointer'
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? '閉じる' : '目次を開く'}
        >
          <span class='[writing-mode:vertical-rl] text-[10px] tracking-[0.2em]'>
            {isOpen ? '閉じる' : '目次'}
          </span>
        </button>
      </div>

      <div class='fixed z-50 bottom-4 right-4 lg:hidden flex flex-col items-end gap-2'>
        {isOpen && (
          <div class='flex gap-2 overflow-x-auto max-w-[calc(100vw-3rem)] px-3 py-2 bg-base-200/80 backdrop-blur-lg border border-base-300/40 rounded-full shadow-lg'>
            {sections.map((s) => (
              <button
                key={s.id}
                type='button'
                class={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium transition-colors shrink-0 ${
                  activeId === s.id
                    ? 'bg-primary text-primary-content shadow-xs'
                    : 'text-base-content/60 hover:text-base-content'
                }`}
                onClick={() => scrollTo(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}
        <button
          type='button'
          class='flex items-center justify-center size-10 bg-base-200/80 backdrop-blur border border-base-300/40 rounded-full shadow-lg text-base-content/50 hover:text-base-content transition-colors cursor-pointer'
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? '閉じる' : '目次を開く'}
        >
          <svg aria-hidden='true' class='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            {isOpen ? (
              <path
                d='M18 6L6 18M6 6l12 12'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
              />
            ) : (
              <path
                d='M4 6h16M4 12h16M4 18h16'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
              />
            )}
          </svg>
        </button>
      </div>
    </>
  );
}

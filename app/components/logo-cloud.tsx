/** Partner/client logo grid or bar display. */
export interface LogoCloudItem {
  src: string;
  alt: string;
  href?: string;
}

export interface LogoCloudProps {
  items: readonly LogoCloudItem[];
  variant?: 'grid' | 'bar';
}

function LogoImage({ item }: { item: LogoCloudItem }) {
  return (
    <img
      alt={item.alt}
      class='h-10 w-auto object-contain opacity-55 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0'
      decoding='async'
      loading='lazy'
      src={item.src}
    />
  );
}

export function LogoCloud(props: LogoCloudProps) {
  const { items, variant = 'grid' } = props;

  if (variant === 'bar') {
    return (
      <div class='flex flex-wrap items-center justify-center gap-8 sm:gap-12'>
        {items.map((item) => (
          <div key={item.alt}>
            {item.href ? (
              <a href={item.href} rel='noopener noreferrer' target='_blank'>
                <LogoImage item={item} />
              </a>
            ) : (
              <LogoImage item={item} />
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div class='grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:gap-8'>
      {items.map((item) => (
        <div
          class='flex items-center justify-center rounded-xl border border-base-300/60 bg-base-100 p-6'
          key={item.alt}
        >
          {item.href ? (
            <a href={item.href} rel='noopener noreferrer' target='_blank'>
              <LogoImage item={item} />
            </a>
          ) : (
            <LogoImage item={item} />
          )}
        </div>
      ))}
    </div>
  );
}

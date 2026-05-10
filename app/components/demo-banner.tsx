/** Warning ribbon shown when `isDemo` is true. Remove or flip flag for real projects. */
export interface DemoBannerProps {
  isDemo: boolean;
}

export function DemoBanner(props: DemoBannerProps) {
  if (!props.isDemo) return null;

  return (
    <div class='bg-warning text-warning-content flex items-center justify-center gap-2 px-4 py-2.5 text-center text-xs font-medium leading-tight tracking-wide sm:text-sm'>
      <svg
        aria-hidden='true'
        class='h-4 w-4 shrink-0'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='1.5'
        />
      </svg>
      <span>
        このサイトは<strong>架空のデモサイト</strong>
        です。実際の店舗・企業・サービスとは一切関係ありません。
      </span>
    </div>
  );
}

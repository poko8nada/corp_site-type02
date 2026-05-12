import { useState } from 'hono/jsx';

export interface DemoBannerProps {
  isDemo: boolean;
}

export default function DemoBanner(props: DemoBannerProps) {
  const [visible, setVisible] = useState(true);

  if (!props.isDemo || !visible) return null;

  return (
    <div class='bg-warning text-warning-content flex items-center gap-2 px-4 py-2.5 text-xs font-medium leading-tight tracking-wide sm:text-sm'>
      <span class='flex flex-1 items-center justify-center gap-2 text-center'>
        <svg
          aria-hidden='true'
          class='h-4 w-4 shrink-0'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
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
        <a class='underline whitespace-nowrap hover:opacity-80' href='/catalog'>
          コンポーネントカタログ
        </a>
      </span>
      <button
        aria-label='バナーを閉じる'
        class='btn btn-xs btn-ghost shrink-0'
        onClick={() => setVisible(false)}
        type='button'
      >
        <svg
          aria-hidden='true'
          class='h-4 w-4'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            d='M6 18L18 6M6 6l12 12'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
          />
        </svg>
      </button>
    </div>
  );
}

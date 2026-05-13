import { useState } from 'hono/jsx';
import { MediaBlock, type MediaBlockVariant } from '@/components/media-block';
import { RichText } from '@/components/rich-text';

const variants: MediaBlockVariant[] = ['standard', 'overlay', 'wall', 'float'];

const sampleImage = '/images/placeholder-content.svg';

export default function MediaBlockDemo() {
  const [variant, setVariant] = useState<MediaBlockVariant>('standard');

  return (
    <div>
      <div
        class='flex flex-wrap items-center gap-2 mb-4'
        role='group'
        aria-label='MediaBlock variant switch'
      >
        {variants.map((v) => (
          <button
            class={variant === v ? 'btn btn-primary btn-xs' : 'btn btn-outline btn-xs'}
            key={v}
            onClick={() => setVariant(v)}
            type='button'
            aria-pressed={variant === v}
          >
            {v}
          </button>
        ))}
        <span class='text-xs text-base-content/50 ml-2'>
          variant: <strong>{variant}</strong>
        </span>
      </div>
      <MediaBlock
        imageSrc={sampleImage}
        imageAlt='コンテンツイメージ プレースホルダー'
        variant={variant}
      >
        <RichText
          heading='メディアブロックサンプル'
          headingLevel={2}
          paragraphs={[
            '画像とテキストを組み合わせたセクションです。variant プロパティでレイアウトを切り替えられます。',
            'standard: 横並び / overlay: テキスト重ね / wall: 画像壁面 / float: テキスト回り込み',
          ]}
        />
      </MediaBlock>
    </div>
  );
}

import type { NotFoundHandler } from 'hono';
import { ROUTE_TITLES } from '@/data';

const handler: NotFoundHandler = (c) => {
  c.status(404);
  return c.render(
    <div class='text-base-content mx-auto max-w-2xl px-4 py-12'>
      <div class='alert alert-outline border-base-300 bg-base-200' role='status'>
        <span class='font-medium'>404</span>
        <span>ページが見つかりません。</span>
      </div>
    </div>,
    { title: ROUTE_TITLES.notFound },
  );
};

export default handler;

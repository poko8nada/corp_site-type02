import type { ErrorHandler } from 'hono';
import { ROUTE_TITLES } from '@/data';

const handler: ErrorHandler = (e, c) => {
  if ('getResponse' in e) {
    return e.getResponse();
  }
  // oxlint-disable-next-line no-console -- log unexpected errors at the edge
  console.error(e.message);
  c.status(500);
  return c.render(
    <div class='text-base-content mx-auto max-w-2xl px-4 py-12'>
      <div class='alert alert-error' role='alert'>
        <span class='font-medium'>500</span>
        <span>サーバーで問題が発生しました。しばらくしてから再度お試しください。</span>
      </div>
    </div>,
    { title: ROUTE_TITLES.internalError },
  );
};

export default handler;

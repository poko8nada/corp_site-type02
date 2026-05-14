import { CatalogPage } from '@/sections/catalog';
import { frameIsDemo } from '@/sections/frame';
import { createRoute } from 'honox/factory';

export default createRoute((c) => {
  if (!frameIsDemo) {
    return c.notFound();
  }

  return c.render(<CatalogPage />, {
    title: 'Components Catalog',
    headerPattern: 'none',
    footerPattern: 'none',
  });
});

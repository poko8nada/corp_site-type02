import { IS_DEMO } from '@/data';
import { CatalogPage } from '@/sections/catalog';
import { FrameConfigDefaults } from '@/sections/frame';
import { createRoute } from 'honox/factory';

export default createRoute((c) => {
  if (!IS_DEMO) {
    return c.notFound();
  }

  return c.render(
    <CatalogPage />,
    FrameConfigDefaults({
      title: 'Components Catalog',
      headerPattern: 'none',
      footerPattern: 'none',
    }),
  );
});

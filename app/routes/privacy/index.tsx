import { ROUTE_TITLES } from '@/data';
import { FrameConfigDefaults } from '@/sections/frame';
import { PrivacyPage } from '@/sections/privacy';
import { createRoute } from 'honox/factory';

export default createRoute((c) => {
  return c.render(
    <PrivacyPage />,
    FrameConfigDefaults({ title: ROUTE_TITLES.privacy, footerPattern: 'standard' }),
  );
});

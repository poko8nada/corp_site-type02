import { ROUTE_TITLES } from '@/data';
import { FrameConfigDefaults } from '@/sections/frame';
import { HomePage } from '@/sections/home';
import { createRoute } from 'honox/factory';

export default createRoute((c) => {
  return c.render(<HomePage />, FrameConfigDefaults({ title: ROUTE_TITLES.home }));
});

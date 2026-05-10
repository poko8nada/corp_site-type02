import { ROUTE_TITLES } from '@/data';
import { HomePage } from '@/sections/home';
import { createRoute } from 'honox/factory';

export default createRoute((c) => {
  return c.render(<HomePage />, { title: ROUTE_TITLES.home, parallax: true });
});

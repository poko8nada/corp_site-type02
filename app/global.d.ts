import 'hono';
import type { SiteRenderProps } from './routes/_renderer';

declare module 'hono' {
  interface ContextRenderer {
    (content: string | Promise<string>, props?: SiteRenderProps): Response | Promise<Response>;
  }

  interface Env {
    Variables: {};
    Bindings: {};
  }
}

declare module '@fontsource-variable/*' {}
declare module '@fontsource/*' {}

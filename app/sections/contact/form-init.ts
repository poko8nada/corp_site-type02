import { contactFormAreaCatalog } from './index';

export interface ContactFormInitConfig {
  iframeId?: string;
  googleFormsAutoResize?: boolean;
}

export function initContactForm(config?: ContactFormInitConfig): void {
  const iframeId = config?.iframeId ?? contactFormAreaCatalog.iframeId;
  const autoResize = config?.googleFormsAutoResize ?? true;
  const iframe = document.getElementById(iframeId) as HTMLIFrameElement | null;
  if (!iframe || !autoResize) return;

  let loadCount = 0;
  iframe.addEventListener('load', () => {
    loadCount++;
    if (loadCount === 2) {
      iframe.height = '250';
      iframe.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

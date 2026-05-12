import { createClient } from 'honox/client';
import { initContactForm } from '@/sections/contact/form-init';
import { initScrollReveal } from '@/enhancers/scroll-reveal';
import { initVisualSlideshow } from '@/enhancers/visual-slideshow';

createClient();

export interface ClientInitOptions {
  scrollReveal?: boolean;
  contactForm?: boolean;
}

export function initAll(options: ClientInitOptions = {}): void {
  if (options.scrollReveal !== false) initScrollReveal();
  if (options.contactForm !== false) initContactForm();
  initVisualSlideshow();
}

initAll();

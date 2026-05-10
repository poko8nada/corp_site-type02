import { createClient } from 'honox/client';
import { initContactForm } from '@/sections/contact/form-init';
import { initScrollReveal } from '@/sections/home/scroll-reveal';

createClient();

export interface ClientInitOptions {
  scrollReveal?: boolean;
  contactForm?: boolean;
}

export function initAll(options: ClientInitOptions = {}): void {
  if (options.scrollReveal !== false) initScrollReveal();
  if (options.contactForm !== false) initContactForm();
}

initAll();

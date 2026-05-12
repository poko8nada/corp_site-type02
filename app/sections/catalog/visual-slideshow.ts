const ROOT_SELECTOR = '[data-visual-slideshow]';

function isInViewport(target: HTMLElement): boolean {
  const rect = target.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

function setActiveDot(root: HTMLElement, index: number): void {
  const dots = Array.from(root.querySelectorAll<HTMLElement>('[data-vs-dot]'));
  for (const dot of dots) {
    const dotIndex = Number(dot.getAttribute('data-vs-index') ?? '-1');
    const active = dotIndex === index;
    dot.classList.toggle('w-6', active);
    dot.classList.toggle('bg-white', active);
    dot.classList.toggle('w-2', !active);
    dot.classList.toggle('bg-white/40', !active);
    dot.classList.toggle('hover:bg-white/70', !active);
    dot.setAttribute('aria-current', active ? 'true' : 'false');
  }
}

function setupSlideshow(root: HTMLElement): void {
  if (root.dataset.vsInitialized === 'true') return;
  root.dataset.vsInitialized = 'true';

  const slides = Array.from(root.querySelectorAll<HTMLElement>('[data-vs-slide]'));
  if (slides.length < 2) return;

  const track = root.querySelector<HTMLElement>('[data-vs-track]');
  if (!track) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const interval = Number(root.dataset.vsInterval ?? '3600');
  let current = 0;
  let timer: number | undefined;
  let started = false;

  const sync = (nextIndex: number) => {
    current = (nextIndex + slides.length) % slides.length;
    setActiveDot(root, current);
  };

  const goTo = (nextIndex: number) => {
    current = (nextIndex + slides.length) % slides.length;
    track.style.setProperty('--vs-current', String(current));
    sync(current);
    restartTimer();
  };

  const restartTimer = () => {
    if (timer !== undefined) window.clearInterval(timer);
    if (reduceMotion) return;
    timer = window.setInterval(() => {
      goTo(current + 1);
    }, interval);
  };

  const start = () => {
    if (started) return;
    started = true;
    restartTimer();
  };

  root.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const dot = target.closest<HTMLElement>('[data-vs-dot]');
    if (dot) {
      event.preventDefault();
      goTo(Number(dot.getAttribute('data-vs-index') ?? '0'));
      return;
    }

    const prev = target.closest<HTMLElement>('[data-vs-prev]');
    if (prev) {
      event.preventDefault();
      goTo(current - 1);
      return;
    }

    const next = target.closest<HTMLElement>('[data-vs-next]');
    if (next) {
      event.preventDefault();
      goTo(current + 1);
    }
  });

  window.addEventListener(
    'pagehide',
    () => {
      if (timer !== undefined) window.clearInterval(timer);
    },
    { once: true },
  );
  sync(current);

  if (isInViewport(root)) {
    start();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          start();
          observer.disconnect();
          break;
        }
      }
    },
    { threshold: 0.2, rootMargin: '0px 0px -8% 0px' },
  );

  observer.observe(root);
}

export function initVisualSlideshow(): void {
  const roots = Array.from(document.querySelectorAll(ROOT_SELECTOR)).filter(
    (node): node is HTMLElement => node instanceof HTMLElement,
  );

  for (const root of roots) {
    setupSlideshow(root);
  }
}

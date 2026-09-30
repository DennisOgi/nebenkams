import { prefersReducedMotion } from './events';

export function initReveal() {
  const items = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!items.length) return;
  if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-revealed'));
    return;
  }
  document.documentElement.classList.add('reveal-ready');
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-revealed');
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px' },
  );
  items.forEach((el) => {
    // Anything already on screen at load is shown immediately rather than animated.
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight) el.classList.add('is-revealed');
    else io.observe(el);
  });
}

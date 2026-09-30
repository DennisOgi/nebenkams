import { prefersReducedMotion } from './events';

export function initScroller() {
  document.querySelectorAll<HTMLElement>('[data-scroller]').forEach((root) => {
    const track = root.querySelector<HTMLElement>('[data-scroller-track]');
    if (!track) return;
    const amount = () => Math.max(240, Math.round(track.clientWidth * 0.86));
    const behavior = (): ScrollBehavior => (prefersReducedMotion() ? 'auto' : 'smooth');
    root.querySelector('[data-scroller-prev]')?.addEventListener('click', () => {
      track.scrollBy({ left: -amount(), behavior: behavior() });
    });
    root.querySelector('[data-scroller-next]')?.addEventListener('click', () => {
      track.scrollBy({ left: amount(), behavior: behavior() });
    });
  });
}

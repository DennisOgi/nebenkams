export function initShowcase() {
  const root = document.querySelector<HTMLElement>('[data-showcase]');
  if (!root) return;
  const rows = Array.from(root.querySelectorAll<HTMLElement>('[data-svc-row]'));
  const images = Array.from(root.querySelectorAll<HTMLImageElement>('[data-svc-image]'));
  if (!rows.length) return;

  const desktop = () => window.matchMedia('(min-width: 1024px)').matches;
  let hoverTimer: number | undefined;

  const showImage = (i: number) => {
    images.forEach((img, n) => img.classList.toggle('is-shown', n === i));
  };

  const select = (i: number, expand: boolean) => {
    rows.forEach((row, n) => {
      const btn = row.querySelector<HTMLButtonElement>('.svc-toggle')!;
      const panel = row.querySelector<HTMLElement>('.svc-panel')!;
      const on = n === i && expand;
      btn.setAttribute('aria-expanded', String(on));
      panel.hidden = !on;
      row.classList.toggle('is-selected', n === i);
    });
    showImage(i);
  };

  rows.forEach((row, i) => {
    const btn = row.querySelector<HTMLButtonElement>('.svc-toggle')!;
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') !== 'true';
      select(i, open || desktop());
    });
    row.addEventListener('mouseenter', () => {
      if (!desktop() || !window.matchMedia('(hover: hover)').matches) return;
      clearTimeout(hoverTimer);
      hoverTimer = window.setTimeout(() => showImage(i), 120);
    });
  });

  root.addEventListener('mouseleave', () => {
    clearTimeout(hoverTimer);
    const selected = rows.findIndex((r) => r.classList.contains('is-selected'));
    if (selected >= 0) showImage(selected);
  });

  select(0, true);
}

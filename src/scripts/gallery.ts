export function initGallery() {
  const thumbs = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-gallery-open]'));
  const dialog = document.getElementById('lightbox') as HTMLDialogElement | null;
  if (!thumbs.length || !dialog) return;

  const img = dialog.querySelector<HTMLImageElement>('[data-lb-img]')!;
  const caption = dialog.querySelector<HTMLElement>('[data-lb-caption]')!;
  const count = dialog.querySelector<HTMLElement>('[data-lb-count]')!;
  const prev = dialog.querySelector<HTMLButtonElement>('[data-lb-prev]')!;
  const next = dialog.querySelector<HTMLButtonElement>('[data-lb-next]')!;
  let index = 0;
  let opener: HTMLElement | null = null;

  const items = thumbs.map((btn) => ({
    src: btn.dataset.full ?? '',
    alt: btn.dataset.alt ?? '',
    caption: btn.dataset.caption ?? '',
  }));

  const render = () => {
    const item = items[index];
    img.src = item.src;
    img.alt = item.alt;
    caption.textContent = item.caption;
    count.textContent = `${index + 1} / ${items.length}`;
    prev.disabled = items.length < 2;
    next.disabled = items.length < 2;
  };

  const open = (i: number, trigger: HTMLElement) => {
    opener = trigger;
    index = i;
    render();
    dialog.showModal();
    document.documentElement.classList.add('menu-open');
  };
  const close = () => dialog.close();

  thumbs.forEach((btn, i) => btn.addEventListener('click', () => open(i, btn)));
  dialog.querySelector('[data-lb-close]')?.addEventListener('click', close);
  prev.addEventListener('click', () => {
    index = (index - 1 + items.length) % items.length;
    render();
  });
  next.addEventListener('click', () => {
    index = (index + 1) % items.length;
    render();
  });
  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev.click();
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      next.click();
    }
  });
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) close();
  });
  dialog.addEventListener('close', () => {
    document.documentElement.classList.remove('menu-open');
    img.removeAttribute('src');
    if (opener?.isConnected) opener.focus();
  });
}

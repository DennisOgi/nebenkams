import { prefersReducedMotion } from './events';

const wait = (ms: number) => new Promise<void>((resolve) => window.setTimeout(resolve, ms));

function finish() {
  document.documentElement.classList.remove('nk-intro', 'nk-intro-settle');
  try {
    sessionStorage.setItem('nk-intro-seen', '1');
  } catch {
    /* private mode */
  }
  document.dispatchEvent(new Event('nk:intro-done'));
}

function place(win: HTMLElement, rect: { left: number; top: number; width: number; height: number }) {
  win.style.left = `${rect.left}px`;
  win.style.top = `${rect.top}px`;
  win.style.width = `${rect.width}px`;
  win.style.height = `${rect.height}px`;
}

function centeredFrame() {
  const width = Math.min(window.innerWidth * 0.74, 880);
  const height = Math.min(window.innerHeight * 0.54, 540);
  return {
    left: (window.innerWidth - width) / 2,
    top: Math.max(88, window.innerHeight * 0.22),
    width,
    height,
  };
}

function flyLogo(splash: HTMLElement) {
  const fromEl = document.getElementById('splash-logo');
  const toEl = document.getElementById('header-logo');
  const mark = splash.querySelector<HTMLElement>('.splash-mark');
  if (!fromEl || !toEl || !mark) return;
  const from = fromEl.getBoundingClientRect();
  const to = toEl.getBoundingClientRect();
  if (from.width < 1 || to.width < 1) return;
  const dx = to.left + to.width / 2 - (from.left + from.width / 2);
  const dy = to.top + to.height / 2 - (from.top + from.height / 2);
  const scale = to.width / from.width;
  mark.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(${scale})`;
}

export function initIntro() {
  if (!document.documentElement.classList.contains('nk-intro')) return;
  const splash = document.getElementById('splash');
  if (!splash) {
    finish();
    return;
  }

  const skipBtn = splash.querySelector<HTMLButtonElement>('[data-intro-skip]');
  const win = splash.querySelector<HTMLElement>('.splash-window');
  let done = false;
  const skip = () => {
    if (done) return;
    done = true;
    finish();
  };

  skipBtn?.addEventListener('click', skip);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.documentElement.classList.contains('nk-intro')) skip();
  });

  const run = async () => {
    const img = document.querySelector<HTMLImageElement>('.hero .slide.is-active img');
    const ready = img
      ? Promise.race([img.decode().catch(() => undefined), wait(800)]).then(() => img.complete && img.naturalWidth > 0)
      : Promise.resolve(false);

    const ok = await ready;
    if (!ok || prefersReducedMotion() || done || !win) {
      skip();
      return;
    }

    win.style.transition = 'none';
    place(win, centeredFrame());
    void win.offsetWidth;
    win.style.transition = '';

    splash.classList.add('is-phase-1');
    await wait(320);
    if (done) return;

    splash.classList.add('is-phase-2');
    await wait(680);
    if (done) return;

    const stage = document.querySelector<HTMLElement>('.hero-visual');
    const rect = stage?.getBoundingClientRect();
    if (!rect || rect.width < 40 || rect.height < 40) {
      skip();
      return;
    }

    document.documentElement.classList.add('nk-intro-settle');
    splash.classList.add('is-docking');
    place(win, rect);
    flyLogo(splash);
    await wait(880);
    if (done) return;

    splash.classList.add('is-phase-3');
    await wait(280);
    skip();
  };

  run();
}

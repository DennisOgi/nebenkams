import { overlayOpen, prefersReducedMotion } from './events';

const DWELL = 7000;
const TRANSITION = 720;
const SWIPE = 48;

const saveData = () => {
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  return !!conn?.saveData;
};

export function initCarousel() {
  const root = document.querySelector<HTMLElement>('[data-carousel]');
  if (!root) return;

  const slides = Array.from(root.querySelectorAll<HTMLElement>('[data-slide]'));
  const captions = Array.from(root.querySelectorAll<HTMLElement>('[data-caption]'));
  const selectors = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-select]'));
  const live = root.querySelector<HTMLElement>('[data-carousel-live]');
  const playBtn = root.querySelector<HTMLButtonElement>('[data-play]');
  const prevBtn = root.querySelector<HTMLButtonElement>('[data-prev]');
  const nextBtn = root.querySelector<HTMLButtonElement>('[data-next]');
  const stage = root.querySelector<HTMLElement>('[data-stage]');
  const progress = root.querySelector<HTMLElement>('[data-progress]');
  if (!slides.length || !stage) return;

  const activeIndex = slides.findIndex((slide) => slide.classList.contains('is-active'));
  let index = activeIndex >= 0 ? activeIndex : 0;
  let playing = false;
  let userStopped = false;
  let timer: number | undefined;
  let transitioning = false;
  let inView = true;
  const failed = new Set<number>();
  const reduced = () => prefersReducedMotion() || saveData();

  const announce = (i: number, manual: boolean) => {
    if (!live || !manual) return;
    const name = slides[i].dataset.label ?? `Slide ${i + 1}`;
    live.textContent = name;
  };

  const restartProgress = () => {
    if (!progress) return;
    progress.classList.remove('is-running');
    progress.style.animationDuration = `${DWELL}ms`;
    void progress.offsetWidth;
    if (playing && !reduced()) progress.classList.add('is-running');
  };

  const setPlayUi = () => {
    root.classList.toggle('is-playing', playing);
    restartProgress();
    if (!playBtn) return;
    playBtn.setAttribute('aria-pressed', String(playing));
    const label = playBtn.querySelector('[data-play-label]');
    const iconPlay = playBtn.querySelector('[data-icon-play]');
    const iconPause = playBtn.querySelector('[data-icon-pause]');
    if (label) label.textContent = playing ? 'Pause' : 'Play';
    playBtn.setAttribute('aria-label', playing ? 'Pause slideshow' : 'Play slideshow');
    if (iconPlay && iconPause) {
      (iconPlay as HTMLElement).hidden = playing;
      (iconPause as HTMLElement).hidden = !playing;
    }
  };

  const apply = (next: number, dir: 1 | -1, manual: boolean) => {
    if (next === index || transitioning) return;
    if (failed.has(next)) return;
    const from = slides[index];
    const to = slides[next];
    const fromCap = captions[index];
    const toCap = captions[next];
    transitioning = true;

    from.classList.remove('is-active');
    from.classList.add('is-leaving');
        to.classList.add('is-active', dir > 0 ? 'from-next' : 'from-prev');
    to.classList.toggle('is-reduced', reduced());
    to.style.setProperty('--enter', dir > 0 ? '100%' : '-100%');
    to.classList.add('is-entering');
    selectors[index]?.removeAttribute('aria-current');
    selectors[next]?.setAttribute('aria-current', 'true');

    if (fromCap) {
      fromCap.classList.remove('is-active');
      fromCap.querySelectorAll('a').forEach((a) => (a.tabIndex = -1));
    }
    if (toCap) {
      toCap.classList.add('is-active');
      toCap.querySelectorAll('a').forEach((a) => (a.tabIndex = 0));
      if (!reduced()) {
        toCap.classList.add('is-entering');
        requestAnimationFrame(() => toCap.classList.remove('is-entering'));
      }
    }

    const done = () => {
      from.classList.remove('is-leaving');
      to.classList.remove('is-entering', 'from-next', 'from-prev');
      to.style.removeProperty('--enter');
      transitioning = false;
    };
    if (reduced()) done();
    else window.setTimeout(done, TRANSITION);

    index = next;
    announce(next, manual);
    restartProgress();
  };

  const usable = (i: number) => !failed.has(i);
  const step = (dir: 1 | -1, manual: boolean) => {
    let next = index;
    for (let n = 0; n < slides.length; n++) {
      next = (next + dir + slides.length) % slides.length;
      if (usable(next)) {
        apply(next, dir, manual);
        return;
      }
    }
  };

  const stopTimer = () => {
    if (timer) window.clearTimeout(timer);
    timer = undefined;
  };

  const arm = () => {
    stopTimer();
    if (!playing || userStopped || reduced() || overlayOpen() || document.hidden || !inView) return;
    timer = window.setTimeout(() => {
      step(1, false);
      arm();
    }, DWELL);
  };

  const play = () => {
    if (reduced()) return;
    playing = true;
    userStopped = false;
    setPlayUi();
    arm();
  };
  const pause = (fromUser = false) => {
    playing = false;
    if (fromUser) userStopped = true;
    setPlayUi();
    stopTimer();
  };

  const resume = () => {
    if (playing) arm();
  };
  playBtn?.addEventListener('click', () => (playing ? pause(true) : play()));
  prevBtn?.addEventListener('click', () => {
    step(-1, true);
    resume();
  });
  nextBtn?.addEventListener('click', () => {
    step(1, true);
    resume();
  });
  selectors.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      if (i === index || failed.has(i)) return;
      apply(i, i > index ? 1 : -1, true);
      resume();
    });
  });

  slides.forEach((slide, i) => {
    const img = slide.querySelector('img');
    img?.addEventListener('error', () => {
      failed.add(i);
      slide.classList.add('is-failed');
      if (i === index) step(1, false);
    });
  });

  root.addEventListener('focusin', () => stopTimer());
  root.addEventListener('focusout', (e) => {
    if (!root.contains(e.relatedTarget as Node)) arm();
  });

  document.addEventListener('visibilitychange', () => (document.hidden ? stopTimer() : arm()));
  document.addEventListener('nk:overlay', () => (overlayOpen() ? stopTimer() : arm()));
  document.addEventListener('nk:intro-done', () => {
    if (!userStopped && !reduced()) play();
    else arm();
  });

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        inView = entries.some((e) => e.isIntersecting);
        if (inView) arm();
        else stopTimer();
      },
      { threshold: 0.35 },
    );
    io.observe(stage);
  }

  let startX = 0;
  let startY = 0;
  let tracking = false;
  stage.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    startX = e.clientX;
    startY = e.clientY;
    tracking = true;
  });
  stage.addEventListener('pointermove', (e) => {
    if (!tracking) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 10) tracking = false;
  });
  const endPointer = (e: PointerEvent) => {
    if (!tracking) return;
    tracking = false;
    const dx = e.clientX - startX;
    if (Math.abs(dx) < SWIPE) return;
    step(dx < 0 ? 1 : -1, true);
    if (playing) arm();
  };
  stage.addEventListener('pointerup', endPointer);
  stage.addEventListener('pointercancel', () => {
    tracking = false;
  });

  if (reduced()) {
    playing = false;
    userStopped = true;
    setPlayUi();
  } else {
    playing = true;
    setPlayUi();
    if (!document.documentElement.classList.contains('nk-intro')) arm();
  }
}

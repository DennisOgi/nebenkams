import { setOverlay } from './events';

const DESKTOP = '(min-width: 1100px)';

function initDropdowns() {
  const items = Array.from(document.querySelectorAll<HTMLElement>('.nav-desktop [data-dropdown]'));
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)');

  const setOpen = (li: HTMLElement, open: boolean) => {
    li.classList.toggle('is-open', open);
    li.querySelector('button')?.setAttribute('aria-expanded', String(open));
  };
  const closeAll = (except?: HTMLElement) => items.forEach((li) => li !== except && setOpen(li, false));

  for (const li of items) {
    const btn = li.querySelector('button')!;
    let timer: number | undefined;

    btn.addEventListener('click', () => {
      const open = !li.classList.contains('is-open');
      closeAll(li);
      setOpen(li, open);
    });
    li.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && li.classList.contains('is-open')) {
        setOpen(li, false);
        btn.focus();
      }
    });
    li.addEventListener('focusout', (e) => {
      if (!li.contains(e.relatedTarget as Node)) setOpen(li, false);
    });
    li.addEventListener('mouseenter', () => {
      if (!canHover.matches) return;
      clearTimeout(timer);
      timer = window.setTimeout(() => {
        closeAll(li);
        setOpen(li, true);
      }, 90);
    });
    li.addEventListener('mouseleave', () => {
      if (!canHover.matches) return;
      clearTimeout(timer);
      timer = window.setTimeout(() => setOpen(li, false), 220);
    });
  }
  document.addEventListener('click', (e) => {
    if (!(e.target as Element).closest('.nav-desktop')) closeAll();
  });
}

function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;
  const background = () =>
    Array.from(document.querySelectorAll<HTMLElement>('main, .site-footer, .utility, .brand, .btn-quote'));

  const setOpen = (open: boolean, restoreFocus = false) => {
    menu.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.documentElement.classList.toggle('menu-open', open);
    background().forEach((el) => (el.inert = open));
    setOverlay('menu', open);
    if (!open && restoreFocus) toggle.focus();
  };

  toggle.addEventListener('click', () => setOpen(menu.hidden));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.hidden) setOpen(false, true);
  });
  menu.addEventListener('click', (e) => {
    if ((e.target as Element).closest('a')) setOpen(false);
  });
  window.matchMedia(DESKTOP).addEventListener('change', (e) => {
    if (e.matches && !menu.hidden) setOpen(false);
  });

  menu.querySelectorAll<HTMLButtonElement>('.m-toggle').forEach((btn) => {
    const panel = document.getElementById(btn.getAttribute('aria-controls')!)!;
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', String(open));
      panel.hidden = !open;
    });
  });
}

function initFooterDisclosures() {
  document.querySelectorAll<HTMLButtonElement>('[data-f-toggle]').forEach((btn) => {
    const panel = document.getElementById(btn.getAttribute('aria-controls')!)!;
    btn.setAttribute('aria-expanded', 'false');
    panel.hidden = true;
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', String(open));
      panel.hidden = !open;
    });
  });
}

export function initNavigation() {
  initDropdowns();
  initMobileMenu();
  initFooterDisclosures();
}

/** Overlay open/close signal used to pause motion while the menu or dialogs are open. */
const open = new Set<string>();

export function setOverlay(id: string, isOpen: boolean) {
  if (isOpen) open.add(id);
  else open.delete(id);
  document.dispatchEvent(new CustomEvent('nk:overlay', { detail: { open: open.size > 0 } }));
}

export const overlayOpen = () => open.size > 0;

export const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

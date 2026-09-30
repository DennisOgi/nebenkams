import { setOverlay } from './events';
import { addCustomCheck, enhanceForm, setFieldError, setStatus } from './forms';

const ALLOWED_EXT = ['pdf', 'doc', 'docx'];
const ALLOWED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];
const FILE_TYPE_MESSAGE = 'Choose a PDF or Word document (.pdf, .doc or .docx).';

function initFileField(form: HTMLFormElement) {
  const wrap = form.querySelector<HTMLElement>('[data-file-field]');
  if (!wrap) return;
  const input = wrap.querySelector<HTMLInputElement>('input[type="file"]')!;
  const chosen = wrap.querySelector<HTMLElement>('[data-file-chosen]')!;
  const nameEl = wrap.querySelector<HTMLElement>('[data-file-name]')!;
  const cta = wrap.querySelector<HTMLElement>('.file-cta')!;
  const remove = wrap.querySelector<HTMLButtonElement>('[data-file-remove]')!;

  const isAllowed = (file: File) => {
    const ext = file.name.split('.').pop()?.toLowerCase() ?? '';
    return ALLOWED_EXT.includes(ext) && (!file.type || ALLOWED_TYPES.includes(file.type));
  };
  addCustomCheck(input, (el) => {
    const file = (el as HTMLInputElement).files?.[0];
    return file && !isAllowed(file) ? FILE_TYPE_MESSAGE : null;
  });

  const render = () => {
    const file = input.files?.[0];
    if (file && isAllowed(file)) {
      nameEl.textContent = `${file.name} (${Math.max(1, Math.round(file.size / 1024))} KB)`;
      chosen.hidden = false;
      cta.textContent = 'Replace file';
      setFieldError(input, null);
    } else {
      chosen.hidden = true;
      cta.textContent = 'Choose a file';
      if (file) {
        input.value = '';
        setFieldError(input, FILE_TYPE_MESSAGE);
      }
    }
  };
  input.addEventListener('change', render);
  remove.addEventListener('click', () => {
    input.value = '';
    render();
    setFieldError(input, null);
    input.focus();
  });
  form.addEventListener('nk:reset', render);
}

export function initQuoteDialog() {
  const dialog = document.getElementById('quote-dialog') as HTMLDialogElement | null;
  const form = document.getElementById('quote-form') as HTMLFormElement | null;
  if (!dialog || !form) return;
  const body = dialog.querySelector<HTMLElement>('.qd-body')!;
  const serviceSelect = form.querySelector<HTMLSelectElement>('select[name="service_id"]')!;
  let opener: HTMLElement | null = null;
  let success: HTMLElement | null = null;

  initFileField(form);

  const fitToVisualViewport = () => {
    const vv = window.visualViewport;
    if (!vv || !dialog.open || window.matchMedia('(min-width: 768px)').matches) {
      dialog.style.removeProperty('height');
      return;
    }
    dialog.style.height = `${vv.height}px`;
  };

  const open = (trigger: HTMLElement) => {
    opener = trigger;
    const serviceId = trigger.dataset.quoteService;
    if (serviceId && Array.from(serviceSelect.options).some((o) => o.value === serviceId)) {
      serviceSelect.value = serviceId;
    }
    if (success) {
      success.remove();
      success = null;
      form.hidden = false;
      setStatus(form, null);
    }
    dialog.showModal();
    body.scrollTop = 0;
    document.documentElement.classList.add('menu-open');
    setOverlay('quote', true);
    fitToVisualViewport();
  };

  document.addEventListener('click', (e) => {
    const trigger = (e.target as Element).closest<HTMLElement>('[data-quote-open]');
    if (trigger) {
      e.preventDefault();
      open(trigger);
    }
  });
  dialog.querySelector('[data-quote-close]')!.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.documentElement.classList.remove('menu-open');
    setOverlay('quote', false);
    dialog.style.removeProperty('height');
    if (opener?.isConnected) opener.focus();
  });

  window.visualViewport?.addEventListener('resize', fitToVisualViewport);
  dialog.addEventListener('focusin', (e) => {
    const el = e.target as HTMLElement;
    if (!el.matches('input, select, textarea')) return;
    window.setTimeout(() => el.scrollIntoView({ block: 'nearest' }), 250);
  });

  enhanceForm(form, {
    onSuccess: (_f, result) => {
      form.hidden = true;
      success = document.createElement('div');
      success.className = 'qd-success';
      success.setAttribute('role', 'status');
      success.tabIndex = -1;
      const h = document.createElement('h3');
      h.textContent = 'Request received';
      const p = document.createElement('p');
      p.textContent = result.message;
      const close = document.createElement('button');
      close.type = 'button';
      close.className = 'btn btn--primary';
      close.textContent = 'Close';
      close.addEventListener('click', () => dialog.close());
      success.append(h, p, close);
      body.append(success);
      success.focus();
    },
  });
}

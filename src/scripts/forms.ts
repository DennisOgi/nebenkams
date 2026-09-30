const API_BASE = String(import.meta.env.PUBLIC_FORM_API_BASE ?? '').replace(/\/$/, '');

export const NOT_CONNECTED_MESSAGE =
  'This form is not connected to the Nebenkams server in this build, so nothing was sent. Please call (+234) 803 304 3995 or email info@nebenkams.com.';

type Control = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
export type Result = { ok: boolean; message: string };
type CustomCheck = (control: Control) => string | null;

const customChecks = new WeakMap<Control, CustomCheck>();
export const addCustomCheck = (control: Control, check: CustomCheck) => customChecks.set(control, check);

const controlsOf = (form: HTMLFormElement) =>
  Array.from(form.elements).filter(
    (el): el is Control =>
      (el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement) &&
      !!el.name &&
      el.type !== 'hidden',
  );

function errorEl(control: Control) {
  const field = control.closest('.field');
  return field?.querySelector<HTMLElement>('.field-error') ?? null;
}

export function setFieldError(control: Control, message: string | null) {
  const field = control.closest('.field');
  const err = errorEl(control);
  if (!field || !err) return;
  const ids = (control.getAttribute('aria-describedby') ?? '').split(' ').filter((id) => id && id !== err.id);
  if (message) {
    field.classList.add('has-error');
    control.setAttribute('aria-invalid', 'true');
    err.textContent = message;
    err.hidden = false;
    ids.push(err.id);
  } else {
    field.classList.remove('has-error');
    control.removeAttribute('aria-invalid');
    err.textContent = '';
    err.hidden = true;
  }
  if (ids.length) control.setAttribute('aria-describedby', ids.join(' '));
  else control.removeAttribute('aria-describedby');
}

function messageFor(control: Control): string | null {
  const custom = customChecks.get(control)?.(control);
  if (custom) return custom;
  if (control.validity.valid) return null;
  if (control.validity.valueMissing) return control.dataset.msgRequired ?? 'This field is required.';
  if (control.validity.typeMismatch) return control.dataset.msgType ?? 'Check the format of this field.';
  return control.validationMessage || 'Check this field.';
}

export function validateForm(form: HTMLFormElement): Control | null {
  let first: Control | null = null;
  for (const control of controlsOf(form)) {
    if (control.type !== 'file' && control.value && typeof control.value === 'string' && control.tagName !== 'SELECT') {
      const trimmed = control.value.trim();
      if (trimmed !== control.value && control.type !== 'password') control.value = trimmed;
    }
    const msg = messageFor(control);
    setFieldError(control, msg);
    if (msg && !first) first = control;
  }
  return first;
}

export function setStatus(form: HTMLFormElement, kind: 'success' | 'error' | null, message = '') {
  const status = form.querySelector<HTMLElement>('.form-status');
  if (!status) return;
  status.classList.toggle('is-success', kind === 'success');
  status.classList.toggle('is-error', kind === 'error');
  status.textContent = message;
}

function setBusy(form: HTMLFormElement, busy: boolean) {
  const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  form.dataset.busy = busy ? 'true' : '';
  form.setAttribute('aria-busy', String(busy));
  if (!btn) return;
  btn.classList.toggle('is-busy', busy);
  btn.setAttribute('aria-disabled', String(busy));
  btn.innerHTML = busy
    ? '<span class="spinner" aria-hidden="true"></span><span>Sending…</span>'
    : (btn.dataset.label ?? 'Submit');
}

const csrfToken = () => document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]')?.content ?? '';

export async function send(form: HTMLFormElement): Promise<Result> {
  const endpoint = form.dataset.endpoint ?? '';
  if (!API_BASE || !endpoint) return { ok: false, message: NOT_CONNECTED_MESSAGE };
  const data = new FormData(form);
  const token = csrfToken();
  if (token) data.set('_token', token);
  try {
    const res = await fetch(API_BASE + endpoint, {
      method: 'POST',
      body: data,
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        ...(token ? { 'X-CSRF-TOKEN': token } : {}),
      },
    });
    let body: { status?: string; message?: unknown } | null = null;
    try {
      body = await res.json();
    } catch {
      body = null;
    }
    if (res.ok && body?.status === 'success') {
      return { ok: true, message: typeof body.message === 'string' && body.message ? body.message : 'Request received.' };
    }
    const serverMsg = res.status < 500 && typeof body?.message === 'string' ? body.message : '';
    return { ok: false, message: serverMsg || 'Could not send. Please try again.' };
  } catch {
    return { ok: false, message: 'Could not send. Check your connection and try again.' };
  }
}

interface SubmitOptions {
  onSuccess?: (form: HTMLFormElement, result: Result) => void;
}

export function enhanceForm(form: HTMLFormElement, options: SubmitOptions = {}) {
  let attempted = false;

  const revalidate = (e: Event) => {
    if (!attempted) return;
    const control = e.target as Control;
    if (!control.name) return;
    setFieldError(control, messageFor(control));
  };
  form.addEventListener('input', revalidate);
  form.addEventListener('change', revalidate);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (form.dataset.busy === 'true') return;
    attempted = true;
    const invalid = validateForm(form);
    if (invalid) {
      setStatus(form, 'error', 'Please correct the highlighted fields.');
      invalid.focus();
      return;
    }
    setStatus(form, null);
    setBusy(form, true);
    const result = await send(form);
    setBusy(form, false);
    if (result.ok) {
      attempted = false;
      form.reset();
      form.dispatchEvent(new CustomEvent('nk:reset'));
      setStatus(form, 'success', result.message);
      options.onSuccess?.(form, result);
    } else {
      setStatus(form, 'error', result.message);
    }
  });
}

export function initForms() {
  document.querySelectorAll<HTMLFormElement>('form[data-form]:not([data-form="quote"])').forEach((f) => enhanceForm(f));
}

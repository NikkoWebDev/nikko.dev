import { track } from "../lib/analytics";

let toastTimer = 0;

/** Muestra un aviso breve en la región viva #toast (lo leen los lectores de pantalla). */
export function showToast(message: string): void {
  const toast = document.getElementById("toast");
  if (!toast || !message) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2800);
}

export async function copyText(text: string, success: string, failure: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    showToast(success);
    return true;
  } catch {
    showToast(failure);
    return false;
  }
}

/** Botones con data-copy="texto" data-copy-success="…" data-copy-error="…". */
export function initCopyButtons(): void {
  document.querySelectorAll<HTMLElement>("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const ok = await copyText(button.dataset.copy ?? "", button.dataset.copySuccess ?? "", button.dataset.copyError ?? "");
      if (ok) track("email_copy");
    });
  });
}

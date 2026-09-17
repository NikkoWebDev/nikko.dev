// src/lib/analytics.ts
// Analítica ligera: sin cookies, sin localStorage, sin identificadores.
// Cada evento queda en window.__nikkoEvents; si <html> expone
// data-analytics-endpoint, además se envía por POST (fire-and-forget).

export interface AnalyticsEvent {
  name: string;
  props?: Record<string, string | number | boolean>;
  path: string;
  lang: string;
  ts: number;
}

declare global {
  interface Window {
    __nikkoEvents?: AnalyticsEvent[];
  }
}

export function track(
  name: string,
  props?: Record<string, string | number | boolean>,
): void {
  const evt: AnalyticsEvent = {
    name,
    props,
    path: window.location.pathname,
    lang: document.documentElement.lang,
    ts: Date.now(),
  };

  (window.__nikkoEvents ??= []).push(evt);

  const endpoint = document.documentElement.dataset.analyticsEndpoint;
  if (endpoint) {
    fetch(endpoint, {
      method: "POST",
      keepalive: true, // sobrevive a navegaciones (p.ej. el toggle de idioma)
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(evt),
    }).catch(() => {
      /* fire-and-forget: no molestar al usuario si el POST falla */
    });
  }
}
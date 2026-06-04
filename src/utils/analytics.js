// Lightweight dataLayer helper for Google Tag Manager / GA4 (gtag.js).
// Both GTM and the gtag.js snippet in index.html share window.dataLayer,
// so pushing a custom event here makes it available to GTM triggers
// and forwardable to GA4.
export const trackEvent = (event, params = {}) => {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
};

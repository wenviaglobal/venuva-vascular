// Where the admin app mounts, derived from the hostname.
//  • On the admin subdomain (admin.<domain>) it runs at the site ROOT ("").
//  • Elsewhere (local dev) it stays under "/admin" for convenience.
const HOST = typeof window !== 'undefined' ? window.location.hostname : '';
const isAdminHost = HOST.startsWith('admin.');

export const ADMIN_BASE = isAdminHost ? '' : '/admin';

// Build an admin route path. Dashboard root resolves to "/".
export const adminPath = (p = '') => `${ADMIN_BASE}${p}` || '/';

// Origin of the PUBLIC site — used for the preview iframe and the "View Site"
// link, which must point at the real site, not the admin host.
// On admin.<domain> → https://<domain>; elsewhere → same origin ("").
export const siteOrigin = () => {
  if (typeof window === 'undefined') return '';
  const h = window.location.hostname;
  return h.startsWith('admin.') ? `${window.location.protocol}//${h.slice(6)}` : '';
};

export const publicUrl = (p = '') => `${siteOrigin()}${p}`;

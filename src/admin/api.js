// Admin API client. Token is stored in localStorage and sent as a Bearer header.
const TOKEN_KEY = 'venuva_admin_token';

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const setToken = (t) =>
  t ? localStorage.setItem(TOKEN_KEY, t) : localStorage.removeItem(TOKEN_KEY);

async function req(method, path, body, isForm = false) {
  const headers = {};
  const token = getToken();
  if (token) headers.Authorization = `Bearer ${token}`;

  let payload;
  if (isForm) {
    payload = body; // FormData — let the browser set the boundary
  } else if (body !== undefined) {
    headers['Content-Type'] = 'application/json';
    payload = JSON.stringify(body);
  }

  const res = await fetch(`/api${path}`, { method, headers, body: payload });
  if (res.status === 401) {
    setToken(null);
    throw new Error('Session expired — please sign in again.');
  }
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `Request failed (${res.status})`);
  return data;
}

export const api = {
  login: (email, password) => req('POST', '/admin/login', { email, password }),
  me: () => req('GET', '/admin/me'),
  changePassword: (currentPassword, newPassword) =>
    req('POST', '/admin/change-password', { currentPassword, newPassword }),

  list: (c) => req('GET', `/admin/content/${c}`),
  get: (c, id) => req('GET', `/admin/content/${c}/${id}`),
  create: (c, body) => req('POST', `/admin/content/${c}`, body),
  update: (c, id, body) => req('PUT', `/admin/content/${c}/${id}`, body),
  remove: (c, id) => req('DELETE', `/admin/content/${c}/${id}`),
  reorder: (c, items) => req('PATCH', `/admin/content/${c}/reorder`, { items }),

  getSetting: (k) => req('GET', `/settings/${k}`),
  saveSetting: (k, value) => req('PUT', `/admin/settings/${k}`, { value }),

  upload: (file) => {
    const fd = new FormData();
    fd.append('file', file);
    return req('POST', '/admin/upload', fd, true);
  },
};

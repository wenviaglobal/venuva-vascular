import { useEffect, useState } from 'react';
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, Phone, Share2, Palette, UserCog, LogOut, ExternalLink, Loader2,
} from 'lucide-react';
import { api, getToken, setToken } from './api';
import { adminPath, publicUrl } from './base';
import { COLLECTIONS_META } from './schemas';
import Login from './Login';
import CollectionList from './CollectionList';
import CollectionEditor from './CollectionEditor';
import SettingsEditor from './SettingsPages';

const linkCls = ({ isActive }) =>
  `flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
    isActive ? 'bg-hospital-navy text-white' : 'text-slate-600 hover:bg-slate-100'
  }`;

function Sidebar({ onLogout }) {
  return (
    <aside className="flex w-60 shrink-0 flex-col border-r border-slate-200 bg-white">
      <div className="border-b border-slate-100 px-5 py-4">
        <div className="text-base font-black text-hospital-navy">Venuva Admin</div>
        <div className="text-[11px] text-slate-400">Content Management</div>
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto p-3">
        <NavLink to={adminPath()} end className={linkCls}><LayoutDashboard size={17} /> Dashboard</NavLink>
        <div className="px-3 pb-1 pt-4 text-[10px] font-bold uppercase tracking-wider text-slate-400">Content</div>
        {COLLECTIONS_META.map((c) => (
          <NavLink key={c.key} to={adminPath(`/${c.key}`)} className={linkCls}><c.icon size={17} /> {c.label}</NavLink>
        ))}
        <div className="px-3 pb-1 pt-4 text-[10px] font-bold uppercase tracking-wider text-slate-400">Settings</div>
        <NavLink to={adminPath('/settings/contact')} className={linkCls}><Phone size={17} /> Contact Info</NavLink>
        <NavLink to={adminPath('/settings/social')} className={linkCls}><Share2 size={17} /> Social Media</NavLink>
        <NavLink to={adminPath('/settings/theme')} className={linkCls}><Palette size={17} /> Theme &amp; Colors</NavLink>
        <NavLink to={adminPath('/settings/account')} className={linkCls}><UserCog size={17} /> Account</NavLink>
      </nav>
      <div className="space-y-1 border-t border-slate-100 p-3">
        <a href={publicUrl('/')} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100">
          <ExternalLink size={17} /> View Site
        </a>
        <button onClick={onLogout} className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100">
          <LogOut size={17} /> Log out
        </button>
      </div>
    </aside>
  );
}

function Dashboard() {
  const [counts, setCounts] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    Promise.all(COLLECTIONS_META.map((c) => api.list(c.key).then((r) => [c.key, r.length]).catch(() => [c.key, '—'])))
      .then((pairs) => setCounts(Object.fromEntries(pairs)));
  }, []);
  return (
    <div className="mx-auto max-w-4xl p-8">
      <h1 className="mb-1 text-2xl font-black text-hospital-navy">Dashboard</h1>
      <p className="mb-8 text-sm text-slate-500">Manage all website content from here.</p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {COLLECTIONS_META.map((c) => (
          <button key={c.key} onClick={() => navigate(adminPath(`/${c.key}`))}
            className="flex flex-col items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-left transition-shadow hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-hospital-mint text-hospital-navy">
              <c.icon size={22} />
            </div>
            <div>
              <div className="text-2xl font-black text-hospital-navy">{counts[c.key] ?? <Loader2 className="inline animate-spin" size={18} />}</div>
              <div className="text-sm text-slate-500">{c.label}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function AdminApp() {
  const [status, setStatus] = useState('checking'); // checking | out | in
  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken()) { setStatus('out'); return; }
    api.me().then(() => setStatus('in')).catch(() => { setToken(null); setStatus('out'); });
  }, []);

  const logout = () => { setToken(null); setStatus('out'); navigate(adminPath()); };

  if (status === 'checking') {
    return <div className="flex min-h-screen items-center justify-center text-slate-400"><Loader2 className="animate-spin" size={22} /></div>;
  }
  if (status === 'out') return <Login onSuccess={() => setStatus('in')} />;

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 text-slate-800">
      <Sidebar onLogout={logout} />
      <main className="min-w-0 flex-1 overflow-y-auto">
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="settings/:key" element={<SettingsEditor />} />
          <Route path=":collection" element={<CollectionList />} />
          <Route path=":collection/:id" element={<CollectionEditor />} />
          <Route path="*" element={<Navigate to={adminPath()} replace />} />
        </Routes>
      </main>
    </div>
  );
}

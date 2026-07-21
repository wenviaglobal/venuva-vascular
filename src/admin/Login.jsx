import { useState } from 'react';
import { Lock, Loader2 } from 'lucide-react';
import { api, setToken } from './api';
import { inputCls } from './fields';

export default function Login({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setErr('');
    try {
      const { token, user } = await api.login(email, password);
      setToken(token);
      onSuccess(user);
    } catch (ex) {
      setErr(ex.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <form onSubmit={submit} className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-hospital-navy text-white">
            <Lock size={20} />
          </div>
          <div>
            <h1 className="text-lg font-black text-hospital-navy">Venuva Admin</h1>
            <p className="text-xs text-slate-500">Content Management</p>
          </div>
        </div>

        <label className="mb-1.5 block text-xs font-semibold text-slate-600">Email</label>
        <input className={inputCls} type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="username" />

        <label className="mb-1.5 mt-4 block text-xs font-semibold text-slate-600">Password</label>
        <input className={inputCls} type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />

        {err && <p className="mt-3 text-sm text-rose-600">{err}</p>}

        <button
          type="submit"
          disabled={busy}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-hospital-navy py-2.5 text-sm font-semibold text-white hover:bg-hospital-navy/90 disabled:opacity-60"
        >
          {busy && <Loader2 size={16} className="animate-spin" />}
          Sign in
        </button>
      </form>
    </div>
  );
}

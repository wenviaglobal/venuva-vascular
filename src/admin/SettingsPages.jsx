import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Save, Loader2, Check } from 'lucide-react';
import { api } from './api';
import { StringList, inputCls } from './fields';

const SETTINGS_CONFIG = {
  contact: {
    label: 'Contact Information',
    fields: [
      { key: 'emergencyPhone', label: 'Emergency / Primary Phone' },
      { key: 'workHours', label: 'Working Hours' },
      { key: 'location', label: 'Short Location' },
      { key: 'address', label: 'Address (line 1)' },
      { key: 'addressDetail', label: 'Address (full)' },
      { key: 'whatsapp', label: 'WhatsApp Number' },
      { key: 'email', label: 'Email' },
      { key: 'phones', label: 'Phone Numbers', type: 'stringList' },
    ],
  },
  social: {
    label: 'Social Media Links',
    fields: [
      { key: 'facebook', label: 'Facebook URL' },
      { key: 'instagram', label: 'Instagram URL' },
      { key: 'youtube', label: 'YouTube URL' },
      { key: 'whatsapp', label: 'WhatsApp Link' },
    ],
  },
};

function SavedBadge({ show }) {
  if (!show) return null;
  return <span className="inline-flex items-center gap-1 text-xs font-semibold text-hospital-emerald"><Check size={14} /> Saved</span>;
}

function KeyValueSettings({ settingKey }) {
  const cfg = SETTINGS_CONFIG[settingKey];
  const [value, setValue] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [err, setErr] = useState('');

  useEffect(() => {
    setLoading(true);
    api.getSetting(settingKey).then((v) => { setValue(v || {}); setLoading(false); }).catch((e) => { setErr(e.message); setLoading(false); });
  }, [settingKey]);

  const save = async () => {
    setSaving(true); setErr('');
    try { await api.saveSetting(settingKey, value); setSaved(true); setTimeout(() => setSaved(false), 2000); }
    catch (e) { setErr(e.message); } finally { setSaving(false); }
  };

  if (loading) return <div className="flex items-center gap-2 p-8 text-slate-400"><Loader2 className="animate-spin" size={18} /> Loading…</div>;

  return (
    <div className="mx-auto max-w-2xl p-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-black text-hospital-navy">{cfg.label}</h1>
        <div className="flex items-center gap-3"><SavedBadge show={saved} />
          <button onClick={save} disabled={saving} className="inline-flex items-center gap-2 rounded-lg bg-hospital-navy px-4 py-2 text-sm font-semibold text-white hover:bg-hospital-navy/90 disabled:opacity-60">
            {saving ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />} Save
          </button>
        </div>
      </div>
      {err && <p className="mb-4 rounded-lg bg-rose-50 p-3 text-sm text-rose-700">{err}</p>}
      <div className="space-y-5 rounded-xl border border-slate-200 bg-white p-6">
        {cfg.fields.map((f) => (
          <div key={f.key}>
            <label className="mb-1.5 block text-xs font-semibold text-slate-600">{f.label}</label>
            {f.type === 'stringList' ? (
              <StringList value={value[f.key]} onChange={(v) => setValue((s) => ({ ...s, [f.key]: v }))} />
            ) : (
              <input className={inputCls} value={value[f.key] || ''} onChange={(e) => setValue((s) => ({ ...s, [f.key]: e.target.value }))} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ThemeSettings() {
  const [colors, setColors] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    api.getSetting('theme').then((v) => { setColors(v?.colors || {}); setLoading(false); });
  }, []);

  const save = async () => {
    setSaving(true);
    try { await api.saveSetting('theme', { colors }); setSaved(true); setTimeout(() => setSaved(false), 2000); }
    finally { setSaving(false); }
  };

  if (loading) return <div className="flex items-center gap-2 p-8 text-slate-400"><Loader2 className="animate-spin" size={18} /> Loading…</div>;

  return (
    <div className="mx-auto max-w-2xl p-8">
      <div className="mb-2 flex items-center justify-between">
        <h1 className="text-2xl font-black text-hospital-navy">Theme &amp; Colors</h1>
        <div className="flex items-center gap-3"><SavedBadge show={saved} />
          <button onClick={save} disabled={saving} className="inline-flex items-center gap-2 rounded-lg bg-hospital-navy px-4 py-2 text-sm font-semibold text-white hover:bg-hospital-navy/90 disabled:opacity-60">
            {saving ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />} Save
          </button>
        </div>
      </div>
      <p className="mb-6 text-sm text-slate-500">These override the site's color tokens live across every page.</p>
      <div className="grid grid-cols-1 gap-3 rounded-xl border border-slate-200 bg-white p-6 sm:grid-cols-2">
        {Object.entries(colors).map(([name, hex]) => (
          <div key={name} className="flex items-center gap-3">
            <input type="color" value={hex} onChange={(e) => setColors((c) => ({ ...c, [name]: e.target.value }))}
              className="h-9 w-9 shrink-0 cursor-pointer rounded border border-slate-200" />
            <div className="min-w-0 flex-1">
              <div className="truncate text-xs font-semibold text-slate-700">{name}</div>
              <input className="w-full border-0 p-0 text-xs text-slate-400 outline-none" value={hex}
                onChange={(e) => setColors((c) => ({ ...c, [name]: e.target.value }))} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AccountSettings() {
  const [cur, setCur] = useState('');
  const [next, setNext] = useState('');
  const [msg, setMsg] = useState('');
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault(); setBusy(true); setErr(''); setMsg('');
    try { await api.changePassword(cur, next); setMsg('Password updated.'); setCur(''); setNext(''); }
    catch (ex) { setErr(ex.message); } finally { setBusy(false); }
  };

  return (
    <div className="mx-auto max-w-md p-8">
      <h1 className="mb-6 text-2xl font-black text-hospital-navy">Account</h1>
      <form onSubmit={submit} className="space-y-4 rounded-xl border border-slate-200 bg-white p-6">
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-slate-600">Current password</label>
          <input type="password" className={inputCls} value={cur} onChange={(e) => setCur(e.target.value)} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-slate-600">New password (min 8 chars)</label>
          <input type="password" className={inputCls} value={next} onChange={(e) => setNext(e.target.value)} />
        </div>
        {msg && <p className="text-sm text-hospital-emerald">{msg}</p>}
        {err && <p className="text-sm text-rose-600">{err}</p>}
        <button disabled={busy} className="inline-flex items-center gap-2 rounded-lg bg-hospital-navy px-4 py-2 text-sm font-semibold text-white disabled:opacity-60">
          {busy && <Loader2 size={15} className="animate-spin" />} Update password
        </button>
      </form>
    </div>
  );
}

export default function SettingsEditor() {
  const { key } = useParams();
  if (key === 'theme') return <ThemeSettings />;
  if (key === 'account') return <AccountSettings />;
  if (SETTINGS_CONFIG[key]) return <KeyValueSettings settingKey={key} />;
  return <div className="p-8 text-slate-500">Unknown setting.</div>;
}

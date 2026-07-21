import { useState } from 'react';
import * as Lucide from 'lucide-react';
import { Upload, X, Plus, Trash2, Loader2, Search, ChevronDown } from 'lucide-react';
import { api } from './api';

// ── nested get/set for dot-paths like "tabs.biography" ─────────────────────
export function getPath(obj, path) {
  return path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj);
}
export function setPath(obj, path, value) {
  const keys = path.split('.');
  const next = Array.isArray(obj) ? [...obj] : { ...obj };
  let cur = next;
  for (let i = 0; i < keys.length - 1; i++) {
    const k = keys[i];
    cur[k] = cur[k] == null ? {} : Array.isArray(cur[k]) ? [...cur[k]] : { ...cur[k] };
    cur = cur[k];
  }
  cur[keys[keys.length - 1]] = value;
  return next;
}

const inputCls =
  'w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none focus:border-hospital-teal focus:ring-2 focus:ring-hospital-teal/20';

// ── Preset colour choices (kept as literal strings so Tailwind generates them) ──
// Background + text pair, used for Service cards.
export const COLOR_PAIRS = [
  { label: 'Rose', value: 'bg-rose-50 text-rose-600', dot: 'bg-rose-500' },
  { label: 'Amber', value: 'bg-amber-50 text-amber-600', dot: 'bg-amber-500' },
  { label: 'Blue', value: 'bg-blue-50 text-blue-600', dot: 'bg-blue-500' },
  { label: 'Sky', value: 'bg-sky-50 text-sky-600', dot: 'bg-sky-500' },
  { label: 'Teal', value: 'bg-teal-50 text-teal-600', dot: 'bg-teal-500' },
  { label: 'Emerald', value: 'bg-emerald-50 text-emerald-600', dot: 'bg-emerald-500' },
  { label: 'Purple', value: 'bg-purple-50 text-purple-600', dot: 'bg-purple-500' },
  { label: 'Pink', value: 'bg-pink-50 text-pink-600', dot: 'bg-pink-500' },
  { label: 'Indigo', value: 'bg-indigo-50 text-indigo-600', dot: 'bg-indigo-500' },
  { label: 'Slate', value: 'bg-slate-100 text-slate-600', dot: 'bg-slate-500' },
];

// Single accent text colour, used for Hero stats.
export const TEXT_COLORS = [
  { label: 'Gold', value: 'text-hospital-sun', dot: 'bg-hospital-sun' },
  { label: 'Sky Blue', value: 'text-hospital-sky-blue', dot: 'bg-hospital-sky-blue' },
  { label: 'Navy', value: 'text-hospital-navy', dot: 'bg-hospital-navy' },
  { label: 'Teal', value: 'text-hospital-teal', dot: 'bg-hospital-teal' },
  { label: 'Emerald', value: 'text-hospital-emerald', dot: 'bg-hospital-emerald' },
];

// Curated, human-relevant icons (filtered to those present in the installed lucide).
const ICON_NAMES = [
  'Activity', 'HeartPulse', 'Heart', 'Stethoscope', 'Syringe', 'Pill', 'Cross', 'Plus',
  'Thermometer', 'Brain', 'Bone', 'Eye', 'Ear', 'Droplet', 'Droplets', 'Zap', 'ShieldCheck',
  'Shield', 'Clock', 'Calendar', 'CheckCircle', 'CheckCircle2', 'UserCheck', 'Users', 'User',
  'Award', 'Star', 'Microscope', 'TestTube', 'TestTubes', 'Scan', 'Waves', 'Wind', 'Sparkles',
  'Ambulance', 'Stethoscope', 'Baby', 'Bandage', 'Dna', 'Ribbon', 'Phone', 'PhoneCall', 'Mail',
  'MapPin', 'Home', 'Building2', 'Clipboard', 'ClipboardList', 'FileText', 'BookOpen',
  'GraduationCap', 'Target', 'TrendingUp', 'ThumbsUp', 'Smile', 'LifeBuoy', 'Hospital', 'Accessibility',
].filter((n, i, arr) => arr.indexOf(n) === i && Lucide[n]);

// ── Visual icon picker ─────────────────────────────────────────────────────
function IconPicker({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const Current = Lucide[value] || Lucide.Circle;
  const list = ICON_NAMES.filter((n) => n.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="relative w-64">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
      >
        <Current size={18} className="text-hospital-navy" />
        <span className="flex-1 text-left text-slate-500">{value || 'Choose an icon'}</span>
        <ChevronDown size={15} className="text-slate-400" />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute z-20 mt-1 w-72 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
            <div className="relative mb-2">
              <Search size={14} className="absolute left-2.5 top-2.5 text-slate-400" />
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search icons…"
                className="w-full rounded-lg border border-slate-200 py-1.5 pl-8 pr-2 text-sm outline-none focus:border-hospital-teal"
              />
            </div>
            <div className="grid max-h-52 grid-cols-6 gap-1 overflow-y-auto">
              {list.map((n) => {
                const I = Lucide[n];
                return (
                  <button
                    key={n}
                    type="button"
                    title={n}
                    onClick={() => { onChange(n); setOpen(false); }}
                    className={`flex h-9 items-center justify-center rounded-lg hover:bg-slate-100 ${
                      value === n ? 'bg-hospital-mint text-hospital-navy' : 'text-slate-600'
                    }`}
                  >
                    <I size={18} />
                  </button>
                );
              })}
              {!list.length && <p className="col-span-6 py-4 text-center text-xs text-slate-400">No icons</p>}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// ── Colour swatch picker ───────────────────────────────────────────────────
function ColorPicker({ value, onChange, options }) {
  const opts = options && options.length ? options : COLOR_PAIRS;
  return (
    <div className="flex flex-wrap gap-2">
      {opts.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => onChange(o.value)}
          className={`flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-semibold text-slate-700 ${
            value === o.value ? 'border-hospital-navy ring-2 ring-hospital-navy/20' : 'border-slate-200 hover:border-slate-300'
          }`}
        >
          <span className={`h-4 w-4 rounded-full ${o.dot}`} />
          {o.label}
        </button>
      ))}
    </div>
  );
}

// ── Image field: upload a file or paste a URL, with a live thumbnail ───────
export function ImageField({ value, onChange }) {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');

  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    setErr('');
    try {
      const { url } = await api.upload(file);
      onChange(url);
    } catch (ex) {
      setErr(ex.message);
    } finally {
      setBusy(false);
      e.target.value = '';
    }
  };

  return (
    <div>
      <div className="flex items-start gap-4">
        <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
          {value ? (
            <img src={value} alt="" className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-[10px] text-slate-400">
              No image
            </div>
          )}
        </div>
        <div className="flex-1 space-y-2">
          <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-hospital-navy px-3 py-2 text-xs font-semibold text-white hover:bg-hospital-navy/90">
            {busy ? <Loader2 size={14} className="animate-spin" /> : <Upload size={14} />}
            {busy ? 'Uploading…' : 'Upload image'}
            <input type="file" accept="image/*" className="hidden" onChange={handleFile} disabled={busy} />
          </label>
          <input
            className={inputCls}
            placeholder="…or paste an image URL"
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
          />
          {value && (
            <button
              type="button"
              onClick={() => onChange('')}
              className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-rose-600"
            >
              <X size={12} /> Clear
            </button>
          )}
          {err && <p className="text-xs text-rose-600">{err}</p>}
        </div>
      </div>
    </div>
  );
}

// ── List of plain strings ──────────────────────────────────────────────────
export function StringList({ value, onChange }) {
  const items = Array.isArray(value) ? value : [];
  const set = (i, v) => onChange(items.map((it, idx) => (idx === i ? v : it)));
  const add = () => onChange([...items, '']);
  const remove = (i) => onChange(items.filter((_, idx) => idx !== i));
  return (
    <div className="space-y-2">
      {items.map((it, i) => (
        <div key={i} className="flex items-center gap-2">
          <input className={inputCls} value={it} onChange={(e) => set(i, e.target.value)} />
          <button type="button" onClick={() => remove(i)} className="text-slate-400 hover:text-rose-600">
            <Trash2 size={16} />
          </button>
        </div>
      ))}
      <button type="button" onClick={add} className="inline-flex items-center gap-1 text-xs font-semibold text-hospital-teal hover:underline">
        <Plus size={14} /> Add item
      </button>
    </div>
  );
}

// ── Single control used by both top-level fields and object-list sub-fields ─
function Control({ field, value, onChange }) {
  if (field.type === 'icon') return <IconPicker value={value} onChange={onChange} />;
  if (field.type === 'color') return <ColorPicker value={value} onChange={onChange} options={field.options} />;
  if (field.type === 'select')
    return (
      <select className={inputCls} value={value || ''} onChange={(e) => onChange(e.target.value)}>
        <option value="">— Select —</option>
        {(field.options || []).map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    );
  if (field.type === 'textarea')
    return <textarea rows={field.big ? 10 : 3} className={inputCls} value={value || ''} onChange={(e) => onChange(e.target.value)} />;
  return <input className={inputCls} value={value || ''} onChange={(e) => onChange(e.target.value)} />;
}

// ── List of objects with a fixed set of sub-fields ─────────────────────────
export function ObjectList({ value, onChange, itemFields }) {
  const items = Array.isArray(value) ? value : [];
  const blank = Object.fromEntries(itemFields.map((f) => [f.key, '']));
  const setItem = (i, key, v) => onChange(items.map((it, idx) => (idx === i ? { ...it, [key]: v } : it)));
  const add = () => onChange([...items, { ...blank }]);
  const remove = (i) => onChange(items.filter((_, idx) => idx !== i));
  return (
    <div className="space-y-3">
      {items.map((it, i) => (
        <div key={i} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">#{i + 1}</span>
            <button type="button" onClick={() => remove(i)} className="text-slate-400 hover:text-rose-600">
              <Trash2 size={15} />
            </button>
          </div>
          <div className="space-y-2">
            {itemFields.map((f) => (
              <div key={f.key}>
                <label className="mb-1 block text-[11px] font-medium text-slate-500">{f.label}</label>
                <Control field={f} value={it[f.key]} onChange={(v) => setItem(i, f.key, v)} />
              </div>
            ))}
          </div>
        </div>
      ))}
      <button type="button" onClick={add} className="inline-flex items-center gap-1 text-xs font-semibold text-hospital-teal hover:underline">
        <Plus size={14} /> Add
      </button>
    </div>
  );
}

// ── Dispatcher: render the right editor for a field def ────────────────────
export function FieldEditor({ field, value, onChange }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-slate-600">{field.label}</label>
      {field.type === 'image' ? (
        <ImageField value={value} onChange={onChange} />
      ) : field.type === 'stringList' ? (
        <StringList value={value} onChange={onChange} />
      ) : field.type === 'objectList' ? (
        <ObjectList value={value} onChange={onChange} itemFields={field.itemFields} />
      ) : (
        <Control field={field} value={value} onChange={onChange} />
      )}
      {field.help && <p className="mt-1 text-[11px] text-slate-400">{field.help}</p>}
    </div>
  );
}

export { inputCls };

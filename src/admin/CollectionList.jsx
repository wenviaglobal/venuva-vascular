import { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Plus, Pencil, Trash2, ArrowUp, ArrowDown, Eye, EyeOff, Loader2 } from 'lucide-react';
import { api } from './api';
import { adminPath } from './base';
import { metaFor, TITLE_FIELD } from './schemas';

export default function CollectionList() {
  const { collection } = useParams();
  const navigate = useNavigate();
  const meta = metaFor(collection);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState('');

  const load = useCallback(async () => {
    setLoading(true);
    try {
      setRows(await api.list(collection));
      setErr('');
    } catch (ex) {
      setErr(ex.message);
    } finally {
      setLoading(false);
    }
  }, [collection]);

  useEffect(() => { load(); }, [load]);

  const titleOf = (r) => r.data?.[TITLE_FIELD[collection]] || r.title || r.slug || `#${r.id}`;

  const togglePublish = async (r) => {
    await api.update(collection, r.id, { ...r, published: !r.published });
    load();
  };

  const move = async (i, dir) => {
    const j = i + dir;
    if (j < 0 || j >= rows.length) return;
    const reordered = [...rows];
    [reordered[i], reordered[j]] = [reordered[j], reordered[i]];
    setRows(reordered);
    await api.reorder(collection, reordered.map((r, idx) => ({ id: r.id, sort_order: idx })));
  };

  const remove = async (r) => {
    if (!window.confirm(`Delete "${titleOf(r)}"? This cannot be undone.`)) return;
    await api.remove(collection, r.id);
    load();
  };

  if (!meta) return <div className="p-8 text-slate-500">Unknown section.</div>;

  return (
    <div className="mx-auto max-w-4xl p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-hospital-navy">{meta.label}</h1>
          <p className="text-sm text-slate-500">{rows.length} item{rows.length === 1 ? '' : 's'}</p>
        </div>
        <button
          onClick={() => navigate(adminPath(`/${collection}/new`))}
          className="inline-flex items-center gap-2 rounded-lg bg-hospital-navy px-4 py-2 text-sm font-semibold text-white hover:bg-hospital-navy/90"
        >
          <Plus size={16} /> New {meta.singular}
        </button>
      </div>

      {err && <p className="mb-4 rounded-lg bg-rose-50 p-3 text-sm text-rose-700">{err}</p>}
      {loading ? (
        <div className="flex items-center gap-2 p-8 text-slate-400"><Loader2 className="animate-spin" size={18} /> Loading…</div>
      ) : (
        <div className="divide-y divide-slate-100 overflow-hidden rounded-xl border border-slate-200 bg-white">
          {rows.map((r, i) => (
            <div key={r.id} className="flex items-center gap-3 p-3 hover:bg-slate-50">
              {r.data?.image && (
                <img src={r.data.image} alt="" className="h-10 w-10 shrink-0 rounded-md object-cover" />
              )}
              <button className="min-w-0 flex-1 text-left" onClick={() => navigate(adminPath(`/${collection}/${r.id}`))}>
                <div className="truncate text-sm font-semibold text-slate-800">{titleOf(r)}</div>
                <div className="truncate text-xs text-slate-400">{r.slug}</div>
              </button>
              <button title={r.published ? 'Published' : 'Hidden'} onClick={() => togglePublish(r)} className={r.published ? 'text-hospital-emerald' : 'text-slate-300'}>
                {r.published ? <Eye size={17} /> : <EyeOff size={17} />}
              </button>
              <div className="flex flex-col">
                <button onClick={() => move(i, -1)} className="text-slate-300 hover:text-slate-600"><ArrowUp size={14} /></button>
                <button onClick={() => move(i, 1)} className="text-slate-300 hover:text-slate-600"><ArrowDown size={14} /></button>
              </div>
              <button onClick={() => navigate(adminPath(`/${collection}/${r.id}`))} className="text-slate-400 hover:text-hospital-teal"><Pencil size={16} /></button>
              <button onClick={() => remove(r)} className="text-slate-400 hover:text-rose-600"><Trash2 size={16} /></button>
            </div>
          ))}
          {!rows.length && <div className="p-8 text-center text-sm text-slate-400">Nothing here yet.</div>}
        </div>
      )}
    </div>
  );
}

import { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, ExternalLink, RefreshCw, Loader2, Code, LayoutList, Monitor } from 'lucide-react';
import { api } from './api';
import { adminPath, publicUrl } from './base';
import { metaFor, FIELD_SCHEMAS, TITLE_FIELD } from './schemas';
import { FieldEditor, getPath, setPath, inputCls } from './fields';

const slugify = (s) =>
  String(s || '').toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

const blankRecord = () => ({ slug: '', title: '', published: true, sort_order: 0, data: {} });

export default function CollectionEditor() {
  const { collection, id } = useParams();
  const navigate = useNavigate();
  const meta = metaFor(collection);
  const fields = FIELD_SCHEMAS[collection] || [];
  const isNew = id === 'new';

  const [rec, setRec] = useState(blankRecord());
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState('');
  const [tab, setTab] = useState('fields'); // 'fields' | 'json'
  const [jsonText, setJsonText] = useState('{}');
  const [jsonErr, setJsonErr] = useState('');
  const [previewKey, setPreviewKey] = useState(0);
  const [showPreview, setShowPreview] = useState(true);

  const load = useCallback(async () => {
    if (isNew) { setRec(blankRecord()); setLoading(false); return; }
    setLoading(true);
    try {
      const r = await api.get(collection, id);
      setRec(r);
      setJsonText(JSON.stringify(r.data ?? {}, null, 2));
    } catch (ex) {
      setErr(ex.message);
    } finally {
      setLoading(false);
    }
  }, [collection, id, isNew]);

  useEffect(() => { load(); }, [load]);

  const titleKey = TITLE_FIELD[collection];
  const previewSlug = rec.slug || slugify(getPath(rec.data, titleKey) || '');
  // Preview must load the PUBLIC site, not the admin host.
  const previewUrl = meta ? publicUrl(meta.preview(previewSlug)) : '';

  const updateData = (path, value) => setRec((r) => ({ ...r, data: setPath(r.data || {}, path, value) }));

  const save = async () => {
    setSaving(true);
    setErr('');
    try {
      // keep the identifier fields inside `data` in sync with the row slug so the
      // public pages (which match by id/slug) resolve correctly.
      const titleVal = getPath(rec.data, titleKey) || rec.title || '';
      const slug = rec.slug || slugify(titleVal);
      const data = { ...rec.data };
      if (slug) {
        if (collection === 'treatments') data.id = slug;
        data.slug = slug;
      }
      const body = { slug, title: titleVal, published: rec.published, sort_order: rec.sort_order, data };

      const saved = isNew
        ? await api.create(collection, body)
        : await api.update(collection, id, body);

      setPreviewKey((k) => k + 1); // refresh the preview to show the change
      if (isNew) {
        navigate(adminPath(`/${collection}/${saved.id}`), { replace: true });
      } else {
        setRec(saved);
        setJsonText(JSON.stringify(saved.data ?? {}, null, 2));
      }
    } catch (ex) {
      setErr(ex.message);
    } finally {
      setSaving(false);
    }
  };

  const applyJson = (text) => {
    setJsonText(text);
    try {
      const parsed = JSON.parse(text);
      setRec((r) => ({ ...r, data: parsed }));
      setJsonErr('');
    } catch (ex) {
      setJsonErr(ex.message);
    }
  };

  if (!meta) return <div className="p-8 text-slate-500">Unknown section.</div>;
  if (loading) return <div className="flex items-center gap-2 p-8 text-slate-400"><Loader2 className="animate-spin" size={18} /> Loading…</div>;

  return (
    <div className="flex h-full flex-col">
      {/* Toolbar */}
      <div className="flex items-center gap-3 border-b border-slate-200 bg-white px-4 py-2.5">
        <button onClick={() => navigate(adminPath(`/${collection}`))} className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-800">
          <ArrowLeft size={16} /> Back
        </button>
        <div className="mx-2 h-5 w-px bg-slate-200" />
        <span className="truncate text-sm font-bold text-hospital-navy">
          {isNew ? `New ${meta.singular}` : getPath(rec.data, titleKey) || rec.slug}
        </span>
        <div className="ml-auto flex items-center gap-2">
          <label className="flex cursor-pointer items-center gap-1.5 text-xs font-medium text-slate-600">
            <input type="checkbox" checked={!!rec.published} onChange={(e) => setRec((r) => ({ ...r, published: e.target.checked }))} />
            Published
          </label>
          <button onClick={() => setShowPreview((v) => !v)} className="rounded-lg border border-slate-200 p-2 text-slate-500 hover:bg-slate-50" title="Toggle preview">
            <Monitor size={15} />
          </button>
          <button
            onClick={save}
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-lg bg-hospital-navy px-4 py-2 text-sm font-semibold text-white hover:bg-hospital-navy/90 disabled:opacity-60"
          >
            {saving ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />} Save
          </button>
        </div>
      </div>

      {err && <p className="bg-rose-50 px-4 py-2 text-sm text-rose-700">{err}</p>}

      <div className="flex min-h-0 flex-1">
        {/* Editor pane */}
        <div className={`flex min-h-0 flex-col ${showPreview ? 'w-1/2 border-r border-slate-200' : 'w-full'}`}>
          <div className="flex gap-1 border-b border-slate-100 bg-slate-50 px-4 py-1.5">
            <TabBtn active={tab === 'fields'} onClick={() => setTab('fields')} icon={LayoutList}>Fields</TabBtn>
            <TabBtn active={tab === 'json'} onClick={() => setTab('json')} icon={Code}>Raw JSON</TabBtn>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto p-5">
            {tab === 'fields' ? (
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-slate-600">Page link (optional)</label>
                    <input className={inputCls} value={rec.slug || ''} placeholder="Created automatically from the title"
                      onChange={(e) => setRec((r) => ({ ...r, slug: e.target.value }))}
                      onBlur={(e) => setRec((r) => ({ ...r, slug: slugify(e.target.value) }))} />
                    <p className="mt-1 text-[11px] text-slate-400">Leave blank to generate it from the title.</p>
                  </div>
                </div>
                {fields.map((f) => (
                  <FieldEditor key={f.key} field={f} value={getPath(rec.data, f.key)} onChange={(v) => updateData(f.key, v)} />
                ))}
              </div>
            ) : (
              <div>
                <p className="mb-2 text-xs text-slate-500">Full content object. Edit anything here; invalid JSON won't be applied.</p>
                <textarea
                  className="h-[60vh] w-full rounded-lg border border-slate-300 p-3 font-mono text-xs outline-none focus:border-hospital-teal"
                  value={jsonText}
                  onChange={(e) => applyJson(e.target.value)}
                  spellCheck={false}
                />
                {jsonErr && <p className="mt-2 text-xs text-rose-600">Invalid JSON: {jsonErr}</p>}
              </div>
            )}
          </div>
        </div>

        {/* Live preview pane */}
        {showPreview && (
          <div className="flex w-1/2 min-h-0 flex-col bg-slate-100">
            <div className="flex items-center gap-2 border-b border-slate-200 bg-white px-3 py-1.5">
              <span className="truncate text-xs text-slate-500">{previewUrl}</span>
              <div className="ml-auto flex items-center gap-1">
                <button onClick={() => setPreviewKey((k) => k + 1)} className="rounded p-1.5 text-slate-500 hover:bg-slate-100" title="Refresh preview">
                  <RefreshCw size={14} />
                </button>
                <a href={previewUrl} target="_blank" rel="noreferrer" className="rounded p-1.5 text-slate-500 hover:bg-slate-100" title="Open in new tab">
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
            <iframe key={previewKey} title="preview" src={previewUrl} className="min-h-0 flex-1 bg-white" />
            <p className="border-t border-slate-200 bg-white px-3 py-1 text-[10px] text-slate-400">
              Preview refreshes after you Save.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function TabBtn({ active, onClick, icon: Icon, children }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold ${
        active ? 'bg-white text-hospital-navy shadow-sm' : 'text-slate-500 hover:text-slate-700'
      }`}
    >
      <Icon size={13} /> {children}
    </button>
  );
}

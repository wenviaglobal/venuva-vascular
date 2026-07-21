import express from 'express';
import { query, COLLECTIONS } from './db.js';

// Wrap async handlers so thrown errors become clean 500s instead of crashing.
const ah = (fn) => (req, res) => fn(req, res).catch((err) => {
  console.error(`[${req.method} ${req.originalUrl}]`, err.message);
  if (err.code === '23505') return res.status(409).json({ error: 'That slug is already in use' });
  res.status(500).json({ error: 'Server error' });
});

const validCollection = (req, res, next) => {
  if (!COLLECTIONS.includes(req.params.collection)) {
    return res.status(404).json({ error: 'Unknown collection' });
  }
  next();
};

// Admin sees full row metadata; public gets just the content payload (original shape).
const adminRow = (r) => ({
  id: r.id, slug: r.slug, title: r.title,
  sort_order: r.sort_order, published: r.published,
  data: r.data, created_at: r.created_at, updated_at: r.updated_at,
});
const publicRow = (r) => ({ ...r.data, slug: r.slug ?? r.data?.slug, _id: r.id });

// ── Public, read-only (published items only) ───────────────────────────────
export const publicContentRouter = express.Router();

publicContentRouter.get('/:collection', validCollection, ah(async (req, res) => {
  const { rows } = await query(
    `SELECT * FROM ${req.params.collection} WHERE published = true ORDER BY sort_order, id`,
  );
  res.json(rows.map(publicRow));
}));

publicContentRouter.get('/:collection/:slug', validCollection, ah(async (req, res) => {
  const { rows } = await query(
    `SELECT * FROM ${req.params.collection} WHERE slug = $1 AND published = true`,
    [req.params.slug],
  );
  if (!rows[0]) return res.status(404).json({ error: 'Not found' });
  res.json(publicRow(rows[0]));
}));

// ── Admin CRUD (mount behind requireAuth) ──────────────────────────────────
export const adminCollectionRouter = express.Router();

adminCollectionRouter.get('/:collection', validCollection, ah(async (req, res) => {
  const { rows } = await query(
    `SELECT * FROM ${req.params.collection} ORDER BY sort_order, id`,
  );
  res.json(rows.map(adminRow));
}));

// Bulk reorder — declared before "/:id" so "reorder" isn't captured as an id.
adminCollectionRouter.patch('/:collection/reorder', validCollection, ah(async (req, res) => {
  const items = Array.isArray(req.body?.items) ? req.body.items : [];
  for (const it of items) {
    await query(`UPDATE ${req.params.collection} SET sort_order = $1, updated_at = now() WHERE id = $2`,
      [Number(it.sort_order) || 0, Number(it.id)]);
  }
  res.json({ success: true });
}));

adminCollectionRouter.get('/:collection/:id', validCollection, ah(async (req, res) => {
  const { rows } = await query(`SELECT * FROM ${req.params.collection} WHERE id = $1`, [req.params.id]);
  if (!rows[0]) return res.status(404).json({ error: 'Not found' });
  res.json(adminRow(rows[0]));
}));

adminCollectionRouter.post('/:collection', validCollection, ah(async (req, res) => {
  const t = req.params.collection;
  const b = req.body || {};
  const data = b.data ?? {};
  const { rows: maxRows } = await query(`SELECT COALESCE(MAX(sort_order), -1) + 1 AS n FROM ${t}`);
  const { rows } = await query(
    `INSERT INTO ${t} (slug, title, sort_order, published, data)
     VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [
      b.slug || null,
      b.title || data.title || data.name || data.question || null,
      b.sort_order ?? maxRows[0].n,
      b.published ?? true,
      JSON.stringify(data),
    ],
  );
  res.status(201).json(adminRow(rows[0]));
}));

adminCollectionRouter.put('/:collection/:id', validCollection, ah(async (req, res) => {
  const t = req.params.collection;
  const b = req.body || {};
  const data = b.data ?? {};
  const { rows } = await query(
    `UPDATE ${t} SET slug = $1, title = $2, sort_order = $3, published = $4, data = $5, updated_at = now()
     WHERE id = $6 RETURNING *`,
    [
      b.slug || null,
      b.title || data.title || data.name || data.question || null,
      b.sort_order ?? 0,
      b.published ?? true,
      JSON.stringify(data),
      req.params.id,
    ],
  );
  if (!rows[0]) return res.status(404).json({ error: 'Not found' });
  res.json(adminRow(rows[0]));
}));

adminCollectionRouter.delete('/:collection/:id', validCollection, ah(async (req, res) => {
  const { rowCount } = await query(`DELETE FROM ${req.params.collection} WHERE id = $1`, [req.params.id]);
  if (!rowCount) return res.status(404).json({ error: 'Not found' });
  res.json({ success: true });
}));

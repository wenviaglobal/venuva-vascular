import express from 'express';
import { query, SETTING_KEYS } from './db.js';

const ah = (fn) => (req, res) => fn(req, res).catch((err) => {
  console.error(`[${req.method} ${req.originalUrl}]`, err.message);
  res.status(500).json({ error: 'Server error' });
});

// ── Public: read settings ──────────────────────────────────────────────────
export const publicSettingsRouter = express.Router();

publicSettingsRouter.get('/', ah(async (_req, res) => {
  const { rows } = await query('SELECT key, value FROM settings');
  const out = {};
  for (const r of rows) out[r.key] = r.value;
  res.json(out);
}));

publicSettingsRouter.get('/:key', ah(async (req, res) => {
  const { rows } = await query('SELECT value FROM settings WHERE key = $1', [req.params.key]);
  res.json(rows[0]?.value ?? {});
}));

// ── Admin: update settings ─────────────────────────────────────────────────
export const adminSettingsRouter = express.Router();

adminSettingsRouter.put('/:key', ah(async (req, res) => {
  const { key } = req.params;
  if (!SETTING_KEYS.includes(key)) return res.status(400).json({ error: 'Unknown setting' });
  const value = req.body?.value ?? req.body ?? {};
  const { rows } = await query(
    `INSERT INTO settings (key, value) VALUES ($1, $2)
     ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value, updated_at = now()
     RETURNING value`,
    [key, JSON.stringify(value)],
  );
  res.json(rows[0].value);
}));

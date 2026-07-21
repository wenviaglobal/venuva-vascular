import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { query } from './db.js';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-insecure-secret-change-me';
const TOKEN_TTL = '7d';

export function signToken(user) {
  return jwt.sign({ sub: user.id, email: user.email }, JWT_SECRET, { expiresIn: TOKEN_TTL });
}

// Express middleware: rejects unless a valid Bearer token is present.
export function requireAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : req.cookies?.token;
  if (!token) return res.status(401).json({ error: 'Not authenticated' });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    return next();
  } catch {
    return res.status(401).json({ error: 'Invalid or expired session' });
  }
}

export async function login(req, res) {
  const email = String(req.body?.email || '').trim().toLowerCase();
  const password = String(req.body?.password || '');
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

  const { rows } = await query('SELECT * FROM admin_users WHERE email = $1', [email]);
  const user = rows[0];
  // Compare against found hash, or a dummy to keep timing roughly constant.
  const ok = user
    ? bcrypt.compareSync(password, user.password_hash)
    : bcrypt.compareSync(password, '$2a$10$invalidinvalidinvalidinvalidinvalidinvalidinvalidin');
  if (!user || !ok) return res.status(401).json({ error: 'Invalid credentials' });

  return res.json({ token: signToken(user), user: { id: user.id, email: user.email } });
}

export async function changePassword(req, res) {
  const current = String(req.body?.currentPassword || '');
  const next = String(req.body?.newPassword || '');
  if (next.length < 8) return res.status(400).json({ error: 'New password must be at least 8 characters' });

  const { rows } = await query('SELECT * FROM admin_users WHERE id = $1', [req.user.sub]);
  const user = rows[0];
  if (!user || !bcrypt.compareSync(current, user.password_hash)) {
    return res.status(401).json({ error: 'Current password is incorrect' });
  }
  const hash = bcrypt.hashSync(next, 10);
  await query('UPDATE admin_users SET password_hash = $1 WHERE id = $2', [hash, user.id]);
  return res.json({ success: true });
}

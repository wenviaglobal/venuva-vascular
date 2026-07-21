// Force-reset the admin password to the current ADMIN_EMAIL / ADMIN_PASSWORD
// from the environment. Usage: npm run admin:reset
import 'dotenv/config';
import bcrypt from 'bcryptjs';
import { pool, query } from './db.js';

const email = (process.env.ADMIN_EMAIL || '').trim().toLowerCase();
const pw = process.env.ADMIN_PASSWORD;

if (!email || !pw) {
  console.error('Set ADMIN_EMAIL and ADMIN_PASSWORD in the environment first.');
  process.exit(1);
}

const hash = bcrypt.hashSync(pw, 10);
await query(
  `INSERT INTO admin_users (email, password_hash) VALUES ($1, $2)
   ON CONFLICT (email) DO UPDATE SET password_hash = EXCLUDED.password_hash`,
  [email, hash],
);
console.log(`Admin password reset for ${email}.`);
await pool.end();
process.exit(0);

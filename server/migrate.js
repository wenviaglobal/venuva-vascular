import 'dotenv/config';
import bcrypt from 'bcryptjs';
import { pool, query, COLLECTIONS } from './db.js';

// Shared DDL for every content collection. Nested/complex fields live in `data`
// (JSONB); scalar columns exist only for the things we filter/sort/uniquely-key on.
const collectionTable = (name) => `
  CREATE TABLE IF NOT EXISTS ${name} (
    id          serial PRIMARY KEY,
    slug        text UNIQUE,
    title       text,
    sort_order  integer NOT NULL DEFAULT 0,
    published   boolean NOT NULL DEFAULT true,
    data        jsonb   NOT NULL DEFAULT '{}'::jsonb,
    created_at  timestamptz NOT NULL DEFAULT now(),
    updated_at  timestamptz NOT NULL DEFAULT now()
  );
  CREATE INDEX IF NOT EXISTS ${name}_sort_idx ON ${name} (sort_order, id);
`;

async function migrate() {
  await query(`
    CREATE TABLE IF NOT EXISTS admin_users (
      id            serial PRIMARY KEY,
      email         text UNIQUE NOT NULL,
      password_hash text NOT NULL,
      created_at    timestamptz NOT NULL DEFAULT now()
    );
  `);

  await query(`
    CREATE TABLE IF NOT EXISTS settings (
      key        text PRIMARY KEY,
      value      jsonb NOT NULL DEFAULT '{}'::jsonb,
      updated_at timestamptz NOT NULL DEFAULT now()
    );
  `);

  for (const name of COLLECTIONS) {
    await query(collectionTable(name));
  }

  // First-run admin bootstrap. DO NOTHING so a later password change from the
  // admin UI is never clobbered by a re-run. Use scripts/reset-admin.js to force.
  const email = (process.env.ADMIN_EMAIL || '').trim().toLowerCase();
  const pw = process.env.ADMIN_PASSWORD;
  if (email && pw) {
    const hash = bcrypt.hashSync(pw, 10);
    await query(
      `INSERT INTO admin_users (email, password_hash) VALUES ($1, $2)
       ON CONFLICT (email) DO NOTHING`,
      [email, hash],
    );
    console.log(`Admin ensured: ${email}`);
  } else {
    console.warn('ADMIN_EMAIL / ADMIN_PASSWORD not set — no admin user created.');
  }

  console.log('Migration complete.');
}

migrate()
  .then(() => pool.end())
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('Migration failed:', err);
    process.exit(1);
  });

import 'dotenv/config';
import pg from 'pg';

const { Pool } = pg;

// Single shared pool for the whole API process.
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 10,
});

export const query = (text, params) => pool.query(text, params);

// Content collections that share the generic (slug/title/sort/published/data) shape.
// This list is the security whitelist for the generic CRUD router — never build a
// table name from user input outside of it.
export const COLLECTIONS = ['treatments', 'doctors', 'blogs', 'services', 'faqs', 'hero'];

// Singleton settings keys editable from the admin (stored in the `settings` table).
export const SETTING_KEYS = ['contact', 'social', 'theme', 'general'];

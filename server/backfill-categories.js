// One-time backfill: stamp each treatment row with the category it belongs to,
// derived from the existing static category→slug mapping. Idempotent.
// Run: node --import ./server/seed/register.mjs server/backfill-categories.js
import 'dotenv/config';
import { pool, query } from './db.js';
import { treatmentsPage } from '../src/data/treatments.js';

const categories = treatmentsPage?.categories || [];

// slug -> category id
const slugToCat = {};
for (const c of categories) {
  for (const t of c.treatments || []) slugToCat[t.slug] = c.id;
}

console.log('Categories:');
for (const c of categories) console.log(`  ${c.id}  |  ${c.title}`);

const { rows } = await query('SELECT id, slug, data FROM treatments');
let updated = 0;
for (const r of rows) {
  const cat = slugToCat[r.slug] || r.data?.category || null;
  if (cat && r.data?.category !== cat) {
    const data = { ...r.data, category: cat };
    await query('UPDATE treatments SET data = $1, updated_at = now() WHERE id = $2', [JSON.stringify(data), r.id]);
    updated++;
  }
}
console.log(`\nBackfilled category on ${updated} treatment(s).`);
await pool.end();
process.exit(0);

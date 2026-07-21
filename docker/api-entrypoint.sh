#!/bin/sh
set -e

echo "Waiting for the database…"
until node -e "const {Client}=require('pg');const c=new Client({connectionString:process.env.DATABASE_URL});c.connect().then(()=>c.end()).then(()=>process.exit(0)).catch(()=>process.exit(1))"; do
  echo "  db not ready, retrying in 2s…"
  sleep 2
done
echo "Database is ready."

echo "Running migrations…"
node server/migrate.js

echo "Seeding content (idempotent — only empty tables are populated)…"
node --import ./server/seed/register.mjs server/seed/seed.js || echo "Seed step skipped/failed; continuing."

echo "Starting API…"
exec "$@"

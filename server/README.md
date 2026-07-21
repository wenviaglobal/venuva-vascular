# Venuva Vascular — Admin CMS

A content-management layer added on top of the existing React + Vite site. Admins
edit all site content from `/admin`; the public pages fetch it live from the API
(with the original static data kept as a fallback so the site never breaks).

## Stack

- **PostgreSQL 16** — dedicated Docker container `venuva-vascular-db` (host `127.0.0.1:5434`).
- **Express API** (`server.js` + `server/*.js`) on port **3002** (PM2 process `venuva-vascular`).
- **Admin UI** — React routes under `/admin` (`src/admin/*`), lazy-loaded, JWT auth.
- **Public data layer** — `src/context/ContentContext.jsx` fetches `/api/content/*` and `/api/settings`.

## Data model

One table per content collection (`treatments`, `doctors`, `blogs`, `services`,
`faqs`), each `{ id, slug, title, sort_order, published, data(jsonb) }`. Rich/nested
fields live in `data`. Singletons (`contact`, `social`, `theme`, `general`) live in
the `settings` key/value table. Admin user creds in `admin_users` (bcrypt).

## Environment (in `.env` / `ecosystem.config.cjs`)

    DATABASE_URL=postgres://venuva:***@127.0.0.1:5434/venuva
    JWT_SECRET=***
    ADMIN_EMAIL=admin@venuvavascular.com
    ADMIN_PASSWORD=***          # only used to bootstrap / reset the admin user
    UPLOAD_DIR=public/uploads

## Commands

    npm run db:migrate     # create tables + bootstrap admin user
    npm run db:seed        # import existing src/data content into the DB (idempotent; --force to overwrite)
    npm run admin:reset    # reset admin password to ADMIN_EMAIL/ADMIN_PASSWORD
    npm run server         # run the API (PM2 runs this in prod)
    npm run dev            # vite dev server (proxies /api + /uploads to :3002)
    npm run build          # vite build + prerender

Local dev needs **both** `npm run server` and `npm run dev`; open http://localhost:5174/admin.

## Production (Docker)

The whole stack is containerized (`docker-compose.yml`):

- **venuva-db** — Postgres 16 (volume `venuva-vascular-pgdata`, internal only).
- **venuva-api** — the Express API; on boot it waits for the DB, runs migrate + seed
  (idempotent), then serves. Uploads persist in volume `venuva-vascular-uploads`.
- **venuva-web** — nginx serving the prerendered `dist/`, proxying `/api` + `/uploads`
  to the API. Published on `127.0.0.1:8095`.

Host nginx terminates TLS and reverse-proxies both domains to the container:

    # venuvavascular.com  -> proxy_pass http://127.0.0.1:8095  (public site + API)
    # admin.venuvavascular.com -> proxy_pass http://127.0.0.1:8095, `/` 302s to /admin

Deploy / update:

    docker compose build      # rebuilds frontend (Vite + prerender via Chromium)
    docker compose up -d       # recreates changed containers

`/cms-assets/*` (seeded images) are baked into the web image. After **content** edits
nothing needs rebuilding — pages fetch live; rebuild only to refresh the prerendered
SEO HTML or after code changes.

## Backups

    docker exec venuva-vascular-db pg_dump -U venuva venuva > backup.sql
    # uploaded images live in public/uploads (not in git) — back these up too.

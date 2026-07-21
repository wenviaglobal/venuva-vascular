# syntax=docker/dockerfile:1

# ─────────────────────────────────────────────────────────────────────────────
# Stage 1 — build the frontend (Vite build + Puppeteer prerender for SEO).
# Uses the system Chromium so we don't download a second copy.
# ─────────────────────────────────────────────────────────────────────────────
FROM node:20-bookworm AS build
WORKDIR /app
ENV PUPPETEER_SKIP_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium
RUN apt-get update \
    && apt-get install -y --no-install-recommends chromium fonts-liberation ca-certificates \
    && rm -rf /var/lib/apt/lists/*
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ─────────────────────────────────────────────────────────────────────────────
# Stage 2 — production dependencies for the API only.
# ─────────────────────────────────────────────────────────────────────────────
FROM node:20-bookworm-slim AS apideps
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

# ─────────────────────────────────────────────────────────────────────────────
# Stage 3 — API runtime (Express + Postgres client + mailer).
# ─────────────────────────────────────────────────────────────────────────────
FROM node:20-bookworm-slim AS api
WORKDIR /app
ENV NODE_ENV=production
COPY --from=apideps /app/node_modules ./node_modules
COPY package*.json ./
COPY server.js ./server.js
COPY server ./server
COPY api ./api
COPY src/data ./src/data
COPY docker/api-entrypoint.sh /usr/local/bin/api-entrypoint.sh
RUN chmod +x /usr/local/bin/api-entrypoint.sh && mkdir -p public/uploads
EXPOSE 3002
ENTRYPOINT ["/usr/local/bin/api-entrypoint.sh"]
CMD ["node", "server.js"]

# ─────────────────────────────────────────────────────────────────────────────
# Stage 4 — web server (nginx serving the prerendered static site).
# ─────────────────────────────────────────────────────────────────────────────
FROM nginx:alpine AS web
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80

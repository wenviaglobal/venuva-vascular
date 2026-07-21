import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'node:path';
import sendEmailHandler from './api/send-email.js';
import bookAppointmentHandler from './api/book-appointment.js';
import { requireAuth, login, changePassword } from './server/auth.js';
import { upload, uploadHandler } from './server/uploads.js';
import { publicContentRouter, adminCollectionRouter } from './server/collections.js';
import { publicSettingsRouter, adminSettingsRouter } from './server/settings.js';

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json({ limit: '4mb' }));
app.use(cookieParser());

// Serve admin-uploaded images. In production, nginx should proxy /uploads → this server.
app.use(
  '/uploads',
  express.static(path.resolve(process.cwd(), process.env.UPLOAD_DIR || 'public/uploads')),
);

// ── Existing lead/mail endpoints ───────────────────────────────────────────
app.post('/api/send-email', (req, res) => sendEmailHandler(req, res));
app.post('/api/book-appointment', (req, res) => bookAppointmentHandler(req, res));

// ── Public content API (read-only, published only) ─────────────────────────
app.use('/api/content', publicContentRouter);
app.use('/api/settings', publicSettingsRouter);

// ── Admin auth ─────────────────────────────────────────────────────────────
app.post('/api/admin/login', (req, res) => login(req, res));
app.get('/api/admin/me', requireAuth, (req, res) => res.json({ user: req.user }));
app.post('/api/admin/change-password', requireAuth, (req, res) => changePassword(req, res));

// ── Admin protected: content CRUD, settings, image upload ──────────────────
app.use('/api/admin/content', requireAuth, adminCollectionRouter);
app.use('/api/admin/settings', requireAuth, adminSettingsRouter);
app.post('/api/admin/upload', requireAuth, upload.single('file'), uploadHandler);

// JSON error handler (multer file-type/size errors, bad JSON, etc.)
app.use((err, _req, res, _next) => {
  console.error('API error:', err.message);
  res.status(err.status || 400).json({ error: err.message || 'Request failed' });
});

app.listen(PORT, () => {
  console.log(`Venuva API server running on port ${PORT}`);
});

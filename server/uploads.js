import path from 'node:path';
import fs from 'node:fs';
import crypto from 'node:crypto';
import multer from 'multer';

const UPLOAD_DIR = path.resolve(process.cwd(), process.env.UPLOAD_DIR || 'public/uploads');
fs.mkdirSync(UPLOAD_DIR, { recursive: true });

const ALLOWED = new Set(['.webp', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.avif']);

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOAD_DIR),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const base = path
      .basename(file.originalname, ext)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 40) || 'img';
    const rand = crypto.randomBytes(6).toString('hex');
    cb(null, `${base}-${rand}${ext}`);
  },
});

export const upload = multer({
  storage,
  limits: { fileSize: 8 * 1024 * 1024 }, // 8 MB
  fileFilter: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (!ALLOWED.has(ext)) return cb(new Error('Unsupported file type'));
    cb(null, true);
  },
});

// Handler for a single-file upload: returns the public URL the browser should use.
export function uploadHandler(req, res) {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  return res.json({ url: `/uploads/${req.file.filename}`, filename: req.file.filename });
}

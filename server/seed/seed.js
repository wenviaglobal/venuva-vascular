import 'dotenv/config';
import { pool, query } from '../db.js';
import { treatmentsPage } from '../../src/data/treatments.js';
import { doctorsSection } from '../../src/data/team.js';
import { blogPosts } from '../../src/data/blog.js';
import { heroSlides } from '../../src/data/home.js';

const FORCE = process.argv.includes('--force');

const slugify = (s) =>
  String(s || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

async function isEmpty(table) {
  const { rows } = await query(`SELECT count(*)::int AS n FROM ${table}`);
  return rows[0].n === 0;
}

async function seedCollection(table, rows) {
  if (!FORCE && !(await isEmpty(table))) {
    console.log(`• ${table}: already populated — skipping (use --force to overwrite).`);
    return;
  }
  let n = 0;
  for (let i = 0; i < rows.length; i++) {
    const r = rows[i];
    await query(
      `INSERT INTO ${table} (slug, title, sort_order, published, data)
       VALUES ($1, $2, $3, $4, $5)
       ON CONFLICT (slug) DO UPDATE
         SET title = EXCLUDED.title, sort_order = EXCLUDED.sort_order,
             published = EXCLUDED.published, data = EXCLUDED.data, updated_at = now()`,
      [r.slug, r.title, r.sort_order ?? i, r.published ?? true, JSON.stringify(r.data)],
    );
    n++;
  }
  console.log(`✓ ${table}: seeded ${n} rows.`);
}

async function seedSetting(key, value) {
  await query(
    `INSERT INTO settings (key, value) VALUES ($1, $2)
     ON CONFLICT (key) DO ${FORCE ? 'UPDATE SET value = EXCLUDED.value, updated_at = now()' : 'NOTHING'}`,
    [key, JSON.stringify(value)],
  );
  console.log(`✓ settings.${key} ensured.`);
}

async function main() {
  // ── Treatments (from specialties detail records) ─────────────────────────
  const specialties = treatmentsPage?.specialties || [];
  await seedCollection(
    'treatments',
    specialties.map((s, i) => ({
      slug: s.id || slugify(s.title),
      title: s.title || s.heading || s.id,
      sort_order: i,
      data: s,
    })),
  );

  // ── Doctors ──────────────────────────────────────────────────────────────
  const doctors = doctorsSection?.doctors || [];
  await seedCollection(
    'doctors',
    doctors.map((d, i) => ({
      slug: d.slug || slugify(d.name),
      title: d.name,
      sort_order: i,
      data: d,
    })),
  );

  // ── Blogs ──────────────────────────────────────────────────────────────
  await seedCollection(
    'blogs',
    (blogPosts || []).map((p, i) => ({
      slug: slugify(p.title) || `blog-${p.id ?? i}`,
      title: p.title,
      sort_order: i,
      data: p,
    })),
  );

  // ── Home hero slides ──────────────────────────────────────────────────────
  await seedCollection(
    'hero',
    (heroSlides || []).map((s, i) => ({
      slug: `hero-${i + 1}`,
      title: s.heading || s.subheading || `Slide ${i + 1}`,
      sort_order: i,
      data: s,
    })),
  );

  // ── Services (previously hardcoded in ServicesPage.jsx) ───────────────────
  const services = [
    { title: '24/7 Emergency Care', desc: 'Immediate intervention for vascular emergencies, DVT, and acute conditions with a dedicated hotline.', icon: 'Clock', color: 'bg-rose-50 text-rose-600' },
    { title: 'Day Care Surgery', desc: 'Minimally invasive procedures that allow you to return home on the same day as your treatment.', icon: 'Zap', color: 'bg-amber-50 text-amber-600' },
    { title: 'Advanced Diagnostics', desc: 'State-of-the-art imaging including 4D Ultrasound, Doppler, and CT Angiography.', icon: 'Microscope', color: 'bg-blue-50 text-blue-600' },
    { title: 'International Patient Desk', desc: 'Personalized assistance for global patients including travel, accommodation, and documentation.', icon: 'Shield', color: 'bg-amber-50 text-amber-600' },
    { title: 'Specialist Consultation', desc: 'Direct access to top interventional radiologists and vascular specialists for second opinions.', icon: 'Stethoscope', color: 'bg-purple-50 text-purple-600' },
    { title: 'Post-Op Home Care', desc: 'Dedicated recovery support and tele-consultation follow-ups to ensure long-term clinical success.', icon: 'Heart', color: 'bg-pink-50 text-pink-600' },
  ];
  await seedCollection(
    'services',
    services.map((s, i) => ({ slug: slugify(s.title), title: s.title, sort_order: i, data: s })),
  );

  // ── FAQs (global — previously hardcoded in FAQPage.jsx) ───────────────────
  const faqs = [
    { q: 'What is Interventional Radiology?', a: 'Interventional Radiology (IR) is a medical specialty that uses image-guided procedures (like X-rays, ultrasound, or CT) to treat diseases minimally invasively. It often replaces the need for open surgery, resulting in less pain and faster recovery.' },
    { q: 'Is local or general anesthesia used for these procedures?', a: "Most interventional procedures are performed under local anesthesia and conscious sedation. This means you stay relaxed and comfortable but typically don't require full general anesthesia, allowing for quicker discharge." },
    { q: 'How long does the recovery take after Varicose Vein Laser treatment?', a: 'Recovery is very fast. Most patients can walk immediately after the procedure and return to light office work the next day. Strenuous exercise is typically avoided for about 7-10 days.' },
    { q: 'Does UFE affect the ability to get pregnant?', a: "While many women have had successful pregnancies after Uterine Fibroid Embolization (UFE), it's important to discuss your fertility goals with your specialist. UFE is often chosen as a uterus-sparing alternative to hysterectomy." },
    { q: 'Are these procedures covered by health insurance?', a: 'Yes, many vascular and interventional radiology treatments are covered by standard health insurance plans and TPAs. Our billing desk can help you with the pre-authorization process.' },
    { q: 'What should I bring for my first consultation?', a: 'Please bring any previous imaging reports (Ultrasound, CT, MRI scans), current list of medications, and your insurance card to ensure a comprehensive evaluation.' },
  ];
  await seedCollection(
    'faqs',
    faqs.map((f, i) => ({
      slug: `faq-general-${i + 1}`,
      title: f.q,
      sort_order: i,
      data: { question: f.q, answer: f.a, category: 'general' },
    })),
  );

  // ── Settings singletons ──────────────────────────────────────────────────
  await seedSetting('general', {
    brandName: 'VENUVA VASCULAR',
    tagline: 'Leading the Way in Medical Excellence',
  });

  await seedSetting('contact', {
    emergencyPhone: '(+91) 90199 00716',
    workHours: '09:00 - 20:00 Everyday',
    location: 'Padma Apartments, Malleshwaram, Bengaluru 560003',
    address: 'Padma Apartments',
    addressDetail: 'No.38, 8th Cross road, 5th Main Rd, Malleshwaram, Bengaluru, Karnataka 560003',
    whatsapp: '+91-9019900716',
    phones: ['+91-9019900716'],
    email: 'venuvavascular@gmail.com',
  });

  await seedSetting('social', {
    facebook: 'https://www.facebook.com/venuvavascular',
    instagram: 'https://www.instagram.com/venuvavascular',
    youtube: 'https://www.youtube.com/venuvavascular',
    whatsapp: 'https://wa.me/919019900716',
  });

  await seedSetting('theme', {
    colors: {
      'hospital-navy': '#1E1B4B',
      'hospital-dark-navy': '#0F172A',
      'hospital-teal': '#0891B2',
      'hospital-jade': '#0284C7',
      'hospital-mint': '#F0F9FF',
      'hospital-soft-blue': '#F8FAFC',
      'hospital-emerald': '#10B981',
      'hospital-slate': '#64748B',
      'hospital-charcoal': '#334155',
      'hospital-sun': '#F59E0B',
    },
  });

  console.log('\nSeed complete.');
}

main()
  .then(() => pool.end())
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('Seed failed:', err);
    process.exit(1);
  });

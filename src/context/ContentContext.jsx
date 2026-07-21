import { createContext, useContext, useEffect, useState } from 'react';
import { treatmentsPage } from '../data/treatments';
import { doctorsSection } from '../data/team';
import { blogPosts } from '../data/blog';
import { heroSlides } from '../data/home';
import { header, footer, socialLinks } from '../data/hospital';

// Static fallbacks — used for the prerendered HTML, first paint, and any time the
// content API is unreachable. Once the API responds, live DB content replaces these.
const FALLBACK = {
  hero: heroSlides || [],
  treatments: treatmentsPage?.specialties || [],
  doctors: doctorsSection?.doctors || [],
  blogs: blogPosts || [],
  services: [
    { title: '24/7 Emergency Care', desc: 'Immediate intervention for vascular emergencies, DVT, and acute conditions with a dedicated hotline.', icon: 'Clock', color: 'bg-rose-50 text-rose-600' },
    { title: 'Day Care Surgery', desc: 'Minimally invasive procedures that allow you to return home on the same day as your treatment.', icon: 'Zap', color: 'bg-amber-50 text-amber-600' },
    { title: 'Advanced Diagnostics', desc: 'State-of-the-art imaging including 4D Ultrasound, Doppler, and CT Angiography.', icon: 'Microscope', color: 'bg-blue-50 text-blue-600' },
    { title: 'International Patient Desk', desc: 'Personalized assistance for global patients including travel, accommodation, and documentation.', icon: 'Shield', color: 'bg-amber-50 text-amber-600' },
    { title: 'Specialist Consultation', desc: 'Direct access to top interventional radiologists and vascular specialists for second opinions.', icon: 'Stethoscope', color: 'bg-purple-50 text-purple-600' },
    { title: 'Post-Op Home Care', desc: 'Dedicated recovery support and tele-consultation follow-ups to ensure long-term clinical success.', icon: 'Heart', color: 'bg-pink-50 text-pink-600' },
  ],
  faqs: [
    { question: 'What is Interventional Radiology?', answer: 'Interventional Radiology (IR) is a medical specialty that uses image-guided procedures (like X-rays, ultrasound, or CT) to treat diseases minimally invasively. It often replaces the need for open surgery, resulting in less pain and faster recovery.' },
    { question: 'Is local or general anesthesia used for these procedures?', answer: "Most interventional procedures are performed under local anesthesia and conscious sedation. This means you stay relaxed and comfortable but typically don't require full general anesthesia, allowing for quicker discharge." },
    { question: 'How long does the recovery take after Varicose Vein Laser treatment?', answer: 'Recovery is very fast. Most patients can walk immediately after the procedure and return to light office work the next day. Strenuous exercise is typically avoided for about 7-10 days.' },
    { question: 'Does UFE affect the ability to get pregnant?', answer: "While many women have had successful pregnancies after Uterine Fibroid Embolization (UFE), it's important to discuss your fertility goals with your specialist. UFE is often chosen as a uterus-sparing alternative to hysterectomy." },
    { question: 'Are these procedures covered by health insurance?', answer: 'Yes, many vascular and interventional radiology treatments are covered by standard health insurance plans and TPAs. Our billing desk can help you with the pre-authorization process.' },
    { question: 'What should I bring for my first consultation?', answer: 'Please bring any previous imaging reports (Ultrasound, CT, MRI scans), current list of medications, and your insurance card to ensure a comprehensive evaluation.' },
  ],
  settings: {
    contact: {
      emergencyPhone: header?.emergency,
      workHours: header?.workHours,
      location: header?.location,
      address: footer?.contactUs?.address,
      addressDetail: footer?.contactUs?.addressDetail,
      whatsapp: footer?.contactUs?.whatsapp,
      email: footer?.contactUs?.email,
      phones: footer?.contactUs?.phones || [],
    },
    social: socialLinks || {},
    theme: {},
  },
};

const ContentContext = createContext(FALLBACK);

const COLLECTIONS = ['hero', 'treatments', 'doctors', 'blogs', 'services', 'faqs'];

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(String(res.status));
  return res.json();
}

export function ContentProvider({ children }) {
  const [state, setState] = useState(FALLBACK);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      // Collections: replace a key only if the API returns a non-empty list.
      const next = { ...FALLBACK, settings: { ...FALLBACK.settings } };
      await Promise.all(
        COLLECTIONS.map(async (c) => {
          try {
            const data = await fetchJson(`/api/content/${c}`);
            if (Array.isArray(data) && data.length) next[c] = data;
          } catch { /* keep fallback */ }
        }),
      );
      try {
        const settings = await fetchJson('/api/settings');
        next.settings = { ...next.settings, ...settings };
      } catch { /* keep fallback */ }

      if (!cancelled) setState(next);
    })();

    return () => { cancelled = true; };
  }, []);

  return (
    <ContentContext.Provider value={state}>
      <ThemeApplier />
      {children}
    </ContentContext.Provider>
  );
}

// Applies admin-managed colors by overriding Tailwind v4's --color-* tokens on
// :root. v4 utilities resolve these vars at runtime, so the site recolors live.
function ThemeApplier() {
  const theme = useContext(ContentContext).settings?.theme;
  useEffect(() => {
    const colors = theme?.colors || {};
    for (const [name, hex] of Object.entries(colors)) {
      if (hex) document.documentElement.style.setProperty(`--color-${name}`, hex);
    }
  }, [theme]);
  return null;
}

export const useContent = () => useContext(ContentContext);
export const useCollection = (name) => useContent()[name] || [];
export const useSettings = (key) => useContent().settings?.[key] || {};

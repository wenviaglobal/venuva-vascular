import { Stethoscope, Users, Newspaper, Wrench, HelpCircle, GalleryHorizontal } from 'lucide-react';
import { COLOR_PAIRS, TEXT_COLORS } from './fields';

// Collections shown in the sidebar + how each maps to a public preview URL.
export const COLLECTIONS_META = [
  { key: 'hero', label: 'Home Hero', singular: 'Hero Slide', icon: GalleryHorizontal, preview: () => `/` },
  { key: 'treatments', label: 'Treatments', singular: 'Treatment', icon: Stethoscope, preview: (slug) => `/treatments/${slug}` },
  { key: 'doctors', label: 'Doctors', singular: 'Doctor', icon: Users, preview: (slug) => `/doctors/${slug}` },
  { key: 'blogs', label: 'Blog Posts', singular: 'Blog Post', icon: Newspaper, preview: () => `/blog` },
  { key: 'services', label: 'Services', singular: 'Service', icon: Wrench, preview: () => `/services` },
  { key: 'faqs', label: 'FAQs', singular: 'FAQ', icon: HelpCircle, preview: () => `/faq` },
];

export const metaFor = (key) => COLLECTIONS_META.find((c) => c.key === key);

// Treatment categories — controls grouping in the navbar mega-menu + treatments page.
export const TREATMENT_CATEGORIES = [
  { value: 'vascular-care', label: 'Vascular Care' },
  { value: 'womens-health', label: "Women's Health" },
  { value: 'mens-health', label: "Men's Health" },
  { value: 'specialized-interventions', label: 'Specialized Care' },
  { value: 'pain-management', label: 'Pain Management' },
  { value: 'interventional-oncology', label: 'Interventional Oncology' },
];

// Friendly editors for each collection's `data`. Unlisted fields are still
// editable via the "Raw JSON" tab, so nothing is ever locked out.
export const FIELD_SCHEMAS = {
  hero: [
    { key: 'image', label: 'Background Image', type: 'image' },
    { key: 'subheading', label: 'Subheading', type: 'text' },
    { key: 'heading', label: 'Heading', type: 'textarea' },
    { key: 'description', label: 'Description', type: 'textarea' },
    { key: 'stats', label: 'Stats', type: 'objectList', itemFields: [
      { key: 'label', label: 'Label', type: 'text' },
      { key: 'value', label: 'Value', type: 'text' },
      { key: 'suffix', label: 'Suffix', type: 'text' },
      { key: 'icon', label: 'Icon', type: 'icon' },
      { key: 'color', label: 'Color', type: 'color', options: TEXT_COLORS },
    ] },
  ],
  treatments: [
    { key: 'image', label: 'Main Image', type: 'image' },
    { key: 'title', label: 'Title', type: 'text' },
    { key: 'category', label: 'Category', type: 'select', options: TREATMENT_CATEGORIES, help: 'Groups this treatment in the navbar menu and treatments page.' },
    { key: 'heading', label: 'Heading', type: 'text' },
    { key: 'icon', label: 'Icon', type: 'icon' },
    { key: 'description', label: 'Short Description', type: 'textarea' },
    { key: 'fullContent', label: 'Overview', type: 'textarea' },
    { key: 'whatIs', label: 'Understanding the Condition', type: 'textarea' },
    { key: 'symptomsDetailed', label: 'Symptoms', type: 'stringList' },
    { key: 'causes', label: 'Causes', type: 'stringList' },
    { key: 'whyImportant', label: 'Why It Matters', type: 'stringList' },
    { key: 'riskFactors', label: 'Risk Factors', type: 'stringList' },
    { key: 'treatmentOptions', label: 'Treatment Options', type: 'objectList', itemFields: [
      { key: 'name', label: 'Name', type: 'text' },
      { key: 'desc', label: 'Description', type: 'textarea' },
    ] },
    { key: 'procedureSteps', label: 'Procedure Steps', type: 'objectList', itemFields: [
      { key: 'step', label: 'Step', type: 'text' },
      { key: 'detail', label: 'Detail', type: 'textarea' },
    ] },
    { key: 'benefits', label: 'Benefits', type: 'stringList' },
    { key: 'lifestyleChanges', label: 'Lifestyle Changes', type: 'stringList' },
    { key: 'medications', label: 'Medications', type: 'stringList' },
    { key: 'recovery', label: 'Recovery', type: 'textarea' },
    { key: 'faqs', label: 'FAQs (this treatment)', type: 'objectList', itemFields: [
      { key: 'q', label: 'Question', type: 'text' },
      { key: 'a', label: 'Answer', type: 'textarea' },
    ] },
  ],
  doctors: [
    { key: 'image', label: 'Photo', type: 'image' },
    { key: 'name', label: 'Name', type: 'text' },
    { key: 'specialty', label: 'Specialty', type: 'text' },
    { key: 'role', label: 'Role', type: 'text' },
    { key: 'experience', label: 'Experience', type: 'text' },
    { key: 'bio', label: 'Short Bio', type: 'textarea' },
    { key: 'certifications', label: 'Certifications', type: 'stringList' },
    { key: 'achievements', label: 'Achievements', type: 'stringList' },
    { key: 'focus', label: 'Focus Areas', type: 'stringList' },
    { key: 'linkedin', label: 'LinkedIn URL', type: 'text' },
    { key: 'twitter', label: 'Twitter URL', type: 'text' },
    { key: 'tabs.biography', label: 'Full Biography', type: 'textarea' },
    { key: 'tabs.expertise', label: 'Expertise', type: 'stringList' },
    { key: 'tabs.education', label: 'Education', type: 'stringList' },
    { key: 'tabs.publications', label: 'Publications', type: 'stringList' },
    { key: 'tabs.memberships', label: 'Memberships', type: 'stringList' },
  ],
  blogs: [
    { key: 'image', label: 'Cover Image', type: 'image' },
    { key: 'title', label: 'Title', type: 'text' },
    { key: 'category', label: 'Category', type: 'text' },
    { key: 'author', label: 'Author', type: 'text' },
    { key: 'date', label: 'Date', type: 'text', help: 'e.g. April 05, 2026' },
    { key: 'hook', label: 'Hook', type: 'textarea' },
    { key: 'excerpt', label: 'Excerpt', type: 'textarea' },
    { key: 'content', label: 'Content', type: 'textarea', big: true },
    { key: 'cta', label: 'Call To Action', type: 'text' },
  ],
  services: [
    { key: 'title', label: 'Title', type: 'text' },
    { key: 'desc', label: 'Description', type: 'textarea' },
    { key: 'icon', label: 'Icon', type: 'icon' },
    { key: 'color', label: 'Color', type: 'color', options: COLOR_PAIRS },
  ],
  faqs: [
    { key: 'question', label: 'Question', type: 'text' },
    { key: 'answer', label: 'Answer', type: 'textarea' },
    { key: 'category', label: 'Category', type: 'text', help: 'general, or a treatment slug' },
  ],
};

// Field used as the list-row title for each collection.
export const TITLE_FIELD = {
  hero: 'heading', treatments: 'title', doctors: 'name', blogs: 'title', services: 'title', faqs: 'question',
};

import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { treatmentsPage, header } from "../data";
import {
  CheckCircle2,
  Calendar,
  ArrowLeft,
  ChevronRight,
  Phone,
  Droplets,
  Activity,
  Dna,
  Stethoscope,
  HeartPulse,
  Zap,
  Bone,
  Smile,
  Users
} from "lucide-react";
import SEO from "../components/utils/SEO";

const iconMap = {
  Droplets, Activity, Dna, Stethoscope,
  HeartPulse, Zap, Bone, Smile
};

const treatmentSEO = {
  "varicose-veins": {
    title: "Varicose Veins Treatment | EVLA & Minimally Invasive Care | Venuva Vascular Center",
    description: "Get relief from varicose veins at Venuva Vascular Center. Our minimally invasive EVLA and Venaseal treatments provide fast recovery, high success, and improved leg circulation."
  },
  "thyroid-ablation": {
    title: "Thyroid Nodule Embolization | Non-Surgical Thyroid Treatment | Venuva Vascular Center",
    description: "Reduce benign thyroid nodules safely with minimally invasive embolization at Venuva Vascular Center. Preserve thyroid function and avoid surgery with expert care."
  },
  "ufe": {
    title: "Uterine Fibroid Embolization (UFE) | Non-Surgical Fibroid Treatment | Venuva Vascular Center",
    description: "Treat uterine fibroids effectively with non-surgical uterine artery embolization at Venuva Vascular Center. Enjoy quick recovery, minimal discomfort, and long-lasting relief."
  },
  "varicocele": {
    title: "Varicocele Embolization | Fertility-Preserving Treatment | Venuva Vascular Center",
    description: "Preserve fertility and treat varicocele with minimally invasive embolization at Venuva Vascular Center. Safe, fast, and effective procedure with high success rates."
  },
  "dvt": {
    title: "Deep Vein Thrombosis (DVT) Treatment | Catheter-Directed Thrombolysis | Venuva Vascular Center",
    description: "Restore healthy leg circulation with catheter-directed thrombolysis for DVT at Venuva Vascular Center. Minimize complications with minimally invasive, high-success treatment."
  },
  "peripheral-angioplasty": {
    title: "Peripheral Vascular Disease (PVD) Treatment | Angioplasty & Stenting | Venuva Vascular Center",
    description: "Treat blocked leg arteries safely with pinhole angioplasty and stenting at Venuva Vascular Center. Improve blood flow, reduce pain, and regain mobility."
  },
  "pain-intervention": {
    title: "Pain Interventions | Minimally Invasive Pain Management | Venuva Vascular Center",
    description: "Relieve chronic pain with minimally invasive pain interventions at Venuva Vascular Center. Expert nerve blocks, RFA, and joint injections for fast, effective results."
  }
};

const TreatmentDetail = () => {
  const { id } = useParams();
  const { specialties, categories } = treatmentsPage;

  // Find the treatment
  const treatment = specialties.find(s => s.id === id);
  if (!treatment) return <Navigate to="/treatments" replace />;

  // Find category for sidebar/breadcrumbs
  const category = categories.find(cat =>
    cat.treatments.some(t => t.slug === id)
  );

  const Icon = iconMap[treatment.icon] || Stethoscope;

  // Get related treatments from same category
  const relatedTreatments = category
    ? category.treatments
      .filter(t => t.slug !== id)
      .map(t => specialties.find(s => s.id === t.slug))
      .filter(Boolean)
    : [];

  const currentSEO = treatmentSEO[id] || { title: treatment.title, description: treatment.description };

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title={currentSEO.title}
        description={currentSEO.description}
      />
      {/* ── 1. Hero Section ── */}
      <section className="relative pt-12 pb-0 overflow-hidden bg-hospital-navy">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 mb-10 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/treatments" className="hover:text-white transition-colors">Treatments</Link>
            <ChevronRight size={12} />
            {category && (
              <>
                <span className="text-slate-500">{category.title}</span>
                <ChevronRight size={12} />
              </>
            )}
            <span className="text-hospital-sky-blue">{treatment.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end pb-20">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase">
                <Icon size={14} className="text-hospital-sky-blue" />
                {category?.title || "Specialized Treatment"}
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tighter">
                {treatment.title}
              </h1>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
                {treatment.description}
              </p>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="bg-hospital-sky-blue text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl inline-flex items-center gap-4 hover:bg-white hover:text-hospital-navy transition-all"
                >
                  <Calendar size={18} /> Schedule Consultation
                </Link>
              </div>
            </div>

            {/* Right Hero Image (Navkiran style overlap) */}
            <div className="hidden lg:flex justify-end translate-y-20 relative">
              <div className="relative w-full max-w-[500px]">
                {/* Glow ring */}
                <div className="absolute -inset-4 rounded-[3rem] bg-hospital-sky-blue/20 blur-2xl" />
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="relative w-full h-[400px] object-cover rounded-t-[3rem] border-4 border-white shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Main Layout (70/30 Split) ── */}
      <section className="pt-32 pb-24 bg-slate-50/50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* LEFT: Content (70%) */}
            <div className="lg:w-[68%] space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-sm space-y-12"
              >
                {/* 1. Overview */}
                <div className="prose prose-slate max-w-none">
                  <h2 className="text-2xl md:text-3xl font-black text-hospital-navy uppercase tracking-tight mb-8">
                    {treatment.heading || "About the Procedure"}
                  </h2>
                  <p className="text-slate-500 text-lg leading-relaxed font-medium mb-6">
                    {treatment.fullContent || treatment.description}
                  </p>
                  {treatment.whatIs && (
                    <div className="bg-slate-50 p-8 rounded-3xl border-l-4 border-hospital-sky-blue mb-10">
                      <h4 className="text-sm font-black text-hospital-navy uppercase tracking-widest mb-4">Understanding the Condition</h4>
                      <p className="text-slate-600 font-medium leading-relaxed">{treatment.whatIs}</p>
                    </div>
                  )}
                </div>

                {/* 2. Symptoms & Risks (if available) */}
                {(treatment.symptomsDetailed || treatment.whyImportant) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {treatment.symptomsDetailed && (
                      <div className="space-y-6">
                        <h3 className="text-xl font-black text-hospital-navy uppercase tracking-widest">Common Symptoms</h3>
                        <ul className="space-y-3">
                          {treatment.symptomsDetailed.map((s, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-500 font-medium">
                              <span className="w-2 h-2 rounded-full bg-hospital-sky-blue"></span>
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {treatment.whyImportant && (
                      <div className="space-y-6">
                        <h3 className="text-xl font-black uppercase tracking-widest text-red-600">Risks of Ignoring</h3>
                        <ul className="space-y-3">
                          {treatment.whyImportant.map((r, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-500 font-medium">
                              <span className="w-2 h-2 rounded-full bg-red-400"></span>
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* 3. Advanced Treatment Options (Specific to Varicose Veins type layouts) */}
                {treatment.treatmentOptions && (
                  <div className="space-y-8 pt-6">
                    <h3 className="text-2xl font-black text-hospital-navy uppercase tracking-tight">Advanced Treatment Options</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {treatment.treatmentOptions.map((opt, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-hospital-sky-blue transition-all">
                          <h4 className="font-black text-hospital-navy uppercase tracking-wider mb-2 group-hover:text-hospital-sky-blue transition-colors">
                            {i + 1}. {opt.name}
                          </h4>
                          <p className="text-slate-500 text-sm font-medium leading-relaxed">{opt.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. Procedure Steps (Numerical or Step-based) */}
                {treatment.procedureSteps && (
                  <div className="space-y-8 pt-6">
                    <h3 className="text-2xl font-black text-hospital-navy uppercase tracking-tight">How the Procedure Works</h3>
                    <div className="space-y-6">
                      {treatment.procedureSteps.map((s, i) => (
                        <div key={i} className="flex gap-6 items-start">
                          <div className="w-12 h-12 shrink-0 rounded-2xl bg-hospital-navy text-white flex items-center justify-center font-black text-lg shadow-lg">
                            {s.step.replace(/[^0-9]/g, '') || i + 1}
                          </div>
                          <div>
                            <h4 className="font-black text-hospital-navy uppercase tracking-widest text-sm mb-2">{s.step}</h4>
                            <p className="text-slate-500 font-medium leading-relaxed">{s.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 5. Key Benefits (Always visible) */}
                <div className="space-y-8 pt-6">
                  <h3 className="text-2xl font-black text-hospital-navy uppercase tracking-tight">
                    {treatment.id === 'varicose-veins' ? "Why Choose Venuva Vascular?" : "Key Benefits & Advantages"}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {treatment.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-4 bg-hospital-soft-blue/30 p-5 rounded-2xl border border-hospital-sky-blue/10">
                        <CheckCircle2 size={20} className="text-hospital-sky-blue shrink-0" />
                        <p className="font-bold text-hospital-navy text-[11px] uppercase tracking-widest">
                          {benefit}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 6. Recovery Info */}
                {treatment.recovery && (
                  <div className="bg-hospital-navy text-white p-8 rounded-4xl shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-12 translate-x-12" />
                    <h3 className="text-xl font-black uppercase tracking-tight mb-4 relative z-10">Recovery & Aftercare</h3>
                    <p className="text-slate-300 font-medium leading-relaxed relative z-10">
                      {treatment.recovery}
                    </p>
                  </div>
                )}

                {/* 7. FAQs */}
                {treatment.faqs && (
                  <div className="space-y-8 pt-6">
                    <h3 className="text-2xl font-black text-hospital-navy uppercase tracking-tight">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                      {treatment.faqs.map((faq, i) => (
                        <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-100">
                          <h4 className="font-black text-hospital-navy text-sm uppercase tracking-wider mb-3 flex gap-3">
                            <span className="text-hospital-sky-blue text-lg italic">Q.</span> {faq.q}
                          </h4>
                          <p className="text-slate-500 font-medium leading-relaxed pl-7 border-l border-slate-200">
                            {faq.a}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Related Treatments Grid */}
              {relatedTreatments.length > 0 && (
                <div className="space-y-8">
                  <h3 className="text-2xl font-black text-hospital-navy uppercase tracking-tight">
                    Related {category?.title} Procedures
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {relatedTreatments.map((t) => (
                      <Link
                        key={t.id}
                        to={`/treatments/${t.id}`}
                        className="group bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-6"
                      >
                        <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-hospital-navy group-hover:bg-hospital-navy group-hover:text-white transition-colors">
                          {iconMap[t.icon] ? (
                            <div className="shrink-0"><Icon size={24} /></div>
                          ) : <Stethoscope size={24} />}
                        </div>
                        <div>
                          <h4 className="font-black text-hospital-navy group-hover:text-hospital-sky-blue transition-colors uppercase tracking-tight text-sm">
                            {t.title}
                          </h4>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Learn More →</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Back to Treatments */}
              <div>
                <Link
                  to="/treatments"
                  className="inline-flex items-center gap-3 text-slate-400 hover:text-hospital-navy font-black text-[10px] uppercase tracking-widest transition-colors"
                >
                  <ArrowLeft size={14} /> Back to all Treatments
                </Link>
              </div>
            </div>

            {/* RIGHT: Sidebar (30%) */}
            <div className="lg:w-[32%] space-y-8">

              {/* Consultation Card */}
              <div className="bg-hospital-navy rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-4 relative z-10">
                  Book a Consultation
                </h3>
                <p className="text-slate-300 text-sm font-medium leading-relaxed mb-8 relative z-10">
                  Schedule an appointment with our specialists to discuss if {treatment.title} is right for you.
                </p>
                <Link
                  to="/contact"
                  className="bg-white text-hospital-navy w-full py-4 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-hospital-sky-blue hover:text-white transition-all shadow-lg"
                >
                  <Calendar size={16} /> Book Now
                </Link>
                <div className="mt-6 flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                  <Phone size={14} className="text-hospital-sky-blue" />
                  <span>Emergency: {header.emergency}</span>
                </div>
              </div>

              {/* Specialist Widget (Placeholder as seen in Navkiran) */}
              <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm space-y-6">
                <h3 className="text-sm font-black text-hospital-navy uppercase tracking-widest flex items-center gap-2">
                  <Users size={16} className="text-hospital-sky-blue" />
                  Our Specialists
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "Dr. Palaniswamy", role: "Vascular Specialist", img: "https://i.pravatar.cc/150?u=1" },
                    { name: "Dr. Pallovee", role: "Interventional Radiologist", img: "https://i.pravatar.cc/150?u=2" }
                  ].map((doc, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <img src={doc.img} alt={doc.name} className="w-12 h-12 rounded-full border-2 border-slate-50 shadow-sm" />
                      <div>
                        <p className="font-black text-hospital-navy text-[11px] uppercase tracking-tight leading-none mb-1">{doc.name}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{doc.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other Categories */}
              <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
                <h3 className="text-sm font-black text-hospital-navy uppercase tracking-widest mb-6">
                  Other Categories
                </h3>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to="/treatments"
                      className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between group ${category?.id === cat.id
                          ? 'bg-hospital-sky-blue-light border-hospital-sky-blue/20 text-hospital-sky-blue'
                          : 'bg-slate-50 border-transparent text-slate-500 hover:border-slate-200'
                        }`}
                    >
                      <span className="text-[10px] font-black uppercase tracking-widest">{cat.title}</span>
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreatmentDetail;

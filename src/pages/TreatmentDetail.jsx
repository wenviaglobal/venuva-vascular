import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import { useAppointment } from "../context/AppointmentContext";
import { motion } from "framer-motion";
import { treatmentsPage, header, doctorsSection } from "../data";
import SEO from "../components/utils/SEO";
import { treatmentSEO } from "../data/home";

const TreatmentDetail = () => {
  const { openModal } = useAppointment();
  const { id } = useParams();
  const { specialties, categories } = treatmentsPage;
  const team = doctorsSection.doctors

  // Find the treatment
  const treatment = specialties.find(s => s.id === id);
  if (!treatment) return <Navigate to="/treatments" replace />;

  // Find category for sidebar/breadcrumbs
  const category = categories.find(cat =>
    cat.treatments.some(t => t.slug === id)
  );

  // Get related treatments from same category
  const relatedTreatments = category
    ? category.treatments
      .filter(t => t.slug !== id)
      .map(t => specialties.find(s => s.id === t.slug))
      .filter(Boolean)
    : [];

  const currentSEO = treatmentSEO[id] || { title: treatment.title, description: treatment.description };

  return (
    <div className="bg-white min-h-screen whitespace-pre-line" >
      <SEO
        title={currentSEO.title}
        description={currentSEO.description}
      />
      {/* ── 1. Hero Section ── */}
      <section className="relative pt-12 pb-0 overflow-hidden bg-linear-to-br from-hospital-navy via-[#1e3a8a] to-[#0f4c81]">

        {/* Ambient Animated Glowing Meshes */}
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-160 h-160 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ y: [0, 40, 0], x: [0, -20, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-0 w-120 h-120 bg-hospital-sky-blue/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl pointer-events-none"
        />

        {/* Multiple Small Floating Bubbles  */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            { size: 4, x: '10%', y: '15%', duration: 6, delay: 0 },
            { size: 6, x: '82%', y: '10%', duration: 8, delay: 1 },
            { size: 3, x: '72%', y: '70%', duration: 7, delay: 2 },
            { size: 5, x: '25%', y: '60%', duration: 9, delay: 0.5 },
            { size: 2, x: '48%', y: '25%', duration: 5, delay: 1.5 },
            { size: 8, x: '15%', y: '80%', duration: 10, delay: 3 },
            { size: 4, x: '88%', y: '45%', duration: 8, delay: 2.5 },
            { size: 3, x: '55%', y: '75%', duration: 7, delay: 1.2 },
          ].map((bubble, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -40, 0],
                scale: [1, 1.2, 1],
                opacity: [0.03, 0.1, 0.03]
              }}
              transition={{ duration: bubble.duration, repeat: Infinity, ease: "easeInOut", delay: bubble.delay }}
              className="absolute bg-white rounded-full shadow-sm"
              style={{
                width: `${bubble.size}rem`,
                height: `${bubble.size}rem`,
                left: bubble.x,
                top: bubble.y
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10 ">
          {/* Breadcrumbs */}
          <nav className="flex items-center flex-wrap gap-4 mb-8 text-xs font-black uppercase tracking-[0.4em] text-white/60">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/treatments" className="hover:text-white transition-colors">Treatments</Link>
            {category && (
              <span className="text-white/80">{category.title}</span>
            )}
            <span className="text-hospital-sun">{treatment.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pb-16">
            {/* Left Content */}
            <div className="space-y-5">
              <div className="inline-flex items-center bg-white/10 text-white px-5 py-2 rounded-full text-xs font-black tracking-[0.4em] uppercase">
                {category?.title || "Specialized Treatment"}
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase tracking-tighter">
                {treatment.title}
              </h1>
              <p className="text-white/70 text-lg leading-relaxed max-w-2xl font-medium">
                {treatment.description}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => openModal()}
                  className="bg-hospital-sky-blue text-white px-8 py-4 rounded-xl font-black text-sm uppercase tracking-[0.15em] shadow-2xl inline-flex items-center hover:bg-white hover:text-hospital-navy transition-all"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>

            {/* Right Hero Image (Navkiran style overlap) */}
            <div className="hidden lg:flex justify-end translate-y-16 relative">
              <div className="relative w-full max-w-[450px]">
                {/* Glow ring */}
                <div className="absolute -inset-4 rounded-4xl bg-hospital-sky-blue/20 blur-xl" />
                <img
                  src={treatment.image}
                  alt={`Vascular Procedure: ${treatment.title}`}
                  className="relative object-cover rounded-t-4xl  shadow-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Main Layout (70/30 Split) ── */}
      <section className="pt-20 pb-16 bg-hospital-soft-blue/50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* LEFT: Content (70%) */}
            <div className="lg:w-[68%] space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-4xl p-6 md:p-8 border border-hospital-mint shadow-sm space-y-8"
              >
                {/* 1. Overview */}
                <div className="prose prose-slate max-w-none">
                  <h2 className="text-2xl font-black text-hospital-navy uppercase tracking-tight mb-4">
                    {treatment.heading || "About the Procedure"}
                  </h2>
                  <p className="text-hospital-charcoal text-base leading-relaxed font-medium mb-6 whitespace-pre-line">
                    {treatment.fullContent || treatment.description}
                  </p>
                  {treatment.whatIs && (
                    <div className="bg-hospital-soft-blue p-6 rounded-2xl border-l-4 border-hospital-teal mb-6">
                      <h4 className="text-xs font-black text-hospital-navy uppercase tracking-widest mb-3">Understanding the Condition</h4>
                      <p className="text-hospital-slate text-sm font-medium leading-relaxed">{treatment.whatIs}</p>
                    </div>
                  )}
                </div>

                {/* 2. Symptoms & Risks (if available) */}
                {(treatment.symptomsDetailed || (treatment.riskFactors && !treatment.whyImportant)) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    {treatment.symptomsDetailed && (
                      <div className="space-y-4">
                        <h3 className="text-lg font-black text-hospital-navy uppercase tracking-widest">
                          Common Symptoms
                        </h3>
                        <ul className="space-y-2">
                          {treatment.symptomsDetailed.map((s, i) => (
                            <li key={i} className="flex items-start gap-2 text-hospital-charcoal text-sm font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-hospital-teal mt-1.5 shrink-0"></span>
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {(treatment.riskFactors || treatment.whyImportant) && (
                      <div className="space-y-4">
                        <h3 className="text-lg font-black uppercase tracking-widest text-red-600">
                          {treatment.riskFactors ? "Risk Factors" : "Risks of Ignoring"}
                        </h3>
                        <ul className="space-y-2">
                          {(treatment.riskFactors || treatment.whyImportant).map((r, i) => (
                            <li key={i} className="flex items-start gap-2 text-hospital-charcoal text-sm font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0"></span>
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* 2.5 Causes (if available) */}
                {treatment.causes && (
                  <div className="space-y-4 pt-2">
                    <h3 className="text-xl font-black text-hospital-navy uppercase tracking-tight">Causes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {treatment.causes.map((cause, i) => (
                        <div key={i} className="flex items-start gap-3 bg-hospital-soft-blue p-4 rounded-xl border border-hospital-mint">
                          <p className="text-hospital-slate font-medium text-sm leading-relaxed">{cause}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. Advanced Treatment Options (Specific to Varicose Veins type layouts) */}
                {treatment.treatmentOptions && (
                  <div className="space-y-4 pt-2">
                    <h3 className="text-xl font-black text-hospital-navy uppercase tracking-tight">Advanced Treatment Options</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {treatment.treatmentOptions.map((opt, i) => (
                        <div key={i} className="p-5 rounded-xl bg-hospital-soft-blue border border-hospital-mint group hover:border-hospital-teal transition-all">
                          <h4 className="font-black text-hospital-navy text-lg uppercase tracking-wider mb-2 group-hover:text-hospital-teal transition-colors">
                            {opt.name}
                          </h4>
                          <p className="text-hospital-slate text-md font-medium leading-relaxed whitespace-pre-line">{opt.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. Procedure Steps (Numerical or Step-based) */}
                {treatment.procedureSteps && (
                  <div className="space-y-4 pt-2">
                    <h3 className="text-xl font-black text-hospital-navy uppercase tracking-tight">How the Procedure Works</h3>
                    <div className="space-y-4">
                      {treatment.procedureSteps.map((s, i) => (
                        <div key={i} className="flex gap-4 items-start">
                          <div className="w-10 h-10 shrink-0 rounded-xl bg-hospital-navy text-white flex items-center justify-center font-black shadow-md">
                            {s.step.replace(/[^0-9]/g, '') || i + 1}
                          </div>
                          <div>
                            <h4 className="font-black text-hospital-navy text-xs uppercase tracking-widest mb-1">{s.step}</h4>
                            <p className="text-hospital-slate text-sm font-medium leading-relaxed whitespace-pre-line">{s.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 5. Key Benefits & Management */}
                <div className="space-y-8 pt-2">
                  {/* Management: Lifestyle & Medications (if available) */}
                  {(treatment.lifestyleChanges || treatment.medications) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {treatment.lifestyleChanges && (
                        <div className="space-y-4">
                          <h3 className="text-lg font-black text-hospital-navy uppercase tracking-widest">Lifestyle Changes</h3>
                          <ul className="space-y-2">
                            {treatment.lifestyleChanges.map((lc, i) => (
                              <li key={i} className="flex items-center gap-2 text-hospital-charcoal text-sm font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-hospital-teal shrink-0"></span>
                                {lc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {treatment.medications && (
                        <div className="space-y-4">
                          <h3 className="text-lg font-black text-hospital-navy uppercase tracking-widest">Medications</h3>
                          <ul className="space-y-2">
                            {treatment.medications.map((med, i) => (
                              <li key={i} className="flex items-center gap-2 text-hospital-charcoal text-sm font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-hospital-teal shrink-0"></span>
                                {med}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {treatment.benefits && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-black text-hospital-navy uppercase tracking-tight">
                        {treatment.id === 'varicose-veins' ? "Why Choose Venuva Vascular?" : "Key Benefits & Advantages"}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {treatment.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-3 bg-hospital-soft-blue/30 p-4 rounded-xl border border-hospital-teal/10 text-center justify-center">
                            <p className="font-bold text-hospital-navy text-xs uppercase tracking-wider">
                              {benefit}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* 6. Recovery Info */}
                {treatment.recovery && (
                  <div className="bg-hospital-navy text-white p-6 rounded-3xl shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-8 translate-x-8" />
                    <h3 className="text-lg font-black uppercase tracking-tight mb-2 relative z-10">Recovery & Aftercare</h3>
                    <p className="text-white/70 text-sm font-medium leading-relaxed relative z-10">
                      {treatment.recovery}
                    </p>
                  </div>
                )}

                {/* 7. FAQs */}
                {treatment.faqs && (
                  <div className="space-y-4 pt-2">
                    <h3 className="text-xl font-black text-hospital-navy uppercase tracking-tight">Frequently Asked Questions</h3>
                    <div className="space-y-3">
                      {treatment.faqs.map((faq, i) => (
                        <div key={i} className="p-5 rounded-2xl bg-hospital-soft-blue border border-hospital-mint">
                          <h4 className="font-black text-hospital-navy text-xs uppercase tracking-wider mb-2 flex gap-2">
                            <span className="text-hospital-teal text-base italic">Q.</span> {faq.q}
                          </h4>
                          <p className="text-hospital-slate text-sm font-medium leading-relaxed pl-6 border-l border-hospital-mint">
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
                <div className="space-y-6">
                  <h3 className="text-xl font-black text-hospital-navy uppercase tracking-tight">
                    Related {category?.title} Procedures
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relatedTreatments.map((t) => (
                      <Link
                        key={t.id}
                        to={`/treatments/${t.id}`}
                        className="group bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-center gap-4"
                      >
                        <div className="w-12 h-12 rounded-xl bg-hospital-soft-blue flex items-center justify-center text-hospital-navy group-hover:bg-hospital-navy group-hover:text-white transition-colors shrink-0 font-black text-xs">
                          {t.title.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-black text-hospital-navy group-hover:text-hospital-teal transition-colors uppercase tracking-tight text-xs line-clamp-1">
                            {t.title}
                          </h4>
                          <span className="text-xs font-bold text-hospital-slate uppercase tracking-wider">Learn More →</span>
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
                  className="inline-flex items-center text-slate-400 hover:text-hospital-navy font-black text-xs uppercase tracking-wider transition-colors"
                >
                  Back to all Treatments
                </Link>
              </div>
            </div>

            {/* RIGHT: Sidebar (30%) */}
            <div className="lg:w-[32%] space-y-6">

              {/* Consultation Card */}
              <div className="bg-linear-to-br from-hospital-navy via-[#1e3a8a] to-[#0f4c81] rounded-4xl p-6 text-white shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-12 translate-x-12 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg md:text-xl font-black uppercase tracking-tight mb-3 relative z-10">
                  Book a Consultation
                </h3>
                <p className="text-slate-300 text-xs font-medium leading-relaxed mb-6 relative z-10">
                  Schedule an appointment with our specialists to discuss if {treatment.title} is right for you.
                </p>
                <button
                  onClick={() => openModal()}
                  className="bg-white text-hospital-navy w-full py-4 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center hover:bg-hospital-sky-blue hover:text-white transition-all shadow-md"
                >
                  Book Now
                </button>
                <div className="mt-5 flex items-center gap-3 text-xs font-black uppercase tracking-wider text-slate-400">
                  <span>Emergency: {header.emergency}</span>
                </div>
              </div>

              {/* Specialist Widget */}
              <div className="bg-white rounded-4xl p-6 border border-slate-100 shadow-sm space-y-5">
                <h3 className="text-xs font-black text-hospital-navy uppercase tracking-widest">
                  Our Specialists
                </h3>
                <div className="space-y-3">
                  {team.map((doc, i) => (
                    <Link
                      key={i}
                      to={`/doctors/${doc.slug}`}
                      className="flex items-center gap-3 group cursor-pointer hover:bg-hospital-soft-blue p-2 rounded-xl transition-all duration-300"
                    >
                      <div className="relative shrink-0">
                        <img
                          src={doc.image}
                          alt={`Specialist: ${doc.name}`}
                          className="w-12 h-12 object-cover rounded-lg border border-slate-100 shadow-sm group-hover:scale-105 group-hover:border-hospital-teal/30 transition-all duration-300"
                          loading="lazy"
                        />
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                      </div>
                      <div className="min-w-0">
                        <p className="font-black text-hospital-navy text-sm uppercase tracking-tight leading-relaxed truncate group-hover:text-hospital-teal transition-colors">
                          {doc.name}
                        </p>
                        <p className="text-[11px] font-bold text-hospital-slate uppercase tracking-wider line-clamp-1">
                          {doc.specialty}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other Categories */}
              <div className="bg-white rounded-4xl p-6 border border-slate-100 shadow-sm">
                <h3 className="text-xs font-black text-hospital-navy uppercase tracking-widest mb-4">
                  Other Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to="/treatments"
                      state={{ category: cat.id }}
                      className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between group ${category?.id === cat.id
                        ? 'bg-hospital-soft-blue border-hospital-teal/20 text-hospital-teal'
                        : 'bg-hospital-soft-blue border-transparent text-hospital-slate hover:border-hospital-mint'
                        }`}
                    >
                      <span className="text-xs font-black uppercase tracking-wider">{cat.title}</span>
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

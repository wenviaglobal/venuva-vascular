import { motion, AnimatePresence } from "framer-motion";
import { treatmentsPage } from "../data";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAppointment } from "../context/AppointmentContext";
import { useState, useMemo, useEffect } from "react";
import SEO from "../components/utils/SEO";

const TreatmentsPage = () => {
  const { openModal } = useAppointment();
  const navigate = useNavigate();
  const location = useLocation();
  const { hero, specialties, whyChoose, whenToConsult, intro, categories } = treatmentsPage;

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(location.state?.category || "all");

  useEffect(() => {
    if (location.state?.category) {
      setActiveCategory(location.state.category);
    }
  }, [location.state]);

  // Filter logic
  const filteredSpecialties = useMemo(() => {
    let result = specialties;

    // Filter by Category
    if (activeCategory !== "all") {
      const category = categories.find(c => c.id === activeCategory);
      const treatmentSlugs = category ? category.treatments.map(t => t.slug) : [];
      result = result.filter(s => treatmentSlugs.includes(s.id));
    }

    // Filter by Search Query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter(s =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.benefits?.some(b => b.toLowerCase().includes(q)) ||
        s.treatmentOptions?.some(o => o.name.toLowerCase().includes(q))
      );
    }

    return result;
  }, [searchQuery, activeCategory, specialties, categories]);

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Vascular & Vein Treatments | Venuva Vascular Center"
        description="Explore advanced vascular and vein treatments at Venuva Vascular Center, including varicose veins, DVT, PVD, thyroid embolization, uterine fibroid embolization, and pain interventions."
      />
      <section className="relative pt-32 pb-16 overflow-hidden bg-linear-to-br from-hospital-navy via-[#1e3a8a] to-[#0f4c81]">
        {/* Ambient Animated Glowing Meshes */}
        <motion.div 
          animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl pointer-events-none"
        />
        <motion.div 
          animate={{ y: [0, 40, 0], x: [0, -20, 0], scale: [1, 1.2, 1] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-hospital-sky-blue/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl pointer-events-none"
        />

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center bg-white/10 text-white px-5 py-2 rounded-full text-xs font-black tracking-widest uppercase mb-6"
          >
            {hero.subheading}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-8 uppercase tracking-tighter"
          >
            Advanced <span className="text-hospital-sky-blue">Vascular</span> <br className="hidden md:block" /> Treatments
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium mb-8"
          >
            {intro.description}
          </motion.p>

          {/* Search Bar - Center Piece */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-2xl mx-auto"
          >
            <input
              type="text"
              placeholder="Search for a treatment or condition..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-8 py-5 rounded-2xl bg-white text-hospital-navy placeholder-hospital-slate italic font-bold shadow-2xl focus:outline-none focus:ring-4 focus:ring-hospital-teal/20 transition-all text-base"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. Sticky Category Pills */}
      <div className="sticky top-[80px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm py-4">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide no-scrollbar">
            <button
              onClick={() => setActiveCategory("all")}
              className={`shrink-0 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all border ${activeCategory === "all"
                ? "bg-hospital-navy text-white border-hospital-navy shadow-lg"
                : "bg-white text-slate-500 border-slate-200 hover:border-hospital-sky-blue hover:text-hospital-navy"
                }`}
            >
              All Treatments
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all border flex items-center gap-2 ${activeCategory === cat.id
                  ? "bg-hospital-navy text-white border-hospital-navy shadow-lg"
                  : "bg-white text-hospital-slate border-hospital-mint hover:border-hospital-teal hover:text-hospital-navy"
                  }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Main Content Area */}
      <div className="bg-hospital-soft-blue/30">
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12">
            <AnimatePresence mode="popLayout">
              {filteredSpecialties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {filteredSpecialties.map((item, idx) => {
                    // Find current category to label the tag cleanly
                    const currentCategory = categories.find(c => c.treatments.some(t => t.slug === item.id))?.title || "Specialty";
                    return (
                      <motion.div
                        layout
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        key={item.id}
                        className="group bg-white rounded-3xl overflow-hidden border border-hospital-mint shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col hover:-translate-y-2"
                      >
                        {/* Image Header */}
                        <Link to={`/treatments/${item.id}`} className="block relative h-64 overflow-hidden bg-slate-100 cursor-pointer">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-hospital-dark-navy/80 via-hospital-navy/20 to-transparent" />
                        </Link>

                        {/* Content Body */}
                        <div className="p-8 flex flex-col grow relative">
                          <div className="flex items-center gap-2 mb-4">
                            <span className="w-6 h-px bg-hospital-sun"></span>
                            <span className="text-hospital-sun font-black tracking-widest uppercase text-xs">
                              {currentCategory}
                            </span>
                          </div>
                          
                          <Link to={`/treatments/${item.id}`}>
                            <h3 className="text-2xl font-black text-hospital-navy mb-4 uppercase tracking-tight leading-tight group-hover:text-hospital-sky-blue transition-colors line-clamp-2">
                              {item.title}
                            </h3>
                          </Link>
                          
                          <p className="text-hospital-slate text-[15px] leading-relaxed font-medium mb-8 line-clamp-3">
                            {item.description}
                          </p>

                          <div className="mt-auto flex items-center justify-between pt-6 border-t border-hospital-mint border-dashed">
                            <Link
                              to={`/treatments/${item.id}`}
                              className="text-xs font-black uppercase tracking-[0.15em] text-hospital-navy group-hover:text-hospital-sky-blue flex items-center transition-colors"
                            >
                              Explore Details
                            </Link>
                            <button
                              onClick={() => openModal()}
                              className="bg-hospital-navy text-white px-5 py-2.5 rounded-xl font-black text-xs tracking-wider uppercase hover:bg-hospital-emerald transition-all shadow-md"
                            >
                              Consult
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-32 text-center"
                >
                  <h3 className="text-2xl font-black text-hospital-navy uppercase tracking-tight mb-2">No treatments found</h3>
                  <p className="text-slate-500 font-medium">Try adjusting your search or category filters.</p>
                  <button
                    onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                    className="mt-8 text-hospital-sky-blue font-black text-xs uppercase tracking-widest hover:underline"
                  >
                    Clear All Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* 4. Diagnostic Indicators (Condensed) */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="container mx-auto px-6 md:px-12">
            <div className="bg-amber-50 rounded-[2.5rem] p-10 md:p-16 border border-amber-100 flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/3 text-center lg:text-left">
                <h3 className="text-3xl font-black text-amber-900 uppercase tracking-tighter leading-none mb-4">{whenToConsult.title}</h3>
                <p className="text-amber-800/80 font-medium italic">{whenToConsult.outro}</p>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whenToConsult.symptoms.map((symptom, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/60 p-5 rounded-2xl border border-amber-200/50">
                    <span className="font-black text-amber-900 text-xs uppercase tracking-wider">{symptom}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Professional CTA */}
        <section className="py-24">
          <div className="container mx-auto px-6 md:px-12">
            <div className="bg-hospital-navy rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-linear-to-br from-hospital-navy via-hospital-navy to-[#0a4e7a] opacity-50"></div>
              <div className="relative z-10 space-y-8">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight">
                  Expert Care for Your <br /><span className="text-hospital-sky-blue">Vascular Health</span>
                </h2>
                <p className="text-slate-300 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
                  Join 10,000+ patients who chose Venuva for minimally invasive, image-guided treatments.
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => openModal()}
                    className="inline-flex items-center bg-white text-hospital-navy px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-[0.15em] shadow-xl hover:bg-hospital-sun hover:text-white transition-all transform hover:scale-105"
                  >
                    Book A Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TreatmentsPage;

import { motion, AnimatePresence } from "framer-motion";
import { hospitalData } from "../data";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import {
  CheckCircle2,
  Droplets,
  Activity,
  Dna,
  Stethoscope,
  HeartPulse,
  Zap,
  Bone,
  Smile,
  Calendar,
  ChevronRight,
  Search,
  TriangleAlert
} from "lucide-react";

const iconMap = {
  Droplets, Activity, Dna, Stethoscope,
  HeartPulse, Zap, Bone, Smile
};

const TreatmentsPage = () => {
  const { treatmentsPage } = hospitalData;
  const { hero, specialties, whyChoose, whenToConsult, intro, categories } = treatmentsPage;
  
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

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
        s.benefits.some(b => b.toLowerCase().includes(q))
      );
    }
    
    return result;
  }, [searchQuery, activeCategory, specialties, categories]);

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section (Navkiran Style Gradient) */}
      <section className="relative pt-[120px] pb-24 overflow-hidden bg-linear-to-br from-hospital-navy via-hospital-navy to-[#0a4e7a]">
        {/* Subtle background circles */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-hospital-sky-blue/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-hospital-sky-blue/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-[10px] font-black tracking-widest uppercase mb-8"
          >
            <Activity size={14} className="text-hospital-sky-blue" />
            {hero.subheading}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black text-white leading-tight mb-8 uppercase tracking-tighter"
          >
            Advanced <span className="text-hospital-sky-blue">Vascular</span> <br className="hidden md:block"/> Treatments
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-medium mb-12"
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
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search for a treatment or condition..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-16 pr-8 py-6 rounded-2xl bg-white text-hospital-navy placeholder-slate-400 font-bold shadow-2xl focus:outline-none focus:ring-4 focus:ring-hospital-sky-blue/20 transition-all text-lg"
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
              className={`shrink-0 px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${
                activeCategory === "all" 
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
                className={`shrink-0 px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border flex items-center gap-2 ${
                  activeCategory === cat.id 
                  ? "bg-hospital-navy text-white border-hospital-navy shadow-lg" 
                  : "bg-white text-slate-500 border-slate-200 hover:border-hospital-sky-blue hover:text-hospital-navy"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Main Content Area */}
      <div className="bg-slate-50/30">
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12">
            <AnimatePresence mode="popLayout">
              {filteredSpecialties.length > 0 ? (
                <div className="grid grid-cols-1 gap-12">
                  {filteredSpecialties.map((item, idx) => {
                    const Icon = iconMap[item.icon] || Stethoscope;
                    return (
                      <motion.div
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        key={item.id}
                        className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-card-xl hover:shadow-2xl transition-all group"
                      >
                        <div className="flex flex-col lg:flex-row items-stretch">
                          {/* Image Component */}
                          <div className="lg:w-[45%] h-[300px] lg:h-auto relative overflow-hidden">
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute top-6 left-6 w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-hospital-navy shadow-xl">
                              <Icon size={28} />
                            </div>
                          </div>
                          
                          {/* Text Component */}
                          <div className="lg:w-[55%] p-8 md:p-12 flex flex-col justify-center space-y-8">
                            <div>
                              <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-px bg-hospital-sky-blue"></span>
                                <span className="text-hospital-sky-blue font-black tracking-[0.3em] uppercase text-[10px]">Medical Specialty</span>
                              </div>
                              <h3 className="text-2xl md:text-4xl font-black text-hospital-navy mb-6 uppercase tracking-tight leading-tight">
                                {item.title}
                              </h3>
                              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                                {item.description}
                              </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {item.benefits.map((benefit, i) => (
                                <div key={i} className="flex items-center gap-3 text-hospital-navy font-bold text-[11px] uppercase tracking-wider">
                                  <CheckCircle2 size={16} className="text-hospital-sky-blue shrink-0" />
                                  <span>{benefit}</span>
                                </div>
                              ))}
                            </div>

                            <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                              <Link 
                                to={`/treatments/${item.id}`} 
                                className="inline-flex items-center gap-2 text-hospital-sky-blue font-black text-[10px] uppercase tracking-[0.2em] group"
                              >
                                Full Procedure Details <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                              </Link>
                              <button className="bg-hospital-navy text-white px-6 py-3 rounded-xl font-black text-[10px] tracking-widest uppercase hover:bg-hospital-sky-blue transition-all">
                                Consult Now
                              </button>
                            </div>
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
                  <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                    <Search size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-hospital-navy uppercase tracking-tight mb-2">No treatments found</h3>
                  <p className="text-slate-500 font-medium">Try adjusting your search or category filters.</p>
                  <button 
                    onClick={() => {setSearchQuery(""); setActiveCategory("all");}}
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
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-6 mx-auto lg:mx-0">
                  <TriangleAlert size={32} />
                </div>
                <h3 className="text-3xl font-black text-amber-900 uppercase tracking-tighter leading-none mb-4">{whenToConsult.title}</h3>
                <p className="text-amber-800/80 font-medium italic">{whenToConsult.outro}</p>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whenToConsult.symptoms.map((symptom, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/60 p-5 rounded-2xl border border-amber-200/50">
                    <CheckCircle2 size={18} className="text-amber-500" />
                    <span className="font-black text-amber-900 text-[10px] uppercase tracking-widest">{symptom}</span>
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
                  <Link 
                    to="/contact"
                    className="inline-flex items-center gap-4 bg-white text-hospital-navy px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-hospital-sky-blue hover:text-white transition-all transform hover:scale-105"
                  >
                    <Calendar size={18} /> Book A Consultation
                  </Link>
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

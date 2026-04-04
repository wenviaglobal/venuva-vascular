import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  User,
  Award,
  BookOpen,
  GraduationCap,
  Briefcase,
  FileText,
  Users,
  ChevronRight,
  Stethoscope,
  HeartPulse,
  Mail,
  Phone,
  Linkedin,
  Twitter
} from "lucide-react";
import { doctorsSection } from "../data/team";
import SEO from "../components/utils/SEO";
import PageHeader from "../components/PageHeader";

const DoctorsPage = () => {
  const { slug } = useParams();
  const location = useLocation();
  const [activeTabs, setActiveTabs] = useState({});

  // Initialize active tabs for each doctor
  useEffect(() => {
    const initialTabs = {};
    doctorsSection.doctors.forEach(doc => {
      initialTabs[doc.id] = 'biography';
    });
    setActiveTabs(initialTabs);
  }, []);

  // Handle scrolling to specific doctor if slug is provided
  useEffect(() => {
    if (slug) {
      const element = document.getElementById(slug);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [slug]);

  const toggleTab = (doctorId, tab) => {
    setActiveTabs(prev => ({
      ...prev,
      [doctorId]: tab
    }));
  };

  const tabIcons = {
    biography: <User size={16} />,
    expertise: <Stethoscope size={16} />,
    education: <GraduationCap size={16} />,
    publications: <BookOpen size={16} />,
    memberships: <Users size={16} />
  };

  return (
    <div className="bg-hospital-soft-blue/30 min-h-screen pb-24">
      <SEO
        title="Our Expert Specialists | Venuva Vascular Center"
        description="Meet our highly qualified vascular and interventional specialists dedicated to providing advanced minimally invasive care."
      />

      <PageHeader
        title="Our Medical Team"
        subtitle="World-class specialists dedicated to your vascular health and recovery."
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 mt-12">
        <div className="space-y-20">
          {doctorsSection.doctors.map((doctor, index) => (
            <motion.section
              key={doctor.id}
              id={doctor.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              {/* Decorative Number */}
              <div className="absolute -top-10 -left-2 text-[80px] font-black text-hospital-mint/50 leading-none -z-10 select-none">
                0{index + 1}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-hospital-navy">
                {/* Left Column: Image & Basic Info */}
                <div className="lg:col-span-4 lg:sticky lg:top-[100px]">
                  <div className="relative rounded-[32px] overflow-hidden shadow-xl shadow-hospital-navy/5 group">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full max-h-[60vh] lg:aspect-4/5 object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-hospital-navy/90 via-transparent to-transparent flex flex-col justify-end p-6">
                      <h2 className="text-2xl font-black text-white mb-1">{doctor.name}</h2>
                      <p className="text-hospital-sun font-bold text-xs uppercase tracking-[0.4em]">{doctor.specialty}</p>
                    </div>
                  </div>

                  <div className="mt-6 gap-3 grid grid-cols-2">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-hospital-mint">
                      <div className="w-10 h-10 rounded-lg bg-hospital-teal/10 flex items-center justify-center text-hospital-teal shrink-0">
                        <Award size={18} />
                      </div>
                      <div>
                        <p className="text-[11px] font-black uppercase tracking-[0.4em] text-hospital-slate">Experience</p>
                        <p className="text-sm font-black text-hospital-navy">{doctor.experience}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-hospital-mint">
                      <div className="w-10 h-10 rounded-lg bg-hospital-sky-blue/10 flex items-center justify-center text-hospital-sky-blue shrink-0">
                        <Briefcase size={18} />
                      </div>
                      <div>
                        <p className="text-[11px] font-black uppercase tracking-[0.4em] text-hospital-slate">Position</p>
                        <p className="text-sm font-black text-hospital-navy truncate">{doctor.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* <div className="mt-6 flex gap-3">
                    <button className="flex-1 bg-hospital-navy text-white px-6 py-3 rounded-lg font-black text-xs tracking-[0.4em] uppercase hover:bg-hospital-teal transition-all flex items-center justify-center gap-2">
                      <Mail size={12} /> Contact
                    </button>
                    <div className="flex gap-2">
                      <a href={doctor.linkedin} className="w-10 h-10 rounded-lg border border-hospital-mint flex items-center justify-center text-hospital-navy hover:bg-hospital-sky-blue hover:text-white hover:border-hospital-sky-blue transition-all">
                        <Linkedin size={16} />
                      </a>
                      <a href={doctor.twitter} className="w-10 h-10 rounded-lg border border-hospital-mint flex items-center justify-center text-hospital-navy hover:bg-hospital-sky-blue hover:text-white hover:border-hospital-sky-blue transition-all">
                        <Twitter size={16} />
                      </a>
                    </div>
                  </div> */}
                </div>

                {/* Right Column: Detailed Tabs */}
                <div className="lg:col-span-8 bg-white rounded-2xl sm:rounded-[32px] p-4 sm:p-6 md:p-8 border border-slate-100 shadow-sm">
                  {/* Tab Navigation */}
                  <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-50 pb-4 overflow-x-auto">
                    {Object.keys(doctor.tabs).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => toggleTab(doctor.id, tab)}
                        className={`px-4 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 ${activeTabs[doctor.id] === tab
                            ? "bg-hospital-teal text-white shadow-md shadow-hospital-teal/20"
                            : "bg-hospital-soft-blue text-hospital-navy/60 hover:bg-hospital-mint"
                          }`}
                      >
                        {tabIcons[tab]}
                        {tab}
                      </button>
                    ))}
                  </div>

                    <div className="min-h-[400px]">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeTabs[doctor.id]}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -15 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="pt-4"
                        >
                          {/* Biography Tab - Clean Steel/Navy Theme */}
                          {activeTabs[doctor.id] === 'biography' && (
                            <div className="space-y-6">
                              <div className="flex items-center gap-3 mb-6">
                                <div className="w-1.5 h-8 bg-hospital-navy rounded-full" />
                                <h4 className="text-xl font-black text-hospital-navy uppercase tracking-wider">Professional Profile</h4>
                              </div>
                              <div className="relative p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden group hover:shadow-xl hover:shadow-hospital-navy/5 transition-all">
                                <div className="absolute top-4 right-8 text-hospital-navy opacity-[0.03] select-none group-hover:scale-110 transition-transform duration-700">
                                  <User size={120} strokeWidth={3} />
                                </div>
                                <p className="relative z-10 text-hospital-charcoal font-medium leading-relaxed text-sm md:text-base whitespace-pre-line">
                                  {doctor.tabs.biography}
                                </p>
                              </div>
                            </div>
                          )}

                          {/* Expertise Tab - Medical Teal Theme */}
                          {activeTabs[doctor.id] === 'expertise' && (
                            <div className="space-y-8">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-1.5 h-8 bg-hospital-teal rounded-full" />
                                <h4 className="text-xl font-black text-hospital-navy uppercase tracking-tight">Clinical Expertise</h4>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {doctor.tabs.expertise.map((item, i) => (
                                  <motion.div 
                                    key={i} 
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="group p-5 bg-white rounded-2xl border border-slate-100 hover:border-hospital-teal/40 hover:shadow-2xl hover:shadow-hospital-teal/10 hover:ring-2 hover:ring-hospital-teal/5 transition-all flex items-center gap-4"
                                  >
                                    <div className="w-10 h-10 rounded-xl bg-hospital-teal/5 flex items-center justify-center text-hospital-teal group-hover:bg-hospital-teal group-hover:text-white transition-all shadow-inner">
                                      <Stethoscope size={18} />
                                    </div>
                                    <p className="font-bold text-hospital-navy text-sm leading-tight tracking-tight">{item}</p>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Education Tab - Academic Blue Theme */}
                          {activeTabs[doctor.id] === 'education' && (
                            <div className="space-y-8">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-1.5 h-8 bg-hospital-sky-blue rounded-full" />
                                <h4 className="text-xl font-black text-hospital-navy uppercase tracking-tight">Academic Credentials</h4>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {doctor.tabs.education.map((item, i) => (
                                  <motion.div 
                                    key={i} 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="group flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 hover:border-hospital-sky-blue/40 hover:shadow-2xl hover:shadow-hospital-sky-blue/10 hover:ring-2 hover:ring-hospital-sky-blue/5 transition-all"
                                  >
                                    <div className="w-11 h-11 rounded-xl bg-hospital-sky-blue/5 flex items-center justify-center text-hospital-sky-blue shrink-0 group-hover:scale-110 transition-transform shadow-inner">
                                      <GraduationCap size={22} />
                                    </div>
                                    <p className="font-bold text-hospital-navy leading-snug text-[13px] tracking-tight">{item}</p>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Publications Tab - Prestigious Gold Theme */}
                          {activeTabs[doctor.id] === 'publications' && (
                            <div className="space-y-8">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-1.5 h-8 bg-hospital-sun rounded-full" />
                                <h4 className="text-xl font-black text-hospital-navy uppercase tracking-tight">Research work</h4>
                              </div>
                              <div className="space-y-5">
                                {doctor.tabs.publications.map((item, i) => (
                                  <div key={i} className="flex gap-6 p-7 bg-slate-50/40 rounded-[2.5rem] border border-transparent hover:border-hospital-sun/20 hover:bg-white hover:shadow-2xl hover:shadow-hospital-sun/5 transition-all group">
                                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-hospital-sun shrink-0 shadow-sm border border-slate-50 group-hover:bg-hospital-sun group-hover:text-white transition-all transform group-hover:rotate-6">
                                      <FileText size={24} />
                                    </div>
                                    <div className="flex-1">
                                      <p className="font-bold text-hospital-navy text-[15px] leading-relaxed italic group-hover:text-black transition-colors">"{item}"</p>
                                      <div className="mt-4 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-hospital-slate">
                                        <div className="w-8 h-[2px] bg-hospital-sun/30" />
                                        <span className="group-hover:text-hospital-sun transition-colors">Scientific Peer Reviewed Publication</span>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Memberships Tab - Indigo/Steel Theme */}
                          {activeTabs[doctor.id] === 'memberships' && (
                            <div className="space-y-8">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-1.5 h-8 bg-indigo-500 rounded-full" />
                                <h4 className="text-xl font-black text-hospital-navy uppercase tracking-tight">Professional Societies</h4>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {doctor.tabs.memberships.map((item, i) => (
                                  <div key={i} className="group flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 hover:border-indigo-400/30 hover:shadow-xl hover:shadow-indigo-500/5 transition-all">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-50/50 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all shadow-inner shrink-0">
                                      <Users size={20} />
                                    </div>
                                    <p className="text-[11px] font-black text-hospital-navy uppercase tracking-widest leading-tight">{item}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;

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
                      <p className="text-hospital-sky-blue font-bold text-xs uppercase tracking-widest">{doctor.specialty}</p>
                    </div>
                  </div>

                  <div className="mt-6 gap-3 grid grid-cols-2">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-hospital-mint">
                      <div className="w-10 h-10 rounded-lg bg-hospital-teal/10 flex items-center justify-center text-hospital-teal shrink-0">
                        <Award size={18} />
                      </div>
                      <div>
                        <p className="text-[11px] font-black uppercase tracking-widest text-hospital-slate">Experience</p>
                        <p className="text-sm font-black text-hospital-navy">{doctor.experience}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-hospital-mint">
                      <div className="w-10 h-10 rounded-lg bg-hospital-sky-blue/10 flex items-center justify-center text-hospital-sky-blue shrink-0">
                        <Briefcase size={18} />
                      </div>
                      <div>
                        <p className="text-[11px] font-black uppercase tracking-widest text-hospital-slate">Position</p>
                        <p className="text-sm font-black text-hospital-navy truncate">{doctor.role}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button className="flex-1 bg-hospital-navy text-white px-6 py-3 rounded-lg font-black text-xs tracking-widest uppercase hover:bg-hospital-teal transition-all flex items-center justify-center gap-2">
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
                  </div>
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

                  {/* Tab Content */}
                  <div className="min-h-[300px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTabs[doctor.id]}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {activeTabs[doctor.id] === 'biography' && (
                          <div className="space-y-4">
                            <h4 className="text-lg font-black flex items-center gap-2">
                              <User size={18} className="text-hospital-teal" />
                              Professional Biography
                            </h4>
                            <p className="text-hospital-charcoal font-medium leading-relaxed bg-hospital-soft-blue p-6 rounded-2xl border-l-4 border-hospital-teal text-sm md:text-base italic whitespace-pre-line">
                              {doctor.tabs.biography}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                              {doctor.qualifications.map((qual, i) => (
                                <div key={i} className="flex items-center gap-2 p-3 bg-slate-50/50 rounded-xl">
                                  <div className="w-1.5 h-1.5 rounded-full bg-hospital-teal" />
                                  <span className="text-xs font-bold text-hospital-navy">{qual}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {activeTabs[doctor.id] === 'expertise' && (
                          <div className="space-y-8">
                            <h4 className="text-xl font-black flex items-center gap-3">
                              <Stethoscope className="text-hospital-teal" />
                              Clinical Expertise & Focus
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {doctor.tabs.expertise.map((item, i) => (
                                <div key={i} className="group p-6 bg-slate-50 rounded-3xl border border-transparent hover:border-hospital-teal/20 transition-all">
                                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-hospital-teal mb-4 shadow-sm">
                                    <HeartPulse size={20} />
                                  </div>
                                  <p className="font-black text-hospital-navy">{item}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {activeTabs[doctor.id] === 'education' && (
                          <div className="space-y-8">
                            <h4 className="text-xl font-black flex items-center gap-3">
                              <GraduationCap className="text-hospital-teal" />
                              Academic Background
                            </h4>
                            <div className="space-y-4">
                              {doctor.tabs.education.map((item, i) => (
                                <div key={i} className="flex items-start gap-6 p-6 bg-slate-50 rounded-3xl">
                                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-hospital-navy shrink-0 shadow-sm">
                                    <GraduationCap size={20} />
                                  </div>
                                  <div>
                                    <p className="font-bold text-hospital-navy leading-relaxed">{item}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {activeTabs[doctor.id] === 'publications' && (
                          <div className="space-y-8">
                            <h4 className="text-xl font-black flex items-center gap-3">
                              <FileText className="text-hospital-teal" />
                              Research & Publications
                            </h4>
                            <div className="space-y-4">
                              {doctor.tabs.publications.map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-6 bg-slate-50 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-hospital-navy/5 transition-all group">
                                  <div className="w-2 h-12 bg-hospital-sun rounded-full group-hover:bg-hospital-teal transition-colors" />
                                  <p className="font-bold text-hospital-navy italic">"{item}"</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {activeTabs[doctor.id] === 'memberships' && (
                          <div className="space-y-8">
                            <h4 className="text-xl font-black flex items-center gap-3">
                              <Users className="text-hospital-teal" />
                              Professional Affiliations
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {doctor.tabs.memberships.map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-6 bg-slate-50 rounded-3xl">
                                  <div className="w-10 h-10 rounded-xl bg-hospital-navy/5 flex items-center justify-center text-hospital-navy">
                                    <ChevronRight size={16} />
                                  </div>
                                  <p className="text-sm font-black text-hospital-navy">{item}</p>
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

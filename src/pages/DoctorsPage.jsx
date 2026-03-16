import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { doctorsSection } from "../data";
import { 
  Linkedin, Facebook, Instagram, Users, 
  Award, GraduationCap, Stethoscope, 
  ChevronRight, BookOpen, Briefcase, 
  ScrollText, ShieldCheck 
} from "lucide-react";
import { Link } from "react-router-dom";

const DoctorsPage = () => {
  const [activeTabs, setActiveTabs] = useState(
    doctorsSection.doctors.reduce((acc, doc) => ({ ...acc, [doc.id]: 'biography' }), {})
  );

  const handleTabChange = (docId, tab) => {
    setActiveTabs(prev => ({ ...prev, [docId]: tab }));
  };

  const tabs = [
    { id: 'biography', label: 'Biography', icon: BookOpen },
    { id: 'expertise', label: 'Expertise', icon: ShieldCheck },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'publications', label: 'Publications', icon: ScrollText },
    { id: 'memberships', label: 'Memberships', icon: Award }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - Matching Reference */}
      <section className="bg-hospital-teal py-24 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase mb-6 tracking-tight">
            Meet Our Doctors
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12">
            Fellowship-trained specialists with {doctorsSection.doctors[0].experience} of experience, committed to delivering the highest standard of care in Bangalore.
          </p>
          
          {/* Nav Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            {doctorsSection.doctors.map((doctor) => (
              <a 
                key={doctor.id}
                href={`#${doctor.id}`}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#0D8A7F] transition-all flex items-center gap-2"
              >
                {doctor.name} <ChevronRight size={14} className="rotate-90" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist Featured Sections */}
      <div className="py-12 flex flex-col gap-0">
        {doctorsSection.doctors.map((doctor, idx) => (
          <section 
            id={doctor.id} 
            key={doctor.id}
            className={`py-24 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#fff5f5]'}`}
          >
            <div className="container mx-auto px-6 md:px-12">
              <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
                {/* Image Side */}
                <div className="w-full lg:w-[450px] space-y-8">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-100"
                  >
                    <img 
                      src={doctor.image} 
                      alt={doctor.name} 
                      className="w-full aspect-4/5 object-cover"
                    />
                    
                    {/* Experience Badge */}
                    <div className="absolute bottom-10 -right-4 bg-hospital-amber text-white p-4 pr-8 rounded-2xl shadow-xl flex items-center gap-3 border-4 border-white">
                       <div className="bg-white/20 p-2 rounded-lg">
                         <Stethoscope size={24} />
                       </div>
                       <div>
                         <p className="text-xl font-black leading-none">{doctor.experience}</p>
                         <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Experience</p>
                       </div>
                    </div>
                  </motion.div>

                  {/* Info Summary Boxes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#0D8A7F]/10 flex items-center justify-center text-[#0D8A7F]">
                          <Briefcase size={20} />
                        </div>
                        <div>
                           <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Current Role</p>
                           <p className="text-xs font-bold text-hospital-navy">{doctor.role}</p>
                        </div>
                     </div>
                     <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#0D8A7F]/10 flex items-center justify-center text-[#0D8A7F]">
                          <ShieldCheck size={20} />
                        </div>
                        <div>
                           <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Specialisation</p>
                           <p className="text-xs font-bold text-hospital-navy leading-tight">{doctor.specialty.split('&')[0]}</p>
                        </div>
                     </div>
                  </div>

                  <button className="bg-hospital-amber text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-white hover:text-hospital-navy transition-all flex items-center justify-center gap-2">
                    Book a Consultation <ChevronRight size={18} />
                  </button>
                </div>

                {/* Content Side */}
                <div className="flex-1 lg:pt-10">
                  <div className="mb-12">
                    <p className="text-hospital-amber font-black tracking-[0.3em] uppercase text-[10px] mb-4">
                      {idx === 0 ? "Founder & Lead Specialist" : "Co-Lead Specialist"}
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black text-hospital-navy mb-4 uppercase">
                      {doctor.name}
                    </h2>
                    <p className="text-hospital-teal font-bold text-sm tracking-wide">
                      {doctor.specialty}
                    </p>
                    <p className="text-slate-500 mt-6 text-lg font-medium leading-relaxed">
                      Fellowship Trained {doctor.specialty.split('&')[1] || "Specialist"}, Experienced {doctor.specialty.split('&')[0]}
                    </p>
                  </div>

                  {/* Tabbed Interface */}
                  <div className="bg-white rounded-4xl border border-slate-100 shadow-sm overflow-hidden mt-12">
                    <div className="flex flex-wrap border-b border-slate-50 overflow-x-auto scroller-hide bg-slate-50/50">
                      {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTabs[doctor.id] === tab.id;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => handleTabChange(doctor.id, tab.id)}
                            className={`flex items-center gap-2 px-6 py-4 text-[10px] font-black uppercase tracking-widest transition-all relative shrink-0 ${
                              isActive ? 'text-[#0D8A7F]' : 'text-slate-400 hover:text-slate-600'
                            }`}
                          >
                            <Icon size={14} />
                            {tab.label}
                            {isActive && (
                              <motion.div 
                                layoutId={`tab-line-${doctor.id}`}
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0D8A7F]"
                              />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    <div className="p-8 md:p-10 min-h-[300px]">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeTabs[doctor.id]}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.2 }}
                          className="prose prose-slate max-w-none"
                        >
                          {activeTabs[doctor.id] === 'biography' && (
                            <p className="text-slate-600 font-medium text-lg leading-relaxed whitespace-pre-wrap">
                              {doctor.tabs.biography}
                            </p>
                          )}
                          {activeTabs[doctor.id] === 'expertise' && (
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {doctor.tabs.expertise.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-600 font-bold text-sm">
                                  <div className="w-1.5 h-1.5 rounded-full bg-hospital-teal" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                          {activeTabs[doctor.id] === 'education' && (
                            <div className="space-y-6">
                              {doctor.tabs.education.map((item, i) => (
                                <div key={i} className="flex gap-4">
                                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                                    <GraduationCap className="text-[#0D8A7F]" />
                                  </div>
                                  <p className="text-slate-600 font-bold text-base pt-2">{item}</p>
                                </div>
                              ))}
                            </div>
                          )}
                          {activeTabs[doctor.id] === 'publications' && (
                            <div className="space-y-6">
                              {doctor.tabs.publications.map((item, i) => (
                                <div key={i} className="flex gap-4">
                                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                                    <ScrollText className="text-[#0D8A7F]" />
                                  </div>
                                  <p className="text-slate-600 font-bold text-base pt-2 italic underline decoration-[#0D8A7F]/20">{item}</p>
                                </div>
                              ))}
                            </div>
                          )}
                          {activeTabs[doctor.id] === 'memberships' && (
                            <div className="space-y-6">
                              {doctor.tabs.memberships.map((item, i) => (
                                <div key={i} className="flex gap-4">
                                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                                    <Award className="text-[#0D8A7F]" />
                                  </div>
                                  <p className="text-slate-600 font-bold text-base pt-2">{item}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default DoctorsPage;

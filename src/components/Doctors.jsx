import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Linkedin, Facebook, GraduationCap, Stethoscope, ChevronRight, Award } from "lucide-react";
import { doctorsSection } from "../data";

const Doctors = () => {
  return (
    <section id="doctors" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Compact Header */}
        <div className="text-center mb-12">
          <p className="text-hospital-amber font-black tracking-[0.25em] mb-3 uppercase text-[10px]">
            {doctorsSection.tag}
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-hospital-navy uppercase leading-tight">
            {doctorsSection.heading}
          </h2>
        </div>

        {/* Streamlined, High-Impact Doctor Profiles */}
        <div className="flex flex-col gap-10">
          {doctorsSection.doctors.map((doctor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-8 md:gap-12 p-6 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden transition-all hover:shadow-xl hover:border-hospital-sky-blue/20 ${
                idx % 2 === 0 ? "bg-slate-50" : "bg-hospital-soft-blue lg:flex-row-reverse"
              }`}
            >
              {/* Image Side - Fixed Size for consistent cards */}
              <div className="w-full lg:w-[400px] aspect-square rounded-3xl overflow-hidden relative shadow-lg shrink-0">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-hospital-navy/40 via-transparent to-transparent" />
                
                {/* Floating Socials */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                   <button className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-hospital-sky-blue transition-all">
                      <Linkedin size={18} />
                   </button>
                </div>
              </div>

              {/* Content Side */}
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-6 h-[2px] bg-hospital-sky-blue" />
                  <span className="text-hospital-amber font-black uppercase tracking-[0.3em] text-[10px]">
                    {doctor.specialty}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black text-hospital-navy mb-4 uppercase">
                  {doctor.name}
                </h3>
                
                <p className="text-slate-500 font-medium text-base leading-relaxed mb-6 line-clamp-3">
                  {doctor.bio}
                </p>

                {/* Quals & Focus - Compact */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-2xl shadow-xs border border-slate-50">
                    <GraduationCap size={20} className="text-hospital-sky-blue" />
                    <span className="text-[11px] font-bold text-hospital-navy">{doctor.qualifications[0]}</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-2xl shadow-xs border border-slate-50">
                    <Stethoscope size={20} className="text-hospital-sky-blue" />
                    <span className="text-[11px] font-bold text-hospital-navy">{doctor.focus[0]}</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-2xl shadow-xs border border-slate-50">
                    <Award size={20} className="text-hospital-sky-blue" />
                    <span className="text-[11px] font-bold text-hospital-navy">Expert Care</span>
                  </div>
                </div>

                {/* High Visibility Button */}
                <div className="flex items-center">
                  <Link 
                    to={`/doctors#${doctor.id}`}
                    className="group flex items-center gap-3 bg-hospital-navy text-white px-10 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-hospital-amber transition-all shadow-lg hover:translate-y-[-2px] active:translate-y-0"
                  >
                    View Full Profile
                    <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;

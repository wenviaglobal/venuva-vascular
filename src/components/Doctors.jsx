import { motion } from "framer-motion";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import { hospitalData } from "../data";
import { Link } from "react-router-dom";

const Doctors = () => {
  const { doctorsSection } = hospitalData;

  return (
    <section id="doctors" className="py-32 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-hospital-sky-blue font-black tracking-[0.25em] mb-4 uppercase text-xs">
            {doctorsSection.tag}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-hospital-navy mb-6">
            {doctorsSection.heading}
          </h2>
          <p className="text-[#475569] text-lg font-medium leading-relaxed">
            {doctorsSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {doctorsSection.doctors.map((doctor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col h-full group"
            >
              {/* Doctor Image Container */}
              <div className="relative aspect-4/5 rounded-4xl overflow-hidden shadow-xl shadow-slate-200/50 mb-8">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-hospital-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8 px-6">
                  <div className="flex gap-4">
                    {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                      <motion.button 
                        key={i}
                        whileHover={{ scale: 1.2 }}
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-hospital-sky-blue transition-colors"
                      >
                        <Icon size={18} />
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Doctor Info */}
              <div className="flex-1 flex flex-col items-center text-center">
                <h3 className="text-2xl font-black text-hospital-navy mb-2 group-hover:text-hospital-sky-blue transition-colors">
                  {doctor.name}
                </h3>
                <p className="text-hospital-sky-blue font-bold text-sm uppercase tracking-widest mb-6">
                  {doctor.specialty}
                </p>
                
                <Link 
                  to={`/doctors/${doctor.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="mt-auto w-full max-w-[200px] border-2 border-slate-100 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest text-[#475569] hover:border-hospital-sky-blue hover:text-hospital-sky-blue transition-all text-center"
                >
                  View Profile
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;

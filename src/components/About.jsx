import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import { hospitalData } from "../data";

const About = () => {
  const { about } = hospitalData;

  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-hospital-soft-blue mb-6">
              <p className="text-hospital-navy font-black tracking-widest text-[10px] uppercase">
                {about.tag || "About us"}
              </p>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-hospital-navy mb-8 leading-[1.1]">
              {about.heading}
            </h2>
            
            <p className="text-lg leading-relaxed text-slate-600 font-medium max-w-xl">
              {about.description}
            </p>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative group"
          >
            <div className="relative z-10 rounded-4xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img 
                src={about.image} 
                alt="Vascular Specialists" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-hospital-navy/40 to-transparent"></div>
            </div>
            
            {/* Decorative Card */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-hospital-sky-blue flex items-center justify-center text-white">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-black text-hospital-navy uppercase tracking-tighter">15+ Years</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Experience</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

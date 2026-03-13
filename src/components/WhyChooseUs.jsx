import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { whyChooseUs } from "../data";

const WhyChooseUs = () => {

  return (
    <section className="py-32 bg-hospital-navy text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-hospital-sky-blue/5 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2 z-0"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <p className="text-hospital-sky-blue font-extrabold tracking-widest mb-4 uppercase text-xs">
            {whyChooseUs.tag}
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-12">
            {whyChooseUs.heading}
          </h2>
          
          <div className="space-y-8">
            {whyChooseUs.reasons.map((reason, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-5 group"
              >
                <div className="mt-1 shrink-0">
                  <CheckCircle2 className="w-8 h-8 text-hospital-sky-blue transition-transform group-hover:scale-110" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-hospital-sky-blue transition-colors">
                    {reason.title}
                  </h4>
                  <p className="text-slate-300 leading-relaxed font-medium">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200" 
              alt="Medical Team Working" 
              className="w-full h-auto object-cover aspect-video"
            />
            <div className="absolute inset-0 bg-linear-to-t from-hospital-navy/60 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

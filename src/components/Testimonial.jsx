import { motion } from "framer-motion";
import { testimonial } from "../data";

const Testimonial = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop" 
          alt="Hospital background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hospital-navy/80"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-hospital-sky-blue text-8xl font-serif leading-none block mb-4">“</span>
          <p className="text-2xl md:text-3xl text-white leading-relaxed font-medium mb-8">
            {testimonial.quote}
          </p>
          <div className="w-12 h-1 bg-hospital-sky-blue mx-auto mb-6"></div>
          <p className="text-xl font-bold text-white uppercase tracking-widest">{testimonial.author}</p>
          
          <div className="flex justify-center gap-2 mt-12">
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <div className="w-3 h-3 rounded-full bg-slate-500"></div>
            <div className="w-3 h-3 rounded-full bg-slate-500"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;

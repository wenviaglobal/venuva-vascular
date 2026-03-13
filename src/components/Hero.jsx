import { motion } from "framer-motion";
import { Calendar, PhoneCall } from "lucide-react";
import { hero } from "../data";

const iconMap = {
  Calendar: Calendar,
  PhoneCall: PhoneCall,
};

const Hero = () => {

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center py-20 lg:py-0 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${hero.image})` }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-hospital-sky-blue font-extrabold tracking-[0.2em] mb-4 uppercase text-sm">
            {hero.subheading}
          </p>
          <h1 className="text-3xl md:text-5xl font-black text-hospital-navy leading-tight mb-6">
            {hero.heading}
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed mb-10 max-w-2xl font-medium">
            {hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-hospital-navy text-white px-8 py-4 rounded-lg font-bold shadow-lg flex items-center justify-center gap-3 hover:bg-hospital-navy/90 transition-all"
            >
              <Calendar className="w-5 h-5 text-hospital-sky-blue" />
              {hero.cta1}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-hospital-light-blue text-hospital-navy px-8 py-4 rounded-lg font-bold shadow-md flex items-center justify-center gap-3 border border-hospital-sky-blue/20 hover:bg-white transition-all"
            >
              <PhoneCall className="w-5 h-5 text-hospital-sky-blue" />
              {hero.cta2}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

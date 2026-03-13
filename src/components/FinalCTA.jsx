import { motion } from "framer-motion";
import { hospitalData } from "../data";

const FinalCTA = () => {
  const { finalCTA } = hospitalData;

  return (
    <section className="py-24 bg-hospital-soft-blue text-center overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-hospital-navy mb-10 leading-tight">
            {finalCTA.heading}
          </h2>
          <p className="text-xl text-[#475569] leading-relaxed font-medium mb-12 max-w-3xl mx-auto">
            {finalCTA.subheading}
          </p>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-hospital-navy text-white px-12 py-5 rounded-full font-bold shadow-2xl hover:bg-hospital-sky-blue transition-all"
          >
            {finalCTA.cta}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;

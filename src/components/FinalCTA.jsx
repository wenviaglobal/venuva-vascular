import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useAppointment } from "../context/AppointmentContext";
import { finalCTA } from "../data";

const FinalCTA = () => {
  const { openModal } = useAppointment();
  const navigate = useNavigate();

  return (
    <section className="py-32 bg-hospital-soft-blue text-center overflow-hidden border-t border-hospital-light-blue/30">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-hospital-sun font-black tracking-[0.4em] uppercase text-[10px] mb-8">
            Take the first step
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-hospital-navy mb-10 leading-[1.1] uppercase tracking-tighter">
            {finalCTA.heading}
          </h2>
          <p className="text-lg text-hospital-navy/70 leading-relaxed font-medium mb-12 max-w-2xl mx-auto">
            {finalCTA.subheading}
          </p>
          <motion.button
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openModal()}
            className="bg-hospital-emerald text-white px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-hospital-navy transition-all"
          >
            {finalCTA.cta}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;

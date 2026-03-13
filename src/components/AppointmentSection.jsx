import { motion } from "framer-motion";
import { appointment } from "../data";

const AppointmentSection = () => {

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-hospital-navy text-white p-12 md:p-24 rounded-3xl relative overflow-hidden shadow-2xl">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-hospital-sky-blue/10 transform skew-x-12 translate-x-1/2 z-0"></div>
          
          <div className="relative z-10 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">
                {appointment.heading}
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium mb-12">
                {appointment.description}
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-hospital-sky-blue text-white px-10 py-5 rounded-full font-bold shadow-lg shadow-black/30 hover:bg-white hover:text-hospital-navy transition-all"
              >
                {appointment.cta}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;

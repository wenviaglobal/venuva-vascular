import { motion } from "framer-motion";
import { appointment } from "../data";

const AppointmentSection = () => {

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-hospital-navy rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl">
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-hospital-sky-blue/10 transform -skew-x-12 translate-x-1/4" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight uppercase tracking-tight">
                {appointment.heading}
              </h2>
              <p className="text-lg text-emerald-100/60 leading-relaxed font-medium mb-10">
                {appointment.description}
              </p>
              <button className="bg-hospital-amber text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-hospital-navy transition-all">
                {appointment.cta}
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;

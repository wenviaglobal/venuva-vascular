import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { whyChooseUs } from "../data";

const WhyChooseUs = () => {

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-hospital-sun font-black tracking-[0.3em] uppercase text-[10px] mb-4">
            {whyChooseUs.tag}
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-hospital-navy uppercase tracking-tight">
            {whyChooseUs.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {whyChooseUs.reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="mb-6 w-16 h-16 rounded-3xl bg-hospital-soft-blue flex items-center justify-center text-hospital-teal group-hover:bg-hospital-teal group-hover:text-white transition-all duration-300">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="text-xl font-black text-hospital-navy mb-4 uppercase tracking-tight group-hover:text-hospital-teal transition-colors">
                {reason.title}
              </h4>
              <p className="text-hospital-slate leading-relaxed font-medium">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

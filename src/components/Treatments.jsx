import { motion } from "framer-motion";
import {
  Droplets, Activity, Dna, Stethoscope,
  HeartPulse, Zap, Bone, Smile, ArrowRight
} from "lucide-react";
import { treatments, treatmentsPage } from "../data";
import { Link } from "react-router-dom";

const iconMap = {
  Droplets,
  Activity,
  Dna,
  Stethoscope,
  HeartPulse,
  Zap,
  Bone,
  Smile
};

const Treatments = () => {

  return (
    <section id="treatments" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-hospital-amber font-black tracking-[0.3em] uppercase text-[10px] mb-4">
              Expert Solutions
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-hospital-navy uppercase tracking-tight">
              Advanced Vascular Treatments
            </h2>
          </div>
          <Link to="/treatments" className="text-[10px] font-black text-hospital-teal hover:text-hospital-navy transition-colors uppercase tracking-[0.2em] border-b-2 border-hospital-teal pb-1">
            Browse All Procedures →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.items.map((item, idx) => {
            const Icon = iconMap[item.icon] || Droplets;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 rounded-4xl p-8 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-hospital-navy/5 transition-all group flex flex-col h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-hospital-teal mb-8 group-hover:bg-hospital-teal group-hover:text-white transition-all">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-black text-hospital-navy mb-4 leading-tight">
                  {item.title}
                </h3>

                <p className="text-hospital-charcoal text-sm leading-relaxed mb-8 font-medium line-clamp-2">
                  {item.description}
                </p>

                <div className="mt-auto">
                  <Link
                    to={item.slug ? `/treatments/${item.slug}` : "/treatments"}
                    className="inline-flex items-center gap-2 text-hospital-teal font-black text-[10px] uppercase tracking-widest hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Treatments;

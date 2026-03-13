import { motion } from "framer-motion";
import { 
  Droplets, Activity, Dna, Stethoscope, 
  HeartPulse, Zap, Bone, Smile, ArrowRight 
} from "lucide-react";
import { hospitalData } from "../data";
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
  const { treatments, treatmentsPage } = hospitalData;

  return (
    <section id="treatments" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-hospital-sky-blue font-black tracking-[0.3em] uppercase text-[10px] mb-4">
            {treatments.tag}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-hospital-navy uppercase tracking-tight mb-6">
            {treatments.heading}
          </h2>
          <div className="w-20 h-1.5 bg-hospital-sky-blue mx-auto mb-8 rounded-full"></div>
          <p className="text-slate-500 text-lg font-medium leading-relaxed">
            {treatments.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {treatments.items.map((item, idx) => {
            const Icon = iconMap[item.icon];
            // Find corresponding image from treatmentsPage specialties
            const specialtyData = treatmentsPage.specialties.find(s => s.title === item.title);
            const displayImage = specialtyData?.image || "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800";

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-white rounded-4xl overflow-hidden shadow-xl shadow-slate-200/60 flex flex-col group border border-slate-100"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={displayImage} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  {/* Floating Icon Overlay */}
                  <div className="absolute -bottom-8 right-8 w-16 h-16 rounded-full bg-hospital-navy flex items-center justify-center text-white border-4 border-white shadow-lg transition-transform duration-500 group-hover:scale-110 z-10">
                    {Icon && <Icon className="w-7 h-7" />}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 pb-10 flex-1 flex flex-col">
                  <h3 className="text-xl font-black text-hospital-navy mb-4 leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium line-clamp-3">
                    {item.description}
                  </p>

                  <div className="mt-auto">
                    <Link 
                      to="/treatments" 
                      className="inline-flex items-center gap-2 text-hospital-sky-blue font-black text-sm hover:gap-3 transition-all"
                    >
                      Learn More <ArrowRight size={18} />
                    </Link>
                  </div>
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

import PageHeader from "../components/PageHeader";
import SEO from "../components/utils/SEO";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { useCollection } from "../context/ContentContext";

const ServicesPage = () => {
  const services = useCollection("services");

  return (
    <div className="bg-white min-h-screen pb-24">
      <SEO 
        title="Vascular Services | Venuva Vascular Center" 
        description="Comprehensive clinical support, advanced diagnostics, and specialist consultations for vascular care." 
      />
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive Clinical Support & Patient Care"
        image="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2000"
      />

      <div className="container mx-auto px-6 md:px-12 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-hospital-soft-blue border border-hospital-mint hover:bg-white hover:shadow-2xl hover:shadow-hospital-navy/5 transition-all group"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                {(() => {
                  const Icon = Icons[service.icon] || Icons.Stethoscope;
                  return <Icon size={32} />;
                })()}
              </div>
              <h3 className="text-2xl font-black text-hospital-navy mb-4">{service.title}</h3>
              <p className="text-hospital-charcoal leading-relaxed font-medium">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

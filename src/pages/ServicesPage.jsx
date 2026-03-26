import PageHeader from "../components/PageHeader";
import { motion } from "framer-motion";
import { Shield, Clock, Stethoscope, Microscope, Zap, Heart } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      title: "24/7 Emergency Care",
      desc: "Immediate intervention for vascular emergencies, DVT, and acute conditions with a dedicated hotline.",
      icon: Clock,
      color: "bg-rose-50 text-rose-600"
    },
    {
      title: "Day Care Surgery",
      desc: "Minimally invasive procedures that allow you to return home on the same day as your treatment.",
      icon: Zap,
      color: "bg-amber-50 text-amber-600"
    },
    {
      title: "Advanced Diagnostics",
      desc: "State-of-the-art imaging including 4D Ultrasound, Doppler, and CT Angiography.",
      icon: Microscope,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "International Patient Desk",
      desc: "Personalized assistance for global patients including travel, accommodation, and documentation.",
      icon: Shield,
      color: "bg-amber-50 text-amber-600"
    },
    {
      title: "Specialist Consultation",
      desc: "Direct access to top interventional radiologists and vascular specialists for second opinions.",
      icon: Stethoscope,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Post-Op Home Care",
      desc: "Dedicated recovery support and tele-consultation follow-ups to ensure long-term clinical success.",
      icon: Heart,
      color: "bg-pink-50 text-pink-600"
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
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
                <service.icon size={32} />
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

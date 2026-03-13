import PageHeader from "../components/PageHeader";
import { motion } from "framer-motion";
import { hospitalData } from "../data";
import { Linkedin, Facebook, Instagram, Users } from "lucide-react";
import { Link } from "react-router-dom";

const DoctorsPage = () => {
  const { doctorsSection } = hospitalData;

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <PageHeader
        title="Our Medical Team"
        subtitle="Global Expertise, Personalized Care"
        image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000"
      />

      <div className="container mx-auto px-6 md:px-12 mt-20">
        {/* Team Photo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 relative rounded-[3rem] overflow-hidden shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2000"
            alt="Medical Team"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-hospital-navy/80 via-hospital-navy/20 to-transparent flex flex-col justify-end p-12">
            <div className="flex items-center gap-4 text-hospital-sky-blue mb-4">
              <Users size={24} />
              <span className="font-black uppercase tracking-[0.3em] text-xs">A unified Force in Healthcare</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white max-w-3xl leading-tight">
              A Multi-Disciplinary Team dedicated to your vascular health.
            </h2>
          </div>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {doctorsSection.doctors.map((doctor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all border border-slate-100"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-8 shadow-lg">
                <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-black text-hospital-navy mb-2">{doctor.name}</h3>
                <p className="text-hospital-sky-blue font-bold uppercase tracking-widest text-xs mb-8">{doctor.specialty}</p>

                <div className="flex justify-center gap-4 mb-8">
                  {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                    <motion.button key={i} whileHover={{ y: -3 }} className="p-3 rounded-xl bg-slate-50 text-slate-400 hover:bg-hospital-sky-blue hover:text-white transition-colors">
                      <Icon size={18} />
                    </motion.button>
                  ))}
                </div>

                <Link
                  to={`/doctors/${doctor.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-block w-full py-4 rounded-2xl bg-hospital-navy text-white font-black text-xs uppercase tracking-widest hover:bg-hospital-sky-blue transition-colors shadow-lg shadow-hospital-navy/10"
                >
                  View Full Profile
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;

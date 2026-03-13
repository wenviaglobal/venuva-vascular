import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { doctorsSection } from "../data";
import PageHeader from "../components/PageHeader";
import {
  Award,
  BookOpen,
  CheckCircle,
  Linkedin,
  Facebook,
  Instagram,
  ArrowLeft,
  Calendar
} from "lucide-react";

const DoctorProfile = () => {
  const { id } = useParams();

  // Find doctor by ID or Slug
  const doctor = doctorsSection.doctors.find(d =>
    d.id === id || d.name.toLowerCase().replace(/\s+/g, '-') === id
  );

  if (!doctor) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-3xl font-black text-hospital-navy mb-6">Doctor Not Found</h2>
        <Link to="/doctors" className="flex items-center gap-2 text-hospital-sky-blue font-bold uppercase tracking-widest">
          <ArrowLeft size={20} /> Back to Team
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <PageHeader
        title={doctor.name}
        subtitle={doctor.specialty}
        image={doctor.image}
      />

      <div className="container mx-auto px-6 md:px-12 mt-20">
        <Link to="/doctors" className="inline-flex items-center gap-2 text-hospital-navy/60 hover:text-hospital-sky-blue font-black text-xs uppercase tracking-[0.2em] mb-12 transition-colors">
          <ArrowLeft size={16} /> Back to Specialist Team
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Portrait & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-4"
          >
            <div className="bg-white rounded-[2.5rem] p-4 shadow-xl shadow-slate-200/50 border border-white">
              <div className="aspect-square rounded-4xl overflow-hidden mb-8">
                <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
              </div>
              <div className="px-6 pb-8 text-center">
                <h3 className="text-2xl font-black text-hospital-navy mb-2">{doctor.name}</h3>
                <p className="text-hospital-sky-blue font-bold text-sm uppercase tracking-widest mb-8">{doctor.specialty}</p>

                <div className="flex justify-center gap-4 mb-8">
                  {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                    <button key={i} className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-400 hover:bg-hospital-sky-blue hover:text-white transition-all">
                      <Icon size={20} />
                    </button>
                  ))}
                </div>

                <button className="w-full bg-hospital-navy text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-4 shadow-xl shadow-hospital-navy/20 hover:bg-hospital-sky-blue transition-colors">
                  <Calendar size={18} /> Book Appointment
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Information Bento Grid */}
          <div className="lg:col-span-8 space-y-8">
            {/* Biography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-slate-200/50 border border-white"
            >
              <h3 className="text-2xl font-black text-hospital-navy mb-6 flex items-center gap-4">
                <span className="w-1.5 h-8 bg-hospital-sky-blue rounded-full"></span>
                Specialist Biography
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                {doctor.bio}
              </p>
            </motion.div>

            {/* Bento Grid: Qualifications, Achievements, Certifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Qualifications */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-slate-200/50 border border-white"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  <BookOpen size={28} />
                </div>
                <h4 className="text-xl font-black text-hospital-navy mb-6">Education & Qualifications</h4>
                <ul className="space-y-4">
                  {doctor.qualifications?.map((q, i) => (
                    <li key={i} className="flex gap-3 text-slate-500 font-bold text-sm">
                      <CheckCircle size={18} className="text-hospital-sky-blue shrink-0" />
                      {q}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-hospital-navy rounded-[2.5rem] p-10 shadow-xl shadow-hospital-navy/20 border border-hospital-navy"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 text-hospital-sky-blue flex items-center justify-center mb-6">
                  <Award size={28} />
                </div>
                <h4 className="text-xl font-black text-white mb-6">Key Achievements</h4>
                <ul className="space-y-4">
                  {doctor.achievements?.map((a, i) => (
                    <li key={i} className="flex gap-3 text-slate-300 font-bold text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-hospital-sky-blue mt-2 shrink-0"></div>
                      {a}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Certifications (Full Width below those two if needed, or side by side) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="md:col-span-2 bg-white rounded-[2.5rem] p-10 shadow-xl shadow-slate-200/50 border border-white"
              >
                <h4 className="text-xl font-black text-hospital-navy mb-8 flex items-center gap-4">
                  Professional Certifications & Memberships
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {doctor.certifications?.map((c, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4 hover:border-hospital-sky-blue transition-colors group">
                      <div className="p-3 rounded-xl bg-white text-hospital-sky-blue group-hover:bg-hospital-sky-blue group-hover:text-white transition-colors">
                        <CheckCircle size={20} />
                      </div>
                      <span className="text-xs font-black text-hospital-navy uppercase tracking-wider leading-tight">{c}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;

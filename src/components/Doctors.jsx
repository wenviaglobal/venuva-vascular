import { motion } from "framer-motion";
import { User, Award, ArrowRight, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { doctorsSection } from "../data/team";

const Doctors = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-hospital-soft-blue/50 -skew-x-12 translate-x-1/2 -z-10" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-hospital-sun font-black tracking-[0.3em] uppercase text-xs mb-4 block"
            >
              {doctorsSection.tag}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-black text-hospital-navy leading-tight"
            >
              {doctorsSection.heading}
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/doctors"
              className="group flex items-center gap-3 text-hospital-navy font-black text-xs uppercase tracking-widest hover:text-hospital-sun transition-colors"
            >
              Meet All Specialists
              <div className="w-10 h-10 rounded-full bg-hospital-soft-blue flex items-center justify-center group-hover:bg-hospital-sun group-hover:text-white transition-all">
                <ArrowRight size={16} />
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {doctorsSection.doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white border border-hospital-mint rounded-[32px] overflow-hidden hover:shadow-2xl hover:shadow-hospital-navy/5 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Doctor Image */}
                <div className="md:w-2/5 relative overflow-hidden aspect-3/4 md:aspect-auto">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover  transition-all duration-700"
                  />
                  {/* Doctors Social Links In home Page  */}
                  {/* <div className="absolute inset-0 bg-linear-to-t from-hospital-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="flex gap-3">
                      <a href={doctor.linkedin} className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-hospital-sky-blue transition-colors">
                        <Linkedin size={14} />
                      </a>
                      <a href={doctor.twitter} className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-hospital-sky-blue transition-colors">
                        <Twitter size={14} />
                      </a>
                    </div>
                  </div> */}
                </div>

                {/* Doctor Content */}
                <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="px-3 py-1 bg-hospital-sky-blue/10 text-hospital-sky-blue text-xs font-black uppercase tracking-widest rounded-full">
                        {doctor.role}
                      </div>
                      <div className="flex items-center gap-1 text-hospital-sun">
                        <Award size={12} />
                        <span className="text-xs font-black uppercase tracking-widest">{doctor.experience} Exp</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-black text-hospital-navy mb-1 group-hover:text-hospital-teal transition-colors">
                      {doctor.name}
                    </h3>
                    <p className="text-hospital-sky-blue font-bold text-xs mb-4 uppercase tracking-wider">
                      {doctor.specialty}
                    </p>

                    <p className="text-hospital-charcoal/70 text-sm leading-relaxed mb-6 line-clamp-3">
                      {doctor.bio}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {doctor.focus.map((item, i) => (
                        <span key={i} className="text-xs font-bold text-hospital-navy/60 bg-hospital-mint px-2.5 py-1 rounded-lg border border-hospital-mint/50">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/doctors/${doctor.slug}`}
                    className="inline-flex items-center gap-2 text-hospital-teal font-black text-xs uppercase tracking-[0.15em] group/btn"
                  >
                    View Full Profile
                    <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;

import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import { about } from "../data";

const About = () => {

  return (
    <section id="about" className="py-5 h-screen bg-hospital-soft-blue overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 md:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-linear-to-r from-hospital-mint/30 to-hospital-mint/10 border border-hospital-emerald/20 shadow-sm mb-6">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hospital-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-hospital-emerald"></span>
              </span>
              <p className="text-shadow-hospital-emerald font-extrabold tracking-wider text-lg capitalize">
                {about.title || "About us"}
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-hospital-navy mb-8 leading-[1.1]">
              {about.heading}
            </h2>

            <p className="text-lg leading-relaxed text-hospital-charcoal font-medium max-w-xl">
              {about.description}
            </p>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative group"
          >
            <div className="relative mt-12 z-10 rounded-4xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src={about.image}
                alt="Vascular Specialists"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-hospital-navy/40 to-transparent"></div>
            </div>

            {/* Decorative Card */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center gap-4">
                {/* <div className="w-12 h-12 rounded-full bg-hospital-soft-blue flex items-center justify-center text-hospital-sun shrink-0">
                  <Activity className="w-5 h-5" />
                </div> */}
                {/* Vertical Separator */}
                {/* <div className="w-px h-16 bg-hospital-slate/20 mx-1" /> */}
                <div>
                  <p className="text-xl font-black text-hospital-sun uppercase tracking-widest">10+ Years</p>
                  <p className="text-lg text-hospital-emerald font-bold capitalize tracking-widest">Experience</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

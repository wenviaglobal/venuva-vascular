import { motion } from "framer-motion";
import { Calendar, PhoneCall, CheckCircle, ShieldCheck, UserCheck, Zap } from "lucide-react";
import { hero, brand } from "../data";
import { treatments } from "../data";

const Hero = () => {

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center bg-hospital-soft-blue overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-hospital-sky-blue/5 skew-x-12 translate-x-1/4" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 py-12 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Content */}
          <div className="lg:w-3/5 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <p className="text-hospital-amber font-extrabold tracking-[0.2em] mb-4 uppercase text-sm">
                {hero.subheading}
              </p>

              <div className="absolute -inset-20 bg-linear-to-r from-white via-white/40 to-transparent -z-10 blur-3xl pointer-events-none" />

              <h1 className="text-4xl md:text-6xl font-black text-hospital-navy leading-[1.1] mb-8">
                {hero.heading}
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-12 font-medium">
                {hero.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-10 border-t border-slate-100">
                {[
                  { label: "Day-Care Procedure", value: "30", suffix: "Min", icon: Zap, color: "text-amber-500" },
                  { label: "Cases Solved", value: "10,000", suffix: "+", icon: UserCheck, color: "text-hospital-sky-blue" },
                  { label: "Experience", value: "10", suffix: "+ Yrs", icon: Calendar, color: "text-emerald-500" }
                ].map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                        <Icon size={24} className={stat.color} />
                      </div>
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-black text-hospital-navy leading-none">
                            {stat.value}
                          </span>
                          <span className="text-hospital-amber text-sm font-black uppercase tracking-widest">
                            {stat.suffix}
                          </span>
                        </div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Lead Form (Floating Card) */}
          <div className="lg:w-2/5 w-full">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-hospital-navy/10 border border-white relative"
            >
              {/* Form Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-hospital-sky-blue text-white px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest shadow-lg whitespace-nowrap">
                Book an appointment with our expert
              </div>

              <div className="space-y-6 mt-4">
                <div className="space-y-2 text-center mb-8">
                  <h3 className="text-xl font-black text-hospital-navy uppercase">Book Appointment</h3>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">No Booking Fee • Consultation at Earliest</p>
                </div>

                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Patient Name"
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-hospital-sky-blue/20 transition-all font-medium"
                  />
                  <input
                    type="tel"
                    placeholder="Enter 10 Digit mobile number"
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-hospital-sky-blue/20 transition-all font-medium"
                  />
                  {/* <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-hospital-sky-blue/20 transition-all font-medium text-slate-500">
                    <option>Select City</option>
                  </select> */}
                  <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-hospital-sky-blue/20 transition-all font-medium text-slate-500">
                    <option>Select Disease</option>
                    {treatments.items.map((item, idx) => (
                      <option key={idx} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                </div>

                <button className="w-full bg-hospital-amber text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:shadow-hospital-amber/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  Book Appointment Now
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

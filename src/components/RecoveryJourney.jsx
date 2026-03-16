import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { motion } from "framer-motion";
import { recoveryJourney } from "../data/recovery";
import { Calendar, Clock, Sparkles, ChevronRight } from "lucide-react";

const RecoveryJourney = () => {
  return (
    <section className="py-8 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto bg-slate-50/50 rounded-2xl p-5 md:p-8 border border-slate-100 shadow-sm relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-hospital-teal/5 rounded-full blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Content: Header + Timeline */}
            <div className="lg:col-span-5 flex flex-col h-full">
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-0.5 bg-hospital-teal rounded-full" />
                  <span className="text-hospital-amber font-black uppercase tracking-[0.3em] text-[9px]">
                    {recoveryJourney.tag}
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-black text-hospital-navy uppercase leading-tight">
                  {recoveryJourney.heading}
                </h2>
              </div>

              <div className="space-y-4 flex-1">
                {recoveryJourney.timeline.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 relative"
                  >
                    {idx !== recoveryJourney.timeline.length - 1 && (
                      <div className="absolute left-4 top-10 bottom-[-30px] w-px bg-slate-200/50" />
                    )}
                    <div className="w-7 h-7 rounded-md bg-white border border-slate-100 flex items-center justify-center text-hospital-teal shrink-0 shadow-xs">
                      <span className="text-[10px] font-black">{idx + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-hospital-navy uppercase mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[10px] text-slate-500 font-medium leading-relaxed max-w-xs">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <button className="group flex items-center gap-2 bg-hospital-amber text-white px-6 py-3 rounded-lg font-black text-[9px] uppercase tracking-widest hover:bg-hospital-navy transition-all shadow-lg shadow-hospital-amber/10">
                  Book Consultation
                  <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right: The Slider "Card" */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden shadow-2xl shadow-hospital-navy/10 border-4 border-white bg-white"
              >
                <ReactCompareSlider
                  itemOne={
                    <div className="relative h-full">
                      <ReactCompareSliderImage
                        src={recoveryJourney.comparison.before.image}
                        alt={recoveryJourney.comparison.before.label}
                        className="object-cover h-[150px] md:h-[300px] w-full"
                      />
                      <div className="absolute top-4 left-4 bg-hospital-navy/90 backdrop-blur-md px-4 py-1.5 rounded-full">
                        <span className="text-white font-black text-[9px] uppercase tracking-widest">
                          {recoveryJourney.comparison.before.label}
                        </span>
                      </div>
                    </div>
                  }
                  itemTwo={
                    <div className="relative h-full">
                      <ReactCompareSliderImage
                        src={recoveryJourney.comparison.after.image}
                        alt={recoveryJourney.comparison.after.label}
                        className="object-cover h-[250px] md:h-[300px] w-full"
                      />
                      <div className="absolute top-4 right-4 bg-hospital-teal/90 backdrop-blur-md px-4 py-1.5 rounded-full">
                        <span className="text-white font-black text-[9px] uppercase tracking-widest">
                          {recoveryJourney.comparison.after.label}
                        </span>
                      </div>
                    </div>
                  }
                  style={{ height: '100%', width: '100%' }}
                />

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/30 backdrop-blur-md px-4 py-2 rounded-xl border border-white/40 pointer-events-none">
                  <Sparkles size={14} className="text-white" />
                  <span className="text-white font-black text-[9px] uppercase tracking-widest">
                    Slide to view transformation
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecoveryJourney;

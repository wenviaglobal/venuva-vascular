import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAppointment } from "../context/AppointmentContext";
import { recoveryJourney } from "../data/recovery";
import { Sparkles, ChevronRight, CheckCircle2, ShieldCheck, Activity } from "lucide-react";

const RecoveryJourney = () => {
  const { openModal } = useAppointment();
  const navigate = useNavigate();
  const [activeCaseId, setActiveCaseId] = useState(recoveryJourney.cases[0].id);

  const activeCase = useMemo(() =>
    recoveryJourney.cases.find(c => c.id === activeCaseId) || recoveryJourney.cases[0]
    , [activeCaseId]);

  // Depth-Shift Animation Settings
  const depthShiftVariants = {
    initial: {
      opacity: 0,
      scale: 0.92,
      filter: "blur(12px)",
      z: -100
    },
    animate: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      z: 0
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      filter: "blur(8px)",
      z: 100
    }
  };

  return (
    <section className="bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Area */}
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-2 mb-4">
              <Sparkles className="text-hospital-sun w-5 h-5" />
              <span className="text-hospital-sun font-black uppercase tracking-[0.4em] text-xs">
                {recoveryJourney.tag}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-hospital-navy uppercase tracking-tighter mb-6">
              {recoveryJourney.heading}
            </h2>

            {/* Treatment Selector Chips */}
            <div className="flex flex-wrap justify-center gap-3 mt-10">
              {recoveryJourney.cases.map((treatment) => (
                <button
                  key={treatment.id}
                  onClick={() => setActiveCaseId(treatment.id)}
                  className={`px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 border-2 ${activeCaseId === treatment.id
                      ? "bg-hospital-navy border-hospital-navy text-white shadow-xl scale-105"
                      : "bg-white border-hospital-soft-blue text-hospital-slate hover:border-hospital-teal hover:text-hospital-teal"
                    }`}
                >
                  {treatment.title}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-hospital-soft-blue/50 rounded-[3rem] p-6 md:p-12 border border-hospital-mint shadow-sm relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-hospital-teal/5 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-hospital-sun/5 rounded-full blur-3xl opacity-50" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCaseId}
                variants={depthShiftVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1] // Custom clinical-smooth ease
                }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10"
              >
                {/* Left Content: Info + Timeline */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <div className="mb-10">
                    <p className="text-hospital-sun font-bold text-xs uppercase tracking-widest mb-2">
                      {activeCase.subtitle}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-black text-hospital-navy uppercase mb-4">
                      {activeCase.title} Journey
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {activeCase.timeline.map((item, idx) => (
                      <div key={idx} className="flex gap-5 group">
                        <div className="w-12 h-12 rounded-2xl bg-white border border-hospital-mint flex flex-col items-center justify-center text-hospital-teal shrink-0 shadow-sm group-hover:border-hospital-teal transition-colors">
                          <span className="text-xs font-black leading-none mb-0.5">{item.week.split(' ')[0]}</span>
                          <span className="text-[11px] font-bold opacity-60 leading-none uppercase">{item.week.split(' ')[1]}</span>
                        </div>
                        <div className="pt-1">
                          <h4 className="text-sm font-black text-hospital-navy uppercase tracking-wider mb-1 flex items-center gap-2">
                            {item.title} <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                          </h4>
                          <p className="text-sm text-hospital-slate font-medium leading-relaxed max-w-xs transition-colors group-hover:text-hospital-charcoal">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 flex items-center gap-6">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm">
                      <ShieldCheck size={16} className="text-hospital-teal" />
                      <span className="text-xs font-black text-hospital-navy uppercase tracking-widest">Post-Procedure</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm">
                      <Activity size={16} className="text-hospital-teal" />
                      <span className="text-xs font-black text-hospital-navy uppercase tracking-widest">Rapid Healing</span>
                    </div>
                  </div>
                </div>

                {/* Right: The Comparison Visual */}
                <div className="lg:col-span-7">
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(30,27,75,0.1)]  bg-white group/slider">
                    <ReactCompareSlider
                      itemOne={
                        <div className="relative h-full">
                          <ReactCompareSliderImage
                            src={activeCase.comparison.before.image}
                            alt={activeCase.comparison.before.label}
                            className="object-cover w-full h-[400px] md:h-[550px] brightness-95 grayscale-20"
                          />
                          <div className="absolute top-6 left-6 bg-hospital-navy/90 backdrop-blur-xl px-5 py-2 rounded-2xl border border-white/20">
                            <span className="text-white font-black text-xs uppercase tracking-[0.2em]">
                              {activeCase.comparison.before.label}
                            </span>
                          </div>
                        </div>
                      }
                      itemTwo={
                        <div className="relative h-full">
                          <ReactCompareSliderImage
                            src={activeCase.comparison.after.image}
                            alt={activeCase.comparison.after.label}
                            className="object-cover w-full h-[400px] md:h-[550px] shadow-inner"
                          />
                          <div className="absolute top-6 right-6 bg-hospital-teal/90 backdrop-blur-xl px-5 py-2 rounded-2xl border border-white/20">
                            <span className="text-white font-black text-xs uppercase tracking-[0.2em]">
                              {activeCase.comparison.after.label}
                            </span>
                          </div>
                        </div>
                      }
                      style={{ height: '100%', width: '100%' }}
                    />

                    {/* Hint overlay */}
                    <div className="absolute inset-x-0 bottom-8 flex justify-center pointer-events-none opacity-0 group-hover/slider:opacity-100 transition-opacity duration-500">
                      <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 ring-1 ring-black/5">
                        <Sparkles size={16} className="text-white animate-pulse" />
                        <span className="text-white font-black text-xs uppercase tracking-[0.2em]">
                          Slide for result
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => openModal()}
              className="bg-hospital-navy text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-hospital-sun transition-all shadow-2xl hover:scale-105 active:scale-95"
            >
              Start Your Recovery Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecoveryJourney;

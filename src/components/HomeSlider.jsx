import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Zap, ShieldCheck, UserCheck, Calendar, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppointment } from "../context/AppointmentContext";

const iconMap = {
  Calendar,
  CheckCircle,
  ShieldCheck,
  UserCheck,
  Zap
};

const HomeSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { openModal } = useAppointment();

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  if (!slides || slides.length === 0) return null;

  return (
    <div className="relative w-full h-[calc(100vh-80px)] min-h-[700px] overflow-hidden bg-hospital-navy flex items-center group">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          {/* Main Background Image */}
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].heading}
            className="w-full h-full object-cover object-right"
          />
          {/* Subtle Contrast Mask - Left side only to keep text neat and clear */}
          <div className="absolute inset-x-0 inset-y-0 bg-linear-to-r from-hospital-navy/60 via-hospital-navy/10 to-transparent z-10" />
        </motion.div>
      </AnimatePresence>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-[46%] -translate-y-1/2 z-40 w-12 h-12 md:w-14 md:h-14 rounded-full bg-hospital-navy/20 hover:bg-white text-white hover:text-hospital-navy flex items-center justify-center backdrop-blur-md transition-opacity duration-500 border border-white/20 shadow-lg md:opacity-0 md:group-hover:opacity-100"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-[46%] -translate-y-1/2 z-40 w-12 h-12 md:w-14 md:h-14 rounded-full bg-hospital-navy/20 hover:bg-white text-white hover:text-hospital-navy flex items-center justify-center backdrop-blur-md transition-opacity duration-500 border border-white/20 shadow-lg md:opacity-0 md:group-hover:opacity-100"
      >
        <ChevronRight size={24} />
      </button>

      {/* Main Content Container */}
      <div className="absolute inset-0 z-10 container mx-auto px-6 md:px-12 flex flex-col justify-center pb-40 md:pb-24">
        <div className="w-full md:w-2/3 lg:w-[55%]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col"
            >


              {/* Subheading */}
              <p className="text-hospital-sun font-black tracking-[0.2em] mb-4 uppercase text-sm">
                {slides[currentSlide].subheading}
              </p>

              {/* Main Heading */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 md:mb-6">
                {slides[currentSlide].heading}
              </h1>

              {/* Description */}
              <p className="text-base md:text-lg text-white/80 leading-relaxed font-medium mb-6 md:mb-10 max-w-lg">
                {slides[currentSlide].description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-8 md:mb-12 transition-opacity duration-700 md:opacity-0 md:group-hover:opacity-100">
                <button
                  onClick={openModal}
                  className="bg-hospital-sun hover:bg-amber-400 text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-xl"
                >
                  Book Appointment
                </button>
                <Link
                  to="/treatments"
                  className="border border-white/40 hover:bg-white hover:text-hospital-navy text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all backdrop-blur-sm"
                >
                  Explore Treatments
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      {/* Dynamic Stats Banner along the Bottom */}
      <div className="absolute bottom-0 left-0 w-full z-30 bg-hospital-navy/80 backdrop-blur-xl border-t border-white/10 py-6">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="wait">
              {slides[currentSlide].stats.map((stat, idx) => {
                const Icon = iconMap[stat.icon] || Zap;
                return (
                  <motion.div
                    key={`${currentSlide}-${idx}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="flex justify-center items-center gap-4 border-r border-white/10 last:border-r-0 lg:border-r"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-sm flex items-center justify-center shrink-0">
                      <Icon size={20} className={stat.color} />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black text-white leading-none">
                          {stat.value}
                        </span>
                        <span className="text-hospital-sun text-[10px] font-black uppercase tracking-widest">
                          {stat.suffix}
                        </span>
                      </div>
                      <p className="text-[10px] font-bold text-hospital-slate uppercase tracking-widest mt-1">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;

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
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const dragThreshold = 50;
  const onDragEnd = (event, info) => {
    if (info.offset.x < -dragThreshold) {
      nextSlide();
    } else if (info.offset.x > dragThreshold) {
      prevSlide();
    }
  };

  if (!slides || slides.length === 0) return null;

  return (
    <div className="relative w-full h-[calc(100vh-80px)] min-h-[550px] md:min-h-full overflow-hidden bg-hospital-navy flex items-center group touch-pan-y">
      
      {/* 1. Draggable Slider Surface */}
      <motion.div 
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={onDragEnd}
        className="absolute inset-x-0 inset-y-0 z-0 cursor-grab active:cursor-grabbing"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].heading}
              className="w-full h-full object-cover object-top pointer-events-none select-none"
              fetchPriority="high"
              loading="eager"
            />
            <div className="absolute inset-x-0 inset-y-0 bg-linear-to-r from-hospital-navy/60 via-hospital-navy/10 to-transparent z-10" />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* 2. Content Layer */}
      <div className="absolute inset-0 z-10 container mx-auto px-4 sm:px-6 md:px-12 flex flex-col justify-center pb-28 sm:pb-32 md:pb-24">
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
              <p className="text-hospital-sun font-black tracking-[0.4em] mb-4 uppercase text-sm">
                {slides[currentSlide].subheading}
              </p>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-3 md:mb-6">
                {slides[currentSlide].heading}
              </h1>

              <p className="text-base md:text-lg text-white/80 leading-relaxed font-medium mb-6 md:mb-10 max-w-lg">
                {slides[currentSlide].description}
              </p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4">
                <button
                  onClick={openModal}
                  className="flex items-center gap-3 bg-hospital-navy hover:bg-hospital-navy/90 text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-xl group/btn"
                >
                  <Calendar size={16} className="text-hospital-sky-blue" />
                  <span>Book Appointment</span>
                </button>

                <Link
                  to="/treatments"
                  className="bg-black/30 hover:bg-black/50 text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all backdrop-blur-md border border-white/5"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 4. Options & Navigation Controls (Locked Position) */}
        <div className="absolute min-[450px]:bottom-32 bottom-36 md:bottom-28 left-4 sm:left-6 md:left-12 z-50">
          <div className="flex items-center gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`group relative h-1.5 rounded-full transition-all duration-500 overflow-hidden ${
                  currentSlide === idx ? "w-12 md:w-16 bg-white" : "w-6 md:w-8 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              >
                {currentSlide === idx && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    key={`progress-${currentSlide}`}
                    transition={{ duration: 7, ease: "linear" }}
                    className="absolute inset-0 bg-hospital-sun shadow-[0_0_15px_rgba(245,158,11,0.6)]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Stats Banner */}
      <div className="absolute bottom-0 left-0 w-full z-30 bg-hospital-navy/80 backdrop-blur-xl border-t border-white/10 py-6">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <AnimatePresence mode="popLayout">
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
                        <span className="text-hospital-sun text-xs font-black uppercase tracking-widest">
                          {stat.suffix}
                        </span>
                      </div>
                      <p className="text-xs font-bold text-hospital-slate uppercase tracking-widest mt-1">
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

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Calendar, PhoneCall, CheckCircle, ShieldCheck, UserCheck, Zap, ChevronLeft, ChevronRight, Activity, MapPin, Phone, Mail, Clock } from "lucide-react";
import { heroSlides, brand } from "../data";
import { useAppointment } from "../context/AppointmentContext";

const iconMap = {
  Calendar,
  PhoneCall,
  CheckCircle,
  ShieldCheck,
  UserCheck,
  Zap,
  Activity,
  Clock
};

const HeroSlider = () => {
  const { openModal } = useAppointment();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: ""
  });

  // Auto-slide functionality (6 second interval)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // const handleWhatsAppSubmit = (e) => {
  //   e.preventDefault();
  //   const message = `Hello Venuva Vascular! I would like to book an appointment.\n\n*Details:*\n- Patient Name: ${formData.name}\n- Mobile Number: ${formData.phone}\n\nPlease let me know the availability.`;
  //   const whatsappUrl = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  //   window.open(whatsappUrl, '_blank');
  // };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prev => ({ ...prev, [name]: value }));
  // };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <section className="relative min-h-[calc(100vh-80px)] lg:h-[800px] flex items-center bg-hospital-navy overflow-hidden">

      {/* 1. LAYER: SOLID BASE */}
      <div className="absolute inset-0 bg-hospital-navy" />

      {/* 2. LAYER: FULL CLARITY SLIDING IMAGES (Z-10) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-10"
        >
          <img
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].heading}
            className="w-full h-full object-cover object-top"
          />
        </motion.div>
      </AnimatePresence>

      {/* 3. LAYER: GRADIENT MASK FOR TEXT READABILITY (Z-20) */}
      {/* Fades from dark on the left to transparent on the right to keep the photo clear */}
      <div className="absolute inset-0 bg-linear-to-r from-hospital-navy via-hospital-navy/40 to-transparent z-20 pointer-events-none" />

      {/* 4. LAYER: AMBIENT GLOW MESHES (Shared visual identity) */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-[100px] pointer-events-none z-20"
      />
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-hospital-sky-blue/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-[100px] pointer-events-none z-20"
      />

      {/* 4. LAYER: CONTENT LAYER (Z-30) */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-30 py-12 sm:py-16 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16 xl:gap-24">

          {/* Left Column: Dynamic Slide Content */}
          <div className="lg:w-[58%] text-left min-h-[380px] sm:min-h-[420px] lg:min-h-[450px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative"
              >
                <div className="inline-flex max-w-full items-center bg-hospital-sun/20 text-hospital-sun px-4 sm:px-6 py-2.5 rounded-full text-xs font-black tracking-[0.4em] uppercase mb-6 sm:mb-8 border border-hospital-sun/30 backdrop-blur-md leading-relaxed">
                  {heroSlides[currentSlide].subheading}
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-white leading-[1.05] mb-6 sm:mb-8 uppercase tracking-tighter">
                  {heroSlides[currentSlide].heading.split(' ').map((word, i) => {
                    const highlight = ['Vascular', 'Varicose', 'Uterine', 'Prostate', 'Enlarged'].includes(word);
                    return <span key={i} className={highlight ? "text-hospital-sky-blue" : ""}>{word} </span>;
                  })}
                </h1>

                <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-xl mb-8 sm:mb-12 font-medium">
                  {heroSlides[currentSlide].description}
                </p>

                {/* Micro-Stats Grid */}
                <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-4 sm:gap-8 pt-6 sm:pt-10 border-t border-white/10 max-w-xl">
                  {heroSlides[currentSlide].stats.slice(0, 2).map((stat, idx) => {
                    const Icon = iconMap[stat.icon] || Zap;
                    return (
                      <div key={idx} className="flex items-start gap-3 sm:gap-4 group">
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white/5 backdrop-blur-xl flex items-center justify-center shrink-0 border border-white/10 group-hover:border-hospital-sky-blue/30 transition-colors">
                          <Icon size={22} className="text-hospital-sky-blue" />
                        </div>
                        <div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl sm:text-3xl font-black text-white leading-none">
                              {stat.value}
                            </span>
                            <span className="text-hospital-sun text-xs font-black uppercase">
                              {stat.suffix}
                            </span>
                          </div>
                          <p className="text-xs font-black text-white/40 uppercase tracking-[0.4em] mt-1.5 font-sans">
                            {stat.label}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Premium Pagination Controls */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-10 sm:mt-16">
              <div className="flex gap-3 sm:gap-4">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`group relative h-1.5 rounded-full transition-all duration-500 overflow-hidden ${currentSlide === idx ? "w-12 bg-white/20" : "w-6 bg-white/10"}`}
                  >
                    {currentSlide === idx && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 6, ease: "linear" }}
                        className="absolute inset-0 bg-hospital-sun"
                      />
                    )}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <button onClick={prevSlide} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:bg-white hover:text-hospital-navy transition-all">
                  <ChevronLeft size={18} />
                </button>
                <button onClick={nextSlide} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:bg-white hover:text-hospital-navy transition-all">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;

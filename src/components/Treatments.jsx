import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Droplets, Activity, Dna, Stethoscope,
  HeartPulse, Zap, Bone, Smile, ArrowRight, CheckCircle2
} from "lucide-react";
import { treatmentsPage } from "../data";
import { Link } from "react-router-dom";

const iconMap = {
  Droplets,
  Activity,
  Dna,
  Stethoscope,
  HeartPulse,
  Zap,
  Bone,
  Smile
};

const Treatments = () => {
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };
    updateWidth();
    // In case fonts or images load later and change dimensions
    setTimeout(updateWidth, 500);
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const displayItems = treatmentsPage.specialties;

  const renderCard = (item, idx, keyPrefix) => (
    <div
      key={`${keyPrefix}-${idx}`}
      className="group flex flex-col gap-6 h-full w-[350px] md:w-[400px] shrink-0 cursor-pointer"
    >
      {/* Image Container with Inverted Radius Cutout */}
      <div className="relative w-full aspect-4/3 rounded-4xl overflow-hidden bg-slate-100 shadow-sm group-hover:shadow-xl transition-[shadow,transform] duration-500">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        
        {/* The Cutout Block (bottom right) */}
        <div className="absolute bottom-0 right-0 w-22 h-22 bg-[#fcfdfd] rounded-tl-[1.8rem] z-10 flex items-end justify-end">
          {/* Inner curve top right of the cutout */}
          <svg width="24" height="24" viewBox="0 0 24 24" className="absolute -top-6 right-0 text-[#fcfdfd] fill-current z-10 scale-[1.05] origin-bottom-right">
            <path d="M 24 24 H 0 A 24 24 0 0 0 24 0 V 24 Z" />
          </svg>
          {/* Inner curve bottom left of the cutout */}
          <svg width="24" height="24" viewBox="0 0 24 24" className="absolute bottom-0 -left-6 text-[#fcfdfd] fill-current z-10 scale-[1.05] origin-bottom-right">
            <path d="M 24 24 H 0 A 24 24 0 0 0 24 0 V 24 Z" />
          </svg>
          
          <Link to={`/treatments/${item.id}`} className="w-14 h-14 mb-2 mr-2 rounded-full border border-slate-200 flex items-center justify-center bg-white hover:border-hospital-navy hover:bg-hospital-navy text-hospital-navy hover:text-white transition-all shadow-sm group/btn relative z-20">
            <ArrowRight size={20} className="group-hover/btn:-rotate-45 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col px-2 grow">
        <h3 className="text-xl font-bold text-hospital-navy mb-3 leading-tight group-hover:text-hospital-sky-blue transition-colors">
          {item.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
          {item.description}
        </p>
        
        {/* Benefits */}
        <div className="flex flex-col gap-2.5 mt-auto">
          {item.benefits?.slice(0, 2).map((benefit, i) => (
            <div key={i} className="flex items-start gap-3 text-slate-500 text-sm font-medium">
              <CheckCircle2 size={16} className="text-slate-300 mt-0.5 shrink-0" />
              <span className="line-clamp-1">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="treatments" className="py-24 bg-[#fcfdfd] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-hospital-sun font-black tracking-[0.3em] uppercase text-[20px] mb-4">
              Expert Solutions
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-hospital-navy uppercase tracking-tight">
              Advanced Vascular Treatments
            </h2>
          </div>
          <Link to="/treatments" className="text-md font-black text-hospital-teal hover:text-hospital-navy transition-colors uppercase tracking-[0.2em] border-b-2 border-hospital-teal pb-1 shrink-0">
            View All Treatments
          </Link>
        </div>
      </div>

      {/* Horizontal Draggable Carousel Track */}
      <motion.div ref={carouselRef} className="relative w-full pb-8 pt-4 overflow-hidden cursor-grab active:cursor-grabbing">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          dragElastic={0.05}
          className="flex gap-8 w-max px-8"
        >
          {displayItems.map((item, idx) => renderCard(item, idx, 'dragset'))}
        </motion.div>
      </motion.div>
      
      <div className="container mx-auto px-6 md:px-12 mt-16 text-center">
        <Link to="/treatments" className="inline-flex items-center gap-3 bg-hospital-navy text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-hospital-sky-blue transition-all shadow-lg hover:shadow-hospital-sky-blue/30">
          View All Treatments <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default Treatments;

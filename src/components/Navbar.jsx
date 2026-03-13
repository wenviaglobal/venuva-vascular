import { Phone, Activity, Menu, X, ChevronDown, Droplets, Dna, Stethoscope, Activity as ActivityIcon } from "lucide-react";
import { hospitalData } from "../data";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const iconMap = {
  Droplets: Droplets,
  Dna: Dna,
  Stethoscope: Stethoscope,
  Activity: ActivityIcon,
};

const Navbar = () => {
  const { header, brand, treatmentsPage } = hospitalData;
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const megaMenuRef = useRef(null);

  // Close everything on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
    setMobileTreatmentsOpen(false);
  }, [location.pathname]);

  // Handle click outside to close mega menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setMegaMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header 
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-slate-100 h-[80px] flex items-center"
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-hospital-navy flex items-center justify-center shadow-lg shadow-hospital-navy/20 group-hover:bg-hospital-sky-blue transition-colors">
            <Activity className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-black tracking-tight text-hospital-navy uppercase">
            {brand.name}
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-2">
          {header.navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            const isTreatments = link.name === "Treatments";

            if (isTreatments) {
              return (
                <div 
                  key={link.name}
                  ref={megaMenuRef}
                  className="relative h-[80px] flex items-center"
                  onMouseEnter={() => setMegaMenuOpen(true)}
                >
                  <Link 
                    to={link.href}
                    className={`text-[10px] font-black uppercase tracking-widest transition-all px-4 py-2 rounded-lg flex items-center gap-1 group/link ${
                      isActive || megaMenuOpen
                      ? "text-hospital-sky-blue" 
                      : "text-slate-500 hover:text-hospital-navy"
                    }`}
                  >
                    {link.name}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${megaMenuOpen ? 'rotate-180' : ''}`} />
                  </Link>

                  {/* Mega Menu Panel */}
                  <AnimatePresence>
                    {megaMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        onMouseLeave={() => setMegaMenuOpen(false)}
                        className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[800px] bg-white border border-slate-100 rounded-2xl shadow-2xl overflow-hidden z-100"
                      >
                        {/* Top Header Bar */}
                        <div className="flex items-center justify-between px-8 py-4 bg-slate-50 border-b border-slate-100">
                          <span className="text-[10px] font-black tracking-[3px] uppercase text-hospital-navy">
                            All Medical Treatments
                          </span>
                          <Link
                            to="/treatments"
                            className="text-[10px] font-black text-hospital-sky-blue hover:text-hospital-navy no-underline transition-colors uppercase tracking-widest"
                          >
                            View All →
                          </Link>
                        </div>

                        {/* 4-Column Grid */}
                        <div className="grid grid-cols-4 divide-x divide-slate-50 p-6">
                          {treatmentsPage.categories.map((cat) => {
                            const Icon = iconMap[cat.icon] || ActivityIcon;
                            return (
                              <div key={cat.id} className="px-5 first:pl-0 last:pr-0">
                                <div className="flex items-center gap-2 mb-4 group/cat">
                                  <div className="w-8 h-8 rounded-lg bg-hospital-sky-blue/10 flex items-center justify-center text-hospital-sky-blue group-hover/cat:bg-hospital-sky-blue group-hover/cat:text-white transition-all">
                                    <Icon size={16} />
                                  </div>
                                  <span className="text-[11px] font-black tracking-wider uppercase text-hospital-navy">
                                    {cat.title}
                                  </span>
                                </div>
                                <ul className="space-y-3">
                                  {cat.treatments.map((t) => (
                                    <li key={t.slug}>
                                      <Link
                                        to={`/treatments/${t.slug}`}
                                        className="block text-[12px] text-slate-500 hover:text-hospital-sky-blue font-bold no-underline hover:translate-x-1 transition-all duration-200"
                                      >
                                        {t.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })}
                        </div>

                        {/* Bottom Footer Bar */}
                        <div className="flex items-center justify-between px-8 py-4 bg-slate-50/50 border-t border-slate-100">
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                            Venuva Stats: 15+ Yrs · 10k+ Patient Satisfaction
                          </span>
                          <button className="bg-hospital-navy text-white px-6 py-2 rounded-lg font-black text-[10px] tracking-widest uppercase hover:bg-hospital-sky-blue transition-all">
                            Book Now
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`text-[10px] font-black uppercase tracking-widest transition-all relative px-4 py-2 ${
                  isActive 
                  ? "text-hospital-sky-blue" 
                  : "text-slate-500 hover:text-hospital-navy"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="navline"
                    className="absolute bottom-[-22px] left-4 right-4 h-0.5 bg-hospital-sky-blue"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden xl:flex items-center gap-4 border-r border-slate-200 pr-6">
            <Phone className="text-hospital-sky-blue w-4 h-4" />
            <span className="font-black text-[10px] tracking-widest uppercase text-hospital-navy">
              {header.emergency}
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="hidden sm:block bg-hospital-navy text-white px-8 py-3 rounded-xl font-black text-[10px] tracking-[0.15em] uppercase hover:bg-hospital-sky-blue transition-all shadow-xl shadow-hospital-navy/10 active:scale-95">
              Appointment
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-hospital-navy"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 overflow-hidden shadow-2xl"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-2">
              {header.navLinks.map((link) => {
                if (link.name === "Treatments") {
                  return (
                    <div key={link.name} className="flex flex-col">
                      <button 
                        onClick={() => setMobileTreatmentsOpen(!mobileTreatmentsOpen)}
                        className="flex items-center justify-between text-lg font-black text-hospital-navy uppercase tracking-widest py-4 hover:text-hospital-sky-blue border-b border-slate-50"
                      >
                        {link.name}
                        <ChevronDown className={`transition-transform ${mobileTreatmentsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileTreatmentsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-slate-50 px-4"
                          >
                            {treatmentsPage.categories.map((cat) => (
                              <div key={cat.id} className="py-4 border-b border-slate-100 last:border-0">
                                <div className="flex items-center gap-2 mb-3">
                                  <div className="w-6 h-6 rounded-md bg-hospital-sky-blue/10 flex items-center justify-center text-hospital-sky-blue">
                                    {cat.icon === 'Droplets' && <Droplets size={12} />}
                                    {cat.icon === 'Dna' && <Dna size={12} />}
                                    {cat.icon === 'Stethoscope' && <Stethoscope size={12} />}
                                    {cat.icon === 'Activity' && <ActivityIcon size={12} />}
                                  </div>
                                  <span className="text-[10px] font-black uppercase tracking-widest text-hospital-navy">{cat.title}</span>
                                </div>
                                <div className="grid grid-cols-1 gap-3 pl-8">
                                  {cat.treatments.map((t) => (
                                    <Link key={t.slug} to={`/treatments/${t.slug}`} className="text-sm font-bold text-slate-500 hover:text-hospital-sky-blue">
                                      {t.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <Link 
                    key={link.name} 
                    to={link.href} 
                    className="text-lg font-black text-hospital-navy uppercase tracking-widest py-4 hover:text-hospital-sky-blue border-b border-slate-50"
                  >
                    {link.name}
                  </Link>
                );
              })}
              <button className="w-full bg-hospital-navy text-white py-5 rounded-2xl font-black uppercase tracking-widest mt-6 shadow-xl shadow-hospital-navy/20">
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

import { Phone, Activity, Menu, X, ChevronDown, Droplets, Dna, Stethoscope, Activity as ActivityIcon } from "lucide-react";
import { header, brand, treatmentsPage } from "../data";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/venuva-logo.png";


const iconMap = {
  Droplets: Droplets,
  Dna: Dna,
  Stethoscope: Stethoscope,
  Activity: ActivityIcon,
};

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const megaMenuRef = useRef(null);

  // Smooth scroll to top when clicking home while already on home
  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-hospital-mint h-[80px] flex items-center"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" onClick={handleHomeClick} className="flex items-center gap-4 group">
          <img src={logo} alt="Venuva Vascular" className="h-[65px] md:h-[75px] w-auto object-contain transition-transform group-hover:scale-110" />
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
                    className={`text-xs font-black uppercase tracking-widest transition-all px-4 py-2 rounded-lg flex items-center gap-1 group/link ${isActive || megaMenuOpen
                      ? "text-hospital-teal"
                      : "text-hospital-navy/70 hover:text-hospital-navy"
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
                        className="absolute  top-[80px] left-1/2 -translate-x-1/2 w-[1050px] bg-white border border-hospital-soft-blue rounded-2xl shadow-2xl overflow-hidden z-100"
                      >
                        {/* Top Header Bar */}
                        <div className="flex items-center justify-between px-8 py-4 bg-hospital-soft-blue border-b border-hospital-mint">
                          <span className="text-xl font-black tracking-[3px] uppercase text-hospital-navy">
                            All Medical Treatments
                          </span>
                          <Link
                            to="/treatments"
                            className="text-xl font-black text-hospital-teal hover:text-hospital-navy no-underline transition-colors uppercase tracking-widest"
                          >
                            View All →
                          </Link>
                        </div>

                        {/* Dynamic Grid expanding to 5 Columns for Pain Management */}
                        <div className="grid grid-cols-5 px-6 gap-6 pt-8 pb-12">
                          {treatmentsPage.categories.map((cat) => {
                            const Icon = iconMap[cat.icon] || ActivityIcon;
                            return (
                              <div key={cat.id}>
                                <div className="flex items-center gap-3 mb-6 group/cat pb-2 border-b border-hospital-mint">
                              
                                  <span className="text-[15px] text-wrap font-black tracking-widest uppercase text-hospital-navy leading-tight line-clamp-2">
                                    {cat.title}
                                  </span>
                                </div>
                                <ul className="flex flex-col mt-4">
                                  {cat.treatments.map((t) => (
                                    <li key={t.slug} className="border-b border-hospital-mint/60 last:border-0">
                                      <Link
                                        to={`/treatments/${t.slug}`}
                                        className="block py-3 text-[14px] font-bold text-hospital-charcoal hover:text-hospital-teal no-underline hover:translate-x-1 transition-all duration-200 leading-snug"
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
                        <div className="flex items-center justify-between px-8 py-4 bg-hospital-soft-blue/50 border-t border-hospital-mint">
                          <span className="text-xs text-hospital-navy/40 font-bold uppercase tracking-widest">
                            Venuva Stats: 10+ Yrs · 10k+ Cases Resolved
                          </span>
                          <button
                            onClick={() => window.location.href = `tel:${header.emergency.replace(/[^\d+]/g, '')}`}
                            className="bg-hospital-emerald text-white px-6 py-2 rounded-lg font-black text-xs tracking-widest uppercase hover:bg-hospital-navy transition-all flex items-center gap-2"
                          >
                            <Phone size={14} />
                            Call Us
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
                className={`text-xs font-black uppercase tracking-widest transition-all relative px-4 py-2 ${isActive
                  ? "text-hospital-teal"
                  : "text-hospital-navy/70 hover:text-hospital-navy"
                  }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navline"
                    className="absolute bottom-[-22px] left-4 right-4 h-0.5 bg-hospital-teal"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = `tel:${header.emergency.replace(/[^\d+]/g, '')}`}
            className="hidden sm:flex bg-hospital-emerald text-white px-8 py-4 rounded-xl font-black text-xs tracking-[0.2em] uppercase hover:bg-hospital-navy transition-all shadow-xl shadow-hospital-navy/10 items-center gap-3"
          >
            <Phone size={16} />
            Call Us
          </motion.button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-hospital-navy bg-hospital-soft-blue rounded-xl"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-hospital-mint shadow-2xl overflow-y-auto max-h-[80vh]"
          >
            <div className="container mx-auto px-6 pt-8 pb-12 flex flex-col gap-2">
              {header.navLinks.map((link) => {
                if (link.name === "Treatments") {
                  return (
                    <div key={link.name} className="flex flex-col">
                      <button
                        onClick={() => setMobileTreatmentsOpen(!mobileTreatmentsOpen)}
                        className="flex items-center justify-between text-lg font-black text-hospital-navy uppercase tracking-widest py-4 hover:text-hospital-teal border-b border-hospital-mint"
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
                            className="overflow-hidden bg-hospital-soft-blue px-4"
                          >
                            {treatmentsPage.categories.map((cat) => (
                              <div key={cat.id} className="py-4 border-b border-hospital-mint last:border-0">
                                <div className="flex items-center gap-2 mb-3">
                                  <div className="w-6 h-6 rounded-md bg-hospital-sky-blue/10 flex items-center justify-center text-hospital-sky-blue">
                                    {cat.icon === 'Droplets' && <Droplets size={12} />}
                                    {cat.icon === 'Dna' && <Dna size={12} />}
                                    {cat.icon === 'Stethoscope' && <Stethoscope size={12} />}
                                    {cat.icon === 'Activity' && <ActivityIcon size={12} />}
                                  </div>
                                  <span className="text-xs font-black uppercase tracking-widest text-hospital-sun">{cat.title}</span>
                                </div>
                                <div className="grid grid-cols-1 gap-3 pl-8">
                                  {cat.treatments.map((t) => (
                                    <Link key={t.slug} to={`/treatments/${t.slug}`} className="text-sm font-bold text-hospital-charcoal hover:text-hospital-teal">
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
                    className="text-lg font-black text-hospital-navy uppercase tracking-widest py-4 hover:text-hospital-teal border-b border-slate-50"
                  >
                    {link.name}
                  </Link>
                );
              })}
              <button
                onClick={() => window.location.href = `tel:${header.emergency.replace(/[^\d+]/g, '')}`}
                className="w-full bg-hospital-emerald text-white py-5 rounded-2xl font-black uppercase tracking-widest mt-6 shadow-xl shadow-hospital-emerald/20 hover:bg-hospital-navy transition-all flex items-center justify-center gap-3"
              >
                <Phone size={20} />
                Call Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

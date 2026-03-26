import { motion } from "framer-motion";
import { Send, Linkedin, Facebook, Instagram, Activity, MapPin, Phone, Mail, MessageCircle, Twitter } from "lucide-react";
import { brand, footer, header, treatments } from "../data";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/venuva-logo.png'

const Footer = () => {
  const location = useLocation();

  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-linear-to-br from-hospital-navy via-[#1e3a8a] to-[#0f4c81] text-white pt-24 pb-12 overflow-hidden relative">
      {/* Ambient Animated Glowing Meshes */}
      <motion.div 
        animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl pointer-events-none"
      />
      <motion.div 
        animate={{ y: [0, 40, 0], x: [0, -20, 0], scale: [1, 1.2, 1] }} 
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-hospital-sky-blue/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 border-b border-white/10 pb-20">

          {/* Brand Column */}
          <div className="lg:col-span-3 space-y-8">
            <Link to="/" onClick={handleHomeClick} className="flex flex-col items-start gap-4 group">
              <div className="flex items-center gap-4">
                <img src={logo} alt="Venuva Vascular" className="h-[65px] md:h-[75px] w-auto object-contain  group-hover:scale-110 transition-transform" />
               
              </div>
              <span className="text-[10px] font-bold text-hospital-sun tracking-[0.3em] uppercase">
                {brand.tagline || "Medical Excellence"}
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed font-bold text-sm max-w-sm">
              Providing comprehensive vascular care with compassion and precision for over 10+ years.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/50 hover:bg-hospital-sun hover:text-white transition-all">
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-white mb-2 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-hospital-sun rounded-full"></span>
            </h3>
            <ul className="mt-10 space-y-4">
              {header.navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} onClick={link.href === '/' ? handleHomeClick : undefined} className="text-white/60 hover:text-white transition-colors font-bold text-sm block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold text-white mb-2 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-hospital-sun rounded-full"></span>
            </h3>
            <ul className="mt-10 space-y-4">
              {treatments.items.slice(0, 7).map((item) => (
                <li key={item.slug}>
                  <Link to={`/treatments/${item.slug}`} className="text-white/60 hover:text-white transition-colors font-bold text-sm block">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-bold text-white mb-2 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-hospital-sun rounded-full"></span>
            </h3>

            <ul className="mt-10 space-y-6">
              {/* Address */}
              <li className="flex items-start gap-4">
                <div className="mt-1 text-hospital-sun">
                  <MapPin size={22} fill="currentColor" fillOpacity={0.2} />
                </div>
                <div>
                  <p className="text-white font-black text-sm tracking-wide">{footer?.contactUs?.address || 'Address'}</p>
                  <p className="text-white/60 text-xs leading-relaxed font-bold mt-2 max-w-[280px]">
                    {footer?.contactUs?.addressDetail || 'Contact us for more details'}
                  </p>
                </div>
              </li>

              {/* WhatsApp */}
              <li className="flex items-center gap-4">
                <div className="text-[#25D366]">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <a
                  href={footer?.contactUs?.whatsapp === "#" ? "#" : `https://wa.me/${(footer?.contactUs?.whatsapp || '').replace(/\D/g, '')}`}
                  className="text-white/60 hover:text-white text-sm font-bold transition-colors"
                >
                  {footer?.contactUs?.whatsapp === "#" ? "WhatsApp" : `${footer?.contactUs?.whatsapp || 'WhatsApp'} (WhatsApp)`}
                </a>
              </li>

              {/* Phones */}
              {footer.contactUs.phones.map((num, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="text-hospital-sun">
                    <Phone size={20} fill="currentColor" fillOpacity={0.2} />
                  </div>
                  <a href={`tel:${(num || '').replace(/\D/g, '')}`} className="text-white/60 hover:text-white text-sm font-bold transition-colors">
                    {num}
                  </a>
                </li>
              ))}

              {/* Email */}
              <li className="flex items-center gap-4">
                <div className="text-hospital-sun">
                  <Mail size={20} fill="currentColor" fillOpacity={0.2} />
                </div>
                <a href={`mailto:${footer?.contactUs?.email || ''}`} className="text-white/60 hover:text-white text-sm font-bold transition-colors break-all">
                  {footer?.contactUs?.email || 'Email Us'}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold text-white/40">
          <p>© 2026 {brand.name}. All rights reserved.</p>
          <div className="flex gap-8">
            <button className="hover:text-white transition-colors uppercase tracking-widest">Privacy Policy</button>
            <button className="hover:text-white transition-colors uppercase tracking-widest">Terms & Conditions</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

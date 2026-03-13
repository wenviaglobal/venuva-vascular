import { Send, Linkedin, Facebook, Instagram, Activity, MapPin, Phone, Mail } from "lucide-react";
import { hospitalData } from "../data";
import { Link } from "react-router-dom";

const Footer = () => {
  const { brand, footer, header } = hospitalData;

  return (
    <footer className="bg-hospital-navy text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-hospital-sky-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 border-b border-white/10 pb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-hospital-sky-blue flex items-center justify-center shadow-lg">
                <Activity className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">{brand.name}</span>
            </Link>
            <p className="text-slate-400 leading-relaxed font-medium">
              Leading the way in Medical Excellence with minimally invasive solutions and image-guided procedures. Trusted by thousands for specialized vascular care.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-hospital-sky-blue hover:text-white transition-all">
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-black uppercase tracking-[0.2em] mb-8 text-hospital-sky-blue">Quick Links</h3>
            <ul className="grid grid-cols-1 gap-4">
              {header.navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-slate-400 hover:text-white transition-colors font-medium flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-hospital-sky-blue transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-black uppercase tracking-[0.2em] mb-8 text-hospital-sky-blue">Get In Touch</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-slate-400 group">
                <div className="p-3 rounded-xl bg-white/5 text-hospital-sky-blue">
                  <MapPin size={18} />
                </div>
                <span className="font-medium">{footer.contactUs.address}</span>
              </li>
              <li className="flex items-center gap-4 text-slate-400">
                <div className="p-3 rounded-xl bg-white/5 text-hospital-sky-blue">
                  <Phone size={18} />
                </div>
                <span className="font-medium">{footer.contactUs.phone}</span>
              </li>
              <li className="flex items-center gap-4 text-slate-400">
                <div className="p-3 rounded-xl bg-white/5 text-hospital-sky-blue">
                  <Mail size={18} />
                </div>
                <span className="font-medium">{footer.contactUs.email}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-black uppercase tracking-[0.2em] mb-8 text-hospital-sky-blue">Newsletter</h3>
            <p className="text-slate-400 mb-6 font-medium">Subscribe for health tips and clinic updates.</p>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
          <p>© 2026 {brand.name}. DESIGNED FOR EXCELLENCE.</p>
          <div className="flex gap-10">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Service</button>
            <button className="hover:text-white transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

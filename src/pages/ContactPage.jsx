import PageHeader from "../components/PageHeader";
import { motion } from "framer-motion";
import { contact } from "../data";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import SEO from "../components/utils/SEO";

const ContactPage = () => {

  return (
    <div className="bg-hospital-soft-blue min-h-screen pb-24">
      <SEO 
        title="Contact Venuva Vascular Center | Book Appointments & Consultation"
        description="Get in touch with Venuva Vascular Center to schedule appointments or consultations. Expert care for varicose veins, DVT, PVD, thyroid nodules, and other vascular treatments."
      />
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in Touch with our Care Team" 
        image="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2000"
      />
      
      <div className="container mx-auto px-6 md:px-12 mt-20">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Info Cards */}
          <div className="lg:w-1/3 space-y-6">
            <h2 className="text-3xl font-black text-hospital-navy mb-8">Reach Out to Us</h2>
            
            {contact.cards.map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-md border border-hospital-mint flex items-start gap-6 group hover:shadow-xl transition-shadow"
              >
                <div className={`p-4 rounded-2xl bg-hospital-soft-blue text-hospital-navy group-hover:bg-hospital-teal group-hover:text-white transition-colors`}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-black text-[10px] uppercase tracking-widest text-hospital-slate mb-2">{card.title}</h4>
                  <p className="font-black text-hospital-navy leading-tight">{card.info1}</p>
                  <p className="font-bold text-hospital-charcoal text-sm mt-1">{card.info2}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Advanced Form */}
          <div className="lg:w-2/3">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-hospital-navy/5"
            >
              <h3 className="text-2xl font-black text-hospital-navy mb-10">Send a Message</h3>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-hospital-slate ml-4">Full Name</label>
                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-hospital-soft-blue border border-hospital-mint focus:border-hospital-teal focus:bg-white outline-hidden transition-all font-bold text-hospital-navy" placeholder="John Doe" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-hospital-slate ml-4">Email Address</label>
                    <input type="email" className="w-full px-6 py-4 rounded-2xl bg-hospital-soft-blue border border-hospital-mint focus:border-hospital-teal focus:bg-white outline-hidden transition-all font-bold text-hospital-navy" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-hospital-slate ml-4">Phone Number</label>
                    <input type="tel" className="w-full px-6 py-4 rounded-2xl bg-hospital-soft-blue border border-hospital-mint focus:border-hospital-teal focus:bg-white outline-hidden transition-all font-bold text-hospital-navy" placeholder="+91 98765 43210" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-hospital-slate ml-4">Treatment Interest</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-hospital-soft-blue border border-hospital-mint focus:border-hospital-teal focus:bg-white outline-hidden transition-all font-bold text-hospital-navy cursor-pointer">
                      <option>Varicose Veins</option>
                      <option>Thyroid Nodule</option>
                      <option>UFE</option>
                      <option>DVT</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-hospital-slate ml-4">Message</label>
                  <textarea rows="5" className="w-full px-6 py-4 rounded-2xl bg-hospital-soft-blue border border-hospital-mint focus:border-hospital-teal focus:bg-white outline-hidden transition-all font-bold text-hospital-navy" placeholder="How can we help you?"></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-hospital-navy text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-4 shadow-xl shadow-hospital-navy/20"
                >
                  Send Message <Send size={18} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

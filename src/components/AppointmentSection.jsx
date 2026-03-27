import { motion } from "framer-motion";
import { useAppointment } from "../context/AppointmentContext";
import { appointment } from "../data";
import { useState } from "react";

const AppointmentSection = () => {
  const { openModal } = useAppointment();
  const [formData, setFormData] = useState({
    name: "",
    phone: ""
  });

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const message = `Hello Venuva Vascular! I would like to book an appointment.\n\n*Details:*\n- Patient Name: ${formData.name}\n- Mobile Number: ${formData.phone}\n\nPlease let me know the availability.`;
    const whatsappUrl = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-hospital-navy rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl">
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-hospital-sky-blue/10 transform -skew-x-12 translate-x-1/4" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight uppercase tracking-tight">
                {appointment.heading}
              </h2>
              <p className="text-amber-100/60 leading-relaxed font-medium mb-10">
                {appointment.description}
              </p>
              <button
                onClick={() => openModal()}
                className="bg-hospital-emerald text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.15em] shadow-xl hover:bg-hospital-sun transition-all"
              >
                {appointment.cta}
              </button>
            </motion.div>

            {/* Right Lead Form Embedded */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mt-8 lg:mt-0 w-full bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-hospital-navy/10 border border-white relative z-20"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-hospital-sky-blue text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-lg whitespace-nowrap">
                Direct Appointment Booking
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-6 mt-4">
                <div className="space-y-2 text-center mb-8">
                  <h3 className="text-xl font-black text-hospital-navy uppercase">Book Appointment</h3>
                  <p className="text-sm text-hospital-slate font-bold uppercase tracking-wider">No Booking Fee • Consultation at Earliest</p>
                </div>

                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required={true}
                    placeholder="Patient Name"
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-hospital-navy text-sm focus:outline-none focus:ring-2 focus:ring-hospital-sky-blue/20 transition-all font-bold"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required={true}
                    pattern="[0-9]{10}"
                    title="Please enter a 10 digit mobile number"
                    placeholder="Enter 10 Digit mobile number"
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-hospital-navy text-sm focus:outline-none focus:ring-2 focus:ring-hospital-sky-blue/20 transition-all font-bold"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-hospital-sun text-white py-5 rounded-2xl font-black text-sm uppercase tracking-[0.15em] shadow-xl shadow-hospital-sun/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book Appointment Now
                </button>
                <p className="text-xs text-center text-hospital-slate font-bold uppercase tracking-widest mt-4">
                  Or Call us: <span className="text-hospital-navy">+91 90199 00716</span>
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;

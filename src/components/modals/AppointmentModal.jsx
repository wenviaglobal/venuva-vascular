import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Calendar, Phone, User, Send, CheckCircle } from "lucide-react";
import { useAppointment } from "../../context/AppointmentContext";

const AppointmentModal = () => {
  const { isModalOpen, closeModal } = useAppointment();
  const [formData, setFormData] = useState({
    name: "",
    phone: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const message = `Hello Venuva Vascular! I would like to book an appointment.\n\n*Details:*\n- Patient Name: ${formData.name}\n- Mobile Number: ${formData.phone}\n\nPlease let me know the availability.`;

    const whatsappUrl = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);

    // Close modal after a short delay to show success state
    setTimeout(() => {
      closeModal();
      setIsSubmitted(false);
      setFormData({ name: "", phone: "" });
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-500 flex items-center justify-center p-4 md:p-6 text-hospital-charcoal">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-hospital-navy/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-hospital-emerald p-8 text-white relative">
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-hospital-sky-blue/20 flex items-center justify-center border border-white/10">
                  <Calendar className="text-hospital-light-blue" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight">Book Appointment</h3>
                  <p className="text-hospital-light-blue text-[15px] font-semibold uppercase tracking-widest">Expert Vascular Care</p>
                </div>
              </div>
            </div>

            {/* Form Body */}
            <div className="p-8 md:p-10">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-hospital-sun mb-6">
                    <CheckCircle size={48} />
                  </div>
                  <h4 className="text-2xl font-black text-hospital-navy uppercase">Success!</h4>
                  <p className="font-bold text-hospital-slate">Redirecting to WhatsApp...</p>
                </motion.div>
              ) : (
                <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-hospital-slate ml-4">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-hospital-slate/50" size={18} />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Patient Name"
                          className="w-full bg-hospital-soft-blue border border-hospital-mint rounded-2xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-hospital-teal/20 transition-all font-bold"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-hospital-slate ml-4">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          pattern="[0-9]{10}"
                          title="Please enter a 10 digit mobile number"
                          placeholder="10 Digit Mobile Number"
                          className="w-full bg-hospital-soft-blue border border-hospital-mint rounded-2xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-hospital-teal/20 transition-all font-bold"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-hospital-soft-blue/50 p-4 rounded-2xl mb-8">
                    <p className="text-xs text-hospital-navy font-bold leading-relaxed">
                      * By clicking the button below, you will be redirected to WhatsApp to confirm your slot with our care coordinator.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-hospital-sun text-white py-5 rounded-2xl font-black text-sm uppercase tracking-[0.15em] shadow-xl hover:shadow-hospital-sun/20 hover:bg-hospital-sun transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
                  >
                    Confirm Appointment <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AppointmentModal;

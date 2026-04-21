import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Calendar, Phone, User, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import axios from "axios";
import { useAppointment } from "../../context/AppointmentContext";

const AppointmentModal = () => {
  const { isModalOpen, closeModal } = useAppointment();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    website: "" // Honeypot field
  });
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isPhoneValid = (num) => /^[6-9]\d{9}$/.test(num.replace(/\s/g, ''));
  const phoneStarted = formData.phone.length > 0;
  const isFormValid = formData.name.length > 2 && isPhoneValid(formData.phone);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    // 1. Capture Lead in Background
    try {
      const response = await axios.post('/api/book-appointment', formData);
      if (response.status === 200) {
        setSubmitStatus('success');
        
        // Close modal after a delay to show success state
        setTimeout(() => {
          closeModal();
          setSubmitStatus('idle');
          setFormData({ name: "", phone: "" });
        }, 4000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Lead capture failed:', error);
      setSubmitStatus('error');
      // Reset to idle after 5 seconds to let them try again
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
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
              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-hospital-sun mb-6">
                    <CheckCircle size={48} />
                  </div>
                  <h4 className="text-2xl font-black text-hospital-navy uppercase">Thank You!</h4>
                  <p className="font-bold text-hospital-slate text-lg">Your request has been received.</p>
                  <p className="font-semibold text-hospital-teal italic">Our care team will call you shortly to confirm your appointment slot.</p>
                </motion.div>
              ) : submitStatus === 'error' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto text-red-500 mb-6">
                    <AlertCircle size={48} />
                  </div>
                  <h4 className="text-2xl font-black text-hospital-navy uppercase">Submission Failed</h4>
                  <p className="font-bold text-hospital-slate">We couldn't process your request at this moment.</p>
                  <p className="font-semibold text-red-500">Please try again in a few seconds or call us directly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-hospital-slate ml-4">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-hospital-slate/50" size={18} />
                        <input
                          type="text"
                          name="name"
                          disabled={submitStatus === 'submitting'}
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Patient Name"
                          className="w-full bg-hospital-soft-blue border border-hospital-mint rounded-2xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-hospital-teal/20 transition-all font-bold disabled:opacity-50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-hospital-slate ml-4">Phone Number</label>
                      <div className="relative">
                        <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                          !phoneStarted ? 'text-slate-300' : isPhoneValid(formData.phone) ? 'text-green-500' : 'text-red-400'
                        }`} size={18} />
                        <input
                          type="tel"
                          name="phone"
                          disabled={submitStatus === 'submitting'}
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="10 Digit Mobile Number"
                          className={`w-full bg-hospital-soft-blue border rounded-2xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:ring-2 transition-all font-bold disabled:opacity-50 ${
                            !phoneStarted 
                              ? 'border-hospital-mint focus:ring-hospital-teal/20' 
                              : isPhoneValid(formData.phone)
                                ? 'border-green-500 bg-green-50/30 focus:ring-green-500/10'
                                : 'border-red-400 bg-red-50/30 focus:ring-red-400/10'
                          }`}
                        />
                      </div>
                      {phoneStarted && !isPhoneValid(formData.phone) && (
                        <p className="text-[10px] text-red-500 font-bold ml-4 mt-1 uppercase tracking-wider">
                          Please enter a valid 10-digit mobile number
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Honeypot field - Keep hidden from users */}
                  <div style={{ display: 'none' }}>
                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      tabIndex="-1"
                      autoComplete="off"
                    />
                  </div>

                  <div className="bg-hospital-soft-blue/50 p-6 rounded-2xl mb-8 border border-hospital-mint/30">
                    <p className="text-xs text-hospital-navy font-bold leading-relaxed text-center">
                      Expert consultation for Varicose Veins, DVT, and other vascular conditions.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={submitStatus === 'submitting' || !isFormValid}
                    className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-[0.15em] shadow-xl transition-all flex items-center justify-center gap-3 ${
                      (submitStatus === 'submitting' || !isFormValid)
                      ? 'bg-hospital-slate opacity-70 cursor-not-allowed text-white/50' 
                      : 'bg-hospital-sun text-white hover:shadow-hospital-sun/20 hover:bg-hospital-sun hover:scale-[1.02] active:scale-[0.98]'
                    }`}
                  >
                    {submitStatus === 'submitting' ? (
                      <>Processing... <Loader2 className="animate-spin" size={18} /></>
                    ) : (
                      <>Confirm Appointment <Send size={16} /></>
                    )}
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

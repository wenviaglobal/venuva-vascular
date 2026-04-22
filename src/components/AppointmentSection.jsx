import { motion } from "framer-motion";
import { useAppointment } from "../context/AppointmentContext";
import { appointment } from "../data";
import { useState } from "react";
import axios from "axios";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const AppointmentSection = () => {
  const { openModal } = useAppointment();
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

    try {
      const response = await axios.post('/api/book-appointment', formData);
      if (response.status === 200) {
        setSubmitStatus('success');
        
        // Reset after a delay
        setTimeout(() => {
          setSubmitStatus('idle');
          setFormData({ name: "", phone: "", website: "" });
        }, 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Lead capture failed:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
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

              {submitStatus === 'success' ? (
                <div className="py-12 mt-4 text-center space-y-4">
                  <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-hospital-sun mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="text-xl font-black text-hospital-navy uppercase">Request Received!</h4>
                  <p className="font-semibold text-hospital-slate text-sm">Our care team will call you shortly to confirm your appointment.</p>
                </div>
              ) : submitStatus === 'error' ? (
                <div className="py-12 mt-4 text-center space-y-4">
                  <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto text-red-500 mb-4">
                    <AlertCircle size={32} />
                  </div>
                  <h4 className="text-xl font-black text-hospital-navy uppercase">Submission Failed</h4>
                  <p className="font-semibold text-red-500 text-sm">Please try again in a few seconds.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                  <div className="space-y-2 text-center mb-8">
                    <h3 className="text-xl font-black text-hospital-navy uppercase">Book Appointment</h3>
                    <p className="text-sm text-hospital-slate font-bold uppercase tracking-wider">No Booking Fee • Consultation at Earliest</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        disabled={submitStatus === 'submitting'}
                        value={formData.name}
                        onChange={handleInputChange}
                        required={true}
                        placeholder="Patient Name"
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-hospital-navy text-sm focus:outline-none focus:ring-2 focus:ring-hospital-sky-blue/20 transition-all font-bold disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        disabled={submitStatus === 'submitting'}
                        value={formData.phone}
                        onChange={handleInputChange}
                        required={true}
                        placeholder="10 Digit Mobile Number"
                        className={`w-full bg-slate-50 border rounded-xl px-4 py-4 text-hospital-navy text-sm focus:outline-none focus:ring-2 transition-all font-bold disabled:opacity-50 ${
                          !phoneStarted 
                            ? 'border-slate-100 focus:ring-hospital-sky-blue/20' 
                            : isPhoneValid(formData.phone)
                              ? 'border-green-500 focus:ring-green-500/20'
                              : 'border-red-400 focus:ring-red-400/20'
                        }`}
                      />
                      {phoneStarted && !isPhoneValid(formData.phone) && (
                        <p className="text-[10px] text-red-500 font-bold mt-1 uppercase tracking-wider pl-1">
                          Please enter a valid 10-digit mobile number
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Honeypot field */}
                  <div style={{ display: 'none' }}>
                    <input type="text" name="website" value={formData.website} onChange={handleInputChange} tabIndex="-1" autoComplete="off" />
                  </div>

                  <button
                    type="submit"
                    disabled={submitStatus === 'submitting' || !isFormValid}
                    className={`w-full text-white py-5 rounded-2xl font-black text-sm uppercase tracking-[0.15em] shadow-xl transition-all flex items-center justify-center gap-3 ${
                      (submitStatus === 'submitting' || !isFormValid)
                      ? 'bg-hospital-slate opacity-70 cursor-not-allowed text-white/50' 
                      : 'bg-hospital-sun shadow-hospital-sun/20 hover:scale-[1.02] active:scale-[0.98]'
                    }`}
                  >
                    {submitStatus === 'submitting' ? (
                      <>Processing... <Loader2 className="animate-spin" size={18} /></>
                    ) : (
                      'Book Appointment Now'
                    )}
                  </button>
                  <p className="text-xs text-center text-hospital-slate font-bold uppercase tracking-widest mt-4">
                    Or Call us: <span className="text-hospital-navy">+91 90199 00716</span>
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;

import PageHeader from "../components/PageHeader";
import { motion } from "framer-motion";
import { contact } from "../data";
import { Phone, Mail, MapPin, Clock, Send, PhoneCall } from "lucide-react";
import SEO from "../components/utils/SEO";
import { useState} from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const iconMap = {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
};


const ContactPage = () => {

  const { register, handleSubmit, reset, watch, formState: { errors, isValid } } = useForm({
    mode: "onChange"
  });
  const phoneValue = watch("phone", "");
  const nameValue = watch("name", "");
  const emailValue = watch("email", "");
  const messageValue = watch("message", "");
  const isPhoneValid = /^[6-9]\d{9}$/.test(phoneValue.replace(/\s/g, ''));
  const isFormComplete = nameValue && emailValue && isPhoneValid && messageValue;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'success' | 'error'

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await axios.post('/api/send-email', data);

      if (response.status === 200 || response.data.success) {
        setSubmitStatus('success');
        reset();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Submission failed:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

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

      <div className="container mx-auto px-4 sm:px-6 md:px-12 mt-12 sm:mt-20">
        <div className="flex flex-col lg:flex-row gap-10 sm:gap-16">
          {/* Left: Info Cards */}
          <div className="lg:w-1/3 space-y-6">
            <h2 className="text-3xl font-black text-hospital-navy mb-8">Reach Out to Us</h2>

            {contact.cards.map((card, idx) => {
              const Icon = iconMap[card.icon] || Phone;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-5 sm:p-8 rounded-3xl shadow-md border border-hospital-mint flex items-start gap-4 sm:gap-6 group hover:shadow-xl transition-shadow"
                >
                  <div className={`p-4 rounded-2xl bg-hospital-soft-blue text-hospital-navy group-hover:bg-hospital-teal group-hover:text-white transition-colors`}>
                    <Icon size={24} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-black text-xs uppercase tracking-widest text-hospital-slate mb-2">{card.title}</h4>
                    <p className="font-black text-hospital-navy leading-tight wrap-break-word">{card.info1}</p>
                    <p className="font-bold text-hospital-charcoal text-sm mt-1 wrap-break-word">{card.info2}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Advanced Form */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 sm:p-8 md:p-16 rounded-4xl sm:rounded-[3rem] shadow-2xl shadow-hospital-navy/5"
            >
              <h3 className="text-2xl font-black text-hospital-navy mb-8 sm:mb-10">Send a Message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-hospital-slate ml-4">Full Name</label>
                    <input 
                      type="text" 
                      {...register("name", { required: "Name is required" })}
                      className={`w-full px-6 py-4 rounded-2xl bg-hospital-soft-blue border ${errors.name ? 'border-red-400' : 'border-hospital-mint'} focus:border-hospital-teal focus:bg-white outline-hidden transition-all font-bold text-hospital-navy`} 
                      placeholder="John Doe" 
                    />
                    {errors.name && <p className="text-red-500 text-xs font-bold ml-4">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-hospital-slate ml-4">Email Address</label>
                    <input 
                      type="email" 
                      {...register("email", { 
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                      })}
                      className={`w-full px-6 py-4 rounded-2xl bg-hospital-soft-blue border ${errors.email ? 'border-red-400' : 'border-hospital-mint'} focus:border-hospital-teal focus:bg-white outline-hidden transition-all font-bold text-hospital-navy`} 
                      placeholder="john@example.com" 
                    />
                    {errors.email && <p className="text-red-500 text-xs font-bold ml-4">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-hospital-slate ml-4">Phone Number</label>
                    <input 
                      type="tel" 
                      {...register("phone", { 
                        required: "Phone number is required",
                        pattern: {
                          value: /^[6-9]\d{9}$/,
                          message: "Please enter a valid 10-digit mobile number"
                        }
                      })}
                      className={`w-full px-6 py-4 rounded-2xl bg-hospital-soft-blue border outline-hidden transition-all font-bold text-hospital-navy ${
                        !phoneValue 
                          ? 'border-hospital-mint focus:border-hospital-teal focus:bg-white' 
                          : isPhoneValid 
                            ? 'border-green-500 bg-green-50/30 focus:border-green-600' 
                            : 'border-red-400 bg-red-50/30 focus:border-red-500'
                      }`} 
                      placeholder="+91 98765 43210" 
                    />
                    {errors.phone && <p className="text-red-500 text-[10px] font-bold ml-4 uppercase tracking-wider">{errors.phone.message}</p>}
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-hospital-slate ml-4">Subject</label>
                    <input 
                      type="text" 
                      {...register("subject", { required: "Subject is required" })}
                      className={`w-full px-6 py-4 rounded-2xl bg-hospital-soft-blue border ${errors.subject ? 'border-red-400' : 'border-hospital-mint'} focus:border-hospital-teal focus:bg-white outline-hidden transition-all font-bold text-hospital-navy`} 
                      placeholder="e.g. Appointment for Varicose Veins" 
                    />
                    {errors.subject && <p className="text-red-500 text-xs font-bold ml-4">{errors.subject.message}</p>}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-hospital-slate ml-4">Message</label>
                  <textarea 
                    rows="5" 
                    {...register("message", { required: "Message is required" })}
                    className={`w-full px-6 py-4 rounded-2xl bg-hospital-soft-blue border ${errors.message ? 'border-red-400' : 'border-hospital-mint'} focus:border-hospital-teal focus:bg-white outline-hidden transition-all font-bold text-hospital-navy`} 
                    placeholder="How can we help you?"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs font-bold ml-4">{errors.message.message}</p>}
                </div>

                  {/* Honeypot field - Keep hidden from users */}
                  <div style={{ display: 'none' }}>
                    <input
                      type="text"
                      {...register("website")}
                      tabIndex="-1"
                      autoComplete="off"
                    />
                  </div>

                  <motion.button
                  type="submit"
                  disabled={isSubmitting || !isFormComplete}
                  whileHover={{ scale: (isSubmitting || !isFormComplete) ? 1 : 1.02 }}
                  whileTap={{ scale: (isSubmitting || !isFormComplete) ? 1 : 0.98 }}
                  className={`w-full text-white py-5 rounded-2xl font-black text-sm uppercase tracking-[0.15em] flex items-center justify-center gap-4 shadow-xl transition-colors ${
                    (isSubmitting || !isFormComplete) ? 'bg-hospital-slate cursor-not-allowed opacity-70' : 'bg-hospital-navy shadow-hospital-navy/20 hover:bg-hospital-teal'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl text-center font-bold"
                  >
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-center font-bold"
                  >
                    Something went wrong. Please try again later.
                  </motion.div>
                )}
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

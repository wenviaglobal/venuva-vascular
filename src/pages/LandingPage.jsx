import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Phone,
  CheckCircle2,
  Users,
  Award,
  Calendar,
  ArrowRight,
  Star,
  ShieldCheck,
  Stethoscope,
  Clock
} from "lucide-react";
import SEO from "../components/utils/SEO";
import logo from "../assets/venuva-logo.png";

const LandingPage = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const response = await axios.post('/api/send-email', {
        ...data,
        subject: "Landing Page Lead - Checkup Offer"
      });
      if (response.status === 200 || response.data.success) {
        setSubmitStatus('success');
        reset();
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const stats = [
    { icon: Users, label: "Successful Surgeries", value: "5000+" },
    { icon: Award, label: "Success Rate", value: "99.2%" },
    { icon: Stethoscope, label: "Expert Doctors", value: "15+" },
    { icon: ShieldCheck, label: "Years Experience", value: "25+" },
  ];

  const testimonials = [
    {
      name: "Ramesh Kumar",
      text: "The treatment I received for my varicose veins was world-class. I was back on my feet in 2 days!",
      rating: 5
    },
    {
      name: "Priya S.",
      text: "Very professional staff and state-of-the-art facilities. Highly recommend Venuva.",
      rating: 5
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-hospital-navy">
      <SEO
        title="Best Orthopedic & Vascular Care in Bengaluru | Venuva Vascular"
        description="Expert vascular care, varicose vein treatments, and specialized checkup offers. Book your free consultation today at Venuva Vascular Center."
      />

      {/* Simplified Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-hospital-sky-blue/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Venuva Vascular Logo" className="h-[60px] w-auto object-contain" />

          </div>
          <a
            href="tel:+919876543210"
            className="bg-hospital-navy text-white px-6 py-2.5 rounded-full font-black text-sm flex items-center gap-2 hover:bg-hospital-teal transition-colors shadow-lg shadow-hospital-navy/20 outline-none focus-visible:ring-2 focus-visible:ring-hospital-teal focus-visible:ring-offset-2"
          >
            <Phone size={16} /> CALL NOW
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 lg:pt-28 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-hospital-soft-blue/30 -skew-x-12 translate-x-32 z-0 hidden lg:block" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* Left Content */}
            <div className="lg:w-3/5 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 bg-hospital-teal/10 text-hospital-teal px-4 py-2 rounded-full font-black text-xs uppercase tracking-[0.4em]"
              >
                <div className="w-2 h-2 rounded-full bg-hospital-teal animate-pulse" />
                Limited Time Offer: Free Consultation
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl lg:text-5xl font-black leading-[1.05] text-hospital-navy uppercase italic"
              >
                Expert Care <br />
                <span className="text-hospital-teal not-italic">Better Results.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-hospital-charcoal/80 font-medium max-w-2xl leading-relaxed"
              >
                Join over 10,000+ satisfied patients who trusted Venuva for world-class vascular treatments. Get back to your active lifestyle today.
              </motion.p>

              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {[
                  "No Surgery Required (Most Cases)",
                  "Same Day Discharge",
                  "Painless Procedures",
                  "Expert Specialized Doctors",
                  "Affordable Pricing",
                  "Insurance Coverage Support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-hospital-navy">
                    <CheckCircle2 className="text-hospital-teal" size={20} />
                    {item}
                  </li>
                ))}
              </motion.ul>

              <div className="pt-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <stat.icon className="text-hospital-teal mb-2" size={24} />
                    <div className="text-2xl font-black text-hospital-navy italic">{stat.value}</div>
                    <div className="text-xs font-bold uppercase tracking-[0.4em] text-hospital-slate">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Lead Form Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="lg:w-2/5 w-full sticky top-20"
            >
              <div className="bg-hospital-navy text-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-hospital-teal/20 rounded-full blur-3xl -mr-16 -mt-16" />

                <h3 className="text-3xl font-black mb-2 italic">Book Your Consultation</h3>
                <p className="text-hospital-sky-blue/80 font-bold text-sm mb-8">Receive a call back within 15 minutes.</p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-hospital-sky-blue ml-2">Full Name</label>
                    <input
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      placeholder="e.g. John Doe"
                      className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 outline-hidden focus:border-hospital-teal transition-all text-white font-bold"
                    />
                    {errors.name && <p className="text-red-400 text-xs font-bold ml-2">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-hospital-sky-blue ml-2">Phone Number</label>
                    <input
                      type="tel"
                      {...register("phone", { required: "Phone is required" })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 outline-hidden focus:border-hospital-teal transition-all text-white font-bold"
                    />
                    {errors.phone && <p className="text-red-400 text-xs font-bold ml-2">{errors.phone.message}</p>}
                  </div>



                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hospital-navy ${isSubmitting ? 'bg-hospital-slate cursor-not-allowed' : 'bg-hospital-teal hover:bg-white hover:text-hospital-navy shadow-xl shadow-hospital-teal/20'
                      }`}
                  >
                    {isSubmitting ? 'Processing...' : 'Reserve My Slot'} <ArrowRight size={18} />
                  </button>

                  {submitStatus === 'success' && (
                    <div className="mt-4 p-4 bg-green-500/20 border border-green-500/50 text-green-200 rounded-xl text-center text-sm font-bold">
                      Success! We will call you back shortly.
                    </div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-hospital-soft-blue/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-hospital-navy uppercase italic mb-4">Why Thousands Choose Venuva</h2>
            <p className="text-hospital-charcoal/70 font-bold uppercase tracking-[0.4em] text-xs">Pioneering Minimal Invasive Vascular Care</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Advanced Technology",
                desc: "We use the latest USFDA approved laser and RF technology for zero-cut procedures.",
                icon: ShieldCheck
              },
              {
                title: "Expertise That Matters",
                desc: "Our senior surgeons have over 25+ years of experience in complex vascular cases.",
                icon: Award
              },
              {
                title: "Patient-First Care",
                desc: "From pick-up service to insurance assistance, we handle everything for you.",
                icon: Clock
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-4xl border border-hospital-sky-blue/20 hover:border-hospital-teal transition-colors group">
                <item.icon className="text-hospital-teal mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h4 className="text-xl font-black text-hospital-navy mb-4 uppercase italic">{item.title}</h4>
                <p className="text-hospital-charcoal/80 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-5xl font-black text-hospital-navy uppercase italic leading-none mb-8">What Our <br /><span className="text-hospital-teal">Patients Say</span></h2>
              <div className="space-y-8">
                {testimonials.map((t, i) => (
                  <div key={i} className="bg-hospital-soft-blue/20 p-8 rounded-3xl relative">
                    <div className="flex gap-1 mb-4">
                      {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} className="fill-hospital-teal text-hospital-teal" />)}
                    </div>
                    <p className="text-lg font-bold text-hospital-navy italic mb-4 leading-relaxed">"{t.text}"</p>
                    <p className="text-sm font-black uppercase tracking-[0.4em] text-hospital-slate">— {t.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800" alt="Venuva Vascular Hospital Interior" className="rounded-3xl shadow-xl" loading="lazy" />
              <img src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=800" alt="Vascular Specialist Doctor at Venuva" className="rounded-3xl shadow-xl mt-12" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-12 bg-white border-t border-hospital-sky-blue/20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <img src={logo} alt="Venuva Vascular Logo Footer" className="h-8 w-auto grayscale opacity-50" loading="lazy" />
            <span className="font-black text-hospital-slate uppercase tracking-tighter">Venuva Vascular</span>
          </div>
          <p className="text-xs font-black uppercase tracking-[0.4em] text-hospital-slate">
            © {new Date().getFullYear()} Venuva Vascular Center. All Rights Reserved.
          </p>
          <div className="flex justify-center gap-8 mt-6">
            <a href="/privacy" className="text-[10px] font-black uppercase tracking-widest text-hospital-slate hover:text-hospital-teal">Privacy Policy</a>
            <a href="/terms" className="text-[10px] font-black uppercase tracking-widest text-hospital-slate hover:text-hospital-teal">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

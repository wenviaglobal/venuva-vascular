import PageHeader from "../components/PageHeader";
import SEO from "../components/utils/SEO";
import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";
import { trackEvent } from "../utils/analytics";
import { useCollection } from "../context/ContentContext";

const FAQPage = () => {
  const [openIdx, setOpenIdx] = useState(0);
  const faqItems = useCollection("faqs");

  const toggleFaq = (idx, question) => {
    const willOpen = openIdx !== idx;
    setOpenIdx(willOpen ? idx : -1);
    if (willOpen) {
      trackEvent("faq_open", {
        faq_question: question,
        faq_index: idx + 1,
        page_section: "Patient FAQ",
      });
    }
  };

  // FAQ content comes from the CMS; each item is { question, answer } (with
  // legacy { q, a } tolerated for the static fallback).
  const faqs = faqItems.map((f) => ({ q: f.question ?? f.q, a: f.answer ?? f.a }));

  return (
    <div className="bg-hospital-soft-blue min-h-screen pb-24">
      <SEO 
        title="Patient FAQs | Venuva Vascular Center" 
        description="Frequently asked questions about interventional radiology, varicose vein treatments, and vascular care at Venuva Vascular Center." 
      />
      <PageHeader
        title="Patient FAQ"
        subtitle="Common Questions & Expert Answers"
        image="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2000"
      />

      <div className="container mx-auto px-6 md:px-12 mt-20 max-w-4xl">
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={`bg-white rounded-3xl border border-hospital-mint overflow-hidden shadow-md transition-all ${openIdx === idx ? 'shadow-xl' : ''}`}
            >
              <button
                onClick={() => toggleFaq(idx, faq.q)}
                className="w-full p-8 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-xl ${openIdx === idx ? 'bg-hospital-navy text-white' : 'bg-hospital-soft-blue text-hospital-navy'}`}>
                    <HelpCircle size={20} />
                  </div>
                  <span className="text-lg font-black text-hospital-navy leading-tight">{faq.q}</span>
                </div>
                <ChevronDown className={`text-hospital-sky-blue transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>

              {openIdx === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="px-8 pb-8 pt-0"
                >
                  <p className="text-hospital-slate font-medium leading-relaxed pl-12">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;

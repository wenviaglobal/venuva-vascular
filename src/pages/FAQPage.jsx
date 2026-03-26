import PageHeader from "../components/PageHeader";
import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

const FAQPage = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What is Interventional Radiology?",
      a: "Interventional Radiology (IR) is a medical specialty that uses image-guided procedures (like X-rays, ultrasound, or CT) to treat diseases minimally invasively. It often replaces the need for open surgery, resulting in less pain and faster recovery."
    },
    {
      q: "Is local or general anesthesia used for these procedures?",
      a: "Most interventional procedures are performed under local anesthesia and conscious sedation. This means you stay relaxed and comfortable but typically don't require full general anesthesia, allowing for quicker discharge."
    },
    {
      q: "How long does the recovery take after Varicose Vein Laser treatment?",
      a: "Recovery is very fast. Most patients can walk immediately after the procedure and return to light office work the next day. Strenuous exercise is typically avoided for about 7-10 days."
    },
    {
      q: "Does UFE affect the ability to get pregnant?",
      a: "While many women have had successful pregnancies after Uterine Fibroid Embolization (UFE), it's important to discuss your fertility goals with your specialist. UFE is often chosen as a uterus-sparing alternative to hysterectomy."
    },
    {
      q: "Are these procedures covered by health insurance?",
      a: "Yes, many vascular and interventional radiology treatments are covered by standard health insurance plans and TPAs. Our billing desk can help you with the pre-authorization process."
    },
    {
      q: "What should I bring for my first consultation?",
      a: "Please bring any previous imaging reports (Ultrasound, CT, MRI scans), current list of medications, and your insurance card to ensure a comprehensive evaluation."
    }
  ];

  return (
    <div className="bg-hospital-soft-blue min-h-screen pb-24">
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
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
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

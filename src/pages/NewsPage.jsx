import PageHeader from "../components/PageHeader";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Megaphone } from "lucide-react";

const NewsPage = () => {
  const news = [
    {
      title: "Venuva Vascular Acquires Next-Gen Laser Technology for Varicose Veins",
      excerpt: "We are proud to announce the integration of the latest 1470nm Radial Laser technology, ensuring even higher success rates and patient comfort...",
      date: "Jan 15, 2026",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800"
    },
    {
      title: "Expansion Announcement: New Center Opening in Bangalore Central",
      excerpt: "To meet the growing demand for interventional radiology, we are opening our second state-of-the-art facility next month...",
      date: "Feb 02, 2026",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800"
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
      <PageHeader
        title="Hospital News"
        subtitle="Operational Updates & Institutional Milestones"
        image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000"
      />

      <div className="container mx-auto px-6 md:px-12 mt-20">
        <div className="space-y-12 max-w-5xl mx-auto">
          {news.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col md:flex-row gap-8 bg-slate-50 p-8 rounded-[3rem] border border-slate-100 group hover:shadow-2xl transition-all"
            >
              <div className="md:w-1/3 aspect-video md:aspect-auto h-64 overflow-hidden rounded-2xl shadow-lg">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="md:w-2/3 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-hospital-sky-blue text-xs font-black uppercase tracking-widest mb-4">
                  <Megaphone size={16} />
                  <span>Update</span>
                  <span className="text-slate-300">|</span>
                  <span className="flex items-center gap-2 text-slate-400 capitalize"><Calendar size={14} /> {item.date}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-hospital-navy mb-4 leading-tight group-hover:text-hospital-sky-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-6">
                  {item.excerpt}
                </p>
                <button className="flex items-center gap-3 font-black text-xs uppercase tracking-[0.2em] text-hospital-navy group/btn">
                  Read Announcement <ArrowRight size={18} className="text-hospital-sky-blue group-hover/btn:translate-x-3 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;

import PageHeader from "../components/PageHeader";
import { motion } from "framer-motion";
import { hospitalData } from "../data";
import { ArrowRight, User, Calendar } from "lucide-react";

const BlogPage = () => {
  const posts = [
    {
      title: "5 Signs of Varicose Veins You Shouldn't Ignore",
      excerpt: "Early detection of varicose veins can prevent serious complications like DVT. Learn about the early warning signs...",
      date: "Oct 12, 2025",
      author: "Dr. Harsha M T",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800",
      category: "Vascular Health"
    },
    {
      title: "Understanding Uterine Fibroid Embolization (UFE)",
      excerpt: "UFE is a minimally invasive alternative to hysterectomy. Discover if this treatment is right for you...",
      date: "Nov 05, 2025",
      author: "Venuva Editorial",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800",
      category: "Women's Health"
    },
    {
      title: "Modern Radiology: Non-Surgical Solutions for Chronic Pain",
      excerpt: "How interventional radiology is changing the landscape of chronic pain management without long recovery times...",
      date: "Dec 20, 2025",
      author: "Dr. Harsha M T",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800",
      category: "Pain Management"
    }
  ];

  return (
    <div className="bg-hospital-soft-blue min-h-screen pb-24">
      <PageHeader
        title="Medical Blog"
        subtitle="Insights & Health Tips from Specialists"
        image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000"
      />

      <div className="container mx-auto px-6 md:px-12 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-hospital-navy/5 group"
            >
              <div className="h-64 overflow-hidden relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-hospital-sky-blue text-white text-xs font-black uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-6 text-hospital-slate text-sm font-bold uppercase tracking-wider mb-4">
                  <span className="flex items-center gap-2"><Calendar size={14} className="text-hospital-sky-blue" /> {post.date}</span>
                  <span className="flex items-center gap-2"><User size={14} className="text-hospital-sky-blue" /> {post.author}</span>
                </div>
                <h3 className="text-xl font-black text-hospital-navy mb-4 leading-tight group-hover:text-hospital-sky-blue transition-colors">
                  {post.title}
                </h3>
                <p className="text-hospital-charcoal text-base leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <button className="flex items-center gap-2 text-hospital-navy font-black text-sm uppercase tracking-wider group/btn">
                  Read More
                  <ArrowRight size={16} className="text-hospital-sky-blue group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

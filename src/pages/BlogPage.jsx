import { motion, AnimatePresence } from "framer-motion";
import { blogPosts } from "../data";
import { 
  ArrowRight, Calendar, Clock, Search, 
  ChevronRight, Filter, X, Sparkles
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import { useState, useMemo, useEffect } from "react";
import { useAppointment } from "../context/AppointmentContext";

const BlogPage = () => {
  const { openModal } = useAppointment();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedId, setSelectedId] = useState(null);

  // Body Scroll Lock (Simplified, no padding-right needed for simple fade)
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedId]);

  // Data Aggregation
  const categoryStats = useMemo(() => {
    const stats = { All: blogPosts.length };
    blogPosts.forEach(post => {
      stats[post.category] = (stats[post.category] || 0) + 1;
    });
    return stats;
  }, []);

  const categories = Object.keys(categoryStats);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const activePost = selectedId ? blogPosts.find(p => p.id === selectedId) : null;

  return (
    <div className="bg-[#fcfdfd] min-h-screen relative">
      <PageHeader 
        title="Vascular Insights" 
        subtitle="Expert Guidance & Clinical Updates" 
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <aside className="lg:w-1/4 space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Search size={20} className="text-hospital-navy" />
                <h3 className="text-lg font-black text-hospital-navy uppercase tracking-tight">Search</h3>
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Find an article..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-5 pr-12 py-4 rounded-2xl bg-hospital-soft-blue/30 border-transparent focus:bg-white focus:border-hospital-navy/20 transition-all text-sm font-medium outline-none"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300">
                   <ArrowRight size={18} />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <Filter size={20} className="text-hospital-navy" />
                <h3 className="text-lg font-black text-hospital-navy capitalize tracking-tight">Categories</h3>
              </div>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all group ${
                      activeCategory === cat 
                      ? "bg-hospital-navy text-white shadow-lg shadow-hospital-navy/20" 
                      : "text-hospital-slate hover:bg-hospital-soft-blue/50  font-medium capitalize tracking-wider"
                    }`}
                  >
                    <span className="text-sm font-bold capitalize tracking-widest">{cat}</span>
                    <span className={`text-[10px] font-black w-6 h-6 flex items-center justify-center rounded-full ${
                      activeCategory === cat ? "bg-white/20" : "bg-hospital-soft-blue text-hospital-navy"
                    }`}>
                      {categoryStats[cat]}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-linear-to-br from-hospital-navy to-[#1e3a8a] rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
               <div className="relative z-10 text-center">
                  <h4 className="text-xl font-black uppercase tracking-tight mb-3">Professional Consultation</h4>
                  <p className="text-white/60 text-[10px] font-black uppercase tracking-widest leading-relaxed mb-6">
                    Connect with our diagnostic specialists
                  </p>
                  <button 
                    onClick={openModal}
                    className="w-full py-4 bg-white text-hospital-navy rounded-xl font-black text-xs uppercase tracking-[0.3em] hover:bg-hospital-sky-blue hover:text-white transition-all shadow-md"
                  >
                    Get Expertise
                  </button>
               </div>
            </div>
          </aside>

          {/* Grid Content (No LayoutId) */}
          <main className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <div
                    onClick={() => setSelectedId(post.id)}
                    key={post.id}
                    className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col"
                  >
                    <div className="block relative aspect-16/10 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-hospital-navy/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-[9px] font-black text-hospital-navy uppercase tracking-[0.3em] shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col grow">
                      <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.3em] text-hospital-slate/50 mb-4">
                        <span className="flex items-center gap-1.5"><Calendar size={12} className="text-hospital-sky-blue" /> {post.date}</span>
                        <span className="flex items-center gap-1.5"><Clock size={12} className="text-hospital-sky-blue" /> 5 MIN READ</span>
                      </div>

                      <h3 className="text-lg font-black text-hospital-navy leading-tight uppercase tracking-tight mb-4 group-hover:text-hospital-sky-blue transition-colors line-clamp-2 font-sans">
                        {post.title}
                      </h3>

                      <p className="text-hospital-slate text-[13px] leading-relaxed line-clamp-3 mb-6 grow font-medium opacity-80">
                        {post.excerpt}
                      </p>

                      <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-hospital-navy flex items-center gap-2">
                          READ FULL ARTICLE <ChevronRight size={12} />
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-32 text-center">
                  <h3 className="text-2xl font-black text-hospital-navy uppercase tracking-tight">No Insights Found</h3>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>

      {/* Simplified Fade-In Modal (No LayoutId) */}
      <AnimatePresence>
        {selectedId && activePost && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-12 overflow-y-auto">
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.3 }}
               onClick={() => setSelectedId(null)}
               className="fixed inset-0 bg-[#020817]/95 backdrop-blur-3xl z-0"
             />

             <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-white w-full max-w-6xl rounded-[2.5rem] shadow-2xl z-10 overflow-hidden flex flex-col md:flex-row h-full max-h-[85vh] origin-center"
             >
                {/* Visual Image / Hero Side */}
                <div className="md:w-5/12 h-64 md:h-full relative overflow-hidden bg-hospital-navy shrink-0">
                   <img 
                      src={activePost.image} 
                      className="w-full h-full object-cover opacity-90 shadow-2xl"
                   />
                   <div className="absolute inset-0 bg-linear-to-t from-hospital-navy via-transparent to-transparent" />
                   
                   <div className="absolute bottom-10 left-10 right-10 z-10">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-hospital-sun mb-4 block opacity-60">
                         Verified Clinical Insight
                      </span>
                      <h2 className="text-xl md:text-3xl font-semibold text-white leading-tight mb-0 font-sans tracking-tight">
                         {activePost.title}
                      </h2>
                   </div>
                </div>

                {/* Content Side (Fixed Button, Scrollable Text) */}
                <div className="md:w-7/12 flex flex-col h-full bg-white relative overflow-hidden">
                   {/* Floating Clinical Close Button */}
                   <button 
                      onClick={() => setSelectedId(null)}
                      className="absolute top-8 right-8 px-6 py-2.5 rounded-lg bg-slate-50 flex items-center gap-3 hover:bg-hospital-navy hover:text-white transition-all duration-300 shadow-sm z-50 group border border-slate-100"
                   >
                      <span className="text-[15px] font-bold capitalize tracking-[0.2em] transition-colors leading-none">Close</span>
                      <X size={18} className="transition-transform group-hover:rotate-90" />
                   </button>

                   {/* Scrollable Container */}
                   <div className="flex-1 overflow-y-auto p-8 md:p-14 lg:p-20 custom-scrollbar overscroll-contain">
                      <div className="max-w-3xl mx-auto">
                         <div className="prose prose-slate prose-lg lg:prose-xl font-sans">
                      
                        {/* Perspective Pull-Quote */}
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          className="mb-16 relative"
                        >
                           <p className="text-md md:text-2xl text-hospital-navy font-semibold leading-relaxed tracking-tight">
                              "{activePost.hook}"
                           </p>
                        </motion.div>

                        {/* Clinical Article Body */}
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="space-y-12 text-slate-600 text-[1.125rem] leading-[1.8] font-normal"
                        >
                            {activePost.content.split('\n\n').map((para, i) => {
                              // Professional Section Headers
                              if (para.startsWith('### ') || (para.includes('Warning Signs') && !para.includes('\n'))) {
                                const title = para.replace('### ', '');
                                return (
                                  <h2 key={i} className="text-xl font-bold text-hospital-navy mt-16 mb-8 border-b border-slate-100 pb-4 tracking-tight">
                                     {title}
                                  </h2>
                                );
                              }
                              
                              // Clinical Highlight / Symptom Checklist
                              if (para.startsWith('**') || para.startsWith('- ')) {
                                return (
                                  <div key={i} className="bg-slate-50/50 p-10 rounded-3xl border border-slate-200/60 shadow-sm my-14 transition-all hover:shadow-md">
                                     <div className="space-y-5">
                                        {para.split('\n').map((line, li) => (
                                          <div key={li} className="flex items-start gap-4">
                                            <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-hospital-sky-blue shrink-0" />
                                            <p className="m-0 font-semibold text-hospital-navy text-base leading-relaxed opacity-90">
                                              {line.replace('- ', '').replace(/\*\*/g, '')}
                                            </p>
                                          </div>
                                        ))}
                                     </div>
                                  </div>
                                );
                              }

                              // Standard Paragraph
                              return <p key={i} className="mb-0 leading-[1.9]">{para}</p>;
                            })}
                        </motion.div>

                        {/* Official Clinical CTA */}
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="bg-hospital-navy rounded-[2.5rem] p-12 mt-24 relative overflow-hidden text-center group shadow-2xl shadow-hospital-navy/20"
                        >
                           <div className="absolute inset-0 bg-linear-to-br from-hospital-navy via-hospital-navy to-hospital-sky-blue opacity-40 transition-opacity group-hover:opacity-80" />
                           <div className="relative z-10">
                              <span className="text-white/30 text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">
                                 Board-Certified Vascular Support
                              </span>
                              <p className="text-white font-semibold text-2xl tracking-tight leading-snug mb-10 max-w-lg mx-auto">
                                 {activePost.cta}
                              </p>
                              <div className="flex flex-wrap justify-center gap-4">
                                 <button 
                                   onClick={() => { setSelectedId(null); openModal(); }} 
                                   className="px-12 py-5 bg-hospital-sky-blue text-white rounded-2xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-hospital-navy transition-all shadow-xl hover:-translate-y-1 active:translate-y-0"
                                 >
                                    Consult Specialist
                                 </button>
                                 <button 
                                   onClick={() => setSelectedId(null)} 
                                   className="px-10 py-5 bg-white/10 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-white/20 transition-all border border-white/10"
                                  >
                                    Return to List
                                 </button>
                              </div>
                           </div>
                        </motion.div>
                     </div>
                   </div>
                </div>
              </div>
             </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlogPage;

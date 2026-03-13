import { motion } from "framer-motion";
import { Eye, Heart } from "lucide-react";
import { hospitalData } from "../data";

const News = () => {
  const { news } = hospitalData;

  return (
    <section id="news" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-hospital-skyBlue font-bold tracking-[0.2em] mb-4 uppercase text-xs">
            {news.tag}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-hospital-navy">
            {news.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col md:flex-row gap-6 p-4 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <div className="w-full md:w-1/3 aspect-4/3 rounded-lg overflow-hidden shadow-sm">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <p className="text-hospital-skyBlue text-xs font-bold mb-2 uppercase tracking-wide">
                  {post.date} | {post.author}
                </p>
                <h3 className="text-xl font-bold text-hospital-navy mb-4 leading-tight">
                  {post.title}
                </h3>
                <div className="flex gap-4 text-sm text-[#475569]">
                  <span className="flex items-center gap-1"><Eye className="w-4 h-4 text-hospital-skyBlue" /> {post.views}</span>
                  <span className="flex items-center gap-1"><Heart className="w-4 h-4 text-red-400" /> {post.likes}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-12">
          <div className="w-2 h-2 rounded-full bg-hospital-navy"></div>
          <div className="w-2 h-2 rounded-full bg-slate-300"></div>
          <div className="w-2 h-2 rounded-full bg-slate-300"></div>
        </div>
      </div>
    </section>
  );
};

export default News;

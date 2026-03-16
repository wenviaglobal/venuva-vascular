import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { reviewsData } from "../data";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextReview = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.reviews.length);
  }, []);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviewsData.reviews.length) % reviewsData.reviews.length);
  };

  // Auto-play interval
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextReview();
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [nextReview, isPaused]);

  return (
    <section className="py-16 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-hospital-navy uppercase leading-tight mb-4">
            {reviewsData.heading}
          </h2>
          <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">
            {reviewsData.description}
          </p>
        </motion.div>

        {/* 3D Carousel Section */}
        <div 
          className="relative h-[500px] flex items-center justify-center" 
          style={{ perspective: "1000px" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex items-center justify-center w-full max-w-6xl relative">
            {reviewsData.reviews.map((review, index) => {
              // Calculate relative position to current
              const diff = (index - currentIndex + reviewsData.reviews.length) % reviewsData.reviews.length;
              const isCenter = diff === 0;
              const isLeft = diff === reviewsData.reviews.length - 1;
              const isRight = diff === 1;

              // Visibiltity logic
              if (!isCenter && !isLeft && !isRight) return null;

              return (
                <motion.div
                  key={review.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isCenter ? 1 : 0.6,
                    scale: isCenter ? 1 : 0.9,
                    x: isCenter ? 0 : isLeft ? -350 : 350,
                    rotateY: isCenter ? 0 : isLeft ? 15 : -15,
                    rotateZ: isCenter ? 0 : isLeft ? -5 : 5,
                    zIndex: isCenter ? 10 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  onClick={() => setCurrentIndex(index)}
                  className={`absolute w-full max-w-[400px] p-8 md:p-10 bg-white rounded-[40px] shadow-2xl border border-slate-100 cursor-pointer transition-shadow hover:shadow-hospital-teal/10`}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-100 border-2 border-hospital-teal/20">
                      <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-black text-hospital-navy uppercase text-sm leading-none">{review.name}</h4>
                      <p className="text-slate-400 text-[10px] font-bold uppercase mt-1.5 flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-hospital-amber rounded-full" />
                        {review.location}
                      </p>
                    </div>
                  </div>

                  <div className="relative mb-8">
                     <Quote className="absolute -top-4 -left-4 text-slate-100 w-12 h-12 -z-10" />
                     <p className="text-slate-600 font-medium text-lg leading-relaxed text-left italic">
                      "{review.content}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                    <div className="flex gap-1 text-[#FFB800]">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={18} 
                          fill={i < Math.floor(review.rating) ? "currentColor" : "none"} 
                          stroke="currentColor" 
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                       <span className="text-hospital-navy font-black text-lg">{review.rating}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prevReview}
            className="w-14 h-14 rounded-full border border-slate-200 bg-white text-hospital-navy hover:bg-hospital-teal hover:text-white hover:border-hospital-teal transition-all duration-300 flex items-center justify-center shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextReview}
            className="w-14 h-14 rounded-full border border-slate-200 bg-white text-hospital-navy hover:bg-hospital-teal hover:text-white hover:border-hospital-teal transition-all duration-300 flex items-center justify-center shadow-lg"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

import { motion, AnimatePresence } from "framer-motion";
import { Play, Video, ExternalLink, Activity, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { videoGallery } from "../data";

const VideoGallery = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextVideo = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % videoGallery.videos.length);
  }, []);

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videoGallery.videos.length) % videoGallery.videos.length);
  };

  // Auto-play interval
  useEffect(() => {
    if (isPaused || activeVideo) return;
    const interval = setInterval(nextVideo, 5000);
    return () => clearInterval(interval);
  }, [nextVideo, isPaused, activeVideo]);

  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-12 h-0.5 bg-hospital-sun rounded-full" />
              <span className="text-hospital-sun font-black uppercase tracking-[0.3em] text-xs">
                {videoGallery.tag}
              </span>
            </div>
            <h2 className="text-3xl md:text-6xl font-black text-hospital-navy uppercase leading-tight">
              {videoGallery.heading.split("Experts")[0]}
              <span className="text-hospital-teal">Procedures</span>
              {videoGallery.heading.split("Experts")[1]}
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={prevVideo}
              className="w-12 h-12 rounded-full border border-hospital-mint flex items-center justify-center text-hospital-navy hover:bg-hospital-teal hover:text-white hover:border-hospital-teal transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextVideo}
              className="w-12 h-12 rounded-full border border-hospital-mint flex items-center justify-center text-hospital-navy hover:bg-hospital-teal hover:text-white hover:border-hospital-teal transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Video Carousel */}
        <div
          className="relative h-[250px] sm:h-[350px] md:h-[450px] flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ perspective: "1200px" }}
        >
          {/* Mobile Overlay Arrows */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 z-20 md:hidden pointer-events-none">
            <button
              onClick={prevVideo}
              className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-hospital-mint flex items-center justify-center text-hospital-navy shadow-lg pointer-events-auto active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextVideo}
              className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-hospital-mint flex items-center justify-center text-hospital-navy shadow-lg pointer-events-auto active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex items-center justify-center w-full max-w-5xl relative">
            <AnimatePresence mode="popLayout">
              {videoGallery.videos.map((video, index) => {
                const diff = (index - currentIndex + videoGallery.videos.length) % videoGallery.videos.length;
                const isCenter = diff === 0;
                const isLeft = diff === videoGallery.videos.length - 1;
                const isRight = diff === 1;

                if (!isCenter && !isLeft && !isRight) return null;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: isCenter ? 1 : 0.4,
                      scale: isCenter ? 1 : 0.85,
                      x: isCenter ? 0 : isLeft ? -380 : 380,
                      rotateY: isCenter ? 0 : isLeft ? 20 : -20,
                      zIndex: isCenter ? 10 : 0,
                    }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    onClick={() => isCenter ? setActiveVideo(video) : setCurrentIndex(index)}
                    className="absolute w-full max-w-lg cursor-pointer group"
                  >
                    {/* Video Card */}
                    <div className="relative aspect-video rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-hospital-navy shadow-2xl group-hover:shadow-hospital-teal/20 transition-all duration-500">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-hospital-navy/80 via-transparent to-transparent opacity-80" />

                      {/* Center Play Button (Always visible on center card) */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 shadow-xl ${isCenter ? 'group-hover:bg-hospital-teal group-hover:border-hospital-teal group-hover:scale-110' : 'opacity-0'}`}>
                          <Play className="w-6 h-6 md:w-8 md:h-8 ml-1" fill="currentColor" />
                        </div>
                      </div>

                      {/* Video Info Overlay */}
                      <div className={`absolute bottom-4 left-6 right-6 md:bottom-6 md:left-8 md:right-8 transition-opacity duration-300 ${isCenter ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="flex items-center gap-2 mb-1 md:mb-2">
                          <span className="px-2 py-0.5 md:px-3 md:py-1 bg-hospital-sun rounded-full text-white text-[11px] font-black uppercase tracking-wider">
                            {video.category}
                          </span>
                        </div>
                        <h3 className="text-sm md:text-xl font-black text-white uppercase leading-tight">
                          {video.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Indicator Dots (Only) */}
        <div className="flex md:hidden items-center justify-center gap-1 mt-2">
          {videoGallery.videos.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-4 bg-hospital-teal' : 'w-1 bg-hospital-mint'}`}
            />
          ))}
        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {activeVideo && (
            <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                onClick={() => setActiveVideo(null)}
                className="absolute inset-0 bg-hospital-navy/95 backdrop-blur-xl"
              />
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black"
              >
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
                >
                  <X size={24} />
                </button>
                <div className="w-full h-full relative">
                  <iframe
                    src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&mute=1&modestbranding=1&rel=0`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default VideoGallery;

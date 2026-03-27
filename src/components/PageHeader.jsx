import { motion } from "framer-motion";

const PageHeader = ({ title, subtitle, image }) => {
  return (
    <section className="relative h-[300px] flex items-center overflow-hidden bg-linear-to-br from-hospital-navy via-[#1e3a8a] to-[#0f4c81]">
      {/* Ambient Animated Glowing Meshes */}
      <motion.div 
        animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl pointer-events-none"
      />
      <motion.div 
        animate={{ y: [0, 40, 0], x: [0, -20, 0], scale: [1, 1.2, 1] }} 
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-hospital-sky-blue/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xs md:text-sm text-hospital-sky-blue font-black uppercase tracking-[0.4em] opacity-90">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;

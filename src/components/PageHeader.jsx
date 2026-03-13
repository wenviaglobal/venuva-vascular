import { motion } from "framer-motion";

const PageHeader = ({ title, subtitle, image }) => {
  return (
    <section className="relative h-[300px] flex items-center overflow-hidden bg-hospital-navy">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image || "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000"} 
          alt={title}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-linear-to-b from-hospital-navy/60 to-hospital-navy"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6  uppercase tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-hospital-sky-blue font-bold uppercase tracking-[0.2em]">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;

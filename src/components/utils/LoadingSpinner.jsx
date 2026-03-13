import { motion } from "framer-motion";
import { Activity } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-9999 bg-white flex flex-col items-center justify-center p-6"
    >
      <div className="relative">
        {/* Outer ripple rings */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 -m-8 rounded-full border border-hospital-sky-blue/30"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0, 0.2],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 -m-16 rounded-full border border-hospital-navy/10"
        />

        {/* Logo Container */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-24 h-24 rounded-4xl bg-hospital-navy flex items-center justify-center shadow-2xl shadow-hospital-navy/30"
        >
          <Activity size={48} className="text-white" />
          
          {/* Pulsing line overlay */}
          <motion.div
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-4xl border-2 border-hospital-sky-blue"
          />
        </motion.div>
      </div>

      {/* Loading Text */}
      <div className="mt-16 text-center space-y-4">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="block text-2xl font-black text-hospital-navy uppercase tracking-tighter"
        >
          Venuva <span className="text-hospital-sky-blue">Vascular</span>
        </motion.span>
        
        <div className="w-48 h-1 bg-slate-100 rounded-full mx-auto relative overflow-hidden">
          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 w-1/2 bg-linear-to-r from-transparent via-hospital-sky-blue to-transparent"
          />
        </div>

        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
          Setting Global Standards
        </p>
      </div>
    </motion.div>
  );
};

export default LoadingSpinner;

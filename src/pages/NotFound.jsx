import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertTriangle, Home, ArrowRight } from "lucide-react";
import SEO from "../components/utils/SEO";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-hospital-soft-blue/30 px-6 py-24 relative overflow-hidden">
      <SEO 
        title="Page Not Found | Venuva Vascular Center" 
        description="The page you are looking for does not exist or has been moved." 
      />
      
      {/* Decorative background elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-hospital-sky-blue rounded-full blur-3xl -z-10"
      />
      <motion.div 
        animate={{ y: [0, 20, 0], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-hospital-teal rounded-full blur-3xl -z-10"
      />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full bg-white rounded-[40px] p-10 md:p-16 text-center shadow-xl border border-slate-100 relative"
      >
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-white rounded-3xl shadow-lg border border-slate-100 flex items-center justify-center rotate-12">
          <AlertTriangle size={48} className="text-hospital-sun -rotate-12" />
        </div>

        <h1 className="text-8xl md:text-9xl font-black text-hospital-navy tracking-tighter mt-8 mb-4">
          404
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-black text-hospital-navy uppercase tracking-tight mb-4">
          Page Not Found
        </h2>
        
        <p className="text-hospital-slate font-medium text-base md:text-lg max-w-md mx-auto mb-10 leading-relaxed">
          We're sorry, but the page you are looking for doesn't exist, has been removed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/" 
            className="w-full sm:w-auto bg-hospital-navy text-white px-8 py-4 rounded-xl font-black text-xs tracking-[0.2em] uppercase hover:bg-hospital-sky-blue hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
          >
            <Home size={16} />
            Back to Home
          </Link>
          <Link 
            to="/treatments" 
            className="w-full sm:w-auto bg-hospital-soft-blue text-hospital-navy border border-hospital-mint px-8 py-4 rounded-xl font-black text-xs tracking-[0.2em] uppercase hover:bg-white hover:border-hospital-teal hover:text-hospital-teal transition-all flex items-center justify-center gap-2"
          >
            Our Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;

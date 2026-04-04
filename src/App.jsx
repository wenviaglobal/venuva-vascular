import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import ServicesPage from "./pages/ServicesPage";
import TreatmentsPage from "./pages/TreatmentsPage";
import DoctorsPage from "./pages/DoctorsPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import NewsPage from "./pages/NewsPage";
import TreatmentDetail from "./pages/TreatmentDetail";
import LandingPage from "./pages/LandingPage";
import LoadingSpinner from "./components/utils/LoadingSpinner";
import FloatingAction from "./components/utils/FloatingAction";
import { AppointmentProvider } from "./context/AppointmentContext";
import AppointmentModal from "./components/modals/AppointmentModal";
import Doctors from "./components/Doctors";

// console.log(import.meta.env.VITE_DOCTOR_NUMBER);
// console.log(import.meta.env.VITE_DOCTOR_EMAIL);


// Scroll to top or hash on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const isLandingPage = location.pathname === "/checkup-offer";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AppointmentProvider>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {isLoading && <LoadingSpinner key="loader" />}
      </AnimatePresence>

      <div className={`min-h-screen selection:bg-hospital-sky-blue selection:text-white flex flex-col font-sans antialiased text-hospital-charcoal ${isLandingPage ? "" : ""}`}>
        {!isLandingPage && <Navbar />}
        <main className={`flex-1 ${isLandingPage ? "" : "pt-[80px]"}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/treatments" element={<TreatmentsPage />} />
            <Route path="/treatments/:id" element={<TreatmentDetail />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/doctors/:slug" element={<DoctorsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/checkup-offer" element={<LandingPage />} />
          </Routes>
        </main>
        {!isLandingPage && <Footer />}
        {!isLandingPage && <FloatingAction />}
        <AppointmentModal />
      </div>
    </AppointmentProvider>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

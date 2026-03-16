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
import LoadingSpinner from "./components/utils/LoadingSpinner";
import FloatingAction from "./components/utils/FloatingAction";

// console.log(import.meta.env.VITE_DOCTOR_NUMBER);
// console.log(import.meta.env.VITE_DOCTOR_EMAIL);


// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to show the branded experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {isLoading && <LoadingSpinner key="loader" />}
      </AnimatePresence>

      <div className="min-h-screen selection:bg-hospital-sky-blue selection:text-white flex flex-col font-sans antialiased text-[#1e293b]">
        <Navbar />
        <main className="flex-1 pt-[80px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/treatments" element={<TreatmentsPage />} />
            <Route path="/treatments/:id" element={<TreatmentDetail />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingAction />
      </div>
    </Router>
  );
}

export default App;

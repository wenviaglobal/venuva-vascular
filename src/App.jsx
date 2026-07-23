import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/utils/LoadingSpinner";
import FloatingAction from "./components/utils/FloatingAction";
import { AppointmentProvider } from "./context/AppointmentContext";
import { ContentProvider } from "./context/ContentContext";
import AppointmentModal from "./components/modals/AppointmentModal";

// Lazy load pages for performance
const Home = lazy(() => import("./pages/Home"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const TreatmentsPage = lazy(() => import("./pages/TreatmentsPage"));
const DoctorsPage = lazy(() => import("./pages/DoctorsPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const TreatmentDetail = lazy(() => import("./pages/TreatmentDetail"));
const Landingpage = lazy(() => import("./pages/VenuvaLanding"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AdminApp = lazy(() => import("./admin/AdminApp"));
import { ADMIN_BASE } from "./admin/base";
// const LandingPage = lazy(() => import("./pages/LandingPage"));

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

  // The admin CMS is served ONLY from the admin subdomain (admin.<domain>) at its
  // root. In local dev (localhost) it's reachable at /admin for convenience.
  // On the public domain, /admin is NOT the admin — it falls through to NotFound.
  const host = typeof window !== "undefined" ? window.location.hostname : "";
  const isAdminHost = host.startsWith("admin.");
  const isLocalDev = host === "localhost" || host === "127.0.0.1";
  const showAdmin = isAdminHost || (isLocalDev && location.pathname.startsWith("/admin"));

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Admin CMS renders full-screen without the public navbar/footer/loader.
  if (showAdmin) {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path={`${ADMIN_BASE}/*`} element={<AdminApp />} />
        </Routes>
      </Suspense>
    );
  }

  return (
    <ContentProvider>
    <AppointmentProvider>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {isLoading && <LoadingSpinner key="loader" />}
      </AnimatePresence>

      <div className={`min-h-screen selection:bg-hospital-sky-blue selection:text-white flex flex-col font-sans antialiased text-hospital-charcoal ${isLandingPage ? "" : ""}`}>
        {!isLandingPage && <Navbar />}
        <main className={`flex-1 ${isLandingPage ? "" : "pt-[80px]"}`}>
          <Suspense fallback={<LoadingSpinner />}>
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
              <Route path="/landingpage" element={<Landingpage />} />
              <Route path="*" element={<NotFound />} />
              {/* <Route path="/checkup-offer" element={<LandingPage />} /> */}
            </Routes>
          </Suspense>
        </main>
        {!isLandingPage && <Footer />}
        {!isLandingPage && <FloatingAction />}
        <AppointmentModal />
      </div>
    </AppointmentProvider>
    </ContentProvider>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}


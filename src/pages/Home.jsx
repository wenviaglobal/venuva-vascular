import { useLocation } from "react-router-dom";
import SEO from "../components/utils/SEO";
import Hero from "../components/Hero";
import About from "../components/About";
import Treatments from "../components/Treatments";
import WhyChooseUs from "../components/WhyChooseUs";
import AppointmentSection from "../components/AppointmentSection";
import Testimonial from "../components/Testimonial";
import Doctors from "../components/Doctors";
import FinalCTA from "../components/FinalCTA";
import News from "../components/News";
import Contact from "../components/Contact";

const Home = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  return (
    <>
      {isAboutPage ? (
        <SEO 
          title="About Venuva Vascular Center | Expert Vascular & Vein Care in India"
          description="Learn about Venuva Vascular Center – a leading center for advanced vascular, vein, and minimally invasive treatments. Our expert team ensures safe, effective, and compassionate care."
        />
      ) : (
        <SEO 
          title="Venuva Vascular Center | Advanced Vascular & Vein Treatments in India"
          description="Discover expert vascular care at Venuva Vascular Center. We offer advanced treatments for varicose veins, DVT, PVD, and minimally invasive procedures for a healthy circulatory system."
        />
      )}
      <Hero />
      <About />
      <Treatments />
      <WhyChooseUs />
      <AppointmentSection />
      <Doctors />
      <Testimonial />
      <News />
      <Contact />
      <FinalCTA />
    </>
  );
};

export default Home;

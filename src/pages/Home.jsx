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
  return (
    <>
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

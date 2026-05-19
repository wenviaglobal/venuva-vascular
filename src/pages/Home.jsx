  import { useLocation } from "react-router-dom";
import SEO from "../components/utils/SEO";
import HomeSlider from "../components/HomeSlider";
import { heroSlides } from "../data";
import About from "../components/About";
import Treatments from "../components/Treatments";
import WhyChooseUs from "../components/WhyChooseUs";
import Doctors from "../components/Doctors";
import VideoGallery from "../components/VideoGallery";
import RecoveryJourney from "../components/RecoveryJourney";
import Reviews from "../components/Reviews";
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
          title="Best Varicose Vein & Vascular Treatment in Bengaluru | Venuva Vascular Center"
          description="Venuva Vascular Center offers advanced varicose vein and vascular treatments in Bengaluru. Expert care for DVT, diabetic foot, angioplasty, embolization, and minimally invasive procedures."
          keywords="vascular treatment Bengaluru, varicose vein treatment Bengaluru, vascular clinic Bangalore, DVT treatment Bangalore, diabetic foot treatment Bangalore, angioplasty treatment Bengaluru, EVLT treatment Bangalore, vascular surgeon Bangalore"
          ogDescription="Venuva Vascular Center offers advanced varicose vein and vascular treatments in Bengaluru with expert minimally invasive procedures."
          twitterDescription="Advanced vascular and minimally invasive vein treatments in Bengaluru."
          image="https://venuvavascular.com/assets/AboutUs-laHemSoL.webp"
        />
      )}
      <h1 className="sr-only">Venuva Vascular Center - Best Vascular Treatments in Bengaluru</h1>
      <HomeSlider slides={heroSlides} />
      <About />
      <Treatments />
      <RecoveryJourney />
      <VideoGallery />
      <WhyChooseUs />
      <Doctors />
      <Reviews />
      <Contact />
    </>
  );
};

export default Home;

import React, { useEffect, useRef } from "react";
import Bestreliable from "../Components/Home/Bestreliable";
import Allprofessional from "../Components/Home/Allprofessional";
import Happycustomers from "../Components/Home/Happycustomers";
import Ourservices from "../Components/Home/Ourservices";
import Bookappointment from "../Components/Home/Bookappointment";
import Startconsultation from "../Components/Home/Startconsultation";
import Ourdoctor from "../Components/Home/Ourdoctor";
import Chooseus from "../Components/Home/Chooseus";
import Blog from "../Components/Home/Blog";
import Testimoials from "../Components/Home/Testimoials";
import Footer from "../Components/Footer";

const Home = ({ scrollToAbout, setScrollToAbout }) => {
  const aboutRef = useRef(null);

  useEffect(() => {
    if (scrollToAbout) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
      setScrollToAbout(false);
    }
  }, [scrollToAbout, setScrollToAbout]);
  return (
    <>
      <div>
        <Bestreliable />
        <Happycustomers />
        <Allprofessional />
        <div ref={aboutRef}>
          <Ourservices />
        </div>
        <Bookappointment />
        <Testimoials />
        <Chooseus />
        <Ourdoctor />
        <Startconsultation />
        {/* <Blog /> */}
        <Footer />
      </div>
    </>
  );
};

export default Home;

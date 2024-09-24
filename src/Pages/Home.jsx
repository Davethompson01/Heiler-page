import React from "react";
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
import Footer from "../Components/Home/Footer";

const Home = () => {
  return (
    <>
      <div>
        <Bestreliable />
        <Happycustomers />
        <Allprofessional />
        <Ourservices />
        <Bookappointment />
        <Testimoials />
        <Chooseus />
        <Ourdoctor />
        <Startconsultation />
        <Blog />
        <Footer />
      </div>
    </>
  );
};

export default Home;

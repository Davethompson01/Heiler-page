import React from "react";
import Bestreliable from "../Components/Home/Bestreliable";
import Allprofessional from "../Components/Home/Allprofessional";
import Happycustomers from "../Components/Home/Happycustomers";
import Ourservices from "../Components/Home/Ourservices";
import Bookappointment from "../Components/Home/Bookappointment";
import Startconsultation from "../Components/Home/Startconsultation";

const Home = () => {
  return (
    <>
      <div>
        <Bestreliable />
        <Allprofessional />
        <Happycustomers />
        <Ourservices />
        <Bookappointment />
        <Startconsultation />
      </div>
    </>
  );
};

export default Home;

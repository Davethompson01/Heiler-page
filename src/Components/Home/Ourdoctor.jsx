import React from "react";
import health from "../../assets/health.png";
import health1 from "../../assets/health1.png";
import health2 from "../../assets/health2.png";
import health3 from "../../assets/health3.png";
import fbIcon from "../../assets/facebook.svg";
import linkeldn from "../../assets/linkeldn.svg";
import twitter from "../../assets/twitter.svg";
import star from "../../assets/star.svg";

const Ourdoctor = () => {
  const maps = [
    {
      img: health,
      h1: "Dr Awosika John",
      h3: "Cardiologist",
      p: "5.0 (300+ reviews)",
      fbIcon: fbIcon,
      twitterIcon: twitter,
      linkIcon: linkeldn,
    },
    {
      img: health1,
      h1: "Dr Awosika John",
      h3: "Cardiologist",
      p: "5.0 (300+ reviews)",
      fbIcon: fbIcon,
      twitterIcon: twitter,
      linkIcon: linkeldn,
    },
    {
      img: health2,
      h1: "Dr Awosika John",
      h3: "Cardiologist",
      p: "5.0 (300+ reviews)",
      fbIcon: fbIcon,
      twitterIcon: twitter,
      linkIcon: linkeldn,
    },
    {
      img: health3,
      h1: "Dr Awosika John",
      h3: "Cardiologist",
      p: "5.0 (300+ reviews)",
      fbIcon: fbIcon,
      twitterIcon: twitter,
      linkIcon: linkeldn,
    },
  ];
  return (
    <>
      <div className="bg-[#fff]  py-10 px-4 lg:px-10 shadow-lg w-full text-center  ">
        <h1 className="text-[30px] font-[500]   text-[#00a651] ">
          Meet Our Professional Doctors
        </h1>
        <p className="mb-8 text-[22px] text-[#000] ">
          Here are some of our professionals to cater for your heath needs
        </p>
        <div className="grid gap-4 place-items-center w-full sm:grid-cols-2  lgpro:grid-cols-4">
          {maps.map((element, index) => (
            <div
              key={index}
              className="bg-white  p-5 rounded-xl border-[2px] border-[#e8f7ef] text-[#00a651]  flex flex-col items-center mx-auto justify-center w-[262px] h-[350px] four:max-w-[400px] "
            >
              <img
                src={health}
                alt="A healthcare professional providing care to a patient"
                className="max-w-[450px]"
              />
              <h1 className="text-[24px] font-[700]">{element.h1}</h1>
              <h1 className="text-[20px] text-[#003B1D] font-semibold">
                {element.h3}
              </h1>
              <p className="text-[15px] flex gap-2 items-center justify-center">
                <div className=" h-[20px] w-[20px] bg- bg-contain bg-no-repeat  bg-center">
                  <img src={star} alt="" />
                </div>
                {element.p}
              </p>
              <div>
                <div className="flex justify-center">
                  <div
                    className=" h-[50px] w-[50px] bg-cover bg-no-repeat  bg-center"
                    style={{
                      backgroundImage: `url(${element.fbIcon})`,
                    }}
                  ></div>
                  <div
                    className=" h-[50px] w-[50px] bg-cover bg-no-repeat  bg-center"
                    style={{
                      backgroundImage: `url(${element.twitterIcon})`,
                    }}
                  ></div>
                  <div
                    className=" h-[50px] w-[50px] bg-cover bg-no-repeat  bg-center"
                    style={{
                      backgroundImage: `url(${element.linkIcon})`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Ourdoctor;

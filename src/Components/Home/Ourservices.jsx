import React from "react";
import cardiology from "../../assets/cardiology.svg";
import neu from "../../assets/Neurology.svg";
import Orthopedics from "../../assets/Orthopedics.svg";
import Surgetics from "../../assets/Surgetics.svg";

const Ourservices = () => {
  const maps = [
    {
      svg: cardiology,
      h1: "Cardiology",
      p: "We are here to help you whenever you fall ill, and tokeep you healthy",
    },
    {
      svg: neu,
      h1: "Neurology",
      p: "We can help you find vaccineappointment near you ornotify you.",
    },
    {
      svg: Orthopedics,
      h1: "Orthopedics",
      p: "From sessional allergies toburn identification, we have the resources.",
    },
    {
      svg: Surgetics,
      h1: "Surgetics",
      p: "We can help you find theavailable vaccine when theappointment is near",
    },
  ];
  return (
    <>
      <div className="text-center py-10  px-2 lg:px-10 bg-[#f5fffa]">
        <h1 className="text-[20px] font-bold text-[#00a651] ">Our Services</h1>
        <p className="text-[32px] text-[#00a651] font-semibold">
          We Provides the Best Services
        </p>
        <div className="grid gap-3 place-items-center  sm:grid-cols-2 lg:grid-cols-4">
          {maps.map((element, index) => (
            <div
              key={index}
              className="shadow-lg  rounded-xl p-4 w-[90%] grid place-items-center "
            >
              <div
                className=" h-[50px] w-[50px] bg-cover bg-no-repeat  bg-center"
                style={{
                  backgroundImage: `url(${element.svg})`,
                }}
              ></div>
              <h1 className="text-[25px] font-semibold text-[#00a651] text-center">
                {element.h1}
              </h1>
              <p className="font-medium text-[#00a651] text-center">
                {element.p}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Ourservices;

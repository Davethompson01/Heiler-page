import React from "react";
import professional from "../../assets/professional.svg";
import doctor from "../../assets/Doctor.svg";
import Emergency from "../../assets/emergency.svg";
import happy from "../../assets/happy.svg";

const Allprofessional = () => {
  const maps = [
    {
      svg: professional,
      h1: "All Professionals",
      p: "Providing unwavering support around the clock, our 24-hours service ensures.  ",
    },
    {
      svg: doctor,
      h1: "Qualified Doctors",
      p: "A qualified doctors possesses a comprehensive understanding of medical sciences",
    },
    {
      svg: Emergency,
      h1: "Emergency Care",
      p: "Our timely intervention plays a crucial role in stabilizingpatients and saving lives ",
    },
    {
      svg: happy,
      h1: "Happy Patients",
      p: "It is equipped with specializedtools and technology to ensurethe patient’s safety ",
    },
  ];
  return (
    <>
      <div className="bg-[#f5fffa] lg:px-10 py-10">
        <div className="grid gap-3 place-items-center py-6 sm:grid-cols-2  lg:grid-cols-4">
          {maps.map((element, index) => (
            <div
              key={index}
              className="shadow-lg lg:w-[98%] border-[2px] border-[#daf3e6] rounded-xl py-6 px-8  w-[261px] bg-white grid place-items-center "
            >
              <div
                className=" h-[50px] w-[50px] bg-cover bg-no-repeat  bg-center"
                style={{
                  backgroundImage: `url(${element.svg})`,
                }}
              ></div>
              <div className="text-center ">
                <h1 className="text-[24px] text-[#00a651] font-[700] ">{element.h1}</h1>
                <p>{element.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Allprofessional;

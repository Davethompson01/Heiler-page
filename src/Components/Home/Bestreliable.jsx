import React from "react";
import health from "../../assets/health111.png";
const Bestreliable = () => {
  return (
    <>
      <div className="sm:grid  p-4 bg-gradient-to-b from-[#019c4c] to-[#01391d] h-[550px] sm:h-[700px] relative  sm:justify-between lg:px-10">
        <div className=" text-white text-center grid gap-3 w-full z-20  place-content-center sm:absolute top-100px mt-7 sm:mt-12">
          <h1 className="text-[37px] font-[500]">
            The Best Reliable Health Service You Can Trust
          </h1>
          <p className="text-center">
            Our skilled doctors have experience with wide range of diseases to
            serve the needs of our patients.
          </p>
          <div className="grid place-content-center">
            <button className="grid rounded-xl text-[#00a651] bg-white py-3 px-8">
              Get Started
            </button>
          </div>
        </div>
        <img
          src={health}
          alt="A healthcare professional providing care to a patient"
          className=" sm:hidden absolute left-0 bottom-0 w-[100%]"
        />
        <img
          src={health}
          className="hidden sm:block  bg-cover bg-center w-full absolute h-[700px] top-0"
          alt=""
        />
      </div>
    </>
  );
};

export default Bestreliable;

import React from "react";
import health from "../../assets/health.png";
const Bestreliable = () => {
  return (
    <>
      <div className="p-4 bg-[#f5fffa] sm:flex sm:justify-between lg:px-10">
        <div className="grid place-content-center gap-3 basis-[50%]">
          <h1 className="text-3xl font-semibold text-[#00a651] max-w-[450px]">
            The Best Reliable Health Service You Can Trust
          </h1>
          <p className="text-[#00a651] text-[20px]">
            {" "}
            Our skilled doctors have experience with wide range of diseases to
            serve the needs of our patients.
          </p>
          <div>
            <button className="border-[1px] border-[#00a651] font-bold px-8 py-2 bg-white text-[#00a651] rounded-xl">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center  basis-[40%]">
          <img
            src={health}
            alt=""
            className="max-w-[60%]  sm:max-w-[300px] md:min-w-[350px] lg:min-w-[400px]"
          />
        </div>
      </div>
    </>
  );
};

export default Bestreliable;

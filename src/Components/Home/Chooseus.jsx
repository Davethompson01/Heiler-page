import React from "react";
import choose from "../../assets/chooseus.png";
import left from "../../assets/leftAngle.png";

const Chooseus = () => {
  return (
    <>
      <div className="bg-[#000]  py-10 px-4 lg:px-10 shadow-lg w-full text-center ">
        <div className="grid gap-12 place-content-center sm:flex items-center justify-center lg:justify-center lg:gap-[10rem]">
          <div>
            <h1 className="text-[#fff] flex items-center justify-center text-left text-[35px] mb-8 font-[500]">
              Why Choose Us
              <div className="max-w-[112px] h-[4px] bg-[#ee9621]"></div>
            </h1>

            <div className=" grid place-items-center">
              <img
                src={choose}
                alt=""
                className="sm:w-[310px] md:w-[400px]  lg:w-[500px]"
              />
            </div>
          </div>
          <div className="text-white grid gap-2">
            <p
              className="text-[16px] text-justify
            font-normal flex items-center gap-3 "
            >
              {" "}
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15Z"
                  fill="#00A651"
                />
                <path
                  d="M11 3L5.75 8.4L4 6.6L2.25 8.4L5.75 12L12.75 4.8L11 3Z"
                  fill="white"
                />
              </svg>
              Safety is our first priority
            </p>
            <p className="text-[16px] text-justify font-normal flex  gap-3 ">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15Z"
                  fill="#00A651"
                />
                <path
                  d="M11 3L5.75 8.4L4 6.6L2.25 8.4L5.75 12L12.75 4.8L11 3Z"
                  fill="white"
                />
              </svg>
              <div>Flexibility in treatment</div>
            </p>
            <p className="text-[16px] text-justify font-normal flex   gap-3 ">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15Z"
                  fill="#00A651"
                />
                <path
                  d="M11 3L5.75 8.4L4 6.6L2.25 8.4L5.75 12L12.75 4.8L11 3Z"
                  fill="white"
                />
              </svg>
              <h1> Diagnostic with technology</h1>
            </p>
            <p className="text-[16px] text-justify font-normal flex  items-center gap-3 ">
              {" "}
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15Z"
                  fill="#00A651"
                />
                <path
                  d="M11 3L5.75 8.4L4 6.6L2.25 8.4L5.75 12L12.75 4.8L11 3Z"
                  fill="white"
                />
              </svg>
              Reliable pricing
            </p>
            <p className="text-[16px] text-justify font-normal flex items-center gap-3 ">
              {" "}
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15Z"
                  fill="#00A651"
                />
                <path
                  d="M11 3L5.75 8.4L4 6.6L2.25 8.4L5.75 12L12.75 4.8L11 3Z"
                  fill="white"
                />
              </svg>
              Professional staffs
            </p>

            <div>
              <div className="flex mt-8">
                <h1 className="border-[1px] px-6 py-3 rounded-[10px] border-[#ee9621]  font-bold">
                  Sign in
                </h1>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex">
            <img src={left} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chooseus;

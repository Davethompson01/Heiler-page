import React from "react";
import choose from "../../assets/chooseus.png";

const Chooseus = () => {
  return (
    <>
      <div className="bg-[#f5fffa]  py-10 px-4 lg:px-10 shadow-lg w-full text-center ">
        <h1 className="text-[#00a651] text-[20px] font-[700]">Why Choose Us</h1>
        <h1 className="text-[32px] font-[700]  text-[#00a651] mb-8">
          Why You Should Choose?{" "}
        </h1>
        <div className="grid gap-4">
          <div>
            <img src={choose} alt="" />
          </div>
          <div>
            <p className="text-[16px] font-bold flex items-center gap-3 ">
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
            <p>
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
              Flexibility in treatment
            </p>
            <p>
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
              Diagnostic with technology{" "}
            </p>
            <p>
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
            <p>
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

            <button className="mt-8 border-[1px] border-[#00a651] font-bold px-8 py-2 bg-white text-[#00a651] rounded-xl">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chooseus;

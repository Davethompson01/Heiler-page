import React from "react";
import blog from "../../assets/blog.png";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";

const Blog = () => {
  const maps = [
    {
      img: blog1,
      h1: "These Tests Could Save Your Life When Test For Diseases",
      description:
        "When it comes to diseases, information about yourself can save your life",
      readmore: "Read ",
    },
    {
      img: blog2,
      h1: "These Tests Could Save Your Life When Test For Diseases",
      description:
        "When it comes to diseases, information about yourself can save your life",
      readmore: "Read ",
    },
    {
      img: blog2,
      h1: "These Tests Could Save Your Life When Test For Diseases",
      description:
        "When it comes to diseases, information about yourself can save your life",
      readmore: "Read ",
    },
  ];
  return (
    <>
      <div className="  bg-[#aecac2] px-2 lg:px-10 shadow-lg py-10">
       <div className="text-white gap-2  grid place-content-center mb-9 text-center font-bold">
       <h1 className="text-[25px]">Blog & News</h1>
       <p className="text-[16px] font-normal">Our lastest News  Health Articles</p>
       </div>
        <div className="grid place-items-center gap-7  mdpro:flex  md:justify-around md:items-center">
          <div className="shadow-lg  max-w-[400px] bg-white rounded-xl basis-[40%] sm:grid place-content-center p-4">
            <div>
              <img src={blog} alt="" className="rounded-lg" />
            </div>
            <div className="py-4 grid place-content-center gap-3">
              <h1 className="text-[#00A651] flex  justify-between font-semibold items-center">
                <div className="bg-[#e3f5ec] px-5 py-2 rounded-[10px]">
                  Cardiology
                </div>
                <span className="text-[#003B1D] flex gap-2 items-center">
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 6.1875C2.83424 6.1875 2.67527 6.25335 2.55806 6.37056C2.44085 6.48777 2.375 6.64674 2.375 6.8125V7.4375C2.375 7.60326 2.44085 7.76223 2.55806 7.87944C2.67527 7.99665 2.83424 8.0625 3 8.0625H3.625C3.79076 8.0625 3.94973 7.99665 4.06694 7.87944C4.18415 7.76223 4.25 7.60326 4.25 7.4375V6.8125C4.25 6.64674 4.18415 6.48777 4.06694 6.37056C3.94973 6.25335 3.79076 6.1875 3.625 6.1875H3ZM3 6.8125V7.4375H3.625V6.8125H3ZM4.875 6.8125C4.875 6.64674 4.94085 6.48777 5.05806 6.37056C5.17527 6.25335 5.33424 6.1875 5.5 6.1875H6.125C6.29076 6.1875 6.44973 6.25335 6.56694 6.37056C6.68415 6.48777 6.75 6.64674 6.75 6.8125V7.4375C6.75 7.60326 6.68415 7.76223 6.56694 7.87944C6.44973 7.99665 6.29076 8.0625 6.125 8.0625H5.5C5.33424 8.0625 5.17527 7.99665 5.05806 7.87944C4.94085 7.76223 4.875 7.60326 4.875 7.4375V6.8125ZM5.5 6.8125H6.125V7.4375H5.5V6.8125ZM8 6.1875C7.83424 6.1875 7.67527 6.25335 7.55806 6.37056C7.44085 6.48777 7.375 6.64674 7.375 6.8125V7.4375C7.375 7.60326 7.44085 7.76223 7.55806 7.87944C7.67527 7.99665 7.83424 8.0625 8 8.0625H8.625C8.79076 8.0625 8.94973 7.99665 9.06694 7.87944C9.18415 7.76223 9.25 7.60326 9.25 7.4375V6.8125C9.25 6.64674 9.18415 6.48777 9.06694 6.37056C8.94973 6.25335 8.79076 6.1875 8.625 6.1875H8ZM8 6.8125V7.4375H8.625V6.8125H8ZM2.375 9.3125C2.375 9.14674 2.44085 8.98777 2.55806 8.87056C2.67527 8.75335 2.83424 8.6875 3 8.6875H3.625C3.79076 8.6875 3.94973 8.75335 4.06694 8.87056C4.18415 8.98777 4.25 9.14674 4.25 9.3125V9.9375C4.25 10.1033 4.18415 10.2622 4.06694 10.3794C3.94973 10.4967 3.79076 10.5625 3.625 10.5625H3C2.83424 10.5625 2.67527 10.4967 2.55806 10.3794C2.44085 10.2622 2.375 10.1033 2.375 9.9375V9.3125ZM3 9.9375V9.3125H3.625V9.9375H3ZM5.5 8.6875C5.33424 8.6875 5.17527 8.75335 5.05806 8.87056C4.94085 8.98777 4.875 9.14674 4.875 9.3125V9.9375C4.875 10.1033 4.94085 10.2622 5.05806 10.3794C5.17527 10.4967 5.33424 10.5625 5.5 10.5625H6.125C6.29076 10.5625 6.44973 10.4967 6.56694 10.3794C6.68415 10.2622 6.75 10.1033 6.75 9.9375V9.3125C6.75 9.14674 6.68415 8.98777 6.56694 8.87056C6.44973 8.75335 6.29076 8.6875 6.125 8.6875H5.5ZM6.125 9.3125H5.5V9.9375H6.125V9.3125ZM7.375 9.3125C7.375 9.14674 7.44085 8.98777 7.55806 8.87056C7.67527 8.75335 7.83424 8.6875 8 8.6875H8.625C8.79076 8.6875 8.94973 8.75335 9.06694 8.87056C9.18415 8.98777 9.25 9.14674 9.25 9.3125V9.9375C9.25 10.1033 9.18415 10.2622 9.06694 10.3794C8.94973 10.4967 8.79076 10.5625 8.625 10.5625H8C7.83424 10.5625 7.67527 10.4967 7.55806 10.3794C7.44085 10.2622 7.375 10.1033 7.375 9.9375V9.3125ZM8 9.9375V9.3125H8.625V9.9375H8Z"
                      fill="#003B1D"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.3125 0.875C3.22962 0.875 3.15013 0.907924 3.09153 0.966529C3.03292 1.02513 3 1.10462 3 1.1875V2.125H1.75C1.41848 2.125 1.10054 2.2567 0.866116 2.49112C0.631696 2.72554 0.5 3.04348 0.5 3.375V10.875C0.5 11.2065 0.631696 11.5245 0.866116 11.7589C1.10054 11.9933 1.41848 12.125 1.75 12.125H9.875C10.2065 12.125 10.5245 11.9933 10.7589 11.7589C10.9933 11.5245 11.125 11.2065 11.125 10.875V3.375C11.125 3.04348 10.9933 2.72554 10.7589 2.49112C10.5245 2.2567 10.2065 2.125 9.875 2.125H9.25V3.0625C9.25 3.14538 9.21708 3.22487 9.15847 3.28347C9.09987 3.34208 9.02038 3.375 8.9375 3.375C8.85462 3.375 8.77513 3.34208 8.71653 3.28347C8.65792 3.22487 8.625 3.14538 8.625 3.0625V1.1875C8.625 1.10462 8.59208 1.02513 8.53347 0.966529C8.47487 0.907924 8.39538 0.875 8.3125 0.875C8.22962 0.875 8.15013 0.907924 8.09153 0.966529C8.03292 1.02513 8 1.10462 8 1.1875V2.125H4.25V3.0625C4.25 3.14538 4.21708 3.22487 4.15847 3.28347C4.09987 3.34208 4.02038 3.375 3.9375 3.375C3.85462 3.375 3.77513 3.34208 3.71653 3.28347C3.65792 3.22487 3.625 3.14538 3.625 3.0625V1.1875C3.625 1.10462 3.59208 1.02513 3.53347 0.966529C3.47487 0.907924 3.39538 0.875 3.3125 0.875ZM1.125 10.875V5.5625H10.5V10.875C10.5 11.0408 10.4342 11.1997 10.3169 11.3169C10.1997 11.4342 10.0408 11.5 9.875 11.5H1.75C1.58424 11.5 1.42527 11.4342 1.30806 11.3169C1.19085 11.1997 1.125 11.0408 1.125 10.875Z"
                      fill="#003B1D"
                    />
                  </svg>
                  24 May, 2024
                </span>
              </h1>
              <h1 className="text-[#003B1D] text-[24px] font-bold">
                How to choose a Heart Failure Treatment Program
              </h1>
              <p className="text-[#003B1D] font-semibold ">
                Choosing the best heart failure program can be difficult, here
                we share three tips to choosing the best heart failure
                program...
              </p>
              <div>
                <button className="mt-8   font-bold  py-2 bg-white text-[#f4bd74] rounded-xl">
                  Read more
                </button>
              </div>
            </div>
          </div>
          <div className=" basis-[55%]">
            <div className="grid place-content-center gap-7">
              {maps.map((element, index) => (
                <div
                  key={index}
                  className=" bg-white max-w-[400px] rounded-xl md:flex p-4 md:min-w-[500px]"
                >
                  <div>
                    <img
                      src={element.img}
                      alt=""
                      className="rounded-xl w-full  sm:h-[100%] sm:w-[100%]"
                    />
                  </div>
                  <div className="p-3 w-full">
                    <h1 className="text-[#003B1D] text-[20px] font-bold ">
                      {element.h1}
                    </h1>
                    <p className="text-[#003B1D]  text-[16px] font-normal ">
                      {element.description}
                    </p>
                    <div className="">
                      <button className="mt-2 text-right   font-bold  bg-white w-full text-[#ee9621]">
                        {element.readmore}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="w-full text-center py-2 rounded-md bg-[#ee9621]">
                <h1>See more</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

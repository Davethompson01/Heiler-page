import React from "react";

const Happycustomers = () => {
  const maps = [
    { h1: "10M+", path: "Happy Customers" },
    { h1: "1000+", path: "Patients Capacity" },
    { h1: "150+", path: "Expert Doctors" },
    { h1: "05", path: "Years of Experiences" },
  ];
  return (
    <>
      <div  className="w-full ">
        <div className=" shadow-sm shadow-[rgba(0,166,81,0.1)] sm:h-[100px] lg:px-10 ">
          <div className="grid grid-cols-2 place-content-center gap-4  sm:gap-8 sm:grid-cols-4 ">
            {maps.map((element, index) => (
              <div
                key={index}
                className="lg:text-center text-center text-[#00a651] font-bold"
              >
                <h1 className="text-[32px] font-semibold ">{element.h1}</h1>
                <p className="text-[#003b1d]">{element.path}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Happycustomers;

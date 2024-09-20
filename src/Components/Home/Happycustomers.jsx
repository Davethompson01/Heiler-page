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
      <div className="bg-[#f5fffa] lg:px-10 py-10">
        <div className="grid place-content-center  gap-8 sm:grid-cols-4">
          {maps.map((element, index) => (
            <div
              key={index}
              className="lg:text-justify text-center text-[#00a651] font-semibold"
            >
              <h1 className="text-[25px] font-semibold ">{element.h1}</h1>
              <p>{element.path}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Happycustomers;

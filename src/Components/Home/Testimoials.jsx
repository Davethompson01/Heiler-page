import React from "react";
import test1 from "../../assets/test1.png";
import test2 from "../../assets/test2.png";
import test3 from "../../assets/test3.png";
import test4 from "../../assets/test4.png";
import stars from "../../assets/stars.svg";

const Testimoials = () => {
  const maps = [
    {
      img: test1,
      h1: "Brain Louis",
      svg: stars,
      p: "“Embrace wellness without breaking the banks! Enjoy a generous discount on each subscription",
    },
    {
      img: test2,
      h1: "Brain Louis",
      svg: stars,
      p: "“Embrace wellness without breaking the banks! Enjoy a generous discount on each subscription",
    },
    {
      img: test3,
      h1: "Brain Louis",
      svg: stars,
      p: "“Embrace wellness without breaking the banks! Enjoy a generous discount on each subscription",
    },
    {
      img: test4,
      h1: "Brain Louis",
      svg: stars,
      p: "“Embrace wellness without breaking the banks! Enjoy a generous discount on each subscription",
    },
  ];
  return (
    <>
      <div className=" bg-[#f5fffa] px-4 py-20  lg:px-10 shadow-lg">
        <h1 className="text-center font-bold text-[25px] text-[#035930B2]">Testimonials</h1>
        <h1 className="mb-5 text-center font-[400] text-[15px] text-[#00a651]">
          What Our Patients Says About Us
        </h1>

        <div className="grid gap-8 four:grid-cols-2 md:grid-cols-4">
          {maps.map((element, index) => (
            <div key={index} className="bg-white relative p-5 mt-4 border-[2px] border-[#d1efdf] rounded-xl">
              <div className="grid place-items-center pt-4 ">
                <div className="absolute top-[-30px]">
                  <img src={element.img} alt="" />
                </div>
                <h1 className="text-[#00a651] text-[20px] font-semibold">
                  {element.h1}
                </h1>
                <div
                  className=" h-[30px] w-[50px]      bg-contain bg-no-repeat  bg-center"
                  style={{
                    backgroundImage: `url(${element.svg})`,
                  }}
                ></div>
              </div>
              <p className="font-semibold">{element.p}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimoials;

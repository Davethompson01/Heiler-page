import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png";

import { Link } from "react-router-dom";

const Nav = () => {
  const maps = [
    { h1: "Home", path: "/" },
    { h1: "Our service", path: "/Service" },
    { h1: "Find Doctor", path: "/finddoctor" },
    { h1: "About", path: "/About" },
    { h1: "Contact", path: "/Contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prevState) => !prevState);
  return (
    <>
      <div className="flex items-center justify-between  bg-[#f5fffa] p-2 lg:px-20 shadow-lg">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex">
          <div
            className="flex flex-col  gap-2 cursor-pointer z-50 md:hidden"
            onClick={toggleMenu}
          >
            <div
              className={`w-8 h-1 z-20 bg-black transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2 bg-white" : ""
              }`}
            ></div>
            <div
              className={`w-8 h-1 z-20 bg-black transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`w-8 h-1 z-20 bg-black transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2 bg-white" : ""
              }`}
            ></div>
            <div
              className={`absolute top-0 left-0    transition-transform duration-300 transform ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
            >
              <ul
                className={` p-4 bg-black/80 flex flex-col  items-center   text-white font-[600] text-2xl w-[100vw] h-[100vh] transition-transform duration-300 transform ${
                  isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <div className="w-full ">
                  <img src={logo} alt="" />
                </div>
                {maps.map((element, index) => (
                  <Link to={element.path} key={index} className="py-4">
                    {element.h1}
                  </Link>
                ))}
                <div className="grid gap-3 text-center">
                  <h1 className="text-[#ee9621]">Sign in</h1>
                  <h1 className="border-[1px] border-[#00a651] px-14 py-2 bg-white text-[#00a651] rounded-xl">
                    Sign up
                  </h1>
                </div>
              </ul>
            </div>
          </div>
          <div className="hidden md:flex">
            <ul className="p-4 flex gap-6">
              {maps.map((element, index) => (
                <Link
                  to={element.path}
                  key={index}
                  className="py-4 text-[#00a651] font-semibold"
                >
                  {element.h1}
                </Link>
              ))}
              <div className="flex justify-center items-center gap-3 text-center">
                <h1 className="text-[#ee9621]  font-bold">Sign in</h1>
                <h1 className="border-[1px] border-[#00a651] font-bold px-8 py-2 bg-white text-[#00a651] rounded-xl">
                  Sign up
                </h1>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;

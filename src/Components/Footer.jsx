import React from "react";
import logo from "./../assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className="grid place-items-center gap-2 py-6">
        <h1 className="text-[23px] font-medium">
          ️©️2024. All Rights Reserved
        </h1>
        <div>
          <img src={logo} alt="" />
        </div>
        <p className="text-[17px] text-center text-[#9e9e9e]">
          Developed by Fireswitch Technologies LTD
        </p>
      </div>
    </>
  );
};

export default Footer;

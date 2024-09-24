import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className="grid place-items-center gap-2 py-6">
        <h1 className="text-[23px]">️©️2024. All Rights Reserved</h1>
        <div>
          <img src={logo} alt="" />
        </div>
        <p className="text-[#9e9e9e]">Developed by Fireswitch Technologies</p>
      </div>
    </>
  );
};

export default Footer;

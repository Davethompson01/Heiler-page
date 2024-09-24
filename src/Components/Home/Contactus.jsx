import React from "react";
import contact from "../../assets/contact.png";
// import location from "../../assets/location.svg";
// import email from "../../assets/location.svg";
// import call from "../../assets/call.svg";


const Contactus = () => {
  return (
    <>
      <div>
        <div
          className=" h-[100vh] w-[100%] bg-cover bg-no-repeat  bg-center"
          style={{
            backgroundImage: `url(${contact})`,
          }}
        ></div>
        {/* <h1 className="text-[35px]">Contact Us</h1>
        <p>
          Heiler is here to provide the right medical solution according to your
          needs.
        </p> */}
      </div>
      <div>
        <div>
            <h1>Get in touch</h1>
            <p>We are one email away from you</p>
            <div>
                <div>

                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;

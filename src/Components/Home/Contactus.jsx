import React from "react";
import contact from "../../assets/contact.png";
import youtube from "../../assets/you1.png";
import you2 from "../../assets/you2.png";
import you3 from "../../assets/you3.png";
import logo from "../../assets/logo.png";
import you4 from "../../assets/you4.png";

const Contactus = () => {
  return (
    <>
      <div className="">
        <div
          className=" h-[80vh] px-4 relative w-[100%] pb-32 bg-cover bg-no-repeat grid  bg-center "
          style={{
            backgroundImage: `url(${contact})`,
          }}
        >
          <div className="bg-black  absolute top-0 w-full opacity-70 h-[80vh]">
            {" "}
          </div>
          <div className="z-40  absolute max-w-[349px] bottom-[120px] left-4 lg:left-[80px]">
            <h1 className="text-[35px] text-white font-[700]">Contact Us</h1>
            <p className="font-[400] text-[20px] text-left text-white">
              Heiler is here to provide the right medical solution according to
              your needs.
            </p>
          </div>
        </div>

        <div className="relative w-full px-5">
          <div className="absolute w-full sm:w-auto right-0 sm:top-[-100px] left-0  sm:flex justify-center  items-center">
            <div className="absolute   sm:rounded-none sm:static top-[-100px] sm:basis-[45%]  left-[5%] sm:right-0  sm:left-0 right-[5%]">
              <div className="  h-[600px]   sm:rounded-e-sm rounded-xl py-6 px-12 bg-[#f2fbf6] ">
                <div className="">
                  <div className="pb-12">
                    <h1 className="text-[25px] font-medium">Get in touch</h1>
                    <p className="text-[#003b1d]">
                      We are one email away from you
                    </p>
                  </div>
                  <div>
                    <div className="grid gap-4">
                      <p className="flex gap-3 items-center">
                        <svg
                          width="56"
                          height="56"
                          viewBox="0 0 56 56"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="56"
                            height="56"
                            rx="28"
                            fill="#00A651"
                            fill-opacity="0.87"
                          />
                          <path
                            d="M28 29.12C29.8557 29.12 31.36 27.6157 31.36 25.76C31.36 23.9043 29.8557 22.4 28 22.4C26.1444 22.4 24.64 23.9043 24.64 25.76C24.64 27.6157 26.1444 29.12 28 29.12Z"
                            stroke="white"
                            stroke-width="2.24"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M28 16.8C25.6237 16.8 23.3447 17.744 21.6644 19.4243C19.984 21.1046 19.04 23.3836 19.04 25.76C19.04 27.879 19.4903 29.2656 20.72 30.8L28 39.2L35.28 30.8C36.5098 29.2656 36.96 27.879 36.96 25.76C36.96 23.3836 36.016 21.1046 34.3357 19.4243C32.6554 17.744 30.3764 16.8 28 16.8Z"
                            stroke="white"
                            stroke-width="2.24"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>{" "}
                        <div>
                          <h1 className="text-[25px] font-medium">
                            Head office
                          </h1>
                          <p className="text-[#003b1d] text-[15px]">
                            2b Abramlincon Close, Lekki, Lagos.
                          </p>
                        </div>
                      </p>
                      <p className="flex gap-3 items-center">
                        <svg
                          width="56"
                          height="57"
                          viewBox="0 0 56 57"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="0.5"
                            width="56"
                            height="56"
                            rx="28"
                            fill="#00A651"
                            fill-opacity="0.87"
                          />
                          <path
                            d="M42 20.1C42 18.56 40.74 17.3 39.2 17.3H16.8C15.26 17.3 14 18.56 14 20.1V36.9C14 38.44 15.26 39.7 16.8 39.7H39.2C40.74 39.7 42 38.44 42 36.9V20.1ZM39.2 20.1L28 27.1L16.8 20.1H39.2ZM39.2 36.9H16.8V22.9L28 29.9L39.2 22.9V36.9Z"
                            fill="white"
                          />
                        </svg>
                        <div>
                          <h1 className="text-[25px] font-medium">Email us</h1>
                          <p className="text-[#003b1d]">Example@gmail.com</p>
                          <p className="text-[#003b1d]">Example@gmail.com</p>
                        </div>
                      </p>
                      <p className="flex gap-3 items-center">
                        <svg
                          width="56"
                          height="57"
                          viewBox="0 0 56 57"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="0.5"
                            width="56"
                            height="56"
                            rx="28"
                            fill="#00A651"
                            fill-opacity="0.87"
                          />
                          <path
                            d="M22.6804 17.5891C24.0266 18.5421 25.0455 19.881 25.9131 21.1113L26.5931 22.0819C26.8043 22.3815 26.9009 22.7433 26.8663 23.1048C26.8316 23.4663 26.6679 23.8046 26.4034 24.0613L24.9581 25.4644L25.1105 25.7789C25.4836 26.5125 26.1274 27.569 27.0962 28.5106C27.7663 29.149 28.5203 29.6987 29.3388 30.1454L29.7299 30.3493L30.0785 30.5169L30.2341 30.5862L31.6783 29.1831C31.9435 28.9254 32.2936 28.7665 32.6674 28.7342C33.0411 28.7018 33.4146 28.7981 33.7226 29.0062L34.8034 29.7336C36.0312 30.5717 37.3135 31.5268 38.31 32.7664C38.4823 32.9815 38.5919 33.2376 38.6273 33.5079C38.6628 33.7782 38.6228 34.0528 38.5115 34.3029C37.6194 36.3237 35.3619 38.0444 33.0138 37.9596L32.6941 37.943L32.4457 37.9223L32.1707 37.8913L31.8712 37.852L31.5461 37.7992L31.1987 37.733L30.8299 37.6533L30.4398 37.5561L30.0294 37.4422L29.601 37.3077C27.6334 36.66 25.1361 35.3873 22.5738 32.8998C20.0115 30.4124 18.7016 27.9891 18.0343 26.079L17.8958 25.663L17.7785 25.2647L17.6784 24.886L17.5952 24.5279C17.5712 24.4158 17.5488 24.3034 17.5281 24.1906L17.4748 23.875L17.4321 23.5843L17.4012 23.3173L17.3799 23.0762L17.3629 22.7658C17.2765 20.4936 19.0682 18.2865 21.1402 17.4246C21.3896 17.3201 21.6627 17.2803 21.9327 17.3091C22.2027 17.338 22.4604 17.4345 22.6804 17.5891ZM21.6923 19.4599C20.5498 20.0393 19.4434 21.3638 19.4935 22.6893L19.5148 23.0286L19.5383 23.2408L19.5692 23.4787L19.6118 23.7405L19.6662 24.0271L19.7354 24.3355L19.8207 24.6666L19.923 25.0174L20.0445 25.3878C20.0893 25.514 20.1369 25.6434 20.1874 25.7758L20.3515 26.1814L20.5391 26.6025C21.2085 28.0325 22.2999 29.7067 24.0831 31.4367C25.8652 33.1668 27.5897 34.2274 29.0627 34.8772L29.4965 35.0593L29.9143 35.2186C30.0508 35.2683 30.184 35.3145 30.314 35.3573L30.6956 35.4752L31.058 35.5746L31.398 35.6574L31.7156 35.7246L32.0109 35.7774L32.2816 35.8188L32.5267 35.8498L32.7442 35.8705L33.0938 35.8912C34.441 35.9398 35.8159 34.872 36.4107 33.7773C35.6518 32.9133 34.7096 32.2045 33.6704 31.4905L32.8731 30.9515L32.6706 31.1574L32.2379 31.6157L32.0087 31.8496C31.3841 32.4673 30.6551 32.9919 29.7811 32.6494L29.5402 32.5511L29.246 32.4228L29.0819 32.3473L28.7216 32.1724L28.3262 31.9655C27.3265 31.4234 26.4062 30.7535 25.5902 29.9737C24.7868 29.1814 24.0968 28.2881 23.5384 27.3175L23.3252 26.9347L23.144 26.5839L22.9351 26.139L22.8328 25.9031C22.5013 25.1074 22.9575 24.4359 23.5405 23.8543L23.7793 23.6267L24.373 23.0959L24.5861 22.8993L24.082 22.1822C23.3327 21.1268 22.6005 20.1749 21.6913 19.4589L21.6923 19.4599ZM31.3522 21.3089L31.4758 21.3224C32.2516 21.4552 32.9642 21.8231 33.5115 22.3733C34.0587 22.9235 34.4124 23.6278 34.522 24.3851C34.5611 24.6471 34.4952 24.9137 34.338 25.1299C34.1808 25.3462 33.9442 25.4958 33.6769 25.5479C33.4096 25.6 33.1318 25.5506 32.9008 25.41C32.6698 25.2693 32.5032 25.0481 32.4351 24.7918L32.4105 24.6728C32.3677 24.3759 32.2371 24.0975 32.0348 23.8711C31.8324 23.6447 31.5668 23.48 31.2701 23.397L31.1049 23.3608C30.8372 23.3147 30.5978 23.1712 30.4356 22.9594C30.2734 22.7477 30.2007 22.4838 30.2323 22.2217C30.2638 21.9596 30.3974 21.7192 30.6055 21.5495C30.8137 21.3798 31.0808 21.2938 31.3522 21.3089ZM31.3596 18.1634C33.0557 18.1634 34.6823 18.8175 35.8816 19.9818C37.081 21.1461 37.7547 22.7252 37.7547 24.3717C37.7544 24.6354 37.6504 24.8891 37.4639 25.0809C37.2774 25.2726 37.0225 25.388 36.7513 25.4035C36.4801 25.4189 36.2131 25.3333 36.0048 25.164C35.7965 24.9947 35.6626 24.7546 35.6305 24.4928L35.623 24.3717C35.6229 23.321 35.2112 22.3097 34.4713 21.5428C33.7315 20.776 32.7189 20.311 31.6389 20.2421L31.3596 20.2328C31.0769 20.2328 30.8058 20.1238 30.6059 19.9298C30.4061 19.7357 30.2938 19.4725 30.2938 19.1981C30.2938 18.9237 30.4061 18.6605 30.6059 18.4665C30.8058 18.2724 31.0769 18.1634 31.3596 18.1634Z"
                            fill="white"
                          />
                        </svg>{" "}
                        <div>
                          <h1 className="text-[25px] font-medium">Call us</h1>
                          <p className="text-[#003b1d]">
                            Phone: +2347065321456
                          </p>
                          <p className="text-[#003b1d]">
                            Whatsapp: +2347036351238
                          </p>
                        </div>
                      </p>
                    </div>
                    <div className="mt-8 grid gap-3 ">
                      <h1 className="text-[18px] text-[#618874] font-semibold">
                        Follow our social media
                      </h1>
                      <div className="flex gap-3">
                        <div>
                          <img src={youtube} alt="" />
                        </div>
                        <div>
                          <img src={you2} alt="" />
                        </div>
                        <div>
                          <img src={you3} alt="" />
                        </div>
                        <div>
                          <img src={you4} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="  absolute rounded-xl sm:rounded-s-sm py-4 px-12 grid place-content-center top-[520px]  sm:static bg-white sm:basis-[45%] h-[600px]  left-[5%] right-[5%] ">
              <h1 className="text-[30px] font-[700] text-[#003b1d]">
                Send us a message
              </h1>
              <form action="" method="post">
                <label className="font-[700]  text-[#003b1d]" htmlFor="">
                  Names
                </label>{" "}
                <br />
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full mb-6 p-2 rounded bg-[#edfff6]"
                />
                <div className="flex gap-8 w-full ">
                  <div className="w-full">
                    <label className="font-[700]  text-[#003b1d]" htmlFor="">
                      Phone
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      placeholder="Phone"
                      className="w-full p-2 rounded bg-[#edfff6]"
                    />
                  </div>
                  <div className="w-full">
                    <label className="font-[700]  text-[#003b1d]" htmlFor="">
                      Email
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      placeholder="Email"
                      className="w-full p-2 rounded bg-[#edfff6]"
                    />
                  </div>
                </div>
                <label className="font-[700]  text-[#003b1d]" htmlFor="">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full mb-6 p-2 rounded bg-[#edfff6]"
                  placeholder="Subject"
                />
                <label className="font-[700]  text-[#003b1d]" htmlFor="">
                  Message
                </label>
                <textarea
                  name=""
                  className="w-full mb-6 p-2 rounded bg-[#edfff6] h-[130px]"
                  id=""
                  placeholder="Type your message here"
                ></textarea>
                <h1 className="w-full bg-[#00a651] h-[50px] font-[700] grid place-content-center rounded text-white">
                  Send
                </h1>
              </form>
            </div>
          </div>
        </div>
        <div className="relative ">
          <div className="grid place-items-center gap-2 py-6 absolute top-[1100px] sm:top-[500px] right-[5%] left-[5%]">
            <h1 className="text-[23px] font-medium">
              ️©️2024. All Rights Reserved
            </h1>
            <div>
              <img src={logo} alt="" />
            </div>
            <p className="text-[25px] text-center text-[#9e9e9e]">
              Developed by Fireswitch Technologies LTD
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;

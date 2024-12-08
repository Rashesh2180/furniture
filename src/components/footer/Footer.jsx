import React from "react";

const Footer = () => {
  return (
    <div className=" bg-[#03344F]">
      <div className="custom-container pt-12 pb-[89px] flex gap-6 max-md:flex-col">
        <div className=" max-w-[400px]">
          <h1 className=" text-white text-2xl font-bold  leading-[29.26px]">
            Beauty Care
          </h1>
          <p className=" mt-[34px] leading-[35px] text-base  text-[#FFFFFF]">
            Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <h1 className="text-white text-2xl font-bold  leading-[29.26px] mt-[21px]">
            Follow Us
          </h1>
        </div>
        <div className=" mt-3">
          <h1 className=" text-white text-2xl font-bold  leading-[29.26px]">
            Instagram Shop
          </h1>
          <div className=" mt-6 flex  gap-[21px]">
            <div className="max-w-[175px] max-h-[185px]">
              {" "}
              <img
                src="/assets/images/footer/IG-1.jpg"
                className=" h-full w-full object-cover"
                alt=""
              />
            </div>
            <div className="max-w-[175px] max-h-[185px]">
              <img
                src="/assets/images/footer/IG-2.jpg"
                className="  h-full w-full object-cover"
                alt=""
              />
            </div>
            <div className="max-w-[175px] max-h-[185px]">
              <img
                src="/assets/images/footer/IG-3.jpg"
                className="  h-full w-full object-cover"
                alt=""
              />
            </div>
            <div className="max-w-[175px] max-h-[185px]">
              <img
                src="/assets/images/footer/IG-4 (1).jpg"
                className="  h-full w-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

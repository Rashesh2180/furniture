import React from "react";

const Works = () => {
  return (
    <section className=" py-[60px]   ">
      <div className="custom-container ">
        <h1 className=" section-title">How It Works</h1>
        <h2 className=" mt-5 section-sub_title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
        <div className=" mt-[50px] max-md:flex-col mx-auto flex xl:gap-10 gap-5 justify-between items-center">
          <div>
            <div className="h-[409px] md:max-w-[381px] w-full rounded-lg  relative ">
              <img
                src="/assets/images/works/works1.png"
                alt=""
                className="  h-full w-full  object-cover rounded-lg "
              />
              <div className=" z-50 absolute -bottom-10 left-1/2 -translate-x-1/2 h-[90px] w-[90px] rounded-full bg-white flex justify-center items-center">
                <div className=" flex justify-center items-center text-2xl font-bold leading-[29.26px]  bg-black h-[60px] w-[60px] rounded-full text-white">
                  1.
                </div>
              </div>
            </div>
            <h1 className=" mt-[75px] leading-[29.26px]  text-2xl font-semibold text-center">
            Purchase Securely
            </h1>
            <p className=" max-w-[381px] text-center text-lg text-text-gray leading-7 mt-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <div className="h-[409px] md:max-w-[381px] w-full  relative   rounded-lg  ">
              <img
                src="/assets/images/works/works2.png"
                alt=""
                className="   h-full w-full object-cover rounded-lg  "
              />
              <div className=" z-50 absolute -bottom-10 left-1/2 -translate-x-1/2 h-[90px] w-[90px] rounded-full bg-white flex justify-center items-center">
                <div className=" flex justify-center items-center text-2xl font-bold leading-[29.26px]  bg-black h-[60px] w-[60px] rounded-full text-white">
                  2.
                </div>
              </div>
            </div>
            <h1 className=" mt-[75px] leading-[29.26px]  text-2xl font-semibold text-center">
            Ships From Warehouse
            </h1>
            <p className=" max-w-[381px] text-center text-lg text-text-gray leading-7 mt-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div>
            <div className="h-[409px] md:max-w-[381px] w-full relative   rounded-lg">
              <img
                src="/assets/images/works/works3.png"
                alt=""
                className="   h-full w-full object-cover"
              />
               <div className=" z-50 absolute -bottom-10 left-1/2 -translate-x-1/2 h-[90px] w-[90px] rounded-full bg-white flex justify-center items-center">
                <div className=" flex justify-center items-center text-2xl font-bold leading-[29.26px]  bg-black h-[60px] w-[60px] rounded-full text-white">
                    3.

                </div>

              </div>
            </div>
            <h1 className=" mt-[75px] leading-[29.26px]  text-2xl font-semibold text-center">
            Style Your Room
            </h1>
            <p className=" max-w-[381px] text-center text-lg text-text-gray leading-7 mt-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;

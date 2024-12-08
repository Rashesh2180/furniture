import React from "react";
import Button from "../button/Button";

const DualSection = () => {
  return (
    <div className=" bg-custom-bg h-full flex-col justify-center items-center ">
      <div className=" py-[60px] custom-container h-full  ">
        <div className="flex h-full items-center max-md:flex-col  justify-between gap-[64px] relative lg:px-6">
          <div className=" xl:pl-3">
            <h1 className="section-title !text-start ">Beautify Your Space</h1>
            <p className="section-sub_title !text-start  mt-5 !leading-[39px] max-w-[514px]">
              Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <div className=" mt-14">
              <Button text={"Learn More"} />
            </div>
          </div>
          <div className="  h-[400px] md:h-[754px] object-top  w-full relative xl:right-[68px] md:right-10   z-50  max-w-[450px] lg:max-w-[500px] overflow-hidden rounded-tl-[3rem] rounded-tr-lg rounded-bl-lg rounded-br-[3rem]">
            <img
              src="/assets/images/dualsection/beautygirl.png"
              alt=""
              className="  h-full w-full object-cover "
            />
          </div>
          <div className=" absolute max-md:hidden top-1/2 xl:right-6 right-0 rounded-full h-[373px] w-[373px] bg-[#09513B] transform -translate-y-1/2">
            {/* The green circle */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DualSection;

import React from "react";
import Button from "../../button/Button";

const Hero = () => {
  return (
    <div className=" h-[calc(100vh-122px)] custom-bg flex flex-col justify-center items-center">
      <div className="  custom-container flex ">
        <div className=" bg-sky-blue md:ml-auto  sm:pt-[37px] sm:pr-[45px] sm:pl-[39px] p-5 items-start flex flex-col gap-5 sm:pb-[41px]  rounded-[10px]">
          <h1 className=" fs16 tracking-widest">New Arrival</h1>
          <h2 className="leading-[65px] text-[52px] font-bold text-primary">
            Discover Our <br /> New Collection
          </h2>
          <p className=" max-w-[546px] font-medium text-lg leading-[39px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
         <Button text={"BUY Now"}/>
        </div>
      </div>
    </div>
  );
};

export default Hero;

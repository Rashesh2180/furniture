import React from "react";

const InputSection = () => {
  return (
    <div className=" bg-sky-blue py-[60px] mt-[127px]">
      <div className=" max-w-[500px] mx-auto">
        <h1 className="section-title">Join Our Mailing List</h1>
        <p className="section-sub_title mt-[10px] !leading-[39px] ">
          Sign up to receive inspiration, product updates, and special offers
          from our team.
        </p>
        <div className=" mx-2 flex mt-[50px] border border-primary rounded-[3px] overflow-hidden">
          <input
            type="text"
            placeholder="example@gmail.com"
            className=" w-full  border-none outline-none p-6 text-base"
          />
          <button className=" h-full bg-primary border border-[#011C42] px-11 py-[27px] text-center rounded-[3px] text-white text-base font-bold leading-5">
          Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputSection;

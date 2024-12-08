import React from "react";

const Range = () => {
  return (
    <section className=" py-[60px]   border-b border-[#D7D6D6]">
      <div className="custom-container ">
        <h1 className=" section-title">Browse The Range</h1>
        <h2 className=" mt-5 section-sub_title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
        <div className=" mt-[50px] max-md:flex-col mx-auto flex xl:gap-10 gap-5 justify-between items-center">
          <div>
            <div className="h-[480px] md:max-w-[381px] w-full  overflow-hidden  rounded-lg ">
              <img
                src="/assets/images/range/range1.png"
                alt=""
                className="  h-full w-full  object-cover "
              />
            </div>
            <h1 className=" mt-[30px] leading-[29.26px]  text-2xl font-semibold text-center">
              Dining
            </h1>
          </div>
          <div>
            <div className="h-[480px] md:max-w-[381px] w-full   overflow-hidden   rounded-lg">
              <img
                src="/assets/images/range/range2.png"
                alt=""
                className="   h-full w-full object-cover"
              />
            </div>
            <h1 className=" mt-[30px] leading-[29.26px]  text-2xl font-semibold text-center">
              Living
            </h1>
          </div>

          <div>
            <div className="h-[480px] md:max-w-[381px] w-full  overflow-hidden rounded-lg">
              <img
                src="/assets/images/range/range3.png"
                alt=""
                className="   h-full w-full object-cover"
              />
            </div>
            <h1 className=" mt-[30px] leading-[29.26px]  text-2xl font-semibold text-center">
              Bedroom
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Range;

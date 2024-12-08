import React from "react";

const Collection = () => {
  return (
    <section className=" custom-container py-[60px]">
      <h1 className=" section-title">Inspiration Collection</h1>
      <h2 className=" mt-5 section-sub_title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h2>
      <div className=" mt-[88px] max-md:flex-col mx-auto flex xl:gap-10 gap-7 lg:px-7 justify-between items-center">
        <div className="h-[434px] md:max-w-[355px] w-full  overflow-hidden rounded-tl-[4rem] ">
          <img
            src="/assets/images/collection/collection1.png"
            alt=""
            className="  h-full w-full  object-cover "
          />
        </div>
        <div className="h-[434px] md:max-w-[355px] w-full  relative md:bottom-[38px] overflow-hidden  ">
          <img
            src="/assets/images/collection/collection2.png"
            alt=""
            className="   h-full w-full object-cover"
          />
        </div>
        <div className="h-[434px] md:max-w-[355px] w-full  overflow-hidden rounded-br-[4rem]">
          <img
            src="/assets/images/collection/collection3.png"
            alt=""
            className="   h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Collection;

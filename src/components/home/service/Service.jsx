import React from "react";

const data = [
  {
    img: "/assets/svg/service/delivery.svg",
    title: "Free Delivery",
    sub_title: "Lorem ipsum dolor sit amet.",
  },
  {
    img: "/assets/svg/service/help.svg",
    title: "Support 24/7",
    sub_title: "Lorem ipsum dolor sit amet.",
  },
  {
    img: "/assets/svg/service/secure.svg",
    title: "100% Authentic",
    sub_title: "Lorem ipsum dolor sit amet.",
  },
];
const Service = () => {
  return (
    <div className=" bg-custom-bg">
      <div className="custom-container pt-[46px] pb-[49px] max-sm:flex-col max-sm:gap-5 flex justify-between items-center  gap-2 xl:gap-3 ">
        {
            data && (
                data.map(ele=>(
                    <div className=" flex items-center gap-4 xl:gap-[27.08px]">
                        <img src={ele.img} className=" max-w-10 md:max-w-14 xl:max-w-[83.92px] h-[50px]" alt="" />
                        <div >
                            <h1 className=" text-secondary xl:text-2xl text-lg leading-[29.26px] font-semibold" >{ele.title}</h1>
                            <h2 className=" mt-[6px] text-secondary text-sm xl:text-base leading-[19.5px] ">{ele.sub_title}</h2>
                        </div>

                    </div>
                ))
            )
        }

      </div>
    </div>
  );
};

export default Service;

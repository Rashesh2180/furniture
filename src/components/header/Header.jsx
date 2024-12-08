import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const navlist = [
  { list: "home", href: "" },
  { list: "Services", href: "" },
  { list: "Doctors", href: "" },
  { list: "Products", href: "" },
  { list: "Gallery", href: "" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const togglebar = () => {
    setOpen((prev) => !prev);
  };

  // Effect to disable scroll when the menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }

    // Cleanup to reset overflow when component is unmounted or when menu closes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <div className="xl:px-[120px] lg:px-8 sm:px-8 px-5 relative bg-white flex justify-between items-center py-[43px] pb-[38px]">
      <a href="/">
        <img
          src="/assets/images/furniturelogo.png"
          alt=""
          className="w-[167px] object-contain h-[41px]"
        />
      </a>
      <div className="flex gap-[73.07px] max-lg:hidden items-center">
        {navlist &&
          navlist.map((ele) => (
            <a
              className="text-secondary capitalize hover:text-primary font-semibold text-sm"
              href={ele.href}
            >
              {ele.list}
            </a>
          ))}
      </div>
      <button className="lg:hidden" onClick={togglebar}>
        {open ? (
          <IoClose className="text-red-600" />
        ) : (
          <FaBars className="text-primary" />
        )}
      </button>
      {open && (
        <div className="flex flex-col gap-10 items-start absolute top-[120px] py-10 w-56 px-10 h-screen bg-white z-50 right-0">
          {navlist &&
            navlist.map((ele) => (
              <a
                className="text-secondary capitalize hover:text-primary font-semibold text-sm"
                href={ele.href}
              >
                {ele.list}
              </a>
            ))}
        </div>
      )}
    </div>
  );
};

export default Header;

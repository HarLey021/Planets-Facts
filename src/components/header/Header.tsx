import React, { useState } from "react";
import Navigation from "../navigation/Navigation";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <div className="w-full h-[75px] mb-[20px]">
        <div className=" flex px-[24px] py-[16px] items-center  justify-between">
          <h1 className="text-[28px] text-white font-antonio tracking-[-1px]">
            THE PLANETS
          </h1>

          <svg
            className={`${menuOpen ? "opacity-25" : "opacity-100"}`}
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="17"
            viewBox="0 0 24 17"
            fill="none"
          >
            <rect width="24" height="3" fill="white" />
            <rect y="7" width="24" height="3" fill="white" />
            <rect y="14" width="24" height="3" fill="white" />
          </svg>
        </div>
        <div>
          <div className="w-full h-[1px] bg-white opacity-20 "></div>
        </div>
      </div>

      {menuOpen && <Navigation />}
    </>
  );
};

export default Header;

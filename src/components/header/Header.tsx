import React, { useState } from "react";
import Navigation from "../planets/Planets";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(true);

  return (
    <>
      <div className="w-full h-[75px]">
        <div className=" flex px-[24px] py-[16px] items-center  justify-between">
          <h1 className="text-[28px] text-white font-antonio tracking-[-1px]">
            THE PLANETS
          </h1>
          <img
            className={`${menuOpen ? "opacity-25" : "opacity-100"}`}
            src="/icon-hamburger.svg"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          />
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

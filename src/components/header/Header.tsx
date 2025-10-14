import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <>
      <div className="w-full h-[75px]">
        <div className=" flex px-[24px] py-[16px] items-center  justify-between">
          <h1 className="text-[28px] text-white font-antonio tracking-[-1px]">
            THE PLANETS
          </h1>
          <Link to={"/"}>
            <img src="/icon-hamburger.svg" />
          </Link>
        </div>
        <div>
          <div className="w-full h-[1px] bg-white opacity-20 "></div>
        </div>
      </div>
    </>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import navBarData from "../../data/navBarData.json";

const Header: React.FC = () => {
  return (
    <>
      <div className="w-full h-[75px] md:h-[160px] ">
        <div className=" flex flex-col px-[24px] py-[16px] md:pt-[32px] md:px-[50px] md:pb-0 md:items-center">
          <div className="w-full flex items-center  justify-between md:justify-center">
            <h1 className="text-[28px] text-white font-antonio tracking-[-1px] md:mb-[39px]">
              THE PLANETS
            </h1>
            <Link to={"/"}>
              <img src="/icon-hamburger.svg" className="md:hidden" />
            </Link>
          </div>
          <div className="w-full max-w-[1000px] h-[25px] mb-[27px] hidden md:flex md:justify-between">
            {navBarData.map((planet) => (
              <Link key={planet.name} to={`/planets/${planet.name}`}>
                <button className="font-spartan font-bold text-white text-[11px] uppercase tracking-[1px] opacity-50">
                  {planet.name}
                </button>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="w-full h-[1px] bg-white opacity-20 "></div>
        </div>
      </div>
    </>
  );
};

export default Header;

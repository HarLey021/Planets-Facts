import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import navBarData from "../../data/navBarData.json";

const Header: React.FC<ToggleInterface> = ({ showMenu, setShowMenu }) => {
  const { name } = useParams<{ name: string }>();
  const [activePlanet, setActivePlanet] = useState<
    | "mercury"
    | "venus"
    | "earth"
    | "mars"
    | "jupiter"
    | "saturn"
    | "uranus"
    | "neptune"
  >("mercury");

  const color: NavBarInterface | undefined = navBarData.find(
    (planet) => planet.name.toLowerCase() === name?.toLowerCase()
  );

  return (
    <>
      <div className="w-full h-[75px] md:h-[160px] md:mb-[115px] lg:h-[85px] lg:mb-[125px] lg:flex-col">
        <div className=" flex flex-col px-[24px] py-[16px] md:pt-[32px] md:px-[50px] md:pb-0 md:items-center lg:flex-row lg:min-w-[1440px] lg:h-full lg:justify-self-center  lg:justify-between lg:p-0 ">
          <div className="w-full flex items-center  justify-between md:justify-center md:mb-[39px] lg:w-auto lg:mb-0">
            <h1 className="text-[28px] text-white font-antonio tracking-[-1px]  ">
              THE PLANETS
            </h1>

            <img
              onClick={() => {
                setShowMenu(!showMenu);
              }}
              src="/icon-hamburger.svg"
              className="md:hidden"
            />
          </div>
          <div className="w-full max-w-[1000px] h-[25px] mb-[27px] hidden md:flex md:justify-between lg:m-0 lg:w-auto lg:gap-[33px] lg:h-full ">
            {navBarData.map((planet) => (
              <div
                key={planet.color}
                className=" lg:flex lg:flex-col lg:justify-center lg:items-center"
              >
                {activePlanet === planet.name.toLowerCase() && (
                  <div
                    className="md:hidden lg:block w-[60px] h-[4px] absolute top-0"
                    style={{ backgroundColor: color?.color }}
                  ></div>
                )}
                <Link key={planet.name} to={`/planets/${planet.name}`}>
                  <button
                    onClick={() =>
                      setActivePlanet(
                        planet.name.toLowerCase() as typeof activePlanet
                      )
                    }
                    className={`font-spartan font-bold text-white text-[11px] uppercase tracking-[1px] opacity-50 focus:opacity-100 hover:opacity-100 lg:cursor-pointer lg:h-[58px] ${
                      activePlanet === planet.name
                        ? "opacity-100"
                        : "opacity-50"
                    }`}
                  >
                    {planet.name}
                  </button>
                </Link>
              </div>
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

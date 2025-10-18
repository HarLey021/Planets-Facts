import { useState } from "react";
import data from "../data/data.json";
import navBarData from "../data/navBarData.json";
import { useParams } from "react-router-dom";

const Planet: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "overview" | "structure" | "surface"
  >("overview");

  const { name } = useParams<{ name?: string }>();
  const planetName = name?.toLowerCase() || "mercury";

  const planet: PlanetInterface | undefined = data.find(
    (planet) => planet.name.toLowerCase() === planetName
  );

  const color: NavBarInterface | undefined = navBarData.find(
    (planet) => planet.name.toLowerCase() === planetName
  );

  return (
    <>
      <div
        key={planet?.name}
        className="w-full min-h-screen bg-dark bg-[image:var(--bg-stars)] pb-[50px] md:px-[40px] "
      >
        <div className="md:w-full md:max-w-[1000px] md:justify-self-center lg:max-w-[1110px]">
          <div className="w-full  text-white text-[9px] font-spartan tracking-[2px] font-bold mb-[100px] md:hidden ">
            <div className="flex justify-between px-[24px] pt-[20px]">
              <div className="h-[30px] flex flex-col">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`${
                    activeTab === "overview" ? "opacity-100" : "opacity-50"
                  }`}
                >
                  OVERVIEW
                </button>
                {activeTab === "overview" && (
                  <div
                    className="w-[80px] h-[4px] mt-auto"
                    style={{ backgroundColor: color?.color }}
                  ></div>
                )}
              </div>

              <div className="h-[30px] flex flex-col">
                <button
                  onClick={() => setActiveTab("structure")}
                  className={`${
                    activeTab === "structure" ? "opacity-100" : "opacity-50"
                  }`}
                >
                  STRUCTURE
                </button>
                {activeTab === "structure" && (
                  <div
                    className="w-[80px] h-[4px] bg-[#419EBB] mt-auto"
                    style={{ backgroundColor: color?.color }}
                  ></div>
                )}
              </div>

              <div className="h-[30px] flex flex-col">
                <button
                  onClick={() => setActiveTab("surface")}
                  className={`${
                    activeTab === "surface" ? "opacity-100" : "opacity-50"
                  }`}
                >
                  SURFACE
                </button>
                {activeTab === "surface" && (
                  <div
                    className="w-[80px] h-[4px] bg-[#419EBB] mt-auto"
                    style={{ backgroundColor: color?.color }}
                  ></div>
                )}
              </div>
            </div>
            <div className="w-full h-[1px] bg-white opacity-20 "></div>
          </div>

          <div className="w-full px-[24px] md:px-0 lg:flex-col">
            <div className="lg:flex lg:justify-between lg:mb-[87px]">
              <div className=" flex items-center justify-center  mb-[100px] lg:m-0  lg:ml-[90px]">
                <div className="relative w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[450px] lg:h-[450px]">
                  {activeTab === "overview" && (
                    <img
                      className="w-full h-full"
                      src={planet?.images.planet}
                      alt="planet"
                    />
                  )}
                  {activeTab === "structure" && (
                    <img
                      className="w-full h-full"
                      src={planet?.images.internal}
                      alt="internal structure"
                    />
                  )}
                  {activeTab === "surface" && (
                    <>
                      <img
                        className="w-full h-full"
                        src={planet?.images.planet}
                        alt="planet"
                      />
                      <img
                        className="w-[70px] h-[85px] absolute top-[100px] left-[40px] md:w-[100px] md:h-[115px] md:top-[190px] md:left-[75px] lg:w-[170px] lg:h-[200px] lg:top-[310px] lg:left-[140px]"
                        src={planet?.images.geology}
                        alt="geology"
                      />
                    </>
                  )}
                </div>
              </div>

              <div className="md:flex md:items-center md:justify-between lg:flex-col lg:w-[350px] lg:h-[540px]">
                <div className="md:flex md:flex-col md:w-[340px]">
                  <h1 className="text-[40px] text-white font-antonio font-normal uppercase justify-self-center mb-[16px] md:text-[48px] md:mb-[24px] lg:text-[80px]">
                    {planet?.name}
                  </h1>
                  <p className="max-w-[400px] text-white text-[11px] font-spartan font-normal text-center leading-loose opacity-50 mb-[32px] justify-self-center md:text-left lg:text-[14px] lg:w-full lg:h-[150px] lg:mb-[24px]">
                    {activeTab === "overview" && planet?.overview.content}
                    {activeTab === "structure" && planet?.structure.content}
                    {activeTab === "surface" && planet?.geology.content}
                  </p>

                  <div className="text-white text-[12px] font-spartan font-normal justify-self-center opacity-50 flex items-center mb-[28px] lg:text-[14px] lg:m-0">
                    Source :{" "}
                    <a
                      href={planet?.overview.source}
                      className="font-bold underline mr-[4px]"
                    >
                      Wikipedia
                    </a>
                    <img src="/icon-source.svg" className="w-[12px] h-[12px]" />
                  </div>
                </div>

                <div className="hidden text-white text-[9px] tracking-[2px] font-bold w-[281px] h-[172px] md:block lg:w-full lg:text-[12px]">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`w-full h-[40px] outline outline-white/20 mb-[16px] px-[20px] py-[7px] flex items-center lg:h-[48px] lg:cursor-pointer lg:hover:bg-[rgba(216,216,216,0.2)] ${
                      activeTab === "overview"
                        ? "opacity-100"
                        : "opacity-50 md:opacity-100"
                    }`}
                    style={{
                      backgroundColor:
                        activeTab === "overview" ? color?.mdColor : "",
                    }}
                  >
                    <span className="opacity-50 mr-[17px]">01</span> OVERVIEW
                  </button>

                  <button
                    onClick={() => setActiveTab("structure")}
                    className={`w-full h-[40px] outline outline-white/20 mb-[16px] px-[20px] py-[7px] flex items-center lg:h-[48px] lg:cursor-pointer lg:hover:bg-[rgba(216,216,216,0.2)] ${
                      activeTab === "structure"
                        ? "opacity-100"
                        : "opacity-50 md:opacity-100"
                    }`}
                    style={{
                      backgroundColor:
                        activeTab === "structure" ? color?.mdColor : "",
                    }}
                  >
                    <span className="opacity-50 mr-[17px]">02</span> STRUCTURE
                  </button>

                  <button
                    onClick={() => setActiveTab("surface")}
                    className={`w-full h-[40px] outline outline-white/20 mb-[16px] px-[20px] py-[7px] flex items-center lg:h-[48px] lg:cursor-pointer lg:hover:bg-[rgba(216,216,216,0.2)] ${
                      activeTab === "surface"
                        ? "opacity-100"
                        : "opacity-50 md:opacity-100"
                    }`}
                    style={{
                      backgroundColor:
                        activeTab === "surface" ? color?.mdColor : "",
                    }}
                  >
                    <span className="opacity-50 mr-[17px]">03</span> SURFACE
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-y-[8px] md:flex-row md:gap-[11px] lg:gap-[30px]">
              <div className="w-full h-[48px] outline outline-white/20 px-[24px] py-[11px] flex justify-between items-center md:w-[164px] md:h-[88px] md:flex-col md:p-[16px] md:items-start md:flex-1 lg:w-[255px] lg:h-[128px] lg:p-[22px]">
                <h5 className="text-[8px] text-white font-spartan font-bold tracking-[0.7px] opacity-50 lg:text-[11px]">
                  ROTATION TIME
                </h5>
                <p className="font-antonio text-white text-[20px] font-normal tracking-[-0.7px] uppercase md:text-[24px] lg:text-[40px]">
                  {planet?.rotation}
                </p>
              </div>

              <div className="w-full h-[48px] outline outline-white/20 px-[24px] py-[11px] flex justify-between items-center md:w-[164px] md:h-[88px] md:flex-col md:p-[16px] md:items-start md:flex-1 lg:w-[255px] lg:h-[128px] lg:p-[22px]">
                <h5 className="text-[8px] text-white font-spartan font-bold tracking-[0.7px] opacity-50 lg:text-[11px]">
                  REVOLUTION TIME
                </h5>
                <p className="font-antonio text-white text-[20px] font-normal tracking-[-0.7px] uppercase md:text-[24px] lg:text-[40px]">
                  {planet?.revolution}
                </p>
              </div>

              <div className="w-full h-[48px] outline outline-white/20 px-[24px] py-[11px] flex justify-between items-center md:w-[164px] md:h-[88px] md:flex-col md:p-[16px] md:items-start md:flex-1 lg:w-[255px] lg:h-[128px] lg:p-[22px]">
                <h5 className="text-[8px] text-white font-spartan font-bold tracking-[0.7px] opacity-50 lg:text-[11px]">
                  RADIUS
                </h5>
                <p className="font-antonio text-white text-[20px] font-normal tracking-[-0.7px] uppercase md:text-[24px] lg:text-[40px]">
                  {planet?.radius}
                </p>
              </div>

              <div className="w-full h-[48px] outline outline-white/20 px-[24px] py-[11px] flex justify-between items-center md:w-[164px] md:h-[88px] md:flex-col md:p-[16px] md:items-start md:flex-1 lg:w-[255px] lg:h-[128px] lg:p-[22px]">
                <h5 className="text-[8px] text-white font-spartan font-bold tracking-[0.7px] opacity-50 lg:text-[11px]">
                  AVERAGE TEMP.
                </h5>
                <p className="font-antonio text-white text-[20px] font-normal tracking-[-0.7px] uppercase md:text-[24px] lg:text-[40px]">
                  {planet?.temperature}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Planet;

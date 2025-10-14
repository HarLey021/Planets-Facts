import navBarData from "../../data/navBarData.json";

const Navigation: React.FC = () => {
  return (
    <>
      <div className="w-full min-h-screen p-[24px]">
        {navBarData.map((planet) => {
          return (
            <>
              <div className=" mb-[20px]">
                <div className="flex items-center mb-[20px]">
                  <div
                    className={`w-[20px] h-[20px] rounded-[20px] mr-[25px]`}
                    style={{ backgroundColor: planet.color }}
                  ></div>
                  <h2 className="text-[15px] text-[white] font-spartan font-bold tracking-[1.4px]">
                    {planet.name}
                  </h2>
                  <img
                    className="w-[4px] h-[8px] ml-auto"
                    src="/icon-chevron.svg"
                  />
                </div>
                <div className="w-full h-[1px] bg-white opacity-20"></div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Navigation;

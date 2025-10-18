import navBarData from "../../data/navBarData.json";
import { Link } from "react-router-dom";

const Planets: React.FC<ToggleInterface> = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`w-full min-h-screen p-[24px] mt-[20px] ${
        showMenu ? "block" : "hidden"
      }`}
    >
      {navBarData.map((planet) => {
        return (
          <Link key={planet.name} to={`/planets/${planet.name}`}>
            <div
              onClick={() => setShowMenu(false)}
              key={planet.name}
              className=" mb-[20px]"
            >
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
          </Link>
        );
      })}
    </div>
  );
};

export default Planets;

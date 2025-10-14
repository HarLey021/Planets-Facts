import data from "../data/data.json";
import { useParams } from "react-router-dom";

const Planet: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const planet = data.find(
    (planet) => planet.name.toLowerCase() === name?.toLowerCase()
  );

  console.log(planet);

  return (
    <>
      <div key={planet?.name} className="bg-dark bg-[image:var(--bg-stars)]">
        <div className="w-full  text-white text-[9px] font-spartan tracking-[2px] font-bold  opacity-50 ">
          <div className="flex justify-between px-[24px] py-[20px]">
            <h2>OVERVIEW</h2>
            <h2>STRUCTURE</h2>
            <h2>SURFACE </h2>
          </div>
          <div className="w-full h-[1px] bg-white opacity-20 "></div>
        </div>

        <div className="w-full px-[24px]">
          <div className="w-full h-[304px] flex items-center justify-center">
            <img src={planet?.images.planet} className="w-[150px] h-[150px]" />
          </div>
          <h1 className="text-[40px] text-white font-antonio font-normal uppercase justify-self-center mb-[16px]">
            {planet?.name}
          </h1>
          <p className="max-w-[400px] text-white text-[11px] font-spartan font-normal text-center leading-loose opacity-80 mb-[32px] justify-self-center">
            {planet?.overview.content}
          </p>

          <div className="text-white text-[12px] font-spartan font-normal justify-self-center opacity-50 flex items-center mb-[28px]">
            Source :{" "}
            <a
              href={planet?.overview.source}
              className="font-bold underline mr-[4px]"
            >
              Wikipedia
            </a>
            <img src="/icon-source.svg" className="w-[12px] h-[12px]" />
          </div>

          <div className="flex flex-col gap-y-[8px]">
            <div className="w-full h-[48px] outline outline-white/20 px-[24px] py-[11px] flex justify-between items-center">
              <h5 className="text-[8px] text-white font-spartan font-bold tracking-[0.7px] opacity-50">
                ROTATION TIME
              </h5>
              <p className="font-antonio text-white text-[20px] font-normal tracking-[-0.7px] uppercase">
                {planet?.rotation}
              </p>
            </div>

            <div className="w-full h-[48px] outline outline-white/20 px-[24px] py-[11px] flex justify-between items-center">
              <h5 className="text-[8px] text-white font-spartan font-bold tracking-[0.7px] opacity-50">
                REVOLUTION TIME
              </h5>
              <p className="font-antonio text-white text-[20px] font-normal tracking-[-0.7px] uppercase">
                {planet?.revolution}
              </p>
            </div>

            <div className="w-full h-[48px] outline outline-white/20 px-[24px] py-[11px] flex justify-between items-center">
              <h5 className="text-[8px] text-white font-spartan font-bold tracking-[0.7px] opacity-50">
                RADIUS
              </h5>
              <p className="font-antonio text-white text-[20px] font-normal tracking-[-0.7px] uppercase">
                {planet?.radius}
              </p>
            </div>

            <div className="w-full h-[48px] outline outline-white/20 px-[24px] py-[11px] flex justify-between items-center">
              <h5 className="text-[8px] text-white font-spartan font-bold tracking-[0.7px] opacity-50">
                AVERAGE TEMP.
              </h5>
              <p className="font-antonio text-white text-[20px] font-normal tracking-[-0.7px] uppercase">
                {planet?.temperature}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Planet;

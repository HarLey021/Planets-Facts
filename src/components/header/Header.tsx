import React from "react";

const Header: React.FC = () => {
  return (
    <>
      <div className="w-full h-[70px] flex px-[24px] py-[16px] items-center justify-between">
        <h1 className="text-[28px] text-white font-antonio tracking-[-1px]">
          THE PLANETS
        </h1>
        <svg
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
      <div className="w-full h-[1px] bg-white opacity-20"></div>
    </>
  );
};

export default Header;

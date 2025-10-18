import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { useState } from "react";
import Planets from "../components/planets/Planets";

const Home: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <>
      <div className="w-full min-h-screen bg-dark bg-[image:var(--bg-stars)]">
        <Header showMenu={showMenu} setShowMenu={setShowMenu} />
        <Planets showMenu={showMenu} setShowMenu={setShowMenu} />
        {!showMenu && <Outlet />}
      </div>
    </>
  );
};

export default Home;

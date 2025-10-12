import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const Home = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-dark bg-[image:var(--bg-stars)]">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default Home;

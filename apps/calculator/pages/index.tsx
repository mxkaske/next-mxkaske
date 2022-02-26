import type { NextPage } from "next";
import SectorNav from "../components/SectorNav";

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <SectorNav />
    </div>
  );
};

export default Home;

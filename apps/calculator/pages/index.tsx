import type { NextPage } from "next";
import Layout from "../components/common/Layout";
import SectorNav from "../components/navigation/SectorNav";

const Home: NextPage = () => {
  return (
    <Layout>
      <SectorNav />
      <div className="flex-1" />
    </Layout>
  );
};

export default Home;

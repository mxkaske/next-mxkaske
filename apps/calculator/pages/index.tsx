import type { NextPage } from "next";
import { Button } from "ui";
import Layout from "../components/common/Layout";
import SectorNav from "../components/navigation/SectorNav";

const Home: NextPage = () => {
  return (
    <Layout>
      <SectorNav />
      <div className="flex-1 flex items-center justify-center">
        <Button>Start</Button>
      </div>
    </Layout>
  );
};

export default Home;

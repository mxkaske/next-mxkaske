import type { NextPage } from "next";
import { Link } from "ui";
import NextLink from "next/link";
import Layout from "../components/common/Layout";
import PlasticFact from "../components/common/PlasticFact";
import SectorNav from "../components/navigation/SectorNav";
import { data } from "../config/data";
import { Sector } from "../types/schema";

const Home: NextPage = () => {
  const firstSector = Object.keys(data.sectors).at(0) as Sector;
  const firstQuestion = Object.keys(data.sectors[firstSector].questions).at(0);
  return (
    <Layout>
      <SectorNav />
      <div className="flex-1 flex flex-col justify-center space-y-3">
        <NextLink href={`${firstSector}/${firstQuestion}`} passHref>
          <Link>Start calculation</Link>
        </NextLink>
        <PlasticFact fact="plastic-clothing" className="max-w-sm" />
      </div>
    </Layout>
  );
};

export default Home;

import type { NextPage } from "next";
import { Heading, Link } from "ui";
import NextLink from "next/link";
import Layout from "../components/common/Layout";
import PlasticFact from "../components/common/PlasticFact";
import SectorNav from "../components/navigation/SectorNav";
import { data } from "../config/data";
import { Sector } from "../types/schema";
import { plasticFacts } from "../config/plastic-facts";

const Home: NextPage = () => {
  const firstSector = Object.keys(data.sectors).at(0) as Sector;
  const firstQuestion = Object.keys(data.sectors[firstSector].questions).at(0);
  const keys = Object.keys(plasticFacts) as (keyof typeof plasticFacts)[];
  // const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return (
    <Layout>
      <SectorNav />
      <div className="flex-1 flex flex-col justify-center">
        <NextLink href={`${firstSector}/${firstQuestion}`} passHref>
          <Link>Start calculation</Link>
        </NextLink>
        <div className="h-px w-full bg-gray-300 my-6" />
        <div>
          <Heading>Worth considering</Heading>
          <div className="space-y-2">
            {keys.map((k) => (
              <PlasticFact key={k} fact={k} className="max-w-sm" />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

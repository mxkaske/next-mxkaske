import type { NextPage } from "next";
import { Heading, Link, Text } from "ui";
import NextLink from "next/link";
import Layout from "../components/common/Layout";
import PlasticFact from "../components/common/PlasticFact";
import { data } from "../config/data";
import { Sector } from "../types/schema";
import { plasticFacts } from "../config/plastic-facts";
import ThemeSelect from "../components/ui/ThemeSelect";
import { ArrowRightIcon } from "@heroicons/react/outline";

const Home: NextPage = () => {
  const firstSector = Object.keys(data.sectors)[0] as Sector;
  const firstQuestion = Object.keys(data.sectors[firstSector].questions)[0];
  const keys = Object.keys(plasticFacts) as (keyof typeof plasticFacts)[];
  // const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return (
    <Layout>
      <div className="flex-1 flex flex-col justify-center">
        <Text>
          <NextLink href={`${firstSector}/${firstQuestion}`} passHref>
            <Link className="inline-flex items-center">
              Start calculation <ArrowRightIcon className="w-4 h-4 ml-1" />
            </Link>
          </NextLink>
        </Text>
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
      <div className="flex justify-end border-t pt-3">
        <ThemeSelect />
      </div>
    </Layout>
  );
};

export default Home;

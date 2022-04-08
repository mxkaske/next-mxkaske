import type { NextPage } from "next";
import { Button, CheckboxCard, Emoji, Link } from "ui";
import NextLink from "next/link";
import Layout from "../components/common/Layout";
import PlasticFact from "../components/common/PlasticFact";
import SectorNav from "../components/navigation/SectorNav";

const Home: NextPage = () => {
  return (
    <Layout>
      <SectorNav />
      <div className="flex-1 flex flex-col justify-center space-y-3">
        <NextLink href="/transport" passHref>
          <Link>/transport</Link>
        </NextLink>
        <NextLink href="/playground/checkbox-card-example" passHref>
          <Link>/playground/checkbox-card-example</Link>
        </NextLink>
        <PlasticFact emoji={"♻️"} label="recycle" className="max-w-sm">
          A lot of companies are using{" "}
          <strong>plastic to create fabric and pieces of clothing</strong> -
          look for a local recycler to contribute
        </PlasticFact>
      </div>
    </Layout>
  );
};

export default Home;

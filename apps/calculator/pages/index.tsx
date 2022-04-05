import type { NextPage } from "next";
import { Button, CheckboxCard, Emoji } from "ui";
import Layout from "../components/common/Layout";
import PlasticFact from "../components/common/PlasticFact";
import SectorNav from "../components/navigation/SectorNav";

const Home: NextPage = () => {
  return (
    <Layout>
      <SectorNav />
      <div className="flex-1 flex flex-col justify-center space-y-3">
        <Button>Start</Button>
        <div className="flex space-x-2">
          <CheckboxCard name="check-1" value="1">
            My Checkbox <Emoji className="ml-1">😅</Emoji>
          </CheckboxCard>
          <CheckboxCard name="check-2" value="2">
            My Checkbox <Emoji className="ml-1">😅</Emoji>
          </CheckboxCard>
        </div>
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

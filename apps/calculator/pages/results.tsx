import React from "react";
import { Heading } from "ui";
import Layout from "../components/common/Layout";
import SectorNav from "../components/navigation/SectorNav";
import SideNav from "../components/navigation/SideNav";
import ResultBar from "../components/visualization/ResultBar";

const Results = () => {
  return (
    <Layout>
      <SectorNav />
      <div className="flex-1 flex flex-col items-center justify-center min-h-max">
        <Heading>Results</Heading>
        <div className="w-full flex">
          <ResultBar />
          <SideNav />
        </div>
      </div>
    </Layout>
  );
};

export default Results;

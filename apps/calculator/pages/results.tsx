import React from "react";
import { Heading } from "ui";
import ActionBar from "../components/common/ActionBar";
import Layout from "../components/common/Layout";
import ResultBar from "../components/visualization/ResultBar";
import ResultByType from "../components/visualization/ResultByType";

const Results = () => {
  return (
    <Layout>
      <div className="flex-1 flex flex-col items-center justify-center min-h-max">
        <Heading>Results</Heading>
        <div className="w-full flex flex-col space-y-6">
          <ResultByType />
          <ResultBar />
        </div>
      </div>
      <ActionBar />
    </Layout>
  );
};

export default Results;

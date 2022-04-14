import React from "react";
import { Heading } from "ui";
import ActionBar from "../components/common/ActionBar";
import Layout from "../components/common/Layout";
import ResultByType from "../components/visualization/ResultByType";

const Results = () => {
  return (
    <Layout>
      <div className="flex-1 flex flex-col items-center justify-center min-h-max">
        <div className="w-full flex flex-col space-y-6">
          <Heading as="h1">Results</Heading>
          <ResultByType />
        </div>
      </div>
      <ActionBar />
    </Layout>
  );
};

export default Results;

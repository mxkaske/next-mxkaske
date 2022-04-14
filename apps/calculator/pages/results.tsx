import React from "react";
import { Heading, Input, Text } from "ui";
import ActionBar from "../components/common/ActionBar";
import Layout from "../components/common/Layout";
import QRCodeGenerator from "../components/common/QRCodeGenerator";
import ResultByType from "../components/visualization/ResultByType";

const Results = () => {
  return (
    <Layout>
      <div className="flex-1 flex flex-col items-center justify-center min-h-max">
        <div className="w-full flex flex-col space-y-6">
          <Heading as="h1">Results</Heading>
          <ResultByType />
          <div className="space-y-3">
            <Heading>Whats next?</Heading>
            <Text>1. Access your results on your smartphone</Text>
            <QRCodeGenerator />
            <Text>2. Send the link to your email address</Text>
            <Input placeholder="your@domain.com" />
          </div>
        </div>
      </div>
      <ActionBar />
    </Layout>
  );
};

export default Results;

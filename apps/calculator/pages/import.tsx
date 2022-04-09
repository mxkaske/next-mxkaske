import React from "react";
import { Text } from "ui";
import Layout from "../components/common/Layout";
import QRCodeGenerator from "../components/common/QRCodeGenerator";

// json.stringify + parse!

const Import = () => {
  return (
    <Layout className="flex items-center justify-center">
      <QRCodeGenerator />
      <Text>precycle.today</Text>
    </Layout>
  );
};

export default Import;

import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import React, { useEffect, useState } from "react";
import { Loading } from "ui";
import SectorNav from "../components/navigation/SectorNav";
import FormElement from "../components/common/FormElement";
import { data } from "../config/data";
import { Sector } from "../types/schema";
import ActionBar from "../components/common/ActionBar";
import Layout from "../components/common/Layout";
import ArrowNav from "../components/navigation/ArrowNav";

const Sector = ({
  sector,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { questions } = data.sectors[sector];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Loading />;
  }

  return (
    <Layout>
      <SectorNav activeSector={sector} />
      <div className="flex-1 flex items-center justify-center min-h-max">
        <div className="flex-1 space-y-3">
          {Object.entries(questions).map(([key, value]) => {
            return <FormElement key={key} id={key} value={value} />;
          })}
        </div>
      </div>
      <ArrowNav activeSector={sector} />
      <ActionBar />
    </Layout>
  );
};

// TODO: Make it `getStaticProps` and `getStaticPaths`
export const getServerSideProps = async (
  ctx: GetServerSidePropsContext<{ sector: Sector }>
) => {
  return {
    notFound: !data.sectors[ctx.params?.sector],
    props: { sector: ctx.params?.sector },
  };
};

export default Sector;

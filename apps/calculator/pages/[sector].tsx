import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import React, { useEffect, useState } from "react";
import { Emoji, Heading, Loading } from "ui";
import SectorNav from "../components/navigation/SectorNav";
import FormElement from "../components/common/FormElement";
import { data } from "../config/data";
import { Sector } from "../types/schema";
import ActionBar from "../components/common/ActionBar";
import Layout from "../components/common/Layout";
import ArrowNav from "../components/navigation/ArrowNav";
import SideNav from "../components/navigation/SideNav";
import ResultBar from "../components/visualization/ResultBar";

const Sector = ({
  sector,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { questions, title, emoji } = data.sectors[sector];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Loading />;
  }

  return (
    <Layout
      leftSide={<SideNav activeSector={sector} />}
      rightSide={<ResultBar activeSector={sector} />}
    >
      <SectorNav activeSector={sector} />
      <div className="flex-1 flex flex-col items-center justify-center min-h-max">
        <div className="flex-1 w-full flex items-end">
          <Heading>
            <Emoji className="mr-2" label={sector}>
              {emoji}
            </Emoji>
            {title}
          </Heading>
        </div>
        <div className="w-full space-y-3 flex-[2]">
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

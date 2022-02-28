import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import React, { useEffect, useState } from "react";
import { Loading } from "ui";
import SectorNav from "../components/common/SectorNav";
import FormElement from "../components/common/FormElement";
import { data } from "../config/data";
import { Sector } from "../types/schema";
import ActionBar from "../components/common/ActionBar";

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
    <div className="max-w-lg py-3 px-2 mx-auto min-h-screen flex flex-col space-y-3">
      <SectorNav activeSector={sector} />
      <div className="flex-1 flex items-center justify-center min-h-max">
        <div className="flex-1 space-y-3">
          {Object.entries(questions).map(([key, value]) => {
            return <FormElement key={key} id={key} value={value} />;
          })}
        </div>
      </div>
      <ActionBar />
    </div>
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

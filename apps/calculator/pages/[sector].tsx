import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import React, { useEffect, useState } from "react";
import { Loading } from "ui";
import SectorNav from "../components/SectorNav";
import QuestionCard from "../components/QuestionCard";
import { model } from "../config/model";
import { Sector } from "../types/schema";

const Sector = ({
  sector,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { questions } = model.sectors[sector];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Loading />;
  }

  return (
    <div className="max-w-lg py-3 px-2 mx-auto min-h-screen flex flex-col">
      <SectorNav activeSector={sector} />
      <div className="flex-1 flex items-center justify-center min-h-max">
        <div className="flex-1 space-y-3">
          {Object.entries(questions).map(([key, value]) => {
            return <QuestionCard key={key} id={key} value={value} />;
          })}
        </div>
      </div>
    </div>
  );
};

// TODO: Make it `getStaticProps` and `getStaticPaths`
export const getServerSideProps = async (
  ctx: GetServerSidePropsContext<{ sector: Sector }>
) => {
  return {
    notFound: !model.sectors[ctx.params?.sector],
    props: { sector: ctx.params?.sector },
  };
};

export default Sector;

import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import React, { useEffect, useState } from "react";
import { Loading } from "ui";
import QuestionCard from "../components/QuestionCard";
import { model } from "../config/model";
import { SectorProps } from "../types/model";

const Sector = ({
  sector,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted((prev) => !prev);
  }, []);

  if (!mounted) {
    return <Loading />;
  }

  const { question } = model.sector[sector] as SectorProps;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col space-y-3">
        {Object.entries(question).map(([key, value]) => {
          return <QuestionCard key={key} id={key} value={value} />;
        })}
      </div>
    </div>
  );
};

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext<{ sector: string }>
) => {
  return {
    notFound: !model.sector[ctx.params?.sector],
    props: { sector: ctx.params?.sector },
  };
};

export default Sector;

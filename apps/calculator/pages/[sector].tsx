import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import React from "react";
import { model } from "../config/model";

const Sector = ({
  sector,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <div>{sector}</div>;
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

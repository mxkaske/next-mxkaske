import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import React, { useEffect, useState } from "react";
import { Emoji, Heading, Loading, Text } from "ui";
import SectorNav from "../../components/navigation/SectorNav";
import FormElement from "../../components/common/FormElement";
import { data } from "../../config/data";
import { Sector } from "../../types/schema";
import ActionBar from "../../components/common/ActionBar";
import Layout from "../../components/common/Layout";
import ArrowNav from "../../components/navigation/ArrowNav";
import AnswerNav from "../../components/navigation/AnswerNav";

// [[...question]] allows the `/index` page!

const Sector = ({
  sector,
  id,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { questions, title, emoji } = data.sectors[sector];
  const question = data.sectors[sector].questions[id];
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <Loading />;
  }

  return (
    <Layout>
      {/* <SectorNav activeSector={sector} /> */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-4">
        <div className="flex-1 w-full flex flex-col justify-end">
          <AnswerNav activeSector={sector} questionKey={id} />
          <Heading as="h1">{question.question}</Heading>
          <Text className="text-gray-500 text-lg">{question.description}</Text>
        </div>
        <div className="w-full flex-[2]">
          <FormElement id={id} value={question} hideLabel />
        </div>
      </div>
      <ArrowNav activeSector={sector} questionKey={id} />
      <ActionBar />
    </Layout>
  );
};

// TODO: Make it `getStaticProps` and `getStaticPaths`
export const getServerSideProps = async (
  ctx: GetServerSidePropsContext<{ sector: Sector; questionId: string }>
) => {
  const { sector, questionId } = ctx.params;
  const notFound =
    !data.sectors[sector] && !data.sectors[sector].questions[questionId];
  return {
    notFound,
    props: {
      sector,
      id: questionId,
    },
  };
};

export default Sector;

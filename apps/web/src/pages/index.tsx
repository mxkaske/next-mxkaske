import Stack from "@/components/home/stack";
import { Heading } from "ui";
import stackConfig from "@/config/home";
import Layout from "@/components/common/layout";
import { getSocialLinks } from "@/lib/contentful";
import { InferGetStaticPropsType } from "next";

export default function Home({
  socialLinks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(socialLinks);
  return (
    <Layout>
      <div className="max-w-3xl py-8">
        <Heading>
          {`I'm a design-minded Software Developer interested in code pattern,
          user experience and design systems.`}
        </Heading>
        <Heading>Building.</Heading>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 mb-16">
        {Object.keys(stackConfig).map((key) => (
          <Stack key={key} {...stackConfig[key]} />
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const socialLinks = await getSocialLinks();
  return { props: { socialLinks } };
};

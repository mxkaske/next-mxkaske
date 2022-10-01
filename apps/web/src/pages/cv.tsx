import { allCVs, CV } from ".contentlayer/generated";
import Layout from "@/components/common/layout";
import Details from "@/components/cv/details";
import Grid from "@/components/cv/grid";
import cvConfig from "@/config/cv";
import stackConfig from "@/config/home";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import React from "react";
import { FiPrinter } from "react-icons/fi";
import { Badge, Button, Heading, Link, Text } from "ui";

const selfDescription = `I’m Max, a self-taught Fullstack Developer working on Web- and App projects in the JS/TS. I’m passionate about the newest technologies, clean design, productivity tools, and code architecture. I'm experienced with React & Next.js for web development, React Native & Expo for App development, serverless databases like upstash (Redis), planetscale (MySQL) and deployments on vercel.`;
const styles = {
  prose:
    "prose dark:prose-invert prose-a:decoration-gray-500 hover:prose-a:decoration-black dark:hover:prose-a:decoration-white prose-img:rounded-md prose-blockquote:rounded prose-em:text-gray-900 dark:prose-em:text-white prose-em:font-light",
};

const CVPage = ({ events }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const handlePrint = () => {
    if (typeof window !== "undefined") window?.print();
  };
  return (
    <Layout>
      <Grid>
        <Grid.Left />
        <Grid.Right>
          <div className="flex justify-between">
            <Heading as="h1">Curriculum Vitae</Heading>
            <div className="print:hidden">
              <Button onClick={handlePrint} className="!p-2">
                <FiPrinter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Grid.Right>
        <Grid.Left>
          <Text>{`Let's talk!`}</Text>
          {[
            { href: "mailto:maximilian@kaske.org", title: "Email" },
            ...stackConfig.community.items,
          ].map(({ href, title }) => (
            <Text key={href} variant="light">
              <Link href={href} target="_blank" rel="noopener">
                {title}
              </Link>
            </Text>
          ))}
        </Grid.Left>
        <Grid.Right>
          <Heading>Maximilian Kaske</Heading>
          <div className="flex space-x-6 justify-between mb-6">
            <Text className="text-gray-800 dark:text-gray-200 italic font-extralight after:content-['”'] after:ml-0.5 after:text-gray-500 before:content-['“'] before:mr-0.5 before:text-gray-500">
              {selfDescription}
            </Text>
            <div className="flex-shrink-0 h-40 w-40 relative rounded-full overflow-hidden">
              <Image
                src="/profile.jpg"
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>
          </div>
          <div className={styles.prose}>
            <p className="mb-0">
              <strong>Birthday</strong>: 7th August 1995
              <br />
              <strong>Languages:</strong> native in French & German, fluent in
              English
            </p>
          </div>
        </Grid.Right>
        {Object.entries(events).map(([key, value]) => {
          return (
            <React.Fragment key={key}>
              <Grid.Left />
              <Grid.Right>
                <Heading className="capitalize">
                  {key.replace("-", " ")}
                </Heading>
                <div className="md:-mx-6 h-px bg-gray-300/50 dark:bg-gray-700/50" />
              </Grid.Right>
              {value.map(({ body, ...props }, i) => (
                <React.Fragment key={i}>
                  <Grid.Left>
                    <Details {...props} />
                  </Grid.Left>
                  <Grid.Right>
                    <div
                      className={styles.prose}
                      dangerouslySetInnerHTML={{ __html: body.html }}
                    />
                  </Grid.Right>
                </React.Fragment>
              ))}
            </React.Fragment>
          );
        })}
        <Grid.Left></Grid.Left>
        <Grid.Right>
          <Heading>Hobbies</Heading>
          <div className="md:-mx-6 h-px bg-gray-300/50 dark:bg-gray-700/50" />
          <div className="flex flex-wrap mt-6">
            {cvConfig.hobbies.map((h) => (
              <Badge key={h} className="mr-2">
                {h}
              </Badge>
            ))}
          </div>
        </Grid.Right>
      </Grid>
    </Layout>
  );
};

export default CVPage;

export const getStaticProps = async () => {
  // sort first
  allCVs.sort((a, b) => (a.slug < b.slug ? 1 : -1));
  const events = allCVs.reduce<Record<string, CV[]>>((prev, curr) => {
    if (prev?.[curr.event]) {
      prev[curr.event] = [...prev[curr.event], curr];
    } else {
      prev[curr.event] = [curr];
    }
    return prev;
  }, {});
  return { props: { events } };
};

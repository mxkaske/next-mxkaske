import { allCVs, CV } from ".contentlayer/generated";
import Layout from "@/components/common/layout";
import Details from "@/components/cv/details";
import Grid from "@/components/cv/grid";
import stackConfig from "@/config/home";
import { format } from "date-fns";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import React from "react";
import { FiPrinter, FiCopy } from "react-icons/fi";
import { Button, Heading, Link, Text } from "ui";
import NextLink from "next/link";

const self = {
  description: `I’m Max, a self-taught Fullstack Developer working on Web- and App projects in JS/TS. I’m passionate about the newest technologies, clean design, productivity tools, and code architecture. I'm experienced with React & Next.js for Web development, React Native & Expo for App development and serverless infrastructure like upstash, planetscale or vercel.`,
  informations: {
    birthday: "7th August 1995",
    languages: "native in French & German, fluent in English",
    location: "Berlin, Germany",
    hobbies: "cycling, bouldering, traveling",
  },
};

const styles = {
  prose:
    "prose dark:prose-invert prose-a:decoration-gray-500 hover:prose-a:decoration-black dark:hover:prose-a:decoration-white prose-img:rounded-md prose-blockquote:rounded prose-em:text-gray-900 dark:prose-em:text-white prose-em:font-light",
};

const CVPage = ({ events }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const handlePrint = () => {
    if (typeof window !== "undefined") window?.print();
  };
  const handleCopy = () => {
    let string = "";
    Object.entries(events).map(([eKey, eValue]) => {
      string += `# ${eKey}\n`;
      console.log(eKey, eValue);
      eValue.map((cv) => {
        string += `Time range: ${format(
          new Date(cv.from),
          "MMM yyyy"
        )}-${format(new Date(cv.to), "MMM yyyy")}\nPosition: ${
          cv.what
        }\nCompany: ${cv.where}\n${cv.body.raw}\n${" "}\n`;
      });
    });
    navigator.clipboard.writeText(string);
  };
  return (
    <Layout>
      <Grid>
        <Grid.Left />
        <Grid.Right>
          <div className="flex justify-between">
            <Heading as="h1">Curriculum Vitae</Heading>
            <div className="flex gap-4 print:hidden">
              <div>
                <Button onClick={handlePrint} className="!p-2">
                  <FiPrinter className="h-4 w-4" />
                </Button>
              </div>
              <div>
                <Button onClick={handleCopy} className="!p-2">
                  <FiCopy className="h-4 w-4" />
                </Button>
              </div>
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
          <div className="flex flex-col md:flex-row gap-3 justify-between mb-6">
            <div>
              <Text className="text-gray-800 dark:text-gray-200 italic font-extralight after:content-['”'] after:ml-0.5 after:text-gray-500 before:content-['“'] before:mr-0.5 before:text-gray-500">
                {self.description}
              </Text>
            </div>
            <div className="-order-1 md:order-2 self-center flex-shrink-0 h-40 w-40 relative rounded-full overflow-hidden">
              <Image
                src="/profile.jpg"
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>
          </div>
          <div className={styles.prose}>
            <p className="mb-3">
              {Object.entries(self.informations).map(([key, value]) => {
                return (
                  <React.Fragment key={key}>
                    <strong className="capitalize">{key}</strong>: {value}
                    <br />
                  </React.Fragment>
                );
              })}
            </p>
            <p>
              Learn more about the current{" "}
              <strong>
                <NextLink href="/tech-stack">
                  <Link href="/tech-stack">tech stack</Link>
                </NextLink>
              </strong>
              .
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

import Head from "next/head";
import {
  Button,
  Container,
  Cover,
  Footer,
  NavBar,
  TechStack,
  Thumbnail,
  More,
} from "../components";
import Emoji from "../components/emoji";
import { thumbnails } from "../config";

export default function Home() {
  return (
    <div className="dark:bg-black transition-colors duration-300">
      <Head>
        <title>mxkaske</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="my portfolio" />
        <meta property="og:image" content="/max.png" />
        <meta property="og:title" content="mxkaske" />
        <meta property="og:description" content="my porfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://mxkaske.dev" />
        <meta property="og:site_name" content="mxkaske" />
      </Head>
      <NavBar />
      <Cover />
      <Container className="divide-y divide-primary-600">
        <div className="py-4">
          <h2 className="text-center">
            Project Highlights <Emoji symbol="🚀" label="rocket" />
          </h2>
          <div className="flex flex-wrap -mx-4">
            {thumbnails.map((thumbnail, idx) => (
              <Thumbnail key={idx} {...thumbnail} />
            ))}
            <More />
          </div>
        </div>
        <div className="py-4">
          <TechStack />
        </div>
      </Container>
      <Footer />
    </div>
  );
}

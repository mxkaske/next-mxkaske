import Head from "next/head";
import Container from "@/components/common/container";
import Emoji from "@/components/ui/emoji";
import { thumbnails } from "../../config";
import Thumbnail from "@/components/common/thumbnail";
import More from "@/components/common/more";
import Cover from "@/components/common/cover";
import NavBar from "@/components/navigation/navbar";
import TechStack from "@/components/common/techstack";
import Footer from "@/components/navigation/footer";

export default function Home() {
  return (
    <div className="transition-colors duration-300 dark:bg-black">
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

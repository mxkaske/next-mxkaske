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
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
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

import Head from "next/head";
import {
  Button,
  Container,
  Cover,
  Footer,
  NavBar,
  TechStack,
  Thumbnail,
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
          <h1>Hello World!</h1>
          <h2>Hello World!</h2>
          <h3>Hello World!</h3>
          <p>Hello World!</p>
          <Button>Hello World!</Button>
        </div>
        <div className="py-4">
          <h2>
            Project Highlights <Emoji symbol="🚀" label="rocket" />
          </h2>
          <div className="flex flex-wrap -mx-4">
            {thumbnails.map((thumbnail, idx) => (
              <Thumbnail key={idx} {...thumbnail} />
            ))}
            <div className="flex w-full md:w-(1/2-8) m-4 rounded-3xl border border-primary-900"></div>
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

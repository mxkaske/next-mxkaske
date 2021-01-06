import Head from "next/head";
import { Button, Container, Footer, NavBar, Thumbnail } from "../components";
import { thumbnails } from "../config";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Container>
        <h1>Hello World!</h1>
        <h2>Hello World!</h2>
        <h3>Hello World!</h3>
        <p>Hello World!</p>
        <Button>Hello World!</Button>
        <div className="flex flex-wrap -mx-4">
          {[...thumbnails, ...thumbnails].map((thumbnail, idx) => (
            <Thumbnail key={idx} {...thumbnail} />
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
}

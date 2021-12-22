import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { SWRConfig } from "swr";
import swrConfig from "swr.config";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* TODO: use next-seo instead */}
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
      <SWRConfig value={swrConfig}>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </SWRConfig>
    </>
  );
}

export default MyApp;

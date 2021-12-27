import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { SWRConfig } from "swr";
import swrConfig from "swr.config";
import { DefaultSeo } from "next-seo";
import SEO from "next-seo.config";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={swrConfig}>
      <DefaultSeo {...SEO} />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  );
}

export default MyApp;

import "@/styles/globals.css";
import { ThemeProvider, useTheme } from "next-themes";
import { SWRConfig } from "swr";
import swrConfig from "swr.config";
import { DefaultSeo } from "next-seo";
import SEO from "next-seo.config";
import "@upstash/chatbox/style.css";
import dynamic from "next/dynamic";

const ChatBoxWidget = dynamic({
  loader: () => import("@upstash/chatbox/chatbox"),
  ssr: false,
});

const ChatBox = () => {
  const { resolvedTheme } = useTheme();
  return (
    <ChatBoxWidget
    // themeColor={resolvedTheme === "dark" ? "#e5e7eb" : "#374151"}
    // textColor={resolvedTheme === "dark" ? "black" : "white"}
    />
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={swrConfig}>
      <DefaultSeo {...SEO} />
      <ThemeProvider attribute="class">
        <ChatBox />
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  );
}

export default MyApp;

import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { SWRConfig } from "swr";
import swrConfig from "swr.config";
import { DefaultSeo } from "next-seo";
import SEO from "next-seo.config";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SWRConfig value={swrConfig}>
      <DefaultSeo {...SEO} />
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </SWRConfig>
  );
}

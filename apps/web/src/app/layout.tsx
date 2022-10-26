import "@/styles/globals.css";
import AppProvider from "src/provider/app/AppProvider";
import Layout from "@/components/common/layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProvider>
      <Layout>{children}</Layout>
    </AppProvider>
  );
}

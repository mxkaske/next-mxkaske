import "@/styles/globals.css";
import AppProvider from "src/provider/app/AppProvider";
import Container from "@/components/common/container";
import NavBar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // {/* https://github.com/vercel/next.js/issues/41896#issuecomment-1292643524 */}
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-1">
              <Container>{children}</Container>
            </main>
            <Footer />
          </div>
        </AppProvider>
      </body>
    </html>
  );
}

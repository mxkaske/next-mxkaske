import Footer from "../navigation/footer";
import NavBar from "../navigation/navbar";
import Container from "./container";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Layout = ({ children, className }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        <Container className={className}>{children}</Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

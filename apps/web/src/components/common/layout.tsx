import React, { FC } from "react";
import Footer from "../navigation/footer";
import NavBar from "../navigation/navbar";
import Container from "./container";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Layout: FC<Props> = ({ children, className }) => {
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

import React, { FC } from "react";
import Footer from "../navigation/footer";
import NavBar, { NavBarProps } from "../navigation/navbar";
import Container from "./container";

interface Props extends NavBarProps {
  className?: string;
}

const Layout: FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar {...props} />
      <main className="flex-1">
        <Container className={className}>{children}</Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

import React from "react";
import Container from "./container";
import Button from "./button";

const Footer = () => {
  return (
    <footer className="bg-primary-200 py-4">
      <Container>
        <Button className="block pb-2">LinkedIn</Button>
        <Button className="block pb-2">Twitter</Button>
        <Button className="block pb-2">GitHub</Button>
        <Button className="block">Hashnode</Button>
      </Container>
    </footer>
  );
};

export default Footer;

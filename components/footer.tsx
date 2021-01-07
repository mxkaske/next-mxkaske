import React from "react";
import Container from "./container";
import Button from "./button";
import Tag from "./tag";

const Footer = () => {
  return (
    <footer className="bg-primary-200">
      <Container className="flex flex-col sm:flex-row space-between">
        <div className="flex-1">
          <Button className="block mb-2">LinkedIn</Button>
          <Button className="block mb-2">Twitter</Button>
          <Button className="block mb-2">GitHub</Button>
          <Button className="block">Hashnode</Button>
        </div>
        <div className="flex flex-col items-end justify-end text-xs">
          <p className="pb-1">
            designed by
            <Tag label="mxkaske" className="ml-1" />
          </p>
          <p className="pb-1">
            build with
            <Tag label="nextjs" className="ml-1" />
          </p>
          <Tag label="tailwindcss" className="block mb-1" />
          <Tag label="framer" className="block mb-1" />
          <p className="pb-1">
            deployed on
            <Tag label="vercel" className="ml-1" />
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

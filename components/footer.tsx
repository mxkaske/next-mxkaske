import React from "react";
import Container from "./container";
import Tag from "./tag";

const sm: { label: string; href: string }[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/maximilian-kaske-262227202/",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/mxkaske",
  },
  {
    label: "GitHub",
    href: "https://github.com/maximiliankaske",
  },
  {
    label: "Hashnode",
    href: "https://mxkaske.hashnode.dev",
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary-100">
      <Container className="flex flex-col sm:flex-row space-between">
        <div className="flex-1">
          {sm.map(({ href, label }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              className="block mb-2 last:mb-0"
              rel="noreferrer"
            >
              {label}
            </a>
          ))}
        </div>
        <div className="flex flex-col items-end justify-end text-xs">
          <p>
            designed by
            <Tag label="mxkaske" className="ml-1" />
          </p>
          <p>
            build with <Tag label="nextjs" />
            <Tag label="tailwindcss" />
            <Tag label="framer" />
          </p>
          <p>
            deployed on
            <Tag label="vercel" className="ml-1" />
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

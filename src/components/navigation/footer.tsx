import React from "react";
import Container from "../common/container";

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
    <footer>
      <Container>
        <div className="flex justify-center space-x-2">
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
      </Container>
    </footer>
  );
};

export default Footer;

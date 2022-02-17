import React from "react";
import Container from "../common/container";
import { default as NextLink } from "next/link";
import { Text, Link } from "ui";
import ThemeSwitch from "../common/theme-switch";
import SlashIcon from "../icon/slash";

// THINK: of a good way to display the paths with the SlashIcon

const paths = [
  { label: "Home", href: "/" },
  { label: "Writing", href: "/writing" },
];

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 dark:border-gray-700">
      <Container className="space-y-2 text-gray-600 dark:text-gray-400">
        <div className="flex flex-col md:items-center md:justify-between md:flex-row">
          <div className="space-x-3">
            {paths.map(({ label, href }) => (
              <NextLink key={href} href={href}>
                <Link className="font-light">{label}</Link>
              </NextLink>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <Text className="font-light">Switch Theme:</Text>
            <ThemeSwitch />
          </div>
        </div>
        <Text className="text-xs italic text-center">Berlin, 2021</Text>
      </Container>
    </footer>
  );
};

export default Footer;

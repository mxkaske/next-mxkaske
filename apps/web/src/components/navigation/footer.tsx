import React from "react";
import Container from "../common/container";
import { Text, Heading } from "ui";
import Link from "@/components/ui/link";
import ThemeSwitch from "../common/theme-switch";
import NavBar from "./navbar";

// THINK: of a good way to display the paths with the SlashIcon

const paths = [
  // { label: "home", href: "/" },
  { label: "writing", href: "/writing" },
  { label: "cv", href: "/cv" },
  { label: "tools", href: "/tools" },
];

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 dark:border-gray-700 print:hidden">
      <Container className="space-y-2 text-gray-600 dark:text-gray-400">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-between">
          <div>
            <Heading as="h4" className="text-gray-600 dark:text-gray-400">
              More
            </Heading>
            <ul className="space-y-1">
              {paths.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="font-light">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ThemeSwitch />
          </div>
        </div>
        <Text className="text-xs italic text-center">
          Berlin, {new Date().getFullYear()}
        </Text>
      </Container>
    </footer>
  );
};

export default Footer;

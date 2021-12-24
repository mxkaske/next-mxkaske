import React, { useEffect, useState } from "react";
import Link from "@/components/ui/link";
import Container from "../common/container";
import { useTheme } from "next-themes";
import Select from "../ui/select";
import Breadcrumbs from "./breadcrumbs";
import { FiXCircle } from "react-icons/fi";

const NavBar = () => {
  const { resolvedTheme, setTheme, theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  console.log(theme, systemTheme, resolvedTheme);

  return (
    <header className="w-full h-14">
      <div className="fixed w-full backdrop-blur-xl dark:backdrop-blur-md">
        <Container className="flex items-center justify-between space-x-3">
          <div className="flex flex-1">
            <div>
              <Link href="/" className="font-medium">
                <span className="text-gray-500 dark:text-gray-400">mx</span>
                kaske
              </Link>
            </div>
            <Breadcrumbs />
          </div>
          <div className="flex items-center flex-shrink-0">{/* content */}</div>
        </Container>
      </div>
    </header>
  );
};

export default NavBar;

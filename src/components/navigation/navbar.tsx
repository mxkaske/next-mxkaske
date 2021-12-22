import React, { useEffect, useState } from "react";
import Link from "@/components/ui/link";
import { FiSun, FiMoon } from "react-icons/fi";
import Container from "../common/container";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

const NavBar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const breadcrumbs = router.asPath.substring(1).split("/");

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const isDarkMode = mounted && resolvedTheme === "dark";

  return (
    <header className="w-full h-14">
      <div className="fixed w-full backdrop-blur-xl dark:backdrop-blur-3xl">
        <Container className="flex items-center justify-between space-x-3">
          <div className="flex flex-1">
            <div>
              <Link href="/" className="font-medium">
                <span className="text-gray-500 dark:text-gray-400">mx</span>
                kaske
              </Link>
            </div>
            <div className="flex">
              {breadcrumbs.map((breadcrumb, index) => (
                <div key={breadcrumb} className="flex items-center">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>
                  <Link
                    href={breadcrumbs.reduce(
                      (prev, curr) =>
                        prev.split("/").length <= index + 1
                          ? `${prev}/${curr}`
                          : `${prev}`,
                      ""
                    )}
                    className="font-light line-clamp-1"
                  >
                    {breadcrumb}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center flex-shrink-0">
            <button
              className="text-gray-800 hover:text-black dark:text-white dark:hover:text-gray-300"
              onClick={() => setTheme(isDarkMode ? "light" : "dark")}
            >
              {isDarkMode ? (
                <FiSun className="w-5 h-5" />
              ) : (
                <FiMoon className="w-5 h-5" />
              )}
            </button>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default NavBar;

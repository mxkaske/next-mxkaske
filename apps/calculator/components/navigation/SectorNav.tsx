import React from "react";
import NextLink from "next/link";
import { data } from "../../config/data";
import { Sector } from "../../types/schema";
import { Emoji } from "ui";
import cn from "classnames";

interface Props {
  activeSector?: Sector;
}

const SectorNav = ({ activeSector }: Props) => {
  return (
    <nav className="border-b dark:border-b-gray-700">
      <ul className="flex overflow-x-auto space-x-2 py-3">
        {Object.entries(data.sectors).map(([key, value]) => {
          const isActive = key === activeSector;
          return (
            <li key={key} className="flex-shrink-0">
              <NextLink href={`/${key}`}>
                <a
                  className={cn(
                    "p-2 rounded",
                    isActive
                      ? "bg-gray-200 dark:bg-gray-800"
                      : "bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 hover:dark:bg-gray-800"
                  )}
                >
                  <Emoji label={value.title}>{value.emoji}</Emoji>
                </a>
              </NextLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SectorNav;

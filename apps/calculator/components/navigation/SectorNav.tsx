import React from "react";
import NextLink from "next/link";
import { data } from "../../config/data";
import { Sector } from "../../types/schema";
import { Emoji, Link } from "ui";
import cn from "classnames";

interface Props {
  activeSector?: Sector;
}

const SectorNav = ({ activeSector }: Props) => {
  return (
    <nav className="w-full">
      <ul className="flex overflow-x-auto space-x-2 py-3 snap-x snap-mandatory">
        {Object.entries(data.sectors).map(([key, value]) => {
          const isActive = key === activeSector;
          const firstQuestionKey = Object.keys(value.questions).at(0);
          return (
            <li key={key} className="snap-start scroll-mx-3 shrink-0">
              <NextLink href={`/${key}/${firstQuestionKey}`} passHref>
                <a
                  className={cn(
                    "px-3 py-2 rounded-full",
                    isActive
                      ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-black"
                      : "bg-white dark:bg-gray-900 hover:bg-gray-100 hover:dark:bg-gray-900"
                  )}
                >
                  {value.title}
                  <Emoji label={value.title} className="ml-2">
                    {value.emoji}
                  </Emoji>
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

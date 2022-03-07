import React from "react";
import NextLink from "next/link";
import { data } from "../../config/data";
import { Sector } from "../../types/schema";

interface Props {
  activeSector?: Sector;
}

const SectorNav = ({ activeSector }: Props) => {
  return (
    <nav className="border-b dark:border-b-gray-700">
      <ul className="flex overflow-x-auto space-x-2 pb-3">
        {Object.entries(data.sectors).map(([key, value]) => {
          const isActive = key === activeSector;
          return (
            <li key={key} className="flex-shrink-0">
              <NextLink href={`/${key}`}>
                <a className={isActive ? "text-black" : "text-gray-500"}>
                  {value.title}
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

import React from "react";
import NextLink from "next/link";
import { data } from "../config/data";
import { Sector } from "../types/schema";

interface Props {
  activeSector?: Sector;
}

const SectorNav = ({ activeSector }: Props) => {
  return (
    <nav>
      <ul className="flex space-x-2">
        {Object.keys(data.sectors).map((key) => {
          const isActive = key === activeSector;
          return (
            <li key={key}>
              <NextLink href={`/${key}`}>
                <a className={isActive ? "text-black" : "text-gray-500"}>
                  {key}
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

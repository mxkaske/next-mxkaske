import React from "react";
import { data } from "../../config/data";
import { Sector } from "../../types/schema";
import { default as NextLink } from "next/link";
import cn from "classnames";
import useFootprint from "../../hooks/useFootprint";
import { Emoji, Text } from "ui";

interface Props {
  activeSector: Sector;
}

const SideNav = ({ activeSector }: Props) => {
  const { calculate } = useFootprint();
  return (
    <nav className="h-full w-full flex items-center">
      <ul className="space-y-3">
        {Object.entries(data.sectors).map(([key, value]) => {
          const sum = calculate(key as Sector);
          const isActive = key === activeSector;
          // const Icon = value.icon;
          return (
            <li key={key}>
              <NextLink href={`/${key}`}>
                <a className="block px-3 py-2 border border-gray-300 rounded-md hover:border-gray-400 dark:hover:border-gray-600 dark:border-gray-700">
                  <Text className="flex items-center">
                    <Emoji
                      label={value.title}
                      className={cn(
                        "mr-2",
                        isActive ? "opacity-100" : "opacity-70"
                      )}
                    >
                      {value.emoji}
                    </Emoji>
                    {value.title}
                  </Text>
                  <Text>
                    Consumption: <span className="font-medium">{sum}</span>
                  </Text>
                </a>
              </NextLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideNav;

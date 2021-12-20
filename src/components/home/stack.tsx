import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Heading from "../ui/heading";
import Text from "../ui/text";

export type Item = {
  href: string;
  title: string;
  description?: string;
};

interface Props {
  title: string;
  items: Item[];
}

const Stack = ({ title, items }: Props) => {
  return (
    <div className="space-y-4">
      <Heading as="h4" className="text-gray-600 dark:text-gray-400">
        {title}
      </Heading>
      <ul role="list" className="space-y-3">
        {items.map((item) => {
          const externalLink = !item.href.startsWith("/");
          return (
            <li key={item.href}>
              <Link href={item.href}>
                <a
                  href={item.href}
                  target={externalLink ? "_blank" : undefined}
                  className="block p-3 -m-3 rounded-md group hover:bg-gray-50 dark:hover:bg-neutral-800"
                >
                  <Text className="flex items-center group-hover:underline">
                    {item.title}{" "}
                    {externalLink ? (
                      <FiArrowUpRight className="w-4 h-4 ml-1" />
                    ) : null}
                  </Text>
                  {item.description ? (
                    <Text className="mb-0 text-gray-600 dark:text-gray-400">
                      {item.description}
                    </Text>
                  ) : null}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Stack;

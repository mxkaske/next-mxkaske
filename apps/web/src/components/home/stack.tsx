import React from "react";
import LinkBox from "../common/link-box";
import { Heading, Text } from "ui";

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
        {items.map((item) => (
          <li key={item.href}>
            <LinkBox href={item.href} title={item.title}>
              {item.description ? (
                <Text className="mb-0 text-gray-600 dark:text-gray-400">
                  {item.description}
                </Text>
              ) : null}
            </LinkBox>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stack;

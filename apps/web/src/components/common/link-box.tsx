import React, { FC } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Link, { LinkProps } from "next/link";
import { Text } from "ui";

interface Props extends LinkProps {
  title: string;
  href: string;
  children?: React.ReactNode;
}

const LinkBox: FC<Props> = ({ href, title, children }) => {
  const externalLink = !href.startsWith("/");
  return (
    (<Link
      href={href}
      rel="noreferrer"
      target={externalLink ? "_blank" : undefined}
      className="block p-3 -m-3 rounded-md group hover:bg-gray-50 dark:hover:bg-neutral-800">

      <Text className="flex items-center group-hover:underline">
        {title}{" "}
        {externalLink ? <FiArrowUpRight className="w-4 h-4 ml-1" /> : null}
      </Text>
      {children}

    </Link>)
  );
};

export default LinkBox;

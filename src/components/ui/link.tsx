import React, { AnchorHTMLAttributes, FC } from "react";
import { default as NextLink, LinkProps as NextLinkProps } from "next/link";
import cn from "classnames";
import { FiArrowUpRight } from "react-icons/fi";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const Link: FC<Props> = ({ href, target, className, children, ...props }) => {
  const externalLink = target === "_blank";
  return (
    <NextLink href={href}>
      <a
        target={target}
        href={href}
        className={cn(
          "text-gray-700 hover:text-black dark:text-white dark:hover:text-gray-300",
          externalLink && "inline-flex items-center",
          className
        )}
        {...props}
      >
        {children}
        {externalLink ? <FiArrowUpRight className="w-4 h-4 ml-1" /> : null}
      </a>
    </NextLink>
  );
};

export default Link;

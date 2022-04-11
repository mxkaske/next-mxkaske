import * as React from "react";
import cn from "classnames";
import { FiArrowUpRight } from "react-icons/fi";

const Link = ({
  href,
  target,
  className,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const externalLink = target === "_blank";
  return (
    <a
      target={target}
      href={href}
      className={cn(
        "text-gray-700 hover:text-black dark:text-white dark:hover:text-gray-300 cursor-pointer",
        externalLink && "inline-flex items-center",
        className
      )}
      {...props}
    >
      {children}
      {externalLink ? (
        <FiArrowUpRight className="w-4 h-4 ml-1 flex-shrink-0" />
      ) : null}
    </a>
  );
};

export default Link;

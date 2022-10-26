// TODO: move to `ui` package and include `next/link` to peerDeps
import * as React from "react";
import cn from "classnames";
import { FiArrowUpRight } from "react-icons/fi";
import NextLink from "next/link";

const styles = {
  base: "cursor-pointer",
  variant: {
    default:
      "text-gray-700 hover:text-black dark:hover:text-white dark:text-gray-300",
    button:
      "px-3 py-2 text-black bg-transparent border border-gray-300 rounded-full dark:text-white hover:border-gray-400 dark:hover:border-gray-600 dark:border-gray-700",
  },
  externalLink: "inline-flex items-center",
  underline: "underline hover:no-underline",
};

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: keyof typeof styles.variant;
  underline?: boolean;
}

// eslint-disable-next-line react/display-name
const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      href,
      target,
      className,
      variant = "default",
      underline,
      children,
      ...props
    },
    ref
  ) => {
    const externalLink = target === "_blank";
    return (
      <NextLink
        ref={ref}
        target={target}
        href={href}
        className={cn(
          styles.base,
          styles.variant[variant],
          { [styles.externalLink]: externalLink },
          { [styles.underline]: underline },
          className
        )}
        {...props}
      >
        {children}
        {externalLink ? <FiArrowUpRight className="w-4 h-4 ml-1" /> : null}
      </NextLink>
    );
  }
);

export default Link;

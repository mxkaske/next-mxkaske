import * as React from "react";
import cn from "classnames";
import { FiArrowUpRight } from "react-icons/fi";

const styles = {
  base: "cursor-pointer",
  variant: {
    default:
      "text-gray-700 hover:text-black dark:text-white dark:hover:text-gray-300",
    button:
      "px-3 py-2 text-black bg-transparent border border-gray-300 rounded-full dark:text-white hover:border-gray-400 dark:hover:border-gray-600 dark:border-gray-700",
  },
  externalLink: "inline-flex items-center",
};

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: keyof typeof styles.variant;
}

// eslint-disable-next-line react/display-name
const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { href, target, className, variant = "default", children, ...props },
    ref
  ) => {
    const externalLink = target === "_blank";
    return (
      <a
        ref={ref}
        target={target}
        href={href}
        className={cn(
          styles.base,
          styles.variant[variant],
          { [styles.externalLink]: externalLink },
          className
        )}
        {...props}
      >
        {children}
        {externalLink ? <FiArrowUpRight className="w-4 h-4 ml-1" /> : null}
      </a>
    );
  }
);

export default Link;

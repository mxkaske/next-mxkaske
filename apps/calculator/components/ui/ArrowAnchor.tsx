import Link from "next/link";
import React from "react";
import cn from "classnames";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
} from "@heroicons/react/outline";

const styles = {
  base: "block p-2 rounded-full border",
  variant: {
    default:
      "border-gray-300 dark:text-white hover:border-gray-400 dark:hover:border-gray-600 dark:border-gray-700",
    invert: "border-transparent bg-gray-900 text-white",
  },
};

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  dir?: "left" | "right" | "done";
  variant?: keyof typeof styles.variant;
}

const ArrowAnchor = ({
  href,
  className,
  dir = "right",
  variant = "default",
  ...props
}: Props) => {
  return (
    <Link href={href}>
      <a
        className={cn(styles.base, styles.variant[variant], className)}
        {...props}
      >
        {dir === "left" ? (
          <ArrowLeftIcon className="h-5 w-5" />
        ) : dir === "right" ? (
          <ArrowRightIcon className="h-5 w-5" />
        ) : (
          <CheckIcon className="h-5 w-5" />
        )}
      </a>
    </Link>
  );
};

export default ArrowAnchor;

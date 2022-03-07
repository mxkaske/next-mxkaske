import * as React from "react";
import cn from "classnames";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {}

const Badge: React.FC<BadgeProps> = ({ children, className, ...props }) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:text-gray-100 dark:bg-gray-800",
        className
      )}
      {...props}
    >
      Badge
    </span>
  );
};

export default Badge;

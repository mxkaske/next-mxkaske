import * as React from "react";
import cn from "classnames";

const styles = {
  base: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:text-gray-100 dark:bg-gray-800",
};

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {}

const Badge: React.FC<BadgeProps> = ({ children, className, ...props }) => {
  return (
    <span className={cn(styles.base, className)} {...props}>
      {children}
    </span>
  );
};

export default Badge;

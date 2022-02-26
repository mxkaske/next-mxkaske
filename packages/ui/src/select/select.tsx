import * as React from "react";
import cn from "classnames";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select: React.FC<SelectProps> = ({ children, className, ...props }) => {
  return (
    <select
      className={cn(
        "text-black dark:text-white bg-transparent border-gray-300 hover:border-gray-400 dark:hover:border-gray-600 dark:border-gray-700 rounded-md",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
};

export default Select;

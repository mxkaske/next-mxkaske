import * as React from "react";
import cn from "classnames";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label: React.FC<LabelProps> = ({ children, className, ...props }) => {
  return (
    <label
      className={cn(
        "font-medium text-gray-700 dark:text-gray-400 mb-1",
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;

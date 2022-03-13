import * as React from "react";
import cn from "classnames";

const styles = {
  base: "focus:ring-indigo-500 h-4 w-4 text-gray-600 border-gray-300 rounded",
};

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = ({ className, ...props }: CheckboxProps) => {
  return (
    <input type="checkbox" className={cn(styles.base, className)} {...props} />
  );
};

export default Checkbox;

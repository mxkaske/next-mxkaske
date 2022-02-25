import * as React from "react";
import cn from "classnames";

export interface RangeProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Range: React.FC<RangeProps> = ({ children, className, ...props }) => {
  return <input type="range" className={cn("", className)} {...props} />;
};

export default Range;

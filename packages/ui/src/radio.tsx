import * as React from "react";

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Radio = ({ className, ...props }: RadioProps) => {
  return (
    <input type="radio" className="text-black dark:text-white" {...props} />
  );
};

export default Radio;

import * as React from "react";
import cn from "classnames";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const Text: React.FC<TextProps> = ({ children, className, ...props }) => {
  return (
    <p className={cn("mb-1", className)} {...props}>
      {children}
    </p>
  );
};

export default Text;

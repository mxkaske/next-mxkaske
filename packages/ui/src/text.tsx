import * as React from "react";
import cn from "classnames";

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {}

const Text: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <p className={cn("mb-1", className)} {...props}>
      {children}
    </p>
  );
};

export default Text;

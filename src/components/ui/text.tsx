import React, { FC, HTMLAttributes } from "react";
import cn from "classnames";

interface Props extends HTMLAttributes<HTMLParagraphElement> {}

const Text: FC<Props> = ({ children, className, ...props }) => {
  return (
    <p className={cn("mb-1", className)} {...props}>
      {children}
    </p>
  );
};

export default Text;

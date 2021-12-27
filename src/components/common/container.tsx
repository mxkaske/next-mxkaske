import React, { HTMLAttributes, ReactNode } from "react";
import cn from "classnames";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}
const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div className={cn(`mx-auto max-w-4xl p-4`, className)} {...props}>
      {children}
    </div>
  );
};

export default Container;

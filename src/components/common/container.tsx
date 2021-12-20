import React, { HTMLAttributes, ReactNode } from "react";
import cn from "classnames";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}
const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div className={cn(`mx-auto container p-4`, className)} {...props}>
      {children}
    </div>
  );
};

export default Container;

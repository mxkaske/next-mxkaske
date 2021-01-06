import React, { HTMLAttributes, ReactNode } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}
const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div className={`container mx-auto p-4 ${className || ""}`} {...props}>
      {children}
    </div>
  );
};

export default Container;

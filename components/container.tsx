import React, { HTMLAttributes, ReactNode } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}
const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <main className={`container mx-auto ${className || ""}`} {...props}>
      {children}
    </main>
  );
};

export default Container;

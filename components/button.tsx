import React, { HTMLAttributes, ReactNode } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label?: string;
  children?: ReactNode;
}
const Button = ({ children, label, ...props }: ButtonProps) => {
  return <button {...props}>{label || children}</button>;
};

export default Button;

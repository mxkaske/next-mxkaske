import React, { HTMLAttributes, ReactNode } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label?: string;
  children?: ReactNode;
  variant: "default" | "primary" | "secondary";
}
const Button = ({
  children,
  label,
  variant,
  className,
  ...props
}: ButtonProps) => {
  const btnVariant =
    variant === "primary"
      ? "btn-primary"
      : variant === "secondary"
      ? "btn-secondary"
      : "";
  return (
    <button className={`${btnVariant} ${className || ""}`} {...props}>
      {label || children}
    </button>
  );
};

Button.defaultProps = {
  variant: "default",
};

export default Button;

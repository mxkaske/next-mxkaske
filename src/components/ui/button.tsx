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
    <button
      className={`px-3 py-2 text-black bg-transparent border border-gray-300 rounded-md dark:text-white hover:border-gray-400 dark:hover:border-gray-600 dark:border-gray-700 ${
        className || ""
      }`}
      {...props}
    >
      {label || children}
    </button>
  );
};

Button.defaultProps = {
  variant: "default",
};

export default Button;

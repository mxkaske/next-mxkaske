import * as React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label?: string;
  children?: React.ReactNode;
  variant: "default" | "primary" | "secondary";
}
const Button = ({
  children,
  label,
  variant,
  className,
  ...props
}: ButtonProps) => {
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

import * as React from "react";
import cn from "classnames";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label?: string;
  children?: React.ReactNode;
  variant: "default" | "primary";
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
      className={cn(
        "px-3 py-2 text-black bg-transparent rounded-md dark:text-white",
        {
          "border border-gray-300 hover:border-gray-400 dark:hover:border-gray-600 dark:border-gray-700":
            variant === "default",
          "hover:bg-gray-50 dark:hover:bg-gray-900": variant === "primary",
        }
      )}
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

import * as React from "react";
import cn from "classnames";

const styles = {
  base: "px-3 py-2 border border-gray-300 rounded-md hover:border-gray-400 dark:hover:border-gray-600 dark:border-gray-700",
  variant: {
    default: "text-black dark:text-white bg-transparent",
    invert: "bg-gray-900 text-white",
  },
  rounded: "rounded-full",
};

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: keyof typeof styles.variant;
  rounded?: boolean;
}
const Button = ({
  children,
  label,
  className,
  variant = "default",
  rounded,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        styles.base,
        styles.variant[variant],
        { [styles.rounded]: rounded },
        className
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

import * as React from "react";
import cn from "classnames";

const styles = {
  base: "px-3 py-2 text-black bg-transparent border border-gray-300 rounded-md dark:text-white hover:border-gray-400 dark:hover:border-gray-600 dark:border-gray-700",
  rounded: "rounded-full",
};

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label?: string;
  children?: React.ReactNode;
  variant: "default" | "primary" | "secondary";
  rounded?: boolean;
}
const Button = ({
  children,
  label,
  variant,
  className,
  rounded,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.base, { [styles.rounded]: rounded }, className)}
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

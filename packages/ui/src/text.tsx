import * as React from "react";
import cn from "classnames";

const styles = {
  base: "mt-1",
  variant: {
    default: "",
    light: "text-gray-700 dark:text-gray-300 font-extralight",
  },
  italic: "italic",
};

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: keyof typeof styles.variant;
  italic?: boolean;
}

const Text: React.FC<TextProps> = ({
  children,
  variant = "default",
  className,
  italic,
  ...props
}) => {
  return (
    <p
      className={cn(
        styles.base,
        styles.variant[variant],
        italic && styles.italic,
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export default Text;

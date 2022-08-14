import * as React from "react";
import cn from "classnames";

export interface EmojiProps extends React.HTMLAttributes<HTMLSpanElement> {
  label?: string;
}

const Emoji: React.FC<EmojiProps> = ({
  label,
  className,
  children,
  ...props
}) => (
  <span
    className={cn(className)}
    role="img"
    aria-label={label ? label : ""}
    aria-hidden={label ? "false" : "true"}
    {...props}
  >
    {children}
  </span>
);
export default Emoji;

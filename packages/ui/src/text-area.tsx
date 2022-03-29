import * as React from "react";
import cn from "classnames";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

// eslint-disable-next-line react/display-name
const TextArea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn("p-2 rounded bg-transparent", className)}
        {...props}
      />
    );
  }
);

export default TextArea;

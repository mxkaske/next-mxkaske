import * as React from "react";
import cn from "classnames";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <textarea
      className={cn("p-2 rounded bg-transparent", className)}
      {...props}
    />
  );
};

export default TextArea;

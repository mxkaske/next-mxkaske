import React, { HTMLAttributes } from "react";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
  color?: string;
}

const Tag = ({ label, color, className, ...props }: TagProps) => {
  return (
    <span
      className={`bg-secondary-300 text-primary-600 text-xs rounded-full py-1 px-2 inline-block ${
        className || ""
      }`}
      {...props}
    >
      {label}
    </span>
  );
};

export default Tag;

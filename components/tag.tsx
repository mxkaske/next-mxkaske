import React, { HTMLAttributes } from "react";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
  color?: string;
}

const Tag = ({ label, color, className, onClick, ...props }: TagProps) => {
  return (
    <span
      className={`bg-secondary-300 text-primary-600 rounded-full py-1 px-2 inline-block ${
        onClick && "cursor-pointer hover:shadow-md"
      } ${className || ""}`}
      onClick={onClick}
      {...props}
    >
      {label}
    </span>
  );
};

interface TagCollectionProps extends HTMLAttributes<HTMLParagraphElement> {
  tags: TagProps[];
}

const TagCollection = ({ tags, ...props }: TagCollectionProps) => {
  return (
    <p {...props}>
      {tags.map((tag, index) => (
        <Tag key={index} {...tag} className={"mr-1 mb-1"} />
      ))}
    </p>
  );
};

export default Tag;
export { TagCollection };

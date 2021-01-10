import React, { HTMLAttributes } from "react";
import Tag, { TagProps } from "./tag";

export interface ThumbnailProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  annotation?: string;
  img?: {
    source: string;
    height: number;
    width: number;
  };
  link?: {
    label: string;
    href: string;
  };
  tags?: TagProps[];
}

const Thumbnail = ({
  title,
  description,
  annotation,
  img,
  tags,
  link,
  className,
  ...props
}: ThumbnailProps) => {
  return (
    <div
      className={`flex flex-col w-full md:w-(1/2-8) m-4 rounded-xl p-4 hover:shadow-xl ${
        className || ""
      }`}
      {...props}
    >
      <div className="flex-1">
        <h2>{title}</h2>
        <p>{description}</p>
        <p className="text-danger-700">{annotation}</p>
        <p className="my-2">
          {tags.map((tag, index) => (
            <Tag key={index} className={"mr-2 mb-1"} {...tag} />
          ))}
        </p>
      </div>
      <a href={link.href} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    </div>
  );
};

export default Thumbnail;

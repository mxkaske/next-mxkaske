import React, { HTMLAttributes } from "react";
import Tag, { TagProps } from "./tag";

export interface ThumbnailProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
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
  subtitle,
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
        <h4>{subtitle}</h4>
        <p>{description}</p>
        <p className="text-danger-400">{annotation}</p>
        <p className="my-2">
          {tags.map((tag, index) => (
            <Tag
              key={index}
              className={`${index !== tags.length && "mr-2"}`}
              {...tag}
            />
          ))}
        </p>
      </div>
      <a href={link.href} target="_blank">
        {link.label}
      </a>
    </div>
  );
};

export default Thumbnail;

import React, { HTMLAttributes } from "react";
import Tag, { TagCollection, TagProps } from "../ui/tag";

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
        <p className="text-red-700 dark:text-red-300">{annotation}</p>
        <TagCollection tags={tags} className="my-2" />
      </div>
      <a href={link.href} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    </div>
  );
};

export default Thumbnail;

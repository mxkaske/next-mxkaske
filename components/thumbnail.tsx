import React, { HTMLAttributes } from "react";
import Tag, { TagProps } from "./tag";

export interface ThumbnailProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  img?: {
    source: string;
    height: number;
    width: number;
  };
  tags?: TagProps[];
}

const Thumbnail = ({
  title,
  description,
  img,
  tags,
  className,
  ...props
}: ThumbnailProps) => {
  const aspectRatio = img.width / img.height;
  return (
    <div
      // flex flex-col flex-1 lg:flex-row
      className={`w-full lg:w-(1/2-8) m-4 ${className || ""}`}
      {...props}
    >
      <div className="flex flex-col rounded-3xl border border-primary-300 overflow-hidden">
        <img src={img.source} />
        <div className="p-4">
          <h2>{title}</h2>
          <p>{description}</p>
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
      </div>
    </div>
  );
};

export default Thumbnail;

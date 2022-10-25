import { Post } from ".contentlayer/generated";
import format from "date-fns/format";
import React from "react";
import { Text } from "ui";

interface Props {
  post: Post;
  views: number;
}

const Details = ({ post, views }: Props) => {
  return (
    <Text className="text-sm italic font-light text-gray-600 dark:text-gray-400">
      <time>{format(new Date(post.date), "do MMMM yyyy")}</time>
      <span aria-hidden="true" className="mx-1">
        &middot;
      </span>
      <span>{post.readingTime}</span>
      <span aria-hidden="true" className="mx-1">
        &middot;
      </span>
      <span>{views} views</span>
    </Text>
  );
};

export default Details;

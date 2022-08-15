import { Post } from ".contentlayer/generated";
import format from "date-fns/format";
import React from "react";
import { Text } from "ui";

interface Props {
  post: Post;
}

const Details = ({ post }: Props) => {
  return (
    <Text className="text-sm italic font-light text-gray-600 dark:text-gray-400">
      <time>{format(new Date(post.date), "do MMMM yyyy")}</time>
      <span aria-hidden="true" className="mx-1">
        &middot;
      </span>
      <span>{post.readingTime}</span>
    </Text>
  );
};

export default Details;

"use client";

import { allPosts } from ".contentlayer/generated";
import { use } from "react";
import { Text } from "ui";
import Details from "@/components/blog/details";
import LinkBox from "@/components/common/link-box";

const getPosts = async () => {
  const posts = allPosts.sort((a, b) =>
    new Date(a.date) < new Date(b.date) ? 1 : -1
  );
  return posts;
};

const Blog = () => {
  const posts = use(getPosts());
  return (
    <ul role="list" className="pt-6 pb-16 space-y-6">
      {posts.map((post) => (
        <li key={post.slug}>
          <LinkBox href={`/writing/${post.slug}`} title={post.title}>
            <Text className="text-gray-600 dark:text-gray-400">
              {post.excerpt}
            </Text>
            <Details post={post} />
          </LinkBox>
        </li>
      ))}
    </ul>
  );
};

export default Blog;

import { allPosts } from ".contentlayer/data";
import { InferGetStaticPropsType } from "next";
import React from "react";
import { Text } from "ui";
import Layout from "@/components/common/layout";
import Details from "@/components/blog/details";
import LinkBox from "@/components/common/link-box";

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
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
    </Layout>
  );
};

export const getStaticProps = async () => {
  const posts = allPosts
    .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1))
    .map((post) => post);
  return { props: { posts } };
};

export default Blog;

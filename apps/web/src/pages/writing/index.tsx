import { allPosts } from ".contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import React from "react";
import { Text } from "ui";
import Layout from "@/components/common/layout";
import Details from "@/components/blog/details";
import LinkBox from "@/components/common/link-box";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <ul role="list" className="pt-6 pb-16 space-y-6">
        {posts.map(({ post, views }) => (
          <li key={post.slug}>
            <LinkBox href={`/writing/${post.slug}`} title={post.title}>
              <Text className="text-gray-600 dark:text-gray-400">
                {post.excerpt}
              </Text>
              <Details post={post} views={views} />
            </LinkBox>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const keys = allPosts.map(({ slug }) => `views:${slug}`);
  const allViews = (await redis.mget(...keys)) as (number | null)[];
  const posts = allPosts
    .map((post, i) => ({ post, views: allViews[i] || 0 }))
    .sort((a, b) => (new Date(a.post.date) < new Date(b.post.date) ? 1 : -1));
  return { props: { posts }, revalidate: 60 };
};

export default Blog;

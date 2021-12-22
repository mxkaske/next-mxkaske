import { allPosts } from ".contentlayer/data";
import { InferGetStaticPropsType } from "next";
import React from "react";
import Text from "@/components/ui/text";
import Layout from "@/components/common/layout";
import Details from "@/components/blog/details";
import LinkBox from "@/components/common/link-box";

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <ul role="list" className="py-16 space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <LinkBox href={`/blog/${post.slug}`} title={post.title}>
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
  const posts = allPosts.map((post) => post);
  return { props: { posts } };
};

export default Blog;

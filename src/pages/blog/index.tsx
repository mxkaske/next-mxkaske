import { allPosts } from ".contentlayer/data";
import NavBar from "@/components/navigation/navbar";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import React from "react";
import { format } from "date-fns";
import Container from "@/components/common/container";
import Text from "@/components/ui/text";

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <NavBar />
      <Container className="lg:max-w-4xl">
        <ul role="list" className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <a className="block p-3 -m-3 rounded-md group hover:bg-gray-50 dark:hover:bg-neutral-800">
                  <div className="grid sm:grid-cols-3">
                    <Text className="sm:col-span-2">{post.title}</Text>
                    <Text className="order-last mb-1 text-sm italic text-left text-gray-600 align-baseline sm:order-none sm:text-right sm:col-span-1 dark:text-gray-400">
                      <time>{format(new Date(post.date), "do MMMM yyyy")}</time>
                    </Text>
                    <Text className="text-gray-600 col-span-full dark:text-gray-400">
                      {post.excerpt}
                    </Text>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = allPosts.map((post) => post);
  return { props: { posts } };
};

export default Blog;

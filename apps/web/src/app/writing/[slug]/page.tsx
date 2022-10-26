"use client";

import { use } from "react";
import { allPosts } from ".contentlayer/generated";
import type { Post } from ".contentlayer/generated";
import Details from "@/components/blog/details";
import { NextSeo } from "next-seo";

export async function generateStaticParams() {
  const posts = allPosts;

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const getPost = async (slug: string) => {
  const post = allPosts.find((post) => post.slug === slug);
  return post;
};

export default function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = use(getPost(slug));
  return (
    <>
      <NextSeo title={post.title} description={post.excerpt} />
      <Details post={post} />
      <div
        className="pt-6 pb-16 prose dark:prose-invert prose-a:decoration-gray-500 hover:prose-a:decoration-black dark:hover:prose-a:decoration-white prose-img:rounded-md prose-blockquote:rounded prose-em:text-gray-900 dark:prose-em:text-white prose-em:font-light"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </>
  );
}

import { allPosts } from ".contentlayer/generated";
import type { Post } from ".contentlayer/generated";
import Details from "@/components/blog/details";
import Layout from "@/components/common/layout";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Redis } from "@upstash/redis";
import React from "react";

const redis = Redis.fromEnv();

// https://github.com/upstash/upstash-redis/issues/216#issuecomment-1280636588
// atob has been introduced only in node 16.x
// make sure vercel is running on node 16.x!
if (typeof atob === "undefined") {
  global.atob = function (b64: string) {
    return Buffer.from(b64, "base64").toString("utf-8");
  };
}

// Components
import VariableColorPicker from "@/components/examples/VariableColorPicker";

const components = {
  VariableColorPicker,
};

export default function Post({
  post,
  views,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const Component = useMDXComponent(post.body.code);
  React.useEffect(() => {
    fetch(`/api/views/${post.slug}`, { method: "PATCH" });
  }, [post.slug]);
  return (
    <Layout>
      <NextSeo title={post.title} description={post.excerpt} />
      <Details post={post} views={views} />
      <div
        className="pt-6 pb-16 prose dark:prose-invert prose-a:decoration-gray-500 hover:prose-a:decoration-black dark:hover:prose-a:decoration-white prose-img:rounded-md prose-blockquote:rounded prose-em:text-gray-900 dark:prose-em:text-white prose-em:font-light"
        // dangerouslySetInnerHTML={{ __html: post.body.html }}
      >
        <Component components={components} />
      </div>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const slug = context.params.slug as string;
  const views = ((await redis.get(`views:${slug}`)) || 0) as number;
  console.log({ slug, views });
  const post = allPosts.find((post) => post.slug === slug);
  return { props: { post, views } }; // -> revalidate will be done in API route
};

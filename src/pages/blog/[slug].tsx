import { allPosts } from ".contentlayer/data";
import type { Post } from ".contentlayer/types";
import Layout from "@/components/common/layout";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

export default function Post({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <div
        className="mx-auto prose dark:prose-invert hover:prose-a:no-underline prose-img:rounded-md prose-blockquote:rounded prose-em:text-gray-900 dark:prose-em:text-white"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </Layout>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const post = allPosts.find((post) => post.slug === params.slug);
  return { props: { post } };
};

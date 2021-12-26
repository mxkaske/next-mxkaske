import { allPosts } from ".contentlayer/data";
import type { Post } from ".contentlayer/types";
import Details from "@/components/blog/details";
import Layout from "@/components/common/layout";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

export default function Post({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Details post={post} />
      <div
        className="py-16 prose dark:prose-invert prose-a:decoration-gray-500 hover:prose-a:decoration-black dark:hover:prose-a:decoration-white prose-img:rounded-md prose-blockquote:rounded prose-em:text-gray-900 dark:prose-em:text-white prose-em:font-light"
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

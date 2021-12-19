import { allPosts } from ".contentlayer/data";
import type { Post } from ".contentlayer/types";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

export default function Post({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="container p-4 mx-auto">
      <div
        className="prose dark:prose-invert hover:prose-a:no-underline marker:prose-ul:text-indigo-500 dark:prose-ul:text-gray-300 prose-ul:text-gray-700 prose-img:rounded-md prose-blockquote:border-indigo-500 prose-blockquote:rounded"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: allPosts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const post = allPosts.find((post) => post.slug === params.slug);
  return { props: { post } };
}

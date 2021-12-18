import { allPosts } from ".contentlayer/data";
import type { Post } from ".contentlayer/types";
import { InferGetStaticPropsType } from "next";

export default function Post({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <h1>{post.slug}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </div>
  );
}

export async function getStaticPaths() {
  console.log(allPosts);
  return {
    paths: allPosts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => post.slug === params.slug);
  return { props: { post } };
}

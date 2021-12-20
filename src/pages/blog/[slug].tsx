import { allPosts } from ".contentlayer/data";
import type { Post } from ".contentlayer/types";
import Container from "@/components/common/container";
import NavBar from "@/components/navigation/navbar";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

export default function Post({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NavBar />
      <Container>
        <div
          className="mx-auto prose dark:prose-invert hover:prose-a:no-underline prose-img:rounded-md prose-blockquote:rounded prose-em:text-gray-900 dark:prose-em:text-white"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </Container>
    </>
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

import { allPosts } from ".contentlayer/generated";
import type { Post } from ".contentlayer/generated";
import Details from "@/components/blog/details";
import Layout from "@/components/common/layout";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import { useMDXComponent } from "next-contentlayer/hooks";

// Components
import VariableColorPicker from "@/components/examples/VariableColorPicker";

const components = {
  VariableColorPicker,
};

export default function Post({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const Component = useMDXComponent(post.body.code);
  return (
    <Layout>
      <NextSeo title={post.title} description={post.excerpt} />
      <Details post={post} />
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

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const post = allPosts.find((post) => post.slug === params.slug);
  return { props: { post } };
};

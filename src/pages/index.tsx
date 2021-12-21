import Stack from "@/components/home/stack";
import Heading from "@/components/ui/heading";
import stackConfig from "@/config/home";
import { allPosts } from ".contentlayer/data";
import { InferGetStaticPropsType } from "next";
import Layout from "@/components/common/layout";

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <div className="max-w-3xl py-6">
        <Heading>
          I'm a Software Developer interested in developer pattern, user
          experience, design systems.
        </Heading>
        <Heading>
          Building. Thinking about projects, team communication.
        </Heading>
      </div>
      <div className="grid gap-8 py-16 sm:grid-cols-2 md:grid-cols-3">
        <Stack
          title="Writing"
          items={posts.map((post) => ({
            title: post.title,
            description: post.excerpt,
            href: `/blog/${post.slug}`,
          }))}
        />
        {Object.keys(stackConfig).map((key) => (
          <Stack key={key} {...stackConfig[key]} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => (a.date > b.date ? 1 : -1)).slice(0, 3);
  return { props: { posts } };
}

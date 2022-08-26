import type { Item } from "@/components/home/stack";
import { allPosts } from ".contentlayer/generated";

const lastThreePosts = allPosts
  .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1))
  .slice(0, 3);

type Stack = {
  title: string;
  items: Item[];
};

// next possibe stack: thinking (or prototyping, ideas corner)
// adding ideas to the game

const stackConfig: Record<string, Stack> = {
  writing: {
    title: "Writing",
    items: lastThreePosts.map((post) => ({
      title: post.title,
      description: post.excerpt,
      href: `/writing/${post.slug}`,
    })),
  },
  building: {
    title: "Building",
    items: [
      {
        href: "https://precycle.today",
        title: "Precycle",
        description: "Co-Founder, building a plastic credit system.", // TODO: change
      },
      {
        href: "https://leila.de",
        title: "Leila",
        description:
          "Knowledge for everyday clinical practice - a Guideline App.",
      },
      {
        href: "https://coronavis.de",
        title: "Corona Visualization (Hackathon)",
        description: "Simulate the spread of infectious deseases.",
      },
    ],
  },
  // following: {
  //   title: "Following",
  //   items: [
  //     {
  //       href: "https://twitter.com/leerob",
  //       title: "Leerob",
  //       description: "Awsome guy. Learning from his open source website.",
  //     },
  //   ],
  // },
  openSourcing: {
    title: "Open Source",
    items: [
      {
        href: "https://github.com/mxkaske/next-mxkaske",
        title: "mxkaske.dev",
        description: "My playground for new design and code patterns.",
      },
      {
        href: "https://github.com/mxkaske/qwk.st",
        title: "qwk.st",
        description: "The quickest linktr.ee alternative. Claim your username.",
      },
    ],
  },
  community: {
    title: "Community",
    items: [
      {
        href: "https://twitter.com/mxkaske",
        title: "Twitter",
      },
      {
        href: "https://github.com/mxkaske",
        title: "Github",
      },
      {
        href: "https://www.linkedin.com/in/maximilian-kaske-262227202/",
        title: "LinkedIn",
      },
    ],
  },
};

export default stackConfig;

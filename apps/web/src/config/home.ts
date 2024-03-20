import type { Item } from "@/components/home/stack";
import { allPosts } from ".contentlayer/generated";

const lastThreePosts = allPosts
  .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1))
  .slice(0, 3);

// next possibe stack: thinking (or prototyping, ideas corner)
// adding ideas to the game

const stackConfig = {
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
        href: "https://www.openstatus.dev",
        title: "OpenStatus",
        description: "Co-Founder, opensource synthetic monitoring.", // TODO: change
      },
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
        href: "https://coronavis.vercel.app",
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
        title: "qwk.st", // TODO: use .vercel domain
        description: "The quickest linktr.ee alternative. Claim your username.",
      },
      {
        href: "https://github.com/mxkaske/fast-forward",
        title: "fast-forward.app",
        description: "The easiest way to collect Feedback.",
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
        href: "https://www.linkedin.com/in/mxkaske/",
        title: "LinkedIn",
      },
    ],
  },
} as const;

// FIXME: recursively set readonly!
const _check: Readonly<
  Record<Readonly<string>, Readonly<{ title: string; items: Readonly<Item[]> }>>
> = stackConfig;

export default stackConfig;

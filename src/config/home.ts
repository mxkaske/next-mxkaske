import type { Item } from "@/components/home/stack";

type Stack = {
  title: string;
  items: Item[];
};

// next possibe stack: thinking (or prototyping, ideas corner)
// adding ideas to the game

const stackConfig: Record<string, Stack> = {
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
  following: {
    title: "Following",
    items: [
      {
        href: "https://twitter.com/peduarte",
        title: "pedro",
        description: "Aswome for UI/UX improvements.",
      },
      {
        href: "https://twitter.com/leerob",
        title: "Leerob",
        description:
          "Awsome guy, learning from his open source website is dope.",
      },
    ],
  },
  openSourcing: {
    title: "Open Source",
    items: [
      {
        href: "https://github.com/maximiliankaske/next-mxkaske",
        title: "mxkaske.dev",
        description:
          "My playground for new design and implementation patterns.",
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
        href: "https://github.com/maximiliankaske",
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

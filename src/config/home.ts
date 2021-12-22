import type { Item } from "@/components/home/stack";

type Stack = {
  title: string;
  items: Item[];
};

const stackConfig: Record<string, Stack> = {
  // DISCUSS: if using 'writing' here, we could define the order
  // writing: {
  //   title: "Writing",
  //   items: [],
  // },
  building: {
    title: "Building",
    items: [
      {
        href: "https://leila.de",
        title: "Leila",
        description: "First employer. First real world application.", // TODO: change
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
        description: "Aswome for UI/UX improvements",
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
    title: "Open Sourcing",
    items: [
      {
        href: "https://github.com/maximiliankaske/next-mxkaske",
        title: "mxkaske.dev",
        description:
          "My personal experimentation for new design and implementation patterns",
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

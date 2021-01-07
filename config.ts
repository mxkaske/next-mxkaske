import { TagProps, ThumbnailProps } from "./components";
import faker from "faker";

export const thumbnails: ThumbnailProps[] = [
  {
    title: "Hello World!",
    description: faker.lorem.paragraphs(2),
    img: {
      source: faker.image.nature(),
      height: 400,
      width: 400,
    },
    tags: [
      {
        label: "hello",
      },
      {
        label: "world",
      },
    ],
  },
  {
    title: "Hello World!",
    description: faker.lorem.paragraph(2),
    img: {
      source: faker.image.business(),
      height: 400,
      width: 400,
    },
    tags: [
      {
        label: "hello",
      },
      {
        label: "world",
      },
    ],
  },
  {
    title: "Hello World!",
    description: faker.lorem.paragraph(2),
    img: {
      source: faker.image.business(),
      height: 400,
      width: 400,
    },
    tags: [
      {
        label: "hello",
      },
      {
        label: "world",
      },
    ],
  },
];

type TechStackProps = {
  web: TagProps[];
  mobile: TagProps[];
  backend: TagProps[];
};

export const techStack: TechStackProps = {
  mobile: [
    {
      label: "react-native",
      onClick: () => window.open("https://reactnative.dev/", "_blank"),
    },
    {
      label: "expo",
      onClick: () => window.open("https://expo.io/", "_blank"),
    },
    {
      label: "redux",
      onClick: () => window.open("https://redux.js.org/", "_blank"),
    },
    {
      label: "@shopify/restyle",
      onClick: () =>
        window.open("https://github.com/Shopify/restyle", "_blank"),
    },
    {
      label: "swmansion's stack",
      onClick: () =>
        window.open("https://swmansion.com/community/open-source/", "_blank"),
    },
  ],
  web: [
    {
      label: "react",
      onClick: () => window.open("https://reactjs.org/", "_blank"),
    },
    {
      label: "react-query",
      onClick: () => window.open("https://react-query.tanstack.com/", "_blank"),
    },
    {
      label: "nextjs",
      onClick: () => window.open("https://nextjs.org/", "_blank"),
    },
    {
      label: "tailwindcss",
      onClick: () => window.open("https://tailwindcss.com/", "_blank"),
    },
    {
      label: "framer",
      onClick: () =>
        window.open("https://www.framer.com/api/motion/", "_blank"),
    },
  ],
  backend: [
    {
      label: "4D",
      onClick: () => window.open("https://developer.4d.com/docs/"),
    },
    {
      label: "NodeJS",
      onClick: () => window.open("https://nodejs.org/en/", "_blank"),
    },
  ],
};

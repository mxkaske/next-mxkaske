import { TagProps, ThumbnailProps } from "./components";
import faker from "faker";

export const thumbnails: ThumbnailProps[] = [
  {
    title: "Leila PRO",
    description:
      "Leila creates a horizontal access to guidelines that is suitable for everyday use. It is backed up and linked with scores, pathways, glossaries, epidemiological data and other reliable knowledge. Interdisciplinary and optimised for the condensed everyday work in the health sector. Knowledge in the palm of your hand. Accessible as App or WebApp.",
    tags: [
      {
        label: "react-native",
      },
      {
        label: "react-native-web",
      },
    ],
    link: {
      label: "to leila.de",
      href: "http://leila.de",
    },
  },
  {
    title: "ASH Quiz",
    description:
      "Familiar instructions for action in relation to medical activities, such as handling infusions and vascular access, were taken up and incorporated into an exciting quiz.",
    tags: [
      {
        label: "react-native",
      },
    ],
    link: {
      label: "to the App Store",
      href:
        "https://apps.apple.com/de/app/aktion-saubere-hände-quiz/id1509515197",
    },
  },
  {
    title: "Contact / Diary",
    description:
      "The Contact / Diary will make it easier for you to keep on track as to who you ́ve met with when and where.",
    annotation:
      "Has never been released due to App Store Covid-19 App restrictions.",
    tags: [
      {
        label: "react-native",
      },
    ],
    link: {
      label: "to the GitLab repository",
      href: "https://gitlab.com/mchapen/contact-diary",
    },
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
      label: "react-native-web",
      onClick: () =>
        window.open(
          "http://necolas.github.io/react-native-web/docs/?path=/docs/overview-getting-started--page",
          "_blank"
        ),
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

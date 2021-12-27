import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  title: "Maximilian Kaske",
  description: "Playground for code and design.",
  openGraph: {
    type: "website",
    url: "https://maxkaske.dev",
    site_name: "mxkaske",
    images: [
      {
        url: "/assets/meta/default.png",
        width: 600,
        height: 314,
        alt: "mxkaske",
      },
    ],
  },
};

export default config;

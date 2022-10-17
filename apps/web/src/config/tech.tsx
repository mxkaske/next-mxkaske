import type { Item } from "@/components/home/stack";

const techConfig = {
  code: {
    title: "Code",
    items: [
      {
        href: "https://reactjs.org",
        title: "React",
      },
      {
        href: "https://nextjs.org",
        title: "Next.js",
      },
      {
        href: "http://typescriptlang.org/",
        title: "Typescript",
      },
      {
        href: "https://tailwindcss.com",
        title: "Tailwind CSS",
      },
      {
        href: "https://prisma.io",
        title: "Prisma",
      },
      {
        href: "http://turborepo.org",
        title: "Turborepo",
      },
    ],
  },
  serverless: {
    title: "Serverless",
    items: [
      {
        href: "https://vercel.com",
        title: "Vercel",
      },
      {
        href: "http://upstash.com",
        title: "Upstash",
      },
      {
        href: "http://planetscale.com",
        title: "Planetscale",
      },
    ],
  },
  collaboration: {
    title: "Collaboration",
    items: [
      {
        href: "https://slack.com",
        title: "Slack",
      },
      {
        href: "http://notion.so",
        title: "Notion",
      },
      {
        href: "http://github.com",
        title: "GitHub",
      },
    ],
  },
  mac: {
    title: "macOS",
    items: [
      {
        href: "http://vscode.dev",
        title: "Visual Studio Code",
      },
      {
        href: "https://cleanshot.com",
        title: "CleanShot X",
      },
      {
        href: "http://grammarly.com",
        title: "Grammarly",
      },
      {
        href: "https://www.gitkraken.com",
        title: "GitKraken",
      },
    ],
  },
} as const;

// FIXME: recursively set readonly!
const _check: Readonly<
  Record<Readonly<string>, Readonly<{ title: string; items: Readonly<Item[]> }>>
> = techConfig;

export default techConfig;

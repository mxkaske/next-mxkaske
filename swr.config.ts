import fetcher from "@/utils/fetcher";
import { SWRConfiguration } from "swr";

export const COMMIT_SHA =
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA ||
  process.env.NEXT_PUBLIC_FIRST_COMMIT_SHA;

const swrConfig: SWRConfiguration = {
  fetcher,
  fallback: {
    [`/api/github/commit/${COMMIT_SHA}`]: {
      data: {
        message: "missing commit",
        author: {
          date: new Date(),
        },
        html_url: "https://github.com/maximiliankaske/next-website",
      },
    },
  },
};

export default swrConfig;

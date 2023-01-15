import { NextRequest, NextFetchEvent, NextResponse } from "next/server";
import { redis } from "./lib/upstash";

const PATTERNS = [
  [
    // @ts-ignore cannot find ts type
    new URLPattern({ pathname: "/writing/:slug" }),
    ({ pathname }) => pathname.groups,
  ],
];

const params = (url: string) => {
  const input = url.split("?")[0];
  let result = {};

  for (const [pattern, handler] of PATTERNS) {
    const patternResult = pattern.exec(input);
    if (patternResult !== null && "pathname" in patternResult) {
      result = handler(patternResult);
      break;
    }
  }
  return result;
};

const handler = (req: NextRequest) => {
  try {
    // BEFORE: missing `slug` on fresh first page load (e.g. refresh)
    // const slug = req.nextUrl.searchParams.get("slug");
    // AFTER:
    const { slug } = params(req.url) as { slug?: string };
    const purpose = req.headers.get("Purpose");

    console.log({ slug, purpose, method: req.method });

    if (!!slug && purpose !== "prefetch") {
      redis.incr(`views:${slug}`);
    }
  } catch (e) {
    console.error(e);
  } finally {
    return NextResponse.next();
  }
};

export const config = {
  matcher: "/writing/:slug*",
};

export default handler;

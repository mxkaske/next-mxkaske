import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

const redis = Redis.fromEnv();

const handler = (req: NextRequest) => {
  // REMINDER: this will also allow pathnames like `/writing/unknown-path`.
  // To avoid that, we could find the allPosts post.flattendPath that matches the slug.
  if (req.nextUrl.pathname.startsWith("/writing/")) {
    const slug = req.nextUrl.searchParams.get("slug");
    // FIXME:
    console.log({ nextUrl: req.nextUrl, slug });
    if (!!slug) {
      redis.incr(`views:${slug}`);
    }
  }
  return NextResponse.next();
};

export default handler;

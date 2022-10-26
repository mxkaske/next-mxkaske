import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

// REMINDER: if not solving the issue: useEffect once on CSR and add an api/views/[slug] route to redis.incr.

const redis = Redis.fromEnv();

const handler = (req: NextRequest) => {
  try {
    const slug = req.nextUrl.searchParams.get("slug");
    console.log({ slug, nextUrl: req.nextUrl.searchParams.getAll });
    // FIXME:
    if (!!slug) {
      console.log(slug);
      redis.incr(`views:${slug}`);
    }
  } catch (e) {
    console.error(e);
  }
  // return NextResponse.next();
};

export const config = {
  matcher: "/writing/:slug*",
};

export default handler;

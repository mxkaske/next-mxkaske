import { Redis } from "@upstash/redis";
import { NextRequest, NextFetchEvent, NextResponse } from "next/server";

const redis = Redis.fromEnv();

const handler = (req: NextRequest) => {
  try {
    const slug = req.nextUrl.searchParams.get("slug");

    const purpose = req.headers.get("Purpose");

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

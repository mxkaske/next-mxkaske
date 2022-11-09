import { Redis } from "@upstash/redis";
import { NextRequest, NextFetchEvent, NextResponse } from "next/server";

// REMINDER: if not solving the issue: useEffect once on CSR and add an api/views/[slug] route to redis.incr.

const redis = Redis.fromEnv();

const handler = (req: NextRequest, event: NextFetchEvent) => {
  try {
    const slug = req.nextUrl.searchParams.get("slug");
    console.log({
      slug,
      purpose: req.headers.get("purpose"),
      headers: req.headers,
    });
    // FIXME:
    if (!!slug) {
      // event.waitUntil(
      //   (async () => {
      //     console.log(slug);
      //     redis.incr(`views:${slug}`);
      //   })()
      // );
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

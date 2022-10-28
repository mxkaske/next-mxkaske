import { NextApiRequest, NextApiResponse } from "next";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case "PATCH":
        const slug = req.query.slug as string;
        redis.incr(`views:${slug}`);
        res.revalidate(`/writing/${slug}`);
        return res.status(200).end();
      default:
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export default handler;

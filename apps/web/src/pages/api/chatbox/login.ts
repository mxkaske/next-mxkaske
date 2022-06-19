import { withSessionRoute } from "@/lib/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const { password } = req.body;
  try {
    if (password === process.env.ADMIN_PASSWORD) {
      const user = { isLoggedIn: true };
      req.session.user = user;
      await req.session.save();
      res.status(200).json(user);
    } else {
      res.status(403).end("forbidden");
    }
  } catch (error) {
    res.status(500).json({ error });
  }
}

export default withSessionRoute(loginRoute);

import octokit from "@/lib/octokit";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { sha } = req.query as { sha: string };
    switch (req.method) {
      case "GET":
        const response = await octokit.rest.git.getCommit({
          owner: "mxkaske",
          repo: "next-mxkaske",
          commit_sha: sha,
        });
        return res.status(200).json(response);
      default:
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export default handler;

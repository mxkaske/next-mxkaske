import { NextApiRequest, NextApiResponse } from "next";

// EXAMPLE: of how to access the commit history for a path/to/file!

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { path } = req.query as { path: string | string[] };
    console.log(path);
    switch (req.method) {
      case "GET":
        const commitsResponse = await fetch(
          `https://api.github.com/repos/mxkaske/next-mxkaske/commits?sha=main&path=${path}`,
          {
            method: "GET",
            headers: new Headers({ "Content-Type": "application/json" }),
          }
        );
        const commits = await commitsResponse.json();
        return res.status(200).json(commits);
      default:
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export default handler;
